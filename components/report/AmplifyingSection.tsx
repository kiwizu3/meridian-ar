'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import LionPawCircle from './LionPawCircle';
// import DownloadPDFButton from './DownloadPDFButton';

import PopUpModel from './PopUpModel';

import SustainabilityStrategy from './content/section2/ApproachStrategy';
import ChairmansRemarks from './content/section2/ChairmansRemarks';
import CreatingBusinessModel from './content/section2/CreatingBusinessModel';
import IntegratedStakeholder from './content/section2/IntegratedStakeholder';
import MaterialityDetermination from './content/section2/MaterialityDetermination';
import StrategicJourney from './content/section2/StrategicJourney';

export default function AmplifyingSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [tabs, setTabs] = useState<
    { id: number; label: string; content: React.ReactElement }[]
  >([]);

  const onOpenChange = useCallback(() => setIsOpen((prev) => !prev), []);

  const handleOpenModal = (label: string, content: React.ReactElement) => {
    console.log('Opening modal with:', { label, content }); // Add this
    setTabs([{ id: 1, label, content }]);
    setIsOpen(true);
  };

  const items = [
    { label: 'Approaching to Strategy', content: <SustainabilityStrategy /> },
    { label: 'Chairman’s Remarks', content: <ChairmansRemarks /> },
    {
      label: 'Materiality Determination Process',
      content: <MaterialityDetermination />,
    },
    { label: 'MD Statement.', content: <StrategicJourney /> },
    {
      label: 'Our value creating business model',
      content: <CreatingBusinessModel />,
    },
    {
      label: 'Integrated Stakeholder Engagement Process',
      content: <IntegratedStakeholder />,
    },
  ];
  return (
    <div>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 py-14 px-6">
        <div>
          <div>
            <Image
              src="/images/report/Amplifying-our-reach.svg"
              alt="Ampifying Logo"
              width={334}
              height={152}
            />
          </div>
          <div>
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

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-reportGreen p-6 rounded-lg text-lg font-normal">
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
            {items.map((item, idx) => (
              <div
                className="flex py-2 pr-0 md:pr-0 lg:pr-10"
                key={idx}
                onClick={() => handleOpenModal(item.label, item.content)}
              >
                <div>
                  <LionPawCircle />
                </div>
                <div className="cursor-pointer content-center labal-gradient w-full p-3 rounded-lg hover:bg-reportGreen">
                  <span>{item.label}</span>
                </div>
              </div>
            ))}

            {/* <div className="flex py-2 pr-10">
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
            </div> */}
            {/* Delete the above 6 divs when the content is ready */}
            {/* Mount reusable modal */}
          </div>
          <PopUpModel isOpen={isOpen} onOpenChange={onOpenChange} tabs={tabs} />

          <div>
            <a href="/images/report/pdf/amplifying_our_reach.pdf" download>
              <button className="download-pdf-button">
                <span className="download-pdf-text">Download PDF</span>
                <span className="download-pdf-icon-wrapper">
                  <span className="download-pdf-icon">
                    <img
                      src="/images/report/ant-design_file-pdf-filled.png"
                      alt="PDF Icon"
                    />
                  </span>
                </span>
              </button>
            </a>
          </div>

          {/* <div>
            <DownloadPDFButton />
          </div> */}
        </div>
      </div>
    </div>
  );
}
