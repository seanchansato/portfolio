'use client';
import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
const LightRays = dynamic(() => import('@/components/LightRays'), { ssr: false });

const TARGET = '(building robots for the US military)';
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&';

function RedactedText() {
  const [text, setText] = useState('');
  const [revealed, setRevealed] = useState(false);
  const intervalRef = useRef(null);
  const iterRef = useRef(0);

  const scramble = () => {
    setText(TARGET.split('').map(() => CHARS[Math.floor(Math.random() * CHARS.length)]).join(''));
  };

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

  const hide = () => {
    setRevealed(false);
    startScramble();
  };

  useEffect(() => {
    startScramble();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <p
      className="text-sm text-zinc-600 mt-3 font-mono tracking-wide cursor-default select-none"
      onMouseEnter={reveal}
      onMouseLeave={hide}
    >
      {text}
    </p>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 relative">
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
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
          Hi, I'm Sean.
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 font-light">
          Building cool stuff right now.
        </p>
        <RedactedText />
        <p className="text-sm text-zinc-500 mt-6">
          Current: Mechatronics Intern @ Exia Labs (A16Z SR)
        </p>
        <p className="text-xs text-zinc-700 mt-1">
          Los Angeles, California
        </p>
        <a
          href="https://www.linkedin.com/in/seanchansato/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 text-sm text-zinc-500 hover:text-white transition-colors duration-200"
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
