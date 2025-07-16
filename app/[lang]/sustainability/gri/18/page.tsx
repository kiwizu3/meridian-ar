export default function AboutTheReport() {
  // Content data structure
  interface ContentItem {
    type: string;
    title?: string;
    text?: string | string[];
    items?: {
      title: string;
      content: string;
    }[];
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
    links?: {
      title: string;
      url: string;
    }[];
  }

  // Main content
  const content: ContentItem[] = [
    {
      type: 'header',
      title: 'ABOUT THE REPORT',
    },
    {
      type: 'section',
      title: 'Integrated Reporting',
      list: {
        items: [
          'The International Integrated Reporting Framework of the International Integrated Reporting Council (IIRC)',
          "A Preparer's Guide to Integrated Reporting issued by the Institute of Chartered Accountants of Sri Lanka (CA Sri Lanka)",
        ],
      },
    },
    {
      type: 'section',
      title: 'ESG and Sustainability Reporting',
      list: {
        items: [
          'Global Reporting Initiative (GRI) Standards - In Accordance with the GRI Standards, issued by Global Sustainability Standards Board',
          'Guideline on Environmental, Social and Governance (ESG) Reporting issued by the Colombo Stock Exchange (CSE)',
          'United Nations Sustainable Development Goals (SDGs)',
          '10 Principles of United Nations Global Compact',
          'SLFRS Sustainability Disclosure Standards S1 & S2',
          'Consumer Finance Standard issued by the Sustainability Accounting Standards Board (SASB)',
          'Disclosure on Gender Parity Reporting issued by CA Sri Lanka',
        ],
      },
    },
    {
      type: 'section',
      title: 'Climate-related Disclosures',
      list: {
        items: [
          'ISO 14064-1:2018 Organisation Level for Quantification and Reporting of Greenhouse Gas (GHG) Emissions and Removals',
        ],
      },
    },
    {
      type: 'section',
      title: 'Financial Reporting',
      list: {
        items: [
          'Sri Lanka Accounting Standards comprising Sri Lanka Financial Reporting Standards (SLFRSs) and Sri Lanka Accounting Standards (LKASs) issued by CA Sri Lanka',
          'Companies Act No. 07 of 2007',
          'Finance Business Act No. 42 of 2011',
          'Listing Rules of the Colombo Stock Exchange (CSE)',
        ],
      },
    },
    {
      type: 'section',
      title: 'Corporate Governance Practices',
      list: {
        items: [
          'Listing Rules of the Colombo Stock Exchange (CSE), including the revised Section 9 which was issued in August 2023',
          'Companies Act No. 07 of 2007 and amendments thereto',
          'Corporate Governance Direction No. 5 of 2021 issued by the Central Bank of Sri Lanka',
          'Code of Best Practice for Corporate Governance 2023 issued by CA Sri Lanka',
          'Directions issued under Finance Business Act No. 42 of 2011',
        ],
      },
    },
    {
      type: 'section',
      title: 'Reference Links',
      links: [
        {
          title: 'The International <IR> Framework',
          url: 'https://www.ifrs.org',
        },
        {
          title: 'Global Reporting Initiative (GRI) Standards',
          url: 'https://www.globalreporting.org',
        },
        {
          title: 'The Institute of Chartered Accountants of Sri Lanka',
          url: 'https://www.casrilanka.com',
        },
        {
          title: 'UN Sustainable Development Goals',
          url: 'https://www.sdgs.un.org/goals',
        },
        { title: 'Central Bank of Sri Lanka', url: 'https://www.cbsl.gov.lk' },
        {
          title: 'Sustainability Accounting Standards Board',
          url: 'https://www.sasb.ifrs.org',
        },
        {
          title: 'UN Global Compact Network Sri Lanka',
          url: 'https://www.unglobalcompact.org',
        },
        { title: 'Colombo Stock Exchange', url: 'https://www.cse.lk' },
        {
          title: 'International Financial Reporting Standards (IFRS)',
          url: 'https://www.ifrs.org',
        },
      ],
    },
    {
      type: 'section',
      title: 'How We Ensure the Integrity of Our Report',
    },
    {
      type: 'section',
      text: [
        'The Board ensures the integrity of the Integrated Report through our integrated reporting process with various approvals and sign-offs by the Board. It also relies on assurance frameworks, overseen by the Audit Committee to assess and assure various aspects of our business operations and reporting. These assurances are provided by Management and the Board through rigorous internal reporting governed by the risk management framework, internal audit and independent external audit service providers.',
      ],
    },
  ];

  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6 rounded-lg">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
          <div className="bg-[#fcf7ef] rounded-lg p-6">
            {content.map((item, index) => (
              <div key={index} className="mb-8 last:mb-0">
                {/* Header Section */}
                {item.type === 'header' && (
                  <div>
                    <h1 className="text-2xl font-bold mb-2 text-[#0A3D5F]">
                      {item.title}
                    </h1>
                  </div>
                )}

                {/* Section with Text */}
                {item.type === 'section' && (
                  <>
                    {item.title && (
                      <h2 className="text-xl font-bold mb-4 text-[#F3A847] border-b border-[#F3A847] pb-1">
                        {item.title}
                      </h2>
                    )}
                    {Array.isArray(item.text)
                      ? item.text.map((paragraph, i) => (
                          <p key={i} className="text-sm text-black mb-3">
                            {paragraph}
                          </p>
                        ))
                      : null}

                    {/* List Section */}
                    {item.list && (
                      <div className="mb-6">
                        <ul className="list-disc pl-5 text-sm text-black">
                          {item.list.items.map((listItem, i) => (
                            <li key={i} className="mb-2">
                              {listItem}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Links Section */}
                    {item.links && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        {item.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0A3D5F] hover:text-[#F3A847] underline text-sm"
                          >
                            {link.title}
                          </a>
                        ))}
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
