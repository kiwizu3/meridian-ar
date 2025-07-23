import React from 'react';
import Image from 'next/image';

export default function AwardsAndAccolades() {
  return (
    <div className="awards-accolades p-6 bg-themeGreen max-h-[70vh] overflow-y-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">AWARDS AND ACCOLADES</h1>
      </header>
      <div className="space-y-8">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
            {/* Column 1 */}
            <div className="flex flex-col h-full">
              <div className="space-y-4 border border-white p-4 bg-cardGreen rounded-lg h-full">
                <h3 className="font-bold text-lg">
                  NATIONAL ICT AWARDS NBQSA 2024
                </h3>
                <ul className="list-disc ml-5 space-y-3">
                  <li>
                    Data Analytics Technology of the Year{' '}
                    <span className="text-amber-400 font-semibold">Winner</span>
                  </li>
                  <li>
                    In-House (Non ICT Company) Category -{' '}
                    <span className="text-amber-400 font-semibold">Merit</span>
                    <br />
                    <span className="text-amber-400 text-sm block mt-1">
                      "Automated Gold Loan Higher Advance Granting"
                    </span>
                  </li>
                  <li>
                    In-House (Non ICT Company) Category -{' '}
                    <span className="text-amber-400 font-semibold">Merit</span>
                    <br />
                    <span className="text-amber-400 text-sm block mt-1">
                      "Eclipse RMV (Registrar of Motor Vehicles) Solution"
                    </span>
                  </li>
                  <li>
                    In-House (Non ICT Company) Category -{' '}
                    <span className="text-amber-400 font-semibold">Merit</span>
                    <br />
                    <span className="text-amber-400 text-sm block mt-1">
                      "Eclipse Deposit Management Solution"
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 border border-white p-4 bg-cardGreen rounded-lg mt-4 h-full">
                <h3 className="font-bold text-lg">DIGITAL TRUST AWARDS 2024</h3>
                <ul className="list-disc ml-5 space-y-2">
                  <li>
                    Technology Resilient Company of the Year 2024 -{' '}
                    <span className="text-amber-400 font-semibold">Merit</span>
                    <br />
                    <span className="text-amber-400 text-sm block mt-1">
                      Financial Sector
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col h-full">
              <div className="space-y-4 border border-white p-4 bg-cardGreen rounded-lg h-full">
                <h3 className="font-bold text-lg">SAFA</h3>
                <ul className="list-disc ml-5 space-y-3">
                  <li>
                    Best Presented Annual Report Awards Integrated Reporting
                    Awards and SAARC Anniversary Awards for Corporate Governance
                    Disclosures
                    <br />
                    <span className="text-amber-400 font-semibold block mt-1">
                      Bronze Award
                    </span>
                    <span className="text-amber-400 text-sm block mt-1">
                      Financial Services Sector
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 border border-white p-4 bg-cardGreen rounded-lg mt-4 h-full">
                <h3 className="font-bold text-lg">TAGS AWARDS 2024</h3>
                <ul className="list-disc ml-5 space-y-2">
                  <li>
                    Finance Companies, Leasing Companies & Other Financial
                    Institutions
                    <span className="text-amber-400 font-semibold"> Gold</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 border border-white p-4 bg-cardGreen rounded-lg mt-4 h-full">
                <h3 className="font-bold text-lg">
                  CMA EXCELLENCE IN INTEGRATED REPORTING AWARDS 2024
                </h3>
                <ul className="list-disc ml-5 space-y-2">
                  <li>
                    Best Integrated Report -{' '}
                    <span className="text-amber-400 font-semibold">Winner</span>
                    <br />
                    <span className="text-amber-400 text-sm block mt-1">
                      Finance & Leasing Sector
                    </span>
                  </li>
                  <li>Five Excellent Integrated Reports</li>
                </ul>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col h-full">
              <div className="space-y-4 border border-white p-4 bg-cardGreen rounded-lg h-full">
                <h3 className="font-bold text-lg">
                  LANKAPAY TECHNNOVATION AWARDS 2025
                </h3>
                <ul className="list-disc ml-5 space-y-2">
                  <li>
                    Most Popular Digital Payment Product -{' '}
                    <span className="text-amber-400 font-semibold">Gold</span>
                    <br />
                    <span className="text-amber-400 text-sm block mt-1">
                      (Private Commercial Banks and Non-Bank Financial
                      Institutions Category - Internet and Mobile Banking)
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 border border-white p-4 bg-cardGreen rounded-lg mt-4 h-full">
                <h3 className="font-bold text-lg">LMD</h3>
                <ul className="list-disc ml-5 space-y-2">
                  <li>
                    Most Respected Entities in Sri Lanka -{' '}
                    <span className="text-amber-400 font-semibold">
                      Sector Winner
                    </span>
                    <br />
                    <span className="text-amber-400 text-sm block mt-1">
                      Finance & Leasing Category 2024
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 border border-white p-4 bg-cardGreen rounded-lg mt-4 h-full">
                <h3 className="font-bold text-lg">
                  ICSDB EXCELLENCE AWARDS - 2024
                </h3>
                <ul className="list-disc ml-5 space-y-2">
                  <li>
                    In-House Implementations -{' '}
                    <span className="text-amber-400 font-semibold">
                      Merit Award
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 border border-white p-4 bg-cardGreen rounded-lg mt-4 h-full">
                <h3 className="font-bold text-lg">
                  NATIONAL PROJECT MANAGEMENT EXCELLENCE AWARDS 2024
                </h3>
                <ul className="list-disc ml-5 space-y-2">
                  <li>
                    Best Managed Project in Banking & Financial Services Sector
                    -{' '}
                    <span className="text-amber-400 font-semibold">
                      Silver Award
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
