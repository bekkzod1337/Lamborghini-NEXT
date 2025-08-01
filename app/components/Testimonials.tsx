'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Alex Thompson',
    role: 'Superkar kolleksioneri',
    quote:
      'Lamborghini egasi bo‘lish mening orzum edi. Dizayni, qudrati, hissiyoti — hech narsa teng kela olmaydi.',
    avatar: '/customers/1.jpg',
  },
  {
    name: 'Natalie Ruiz',
    role: 'Hashtag hayot tarzini yurituvchi bloger',
    quote:
      'Lamborghini — bu oddiy avtomobil brendi emas, bu afsona. Har bir haydov hayotdagi san’at asariga o‘xshaydi.',
    avatar: '/customers/2.jpg',
  },
  {
    name: 'David Miller',
    role: 'Avtomobil sporti ishqibozi',
    quote:
      'Trekdan tortib ko‘cha haydagichigacha — Lamborghini’lar betakror kuch va ko‘rinishni taqdim etadi. Bu haqiqiy hayratlanarli holat.',
    avatar: '/customers/3.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-black text-white px-4 sm:px-6 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-yellow-400 text-4xl font-semibold tracking-widest uppercase">
          Mijozlar fikri
        </h2>
        <p className="text-white/80 text-lg mt-3">
          Lamborghini egalarining fikrlari bilan tanishing
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="bg-[#1A1A1A] p-8 rounded-2xl shadow-lg border border-yellow-500/10 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <Image
                src={t.avatar}
                alt={t.name}
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <div>
                <h4 className="text-white font-semibold text-lg">{t.name}</h4>
                <p className="text-yellow-400 text-sm">{t.role}</p>
              </div>
            </div>

            <blockquote className="italic text-white/80 leading-relaxed text-base relative">
              <span className="text-yellow-400 text-3xl mr-1">“</span>
              {t.quote}
              <span className="text-yellow-400 text-3xl ml-1">”</span>
            </blockquote>

            <div className="flex mt-4 text-yellow-400" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5" fill="currentColor" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
  