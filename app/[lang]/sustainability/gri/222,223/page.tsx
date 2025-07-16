export default function BusinessReview() {
  // Content data structure
  interface ContentItem {
    type: string;
    title?: string;
    text?: string | string[];
    items?: {
      title: string;
      content: string;
      table?: {
        headers: string[];
        rows: {
          values: string[];
        }[];
      };
    }[];
    columns?: {
      title: string;
      content: any;
      table?: {
        headers: string[];
        rows: {
          values: string[];
        }[];
      };
    }[];
    charts?: {
      image: any;
      alt: string;
    }[];
  }

  // Main content
  const businessContent: ContentItem[] = [
    {
      type: 'overview',
      title: 'BUSINESS REVIEW',
      text: [
        'LB Finance maintains a strong, customer-centric business model built around a diversified portfolio that addresses the evolving financial needs of individuals and businesses. The company operates through three core business segments: Funding, Lending and Value Added Services - each playing a strategic role in delivering value to customers while ensuring sustainable growth.',
        'Our extensive branch network and dedicated teams enable seamless service delivery, while continued investments in digital infrastructure have significantly enhanced customer convenience and operational efficiency. From intuitive mobile platforms to integrated service channels, LB Finance remains committed to blending personalised service with digital innovation to create a responsive and future-ready financial ecosystem.',
      ],
    },
    {
      type: 'columns',
      columns: [
        {
          title: 'LENDING',
          content:
            "Our financing strategy, aligned with our Company's goals, aims to make LBF the top lending solutions provider in Sri Lanka. We focus on enhancing our lending portfolio for individuals and businesses through activities such as leasing, vehicle loans, mortgage loans, gold loans, and other credit options to achieve our long-term, medium-term, and short-term objectives.",
          table: {
            headers: [
              'Category',
              'Value (Rs. Mn)',
              'Lending Mix (%)',
              'Interest income (Rs. Mn)',
              'Contribution to Interest Income(%)',
            ],
            rows: [
              {
                values: ['Lease Receivables', '36,035', '18%', '9,462', '24%'],
              },
              { values: ['Vehicle Loans', '46,106', '23%', '10,176', '25%'] },
              { values: ['Power Drafts', '17,698', '9%', '2,669', '7%'] },
              { values: ['Gold Loans', '83,973', '42%', '15,272', '38%'] },
              { values: ['Mortgage Loans', '2,178', '2%', '647', '2%'] },
              { values: ['Term Loans', '11,777', '6%', '1,776', '4%'] },
            ],
          },
        },
        {
          title: 'FUNDING',
          content:
            'We deliver a range of deposit and savings solutions, enabling customers to capitalise on market opportunities to boost their financial capacity. We also focus on fostering enduring customer relationships through personalised services.',
          table: {
            headers: [
              'Category',
              'Value (Rs. Mn)',
              'Funding Mix (%)',
              'Interest Expense (Rs. Mn)',
              'Contribution to Interest Expense (%)',
            ],
            rows: [
              { values: ['Deposits', '138,497', '60%', '13,539', '81%'] },
              { values: ['Bank Borrowings', '42,417', '18%', '3,148', '19%'] },
              { values: ['Equity', '51,266', '22%', '-', '-'] },
            ],
          },
        },
        {
          title: 'VALUE ADDED SERVICES',
          content:
            "We offer customers streamlined payment systems and a range of Value Added Services (VAS) through interconnected channels, aiming to give them full control over their finances. With an extensive branch network, we efficiently process utility payments, foreign currency exchange, and money remittance (Western Union) to meet our customers' needs comprehensively.",
          table: {
            headers: [
              'Category',
              'No. of Transactions',
              'Transaction value (Rs. Mn)',
              'Composition',
              'Fee based Income generated (Rs. Mn)',
            ],
            rows: [
              {
                values: [
                  'Foreign Currency Exchange',
                  '2,983',
                  '146',
                  '2%',
                  '11',
                ],
              },
              {
                values: [
                  'Western Union - Money Remittances',
                  '51,853',
                  '4,554',
                  '76%',
                  '21',
                ],
              },
              { values: ['Bill Payments', '928,979', '1,330', '22%', '13'] },
            ],
          },
        },
      ],
    },
    {
      type: 'columns',
      columns: [
        {
          title: 'Lending Products',
          content: (
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>LB Finance Leasing</li>
              <li>LB Finance POWER PLUS</li>
              <li>LB Finance MUL GALA</li>
              <li>LB Finance THREE WHEELER LEASING</li>
              <li>LB Finance POWER DRAFT</li>
              <li>LB Finance Mortage Loans</li>
              <li>LB Finance MOTOR CYCLE LEASING</li>
              <li>LB Finance PERSONAL LOANS</li>
              <li>LB Finance GOLD LOANS</li>
            </ul>
          ),
        },
        {
          title: 'Deposit Products',
          content: (
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>LB Finance YASA ISUSRU </li>
              <li>LB Finance LITTLE HEROES</li>
              <li>LB Finance SAVINGS</li>
              <li>LB Finance SALARY PLAN</li>
            </ul>
          ),
        },
        {
          title: 'Value Added Services',
          content: (
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>LB Finance Bill Payments</li>
              <li>LB Finance money exchange</li>
              <li>Western Union </li>
            </ul>
          ),
        },
      ],
    },
    {
      type: 'columns',
      title: 'Loans and Receivables',
      columns: [
        {
          title: 'DIGITAL SUPPORT',
          content:
            'The Company improved process efficiency and customer experience through automation initiatives, including fixed deposit account opening and managing the FD portfolio via the CIM app, e-statement generation, automated tax certificate issuance, and digital due diligence. Automated RMV Process: Digitises the manual RMV process, reducing turnaround time and minimising errors.',
        },
        {
          title: 'FUTURE FOCUS',
          content:
            'We are shaping the future of lending through smart, secure, and seamless solutions. By harnessing technology and data-driven insights, we’re making borrowing faster, more transparent, and tailored to the evolving needs of individuals and businesses.',
        },
      ],
    },
    {
      type: 'columns',
      title: 'Customer Deposits',
      columns: [
        {
          title: 'DIGITAL SUPPORT',
          content:
            'AI-powered credit facilities: Leveraging artificial intelligence to assess customer profiles and deliver personalised credit solutions.',
        },
        {
          title: 'FUTURE FOCUS',
          content:
            'We are committed to revolutionising access to capital by delivering fast, flexible, and tech-driven funding solutions. Our focus is on empowering businesses of tomorrow— leveraging data, automation, and personalised financial products to support growth in an ever-evolving economy',
        },
      ],
    },
    {
      type: 'columns',
      title: 'Foreign Exchange Transactions',
      columns: [
        {
          title: 'DIGITAL SUPPORT',
          content:
            'Partnership with leading telco providers enables us to offer exclusive customer benefits. With a user-friendly UI/UX developed for bill payment options, a significant portion of total bill payments are now processed through our digital platforms',
        },
        {
          title: 'FUTURE FOCUS',
          content:
            'We aim to enhance customer convenience by digitising and streamlining bill payments, Western Union, and money exchange services for faster, secure, and accessible financial solutions.',
        },
      ],
    },
    // {
    //   type: 'charts',
    //   charts: [
    //     { image: chart1, alt: 'Loans and Receivables Growth Chart' },
    //     { image: chart2, alt: 'Customer Deposits Growth Chart' },
    //     { image: chart3, alt: 'Foreign Exchange Transactions Chart' },
    //   ],
    // },
  ];

  const renderTable = (table: any) => (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-white text-sm text-black">
        <thead>
          <tr className="bg-[#0A3D5F] text-white">
            {table.headers.map((header: string, i: number) => (
              <th key={i} className="py-2 px-4 text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row: any, i: number) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-[#f7f7f7]' : 'bg-white'}>
              {row.values.map((value: string, j: number) => (
                <td key={j} className="py-2 px-4 border-b border-gray-200">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6 rounded-lg">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
          <div className="bg-[#fcf7ef] rounded-lg p-6">
            {businessContent.map((item, index) => (
              <div key={index} className="mb-8 last:mb-0">
                {/* Overview Section */}
                {item.type === 'overview' && (
                  <>
                    <h1 className="text-2xl font-bold mb-4 text-[#0A3D5F]">
                      {item.title}
                    </h1>
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
                  <>
                    <h2 className="text-xl font-bold mb-4 text-[#F3A847] border-b border-[#F3A847] pb-1">
                      {item.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {item.columns?.map((column, i) => (
                        <div key={i} className="bg-[#daa765] p-4 rounded-lg">
                          <h3 className="font-bold text-[#0A3D5F] mb-2">
                            {column.title}
                          </h3>
                          <div className="text-sm text-black">
                            {column.content}
                          </div>
                          {column.table && renderTable(column.table)}
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Charts Section */}
                {item.type === 'charts' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* {item.charts?.map((chart, i) => (
                      <div key={i} className="bg-white p-4 rounded-lg shadow">
                        <Image
                          src={chart.image}
                          alt={chart.alt}
                          className="w-full h-auto"
                        />
                      </div>
                    ))} */}
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
