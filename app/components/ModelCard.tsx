'use client'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import Image from 'next/image'

export default function ModelCard({ name, image }: { name: string, image: string }) {
  const controls = useAnimation()
  const { ref, inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [inView, controls])

  return (
    <motion.div
      ref={ref}
      className="w-full md:w-1/2 lg:w-1/3 p-4"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, rotateY: -90 },
        visible: {
          opacity: 1,
          rotateY: 0,
          transition: { duration: 0.8, ease: 'easeOut' }
        }
      }}
      style={{ perspective: 1000 }}
    >
      <div className="bg-black border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <Image src={image} alt={name} width={600} height={400} className="w-full h-auto object-cover" />
        <div className="p-4 text-white text-xl font-semibold text-center">
          {name}
        </div>
      </div>
    </motion.div>
  )
}
