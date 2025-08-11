'use client';

import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function FinancialCapitalPart7() {
  const feeAndCommissionIncomeChartOptions = {
    chart: { type: 'bar' as const, stacked: true },
    colors: ['#1e88e5', '#4caf50'],
    plotOptions: { bar: { horizontal: true } },
    xaxis: { categories: ['2024', '2023', '2022', '2021', '2020'] },
  };

  const feeAndCommissionIncomeSeries = [
    {
      name: 'Credit Related Fees and Commissions',
      data: [2781, 2702, 1932, 1313, 1087],
    },
    { name: 'Service Charges', data: [540, 419, 616, 993, 954] },
  ];

  const impairmentChargesChartOptions = {
    chart: { type: 'bar' as const },
    colors: ['#4caf50', '#2196f3'],
    xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
    yaxis: { title: { text: 'Rs. Mn' } },
  };

  const impairmentChargesSeries = [
    { name: 'Impairment Charges', data: [1831, 1692, 1026, 546, 373] },
  ];

  const totalTaxPaidChartOptions = {
    chart: { type: 'bar' as const, stacked: true },
    colors: ['#1e88e5', '#4caf50', '#ffc107'],
    xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
    yaxis: { title: { text: 'Rs. Mn' } },
  };

  const totalTaxPaidSeries = [
    { name: 'Income Tax', data: [2423, 2503, 3248, 3287, 5616] },
    { name: 'Tax on Financial Services', data: [2279, 1669, 2137, 2670, 3628] },
    { name: 'Other Taxes', data: [1862, 1751, 1506, 1521, 2167] },
  ];

  const operatingExpensesChartOptions = {
    chart: { type: 'bar' as const, stacked: true },
    colors: ['#1e88e5', '#4caf50', '#ffc107'],
    xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
    yaxis: { title: { text: 'Rs. Mn' } },
  };

  const operatingExpensesSeries = [
    { name: 'Personnel Expenses', data: [3065, 3190, 3620, 3887, 4769] },
    {
      name: 'Depreciation of PPE & Amortisation of Intangible Assets',
      data: [654, 621, 623, 641, 483],
    },
    { name: 'Other Operating Expenses', data: [2169, 1871, 2239, 2688, 3418] },
  ];

  const profitabilityChartOptions = {
    chart: { type: 'bar' as const },
    colors: ['#1e88e5', '#4caf50'],
    xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
    yaxis: { title: { text: 'Rs. Mn' } },
  };

  const profitabilitySeries = [
    { name: 'Profit Before Taxes', data: [7610, 9306, 11910, 11747, 15180] },
    { name: 'Profit After Tax', data: [5187, 6803, 8662, 8460, 9564] },
  ];

  return (
    <div>
      <div className="bg-white p-8 text-black">
        <div className="w-full">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#2196f3]">
              NON-INTEREST INCOME
            </h2>
            <p className="text-sm mb-4">
              Non-interest income comprising credit-related fees and commissions
              increased by 34.76% YoY in alignment with business volume growth,
              particularly during the second half of the financial year. The
              positive trend was driven by improving overall economic
              conditions. Service charges on the other hand declined by 6.44%
              due to a decline in gold loan lending volumes compared to the
              previous year.
            </p>
            <div className="mb-4">
              <h3 className="font-bold mb-2">Fee and Commission Income</h3>
              <Chart
                options={feeAndCommissionIncomeChartOptions}
                series={feeAndCommissionIncomeSeries}
                type="bar"
                height={250}
              />
            </div>
          </section>

          <section className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#4caf50]">
                IMPAIRMENT CHARGES
              </h2>
              <p className="text-sm mb-4">
                We made significant strides in enhancing asset quality during FY
                2023/24. The Company allocated an impairment charge of Rs. 373
                million, reflecting a 31.61% decrease from the previous
                year&apos;s Rs. 546 million charge.
              </p>
              <p className="text-sm mb-4">
                This improvement is particularly evident in the impairment
                charge relating to loans and advances, which improved by 40.37%
                (Rs. 252 million) to reach Rs. 588.25 million. This positive
                development can be attributed to a strategic shift in the
                lending product mix, enhanced credit underwriting practices, and
                robust recovery efforts, all achieved despite a challenging
                macroeconomic environment.
              </p>
              <p className="text-sm mb-4">
                Our focused efforts to maintain a vigilant approach to credit
                monitoring throughout the year, diligently managing credit risk
                and prioritising asset quality improvement through efficient
                management and recovery of loans and receivables.
              </p>
              <Chart
                options={impairmentChargesChartOptions}
                series={impairmentChargesSeries}
                type="bar"
                height={250}
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#2196f3]">TAXES</h2>
              <p className="text-sm mb-4">
                The Company experienced a significant increase in its overall
                tax liability for the current financial year, rising 17.45% YoY
                to Rs. 11.41 billion. This increase was primarily driven by the
                full impact of tax reforms introduced in the second half of the
                previous financial year.
              </p>
              <Chart
                options={totalTaxPaidChartOptions}
                series={totalTaxPaidSeries}
                type="bar"
                height={250}
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#ffc107]">
              OPERATING EXPENSES
            </h2>
            <p className="text-sm mb-4">
              Operating expenses rose 20.78% to Rs. 8.67 billion in FY 2023/24,
              compared to Rs. 7.18 billion in the previous year. This increase
              was largely driven by the prevailing high inflationary economic
              environment.
            </p>
            <p className="text-sm mb-4">
              Key contributors to the rise in operating expenses include
              personnel expenses due to increases in staff training costs,
              inflationary salary adjustments, and staff incentives.
            </p>
            <p className="text-sm mb-4">
              Administrative expenses encompassing marketing, advertising and
              business promotional expenses also increased compared to the
              previous year.
            </p>
            <p className="text-sm mb-4">
              However, the cost to income ratio improved to 31.13% in FY 2023/24
              compared to 32.42% in the previous year.
            </p>
            <Chart
              options={operatingExpensesChartOptions}
              series={operatingExpensesSeries}
              type="bar"
              height={250}
            />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#4caf50]">
              PROFIT FOR THE YEAR
            </h2>
            <p className="text-sm mb-4">
              Despite challenging macroeconomic conditions, the Company&apos;s
              Profit Before Taxes increased by 30.45% YoY to Rs. 18.81 billion
              which is the highest ever reported in the history of LB Finance
              PLC. Timely repricing of interest-sensitive assets and liabilities
              supported this result.
            </p>
            <p className="text-sm mb-4">
              Profit After Tax for 2023/24 increased to Rs. 9.56 billion
              surpassing the previous year&apos;s Rs. 8.46 billion by 13.04%
              YoY.
            </p>
            <Chart
              options={profitabilityChartOptions}
              series={profitabilitySeries}
              type="bar"
              height={250}
            />
          </section>
        </div>
      </div>
    </div>
  );
}
