import React from 'react';
import Image from 'next/image';

export default function IndependenceAssurance() {
  return (
    <div className="approach-strategy p-6 bg-themeGreen max-h-[70vh] overflow-y-auto">
      <div className="grid grid-cols-1">
        <h1 className="text-4xl font-bold mb-2">INDEPENDENCE ASSURANCE</h1>
        {/* Image 1 */}
        <div className="rounded-lg py-9">
          <Image
            src="/images/report/content/INDEPENDENCE ASSURANCE.svg"
            alt="Governance Structure"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
