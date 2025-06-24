'use client';
import Image from 'next/image';

import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const profitChartOptions = {
  chart: { type: 'bar' as const },
  xaxis: { categories: ['2023', '2024'] },
  colors: ['#4CAF50', '#2196F3'],
};

const profitChartSeries = [
  { name: 'Profit After Tax', data: [9560, 18543] },
  { name: 'Profit Before Taxes', data: [13200, 19800] },
];

const capitalAdequacyChartOptions = {
  chart: { type: 'bar' as const, stacked: true },
  xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  colors: ['#4CAF50', '#2196F3'],
  plotOptions: { bar: { horizontal: false } },
};

const capitalAdequacyChartSeries = [
  { name: 'Tier I', data: [17.5, 20, 24, 28, 31.45] },
  { name: 'Tier II', data: [2.5, 3, 3.5, 4, 0.74] },
];

const assetQualityChartOptions = {
  chart: { type: 'line' as const },
  xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  colors: ['#4CAF50', '#2196F3'],
};

const assetQualityChartSeries = [
  { name: 'Gross', data: [5.34, 5.12, 4.64, 4.04, 3.54] },
  { name: 'Net', data: [1.02, 0.18, -0.07, -0.67, -0.79] },
];

const costToIncomeChartOptions = {
  chart: { type: 'bar' as const, stacked: true },
  xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  colors: ['#4CAF50', '#2196F3'],
  plotOptions: { bar: { horizontal: false } },
};

const costToIncomeChartSeries = [
  { name: 'Total Operating Income', data: [6, 8, 10, 12, 13] },
  { name: 'Total Operating Expenses', data: [18, 22, 24, 26, 32] },
];

const returnOnEquityChartOptions = {
  chart: { type: 'bar' as const },
  xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  colors: ['#8E44AD'],
  plotOptions: { bar: { horizontal: false } },
};

const returnOnEquityChartSeries = [
  { name: 'Return on Equity', data: [15.2, 25.5, 27.8, 23.4, 23.4] },
];

const liquidAssetsRatioChartOptions = {
  chart: { type: 'bar' as const },
  xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  colors: ['#F39C12'],
  plotOptions: { bar: { horizontal: false } },
};

const liquidAssetsRatioChartSeries = [
  { name: 'Liquid Assets Ratio', data: [14.5, 16.8, 18.2, 18.8, 21.02] },
];

const sensitivityChartOptions = {
  chart: { type: 'bar' as const, stacked: true },
  xaxis: { categories: ['Sensitivity of PAT'] },
  colors: ['#2980B9', '#27AE60', '#C0392B'],
  plotOptions: { bar: { horizontal: true } },
};

const sensitivityChartSeries = [
  { name: 'Interest Rate', data: [81.62] },
  { name: 'Cost to Income Ratio', data: [141.82] },
  { name: 'Income Tax Rate', data: [141.08] },
];

const incomeStatementChartOptions = {
  chart: { type: 'bar' as const, stacked: true },
  plotOptions: { bar: { horizontal: false } },
  xaxis: { categories: ['Income Statement'] },
  colors: [
    '#1f77b4',
    '#ff7f0e',
    '#2ca02c',
    '#d62728',
    '#9467bd',
    '#8c564b',
    '#e377c2',
    '#7f7f7f',
  ],
};

const incomeStatementChartSeries = [
  { name: 'Interest Income', data: [45.87] },
  { name: 'Non Interest Income', data: [3.36] },
  { name: 'Interest Expenses', data: [21.38] },
  { name: 'Impairment Charges', data: [0.373] },
  { name: 'Operating Expenses', data: [8.67] },
  { name: 'Tax on Financial Services', data: [3.628] },
  { name: 'Income Tax Expense', data: [5.616] },
  { name: 'Profit After Tax', data: [9.56] },
];

const netInterestIncomeChartOptions = {
  chart: { type: 'bar' as const },
  plotOptions: { bar: { horizontal: false } },
  xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  colors: ['#1f77b4'],
};

const netInterestIncomeChartSeries = [
  { name: 'Net Interest Income', data: [15545, 15935, 18664, 19028, 24487] },
];

