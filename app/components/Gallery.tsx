'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  '/double/1.jpg',
  '/double/2.jpg',
  '/double/3.jpg',
  '/double/4.jpg',
];

export default function Gallery() {
  return (
    <section className="w-full bg-black py-24">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-yellow-400 text-4xl md:text-5xl font-lamborghini uppercase tracking-[0.2em]">
          Gallery
        </h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
      </div>

      {/* Grid of Images */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 md:px-12">
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="relative group overflow-hidden rounded-2xl border border-yellow-500/20 shadow-xl"
          >
            {/* Image */}
            <Image
              src={src}
              alt={`Lamborghini Image ${idx + 1}`}
              width={800}
              height={600}
              className="w-full h-[250px] md:h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-base md:text-lg font-medium">
                Lamborghini #{idx + 1}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
