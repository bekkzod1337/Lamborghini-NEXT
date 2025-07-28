'use client'

import { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import Header from '@/app/components/Header'

const carColors = [
  { name: 'Red', value: '#ff0000', image: '/customize/color/red.png' },
  { name: 'Blue', value: '#007bff', image: '/customize/color/blue.png' },
  { name: 'Black', value: '#000000', image: '/customize/color/black.png' },
  { name: 'White', value: '#ffffff', image: '/customize/color/white.png' },
  { name: 'Yellow', value: '#ffcc00', image: '/customize/color/yellow.png' },
  { name: 'Green', value: '#008000', image: '/customize/color/green.png' },
  { name: 'DarkGreen', value: '#006400', image: '/customize/color/darkgreen.png' },
  { name: 'MidNightBlue', value: '#13134b', image: '/customize/color/midnightblue.png' },
  { name: 'DarkRed', value: '#8b0000', image: '/customize/color/darkred.png' },
]

const wheelOptions = [
  { id: 1, name: 'Standard', image: '/customize/wheel/1/1.png' },
  { id: 2, name: 'Standard', image: '/customize/wheel/1/2.png' },
  { id: 3, name: 'Standard', image: '/customize/wheel/1/3.png' },
  { id: 4, name: 'Sport', image: '/customize/wheel/2/1.png' },
  { id: 5, name: 'Sport', image: '/customize/wheel/2/2.png' },
  { id: 6, name: 'Sport', image: '/customize/wheel/2/3.png' },
  { id: 7, name: 'Sport', image: '/customize/wheel/2/4.png' },
  { id: 8, name: 'Luxury', image: '/customize/wheel/3/1.png' },
  { id: 9, name: 'Luxury', image: '/customize/wheel/3/2.png' },
  { id: 10, name: 'Luxury', image: '/customize/wheel/3/3.png' },
  { id: 11, name: 'Luxury', image: '/customize/wheel/3/4.png' },
  { id: 12, name: 'Luxury', image: '/customize/wheel/3/5.png' },
]

const interiorOptions = [
  { id: 1, name: 'Black Leather', image: '/customize/interior/1.png' },
  { id: 2, name: 'Tan Leather', image: '/customize/interior/2.png' },
  { id: 3, name: 'Red Stitch', image: '/customize/interior/3.png' },
  { id: 4, name: 'Red Stitch', image: '/customize/interior/4.png' },
  { id: 5, name: 'Red Stitch', image: '/customize/interior/5.png' },
  { id: 6, name: 'Red Stitch', image: '/customize/interior/6.png' },
  { id: 7, name: 'Red Stitch', image: '/customize/interior/7.png' },
]

export default function CustomizePage() {
  const [selectedColor, setSelectedColor] = useState(carColors[0])
  const [selectedWheel, setSelectedWheel] = useState(wheelOptions[0])
  const [selectedInterior, setSelectedInterior] = useState(interiorOptions[0])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-neutral-900 via-black to-neutral-950 text-white">
      <Header />

      <main className="px-6 pt-32 pb-24">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-14 tracking-tight">
          Customize Your Lamborghini
        </h1>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          {/* Car Preview */}
          <div className="relative w-full h-[320px] xl:h-[400px] bg-neutral-800 rounded-3xl shadow-2xl overflow-hidden border border-neutral-700">
            <Image
              src={selectedColor.image}
              alt={`Car color: ${selectedColor.name}`}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL="/loading.png"
              priority
            />
            <div className="absolute bottom-4 right-4 w-20 h-20 xl:w-24 xl:h-24 rounded-full overflow-hidden ring-2 ring-yellow-400 shadow-lg">
              <Image
                src={selectedWheel.image}
                alt={`Wheel: ${selectedWheel.name}`}
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="/loading.png"
              />
            </div>
          </div>

          {/* Interior Preview */}
          <div className="relative w-full h-[320px] xl:h-[400px] bg-neutral-800 rounded-3xl shadow-2xl overflow-hidden border border-neutral-700">
            <Image
              src={selectedInterior.image}
              alt={`Interior: ${selectedInterior.name}`}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL="/loading.png"
            />
          </div>

          {/* Controls */}
          <div className="space-y-10">
            {/* Exterior Color Picker */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Exterior Color</h2>
              <div className="flex flex-wrap gap-3">
                {carColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={clsx(
                      'w-10 h-10 rounded-full border-2 transition-all duration-200',
                      selectedColor.name === color.name
                        ? 'ring-4 ring-yellow-500 scale-110'
                        : 'border-white hover:scale-105 hover:ring-2 hover:ring-yellow-300'
                    )}
                    style={{ backgroundColor: color.value }}
                  />
                ))}
              </div>
            </div>

            {/* Wheel Picker */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Wheel Style</h2>
              <div className="flex flex-wrap gap-3">
                {wheelOptions.map((wheel) => (
                  <div
                    key={wheel.id}
                    onClick={() => setSelectedWheel(wheel)}
                    className={clsx(
                      'p-1 rounded-xl cursor-pointer transition-all duration-200 border-2',
                      selectedWheel.id === wheel.id
                        ? 'border-yellow-500 scale-105 shadow-lg'
                        : 'border-white hover:scale-105 hover:border-yellow-300'
                    )}
                  >
                    <Image
                      src={wheel.image}
                      alt={wheel.name}
                      width={64}
                      height={64}
                      className="rounded-md"
                      placeholder="blur"
                      blurDataURL="/loading.png"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Interior Picker */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Interior</h2>
              <div className="flex flex-wrap gap-3">
                {interiorOptions.map((interior) => (
                  <div
                    key={interior.id}
                    onClick={() => setSelectedInterior(interior)}
                    className={clsx(
                      'p-1 rounded-xl cursor-pointer transition-all duration-200 border-2',
                      selectedInterior.id === interior.id
                        ? 'border-yellow-500 scale-105 shadow-lg'
                        : 'border-white hover:scale-105 hover:border-yellow-300'
                    )}
                  >
                    <Image
                      src={interior.image}
                      alt={interior.name}
                      width={64}
                      height={64}
                      className="rounded-md"
                      placeholder="blur"
                      blurDataURL="/loading.png"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-16 text-center text-lg tracking-wide space-y-2">
          <p>
            <strong>Color:</strong>{' '}
            <span style={{ color: selectedColor.value }}>{selectedColor.name}</span>
          </p>
          <p><strong>Wheels:</strong> {selectedWheel.name}</p>
          <p><strong>Interior:</strong> {selectedInterior.name}</p>
        </div>
      </main>
    </div>
  )
}
