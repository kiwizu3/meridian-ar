'use client';

import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function FinancialCapitalPart10() {
  const totalAssetsChartOptions = {
    chart: { type: 'bar' as const, stacked: true },
    colors: ['#4caf50', '#2196f3'],
    plotOptions: { bar: { horizontal: false, columnWidth: '55%' } },
    xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
    yaxis: { title: { text: 'Rs. Bn' } },
  };

  const totalAssetsSeries = [
    { name: 'Other Assets', data: [28, 26, 30, 37, 41] },
    { name: 'Interest Earning Assets', data: [116, 114, 134, 145, 161] },
  ];

  const lendingProductMixChartOptions = {
    chart: { type: 'bar' as const, stacked: true },
    colors: ['#1e88e5', '#4caf50', '#ffc107'],
    plotOptions: { bar: { horizontal: true } },
    xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  };

  const lendingProductMixSeries = [
    { name: 'Vehicle Financing', data: [70, 62, 60, 58, 61] },
    { name: 'Gold loan', data: [12, 19, 21, 23, 23] },
    { name: 'Other', data: [18, 19, 19, 19, 16] },
  ];

  const cashEquivalentsChartOptions = {
    chart: { type: 'bar' as const, stacked: true },
    colors: ['#1e88e5', '#4caf50', '#ffc107', '#f44336'],
    plotOptions: { bar: { horizontal: true } },
    xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  };

  const cashEquivalentsSeries = [
    { name: 'Notes and Coins Held', data: [0.338, 0.366, 0.293, 0.354, 0.531] },
    { name: 'Balances with Banks', data: [3.82, 3.81, 4.15, 2.16, 5.77] },
    {
      name: 'Securities Bought Under Repurchase Agreements',
      data: [2.0, 2.0, 10.0, 2.0, 3.0],
    },
    { name: 'Investment in Treasury Bills', data: [0, 0, 0.016, 0, 0.013] },
  ];

  const sectorWiseAnalysisChartOptions = {
    chart: { type: 'bar' as const },
    colors: ['#1e88e5', '#4caf50'],
    plotOptions: { bar: { horizontal: true } },
    xaxis: {
      categories: [
        'Consumption',
        'Agriculture, Forestry & Fishing',
        'Wholesale & Retail Trade',
        'Manufacturing',
        'Arts, Entertainment & Recreation',
        'Health Care, Social Services & Support',
        'Transportation & Storage',
        'Professional, Scientific & Technical Activities',
        'Construction & Infrastructure',
        'Financial Services',
        'Education',
        'Tourism',
        'Information Technology and Communication',
      ],
    },
  };

  const sectorWiseAnalysisSeries = [
    { name: '2023', data: [30, 23, 22, 18, 13, 11, 8, 7, 6, 5, 4, 3, 2] },
    { name: '2024', data: [32, 25, 24, 20, 14, 12, 9, 8, 7, 6, 5, 4, 3] },
  ];

  const loansReceivablesChartOptions = {
    chart: { type: 'pie' as const },
    colors: ['#1e88e5', '#4caf50', '#ffc107'],
    labels: ['Stage 01', 'Stage 02', 'Stage 03'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: { width: 200 },
          legend: { position: 'bottom' },
        },
      },
    ],
  };

  const loansReceivablesSeries = [83.9, 14.1, 2];
  return (
    <div>
      <div className="bg-white p-8 text-black">
        <div className="w-full">
          <section className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#03a9f4]">
                TOTAL ASSETS OVERVIEW
              </h2>
              <p className="text-sm mb-4">
                Total assets reached Rs. 202 billion as of 31 March 2024, a
                10.87% increase YoY. Interest earning assets, including cash and
                cash equivalents, loans and receivables and other financial
                assets, comprised 92.67% of total assets, up slightly from
                92.19% in the previous year.
              </p>
              <Chart
                options={totalAssetsChartOptions}
                series={totalAssetsSeries}
                type="bar"
                height={300}
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#03a9f4]">
                LOANS AND RECEIVABLES
              </h2>
              <p className="text-sm mb-4">
                The Company&apos;s lending base stood at Rs.161.29 billion as of
                31 March 2024, compared to Rs. 145.19 billion as of 31 March
                2023, reflecting an 11.09% YoY increase. This growth was
                primarily driven by a 14.74% surge in vehicle financing, which
                reached Rs. 78.58 billion. Continued growth in gold loans, which
                increased by 9.86% to reach Rs. 37.11 billion also contributed
                to the lending portfolio&apos;s expansion.
              </p>
              <p className="text-sm mb-4">
                Our well diversified lending portfolio mitigates sector specific
                risks by structuring offering schemes across multiple sectors.
                This diversification helps to offset potential losses in one
                sector with the performance of others, enhancing the
                Company&apos;s overall resilience.
              </p>
              <h3 className="font-bold mb-2">Lending Product Mix</h3>
              <Chart
                options={lendingProductMixChartOptions}
                series={lendingProductMixSeries}
                type="bar"
                height={200}
              />
            </div>
          </section>

          <section className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#03a9f4]">
                CASH AND CASH EQUIVALENTS
              </h2>
              <p className="text-sm mb-4">
                Cash and cash equivalents increased by 105.89% YoY to Rs. 9.31
                billion as of 31 March 2024 compared to Rs. 4.52 billion
                recorded in the previous year. This surge was largely driven by
                short-term investments in banks and other institutions.
              </p>
              <Chart
                options={cashEquivalentsChartOptions}
                series={cashEquivalentsSeries}
                type="bar"
                height={200}
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#03a9f4]">
                Sector wise Analysis
              </h2>
              <Chart
                options={sectorWiseAnalysisChartOptions}
                series={sectorWiseAnalysisSeries}
                type="bar"
                height={400}
              />
            </div>
          </section>

          <section className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#03a9f4]">
                CREDIT QUALITY
              </h2>
              <p className="text-sm mb-4">
                The Company demonstrated exceptional credit quality in FY
                2023/24, achieving a gross NPL ratio of 3.54% and a negative net
                NPL ratio of -0.79%. The low gross NPL ratio highlights
                effective credit risk management, while the negative net NPL
                ratio signifies that provisions for non-performing loans surpass
                the actual amount. These results, achieved even under the
                stricter 90 day past due NPL classification criteria implemented
                from 1 April 2023, showcase the Company&apos;s robust credit
                management practices and superior asset quality compared to
                industry peers.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">
                Loans and Receivables (Stage wise Analysis)
              </h3>
              <Chart
                options={loansReceivablesChartOptions}
                series={loansReceivablesSeries}
                type="pie"
                height={300}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
