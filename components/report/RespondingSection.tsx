import React from 'react';
import Image from 'next/image';
import LionPawCircle from './LionPawCircle';
import DownloadPDFButton from './DownloadPDFButton';

export default function RespondingSection() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 px-20">
        <div className="order-last md:order-first lg:order-first grid grid-cols-1 gap-12">
          <div className="bg-[#467643] p-6 rounded-lg text-lg font-normal">
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
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2">
              <div className="flex">
                <div>
                  <LionPawCircle />
                </div>
                <div className="content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg">
                  <span>CAMELS Model</span>
                </div>
              </div>

              <div className="flex">
                <div>
                  <LionPawCircle />
                </div>
                <div className="content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg">
                  <span>Branch Network</span>
                </div>
              </div>

              <div className="flex">
                <div>
                  <LionPawCircle />
                </div>
                <div className="content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg">
                  <span>HR Dashboard</span>
                </div>
              </div>

              <div className="flex">
                <div>
                  <LionPawCircle />
                </div>
                <div className="content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg">
                  <span>Leveraging Our Technology Investments</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex ">
                <div>
                  <LionPawCircle />
                </div>
                <div className="content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg">
                  <span>Customer Relationship Management</span>
                </div>
              </div>

              <div className="flex">
                <div>
                  <LionPawCircle />
                </div>
                <div className="content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg">
                  <span>ESG Policy</span>
                </div>
              </div>

              <div className="flex">
                <div>
                  <LionPawCircle />
                </div>
                <div className="content-center bg-gradient-to-r from-[#76A462] to-[#97BC80] w-full p-3 rounded-lg">
                  <span>Business Review</span>
                </div>
              </div>

              <div className="pl-8 py-5">
                <DownloadPDFButton />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-end">
            <Image
              src="/images/report/breaker_4.png"
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
    </div>
  );
}
