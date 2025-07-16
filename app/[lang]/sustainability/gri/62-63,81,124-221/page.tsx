import Image from 'next/image';

export default function IntegratedStakeholderEngagement() {
  // Content data structure
  interface ContentItem {
    type: string;
    title?: string;
    text?: string | string[];
    items?: ({ title: string; content: string } | string)[];
    chart?: {
      image: any;
      alt: string;
      caption?: string;
    };
    columns?: {
      title: string;
      content: string;
      chart?: {
        image: any;
        alt: string;
        caption?: string;
      };
    }[];
    list?: {
      title?: string;
      items: string[];
    };
  }

  // Main content
  const engagementContent: ContentItem[] = [
    {
      type: 'header',
      title: 'INTEGRATED STAKEHOLDER ENGAGEMENT',
      text: '1. GOVERNANCE AND MANAGEMENT OF STAKEHOLDER RELATIONSHIPS',
    },
    {
      type: 'section',
      text: [
        'The ultimate responsibility for our stakeholder engagement rests with the Board, guided by the Board Sustainability Committee (BSC) and the Sustainability Management Committee (SMC). While engagement activities are decentralised and conducted by our operational clusters and business areas, the Corporate Sustainability Department oversees day-to-day relationship management. Furthermore, the Stakeholder Forum ensures consistent application of our Stakeholder Engagement Policy across the entire Company.',
        'Our purpose centres on people, and we recognise that effective stakeholder engagement is fundamental to our success. Our stakeholder-centric approach creates value by understanding and responding to stakeholder needs, building long-term partnerships, measuring relationship effectiveness, and taking targeted action to drive positive, long-term sustainable impact.',
      ],
    },
    {
      type: 'list',
      title: 'Our Stakeholder Engagement Initiatives Seek to:',
      items: [
        'Proactively unlock growth',
        'Respond to stakeholder issues',
        'Demonstrate good governance',
        'Display leadership and foresight as a good corporate citizen',
      ],
    },
    {
      type: 'list',
      title: 'Engagement Objectives',
      text: 'Our engagement objectives form the foundation for building meaningful relationships with stakeholders, fostering transparency, and driving mutual benefits.',
      items: [
        'To enhance stakeholder trust through transparent communication',
        "To align stakeholder expectations with LBF's goals",
        'To ensure active participation in sustainability and business growth initiatives',
        'To address concerns and feedback proactively for continuous improvement',
        'To strengthen partnerships that contribute to long-term value creation',
      ],
    },
    {
      type: 'list',
      title: 'Stakeholder Identification',
      text: 'Identifying stakeholders ensures that all relevant groups are considered in decision-making and project execution processes.',
      items: [
        'Customers: End-users of our financial products and services',
        'Shareholders: Our investors and equity partners seeking sustainable financial returns and long-term value creation, driven by our performance and governance',
        'Employees: Our dedicated team whose expertise and commitment drive operational excellence and innovation',
        'Regulators: Government and supervisory entities defining the framework within which we operate responsibly and ethically',
        'Business Partners/Suppliers: Valued entities integral to our supply chain and ability to deliver exceptional products and services',
        'Society/Communities: The local and broader societies where we operate, impacted by our social and environmental initiatives',
      ],
    },
    {
      type: 'list',
      title: 'Engagement Approaches',
      text: 'Our approaches outline the methodologies for effective communication and interaction with stakeholders.',
      items: [
        'Consultation - Conducting surveys and focus groups to gather stakeholder insights',
        'Collaboration - Partnering with stakeholders in planning and implementation',
        'Communication -  Using digital platforms, newsletters, and our annual reports to disseminate information',
        'Involvement -  Inviting stakeholders to participate in decision-making and governance',
        'Feedback Mechanisms - Establishing channels for receiving and addressing concerns',
      ],
    },
    {
      type: 'list',
      title: 'Engagement Strategies',
      text: 'For each selected engagement, our strategies provide a roadmap for achieving meaningful and impactful stakeholder engagement.',
      items: [
        '• Develop tailored engagement plans for each stakeholder group',
        '• Leverage technology for efficient communication and data-driven decisions',
        '• Foster inclusivity by prioritising marginalised and underrepresented groups',
        '• Align engagement activities with our sustainability goals',
        '• Monitor and evaluate engagement effectiveness to refine strategies',
      ],
    },
    {
      type: 'list',
      title: 'Engagement Plan',
      text: 'Our engagement plan outlines actionable steps and timelines to implement the strategies.',
      items: [
        'Timeline -  Clear milestones for engagement activities',
        'Activities -  Scheduled meetings, events, and campaigns',
        'Resources - Allocation of budgets, tools, and personnel',
        'Monitoring -  Periodic reviews and updates to the engagement plan',
        'Reporting - Transparent documentation of progress and outcomes',
      ],
    },
    {
      type: 'list',
      title: 'Engagement Outcomes',
      text: 'Outcomes define the tangible and intangible benefits achieved through our engagement efforts.',
      items: [
        '• Strengthened stakeholder relationships and trust',
        '• Improved alignment between organisational goals and stakeholder expectations',
        '• Enhanced community goodwill through our CSR initiatives',
        '• Increased employee satisfaction and retention.',
        '• Positive contributions to sustainability and longterm value creation',
      ],
    },
    {
      type: 'columns',
      columns: [
        {
          title: 'For more information on ',
          content:
            '•  Basic Characteristics for Stakeholder Engagement\n• Checklist for Monitoring and Evaluation of Stakeholders \n• Reporting Feedback to Stakeholders \n• Critical Success Factors for Meaningful Stakeholder Engagement \n \n Visit the Stakeholder Management Framework on the LBF sustainability site',
        },
      ],
    },
    {
      type: 'header',
      title: 'DESIGNING STRATEGIES FOR LONG-TERM SUSTAINABILITY',
      text: '1. "ELEVATE 2030" PATH TO PEAK PERFORMANCE',
    },
    {
      type: 'section',
      text: [
        '"Path to Peak Performance" is more than a strategy. We pledge to lead with integrity, innovate passionately, and grow purposefully, setting new standards for industry excellence.',
        'To navigate this path and build a future-ready organisation, we are guided by six strategic priorities for the short to medium-term and four strategic value drivers defining our long-term aspirations. Recognising the lasting ecosystem impact of our long-term financial framework, integrating Economic, Environmental, Social, and Governance (EESG) principles into all operations and collaborations is fundamental to this journey, ensuring sustainable growth and operational resilience are embedded in our pursuit of peak performance.',
      ],
    },
    {
      type: 'columns',
      columns: [
        {
          title: 'Navigating Tech Disruption',
          content: '• Embrace fintech\n• Digital platforms\n• Cyber security',
        },
        {
          title: 'Stakeholder Centric Approach',
          content:
            '• Personalisation\n• Feedback mechanism\n• Diverse offerings',
        },
        {
          title: 'Expansion',
          content:
            '• Local and regional markets\n• Partnership and merges\n• Regulatory compliance',
        },
      ],
    },
    {
      type: 'columns',
      columns: [
        {
          title: 'Sustainability and Social Response',
          content:
            '• Green business\n• Community development\n• Ethical operation',
        },
        {
          title: 'Managing Regulatory Changes',
          content:
            '• Rules and regulations\n• Risk management\n• Corporate governance',
        },
      ],
    },
    {
      type: 'section',
      title: 'Strategic Value Drivers',
      text: [
        'Sustainable Growth',
        'Customer Centricity',
        'Digital Leadership',
        'Positive Impacts',
        'Empowering People',
        'Risk and Governance',
      ],
    },
    {
      type: 'header',
      title: 'FORTIFYING FINANCIAL CAPITAL',
      text: '<IR 2A, 2C, 3E>',
    },
    {
      type: 'columns',
      columns: [
        {
          title: 'Input',
          content:
            "• Shareholders' equity\n• Customer Deposits\n• Fee-based income\n• Long and short-term borrowings\n• Retained earnings post-dividend distribution",
        },
        {
          title: 'Strategic Drivers',
          content:
            "• Strengthen the core lending and deposit mobilisation business\n• Maintain a healthy Net Interest Margin (NIM) across market cycles\n• Drive cost optimisation while enabling digital investment\n• Sustain the industry's lowest NPL ratio through prudent credit practices\n• Ensure competitive and consistent returns to shareholders\n• Enhance financial inclusion via targeted micro and SME lending programmes",
        },
      ],
    },
    {
      type: 'section',
      title: 'Approaches for Managing Financial Capital Outcomes',
      text: [
        'Budgeting and forecasting aligned with strategic goals',
        'Real-time performance monitoring using Oracle Profitability and Cost Management Module',
        'Robust liquidity management and funding diversification strategy',
        'Integrated Risk Management Framework with scenario based stress testing to ensure financial resilience',
        'Compliance with Sri Lanka Accounting Standards (LKAS/SLFRS), CBSL, and CSE guidelines',
        'Transparent disclosures and proactive investor relations',
      ],
    },
    {
      type: 'columns',
      columns: [
        {
          title: 'ROE',
          content: '22.77%',
        },
        {
          title: 'Highest PAT',
          content: 'Rs. 10.81 Bn',
        },
        {
          title: 'NPL',
          content: '2.25%',
        },
        {
          title: 'Taxes Paid',
          content: 'Rs. 12.65 Bn',
        },
        {
          title: 'Fitch Rating',
          content: 'A- (lka)',
        },
      ],
    },
  ];

  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6 rounded-lg">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
          <div className="bg-[#fcf7ef] rounded-lg p-6">
            {engagementContent.map((item, index) => (
              <div key={index} className="mb-8 last:mb-0">
                {/* Header Section */}
                {item.type === 'header' && (
                  <>
                    <h1 className="text-2xl font-bold mb-2 text-[#0A3D5F]">
                      {item.title}
                    </h1>
                    {item.text && (
                      <h2 className="text-xl font-bold mb-4 text-[#F3A847]">
                        {item.text}
                      </h2>
                    )}
                  </>
                )}

                {/* Section with Text */}
                {item.type === 'section' && (
                  <>
                    {item.title && (
                      <h2 className="text-xl font-bold mb-4 text-[#F3A847] border-b border-[#F3A847] pb-1">
                        {item.title}
                      </h2>
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
                  </>
                )}

                {/* Columns Section */}
                {item.type === 'columns' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {item.columns?.map((column, i) => (
                      <div key={i} className="bg-[#daa765] p-4 rounded-lg">
                        <h3 className="font-bold text-[#0A3D5F] mb-2">
                          {column.title}
                        </h3>
                        {column.content && (
                          <div className="text-sm text-black mb-3 whitespace-pre-line">
                            {column.content}
                          </div>
                        )}
                        {column.chart && (
                          <div className="mt-4">
                            <Image
                              src={column.chart.image}
                              alt={column.chart.alt}
                              className="w-full h-auto"
                            />
                            {column.chart.caption && (
                              <p className="text-xs text-center mt-2 text-black">
                                {column.chart.caption}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* List Section */}
                {item.type === 'list' && (
                  <div className="mb-6">
                    {item.title && (
                      <h3 className="text-lg font-bold mb-2 text-[#F3A847]">
                        {item.title}
                      </h3>
                    )}
                    <div>
                      {item.text && (
                        <p className="text-sm text-black mb-3">{item.text}</p>
                      )}
                    </div>
                    <ul className="list-disc pl-5 text-sm text-black">
                      {item.items?.map((listItem, i) => (
                        <li key={i} className="mb-2">
                          {typeof listItem === 'string' ? (
                            listItem
                          ) : (
                            <>
                              <span className="font-semibold">
                                {listItem.title}:{' '}
                              </span>
                              <span>{listItem.content}</span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
