import React from 'react';
import Image from 'next/image';

export default function CreatingBusinessModel() {
  return (
    <div className="creating-business-model p-6 bg-themeGreen max-h-[70vh] overflow-y-auto custom-scrollbar">
      <div className="grid grid-cols-1">
        {/* Image 1 */}
        <div className="rounded-lg py-9">
          <Image
            src="/images/report/content/LBF_BUSINESS_MODEL.png"
            alt="Creating Business Model page 53"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
