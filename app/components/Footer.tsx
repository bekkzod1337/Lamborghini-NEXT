'use client'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black text-gray-400 py-8 border-t border-gray-800 text-center md:text-left">
      <div className="container mx-auto px-4 md:flex md:items-center md:justify-between">
        <p className="text-sm">&copy; {year} Lamborghini. All rights reserved.</p>
        
        <div className="mt-4 md:mt-0 space-x-4">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">YouTube</a>
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
        </div>
      </div>
    </footer>
  )
}
