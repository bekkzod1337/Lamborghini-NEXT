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

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function InteriorSection() {
  return (
    <section className="bg-[#0a0a0a] text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <motion.h2
          className="text-5xl font-lamborghini uppercase tracking-[0.2em]"
          initial="hidden"
          whileInView="visible"
          variants={fadeUpVariant}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Interior
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: '6rem' }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4 md:px-0">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 border border-yellow-500/20 rounded-2xl overflow-hidden backdrop-blur-md shadow-xl group"
          >
            {/* Image */}
            <div className="relative w-full h-[220px] md:h-[280px] overflow-hidden">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                sizes="100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Optional dark overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all" />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2 uppercase tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
