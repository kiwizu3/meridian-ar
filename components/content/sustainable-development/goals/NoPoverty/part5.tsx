'use client';

import Image from 'next/image';

export default function NoPovertyPart5() {
  return (
    <div>
      <div className="bg-[#4a8b51] text-black p-8">
        <div className="w-full">
          <div className="flex items-center mb-8">
            <h1 className="text-4xl font-bold text-white">
              LB Microfinance Myanmar
            </h1>
          </div>

          <div className="bg-[#6aa070] rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Strategy</h2>
                <p>
                  Our strategy leverages specialised, seasonal agricultural
                  finance while diversifying into targeted loans (trading,
                  household, education) to meet client goals. We prioritise
                  empowering our predominantly female clientele and capitalise
                  on market opportunities through regional expansion and
                  operational excellence, underpinned by strong non-performing
                  loan management and technology adoption.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Vision</h2>
                <p>
                  To contribute to the development of sustainable and socially
                  significant enterprises that improve the lives of the entire
                  nation.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Mission</h2>
                <p>
                  The mission of LB Microfinance Myanmar is to bridge the gap
                  between ambition and achievement of the low-income individuals
                  of Myanmar by providing financial assistance to creative
                  entrepreneurs, value demanding consumers, and innovative
                  business partners.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#6aa070] rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <ul className="list-disc list-inside">
                  <li className="mb-2">
                    <strong>Microfinance Loan:</strong> Designed to support
                    clients at the grassroot levels
                  </li>
                  <li className="mb-2">
                    <strong>Group-based Loans:</strong> Extended to established
                    groups of three individuals
                  </li>
                  <li className="mb-2">
                    <strong>Individual Business Loans:</strong> Supporting
                    enterprise growth
                  </li>
                  <li className="mb-2">
                    <strong>Staff Loan:</strong> Available for blue-collar
                    employees
                  </li>
                  <li className="mb-2">
                    <strong>Compulsory Savings:</strong> 5% of loan principal
                    saved as per regulations
                  </li>
                  <li>
                    <strong>Voluntary Savings:</strong> Exclusive to active loan
                    customers
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Core Competencies
                </h3>
                <ul className="list-disc list-inside">
                  <li>Strong Brand and Leadership</li>
                  <li>Expertise of the Staff</li>
                  <li>Savings License</li>
                  <li>Excellent Customer Service</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#6aa070] rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Challenges/Opportunities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Opportunities</h3>
                <ul className="list-disc list-inside">
                  <li>Deepen specialisation in agricultural sector</li>
                  <li>
                    One of only 38 licensed institutions allowed to accept
                    voluntary savings
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Challenges</h3>
                <ul className="list-disc list-inside">
                  <li>Sector NPL is extremely high (over 27%)</li>
                  <li>Heavy reliance (95%) on agriculture</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Our Response</h3>
              <ul className="list-disc list-inside">
                <li>2 new branches opened in Ayeyarwady region</li>
                <li>Tapping into deposit potential in commercial centres</li>
                <li>Effective monitoring and management of NPLs</li>
                <li>Entry into related financing such as individual loans</li>
              </ul>
            </div>
          </div>

          <div className="relative h-64 md:h-96 mx-[-2rem] mt-3">
            <Image
              src="/placeholder-microfinance.jpg"
              alt="Microfinance Myanmar"
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
