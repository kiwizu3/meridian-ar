'use client';

import { Spinner } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CleanWaterSanitation from '../GoodHealth&Wellbeing/part2';

export default function ZeroHunger() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [value, setValue] = useState(0);

  useEffect(() => {
    if (inView) setValue(value + 1);
  }, [inView]);

  const valArr = Array.from({ length: value + 1 }, (_, i) => i);

  return (
    <div>
      <CleanWaterSanitation />
      <div className="py-7 flex justify-center" ref={ref}>
        {value < 1 && <Spinner />}
      </div>
    </div>
  );
}
