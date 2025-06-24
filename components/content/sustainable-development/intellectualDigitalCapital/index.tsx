'use client';

import { Spinner } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import IntellectualDigitalCapitalPart1 from './part1';

const IntellectualDigitalCapitalPart2 = dynamic(() => import('./part2'), {
  ssr: false,
  suspense: true,
});
const IntellectualDigitalCapitalPart3 = dynamic(() => import('./part3'), {
  ssr: false,
  suspense: true,
});
const IntellectualDigitalCapitalPart4 = dynamic(() => import('./part4'), {
  ssr: false,
  suspense: true,
});
const IntellectualDigitalCapitalPart5 = dynamic(() => import('./part5'), {
  ssr: false,
  suspense: true,
});

export default function IntellectualDigitalCapital() {
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
      <IntellectualDigitalCapitalPart1 />
      {valArr.includes(1) && (
        <div>
          <IntellectualDigitalCapitalPart2 />
        </div>
      )}
      {valArr.includes(2) && (
        <div>
          <IntellectualDigitalCapitalPart3 />
        </div>
      )}
      {valArr.includes(3) && (
        <div>
          <IntellectualDigitalCapitalPart4 />
        </div>
      )}
      {valArr.includes(4) && (
        <div>
          <IntellectualDigitalCapitalPart5 />
        </div>
      )}
      <div className="py-7 flex justify-center" ref={ref}>
        {value < 4 && <Spinner />}
      </div>
    </div>
  );
}
