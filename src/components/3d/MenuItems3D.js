import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

const MenuItems3D = ({ items }) => {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {items.map((item, index) => (
        <motion.group
          key={item.id}
          initial={{ scale: 0, y: -5 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          position={[
            (index % 3 - 1) * 3,
            Math.floor(index / 3) * 2 - 2,
            0
          ]}
        >
          <Box args={[2, 2, 0.1]} position={[0, 0, 0]}>
            <meshStandardMaterial color={item.color || '#ff6b6b'} />
          </Box>
          <Text
            position={[0, 0, 0.06]}
            fontSize={0.3}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {item.name}
          </Text>
          <Text
            position={[0, -0.5, 0.06]}
            fontSize={0.2}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            ${item.price}
          </Text>
        </motion.group>
      ))}
    </group>
  );
};

export default MenuItems3D;