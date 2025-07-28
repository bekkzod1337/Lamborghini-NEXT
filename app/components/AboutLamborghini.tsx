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
          About Lamborghini
        </h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8 rounded-full" />

        <p className="text-white/80 text-base md:text-lg leading-relaxed">
          <span className="text-white font-semibold">Automobili Lamborghini</span> — bu Italiyaning Sant’Agata Bolognese shahrida joylashgan yuqori darajadagi superkarlarga ixtisoslashgan avtomobil ishlab chiqaruvchi kompaniya. 
          1963-yilda <span className="text-yellow-400">Ferruccio Lamborghini</span> tomonidan asos solingan brend tez orada o‘zining jasur dizayni, texnologik innovatsiyalari va yuqori samarador motori bilan mashhurlikka erishdi.
        </p>

        <p className="text-white/80 text-base md:text-lg mt-6 leading-relaxed">
          Lamborghini modellarining o‘ziga xos xususiyatlari — <span className="text-yellow-400 font-medium">keskin chiziqlar</span>, <span className="text-yellow-400 font-medium">aerodinamik shakllar</span>, va <span className="text-yellow-400 font-medium">qudratli V10 yoki V12 dvigatellar</span> bilan uyg‘unlashgan hayratlanarli dizayndir. 
          Har bir model — bu faqat transport vositasi emas, balki <span className="text-white font-semibold">ekstremal haydov tajribasining san’ati</span>.
        </p>

        <p className="text-white/80 text-base md:text-lg mt-6 leading-relaxed">
          Bugungi kunda Lamborghini brendi faqat sport avtomobillarigina emas, balki <span className="text-yellow-400 font-medium">texnologik innovatsiyalar</span>, <span className="text-yellow-400 font-medium">elektrifikatsiya</span>, va <span className="text-yellow-400 font-medium">barqarorlik</span> sari intilayotgan zamonaviy avtomobil sanoatining yetakchilaridan biri hisoblanadi.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutLamborghini;
