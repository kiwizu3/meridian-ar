'use client';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

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

const provinceWiseOptions: ApexOptions = {
  chart: { type: 'donut' },
  labels: [
    'Western',
    'Southern',
    'Sabaragamuwa',
    'Uva',
    'Central',
    'Eastern',
    'North Western',
    'Northern',
  ],
  colors: [
    '#4A90E2',
    '#82CA9D',
    '#FFA500',
    '#FF6347',
    '#8A2BE2',
    '#20B2AA',
    '#FF69B4',
    '#CD853F',
  ],
  dataLabels: { enabled: true, style: { colors: ['#000000'] } },
  legend: { show: true, position: 'bottom', labels: { colors: '#000000' } },
};

const provinceWiseSeries = [75, 6, 1, 1, 4, 5, 5, 3];

const amountWiseOptions: ApexOptions = {
  chart: { type: 'donut' },
  labels: [
    'Rs 5,000 - 100,000',
    'Rs 100,001 - 500,000',
    'Rs 500,001 - 1,000,000',
    'Rs 1,000,001 - 5,000,000',
    'Above Rs. 5,000,000',
  ],
  colors: ['#4A90E2', '#82CA9D', '#FFA500', '#FF6347', '#8A2BE2'],
  dataLabels: { enabled: true, style: { colors: ['#000000'] } },
  legend: { show: true, position: 'bottom', labels: { colors: '#000000' } },
};

const amountWiseSeries2024 = [34, 7, 11, 0, 48];

const tenureWiseOptions: ApexOptions = {
  chart: { type: 'donut' },
  labels: [
    'Up to 3 months',
    '4 months to 6 months',
    '7 months to 12 months',
    'More than 12 months',
  ],
  colors: ['#4A90E2', '#82CA9D', '#FFA500', '#FF6347'],
  dataLabels: { enabled: true, style: { colors: ['#000000'] } },
  legend: { show: true, position: 'bottom', labels: { colors: '#000000' } },
};

const tenureWiseSeries2024 = [28, 0, 16, 56];

const renewalRatioOptions: ApexOptions = {
  chart: { type: 'line' },
  xaxis: {
    categories: [
      'Apr-23',
      'May-23',
      'Jun-23',
      'Jul-23',
      'Aug-23',
      'Sep-23',
      'Oct-23',
      'Nov-23',
      'Dec-23',
      'Jan-24',
      'Feb-24',
      'Mar-24',
    ],
  },
  yaxis: {
    title: { text: '%' },
    min: 60,
    max: 100,
  },
  stroke: { curve: 'smooth' },
  dataLabels: { enabled: false },
  colors: ['#4A90E2'],
};

const renewalRatioSeries = [
  {
    name: 'Renewal Ratio',
    data: [82, 78, 75, 80, 84, 85, 83, 85, 84, 82, 84, 81],
  },
];

const savingsBaseOptions: ApexOptions = {
  chart: { type: 'bar', stacked: false },
  xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  yaxis: [
    { title: { text: 'Rs Bn' }, min: 0, max: 4 },
    { opposite: true, title: { text: '%' }, min: -40, max: 50 },
  ],
  colors: ['#82CA9D', '#FFA500'],
};

const savingsBaseSeries = [
  { name: 'Savings', type: 'column', data: [2.5, 3.8, 3.7, 1.5, 3.7] },
  { name: 'Growth Rate', type: 'line', data: [20, 40, -10, -30, 47] },
];

const cimWalletOptions: ApexOptions = {
  chart: { type: 'bar' },
  xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  yaxis: { title: { text: "No. '000" } },
  colors: ['#4A90E2'],
};

const cimWalletSeries = [
  { name: 'CIM Wallet Transactions', data: [419, 1693, 2053, 2439, 2973] },
];

const cimWalletVolumeOptions: ApexOptions = {
  chart: { type: 'bar' },
  xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  yaxis: { title: { text: 'Rs. Bn' } },
  colors: ['#82CA9D'],
};

const cimWalletVolumeSeries = [
  { name: 'CIM Wallet Volume', data: [1, 6, 11, 21, 31] },
];

