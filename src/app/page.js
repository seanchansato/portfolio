'use client';
import dynamic from 'next/dynamic';
const LightRays = dynamic(() => import('@/components/LightRays'), { ssr: false });

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
        <p className="text-sm text-zinc-500 mt-3 italic">
          (building robots for the US military)
        </p>
        <p className="text-sm text-zinc-500 mt-6">
          Current: Mechatronics Intern @ Exia Labs (A16Z SR)
        </p>
        <p className="text-xs text-zinc-700 mt-1">
          Los Angeles, California
        </p>
        <p className="text-sm text-zinc-600 mt-2">
          Website update coming March 16.
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
    </main>
  );
}
