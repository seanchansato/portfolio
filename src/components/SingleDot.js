"use client";

import { motion, useTransform } from 'framer-motion';

export default function SingleDot({ dot, scrollYProgress }) {
  const y = useTransform(scrollYProgress, [0, 1], [dot.initialY, dot.initialY - 500]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        x: dot.initialX,
        y,
        width: dot.size,
        height: dot.size,
        opacity,
        backgroundColor: dot.color,
      }}
    />
  );
}