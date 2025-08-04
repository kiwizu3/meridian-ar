import React from 'react';
import Image from 'next/image';

export default function BoardComposition() {
  return (
    <div className="approach-strategy p-6 bg-themeGreen max-h-[70vh] overflow-y-auto">
      <div className="grid grid-cols-1">
        <h1 className="text-4xl font-bold mb-2">BOARD OF DIRECTORS</h1>
        {/* Image 1 */}
        <div className="rounded-lg py-9 bg-gary p-3 mb-5">
          <Image
            src="/images/report/content/board_of_directors1.svg"
            alt="BOARD OF DIRECTORS"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="rounded-lg py-9 bg-gary p-3 mb-5">
          <Image
            src="/images/report/content/board_of_directors2.svg"
            alt="BOARD OF DIRECTORS"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
