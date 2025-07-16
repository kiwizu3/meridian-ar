'use client';

import { Spinner } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CitiesAndCommunitiesPart1 from '../Work&Economic/part1';

const CitiesAndCommunitiesPart2 = dynamic(() => import('./part2'), {
  ssr: false,
  suspense: true,
});

export default function CitiesAndCommunities() {
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
      <CitiesAndCommunitiesPart1 />
      {valArr.includes(1) && (
        <div>
          <CitiesAndCommunitiesPart2 />
        </div>
      )}

      <div className="py-7 flex justify-center" ref={ref}>
        {value < 1 && <Spinner />}
      </div>
    </div>
  );
}
