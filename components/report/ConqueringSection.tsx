'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import LionPawCircle from './LionPawCircle';
// import DownloadPDFButton from './DownloadPDFButton';
import PopUpModel from './PopUpModel';

// Import your content components
import AwardsAccolades from './content/section1/AwardsAccolades';
import FinancialHighlights from './content/section1/FinancialHighlights';
import SustainableCompetitiveAdvantage from './content/section1/SustainableCompetitiveAdvantage';
import NonFinancialHighlights from './content/section1/NonFinancialHighlights';
import StrategicJourney from './content/section2/StrategicJourney';

export default function ConqueringSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [tabs, setTabs] = useState<
    { id: number; label: string; content: React.ReactElement }[]
  >([]);

  const onOpenChange = useCallback(() => setIsOpen((prev) => !prev), []);

  const handleOpenModal = (label: string, content: React.ReactElement) => {
    setTabs([{ id: 1, label, content }]);
    setIsOpen(true);
  };

  const items = [
    { label: 'Awards and accolades', content: <AwardsAccolades /> },
    { label: 'Financial Highlights', content: <FinancialHighlights /> },
    {
      label:
        'Key Attributes that gave LBF its sustainable competitive advantage in 2025',
      content: <SustainableCompetitiveAdvantage />,
    },
    { label: 'Non Financial Highlights', content: <NonFinancialHighlights /> },
    { label: 'Strategic Journey', content: <StrategicJourney /> },
  ];

  return (
    <div className="bg-cardGreen">
      <div className="container grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 gap-10 py-14 px-6">
        <div className="col-span-2 order-last lg:order-first xl:order-first grid grid-cols-1 lg:col-span-1 xl:col-span-2 gap-6">
          <div className="bg-reportGreen p-6 rounded-lg text-lg font-normal shadow-lg">
            <p className="mt-4">
              With a legacy spanning over 54 years in Sri Lanka’s financial
              services sector, LB Finance PLC (LBF) is a leading Non-Banking
              Financial Institution (NBFI) in the country. The Company maintains
              an A-(lka) rating from Fitch Ratings Lanka Ltd., underscoring its
              financial strength and stability.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 lg:gap-5 lg:flex-row">
            <div className="flex flex-col gap-2">
              {items.slice(0, 3).map((item, idx) => (
                <div className="flex" key={idx}>
                  <div>
                    <LionPawCircle />
                  </div>
                  <div
                    className="cursor-pointer content-center labal-gradient w-full p-3 rounded-lg hover:opacity-90 transition"
                    onClick={() => handleOpenModal(item.label, item.content)}
                  >
                    <span>{item.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              {items.slice(3).map((item, idx) => (
                <div className="flex" key={idx}>
                  <div>
                    <LionPawCircle />
                  </div>
                  <div
                    className="cursor-pointer content-center labal-gradient w-full p-3 rounded-lg hover:opacity-90 transition"
                    onClick={() => handleOpenModal(item.label, item.content)}
                  >
                    <span>{item.label}</span>
                  </div>
                </div>
              ))}

              <div className="pl-8 py-5">
                <a
                  href="/images/report/pdf/conquering_with_courage.pdf"
                  download
                >
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

              {/* <div className="pl-8 py-5">
                <DownloadPDFButton />
              </div> */}
            </div>
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1 xl:col-span-2">
          <div className="flex justify-end">
            <Image
              src="/images/report/Conquering-with-courage.svg"
              alt="Ampifying Logo"
              width={347}
              height={108}
            />
          </div>
          <div className="">
            <div>
              <Image
                src="/images/report/mosaic_art_3.png"
                alt="Lion Logo"
                width={694}
                height={557}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      <PopUpModel isOpen={isOpen} onOpenChange={onOpenChange} tabs={tabs} />
    </div>
  );
}
