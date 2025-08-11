'use client';

import React from 'react';

export default function FinancialCapitalPart8() {
  const data = [
    {
      category: 'Assets',
      items: [
        {
          name: 'Cash and Cash Equivalents',
          cagr: 11,
          y2024: [9314, 106],
          y2023: [4524, 69],
          y2022: [14459, 134],
          y2021: [6187, 0],
          y2020: [6163, 53],
        },
        {
          name: 'Financial Assets Recognised through Profit or Loss - Measured at Fair Value',
          cagr: 33,
          y2024: [15, 38],
          y2023: [11, 19],
          y2022: [13, 22],
          y2021: [11, 134],
          y2020: [5, 32],
        },
        {
          name: 'Financial Assets at Amortised Cost - Loans and Receivables',
          cagr: 8,
          y2024: [161291, 11],
          y2023: [145190, 8],
          y2022: [134396, 18],
          y2021: [114138, 4],
          y2020: [118866, 5],
        },
        {
          name: 'Financial Assets Measured at Fair Value Through Other Comprehensive Income',
          cagr: 19,
          y2024: [119, 1],
          y2023: [117, 36],
          y2022: [86, 11],
          y2021: [78, 32],
          y2020: [59, 34],
        },
        {
          name: 'Other Financial Assets',
          cagr: 22,
          y2024: [20375, 5],
          y2023: [21586, 287],
          y2022: [5599, 46],
          y2021: [10454, 15],
          y2020: [9120, 15],
        },
        {
          name: 'Other Non-Financial Assets',
          cagr: 18,
          y2024: [431, 9],
          y2023: [474, 4],
          y2022: [454, 51],
          y2021: [920, 5],
          y2020: [967, 17],
        },
        {
          name: 'Investment in Subsidiary',
          cagr: 8,
          y2024: [699, 24],
          y2023: [922, 0],
          y2022: [921, 77],
          y2021: [521, '-'],
          y2020: [521, 63],
        },
        {
          name: 'Property, Plant and Equipment and Right-of-Use Assets',
          cagr: 2,
          y2024: [8984, 4],
          y2023: [8631, 3],
          y2022: [8362, 2],
          y2021: [8241, 0],
          y2020: [8221, 8],
        },
        {
          name: 'Intangible Assets',
          cagr: 16,
          y2024: [21, 9],
          y2023: [23, 52],
          y2022: [15, 43],
          y2021: [26, 38],
          y2020: [42, 5],
        },
        {
          name: 'Deferred Tax Assets',
          cagr: '-',
          y2024: [928, 21],
          y2023: [767, '-'],
          y2022: [0, '-'],
          y2021: [0, '-'],
          y2020: [0, '-'],
        },
        {
          name: 'Total Assets',
          cagr: 9,
          y2024: [202177, 11],
          y2023: [182347, 11],
          y2022: [164305, 17],
          y2021: [140576, 2],
          y2020: [143964, 6],
        },
      ],
    },
    {
      category: 'Liabilities',
      items: [
        {
          name: 'Due to Banks',
          cagr: 1,
          y2024: [21702, 12],
          y2023: [19370, 28],
          y2022: [26859, 63],
          y2021: [16467, 28],
          y2020: [22771, 8],
        },
        {
          name: 'Financial Liabilities at Amortised Cost - Due to Depositors',
          cagr: 8,
          y2024: [122808, 8],
          y2023: [114012, 28],
          y2022: [89144, 4],
          y2021: [85860, 4],
          y2020: [89256, 7],
        },
        {
          name: 'Debt Instruments Issued and Other Borrowed Funds',
          cagr: 15,
          y2024: [5491, 41],
          y2023: [3882, 55],
          y2022: [8565, 175],
          y2021: [3114, 0],
          y2020: [3111, 0],
        },
        {
          name: 'Other Financial Liabilities',
          cagr: 8,
          y2024: [3758, 15],
          y2023: [3256, 1],
          y2022: [3305, 9],
          y2021: [3044, 10],
          y2020: [2766, 40],
        },
        {
          name: 'Other Non-Financial Liabilities',
          cagr: 14,
          y2024: [1549, 42],
          y2023: [1089, 4],
          y2022: [1135, 10],
          y2021: [1028, 13],
          y2020: [909, 36],
        },
        {
          name: 'Current Tax Liabilities',
          cagr: 38,
          y2024: [2770, 23],
          y2023: [2256, 20],
          y2022: [1882, 0],
          y2021: [1872, 144],
          y2020: [767, 45],
        },
        {
          name: 'Deferred Tax Liabilities',
          cagr: '-',
          y2024: [0, '-'],
          y2023: [0, 100],
          y2022: [111, 83],
          y2021: [637, 39],
          y2020: [1040, 35],
        },
        {
          name: 'Post Employment Benefit Liability',
          cagr: 8,
          y2024: [473, 29],
          y2023: [366, 15],
          y2022: [317, 13],
          y2021: [365, 6],
          y2020: [346, 35],
        },
        {
          name: 'Total Liabilities',
          cagr: 7,
          y2024: [158551, 10],
          y2023: [144231, 10],
          y2022: [131318, 17],
          y2021: [112387, 7],
          y2020: [120964, 3],
        },
      ],
    },
    {
      category: 'Equity',
      items: [
        {
          name: 'Stated Capital',
          cagr: '-',
          y2024: [838, 0],
          y2023: [838, '-'],
          y2022: [838, '-'],
          y2021: [838, '-'],
          y2020: [838, '-'],
        },
        {
          name: 'Reserves',
          cagr: 10,
          y2024: [8973, 6],
          y2023: [8493, 6],
          y2022: [8039, 6],
          y2021: [7596, 22],
          y2020: [6217, 19],
        },
        {
          name: 'Retained Earnings',
          cagr: 21,
          y2024: [33815, 17],
          y2023: [28785, 21],
          y2022: [24170, 33],
          y2021: [19755, 24],
          y2020: [15945, 29],
        },
        {
          name: 'Total Equity',
          cagr: 17,
          y2024: [43626, 14],
          y2023: [38116, 15],
          y2022: [33047, 17],
          y2021: [28189, 23],
          y2020: [23000, 25],
        },
        {
          name: 'Total Liabilities and Equity',
          cagr: 9,
          y2024: [202177, 11],
          y2023: [182347, 11],
          y2022: [164365, 17],
          y2021: [140576, 2],
          y2020: [143964, 6],
        },
      ],
    },
  ];
  return (
    <div>
      <div className="bg-white text-black p-8">
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4 text-[#ff9800]">
            HORIZONTAL ANALYSIS OF STATEMENT OF FINANCIAL POSITION
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="bg-[#2196f3] text-white p-2">
                    Statement of Financial Position
                  </th>
                  <th className="bg-[#2196f3] text-white p-2">CAGR*</th>
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
                  <th>%</th>
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
                {data.map((category, index) => (
                  <React.Fragment key={index}>
                    <tr>
                      <td className="font-bold p-2" colSpan={12}>
                        {category.category}
                      </td>
                    </tr>
                    {category.items.map((item, itemIndex) => (
                      <tr
                        key={itemIndex}
                        className={itemIndex % 2 === 0 ? 'bg-gray-100' : ''}
                      >
                        <td className="p-2">{item.name}</td>
                        <td className="p-2">{item.cagr}</td>
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
          <p className="text-sm mt-2">*CAGR - Compound Annual Growth Rate</p>

          <div className="mt-8 bg-[#e0f2f1] p-4 rounded-lg">
            <p className="text-sm">
              The horizontal analysis of LB Finance PLC&apos;s Statement of
              Financial Position reveals a positive financial performance marked
              by consistent growth in assets and equity over the past five
              years. The Company&apos;s lending portfolio has experienced a
              notable 8% CAGR, demonstrating its commitment to expanding its
              core business operations. This growth is further supported by a
              robust 17% CAGR in investment capital generation, which has
              increased from Rs. 23,000 million to Rs. 43,626 million over the
              five years. Simultaneously, LB Finance PLC has maintained a
              consistent dividend policy, distributing 17.54% in dividend
              payments annually to its shareholders. While total liabilities
              have grown, primarily driven by an increase in the depositor base
              from Rs. 89,256 million to Rs. 122,808 million at an 8% CAGR, this
              growth has been at a slower pace compared to the expansion of
              assets. This balanced approach to managing liabilities, coupled
              with consistent growth in assets and equity, demonstrates the
              Company&apos;s strong financial performance and its ability to
              manage its financial resources effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
