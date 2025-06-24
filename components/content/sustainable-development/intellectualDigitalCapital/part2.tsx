'use client';

import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function IntellectualDigitalCapitalPart2() {
  const brandValueChartOptions = {
    chart: {
      type: 'bar' as const,
      height: 350,
    },
    colors: ['#ff69b4', '#4caf50', '#2196f3', '#ff9800', '#9c27b0'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['2020', '2021', '2022', '2023', '2024'],
    },
    yaxis: {
      title: {
        text: 'Rs. Mn',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return 'Rs. ' + val + ' Mn';
        },
      },
    },
  };

  const brandValueSeries = [
    {
      name: 'Brand Value',
      data: [2320, 2843, 3080, 3265, 3597],
    },
  ];

  return (
    <div className="bg-[#fdedf3] text-black p-8">
      <div className="w-full">
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div className="col-span-2 p-6 rounded-lg">
            <p className="text-lg">
              Intellectual capital comprises the intangible assets that shape
              our identity and provide a competitive edge. It encompasses our
              brand, our information technology assets, control systems and
              frameworks, and knowledge-based assets.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-lg">
              <h3 className="font-bold mb-2">CONTRIBUTING TO OUR MISSION</h3>
              <p className="text-sm">
                To mobilise public funds by innovating investment products that
                will enhance the value delivered to our depositors.
              </p>
            </div>
            <div className="rounded-lg">
              <h3 className="font-bold mb-2">CONTRIBUTION TO OUR VALUES</h3>
              <div>
                <p className="mb-3">Excellence</p>
                <p className="mb-3">Innovation</p>
                <p className="mb-3">Quality</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#ffc0cb] p-6 rounded-lg mb-8">
          <h3 className="font-bold mb-2">MANAGEMENT APPROACH</h3>
          <p className="text-sm">
            We continued to nurture our intellectual capital by adhering to the
            latest globally accepted best practices, and ongoing investments in
            our digital capabilities, processes, and people that would position
            us for future growth and success.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">
              COMPONENTS OF INTELLECTUAL CAPITAL
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">BRAND</li>
              <li className="flex items-center">
                INFORMATION TECHNOLOGY ASSETS
              </li>
              <li className="flex items-center">
                CONTROL SYSTEMS AND FRAMEWORKS
              </li>
              <li className="flex items-center">
                KNOWLEDGE-BASED SYSTEMS AND PROCESSES
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">NURTURING INTELLECTUAL CAPITAL</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Digitising business processes</li>
              <li>Strengthening IT security</li>
              <li>Enhancing brand image</li>
              <li>Developing employees</li>
              <li>Strengthening IT governance</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">LOOKING AHEAD</h3>
            <table className="w-full text-sm">
              <thead className="bg-[#9a4b87] text-white">
                <tr>
                  <th className="p-2">Short-term</th>
                  <th className="p-2">Medium-term</th>
                  <th className="p-2">Long-term</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">
                    Improve time to market by automating the software
                    development lifecycle
                  </td>
                  <td className="p-2">
                    Continuous R&D to boost idea generation and innovation
                    capabilities
                  </td>
                  <td className="p-2">
                    Pursue continuous process enhancements
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="font-bold mb-4">Brand Value</h3>
            <Chart
              options={brandValueChartOptions}
              series={brandValueSeries}
              type="bar"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
