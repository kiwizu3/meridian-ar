'use client';

import { Spinner } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ClimateActionPart1 from './Part1';

const ClimateActionPart2 = dynamic(() => import('./Part2'), {
  ssr: false,
  suspense: true,
});

export default function ClimateAction() {
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
      <ClimateActionPart1 />
      {valArr.includes(1) && (
        <div>
          <ClimateActionPart2 />
        </div>
      )}

      <div className="py-7 flex justify-center" ref={ref}>
        {value < 1 && <Spinner />}
      </div>
    </div>
  );
}
