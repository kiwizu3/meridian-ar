'use client';

import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function FinancialCapitalPart4() {
  const returnOnEquityChartOptions = {
    chart: { type: 'bar' as const },
    colors: ['#4caf50', '#2196f3'],
    xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
    yaxis: { title: { text: 'Return on Equity %' }, max: 30 },
  };

  const returnOnEquitySeries = [
    { name: 'Return on Equity', data: [26, 28, 23, 24, 23.4] },
  ];

  const liquidAssetsChartOptions = {
    chart: { type: 'bar' as const },
    colors: ['#ff9800'],
    xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
    yaxis: { title: { text: 'Liquid Assets Ratio %' }, max: 25 },
  };

  const liquidAssetsSeries = [
    { name: 'Liquid Assets Ratio', data: [16, 18, 18, 20, 21.02] },
  ];

  const sensitivityChartOptions = {
    chart: { type: 'bar' as const, stacked: true },
    colors: ['#2196f3', '#f44336', '#ff9800', '#4caf50'],
    xaxis: {
      categories: [
        'Interest Rate Δ 1%',
        'Impairment Charge Δ 1%',
        'Cost to Income Ratio Δ 1%',
        'Income Tax Rate Δ 1%',
      ],
    },
    yaxis: { title: { text: 'Sensitivity of PAT Rs. Mn' } },
    plotOptions: { bar: { horizontal: true } },
  };

  const sensitivitySeries = [
    { name: 'Sensitivity', data: [391.82, 1.9, 141.62, 116.69] },
  ];

  return (
    <div>
      <div className="bg-white text-black p-8">
        <div className="w-full">
          <p className="mb-8 text-sm">
            The addition of Sensitivity to the CAMEL system allows for a more
            comprehensive assessment of the Company&apos;s ability to navigate
            dynamic market conditions, thereby providing a more holistic and
            insightful evaluation of its overall performance.
          </p>

          <div className="flex justify-between mb-8">
            <div className="w-1/3 bg-[#9c27b0] text-white p-4 rounded-lg">
              <h3 className="font-bold mb-2">E</h3>
              <p className="text-lg">EARNINGS</p>
            </div>
            <div className="w-1/3 bg-[#ff9800] text-white p-4 rounded-lg mx-4">
              <h3 className="font-bold mb-2">L</h3>
              <p className="text-lg">LIQUIDITY</p>
            </div>
            <div className="w-1/3 bg-[#2196f3] text-white p-4 rounded-lg">
              <h3 className="font-bold mb-2">S</h3>
              <p className="text-lg">SENSITIVITY</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div>
              <div className="bg-[#9c27b0] text-white p-4 rounded-lg mb-4">
                <h4 className="font-bold">Return on Equity</h4>
                <p className="text-2xl font-bold">23.40%</p>
                <p className="text-sm">2022/23: 23.78%</p>
              </div>
              <div className="bg-[#9c27b0] text-white p-4 rounded-lg">
                <h4 className="font-bold">Net Interest Margin</h4>
                <p className="text-2xl font-bold">13.70%</p>
                <p className="text-sm">2022/23: 11.98%</p>
              </div>
            </div>
            <div>
              <div className="bg-[#ff9800] text-white p-4 rounded-lg mb-4">
                <h4 className="font-bold">Liquid Assets Ratio</h4>
                <p className="text-2xl font-bold">21.02%</p>
                <p className="text-sm">2022/23: 19.31%</p>
              </div>
              <div className="bg-[#ff9800] text-white p-4 rounded-lg">
                <h4 className="font-bold">Total Liquidity Reserves</h4>
                <p className="text-2xl font-bold">Rs. 29.08 Bn</p>
                <p className="text-sm">2022/23: Rs. 25.59 Bn</p>
              </div>
            </div>
            <div>
              <div className="bg-[#2196f3] text-white p-4 rounded-lg mb-4">
                <h4 className="font-bold">Interest Rate Δ 1%</h4>
                <p className="text-2xl font-bold">0.94% Δ PAT</p>
                <p className="text-sm">Δ PAT (Rs. Mn) 391.82</p>
              </div>
              <div className="bg-[#2196f3] text-white p-4 rounded-lg">
                <h4 className="font-bold">Impairment Charge Δ 1%</h4>
                <p className="text-2xl font-bold">0.02% Δ PAT</p>
                <p className="text-sm">Δ PAT (Rs. Mn) 1.90</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div>
              <h4 className="font-bold mb-2">Return on Equity %</h4>
              <Chart
                options={returnOnEquityChartOptions}
                series={returnOnEquitySeries}
                type="bar"
                height={300}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">Liquid Assets Ratio %</h4>
              <Chart
                options={liquidAssetsChartOptions}
                series={liquidAssetsSeries}
                type="bar"
                height={300}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">Sensitivity of PAT Rs. Mn</h4>
              <Chart
                options={sensitivityChartOptions}
                series={sensitivitySeries}
                type="bar"
                height={300}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#9c27b0] text-white p-4 rounded-lg">
              <h4 className="font-bold mb-2">Way Forward →</h4>
              <p>
                We aim to achieve a minimum ROE of 20% by optimising our
                operations and financial performance.
              </p>
            </div>
            <div className="bg-[#ff9800] text-white p-4 rounded-lg">
              <h4 className="font-bold mb-2">Way Forward →</h4>
              <p>Maintain a robust liquidity buffer of at least 150%.</p>
            </div>
            <div className="bg-[#2196f3] text-white p-4 rounded-lg">
              <h4 className="font-bold mb-2">Way Forward →</h4>
              <p>
                Our objective is to employ sensitivity analysis as a tool for
                making strategic decisions that not only serve the best
                interests of stakeholders but also maximise shareholder wealth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
