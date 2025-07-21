'use client';

import Image from 'next/image';
import provincialdistribution from '@/public/images/sustainability-goals/provincial-distribution.jpg';
import provincialdistributionDeposits from '@/public/images/sustainability-goals/Provincial-Distribution-Deposits.jpg';
import provincialdistributionLoans from '@/public/images/sustainability-goals/Provincial-Distribution-Loans.jpg';

export default function NoPovertyPart1() {
  return (
    <div>
      <div className="bg-themeGreen text-black p-8">
        <div className="w-full">
          <div className="flex items-center mb-8">
            <h1 className="text-4xl font-bold text-white">
              Building Socio-Economic Prosperity
            </h1>
          </div>

          <div className="bg-cardGreen rounded-lg p-6 mb-8">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-semibold">
                REDEFINING GROWTH, EMPOWERING COMMUNITIES, TRANSFORMING LIVES
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-amber-300 rounded-lg p-6">
                <p>
                  For over 54 years, LBF has been a driving force in Sri Lanka’s
                  economic and social progress. We have fostered job creation,
                  broadened financial inclusion, spearheaded innovation, and
                  empowered communities, reshaping the financial landscape for
                  individuals and businesses alike.
                </p>
              </div>
              <p className="mt-4">
                Looking at 2024/25, our commitment to inclusive financial growth
                remains steadfast. We will expand access through branch networks
                and digital platforms, empower women entrepreneurs, and
                strengthen foreign exchange accessibility, continuing to
                contribute to Sri Lanka’s evolving economy.
              </p>
            </div>
            <div className="flex rounded-lg p-6">
              <div className="border-r-1 border-gray-300 pr-6 mr-6">
                <h2 className="text-2xl font-semibold mb-2 text-cardBlue]">
                  1. EXPANDING ECONOMIC HORIZONS
                </h2>
                <p>
                  A thriving economy is built on equal access to financial
                  opportunities. At LBF, we have taken significant steps to
                  bridge financial gaps, by providing crucial financial backing
                  to rural communities, small businesses, and emerging
                  entrepreneurs, enabling their growth and success.
                </p>
              </div>
              <div>
                <h3 className="text-yellow font-semibold">
                  Financial Inclusiveness Through Branch Expansion
                </h3>
                <p>
                  Our commitment is to reach every Sri Lankan with essential
                  financial services. In 2024/25, we demonstrated this
                  commitment by launching 10 new branches, including 03
                  strategically placed in North and East areas, extending
                  affordable and reliable access to those communities.
                </p>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <Image
                    src={provincialdistribution}
                    alt="Provincial Distribution"
                  />
                </div>
                <div className="flex gap-6 py-5">
                  <div>
                    <div>
                      <Image
                        src={provincialdistributionLoans}
                        alt="Provincial Distribution Loans"
                        width={405}
                        height={295}
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <Image
                        src={provincialdistributionDeposits}
                        alt="Provincial Distribution Deposits"
                        width={405}
                        height={295}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
