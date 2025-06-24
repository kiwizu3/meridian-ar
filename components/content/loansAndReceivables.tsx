'use client';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
const productPortfolioChartOptions: ApexOptions = {
  chart: {
    type: 'donut',
  },
  labels: [
    'Lease/vehicle loan/PD',
    'Gold loan',
    'Mortgage loan',
    'FD loan',
    'Personal loan',
    'Digital loan',
    'Other',
  ],
  colors: [
    '#4e79a7',
    '#f28e2c',
    '#e15759',
    '#76b7b2',
    '#59a14f',
    '#edc949',
    '#af7aa1',
  ],
  legend: {
    position: 'bottom',
  },
};

const productPortfolioSeries = [45, 20, 15, 10, 5, 3, 2];

const autoLoansChartOptions: ApexOptions = {
  chart: { type: 'bar', stacked: true },
  xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  yaxis: [
    { title: { text: 'Rs Mn' }, max: 80000 },
    { title: { text: '%' }, opposite: true, max: 70 },
  ],
  colors: ['#4CAF50', '#2196F3'],
  dataLabels: { enabled: false },
  stroke: { width: [0, 2] },
  plotOptions: { bar: { columnWidth: '50%' } },
};

const autoLoansChartSeries = [
  {
    name: 'Auto Finance Portfolio',
    type: 'column',
    data: [50000, 65000, 68000, 68900, 78600],
  },
  {
    name: 'Auto Finance Portfolio as a % of total loans',
    type: 'line',
    data: [40, 45, 47, 47, 49],
  },
];

const goldLoanChartOptions: ApexOptions = {
  chart: { type: 'line', stacked: false },
  xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  yaxis: [
    { title: { text: 'Rs Mn' }, max: 80000 },
    { title: { text: '%' }, opposite: true, max: 70 },
  ],
  colors: ['#4CAF50', '#2196F3'],
  stroke: { width: [4, 2] },
  markers: { size: 5 },
};

const goldLoanChartSeries = [
  {
    name: 'Gold Loan Portfolio',
    type: 'column',
    data: [30000, 35000, 45000, 67000, 73000],
  },
  {
    name: 'Gold Loan Portfolio as a % of total loans',
    type: 'line',
    data: [20, 25, 35, 46, 45],
  },
];

const mortgageLoanChartOptions: ApexOptions = {
  chart: { type: 'line', stacked: false },
  xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  yaxis: [
    { title: { text: 'Rs. Mn' }, max: 6000 },
    { title: { text: '%' }, opposite: true, max: 4 },
  ],
  colors: ['#4CAF50', '#2196F3'],
  stroke: { width: [4, 2] },
  markers: { size: 5 },
};

const mortgageLoanChartSeries = [
  {
    name: 'Mortgage Loan',
    type: 'column',
    data: [5000, 4000, 3000, 2460, 2140],
  },
  {
    name: 'Mortgage Loan Portfolio as a % of total loans',
    type: 'line',
    data: [3.5, 3, 2, 1, 1],
  },
];
const digitalLoanChartOptions: ApexOptions = {
  chart: { type: 'bar' },
  xaxis: { categories: ['2022', '2023', '2024'] },
  yaxis: { title: { text: 'Rs. Mn' } },
  colors: ['#4CAF50'],
};

const digitalLoanChartSeries = [
  { name: 'Digital Loans Portfolio', data: [240, 324, 361] },
];

const pensionLoanChartOptions: ApexOptions = {
  chart: { type: 'line' },
  xaxis: { categories: ['2021', '2022', '2023', '2024'] },
  yaxis: { title: { text: 'Growth %' } },
  colors: ['#2196F3'],
  markers: { size: 6 },
};

const pensionLoanChartSeries = [
  { name: 'Growth in the Pension Loan Portfolio', data: [40, 50, -5, 21] },
];

const loansAgainstFDChartOptions: ApexOptions = {
  chart: { type: 'line', stacked: false },
  xaxis: { categories: ['2020', '2021', '2022', '2023', '2024'] },
  yaxis: [
    { title: { text: 'Rs. Mn' }, max: 4000 },
    { title: { text: '%' }, opposite: true, max: 4 },
  ],
  colors: ['#4CAF50', '#2196F3'],
  stroke: { width: [4, 2] },
  markers: { size: 5 },
};

