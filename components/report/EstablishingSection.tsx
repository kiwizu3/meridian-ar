'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import LionPawCircle from './LionPawCircle';
import DownloadPDFButton from './DownloadPDFButton';
import PopUpModel from './PopUpModel';

// Import your content components
import BoardComposition from './content/section5/BoardComposition';
import GovernanceStructure from './content/section5/GovernanceStructure';
import GovernanceHighlights from './content/section5/GovernanceHighlights';
import GovernanceProcesses from './content/section5/GovernanceProcesses';

export default function EstablishingSection() {
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
    { label: 'Composition of the Board', content: <BoardComposition /> },
    { label: 'Governance Structure', content: <GovernanceStructure /> },
    {
      label: 'Corporate Governance Highlights',
      content: <GovernanceHighlights />,
    },
    { label: 'Governance Processes', content: <GovernanceProcesses /> },
  ];

  return (
    <div className="bg-cardGreen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 px-20">
        <div className="order-last md:order-first lg:order-first grid grid-cols-1 gap-12">
          <div className="bg-[#467643] p-6 rounded-lg text-lg font-normal shadow-lg">
            <p>
              LBF upholds strong corporate governance, built on transparency,
              accountability, and ethical leadership. Its governance framework
              ensures regulatory compliance, strategic oversight, and alignment
              with stakeholder expectations to drive sustainable value creation.
              Equally, risk management is a core component of LBF's business
              strategy, promoting stability while enabling responsible growth.
            </p>
            <p className="mt-4">
              The Risk Appetite Statement guides decision-making, with oversight
              from the Board and the Board Integrated Risk Management Committee.
              Applying the three lines of defense model and a comprehensive,
              annually reviewed policy framework, LBF effectively identifies,
              assesses, and mitigates risks across all operations.
            </p>
          </div>
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2">
              {items.map((item, idx) => (
                <div className="flex" key={idx}>
                  <div>
                    <LionPawCircle />
                  </div>
                  <div
                    className="cursor-pointer content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg hover:opacity-90 transition"
                    onClick={() => handleOpenModal(item.label, item.content)}
                  >
                    <span>{item.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pl-8 py-5">
              <DownloadPDFButton />
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-end">
            <Image
              src="/images/report/breaker_9.png"
              alt="Ampifying Logo"
              width={428}
              height={132}
              className="bg-[#FFFFFFCC] rounded-md"
            />
          </div>
          <div className="">
            <div>
              <Image
                src="/images/report/Mosaic_art_07 1.png"
                alt="Lion Logo"
                width={796}
                height={564}
                className="z-10"
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
