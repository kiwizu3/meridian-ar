'use client';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
const foreignCurrencyOptions: ApexOptions = {
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
        text: 'Transaction Volume (Rs. Mn)',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Transaction Volume (No.)',
      },
    },
  ],
  colors: ['#008FFB', '#00E396'],
};

const foreignCurrencySeries = [
  {
    name: 'Transaction Volume (Rs. Mn)',
    type: 'column',
    data: [200, 150, 180, 120, 100],
  },
  {
    name: 'Transaction Volume (No.)',
    type: 'line',
    data: [5000, 4000, 3500, 3000, 2000],
  },
];

const billPaymentOptions: ApexOptions = {
  chart: {
    type: 'bar',
    height: 350,
  },
  xaxis: {
    categories: [
      'Apr-22',
      'May-22',
      'Jun-22',
      'Jul-22',
      'Aug-22',
      'Sep-22',
      'Oct-22',
      'Nov-22',
      'Dec-22',
      'Jan-23',
      'Feb-23',
      'Mar-23',
    ],
  },
  yaxis: [
    {
      title: {
        text: 'Transaction Volume (Rs. Mn)',
      },
    },
    {
      opposite: true,
      title: {
        text: "Transaction Volume (No. '000)",
      },
    },
  ],
  colors: ['#008FFB', '#00E396'],
};

const billPaymentSeries = [
  {
    name: 'Transaction Volume (Rs. Mn)',
    type: 'column',
    data: [60, 65, 70, 68, 72, 75, 80, 82, 85, 88, 90, 100],
  },
  {
    name: "Transaction Volume (No. '000)",
    type: 'line',
    data: [40, 45, 50, 49, 52, 55, 58, 60, 62, 65, 68, 80],
  },
];

const westernUnionOptions: ApexOptions = {
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
        text: 'Transaction Volume (Rs. Mn)',
      },
    },
    {
      opposite: true,
      title: {
        text: "Transaction Volume (No. '000)",
      },
    },
  ],
  colors: ['#008FFB', '#00E396'],
};

