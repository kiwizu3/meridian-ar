'use client';

import Image from 'next/image';

export default function NoPovertyPart4() {
  return (
    <div>
      <div className="bg-[#5d8de8] text-black p-8">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#7ba1eb] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">
                5 FOREIGN CURRENCY EXCHANGE
              </h2>
              <p>
                LBF leverages its position as a principal agent for Western
                Union Money Transfer systems, to increase the volume of foreign
                currency inflows to the country.
              </p>
              <div className="grid grid-cols-1 gap-4 mt-4">
                <div className="relative h-48">
                  <Image
                    src="/placeholder-forex-chart.jpg"
                    alt="Forex Chart"
                    className="rounded-lg"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="relative h-48">
                  <Image
                    src="/placeholder-western-union-chart.jpg"
                    alt="Western Union Chart"
                    className="rounded-lg"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#7ba1eb] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">
                6 RURAL DEVELOPMENT
              </h2>
              <p>
                LBF supports the development of provincial economies via its
                island-wide branch network. In line with efforts to provide
                equal access to all Sri Lankans, our most recent branch
                expansion strategy has focused on reaching out to customers in
                the North and East regions.
              </p>
              <div className="relative h-64 mt-4">
                <Image
                  src="/placeholder-rural-dev.jpg"
                  alt="Rural Development"
                  className="rounded-lg"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          <div className="bg-[#7ba1eb] rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              7 SUPPORTING COMMUNITIES
            </h2>
            <p>
              Our commitment extends beyond financial contributions to uplifting
              communities through impactful social development programmes. Our
              strategic CSR initiatives focus on education, healthcare,
              financial literacy, and environmental sustainability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="relative h-48">
                <Image
                  src="/placeholder-csr-projects.jpg"
                  alt="CSR Projects"
                  className="rounded-lg"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="relative h-48">
                <Image
                  src="/placeholder-csr-investment.jpg"
                  alt="CSR Investment"
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
