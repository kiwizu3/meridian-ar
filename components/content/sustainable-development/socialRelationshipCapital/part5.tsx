'use client';

import Image from 'next/image';

export default function SocialRelationshipCapitalPart5() {
  const campaigns = [
    {
      image: '/images/sustainability/health-box-img-1.PNG',
      alt: 'Man using CIM app on smartphone',
      description: 'CIM Personal Loan',
    },
    {
      image: '/images/sustainability/health-box-img-2.PNG',
      alt: 'Hand holding smartphone with car in background',
      description: 'Auto loan campaign',
    },
    {
      image: '/images/sustainability/health-box-img-3.PNG',
      alt: 'Woman in yellow shirt at workspace',
      description: 'Business loan campaign',
    },
    {
      image: '/images/sustainability/health-box-img-4.PNG',
      alt: 'Child with piggy bank',
      description: 'Save Smart, Start Young campaign',
    },
  ];

  const socialMediaData = [
    {
      platform: 'Facebook',
      icon: '🇫',
      color: '#1877F2',
      reach: { '2022/23': '4.2 M', '2023/24': '7.3 M' },
      followers: { '2022/23': '122 K', '2023/24': '178 K' },
      impressions: { '2022/23': '31 M', '2023/24': '51 M' },
    },
    {
      platform: 'Instagram',
      icon: '📸',
      color: '#E4405F',
      reach: { '2022/23': '338', '2023/24': '15 K' },
      followers: { '2022/23': 'N/A', '2023/24': '506.7 K' },
      impressions: { '2022/23': 'N/A', '2023/24': '9.1 M' },
    },
    {
      platform: 'YouTube',
      icon: '📺',
      color: '#FF0000',
      reach: { '2022/23': '262.4 K', '2023/24': '646.1 K' },
      followers: { '2022/23': '30 K', '2023/24': '31 K' },
      impressions: { '2022/23': '1.2 M', '2023/24': '1 M' },
    },
    {
      platform: 'TikTok',
      icon: '🎵',
      color: '#000000',
      reach: { '2022/23': '303', '2023/24': '10 K' },
      followers: { '2022/23': '2 K', '2023/24': '2.6 K' },
      impressions: { '2022/23': '388.2 K', '2023/24': '88.2 K' },
    },
  ];

  const channelManagement = [
    {
      category: 'Kids/Teenagers 01-18',
      focus:
        'Nurturing the hopes and dreams of children, the custodian of the future is crucial to build a stable future',
      products: 'LB Minor Savings, LB Regular Savings',
      preference: 'Digital',
      color: '#FFA500',
    },
    {
      category: 'Millennials 19-29',
      focus:
        'Millennials prioritise new experiences, showing a significant inclination towards investment and retirement products',
      products:
        'Personal Loan, Digital Financing, Leasing and Savings products',
      preference: 'Digital',
      color: '#4169E1',
    },
    {
      category: 'Young Families 30-39',
      focus:
        'Young families frequently face financial pressures due to lifestyle aspirations such as acquiring larger homes, family vehicles, and other expenses',
      products:
        'Leasing, Mortgage Loan, Gold loan, Digital Financing and Savings products',
      preference: 'Physical/Digital',
      color: '#32CD32',
    },
    {
      category: 'Established Families 40-55',
      focus:
        "Balancing work commitments, children's education expenses, often necessitates flexible products to accommodate unexpected financial needs",
      products: 'Education loan, gold loan and savings products',
      preference: 'Physical',
      color: '#8B4513',
    },
    {
      category: 'Mature well-off 55-60',
      focus:
        'Mature, financially stable customers approaching a higher quality of life and retiring in their retirement years',
      products: 'FD products and Savings products',
      preference: 'Physical',
      color: '#808080',
    },
    {
      category: 'Senior citizens 60+',
      focus:
        'Senior citizens who expect secure product returns to maintain their quality of life',
      products: 'Senior citizens FD and savings products',
      preference: 'Physical',
      color: '#800080',
    },
    {
      category: 'Self-employed individuals',
      focus:
        'Independent self-sufficient individuals seeking dynamic solutions to take them to the next level',
      products: 'Personal loan, Leasing, Savings, Mortgage and Gold loan',
      preference: 'Physical/Digital',
      color: '#FF69B4',
    },
    {
      category: 'SMEs',
      focus:
        'The backbone of the economy, SMEs require stable, long-term solutions to foster growth and maturity of their businesses',
      products: 'Personal Loan, Gold Loan, Mortgage, Micro Leasing and Savings',
      preference: 'Physical/Digital',
      color: '#20B2AA',
    },
  ];

  return (
    <div>
      <div className="bg-white p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={campaign.image}
                alt={campaign.alt}
                className="w-full h-48 object-cover"
                width={300}
                height={300}
              />
            </div>
          ))}
        </div>

        <div className="space-y-4 text-sm">
          <p className="text-black">
            In our marketing communications, we enhanced the visual appeal and
            brought a new feel to the CIM app. Our aim is to achieve our
            customer reach objectives by adapting and refining vibrancy into our
            communication. Accordingly, we shifted focus from product-oriented
            content to visually appealing material, featuring a younger
            demographic who will be our future customers. However, the challenge
            lies in striking a balance between catering to existing clients and
            making our content appealing to the younger generation.
          </p>
          <p className="text-black">
            Prominence was given to video content, particularly through a
            revamped TikTok presence. Additionally, we&apos;ve launched
            dedicated campaigns to engage our staff, featuring their
            user-generated content on our channels to foster a sense of
            involvement. Furthermore, we conducted customer polls and tracked
            customer satisfaction metrics, with plans to share KPIs internally.
          </p>
          <p className="text-black">
            During FY 2023/24, there were no incidents of non-compliance
            concerning marketing and communication nor product and service
            information and labelling.
          </p>
        </div>

        <div className="mt-6">
          <Image
            src="/images/sustainability/health-dancing-girls.PNG"
            width={500}
            height={400}
            alt="sustainability"
            unoptimized
          />
        </div>
      </div>

      <div className="bg-gray-100 p-4">
        <h2 className="text-2xl font-bold mb-4 text-[#C9A86B]">
          SOCIAL AND RELATIONSHIP CAPITAL
        </h2>

        <div className="bg-[#C9A86B] text-white p-2 mb-4">
          <h3 className="text-lg font-bold">
            Our social media footprint - LB Finance PLC
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {socialMediaData.map((platform, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <div className="text-2xl mb-2" style={{ color: platform.color }}>
                {platform.platform}
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
            src="/images/sustainability/health-social-img-1.PNG"
            alt="20,000 followers celebration"
            className="w-full h-auto rounded"
            width={300}
            height={300}
            unoptimized
          />
          <Image
            src="/images/sustainability/health-social-img-2.PNG"
            alt="Congratulations to winner of the week"
            className="w-full h-auto rounded"
            width={300}
            height={300}
            unoptimized
          />
          <Image
            src="/images/sustainability/health-social-img-3.PNG"
            alt="Auto loan campaign"
            className="w-full h-auto rounded"
            width={300}
            height={300}
            unoptimized
          />
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2 text-[#C9A86B]">
            MANAGING CHANNELS
          </h3>
          <p className="text-sm mb-4 text-black">
            Our channel infrastructure forms the backbone of delivering our
            customer value proposition. To ensure it remains adaptable to
            customer needs, we proactively enhance its flexibility and
            responsiveness. Our channel management decisions are based on our
            customer profiles, life cycles, geographical locations, population
            density, and competitive positioning. To enhance the overall appeal
            of our channel architecture, we have transitioned towards an
            omni-channel environment, facilitating seamless integration between
            physical and digital channels. For more detailed insights into our
            channel operations, please refer to the Manufactured Capital Report
            on page 100.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#C9A86B] text-white">
                <th className="p-2 text-left">Category</th>
                <th className="p-2 text-left">Focus</th>
                <th className="p-2 text-left">Focus Products</th>
                <th className="p-2 text-left">Channel Preference</th>
              </tr>
            </thead>
            <tbody>
              {channelManagement.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
                >
                  <td className="p-2 font-bold" style={{ color: item.color }}>
                    {item.category}
                  </td>
                  <td className="p-2 text-black">{item.focus}</td>
                  <td className="p-2 text-black">{item.products}</td>
                  <td className="p-2 text-black">{item.preference}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
