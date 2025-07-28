'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export default function Intro() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-black text-white flex items-center justify-center px-6"
      aria-label="Intro section for Lamborghini Aventador"
      role="region"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/intro-bg.jpg"
          alt="Lamborghini Aventador speeding through the night"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col justify-center items-center text-center max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h1
          variants={fadeUpVariant}
          className="text-4xl sm:text-6xl md:text-7xl text-yellow-400 font-lamborghini uppercase tracking-wide drop-shadow-2xl"
        >
          Lamborghini Aventador
        </motion.h1>

        <motion.p
          variants={fadeUpVariant}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl drop-shadow-lg"
        >
          Unleash the power of the V12. Feel the thrill. Embrace the legend.
        </motion.p>

        <motion.div
          variants={fadeUpVariant}
          className="mt-10"
        >
          <Link
  href="/models"
  className="inline-flex items-center gap-2 px-7 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full uppercase tracking-wide shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
  aria-label="Explore Lamborghini models"
>
  Explore Now <ArrowRight size={18} />
</Link>

        </motion.div>
      </motion.div>
    </section>
  );
}
