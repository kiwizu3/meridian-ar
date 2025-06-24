'use client';

import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function FinancialCapitalPart11() {
  const fundingMixChartOptions = {
    chart: { type: 'bar' as const, stacked: true },
    colors: ['#1e88e5', '#4caf50', '#ffc107'],
    plotOptions: { bar: { horizontal: true } },
    xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  };

  const fundingMixSeries = [
    { name: 'Debt', data: [19, 14, 22, 18, 14] },
    { name: 'Deposits', data: [62, 61, 54, 62, 61] },
    { name: 'Equity', data: [16, 20, 21, 21, 22] },
  ];

  const dueToBanksChartOptions = {
    chart: { type: 'bar' as const, stacked: true },
    colors: ['#1e88e5', '#4caf50'],
    plotOptions: { bar: { horizontal: true } },
    xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  };

  const dueToBanksSeries = [
    { name: 'Bank loans at Fixed rate', data: [60, 40, 10, 15, 15] },
    { name: 'Bank loans at Variable rate', data: [40, 60, 90, 85, 85] },
  ];

  const numberOfDepositorsChartOptions = {
    chart: { type: 'bar' as const },
    colors: ['#1e88e5'],
    plotOptions: { bar: { horizontal: false } },
    xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  };

  const numberOfDepositorsSeries = [
    { name: 'Number of Depositors', data: [46545, 49120, 53745, 56601, 61522] },
  ];

  const debtInstrumentsChartOptions = {
    chart: { type: 'bar' as const, stacked: true },
    colors: ['#1e88e5', '#4caf50'],
    plotOptions: { bar: { horizontal: false } },
    xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  };

  const debtInstrumentsSeries = [
    {
      name: 'Borrowings from International Financial Institutions',
      data: [3.1, 3.1, 3.4, 1.8, 2.1],
    },
    { name: 'Securitised Borrowings', data: [0, 0, 5.2, 2.1, 3.4] },
  ];
  const cashFlowChartOptions = {
    chart: { type: 'bar' as const },
    colors: ['#1e88e5', '#4caf50', '#ffc107'],
    plotOptions: { bar: { horizontal: false } },
    xaxis: {
      categories: [
        'Net Cash from Operating Activities',
        'Net Cash from Investing Activities',
        'Net Cash from Financing Activities',
      ],
    },
  };

  const cashFlowSeries = [{ name: 'Cash Flow', data: [9.13, -0.81, -3.54] }];

  return (
    <div>
      <div className="bg-white p-8 text-black">
        <div className="w-full">
          <section className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#03a9f4]">
                LIABILITY OVERVIEW
              </h2>
              <p className="text-sm mb-4">
                Total liabilities of the Company increased by 9.93% YoY to Rs.
                158.55 billion as at 31 March 2024. This primarily comprises
                dues to banks, depositors, debt instruments issued, other
                borrowed funds and other financial liabilities. These items
                collectively represent 96.98% of total liabilities as of 31
                March 2024.
              </p>
              <h3 className="font-bold mb-2">Funding Mix</h3>
              <Chart
                options={fundingMixChartOptions}
                series={fundingMixSeries}
                type="bar"
                height={200}
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#03a9f4]">EQUITY</h2>
              <p className="text-sm mb-4">
                Equity of the Company stood at Rs. 43.63 billion as of 31 March
                2024 reflecting a 14.46% YoY increase from the previous year
                which was Rs. 38.12 billion. The growth in PLC&apos;s Equity is
                primarily attributed to retained earnings from increased profits
                generated during the financial year. The increase in
                shareholders&apos; equity reflects the Company&apos;s improved
                financial position, demonstrating its ability to generate and
                retain earnings while maintaining a consistent dividend payout
                of 17% of profit.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#03a9f4]">
                DUE TO BANKS
              </h2>
              <p className="text-sm mb-4">
                As of 31 March 2024, funds obtained from banks reached Rs. 21.70
                billion representing a 12.04% YoY increase. To meet growing
                capital demands and strengthen its maturity profile, the company
                proactively increased its debt funding from banks towards the
                end of the financial year.
              </p>
              <Chart
                options={dueToBanksChartOptions}
                series={dueToBanksSeries}
                type="bar"
                height={200}
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#03a9f4]">
                DUE TO DEPOSITORS
              </h2>
              <p className="text-sm mb-4">
                The total amount of customer deposits held by the Company
                amounted Rs. 122.80 billion as of 31 March 2024 representing an
                increase of Rs. 8.79 billion compared to the previous financial
                year. The growth in customer deposits was largely driven by a
                substantial increase of 6.81% in fixed deposits, which indicates
                a strong level of customer confidence and loyalty towards the
                Company. Additionally, the Company successfully attracted new
                depositors while maintaining adequate levels of funding to
                support its business operations. The fixed deposit renewal ratio
                remained above 80%, which is a testament to the Company&apos;s
                ability to retain its existing customers and reflects their
                trust and satisfaction over the years.
              </p>
              <h3 className="font-bold mb-2">Number of Depositors</h3>
              <Chart
                options={numberOfDepositorsChartOptions}
                series={numberOfDepositorsSeries}
                type="bar"
                height={200}
              />
            </div>
          </section>

          <section className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#03a9f4]">
                DEBT INSTRUMENTS ISSUED AND OTHER BORROWED FUNDS
              </h2>
              <p className="text-sm mb-4">
                The Company&apos;s debt instruments issued and other borrowed
                funds increased by 41.46% YoY to Rs. 5.49 billion as of 31 March
                2024. This growth primarily stems from securitised borrowings.
                The loan from responsibility Global Micro and SME Finance Fund
                was fully settled during FY 2023/24 with the Company raising Rs.
                1.54 billion from FMO as Rs. 1.54 billion. Securitised
                borrowings from banks were secured towards the end of the fiscal
                year to address the increasing credit demand while strengthening
                the company&apos;s maturity profile.
              </p>
              <Chart
                options={debtInstrumentsChartOptions}
                series={debtInstrumentsSeries}
                type="bar"
                height={200}
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#03a9f4]">
                CASH FLOW ANALYSIS
              </h2>
              <p className="text-sm mb-4">
                Facing challenging market conditions, the Company strategically
                managed its liquidity and funding to meet ongoing business
                requirements. Cash and cash equivalents increased from Rs. 4.03
                billion in March 2023 to Rs. 8.28 billion in March 2024.
              </p>
              <p className="text-sm mb-4">
                The Company generated Rs. 9.08 billion from operating activities
                during the financial year and met its funding requirements
                through customer deposits, equity, and bank borrowing.
              </p>
              <p className="text-sm mb-4">
                The Company invested Rs. 813 million in assets, aiming to
                support future cash inflows. Financing activities resulted in a
                net outflow of Rs. 594 million, including Rs. 3.99 billion
                dividend payout to shareholders, demonstrating the
                Company&apos;s commitment to profit distribution.
              </p>
              <Chart
                options={cashFlowChartOptions}
                series={cashFlowSeries}
                type="bar"
                height={200}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
