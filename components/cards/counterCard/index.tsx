'use client';
import SpeechText from '@/components/SpeechText';
import useIntersectionObserver from '@/hooks/useInterSectionObserver';
import { CounterCardProps } from '@/types';
import { useEffect, useState } from 'react';

export default function CounterCard(props: CounterCardProps) {
  const [count, setCount] = useState(0);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.8 });

  useEffect(() => {
    if (isIntersecting && count < props.value) {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < props.value) {
            return prevCount + 1;
          } else {
            clearInterval(interval);
            return prevCount;
          }
        });
      }, 150);
    }
  }, [isIntersecting, count, props?.value]);
  return (
    <div ref={ref} className="flex flex-col gap-2 px-4 md:px-6 lg:px-10">
      <SpeechText>
        <h1 className="font-primary font-black lg:text-[2rem] text-2xl md:text-3xl lg:leading-[48.51px] text-center">
          {props?.title}
        </h1>
      </SpeechText>
      <div className="flex flex-col gap-6">
        <div className="font-secondary font-normal text-center text-gary lg:text-[1.125rem] text-sm md:text-base lg:leading-[27px]">
          <SpeechText>
            <p>{props?.content}</p>
          </SpeechText>
        </div>
        <SpeechText>
          <p className="font-secondary text-sm md:text-base lg:text-[1.125rem ] lg:leading-[17.91px] text-center font-bold">
            {props?.subTitle}
          </p>
        </SpeechText>
        <div className="flex flex-col gap-2">
          <SpeechText>
            <p className="font-secondary text-base md:text-xl lg:text-2xl lg:leading-[23.88px] text-center bg-gradient-to-r from-red to-orange bg-clip-text text-transparent font-bold">
              {count}
            </p>
          </SpeechText>
          <SpeechText>
            <p className="font-secondary font-medium text-base md:text-xl lg:text-2xl lg:leading-[23.71px] text-center">
              {props?.counterText}
            </p>
          </SpeechText>
        </div>
      </div>
    </div>
  );
}
