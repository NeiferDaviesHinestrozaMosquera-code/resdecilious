import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Slide = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.2) 100%
  );
`;

const Content = styled(motion.div)`
  text-align: center;
  color: white;
  z-index: 2;
`;

const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 4rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Subtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 2rem;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  z-index: 3;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  &.prev {
    left: 2rem;
  }

  &.next {
    right: 2rem;
  }
`;

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3',
      title: 'Experiencia Exclusiva',
      subtitle: 'Descubre la excelencia culinaria'
    },
    {
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3',
      title: 'Ambiente Sofisticado',
      subtitle: 'Diseño y elegancia en cada detalle'
    },
    {
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3',
      title: 'Cocina de Autor',
      subtitle: 'Sabores que trascienden lo ordinario'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <CarouselContainer>
      <AnimatePresence mode="wait">
        <Slide
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.5 }}
          style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
        >
          <Overlay />
          <Content
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Title>{slides[currentIndex].title}</Title>
            <Subtitle>{slides[currentIndex].subtitle}</Subtitle>
          </Content>
        </Slide>
      </AnimatePresence>
      
      <NavButton className="prev" onClick={prevSlide}>‹</NavButton>
      <NavButton className="next" onClick={nextSlide}>›</NavButton>
    </CarouselContainer>
  );
};

export default ImageCarousel;