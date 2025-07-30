'use client';

import { motion } from 'framer-motion';
import { Touchpad, Radar, Wifi, SatelliteDish } from 'lucide-react';

const features = [
  {
    title: 'Sensorli ekranli multimedia tizimi',
    description: 'Apple CarPlay, Android Auto va navigatsiyaga ega sezgir sensorli boshqaruv.',
    icon: Touchpad,
  },
  {
    title: 'Ilg‘or sensorlar',
    description: '360° kameralar va to‘xtash sensori aniq harakatlanishni ta’minlaydi.',
    icon: Radar,
  },
  {
    title: 'Simsiz ulanish',
    description: 'Wi-Fi nuqtasi va barcha qurilmalar uchun Bluetooth ulanishi.',
    icon: Wifi,
  },
  {
    title: 'Sun’iy yo‘ldoshli navigatsiya',
    description: 'Jonli harakat va 3D xaritalar bilan real vaqtli GPS tizimi.',
    icon: SatelliteDish,
  },
];

export default function TechFeatures() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-lamborghini uppercase tracking-[0.2em]">
          Texnologiya
        </h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {features.map(({ title, description, icon: Icon }, idx) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-center bg-white/5 border border-yellow-500/20 rounded-2xl p-8 backdrop-blur-md shadow-xl hover:shadow-yellow-500/10 transition-all duration-300"
          >
            <Icon
              size={44}
              className="mb-4 bg-gradient-to-tr text-yellow-400 from-yellow-300 to-yellow-500 text-transparent bg-clip-text"
            />
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">
              {title}
            </h3>
            <p className="text-sm text-white/80 leading-relaxed text-balance">
              {description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
