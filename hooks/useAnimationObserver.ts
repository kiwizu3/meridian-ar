import { useEffect, useRef, useState, MutableRefObject } from 'react';

interface IntersectionObserverOptions extends IntersectionObserverInit {}

const useAnimationObserver = (
  options: IntersectionObserverOptions,
): [MutableRefObject<HTMLDivElement | null>, boolean] => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};

export default useAnimationObserver;
