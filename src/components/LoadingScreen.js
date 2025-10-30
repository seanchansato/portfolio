"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen({ progress: externalProgress }) {
  const [internalProgress, setInternalProgress] = useState(0);
  const progress = typeof externalProgress === 'number' ? externalProgress : internalProgress;

  useEffect(() => {
    if (typeof externalProgress === 'number') return; // driven externally
    const interval = setInterval(() => {
      setInternalProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 10);
    return () => clearInterval(interval);
  }, [externalProgress]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center z-50"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-white text-4xl font-bold mb-8"
      >
        Loading...
      </motion.h1>
      <div className="w-64 h-4 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>
      <div className="mt-3 text-white/70 text-sm">{Math.round(progress)}%</div>
    </motion.div>
  );
}