const productWiseInterestIncomeChartOptions = {
  chart: { type: 'pie' as const },
  labels: ['Vehicle Finance', 'Mortgage Loans', 'Gold Loans', 'Others'],
  colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728'],
};

const productWiseInterestIncomeChartSeries = [45, 16, 29, 10];

const feeAndCommissionChartOptions = {
  chart: { type: 'bar' as const, stacked: true },
  plotOptions: { bar: { horizontal: true } },
  xaxis: { categories: ['2024', '2023', '2022', '2021', '2020'] },
  colors: ['#1f77b4', '#ff7f0e'],
};

const feeAndCommissionChartSeries = [
  {
    name: 'Credit Related Fees and Commissions',
    data: [1847, 1671, 1624, 1343, 1081],
  },
  { name: 'Service Charges', data: [1517, 1442, 1025, 865, 982] },
];

const impairmentChargesChartOptions = {
  chart: { type: 'bar' as const },
  plotOptions: { bar: { horizontal: false } },
  xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  colors: ['#2ca02c'],
};

const impairmentChargesChartSeries = [
  { name: 'Impairment Charges', data: [1831, 1692, 1026, 546, 373] },
];

const operatingExpensesChartOptions = {
  chart: { type: 'bar' as const, stacked: true },
  plotOptions: { bar: { horizontal: false } },
  xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  colors: ['#1f77b4', '#ff7f0e', '#2ca02c'],
};

const operatingExpensesChartSeries = [
  { name: 'Personnel Expenses', data: [3248, 3545, 3822, 4448, 5135] },
  { name: 'Depreciation and Amortisation', data: [728, 788, 820, 853, 938] },
  { name: 'Other Operating Expenses', data: [1912, 1243, 1598, 1877, 2597] },
];

const taxesChartOptions = {
  chart: { type: 'bar' as const, stacked: true },
  plotOptions: { bar: { horizontal: false } },
  xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  colors: ['#1f77b4', '#ff7f0e', '#2ca02c'],
};

const taxesChartSeries = [
  { name: 'Income Tax', data: [2423, 2503, 3248, 3287, 5616] },
  { name: 'Tax on Financial Services', data: [1570, 1669, 2137, 2670, 3628] },
  { name: 'Other Tax', data: [0, 0, 0, 0, 167] },
];

const profitabilityChartOptions = {
  chart: { type: 'line' as const },
  xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  yaxis: { title: { text: 'Rs. Mn' } },
  colors: ['#1f77b4', '#ff7f0e'],
};

const profitabilityChartSeries = [
  { name: 'Profit Before Taxes', data: [7610, 9306, 11910, 11747, 15180] },
  { name: 'Profit After Tax', data: [5187, 6803, 8662, 8460, 9564] },
];

const totalAssetsChartOptions = {
  chart: { type: 'bar' as const },
  xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  colors: ['#1f77b4'],
};

const totalAssetsChartSeries = [
  { name: 'Total Assets', data: [143.96, 140.58, 164.37, 182.35, 202.18] },
];

const cashEquivalentsChartOptions = {
  chart: { type: 'bar' as const, stacked: true },
  xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd'],
};

const cashEquivalentsChartSeries = [
  { name: 'Notes and Coins Held', data: [0.44, 0.49, 0.56, 0.71, 0.97] },
  { name: 'Balances with Banks', data: [1.4, 1.38, 5.78, 2.14, 6.0] },
  { name: 'Balances with Central Bank', data: [0.5, 0.49, 0.37, 0.91, 1.57] },
  { name: 'Repurchase Agreements', data: [3.82, 3.82, 7.75, 0.77, 0.77] },
  { name: 'Investment in Fixed Deposits', data: [0, 0, 0, 0, 0] },
];

const sectorWiseAnalysisChartOptions = {
  chart: { type: 'bar' as const, stacked: true },
  plotOptions: { bar: { horizontal: true } },
  xaxis: {
    categories: [
      'Agriculture, Forestry & Fishing',
      'Manufacturing',
      'Construction',
      'Infrastructure Development',
      'Wholesale and Retail Trade',
      'Transportation and Storage',
      'Information Technology',
      'Financial Services',
      'Professional, Scientific and Technical Activities',
      'Arts, Entertainment and Recreation',
      'Education',
      'Healthcare, Social Services and Support Service',
      'Consumption',
    ],
  },
  colors: ['#1f77b4', '#ff7f0e'],
};

