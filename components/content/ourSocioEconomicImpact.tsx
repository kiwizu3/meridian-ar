'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import Image from 'next/image';
import { assetUrl } from '@/lib/assets';

// import csr1 from '@/public/images/annual-report/AboutCSR1.png';
// import csr2 from '@/public/images/annual-report/AboutCSR2.png';
// import csr3 from '@/public/images/annual-report/AboutCSR3.png';
// import csr4 from '@/public/images/annual-report/AboutCSR5.png';


const csr1 = assetUrl('/images/annual-report/AboutCSR1.png');
const csr2 = assetUrl('/images/annual-report/AboutCSR2.png');
const csr3 = assetUrl('/images/annual-report/AboutCSR3.png');
const csr4 = assetUrl('/images/annual-report/AboutCSR5.png');

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const pieChartOptions: ApexOptions = {
  chart: { type: 'pie' as const },
  labels: [
    'Southern',
    'North Western',
    'Western',
    'Central',
    'Sabaragamuwa',
    'Uva',
    'North Central',
    'Eastern',
    'Northern',
  ],
  colors: [
    '#4169E1',
    '#32CD32',
    '#1E90FF',
    '#FF69B4',
    '#FF6347',
    '#8A2BE2',
    '#DAA520',
    '#20B2AA',
    '#FF4500',
  ],
  legend: { position: 'bottom' as const, labels: { colors: '#000' } },
};

const pieChartSeries = [10, 7, 39, 11, 6, 5, 6, 9, 7];

const barChartOptions: ApexOptions = {
  chart: { type: 'bar' as const },
  xaxis: {
    categories: ['2020', '2021', '2022', '2023', '2024'],
    labels: { style: { colors: '#000' } },
  },
  yaxis: { title: { text: 'Rs.Mn', style: { color: '#000' } } },
  colors: ['#4169E1'],
  plotOptions: { bar: { horizontal: false, columnWidth: '55%' } },
};

const barChartSeries = [
  {
    name: 'Interest Paid to Fund Providers',
    data: [11871, 13397, 9762, 17444, 23821],
  },
];

const ProvinceData = ({
  name,
  loans,
  deposits,
}: {
  name: string;
  loans: string;
  deposits: string;
}) => (
  <div className="mb-2">
    <h4 className="font-bold">{name}</h4>
    <div className="flex justify-between">
      <span>Loans: {loans}</span>
      <span>Deposits: {deposits}</span>
    </div>
  </div>
);
const EconomicValueAddedTable: React.FC = () => (
  <table className="w-full text-sm">
    <thead className="bg-[#1D4ED8]/50 text-white">
      <tr>
        <th className="text-left p-2">For the year</th>
        <th className="text-right p-2">
          2023/24
          <br />
          Rs. Million
        </th>
        <th className="text-right p-2">
          2022/23
          <br />
          Rs. Million
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-blue-100">
        <td colSpan={3} className="font-bold p-2">
          Invested Equity
        </td>
      </tr>
      <tr>
        <td className="p-2">Shareholders&#39; funds</td>
        <td className="text-right p-2">43,626.07</td>
        <td className="text-right p-2">38,115.74</td>
      </tr>
      <tr>
        <td className="p-2">Add: Allowance for Impairment losses</td>
        <td className="text-right p-2">7,309.25</td>
        <td className="text-right p-2">7,858.72</td>
      </tr>
      <tr>
        <td className="p-2"></td>
        <td className="text-right p-2">50,935.32</td>
        <td className="text-right p-2">45,974.46</td>
      </tr>
      <tr className="bg-blue-100">
        <td colSpan={3} className="font-bold p-2">
          Earnings
        </td>
      </tr>
      <tr>
        <td className="p-2">Profit attributable to shareholders</td>
        <td className="text-right p-2">9,563.64</td>
        <td className="text-right p-2">8,460.33</td>
      </tr>
      <tr>
        <td className="p-2">Add: Impairment charges</td>
        <td className="text-right p-2">373.24</td>
        <td className="text-right p-2">545.74</td>
      </tr>
      <tr>
        <td className="p-2"></td>
        <td className="text-right p-2">9,936.87</td>
        <td className="text-right p-2">9,006.07</td>
      </tr>
      <tr>
        <td className="p-2">
          Economic cost %<br />
          (Average Treasury Bill rate plus 2% risk premium)
        </td>
        <td className="text-right p-2">16.80</td>
        <td className="text-right p-2">29.12</td>
      </tr>
      <tr>
        <td className="p-2">Economic cost</td>
        <td className="text-right p-2">8,140.42</td>
        <td className="text-right p-2">12,594.64</td>
      </tr>
      <tr>
        <td className="p-2">Economic value added</td>
        <td className="text-right p-2">1,796.45</td>
        <td className="text-right p-2">(3,588.56)</td>
      </tr>
    </tbody>
  </table>
);

