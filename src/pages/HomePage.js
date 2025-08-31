import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ImageCarousel from '../components/ui/ImageCarousel';
import Hero3D from '../components/3d/Hero3D';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import MenuSection from '../components/sections/MenuSection';
import AboutSection from '../components/sections/AboutSection';
import GallerySection from '../components/sections/GallerySection';
import Footer from '../components/layout/Footer';

const HomeContainer = styled.div`
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Section = styled.section`
  padding: 8rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const HomePage = () => {
  const { containerRef } = useScrollAnimations();

  useEffect(() => {
    // Preload critical images
    const images = [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0'
    ];
    
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <HomeContainer ref={containerRef}>
      <HeroSection>
        <ImageCarousel />
      </HeroSection>
      
      <Section data-animate="fade-up">
        <AboutSection />
      </Section>
      
      <Section data-animate="fade-up">
        <MenuSection />
      </Section>
      
      <Section data-animate="fade-up">
        <GallerySection />
      </Section>
      
      <Footer />
    </HomeContainer>
  );
};

export default HomePage;