const sectorWiseAnalysisChartSeries = [
  {
    name: '2024',
    data: [
      31.56, 13.62, 11.41, 8.92, 8.21, 7.32, 4.93, 4.12, 3.21, 2.81, 2.11, 1.21,
      0.57,
    ],
  },
  {
    name: '2023',
    data: [
      29.86, 14.92, 10.71, 9.62, 7.81, 6.92, 5.33, 3.82, 3.51, 3.11, 2.41, 1.41,
      0.57,
    ],
  },
];

const creditQualityChartOptions = {
  chart: { type: 'pie' as const },
  labels: ['Stage 01', 'Stage 02', 'Stage 03'],
  colors: ['#1f77b4', '#ff7f0e', '#2ca02c'],
};

const creditQualityChartSeries = [84, 12, 4];

const fundingMixChartOptions = {
  chart: { type: 'bar' as const, stacked: true },
  xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  colors: ['#1f77b4', '#ff7f0e', '#2ca02c'],
  plotOptions: { bar: { horizontal: true } },
};

const fundingMixChartSeries = [
  { name: 'Bank', data: [24, 18, 23, 15, 16] },
  { name: 'Deposits', data: [60, 62, 54, 62, 61] },
  { name: 'Equity', data: [16, 20, 23, 23, 23] },
];

const dueToDepositorChartOptions = {
  chart: { type: 'bar' as const },
  xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  colors: ['#1f77b4'],
};

const dueToDepositorChartSeries = [
  {
    name: 'Number of Depositors',
    data: [149247, 169835, 211264, 223582, 229531],
  },
];

const dueToBanksChartOptions = {
  chart: { type: 'bar' as const, stacked: true },
  xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  colors: ['#1f77b4', '#ff7f0e'],
};

const dueToBanksChartSeries = [
  { name: 'Call Loans at Fixed rate', data: [1.5, 0, 5.5, 0, 1.2] },
  {
    name: 'Bank Loans at Variable rate',
    data: [21.271, 16.467, 21.359, 19.37, 20.502],
  },
];

const debtInstrumentsChartOptions = {
  chart: { type: 'bar' as const, stacked: true },
  xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  colors: ['#1f77b4', '#ff7f0e', '#2ca02c'],
};

const debtInstrumentsChartSeries = [
  {
    name: 'Debentures from International capital markets',
    data: [0, 0, 1.9, 1.9, 1.9],
  },
  { name: 'Securitised Borrowings', data: [3.111, 3.114, 6.665, 1.982, 3.591] },
  { name: 'Commercial Papers', data: [0, 0, 0, 0, 0] },
];

const cashFlowChartOptions = {
  chart: { type: 'bar' as const },
  xaxis: { categories: ['2023', '2024'] },
  colors: ['#1f77b4', '#ff7f0e', '#2ca02c'],
};

const cashFlowChartSeries = [
  { name: 'Net cash flows from operating activities', data: [4.956, 5.555] },
  {
    name: 'Net cash flows from/(used in) investing activities',
    data: [-1.096, -0.594],
  },
  {
    name: 'Net cash flows from/(used in) financing activities',
    data: [-13.795, -0.23],
  },
];

const profitAfterTaxChartOptions = {
  chart: { type: 'radialBar' as const },
  colors: ['#00E396', '#00D9E9', '#00A7E1', '#0077B5'],
  labels: ['Q4', 'Q3', 'Q2', 'Q1'],
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: { fontSize: '22px' },
        value: { fontSize: '16px' },
        total: {
          show: true,
          label: 'Total',
          formatter: function () {
            return '100%';
          },
        },
      },
    },
  },
};

const profitAfterTaxChartSeries = [100, 72, 46, 22];

const lbmmProfitChartOptions = {
  chart: { type: 'bar' as const },
  xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  colors: ['#4CAF50'],
  plotOptions: { bar: { horizontal: false } },
};

const lbmmProfitChartSeries = [
  {
    name: 'Profit/(Loss) for the Year',
    data: [23.81, 4.21, -31.84, 99.91, 47.73],
  },
];

