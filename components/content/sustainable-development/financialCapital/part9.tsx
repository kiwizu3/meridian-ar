'use client';

import React from 'react';

export default function FinancialCapitalPart9() {
  const data2 = [
    {
      category: 'Assets',
      items: [
        {
          name: 'Cash and Cash Equivalents',
          y2024: [9314, 5],
          y2023: [4524, 2],
          y2022: [14459, 9],
          y2021: [6187, 4],
          y2020: [6163, 4],
        },
        {
          name: 'Financial Assets Recognised through Profit or Loss - Measured at Fair Value',
          y2024: [15, 0],
          y2023: [11, 0],
          y2022: [13, 0],
          y2021: [11, 0],
          y2020: [5, 0],
        },
        {
          name: 'Financial Assets at Amortised Cost - Loans and Receivables',
          y2024: [161291, 80],
          y2023: [145190, 80],
          y2022: [134396, 82],
          y2021: [114138, 81],
          y2020: [118866, 83],
        },
        {
          name: 'Financial Assets Measured at Fair Value Through Other Comprehensive Income',
          y2024: [119, 0],
          y2023: [117, 0],
          y2022: [86, 0],
          y2021: [78, 0],
          y2020: [59, 0],
        },
        {
          name: 'Other Financial Assets',
          y2024: [20375, 10],
          y2023: [21586, 12],
          y2022: [5599, 3],
          y2021: [10454, 7],
          y2020: [9120, 6],
        },
        {
          name: 'Other Non Financial Assets',
          y2024: [431, 0],
          y2023: [474, 0],
          y2022: [454, 0],
          y2021: [920, 1],
          y2020: [967, 1],
        },
        {
          name: 'Investment in Subsidiary',
          y2024: [699, 0],
          y2023: [922, 1],
          y2022: [921, 1],
          y2021: [521, 1],
          y2020: [521, 0],
        },
        {
          name: 'Property, Plant and Equipment and Right-of-Use Assets',
          y2024: [8984, 5],
          y2023: [8633, 5],
          y2022: [8422, 5],
          y2021: [8241, 6],
          y2020: [8221, 6],
        },
        {
          name: 'Intangible Assets',
          y2024: [21, 0],
          y2023: [23, 0],
          y2022: [15, 0],
          y2021: [26, 0],
          y2020: [42, 0],
        },
        {
          name: 'Deferred Tax Assets',
          y2024: [928, 0],
          y2023: [767, 0],
          y2022: [0, 0],
          y2021: [0, 0],
          y2020: [0, 0],
        },
        {
          name: 'Total Assets',
          y2024: [202177, 100],
          y2023: [182347, 100],
          y2022: [164365, 100],
          y2021: [140576, 100],
          y2020: [143964, 100],
        },
      ],
    },
    {
      category: 'Liabilities',
      items: [
        {
          name: 'Due to Banks',
          y2024: [21702, 11],
          y2023: [19370, 11],
          y2022: [26859, 16],
          y2021: [16467, 12],
          y2020: [22771, 16],
        },
        {
          name: 'Financial Liabilities at Amortised Cost - Due to Depositors',
          y2024: [122808, 61],
          y2023: [114012, 62],
          y2022: [89144, 54],
          y2021: [85860, 61],
          y2020: [89256, 62],
        },
        {
          name: 'Debt Instruments Issued and Other Borrowed Funds',
          y2024: [5491, 3],
          y2023: [3882, 2],
          y2022: [8565, 5],
          y2021: [3114, 2],
          y2020: [3111, 2],
        },
        {
          name: 'Other Financial Liabilities',
          y2024: [3758, 2],
          y2023: [3256, 2],
          y2022: [3305, 2],
          y2021: [3044, 2],
          y2020: [2766, 2],
        },
        {
          name: 'Other Non-Financial Liabilities',
          y2024: [1549, 0],
          y2023: [1089, 1],
          y2022: [1135, 1],
          y2021: [1028, 1],
          y2020: [909, 1],
        },
        {
          name: 'Current Tax Liabilities',
          y2024: [2770, 1],
          y2023: [2256, 1],
          y2022: [1882, 1],
          y2021: [1872, 1],
          y2020: [767, 0],
        },
        {
          name: 'Deferred Tax Liabilities',
          y2024: [0, 0],
          y2023: [0, 0],
          y2022: [111, 0],
          y2021: [637, 1],
          y2020: [1038, 1],
        },
        {
          name: 'Post Employment Benefit Liability',
          y2024: [473, 0],
          y2023: [366, 0],
          y2022: [317, 0],
          y2021: [365, 0],
          y2020: [346, 0],
        },
        {
          name: 'Total Liabilities',
          y2024: [158551, 78],
          y2023: [144231, 79],
          y2022: [131318, 79],
          y2021: [112387, 80],
          y2020: [120964, 84],
        },
      ],
    },
    {
      category: 'Equity',
      items: [
        {
          name: 'Stated Capital',
          y2024: [838, 0],
          y2023: [838, 0],
          y2022: [838, 1],
          y2021: [838, 1],
          y2020: [838, 1],
        },
        {
          name: 'Reserves',
          y2024: [8973, 5],
          y2023: [8493, 5],
          y2022: [8039, 5],
          y2021: [7596, 5],
          y2020: [6217, 4],
        },
        {
          name: 'Retained Earnings',
          y2024: [33815, 17],
          y2023: [28785, 16],
          y2022: [24170, 15],
          y2021: [19755, 14],
          y2020: [15945, 11],
        },
        {
          name: 'Total Equity',
          y2024: [43626, 22],
          y2023: [38116, 21],
          y2022: [33047, 21],
          y2021: [28189, 20],
          y2020: [23000, 16],
        },
        {
          name: 'Total Liabilities and Equity',
          y2024: [202177, 100],
          y2023: [182347, 100],
          y2022: [164365, 100],
          y2021: [140576, 100],
          y2020: [143964, 100],
        },
      ],
    },
  ];
  return (
    <div>
      <div className="bg-white p-8 text-black">
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4 text-[#ff9800]">
            VERTICAL ANALYSIS OF STATEMENT OF FINANCIAL POSITION
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="bg-[#2196f3] text-white p-2">
                    Statement of Financial Position
                  </th>
                  <th className="bg-[#2196f3] text-white p-2" colSpan={2}>
                    2023/24
                  </th>
                  <th className="bg-[#4caf50] text-white p-2" colSpan={2}>
                    2022/23
                  </th>
                  <th className="bg-[#4caf50] text-white p-2" colSpan={2}>
                    2021/22
                  </th>
                  <th className="bg-[#4caf50] text-white p-2" colSpan={2}>
                    2020/21
                  </th>
                  <th className="bg-[#4caf50] text-white p-2" colSpan={2}>
                    2019/20
                  </th>
                </tr>
                <tr>
                  <th></th>
                  <th className="bg-[#bbdefb] p-2">Rs. Mn</th>
                  <th className="bg-[#bbdefb] p-2">%</th>
                  <th className="bg-[#c8e6c9] p-2">Rs. Mn</th>
                  <th className="bg-[#c8e6c9] p-2">%</th>
                  <th className="bg-[#c8e6c9] p-2">Rs. Mn</th>
                  <th className="bg-[#c8e6c9] p-2">%</th>
                  <th className="bg-[#c8e6c9] p-2">Rs. Mn</th>
                  <th className="bg-[#c8e6c9] p-2">%</th>
                  <th className="bg-[#c8e6c9] p-2">Rs. Mn</th>
                  <th className="bg-[#c8e6c9] p-2">%</th>
                </tr>
              </thead>
              <tbody>
                {data2.map((category, index) => (
                  <React.Fragment key={index}>
                    <tr>
                      <td className="font-bold p-2" colSpan={11}>
                        {category.category}
                      </td>
                    </tr>
                    {category.items.map((item, itemIndex) => (
                      <tr
                        key={itemIndex}
                        className={itemIndex % 2 === 0 ? 'bg-gray-100' : ''}
                      >
                        <td className="p-2">{item.name}</td>
                        <td className="p-2">
                          {item.y2024[0].toLocaleString()}
                        </td>
                        <td className="p-2">{item.y2024[1]}</td>
                        <td className="p-2">
                          {item.y2023[0].toLocaleString()}
                        </td>
                        <td className="p-2">{item.y2023[1]}</td>
                        <td className="p-2">
                          {item.y2022[0].toLocaleString()}
                        </td>
                        <td className="p-2">{item.y2022[1]}</td>
                        <td className="p-2">
                          {item.y2021[0].toLocaleString()}
                        </td>
                        <td className="p-2">{item.y2021[1]}</td>
                        <td className="p-2">
                          {item.y2020[0].toLocaleString()}
                        </td>
                        <td className="p-2">{item.y2020[1]}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-[#fff3e0] p-4 rounded-lg">
            <p className="text-sm">
              The vertical analysis of LB Finance PLC&apos;s Statement of
              Financial Position provides a comprehensive view of the
              Company&apos;s asset and liability structure over the past five
              years. The analysis reveals that the majority of LB Finance
              PLC&apos;s total assets are comprised of interest earning assets,
              such as loans and receivables and other financial assets,
              consistently accounting for between 92% and 95% of total assets.
              This highlights the Company&apos;s focus on generating income
              through its core lending and investment activities. On the
              liability side, customer deposits represent the largest source of
              funding, consistently comprising approximately 61% of total
              liabilities, demonstrating LB Finance PLC&apos;s commitment to
              prioritising customer deposits. Notably, total equity has shown a
              significant increase in its contribution to the Company&apos;s
              funding mix, rising from 16% in the financial year 2019/20 to 22%
              in the financial year 2023/24. This upward trend in equity funding
              indicates a strengthening of the Company&apos;s capital structure
              and a greater reliance on internal resources to fuel growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
