'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';

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
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const images = Array.from(document.images);
    let loaded = 0;

    const updateProgress = () => {
      loaded++;
      const percentage = Math.round((loaded / images.length) * 100);
      setProgress(percentage);
      if (percentage >= 100) {
        setTimeout(() => {
          setIsLoaded(true);
        }, 800); // delay for smoothness
      }
    };

    if (images.length === 0) {
      setProgress(100);
      setIsLoaded(true);
    } else {
      images.forEach((img) => {
        if (img.complete) {
          updateProgress();
        } else {
          img.addEventListener('load', updateProgress);
          img.addEventListener('error', updateProgress);
        }
      });
    }
  }, []);

  return (
    <main className="bg-black text-white overflow-hidden">
      {!isLoaded && <LoadingScreen progress={progress} />}
      {isLoaded && (
        <>
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
        </>
      )}
    </main>
  );
}
