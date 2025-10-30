"use client";

import { motion } from 'framer-motion';
import Image from 'next/image'; // Using next/image for optimized images

const images = [
  {
    src: '/dome.JPG',
    alt: 'VEX Worlds 2025',
    description: 'VEX Worlds 2025',
  },
  {
    src: '/HTV.png',
    alt: 'Hack the Valley X',
    description: 'Hack the Valley X',
  },
  {
    src: '/worldfinals.jpg',
    alt: 'VEX World Finals',
    description: 'VEX World Finals',
  },
];

export default function ImageGallery({ className }) {
  return (
    <div className={`flex flex-col md:flex-row justify-center items-center gap-8 px-8 md:px-20 ${className}`}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="relative w-full md:w-1/3 h-64 bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className="opacity-70 rounded-lg"
          />
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-white text-xl font-bold text-center">{image.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}