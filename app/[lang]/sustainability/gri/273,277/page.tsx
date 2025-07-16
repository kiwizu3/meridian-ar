import Image from 'next/image';
import { ReactNode } from 'react';

export default function BoardGovernance() {
  // Content data structure
  interface ContentItem {
    type: string;
    title?: string;
    text?: string | string[];
    items?: string[];
    table?: {
      headers: string[];
      rows: {
        values: string[];
      }[];
    };
    chart?: {
      image: any;
      alt: string;
      caption?: string;
    };
    columns?: {
      title: string;
      content: ReactNode; // Changed from string to ReactNode to accept JSX
    }[];
  }

  // Main content
  const governanceContent: ContentItem[] = [
    {
      type: 'section',
      title: 'b. Training and Induction (A.1.8)',
      text: [
        'All new Directors have a formal induction programme determined by the Chairman, CEO, and Company Secretary. New Directors receive an orientation pack with relevant external and internal documentation to ensure they have the requisite knowledge of the Company and its operations. They are also given the opportunity to meet with Senior Management',
        'Directors benefit from regular training programmes throughout their tenure to support ongoing knowledge enhancement and keep them informed of economic, regulatory, and industry trends. Each Director receives adequate training hours annually',
        'During the year, the following training sessions were conducted for the Board of Directors:',
      ],
      items: [
        'AML/CFT regulations',
        'SLFRS S1 & S2',
        'Information and cybersecurity risk awareness',
        'Laws and regulations surrounding personal data protection',
        'Anti-Bribery and corruption',
        'Corporate Governance best practices',
      ],
    },
    {
      type: 'header',
      title: '5.7 Delegation and Oversight',
    },
    {
      type: 'section',
      title: 'a. Overseeing Material Impacts',
      text: [
        'The Board of Directors is ultimately responsible for overseeing the identification, assessment, and management of the Companys significant economic, environmental, social, and governance impacts. The Board ensures that these impacts are addressed through appropriate strategies, risk management practices, and stakeholder engagement frameworks.',
        'This oversight responsibility is executed through Board sub-committees. These committees ensure that material issues are considered in decision-making, and that the Company remains accountable, transparent, and aligned with long-term stakeholder interests.',
        'The Board also approves key policies and frameworks, reviews performance against sustainability and impact related objectives, and ensures compliance with relevant regulatory and voluntary standards, reinforcing Companys commitment to responsible and ethical business practices.',
      ],
    },
    {
      type: 'section',
      title: 'b. Delegation of Responsibility',
      text: [
        'The responsibility for effectively managing business objectives of the Company is delegated across multiple organisational levels to ensure effective oversight and execution. While the Board of Directors retains ultimate accountability, specific roles are assigned to Board sub committees and senior management.',
        'Functional heads are responsible for implementing Board approved strategies, policies, risk management and regulatory compliance within their areas. Cross functional teams support implementation and monitoring, escalating to senior management and the Board, enabling informed decision-making.',
        'The Board approved Delegation of Authority Policy underpins this structure, promoting accountability, coordination, and a strong culture of sustainability across the organisation.',
      ],
    },
    {
      type: 'section',
      title: 'c. Communication of Critical Concerns',
      text: [
        'The company maintains a transparent and structured process for the communication and escalation of critical concerns across all levels of the organisation. Critical matters including significant financial, operational, compliance, reputational, or ethical risks are identified through various internal mechanisms such as audit findings, risk assessments, employee feedback, stakeholder engagements, and whistleblowing reports.',
        'Such concerns are promptly escalated to senior management and, where necessary, to the relevant Board sub-committees. These sub-committees are responsible for reviewing the issues, initiating investigations where appropriate, and recommending corrective actions to the full Board.',
      ],
    },
    {
      type: 'header',
      title: '5.8 Managing Conflicts',
    },
    {
      type: 'section',
      title: 'a. Conflicts of Interest',
      text: [
        "A formal policy on managing Conflict of Interest is in place that provides clear guidelines to help the Board of Directors, Senior Management, and all employees understand the necessary actions to prevent conflicts of interest. Directors are expected to demonstrate the highest standards of good faith, honesty, and integrity in all interactions involving the Company. They must prioritise the Company's best interests by promptly disclosing any actual or potential conflicts of interest to the Board.",
        'All Directors are required to declare any potential conflicts of interest in their annual disclosures and ahead of any meeting where such a conflict might occur. In such situations, Directors recuse themselves from discussions and avoid influencing decisions where a conflict of interest exists or could be perceived to exist. The Company Secretary keeps a Register of Interests, which is updated whenever new declarations are made.',
      ],
    },
    {
      type: 'section',
      title: 'b. Related Party Transactions',
      text: [
        'CASL Code Principle (D.5) The Board should establish a procedure to ensure that the Company does not engage in transactions with "related parties" in a manner that would grant such parties "more favourable treatment" than that accorded to third parties in the normal course of business.',
      ],
    },
    {
      type: 'header',
      title: 'ESG GOVERNANCE',
    },
    {
      type: 'columns',
      columns: [
        {
          title: 'Management Committee Members',
          content: (
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Deputy Managing Director</li>
              <li>Chief Financial Officer</li>
              <li>AGM - Risk Management</li>
              <li>Chief Internal Auditor</li>
              <li>AGM - Treasury</li>
              <li>Senior Manager - Compliance</li>
              <li>Senior Manager - Business Process Development</li>
              <li>Senior Manager - Corporate Strategy & Sustainability</li>
              <li>Manager - Sustainability & Corporate Reporting</li>
            </ul>
          ),
        },
        {
          title: 'Board Sustainability Committee Members',
          content: (
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                Ms. Yanika Amarasekera - Chairperson/Independent Non-Executive
                Director
              </li>
              <li>
                Mr. G.A.R.D. Prasanna - Non-Independent Non-Executive Director
              </li>
              <li>Mr. Niroshan Udage - Deputy Managing Director</li>
              <li>Ms. Ashwini Natesan - Independent Non-Executive Director</li>
            </ul>
          ),
        },
      ],
      chart: {
        image: '',
        alt: 'ESG governance structure',
        caption: 'Sustainability governance framework at LBF',
      },
    },
    {
      type: 'section',
      text: [
        "At LBF, we are committed to reducing our carbon footprint in support of Sri Lanka's goal to achieve Net Zero status by 2050. In line with this commitment, we have initiated several key projects and established robust governance practices.",
        'These efforts underscore our dedication to integrating sustainability into our core business strategies, ensuring that our growth contributes positively to both society and the environment.',
      ],
    },
    {
      type: 'header',
      title: '6.3 Board Empowerment and Capacity Building',
    },
    {
      type: 'section',
      text: [
        "As part of its commitment to informed governance, the Board participates in educational sessions led by esteemed academics and industry experts on ESG related topics. These sessions are designed to enhance Board members' understanding of emerging SRRO and CRRO challenges and trends impacting both the region and the financial sector. This ongoing learning empowers the Board to make well-informed decisions and provide effective oversight of LBF's climate strategies and sustainability policies.",
      ],
    },
    {
      type: 'header',
      title: '6.2 Roles and Responsibilities',
    },
    {
      type: 'section',
      text: [
        "The Board Sustainability Committee is a key component of our governance structure, entrusted by the Board to guide LBF's strategic direction on ESG matters. It oversees the company's response to global and local sustainability challenges, ensuring alignment between strategic initiatives and overarching sustainability objectives. The Committee is responsible for ensuring that the sustainability strategy remains strong, relevant, and effectively implemented throughout the organisation.",
      ],
    },
  ];

  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6 rounded-lg">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
          <div className="bg-[#fcf7ef] rounded-lg p-6">
            {governanceContent.map((item, index) => (
              <div key={index} className="mb-8 last:mb-0">
                {/* Header Section */}
                {item.type === 'header' && (
                  <h2 className="text-xl font-bold mb-4 text-[#F3A847] border-b border-[#F3A847] pb-1">
                    {item.title}
                  </h2>
                )}

                {/* Section with Text */}
                {item.type === 'section' && (
                  <>
                    {item.title && (
                      <h3 className="text-lg font-bold mb-3 text-[#0A3D5F]">
                        {item.title}
                      </h3>
                    )}
                    {Array.isArray(item.text) ? (
                      item.text.map((paragraph, i) => (
                        <p key={i} className="text-sm text-black mb-3">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="text-sm text-black">{item.text}</p>
                    )}
                    {item.items && (
                      <ul className="list-disc pl-5 space-y-2 text-sm text-black">
                        {item.items.map((listItem, i) => (
                          <li key={i}>{listItem}</li>
                        ))}
                      </ul>
                    )}
                  </>
                )}

                {/* Columns Section */}
                {item.type === 'columns' && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      {item.columns?.map((column, i) => (
                        <div key={i} className="bg-[#daa765] p-4 rounded-lg">
                          <h3 className="font-bold text-[#0A3D5F] mb-2">
                            {column.title}
                          </h3>
                          {column.content}
                        </div>
                      ))}
                    </div>
                    {item.chart && (
                      <div className="mt-4">
                        <Image
                          src={item.chart.image}
                          alt={item.chart.alt}
                          className="w-full h-auto rounded-lg"
                        />
                        {item.chart.caption && (
                          <p className="text-xs text-center mt-2 text-black">
                            {item.chart.caption}
                          </p>
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
