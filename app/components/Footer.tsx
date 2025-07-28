'use client'

import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black text-gray-400 py-8 border-t border-gray-800 text-center md:text-left">
      <div className="max-w-screen-xl mx-auto px-4 md:flex md:items-center md:justify-between">
        <p className="text-sm">&copy; {year} Lamborghini. All rights reserved.</p>

        <div className="mt-4 md:mt-0 flex gap-4 justify-center md:justify-start">
          <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
            <FaInstagram /> Instagram
          </a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
            <FaYoutube /> YouTube
          </a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
            <FaFacebook /> Facebook
          </a>
        </div>
      </div>
    </footer>
  )
}
