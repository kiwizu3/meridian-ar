'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import LionPawCircle from './LionPawCircle';
// import DownloadPDFButton from './DownloadPDFButton';
import PopUpModel from './PopUpModel';

// Import your content components
import CamelsModel from './content/section4/CamelsModel';
import BranchNetwork from './content/section4/BranchNetwork';
import HRDashboard from './content/section4/HRDashboard';
import TechnologyInvestments from './content/section4/TechnologyInvestments';
import CustomerRelationship from './content/section4/CustomerRelationship';
import ESGPolicy from './content/section4/ESGPolicy';
import BusinessReview from './content/section4/BusinessReview';

export default function RespondingSection() {
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
    { label: 'CAMELS Model', content: <CamelsModel /> },
    { label: 'Branch Network', content: <BranchNetwork /> },
    { label: 'HR Dashboard', content: <HRDashboard /> },
    {
      label: 'Leveraging Our Technology Investments',
      content: <TechnologyInvestments />,
    },
    {
      label: 'Customer Relationship Management',
      content: <CustomerRelationship />,
    },
    { label: 'ESG Policy', content: <ESGPolicy /> },
    { label: 'Business Review', content: <BusinessReview /> },
  ];

  return (
    <div>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 py-14 px-6">
        <div className="order-last lg:order-first grid grid-cols-1 gap-6">
          <div className="bg-reportGreen p-6 rounded-lg text-lg font-normal">
            <p>
              LBF drives sustainable value creation across six capitals. Strong
              financial capital supports robust performance, manufactured
              capital includes a wide branch network and digital platforms,
              human and intellectual capital empower innovation and service
              excellence, social and relationship capital fosters stakeholder
              trust, and natural capital guides eco-conscious operations.{' '}
            </p>
            <p className="mt-4">
              The Company offers a diverse portfolio of lending and deposit
              products, along with value-added financial services tailored to
              customer needs. Extending its footprint beyond Sri Lanka, LBF also
              operates a growing subsidiary in Myanmar, supporting regional
              financial inclusion and expansion
            </p>
          </div>
          <div className="flex flex-col gap-2 xl:gap-5 xl:flex-row">
            <div className="flex flex-col gap-2">
              {items.slice(0, 4).map((item, idx) => (
                <div className="flex" key={idx}>
                  <div>
                    <LionPawCircle />
                  </div>
                  <div
                    className="cursor-pointer content-center labal-gradient w-full p-3 rounded-lg hover:bg-reportGreen"
                    onClick={() => handleOpenModal(item.label, item.content)}
                  >
                    <span>{item.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              {items.slice(4).map((item, idx) => (
                <div className="flex" key={idx}>
                  <div>
                    <LionPawCircle />
                  </div>
                  <div
                    className="cursor-pointer content-center labal-gradient w-full p-3 rounded-lg hover:bg-reportGreen"
                    onClick={() => handleOpenModal(item.label, item.content)}
                  >
                    <span>{item.label}</span>
                  </div>
                </div>
              ))}

              <div className="pl-8 py-5">
                <a
                  href="/images/report/pdf/responding_with_agility.pdf"
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
        <div>
          <div className="flex justify-end">
            <Image
              src="/images/report/Responding-with-agility.svg"
              alt="Ampifying Logo"
              width={335}
              height={117}
            />
          </div>
          <div className="">
            <div>
              <Image
                src="/images/report/Mosaic_art_05 1 (1).png"
                alt="Lion Logo"
                width={602}
                height={627}
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
