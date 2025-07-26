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
    const images = Array.from(document.querySelectorAll('img'));
    const total = images.length;
    let loaded = 0;

    if (total === 0) {
      setProgress(100);
      setIsLoaded(true);
      return;
    }

    const loadImage = (img: HTMLImageElement) =>
      new Promise<void>((resolve) => {
        if (img.complete) {
          loaded++;
          setProgress(Math.round((loaded / total) * 100));
          resolve();
        } else {
          img.onload = () => {
            loaded++;
            setProgress(Math.round((loaded / total) * 100));
            resolve();
          };
          img.onerror = () => {
            loaded++;
            setProgress(Math.round((loaded / total) * 100));
            resolve();
          };
        }
      });

    Promise.all(images.map((img) => loadImage(img))).then(() => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 800); // Silliqlik uchun
    });
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
