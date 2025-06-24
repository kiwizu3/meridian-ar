'use client';

import { Spinner } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import SocialRelationshipCapitalPart1 from './part1';

const SocialRelationshipCapitalPart2 = dynamic(() => import('./part2'), {
  ssr: false,
  suspense: true,
});
const SocialRelationshipCapitalPart3 = dynamic(() => import('./part3'), {
  ssr: false,
  suspense: true,
});
const SocialRelationshipCapitalPart4 = dynamic(() => import('./part4'), {
  ssr: false,
  suspense: true,
});
const SocialRelationshipCapitalPart5 = dynamic(() => import('./part5'), {
  ssr: false,
  suspense: true,
});
const SocialRelationshipCapitalPart6 = dynamic(() => import('./part6'), {
  ssr: false,
  suspense: true,
});
const SocialRelationshipCapitalPart7 = dynamic(() => import('./part7'), {
  ssr: false,
  suspense: true,
});
const SocialRelationshipCapitalPart8 = dynamic(() => import('./part8'), {
  ssr: false,
  suspense: true,
});
const SocialRelationshipCapitalPart9 = dynamic(() => import('./part9'), {
  ssr: false,
  suspense: true,
});
const SocialRelationshipCapitalPart10 = dynamic(() => import('./part10'), {
  ssr: false,
  suspense: true,
});
const SocialRelationshipCapitalPart11 = dynamic(() => import('./part11'), {
  ssr: false,
  suspense: true,
});

export default function SocialRelationshipCapital() {
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
      <SocialRelationshipCapitalPart1 />
      {valArr.includes(1) && (
        <div>
          <SocialRelationshipCapitalPart2 />
        </div>
      )}
      {valArr.includes(2) && (
        <div>
          <SocialRelationshipCapitalPart3 />
        </div>
      )}
      {valArr.includes(3) && (
        <div>
          <SocialRelationshipCapitalPart4 />
        </div>
      )}
      {valArr.includes(4) && (
        <div>
          <SocialRelationshipCapitalPart5 />
        </div>
      )}
      {valArr.includes(5) && (
        <div>
          <SocialRelationshipCapitalPart6 />
        </div>
      )}
      {valArr.includes(6) && (
        <div>
          <SocialRelationshipCapitalPart7 />
        </div>
      )}
      {valArr.includes(7) && (
        <div>
          <SocialRelationshipCapitalPart8 />
        </div>
      )}
      {valArr.includes(8) && (
        <div>
          <SocialRelationshipCapitalPart9 />
        </div>
      )}
      {valArr.includes(9) && (
        <div>
          <SocialRelationshipCapitalPart10 />
        </div>
      )}
      {valArr.includes(10) && (
        <div>
          <SocialRelationshipCapitalPart11 />
        </div>
      )}
      <div className="py-7 flex justify-center" ref={ref}>
        {value < 10 && <Spinner />}
      </div>
    </div>
  );
}
