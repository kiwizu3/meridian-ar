'use client';

import Image from 'next/image';

export default function SocialRelationshipCapitalPart6() {
  const socialMediaData2 = [
    {
      platform: 'Facebook',
      icon: '🇫',
      color: '#1877F2',
      reach: { '2022/23': '603 K', '2023/24': '1.2 M' },
      followers: { '2022/23': '15 K', '2023/24': '31 K' },
      impressions: { '2022/23': '31 M', '2023/24': '51 M' },
    },
    {
      platform: 'Instagram',
      icon: '📸',
      color: '#E4405F',
      reach: { '2022/23': '-', '2023/24': '117.3K' },
      followers: { '2022/23': '-', '2023/24': '11.1 K' },
      impressions: { '2022/23': 'N/A', '2023/24': 'N/A' },
    },
  ];

  const customerComplaintData = [
    { category: 'Credit', received: 172, solved: 170 },
    { category: 'Gold loan', received: 41, solved: 39 },
    { category: 'Insurance', received: 26, solved: 26 },
    { category: 'Recovery', received: 287, solved: 263 },
    { category: 'Deposits', received: 2, solved: 2 },
    { category: 'General', received: 7, solved: 7 },
  ];

  return (
    <div>
      <div className="bg-white p-4">
        <h2 className="text-2xl font-bold mb-4 text-[#C9A86B]">LB CIM</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {socialMediaData2.map((platform, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <div className="text-2xl mb-2" style={{ color: platform.color }}>
                {platform.icon} {platform.platform}
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-black">
                <div>Reach 2022/23: {platform.reach['2022/23']}</div>
                <div>Reach 2023/24: {platform.reach['2023/24']}</div>
                <div>Followers 2022/23: {platform.followers['2022/23']}</div>
                <div>Followers 2023/24: {platform.followers['2023/24']}</div>
                <div>
                  Impressions 2022/23: {platform.impressions['2022/23']}
                </div>
                <div>
                  Impressions 2023/24: {platform.impressions['2023/24']}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Image
            src="/images/sustainability/health-social-img-7.PNG"
            alt="Your Rewards promotion"
            className="w-full h-auto rounded"
            width={300}
            height={300}
            unoptimized
          />
          <Image
            src="/images/sustainability/health-social-img-8.PNG"
            alt="Business Loan promotion"
            className="w-full h-auto rounded"
            width={300}
            height={300}
            unoptimized
          />
          <Image
            src="/images/sustainability/health-social-img-9.PNG"
            alt="Save Smart promotion"
            className="w-full h-auto rounded"
            width={300}
            height={300}
            unoptimized
          />
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2 text-[#FF4500]">
            CUSTOMER TRUST AND SAFETY
          </h3>
          <p className="text-sm mb-4 text-black">
            Fostering customer trust is vital to our success as a financial
            services institution. Therefore, we strive to create a safe and
            secure environment for our customers to transact with us, which we
            believe is fundamental to building trust. LBF&apos;s Code of Conduct
            for employees outlines the behavior we expect from employees,
            including dedicated sections on anti-corruption and anti-bribery
            practices. Additionally, we are committed to ongoing employee
            training to educate them on customer rights and emphasise the
            significance of honesty and integrity in their interactions with
            customers. There were no incidents of non-compliance concerning the
            health and safety impacts of products and services.
          </p>
          <p className="text-sm mb-4 text-black">
            <span className="font-bold">
              Data Privacy, Customer Privacy and Information Security
            </span>
            <br />
            We are committed to full compliance with all regulations pertaining
            to protection of personal data collected during the provision of any
            product or service to customers. We have implemented all recommended
            safeguards to ensure adequate security and prevent data loss,
            misuse, alteration, theft, or unauthorised access. Please refer to
            page 120 under Intellectual Capital for more information on our
            information security aspects.
          </p>
          <p className="text-sm text-black">
            There were no substantiated complaints concerning breaches of
            customer privacy and losses of customer data during the financial
            year. Neither were there any incidents of non-compliance with laws
            and regulations in the social and economic area.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2 text-[#FF4500]">
            CUSTOMER RELATIONSHIP MANAGEMENT
          </h3>
          <p className="text-sm mb-4 text-black">
            We have continued to build an ecosystem to promote frequent customer
            dialogue and foster two-way communication with our customers. We aim
            to empower customers and inspire them to become active partners in
            our shared journey.
          </p>
          <div className="bg-[#E6E6FA] p-4 rounded mb-4 text-black">
            <h4 className="font-bold mb-2">Call Centre</h4>
            <ul className="list-disc pl-5 text-sm">
              <li>LBF&apos;s customer/ general public</li>
              <li>Social media</li>
              <li>Customer hotline</li>
              <li>Complaints hotline</li>
              <li>Website/e-mail</li>
            </ul>
          </div>
          <div className="bg-[#E6E6FA] p-4 rounded mb-4 text-black">
            <h4 className="font-bold mb-2">Call Centre agents</h4>
            <ul className="list-disc pl-5 text-sm">
              <li>Complaints Management Unit</li>
              <li>Marketing Monitoring Unit</li>
              <li>Website/e-mail</li>
            </ul>
          </div>
          <div className="bg-[#E6E6FA] p-4 rounded mb-4 text-black">
            <h4 className="font-bold mb-2">Responsible Officers</h4>
          </div>
          <p className="text-sm text-black">
            The branch teams, the call centres, and other customer-facing
            departments play a crucial role in developing customer
            relationships. They engage in identifying customer needs and
            providing tailored solutions to meet the diverse needs of customer
            segments at different stages of the customer lifecycle.
          </p>
        </div>

        <div className="bg-[#FFA500] p-4 rounded mb-4">
          <h4 className="font-bold text-white mb-2">Call Centres</h4>
          <div className="flex justify-between">
            <div>
              <p className="font-bold">COMPLAINTS RESOLVED</p>
              <p className="text-2xl font-bold">95%</p>
            </div>
            <div>
              <p className="font-bold">CALL CENTRE SATISFACTION RATING</p>
              <p className="text-2xl font-bold">90%</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Image
            src="/images/sustainability/health-phone-img.PNG"
            alt="Colorful telephone icon"
            className="w-24 h-24"
            width={100}
            height={100}
            style={{ width: '150px' }}
          />
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-6 pt-8">
          SOCIAL AND RELATIONSHIP CAPITAL
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#4472C4] p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">
              We operate 4 call centres to efficiently respond to customer
              queries and handle complaints.
            </h2>
            <ul className="list-disc list-inside mb-4">
              <li>A dedicated recovery call centre</li>
              <li>A dedicated gold loan call centre</li>
              <li>A dedicated marketing call centre</li>
              <li>A dedicated CIM wallet call centre</li>
            </ul>
            <h3 className="font-semibold mb-2">The call centres engage in:</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Direct business conversion: convert leads into sales</li>
              <li>
                Customer complaint resolution: enhance handling of customer
                complaints
              </li>
              <li>
                Provision of customer information: provide accurate and timely
                information to customers
              </li>
            </ul>
            <p className="mb-4">
              During the year under review, we implemented the following:
            </p>
            <ul className="list-disc list-inside">
              <li>
                The capacity of the call centre was increased to 50 agents,
                along with a supervisor and admin officer
              </li>
              <li>
                A new inquiry channel was introduced to improve customer
                accessibility
              </li>
              <li>
                Established a business unit to follow up on potential business
                leads
              </li>
            </ul>
            <p className="mt-4">
              The call centres continued to collaborate with the marketing
              department to boost sales efforts. During the year, more than 80%
              of customer complaints were resolved successfully and ensured
              efficient escalation for remaining issues beyond the call
              centre&apos;s scope.
            </p>
          </div>

          <div className="bg-white text-black p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">
              Customer complaint statistics for FY 2023/24
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#4472C4] text-white">
                    <th className="border border-gray-400 px-4 py-2">
                      Category
                    </th>
                    <th className="border border-gray-400 px-4 py-2">
                      No. of Customer Complaints Received
                    </th>
                    <th className="border border-gray-400 px-4 py-2">
                      Customer Complaints Solved
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {customerComplaintData.map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                    >
                      <td className="border border-gray-400 px-4 py-2">
                        {row.category}
                      </td>
                      <td className="border border-gray-400 px-4 py-2 text-center">
                        {row.received}
                      </td>
                      <td className="border border-gray-400 px-4 py-2 text-center">
                        {row.solved}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white text-black p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">FUTURE</h2>
          <p className="mb-4">
            We will continue to strengthen our customer relationships by
            improving customer-centricity, enhancing our digital services, and
            providing tailor-made products and services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#4472C4] text-white p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Short-term</h3>
              <ul className="list-disc list-inside">
                <li>Continue to refine internal systems and processes</li>
                <li>Increase process automation</li>
                <li>
                  Improve the effectiveness of the customer survey process
                </li>
              </ul>
            </div>
            <div className="bg-[#ED7D31] text-white p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Medium-term</h3>
              <ul className="list-disc list-inside">
                <li>
                  Further strengthen information security architecture by
                  implementing the data protection protocol
                </li>
                <li>
                  Continuously develop new technology-based solutions tailored
                  to meet the needs of different customer segments
                </li>
              </ul>
            </div>
            <div className="bg-[#A5A5A5] text-white p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Long-term</h3>
              <ul className="list-disc list-inside">
                <li>
                  Track customer satisfaction and loyalty as a more frequent
                  indicator across business units
                </li>
                <li>
                  Capitalize on creating more customised promotional content in
                  all mediums
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
