'use client';

import React from 'react';

export default function SustainabilityGRI() {
  const disclosures: SectionItem[] = [
    {
      id: '2-1',
      description: 'Organizational details',
      location: '5, 14,',
      // link: '/sustainability/gri/5-14',
    },
    {
      id: '2-2',
      description:
        'Entities included in the organisations sustainability reporting',
      location: '16',
      // link: '/sustainability/gri/16',
    },
    {
      id: '2-3',
      description: 'Reporting period, frequency and contact point',
      location: '19, 22',
      // link: '/sustainability/gri/19,22',
    },
    {
      id: '2-4',
      description: 'Restatements of information',
      location: '19',
      // link: '/sustainability/gri/19,22',
    },
    {
      id: '2-5',
      description: 'External assurance',
      location: '19',
      // link: '/sustainability/gri/19,22',
    },
    {
      id: '2-6',
      description: 'Activities, value chain and other business relationships',
      location: '222,223',
      // link: '/sustainability/gri/222,223',
    },
    {
      id: '2-7',
      description: 'Employees',
      location: '170, 171',
      // link: '/sustainability/gri/170-171,298',
    },
    {
      id: '2-8',
      description: 'Workers who are not employees',
      location: '171',
      // link: '/sustainability/gri/170-171,298',
    },
    {
      id: '2-9',
      description: 'Governance structure and composition',
      location: '253',
      // link: '/sustainability/gri/253',
    },
    {
      id: '2-10',
      description: 'Nomination and selection of the highest governance body',
      location: '271',
      // link: '/sustainability/gri/271',
    },
    {
      id: '2-11',
      description: 'Chair of the highest governance body',
      location: '264',
      // link: '/sustainability/gri/264',
    },
    {
      id: '2-12',
      description:
        'Role of the highest governance body in overseeing the management of impacts',
      location: '273',
      // link: '/sustainability/gri/273,277',
    },
    {
      id: '2-13',
      description: 'Delegation of responsibility for managing impacts',
      location: '273',
      // link: '/sustainability/gri/273,277',
    },
    {
      id: '2-14',
      description:
        'Role of the highest governance body in sustainability reporting',
      location: '273,277',
      // link: '/sustainability/gri/273,277',
    },
    {
      id: '2-15',
      description: 'Conflicts of interest',
      location: '273',
      // link: '/sustainability/gri/273,277',
    },
    {
      id: '2-16',
      description: 'Communication of critical concerns',
      location: '273',
      // link: '/sustainability/gri/273,277',
    },
    {
      id: '2-17',
      description: 'Collective knowledge of the highest governance body',
      location: '272',
      // link: '/sustainability/gri/272',
    },
    {
      id: '2-18',
      description:
        'Evaluation of the performance of the highest governance body',
      location: '274,275',
      // link: '/sustainability/gri/274-275',
    },
    {
      id: '2-19',
      description: 'Remuneration policies',
      location: '275',
      // link: '/sustainability/gri/274-275',
    },
    {
      id: '2-20',
      description: 'Process to determine remuneration',
      location: '170,298',
      // link: '/sustainability/gri/170-171,298',
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
      location: '84',
      // link: '/sustainability/gri/84',
    },
    {
      id: '2-23',
      description: 'Policy commitments',
      location: '62, 81, 124 - 221',
      // link: '/sustainability/gri/62-63,81,124-221',
    },
    {
      id: '2-24',
      description: 'Embedding policy commitments',
      location: '62,81',
      // link: '/sustainability/gri/62-63,81,124-221',
    },
    {
      id: '2-25',
      description: 'Processes to remediate negative impacts',
      location: '167',
      // link: '/sustainability/gri/167',
    },
    {
      id: '2-26',
      description: 'Mechanisms for seeking advice and raising concerns',
      location: '197, 541 - 543',
      // link: '/sustainability/gri/197,541-543',
    },
    {
      id: '2-27',
      description: 'Compliance with laws and regulations',
      location: '18',
      // link: '/sustainability/gri/18',
    },
    {
      id: '2-28',
      description: 'Membership associations',
      location: '549',
      // link: '/sustainability/gri/549',
    },
    {
      id: '2-29',
      description: 'Approach to stakeholder engagement',
      location: '62,63',
      // link: '/sustainability/gri/62-63,81,124-221',
    },
    {
      id: '2-30',
      description: 'Collective bargaining agreements',
      location: 'N/A',
      link: null,
    },
  ];

  const materialTopics: SectionItem[] = [
    {
      id: '3-1',
      description: 'Process to determine material topics',
      location: '74',
      // link: '/sustainability/gri/74',
    },
    {
      id: '3-2',
      description: 'List of material topics',
      location: '75-80',
      // link: '/sustainability/gri/75-80',
    },
    {
      id: '3-3',
      description: 'Management of material topics',
      location: '124-221',
      // link: '/sustainability/gri/13',
    },
  ];

  const economicPerformance: SectionItem[] = [
    {
      id: '201-1',
      description: 'Direct economic value generated and distributed',
      location: '35, 40',
      // link: '/sustainability/gri/13',
    },
    {
      id: '201-2',
      description:
        'Financial implications and other risks and opportunities due to climate change',
      location: '341-344',
      // link: '/sustainability/gri/35',
    },
    {
      id: '201-3',
      description:
        'Defined benefit plan obligations and other retirement plans',
      location: '158',
      // link: '/sustainability/gri/114',
    },
    {
      id: '201-4',
      description: 'Financial assistance received from government',
      location: '',
      explanation: 'None',
      link: null,
    },
  ];

  const marketPresence: SectionItem[] = [
    {
      id: '202-1',
      description:
        'Ratios of standard entry level wage by gender compared to local minimum wage',
      location: '',
      explanation:
        'LBF pays above minimum wages as stipulated by law or applicable collective agreements (There is no gender differences). According to legislation to be presented in Parliament of Sri Lanka, the national minimum monthly wage for all workers in any industry or service will be Rs. 10,000/- while the national minimum daily wage of a worker will be Rs. 400/-',
      link: null,
    },
    {
      id: '202-2',
      description:
        'Proportion of senior management hired from the local community',
      location: '',
      explanation: 'Locally hired',
      link: null,
    },
  ];

  type SectionItem = {
    id: string;
    description: string;
    location: string;
    explanation?: string;
    link?: string | null;
  };

  type Section = {
    title: string;
    standard: string;
    items: SectionItem[];
  };

  const sections: Section[] = [
    {
      title: 'Indirect Economic Impacts',
      standard: 'GRI 203 Indirect Economic Impacts 2016',
      items: [
        {
          id: '203-2',
          description: 'Significant indirect economic impacts',
          location: '33-36',
          // link: '/sustainability/gri/33-36',
        },
      ],
    },
    {
      title: 'Anti-Corruption',
      standard: 'GRI 205 Anti-Corruption 2016',
      items: [
        {
          id: '205-1',
          description: 'Operations assessed for risks related to corruption',
          location: '541-543',
          // link: '/sustainability/gri/541-543',
        },
        {
          id: '205-2',
          description:
            'Communication and training about anti-corruption policies and procedures',
          location: '541-543',
          // link: '/sustainability/gri/541-543',
        },
        {
          id: '205-3',
          description: 'Confirmed incidents of corruption and actions taken',
          location: '',
          explanation: 'No incident was reported',
          link: null,
        },
      ],
    },
    {
      title: 'Anti-Competitive Behavior',
      standard: 'GRI 206 Anti-competitive Behavior 2016',
      items: [
        {
          id: '206-1',
          description:
            'Legal actions for anti-competitive behavior, anti-trust, and monopoly practices',
          location: '',
          explanation: 'No incident was reported',
          link: null,
        },
      ],
    },
    {
      title: 'TAX',
      standard: 'GRI 207 Tax 2019',
      items: [
        {
          id: '207-1',
          description: 'Approach to tax',
          location: '380-381, 432',
          // link: '/sustainability/gri/380-381-432',
        },
        {
          id: '207-2',
          description: 'Tax governance, control, and risk management',
          location: '380-381',
          // link: '/sustainability/gri/380-381',
        },
        {
          id: '207-3',
          description:
            'Stakeholder engagement and management of concerns related to tax',
          location: '380-381, 432',
          // link: '/sustainability/gri/380-381-432',
        },
        {
          id: '207-4',
          description: 'Country-by-country reporting',
          location: '363',
          // link: '/sustainability/gri/363',
        },
      ],
    },
    {
      title: 'Environment',
      standard: 'GRI 305 Emissions 2016',
      items: [
        {
          id: '305-1',
          description: 'Direct (Scope 1) GHG emissions',
          location: '110',
          // link: '/sustainability/gri/110',
        },
        {
          id: '305-2',
          description: 'Energy indirect (Scope 2) GHG emissions',
          location: '110',
          // link: '/sustainability/gri/110',
        },
        {
          id: '305-3',
          description: 'Other indirect (Scope 3) GHG emissions',
          location: '110',
          // link: '/sustainability/gri/110',
        },
        {
          id: '305-4',
          description: 'GHG emissions intensity',
          location: '40, 109',
          // link: '/sustainability/gri/40-109',
        },
        {
          id: '305-6',
          description: 'Emissions of ozone-depleting substances (ODS)',
          location: '',
          explanation: 'N/A',
          link: null,
        },
        {
          id: '305-7',
          description:
            'Nitrogen oxides (NOx), sulfur oxides (SOx), and other significant air emissions',
          location: '111',
          // link: '/sustainability/gri/111',
        },
      ],
    },
    {
      title: 'Social',
      standard: 'GRI 401 Employment 2016',
      items: [
        {
          id: '401-1',
          description: 'New employee hires and employee turnover',
          location: '170',
          // link: '/sustainability/gri/170',
        },
        {
          id: '401-2',
          description:
            'Benefits provided to full-time employees that are not provided to temporary or part-time employees',
          location: '159',
          // link: '/sustainability/gri/159',
        },
        {
          id: '401-3',
          description: 'Parental leave',
          location: '160',
          // link: '/sustainability/gri/160',
        },
      ],
    },
    {
      title: 'Occupational Health and Safety',
      standard: 'GRI 403 Occupational Health and Safety 2018',
      items: [
        {
          id: '403-1',
          description: 'Occupational health and safety management system',
          location: '161',
          // link: '/sustainability/gri/161',
        },
      ],
    },
    {
      title: 'Training and Education',
      standard: 'GRI 404 Training and Education 2016',
      items: [
        {
          id: '404-1',
          description: 'Average hours of training per year per employee',
          location: '171',
          // link: '/sustainability/gri/171',
        },
        {
          id: '404-2',
          description:
            'Programmes for upgrading employee skills and transition assistance programmes',
          location: '171',
          // link: '/sustainability/gri/171',
        },
        {
          id: '404-3',
          description:
            'Percentage of employees receiving regular performance and career development reviews',
          location: '157',
          // link: '/sustainability/gri/157',
        },
      ],
    },
    {
      title: 'Diversity and Equal Opportunity',
      standard: 'GRI 405 Diversity and Equal Opportunity 2016',
      items: [
        {
          id: '405-1',
          description: 'Diversity of governance bodies and employees',
          location: '171',
          // link: '/sustainability/gri/171',
        },
        {
          id: '405-2',
          description: 'Ratio of basic salary and remuneration of women to men',
          location: '160, 170',
          // link: '/sustainability/gri/160-170',
        },
      ],
    },
    {
      title: 'Non-discrimination',
      standard: 'GRI 406 Non-discrimination 2016',
      items: [
        {
          id: '406-1',
          description:
            'Incidents of discrimination and corrective actions taken',
          location: '',
          explanation: 'No incident was reported',
          link: null,
        },
      ],
    },
    {
      title: 'Local Communities',
      standard: 'GRI 413 Local Communities 2016',
      items: [
        {
          id: '413-1',
          description:
            'Operations with local community engagement, impact assessments, and development programmes',
          location: '200-204, 214-219',
          // link: '/sustainability/gri/200-204-214-219',
        },
        {
          id: '413-2',
          description:
            'Operations with significant actual and potential negative impacts on local communities',
          location: '',
          explanation: 'No incident was reported',
          link: null,
        },
      ],
    },
    {
      title: 'Customer Privacy',
      standard: 'GRI 418 Customer Privacy 2016',
      items: [
        {
          id: '418-1',
          description:
            'Substantiated complaints concerning breaches of customer privacy and losses of customer data',
          location: '',
          explanation: 'No incident was reported',
          link: null,
        },
      ],
    },
  ];

  return (
    <div>
      <div className="min-h-screen bg-cardGreen text-white p-8 ">
        <h1 className="text-3xl font-bold mb-6">GRI CONTENT INDEX</h1>

        <p className="mb-4">
          Statement of use - LBF PLC has reported in accordance with the GRI
          Standards for the period 01st of April 2024 to 31st of March 2025.
        </p>
        <p className="mb-6">GRI 1 used - GRI 1: Foundation 2021</p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600">
                <th className="border border-white p-2">GRI Standard</th>
                <th className="border border-white p-2">Disclosure</th>
                <th className="border border-white p-2">Page</th>
                <th className="border border-white p-2">Explanation</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-800">
                <td colSpan={4} className="border border-white p-2 font-bold capitalize">
                General Disclosures
                </td>
              </tr>
              <tr className="bg-blue-700">
                <td rowSpan={31} className="border border-white p-2">
                  GRI 2: General Disclosures 2021
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
                Material Topics
                </td>
              </tr>
              <tr className="bg-blue-700">
                <td rowSpan={4} className="border border-white p-2">
                  GRI 3 Material Topics 2021
                </td>
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
                Economic Performance
                </td>
              </tr>
              <tr className="bg-blue-700">
                <td rowSpan={5} className="border border-white p-2">
                  GRI 201 Economic Performance 2016
                </td>
                <td colSpan={3} className="border border-white p-2"></td>
              </tr>
              {economicPerformance.map((item) => (
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
                Market Presence
                </td>
              </tr>
              <tr className="bg-blue-700">
                <td rowSpan={3} className="border border-white p-2">
                  GRI 202 Market Presence 2016
                </td>
                <td colSpan={3} className="border border-white p-2"></td>
              </tr>
              {marketPresence.map((item) => (
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
            </tbody>
          </table>
        </div>
      </div>

      <div
        className="min-h-screen bg-cardGreen text-white p-8"
        style={{ marginTop: '48px' }}
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600">
                <th className="border border-white p-2">GRI Standard</th>
                <th className="border border-white p-2">Disclosure</th>
                <th className="border border-white p-2">Page</th>
                <th className="border border-white p-2">Explanation</th>
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
                  {section.items.map((item: SectionItem, itemIndex: number) => (
                    <tr key={itemIndex} className="bg-blue-700">
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
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
