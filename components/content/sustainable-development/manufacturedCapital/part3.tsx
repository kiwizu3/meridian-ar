'use client';

import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function ManufacturedCapitalPart3() {
  const barChartOptions = {
    chart: {
      type: 'bar' as const,
      stacked: true,
    },
    xaxis: {
      categories: ['2020', '2021', '2022', '2023', '2024'],
      labels: {
        style: {
          colors: '#000000',
        },
      },
    },
    yaxis: {
      title: {
        text: 'Number of Branches',
        style: {
          color: '#000000',
        },
      },
      labels: {
        style: {
          colors: '#000000',
        },
      },
    },
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
    colors: ['#4CAF50', '#2196F3'],
    legend: {
      labels: {
        colors: '#000000',
      },
    },
  };

  const barChartSeries = [
    {
      name: 'New branches opened',
      data: [2, 4, 11, 10, 8],
    },
    {
      name: 'Branches relocated',
      data: [0, 5, 2, 5, 2],
    },
  ];

  return (
    <div>
      <div className="min-h-screen bg-white text-black p-8">
        <div className="w-full">
          <div className="bg-[#ffffff] rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">CAPITAL TRADE-OFF</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Investment in the branch network
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  <div className="bg-[#d1e0f2] p-2 rounded">
                    <h4 className="font-semibold">FC</h4>
                    <p className="text-sm">
                      Requires significant financial resources to build,
                      relocate, and refurbish branches. This results in
                      long-term benefits such as an increased customer base,
                      market share, and revenue
                    </p>
                  </div>
                  <div className="bg-[#d1cbe4] p-2 rounded">
                    <h4 className="font-semibold">HC</h4>
                    <p className="text-sm">
                      Creates a conducive work environment
                    </p>
                  </div>
                  <div className="bg-[#fbdde9] p-2 rounded">
                    <h4 className="font-semibold">IC</h4>
                    <p className="text-sm">
                      Enhances brand reputation through promotion of digital and
                      physical touchpoints
                    </p>
                  </div>
                  <div className="bg-[#e7f1d4] p-2 rounded">
                    <h4 className="font-semibold">SC</h4>
                    <p className="text-sm">
                      The provision of efficient services through the branch
                      network enhances customer experience. Expansion of reach
                      results in financial inclusion
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Investment in digital infrastructure
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  <div className="bg-[#d1e0f2] p-2 rounded">
                    <h4 className="font-semibold">FC</h4>
                    <p className="text-sm">
                      Investment in hardware and software requires financial
                      resources, but provides benefits in terms of efficiency
                      improvements, and cost savings in the long-term
                    </p>
                  </div>
                  <div className="bg-[#d1cbe4] p-2 rounded">
                    <h4 className="font-semibold">HC</h4>
                    <p className="text-sm">
                      Employee development in digital competencies and increased
                      productivity through automation
                    </p>
                  </div>
                  <div className="bg-[#fbdde9] p-2 rounded">
                    <h4 className="font-semibold">IC</h4>
                    <p className="text-sm">
                      Investment in technology and digital channels augments
                      intellectual capital
                    </p>
                  </div>
                  <div className="bg-[#e7f1d4] p-2 rounded">
                    <h4 className="font-semibold">MC</h4>
                    <p className="text-sm">
                      Provides an exceptional customer experience through a
                      faster, efficient, secure, and convenient service
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">OUR BRANCH NETWORK</h2>
            <p className="mb-4">
              Our island-wide branch network comprises of 200 branches that
              enables us to reach over 800,000 customers across Sri Lanka.
            </p>
            <p className="mb-4">
              We have continued to expand our branch network to extend our reach
              to a broader spectrum of Sri Lankans. To optimise efficiency of
              these physical touchpoints, we analyse customer feedback and data,
              including transactional status and average counts, to determine
              each branch location. Our primary objective is to strategically
              expand our branches to meet the evolving needs of our customers.
              Consequently, through our branch relocation programme, we have
              relocated branches to regions with higher population density,
              ensuring enhanced accessibility for our customers.
            </p>
            <p className="mb-4">
              During FY 2023/24, 02 branches were relocated to improve
              accessibility. Moreover, we have standardised our branches and
              provided training to ensure branch teams are equipped to deliver
              exceptional customer service. Furthermore, 08 branches were opened
              during the year, and over Rs. 146 Mn investment made in the branch
              network for FY 2023/24.
            </p>
            <div className="w-full" style={{ height: '400px' }}>
              <Chart
                options={barChartOptions}
                series={barChartSeries}
                type="bar"
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
