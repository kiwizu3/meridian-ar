'use client';

import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  rotateDeg: number;
  horizontalPosition: 'left' | 'right';
  verticalPosition: 'top-[2vw]' | 'top-[14vw]' | 'top-[100px]';
};

export default function LionPawAnimate({
  rotateDeg,
  horizontalPosition,
  verticalPosition,
}: Props) {
  const hPositionClass = horizontalPosition === 'left' ? 'left-0' : 'right-0';

  return (
    <motion.img
      src="/images/lion-pow.png"
      className={`absolute w-[500px] ${hPositionClass} ${verticalPosition} p-5`}
      alt="lion img"
      style={{ rotate: `${rotateDeg}deg` }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 5 }}
      viewport={{ once: true, amount: 0.5 }}
    />
  );
}
