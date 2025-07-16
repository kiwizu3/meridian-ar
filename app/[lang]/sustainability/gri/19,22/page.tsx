export default function ReportingDetails() {
  // Content data structure
  interface ContentItem {
    type: string;
    title?: string;
    text?: string | string[];
    items?: string[];
    columns?: { title?: string; content: string }[];
    contact?: {
      name: string;
      position: string;
      address: string[];
      phone: string;
      fax: string;
    };
  }

  // Main content
  const reportingContent: ContentItem[] = [
    {
      type: 'section',
      title: 'Reporting Period',
      text: [
        "In accordance with LBF's established procedure for publishing annual Integrated Reports that include sustainability information, this report covers the period from 01 April 2024 to 31 March 2025, aligning with the Company's financial reporting cycle.",
        'Material events occurring after 31 March 2025, up to the date of Board approval on 30 May 2025, have also been incorporated.',
      ],
    },
    {
      type: 'section',
      title: 'Operating Business',
      text: 'We report on the primary activities of the Company, our business clusters, key support areas in Sri Lanka and subsidiary information in Myanmar.',
    },
    {
      type: 'section',
      title: 'Restatements of Information',
      text: 'There are no financial or non-financial information restatements that were audited in the previous year.',
    },
    {
      type: 'section',
      title: 'Listening to Our Stakeholders',
      text: [
        'To ensure the relevance of this report, we undertook a process to understand the key priorities of our stakeholders, including investors, customers, employees, and regulatory bodies.',
        'We identified material issues through various feedback mechanisms, including surveys and meetings. This approach ensures that the report addresses the topics of greatest significance to our stakeholders and the organisation.',
      ],
    },
    {
      type: 'section',
      title: 'Financial and Non-Financial Reporting',
      text: [
        'Our Integrated Report extends beyond financial reporting and includes non-financial performances, risks, opportunities, and outcomes attributable to or associated with our key stakeholders and external entities, which have a considerable influence on our ability to create value sustainably, while minimising value erosion.',
        'Governance and risk management principles, practices and outcomes are integrated throughout the report. Specific Board committee reports are included in relevant sections given the integrated nature of governance.',
        'We report on our purpose-driven sustainability initiatives and actions, highlighting how they align with the UN SDGs and key ESG matters. These initiatives are embedded in our strategy as part of our effort to create positive impacts and unlock strategic value.',
      ],
    },
    {
      type: 'section',
      title: 'Materiality',
      text: [
        'The principle of materiality is applied when assessing what information should be included in our Integrated Report.',
        'This report focuses particularly on those issues, risks and opportunities that materially impact on our 6 capitals and our ability to be a sustainable business that consistently creates, protects, and minimises the erosion of value for all stakeholders over the medium to long-term.',
      ],
    },
    {
      type: 'section',
      title: 'Strategy and Targets',
      text: "We provide insight into the Group's strategy, as well as financial and non-financial targets for the short, medium and long-term.",
    },
    {
      type: 'section',
      title: 'Combined Assurance',
      text: [
        'Our coordinated assurance integrates and aligns risk, audit and compliance functions and assurance activities. This enables an effective internal control environment across the Company with assurance focused on critical risk exposures supporting the integrity of information used in internal decision-making and reporting to external stakeholders.',
        'Our 2024/25 annual financial statements and sustainability information were assured by our external auditors, KPMG and Deloitte respectively. We have indicated the level of assurance provided on pages 308 to 309 and 540.',
      ],
    },
    {
      type: 'section',
      title: 'Forward-looking Statements',
      text: [
        "This report contains certain forward-looking statements about LBF's financial position, results, strategy, operations, and businesses. These statements and forecasts involve risk and uncertainty, as they relate to events and depend on circumstances that may occur in the future. There are several factors that could cause actual results or developments to differ materially from those expressed or implied by these forward looking statements. Consequently, forward-looking statements have not been reviewed or reported on by the Company's external auditors.",
        "Forward-looking statements made by LBF on 30 May 2025 at the time of releasing its 2024/25 results, were informed by the Company's business plans and economic forecasts in February 2025.",
      ],
    },
    {
      type: 'section',
      title: 'TRANSITION TO SLFRS S1 AND SLFRS S2',
      text: [
        'Regulators are increasingly acknowledging that Sustainability-related, climate-related physical and transition risks pose both financial and non-financial challenges to the financial sector. These risks stem from the geographic concentration of assets and liabilities in climate vulnerable regions, as well as from exposure to businesses and investments operating in sectors that are particularly sensitive to the transition to a low-carbon economy.',
        'SLFRS S1, focuses on general sustainability-related disclosures',
        'SLFRS S2, specifically addresses climate-related disclosures',
      ],
      items: [
        'The LBF sustainability Team conducted a thorough gap analysis to assess the impact of risks on our current business',
        'Incorporated the sustainability and climate related risks to the overall integrated risks management process of the Company. (Refer Page 337)',
        'External subject matter experts were consulted to gain insights on the impact of the applicable standards and obtained an assurance for the adaptation of SLFRS S1 and S2 (Refer Page 540)',
      ],
    },
    {
      type: 'feedback',
      title: 'We Appreciate Your Feedback',
      text: 'We would love to hear your thoughts about this report. Your feedback helps us to improve and make sure that our reports meet your expectations. Let us know what you think, so we can continue to evolve and do better.',
      contact: {
        name: 'LB Finance PLC',
        position:
          'Chief Financial Officer or Senior Manager – Corporate Strategy and Sustainability',
        address: [
          'Corporate Office',
          'No. 20, Dharmapala Mawatha',
          'Colombo 03',
        ],
        phone: 'Tel: 011 2155 504',
        fax: 'Fax: 011 2575 096',
      },
    },
  ];

  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6 rounded-lg">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
          <div className="bg-[#fcf7ef] rounded-lg p-6">
            {reportingContent.map((item, index) => (
              <div key={index} className="mb-8 last:mb-0">
                {/* Standard Section */}
                {item.type === 'section' && (
                  <>
                    <h2 className="text-xl font-bold mb-4 text-[#F3A847] border-b border-[#F3A847] pb-1">
                      {item.title}
                    </h2>
                    {Array.isArray(item.text) ? (
                      item.text.map((paragraph, i) => (
                        <p key={i} className="text-sm text-black mb-3">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="text-sm text-black mb-3">{item.text}</p>
                    )}
                    {item.items && (
                      <ul className="list-disc list-inside text-sm text-black pl-5 space-y-2">
                        {item.items.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </>
                )}

                {/* Feedback Section */}
                {item.type === 'feedback' && (
                  <div className="bg-[#daa765] p-6 rounded-lg">
                    <h2 className="text-xl font-bold mb-4 text-[#0A3D5F]">
                      {item.title}
                    </h2>
                    <p className="text-sm text-black mb-6">{item.text}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-bold text-[#0A3D5F] mb-2">
                          Send your comments to:
                        </h3>
                        <p className="text-sm font-semibold text-black">
                          {item.contact?.position}
                        </p>
                        <p className="text-sm font-bold text-black">
                          {item.contact?.name}
                        </p>
                        <div className="text-sm text-black mt-3 space-y-1">
                          {item.contact?.address.map((line, i) => (
                            <p key={i}>{line}</p>
                          ))}
                        </div>
                        <p className="text-sm text-black mt-3">
                          {item.contact?.phone}
                        </p>
                        <p className="text-sm text-black">
                          {item.contact?.fax}
                        </p>
                      </div>
                    </div>
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
