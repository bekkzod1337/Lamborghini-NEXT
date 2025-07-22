'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Emily Smith',
    role: 'Coffee Enthusiast',
    quote: 'The best coffee in town! Elza Coffee has completely changed my mornings.',
    avatar: '/customers/1.jpg',
  },
  {
    name: 'John Doe',
    role: 'Cafe Owner',
    quote: 'Exceptional service and premium beans. I always recommend Elza Coffee.',
    avatar: '/customers/2.jpg',
  },
  {
    name: 'Sarah Johnson',
    role: 'Barista Champion',
    quote: 'Rich flavors and a cozy atmosphere. A must-visit for coffee lovers!',
    avatar: '/customers/3.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#0D0D0D] text-white px-4 sm:px-6 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-yellow-400 text-4xl font-semibold tracking-wide uppercase">Testimonials</h2>
        <p className="text-white text-xl mt-2">What our customers say about Elza Coffee</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-10">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1A1A1A] p-8 rounded-2xl shadow-md"
          >
            <div className="flex items-center gap-4 mb-6">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <div>
                <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                <p className="text-yellow-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-300 text-base italic">{testimonial.quote}</p>
            <div className="flex mt-4 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5" fill="currentColor" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
