'use client';

import useAnimationObserver from '@/hooks/useAnimationObserver';
import React, { ReactNode } from 'react';

interface FadeInTextProps {
  children: ReactNode;
}

const FadeInText: React.FC<FadeInTextProps> = ({ children }) => {
  const [ref, isIntersecting]: any = useAnimationObserver({
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-all transform duration-1000 ease-out ${
        isIntersecting
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInText;
