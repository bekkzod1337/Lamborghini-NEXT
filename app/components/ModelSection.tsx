'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const models = [
  { name: 'Revuelto', img: '/models/revuelto.jpg' },
  { name: 'Huracán', img: '/models/huracan.jpg' },
  { name: 'Urus', img: '/models/urus.jpg' },
  { name: 'Aventador', img: '/models/aventador.jpg' },
  { name: 'Gallardo', img: '/models/gallardo.jpg' },
  { name: 'Elemento', img: '/models/elemento.jpg' },
];

export default function ModelsSection() {
  return (
    <section id="models" className="bg-black py-24 px-6 md:px-12">
      <div className="text-center mb-16">
        <h2 className="text-yellow-400 text-4xl md:text-5xl font-lamborghini uppercase tracking-[0.2em]">
          Our Models
        </h2>
        <p className="text-white text-base md:text-lg mt-4 max-w-2xl mx-auto">
          Discover the iconic lineup of Lamborghini—where aggressive power meets Italian precision and luxury.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {models.map((model, i) => (
          <motion.div
            key={model.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: 'easeOut' }}
            className="relative group overflow-hidden rounded-2xl border border-yellow-500/30 shadow-lg hover:shadow-yellow-500/40 transition duration-500 bg-neutral-900"
          >
            <Image
              src={model.img}
              alt={`Lamborghini ${model.name}`}
              width={500}
              height={320}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 pointer-events-none" />

            {/* Model Name */}
            <div className="absolute bottom-0 left-0 w-full p-4 z-20">
              <h3 className="text-white text-xl font-semibold tracking-wide drop-shadow-md">
                {model.name}
              </h3>
            </div>

            {/* Hover Text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
              <span className="bg-black/70 text-yellow-400 px-4 py-2 rounded-full text-sm uppercase tracking-wider shadow-md">
                Learn More
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
