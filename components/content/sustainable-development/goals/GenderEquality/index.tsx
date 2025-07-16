'use client';

import { Spinner } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import GenderQualityPart1 from '../NoPoverty/part3';

const GenderQualityPart2 = dynamic(() => import('./part2'), {
  ssr: false,
  suspense: true,
});

const GenderQualityPart3 = dynamic(() => import('./part3'), {
  ssr: false,
  suspense: true,
});

const GenderQualityPart4 = dynamic(() => import('./part4'), {
  ssr: false,
  suspense: true,
});

export default function GenderQuality() {
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
      <GenderQualityPart1 />
      {valArr.includes(1) && (
        <div>
          <GenderQualityPart2 />
        </div>
      )}
      {valArr.includes(2) && (
        <div>
          <GenderQualityPart3 />
        </div>
      )}
      {valArr.includes(3) && (
        <div>
          <GenderQualityPart4 />
        </div>
      )}

      <div className="py-7 flex justify-center" ref={ref}>
        {value < 3 && <Spinner />}
      </div>
    </div>
  );
}
