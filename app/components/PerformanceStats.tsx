'use client';

import { Timer, GaugeCircle, Flame, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { title: '0–100 km/h', value: '2.8s', icon: Timer },
  { title: 'Top Speed', value: '350 km/h', icon: GaugeCircle }, // 🔧 Shu yer tuzatildi
  { title: 'Horsepower', value: '770 HP', icon: Flame },
  { title: 'Torque', value: '720 Nm', icon: Activity },
];

export default function PerformanceStats() {
  return (
    <section className="bg-black text-white py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-lamborghini uppercase tracking-[0.2em]">
          Performance
        </h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {stats.map(({ title, value, icon: Icon }, idx) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-center bg-white/5 border border-yellow-500/20 rounded-2xl py-10 px-6 backdrop-blur-md shadow-xl hover:shadow-yellow-500/10 transition-all duration-300"
          >
            <Icon
              size={44}
              className="mb-4 bg-gradient-to-tr text-yellow-400 from-yellow-300 to-yellow-500 text-transparent bg-clip-text"
            />
            <h3 className="text-lg md:text-xl font-semibold text-yellow-400 mb-1">
              {title}
            </h3>
            <p className="text-2xl md:text-3xl font-bold text-white">{value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
