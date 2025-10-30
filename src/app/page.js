"use client";

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import AnimatedSection from '@/components/AnimatedSection'
import LoadingScreen from '@/components/LoadingScreen';
import dynamic from 'next/dynamic';

const DynamicAnimatedBackground = dynamic(() => import('@/components/AnimatedBackground'), { ssr: false });

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const imageUrls = [
      // Projects
      'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fXjfkg4tzh/itxui1eh_expires_30_days.png',
      '/cover.jpg',
      'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/fXjfkg4tzh/zyi8o40r_expires_30_days.png',
      // Gallery
      '/dome.JPG',
      '/HTV.png',
      '/worldfinals.jpg',
    ];

    let loadedCount = 0;
    const totalCount = imageUrls.length;
    let isCancelled = false;

    const updateProgress = () => {
      if (isCancelled) return;
      loadedCount += 1;
      const pct = Math.round((loadedCount / totalCount) * 100);
      setProgress(pct);
      if (loadedCount >= totalCount) done();
    };

    const preload = imageUrls.map((src) => new Promise((resolve) => {
      const img = new Image();
      img.onload = () => { updateProgress(); resolve(); };
      img.onerror = () => { updateProgress(); resolve(); };
      img.src = src;
    }));

    const MIN_DURATION_MS = 1200;
    const minTimer = new Promise((r) => setTimeout(r, MIN_DURATION_MS));

    let finished = false;
    const done = () => {
      if (finished) return;
      finished = true;
      Promise.all([minTimer]).then(() => {
        if (!isCancelled) setLoading(false);
      });
    };

    Promise.all(preload).then(() => done());

    return () => { isCancelled = true; };
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen progress={progress} />}
      </AnimatePresence>

      {!loading && (
        <>
          <DynamicAnimatedBackground />
          <main className="flex min-h-screen flex-col items-center w-full max-w-screen-2xl mx-auto">
            <Navbar />
            <div id="home">
              <Hero />
            </div>
            <AnimatedSection>
              <Projects />
            </AnimatedSection>
            <AnimatedSection>
              <Contact />
            </AnimatedSection>
          </main>
        </>
      )}
    </>
  )
}
