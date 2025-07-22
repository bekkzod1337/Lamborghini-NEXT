'use client';

import { motion } from 'framer-motion';
import { Timer, Gauge, Flame, Activity } from 'lucide-react';

const stats = [
  {
    title: '0-100 km/h',
    value: '2.8s',
    icon: <Timer size={40} className="text-yellow-400" />,
  },
  {
    title: 'Top Speed',
    value: '350 km/h',
    icon: <Gauge size={40} className="text-yellow-400" />,
  },
  {
    title: 'Horsepower',
    value: '770 HP',
    icon: <Flame size={40} className="text-yellow-400" />,
  },
  {
    title: 'Torque',
    value: '720 Nm',
    icon: <Activity size={40} className="text-yellow-400" />,
  },
];

export default function PerformanceStats() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-5xl font-lamborghini tracking-[0.2em] uppercase text-white">
          Performance
        </h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center bg-white/5 backdrop-blur-lg border border-yellow-500/20 rounded-2xl py-10 px-6 shadow-lg"
          >
            <div className="mb-4">{stat.icon}</div>
            <h3 className="text-xl font-semibold text-yellow-400">{stat.title}</h3>
            <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
