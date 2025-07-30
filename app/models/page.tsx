'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import models from './modelsData'
import Header from '../components/Header'

export default function ModelsPage() {
  return (
    <div className="w-full">
      {models.map((model, index) => (
        <ModelScrollSection key={index} model={model} />
      ))}
    </div>
  )
}

function ModelScrollSection({ model }: { model: any }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.05])
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0])

  return (
    <section ref={ref} className="h-screen w-full relative overflow-hidden">
      <Header />
      <motion.div
        style={{ opacity, scale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={model.image}
          alt={model.name}
          fill
          className="object-cover brightness-50"
        />
      </motion.div>

      <motion.div
        style={{ opacity: textOpacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 text-center"
      >
        <motion.h2 className="text-5xl font-bold mb-4">{model.name}</motion.h2>
        <motion.p className="max-w-xl mx-auto text-lg">{model.description}</motion.p>
      </motion.div>
    </section>
  )
}
