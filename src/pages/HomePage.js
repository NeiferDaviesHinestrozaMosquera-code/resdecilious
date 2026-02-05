import React from 'react';
import ImageCarousel from '../components/ui/ImageCarousel';
import MenuSection from '../components/sections/MenuSection';
import AboutSection from '../components/sections/AboutSection';
import GallerySection from '../components/sections/GallerySection';
import Footer from '../components/layout/Footer';

const HomePage = () => {
  return (
    <div>
      {/* Otros componentes */}
      <ImageCarousel images={['/images/banner1.jpg', '/images/banner2.jpg']} />
      <MenuSection />
      <AboutSection />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default HomePage;