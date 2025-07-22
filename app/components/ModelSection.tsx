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
    <section id="models" className="bg-black py-20 px-6 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-yellow-400 text-4xl md:text-5xl font-lamborghini uppercase tracking-widest">
          Our Models
        </h2>
        <p className="text-white text-base md:text-lg mt-4 max-w-2xl mx-auto">
          Discover the iconic lineup of Lamborghini, blending raw performance with cutting-edge design and legendary craftsmanship.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {models.map((model, i) => (
          <motion.div
            key={model.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
            className="relative group overflow-hidden rounded-2xl border border-yellow-500/30 hover:scale-105 transition-transform duration-500 shadow-xl"
          >
            <Image
              src={model.img}
              alt={model.name}
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-4">
              <h3 className="text-white text-lg md:text-xl font-semibold tracking-wide drop-shadow-md">
                {model.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
