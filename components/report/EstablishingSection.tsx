import React from 'react';
import Image from 'next/image';
import LionPawCircle from './LionPawCircle';
import DownloadPDFButton from './DownloadPDFButton';

export default function EstablishingSection() {
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
              Equally, risk management is a core component of LBF’s business
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
              <div className="flex">
                <div>
                  <LionPawCircle />
                </div>
                <div className="content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg">
                  <span>Composition of the Board</span>
                </div>
              </div>

              <div className="flex">
                <div>
                  <LionPawCircle />
                </div>
                <div className="content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg">
                  <span>Goverance Structure</span>
                </div>
              </div>

              <div className="flex">
                <div>
                  <LionPawCircle />
                </div>
                <div className="content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg">
                  <span>Cooperate Governance Highlights</span>
                </div>
              </div>

              <div className="flex">
                <div>
                  <LionPawCircle />
                </div>
                <div className="content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg">
                  <span>Governance Processes</span>
                </div>
              </div>
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
    </div>
  );
}
