'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  progress: number;
}

export default function LoadingScreen({ progress }: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black z-[9999] flex flex-col justify-center items-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="text-4xl font-bold text-yellow-400 mb-6">
        Lamborghini
      </div>
      <div className="w-2/3 h-4 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-yellow-400"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
      </div>
      <div className="mt-4 text-yellow-400 text-xl">{progress}%</div>
    </motion.div>
  );
}
