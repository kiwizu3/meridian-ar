'use client';

import useAnimationObserver from '@/hooks/useAnimationObserver';
import React, { ReactNode } from 'react';

interface FadeInTextProps {
  children: ReactNode;
}

const FadeInLeft: React.FC<FadeInTextProps> = ({ children }) => {
  const [ref, isIntersecting]: any = useAnimationObserver({
    threshold: 0.01,
  });

  return (
    <div
      ref={ref}
      className={`transform transition-all ease-out duration-1000 ${
        isIntersecting
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-24'
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInLeft;
