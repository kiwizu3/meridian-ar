'use client';

import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function FinancialCapitalPart3() {
  const capitalAdequacyChartOptions = {
    chart: { type: 'bar' as const, stacked: true },
    colors: ['#1e88e5', '#43a047'],
    xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
    yaxis: { title: { text: 'Capital Adequacy Ratio %' } },
  };

  const capitalAdequacySeries = [
    { name: 'Tier I', data: [17, 19, 22, 24, 25] },
    { name: 'Tier II', data: [5, 6, 7, 7, 7] },
  ];

  const nplChartOptions = {
    chart: { type: 'line' as const },
    colors: ['#1e88e5', '#43a047'],
    xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
    yaxis: { title: { text: 'Gross and Net NPL Ratio %' } },
  };

  const nplSeries = [
    { name: 'Gross', data: [3.9, 5.4, 4.5, 3.54, 3.54] },
    { name: 'Net', data: [0.68, 1.47, 0.65, 0.79, 0.79] },
  ];

  const costIncomeChartOptions = {
    chart: { type: 'bar' as const },
    colors: ['#1e88e5', '#43a047'],
    xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
    yaxis: [
      { title: { text: 'Rs. Bn' }, max: 40 },
      { title: { text: 'Cost to Income Ratio %' }, opposite: true, max: 40 },
    ],
  };

  const costIncomeSeries = [
    { name: 'Total Operating Income', data: [22, 24, 28, 32, 36], type: 'bar' },
    { name: 'Total Operating Expense', data: [8, 9, 10, 11, 12], type: 'bar' },
    {
      name: 'Cost to Income Ratio',
      data: [31.24, 30.98, 29.39, 27.42, 26.13],
      type: 'line',
    },
  ];
  return (
    <div>
      <div className="bg-white p-8 text-black">
        <div className="w-full">
          <div className="grid grid-cols-3 gap-4">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="bg-[#a9cce3] p-4 rounded-lg">
                <h3 className="font-bold mb-2">Net Interest Income</h3>
                <p className="text-sm">
                  Lending base, NPL ratio, Interest spreads, Interest
                  volatility, Market interest rates, Excess liquidity
                </p>
              </div>
              <div className="bg-[#a9cce3] p-4 rounded-lg">
                <h3 className="font-bold mb-2">Non-Interest Income</h3>
                <p className="text-sm">
                  Capital market activities, Market volatility, Other income
                  recognised on credit granting, and non financial services
                </p>
              </div>
              <div className="bg-[#a9cce3] p-4 rounded-lg">
                <h3 className="font-bold mb-2">Impairment Charges</h3>
                <p className="text-sm">
                  Customer repayment behaviour, Loss given default rate,
                  Probability of default rate, Macroeconomic factors, Exposure
                  at default
                </p>
              </div>
              <div className="bg-[#a9cce3] p-4 rounded-lg">
                <h3 className="font-bold mb-2">Operating Expenses</h3>
                <p className="text-sm">
                  Inflation, Headcount, Investments in branches and IT
                  infrastructure, General costs to operate, Marketing and
                  promotional activities, Staff benefits
                </p>
              </div>
              <div className="bg-[#4a69bd] p-4 rounded-lg text-white">
                <h3 className="font-bold mb-2">Taxes</h3>
                <p className="text-sm">
                  Level of operational profitability, Government policies,
                  Applicable tax rates, Allowable credits, Debits, exempt income
                  and qualifying payments
                </p>
              </div>
            </div>

            {/* Middle Column */}
            <div className="flex flex-col justify-between items-center">
              <div className="bg-[#4a69bd] p-4 rounded-lg text-white w-full mb-4">
                <h3 className="font-bold mb-2 text-center">INCOME STATEMENT</h3>
                <p className="text-sm">
                  Income statement drivers are the essential metrics that
                  significantly impact the Company&apos;s profitability. These
                  drivers are key in allowing the Company to fine tune the
                  performance by influencing the income and expenses. These
                  drivers are the key factors that influence the final result
                  which is the Company&apos;s overall profitability that are
                  broadly categorised into five categories.
                </p>
              </div>
              <div className="w-0 h-0 border-l-[50px] border-l-transparent border-b-[100px] border-b-[#4a69bd] border-r-[50px] border-r-transparent"></div>
              <div className="bg-[#4a69bd] p-4 rounded-lg text-white w-full">
                <h3 className="font-bold mb-2 text-center">VALUE DRIVERS</h3>
              </div>
              <div className="w-0 h-0 border-l-[50px] border-l-transparent border-t-[100px] border-t-[#45aaf2] border-r-[50px] border-r-transparent"></div>
              <div className="bg-[#45aaf2] p-4 rounded-lg text-white w-full mt-4">
                <h3 className="font-bold mb-2 text-center">
                  STATEMENT OF FINANCIAL POSITION
                </h3>
                <p className="text-sm">
                  Value drivers of the financial position are the underlying
                  factors that cause changes in the Company&apos;s assets,
                  liabilities, and equity. They provide insight into the
                  Company&apos;s financial health and position. The key value
                  drivers that drive the statement of financial position are
                  described in categories.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="bg-[#45aaf2] p-4 rounded-lg">
                <h3 className="font-bold mb-2">Cash and Cash Equivalents</h3>
                <p className="text-sm">
                  Liquidity requirements, (Company and CBSL) Credit granting,
                  Recoveries and Funding from deposits and other sources
                </p>
              </div>
              <div className="bg-[#45aaf2] p-4 rounded-lg">
                <h3 className="font-bold mb-2">Loans and Receivables</h3>
                <p className="text-sm">
                  Market interest rates, Company&apos;s risk appetite, Market
                  competition, Lending volumes, Pre-terminations and repayments
                </p>
              </div>
              <div className="bg-[#45aaf2] p-4 rounded-lg">
                <h3 className="font-bold mb-2">Other Financial Assets</h3>
                <p className="text-sm">
                  Liquidity requirements, Market interest rates, Excess funds
                </p>
              </div>
              <div className="bg-[#45aaf2] p-4 rounded-lg">
                <h3 className="font-bold mb-2">Due to Banks</h3>
                <p className="text-sm">
                  Market growth, Funding requirements, Market interest rates,
                  Repayments, Gearing ratio
                </p>
              </div>
              <div className="bg-[#45aaf2] p-4 rounded-lg">
                <h3 className="font-bold mb-2">
                  Debt Instruments Issued and Other Borrowed Funds
                </h3>
                <p className="text-sm">
                  Funding requirements, Market interest rates, Company
                  stability, Total capital adequacy requirements
                </p>
              </div>
              <div className="bg-[#45aaf2] p-4 rounded-lg">
                <h3 className="font-bold mb-2">Due to Depositors</h3>
                <p className="text-sm">
                  Funding requirements, Market growth, Market interest rates,
                  Deposit renewal ratio
                </p>
              </div>
              <div className="bg-[#45aaf2] p-4 rounded-lg">
                <h3 className="font-bold mb-2">Equity</h3>
                <p className="text-sm">
                  Profitability, Dividend requirement on reserves, Dividend
                  payout, Capital adequacy requirement, and Shareholder
                  expectations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-black p-8">
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4 text-[#f39c12]">
            CAMELS ANALYSIS
          </h2>
          <p className="mb-8 text-sm">
            To enhance the evaluation of the Company&apos;s Key Performance
            Indicators (KPIs), a new dimension – Sensitivity – has been
            integrated into the existing CAMEL rating system. While the
            traditional CAMEL framework, which analyses Capital Adequacy, Asset
            Quality, Management Efficiency, Earnings and Liquidity provides
            insights into the Company&apos;s financial strength and sustainable
            returns, it does not fully capture the impact of market
            fluctuations.
          </p>

          <div className="flex justify-between mb-8">
            <div className="w-1/3 bg-[#2196f3] text-white p-4 rounded-lg">
              <h3 className="font-bold mb-2">C</h3>
              <p className="text-lg">CAPITAL ADEQUACY</p>
            </div>
            <div className="w-1/3 bg-[#00bcd4] text-white p-4 rounded-lg mx-4">
              <h3 className="font-bold mb-2">A</h3>
              <p className="text-lg">ASSET QUALITY</p>
            </div>
            <div className="w-1/3 bg-[#4caf50] text-white p-4 rounded-lg">
              <h3 className="font-bold mb-2">M</h3>
              <p className="text-lg">MANAGEMENT EFFICIENCY</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div>
              <div className="bg-[#2196f3] text-white p-4 rounded-lg mb-4">
                <h4 className="font-bold">CAR TIER I</h4>
                <p className="text-2xl font-bold">31.45%</p>
                <p className="text-sm">2022/23: 30.50%</p>
              </div>
              <div className="bg-[#2196f3] text-white p-4 rounded-lg">
                <h4 className="font-bold">Non-Performing Loans to Equity</h4>
                <p className="text-2xl font-bold">14.52%</p>
                <p className="text-sm">2022/23: 19.18%</p>
              </div>
            </div>
            <div>
              <div className="bg-[#00bcd4] text-white p-4 rounded-lg mb-4">
                <h4 className="font-bold">Gross NPL</h4>
                <p className="text-2xl font-bold">3.54%</p>
                <p className="text-sm">2022/23: 4.49%</p>
              </div>
              <div className="bg-[#00bcd4] text-white p-4 rounded-lg">
                <h4 className="font-bold">Provision Coverage Ratio</h4>
                <p className="text-2xl font-bold">122.42%</p>
                <p className="text-sm">2022/23: 114.40%</p>
              </div>
            </div>
            <div>
              <div className="bg-[#4caf50] text-white p-4 rounded-lg mb-4">
                <h4 className="font-bold">Cost to Income</h4>
                <p className="text-2xl font-bold">31.13%</p>
                <p className="text-sm">2022/23: 25.42%</p>
              </div>
              <div className="bg-[#4caf50] text-white p-4 rounded-lg">
                <h4 className="font-bold">
                  Impairment Charge to Total Operating Income
                </h4>
                <p className="text-2xl font-bold">1.34%</p>
                <p className="text-sm">2022/23: 3.86%</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div>
              <h4 className="font-bold mb-2">Capital Adequacy Ratio %</h4>
              <Chart
                options={capitalAdequacyChartOptions}
                series={capitalAdequacySeries}
                type="bar"
                height={300}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">Gross and Net NPL Ratio %</h4>
              <Chart
                options={nplChartOptions}
                series={nplSeries}
                type="line"
                height={300}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">Cost to Income Ratio</h4>
              <Chart
                options={costIncomeChartOptions}
                series={costIncomeSeries}
                type="line"
                height={300}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#2196f3] text-white p-4 rounded-lg">
              <h4 className="font-bold mb-2">Way Forward →</h4>
              <p>
                Strive to maintain a capital cushion of at least 2% on top of
                the regulatory capital ratio set by the CBSL.
              </p>
            </div>
            <div className="bg-[#00bcd4] text-white p-4 rounded-lg">
              <h4 className="font-bold mb-2">Way Forward →</h4>
              <p>To maintain net NPL Ratio at zero level.</p>
            </div>
            <div className="bg-[#4caf50] text-white p-4 rounded-lg">
              <h4 className="font-bold mb-2">Way Forward →</h4>
              <p>
                Maintain a lean cost structure with expenses consuming no more
                than 35% of revenue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
