import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import BackgroundParticles from '../components/BackgroundParticles';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <BackgroundParticles />
      <HeroSection />
    </div>
  );
};

export default HomePage;