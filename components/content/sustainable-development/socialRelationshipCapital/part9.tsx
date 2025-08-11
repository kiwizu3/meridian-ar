'use client';

import Image from 'next/image';

export default function SocialRelationshipCapitalPart9() {
  const projectData = [
    {
      project: 'CSE Stock Market Challenge 2023',
      description:
        "CSE Stock Market Challenge 2023 organised by the Students' Association of Financial Management of the Department of Commerce and Financial Management, Faculty of Management and Finance, University of Kelaniya. The event was organised with the collaboration of Colombo Stock Exchange and LB Finance PLC. The objectives were; Increasing the investments in stock market among new generation.",
      achievement: [
        'Increasing the knowledge about the process of stock market among school students.',
        'Encouraging new generation to be alert about corporate organisations and world economic markets.',
        'Increasing the general sense about prevailing macro-economic conditions of the country among school students.',
      ],
      employeeVolunteerism: 237,
      expenditure: '300,000/-',
    },
    {
      project: 'Educational Resources for Ampe Junior School',
      description:
        "The Educational Resources for Ampe Junior School project aimed to provide essential books and equipment for Grade 1 students for the year 2024. The list of required items included rule books, drawing books, stationery, and other educational materials necessary for the students' learning and development.",
      achievement: [
        'Early Literacy Development',
        'Enhanced Social and Emotional Development',
        'Preparation for Lifelong Learning',
        'Positive School Experience',
      ],
      employeeVolunteerism: 192,
      expenditure: '100,050',
    },
    {
      project: 'Consumer education',
      description:
        'Education on financial management: Conducted video series on social media to build awareness on the financial management under the topics of building investment habits,developing your savings habit, golden rules for strong financial security',
      achievement: [
        'Enhance the savings habit of the customers and non-customers',
        'Day today financial information and regulatory requirements',
        'Information on wealth maximisation',
      ],
      employeeVolunteerism: 74,
      expenditure: '-',
    },
  ];

  const imageGallery = [
    '/images/sustainability/health-gallery-img-1.png',
    '/images/sustainability/health-gallery-img-2.png',
    '/images/sustainability/health-gallery-img-3.png',
    '/images/sustainability/health-gallery-img-4.png',
    '/images/sustainability/health-gallery-img-5.png',
    '/images/sustainability/health-gallery-img-6.png',
  ];

  return (
    <div>
      <div className="text-black pt-8">
        <div className="bg-white rounded-lg p-6">
          <h1 className="text-3xl font-bold text-[#ED7D31] mb-6">
            SOCIAL AND RELATIONSHIP CAPITAL
          </h1>

          <table className="w-full border-collapse border border-gray-300 mb-8">
            <thead>
              <tr className="bg-[#C55A11] text-white">
                <th className="border border-gray-300 p-2 text-left">
                  Project
                </th>
                <th className="border border-gray-300 p-2 text-left">
                  Description
                </th>
                <th className="border border-gray-300 p-2 text-left">
                  Achievement
                </th>
                <th className="border border-gray-300 p-2 text-left">
                  Employee volunteerism (hours)
                </th>
                <th className="border border-gray-300 p-2 text-left">
                  Expenditure (Rs.)
                </th>
              </tr>
            </thead>
            <tbody>
              {projectData.map((project, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                >
                  <td className="border border-gray-300 p-2">
                    {project.project}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {project.description}
                  </td>
                  <td className="border border-gray-300 p-2">
                    <ul className="list-disc list-inside">
                      {project.achievement.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {project.employeeVolunteerism}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {project.expenditure}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {imageGallery.map((src, index) => (
              <div key={index} className="aspect-w-4 aspect-h-3">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="object-cover rounded-lg"
                  width={300}
                  height={300}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-black pt-8">
        <div className="bg-white rounded-lg p-6">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Knowledge sharing
          </h1>
          <p className="text-sm mb-6">
            Entrepreneurs represent the future of our nation, and empowering
            them is crucial for driving our country&apos;s growth trajectory in
            the years ahead. At LBF, we uphold a structured agenda aimed at
            offering the necessary guidance and support to nurture the next
            generation of innovators, business professionals, and corporate
            leaders.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse mb-6">
              <thead>
                <tr className="bg-amber-500 text-white">
                  <th className="border p-2 text-left">Project</th>
                  <th className="border p-2 text-left">Description</th>
                  <th className="border p-2 text-left">Achievement</th>
                  <th className="border p-2 text-left">
                    Employee volunteerism (hours)
                  </th>
                  <th className="border p-2 text-left">Expenditure (Rs.)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2 align-top">Business development</td>
                  <td className="border p-2 align-top">
                    We launched video series and sharing information on social
                    media to raise awareness about business development. Our
                    focus includes key topics such as building and developing a
                    business on social media, meeting financial needs,
                    leveraging digital skills to generate income, and
                    identifying potential customers. Stay tuned for valuable
                    insights and tips to help you succeed in your
                    entrepreneurial journey.
                  </td>
                  <td className="border p-2 align-top">
                    <ul className="list-disc list-inside">
                      <li>Wealth Creation and Poverty Alleviation</li>
                      <li>Inclusive Growth</li>
                      <li>Diversification of the Economy</li>
                      <li>Innovation and Creativity</li>
                      <li>Job Creation</li>
                    </ul>
                  </td>
                  <td className="border p-2 align-top text-center">304</td>
                  <td className="border p-2 align-top text-center">-</td>
                </tr>
                <tr>
                  <td className="border p-2 align-top">
                    Fuelling dreams - LB Finance empowers women/youth with UCES
                  </td>
                  <td className="border p-2 align-top">
                    LBF proudly sponsored another impactful community project at
                    the La Sallian Community Education Center (LCES) in Colombo.
                    One of the primary vocational training programs that the
                    organization offers is a tailoring program, which helps
                    individuals develop skills in the field of tailoring and
                    sewing and relaunch a comprehensive Dress Making Course, a
                    transformative vocational program for those embarking on a
                    career in the fashion industry.
                  </td>
                  <td className="border p-2 align-top">
                    <ul className="list-disc list-inside">
                      <li>
                        Empowers women by equipping them with practical skills
                        and knowledge
                      </li>
                      <li>
                        Vocational training opens up diverse career
                        opportunities for women in traditionally male-dominated
                        fields, enabling women to gain entry into skilled
                        professions that offer higher wages and greater
                        financial stability
                      </li>
                      <li>
                        Women who receive vocational training contribute to the
                        development of their communities by participating in
                        skilled labour markets
                      </li>
                    </ul>
                  </td>
                  <td className="border p-2 align-top text-center">401</td>
                  <td className="border p-2 align-top text-center">890,817</td>
                </tr>
                <tr>
                  <td className="border p-2 align-top">
                    Women empowerment - Developing start-up business and budding
                    entrepreneurs in Sri Lanka and Myanmar
                  </td>
                  <td className="border p-2 align-top">
                    We organised a video series showcasing success stories,
                    awareness sessions on financial literacy, and
                    entrepreneurial capacity building for LBF women
                    entrepreneurs. These initiatives highlight the contributions
                    made by LBF to enhance their lives and foster their
                    development.
                  </td>
                  <td className="border p-2 align-top">
                    Empowering women as innovative agents of change for
                    achieving sustainable development goals, including poverty
                    eradication, gender equality, and economic growth. By
                    investing in women&apos;s entrepreneurship, societies can
                    create a more inclusive, equitable, and prosperous future
                    for all.
                  </td>
                  <td className="border p-2 align-top text-center">77</td>
                  <td className="border p-2 align-top text-center">-</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Image
                src="/images/sustainability/health-gallery-img-7.PNG"
                alt="Women in a sewing class"
                className="w-full h-auto"
                width={300}
                height={300}
              />
            </div>
            <div>
              <Image
                src="/images/sustainability/health-gallery-img-8.PNG"
                alt="Women in a sewing class"
                className="w-full h-auto"
                width={300}
                height={300}
              />
            </div>
            <div>
              <Image
                src="/images/sustainability/health-gallery-img-9.PNG"
                alt="Women in a sewing class"
                className="w-full h-auto"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
