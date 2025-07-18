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

export default function AmplifyingSection() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 px-20">
        <div className="">
          <div className="">
            <Image
              src="/images/report/amplifying.png"
              alt="Ampifying Logo"
              width={334}
              height={152}
            />
          </div>
          <div className="">
            <div>
              <Image
                src="/images/report/Mosaic_art_08.png"
                alt="Lion Logo"
                width={619}
                height={607}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12">
          <div className="bg-[#467643] p-6 rounded-lg text-lg font-normal">
            <p>
              LBF follows a strategic path focused on creating sustainable value
              and long-term resilience. Operating in a dynamic financial
              environment, the Company remains agile in adapting to regulatory,
              economic, and technological changes. Its strategy is shaped by
              continuous stakeholder engagement and materiality assessments,
              ensuring alignment with evolving expectations.{' '}
            </p>
            <p className="mt-8">
              Emphasizing sustainable growth, digital innovation, and inclusive
              financial solutions, LBF seeks to deliver consistent value while
              supporting national development. This approach strengthens its
              reputation as a trusted and forward-thinking financial institution
              in Sri Lanka’s non-banking Financial sector.
            </p>
          </div>
          <div>
            <div className="flex py-2 pr-10">
              <div>
                <LionPawCircle />
              </div>
              <div className="content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg">
                <span>Approaching to Strategy</span>
              </div>
            </div>

            <div className="flex py-2 pr-10">
              <div>
                <LionPawCircle />
              </div>
              <div className="content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg">
                <span>Chairman’s Remarks</span>
              </div>
            </div>

            <div className="flex py-2 pr-10">
              <div>
                <LionPawCircle />
              </div>
              <div className="content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg">
                <span>Materiality Determination Process</span>
              </div>
            </div>

            <div className="flex py-2 pr-10">
              <div>
                <LionPawCircle />
              </div>
              <div className="content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg">
                <span>Strategic Journey</span>
              </div>
            </div>

            <div className="flex py-2 pr-10">
              <div>
                <LionPawCircle />
              </div>
              <div className="content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg">
                <span>Our value creating business model</span>
              </div>
            </div>

            <div className="flex py-2 pr-10">
              <div>
                <LionPawCircle />
              </div>
              <div className="content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg">
                <span>Integrated Stakeholder Engagement Process</span>
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
