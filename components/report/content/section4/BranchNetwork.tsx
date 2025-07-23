import React from 'react';
import Image from 'next/image';

export default function BranchNetwork() {
  return (
    <div className="annual-report p-6 bg-themeGreen max-h-[70vh] overflow-y-auto">
      <h1 className="text-4xl font-bold">BRANCH NETWORK</h1>
      <div className="bg-greeen2 p-3 rounded-lg mb-8">
        <div>
          <div className="flex justify-center">
            <Image
              src="/images/report/content/branch-network.png"
              alt="BRANCH NETWORK IMAGE"
              width={580}
              height={630}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
