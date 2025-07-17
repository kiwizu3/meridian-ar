'use client';

import Image from 'next/image';
import CoreCompetencies from '@/public/images/sustainability-goals/Core-Competencies-of-LB-MICROFINANCE.jpg';

export default function NoPovertyPart5() {
  return (
    <div className="my-8">
      <div className="bg-[#4a8b51] text-black p-8">
        <div className="w-full">
          <div className="flex items-center mb-8">
            <h1 className="text-4xl font-bold text-white">
              SUBSIDIARY INFORMATION
            </h1>
          </div>
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-semibold">LB MICROFINANCE MYANMAR</h2>
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
                  business partners, through a robust microfinance model leading
                  to the creation of businesses and markets, which mutually
                  benefit LB Microfinance Myanmar and the poor communities of
                  Myanmar
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#6aa070] rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <p>
                  Our core offering remains the traditional Microfinance Loan,
                  designed to support clients at the grassroot levels. To serve
                  clients who are more financially stable than typical
                  microfinance borrowers, but for whom individual personal loans
                  carry higher risk, we offer Group-based Loans. These are
                  extended to established groups, typically comprising three
                  individuals, with funds disbursed individually within a set
                  collective limit. These loans are often used for trading and
                  small business activities.
                </p>
                <br />
                <p>
                  We further support enterprise growth through individual
                  business loans. A dedicated Staff Loan product is also
                  available for employees classified within the blue-collar
                  segment. On the deposit side, we operate a compulsory savings
                  scheme, which, in compliance with regulatory requirements,
                  mandates that clients save 5% of their loan principal.
                  Withdrawals from this account are tied to the loan cycle. In
                  addition, we offer voluntary Savings accounts, which are
                  available exclusively to customers who currently hold an
                  active loan with our institution. This voluntary Savings
                  product is offered only by microfinance institutions holding a
                  special license.
                </p>
              </div>
              <div>
                <Image
                  src={CoreCompetencies}
                  alt="CoreCompetencies"
                  width={405}
                  height={295}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="bg-[#6aa070] rounded-lg p-6 mb-8">
            <table className="min-w-full border border-blue">
              <thead>
                <tr>
                  <th className="border px-4 py-1">Challenges/Opportunities</th>
                  <th className="border px-4 py-1">Our Response</th>
                </tr>
                <tr>
                  <td className="border px-4 py-1">
                    Opportunity to deepen specialisation and grow within the
                    agricultural sector, especially in Ayeyarwady region
                  </td>
                  <td className="border px-4 py-1">
                    2 new branches opened in Ayeyarwady region
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-1">
                    Being one of only 38 licensed institutions (out of 182)
                    allowed to accept voluntary savings
                  </td>
                  <td className="border px-4 py-1">
                    Tapping into the deposit potential in commercial centres,
                    including Yangon
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-1">
                    Overall, sector NPL is extremely high (over 27%)
                  </td>
                  <td className="border px-4 py-1">
                    Effective and close monitoring and management of NPLs
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-1">
                    Heavy reliance (95%) on agriculture
                  </td>
                  <td className="border px-4 py-1">
                    Entry into related financing such as individual loans
                  </td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
