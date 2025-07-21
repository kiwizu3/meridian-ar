import React from 'react';
import Image from 'next/image';

export default function BoardComposition() {
  return (
    <div className="approach-strategy p-6 bg-themeGreen max-h-[70vh] overflow-y-auto">
      <div className="grid grid-cols-1">
        <h1 className="text-4xl font-bold mb-2">BOARD OF DIRECTORS</h1>
        {/* Image 1 */}
        <div className="rounded-lg py-9">
          <Image
            src="/images/report/content/greenhouse-gas-assurance-report-01.png"
            alt="Greenhouse gas assurance report page 1"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
        <div>
          <h3>Left to Right</h3>
          <ul>
            <li>
              Ms. Ashwini Natesan - Independent Non-Executive Director, Mr.
              Dharmadasa Rangalle - Non-Executive Director
            </li>
            <li>
              Mr. Ashane Jayasekara - Independent Non-Executive Director/Senior
              Independent Director, Mr. Sumith Adhihetty - Managing Director,
            </li>
            <li>
              Mr. Piyal Hennayake - Independent Non-Executive Director, Ms.
              Yogadinusha Bhaskaran - Non-Executive Director
            </li>
          </ul>
        </div>

        {/* Image 2 */}
        <div className="rounded-lg py-9">
          <Image
            src="/images/report/content/greenhouse-gas-assurance-report-02.png"
            alt="Greenhouse gas assurance report page 2"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
        <div>
          <h3>Left to Right</h3>
          <ul>
            <li>
              Mr. Priyantha Talwatte - Independent Non-Executive Director, Mr. G
              A R D Prasanna - Chairman/Non-Independent Non-Executive Director
            </li>
            <li>
              Mr. B D A Perera - Executive Director, Mr. Niroshan Udage - Deputy
              Managing Director, Mr. Ravindra Yatawara - Executive Director,
            </li>
            <li>Ms. Yanika Amarasekera - Independent Non-Executive Director</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
