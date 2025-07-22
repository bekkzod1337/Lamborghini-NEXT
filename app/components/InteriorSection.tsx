'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: 'Premium Leather Seats',
    description: 'Hand-stitched Italian leather provides unmatched comfort and luxury.',
    image: '/interior/1.jpg',
  },
  {
    title: 'Ambient Lighting',
    description: 'Customizable LED lighting enhances the driving experience.',
    image: '/interior/2.jpg',
  },
  {
    title: 'Carbon Fiber Trim',
    description: 'Lightweight, stylish, and race-inspired interior detailing.',
    image: '/interior/3.jpg',
  },
];

export default function InteriorSection() {
  return (
    <section className="bg-[#0a0a0a] text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-5xl font-lamborghini uppercase tracking-[0.2em] text-white">
          Interior
        </h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 border border-yellow-500/20 rounded-2xl overflow-hidden backdrop-blur-lg shadow-lg"
          >
            <div className="relative w-full h-[220px] md:h-[280px]">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
