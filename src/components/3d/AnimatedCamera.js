import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from 'framer-motion';

const AnimatedCamera = () => {
  const { scrollYProgress } = useScroll();
  
  useFrame((state) => {
    const elapsedTime = state.clock.elapsedTime;
    state.camera.position.x = Math.sin(elapsedTime * 0.3) * 2;
    state.camera.position.y = Math.cos(elapsedTime * 0.2) * 1;
    state.camera.lookAt(0, 0, 0);
  });

  return null;
};

export default AnimatedCamera;