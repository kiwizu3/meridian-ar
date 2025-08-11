'use client';

import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function FinancialCapitalPart13() {
  const radialBarOptions = {
    chart: { type: 'radialBar' as const },
    colors: ['#00e5ff'],
    plotOptions: {
      radialBar: {
        hollow: { size: '70%' },
        dataLabels: { show: false },
      },
    },
  };
  const profitBeforeTaxesOptions = {
    chart: { type: 'bar' as const, stacked: true },
    colors: ['#0288d1', '#4caf50', '#03a9f4'],
    xaxis: {
      categories: [
        'Jun-22',
        'Sep-22',
        'Dec-22',
        'Mar-23',
        'Jun-23',
        'Sep-23',
        'Dec-23',
        'Mar-24',
      ],
    },
    yaxis: { title: { text: 'Rs. Bn' } },
  };

  const profitBeforeTaxesSeries = [
    {
      name: 'Profit After Tax',
      data: [1.8, 1.9, 2.1, 2.7, 2.0, 2.3, 2.5, 2.8],
    },
    {
      name: 'Income Tax Expense',
      data: [0.6, 0.7, 0.8, 1.2, 0.8, 1.0, 1.1, 1.3],
    },
    {
      name: 'Tax on Financial Services',
      data: [0.5, 0.6, 0.7, 0.9, 0.7, 0.8, 0.9, 1.0],
    },
  ];

  const netInterestIncomeOptions = {
    chart: { type: 'area' as const },
    colors: ['#4caf50', '#03a9f4'],
    xaxis: {
      categories: [
        'Jun-22',
        'Sep-22',
        'Dec-22',
        'Mar-23',
        'Jun-23',
        'Sep-23',
        'Dec-23',
        'Mar-24',
      ],
    },
    yaxis: { title: { text: 'Rs. Bn' } },
    fill: { type: 'gradient' },
  };

  const netInterestIncomeSeries2 = [
    { name: 'Interest Income', data: [6, 7, 8, 9, 10, 11, 12, 13] },
    { name: 'Interest Expenses', data: [2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5] },
  ];

  const loansReceivablesOptions = {
    chart: { type: 'bar' as const },
    colors: ['#0288d1', '#4caf50', '#03a9f4', '#ff9800'],
    xaxis: { categories: ['Jun-23', 'Sep-23', 'Dec-23', 'Mar-24'] },
    yaxis: { title: { text: 'Rs. Bn' } },
    plotOptions: {
      bar: { horizontal: false, columnWidth: '55%', endingShape: 'rounded' },
    },
    dataLabels: { enabled: false },
  };

  const loansReceivablesSeries2 = [
    { name: 'Loans and Receivables', data: [143, 145, 152, 161] },
  ];

  const dueToDepositorsOptions = {
    chart: { type: 'bar' as const },
    colors: ['#0288d1', '#4caf50', '#03a9f4', '#ff9800'],
    xaxis: { categories: ['Jun-23', 'Sep-23', 'Dec-23', 'Mar-24'] },
    yaxis: { title: { text: 'Rs. Bn' } },
    plotOptions: {
      bar: { horizontal: false, columnWidth: '55%', endingShape: 'rounded' },
    },
    dataLabels: { enabled: false },
  };

  const dueToDepositorsSeries = [
    { name: 'Due to Depositors', data: [112, 115, 115, 123] },
  ];

  return (
    <div>
      <div className="bg-[#ffffff] text-black p-8">
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-8 text-[#ffa726]">
            QUARTERLY FINANCIAL INFORMATION DASHBOARD
          </h2>

          <div className="grid grid-cols-4 gap-4 mb-8">
            <div>
              <h3 className="text-center mb-2">Q1</h3>
              <Chart
                options={radialBarOptions}
                series={[22]}
                type="radialBar"
                height={200}
              />
            </div>
            <div>
              <h3 className="text-center mb-2">Q2</h3>
              <Chart
                options={radialBarOptions}
                series={[46]}
                type="radialBar"
                height={200}
              />
            </div>
            <div>
              <h3 className="text-center mb-2">Q3</h3>
              <Chart
                options={radialBarOptions}
                series={[72]}
                type="radialBar"
                height={200}
              />
            </div>
            <div>
              <h3 className="text-center mb-2">Q4</h3>
              <Chart
                options={radialBarOptions}
                series={[100]}
                type="radialBar"
                height={200}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-2">
                Composition of Profit Before Taxes (Rs. Bn)
              </h3>
              <Chart
                options={profitBeforeTaxesOptions}
                series={profitBeforeTaxesSeries}
                type="bar"
                height={300}
              />
            </div>
            <div>
              <h3 className="font-bold mb-2">Net Interest Income (Rs. Bn)</h3>
              <Chart
                options={netInterestIncomeOptions}
                series={netInterestIncomeSeries2}
                type="area"
                height={300}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-2">Loans and Receivables (Rs. Bn)</h3>
              <Chart
                options={loansReceivablesOptions}
                series={loansReceivablesSeries2}
                type="bar"
                height={300}
              />
            </div>
            <div>
              <h3 className="font-bold mb-2">Key Performance Indicators</h3>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left">Indicator</th>
                    <th>Jun-23</th>
                    <th>Sep-23</th>
                    <th>Dec-23</th>
                    <th>Mar-24</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={5} className="font-bold">
                      Asset Quality (%)
                    </td>
                  </tr>
                  <tr>
                    <td>Gross NPL</td>
                    <td>6.69</td>
                    <td>6.39</td>
                    <td>4.53</td>
                    <td>3.54</td>
                  </tr>
                  <tr>
                    <td>Net NPL</td>
                    <td>1.37</td>
                    <td>1.54</td>
                    <td>-0.38</td>
                    <td>-0.79</td>
                  </tr>
                  <tr>
                    <td colSpan={5} className="font-bold">
                      Profitability (%)
                    </td>
                  </tr>
                  <tr>
                    <td>ROE</td>
                    <td>22.23</td>
                    <td>22.61</td>
                    <td>22.79</td>
                    <td>23.40</td>
                  </tr>
                  <tr>
                    <td>ROA</td>
                    <td>4.66</td>
                    <td>4.87</td>
                    <td>4.98</td>
                    <td>4.97</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-2">Due to Depositors (Rs. Bn)</h3>
              <Chart
                options={dueToDepositorsOptions}
                series={dueToDepositorsSeries}
                type="bar"
                height={300}
              />
            </div>
            <div>
              <div className="bg-[#0288d1] p-4 rounded-lg mb-4">
                <h3 className="font-bold">Total Assets</h3>
                <p className="text-2xl">Rs. 202 Bn</p>
              </div>
              <div className="bg-[#4caf50] p-4 rounded-lg mb-4">
                <h3 className="font-bold">Total Equity</h3>
                <p className="text-2xl">Rs. 44 Bn</p>
              </div>
              <div className="bg-[#03a9f4] p-4 rounded-lg">
                <h3 className="font-bold">Liquid Assets</h3>
                <p className="text-2xl">Rs. 26 Bn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
