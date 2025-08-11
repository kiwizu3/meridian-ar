import React from 'react';

export default function ValueCreatingBusinessModel() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col gap-8">
      <div className=" mx-auto">
        {/* Input Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">INPUT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              'Financial Capital',
              'Manufactured Capital',
              'Human Capital',
              'Intellectual Capital',
              'Social and Relationship Capital',
              'Natural Capital'
            ].map((capital, index) => (
              <div
                key={index}
                className="bg-[#e5f1f7] p-4 rounded-lg text-black"
              >
                <h3 className="font-semibold mb-2">{capital}

                </h3>
                <ul className="list-disc text-sm p-3">
                  {index === 0 && (
                    <>
                    <p>(Refer to pages 84 to 99)</p>

                      <li>Shareholder&#39;s Funds Rs. 38,115 Mn</li>
                      <li>Borrowing Rs. 23,251 Mn</li>
                      <li>Deposits Rs. 114,011 Mn</li>
                    </>
                  )}
                  {index === 1 && (
                    <>
                    <p>(Refer to pages 100 to 105)</p>
                      <li>Property, plant and equipment Rs. 8,633 Mn</li>
                      <li>Branch network 192</li>
                      <li>CDMs 24</li>
                    </>
                  )}
                  {index === 2 && (
                    <>
                    <p>(Refer to pages 106 to 119)</p>
                      <li>Committed team of 3,562 employees</li>
                      <li>
                        Investment in training and development Rs. 11.71 Mn
                      </li>
                      <li>
                        Employee benefits and remuneration programmes Rs. 3,545
                        Mn
                      </li>
                    </>
                  )}
                  {index === 3 && (
                    <>
                    <p>(Refer to pages 120 to 127)</p>
                      <li>Brand value Rs. 5,821 Mn</li>
                      <li>CIM app downloads +180,000</li>
                      <li>Investment on ICT Rs. 214.79 Mn</li>
                    </>
                  )}
                  {index === 4 && (
                    <>
                    <p>(Refer to pages 128 to 145)</p>
                      <li>Customer base +750,000</li>
                      <li>Rs. 24.09 Mn Investment in CSR</li>
                      <li>Employee volunteer hours 15,492</li>
                    </>
                  )}
                  {index === 5 && (
                    <>
                    <p>(Refer to pages 146 to 154)</p>
                      <li>Energy consumption 14,384 Gj</li>
                      <li>Water consumption 38,847 M<sup>3</sup></li>
                      <li>Green lending portfolio Rs. 2,411 Mn</li>
                      <li>Carbon foot print 3.480 tCo<sub>2</sub>e</li>
                    </>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Driven by Business Activities Section */}
        <div className="relative">
          <h2 className="text-2xl font-semibold mb-4">
            DRIVEN BY BUSINESS ACTIVITIES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Left column */}
            <div className="bg-gradient-to-br from-[#FFD699] to-[#FFA500] p-4 rounded-lg">
              <h3 className="font-semibold mb-2">MATERIAL MATTERS</h3>
              <ul className="text-sm list-disc list-inside">
                <li>Challenging Economic Conditions</li>
                <li>Serving and Meeting the Needs of Customer</li>
                <li>Good Governance and Risk Optimisation</li>
                <li>Future-fit Organisation</li>
                <li>Supporting Social Cohesion</li>
              </ul>
            </div>

            {/* Center column - Dancer Image Placeholder */}
            <div className="flex items-center justify-center">
              <div className=" bg-gray-300 rounded-full flex items-center justify-center">
                <img src="/images/annual-report/dancer.png" alt="Dancer image" className='rounded-lg w-full' />
              </div>
            </div>

            {/* Right column */}
            <div className="bg-gradient-to-br from-[#B3E0FF] to-[#4DA6FF] p-4 rounded-lg">
              <h3 className="font-semibold mb-2">STRATEGIC PILLARS</h3>
              <ul className="text-sm list-disc list-inside">
                <li>Financial Resilience</li>
                <li>Customer Centricity</li>
                <li>Business Simplification and Optimisation</li>
                <li>Digital Transformation</li>
                <li>Workforce Empowerment</li>
                <li>Manage Our Impacts</li>
              </ul>
            </div>
          </div>

          {/* Bottom sections */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#e5f1f7] p-4 rounded-lg text-black">
              <h3 className="font-semibold mb-2">COST DRIVERS</h3>
              <ul className="text-sm list-disc list-inside">
                <li>Interest expense</li>
                <li>Infrastructure and technology</li>
                <li>Human resources</li>
                <li>Administrative cost</li>
              </ul>
            </div>
            <div className="bg-[#e5f1f7] p-4 rounded-lg text-black">
              <h3 className="font-semibold mb-2">REVENUE DRIVERS</h3>
              <ul className="text-sm list-disc list-inside">
                <li>Infrastructure and technology</li>
                <li>Human resources</li>
                <li>Administrative cost</li>
              </ul>
            </div>
            <div className="bg-[#e5f1f7] p-4 rounded-lg text-black">
              <h3 className="font-semibold mb-2">KEY RISKS</h3>
              <ul className="text-sm list-disc list-inside">
                <li>Credit Risk</li>
                <li>Interest Rate Risk</li>
                <li>Commodity Risk</li>
                <li>Liquidity Risk</li>
                <li>Information Security Risk</li>
                <li>Sustainability Risk</li>
                <li>Operational Risk</li>
                <li>Model Risk</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto">
        <div className="grid grid-cols-1 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">OUTPUT</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-[#e5f1f7] p-4 rounded-lg text-black">
                <h3 className="font-semibold mb-2"> Financial Capital </h3>
                <ul className="list-disc list-inside text-sm ml-4">
                  <li className='py-2'>Profit after tax Rs. 9,564 Mn</li>
                  <li className='py-2'>Return on equity (ROE) 23.40%</li>
                  <li className='py-2'>Earning per Share (EPS) Rs. 17.26</li>
                </ul>
                <h3 className="font-semibold mb-2">Manufactured  Capital</h3>
                <ul className="list-disc list-inside text-sm ml-4">
                  <li className='py-2'>Branches 200</li>
                  <li className='py-2'>CIM app users +200,000</li>
                  <li className='py-2'>Property Plant and Equipment Rs. 8,984 Mn</li>
                </ul>
                <h3 className="font-semibold mb-2">Human Capital</h3>
                <ul className="list-disc list-inside text-sm ml-4">
                  <li className='py-2'>Total training hours 43,127</li>
                  <li className='py-2'>Employee benefits and remuneration Rs. 4,095 Mn</li>
                  <li className='py-2'>Female employees 46%</li>
                  <li className='py-2'>New recruitments 2,194</li>
                </ul>
                <h3 className="font-semibold mb-2">Intellectual Capital</h3>
                <ul className="list-disc list-inside text-sm ml-4">
                  <li className='py-2'>CIM Wallet transactions Rs. 31,469 Mn</li>
                  <li className='py-2'>Brand value Rs. 3,597 Mn</li>
                  <li className='py-2'>Investment on ICT Rs. 279.25 Mn</li>
                </ul>
                <h3 className="font-semibold mb-2">Social and Relationship Capital</h3>
                <ul className="list-disc list-inside text-sm ml-4">
                  <li className='py-2'>Investment in CSR Rs. 20.20 Mn</li>
                  <li className='py-2'>Customer complaints resolution 95%</li>
                  <li className='py-2'>Customer base +800,000</li>
                </ul>
                <h3 className="font-semibold mb-2">Natural Capital</h3>
                <ul className="list-disc list-inside text-sm ml-4">
                  <li className='py-2'>Energy consumption 16,853 GJ</li>
                  <li className='py-2'>Carbon footprint 3,982 tCO₂e</li>
                  <li className='py-2'>Water consumption 44,908 m³</li>
                  <li className='py-2'>Green lending portfolio Rs. 5,956 Mn</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Value Proposition Outcome Section */}
          <div>
            <h2 className="text-xl font-semibold text-orange-600 mb-4">
              VALUE PROPOSITION OUTCOME
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#FFF3E0] p-6 rounded-lg text-black">
                <span className="font-semibold">Shareholders</span>
                <ul className="list-disc list-inside text-sm ml-4">
                  <li>Provide investment Opportunities</li>
                  <li>Return on investments</li>
                  <li>Future focused resource allocation</li>
                </ul>
              </div>
              <div className="bg-[#FFF3E0] p-6 rounded-lg text-black">
                <span className="font-semibold">Customers</span>
                <ul className="list-disc list-inside text-sm ml-4">
                  <li>Access to innovative financial products and services</li>
                  <li>Competitive rates and fees</li>
                  <li>Security and reliability</li>
                </ul>
              </div>
              <div className="bg-[#FFF3E0] p-6 rounded-lg text-black">
                <span className="font-semibold">Employees</span>
                <ul className="list-disc list-inside text-sm ml-4">
                  <li>Job security and career growth</li>
                  <li>Competitive compensation and benefits</li>
                  <li>Positive work environment</li>
                </ul>
              </div>
              <div className="bg-[#FFF3E0] p-6 rounded-lg text-black">
                <span className="font-semibold">Regulator</span>
                <ul className="list-disc list-inside text-sm ml-4">
                  <li>Well established governance and control systems</li>
                  <li>Financial stability of the financial system</li>
                  <li>Consumer protection</li>
                </ul>
              </div>
              <div className="bg-[#FFF3E0] p-6 rounded-lg text-black">
                <span className="font-semibold">Business Partners</span>
                <ul className="list-disc list-inside text-sm ml-4">
                  <li>Timely payments</li>
                  <li>Strong and reliable partnership</li>
                  <li>Responsible business practices</li>
                </ul>
              </div>
              <div className="bg-[#FFF3E0] p-6 rounded-lg text-black">
                <span className="font-semibold">Community</span>
                <ul className="list-disc list-inside text-sm ml-4">
                  <li>Economic growth and development</li>
                  <li>Social responsibility</li>
                  <li>Focused positive impact in five CSR pillars</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
