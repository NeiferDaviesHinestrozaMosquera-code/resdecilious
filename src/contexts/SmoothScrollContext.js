import React, { createContext, useContext, useEffect } from 'react';
import { ReactLenis } from '@react-lenis/core';
import '@react-lenis/core/styles.css';

const SmoothScrollContext = createContext();

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export const SmoothScrollProvider = ({ children }) => {
  return (
    <SmoothScrollContext.Provider value={{}}>
      <ReactLenis
        root
        options={{
          lerp: 0.1,
          duration: 1.2,
          smoothWheel: true,
          smoothTouch: false,
        }}
      >
        {children}
      </ReactLenis>
    </SmoothScrollContext.Provider>
  );
};