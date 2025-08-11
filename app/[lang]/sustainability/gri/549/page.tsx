// import Section from '@/components/content/supplementaryInformation';

// export default function GRIReporting11() {
//   return (
//     <div className="py-24 container px-5 lg:px-0">
//       <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6">
//         <Section />
//       </div>
//     </div>
//   );
// }

export default function CorporateInformation() {
  // Content data structure
  interface ContentItem {
    type: string;
    title?: string;
    text?: string | string[];
    items?: {
      title: string;
      content: string;
    }[];
    columns?: {
      title: string;
      content: string;
    }[];
    list?: {
      title?: string;
      items: string[];
    };
  }

  // Main content
  const content: ContentItem[] = [
    {
      type: 'header',
      title: 'CORPORATE INFORMATION',
    },
    {
      type: 'section',
      title: 'NAME OF COMPANY',
      text: 'L B Finance PLC',
    },
    {
      type: 'section',
      title: 'LEGAL FORM',
      text: [
        'Public Limited Liability Company',
        'Incorporated in Sri Lanka under the provisions of the Companies Ordinance No.51 of 1938 (Cap 145) and re-registered as per the Companies Act No. 07 of 2007 on 06th June, 2008.',
        'A Licensed Finance Company under the Finance Business Act No. 42 of 2011.',
        'A Registered Financed Leasing Establishment in terms of Finance Leasing Act No. 56 of 2000.',
      ],
    },
    {
      type: 'section',
      title: 'STOCK EXCHANGE LISTING',
      text: "The Company was admitted to the official list of the Colombo Stock Exchange on 30th December, 1997, in which the Company's Ordinary Shares are listed currently.",
    },
    {
      type: 'section',
      title: 'DATE OF INCORPORATION',
      text: '30th May 1971',
    },
    {
      type: 'section',
      title: 'COMPANY REGISTRATION NUMBER',
      text: 'PQ 156',
    },
    {
      type: 'section',
      title: 'TAX PAYER IDENTIFICATION NUMBER',
      text: '104033431',
    },
    {
      type: 'section',
      title: 'VAT REGISTRATION NUMBER',
      text: '104033431 7000',
    },
    {
      type: 'section',
      title: 'CENTRAL BANK REGISTRATION NUMBER',
      text: 'RFC 1003',
    },
    {
      type: 'section',
      title: 'PRINCIPAL ACTIVITIES',
      text: [
        'The Company provides a comprehensive range of financial services encompassing acceptance of Fixed Deposits, maintenance of Savings Accounts, providing Finance Leases and Vehicle Loan Facilities, Mortgage Loans, Gold Loans, Personal Loans, other Credit Facilities, Digital Financial Services and Value Added Services.',
        "Principal Activities of the Company's Subsidiaries",
        'L B Microfinance Myanmar Company Limited - carries on Microfinance lending in Myanmar.',
        'Multi Finance PLC – Multi Finance PLC which was a subsidiary of the Company was amalgamated with the Company on 25th July 2024.',
      ],
    },
    {
      type: 'columns',
      columns: [
        {
          title: 'REGISTERED OFFICE',
          content:
            'No. 275/75, Prof. Stanley Wijesundara Mawatha, Colombo 07.\nTel: 011- 2 200 000\nFax: 011-5 345 327',
        },
        {
          title: 'CORPORATE OFFICE',
          content:
            'No. 20, Dharmapala Mawatha, Colombo 03.\nTel: 011-2 155 000\nFax: 011-2 575 098',
        },
      ],
    },
    {
      type: 'section',
      title: 'OUTLETS',
      text: 'Two Hundred and Sixteen (216) Branches',
    },
    {
      type: 'section',
      title: 'WEBSITE',
      text: 'www.lbfinance.com',
    },
    {
      type: 'section',
      title: 'FINANCIAL YEAR END',
      text: '31 March',
    },
    {
      type: 'section',
      title: 'CREDIT RATING',
      text: 'The Company has been assigned a national long-term rating of A- (lka) with a Stable Outlook by Fitch Ratings Lanka Limited.',
    },
    {
      type: 'section',
      title: 'BOARD OF DIRECTORS',
      list: {
        items: [
          'Mr. G A R D Prasanna (Chairman)',
          'Mr. Ashane Jayasekara (Independent Non-Executive Director/Senior Director)',
          'Mr. Sumith Adhihetty (Managing Director)',
          'Mr. Niroshan Udage (Deputy Managing Director)',
          'Mr. B D A Perera (Executive Director)',
          'Mr. Ravindra Yatawara (Executive Director)',
          'Ms. Yogadinusha Bhaskaran (Non-Executive Director)',
          'Ms. Ashwini Natesan (Independent Non-Executive Director)',
          'Mr. Dharmadasa Rangalle (Non-Executive Director)',
          'Ms. Yanika Amarasekera (Independent Non-Executive Director)',
          'Mr. Priyantha Talwatte (Independent Non-Executive Director)',
          'Mr. Piyal Hennayake (Independent Non-Executive Director)',
        ],
      },
    },
    {
      type: 'section',
      title: 'BOARD APPOINTED COMMITTEES',
    },
    {
      type: 'section',
      title: 'Board Audit Committee',
      list: {
        items: [
          'Mr. Ashane Jayasekara (Chairman)',
          'Ms. Yogadinusha Bhaskaran',
          'Ms. Ashwini Natesan',
        ],
      },
    },
    {
      type: 'section',
      title: 'Board Human Resource and Remuneration Committee',
      list: {
        items: [
          'Ms. Yanika Amarasekera (Chairperson)',
          'Mr. G A R D Prasanna',
          'Mr. Ashane Jayasekara',
        ],
      },
    },
    {
      type: 'section',
      title: 'Board Nomination and Governance Committee',
      list: {
        items: [
          'Mr. Ashane Jayasekara (Chairman)',
          'Mr. G A R D Prasanna',
          'Ms. Ashwini Natesan',
        ],
      },
    },
    {
      type: 'section',
      title: 'Board Related Party Transactions Review Committee',
      list: {
        items: [
          'Mr. Piyal Hennayake (Chairman)',
          'Mr. Dharmadasa Rangalle',
          'Mr. Priyantha Talwatte',
        ],
      },
    },
    {
      type: 'section',
      title: 'Board Integrated Risk Management Committee',
      list: {
        items: [
          'Ms. Ashwini Natesan (Chairperson)',
          'Mr. Ashane Jayasekara',
          'Ms. Yogadinusha Bhaskaran',
        ],
      },
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
                    {Array.isArray(item.text) ? (
                      item.text.map((paragraph, i) => (
                        <p key={i} className="text-sm text-black mb-3">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="text-sm text-black">{item.text}</p>
                    )}
                    {item.list && (
                      <ul className="list-disc pl-5 text-sm text-black">
                        {item.list.items.map((listItem, i) => (
                          <li key={i} className="mb-2">
                            {listItem}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}

                {/* Columns Section */}
                {item.type === 'columns' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {item.columns?.map((column, i) => (
                      <div key={i} className="bg-[#daa765] p-4 rounded-lg">
                        <h3 className="font-bold text-[#0A3D5F] mb-2">
                          {column.title}
                        </h3>
                        {column.content && (
                          <div className="text-sm text-black whitespace-pre-line">
                            {column.content}
                          </div>
                        )}
                      </div>
                    ))}
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
