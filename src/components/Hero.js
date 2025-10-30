"use client";

import { motion } from 'framer-motion';

export default function Hero() {
  const name = "Sean!";
  const nameParts = name.split(' ');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-black text-white w-full">
      <div className="flex flex-col md:flex-row items-center justify-center h-screen px-40">
        <div className="flex flex-col items-start">
          <motion.h1
            className="text-5xl font-bold"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.span variants={item}>Hello, </motion.span>
            <motion.span variants={item}>I'm </motion.span>
            {nameParts.map((part, index) => (
              <motion.span key={index} variants={item}>
                {part}{index < nameParts.length - 1 ? ' ' : ''}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className="text-2xl mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            I'm a 1st year Mechatronics Engineering student at the University of Waterloo. I'm passionate about Robotics, Machine Learning, and Software Engineering
          </motion.p>
          <motion.a
            href="/Sean_Chan-Sato_Resume - Copy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white text-base py-3.5 px-6 rounded-lg mt-8 transition-colors duration-300 hover:bg-white hover:text-black inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
          >
            View Resume
          </motion.a>
        </div>
        <motion.div
          className="ml-0 md:ml-20 mt-10 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.8, duration: 0.5 }}
          whileHover={{
            scale: 1.045,
            boxShadow: '0 0 32px 8px rgba(70,162,255,0.6), 0 2px 32px 0px rgba(255,255,255,0.12)'
          }}
        >
          <img src="/Sean Profile Photo.jpg" alt="Profile" className="rounded-lg w-[900px] h-[350px] object-cover transition-shadow duration-500" />
        </motion.div>
      </div>
    </section>
  )
}
