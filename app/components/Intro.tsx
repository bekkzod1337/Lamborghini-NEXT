'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Intro() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/intro-bg.jpg"
          alt="Lamborghini Aventador"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl md:text-7xl font-lamborghini uppercase tracking-wide drop-shadow-lg"
        >
          Lamborghini Aventador
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease: 'easeOut' }}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl drop-shadow-sm"
        >
          Unleash the power of the V12. Feel the thrill. Embrace the legend.
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 px-7 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full uppercase tracking-wide shadow-md transition-all duration-300"
        >
          Explore Now
        </motion.button>
      </div>
    </section>
  );
}
