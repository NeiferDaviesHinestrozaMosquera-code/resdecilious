import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'react-intersection-observer';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  const containerRef = useRef(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll('[data-animate]');
    
    elements.forEach((element) => {
      const animationType = element.getAttribute('data-animate');
      
      switch (animationType) {
        case 'fade-up':
          gsap.fromTo(element, 
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: element,
                start: 'top 95%',
                toggleActions: 'play none none reverse'
              }
            }
          );
          break;
          
        case 'fade-left':
          gsap.fromTo(element,
            { opacity: 0, x: 100 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: element,
                start: 'top 95%',
                toggleActions: 'play none none reverse'
              }
            }
          );
          break;
          
        case 'scale':
          gsap.fromTo(element,
            { opacity: 0, scale: 0.8 },
            {
              opacity: 1,
              scale: 1,
              duration: 1.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: element,
                start: 'top 95%',
                toggleActions: 'play none none reverse'
              }
            }
          );
          break;
      }
    });
  }, []);

  return { containerRef, ref, inView };
};