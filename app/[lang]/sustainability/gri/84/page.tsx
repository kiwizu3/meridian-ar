// import Section from '@/components/content/sustainable-development/humanCapital/part8';

// export default function GRIReporting10() {
//   return (
//     <div className="py-24 container px-5 lg:px-0">
//       <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6">
//         <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
//           <Section />
//         </div>
//       </div>
//     </div>
//   );
// }

export default function SustainableGrowth() {
  // Content data structure
  interface ContentItem {
    type: string;
    title?: string;
    text?: string | string[];
    items?: {
      title?: string;
      content: string;
    }[];
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
      title?: string;
      content: string;
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
    }[];
    content?: React.ReactNode;
  }

  // Main content
  const growthContent: ContentItem[] = [
    {
      type: 'header',
      title: 'Sustainable Growth - Long-term Value Creation',
    },
    {
      type: 'section',
      title: 'Year in Review',
      items: [
        {
          content:
            'Net interest income recorded a growth of 3.19% Year on Year (YoY) to Rs. 25.12 Billion in Financial Year (FY) 2024/25 (page 132)',
        },
        {
          content:
            "Profit after Tax for 2024/25 increased to Rs. 10.80 Billion, surpassing the previous year's Rs. 9.56 Billion by 12.99% YoY (page 133)",
        },
        {
          content:
            'Total assets reached Rs. 240.89 Billion as of 31 March 2025, recording a 19.15% increase YoY (Rs. 202.17 Billion in 2023/24)',
        },
        {
          content:
            'We distributed 8.06% (2023/24: 7.13%) of the value created to investors through the payment of dividends (page 480)',
        },
        {
          content:
            'LBF achieved significant growth in FY 2024/25, recording a 38% growth in market capitalisation (14% in 2023/24) and a Rs. 19.50 Earnings Per Share (EPS) compared to the previous year (Rs. 17.26 in 2023/24)',
        },
        {
          content:
            'LBF successfully expanded its branch network by 10, bringing the total number of branches to 216. Among the new openings, 03 branches were established in the North and East, further strengthening our market presence and supporting sustainable growth (page 142)',
        },
        {
          content:
            'The adoption of new systems, system upgrades, and digitalisation has improved our efficiency, enhanced productivity, and strengthened customer experience. Leveraging technology provides a competitive advantage, enabling us to stay ahead in the market and ensure long-term sustainability (page 172)',
        },
      ],
    },
    {
      type: 'columns',
      columns: [
        {
          title: 'Why Does it Matter?',
          content:
            '‘Sustainable Growth’ drives long-term stakeholder value by integrating financial objectives with social and environmental responsibility. This approach defines success beyond short-term profits, measuring contributions to a sustainable future and fostering resilience against market and environmental shifts. Furthermore, it ensures business thrives responsibly, creating a positive legacy for future generations, society, and the planet.',
        },
        {
          title: 'Resource Allocation',
          content:
            'Strategic allocation of intellectual and human capital, fuelled by investment in employee development and innovation, drives efficient, sustainable growth. Our commitment to sustainability ensures this progress also meets environmental and social responsibilities. This balanced approach directly translates to stronger operations, enhanced resilience, and a sustained competitive advantage.',
        },
      ],
    },
    {
      type: 'columns',
      columns: [
        {
          title: 'Related Stakeholders',
          content: `
            <ul class="list-disc pl-5 space-y-1 text-sm">
              <li>Shareholders</li>
              <li>Investors</li>
              <li>Customers</li>
              <li>Employees</li>
              <li>Regulators</li>
              <li>Communities</li>
            </ul>
          `,
        },
        {
          title: 'Capitals Impacted',
          content: `
            <div class="flex flex-wrap gap-2">
              <span class="bg-[#0A3D5F] text-white px-3 py-1 rounded-full text-xs">FC</span>
              <span class="bg-[#0A3D5F] text-white px-3 py-1 rounded-full text-xs">MC</span>
              <span class="bg-[#0A3D5F] text-white px-3 py-1 rounded-full text-xs">IC</span>
              <span class="bg-[#0A3D5F] text-white px-3 py-1 rounded-full text-xs">HC</span>
            </div>
          `,
        },
        {
          title: 'SDGs Impacted',
          content: `
            <div class="flex flex-wrap gap-2">
              <span class="bg-[#0A3D5F] text-white px-3 py-1 rounded-full text-xs">SDG 8</span>
              <span class="bg-[#0A3D5F] text-white px-3 py-1 rounded-full text-xs">SDG 9</span>
              <span class="bg-[#0A3D5F] text-white px-3 py-1 rounded-full text-xs">SDG 12</span>
            </div>
          `,
        },
        {
          title: 'SRROs and CRROs Impacted',
          content: `
            <div class="flex flex-wrap gap-2">
              <span class="bg-[#0A3D5F] text-white px-3 py-1 rounded-full text-xs">SR 01</span>
              <span class="bg-[#0A3D5F] text-white px-3 py-1 rounded-full text-xs">CR 4</span>
            </div>
          `,
        },
      ],
    },
    {
      type: 'columns',
      columns: [
        {
          title: 'Trade-off',
          content:
            'Balancing short-term financial performance with long-term sustainability goals requires investing in sustainable technologies and practices. While this may impact immediate profits, such investments are crucial for building long-term resilience and creating lasting value.',
        },
        {
          title: 'Business Model Shift',
          content:
            'Integrating sustainability transforms the core business model by expanding its focus beyond profit alone to include environmental and social value. This requires fundamentally re-evaluating operations, products, and partnerships to ensure growth benefits people and the planet long-term.',
        },
      ],
    },
    {
      type: 'section',
      title: 'Material Theme',
      content: (
        <>
          <div className="flex flex-wrap gap-4">
            <span className="bg-[#F3A847] text-[#0A3D5F] px-4 py-2 rounded-lg font-bold">
              MT 1
            </span>
            <span className="bg-[#F3A847] text-[#0A3D5F] px-4 py-2 rounded-lg font-bold">
              MT 2
            </span>
            <span className="bg-[#F3A847] text-[#0A3D5F] px-4 py-2 rounded-lg font-bold">
              MT 3
            </span>
            <span className="bg-[#F3A847] text-[#0A3D5F] px-4 py-2 rounded-lg font-bold">
              MT 5
            </span>
          </div>
          <p className="text-xs mt-2">GRI: 2-22</p>
        </>
      ),
    },
    {
      type: 'columns',
      columns: [
        {
          title: 'Profit After Tax',
          content: '',
          chart: {
            image: '/profit-chart.png', // Replace with actual image path
            alt: 'Profit After Tax growth chart',
            caption: 'Rs.Bn',
          },
        },
        {
          title: 'Return on Assets vs Return on Equity',
          content: '',
          chart: {
            image: '/roa-roe-chart.png', // Replace with actual image path
            alt: 'ROA and ROE comparison chart',
            caption: '%',
          },
        },
      ],
    },
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
            {growthContent.map((item, index) => (
              <div key={index} className="mb-8 last:mb-0">
                {/* Header Section */}
                {item.type === 'header' && (
                  <h1 className="text-2xl font-bold mb-4 text-[#0A3D5F] border-b border-[#F3A847] pb-2">
                    {item.title}
                  </h1>
                )}

                {/* Section with Text */}
                {item.type === 'section' && (
                  <>
                    {item.title && (
                      <h2 className="text-xl font-bold mb-4 text-[#F3A847]">
                        {item.title}
                      </h2>
                    )}
                    {item.text &&
                      (Array.isArray(item.text) ? (
                        item.text.map((paragraph, i) => (
                          <p key={i} className="text-sm text-black mb-3">
                            {paragraph}
                          </p>
                        ))
                      ) : (
                        <p className="text-sm text-black mb-3">{item.text}</p>
                      ))}
                    {item.items && (
                      <ul className="list-disc pl-5 space-y-2 text-sm text-black">
                        {item.items.map((listItem, i) => (
                          <li key={i} className="mb-2">
                            {listItem.title && (
                              <strong>{listItem.title}</strong>
                            )}{' '}
                            {listItem.content}
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.content && <div>{item.content}</div>}
                    {item.table && renderTable(item.table)}
                  </>
                )}

                {/* Columns Section */}
                {item.type === 'columns' && (
                  <div
                    className={`grid grid-cols-1 ${item.columns && item.columns.length > 2 ? 'md:grid-cols-4' : 'md:grid-cols-2'} gap-6 mb-4`}
                  >
                    {item.columns?.map((column, i) => (
                      <div key={i} className="bg-[#daa765] p-4 rounded-lg">
                        {column.title && (
                          <h3 className="font-bold text-[#0A3D5F] mb-2">
                            {column.title}
                          </h3>
                        )}
                        {column.content && <div>{item.content}</div>}
                        {column.table && renderTable(column.table)}
                        {column.chart && (
                          <div className="mt-4">
                            <div className="bg-white p-2 rounded-lg">
                              {/* Placeholder for chart image */}
                              <div className="bg-gray-200 h-40 flex items-center justify-center">
                                <p className="text-gray-500">
                                  Chart: {column.chart.alt}
                                </p>
                              </div>
                              {column.chart.caption && (
                                <p className="text-xs text-center mt-2 text-black">
                                  {column.chart.caption}
                                </p>
                              )}
                            </div>
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
