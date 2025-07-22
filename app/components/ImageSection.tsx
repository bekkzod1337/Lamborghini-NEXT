'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface ImageSectionProps {
  image: string
  title: string
}

export default function ImageSection({ image, title }: ImageSectionProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="absolute object-cover brightness-70"
        priority
      />
      <motion.div
        className="relative z-10 text-center text-white px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wide drop-shadow-xl">
          {title}
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-300">Read More</p>
      </motion.div>
    </section>
  )
}
