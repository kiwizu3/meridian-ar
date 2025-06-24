'use client';

import Image from 'next/image';

export default function NaturalCapitalPart5() {
  return (
    <div>
      <div className="bg-gray-100 text-gray-800 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="col-span-2">
              <div className="bg-white p-4 rounded-lg mb-4">
                <h2 className="text-xl font-bold mb-2 text-[#4e70b7]">
                  FOCUS PILLAR
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Awareness</h3>
                    <ul className="list-disc list-inside">
                      <li>
                        E-mail campaign on energy-saving mechanisms across the
                        Company
                      </li>
                      <li>
                        Encouraging customers, corporate entities, and the
                        general public to adopt low-emission initiatives
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Reuse</h3>
                    <ul className="list-disc list-inside">
                      <li>
                        Leading by example and encouraging peers to focus on
                        carbon neutrality by adopting the carbon footprint
                        calculation process
                      </li>
                    </ul>
                    <h3 className="font-semibold mt-4 mb-2">
                      Policies and procedures
                    </h3>
                    <ul className="list-disc list-inside">
                      <li>Securing the commitment of employees to the EMS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-[#97c93c] text-white p-4 rounded-lg">
                <h2 className="text-xl font-bold mb-2">
                  CARBON FOOTPRINT VERIFICATION
                </h2>
                <p>
                  Our carbon footprint calculations are independently verified
                  according to the ISO 14064-1:2006 standard, ensuring the
                  accuracy and credibility of our reported emissions data.
                </p>
                <p className="mt-2">
                  This carbon footprint assessment provides valuable insights
                  that guide our emission reduction strategies and initiatives.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4 text-[#f68d46]">
              CARBON FOOTPRINT CALCULATION
            </h2>
            <p>
              Following the GHG Protocol, we report our emissions across three
              scopes:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                Scope 1 : Direct emissions from sources we own or control.
              </li>
              <li>
                Scope 2 : Indirect emissions from purchased electricity,
                heating, and cooling.
              </li>
              <li>
                Scope 3 : Other indirect emissions across our value chain, such
                as employee commuting and business travel.
              </li>
            </ul>
            <div className="flex justify-end">
              <div className="bg-gray-200 p-2 rounded-lg">
                <p className="text-sm">
                  Visit web page for more information on the carbon footprint
                  report
                </p>

                <div className="w-20 h-20 mt-2">
                  <Image
                    src="/images/sustainability/climate-qr.PNG"
                    alt="OUR WATER FOOTPRINT"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Strategies and targets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#97c93c]">
                SCOPE 1
              </h3>
              <div className="bg-green-100 p-4 rounded-lg">
                <p className="font-bold">TARGET</p>
                <p>
                  Effectively and efficient use of natural capital at workplace
                </p>
                <p className="font-bold mt-4">STRATEGY</p>
                <ul className="list-disc list-inside">
                  <li>
                    Focus on GHG emission reduction in work place arrangements,
                    construction and maintenance of office premises
                  </li>
                  <li>
                    Maintain optimum temperature of air conditions at all
                    locations
                  </li>
                  <li>
                    Use of energy intensity sensor based lights where possible
                  </li>
                  <li>
                    Awareness on LB sustainability pledge and environment policy
                  </li>
                  <li>Purchase laptops while phasing out old desktops</li>
                  <li>
                    Encourage using online platforms and digital systems in the
                    business processes and business meetings
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#4e70b7]">
                SCOPE 2
              </h3>
              <div className="bg-blue-100 p-4 rounded-lg">
                <p className="font-bold">TARGET</p>
                <p>Reduction of carbon emission of our own operation</p>
                <p className="font-bold mt-4">STRATEGY</p>
                <ul className="list-disc list-inside">
                  <li>Installation of solar panel in 26 branches</li>
                  <li>
                    Awareness campaign for employees to promote responsible
                    green practices
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-100 p-4 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-2 text-[#97c93c]">
              SCOPE 3
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-bold">STRATEGY IN MEDIUM TERM</p>
                <ul className="list-disc list-inside">
                  <li>Take necessary actions to measure finance emissions</li>
                  <li>
                    Provide financial incentives for environmental friendly
                    business practices
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold">STRATEGY IN LONG TERM</p>
                <ul className="list-disc list-inside">
                  <li>Promote recycling and circular economy</li>
                  <li>
                    Assess the financial risks and opportunities associated with
                    the scenarios
                  </li>
                  <li>
                    Support research and development efforts for reducing GHG
                    emission
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Total carbon footprint
            </h2>
            <div className="flex justify-around items-end">
              <div className="text-center">
                <Image
                  src="/images/sustainability/climate-scope-1.PNG"
                  alt="OUR WATER FOOTPRINT"
                  width={80}
                  height={80}
                  className="mx-auto"
                  style={{ width: '4rem' }}
                />
                <p>SCOPE 1</p>
                <p className="font-bold">Direct emission</p>
                <p className="text-2xl font-bold text-[#97c93c]">278 tCO₂e</p>
                <p className="text-sm">346 tCO₂e (2022/23)</p>
              </div>
              <div className="text-center">
                <Image
                  src="/images/sustainability/climate-scope-2.PNG"
                  alt="OUR WATER FOOTPRINT"
                  width={80}
                  height={80}
                  className="w-16 h-16 mx-auto"
                  style={{ width: '4rem' }}
                />
                <p>SCOPE 2</p>
                <p className="font-bold">Indirect emission</p>
                <p className="text-2xl font-bold text-yellow-600">
                  2,199 tCO₂e
                </p>
                <p className="text-sm">2,115 tCO₂e (2022/23)</p>
              </div>
              <div className="text-center">
                <Image
                  src="/images/sustainability/climate-scope-3.PNG"
                  alt="OUR WATER FOOTPRINT"
                  width={80}
                  height={80}
                  className="w-16 h-16 mx-auto"
                  style={{ width: '4rem' }}
                />
                <p>SCOPE 3</p>
                <p className="font-bold">Other emissions</p>
                <p className="text-2xl font-bold text-red-600">1,506 tCO₂e</p>
                <p className="text-sm">1,019 tCO₂e (2022/23)</p>
              </div>
              <div className="text-center">
                <Image
                  src="/images/sustainability/climate-scope-4.PNG"
                  alt="OUR WATER FOOTPRINT"
                  width={80}
                  height={80}
                  className="w-16 h-16 mx-auto"
                  style={{ width: '4rem' }}
                />
                <p>Total carbon footprint</p>
                <p className="text-3xl font-bold text-[#4e70b7]">3,983 tCO₂e</p>
                <p className="text-sm">3,480 tCO₂e (2022/23)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
