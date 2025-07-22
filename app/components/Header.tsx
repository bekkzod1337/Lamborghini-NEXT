"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={60} height={30} />
        </Link>
        <nav className="flex gap-12 font-lamborghini tracking-wide">
          <Link
            href="/models"
            className="text-base text-white uppercase hover:text-[#FFD700] transition-colors duration-200"
          >
            Models
          </Link>
          <Link
            href="/customize"
            className="text-base text-white uppercase hover:text-[#FFD700] transition-colors duration-200"
          >
            Customize
          </Link>
          <Link
            href="/dealers"
            className="text-base text-white uppercase hover:text-[#FFD700] transition-colors duration-200"
          >
            Dealers
          </Link>
        </nav>
      </div>
    </header>
  );
}
