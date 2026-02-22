'use client';
import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';

const PROJECT_PHOTOS = [
  '/dome.JPG',
  '/HTV.png',
  '/IMG_8849%20(1).jpg',
  '/Screenshot%202025-10-07%20234209.png',
  '/worldfinals.jpg',
  '/cover.jpg',
  '/image%20(1).png',
  '/DSC_0376.JPG',
  '/DSC_0456.JPG',
  '/image0.jpg',
  '/Screenshot%202026-01-20%20062036.png',
  '/Screenshot%202026-01-20%20062431.png',
  '/Screenshot%202026-01-21%20171602.png',
  '/IMG_9585%20(1).jpg',
];

// Preset positions — one per photo, spread across a 4×4 grid with hand-tuned
// jitter. No Math.random() means zero runtime cost and a stable layout.
// Each entry: { left (vw), top (vh), wVw, hVh, rotation (deg),
//               floatY (px), floatDur (s), opacity, delay (s) }
const PHOTO_PROPS = [
  { left:  2.2, top: 11.6, wVw: 14.5, hVh:  9.7, rotation:  -8, floatY: -12, floatDur: 7.0, opacity: 0.22, delay: 0.10 },
  { left: 34.9, top:  4.4, wVw: 15.2, hVh: 10.2, rotation:   6, floatY:  -9, floatDur: 5.5, opacity: 0.18, delay: 0.30 },
  { left: 50.5, top: 13.2, wVw: 16.0, hVh: 10.7, rotation: -12, floatY: -14, floatDur: 8.0, opacity: 0.25, delay: 0.05 },
  { left: 83.8, top:  3.0, wVw: 13.5, hVh:  9.0, rotation:   9, floatY: -11, floatDur: 6.0, opacity: 0.20, delay: 0.40 },
  { left: 11.6, top: 28.2, wVw: 15.8, hVh: 10.6, rotation:  -5, floatY:  -8, floatDur: 7.5, opacity: 0.15, delay: 0.20 },
  { left: 49.5, top: 37.8, wVw: 14.0, hVh:  9.4, rotation:  11, floatY: -15, floatDur: 5.0, opacity: 0.28, delay: 0.45 },
  { left: 74.3, top: 30.0, wVw: 16.5, hVh: 11.1, rotation: -14, floatY: -10, floatDur: 9.0, opacity: 0.22, delay: 0.15 },
  { left:  9.6, top: 51.9, wVw: 13.8, hVh:  9.2, rotation:   7, floatY: -13, floatDur: 6.5, opacity: 0.19, delay: 0.35 },
  { left: 35.8, top: 61.3, wVw: 15.5, hVh: 10.4, rotation:  -9, floatY:  -7, floatDur: 8.5, opacity: 0.24, delay: 0.10 },
  { left: 73.1, top: 52.6, wVw: 14.8, hVh:  9.9, rotation:  13, floatY: -16, floatDur: 7.0, opacity: 0.17, delay: 0.50 },
  { left:  9.4, top: 75.1, wVw: 16.2, hVh: 10.9, rotation: -11, floatY:  -9, floatDur: 6.0, opacity: 0.21, delay: 0.25 },
  { left: 26.4, top: 82.0, wVw: 14.2, hVh:  9.5, rotation:   5, floatY: -12, floatDur: 5.5, opacity: 0.26, delay: 0.40 },
  { left: 58.0, top: 76.5, wVw: 15.0, hVh: 10.1, rotation:  -7, floatY: -11, floatDur: 8.0, opacity: 0.18, delay: 0.15 },
  { left: 77.9, top: 80.0, wVw: 13.2, hVh:  8.8, rotation:  10, floatY: -14, floatDur: 7.0, opacity: 0.23, delay: 0.30 },
];

const LightRays = dynamic(() => import('@/components/LightRays'), { ssr: false });

const TARGET = '(building robots for the US military)';
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&';

function RedactedText() {
  const [text, setText] = useState('');
  const [revealed, setRevealed] = useState(false);
  const intervalRef = useRef(null);
  const iterRef = useRef(0);

  const scramble = () =>
    setText(TARGET.split('').map(() => CHARS[Math.floor(Math.random() * CHARS.length)]).join(''));

  const startScramble = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(scramble, 60);
  };

  const reveal = () => {
    if (revealed) return;
    setRevealed(true);
    iterRef.current = 0;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      iterRef.current += 1;
      const locked = Math.floor(iterRef.current / 1.5);
      setText(
        TARGET.split('').map((char, i) =>
          i < locked ? char : CHARS[Math.floor(Math.random() * CHARS.length)]
        ).join('')
      );
      if (locked >= TARGET.length) {
        clearInterval(intervalRef.current);
        setText(TARGET);
      }
    }, 24);
  };

  const hide = () => { setRevealed(false); startScramble(); };

  useEffect(() => { startScramble(); return () => clearInterval(intervalRef.current); }, []);

  return (
    <p
      className="text-sm text-zinc-600 mt-3 font-mono tracking-wide cursor-default select-none"
      style={{ position: 'relative', zIndex: 1 }}
      onMouseEnter={reveal}
      onMouseLeave={hide}
    >
      {text}
    </p>
  );
}

