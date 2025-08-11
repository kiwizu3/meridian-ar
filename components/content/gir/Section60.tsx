'use client';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Section60() {
  const chartOptions1: ApexOptions = {
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
      },
    },
    colors: ['#28A745', '#007BFF', '#DC3545'], // Green, Blue, Red
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        'Financial Performance',
        'Cash Flows',
        'Financial Position',
        'Access to Finance',
      ],
      labels: {
        rotate: -90,
      },
    },
    yaxis: {
      labels: {},
    },
    grid: {
      borderColor: '#eee',
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val}`,
      },
    },
    legend: {
      position: 'bottom',
      itemMargin: {
        horizontal: 5,
        vertical: 5,
      },
      height: 70,
    },
  };

  const chartSeries1 = [
    {
      name: 'Short',
      data: [20, -20, 20, 10],
    },
    {
      name: 'Medium',
      data: [40, 40, 30, 30],
    },
    {
      name: 'Long',
      data: [60, 60, 40, 50],
    },
  ];
  const chartSeries2 = [
    {
      name: 'Short',
      data: [-20, -20, -20, 10],
    },
    {
      name: 'Medium',
      data: [40, 50, 40, 10],
    },
    {
      name: 'Long',
      data: [60, 70, 75, 80],
    },
  ];
  const chartSeries3 = [
    {
      name: 'Short',
      data: [-10, -25, -10, 10],
    },
    {
      name: 'Medium',
      data: [30, 10, 30, 10],
    },
    {
      name: 'Long',
      data: [35, 20, 35, 20],
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-white">
        Sustainability Related Risks
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-600">
              <th className="border border-white p-2">Risk</th>
              <th className="border border-white p-2">Energy Management</th>
              <th className="border border-white p-2">Employee Attrition</th>
              <th className="border border-white p-2">Information Security</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-blue-800">
              <td className="border border-white p-2">Description</td>
              <td className="border border-white p-2">
                High dependency on non-renewable energy sources
              </td>
              <td className="border border-white p-2">
                High turnover of talented staff
              </td>
              <td className="border border-white p-2">
                Potential threats or vulnerabilities that could compromise the
                confidentiality integrity or availability of digital assets
              </td>
            </tr>
            <tr>
              <td className="border border-white p-2">
                DMitigations and Opportunities
              </td>
              <td className="border border-white p-2">
                25 branches use solar power in addition to the use of main grid
                electricity and further continue to transform branches into use
                of solar power.
              </td>
              <td className="border border-white p-2">
                Improving skills and developing pleasant workplace through human
                resources development and retaining talented human resources
                through productivity management
              </td>
              <td className="border border-white p-2">
                Governance structures were strengthened and surveillance and
                monitoring tools were enhanced
              </td>
            </tr>
            <tr className="bg-blue-800">
              <td className="border border-white p-2">
                Potential Adjustment to Assets and Liabilities in 2024/25
              </td>
              <td className="border border-white p-2">
                Slight increase in assets
              </td>
              <td className="border border-white p-2">No significant impact</td>
              <td className="border border-white p-2">
                Moderate increase in assets
              </td>
            </tr>

            <tr>
              <td className="border  p-2">Related Strategy</td>
              <td className="border  p-2">Creating Positive Impact</td>
              <td className="border  p-2">Workforce Empowerment</td>
              <td className="border p-2">Digital Transformation</td>
            </tr>

            <tr>
              <td className="border  p-2">
                Short-term, Medium-term and Long-term Impact through Risks
                Mitigation and Opportunities
              </td>
              <td className="border p-2">
                <div className="w-full bg-gray-200 rounded-md p-2">
                  <Chart
                    options={chartOptions1}
                    series={chartSeries1}
                    type="bar"
                    height={400}
                  />
                </div>
              </td>
              <td className="border p-2">
                <div className="w-full bg-gray-200 rounded-md p-2">
                  <Chart
                    options={chartOptions1}
                    series={chartSeries2}
                    type="bar"
                    height={400}
                  />
                </div>
              </td>

              <td className="border p-2">
                <div className="w-full bg-gray-200 rounded-md p-2">
                  <Chart
                    options={chartOptions1}
                    series={chartSeries3}
                    type="bar"
                    height={400}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
