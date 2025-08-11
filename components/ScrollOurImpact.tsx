'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ScrollIcon from './icons/scrollIcon';

const ScrollOurImpact = () => {
  const [showScrollIcon, setShowScrollIcon] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIcon(false);
      } else {
        setShowScrollIcon(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="absolute left-0 right-0 bottom-24 flex justify-center our-impact-img"
      initial={{ opacity: 1 }}
      animate={{ opacity: showScrollIcon ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <ScrollIcon />
    </motion.div>
  );
};

export default ScrollOurImpact;
