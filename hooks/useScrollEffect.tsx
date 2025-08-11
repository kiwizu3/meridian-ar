import { MotionValue, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function useScrollEffect(offset: any): {
  containerRef: React.RefObject<HTMLDivElement>;
  scrollYProgress: MotionValue<number>;
  x: MotionValue<number>;
} {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset,
    layoutEffect: false,
  });
  const x = useTransform(scrollYProgress, [0, 0.7], [300, -700]);

  useEffect(() => {
    const handleChange = (value: number) => {};
    const unsubscribe = scrollYProgress.on('change', handleChange);
    return () => unsubscribe();
  }, [scrollYProgress]);

  return { containerRef, scrollYProgress, x };
}
