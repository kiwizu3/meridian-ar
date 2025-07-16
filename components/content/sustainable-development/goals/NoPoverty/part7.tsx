'use client';

import Image from 'next/image';

export default function NoPovertyPart7() {
  return (
    <div>
      <div className="bg-[#4a8b51] text-black p-8">
        <div className="w-full">
          <div className="bg-[#6aa070] rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">SWOPAR Analysis</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Strengths</h3>
                <ul className="list-disc list-inside">
                  <li>Reputation and trustworthiness</li>
                  <li>Strong community engagement</li>
                  <li>Diverse financial products</li>
                  <li>Extensive network across four regions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Opportunities</h3>
                <ul className="list-disc list-inside">
                  <li>Market expansion in rural areas</li>
                  <li>Implement digital financial services</li>
                  <li>Collaborate with local NGOs</li>
                  <li>Government policies support MFIs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Aspirations</h3>
                <ul className="list-disc list-inside">
                  <li>Leading microfinance provider in Myanmar</li>
                  <li>Customised loan products</li>
                  <li>Benchmark in social responsibility</li>
                  <li>Digital-first microfinance provider</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Results</h3>
                <ul className="list-disc list-inside">
                  <li>25 branches by 2025/26</li>
                  <li>50,000 customers target</li>
                  <li>Top-10 microfinance ranking</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#6aa070] rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              ESG Impact and Compliance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Environmental Sustainability
                </h3>
                <ul className="list-disc list-inside">
                  <li>Encourage digital channels for loan repayment</li>
                  <li>Reduce paper usage in business processes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Social Upliftment
                </h3>
                <ul className="list-disc list-inside">
                  <li>Supporting women empowerment</li>
                  <li>Supporting agriculture and trading</li>
                  <li>Improving health, education, and economic resilience</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Governance and Compliance
                </h3>
                <ul className="list-disc list-inside">
                  <li>Compliance with Finance and Regulatory Department</li>
                  <li>Regular reporting to Central Bank of Myanmar</li>
                  <li>Comprehensive Credit Policy</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative h-64 md:h-96 mx-[-2rem] mt-3">
            <Image
              src="/placeholder-esg.jpg"
              alt="ESG Impact"
              className="rounded-lg"
              width={800}
              height={500}
              style={{ height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
