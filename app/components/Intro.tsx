'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export default function Intro() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
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
        className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-4xl text-yellow-400 sm:text-6xl md:text-7xl font-lamborghini uppercase tracking-wide drop-shadow-2xl">
          Lamborghini Aventador
        </h1>

        <motion.p
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl drop-shadow-lg"
          initial="hidden"
          whileInView="visible"
          variants={fadeUpVariant}
          transition={{ duration: 1.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Unleash the power of the V12. Feel the thrill. Embrace the legend.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 px-7 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full uppercase tracking-wide shadow-xl flex items-center gap-2 transition-all duration-300"
        >
          Explore Now <ArrowRight size={18} />
        </motion.button>
      </motion.div>
    </section>
  );
}
