'use client';

import { motion } from 'framer-motion';

interface LoadingScreenProps {
  progress: number;
}

export default function LoadingScreen({ progress }: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-black z-[9999] flex flex-col justify-center items-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-yellow-400 text-5xl font-extrabold tracking-widest mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        LAMBORGHINI
      </motion.h1>
      <div className="w-2/3 max-w-xl h-4 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-yellow-400"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: 'easeInOut', duration: 0.5 }}
        />
      </div>
      <div className="mt-4 text-yellow-400 text-xl font-semibold">{progress}%</div>
    </motion.div>
  );
}