export default function Home() {
  const [showPhotos, setShowPhotos] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center px-6 relative">
      {/* Layer 0 — light rays */}
      <div className="fixed inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>

      {/*
        Layer 5 — photos.
        Always in the DOM (no mount/unmount cost), toggled via CSS opacity.
        Float animation is pure CSS — zero JS per frame.
      */}
      {PHOTO_PROPS.map((p, i) => (
        <img
          key={PROJECT_PHOTOS[i]}
          src={PROJECT_PHOTOS[i]}
          alt=""
          style={{
            position:        'fixed',
            left:            `${p.left}vw`,
            top:             `${p.top}vh`,
            width:           `${p.wVw}vw`,
            height:          `${p.hVh}vw`,
            objectFit:       'cover',
            borderRadius:    9,
            zIndex:          5,
            pointerEvents:   'none',
            boxShadow:       '0 4px 18px rgba(0,0,0,0.5)',
            opacity:         showPhotos ? p.opacity : 0,
            transition:      `opacity 0.45s ease ${p.delay}s`,
            '--rot':         `${p.rotation}deg`,
            '--float-y':     `${p.floatY}px`,
            animation:       `photo-float ${p.floatDur}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* Layer 10 — text */}
      <div className="relative z-10">
        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4"
          style={{ position: 'relative', zIndex: 1 }}
        >
          Hi, I'm Sean.
        </h1>

        <p
          className="text-xl md:text-2xl text-zinc-400 font-light"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <span
            className="cursor-default"
            style={{ display: 'inline' }}
            onMouseEnter={() => setShowPhotos(true)}
            onMouseLeave={() => setShowPhotos(false)}
          >
            Building{' '}
            <span
              style={{
                transition:  'color 220ms ease, text-shadow 220ms ease',
                color:       showPhotos ? '#ffffff' : undefined,
                textShadow:  showPhotos
                  ? '0 0 14px rgba(255,255,255,0.85), 0 0 30px rgba(255,255,255,0.4)'
                  : 'none',
              }}
            >
              cool stuff
            </span>
            {' '}right now.
          </span>
        </p>

        <RedactedText />

        <p className="text-sm text-zinc-500 mt-6" style={{ position: 'relative', zIndex: 1 }}>
          Current: Mechatronics @ Exia Labs (A16Z SR)
        </p>
        <p className="text-xs text-zinc-700 mt-1" style={{ position: 'relative', zIndex: 1 }}>
          Los Angeles, California
        </p>
        <a
          href="https://www.linkedin.com/in/seanchansato/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 text-sm text-zinc-500 hover:text-white transition-colors duration-200"
          style={{ position: 'relative', zIndex: 1 }}
        >
          LinkedIn
        </a>
      </div>

      <div className="fixed bottom-4 left-0 right-0 flex justify-center items-center gap-1.5 z-10">
        <a href="https://tronring.vercel.app/#seanchansato.work?nav=prev" aria-label="Previous site" className="opacity-40 hover:opacity-100 transition-opacity duration-300">
          <img src="https://tronring.vercel.app/leftarrow.png" alt="Previous" style={{ width: 13, height: "auto", filter: "invert(1)" }} />
        </a>
        <a href="https://tronring.vercel.app/#seanchansato.work" target="_blank" rel="noreferrer" className="opacity-40 hover:opacity-100 transition-opacity duration-300">
          <img src="https://tronring.vercel.app/logoblack.png" alt="Tron Webring" style={{ width: 26, height: "auto", filter: "invert(1)" }} />
        </a>
        <a href="https://tronring.vercel.app/#seanchansato.work?nav=next" aria-label="Next site" className="opacity-40 hover:opacity-100 transition-opacity duration-300">
          <img src="https://tronring.vercel.app/rightarrow.png" alt="Next" style={{ width: 13, height: "auto", filter: "invert(1)" }} />
        </a>
      </div>
    </main>
  );
}
