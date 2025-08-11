'use client';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

export default function Section68() {
  const donutChartOptions: ApexOptions = {
    chart: {
      type: 'donut',
    },
    labels: ['FD', 'Savings'],
    colors: ['#4A90E2', '#82CA9D'],
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: true,
      position: 'bottom',
      labels: {
        colors: '#000000',
      },
    },
  };
  const donutSeries = [97, 3];

  const lineChartOptions: ApexOptions = {
    chart: {
      type: 'line',
      height: 350,
    },
    xaxis: {
      categories: ['2020', '2021', '2022', '2023', '2024'],
    },
    yaxis: [
      {
        title: {
          text: 'Rs Bn',
        },
      },
      {
        opposite: true,
        title: {
          text: 'Growth Rate (%)',
        },
      },
    ],
    colors: ['#82CA9D', '#FFA500'],
  };

  const lineSeries = [
    {
      name: 'FD',
      type: 'column',
      data: [40, 80, 75, 75, 100],
    },
    {
      name: 'Growth Rate',
      type: 'line',
      data: [0, 25, 5, 15, 30],
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold">DEPOSITS</h2>
      <div>
        <img src="/images/annual-report/deposit-banner.png" alt="hero image" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white text-black p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">STRATEGY</h3>
          <p>
            We deliver a range of deposit and savings solutions, enabling
            customers to capitalise on market opportunities to boost their
            financial capacity. We also focus on fostering enduring customer
            relationships through personalised service, prompt resolution of
            issues, and providing incentives to nurture customer loyalty.
          </p>
        </div>

        <div className="bg-white text-black p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">CORE COMPETENCIES</h3>
          <ul className="list-disc pl-5">
            <li>High returns on investment</li>
            <li>
              Customised solutions catering to individual customer requirements
            </li>
            <li>
              Wide multi-channel network for easy accessibility through digital
              mediums
            </li>
            <li>
              Exceptional service, quick response time, and ongoing assistance
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white text-black p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">PERFORMANCE HIGHLIGHTS</h3>
          <p>DEPOSIT BASE</p>
          <p className="text-2xl font-bold">Rs. 122.80 Bn</p>
          <p className="text-sm">(2022/23- Rs. 114.01 Bn)</p>
          <p className="mt-4">GROWTH RATIO</p>
          <p className="text-2xl font-bold">8%</p>
          <p className="text-sm">(2022/23- 28%)</p>
        </div>

        <div className="bg-white text-black p-6 rounded-lg overflow-x-auto">
          <h3 className="text-xl font-semibold mb-4">Deposits Base Mix</h3>
          <ReactApexChart
            options={donutChartOptions}
            series={donutSeries}
            type="donut"
            height={300}
          />
        </div>
      </div>

      <div className=" bg-white text-black p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">PRODUCT PORTFOLIO</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <img src="/images/annual-report/yasaisuru.png" alt="product logo" />
          <img src="/images/annual-report/lbsavings.png" alt="product logo" />
          <img src="/images/annual-report/littlehero.png" alt="product logo" />
          <img src="/images/annual-report/salary-plan.png" alt="product logo" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white text-black p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">SWOT ANALYSIS</h3>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <div className="bg-[#dcf3f8]  p-2 rounded-se-xl rounded-es-xl">
              <h4 className="font-semibold rounded-se-xl p-2 bg-[#466fb4] text-white text-center">
                Strengths
              </h4>
              <ul className="list-disc pl-5">
                <li>Expansive physical and digital presence</li>
                <li>Strong reputation</li>
                <li>Financial stability</li>
                <li>Exceptional customer service</li>
              </ul>
            </div>
            <div className="bg-purple-200 p-2 rounded-ss-xl rounded-ee-xl">
              <h4 className="font-semibold text-white bg-[#5a4296] rounded-ss-xl p-2 text-center">
                Weaknesses
              </h4>
              <ul className="list-disc pl-5">
                <li>Non-availability of own ATM network</li>
                <li>Underutilisation of cross-selling opportunities</li>
              </ul>
            </div>
            <div className="bg-[#ffe4d2] p-2 rounded-ss-xl rounded-ee-xl">
              <h4 className="font-semibold bg-[#ff8e51] rounded-ss-xl p-2 text-center text-white">
                Opportunities
              </h4>
              <ul className="list-disc pl-5">
                <li>
                  Automation and digitisation to enhance customer experience
                </li>
                <li>
                  Further reduction in cost of funds through savings
                  mobilisation
                </li>
              </ul>
            </div>
            <div className="bg-yellow-200 p-2 rounded-se-xl rounded-es-xl">
              <h4 className="font-semibold bg-[#d4a262] rounded-se-xl p-2 text-center text-white">
                Threats
              </h4>
              <ul className="list-disc pl-5">
                <li>Macroeconomic vulnerabilities</li>
                <li>Intense competition</li>
                <li>Ad-hoc monitory policy changes</li>
                <li>Influence from informal market establishments</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white text-black p-6 rounded-lg overflow-x-auto">
          <h3 className="text-xl font-semibold mb-4">FIXED DEPOSITS</h3>
          <ReactApexChart
            options={lineChartOptions}
            series={lineSeries}
            type="line"
            height={350}
          />
        </div>
      </div>
    </div>
  );
}
