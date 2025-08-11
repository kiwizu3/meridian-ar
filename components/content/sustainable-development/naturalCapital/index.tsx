'use client';

import { Spinner } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import NaturalCapitalPart1 from './part1';

const NaturalCapitalPart2 = dynamic(() => import('./part2'), {
  ssr: false,
  suspense: true,
});
const NaturalCapitalPart3 = dynamic(() => import('./part3'), {
  ssr: false,
  suspense: true,
});
const NaturalCapitalPart4 = dynamic(() => import('./part4'), {
  ssr: false,
  suspense: true,
});
const NaturalCapitalPart5 = dynamic(() => import('./part5'), {
  ssr: false,
  suspense: true,
});
const NaturalCapitalPart6 = dynamic(() => import('./part6'), {
  ssr: false,
  suspense: true,
});
const NaturalCapitalPart7 = dynamic(() => import('./part7'), {
  ssr: false,
  suspense: true,
});

export default function NaturalCapital() {
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
      <NaturalCapitalPart1 />
      {valArr.includes(1) && (
        <div>
          <NaturalCapitalPart2 />
        </div>
      )}
      {valArr.includes(2) && (
        <div>
          <NaturalCapitalPart3 />
        </div>
      )}
      {valArr.includes(3) && (
        <div>
          <NaturalCapitalPart4 />
        </div>
      )}
      {valArr.includes(4) && (
        <div>
          <NaturalCapitalPart5 />
        </div>
      )}
      {valArr.includes(5) && (
        <div>
          <NaturalCapitalPart6 />
        </div>
      )}
      {valArr.includes(6) && (
        <div>
          <NaturalCapitalPart7 />
        </div>
      )}
      <div className="py-7 flex justify-center" ref={ref}>
        {value < 6 && <Spinner />}
      </div>
    </div>
  );
}
