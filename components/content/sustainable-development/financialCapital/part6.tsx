'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function FinancialCapitalPart6() {
  const netInterestIncomeChartOptions = {
    chart: {
      type: 'bar' as const,
    },
    colors: ['#4caf50', '#2196f3'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['2020', '2021', '2022', '2023', '2024'],
    },
    yaxis: {
      title: {
        text: 'Rs. Mn',
      },
    },
  };

  const netInterestIncomeSeries = [
    {
      name: 'Net Interest Income',
      data: [15545, 15935, 18664, 19028, 24487],
    },
  ];

  const productWiseChartOptions = {
    chart: {
      type: 'pie' as const,
    },
    colors: ['#4caf50', '#2196f3', '#ff9800', '#f44336'],
    labels: ['Vehicle Finance', 'Gold Loans', 'Mortgage Loans', 'Other'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  const productWiseSeries = [61, 23, 12, 4];

  const waterfallChartOptions = {
    chart: {
      type: 'bar' as const,
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
      },
    },
    colors: ['#00bcd4', '#4caf50', '#f44336', '#ff9800', '#9c27b0', '#2196f3'],
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        'Interest Income',
        'Net Interest Income',
        'Total Operating Income',
        'Overheads',
        'Tax on Financial Services',
        'Income Tax',
        'Profit After Tax',
      ],
    },
    yaxis: {
      title: {
        text: 'Rs. Bn',
      },
    },
  };

  const waterfallSeries = [
    {
      name: 'Value',
      data: [45.87, -21.38, 3.36, -8.67, -3.63, -5.62, 9.56],
    },
  ];

  return (
    <div>
      <div className="bg-white text-black p-8">
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4 text-[#00bcd4]">
            INCOME STATEMENT
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-sm mb-4">
                In FY 2023/24, the Company profit after tax surged to Rs. 9.56
                billion. This growth was fuelled by an interest income of Rs.
                45.87 billion and a non-interest income of Rs. 3.36 billion. The
                interest expense amounted to Rs. 21.38 billion whilst impairment
                charges amounted to Rs. 373 million and overhead expenses
                totalled Rs. 8.67 billion. The Company incurred a total taxation
                of Rs. 9.25 billion.
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2">
                    <Image
                      src="/images/sustainability/partnerships-goals-interest-icon.PNG"
                      alt="INCOME STATEMENT"
                      width={100}
                      height={100}
                      style={{
                        display: 'block',
                        margin: '0 auto',
                        width: '90px',
                        height: '90px',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                  <h3 className="font-bold">Interest Income</h3>
                  <p className="text-[#2196f3]">Rs. 45,866 Mn</p>
                </div>
                <div className="text-center">
                  <Image
                    src="/images/sustainability/partnerships-goals-impairment-icon.PNG"
                    alt="INCOME STATEMENT"
                    width={100}
                    height={100}
                    style={{
                      display: 'block',
                      margin: '0 auto',
                      width: '90px',
                      height: '90px',
                      objectFit: 'contain',
                    }}
                  />
                  <h3 className="font-bold">Impairment Charges</h3>
                  <p className="text-[#2196f3]">Rs. 373 Mn</p>
                </div>
                <div className="text-center">
                  <Image
                    src="/images/sustainability/partnerships-goals-taxes-icon.PNG"
                    alt="INCOME STATEMENT"
                    width={100}
                    height={100}
                    style={{
                      display: 'block',
                      margin: '0 auto',
                      width: '90px',
                      height: '90px',
                      objectFit: 'contain',
                    }}
                  />
                  <h3 className="font-bold">Taxes Paid</h3>
                  <p className="text-[#2196f3]">Rs. 11,411 Mn</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-2">Analysis of Income Statement</h3>
              <Chart
                options={waterfallChartOptions}
                series={waterfallSeries}
                type="bar"
                height={300}
              />
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-[#2196f3]">
              NET INTEREST INCOME
            </h2>
            <p className="text-sm mb-4">
              Net interest income recorded a growth of 28.69% Year on Year (YoY)
              to Rs. 24.49 billion in Financial Year (FY) 2023/24, led by an
              increase in interest income by 15.70% YoY and a slower increase in
              interest expense of 3.71%.
            </p>
            <p className="text-sm mb-4">
              The proactive repricing of interest sensitive assets and
              liabilities, combined with a growing lending base led to an
              increase in interest income during the year. Furthermore, the high
              interest yields on investments secured early in the financial year
              led to a substantial increase in investment income compared to the
              previous year.
            </p>
            <p className="text-sm mb-4">
              Vehicle financing spearheaded the growth of the Company&apos;s
              lending portfolio in FY 2023/24, supplemented by a moderate
              increase in gold loans.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-2">Net Interest Income</h3>
                <Chart
                  options={netInterestIncomeChartOptions}
                  series={netInterestIncomeSeries}
                  type="bar"
                  height={300}
                />
              </div>
              <div>
                <h3 className="font-bold mb-2">Product wise Interest Income</h3>
                <Chart
                  options={productWiseChartOptions}
                  series={productWiseSeries}
                  type="pie"
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
