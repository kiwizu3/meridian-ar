'use client';

import Image from 'next/image';

export default function NoPovertyPart2() {
  return (
    <div>
      <div className="bg-[#5d8de8] rounded-lg p-6 my-8">
        <div className="flex items-center mb-4">
          <h2 className="text-2xl font-semibold">DIGITAL ACCESS</h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <h3 className="font-semibold mb-2">
              Breaking Barriers with Innovation
            </h3>
            <p>
              From digital financing to AI-driven lending, we are at the
              forefront of next-generation digitalised financial services,
              ensuring seamless, 24/7 access to financial transactions. Our
              digital platforms empower customers to manage their finances
              anytime, anywhere, enhancing convenience and accessibility.
            </p>
            <p className="mt-4">
              In 2019, we entered the mobile digital transaction space with the
              launch of the LB CIM app, introducing two dedicated platforms: one
              for individual customers and another tailored for merchants,
              enabling secure and efficient digital transactions for a range of
              financial needs.
            </p>
          </div>
        </div>
        <div className="relative h-64 md:h-96 mx-[-2rem] mt-3">
          <Image
            src="/placeholder-digital-access.jpg"
            alt="Digital Access"
            className="rounded-lg"
            width={800}
            height={500}
            style={{ height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className="bg-[#5d8de8] text-black p-8">
        <div className="w-full">
          <div className="bg-[#7ba1eb] rounded-lg p-6 mb-8">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-semibold">
                STRENGTHENING THE ECONOMY
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div>
                <p>
                  As a leader in the Non-Banking Financial Institution (NBFI)
                  sector, we are proud to be the highest taxpayer in the
                  industry. Our contributions are vital to Sri Lanka's economic
                  growth, supporting essential public services and strengthening
                  financial stability.
                </p>

                <div className="mt-6 text-center">
                  <h3 className="text-3xl font-bold">Rs. 12,645 Mn</h3>
                  <p>Total tax paid to the Government during the year</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mb-8">
            <div className="bg-[#7ba1eb] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">
                Tax Paid to the Government
              </h3>
              <div className="relative h-64">
                <Image
                  src="/placeholder-tax-chart.jpg"
                  alt="Tax Chart"
                  className="rounded-lg"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="bg-[#7ba1eb] rounded-lg">
              <div className="relative h-64">
                <Image
                  src="/placeholder-transaction-chart.jpg"
                  alt="Transaction Chart"
                  className="rounded-lg"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
