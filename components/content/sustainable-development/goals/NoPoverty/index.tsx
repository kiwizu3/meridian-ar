'use client';

import { Spinner } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import NoPovertyPart1 from './part1';

const NoPovertyPart2 = dynamic(() => import('./part2'), {
  ssr: false,
  suspense: true,
});
const NoPovertyPart3 = dynamic(() => import('./part3'), {
  ssr: false,
  suspense: true,
});
const NoPovertyPart4 = dynamic(() => import('./part4'), {
  ssr: false,
  suspense: true,
});
const NoPovertyPart5 = dynamic(() => import('./part5'), {
  ssr: false,
  suspense: true,
});
const NoPovertyPart6 = dynamic(() => import('./part6'), {
  ssr: false,
  suspense: true,
});
const NoPovertyPart7 = dynamic(() => import('./part7'), {
  ssr: false,
  suspense: true,
});
const NoPovertyPart8 = dynamic(() => import('./part8'), {
  ssr: false,
  suspense: true,
});

export default function NoPoverty() {
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
      <NoPovertyPart1 />
      {valArr.includes(1) && (
        <div>
          <NoPovertyPart2 />
        </div>
      )}
      {valArr.includes(2) && (
        <div>
          <NoPovertyPart3 />
        </div>
      )}
      {valArr.includes(3) && (
        <div>
          <NoPovertyPart4 />
        </div>
      )}
      {valArr.includes(4) && (
        <div>
          <NoPovertyPart5 />
        </div>
      )}
      {valArr.includes(5) && (
        <div>
          <NoPovertyPart6 />
        </div>
      )}
      {valArr.includes(6) && (
        <div>
          <NoPovertyPart7 />
        </div>
      )}
      {valArr.includes(7) && (
        <div>
          <NoPovertyPart8 />
        </div>
      )}

      <div className="py-7 flex justify-center" ref={ref}>
        {value < 7 && <Spinner />}
      </div>
    </div>
  );
}
