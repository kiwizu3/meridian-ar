'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import LionPawCircle from './LionPawCircle';
// import DownloadPDFButton from './DownloadPDFButton';
import PopUpModel from './PopUpModel';

// Import your content components
import SustainabilityStrategy from './content/section3/SustainabilityStrategy';
import GreenhouseGasVerification from './content/section3/GreenhouseGasVerification';
import ContributingToUNSDGs from './content/section3/ContributingToUNSDGs';
import IndependenceAssurance from './content/section3/IndependenceAssurance';
import SustainabilityJourney from './content/section3/SustainabilityJourney';

export default function TransformingEnvironment() {
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
    { label: 'Sustainability Strategy', content: <SustainabilityStrategy /> },
    {
      label: 'Greenhouse Gas Verification Opinion',
      content: <GreenhouseGasVerification />,
    },
    { label: 'Contributing to UN SDGs', content: <ContributingToUNSDGs /> },
    { label: 'Independence Assurance', content: <IndependenceAssurance /> },
    { label: 'Sustainability Journey', content: <SustainabilityJourney /> },
  ];

  return (
    <div className="bg-cardGreen">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 py-14 px-6">
        <div className="">
          <div>
            <Image
              src="/images/report/Sustainability-Report.svg"
              alt="Transforming The Environment"
              width={421}
              height={103}
            />
          </div>
          <div className="">
            <div>
              <Image
                src="/images/report/Mosaic_art_04 1.png"
                alt="Lion Logo"
                width={806}
                height={722}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 z-10">
          <div className="bg-reportGreen p-6 rounded-lg text-lg font-normal">
            <p>
              LBF is committed to sustainability through a structured and
              responsible approach that encompasses the strategic pillars of the
              ESG principles into its operations.
            </p>
            <p className="mt-8">
              As a responsible corporate citizen, LBF integrates ESG principles
              into both governance and operations, with a focus on minimising
              its carbon footprint. LBF's structured approach to sustainability
              promotes inclusive financial services that are accessible,
              affordable, and relevant to stakeholders while helping the nation
              build resilience.
            </p>
          </div>

          <div>
            <div className="flex justify-start lg:flex flex-col xl:px-24 gap-2">
              {items.map((item, idx) => (
                <div
                  className="flex"
                  key={idx}
                  onClick={() => handleOpenModal(item.label, item.content)}
                >
                  <div>
                    <LionPawCircle />
                  </div>
                  <div className="cursor-pointer content-center labal-gradient w-full p-3 rounded-lg hover:opacity-90 transition">
                    <span>{item.label}</span>
                  </div>
                </div>
              ))}

              <div>
                <a
                  href="/images/report/pdf/transforming_the_environment.pdf"
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

              {/* <div>
              <DownloadPDFButton />
            </div> */}
            </div>

            <PopUpModel
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              tabs={tabs}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
