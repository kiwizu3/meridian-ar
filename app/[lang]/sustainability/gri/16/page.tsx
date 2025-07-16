export default function GovernanceRiskManagement() {
  // Content data structure
  interface ContentItem {
    type: string;
    title?: string;
    text?: string | string[];
    items?: string[];
    image?: string;
    columns?: { title: string; content: string }[];
  }

  // Main content
  const governanceContent: ContentItem[] = [
    {
      type: 'section',
      title: 'Ensuring Good Governance and Risk Management Practices',
      text: [
        'The Board of Directors of LBF has established a robust governance framework to ensure the organisation’s sustainability and growth. This system is built on the principles of transparency, accountability, and good governance.',
        'By implementing effective strategies and utilising efficient resources, LBF remains aligned with its vision, mission, and values, thereby safeguarding the interests of all stakeholders.',
        'LBF has an independent risk governance structure led by the Senior Management team, and overseen by the Board and Board sub-committees. This structure ensures the identification of risks and opportunities within our operating environment, the assessment of their significance, and the review of industry-specific challenges to maintain resilience and drive informed decision-making.',
      ],
    },
    {
      type: 'section',
      title: 'Reporting Boundary',
      text: [
        'Identifying our material matters is a Company-wide responsibility and requires input from our businesses, an assessment of the impacts, risks and opportunities in our operating environment through a double materiality lens, and input and feedback from our key stakeholders.',
        'Our material matters, as described on pages 74 to 80, influence our strategy and our risk management processes. They also inform the evolution of our business model (six capitals) and our short-term (less than 1 year), medium-term (1 to 3 years) and long-term (over 3 years) targets.',
      ],
      // image: boundaryImage
    },
    {
      type: 'columns',
      title: 'Double Materiality',
      columns: [
        {
          title: 'Financial Materiality',
          content:
            "Provides information on risks, opportunities, and outcomes (beyond financial reporting boundaries) that influence users' assessments of LBF's future cash flows, finance, or cost of capital over the short, medium and long-term.",
        },
        {
          title: 'Impact Materiality',
          content:
            "Focuses on the significance of Company's impact on the environment, society, and the economy over short, medium and long-term regardless of whether those impacts affect the company's financial performance.",
        },
      ],
    },
    {
      type: 'grid',
      title: 'OUR INTEGRATED ANNUAL REPORT BOUNDARY',
      columns: [
        {
          title: 'Strategy',
          content: 'Pages 81 to 95',
        },
        {
          title: 'Business Model',
          content: 'Pages 54 to 55',
        },
        {
          title: 'Operational Performance',
          content: 'Pages 222 to 244',
        },

        {
          title: 'Material Matters',
          content: 'Pages 74 to 80',
        },
        {
          title: 'Operating Context',
          content: 'Pages 56 to 61',
        },
        {
          title: 'Risk Management',
          content: 'Pages 311 to 346',
        },
      ],
    },
    {
      type: 'grid',
      title: 'Sustainability',
      columns: [
        {
          title: 'Environment',
          content: 'Pages 208 to 221',
        },

        {
          title: 'Social',
          content: 'Pages 184 to 207',
        },

        {
          title: 'Governance',
          content: 'Pages 246 to 310',
        },
      ],
    },
    {
      type: 'section',
      title: 'OUR FINANCIAL REPORTING BOUNDARY',
      text: '(Defined by control and significant influence)',
    },

    {
      type: 'list',
      title: 'Stakeholder Groups',
      items: [
        'Customers',
        'Shareholders',
        'Business Partners/Suppliers',
        'Society and Environment',
        'Employees',
        'Regulators',
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
                {/* Section with title and text */}
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
                      <p className="text-sm text-black">{item.text}</p>
                    )}
                    {item.image && (
                      <div className="mt-4">
                        {/* <Image
                          src={item.image}
                          alt={item.title || ''}
                          className="w-full h-auto rounded-lg"
                        /> */}
                      </div>
                    )}
                  </>
                )}

                {/* Grid layout */}
                {item.type === 'grid' && (
                  <>
                    <h2 className="text-xl font-bold mb-4 text-[#F3A847] border-b border-[#F3A847] pb-1">
                      {item.title}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {item.columns?.map((column, i) => (
                        <div key={i} className="bg-[#daa765] p-3 rounded-lg">
                          <h3 className="font-bold text-[#0A3D5F]">
                            {column.title}
                          </h3>
                          <p className="text-sm text-black">{column.content}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Two-column layout */}
                {item.type === 'columns' && (
                  <>
                    <h2 className="text-xl font-bold mb-4 text-[#F3A847] border-b border-[#F3A847] pb-1">
                      {item.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {item.columns?.map((column, i) => (
                        <div key={i} className="bg-[#daa765] p-4 rounded-lg">
                          <h3 className="font-bold text-[#0A3D5F] mb-2">
                            {column.title}
                          </h3>
                          <p className="text-sm text-black">{column.content}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* List layout */}
                {item.type === 'list' && (
                  <>
                    <h2 className="text-xl font-bold mb-4 text-[#F3A847] border-b border-[#F3A847] pb-1">
                      {item.title}
                    </h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 list-disc list-inside text-sm text-black">
                      {item.items?.map((listItem, i) => (
                        <li key={i}>{listItem}</li>
                      ))}
                    </ul>
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
