'use client';

import Image from 'next/image';
import React from 'react';

export default function ManufacturedCapitalPart5() {
  const myanmarFootprint = [
    {
      region: 'Magway',
      branches: [
        'Sinbaungwe',
        'Magway',
        'Aunglan',
        'Minbu',
        'Thyet',
        'Myothit',
      ],
      employees: { sriLankan: 1, burmese: 42 },
    },
    {
      region: 'Bago',
      branches: [
        'Pyay',
        'Paukkaung',
        'Shwedaung',
        'Paungde',
        'Letpadan',
        'Okshitpin',
        'Nattalin',
      ],
      employees: { sriLankan: 3, burmese: 83 },
    },
    {
      region: 'Ayeyarwady',
      branches: ['Kyangin', 'Myanaung', 'Ingapu'],
      employees: { sriLankan: 0, burmese: 18 },
    },
  ];

  return (
    <div>
      <div className="min-h-screen bg-white text-black p-8">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-8">
            <div className="rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">REGIONAL PRESENCE</h2>
              <p className="mb-4">
                Venturing beyond Sri Lanka to the regional market, LBF set up LB
                Microfinance Myanmar Company (LBMM) in December 2017 to
                penetrate into Myanmar&apos;s robust microfinance market. Over
                the past years, LBMM has continued to make great headway in its
                target market in the Bago region, Magway region, and Ayeyarwady
                region of Myanmar.
              </p>
              <div className="relative w-full h-96">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/images/sustainability/clean-energy-sl-part.PNG"
                    alt="Sri Lanka Map"
                    width={500}
                    height={800}
                    style={{
                      width: 'auto',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="rounded-lg pt-6">
              <h2 className="text-2xl font-semibold mb-4">
                Footprint of LB Microfinance Myanmar
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#fbbe96] text-black">
                      <th className="p-2">Region</th>
                      <th className="p-2">Branch</th>
                      <th className="p-2" colSpan={2}>
                        2023/24 No. of employees
                      </th>
                    </tr>
                    <tr className="bg-[#fbbe96] text-black">
                      <th className="p-2"></th>
                      <th className="p-2"></th>
                      <th className="p-2">Sri Lankan</th>
                      <th className="p-2">Burmese</th>
                    </tr>
                  </thead>
                  <tbody>
                    {myanmarFootprint.map((region, index) => (
                      <React.Fragment key={region.region}>
                        <tr className="border-b border-gray-200">
                          <td
                            className="p-2"
                            rowSpan={region.branches.length + 1}
                          >
                            {index + 1}. {region.region}
                          </td>
                        </tr>
                        {region.branches.map((branch, branchIndex) => (
                          <tr
                            key={branch}
                            className={
                              branchIndex % 2 === 0
                                ? 'bg-gray-200'
                                : 'bg-gray-100'
                            }
                          >
                            <td className="p-2">{branch}</td>
                            {branchIndex === 0 && (
                              <>
                                <td
                                  className="p-2 text-center"
                                  rowSpan={region.branches.length}
                                >
                                  {region.employees.sriLankan}
                                </td>
                                <td
                                  className="p-2 text-center"
                                  rowSpan={region.branches.length}
                                >
                                  {region.employees.burmese}
                                </td>
                              </>
                            )}
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="rounded-lg py-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              DEVELOPING ENTREPRENEURSHIP IN MYANMAR
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="h-48 flex items-center justify-center">
                <Image
                  src="/images/sustainability/clean-energy-gallery-5.PNG"
                  alt="Sri Lanka Map"
                  width={300}
                  height={300}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>
              <div className="h-48 flex items-center justify-center">
                <Image
                  src="/images/sustainability/clean-energy-gallery-6.PNG"
                  alt="Sri Lanka Map"
                  width={300}
                  height={300}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>
              <div className="h-48 flex items-center justify-center">
                <Image
                  src="/images/sustainability/clean-energy-gallery-7.PNG"
                  alt="Sri Lanka Map"
                  width={300}
                  height={300}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>
              <div className="h-48 flex items-center justify-center">
                <Image
                  src="/images/sustainability/clean-energy-gallery-8.PNG"
                  alt="Sri Lanka Map"
                  width={300}
                  height={300}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
