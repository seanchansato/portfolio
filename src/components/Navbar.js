"use client";

import { useState } from 'react';
import Link from 'next/link';
import useSmoothScroll from '@/hooks/useSmoothScroll';
import { motion } from 'framer-motion';

export default function Navbar() {
  useSmoothScroll();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 bg-black px-40 flex justify-between items-center z-10 w-full max-w-screen-2xl mx-auto">
      <Link href="/" className="text-white text-xl">Sean Chan-Sato</Link>
      <div className="hidden md:flex items-center space-x-8">
        <Link href="#home" className="text-white text-xl">Home</Link>
        <Link href="#about" className="text-white text-xl">About</Link>
        <Link href="#projects" className="text-white text-xl">Projects</Link>
        <Link href="#contact" className="border border-white text-white text-base py-3.5 px-6 rounded-lg transition-colors duration-300 hover:bg-white hover:text-black">Contact</Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 w-full bg-black flex flex-col items-center py-4 space-y-4"
        >
          <Link href="#home" className="text-white text-xl" onClick={toggleMenu}>Home</Link>
          <Link href="#about" className="text-white text-xl" onClick={toggleMenu}>About</Link>
          <Link href="#projects" className="text-white text-xl" onClick={toggleMenu}>Projects</Link>
          <Link href="#contact" className="border border-white text-white text-base py-3.5 px-6 rounded-lg transition-colors duration-300 hover:bg-white hover:text-black" onClick={toggleMenu}>Contact</Link>
        </motion.div>
      )}
    </nav>
  )
}
