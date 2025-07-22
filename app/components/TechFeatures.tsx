'use client';

import { motion } from 'framer-motion';
import { Touchpad, Radar, Wifi, SatelliteDish } from 'lucide-react';

const features = [
  {
    title: 'Touchscreen Infotainment',
    description: 'Responsive touchscreen with Apple CarPlay, Android Auto, and navigation.',
    icon: <Touchpad size={40} className="text-yellow-400" />,
  },
  {
    title: 'Advanced Sensors',
    description: '360° cameras and parking sensors ensure precise maneuvering.',
    icon: <Radar size={40} className="text-yellow-400" />,
  },
  {
    title: 'Wireless Connectivity',
    description: 'Seamless Wi-Fi hotspot and Bluetooth connection for all your devices.',
    icon: <Wifi size={40} className="text-yellow-400" />,
  },
  {
    title: 'Satellite Navigation',
    description: 'Real-time satellite GPS with live traffic and 3D maps.',
    icon: <SatelliteDish size={40} className="text-yellow-400" />,
  },
];

export default function TechFeatures() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-5xl font-lamborghini uppercase tracking-[0.2em] text-white">
          Technology
        </h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center text-center bg-white/5 border border-yellow-500/20 rounded-2xl p-8 backdrop-blur-lg shadow-lg"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-white text-opacity-80 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
