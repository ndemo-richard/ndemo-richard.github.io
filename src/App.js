// App.js or the specific page component
import React from 'react';
import HeroSection from './components/HeroSection';
import AboutMeSection from './components/AboutMeSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="bg-dark text-white min-h-screen font-body">
      <Navbar />
      <HeroSection />
      <AboutMeSection />
      <PortfolioSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <BackToTop />
    </div>
  );
}

export default App;