const mfpProfitChartOptions = {
  chart: { type: 'bar' as const },
  xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  colors: ['#2196F3'],
  plotOptions: { bar: { horizontal: false } },
};

const mfpProfitChartSeries = [
  {
    name: 'Profit/(Loss) for the Year',
    data: [-141.74, -82.6, -199.5, -4.7, -19.6],
  },
];

const profitBeforeTaxesChartOptions = {
  chart: { type: 'bar' as const, stacked: true },
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
  colors: ['#0077B5', '#00A7E1', '#00D9E9'],
  plotOptions: { bar: { horizontal: false } },
};

const profitBeforeTaxesChartSeries = [
  { name: 'Profit After Tax', data: [1.8, 1.7, 1.8, 3.2, 2.0, 2.1, 2.4, 3.1] },
  {
    name: 'Income Tax Expense',
    data: [0.6, 0.8, 0.9, 1.4, 0.9, 1.0, 1.2, 1.5],
  },
  {
    name: 'Tax on Financial Services',
    data: [0.4, 0.5, 0.6, 0.8, 0.6, 0.7, 0.8, 0.9],
  },
];

const netInterestIncomeChartOptions2 = {
  chart: { type: 'area' as const },
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
  colors: ['#00E396', '#0077B5'],
  fill: { type: 'gradient' },
};

const netInterestIncomeChartSeries2 = [
  { name: 'Interest Income', data: [8, 9, 10, 11.5, 10.5, 11, 12, 13] },
  { name: 'Interest Expenses', data: [3.5, 4, 4.5, 5, 4.5, 5, 5.5, 6] },
];

const loansAndReceivablesChartOptions = {
  chart: { type: 'bar' as const },
  xaxis: { categories: ['Jun-23', 'Sep-23', 'Dec-23', 'Mar-24'] },
  colors: ['#0077B5'],
  plotOptions: { bar: { horizontal: false } },
};

const loansAndReceivablesChartSeries = [
  { name: 'Loans and Receivables', data: [143, 147, 152, 161] },
];

const dueToDepositorsChartOptions = {
  chart: { type: 'bar' as const },
  xaxis: { categories: ['Jun-23', 'Sep-23', 'Dec-23', 'Mar-24'] },
  colors: ['#00A7E1'],
  plotOptions: { bar: { horizontal: false } },
};

const dueToDepositorsChartSeries = [
  { name: 'Due to Depositors', data: [112, 115, 115, 122] },
];

