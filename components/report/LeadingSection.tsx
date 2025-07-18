'use client';
import React from 'react';
import Image from 'next/image';
// import dynamic from 'next/dynamic';
import LionPawCircle from './LionPawCircle';
import DownloadPDFButton from './DownloadPDFButton';

// import PopUpModel from './PopUpModel';
// import SustainabilityStrategy from './content/SustainabilityStrategy';

// Replace them with the actual content
// const tabItems = [
//   {
//     contentLabelPairs: [
//       { label: 'Sustainability Strategy', content: <SustainabilityStrategy /> },
//     ],
//   },
// ];

export default function LeadingSection() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 px-20">
        <div className="">
          <div className="">
            <Image
              src="/images/report/breaker_10.png"
              alt="Ampifying Logo"
              width={542}
              height={194}
            />
          </div>
          <div className="">
            <div>
              <Image
                src="/images/report/Mosaic_art_09.png"
                alt="Lion Logo"
                width={647}
                height={563}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12">
          <div className="bg-[#467643] p-6 rounded-lg text-lg font-normal">
            <p>
              In 2024/25, LBF delivered outstanding financial performance,
              recording a 13% increase in net profit after tax to a historic
              high of Rs. 10.8 billion. Net interest income rose by 3%, while
              loans and receivables grew by 23%. The total asset base expanded
              by 19%, reaching Rs. 240 billion. Backed by a diverse portfolio,
              including deposits, loans, value-added services, and digital
              financial solutions, LBF remained resilient and adaptive in a
              fast-changing environment. As the highest taxpayer among Sri
              Lanka’s NBFIs, the Company continues to support national economic
              progress through sustainable value creation.
            </p>
          </div>
          <div>
            <div className="flex py-2 pr-10">
              <div>
                <LionPawCircle />
              </div>
              <div className="content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg">
                <span>Independent Auditors Report</span>
              </div>
            </div>

            <div className="flex py-2 pr-10">
              <div>
                <LionPawCircle />
              </div>
              <div className="content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg">
                <span>Income Statement</span>
              </div>
            </div>

            <div className="flex py-2 pr-10">
              <div>
                <LionPawCircle />
              </div>
              <div className="content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg">
                <span>Financial Calender</span>
              </div>
            </div>

            <div className="flex py-2 pr-10">
              <div>
                <LionPawCircle />
              </div>
              <div className="content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg">
                <span>Finance Statement Highlights</span>
              </div>
            </div>

            <div className="flex py-2 pr-10">
              <div>
                <LionPawCircle />
              </div>
              <div className="content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg">
                <span>Balance Sheet</span>
              </div>
            </div>
            {/* Delete the above 6 divs when the content is ready */}

            <div>
              <DownloadPDFButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
