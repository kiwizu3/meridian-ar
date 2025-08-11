export default function VisionMissionReport() {
  // Content data structure
  interface ContentItem {
    type: string;
    title?: string;
    image?: any;
    text?: string | string[];
    items?: string[];
    gridItems?: string[];
    qr?: {
      label: string;
      caption: string;
    };
    note?: string;
  }

  // Left column content
  const visionMissionContent: ContentItem[] = [
    {
      type: 'header',
      title: 'OUR VISION, MISSION AND VALUES',
    },
    {
      type: 'image',
      image: '/images/lion-image.svg',
    },
    {
      type: 'section',
      title: 'VISION',
      text: 'To contribute to the quality of life experienced by our depositors, customers, employees, and the general public through partnerships that fuel the growth of our Company and to create shareholder value both in the short term and long term',
      note: 'GRI: 2.1',
    },
    {
      type: 'section',
      title: 'MISSION',
      items: [
        'To mobilise public funds by innovating investment products that will enhance the value delivered to our depositors',
        'To use training and career development to create an empowered and committed group of employees who will drive the Company to high levels of achievement',
        'To engage in prudent lending to entrepreneurs to assist them in the creation of wealth',
        'To offer a caring and personalised service that will form the foundation for developing lasting partnerships with our stakeholders, employees, and the general public',
        'To embark on investments in which results can be clearly assessed and seize new opportunities in the market',
      ],
    },
    {
      type: 'section',
      title: 'VALUES',
      gridItems: [
        'Excellence',
        'Transparency',
        'Professionalism',
        'Ethics',
        'Innovation',
        'Quality',
        'Teamwork',
      ],
      qr: {
        label: 'VIDEO 01',
        caption: 'Scan QR code to watch our core value drivers',
      },
      note: 'LB Finance PLC Integrated Annual Report 2024/25',
    },
  ];

  // Right column content
  const aboutReportContent = {
    header: {
      title: 'ABOUT THE REPORT',
      subtitle: 'WELCOME TO OUR 13TH INTEGRATED REPORT',
    },
    paragraphs: [
      'We are pleased to present our Integrated Report for the year ended 31 March 2025',
      'This report connects us with you, our valued stakeholders, providing insights into our progress, challenges, and aspirations. We demonstrate how we create sustainable value by balancing financial growth with environmental and social responsibility, adhering to global standards while remaining accessible.',
    ],
    interactiveElements: [
      'Digital navigation icons',
      'Interactive elements',
      'Refers to other online information links',
      'Videos',
    ],
    highlightBox: {
      title: 'A SYMBOL OF STRENGTH',
      content:
        'This report offers a concise, connected, consistent, and credible assessment of LBF’s governance, strategy, performance, and prospects, focusing on our material matters. We report on a double materiality basis, providing a holistic view of our ability to generate sustainable shared value for our stakeholders. Our reporting identifies how we create and preserve value. To determine the material matters included, we initiate an independent process annually to consider relevant issues. By applying the principle of double materiality, we balance financial materiality with sustainability risks and opportunities, fostering an integrated view',
    },
    additionalParagraphs: [
      'In a landmark move towards elevating the transparency and accountability of our corporate reporting, LBF adopted the SLFRS Sustainability Disclosure Standards (SLFRS S1 and SLFRS S2) during the annual reporting period ending 31 March 2025. This marks a significant transformation in our reporting approach, reflecting our commitment to aligning with the internationally recognised best practices in sustainability and climate-related financial disclosures.',
      'To preserve the integrity and enhance the value of both the SLFRS Standards and our Integrated Reporting framework, we conducted a comprehensive evaluation to ensure that this integration strengthens, rather than compromises, the quality of our disclosures. This rigorous process confirmed that the harmonisation of these frameworks adds depth and clarity to our reporting practices.',
      'By incorporating SLFRS S1 (General Requirements for Disclosure of Sustainability-related Financial Information) and SLFRS S2 (Climate-related Disclosures), we have significantly improved the consistency and relevance of disclosures across key areas: Governance, Strategy, Risk Management, Metrics and Targets. These enhancements not only elevate the standard of our reporting, but also provide stakeholders with a clearer understanding of how sustainability and climate-related factors influence our business operations and long-term value creation.',
      'As this is our first year applying these standards, we have made use of the transitional reliefs offered, which are designed to support entities during initial implementation. Accordingly, LBF has utilised the following transition provisions:',
      {
        transitionProvisions: [
          'Relief from presenting comparative information for sustainability-related disclosures in this initial reporting period.',
          'Relief from conducting a full climate-related scenario analysis, allowing time to build the capacity for a more robust assessment of climate resilience in future reporting periods.',
          'Relief from estimating the anticipated effects of sustainability-related risks and opportunities on the entity’s financial position, financial performance and cash flows over the short, medium and long term.',
        ],
      },
      'Through this adoption, we reaffirm our dedication to transparency, resilience, and continuous improvement in sustainability reporting, ensuring our stakeholders receive high-quality, decision-useful information.',
    ],
    footerNote: '14 LB Finance PLC Integrated Annual Report 2024/25',
  };

  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6 rounded-lg">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-4 md:pb-8">
            {/* Left Column - Vision, Mission, Values */}
            <div className="gap-4 flex flex-col bg-[#fcf7ef] rounded-lg p-6">
              {visionMissionContent.map((item, index) => (
                <div key={index} className="mb-6">
                  {item.type === 'header' && (
                    <h1 className="text-2xl font-bold mb-6 text-[#0A3D5F]">
                      {item.title}
                    </h1>
                  )}
                  {item.type === 'image' && item.image && (
                    <img
                      src={item.image}
                      alt="Vision and Mission Banner"
                      className="w-full rounded-lg mb-6"
                    />
                  )}

                  {item.type === 'section' && (
                    <>
                      <h2 className="text-xl font-bold mb-3 text-[#F3A847] border-b border-[#F3A847] pb-1">
                        {item.title}
                      </h2>

                      {item.text && (
                        <p className="text-sm text-black">{item.text}</p>
                      )}

                      {item.items && (
                        <ul className="flex flex-col list-disc list-inside text-sm gap-3 text-black">
                          {item.items.map((point, i) => (
                            <li key={i} className="mb-2">
                              {point}
                            </li>
                          ))}
                        </ul>
                      )}

                      {item.gridItems && (
                        <div className="grid gap-2 text-sm text-black mb-4">
                          {item.gridItems.map((value, i) => (
                            <div key={i}>{value}</div>
                          ))}
                        </div>
                      )}

                      {item.qr && (
                        <div className="flex items-start mt-4">
                          <div>
                            <p className="text-xs text-black mb-1">
                              {item.qr.label}
                            </p>
                            <p className="text-xs text-black">
                              {item.qr.caption}
                            </p>
                          </div>
                        </div>
                      )}

                      {item.note && (
                        <div className="text-xs text-[#0A3D5F] mt-4 font-medium">
                          {item.note}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column - About the Report */}
            <div className="bg-[#daa765] p-6 rounded-lg">
              {/* Header */}
              <h1 className="text-2xl font-bold mb-2 text-[#0A3D5F]">
                {aboutReportContent.header.title}
              </h1>
              <h2 className="text-xl font-bold mb-4 text-[#0A3D5F]">
                {aboutReportContent.header.subtitle}
              </h2>

              {/* Paragraphs */}
              {aboutReportContent.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-sm mb-4">
                  {paragraph}
                </p>
              ))}

              {/* Interactive Elements */}
              <div className="flex flex-wrap gap-2 mb-4">
                {aboutReportContent.interactiveElements.map(
                  (element, index) => (
                    <span key={index} className="text-xs font-medium">
                      {element}
                    </span>
                  ),
                )}
              </div>

              {/* Highlight Box */}
              <div className="bg-[#0A3D5F] text-white p-3 rounded-lg mb-4">
                <h3 className="text-lg font-bold mb-2">
                  {aboutReportContent.highlightBox.title}
                </h3>
                <p className="text-xs">
                  {aboutReportContent.highlightBox.content}
                </p>
              </div>

              {/* Additional Paragraphs */}
              {aboutReportContent.additionalParagraphs.map(
                (paragraph, index) => {
                  if (typeof paragraph === 'string') {
                    return (
                      <p key={index} className="text-sm mb-4">
                        {paragraph}
                      </p>
                    );
                  }

                  if ('transitionProvisions' in paragraph) {
                    return (
                      <ul
                        key={index}
                        className="list-disc list-inside mb-4 text-sm text-black pl-4"
                      >
                        {paragraph.transitionProvisions.map((item, i) => (
                          <li
                            key={i}
                            className="mb-2 bg-[#0A3D5F] text-[#fff] p-2 rounded-md"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return null; // fallback if the object doesn't match expected types
                },
              )}

              {/* Footer Note */}
              <div className="text-xs text-[#0A3D5F] text-right font-medium mt-4">
                {aboutReportContent.footerNote}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