export default function Financialcapital() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 h-[654px] overflow-auto flex flex-col gap-6 custom-scrollbar">
      <div>
        <div className="overflow-x-auto">
          <img
            className="max-w-none"
            src="/images/annual-report/finance_capital/financial-page-1-2.png"
          />
        </div>
        <div className="bg-[#8E4585] text-white p-4 rounded-lg mb-6 mt-4">
          <p className="">
            LB Finance PLC demonstrated resilience in the face of challenging
            macroeconomic conditions and widespread systemic shocks within the
            industry. Despite these headwinds, the Company achieved a robust
            profit after tax of Rs. 9.56 billion, highlighting its strong
            financial performance and unwavering commitment to its strategic
            objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white text-[#0A3D5F] p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-2">MANAGEMENT APPROACH</h2>
            <p className="">
              We have implemented policies and procedures to guide our financial
              management, encompassing key areas such as risk management,
              strategic planning, budgeting, revenue management, cost control,
              internal controls, treasury and liquidity management and asset
              quality management.
            </p>
          </div>
          <div className="bg-white text-[#0A3D5F] p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-2">
              COMPONENTS OF FINANCIAL CAPITAL
            </h2>
            <ul className="list-disc list-inside">
              <li>REVENUE MANAGEMENT</li>
              <li>STRATEGIC PLANNING AND BUDGETING</li>
              <li>COST CONTROL</li>
              <li>ASSET QUALITY MANAGEMENT</li>
              <li>TREASURY AND LIQUIDITY MANAGEMENT</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#fff] text-[#0A3D5F] p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">
            NURTURING FINANCIAL CAPITAL
          </h2>
          <ul className="list-disc list-inside">
            <li>Sound Risk Management</li>
            <li>Proactive Pricing Strategies</li>
            <li>Prudent Lending</li>
            <li>Efficient Liquidity Management</li>
            <li>Management Efficiencies</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-6 mt-4 bg-white">
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-green-200">
                <tr>
                  <th
                    rowSpan={2}
                    className="py-2 px-4 text-left text-sm font-semibold text-blue"
                  >
                    STRATEGIC PRIORITIES
                  </th>
                  <th
                    rowSpan={2}
                    className="py-2 px-4 text-left text-sm font-semibold text-blue"
                  >
                    PROGRESS IN FY 2023/24
                  </th>
                  <th
                    colSpan={3}
                    className="py-2 px-4 border-b-1 text-center text-sm font-semibold text-blue"
                  >
                    LOOKING AHEAD
                  </th>
                </tr>
                <tr className="bg-green-200">
                  <th className="py-2 px-4 text-left text-sm font-semibold text-blue">
                    Short-term
                  </th>
                  <th className="py-2 px-4 text-left text-sm font-semibold text-blue">
                    Medium-term
                  </th>
                  <th className="py-2 px-4 text-left text-sm font-semibold text-blue">
                    Long-term
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    Income Generation
                  </td>
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    Rs. 49 Bn.
                  </td>
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    Maintain at current levels
                  </td>
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    10% Growth
                  </td>
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    Increase to Rs. 100 Bn.
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    Profitability
                  </td>
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    Rs. 9.5 Bn.
                  </td>
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    Increase to Rs. 10 Bn.
                  </td>
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    20% Growth
                  </td>
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    Increase to Rs. 25 Bn.
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    Growth (Total Assets)
                  </td>
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    Rs. 202 Bn.
                  </td>
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    20% Growth
                  </td>
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    50% Growth
                  </td>
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    Increase to Rs. 500 Bn.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* <div className="bg-[#98FB98] text-[#0A3D5F] p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">STRATEGIC PRIORITIES</h2>
          <p className="font-semibold">PROGRESS IN FY 2023/24</p>
          <ul className="list-none ">
            <li>Income Generation: Rs. 49 Bn.</li>
            <li>Profitability: Rs. 9.5 Bn.</li>
            <li>Growth (Total Assets): Rs. 202 Bn.</li>
          </ul>
        </div>
        <div className="bg-[#87CEFA] text-[#0A3D5F] p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">LOOKING AHEAD</h2>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div>
              <p className="font-semibold">Short-term</p>
              <p>Maintain at current levels</p>
            </div>
            <div>
              <p className="font-semibold">Medium-term</p>
              <p>10% Growth</p>
            </div>
            <div>
              <p className="font-semibold">Long-term</p>
              <p>Increase to Rs. 100 Bn.</p>
            </div>
          </div>
        </div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white text-[#0A3D5F] p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-2">
              CONTRIBUTING TO OUR MISSION
            </h2>
            <p className="">
              To mobilise public funds by innovating investment products that
              will enhance the value delivered to our depositors.
            </p>
            <p className="mt-2">
              To engage in prudent lending to entrepreneurs to assist them in
              the creation of wealth.
            </p>
          </div>
          <div className="bg-white text-[#0A3D5F] p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-2">
              CONTRIBUTION TO OUR VALUES
            </h2>

            <div className="flex justify-around">
              <div className="text-center">
                <img src="/images/annual-report/excellence.png" />
                <p>Excellence</p>
              </div>
              <div className="text-center">
                <img src="/images/annual-report/innovation.png" />
                <p>Innovation</p>
              </div>
              <div className="text-center">
                <img src="/images/annual-report/quality.png" />
                <p>Quality</p>
              </div>
            </div>
          </div>

          <div className="bg-white text-[#0A3D5F] p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-2">STAKEHOLDERS IMPACTED</h2>
            <img src="/images/annual-report/stakeholders-impact.png" />
          </div>
          <div className="bg-white text-[#0A3D5F] p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-2">MATERIAL MATTERS</h2>
            <ul className="list-disc list-inside">
              <li>Sustainable Revenue Growth</li>
              <li>Delivering Appropriate Returns</li>
              <li>Business Continuity</li>
              <li>Risk and Capital Management</li>
            </ul>
          </div>
          <div className="bg-white text-[#0A3D5F] p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-2">COMMITMENTS TO UN SDGs</h2>
            <img className="mt-4" src="/images/annual-report/commitments.png" />
          </div>
        </div>

        <div className="bg-white text-[#0A3D5F] p-4 rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-2">Profitability</h2>
          <div>
            <img
              src="/images/charts/capitalReport/FinancialCapitalReports/profitability.PNG"
              alt="Profitability"
              className="mb-4 rounded-lg"
            />
          </div>
          {/* <Chart
          options={profitChartOptions}
          series={profitChartSeries}
          type="bar"
          height={300}
        /> */}
        </div>
        <div className="border-b-1">
          <h2 className="text-center py-3">CAPITAL TRADE-OFFS</h2>
        </div>

        <h3 className="text-center my-3">Profit Growth</h3>
        <div className="mb-6 ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b-2 border-gray-200">
            <div>
              <div className="bg-[#97C93C] text-[#0A3D5F] rounded-t-lg">
                <h3 className="font-bold py-2 text-white text-center">NC</h3>
                <div className="bg-[#E7F1D4] p-3 h-[168px]">
                  <p className="text-[#879092] text-center">
                    Investing in energy efficient equipment and expanding green
                    lending portfolio improves natural capital
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-[#594399] text-[#0A3D5F] rounded-t-lg">
                <h3 className="font-bold py-2 text-white text-center">HC</h3>
                <div className="bg-[#D1CBE4] p-3 h-[168px]">
                  <p className="text-[#879092] text-center">
                    Nurturing a motivated and skilled workforce through training
                    and providing attractive staff benefits build human capital
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-[#F36621] text-[#0A3D5F] rounded-t-lg">
                <h3 className="font-bold py-2 text-white text-center">MC</h3>
                <div className="bg-[#FDDCC5] p-3 h-[168px]">
                  <p className="text-[#879092] text-center">
                    Investing in the expansion of the branch network and
                    infrastructure contributes to manufactured capital
                  </p>
                </div>
              </div>
            </div>
            <div>
              {' '}
              <div className="bg-[#A77E36] text-[#0A3D5F] rounded-t-lg">
                <h3 className="font-bold py-2 text-white text-center">SC</h3>
                <div className="bg-[#E9DDC8] p-3 h-[168px]">
                  <p className="text-[#879092] text-center">
                    Investing in community development and payments to suppliers
                    supports social and relationship capital
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <img
            className="max-w-none md:max-w-full"
            src="/images/annual-report/values-drives.jpg"
          />
        </div>
        <div className="overflow-x-auto">
          <img
            className="max-w-none"
            src="/images/annual-report/finance_capital/financial-page-6-7.png"
          />
        </div>
        <div>
          <img
            className="w-full"
            src="/images/annual-report/finance_capital/financial-capital_page-0008.jpg"
          />
          <img
            className="w-full"
            src="/images/annual-report/finance_capital/financial-capital_page-0009.jpg"
          />
          <img
            className="w-full"
            src="/images/annual-report/finance_capital/financial-capital_page-0010.jpg"
          />
          <img
            className="w-full"
            src="/images/annual-report/finance_capital/financial-capital_page-0011.jpg"
          />
          <img
            className="w-full"
            src="/images/annual-report/finance_capital/financial-capital_page-0012.jpg"
          />
          <img
            className="w-full"
            src="/images/annual-report/finance_capital/financial-capital_page-0013.jpg"
          />
          <img
            className="w-full"
            src="/images/annual-report/finance_capital/financial-capital_page-0014.jpg"
          />
          <img
            src="/images/annual-report/finance_capital/dupont.jpg"
            className="w-full"
            alt="DUPONT ANALYSIS"
          />
          <img
            src="/images/annual-report/finance_capital/quarterly.jpg"
            className="w-full"
            alt="QUARTERLY FINANCIAL"
          />
          <img
            src="/images/annual-report/finance_capital/subsidiaries.jpg"
            className="w-full"
            alt="SUBSIDIARIES"
          />
        </div>
      </div>
    </div>
  );
}
