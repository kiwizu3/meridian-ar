'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import LionPawCircle from './LionPawCircle';
// import DownloadPDFButton from './DownloadPDFButton';
import PopUpModel from './PopUpModel';

// Import your content components
import ShareTradingInfo from './content/section7/ShareTradingInfo';
import ShareholdingDistribution from './content/section7/ShareholdingDistribution';
import LargestShareholders from './content/section7/ShareholdingDistribution';

export default function EnvisioningSection() {
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
    {
      label: 'Share Trading Information and Market Capitalization',
      content: <ShareTradingInfo />,
    },
    {
      label: 'Distribution of Shareholding',
      content: <ShareholdingDistribution />,
    },
    {
      label: 'Largest Shareholders of the Company',
      content: <LargestShareholders />,
    },
  ];

  return (
    <div className="bg-cardGreen">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 py-14 px-6">
        <div className="">
          <div className="">
            <Image
              src="/images/report/Envisioning-the-future.svg"
              alt="Ampifying Logo"
              width={335}
              height={117}
            />
          </div>
          <div className="">
            <div>
              <Image
                src="/images/report/Mosaic_art_06 1.png"
                alt="Lion Logo"
                width={646}
                height={603}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-reportGreen p-6 rounded-lg text-lg font-normal">
            <p>
              As we reach the end of our Integrated Annual Report 2024/25, we
              invite readers to explore the full breadth of insights, data, and
              disclosures that reflect our unwavering commitment to
              transparency, accountability, governance, and sustainability. From
              investor highlights and financial performance to global reporting
              standards, ethical governance, and anti-corruption practices,
              every detail underscores our dedication to responsible corporate
              citizenship. Supporting resources, from organisational structures
              to reporting indices, offer further clarity and depth. Together,
              these elements paint a complete picture of us, which is resilient,
              future-ready, and driven by purpose in all that we do.
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

            <div>
              <a href="/images/report/pdf/envisioning_the_future.pdf" download>
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

      {/* Popup Modal */}
      <PopUpModel isOpen={isOpen} onOpenChange={onOpenChange} tabs={tabs} />
    </div>
  );
}
