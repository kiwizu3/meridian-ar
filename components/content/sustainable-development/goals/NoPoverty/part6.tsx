'use client';

import Image from 'next/image';

export default function NoPovertyPart6() {
  return (
    <div>
      <div className="bg-[#4a8b51] text-black p-8">
        <div className="w-full">
          <div className="bg-[#6aa070] rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Strategic Imperatives
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="text-left p-2 border-b">
                      Deepen Agricultural Finance Specialisation
                    </th>
                    <th className="text-left p-2 border-b">
                      Client-centric Product Diversification
                    </th>
                    <th className="text-left p-2 border-b">
                      Leverage the Female Client Base
                    </th>
                    <th className="text-left p-2 border-b">
                      Capitalise on Market Opportunity
                    </th>
                    <th className="text-left p-2 border-b">
                      Enhance Operational Efficiency
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border-b">
                      Aligning loan products with cultivation seasons for key
                      crops and animal husbandry needs
                    </td>
                    <td className="p-2 border-b">
                      Expanding product suite beyond agriculture to align with
                      clients' goals
                    </td>
                    <td className="p-2 border-b">
                      Designing operations to serve and empower the predominant
                      (95%) female client base
                    </td>
                    <td className="p-2 border-b">
                      Capitalising on favourable regulatory environment and
                      limited foreign competition
                    </td>
                    <td className="p-2 border-b">
                      Optimising resources and operations to align with
                      agricultural seasonality
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[#6aa070] rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Regional Expansion Strategy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Yangon Region</h3>
                <p>
                  As Myanmar's primary commercial city, Yangon presents
                  significant opportunity for deposit mobilisation and loan
                  granting. We are one of only 38 microfinance institutions
                  licensed to accept voluntary savings.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Ayeyarwady Region
                </h3>
                <p>
                  Our current operations encompass five branches with
                  exceptional portfolio quality (NPL ratio of 0%). Based on this
                  strong performance and the region's high agricultural
                  potential, we are opening additional branches.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Tanintharyi Region
                </h3>
                <p>
                  Received regulatory approval to establish new branches
                  focusing on local agricultural sector with tailored financing
                  for crops like Areca nuts and rubber, plus financing for
                  three-wheel vehicles.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-64 md:h-96 mx-[-2rem] mt-3">
            <Image
              src="/placeholder-regional-expansion.jpg"
              alt="Regional Expansion"
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
