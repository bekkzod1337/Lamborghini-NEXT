'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-black text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/1.mp4" type="video/mp4" />
      </video>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold font-lamborghini mb-6 leading-tight"
        >
          Drive the&nbsp;<span className="text-yellow-400">Future</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl"
        >
          Unleash the power of <span className="text-white font-semibold">Lamborghini</span> engineering.
        </motion.p>

        {/* Optional Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-8"
        >
          <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-xl transition duration-300">
            Explore Models
          </button>
        </motion.div>
      </div>
    </section>
  );
}
