export default function MaterialityComponent() {
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
    table?: {
      headers: string[];
      rows: {
        [key: string]: string;
      }[];
    };
    colorLegend?: {
      title: string;
      items: { color: string; label: string }[];
    };
  }

  // Main content
  const content: ContentItem[] = [
    {
      type: 'header',
      title: 'MATERIALITY',
    },
    {
      type: 'section',
      title: 'Changing Materiality',
      text: [
        'In 2024/25, macroeconomic and microeconomic shifts significantly influenced our materiality assessment. A more thorough double materiality assessment revealed interdependence between certain issues. Consequently, we combined related material matters based on their strategic importance, which resulted in a shift in materiality levels compared to 2023/24.',
      ],
    },
    {
      type: 'section',
      title: '1.3 Materiality Drivers and Mapping',
      table: {
        headers: ['Rank', 'Material Matter', 'GRI Relevance', 'EESG'],
        rows: [
          {
            Rank: '1',
            'Material Matter': 'Sustainable revenue growth',
            'GRI Relevance': '201-1, 207',
            EESG: 'Economic',
          },
          {
            Rank: '2',
            'Material Matter': 'Risk and capital management',
            'GRI Relevance': '2-23, 201-2',
            EESG: 'Economic',
          },
          {
            Rank: '3',
            'Material Matter': 'Brand trust',
            'GRI Relevance': '2-24, 2-25, 2-26',
            EESG: 'Social',
          },
          {
            Rank: '4',
            'Material Matter': 'Operational resilience',
            'GRI Relevance': '2-12, 2-14, 2-22',
            EESG: 'Governance',
          },
          {
            Rank: '5',
            'Material Matter': 'Process excellence',
            'GRI Relevance': '2-23, 2-24, 2-26',
            EESG: 'Governance',
          },
          {
            Rank: '6',
            'Material Matter': 'Digital transformation',
            'GRI Relevance': '418-1',
            EESG: 'Economic',
          },
          {
            Rank: '7',
            'Material Matter': 'Financed emissions reduction',
            'GRI Relevance': '305',
            EESG: 'Environmental',
          },
          {
            Rank: '8',
            'Material Matter': 'Internal control and risk management',
            'GRI Relevance': '2-12, 2-13, 2-14, 2-15, 2-16',
            EESG: 'Governance',
          },
          {
            Rank: '9',
            'Material Matter': 'Ethical and transparent practices',
            'GRI Relevance': '2-23, 2-24, 2-25, 2-26, 2-27, 205-2',
            EESG: 'Governance',
          },
          {
            Rank: '10',
            'Material Matter': 'Regulatory compliance',
            'GRI Relevance': '2-24',
            EESG: 'Governance',
          },
          {
            Rank: '11',
            'Material Matter': 'Information security and data privacy',
            'GRI Relevance': '418-1',
            EESG: 'Governance',
          },
          {
            Rank: '12',
            'Material Matter':
              'Corporate citizenship and social license to operate',
            'GRI Relevance': '413-1',
            EESG: 'Social',
          },
          {
            Rank: '13',
            'Material Matter': 'Employee engagement',
            'GRI Relevance': '2-23, 401-2',
            EESG: 'Social',
          },
          {
            Rank: '14',
            'Material Matter': 'Training and development',
            'GRI Relevance': '404',
            EESG: 'Social',
          },
          {
            Rank: '15',
            'Material Matter': 'Health and safety',
            'GRI Relevance': '403-1',
            EESG: 'Social',
          },
          {
            Rank: '16',
            'Material Matter': 'Selling practices',
            'GRI Relevance': 'NA*',
            EESG: 'Social',
          },
          {
            Rank: '17',
            'Material Matter': 'Lending practices',
            'GRI Relevance': 'NA*',
            EESG: 'Economic',
          },
          {
            Rank: '18',
            'Material Matter': 'Customer experience',
            'GRI Relevance': '418-1',
            EESG: 'Social',
          },
          {
            Rank: '19',
            'Material Matter': 'Financial inclusion',
            'GRI Relevance': '203-2',
            EESG: 'Social',
          },
        ],
      },
      colorLegend: {
        title: 'EESG Color Legend',
        items: [
          { color: 'bg-purple-500', label: 'Economic' },
          { color: 'bg-green-500', label: 'Environmental' },
          { color: 'bg-pink-500', label: 'Social' },
          { color: 'bg-blue-500', label: 'Governance' },
        ],
      },
    },
    {
      type: 'section',
      title: '2. MATERIAL THEMES',
      text: [
        'We identify material themes as essential factors for achieving shared value outcomes. The following themes have been identified for the financial year 2024/25 as material themes.',
      ],
      list: {
        items: [
          'MT 1 Sustainable and Climate Inclusive Business Growth',
          'MT 2 Future-fit Organisation',
          'MT 3 Good Governance and Risk Optimisation',
          'MT 4 Supporting Social Cohesion',
          'MT 5 Serving and Meeting Customer Needs',
        ],
      },
    },
    // MT1 Section
    {
      type: 'section',
      title: 'MT 1 Sustainable and Climate Inclusive Business Growth',
      text: [
        'Sustainable and Climate Inclusive Business Growth delivers consistent financial performance while creating long-term value for stakeholders and society. For LBF, this means striking the right balance between profitability and purpose by embedding sustainability into our growth strategy.',
      ],
    },
    {
      type: 'columns',
      columns: [
        {
          title: 'Help',
          content:
            '• Strong brand reputation\n• Diversified portfolio\n• Experienced leadership and management\n• Liquidity and capital reserves\n• Technology and digital transformation',
        },
        {
          title: 'Hinder',
          content:
            '• Market saturation in urban areas\n• Talent retention challenges\n• Evolving digital risks\n• Market volatility',
        },
      ],
    },
    {
      type: 'section',
      title: 'Why is this a Material Theme?',
      text: [
        'Sustainable and Climate Inclusive Business Growth is a material theme for LBF because it allows the Company to balance financial performance with long-term value creation for both stakeholders and society. This approach is key to align profitability with purpose, ensuring that growth strategies contribute to shareholder value while also fostering stakeholder trust.',
      ],
    },
    {
      type: 'section',
      title: 'Strategic Alignment',
      list: {
        items: [
          'S 1 Sustainable Growth',
          'S 4 Positive Impacts',
          'S 6 Risk and Governance',
        ],
      },
    },
    {
      type: 'section',
      title: 'Associated Opportunities',
      list: {
        items: [
          'Customer-centric innovations',
          'Cost optimisation through technology',
          'Stronger customer loyalty',
          'Diversification of revenue streams',
          'Building partnerships and strategic alliances',
        ],
      },
    },
    {
      type: 'section',
      title: 'Actions',
      text: [
        'We mitigate risk during economic downturns through a combination of strategies: offering diverse financial products, conducting rigorous credit assessments, focusing lending on creditworthy customers and low-risk sectors, and proactively engaging with regulators to ensure compliance and adapt to policy changes.',
      ],
    },
    // Continue with MT2-MT5 sections following the same pattern
    // ...
    {
      type: 'section',
      title: 'Communication of Critical Concerns',
      text: [
        'If there is/are critical concern/s, management will communicate the same to the Board of Directors for their discussion and Board will provide narrations and direction to solve or mitigate the concern/s.',
      ],
    },
    {
      type: 'section',
      text: 'GRI: 3-1, 3-2',
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

                {/* Table Section */}
                {item.type === 'table' && item.table && (
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full border border-[#0A3D5F]">
                      <thead>
                        <tr className="bg-[#0A3D5F] text-white">
                          {item.table.headers.map((header, i) => (
                            <th
                              key={i}
                              className="p-2 text-left border border-[#0A3D5F]"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {item.table.rows.map((row, i) => (
                          <tr
                            key={i}
                            className={
                              i % 2 === 0 ? 'bg-white' : 'bg-[#f0f0f0]'
                            }
                          >
                            {item.table &&
                              item.table.headers.map((header, j) => (
                                <td
                                  key={j}
                                  className="p-2 border border-[#0A3D5F] text-sm"
                                >
                                  {row[header]}
                                </td>
                              ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {item.colorLegend && (
                      <div className="mt-4 flex flex-wrap gap-4">
                        {item.colorLegend.items.map((legend, i) => (
                          <div key={i} className="flex items-center">
                            <div className={`w-4 h-4 ${legend.color} mr-2`} />
                            <span className="text-sm">{legend.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
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
