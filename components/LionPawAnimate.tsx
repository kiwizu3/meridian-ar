'use client';

import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  rotateDeg: number;
};

export default function LionPawAnimate({ rotateDeg }: Props) {
  return (
    <motion.img
      src="/images/lion-pow.png"
      className={'w-[500px]'}
      alt="lion img"
      style={{ rotate: `${rotateDeg}deg` }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 5 }}
      viewport={{ once: true, amount: 0.5 }}
    />
  );
}
