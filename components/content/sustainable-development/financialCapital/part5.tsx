'use client';

export default function FinancialCapitalPart5() {
  const horizontalData = [
    {
      item: 'Income',
      cagr: 12,
      y2024: [49230, 15],
      y2023: [42756, 42],
      y2022: [30160, 14],
      y2021: [26766, 15],
      y2020: [31223, 7],
    },
    {
      item: 'Interest Income',
      cagr: 12,
      y2024: [45866, 16],
      y2023: [39644, 44],
      y2022: [27511, 0],
      y2021: [27458, 6],
      y2020: [29160, 7],
    },
    {
      item: 'Interest Expenses',
      cagr: 12,
      y2024: [21379, 4],
      y2023: [20616, 133],
      y2022: [8847, 23],
      y2021: [11523, 15],
      y2020: [13615, 5],
    },
    {
      item: 'Net Interest Income',
      cagr: 12,
      y2024: [24487, 29],
      y2023: [19028, 2],
      y2022: [18664, 17],
      y2021: [15935, 3],
      y2020: [15545, 8],
    },
    {
      item: 'Other Operating Income',
      cagr: 12,
      y2024: [3364, 8],
      y2023: [3113, 18],
      y2022: [2649, 15],
      y2021: [2308, 12],
      y2020: [2063, 14],
    },
    {
      item: 'Total Operating Income',
      cagr: 12,
      y2024: [27851, 26],
      y2023: [22141, 4],
      y2022: [21313, 17],
      y2021: [18243, 4],
      y2020: [17608, 8],
    },
    {
      item: 'Impairment Charges',
      cagr: 33,
      y2024: [373, 32],
      y2023: [546, 47],
      y2022: [1026, 39],
      y2021: [1692, 8],
      y2020: [1831, 86],
    },
    {
      item: 'Total Operating Expenses',
      cagr: 12,
      y2024: [8670, 21],
      y2023: [7178, 15],
      y2022: [6240, 12],
      y2021: [5576, 5],
      y2020: [5888, 5],
    },
    {
      item: 'Tax on Financial Services',
      cagr: 12,
      y2024: [3628, 36],
      y2023: [2670, 25],
      y2022: [2137, 28],
      y2021: [1669, 27],
      y2020: [2279, 13],
    },
    {
      item: 'Profit Before Tax',
      cagr: 19,
      y2024: [15180, 29],
      y2023: [11747, 1],
      y2022: [11910, 28],
      y2021: [9306, 22],
      y2020: [7610, 2],
    },
    {
      item: 'Income Tax Expense',
      cagr: 23,
      y2024: [5616, 71],
      y2023: [3287, 1],
      y2022: [3248, 30],
      y2021: [2503, 3],
      y2020: [2423, 10],
    },
    {
      item: 'Profit for the Year',
      cagr: 17,
      y2024: [9564, 13],
      y2023: [8460, 2],
      y2022: [8662, 27],
      y2021: [6803, 31],
      y2020: [5187, 2],
    },
  ];

  const verticalData = [
    {
      item: 'Income',
      y2024: [49230, 100],
      y2023: [42756, 100],
      y2022: [30160, 100],
      y2021: [26766, 100],
      y2020: [31223, 100],
    },
    {
      item: 'Interest Income',
      y2024: [45866, 93],
      y2023: [39644, 93],
      y2022: [27511, 91],
      y2021: [27458, 92],
      y2020: [29160, 93],
    },
    {
      item: 'Interest Expenses',
      y2024: [21379, 43],
      y2023: [20616, 48],
      y2022: [8847, 29],
      y2021: [11523, 39],
      y2020: [13615, 44],
    },
    {
      item: 'Net Interest Income',
      y2024: [24487, 50],
      y2023: [19028, 45],
      y2022: [18664, 62],
      y2021: [15935, 54],
      y2020: [15545, 50],
    },
    {
      item: 'Other Operating Income',
      y2024: [3364, 7],
      y2023: [3113, 7],
      y2022: [2649, 9],
      y2021: [2308, 8],
      y2020: [2063, 7],
    },
    {
      item: 'Total Operating Income',
      y2024: [27851, 57],
      y2023: [22141, 52],
      y2022: [21313, 71],
      y2021: [18243, 61],
      y2020: [17608, 56],
    },
    {
      item: 'Impairment Charges',
      y2024: [373, 1],
      y2023: [546, 1],
      y2022: [1026, 3],
      y2021: [1692, 6],
      y2020: [1831, 6],
    },
    {
      item: 'Total Operating Expenses',
      y2024: [8670, 18],
      y2023: [7178, 17],
      y2022: [6240, 21],
      y2021: [5576, 19],
      y2020: [5888, 19],
    },
    {
      item: 'Tax on Financial Services',
      y2024: [3628, 7],
      y2023: [2670, 6],
      y2022: [2137, 7],
      y2021: [1669, 6],
      y2020: [2279, 7],
    },
    {
      item: 'Profit Before Tax',
      y2024: [15180, 31],
      y2023: [11747, 27],
      y2022: [11910, 39],
      y2021: [9306, 31],
      y2020: [7610, 24],
    },
    {
      item: 'Income Tax Expense',
      y2024: [5616, 11],
      y2023: [3287, 8],
      y2022: [3248, 11],
      y2021: [2503, 8],
      y2020: [2423, 8],
    },
    {
      item: 'Profit for the Year',
      y2024: [9564, 19],
      y2023: [8460, 20],
      y2022: [8662, 29],
      y2021: [6803, 23],
      y2020: [5187, 17],
    },
  ];

  return (
    <div>
      <div className="bg-white p-8 text-black">
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4 text-[#ff9800]">
            HORIZONTAL ANALYSIS OF INCOME STATEMENT
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="bg-[#2196f3] text-white p-2">
                    Income Statement
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
                {horizontalData.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-gray-100' : ''}
                  >
                    <td className="p-2">{row.item}</td>
                    <td className="p-2">{row.cagr}</td>
                    <td className="p-2">{row.y2024[0].toLocaleString()}</td>
                    <td className="p-2">{row.y2024[1]}</td>
                    <td className="p-2">{row.y2023[0].toLocaleString()}</td>
                    <td className="p-2">{row.y2023[1]}</td>
                    <td className="p-2">{row.y2022[0].toLocaleString()}</td>
                    <td className="p-2">{row.y2022[1]}</td>
                    <td className="p-2">{row.y2021[0].toLocaleString()}</td>
                    <td className="p-2">{row.y2021[1]}</td>
                    <td className="p-2">{row.y2020[0].toLocaleString()}</td>
                    <td className="p-2">{row.y2020[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-2">*CAGR - Compound Annual Growth Rate</p>

          <div className="mt-8 bg-[#e1f5fe] p-4 rounded-lg">
            <p className="text-sm">
              LB Finance PLC&apos;s financial performance over the past five
              years reflects a consistent growth trajectory, marked by a
              significant increase in income and profitability. The
              Company&apos;s income reached a record high of Rs. 49,230 million
              in 2023/24, driven by a robust 12% Compound Annual Growth Rate
              (CAGR) over the past five years. This growth is evident across key
              income streams, including a 12% CAGR in net interest income, which
              reached Rs. 24,487 million in 2023/24, and a steady 13% CAGR in
              other operating income. While operating expenses have shown a
              slight upward trend, increasing from Rs. 5,888 million to Rs.
              8,670 million over the past five years, they remain relatively
              stable. This controlled expense growth has contributed
              significantly to the impressive growth in profitability, with
              profit for the year reaching a historic high of Rs. 9,564 million
              in 2023/24, reflecting a 17% CAGR over the period. This consistent
              track record of growth underscores LB Finance PLC&apos;s strong
              financial performance and its ability to navigate market
              challenges effectively.
            </p>
          </div>

          <h2 className="text-2xl font-bold my-8 text-[#ff9800]">
            VERTICAL ANALYSIS OF INCOME STATEMENT
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="bg-[#2196f3] text-white p-2">
                    Income Statement
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
                {verticalData.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-gray-100' : ''}
                  >
                    <td className="p-2">{row.item}</td>
                    <td className="p-2">{row.y2024[0].toLocaleString()}</td>
                    <td className="p-2">{row.y2024[1]}</td>
                    <td className="p-2">{row.y2023[0].toLocaleString()}</td>
                    <td className="p-2">{row.y2023[1]}</td>
                    <td className="p-2">{row.y2022[0].toLocaleString()}</td>
                    <td className="p-2">{row.y2022[1]}</td>
                    <td className="p-2">{row.y2021[0].toLocaleString()}</td>
                    <td className="p-2">{row.y2021[1]}</td>
                    <td className="p-2">{row.y2020[0].toLocaleString()}</td>
                    <td className="p-2">{row.y2020[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
