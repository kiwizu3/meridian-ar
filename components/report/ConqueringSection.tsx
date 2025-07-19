import React from 'react';
import Image from 'next/image';
import DownloadPDFButton from './DownloadPDFButton';
import LionPawCircle from './LionPawCircle';

export default function TransformingEnvironment() {
  return (
    <div className="bg-cardGreen min-h-[100vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 px-4 md:px-20">
        {/* Content left, images right */}
        <div className="flex flex-col justify-center order-2 md:order-1">
          <div className="bg-[#467643] p-6 rounded-lg text-lg font-normal max-w-[600px] mb-8">
            <p>
              With a legacy spanning over 54 years in Sri Lanka's financial services sector, LB Finance PLC (LBF) is a leading Non-Banking Financial Institution (NBFI) in the country. The Company maintains an A-(lka) rating from Fitch Ratings Lanka Ltd., underscoring its financial strength and stability.
            </p>
          </div>
          <div className="w-full max-w-[700px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-[48px] h-[48px] min-w-[48px] min-h-[48px] rounded-full bg-transparent">
                  <LionPawCircle />
                </div>
                <div className="ml-3 bg-gradient-to-r from-[#76A462] to-[#97BC80] rounded-lg px-4 py-2 w-full">
                  <span className="text-white">Awards and accolades</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-[48px] h-[48px] min-w-[48px] min-h-[48px] rounded-full bg-transparent">
                  <LionPawCircle />
                </div>
                <div className="ml-3 bg-gradient-to-r from-[#76A462] to-[#97BC80] rounded-lg px-4 py-2 w-full">
                  <span className="text-white">Non Financial Highlights</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-[48px] h-[48px] min-w-[48px] min-h-[48px] rounded-full bg-transparent">
                  <LionPawCircle />
                </div>
                <div className="ml-3 bg-gradient-to-r from-[#76A462] to-[#97BC80] rounded-lg px-4 py-2 w-full">
                  <span className="text-white">Financial Highlights</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-[48px] h-[48px] min-w-[48px] min-h-[48px] rounded-full bg-transparent">
                  <LionPawCircle />
                </div>
                <div className="ml-3 bg-gradient-to-r from-[#76A462] to-[#97BC80] rounded-lg px-4 py-2 w-full">
                  <span className="text-white">Strategic Journey</span>
                </div>
              </div>
              <div className="flex items-center col-span-1 md:col-span-2">
                <div className="flex items-center justify-center w-[48px] h-[48px] min-w-[48px] min-h-[48px] rounded-full bg-transparent">
                  <LionPawCircle />
                </div>
                <div className="ml-3 bg-gradient-to-r from-[#76A462] to-[#97BC80] rounded-lg px-4 py-2 w-full">
                  <span className="text-white">Key Attributes that gave LBF its sustainable competitive advantage in 2025</span>
                </div>
              </div>
            </div>
            <div className="mt-2 mb-2">
              <DownloadPDFButton />
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 flex flex-col items-start justify-end w-full h-full relative">
          <div className="w-full flex flex-col items-start">
            <div className="mb-4 ml-auto mr-0">
              <Image
                src="/images/report/conquering.png"
                alt="Conquering with Courage"
                width={400}
                height={100}
              />
            </div>
            <div className="mt-6 w-full flex justify-start items-end">
              <div className="-ml-16 md:-ml-32 lg:-ml-48 xl:-ml-64">
                <Image
                  src="/images/report/mosaic_art_3.png"
                  alt="Lion Logo"
                  width={6000}
                  height={3500}
                  className="w-full h-auto max-w-[3000px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
