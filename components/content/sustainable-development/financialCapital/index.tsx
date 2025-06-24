'use client';

import { Spinner } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import FinancialCapitalPart1 from './part1';

const FinancialCapitalPart2 = dynamic(() => import('./part2'), {
  ssr: false,
  suspense: true,
});
const FinancialCapitalPart3 = dynamic(() => import('./part3'), {
  ssr: false,
  suspense: true,
});
const FinancialCapitalPart4 = dynamic(() => import('./part4'), {
  ssr: false,
  suspense: true,
});
const FinancialCapitalPart5 = dynamic(() => import('./part5'), {
  ssr: false,
  suspense: true,
});
const FinancialCapitalPart6 = dynamic(() => import('./part6'), {
  ssr: false,
  suspense: true,
});
const FinancialCapitalPart7 = dynamic(() => import('./part7'), {
  ssr: false,
  suspense: true,
});
const FinancialCapitalPart8 = dynamic(() => import('./part8'), {
  ssr: false,
  suspense: true,
});
const FinancialCapitalPart9 = dynamic(() => import('./part9'), {
  ssr: false,
  suspense: true,
});
const FinancialCapitalPart10 = dynamic(() => import('./part10'), {
  ssr: false,
  suspense: true,
});
const FinancialCapitalPart11 = dynamic(() => import('./part11'), {
  ssr: false,
  suspense: true,
});
const FinancialCapitalPart12 = dynamic(() => import('./part12'), {
  ssr: false,
  suspense: true,
});
const FinancialCapitalPart13 = dynamic(() => import('./part13'), {
  ssr: false,
  suspense: true,
});
const FinancialCapitalPart14 = dynamic(() => import('./part14'), {
  ssr: false,
  suspense: true,
});

export default function FinancialCapital() {
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
      <FinancialCapitalPart1 />
      {valArr.includes(1) && (
        <div>
          <FinancialCapitalPart2 />
        </div>
      )}
      {valArr.includes(2) && (
        <div>
          <FinancialCapitalPart3 />
        </div>
      )}
      {valArr.includes(3) && (
        <div>
          <FinancialCapitalPart4 />
        </div>
      )}
      {valArr.includes(4) && (
        <div>
          <FinancialCapitalPart5 />
        </div>
      )}
      {valArr.includes(5) && (
        <div>
          <FinancialCapitalPart6 />
        </div>
      )}
      {valArr.includes(6) && (
        <div>
          <FinancialCapitalPart7 />
        </div>
      )}
      {valArr.includes(7) && (
        <div>
          <FinancialCapitalPart8 />
        </div>
      )}
      {valArr.includes(8) && (
        <div>
          <FinancialCapitalPart9 />
        </div>
      )}
      {valArr.includes(9) && (
        <div>
          <FinancialCapitalPart10 />
        </div>
      )}
      {valArr.includes(10) && (
        <div>
          <FinancialCapitalPart11 />
        </div>
      )}
      {valArr.includes(11) && (
        <div>
          <FinancialCapitalPart12 />
        </div>
      )}
      {valArr.includes(12) && (
        <div>
          <FinancialCapitalPart13 />
        </div>
      )}
      {valArr.includes(13) && (
        <div>
          <FinancialCapitalPart14 />
        </div>
      )}
      <div className="py-7 flex justify-center" ref={ref}>
        {value < 13 && <Spinner />}
      </div>
    </div>
  );
}
