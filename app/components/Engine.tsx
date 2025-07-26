'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Engine() {
  return (
    <section className="bg-[#0a0a0a] text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-lamborghini tracking-widest uppercase bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
            Engine Performance
          </h2>
          <div className="w-20 h-1 bg-yellow-500 rounded-full" />
          <p className="text-white/80 text-lg leading-relaxed">
            The <span className="text-white font-semibold">Lamborghini V12</span> engine is a masterpiece of Italian engineering. Delivering up to 
            <span className="text-yellow-400 font-semibold"> 770 horsepower</span>, it achieves breathtaking acceleration and top-end performance. 
            <br /><br />
            <span className="italic text-white/70">Feel the roar of the beast with every gear shift.</span>
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
          <div className="rounded-2xl overflow-hidden ring-1 ring-yellow-500/20 hover:ring-yellow-400 transition-all duration-500">
            <Image
              src="/engine/1.jpg"
              alt="Lamborghini Engine"
              width={700}
              height={500}
              className="rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105 shadow-[0_10px_40px_rgba(255,255,0,0.1)]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
