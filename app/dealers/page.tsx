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
    address: '5th Avenue, New York, USA',
    phone: '+1 212 555 1234',
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
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Header />

      <main className="pt-[100px] px-4 sm:px-8 lg:px-24 pb-24 relative z-10">
        {/* Background Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[200px] z-0 pointer-events-none"></div>

        <h1 className="text-4xl lg:text-5xl font-lamborghini uppercase text-center tracking-[0.2em] text-yellow-500 mb-12">
          Find a Dealer
        </h1>

        <div className="max-w-2xl mx-auto mb-12 z-10">
          <Input
            type="text"
            placeholder="Search by dealer name or city..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-neutral-900 border border-yellow-500/40 text-white placeholder-gray-500 rounded-full px-6 py-4 focus:ring-2 focus:ring-yellow-500 transition"
          />
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-gray-400">No dealers found for “{query}”.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 z-10">
            {filtered.map((dealer) => (
              <div
                key={dealer.id}
                className="bg-gradient-to-br from-yellow-500/10 to-yellow-300/5 border border-yellow-500/20 rounded-2xl shadow-lg hover:shadow-yellow-500/30 transition-all overflow-hidden group"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={dealer.image}
                    alt={dealer.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h2 className="text-xl font-bold text-yellow-400">{dealer.name}</h2>
                  <p className="flex gap-2 text-gray-300">
                    <MapPin size={18} className="text-yellow-500 shrink-0" />
                    <span>{dealer.address}</span>
                  </p>
                  <p className="flex gap-2 text-gray-300">
                    <Phone size={18} className="text-yellow-500 shrink-0" />
                    <span>{dealer.phone}</span>
                  </p>
                  <p className="flex gap-2 text-gray-300">
                    <Mail size={18} className="text-yellow-500 shrink-0" />
                    <span>{dealer.email}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-16">
          <Button
            className="bg-yellow-500 text-black hover:bg-yellow-400 px-8 py-4 text-lg rounded-full font-semibold shadow-md hover:shadow-yellow-400 transition-transform hover:scale-105"
          >
            Become a Dealer
          </Button>
        </div>
      </main>
    </div>
  );
}
