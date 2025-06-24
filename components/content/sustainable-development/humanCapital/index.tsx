'use client';

import { Spinner } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import HumanCapitalPart1 from './part1';

const HumanCapitalPart2 = dynamic(() => import('./part2'), {
  ssr: false,
  suspense: true,
});
const HumanCapitalPart3 = dynamic(() => import('./part3'), {
  ssr: false,
  suspense: true,
});
const HumanCapitalPart4 = dynamic(() => import('./part4'), {
  ssr: false,
  suspense: true,
});
const HumanCapitalPart5 = dynamic(() => import('./part5'), {
  ssr: false,
  suspense: true,
});
const HumanCapitalPart6 = dynamic(() => import('./part6'), {
  ssr: false,
  suspense: true,
});
const HumanCapitalPart7 = dynamic(() => import('./part7'), {
  ssr: false,
  suspense: true,
});
const HumanCapitalPart8 = dynamic(() => import('./part8'), {
  ssr: false,
  suspense: true,
});
const HumanCapitalPart9 = dynamic(() => import('./part9'), {
  ssr: false,
  suspense: true,
});
const HumanCapitalPart10 = dynamic(() => import('./part10'), {
  ssr: false,
  suspense: true,
});
const HumanCapitalPart11 = dynamic(() => import('./part11'), {
  ssr: false,
  suspense: true,
});
const HumanCapitalPart12 = dynamic(() => import('./part12'), {
  ssr: false,
  suspense: true,
});

export default function HumanCapital() {
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
      <HumanCapitalPart1 />
      {valArr.includes(1) && (
        <div>
          <HumanCapitalPart2 />
        </div>
      )}
      {valArr.includes(2) && (
        <div>
          <HumanCapitalPart3 />
        </div>
      )}
      {valArr.includes(3) && (
        <div>
          <HumanCapitalPart4 />
        </div>
      )}
      {valArr.includes(4) && (
        <div>
          <HumanCapitalPart5 />
        </div>
      )}
      {valArr.includes(5) && (
        <div>
          <HumanCapitalPart6 />
        </div>
      )}
      {valArr.includes(6) && (
        <div>
          <HumanCapitalPart7 />
        </div>
      )}
      {valArr.includes(7) && (
        <div>
          <HumanCapitalPart8 />
        </div>
      )}
      {valArr.includes(8) && (
        <div>
          <HumanCapitalPart9 />
        </div>
      )}
      {valArr.includes(9) && (
        <div>
          <HumanCapitalPart10 />
        </div>
      )}
      {valArr.includes(10) && (
        <div>
          <HumanCapitalPart11 />
        </div>
      )}
      {valArr.includes(11) && (
        <div>
          <HumanCapitalPart12 />
        </div>
      )}
      <div className="py-7 flex justify-center" ref={ref}>
        {value < 11 && <Spinner />}
      </div>
    </div>
  );
}
