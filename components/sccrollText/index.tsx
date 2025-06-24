'use client';
import { useScrollEffect } from '@/hooks/useScrollEffect';
import { ScrollTextProps } from '@/types';
import { motion } from 'framer-motion';
import SpeechText from '../SpeechText';

export default function ScrollingText(props: Readonly<ScrollTextProps>) {
  const { containerRef, x } = useScrollEffect(['start end', 'end start']);

  return (
    <div ref={containerRef} className="text-center overflow-hidden">
      <motion.div style={{ x }}>
        <SpeechText>
          <p className="text-[70px] lg:text-[144px] text-white/20 font-primary font-black whitespace-nowrap w-full line-track">
            {props?.text}
          </p>
        </SpeechText>
      </motion.div>
    </div>
  );
}
