'use client';

import { motion } from 'framer-motion';

const AboutLamborghini = () => {
  return (
    <section className="bg-black py-24 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-yellow-400 text-4xl md:text-5xl font-lamborghini tracking-widest uppercase mb-4">
          About Aventador
        </h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8 rounded-full" />

        <p className="text-white/80 text-base md:text-lg leading-relaxed">
          The <span className="text-white font-semibold">Lamborghini Aventador</span> is a legendary supercar celebrated for its futuristic design and unmistakable V12 engine growl. 
          Since its debut in 2011, it has stood as a symbol of <span className="text-yellow-400">extreme performance</span>, <span className="text-yellow-400">cutting-edge technology</span>, and unmistakable Italian flair.
        </p>

        <p className="text-white/80 text-base md:text-lg mt-6 leading-relaxed">
          With a <span className="font-semibold">6.5-liter naturally aspirated V12</span> producing up to <span className="font-semibold text-white">769 HP</span>, the Aventador accelerates from 0 to 100 km/h in just <span className="font-semibold text-white">2.8 seconds</span>. 
          Its carbon fiber monocoque chassis, all-wheel-drive system, and pushrod suspension ensure every drive feels like a race.
        </p>

        <p className="text-white/80 text-base md:text-lg mt-6 leading-relaxed">
          More than just a machine, the Aventador is a statement — a piece of automotive art for those who crave <span className="text-yellow-400 font-medium">raw power</span>, <span className="text-yellow-400 font-medium">exclusivity</span>, and unmatched <span className="text-yellow-400 font-medium">road presence</span>.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutLamborghini;
