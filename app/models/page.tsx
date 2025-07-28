'use client';

import Image from 'next/image';
import Header from '../components/Header';
import Link from 'next/link';
import { motion } from 'framer-motion';

const carModels = [
  {
    name: 'Lamborghini Revuelto',
    description:
      'The Revuelto combines hybrid technology with unmatched Lamborghini performance, creating a new benchmark in super sports cars.',
    image: '/models/revuelto.jpg',
    link: '/models/revuelto',
  },
  {
    name: 'Lamborghini Huracán Tecnica',
    description:
      'Huracán Tecnica offers the perfect balance between lifestyle and performance, delivering power and control in every corner.',
    image: '/models/huracan.jpg',
    link: '/models/huracan-tecnica',
  },
  {
    name: 'Lamborghini Urus S',
    description:
      'The Urus S redefines the luxury SUV experience by combining sportiness, elegance, and functionality in a single vehicle.',
    image: '/models/urus.jpg',
    link: '/models/urus-s',
  },
  {
    name: 'Lamborghini Aventador',
    description:
      'The Sián Roadster is an open-top hybrid masterpiece that blends futuristic design with Lamborghini’s signature roar.',
    image: '/models/aventador.jpg',
    link: '/models/aventador',
  },
];

export default function ModelsPage() {
  return (
    <div className="bg-black text-white flex flex-col min-h-screen">
      <Header />

      <section className="px-6 md:px-20 pt-28 pb-20 space-y-24">
        {carModels.map((model, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <motion.div
              key={model.name}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                isReversed ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Text Block */}
              <motion.div
                className="w-full md:w-1/2 space-y-5"
                initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-yellow-400">
                  {model.name}
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {model.description}
                </p>
                <Link
                  href={model.link}
                  className="inline-block mt-4 text-yellow-400 hover:text-yellow-500 border-b border-yellow-500 hover:border-yellow-400 transition duration-200"
                >
                  Discover More →
                </Link>
              </motion.div>

              {/* Image Block */}
              <motion.div
                className="w-full md:w-1/2 relative aspect-video rounded-xl overflow-hidden shadow-xl hover:shadow-yellow-500/20 transition-shadow duration-300"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority={index === 0} // faqat birinchi rasmga priority berish
                />
              </motion.div>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
}
