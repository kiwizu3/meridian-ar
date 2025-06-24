'use client';

import React from 'react';

export default function SustainabilityGRI() {
  const disclosures = [
    {
      id: '2-1',
      description: 'Organizational details',
      location: '10, 11, 430',
      link: '/sustainability/gri/10-11-430',
    },
    {
      id: '2-2',
      description:
        "Entities included in the organization's sustainability reporting",
      location: '7',
      link: '/sustainability/gri/7-8',
    },
    {
      id: '2-3',
      description: 'Reporting period, frequency and contact point',
      location: '7, 8',
      link: '/sustainability/gri/7-8',
    },
    {
      id: '2-4',
      description: 'Restatements of information',
      location: '8',
      link: '/sustainability/gri/7-8',
    },
    {
      id: '2-5',
      description: 'External assurance',
      location: '8',
      link: '/sustainability/gri/7-8',
    },
    {
      id: '2-6',
      description: 'Activities, value chain and other business relationships',
      location: '18',
      link: '/sustainability/gri/7-8',
    },
    {
      id: '2-7',
      description: 'Employees',
      location: '118, 119',
      link: '/sustainability/gri/118-119',
    },
    {
      id: '2-8',
      description: 'Workers who are not employees',
      location: '118, 119',
      link: '/sustainability/gri/118-119',
    },
    {
      id: '2-9',
      description: 'Governance structure and composition',
      location: '158, 168, 169, 172',
      link: '/sustainability/gri/158-168-169-172',
    },
    {
      id: '2-10',
      description: 'Nomination and selection of the highest governance body',
      location: '168',
      link: '/sustainability/gri/158-168-169-172',
    },
    {
      id: '2-11',
      description: 'Chair of the highest governance body',
      location: '170',
      link: '/sustainability/gri/169-170-171-172',
    },
    {
      id: '2-12',
      description:
        'Role of the highest governance body in overseeing the management of impacts',
      location: '169, 170, 171, 172',
      link: '/sustainability/gri/169-170-171-172',
    },
    {
      id: '2-13',
      description: 'Delegation of responsibility for managing impacts',
      location: '171, 172',
      link: '/sustainability/gri/169-170-171-172',
    },
    {
      id: '2-14',
      description:
        'Role of the highest governance body in sustainability reporting',
      location: '171, 172',
      link: '/sustainability/gri/169-170-171-172',
    },
    {
      id: '2-15',
      description: 'Conflicts of interest',
      location: '175',
      link: '/sustainability/gri/175',
    },
    {
      id: '2-16',
      description: 'Communication of critical concerns',
      location: '429',
      link: '/sustainability/gri/429',
    },
    {
      id: '2-17',
      description: 'Collective knowledge of the highest governance body',
      location: '177',
      link: '/sustainability/gri/177-178',
    },
    {
      id: '2-18',
      description:
        'Evaluation of the performance of the highest governance body',
      location: '178',
      link: '/sustainability/gri/177-178',
    },
    {
      id: '2-19',
      description: 'Remuneration policies',
      location: '114',
      link: '/sustainability/gri/114',
    },
    {
      id: '2-20',
      description: 'Process to determine remuneration',
      location: '118, 119, 144',
      link: '/sustainability/gri/118-119-144',
    },
    {
      id: '2-21',
      description: 'Annual total compensation ratio',
      location: '',
      explanation: 'Does not disclose due to confidential reasons',
      link: null,
    },
    {
      id: '2-22',
      description: 'Statement on sustainable development strategy',
      location: '115',
      link: '/sustainability/gri/115',
    },
    {
      id: '2-23',
      description: 'Policy commitments',
      location: '50, 68, 77, 117',
      link: '/sustainability/gri/50-68-77-117',
    },
    {
      id: '2-24',
      description: 'Embedding policy commitments',
      location: '50, 117, 77, 71, 68',
      link: '/sustainability/gri/50-117-77-71-68',
    },
    {
      id: '2-25',
      description: 'Processes to remediate negative impacts',
      location: '50, 117',
      link: '/sustainability/gri/50-117',
    },
    {
      id: '2-26',
      description: 'Mechanisms for seeking advice and raising concerns',
      location: '136, 356',
      link: '/sustainability/gri/136-356',
    },
    {
      id: '2-27',
      description: 'Compliance with laws and regulations',
      location: '6',
      link: '/sustainability/gri/6',
    },
    {
      id: '2-28',
      description: 'Membership associations',
      location: '431',
      link: '/sustainability/gri/429',
    },
    {
      id: '2-29',
      description: 'Approach to stakeholder engagement',
      location: '40',
      link: '/sustainability/gri/40',
    },
    {
      id: '2-30',
      description: 'Collective bargaining agreements',
      location: 'N/A',
      link: null,
    },
  ];

  const materialTopics = [
    {
      id: '3-1',
      description: 'Process to determine material topics',
      location: '45',
      link: '/sustainability/gri/45',
    },
    {
      id: '3-2',
      description: 'List of material topics',
      location: '45',
      link: '/sustainability/gri/45',
    },
  ];

  const economicPerformance = [
    {
      id: '3-3',
      description: 'Management of material topics',
      location: '13',
      link: '/sustainability/gri/13',
    },
    {
      id: '201-1',
      description: 'Direct economic value generated and distributed',
      location: '13',
      link: '/sustainability/gri/13',
    },
    {
      id: '201-2',
      description:
        'Financial implications and other risks and opportunities due to climate change',
      location: '35',
      link: '/sustainability/gri/35',
    },
    {
      id: '201-3',
      description:
        'Defined benefit plan obligations and other retirement plans',
      location: '114',
      link: '/sustainability/gri/114',
    },
    {
      id: '201-4',
      description: 'Financial assistance received from government',
      location: '',
      explanation: 'None',
      link: null,
    },
  ];

  const marketPresence = [
    {
      id: '3-3',
      description: 'Management of material topics',
      location: '114',
      link: '/sustainability/gri/114',
    },
  ];

  const sections = [
    {
      title: 'Market Presence',
      standard: 'GRI 202: Market Presence 201-6',
      items: [
        {
          id: '202-1',
          description:
            'Ratios of standard entry level wage by gender compared to local minimum wage',
          location: '',
          link: null,
          explanation:
            'LBF pays above minimum wages as stipulated by law or applicable collective agreements (There is no gender differences). According to legislation to be presented in Parliament of Sri Lanka, the national minimum monthly wage for all workers in any industry or service will be Rs. 10,000/- while the national minimum daily wage of a worker will be Rs. 400/-. 114',
        },
        {
          id: '202-2',
          description:
            'Proportion of senior management hired from the local community',
          location: '',
          link: null,
          explanation: 'Locally hired',
        },
      ],
    },
    {
      title: 'Indirect economic impacts',
      standard: 'GRI 3: Material Topics 202-1',
      items: [
        {
          id: '3-3',
          description: 'Management of material topics',
          location: '13',
          link: '/sustainability/gri/13',
        },
      ],
    },
    {
      title: 'Anti-corruption',
      standard: 'GRI 3: Material Topics 202-1\nGRI 205: Anti-corruption 201-6',
      items: [
        {
          id: '3-3',
          description: 'Management of material topics',
          location: '355',
          link: '/sustainability/gri/355',
        },
        {
          id: '205-1',
          description: 'Operations assessed for risks related to corruption',
          location: '355',
          link: '/sustainability/gri/355',
        },
        {
          id: '205-2',
          description:
            'Communication and training about anti-corruption policies and procedures',
          location: '355',
          link: '/sustainability/gri/355',
        },
        {
          id: '205-3',
          description: 'Confirmed incidents of corruption and actions taken',
          location: '',
          link: null,
          explanation: 'No incident was reported',
        },
      ],
    },
    {
      title: 'Anti-competitive behavior',
      standard:
        'GRI 3: Material Topics 202-1\nGRI 206: Anti-competitive Behavior 201-6',
      items: [
        {
          id: '3-3',
          description: 'Management of material topics',
          location: '131',
          link: '/sustainability/gri/131',
        },
        {
          id: '206-1',
          description:
            'Legal actions for anti-competitive behavior, anti-trust, and monopoly practices',
          location: '',
          link: null,
          explanation: 'No incident was reported',
        },
      ],
    },
    {
      title: 'Emissions',
      standard: 'GRI 3: Material Topics 202-1\nGRI 305: Emissions 201-6',
      items: [
        {
          id: '3-3',
          description: 'Management of material topics',
          location: '152',
          link: '/sustainability/gri/152',
        },
        {
          id: '305-1',
          description: 'Direct (Scope 1) GHG emissions',
          location: '152',
          link: '/sustainability/gri/152',
        },
        {
          id: '305-2',
          description: 'Energy indirect (Scope 2) GHG emissions',
          location: '152',
          link: '/sustainability/gri/152',
        },
        {
          id: '305-3',
          description: 'Other indirect (Scope 3) GHG emissions',
          location: '152',
          link: '/sustainability/gri/152',
        },
        {
          id: '305-4',
          description: 'GHG emissions intensity',
          location: '151',
          link: '/sustainability/gri/151',
        },
        {
          id: '305-5',
          description: 'Reduction of GHG emissions',
          location: '151',
          link: '/sustainability/gri/151',
        },
        {
          id: '305-6',
          description: 'Emissions of ozone-depleting substances (ODS)',
          location: '',
          link: null,
          explanation: 'N/A',
        },
        {
          id: '305-7',
          description:
            'Nitrogen oxides (NOx), sulfur oxides (SOx), and other significant air emissions',
          location: '152, 429',
          link: '/sustainability/gri/152-429',
        },
      ],
    },
    {
      title: 'Employment',
      standard: 'GRI 3: Material Topics 202-1\nGRI 401: Employment 201-6',
      items: [
        {
          id: '3-3',
          description: 'Management of material topics',
          location: '108',
          link: '/sustainability/gri/108',
        },
        {
          id: '401-1',
          description: 'New employee hires and employee turnover',
          location: '118',
          link: '/sustainability/gri/118',
        },
        {
          id: '401-2',
          description:
            'Benefits provided to full-time employees that are not provided to temporary or part-time employees',
          location: '114, 118',
          link: '/sustainability/gri/114-118',
        },
        {
          id: '401-3',
          description: 'Parental leave',
          location: '116',
          link: '/sustainability/gri/116',
        },
      ],
    },
    {
      title: 'Training and Education',
      standard:
        'GRI 3: Material Topics 202-1\nGRI 404: Training and Education 201-6',
      items: [
        {
          id: '3-3',
          description: 'Management of material topics',
          location: '119',
          link: '/sustainability/gri/119',
        },
        {
          id: '404-1',
          description: 'Average hours of training per year per employee',
          location: '119',
          link: '/sustainability/gri/119',
        },
        {
          id: '404-2',
          description:
            'Programs for upgrading employee skills and transition assistance programs',
          location: '117, 119',
          link: '/sustainability/gri/117-119',
        },
        {
          id: '404-3',
          description:
            'Percentage of employees receiving regular performance and career development reviews',
          location: '116',
          link: '/sustainability/gri/116',
        },
      ],
    },
    {
      title: 'Diversity and equal opportunity',
      standard:
        'GRI 3: Material Topics 202-1\nGRI 405: Diversity and Equal Opportunity 201-6',
      items: [
        {
          id: '3-3',
          description: 'Management of material topics',
          location: '115',
          link: '/sustainability/gri/115',
        },
        {
          id: '405-1',
          description: 'Diversity of governance bodies and employees',
          location: '115, 118, 119, 168, 389',
          link: '/sustainability/gri/115-118-119-168-389',
        },
        {
          id: '405-2',
          description: 'Ratio of basic salary and remuneration of women to men',
          location: '114, 118, 119',
          link: '/sustainability/gri/114-118-119',
        },
      ],
    },
    {
      title: 'Local communities',
      standard:
        'GRI 3: Material Topics 202-1\nGRI 413: Local Communities 201-6',
      items: [
        {
          id: '3-3',
          description: 'Management of material topics',
          location: '130',
          link: '/sustainability/gri/130',
        },
        {
          id: '413-1',
          description:
            'Operations with local community engagement, impact assessments, and development programs',
          location: '41, 139, 152',
          link: '/sustainability/gri/41-139-152',
        },
        {
          id: '413-2',
          description:
            'Operations with significant actual and potential negative impacts on local communities',
          location: '139',
          link: '/sustainability/gri/139',
        },
      ],
    },
    {
      title: 'Customer privacy',
      standard: 'GRI 3: Material Topics 202-1\nGRI 418: Customer Privacy 201-6',
      items: [
        {
          id: '3-3',
          description: 'Management of material topics',
          location: '131',
          link: '/sustainability/gri/131',
        },
        {
          id: '418-1',
          description:
            'Substantiated complaints concerning breaches of customer privacy and losses of customer data',
          location: '135',
          link: '/sustainability/gri/135',
        },
      ],
    },
  ];

  return (
    <div>
      <div className="min-h-screen bg-[#0A3D5F] text-white p-8 ">
        <h1 className="text-3xl font-bold mb-6">GRI CONTENT INDEX</h1>

        <p className="mb-4">
          Statement of use - LB Finance PLC has reported in accordance with the
          GRI Standards for the period 01st of April 2023 to 31st of March 2024.
        </p>
        <p className="mb-6">GRI 1 used - GRI 1: Foundation 2021</p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600">
                <th className="border border-white p-2">
                  GRI STANDARD/OTHER SOURCE
                </th>
                <th className="border border-white p-2">DISCLOSURE</th>
                <th className="border border-white p-2">LOCATION (PAGE)</th>
                <th className="border border-white p-2">EXPLANATION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-800">
                <td colSpan={4} className="border border-white p-2 font-bold">
                  GENERAL DISCLOSURES
                </td>
              </tr>
              <tr className="bg-blue-700">
                <td rowSpan={31} className="border border-white p-2">
                  GRI 2: General Disclosures 202-1
                </td>
                <td colSpan={3} className="border border-white p-2"></td>
              </tr>
              {disclosures.map((item) => (
                <tr key={item.id} className="bg-blue-700">
                  <td className="border border-white p-2">
                    {item.id} {item.description}
                  </td>
                  <td className="border border-white p-2">
                    {item.link ? (
                      <a href={item.link}>{item.location}</a>
                    ) : (
                      <span>{item.location}</span>
                    )}
                  </td>
                  <td className="border border-white p-2">
                    {item.explanation}
                  </td>
                </tr>
              ))}
              <tr className="bg-blue-800">
                <td colSpan={4} className="border border-white p-2 font-bold">
                  MATERIAL TOPICS
                </td>
              </tr>
              <tr className="bg-blue-700">
                <td rowSpan={3} className="border border-white p-2">
                  GRI 3: Material Topics 202-1
                </td>
                <td colSpan={3} className="border border-white p-2"></td>
              </tr>
              {materialTopics.map((item) => (
                <tr key={item.id} className="bg-blue-700">
                  <td className="border border-white p-2">
                    {item.id} {item.description}
                  </td>
                  <td className="border border-white p-2">
                    {item.link ? (
                      <a href={item.link}>{item.location}</a>
                    ) : (
                      <span>{item.location}</span>
                    )}
                  </td>
                  <td className="border border-white p-2"></td>
                </tr>
              ))}
              <tr className="bg-blue-800">
                <td colSpan={4} className="border border-white p-2 font-bold">
                  Economic performance
                </td>
              </tr>
              <tr className="bg-blue-700">
                <td rowSpan={6} className="border border-white p-2">
                  GRI 3: Material Topics 202-1
                  <br />
                  GRI 201: Economic Performance 201-6
                </td>
                <td colSpan={3} className="border border-white p-2"></td>
              </tr>
              {economicPerformance.map((item) => (
                <tr key={item.id} className="bg-blue-700">
                  <td className="border border-white p-2">
                    {item.id} {item.description}
                  </td>
                  {item.link ? (
                    <a href={item.link}>{item.location}</a>
                  ) : (
                    <span>{item.location}</span>
                  )}
                  <td className="border border-white p-2">
                    {item.explanation}
                  </td>
                </tr>
              ))}
              <tr className="bg-blue-800">
                <td colSpan={4} className="border border-white p-2 font-bold">
                  Market presence
                </td>
              </tr>
              <tr className="bg-blue-700">
                <td rowSpan={2} className="border border-white p-2">
                  GRI 3: Material Topics 202-1
                </td>
                <td colSpan={3} className="border border-white p-2"></td>
              </tr>
              {marketPresence.map((item) => (
                <tr key={item.id} className="bg-blue-700">
                  <td className="border border-white p-2">
                    {item.id} {item.description}
                  </td>
                  {item.link ? (
                    <a href={item.link}>{item.location}</a>
                  ) : (
                    <span>{item.location}</span>
                  )}
                  <td className="border border-white p-2"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        className="min-h-screen bg-[#0A3D5F] text-white p-8"
        style={{ marginTop: '48px' }}
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600">
                <th className="border border-white p-2">
                  GRI STANDARD/OTHER SOURCE
                </th>
                <th className="border border-white p-2">DISCLOSURE</th>
                <th className="border border-white p-2">LOCATION (PAGE)</th>
                <th className="border border-white p-2">EXPLANATION</th>
              </tr>
            </thead>
            <tbody>
              {sections.map((section, index) => (
                <React.Fragment key={index}>
                  <tr className="bg-blue-800">
                    <td
                      colSpan={4}
                      className="border border-white p-2 font-bold"
                    >
                      {section.title}
                    </td>
                  </tr>
                  <tr className="bg-blue-700">
                    <td
                      rowSpan={section.items.length + 1}
                      className="border border-white p-2"
                    >
                      {section.standard}
                    </td>
                    <td colSpan={3} className="border border-white p-2"></td>
                  </tr>
                  {section.items.map((item, itemIndex) => (
                    <tr key={itemIndex} className="bg-blue-700">
                      <td className="border border-white p-2">
                        {item.id} {item.description}
                      </td>
                      {item.link ? (
                        <a href={item.link}>{item.location}</a>
                      ) : (
                        <span>{item.location}</span>
                      )}
                      <td className="border border-white p-2">
                        {item.explanation}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
