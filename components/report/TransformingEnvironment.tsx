import React from 'react';
import Image from 'next/image';
import DownloadPDFButton from './DownloadPDFButton';
import LionPawCircle from './LionPawCircle';

export default function TransformingEnvironment() {
  return (
    <div className="bg-cardGreen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 px-20">
        <div className="">
          <div>
            <Image
              src="/images/report/Breaker 8.png"
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

        <div className="grid grid-cols-1 gap-12 z-10">
          <div className="bg-[#467643] p-6 rounded-lg text-lg font-normal">
            <p>
              LBF is committed to sustainability through a structured and
              responsible approach that encompasses the strategic pillars of the
              ESG principles into its operations.
            </p>
            <p className="mt-8">
              As a responsible corporate citizen, LBF integrates ESG principles
              into both governance and operations, with a focus on minimising
              its carbon footprint. LBF’s structured approach to sustainability
              promotes inclusive financial services that are accessible,
              affordable, and relevant to stakeholders while helping the nation
              build resilience.
            </p>
          </div>

          <div className="px-24">
            <div className="flex pl-5 py-2">
              <div>
                <LionPawCircle />
              </div>
              <div className="content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg">
                <span>Sustainability Strategy</span>
              </div>
            </div>

            <div className="flex pl-5 py-2">
              <div>
                <LionPawCircle />
              </div>
              <div className="content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg">
                <span>Greenhouse Gas Verification Opinion</span>
              </div>
            </div>

            <div className="flex pl-5 py-2">
              <div>
                <LionPawCircle />
              </div>
              <div className="content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg">
                <span>Contributing to UN SDGs</span>
              </div>
            </div>

            <div className="flex pl-5 py-2">
              <div>
                <LionPawCircle />
              </div>
              <div className="content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg">
                <span>Independence Assurance</span>
              </div>
            </div>

            <div className="flex pl-5 py-2">
              <div>
                <LionPawCircle />
              </div>
              <div className="content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg">
                <span>Sustainability Journey</span>
              </div>
            </div>

            {/* Delete the above 5 divs when the content is ready */}
            {/* {tabItems.map((item, index) => (
              <div className="flex p-5 cursor-pointer" key={index} onClick={() => setActiveItemIndex(index)}>
                <div>
                  <LionPawCircle />
                </div>
                <div className="content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg">
                  <span>{item.contentLabelPairs?.[0].label}</span>
                </div>
              </div>
            ))} */}
            <div></div>

            <DownloadPDFButton />
          </div>
        </div>
      </div>
    </div>
  );
}
