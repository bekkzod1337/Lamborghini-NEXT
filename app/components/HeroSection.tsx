'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useMemo } from 'react';

export default function HeroSection() {
  const containerVariants = useMemo(() => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }), []);

  const fadeUp = useMemo(() => ({
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  }), []);

  return (
    <section
      className="relative w-full h-screen bg-black text-white overflow-hidden"
      aria-label="Lamborghini Hero Section"
      role="region"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 z-10" />

      {/* Fallback Image (optional) */}
      {/* <Image
        src="/models-bg.png"
        alt="Lamborghini car"
        fill
        className="object-cover z-0"
        priority
      /> */}

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="relative z-20 h-full flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
      >
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-lamborghini mb-6 leading-tight"
        >
          Drive the <span className="text-yellow-400">Future</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl"
        >
          Unleash the power of <span className="text-white font-semibold">Lamborghini</span> engineering.
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          className="mt-10"
        >
          <Link href="/models" aria-label="Explore Lamborghini models">
            <button
              className="flex items-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              Explore Models
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
