'use client';

import { Spinner } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ZeroHungerPart1 from './part1';

const ZeroHungerPart2 = dynamic(() => import('./part2'), {
  ssr: false,
  suspense: true,
});

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
      <ZeroHungerPart1 />
      {valArr.includes(1) && (
        <div>
          <ZeroHungerPart2 />
        </div>
      )}
      <div className="py-7 flex justify-center" ref={ref}>
        {value < 1 && <Spinner />}
      </div>
    </div>
  );
}
