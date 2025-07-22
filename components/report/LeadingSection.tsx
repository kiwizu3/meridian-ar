'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import LionPawCircle from './LionPawCircle';
import DownloadPDFButton from './DownloadPDFButton';
import PopUpModel from './PopUpModel';

// Import your content components
import IndependentAuditorsReport from './content/section6/IndependentAuditorsReport';
import IncomeStatement from './content/section6/IncomeStatement';
import FinancialCalendar from './content/section6/FinancialCalendar';
import FinanceStatementHighlights from './content/section6/FinanceStatementHighlights';
import BalanceSheet from './content/section6/BalanceSheet';

export default function LeadingSection() {
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
      label: 'Independent Auditors Report',
      content: <IndependentAuditorsReport />,
    },
    { label: 'Income Statement', content: <IncomeStatement /> },
    { label: 'Financial Calendar', content: <FinancialCalendar /> },
    {
      label: 'Finance Statement Highlights',
      content: <FinanceStatementHighlights />,
    },
    { label: 'Balance Sheet', content: <BalanceSheet /> },
  ];

  return (
    <div>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 py-14 px-6">
        <div className="">
          <div className="">
            <Image
              src="/images/report/Leading-the-pride.svg"
              alt="Ampifying Logo"
              width={236}
              height={103}
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

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-reportGreen p-6 rounded-lg text-lg font-normal">
            <p>
              In 2024/25, LBF delivered outstanding financial performance,
              recording a 13% increase in net profit after tax to a historic
              high of Rs. 10.8 billion. Net interest income rose by 3%, while
              loans and receivables grew by 23%. The total asset base expanded
              by 19%, reaching Rs. 240 billion. Backed by a diverse portfolio,
              including deposits, loans, value-added services, and digital
              financial solutions, LBF remained resilient and adaptive in a
              fast-changing environment. As the highest taxpayer among Sri
              Lanka's NBFIs, the Company continues to support national economic
              progress through sustainable value creation.
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
                <div className="cursor-pointer content-center labal-gradient w-full p-3 rounded-lg hover:opacity-90 transition">
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
