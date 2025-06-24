'use client';

import Image from 'next/image';

export default function FinancialCapitalPart1() {
  return (
    <div>
      <div className="bg-[#7eaddd] text-black p-8">
        <div className="w-full">
          <header className="flex items-center mb-8">
            <h1 className="text-4xl font-bold text-white">Financial Capital</h1>
          </header>

          <section className="mb-8">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
              </svg>
              <h2 className="text-2xl font-bold">SHORT TERM</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h3 className="font-bold mb-2">Challenges</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    Slower recovery of the economy and its activities which
                    continuously pressure the repayment capacities of customers
                  </li>
                  <li>
                    Macroeconomic conditions and volatilities in the operating
                    environment
                  </li>
                  <li>
                    Restrictive government policies including continuation of
                    vehicle import restrictions and frequent changes in Fiscal
                    Policy
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Managing capital</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    Management efficiencies aimed to maximise returns and
                    profits
                  </li>
                  <li>
                    Budgetary controls set out to enhance operational excellence
                  </li>
                  <li>
                    Cost efficient funding and prudent lending through proactive
                    pricing strategies
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">
                  Opportunities arising from this risk
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    Comprehensive planning and budgeting is done and revised
                    continuously to make sure that the Company is properly
                    funded throughout the year with a well balanced leverage
                  </li>
                  <li>
                    Maintaining neck to neck balance between funding and
                    investments to generate sustainable returns when market
                    interest rates are volatile and uncertain
                  </li>
                  <li>
                    Novel technologies allow artificial intelligence to perform
                    advance analytics
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-5 gap-4 mb-8">
            <div className="bg-white text-[#7fb3d5] p-4 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">Rs. 9.56 Bn</h3>
              <p className="text-sm">Highest Profit After Tax</p>
            </div>
            <div className="bg-white text-[#7fb3d5] p-4 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">23.40%</h3>
              <p className="text-sm">ROE</p>
            </div>
            <div className="bg-white text-[#7fb3d5] p-4 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">Rs. 202 Bn</h3>
              <p className="text-sm">Total Assets</p>
            </div>
            <div className="bg-white text-[#7fb3d5] p-4 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">3.54%</h3>
              <p className="text-sm">Gross NPL</p>
            </div>
            <div className="bg-white text-[#7fb3d5] p-4 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">31.13%</h3>
              <p className="text-sm">Cost to Income Ratio</p>
            </div>
          </section>

          <div className="relative h-64 md:h-96 mx-[-2rem] mt-3">
            <Image
              src="/images/sustainability/partnerships-goals-page-1.PNG"
              alt="climate action"
              className="rounded-lg"
              width={800}
              height={500}
              style={{ height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      <div className="bg-[#7eaddd] text-black p-8">
        <div className="w-full">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#d6eaf8] p-4 rounded-lg">
              <h3 className="font-bold mb-2">Impact to value chain</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Generating attractive and sustainable returns</li>
                <li>
                  Year-on-year perfections in all key financial indicators
                </li>
                <li>Assuring the growth of our business operations</li>
                <li>Enhancing other capitals</li>
              </ul>
            </div>
            <div className="bg-[#d6eaf8] p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <svg
                  className="w-6 h-6 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                </svg>
                <h3 className="font-bold">MEDIUM TERM</h3>
              </div>
              <h4 className="font-semibold mb-2">Space for development</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Growth opportunities through diversification</li>
                <li>
                  Enhance the technology utilisation for business model
                  utilisation
                </li>
                <li>
                  Enhance the use of business intelligent platforms and
                  artificial intelligence for credit decisions
                </li>
              </ul>
            </div>
            <div className="bg-[#d6eaf8] p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <svg
                  className="w-6 h-6 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                </svg>
                <h3 className="font-bold">LONG TERM</h3>
              </div>
              <h4 className="font-semibold mb-2">Future crafting</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  Enhance long term value creation through capitalising overseas
                  expansions
                </li>
                <li>
                  Industry association engagements towards sustainable growth
                  while generating collaborative returns to empower financial
                  markets
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-3 mt-4 gap-4">
            <div className="bg-[#d6eaf8] p-4 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">Rs. 122.80 Bn</h3>
              <p className="text-sm">Customer Deposits</p>
            </div>
            <div className="bg-[#d6eaf8] p-4 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">
                Profitability and Business Growth
              </h3>
            </div>
            <div className="bg-[#d6eaf8] p-4 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">
                Long Term Value Creation
              </h3>
            </div>
          </div>

          <div className="relative h-64 md:h-96 mx-[-2rem] mt-3">
            <Image
              src="/images/sustainability/partnerships-goals-page-2.PNG"
              alt="climate action"
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
