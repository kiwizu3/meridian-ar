'use client';

import Image from 'next/image';

export default function ManufacturedCapitalPart1() {
  return (
    <div>
      <div className="bg-[#f8a06c] text-black p-8">
        <div className="w-full">
          <div className="flex items-center mb-8">
            <h1 className="text-4xl font-bold text-white">
              Manufactured Capital
            </h1>
          </div>

          <div className="bg-[#fbbe96] rounded-lg p-6 mb-8">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-semibold">SHORT TERM</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Challenges</h3>
                <ul className="list-disc list-inside">
                  <li>
                    Ensuring infrastructure adequacy to align with growth
                    ambitions
                  </li>
                  <li>
                    Managing the balance in costs & benefits and ensure
                    efficient service delivery
                  </li>
                  <li>
                    Evolving technological needs and timing of investments
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Managing Capital</h3>
                <ul className="list-disc list-inside">
                  <li>
                    Maintained/updated systems according to technology and
                    process audits for quick adoption and improvisation
                  </li>
                  <li>Made strategic investments in network expansion</li>
                  <li>
                    Making Financial services part of customers&apos; lives
                    through our digital channels
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  Opportunities Arising from this Risk
                </h3>
                <p>
                  Within a challenging operating environment, we have
                  re-evaluated the growth prospects of our expansion and
                  repositioned it to remain resilient
                </p>
                <p>
                  We remain adaptable and agile to leveraging opportunities in
                  potential future scenarios, such as repurposing space to align
                  with changing market needs
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-[#fbbe96] p-6 rounded-lg">
              <h3 className="text-4xl font-bold mb-2">200</h3>
              <p>Total Branches</p>
            </div>
            <div className="bg-[#fbbe96] p-6 rounded-lg">
              <h3 className="text-4xl font-bold mb-2">8</h3>
              <p>New Branches Opened</p>
            </div>
            <div className="bg-[#fbbe96] p-6 rounded-lg">
              <h3 className="text-4xl font-bold mb-2">Rs. 88.09 Mn</h3>
              <p>Investment on Freehold Buildings</p>
            </div>
          </div>
        </div>
        <div className="relative h-64 md:h-96 mx-[-2rem] mt-3">
          <Image
            src="/images/sustainability/clean-energy-page-1.PNG"
            alt="climate action"
            className="rounded-lg"
            width={800}
            height={500}
            style={{ height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      <div className="bg-[#f8a06c] text-black p-8 pb-0">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#fbbe96] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <h2 className="text-2xl font-semibold">MEDIUM TERM</h2>
              </div>
              <h3 className="font-semibold mb-2">Space for Development</h3>
              <ul className="list-disc list-inside">
                <li>
                  Enhance our accessibility by increasing both geographical and
                  virtual presence
                </li>
                <li>Enhance infrastructure to meet upcoming business needs</li>
                <li>
                  Improving operational efficiency in business process and
                  branches through process improvements
                </li>
              </ul>
            </div>
            <div className="bg-[#fbbe96] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <h2 className="text-2xl font-semibold">LONG TERM</h2>
              </div>
              <h3 className="font-semibold mb-2">Future Crafting</h3>
              <ul className="list-disc list-inside">
                <li>Acquiring new businesses, assets, and infrastructure</li>
                <li>
                  Building partnering capability with FinTechs and other
                  value-added service providers to expand product range and
                  customer reach
                </li>
              </ul>
            </div>
            <div className="bg-[#fbbe96] p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Impact to Value Chain</h3>
              <ul className="list-disc list-inside">
                <li>
                  Reducing carbon footprint and optimise resource management
                </li>
                <li>
                  Untouched market expansion support to Rural development and
                  Financial inclusion
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-[#fbbe96] p-6 rounded-lg">
              <h3 className="text-4xl font-bold mb-2">2</h3>
              <p>Branch Re-locations</p>
            </div>
            <div className="bg-[#fbbe96] p-6 rounded-lg">
              <h3 className="text-4xl font-bold mb-2">Rs. 272.77 Mn</h3>
              <p>Investment on IT Infrastructure</p>
            </div>
            <div className="bg-[#fbbe96] p-6 rounded-lg">
              <h3 className="text-4xl font-bold mb-2">24</h3>
              <p>Cash Deposit Machines</p>
            </div>
            <div className="bg-[#fbbe96] p-6 rounded-lg">
              <h3 className="text-4xl font-bold mb-2">16</h3>
              <p>Branches in Myanmar</p>
            </div>
          </div>
        </div>
        <div className="relative h-64 md:h-96 mx-[-2rem] mt-3">
          <Image
            src="/images/sustainability/clean-energy-page-2.PNG"
            alt="climate action"
            className="rounded-lg"
            width={800}
            height={500}
            style={{ height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
}
