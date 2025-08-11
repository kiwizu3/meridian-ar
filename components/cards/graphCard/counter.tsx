'use client'

import React, { useEffect, useState } from 'react'

interface CounterProps {
  targetValue: number;
  interval?: number;
  increment?: number; 
}

const Counter: React.FC<CounterProps> = ({
  targetValue,
  interval = 100,
  increment = 1, 
}) => {
  const [currentValue, setCurrentValue] = useState<number>(0);

  useEffect(() => {
    const randomStartValue = Math.floor(Math.random() * (targetValue + 1));

    setCurrentValue(randomStartValue);

    const incrementCounter = () => {
      setCurrentValue((prevValue) => {
        if (prevValue + increment >= targetValue) {
          return targetValue;
        }
        return prevValue + increment;
      });
    };

    const timer = setInterval(incrementCounter, interval);

    return () => clearInterval(timer);
  }, [targetValue, interval, increment]);

  return (
    <>
      <p className="font-secondary font-bold text-4xl text-lightGreen">
        {currentValue} {increment !== 1 && currentValue !== 0 && '+'}
      </p>
    </>
  );
};


export default Counter