export default function Deposits() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 h-[654px] overflow-auto flex flex-col gap-6 custom-scrollbar">
      <div className="p-6 bg-white rounded-lg grid gap-6">
        <div className="grid gap-6">
          <div>
            <img
              src="/images/annual-report/deposit-banner.png"
              alt="hero image"
              className="w-full"
            />
          </div>
          <div className="grid gap-6">
            <div className="bg-white text-black rounded-lg">
              <div className="border-b border-[#dbbb86] flex justify-center">
                <h3 className="text-lg font-semibold mp-2 bg-[#dbbb86] text-white px-10 md:px-20 rounded-t-lg w-fit">
                  STRATEGY
                </h3>
              </div>
              <p className="text-center py-2">
                We deliver a range of deposit and savings solutions, enabling
                customers to capitalise on market opportunities to boost their
                financial capacity. We also focus on fostering enduring customer
                relationships through personalised service, prompt resolution of
                issues, and providing incentives to nurture customer loyalty.
              </p>
            </div>

            <div className="bg-white text-black rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#f58b45]">
                    CORE COMPETENCIES
                  </h3>
                  <ul className="list-disc pl-5">
                    <li>High returns on investment</li>
                    <li>
                      Customised solutions catering to individual customer
                      requirements
                    </li>
                    <li>
                      Wide multi-channel network for easy accessibility through
                      digital mediums
                    </li>
                    <li>
                      Exceptional service, quick response time, and ongoing
                      assistance
                    </li>
                  </ul>
                </div>
                <div className="bg-white text-black rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-[#f58b45]">
                    PERFORMANCE HIGHLIGHTS
                  </h3>
                  <p className="font-semibold">DEPOSIT BASE</p>
                  <p className="text-2xl font-bold text-[#4f70b8]">
                    Rs. 122.80 Bn
                  </p>
                  <p className="text-sm">(2022/23- Rs. 114.01 Bn)</p>
                  <p className="mt-4 font-semibold">GROWTH RATIO</p>
                  <p className="text-2xl font-bold text-[#4f70b8]">8%</p>
                  <p className="text-sm">(2022/23- 28%)</p>
                </div>
              </div>
            </div>
            <div className=" bg-white text-black">
              <div className="flex justify-center">
                <h3 className="text-lg font-semibold mp-2 bg-[#0b466e] text-white px-10 md:px-20 rounded-t-lg w-fit">
                  PRODUCT PORTFOLIO
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 border-dashed border-black border-2 rounded-b-2xl p-2">
                <div className="flex justify-center">
                  <img
                    src="/images/annual-report/yasaisuru.png"
                    alt="product logo"
                  />
                </div>

                <div className="flex justify-center">
                  <img
                    src="/images/annual-report/lbsavings.png"
                    alt="product logo"
                  />
                </div>

                <div className="flex justify-center">
                  <img
                    src="/images/annual-report/littlehero.png"
                    alt="product logo"
                  />
                </div>

                <div className="flex justify-center">
                  <img
                    src="/images/annual-report/salary-plan.png"
                    alt="product logo"
                  />
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <h3 className="text-lg font-semibold text-[#f58b45]">
                SWOT ANALYSIS
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-1 gap-4">
                <div className="p-2 relative">
                  <div className="bg-[#dcf3f8] rounded-es-2xl">
                    <h4 className="font-semibold p-2 bg-[#4f70b8] text-white text-center">
                      Strengths
                    </h4>
                    <div className="p-2 text-black">
                    <ul className="list-disc pl-8 md:pl-5 lg:pr-5 xl:pr-0">
                        <li>Expansive physical and digital presence</li>
                        <li>Strong reputation</li>
                        <li>Financial stability</li>
                        <li>Exceptional customer service</li>
                      </ul>
                    </div>
                    <div className=" bg-[#4f70b8] w-10 h-10 flex justify-center items-center absolute bottom-0 right-0 border-white border rounded-b-2xl rounded-tr-2xl">
                      <h2 className="text-2xl text-white font-bold">S</h2>
                    </div>
                  </div>
                </div>
                <div className="p-2 relative">
                  <div className="bg-[#d0cae3] rounded-ee-2xl h-full">
                    <h4 className="font-semibold p-2 bg-[#594399] text-white text-center">
                      Weaknesses
                    </h4>
                    <div className="p-2 text-black">
                      <ul className="list-disc pl-8 md:pl-5 lg:pr-5 xl:pr-0">
                        <li>Non-availability of own ATM network</li>
                        <li>Underutilisation of cross-selling opportunities</li>
                      </ul>
                    </div>
                    <div className="bg-[#594399] w-10 h-10 flex justify-center items-center absolute bottom-0 left-0 border-white border rounded-b-2xl rounded-tl-2xl">
                      <h2 className="text-2xl text-white font-bold">W</h2>
                    </div>
                  </div>
                </div>
                <div className="p-2 relative">
                  <div className="bg-[#ffe5d1] rounded-b-2xl h-full">
                    <h4 className="font-semibold p-2 bg-[#f58b45] text-white text-center">
                      Opportunities
                    </h4>
                    <div className="p-2 text-black">
                      <ul className="list-disc pl-8 md:pl-5 lg:pr-5 xl:pr-0">
                        <li>
                          Automation and digitisation to enhance customer
                          experience
                        </li>
                        <li>
                          Further reduction in cost of funds through savings
                          mobilisation
                        </li>
                      </ul>
                    </div>
                    <div className="bg-[#f58b45] w-10 h-10 flex justify-center items-center absolute top-0 right-0 border-white border rounded-t-2xl rounded-br-2xl">
                      <h2 className="text-2xl text-white font-bold">O</h2>
                    </div>
                  </div>
                </div>

                <div className="p-2 relative">
                  <div className="bg-[#f5ead7] rounded-b-2xl h-full">
                    <h4 className="font-semibold p-2 bg-[#cfa25b] text-white text-center">
                      Threats
                    </h4>
                    <div className="p-2 text-black">
                      <ul className="list-disc pl-8 md:pl-5 lg:pr-5 xl:pr-0">
                        <li>Macroeconomic vulnerabilities</li>
                        <li>Intense competition</li>
                        <li>Ad-hoc monitory policy changes</li>
                        <li>Influence from informal market establishments</li>
                      </ul>
                    </div>
                    <div className="bg-[#cfa25b] w-10 h-10 flex justify-center items-center absolute top-0 left-0 border-white border rounded-t-2xl rounded-bl-2xl">
                      <h2 className="text-2xl text-white font-bold">T</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white text-black p-6 overflow-x-auto border border-black rounded-tl-2xl">
                  <h3 className="text-xl font-semibold mb-4 text-center text-[#4f70b8]">
                    Deposits Base Mix
                  </h3>
                  {/* <ReactApexChart
              options={donutChartOptions}
              series={donutSeries}
              type="donut"
              height={300}
            /> */}
                  <img
                    src="/images/charts/businessReview/dipositMix.png"
                    alt="ownership image"
                    className="w-full mb-4 rounded-lg"
                  />
                </div>
                <div className="bg-white text-black overflow-x-auto ">
                  <h3 className="text-lg font-semibold mb-2 text-[#f58b45]">
                    FIXED DEPOSITS
                  </h3>
                  <div className="flex flex-col items-center border border-black rounded-tl-2xl">
                    <h3 className="text-xl font-semibold mb-4 text-center text-[#4f70b8]">
                      Fixed Deposits Base
                    </h3>
                    {/* <ReactApexChart
              options={lineChartOptions}
              series={lineSeries}
              type="line"
              height={350}
            /> */}
                    <img
                      src="/images/charts/businessReview/fixedDeposit.png"
                      alt="ownership image"
                      className="w-full mb-4 rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="bg-white text-black rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
              Operating Context and Strategy
            </h3>

            <p>
              The deposit base recorded healthy growth during FY 2023/24
              irrespective of the decline in interest rates. Moreover, the
              implementation of a new tax policy by the government deterred
              customers from mobilising deposits by turning to alternative
              investments. This trend posed challenges in maintaining our
              deposit portfolio during FY 2023/24. Despite these challenges, our
              focus was on maintaining and growing our deposit base.
            </p>
            <p className="mt-4">
              Anticipating a decline in interest rates, we exercised caution in
              accepting high-cost, long-term deposits, enabling a swifter
              downward re-pricing of the fixed deposit base as rates decreased
              starting in April 2023. The ad hoc policy changes posed challenges
              in retaining and maintaining the flow of deposits. To overcome
              these challenges, we customised our approach to address specific
              requirements, ensuring the stability of our deposit base while
              reducing interest costs. During periods of interest rate hikes, we
              introduced new deposit products to attract customers.
              Additionally, we concentrated on shortterm deposit options,
              adjusting rates accordingly to align with customer preferences.
              Our efforts yielded positive results, recording an 81% renewal
              ratio. Moreover, in the declining interest rate trend during the
              year, we repriced our deposit base quickly responding to the
              market rate movements.
            </p>
            <p className="mt-4">
              We conducted seasonal campaigns leveraging our branch network to
              mobilise deposits.
            </p>
            <p className="mt-4">
              Along with the increased trend in digital intervention to the
              business processes, we strategically promoted our CIM app as a
              convenient and accessible digital solution for deposit
              mobilisation. This approach leverages technology to grow our
              deposit base, aligning with customer preferences for a seamless
              and efficient financial experience.
            </p>
            <p className="mt-4">
              In response to the challenge of staff turnover, we promoted our
              CIM app to encourage deposit mobilisation, leveraging its
              accessibility and convenience to grow our deposit base. By
              embracing digital solutions, we foster sustainable business
              practices that streamline processes and enhance customer
              engagement.
            </p>
          </div>

          {/* Performance */}
          <div className="bg-white text-black rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
              Performance
            </h3>
            <p>
              The Fixed Deposit (FD) base expanded by 7%, while including
              savings, the growth reached 8%. The Fixed Deposit renewal ratio
              was maintained above 75%, which is a testament to the Company’s
              ability to retain its existing customers and sustain their trust
              and satisfaction over the years. In terms of tenure, 72% of our
              deposits were within the 1 month to 1-year range, while 28%
              extended over 1 year to 5 years.
            </p>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white text-black p-6 border border-black rounded-tl-2xl">
              <h3 className="text-xl font-semibold mb-4 text-[#4f70b8] text-center">
                Fixed Deposit Renewal Ratio
              </h3>
              {/* <ReactApexChart
              options={renewalRatioOptions}
              series={renewalRatioSeries}
              type="line"
              height={300}
            /> */}
              <img
                src="/images/charts/businessReview/fdRenewalRatio.png"
                alt="ownership image"
                className="w-full mb-4 rounded-lg"
              />
            </div>

            <div className="bg-white text-black p-6 border border-black rounded-tl-2xl">
              <h3 className="text-xl font-semibold mb-4 text-[#4f70b8] text-center">
                Tenure-wise Fixed Deposits
              </h3>
              {/* <ReactApexChart
              options={tenureWiseOptions}
              series={tenureWiseSeries2024}
              type="donut"
              height={300}
            /> */}
              <img
                src="/images/charts/businessReview/twFD.png"
                alt="ownership image"
                className="w-full mb-4 rounded-lg"
              />
            </div>
            <div className="bg-white text-black p-6 border border-black rounded-tl-2xl">
              <h3 className="text-xl font-semibold mb-4 text-[#4f70b8] text-center">
                Province-wise Fixed Deposits Volume
              </h3>
              {/* <ReactApexChart
              options={provinceWiseOptions}
              series={provinceWiseSeries}
              type="donut"
              height={300}
            /> */}
              <img
                src="/images/charts/businessReview/depositVolume.png"
                alt="ownership image"
                className="w-full mb-4 rounded-lg"
              />
            </div>

            <div className="bg-white text-black p-6 border border-black rounded-tl-2xl">
              <h3 className="text-xl font-semibold mb-4 text-[#4f70b8] text-center">
                Amount-wise Fixed Deposits
              </h3>
              {/* <ReactApexChart
              options={amountWiseOptions}
              series={amountWiseSeries2024}
              type="donut"
              height={300}
            /> */}
              <img
                src="/images/charts/businessReview/amoutWiseFD.png"
                alt="ownership image"
                className="w-full mb-4 rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="grid gap-6">
          {/* Savings Section */}
          <div className="bg-white text-black rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-[#f58b45]">
              SAVINGS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white text-black p-6 border border-black rounded-tl-2xl">
                <h3 className="text-xl font-semibold mb-4 text-[#4f70b8] text-center">
                  Savings Base
                </h3>
                {/* <ReactApexChart
            options={savingsBaseOptions}
            series={savingsBaseSeries}
            type="line"
            height={300}
          /> */}
                <div className="flex flex-col items-center">
                  <img
                    src="/images/charts/businessReview/savingsBase.png"
                    alt="ownership image"
                    className="w-full mb-4 rounded-lg"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
                  Operating Context and Strategy
                </h3>
                <p>
                  Furthermore, by leveraging our LB CIM wallet, we onboarded new
                  customers and promoted digital accounts, enhancing
                  accessibility and convenience for our savers. Moreover,
                  promotions were conducted within our branch network, providing
                  attractive incentives to save and invest.
                </p>
              </div>
            </div>
          </div>

          {/* Operating Context and Strategy */}
          <div className="bg-white text-black">
            <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
              Performance
            </h3>
            <p className="mt-4">
              We shifted our focus during FY 2023/24 to increase our savings
              portfolio. As a result, we achieved a remarkable savings portfolio
              growth of 47% YoY, amounting to Rs. 3.7 Bn.
            </p>
            <p className="mt-4">
              The number of CIM wallet transactions grew by 19% while over
              50,000 new customers were onboarded.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white text-black p-6 border border-black rounded-tl-2xl">
              <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
                No of CIM Wallet Transactions
              </h3>
              {/* <ReactApexChart
              options={cimWalletOptions}
              series={cimWalletSeries}
              type="bar"
              height={300}
            /> */}
              <p className="text-right">No.'000</p>
              <img
                src="/images/charts/businessReview/walletTransactions.png"
                alt="ownership image"
                className="w-full mb-4 rounded-lg"
              />
            </div>
            <div className="bg-white text-black p-6 border border-black rounded-tl-2xl">
              <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
                CIM Wallet Transactions (Volume)
              </h3>
              {/* <ReactApexChart
              options={cimWalletVolumeOptions}
              series={cimWalletVolumeSeries}
              type="bar"
              height={300}
            /> */}
              <p className="text-right">Rs. Bn</p>
              <img
                src="/images/charts/businessReview/walletTransactionVolume.png"
                alt="ownership image"
                className="w-full mb-4 rounded-lg"
              />
            </div>
          </div>

          {/* Customer Loyalty Services */}
          <div className="bg-white text-black">
            <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
              Customer loyalty services for our depositors
            </h3>
            <p className="mt-4">
              We are in the process of digitising our manual deposit process to
              streamline operations and offer enhanced customer convenience.
              Through our CIM app, we seamlessly onboard customers, providing
              access to a comprehensive suite of financial services. Customers
              are enabled to apply and obtain a loan in just 10 minutes. This
              not only addresses their immediate financial requirements
              efficiently but also nurtures customer loyalty through the
              delivery of fast and convenient solutions.
            </p>
            <p className="mt-4">
              We have also maintained customer loyalty through several key
              strategies:
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li>
                Building strong rapport with customers through our branch
                network nurturing strong customer relationships that foster
                trust and loyalty
              </li>
              <li>
                Focusing on customer acquisition, in addition to retaining
                existing customers to ensure sustainable growth
              </li>
              <li>
                Encouraging repeat business by tracking our depositors and
                encouraging them to return for more transactions
              </li>
            </ul>
          </div>

          {/* Strategic Objectives */}

          <div className="overflow-x-auto">
            <img
              src="/images/charts/businessReview/objectivestable.png"
              alt="objectives table"
              className="lg:w-full max-w-[800px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
