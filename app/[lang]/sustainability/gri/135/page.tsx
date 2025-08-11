import Image from 'next/image';

export default function GRIReporting38() {
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

  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
          <div className="bg-white p-4">
            <h2 className="text-2xl font-bold mb-4 text-[#C9A86B]">LB CIM</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {socialMediaData2.map((platform, index) => (
                <div key={index} className="bg-white p-4 rounded shadow">
                  <div
                    className="text-2xl mb-2"
                    style={{ color: platform.color }}
                  >
                    {platform.icon} {platform.platform}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm text-black">
                    <div>Reach 2022/23: {platform.reach['2022/23']}</div>
                    <div>Reach 2023/24: {platform.reach['2023/24']}</div>
                    <div>
                      Followers 2022/23: {platform.followers['2022/23']}
                    </div>
                    <div>
                      Followers 2023/24: {platform.followers['2023/24']}
                    </div>
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
                secure environment for our customers to transact with us, which
                we believe is fundamental to building trust. LBF&apos;s Code of
                Conduct for employees outlines the behavior we expect from
                employees, including dedicated sections on anti-corruption and
                anti-bribery practices. Additionally, we are committed to
                ongoing employee training to educate them on customer rights and
                emphasise the significance of honesty and integrity in their
                interactions with customers. There were no incidents of
                non-compliance concerning the health and safety impacts of
                products and services.
              </p>
              <p className="text-sm mb-4 text-black">
                <span className="font-bold">
                  Data Privacy, Customer Privacy and Information Security
                </span>
                <br />
                We are committed to full compliance with all regulations
                pertaining to protection of personal data collected during the
                provision of any product or service to customers. We have
                implemented all recommended safeguards to ensure adequate
                security and prevent data loss, misuse, alteration, theft, or
                unauthorised access. Please refer to page 120 under Intellectual
                Capital for more information on our information security
                aspects.
              </p>
              <p className="text-sm text-black">
                There were no substantiated complaints concerning breaches of
                customer privacy and losses of customer data during the
                financial year. Neither were there any incidents of
                non-compliance with laws and regulations in the social and
                economic area.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-bold mb-2 text-[#FF4500]">
                CUSTOMER RELATIONSHIP MANAGEMENT
              </h3>
              <p className="text-sm mb-4 text-black">
                We have continued to build an ecosystem to promote frequent
                customer dialogue and foster two-way communication with our
                customers. We aim to empower customers and inspire them to
                become active partners in our shared journey.
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
                providing tailored solutions to meet the diverse needs of
                customer segments at different stages of the customer lifecycle.
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
        </div>
      </div>
    </div>
  );
}
