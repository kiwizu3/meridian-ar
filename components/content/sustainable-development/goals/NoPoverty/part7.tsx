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
                  <li>Extensive network across four regions of the country</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Opportunities</h3>
                <ul className="list-disc list-inside">
                  <li>
                    Market expansion, especially in under-served rural areas
                  </li>
                  <li>Implement digital financial services</li>
                  <li>
                    Opportunity to collaborate with local NGOs and community
                    organisations
                  </li>
                  <li>
                    Government policies encourage financial inclusion and
                    support microfinance institutions
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Aspirations</h3>
                <ul className="list-disc list-inside">
                  <li>
                    Become the leading microfinance service provider in Myanma
                  </li>
                  <li>
                    Develop customised loan products for diverse community needs
                  </li>
                  <li>
                    Set a benchmark in social responsibility, especially in
                    areas such as women’s economic empowerment and financial
                    literacy.
                  </li>
                  <li>Become a digital-first microfinance provider</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Results</h3>
                <ul className="list-disc list-inside">
                  <li>
                    Increase number of branches to 25 by the end of 2025/26
                  </li>
                  <li>
                    Target 50,000 customers and a top-10 microfinance ranking
                    within next three financial years
                  </li>
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
                  <li>
                    Encourage customers to use digital channels for loan
                    repayment
                  </li>
                  <li>
                    Actions taken to reduce paper usage in the business process{' '}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Social Upliftment
                </h3>
                <ul className="list-disc list-inside">
                  <li>Supporting women empowerment</li>
                  <li>Supporting agriculture and trading</li>
                  <li>
                    Our financial products directly address improving health,
                    living conditions, educational access, economic resilience,
                    and future opportunities, empowering individuals and
                    families to build better, more secure lives
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Governance and Compliance
                </h3>
                <ul className="list-disc list-inside">
                  <li>
                    In compliance with the requirements of Finance and
                    Regulatory Department that comes under Ministry of Planning
                    and Finance, Myanmar
                  </li>
                  <li>
                    Report regularly to the Central Bank of Myanmar on
                    anti-money laundering and terrorist financing
                  </li>
                  <li>
                    Follow a comprehensive Credit Policy in the loan granting
                    process
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
