"use client";

import { motion, useScroll } from 'framer-motion'; // useTransform is moved to SingleDot
import { useEffect, useState } from 'react';
import SingleDot from './SingleDot'; // Import the new component

export default function AnimatedBackground() {
  const { scrollYProgress } = useScroll();
  const [dots, setDots] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const newDots = Array.from({ length: 50 }).map(() => ({
        initialX: Math.random() * window.innerWidth,
        initialY: Math.random() * document.body.scrollHeight,
        size: Math.random() * 5 + 2,
        color: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.1})`,
      }));
      setDots(newDots);
    }
  }, []);

  if (!isClient || !scrollYProgress) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {dots.map((dot, index) => (
        <SingleDot
          key={index}
          dot={dot}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
}