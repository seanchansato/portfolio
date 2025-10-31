"use client";

import { motion } from 'framer-motion';

const AnimatedSection = ({ children }) => {
  return (
    <motion.div
      className="bg-black"
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
