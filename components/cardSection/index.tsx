'use client';
import CounterCard from '@/components/cards/counterCard';
import useIntersectionObserver from '@/hooks/useInterSectionObserver';
import { CardSectionProps } from '@/types';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import FadeInText from '../FadeInText';
import SpeechText from '../SpeechText';

export default function CardSection(props: CardSectionProps) {
  const controls = useAnimation();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    if (isIntersecting) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isIntersecting]);

  const bgImageVariants = {
    hidden: {
      x: props?.bgImagePosition === 'left' ? '-100%' : '100%',
      opacity: 0,
      translateY: '-50%',
    },
    visible: {
      x: 0,
      opacity: 1,
      translateY: '-50%',
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 30,
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 30,
        delay: 0.9,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="relative overflow-hidden mb-20">
      <div className="container px-5 lg:px-0 relative z-20" ref={ref}>
        <motion.h1 className="pb-8 md:pb-10 lg:pb-[60px] pt-8 font-primary font-black text-center lg:text-[7.5rem] text-4xl md:text-[5.625rem]">
          <FadeInText>
            <SpeechText>
              <p
                className={`leading-[3rem] ${props?.lang === 'en' ? 'md:leading-[6rem]' : 'md:leading-[8rem]'}`}
              >
                {props?.title}
              </p>
              <p className="bg-gradient-to-r whitespace-pre-line from-yellow to-themeGreen bg-clip-text text-transparent md:leading-[10rem] leading-[4rem]">
                {props?.gradientTitle}
              </p>
            </SpeechText>
          </FadeInText>
        </motion.h1>
        <motion.div
          className="flex flex-wrap justify-center md:gap-y-[105px] gap-y-[70px] gap-x-8 py-4 md:py-8 lg:py-[46px]"
          variants={contentVariants}
          initial="hidden"
          animate={controls}
        >
          {props?.cards?.map((card: any, index) => (
            <motion.div className="lg:max-w-[403px] md:max-w-none" key={index}>
              <CounterCard
                value={card?.value}
                title={card?.title}
                content={card?.content}
                subTitle={card?.subtitle}
                counterText={card.counterText}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        className={`absolute top-1/2 ${props?.bgImagePosition == 'left' ? 'left-0' : 'right-0'} -translate-y-1/2 z-0`}
        variants={bgImageVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="relative">
          <Image
            src={props.bgImage as string}
            alt={'bg-image'}
            className="relative z-0"
          />
          <div className="z-10 h-[133px] w-full bg-gradient-to-b from-[#06253A] to-transparent absolute top-0 right-0 " />
          <div className="z-10 h-[133px] w-full bg-gradient-to-b from-transparent to-[#06253A] absolute bottom-0 right-0 " />
        </div>
      </motion.div>
    </div>
  );
}
