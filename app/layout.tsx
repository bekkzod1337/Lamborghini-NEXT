import './globals.css';
import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-lamborghini',
});

export const metadata: Metadata = {
  title: 'Lamborghini',
  description: 'Luxury Performance Cars',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={oswald.variable}>
      <body className="font-lamborghini">{children}</body>
    </html>
  );
}
