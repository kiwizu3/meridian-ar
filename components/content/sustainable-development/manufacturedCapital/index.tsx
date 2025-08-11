'use client';

import { Spinner } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ManufacturedCapitalPart1 from './part1';

const ManufacturedCapitalPart2 = dynamic(() => import('./part2'), {
  ssr: false,
  suspense: true,
});
const ManufacturedCapitalPart3 = dynamic(() => import('./part3'), {
  ssr: false,
  suspense: true,
});
const ManufacturedCapitalPart4 = dynamic(() => import('./part4'), {
  ssr: false,
  suspense: true,
});
const ManufacturedCapitalPart5 = dynamic(() => import('./part5'), {
  ssr: false,
  suspense: true,
});

export default function ManufacturedCapital() {
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
      <ManufacturedCapitalPart1 />
      {valArr.includes(1) && (
        <div>
          <ManufacturedCapitalPart2 />
        </div>
      )}
      {valArr.includes(2) && (
        <div>
          <ManufacturedCapitalPart3 />
        </div>
      )}
      {valArr.includes(3) && (
        <div>
          <ManufacturedCapitalPart4 />
        </div>
      )}
      {valArr.includes(4) && (
        <div>
          <ManufacturedCapitalPart5 />
        </div>
      )}
      <div className="py-7 flex justify-center" ref={ref}>
        {value < 4 && <Spinner />}
      </div>
    </div>
  );
}
