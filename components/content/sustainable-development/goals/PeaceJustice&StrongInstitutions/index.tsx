'use client';

import { Spinner } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import PeaceJusticeInstitutionsPart1 from './Part1';

const PeaceJusticeInstitutionsPart2 = dynamic(() => import('./Part2'), {
  ssr: false,
  suspense: true,
});

const PeaceJusticeInstitutionsPart3 = dynamic(() => import('./Part3'), {
  ssr: false,
  suspense: true,
});

const PeaceJusticeInstitutionsPart4 = dynamic(() => import('./Part4'), {
  ssr: false,
  suspense: true,
});

export default function PeaceJusticeInstitutions() {
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
      <PeaceJusticeInstitutionsPart1 />
      {valArr.includes(1) && (
        <div>
          <PeaceJusticeInstitutionsPart2 />
        </div>
      )}
      {valArr.includes(2) && (
        <div>
          <PeaceJusticeInstitutionsPart3 />
        </div>
      )}
      {valArr.includes(3) && (
        <div>
          <PeaceJusticeInstitutionsPart4 />
        </div>
      )}

      <div className="py-7 flex justify-center" ref={ref}>
        {value < 3 && <Spinner />}
      </div>
    </div>
  );
}
