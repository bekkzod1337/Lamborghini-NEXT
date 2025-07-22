'use client';

import Intro from './components/Intro';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Gallery from './components/Gallery';
import Engine from './components/Engine';
import PerformanceStats from './components/PerformanceStats';
import InteriorSection from './components/InteriorSection';
import TechFeatures from './components/TechFeatures';
import Testimonials from './components/Testimonials';
import AboutLamborghini from './components/AboutLamborghini';
import ModelsSection from './components/ModelSection';

export default function HomePage() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Header />
      <HeroSection />
      <Intro />
      <ModelsSection />
      <AboutLamborghini />
      <Gallery />
      <Engine />
      <PerformanceStats />
      <InteriorSection />
      <TechFeatures />
      <Testimonials />
      <Footer />
    </main>
  );
}
