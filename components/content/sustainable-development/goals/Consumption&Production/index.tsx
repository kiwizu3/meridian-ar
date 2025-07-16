'use client';

import { Spinner } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ConsumptionProductionPart1 from './Part1';

const ConsumptionProductionPart2 = dynamic(() => import('./Part2'), {
  ssr: false,
  suspense: true,
});

const ConsumptionProductionPart3 = dynamic(() => import('./Part3'), {
  ssr: false,
  suspense: true,
});

export default function ConsumptionProduction() {
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
      <ConsumptionProductionPart1 />
      {valArr.includes(1) && (
        <div>
          <ConsumptionProductionPart2 />
        </div>
      )}
      {valArr.includes(2) && (
        <div>
          <ConsumptionProductionPart3 />
        </div>
      )}

      <div className="py-7 flex justify-center" ref={ref}>
        {value < 2 && <Spinner />}
      </div>
    </div>
  );
}