const MarketValueAddedTable: React.FC = () => (
  <table className="w-full text-sm">
    <thead className="bg-[#1D4ED8]/50 text-white">
      <tr>
        <th className="text-left p-2 ">For the year</th>
        <th className="text-right p-2">
          2023/24
          <br />
          Rs. Million
        </th>
        <th className="text-right p-2">
          2022/23
          <br />
          Rs. Million
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="p-2">
          Market capitalisation
          <br />
          Market value of equity
        </td>
        <td className="text-right p-2">34,794.79</td>
        <td className="text-right p-2">30,473.14</td>
      </tr>
      <tr>
        <td className="p-2">
          Less: Equity owners&#39; funds
          <br />
          Shareholders&#39; funds
        </td>
        <td className="text-right p-2">43,626.07</td>
        <td className="text-right p-2">38,115.74</td>
      </tr>
      <tr>
        <td className="p-2">Total equity owners&#39; funds</td>
        <td className="text-right p-2">43,626.07</td>
        <td className="text-right p-2">38,115.74</td>
      </tr>
      <tr>
        <td className="p-2">Market value added/(destroyed)</td>
        <td className="text-right p-2">(8,831.28)</td>
        <td className="text-right p-2">(7,642.60)</td>
      </tr>
    </tbody>
  </table>
);

const EmploymentChart: React.FC = () => {
  const options = {
    chart: { type: 'bar' as const },
    colors: ['#8A2BE2', '#000080'],
    xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
    yaxis: { title: { text: 'No.' } },
  };
  const series = [
    {
      name: 'New Employment Opportunities',
      data: [1291, 939, 1784, 1261, 2194],
    },
  ];

  return <Chart options={options} series={series} type="bar" height={300} />;
};

