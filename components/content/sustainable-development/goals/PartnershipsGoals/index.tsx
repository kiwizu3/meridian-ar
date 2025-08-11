'use client';

import { Spinner } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import PartnershipsGoalsPart1 from '../LifeOnLand/Part1';

const PartnershipsGoalsPart2 = dynamic(
  () => import('../SustainableCities&Communities/part2'),
  {
    ssr: false,
    suspense: true,
  },
);

const PartnershipsGoalsPart3 = dynamic(
  () => import('../LifeBelowWater/Part1'),
  {
    ssr: false,
    suspense: true,
  },
);

const PartnershipsGoalsPart4 = dynamic(() => import('./Part4'), {
  ssr: false,
  suspense: true,
});

export default function PartnershipsGoals() {
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
      <PartnershipsGoalsPart1 />
      {valArr.includes(1) && (
        <div>
          <PartnershipsGoalsPart2 />
        </div>
      )}
      {valArr.includes(2) && (
        <div>
          <PartnershipsGoalsPart3 />
        </div>
      )}
      {valArr.includes(3) && (
        <div>
          <PartnershipsGoalsPart4 />
        </div>
      )}

      <div className="py-7 flex justify-center" ref={ref}>
        {value < 3 && <Spinner />}
      </div>
    </div>
  );
}
