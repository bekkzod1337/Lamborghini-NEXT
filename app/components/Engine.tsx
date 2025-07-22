'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Engine() {
  return (
    <section className="bg-[#0a0a0a] text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-5xl font-lamborghini tracking-wide uppercase text-yellow-400">
            Engine Performance
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            The Lamborghini V12 engine is a masterpiece of Italian engineering. Producing up to <span className="text-yellow-500 font-semibold">770 horsepower</span>, it delivers unmatched acceleration and top-end performance.  
            <br />
            <br />
            <span className="italic text-white/80">Feel the roar of the beast with every gear shift.</span>
          </p>
        </motion.div>

        {/* Engine Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="rounded-2xl p-1 bg-gradient-to-tr from-yellow-500/30 to-yellow-700/10">
            <Image
              src="/engine/1.jpg"
              alt="Lamborghini Engine"
              width={700}
              height={500}
              className="rounded-2xl object-cover shadow-[0_10px_40px_rgba(255,255,0,0.1)] transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