const CIMAppCharts: React.FC = () => {
  const volumeOptions = {
    chart: { type: 'bar' as const },
    colors: ['#32CD32', '#000080'],
    xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
    yaxis: { title: { text: 'Rs. Mn' } },
  };
  const volumeSeries = [
    { name: 'Transaction Volume', data: [1445, 6587, 11093, 20451, 31749] },
  ];

  const transactionsOptions = {
    chart: { type: 'line' as const },
    colors: ['#FF4500'],
    xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
    yaxis: { title: { text: 'No.' } },
  };
  const transactionsSeries = [
    {
      name: 'Transactions',
      data: [414063, 1032840, 1776966, 2475740, 2930809],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Chart
        options={volumeOptions}
        series={volumeSeries}
        type="bar"
        height={300}
      />
      <Chart
        options={transactionsOptions}
        series={transactionsSeries}
        type="line"
        height={300}
      />
    </div>
  );
};

const ForeignExchangeCharts: React.FC = () => {
  const volumeOptions = {
    chart: { type: 'bar' as const },
    colors: ['#32CD32', '#000080'],
    xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
    yaxis: { title: { text: 'Rs. Mn' } },
  };
  const volumeSeries = [{ name: 'Volume', data: [181, 12, 39, 129, 172] }];

  const transactionsOptions = {
    chart: { type: 'line' as const },
    colors: ['#FF4500'],
    xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
    yaxis: { title: { text: 'No.' } },
  };
  const transactionsSeries = [
    { name: 'Transactions', data: [0, 490, 665, 1824, 2177] },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Chart
        options={volumeOptions}
        series={volumeSeries}
        type="bar"
        height={300}
      />
      <Chart
        options={transactionsOptions}
        series={transactionsSeries}
        type="line"
        height={300}
      />
    </div>
  );
};

const BranchesChart: React.FC = () => {
  const options = {
    chart: { type: 'bar' as const },
    colors: ['#32CD32', '#000080'],
    xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
    yaxis: { title: { text: 'No.' } },
  };
  const series = [{ name: 'No. of Branches', data: [165, 171, 181, 192, 200] }];

  return <Chart options={options} series={series} type="bar" height={300} />;
};

const InvestmentChart: React.FC = () => {
  const options = {
    chart: { type: 'bar' as const },
    colors: ['#32CD32', '#000080'],
    xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
    yaxis: { title: { text: 'Rs. Mn' } },
  };
  const series = [
    { name: 'Investment in CSR', data: [22.52, 37.29, 13.24, 24.09, 20.0] },
  ];

  return <Chart options={options} series={series} type="bar" height={300} />;
};

export default function LBFinanceSocioEconomicImpact() {
  return (
    <div className="bg-[#0A3D5F] text-white  px-4 md:pl-0 md:pr-2 h-[654px] overflow-auto gap-6 md:gap-8 flex flex-col custom-scrollbar">
      <div className="mx-auto pb-6 md:pb-8">
        <div className="grid grid-cols-1 gap-8">
          <div className="grid grid-cols-1 gap-8">
            <div className="flex items-start mb-4 bg-[#fbcfe8] text-black p-4 rounded-lg">
              <div className="bg-gray-300 p-2 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Economic Value</h2>
                <p className="text-sm">
                  As one of the largest NBFI&#39;s in the country, we play a key
                  role in facilitating wealth creation and access to finance in
                  Sri Lanka and Myanmar. A network of 200 branches in Sri Lanka
                  and 16 branches in Myanmar drives our growth, supporting
                  financial inclusion. Digitalisation, connectivity and strong
                  business partnerships facilitate our customers to manage their
                  finances in a digital era. The value created by LB Finance is
                  set out below.
                </p>
              </div>
            </div>

            <div className="border p-4 rounded-b-xl overflow-x-auto">
              <h3 className="text-lg font-bold mb-2">
                Economic Value Added Statement
              </h3>
              <EconomicValueAddedTable />
            </div>

            <div className="border p-4 rounded-b-xl overflow-x-auto">
              <h3 className="text-lg font-bold mt-6 mb-2">
                Market Value Added (MVA)
              </h3>
              <MarketValueAddedTable />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto pb-6 md:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="bg-blue-200 p-4 rounded-lg mb-4">
              <h2 className="text-xl font-bold mb-2">Access to Finance</h2>
              <p>
                LB Finance plays a key role supporting individuals,
                microentrepreneurs and small and medium businesses to obtain the
                funding they need to support their livelihoods.
              </p>
            </div>

            <div className="bg-[#DEB887] text-black p-4 rounded-lg mb-4">
              <h2 className="text-xl font-bold mb-2">
                Supporting income stability for people
              </h2>
              <p>
                LB Finance has consistently maintained deposit growth rates
                above the industry average reflecting the combination of
                attractive interest rates and financial stability. This has
                enabled people to earn a stable income, supplementing their
                other income sources. Accordingly, LBF paid Rs. 21,158 Mn as
                interest to our depositors and lenders. It is noteworthy that
                our depositors range from large to small as we ensure we remain
                inclusive and support customers throughout their life.
              </p>
            </div>

            <h3 className="text-xl font-bold mb-4">
              Provincial Distribution of Loans and Deposits
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <ProvinceData
                name="Northern Province"
                loans="6.36%"
                deposits="3%"
              />
              <ProvinceData
                name="North Central Province"
                loans="3.9%"
                deposits="1%"
              />
              <ProvinceData
                name="North Western Province"
                loans="8.55%"
                deposits="5%"
              />
              <ProvinceData
                name="Western Province"
                loans="46.65%"
                deposits="75%"
              />
              <ProvinceData
                name="Southern Province"
                loans="9.45%"
                deposits="6%"
              />
              <ProvinceData
                name="Eastern Province"
                loans="7.77%"
                deposits="1%"
              />
              <ProvinceData
                name="Central Province"
                loans="8.69%"
                deposits="6%"
              />
              <ProvinceData name="Uva Province" loans="3.8%" deposits="1%" />
              <ProvinceData
                name="Sabaragamuwa Province"
                loans="4.83%"
                deposits="2%"
              />
            </div>
          </div>

          <div className="bg-white text-black p-4 rounded-lg h-fit">
            <h3 className="text-xl font-bold mb-4">
              Province-wise Lending Customer Base
            </h3>
            {/* <Chart
              options={pieChartOptions}
              series={pieChartSeries}
              type="pie"
              height={350}
            /> */}
            <img
              src="/images/charts/socioEcoImpact/customerBase.png"
              alt="ownership image"
              className="w-full mb-4 rounded-lg"
            />

            <h3 className="text-xl font-bold mt-8 mb-4">
              Interest Paid to Fund Providers
            </h3>
            {/* <Chart
              options={barChartOptions}
              series={barChartSeries}
              type="bar"
              height={350}
            /> */}
            <div>
              <p className="text-right">Rs. Mn</p>
            </div>
            <img
              src="/images/charts/socioEcoImpact/fundProviders.png"
              alt="ownership image"
              className="w-full mb-4 rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className=" mx-auto pb-6 md:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-2 bg-white text-black p-4 rounded-lg mb-4">
            <h2 className="text-xl font-bold mb-2 flex items-center">
              Foreign Exchange
            </h2>
            <p>
              LBF facilitated migrant worker remittances through its money
              transfer business partners, enabling them to send money to their
              families in Sri Lanka. As inward remittances continue to increase
              in importance, this facilitation plays a key supporting role in
              the country&#39;s economic recovery.
            </p>
            {/* <ForeignExchangeCharts /> */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div>
                  <h2 className="text-lg font-bold my-2 flex items-center">
                    Foreign Exchange Transaction Volume
                  </h2>
                  <p className="text-right mt-4 text-lg">Rs. Mn</p>
                </div>
                <img
                  src="/images/charts/socioEcoImpact/forignExchange.png"
                  alt="ownership image"
                  className="w-full mb-4 rounded-lg md:h-[500px]"
                />
              </div>
              <div>
                <div>
                  <h2 className="text-lg font-bold my-2 flex items-center">
                    Foreign Exchange Transactions
                  </h2>
                  <p className="text-right mt-4 text-lg">No.</p>
                </div>
                <img
                  src="/images/charts/socioEcoImpact/forignExchange2.png"
                  alt="ownership image"
                  className="w-full mb-4 rounded-lg md:h-[500px]"
                />
              </div>
            </div>
          </div>

          <div className="col-span-2 bg-white text-black p-4 rounded-lg mb-4">
            <h2 className="text-xl font-bold mb-2 flex items-center">
              <span className="mr-2">👥</span>
              Employment
            </h2>
            <p>
              An island-wide branch network provides jobs for 2,194 employees.
              During the year, the value of remuneration and benefits offered to
              our employees was Rs. 4,095 Mn. LBF continues to invest in
              capacity building of our team, nurturing a culture of
              professionalism, learning and mentoring.
            </p>
            {/* <EmploymentChart /> */}
            <div className="flex flex-col items-center">
              <div className="md:w-1/2">
                <h2 className="text-lg font-bold my-2 flex items-center">
                  New Employment Opportunities
                </h2>
                <p className="text-right mt-4 text-lg">No.</p>
              </div>
              <img
                src="/images/charts/socioEcoImpact/newEmployeement.png"
                alt="ownership image"
                className="mb-4 w-full md:w-1/2 rounded-lg"
              />
            </div>
          </div>

          <div className="col-span-2 bg-white text-black p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-2 flex items-center">
              <span className="mr-2">⚙️</span>
              Continuous Innovation - Digital Access
            </h2>
            <p>
              As a leading digital disruptor in Sri Lanka&#39;s Non-Bank
              Financial Institution (NBFI) sector, we focus on fostering the
              growth of SMEs/MSMEs by facilitating access to formal financial
              services.
            </p>
            {/* <CIMAppCharts /> */}
            <div className="grid md:flex gap-6">
              <div className="flex flex-col items-center">
                <div>
                  <h2 className="text-lg font-bold my-2 flex items-center">
                    CIM App Transaction Volume
                  </h2>
                  <p className="text-right mt-4 text-lg">Rs. Mn</p>
                </div>
                <img
                  src="/images/charts/socioEcoImpact/cimApptv.png"
                  alt="ownership image"
                  className="mb-4 rounded-lg"
                />
              </div>
              <div className="flex flex-col items-center">
                <div>
                  <h2 className="text-lg font-bold my-2 flex items-center">
                    CIM App Transactions
                  </h2>
                  <p className="text-right mt-4 text-lg">No.</p>
                </div>
                <img
                  src="/images/charts/socioEcoImpact/cimAppt.png"
                  alt="ownership image"
                  className="mb-4 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#DEB887] text-black p-4 rounded-lg h-fit">
            <h2 className="text-xl font-bold mb-2 flex items-center">
              <span className="mr-2">👩‍💼</span>
              Women empowerment
            </h2>
            <p className="mb-4">
              We continue to empower and support women, emphasising equal
              opportunities in the workplace, enhancing female representation in
              leadership roles, and extending financial support to businesses
              led by women
            </p>
            <table className="w-full">
              <tbody>
                <tr>
                  <td>Product for women empowerment</td>
                  <td>&#39;Wanitha Ran Saviya&#39;</td>
                </tr>
                <tr>
                  <td>
                    Gold loans granted for women empowerment through
                    &#39;Wanitha Ran Saviya&#39;
                  </td>
                  <td>Rs. 2,364 Mn.</td>
                </tr>
                <tr>
                  <td>Percentage of female employees promoted</td>
                  <td>50%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white text-black p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-2 flex items-center">
              <span className="mr-2">🏡</span>
              Rural Development
            </h2>
            <p>
              We contribute to the development of provincial economies through
              our branch network across the island. Aligning with our commitment
              to promote equitable access for all Sri Lankans, our branch
              expansion strategy focuses on reaching out to customers outside
              the Western province.
            </p>
            {/* <BranchesChart /> */}
            <div className="flex flex-col justify-center">
              <div>
                <h2 className="text-lg font-bold my-2 flex items-center">
                  No. of Branches
                </h2>
                <p className="text-right mt-4 text-lg">No.</p>
              </div>
              <img
                src="/images/charts/socioEcoImpact/westernBranches.png"
                alt="ownership image"
                className="mb-4 rounded-lg w-full"
              />
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <img
                src="/images/annual-report/women-shop.jpg"
                alt="Woman in shop"
                className="w-full h-full"
              />
              <img
                src="/images/annual-report/women-working.jpg"
                alt="Woman working"
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 bg-white text-black p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-2 flex items-center">
              <span className="mr-2">🤝</span>
              Supporting Communities
            </h2>
            <p className="mb-4">
              Our dedication to community upliftment was reflected through our
              investments in CSR projects focused on addressing critical
              national priorities including education and community well-being.
            </p>
            <p>
              Establishing a rehabilitation center, communities can foster an
              environment of healing and recovery, offering individuals a chance
              to rebuild their lives while simultaneously benefiting society as
              a whole
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
              <Image
                src={csr1}
                alt="Community project 1"
                className="w-full h-full"
              />
              <Image
                src={csr2}
                alt="Community project 2"
                className="w-full h-full"
              />
              <Image
                src={csr3}
                alt="Community project 3"
                className="w-full h-full"
              />
              <Image
                src={csr4}
                alt="Community project 4"
                className="w-full h-full"
              />
            </div>
            {/* <InvestmentChart /> */}
            <h2 className="text-xl font-bold mb-2 text-center">
              Investment in CSR
            </h2>
            <div className="flex justify-center">
              <div className="flex flex-col md:w-1/2">
                <p className="text-right">Rs Mn.</p>
                <img
                  src="/images/charts/socioEcoImpact/investmentCsr.png"
                  alt="ownership image"
                  className="mb-4 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
