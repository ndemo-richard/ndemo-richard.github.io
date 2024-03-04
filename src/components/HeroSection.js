// HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-800 h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-logo bg-cover bg-center animate-bgFlow"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="z-10 p-5 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Tech Artisan: Coding, Cloud & Continuous Deployment
        </h1>
        <p className="text-xl md:text-3xl mb-8">
          Crafting Future-Proof Solutions with Precision and Passion
        </p>
        <a
          href="#projects"
          className="inline-block bg-accent hover:bg-neon text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out"
        >
          Discover My Projects
        </a>
      </div>
      
    </div>
  );
};

export default HeroSection;
