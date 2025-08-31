import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Text3D, Center } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import MenuItems3D from './MenuItems3D';
import AnimatedCamera from './AnimatedCamera';

const Scene3D = ({ menuData }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 75 }}
      style={{ height: '100vh', width: '100%' }}
    >
      <Suspense fallback={null}>
        <Environment preset="city" />
        <AnimatedCamera />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <MenuItems3D items={menuData} />
        </Float>
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Suspense>
    </Canvas>
  );
};

export default Scene3D;