const loansAgainstFDChartSeries = [
  {
    name: 'Loan against FDs',
    type: 'column',
    data: [3000, 3000, 3500, 2500, 2900],
  },
  {
    name: 'Loan against FD as a % of total loans',
    type: 'line',
    data: [3, 3, 3.5, 2, 2],
  },
];
export default function LoansAndReceivables() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 h-[654px] overflow-auto flex flex-col gap-6 custom-scrollbar">
      <div className="p-6 bg-white rounded-lg grid gap-6">
        <div className="grid gap-6">
          <div>
            <img
              src="/images/annual-report/loan-banner.png"
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
                Our financing strategy, aligned with our Company’s goals, aims
                to make LBF the top lending solutions provider in Sri Lanka. We
                focus on enhancing our lending portfolio for individuals and
                businesses through activities such as leasing, vehicle loans,
                mortgage loans, gold loans, and other credit options to achieve
                our long-term, medium-term, and short-term objectives.
              </p>
            </div>

            <div className="bg-white text-black rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#f58b45]">
                    CORE COMPETENCIES
                  </h3>
                  <ul className="list-disc pl-5">
                    <li>
                      Diverse product suite catering to all customer segments
                    </li>
                    <li>
                      Customised solutions catering to individual customer
                    </li>
                    <li>
                      Wide and multi-channel network for easy accessibility
                    </li>
                    <li>Exceptional service and quick response time</li>
                  </ul>
                </div>
                <div className="bg-white text-black rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-[#f58b45]">
                    PERFORMANCE HIGHLIGHTS
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold">
                        LEASE, VEHICLE LOANS AND POWER DRAFT PORTFOLIO GROWTH
                      </p>
                      <p className="text-2xl font-bold text-[#4f70b8]">14%</p>
                      <p className="text-sm">(2022/23 - 11%)</p>
                    </div>

                    <div>
                      <p className="font-semibold">
                        LOANS AND RECEIVABLES PORTFOLIO
                      </p>
                      <p className="text-2xl font-bold text-[#4f70b8]">
                        Rs. 161 Bn
                      </p>
                      <p className="text-sm">(2022/23 - Rs. 145 Bn)</p>
                    </div>

                    <div>
                      <p className="mt-4 font-semibold">
                        GOLD LOAN PORTFOLIO GROWTH
                      </p>
                      <p className="text-2xl font-bold text-[#4f70b8]">10%</p>
                      <p className="text-sm">(2022/23 - 46%)</p>
                    </div>

                    <div>
                      <p className="mt-4 font-semibold">
                        LENDING CUSTOMER BASE
                      </p>
                      <p className="text-2xl font-bold text-[#4f70b8]">
                        400,000+
                      </p>
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
              <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 border-dashed border-black border-2 rounded-b-2xl p-2">
                <div className="flex justify-center">
                  <img
                    src="/images/annual-report/lbleasing.png"
                    alt="product logo"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src="/images/annual-report/3wlleasing.png"
                    alt="product logo"
                  />
                </div>

                <div className="flex justify-center">
                  <img
                    src="/images/annual-report/motercycleleasing.png"
                    alt="product logo"
                  />
                </div>

                <div className="flex justify-center">
                  <img
                    src="/images/annual-report/powerplus.png"
                    alt="product logo"
                  />
                </div>

                <div className="flex justify-center">
                  <img
                    src="/images/annual-report/powerdraft.png"
                    alt="product logo"
                  />
                </div>

                <div className="flex justify-center">
                  <img
                    src="/images/annual-report/personalloans.png"
                    alt="product logo"
                  />
                </div>

                <div className="flex justify-center">
                  <img
                    src="/images/annual-report/mulgala.png"
                    alt="product logo"
                  />
                </div>

                <div className="flex justify-center">
                  <img
                    src="/images/annual-report/mortageloan.png"
                    alt="product logo"
                  />
                </div>

                <div className="flex justify-center">
                  <img
                    src="/images/annual-report/goldloan.png"
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
                        <li>Diverse product portfolio</li>
                        <li>Prompt customer service</li>
                        <li>Competent team</li>
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
                        <li>
                          Staff turnover due to the macro-economic conditions of
                          the country
                        </li>
                        <li>Limited regional presence (Myanmar)</li>
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
                        <li>Adverse fiscal policies</li>
                        <li>High bargaining power of the customer</li>
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
                    Product Portfolio
                  </h3>
                  {/* <ReactApexChart
              options={donutChartOptions}
              series={donutSeries}
              type="donut"
              height={300}
            /> */}
                  <img
                    src="/images/charts/businessReview/lProductPortfolio.png"
                    alt="ownership image"
                    className="w-full mb-4 rounded-lg"
                  />
                </div>
                <div className="bg-white text-black overflow-x-auto ">
                  <h3 className="text-lg font-semibold mb-2 text-[#f58b45]">
                    LEASE/ VEHICLE LOANS AND POWER DRAFT
                  </h3>
                  <div className="bg-white text-black rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
                      Operating Context and Strategy
                    </h3>
                    <p>
                      The operating context in the financial year 2023/24
                      improved compared to the previous year, marked by a
                      continued decline in interest rates and improved business
                      sentiments. This shift benefited the auto loans business,
                      making it more attractive, resulting in increased volumes
                      and improved contribution to the Company’s bottom line.
                    </p>
                    <p className="mt-4">
                      During the FY, we remained committed to expanding our
                      lending activities and supporting our customers’ financial
                      needs. Our focus was on expanding our existing portfolio
                      with improved service and customer-centric initiatives.
                      Notably, after a pause of three years, we resumed lending
                      to the tourism sector, placing a greater emphasis on this
                      industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="bg-white text-black rounded-lg">
            <p>
              Our credit marketing team reduced by 30% during the FY, reflecting
              the broader industry challenges stemming from the country’s
              situation. Therefore, emphasis was placed on recruitment and
              training, resulting in the successful restoration of our team. The
              LB Pinnacle Club was launched to recognise top performers.
              Moreover, we successfully retained our top performers by close
              communication, incentivising top performers, and fostering a
              culture of excellence.
            </p>
            <p className="mt-4">
              In terms of marketing and promotions, we sustained our annual
              promotions ensuring consistency in our marketing efforts. We
              invested in branding initiatives to resonate with the improving
              business sentiment, aligning our brand with the positive economic
              outlook.
            </p>
          </div>

          {/* Performance */}
          <div className="bg-white text-black rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
                Performance
              </h3>
              <p>
                The Auto Loans business delivered a commendable performance for
                FY 2023/24, in tandem with the improved lending sentiments. Auto
                finance portfolio increased by 14% YoY to Rs. 78.6 Bn. from Rs.
                68.9 Bn. the previous year. Auto finance portfolio as a % of
                total loans too increased from 47% to 49% in 2023/24.
              </p>
            </div>
            <div className="bg-white text-black p-6 border border-black rounded-tl-2xl">
              <h3 className="text-xl font-semibold mb-4 text-[#4f70b8] text-center">
                Lease, Vehicle Loans and Power Draft (Auto Finance)
              </h3>
              {/* <ReactApexChart
              options={renewalRatioOptions}
              series={renewalRatioSeries}
              type="line"
              height={300}
            /> */}
              <img
                src="/images/charts/businessReview/lpowerDraftAutoFinance.png"
                alt="ownership image"
                className="w-full mb-4 rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="bg-white text-black rounded-lg">
          <h3 className="text-xl font-semibold my-4 text-[#4f70b8]">
            NPL Management
          </h3>
          <p>
            The recovery team demonstrated exceptional performance, maintaining
            diligent follow-up with customers ensuring their needs were
            addressed promptly. Moreover, we took proactive measures to comply
            with the CBSL regulations effective from April 2023. Therefore, the
            impact on Non-Performing Loans (NPLs) was minimal. Although there
            was a slight increase in the NPL initially, it was reduced to 3.54%
            by the end of the fiscal year. We remained committed to expanding
            our lending activities and supporting our customers’ financial
            needs.
          </p>
          <p className="mt-4">
            Furthermore, our call centre played a crucial role in facilitating
            close coordination with various operational departments, ensuring
            smooth communication with customers and efficient resolution of
            issues.
          </p>
        </div>

        <div className="bg-white text-black rounded-lg">
          <h3 className="text-xl font-semibold my-4 text-[#4f70b8]">
            Extending Support to Our Customers
          </h3>
          <p>
            We maintained close engagement with our customers, seeking solutions
            to mitigate their losses and manage risks. Many customers
            independently found solutions to their challenges and successfully
            navigated through their difficulties. We provided the following
            concessions during the year.
          </p>
          <ul className="pl-5 list-disc mt-4">
            <li>
              Offered interest waivers and reduced rates on flexible facilities
              in line with the declining interest rates
            </li>
            <li>Rebated the accumulated overdue interests</li>
            <li>
              Provided concessions to genuine customers for settlement of
              facilities
            </li>
            <li>
              Rescheduled facilities accommodating the financial challenges of
              customers
            </li>
          </ul>
        </div>

        <div className="bg-white text-black rounded-lg">
          <h3 className="text-xl font-semibold my-4 text-[#4f70b8]">Outlook</h3>
          <p>
            We will commence the ensuing FY on a solid footing with our
            well-trained staff. To streamline loan disbursement, we will
            integrate the CIM app for smoother processing. We will engage in
            enhancing our brand and overall business visibility and actively
            promote pension loans and mortgage financing. Despite our current
            market share standing at 12%, our goal is to increase it by offering
            the most competitive rates. We aim to maintain our position as the
            market leader in terms of value propositions and attractiveness to
            customers.
          </p>
        </div>

        <div className="grid gap-6">
          {/* Savings Section */}
          <div className="bg-white text-black rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-[#f58b45]">
              GOLD LOANS
            </h3>
            <h3 className="text-xl font-semibold my-4 text-[#4f70b8]">
              Operating Context and Strategy
            </h3>
            <p>
              The gold prices in Sri Lanka dropped in Q1 of FY2024 driven by a
              decline in global gold prices and the appreciation of the Sri
              Lankan rupee. This trend coincided with a negative growth in the
              Gold Loan portfolio of LFCs during the year. Accordingly, the Gold
              Loan portfolio of LFCs decreased notably from Rs. 229,800 Mn in FY
              2022 to Rs. 218,923 Mn in FY 2023. This was mainly due to the
              majority of customers moving to banks from finance companies to
              take advantage of the reduced interest rates during the FY under
              review.
            </p>
            <p className="mt-4">
              In this context, we focused on regaining our market share by
              maintaining a close relationship with our customers, adjusting
              their payment patterns and encouraging them to maintain interest
              payments to sustain their gold loan facilities. Moreover, to
              capture the business community, we strategically lowered our rates
              to be more competitive and conducted quarterly promotional
              campaigns tailored to their specific needs. A new product was
              launched targeting large ticket businesses. Furthermore, every
              quarter, we conducted a series of promotional campaigns targeting
              specific customer segments.
            </p>
            <p className="mt-4">
              It is noteworthy to mention that we are the first finance company
              in Sri Lanka to launch a Gold Loan product catered for women. With
              52% of our customer base comprising women entrepreneurs, engaged
              in home industries, the “Vanitha Ran saviya” was launched to
              empower women during the year.
            </p>
            <p className="mt-4">
              {' '}
              Our customer experience was enhanced by conducting a raffle draw,
              giving away 50 gold chains and bracelets to the winners, delivered
              to their homes. This is our second year of rewarding our
              customers, having gifted gold coins in the previous year.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <img
                src="/images/charts/businessReview/lbwanitha.png"
                alt="ownership image"
                className="w-full mb-4 rounded-lg"
              />
            </div>
            <div>
              <img
                src="/images/charts/businessReview/lbwanitha2.png"
                alt="ownership image"
                className="w-full mb-4 rounded-lg"
              />
            </div>
            <div>
              <img
                src="/images/charts/businessReview/lbwanitha3.png"
                alt="ownership image"
                className="w-full mb-4 rounded-lg"
              />
            </div>
          </div>

          {/* Operating Context and Strategy */}
          <div className="bg-white text-black">
            <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
              Performance
            </h3>
            <p className="mt-4">
              Through our CIM platform, we offer unparalleled convenience to our
              customers by enabling all transactions to be conducted from the
              comfort of their homes, eliminating the need to visit a branch.
              Once the facility is granted, customers need to visit the branch
              when redeeming the article only. With an average of Rs. 2 Bn.
              top-ups processed through the CIM app, we have minimised paperwork
              and manual work while providing exceptional convenience.
              Consequently, top-up facilities have significantly increased YoY,
              reflecting the efficiency and popularity of our streamlined
              processes.
            </p>
            <p className="mt-4">
              The Gold Loan portfolio increased by 10% YoY from Rs. 67 Bn. as of
              31 March 2023 to Rs. 73 Bn. as of 31 March 2024. The proportion of
              Gold Loans in the total portfolio declined marginally from 46% to
              45% in 2023/24.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="p-4 bg-[#cfa25b] rounded-b-2xl">
                <p className="text-white">
                  The only Financial Institution in Sri Lanka to launch a Gold
                  Loan product to empower women
                </p>
              </div>
            </div>
            <div className="bg-white text-black p-6 border border-black rounded-tl-2xl">
              <h3 className="text-xl font-semibold mb-4 text-[#4f70b8] text-center">
                Gold Loan
              </h3>
              {/* <ReactApexChart
              options={cimWalletOptions}
              series={cimWalletSeries}
              type="bar"
              height={300}
            /> */}
              <img
                src="/images/charts/businessReview/lGoldLoan.png"
                alt="ownership image"
                className="w-full mb-4 rounded-lg"
              />
            </div>
            <div>
              <div className="p-4 bg-[#cfa25b] rounded-b-2xl">
                <p className="text-white">
                  The only Financial Institution to facilitate Gold Loan top-ups
                  and renewals through the digital app
                </p>
              </div>
            </div>
          </div>

          {/* Customer Loyalty Services */}
          <div className="bg-white text-black">
            <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
              NPL Management
            </h3>
            <p className="mt-4">
              We successfully maintained our NPL ratio below the industry
              average, recording a value of 0.17% for the FY 2023/24 compared to
              0.35% in the FY 2022/23.
            </p>
            <p className="mt-4">
              Several proactive measures were implemented including stringent
              postdisbursement follow-up by the call centre and recovery action
              by branch teams to ensure effective management of portfolio
              quality throughout the current year.
            </p>
          </div>

          <div className="bg-white text-black">
            <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
              Extending Support to Our Customers
            </h3>
            <p className="mt-4">
              With a dedicated workforce of 1200 employees and a well-organised
              business structure, we prioritise meticulous supervision and
              monitoring of our facilities. In addition, we have taken steps to
              educate our customers on using the LB CIM app, thereby enhancing
              their digital literacy and providing convenient financial
              solutions. Setting ourselves apart from other players in the LFC
            </p>
            <p className="mt-4">
              sector, we provide exclusive customer services such as fund
              top-ups and gold loan facility renewals through the CIM app,
              eliminating the need for branch visits. The camaraderie,
              collaboration, competence, and commitment of our staff enable us
              to consistently deliver exceptional customer service year-round.
              We offer more than just financial facilities to our loyal
              customers including caring and loyal service, and fostering
              enduring relationships.
            </p>
          </div>

          <div className="bg-white text-black">
            <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
              Outlook
            </h3>
            <p className="mt-4">
              Leveraging our island-wide network, we will continue to serve
              customers across Sri Lanka. Even as gold holds significance at
              every milestone in life, we will support and serve our customers
              through each of these moments. We have fostered enduring
              relationships over the years through personalised service and
              support. We will continue to grow our business and enrich the
              experiences of our customers.
            </p>
          </div>

          <div className="bg-white text-black rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-[#f58b45]">
              MORTGAGE LOANS
            </h3>
            <h3 className="text-xl font-semibold my-4 text-[#4f70b8]">
              Operating Context and Strategy
            </h3>
            <p>
              The operating context was marked by several challenges, including
              high-interest rates and inflation, soaring condominium prices, and
              rising building material costs. Government regulations,
              particularly income taxes, also had a significant impact on the
              disposable income of families, reducing their repayment capacity.
              Consequently, the demand for mortgage loans declined during the FY
              2023/24.
            </p>
            <p className="mt-4">
              However, recognising an opportunity among expatriates and Sri
              Lankans migrating for white-collar jobs, we strategically directed
              our efforts towards this segment, as they typically had higher
              rental payment capacity compared to average earners. Moreover, we
              observed a surge in demand for mortgage loans, particularly for
              financing children’s education abroad. To effectively reach these
              target segments, we conducted targeted Facebook campaigns tailored
              to foreign expatriates, resulting in a significant influx of
              prospective inquiries.{' '}
            </p>

            <p className="mt-4">
              Our credit appraisal system implemented a few years ago, provided
              invaluable support in assessing and managing these new demands.
              Additionally, to streamline processes and enhance convenience, all
              payments are now channelled through the LB CIM app. We encourage
              our customers to use the app for all transactions, ensuring
              efficiency and security in their financial interactions with us.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
              Performance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white text-black">
                <p>
                  Mortgage loans recorded a decrease of 13% YoY to Rs. 2.14 Bn.
                  as of 31 March 2024 from Rs. 2.46 Bn. as of 31 March 2023. The
                  composition of mortgage loans decreased to 1% of the total
                  loan portfolio in 2023/24.
                </p>
              </div>
              <div className="bg-white text-black p-6 border border-black rounded-tl-2xl">
                <h3 className="text-xl font-semibold mb-4 text-[#4f70b8] text-center">
                  Mortgage Loan
                </h3>
                {/* <Chart
                options={mortgageLoanChartOptions}
                series={mortgageLoanChartSeries}
                type="line"
                height={350}
              /> */}
                <img
                  src="/images/charts/businessReview/lmortgageLoan.png"
                  alt="ownership image"
                  className="w-full mb-4 rounded-lg"
                />
              </div>
              <div>
                <img
                  src="/images/charts/businessReview/morgageloan.png"
                  alt="ownership image"
                  className="w-full mb-4 rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="bg-white text-black">
            <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
              NPL Management
            </h3>
            <p className="mt-4">
              We have refined our approach to effectively manage our NPLs. Our
              primary focus now lies on small ticket mortgages, specifically
              those under Rs. 10 million. Leveraging the synergy between our
              recovery team and the marketing department, we have adopted a
              collaborative strategy to expedite the loan recovery processes.
              This entails close monitoring of accounts, proactive engagement
              with customers to offer advice, and tailoring solutions to
              individual requirements.
            </p>
          </div>

          <div className="bg-white text-black">
            <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
              Extending Support to Our Customers
            </h3>
            <p className="mt-4">
              The following initiatives were implemented to support our
              customers:
            </p>
            <ul className="pl-5 list-disc pt-4">
              <li>Rescheduled facilities on a case-by-case basis</li>
              <li>Offered sub-loans to tide over temporary cash flow issues</li>
              <li>
                Provided rebates when settling loans to those who had financial
                difficulties
              </li>
            </ul>
          </div>

          <div className="bg-white text-black">
            <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
              Outlook
            </h3>
            <p className="mt-4">
              As the economic landscape shows signs of improvement, we
              anticipate the economy to return to pre-2019 levels. The growing
              number of foreign income earners is expected to contribute
              positively to this trajectory. To capitalise on this trend, we are
              placing greater emphasis on serving foreign income earners and
              offering tailored solutions, particularly for smallticket
              facilities. By aligning our focus with evolving market dynamics,
              we aim to optimise growth opportunities and enhance our overall
              performance.
            </p>
          </div>

          <div className="bg-white text-black rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-[#f58b45]">
              CIM DIGITAL LOANS
            </h3>
            <h3 className="text-xl font-semibold my-4 text-[#4f70b8]">
              Operating Context and Strategy
            </h3>
            <p>
              We introduced the CIM Business Loan to address the needs of
              customers who have been overlooked or underserved by traditional
              lenders. Other service providers often engage in selective lending
              practices, coupled with cumbersome paperwork requirements. On the
              other hand, while money lenders may offer fast service, the
              reliability of loan repayment can be uncertain. In response to
              these gaps in the market, we designed the CIM Business Loan to
              provide accessible, transparent, and reliable financing solutions
              to a broader spectrum of customers.
            </p>
            <p className="mt-4">
              Amid the challenging business landscape where SMEs are
              particularly vulnerable and at risk of closure, we recognised the
              importance of supporting them with a cautious yet proactive
              approach. For our existing customers, we conducted thorough
              evaluations of their cash flows and CRIB reports, providing
              tailored advice and support throughout. Our commitment to never
              letting down any of our customers remains unwavering, as we strive
              to be a reliable partner.
            </p>

            <p className="mt-4">
              We continued to lend to Pharmaceutical, groceries, hardware
              businesses and seasonal businesses.
            </p>
            <p className="mt-4">
              Our marketing campaigns were conducted by a team of 60 marketing
              officers. We engaged in leaflet distributions, targeted Facebook
              advertisements, mega campaigns in key towns and assigned seven new
              customer interactions per marketing officer per day, to expand our
              customer base.
            </p>
          </div>

          <div className="bg-white text-black">
            <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
              Performance
            </h3>
            <p className="mt-4">
              Digital loan portfolio recorded a 11% growth in 2023/24 from Rs.
              324 Mn. as of 31 March 2023 to Rs. 361 Mn. as of 31 March 2024.
            </p>
            <div className="grid-cols-1 grid md:grid-cols-2 gap-6 mt-4">
              <div className="bg-white text-black p-6 border border-black rounded-tl-2xl">
                <h3 className="text-xl font-semibold mb-4 text-[#4f70b8] text-center">
                  Digital Loans Portfolio
                </h3>
                {/* <Chart
            options={digitalLoanChartOptions}
            series={digitalLoanChartSeries}
            type="bar"
            height={350}
          /> */}
                <img
                  src="/images/charts/businessReview/lDigitalLoansPortfolio.png"
                  alt="ownership image"
                  className="w-full mb-4 rounded-lg"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/images/charts/businessReview/lbcim.png"
                  alt="ownership image"
                  className="w-full mb-4 rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="bg-white text-black">
            <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
              NPL Management
            </h3>
            <p className="mt-4">
              To effectively manage the NPLs, we focused on conducting thorough
              investigations into NPL cases and improved follow-up procedures
              involving multiple team members including marketing officers, team
              leaders, and recovery heads.
            </p>
          </div>

          <div className="bg-white text-black">
            <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
              Extending Support to Our Customers
            </h3>
            <p className="mt-4">
              We offered guidance to empower customers to make sound financial
              decisions as follows:
            </p>
            <ul className="pl-5 list-disc mt-4">
              <li>
                Extended personalised advice on maximum loan amounts that match
                their repayment capacity
              </li>
              <li>Discouraged over borrowing to avoid financial strain</li>
              <li>
                Helped them to identify optimal timing to obtain a loan based on
                their business seasons
              </li>
            </ul>
          </div>

          <div className="bg-white text-black">
            <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
              Outlook
            </h3>
            <p className="mt-4">
              Moving forward, we will focus on expanding our business to
              individuals seeking loans over Rs. 500,000 with a need for swift
              processing, particularly those experiencing daily cash flow
              challenges.
            </p>
          </div>

          <div className="bg-white text-black rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-[#f58b45]">
              PENSION LOANS
            </h3>
            <h3 className="text-xl font-semibold my-4 text-[#4f70b8]">
              Operating Context and Strategy
            </h3>
            <p>
              The operating context for pension loans was challenging in the
              first 6 months of the FY 2023/24, marked by increased interest
              rates and limitations by the Pensions Department on loan amounts
              to 60% of the pension. This led to a drastic drop in loan volumes.
              The high inflation and income losses among pensioners also
              contributed to this decline. However, in recent months, there has
              been a reversal in this trend, with loan demand increasing,
              reflecting improving economic conditions and decreasing interest
              rates.
            </p>
            <p className="mt-4">
              During the year, we strategically targeted acquiring new customers
              who had taken loans from other banks and successfully acquired
              those loans. We conducted an SMS campaign targeting pensioners and
              also sent out letters via postal mail.
            </p>
          </div>

          <div className="bg-white text-black">
            <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
              Performance
            </h3>
            <div className="grid-cols-1 grid md:grid-cols-2 gap-6 mt-4">
              <div className="flex justify-center">
                <p className="mt-4">
                  Pension loans grew by 21% YoY to Rs. 3.9 Bn. as of 31 March
                  2024 compared to Rs. 3.2 Bn. as of 31 March 2023.
                </p>
              </div>
              <div className="bg-white text-black p-6 border border-black rounded-tl-2xl">
                <h3 className="text-xl font-semibold mb-4 text-[#4f70b8] text-center">
                  Growth in the Pension Loan Portfolio
                </h3>
                {/* <Chart
              options={pensionLoanChartOptions}
              series={pensionLoanChartSeries}
              type="line"
              height={350}
            /> */}
                <img
                  src="/images/charts/businessReview/lpentionLoan.png"
                  alt="ownership image"
                  className="w-full mb-4 rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="bg-white text-black">
            <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
              NPL Management
            </h3>
            <p className="mt-4">
              We maintain a low NPL ratio of 0.56%, largely attributed to our
              practice of using a guarantor, often the spouse, to facilitate
              better communication.
            </p>
          </div>

          <div className="bg-white text-black">
            <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
              Extending Support to Our Customers
            </h3>
            <p className="mt-4">
              To support the customers, we couldn’t adjust the instalments
              directly as they are linked to insurance coverage. However, we
              implemented rate changes based on individual customer
              circumstances to reduce their overall financial burden.
            </p>
          </div>
          <div className="bg-white text-black">
            <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
              Outlook
            </h3>
            <p className="mt-4">
              Moving forward, we aim to double our loan volume delivering a fast
              and seamless service that meets the needs and expectations of our
              customers and also driving volumes by targeting customers who
              prefer using digital platforms.
            </p>
          </div>

          <div className="bg-white text-black rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-[#f58b45]">
              LOANS AGAINST FIXED DEPOSITS
            </h3>
            <p>
              Loans against fixed deposits offer a convenient and hassle-free
              way to access funds through the CIM app. This option provides a
              quick and easy loan facility with minimal lead time, making it a
              sustainable solution. Customers can avoid the inconvenience and
              cost of travel, as well as the hassle of paperwork, enabling a
              seamless borrowing experience.
            </p>
          </div>

          <div className="bg-white text-black">
            <div className="grid-cols-1 grid md:grid-cols-2 gap-6 mt-4">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#4f70b8]">
                  Performance
                </h3>
                <p className="mt-4">
                  On average, our loan volume ranges from 500 to 600 million per
                  month. As of 31 March 2024, our loan portfolio stood at Rs.
                  2.9 Bn. reflecting our commitment to providing low-risk
                  financing solutions.
                </p>
              </div>
              <div className="bg-white text-black p-6 border border-black rounded-tl-2xl">
                <h3 className="text-xl font-semibold mb-4 text-[#4f70b8] text-center">
                  Loans Against Fixed Deposits
                </h3>
                {/* <Chart
              options={loansAgainstFDChartOptions}
              series={loansAgainstFDChartSeries}
              type="line"
              height={350}
            /> */}
                <img
                  src="/images/charts/businessReview/lLoanAgainstFD.png"
                  alt="ownership image"
                  className="w-full mb-4 rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="grid-cols-1 grid md:grid-cols-2 gap-6 mt-4">
            <div className="flex justify-center">
              <img
                src="/images/charts/businessReview/digitalfd.png"
                alt="ownership image"
                className="w-full mb-4 rounded-lg"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/images/charts/businessReview/digitalfd2.png"
                alt="ownership image"
                className="w-full mb-4 rounded-lg"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <img
              src="/images/charts/businessReview/loanobjectivestable.png"
              alt="objectives table"
              className="lg:w-full max-w-[800px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
