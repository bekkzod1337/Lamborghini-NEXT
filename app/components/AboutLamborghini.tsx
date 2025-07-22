'use client'

import { motion } from 'framer-motion'

const AboutLamborghini = () => {
  return (
    <section className="bg-black py-16 px-4 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-yellow-400 text-3xl md:text-4xl font-bold mb-6">
          About Lamborghini Aventador
        </h2>
        <p className="text-white text-base md:text-lg leading-relaxed">
          The Lamborghini Aventador is an iconic supercar known for its sharp design, roaring V12 engine, and aggressive performance. 
          First introduced in 2011, it quickly became a symbol of prestige and raw power in the automotive world. 
          With its carbon fiber monocoque, scissor doors, and cutting-edge aerodynamics, the Aventador represents the pinnacle of Italian automotive engineering.
        </p>
        <p className="text-white text-base md:text-lg mt-4 leading-relaxed">
          Powered by a naturally aspirated 6.5-liter V12 engine, it produces up to 769 horsepower and can accelerate from 0 to 100 km/h in just 2.8 seconds. 
          It also features an advanced all-wheel-drive system, a 7-speed ISR transmission, and pushrod suspension to deliver precise handling at high speeds.
        </p>
        <p className="text-white text-base md:text-lg mt-4 leading-relaxed">
          The Aventador is not just a car; it’s a piece of art and innovation, crafted for those who seek exclusivity, performance, and unmatched road presence.
        </p>
      </motion.div>
    </section>
  )
}

export default AboutLamborghini
