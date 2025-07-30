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
          Lamborghini haqida
        </h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8 rounded-full" />

        <p className="text-white/80 text-base md:text-lg leading-relaxed">
  <span className="text-white font-semibold">Automobili Lamborghini</span> — Italiyaning Sant’Agata Bolognese shahrida joylashgan, yuqori unumli superkarlarga ixtisoslashgan mashhur brend. 
  1963-yilda <span className="text-yellow-400">Ferruccio Lamborghini</span> tomonidan asos solingan kompaniya, jasur dizayni va kuchli dvigatellari bilan avtomobil olamida inqilob yasadi.
</p>

<p className="text-white/80 text-base md:text-lg mt-6 leading-relaxed">
  Lamborghini’ning har bir modeli — bu <span className="text-yellow-400 font-medium">keskin chiziqlar</span>, <span className="text-yellow-400 font-medium">aerodinamik shakl</span> va <span className="text-yellow-400 font-medium">V10 yoki V12 dvigatellar</span> uyg‘unligidir. Bu oddiy avtomobil emas — bu san’at, bu kuch, bu harakatdagi ehtiros.
</p>

<p className="text-white/80 text-base md:text-lg mt-6 leading-relaxed">
  Bugungi Lamborghini — bu nafaqat tezlik, balki <span className="text-yellow-400 font-medium">innovatsiya</span>, <span className="text-yellow-400 font-medium">elektrifikatsiya</span> va <span className="text-yellow-400 font-medium">barqaror kelajak</span> sari dadil qadamdir.
</p>

      </motion.div>
    </section>
  );
};

export default AboutLamborghini;
