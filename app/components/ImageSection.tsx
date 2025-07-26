'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ImageSectionProps {
  image: string;
  title: string;
  link?: string; // optional "read more" yo'nalishi
}

export default function ImageSection({ image, title, link = '#' }: ImageSectionProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="100vw"
        className="absolute object-cover brightness-[0.6]"
        priority
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-0" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center text-white px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.25,
            },
          },
        }}
      >
        <motion.h2
          className="text-4xl md:text-6xl font-bold uppercase tracking-wide drop-shadow-xl"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {title}
        </motion.h2>

        <motion.div
          className="mt-6"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Link href={link} aria-label={`Read more about ${title}`}>
            <button className="px-6 py-2 text-white border border-white hover:bg-white hover:text-black transition duration-300 rounded-md uppercase tracking-wider">
              Read More
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
