'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import LionPawCircle from './LionPawCircle';
import DownloadPDFButton from './DownloadPDFButton';
import PopUpModel from './PopUpModel';

// Import your content components
import ShareTradingInfo from './content/section7/ShareTradingInfo';
import ShareholdingDistribution from './content/section7/ShareholdingDistribution';
import LargestShareholders from './content/section7/LargestShareholders';

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 px-20">
        <div className="">
          <div className="">
            <Image
              src="/images/report/Breaker 8 (1).png"
              alt="Ampifying Logo"
              width={335}
              height={117}
              className="bg-[#FFFFFFCC] rounded-md"
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

        <div className="grid grid-cols-1 gap-12">
          <div className="bg-[#467643] p-6 rounded-lg text-lg font-normal">
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
                className="flex py-2 pr-10"
                key={idx}
                onClick={() => handleOpenModal(item.label, item.content)}
              >
                <div>
                  <LionPawCircle />
                </div>
                <div className="cursor-pointer content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg hover:opacity-90 transition">
                  <span>{item.label}</span>
                </div>
              </div>
            ))}

            <div>
              <DownloadPDFButton />
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      <PopUpModel isOpen={isOpen} onOpenChange={onOpenChange} tabs={tabs} />
    </div>
  );
}