const westernUnionSeries = [
  {
    name: 'Transaction Volume (Rs. Mn)',
    type: 'column',
    data: [2000, 2500, 3000, 4000, 5000],
  },
  {
    name: "Transaction Volume (No. '000)",
    type: 'line',
    data: [30, 35, 38, 45, 50],
  },
];
export default function ValueAddedService() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 h-[654px] overflow-auto flex flex-col gap-6 custom-scrollbar">
      <div className="p-6 bg-white rounded-lg grid gap-6">
        <div className="grid gap-6">
          <div>
            <img
              src="/images/annual-report/value-banner.png"
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
                We offer customers streamlined payment systems and a range of
                Value Added Services (VAS) through interconnected channels,
                aiming to give them full control over their finances. With an
                extensive branch network, we efficiently process utility
                payments, foreign currency exchange, and money remittance
                (Western Union) to meet our clients’ needs comprehensively.
              </p>
            </div>

            <div className="bg-white text-black rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#f58b45]">
                    CORE COMPETENCIES
                  </h3>
                  <ul className="list-disc pl-5">
                    <li>Versatile customer-focused solutions</li>
                    <li>Consistent and uninterrupted service delivery</li>
                    <li>Wide multi-channel network for easy accessibility</li>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold">VAS VOLUME</p>
                      <p className="text-2xl font-bold text-[#4f70b8]">
                        Rs. 5,724 Mn
                      </p>
                      <p className="text-sm">(2022/23- Rs. 5,513 Mn)</p>
                    </div>

                    <div>
                      <p className="font-semibold">
                        BILL PAYMENT TRANSACTIONS VOLUME GROWTH
                      </p>
                      <p className="text-2xl font-bold text-[#4f70b8]">57%</p>
                      <p className="text-sm">(2022/23- 4%)</p>
                    </div>

                    <div>
                      <p className="mt-4 font-semibold">
                        WESTERN UNION TRANSACTION VOLUME
                      </p>
                      <p className="text-2xl font-bold text-[#4f70b8]">
                        Rs. 4,594 Mn
                      </p>
                      <p className="text-sm">(2022/23- Rs. 4,742 Mn)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-white text-black">
              <div className="flex justify-center">
                <h3 className="text-lg font-semibold mp-2 bg-[#0b466e] text-white px-10 md:px-20 rounded-t-lg w-fit">
                  PRODUCT PORTFOLIO
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 border-dashed border-black border-2 rounded-b-2xl p-2">
                <div className="flex justify-center py-4">
                  <img
                    src="/images/annual-report/LbBillPaymentsLogo.jpg"
                    alt="product logo"
                    className="md:w-full"
                  />
                </div>

                <div className="flex justify-center py-4">
                  <img
                    src="/images/annual-report/WU Logo - New.jpg"
                    alt="product logo"
                    className="md:w-full"
                  />
                </div>

                <div className="flex justify-center py-4">
                  <img
                    src="/images/annual-report/moneyexchange.png"
                    alt="product logo"
                    className="md:w-full"
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
                      <ul className="list-disc pl-5">
                        <li>Strong reputation</li>
                        <li>Exceptional customer service</li>
                        <li>Long operating hours</li>
                        <li>Loyal customer base</li>
                      </ul>
                    </div>
                    <div className="bg-[#4f70b8] w-10 h-10 flex justify-center items-center absolute bottom-0 right-0 border-white border rounded-b-2xl rounded-tr-2xl">
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
                        <li>Unexpected network and technical issues.</li>
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
                        <li>Resurgence of tourism</li>
                        <li>Increased number of expatriates</li>
                        <li>Rise in migration</li>
                        <li>• Ability to cross sell other products.</li>
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
                        <li>Volatility in exchange rate</li>
                        <li>Intense competition</li>
                        <li>Competitive mobile apps</li>
                        <li>Competitors’ customer loyalty programmes </li>
                      </ul>
                    </div>
                    <div className="bg-[#cfa25b] w-10 h-10 flex justify-center items-center absolute top-0 left-0 border-white border rounded-t-2xl rounded-bl-2xl">
                      <h2 className="text-2xl text-white font-bold">T</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="bg-white text-black rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-[#f58b45]">
              FOREIGN CURRENCY OPERATIONS (FC)
            </h3>
            <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
              Operating Context and Strategy
            </h3>

            <p>
              The volatile exchange rate adversely impacted the FC operations
              during the year whilst the increase in tourist arrivals and Sri
              Lankans going overseas for employment positively impacted FC
              operations in FY 2023/24.
            </p>
            <p className="mt-4">
              To mitigate the impact of volatile exchange rates, we refrained
              from stockpiling currencies and increased the gap of buying and
              selling rates to minimise potential losses. Instead, we opted for
              immediate currency trading to adapt swiftly to market
              fluctuations.
            </p>
            <p className="mt-4">
              The 106% YoY surge in tourist arrivals led to a 19.35% increase in
              foreign currency exchange transactions. While foreign currency
              operations were initially limited to 63 branches, we are currently
              in the process of expanding this service to all branches to
              increase our transaction volumes.
            </p>
            <p className="mt-4">
              Additionally, we have initiated discussions with the Central Bank
              of Sri Lanka (CBSL) to exchange Indian Rupees following the
              permission granted by the CBSL to trade in these currencies. This
              development opens new avenues for us to diversify our money
              exchange portfolio and better serve our customers’ needs.
            </p>
            <p className="mt-4">
              Marketing campaigns were carried out to enhance our visibility,
              create customer awareness and improve the accessibility of our
              services. Visibility was improved both internally and externally
              through mediums such as A-boards, door stickers, advertising on
              Monopoles, sideboards, and LED panels. Internally, we used
              backdrops and tabletops to maintain consistent visibility.
            </p>
            <p className="mt-4">
              To foster awareness, we used SMS, leaflets, and social media
              platforms. Moreover, through strategic cross-selling and
              increasing customer awareness, we strive to continually enhance
              our brand recognition and service accessibility.
            </p>
          </div>

          {/* Performance */}
          <div className="bg-white text-black rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
              Performance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                {' '}
                <p>
                  The Fixed Deposit (FD) base expanded by 7%, while including
                  savings, the growth reached 8%. The Fixed Deposit renewal
                  ratio was maintained above 75%, which is a testament to the
                  Company’s ability to retain its existing customers and sustain
                  their trust and satisfaction over the years. In terms of
                  tenure, 72% of our deposits were within the 1 month to 1-year
                  range, while 28% extended over 1 year to 5 years.
                </p>
              </div>

              <div className="bg-white text-black p-6 border border-black rounded-tl-2xl">
                <h3 className="text-xl font-semibold mb-4 text-[#4f70b8] text-center">
                  Foreign Currency Exchange
                </h3>
                {/* <Chart
            options={foreignCurrencyOptions}
            series={foreignCurrencySeries}
            type="line"
            height={350}
          /> */}
                <img
                  src="/images/charts/businessReview/vForeignCurrencyExchange.png"
                  alt="ownership image"
                  className="w-full mb-4 rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="bg-white text-black">
            <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
              Outlook
            </h3>
            <p className="mt-4">
              Looking ahead, we aim to further expand our transaction volumes by
              leveraging the resurgence in the market. We plan to collaborate
              with travel agents and hotels to offer currency transactions at
              special rates, thereby capturing a larger market share. Moreover,
              maintaining our competitive exchange rates remains a priority
              going forward.
            </p>
          </div>

          <div className="bg-white text-black rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-[#f58b45]">
              BILL PAYMENTS
            </h3>
            <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
              Operating Context and Strategy
            </h3>

            <p>
              During the year, we partnered with mCash to streamline bill
              payments through our platform to Western Union sub-agents
              affiliated with LBF. Our objective is to expand and enhance this
              initiative in the coming years to tap into a broader market
              segment. Additionally, we plan to leverage the mCash app to
              facilitate insurance payments for leasing facilities. Moreover,
              customers are enabled to make bill payments through the CIM app.
            </p>
          </div>

          {/* Performance */}
          <div className="bg-white text-black rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
              Performance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                {' '}
                <p>
                  The transaction volumes increased by 57% YoY, mainly driven by
                  the increase in bill values. However, the value of
                  transactions recorded a slight decline of 4.29% YoY, primarily
                  due to the decrease in reload transactions.
                </p>
              </div>

              <div className="bg-white text-black p-6 border border-black rounded-tl-2xl">
                <h3 className="text-xl font-semibold mb-4 text-[#4f70b8] text-center">
                  Bill Payment Transactions
                </h3>
                {/* <Chart
            options={billPaymentOptions}
            series={billPaymentSeries}
            type="bar"
            height={350}
          /> */}
                <img
                  src="/images/charts/businessReview/vBillPaymentTransactions.png"
                  alt="ownership image"
                  className="w-full mb-4 rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="bg-white text-black">
            <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
              Outlook
            </h3>
            <p className="mt-4">
              We aim to expand our reach through collaborative promotions with
              more communication service providers to elevate awareness of the
              CIM App. Additionally, aim to grow our volumes by implementing
              branch targets, with recognition and rewards given to high
              achievers. Our aim is to achieve a significant increase of 10,000
              transactions to reach a total of 75,000 in the ensuing FY.
            </p>
          </div>

          <div className="bg-white text-black rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-[#f58b45]">
              WESTERN UNION
            </h3>
            <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
              Operating Context and Strategy
            </h3>

            <p>
              We continued to capitalise on our status as a principal agent of
              the Western Union money transfer network, strengthened by the
              appointment of sub-agents. The LB CIM Business Loan team also
              engaged in cross-selling and raising awareness of the LBF’s money
              transfer facility. Through our remittance service, we primarily
              facilitate cash transactions, enabling recipients to collect their
              funds in person. However, a decreasing trend was observed in cash
              transactions. To address this trend, we are exploring the
              feasibility of integrating cash transactions into the CIM App,
              aligning with evolving customer preferences and enhancing
              convenience for our use. To achieve volumes, we have assigned
              staff targets with rewards. Additionally, a customer loyalty
              programme was implemented, rewarding customers based on the value
              of their transactions. We have remained committed to facilitating
              cash transactions, ensuring convenience and reliability for our
              customers.
            </p>
          </div>

          {/* Performance */}
          <div className="bg-white text-black rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
              Performance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                {' '}
                <p>
                  The total Dollar remittances processed through LBF’s Western
                  Union channel increased by an impressive 9.38% YoY. The Rupee
                  volume decreased marginally by 3.12% whilst the number of
                  transactions too declined by a marginal 0.14% YoY.
                </p>
              </div>

              <div className="bg-white text-black p-6 border border-black rounded-tl-2xl">
                <h3 className="text-xl font-semibold mb-4 text-[#4f70b8] text-center">
                  Western Union Transactions
                </h3>
                {/* <Chart
            options={westernUnionOptions}
            series={westernUnionSeries}
            type="line"
            height={350}
          /> */}
                <img
                  src="/images/charts/businessReview/vWesternUnionTransactions.png"
                  alt="ownership image"
                  className="w-full mb-4"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <img
                src="/images/charts/businessReview/yourreward1.png"
                className="w-full rounded-lg"
                alt="your reward"
              />
            </div>
            <div>
              <img
                src="/images/charts/businessReview/yourreward2.png"
                className="w-full rounded-lg"
                alt="your reward"
              />
            </div>
            <div>
              <img
                src="/images/charts/businessReview/yourreward3.png"
                className="w-full rounded-lg"
                alt="your reward"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <img
              src="/images/charts/businessReview/valueobjectivestable.png"
              alt="objectives table"
              className="lg:w-full max-w-[800px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
