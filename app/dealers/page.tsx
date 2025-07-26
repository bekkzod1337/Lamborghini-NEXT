'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail } from 'lucide-react';
import Header from '../components/Header';

const dealers = [
  {
    id: 1,
    name: 'Lamborghini Tashkent',
    address: 'Yunusobod 10, Tashkent, Uzbekistan',
    phone: '+998 71 200 00 00',
    email: 'info@lamborghini.uz',
    image: '/dealers/tashkent.png',
  },
  {
    id: 2,
    name: 'Lamborghini Dubai',
    address: 'Sheikh Zayed Road, Dubai, UAE',
    phone: '+971 4 555 5555',
    email: 'dubai@lamborghini.com',
    image: '/dealers/dubai.png',
  },
  {
    id: 3,
    name: 'Lamborghini New York',
    address: 'Sheikh Zayed Road, Dubai, UAE',
    phone: '+971 4 555 5555',
    email: 'newyork@lamborghini.com',
    image: '/dealers/newyork.png',
  },
];

export default function DealersPage() {
  const [query, setQuery] = useState('');

  const filtered = dealers.filter((dealer) =>
    dealer.name.toLowerCase().includes(query.toLowerCase()) ||
    dealer.address.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-[100px] bg-black text-white px-4 py-10 lg:px-24">
      <Header />

      <h1 className="text-4xl lg:text-5xl font-lamborghini uppercase tracking-[0.2em] text-center text-yellow-500 mb-12">
        Find a Dealer
      </h1>

      <div className="max-w-2xl mx-auto mb-12">
        <Input
          type="text"
          placeholder="Search dealers by name or city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-gray-900 border border-yellow-500/30 text-white placeholder-gray-500 rounded-full px-6 py-4"
          aria-label="Search dealers"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-gray-400">No dealers found for “{query}”.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((dealer) => (
            <div
              key={dealer.id}
              className="bg-gradient-to-br from-yellow-500/10 to-yellow-300/5 border border-yellow-500/20 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-yellow-500/40 transition-all duration-300"
            >
              <Image
                src={dealer.image}
                alt={`Image of ${dealer.name}`}
                width={400}
                height={250}
                loading="lazy"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-yellow-400 mb-3">{dealer.name}</h2>
                <p className="flex items-start gap-2 text-gray-300 mb-2">
                  <MapPin size={18} className="mt-[2px] text-yellow-500" />
                  {dealer.address}
                </p>
                <p className="flex items-center gap-2 text-gray-300 mb-2">
                  <Phone size={18} className="text-yellow-500" />
                  {dealer.phone}
                </p>
                <p className="flex items-center gap-2 text-gray-300">
                  <Mail size={18} className="text-yellow-500" />
                  {dealer.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-16">
        <Button className="bg-yellow-500 text-black hover:bg-yellow-400 px-8 py-3 text-lg rounded-full font-semibold shadow-lg transition-transform hover:scale-105">
          Become a Dealer
        </Button>
      </div>
    </div>
  );
}
