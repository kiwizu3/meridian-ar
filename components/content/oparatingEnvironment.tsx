'use client';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
interface ForceAnalysis {
  title: string;
  impact: 'Low' | 'Medium' | 'High';
  description: string;
  response: string;
  reference: string;
}

const profitabilityOptions: ApexOptions = {
  chart: { type: 'bar', toolbar: { show: false } },
  plotOptions: { bar: { horizontal: true, barHeight: '40%' } },
  colors: ['#4ade80', '#3b82f6'],
  dataLabels: { enabled: false },
  xaxis: { categories: ['ROA', 'ROE', 'Cost to Income Ratio'] },
  yaxis: { title: { text: '%' } },
  legend: { position: 'top' },
};
const profitabilitySeries = [
  { name: '2023', data: [4.3, 12.4, 81.3] },
  { name: '2022', data: [3.7, 12.7, 70.9] },
];

// Total Loans and Advances Chart Data
const loansOptions: ApexOptions = {
  chart: { type: 'bar', toolbar: { show: false } },
  plotOptions: { bar: { horizontal: true, barHeight: '60%' } },
  colors: ['#4ade80', '#3b82f6'],
  dataLabels: { enabled: false },
  xaxis: {
    categories: [
      'Finance Leasing',
      'Hire Purchase',
      'Secured Loans & Adv',
      'Pawning Adv',
      'Loans against deposits',
      'Loans against real estate',
      'Other',
    ],
  },
  yaxis: { title: { text: 'Rs. Bn' } },
  legend: { position: 'top' },
};
const loansSeries = [
  { name: '2023', data: [120, 50, 500, 150, 30, 20, 10] },
  { name: '2022', data: [130, 60, 520, 140, 35, 25, 15] },
];

// Regulatory Liquid Assets Chart Data
const liquidAssetsOptions: ApexOptions = {
  chart: { type: 'line', toolbar: { show: false } },
  stroke: { curve: 'smooth' },
  colors: ['#3b82f6'],
  xaxis: {
    categories: [
      'Jun 21',
      'Sep 21',
      'Dec 21',
      'Mar 22',
      'Jun 22',
      'Sep 22',
      'Dec 22',
      'Mar 23',
      'Jun 23',
    ],
  },
  yaxis: { title: { text: '%' } },
};
const liquidAssetsSeries = [
  { name: 'Liquid Assets', data: [8, 9, 10, 11, 10, 12, 13, 15, 16] },
];
export default function OperatingEnvironment() {
  const forces: ForceAnalysis[] = [
    {
      title: 'Power of Customer',
      impact: 'High',
      description:
        'While large-ticket loan / deposit customers have historically been highly price-sensitive and possessed greater bargaining power, MSMEs have generally been less rate-sensitive and held less leverage in negotiations. However, as Micro, Small and Medium Sized Enterprises (MSMEs) become more financially sophisticated, they are likely to become increasingly price-sensitive and demand more competitive terms.',
      response:
        'Focus on relationship building among existing customer base and channel resources towards finding new opportunities',
      reference: 'Refer Social and Relationship Capital on page 128',
    },
    {
      title: 'Power of Business Partner',
      impact: 'Low',
      description:
        'As a financial institution, our primary suppliers are providers of support services. Due to the nature of their services, which are essential but not core to our business, the bargaining power of these business partners is generally low.',
      response:
        'Focus on a diversified pool of support service providers to reduce risk of over-dependence on any specific group of service providers',
      reference: 'Refer Social and Relationship Capital on page 128',
    },
    {
      title: 'Threat of New Entrants',
      impact: 'Low',
      description:
        "Sri Lanka's financial sector is comprised of 30 banks and 34 non-bank financial institutions (NBFIs), creating a competitive landscape. The likelihood of new entrants is also based on the decision by authorities to grant new licenses.",
      response: 'Build a strong and credible brand that stands out among peers',
      reference: "Refer MD's Review on page 28 and Business Review on page 68",
    },
    {
      title: 'Threat of Substitute Products',
      impact: 'High',
      description:
        'While the threat of substitutes within the NBFI industry itself is low, competition from banks and other financial institutions offering similar loan and deposit products poses a significant challenge. In the medium to long term, the threat of substitutes is substantial, highlighting the need for NBFIs to innovate and create value-added solutions to meet the evolving lending needs of businesses and individuals.',
      response:
        'Stay updated with industry best practices and new opportunities offered through technology and incentives',
      reference:
        'Refer Social and Relationship Capital on page 128 and Business Review on page 68',
    },
    {
      title: 'Competitive Rivalry',
      impact: 'High',
      description:
        'Traditionally, Sri Lankan customers have been reasonably loyal; however, competitive tactics among entities have greatly reduced loyalty levels, especially across high net-worth customer segments.',
      response:
        'Improve product mix, customer service and process efficiency to attract and retain customers. Explore new ways of delivering value and innovative means of utilising existing resources to extend our range of offerings.',
      reference: "Refer MD's Review on page 28 and Business Review on page 68",
    },
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Low':
        return 'bg-[#58c07d]';
      case 'Medium':
        return 'bg-[#466fb4]';
      case 'High':
        return 'bg-[#fb5579]';
      default:
        return 'bg-gray';
    }
  };
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col gap-8">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {/* Left Column */}
          <div>
            <div className="bg-white text-blue pt-4 px-4 rounded-t-lg">
              <h2 className="text-2xl font-semibold">GLOBAL ECONOMY</h2>
            </div>
            <div className="p-4 rounded-b-lg mb-6 bg-white text-blue">
              <p className="mb-4">
                Global growth is estimated at 3.2% in 2023 and is projected to
                remain at this pace throughout 2024 and 2025. Several factors
                impacted this growth including high borrowing costs, withdrawn
                fiscal support, lingering pandemic effects, and weak
                productivity.
              </p>
            </div>

            <div className="p-4 rounded-lg mb-6 border">
              <h3 className="text-xl font-semibold mb-4">WORLD OUTPUT</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-4xl font-bold text-[#FF6B6B]">3.2%</p>
                  <p className="text-sm">3.2%* 2024</p>
                </div>
                <div>
                  <p className="font-semibold">ADVANCED ECONOMIES</p>
                  <p className="text-2xl font-bold text-[#4ECDC4]">1.6%</p>
                  <p className="text-sm">1.7%* 2024</p>
                </div>
                <div className="col-span-2">
                  <p className="font-semibold">EMERGING AND DEVELOPING ASIA</p>
                  <p className="text-2xl font-bold text-[#45B7D1]">5.6%</p>
                  <p className="text-sm">5.2%* 2024</p>
                </div>
              </div>
            </div>

            <div className="bg-white px-4 pt-4 text-blue rounded-t-lg">
              <h2 className="text-2xl font-semibold">MYANMAR ECONOMY</h2>
            </div>
            <div className="bg-white p-4 text-blue rounded-b-lg">
              <p className="mb-4">
                Economic growth in Myanmar in 2023 plummeted to 0.8% from 2.4%
                in the previous year, primarily due to instability and conflict.
                Key sectors experienced widespread declines, with agriculture
                contracting by 1.8% due to increased costs and supply chain
                disruptions, while industrial activity grew only marginally at
                2.2% due to power shortages, exchange rate volatility, and weak
                global demand. The services sector saw modest growth at 1.0%,
                primarily driven by domestic travel and tourism, finance, and
                healthcare.
              </p>
              <p className="text-sm mb-4">
                <i>Source: Asian Development Outlook April 2024</i>
              </p>
              <p className="mb-4">
                Global headline inflation is anticipated to decrease from an
                annual average of 6.8% in 2023 to 5.9% in 2024 and 4.5% in 2025.
                Advanced economies are expected to return to their inflation
                targets sooner than emerging market and developing economies,
                highlighting the uneven nature of the global recovery.
              </p>
              <div className="relative">
                <div className="aspect-w-1 aspect-h-1">
                  <div>
                    <img
                      src="/images/annual-report/worldMap.png"
                      alt="world map"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
              <p className="mb-4">
                Although international tourist arrivals surged to seven times
                the previous year&#39;s level, instability remains a major
                obstacle to the tourism sector&#39;s full recovery.
              </p>
              <p className="mb-4">
                Inflation remained high in 2023, averaging 22% due to a
                confluence of factors including supply chain disruptions,
                shortages, currency depreciation, and rising transportation
                costs. Worsening instability across the country has further
                exacerbated inflationary pressures, particularly in
                conflict-affected areas, by hindering food production and trade
                flows.
              </p>
              <p>
                Risks to the global outlook are now broadly balanced. On the
                downside, new price spikes stemming from geopolitical tensions,
                including those from the war in Ukraine and the conflict in Gaza
                and Israel, could, along with persistent core inflation where
                labour markets are still tight, raise interest rate expectations
                and reduce asset prices.
              </p>
              <p className="font-semibold mt-4">Outlook</p>
              <p>
                The economic outlook remains bleak, with persistent uncertainty
                and instability expected to further weaken the economy.
                Increased armed conflict in several regions has negatively
                impacted economic activity, resulting in a projected real GDP
                growth of only 1.2% in 2024 and 2.2% in 2025, significantly
                lower than the 6-7% average growth rate seen between 2016 and
                2019. Agriculture is forecast to decline by an additional 1% in
                2024 due to higher production costs, conflict, and trade
                disruptions. Disruptions along border areas, particularly with
                China, have severely curtailed exports and imports, with
                agricultural exports already dropping by 10.7% in January 2024.
                Unless the situation improves, these trends are likely to
                continue.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto">
        <div className="text-white rounded-t-lg mb-6">
          <h1 className="text-2xl font-bold">SRI LANKA ECONOMY</h1>
        </div>

        <h2 className="text-xl font-semibold text-blue-600 mb-4">
          HIGHLIGHTS AND THEIR IMPACT THROUGH PESTEL ANALYSIS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Political Section */}
          <div className="bg-[#dcf2f3] p-6 rounded-lg text-black h-fit">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">
              POLITICAL
            </h3>
            <p className="mb-4">
              Sri Lanka, having endured its most severe economic and political
              crisis since independence, is showing signs of stabilisation. This
              was supported by the implementation of monetary and fiscal policy
              measures as part of the IMF Extended Fund Facility Programme.
            </p>
            <h4 className="font-semibold mb-2">Outlook</h4>
            <p className="mb-4">
              The IMF&#39;s stabilisation and reform efforts could face
              significant political risks beyond 2024. With presidential
              elections scheduled for September of next year and parliamentary
              elections likely in 2024, political uncertainty and potential
              shifts in policy direction could hinder progress.
            </p>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Risks Associated</h4>
              <ul className="list-disc list-inside">
                <li>Market Risk</li>
                <li>Liquidity Risk</li>
              </ul>
            </div>
            <div className="flex justify-between mt-4">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Related Material Theme</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span>Related Strategies</span>
              </div>
            </div>
          </div>

          {/* Economic Section */}
          <div className="bg-[#E6EEF9] text-black p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">
              ECONOMIC
            </h3>
            <p className="mb-4">
              Sri Lanka&#39;s economy exhibited signs of a rebound in 2023,
              experiencing a moderate contraction of 2.3%, a significant
              improvement compared to the 7.3% contraction in 2022. This gradual
              recovery was particularly evident in the second half of the year,
              marked by positive GDP growth rates. This turnaround was driven by
              renewed macroeconomic stability, characterised by softening
              inflation and easing external sector pressures.
            </p>
            <p className="mb-4">
              Market interest rates experienced a significant decline in 2023,
              reversing the high levels recorded in 2022. This shift was
              primarily attributed to accommodative monetary policy measures
              implemented since June 2023.
            </p>
            <p className="mb-4">
              Moreover, S&P Global Ratings raised Sri Lanka&#39;s long and
              short-term local currency sovereign credit ratings on Sri Lanka to
              &#39;CCC+/C&#39;, from &#39;SD/SD&#39; (selective default) and
              affirmed our &#39;SD/SD&#39; foreign currency ratings.
            </p>
            <p className="mb-4">
              The outlook on the &#39;CCC+&#39; long-term local currency rating
              is stable.
            </p>
            <h4 className="font-semibold mb-2">Outlook</h4>

            <p className="mb-4">
              The Central Bank of Sri Lanka projects economic growth to be 3% in
              2024. Furthermore, the successful completion of Sri Lanka&#39;s
              external debt optimisation programme could lead to an improved
              sovereign credit rating, strengthening investor confidence and
              potentially unlocking access to more favourable financing terms.
            </p>
            <p className="mb-4">
              The Central Bank aims to target the Colombo Consumer Price Index
              (CCPI)-based quarterly headline inflation rate at 5%. Moreover,
              more stable inflation rates, improved macroeconomic conditions,
              and other policy measures are anticipated to mitigate upward
              pressure on interest rates in the future.
            </p>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Risks Associated</h4>
              <ul className="list-disc list-inside">
                <li>Market Risk</li>
                <li>Liquidity Risk</li>
                <li>Credit Risk</li>
              </ul>
            </div>
            <div className="flex justify-between mt-4">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
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
                <span>Related Material Theme</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>Related Strategies</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technological Section */}
          <div className="bg-[#E6EEF9] text-black p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              TECHNOLOGICAL
            </h2>
            <p className="mb-4">
              Artificial intelligence (AI), machine learning, blockchain,
              cryptocurrencies, and mobile platforms are reshaping the financial
              services landscape, empowering consumers with greater control and
              transparency.
            </p>
            <p className="mb-4">
              This technological wave is transforming relationships with
              advisors and disrupting traditional financial models. Digital
              currencies and blockchain technology hold the potential to
              revolutionise the economy by increasing transparency through
              immutable ledgers, improving access for underserved populations,
              enhancing automation through smart contracts, and lowering costs
              for financial products and transactions. This shift is driving a
              new era of financial empowerment, promising greater accessibility,
              efficiency, and transparency.
            </p>
            <p className="mb-4">
              Sri Lanka, standing at the cusp of digital transformation, has
              taken a significant leap forward with the launch of its National
              Digital Economy Strategy. This blueprint, developed through a
              collaborative effort involving government bodies, academia, and
              industry stakeholders, and supported by the World Bank, reflects
              Sri Lanka&#39; s commitment to harnessing digital technologies for
              inclusive growth and societal progress.
            </p>

            <h3 className="font-semibold mb-2">Outlook</h3>
            <p className="mb-4">
              The Digital Payments market is expected to experience significant
              growth in the coming years. Total transaction value is projected
              to reach US$9.98 billion in 2024 and is expected to grow at a CAGR
              of 14.49% from 2024 to 2028, reaching US$17.15 billion by 2028.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-semibold">CELLULAR MOBILE CONNECTIONS</h4>
                <p className="text-2xl font-bold">32.49 Mn</p>
                <p className="text-sm">2022 - 33.66 Mn</p>
              </div>
              <div>
                <h4 className="font-semibold">INDIVIDUALS USING INTERNET</h4>
                <p className="text-2xl font-bold">12.34 Mn</p>
                <p className="text-sm">2022 - 11.85 Mn</p>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold">SOCIAL MEDIA USER IDENTITIES</h4>
              <p className="text-2xl font-bold">7.5 Mn</p>
              <p className="text-sm">2022 - 7.21 Mn</p>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold mb-2">Risks Associated</h4>
              <ul className="list-disc list-inside">
                <li>Reputation Risk</li>
                <li>Cyber Security Risk</li>
              </ul>
            </div>

            <div className="flex justify-between mt-4">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
                <span>Related Material Theme</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span>Related Strategies</span>
              </div>
            </div>
            <div className="mt-4 text-gray-500">
              <p>Source: DATAREPORTAL</p>
            </div>
          </div>

          <div className="bg-[#dcf2f3] p-6 rounded-lg text-black h-fit">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              SOCIAL
            </h2>
            <p className="mb-4">
              Sri Lanka&#39; s mid-year population in 2023 decreased by 0.6% to
              22.04 million, primarily due to a decline in births and increases
              in both deaths and net migration. The economically active
              population (labour force) also contracted, falling to 8.41 million
              in 2023 from 8.55 million in 2022. Despite this, the unemployment
              rate remained unchanged at 4.7% in 2023, reflecting a simultaneous
              decline in both the unemployed population and the labour force.
            </p>

            <h3 className="font-semibold mb-2">Outlook</h3>
            <p className="mb-4">
              The unemployment rate in Sri Lanka is forecast to be 5.24% in 2024
              and the unemployed people in Sri Lanka are forecast to be 460,000
              in 2024.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-semibold">POPULATION</h4>
                <p className="text-2xl font-bold">22.04 Mn</p>
                <p className="text-sm">2022 - 21.904 Mn</p>
              </div>
              <div>
                <h4 className="font-semibold">LABOUR FORCE</h4>
                <p className="text-2xl font-bold">8.41 Mn</p>
                <p className="text-sm">2022 - 8.547 Mn</p>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold">UNEMPLOYMENT RATE</h4>
              <p className="text-2xl font-bold">4.7%</p>
              <p className="text-sm">2022 - 4.7%</p>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold">
                DEPARTURE FOR FOREIGN EMPLOYMENT
              </h4>
              <p className="text-2xl font-bold">297,656</p>
              <p className="text-sm">2022 - 311,056</p>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold mb-2">Risks Associated</h4>
              <ul className="list-disc list-inside">
                <li>Sustainability Risk</li>
                <li>Operational Risk</li>
              </ul>
            </div>

            <div className="flex justify-between mt-4">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
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
                <span>Related Material Theme</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>Related Strategies</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Environmental Section */}
          <div className="bg-[#dcf2f3] text-black p-6 rounded-lg h-fit">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              ENVIRONMENTAL
            </h2>
            <p className="mb-4">
              Climate change poses a significant threat to global financial
              stability, with rising temperatures impacting economic activity,
              leading to price volatility and systemic risk. The risks are
              categorised as physical and transition
            </p>
            <p className="mb-4">
              <span className="font-semibold">Physical risk:</span>{' '}
              Climate-related damages decrease production, driving up prices and
              impacting financial institutions through increased non-performing
              assets.
            </p>
            <p className="mb-4">
              <span className="font-semibold">Transition risk:</span> Shifting
              to a low-carbon economy disrupts traditional businesses,
              potentially leading to financial losses and instability.
            </p>
            <p className="mb-4">
              Sri Lanka, identified as highly vulnerable to climate risks, faces
              potential instability in sovereign bond yields due to these
              threats.
            </p>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">Risks Associated</h3>
              <ul className="list-disc list-inside">
                <li>Sustainability Risk</li>
                <li>Operational Risk</li>
              </ul>
            </div>

            <h3 className="font-semibold mb-2">Outlook</h3>
            <p className="mb-4">
              Sri Lanka is committed to reducing greenhouse gas emissions and
              adapting to climate change under the Paris Agreement. The
              government views climate action as an opportunity for sustainable
              development and green economic growth. To further this commitment,
              Sri Lanka has proposed three new initiatives at COP28: a climate
              justice forum, a tropical belt initiative, and an international
              climate change university. The UN is ready to support Sri Lanka in
              achieving a more sustainable future.
            </p>

            <div className="flex justify-between mt-4">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span>Related Material Theme</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
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
                <span>Related Strategies</span>
              </div>
            </div>
          </div>

          {/* Legal Section */}
          <div className="bg-[#E6EEF9] text-black p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">LEGAL</h2>
            <p className="mb-4">
              The Central Bank of Sri Lanka strengthened the legal framework
              prioritising the preservation of financial system stability.
              Through enhanced crisis preparedness and management, the Central
              Bank effectively steered the financial system by implementing
              policies to bolster resilience, maintaining vigilant oversight,
              and regulating financial institutions in 2023. This included the
              introduction of the Banking (Special Provisions) Act to define its
              Resolution Authority and its powers.
            </p>
            <p className="mb-4">
              This act establishes financial safety nets, new resolution
              measures, and a dedicated department within the Central Bank to
              exercise its authority. It also formally recognises the Deposit
              Insurance Scheme and provides a framework for orderly bank
              wind-ups. The Act also enables the extension of resolution
              measures from licensed banks to Licensed Finance Companies (LFCs)
              as needed. Additionally, a guideline on dividend declaration and
              profit repatriation was issued to LFCs to bolster their resilience
              and capital adequacy, ensuring their capacity to support customer
              credit needs during economic uncertainty.
            </p>

            <h3 className="font-semibold mb-2">Outlook</h3>
            <p className="mb-4">
              The Central Bank of Sri Lanka is taking several steps to improve
              the stability of the non-bank financial sector. These include:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                Implementing Phase II of the Masterplan for Consolidation of
                Non-Bank Financial Institutions: This will strengthen and
                stabilise Non-Bank Financial Institutions (NBFIs) starting in
                2024.
              </li>
              <li>
                Amending the regulatory framework: Updating the Finance Business
                Act and Finance Leasing Act, introducing new rules, and
                strengthening the supervisory review process will help adapt to
                market developments and improve stability.
              </li>
              <li>
                Supporting the Microfinance and Credit Regulatory Authority Act:
                The Act, which is expected to be passed soon, will regulate
                unregulated moneylenders and improve market conduct and consumer
                protection.
              </li>
            </ul>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">Risks Associated</h3>
              <ul className="list-disc list-inside">
                <li>Reputation Risk</li>
                <li>Operational Risk</li>
              </ul>
            </div>

            <div className="flex justify-between mt-4">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
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
                <span>Related Material Theme</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>Related Strategies</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">
          LICENSED FINANCE COMPANIES (LFC) SECTOR
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Profitability */}
          <div className="bg-[#e9ebf5] p-4 rounded-lg text-black">
            {/* <h2 className="text-xl font-semibold mb-4">Profitability</h2> */}
            {/* <Chart
              options={profitabilityOptions}
              series={profitabilitySeries}
              type="bar"
              height={250}
            /> */}
            <div className="flex-col justify-center">
              <img
                src="/images/charts/operatingEnv/profitability.png"
                alt="ownership image"
                className="w-full mb-4 rounded-lg"
              />
            </div>
            <p className="mt-4 text-sm">
              Profitability of the LFC sector rose in 2023, with Profit After
              Tax (PAT) increasing by 11.3% to Rs. 47.7 billion, driven by
              growth in both net interest income and non-interest income. This
              increased the Return on Assets (ROA) to 4.3% in 2023, up from 3.7%
              in 2022. However, the Return on Equity (ROE) marginally declined
              to 12.4% in 2023 from 12.7% in 2022 due to a larger increase in
              equity capital. Additionally, the cost-to-income ratio rose to
              81.1% in 2023 compared to 79.9% in 2022.
            </p>
          </div>

          {/* Total Loans and Advances */}
          <div className="bg-[#faf4eb] p-4 rounded-lg text-black">
            {/* <h2 className="text-xl font-semibold mb-4">
              Total Loans and Advances
            </h2> */}
            {/* <Chart
              options={loansOptions}
              series={loansSeries}
              type="bar"
              height={350}
            /> */}
            <div className="flex-col justify-center">
              <img
                src="/images/charts/operatingEnv/loans.png"
                alt="ownership image"
                className="w-full mb-4 rounded-lg"
              />
            </div>
            <p className="mt-4 text-sm">
              The assets of the LFC sector are mainly composed of loans and
              advances, which constituted 68.6% of the total. While this
              portfolio contracted by 3.2% in 2023, reaching Rs. 1,160.4 billion
              compared to a 7.7% growth in 2022, Finance Leases remain dominant,
              accounting for 41.5% of total loans and advances. Other secured
              loans, including vehicle loans, contributed 32.5% while loans
              against gold and deposits declined by 4.7% and 3.2% respectively.
              Conversely, other assets, primarily cash and balances with banks
              and institutions, recorded a 3.2% increase in 2023.
            </p>
          </div>

          {/* Regulatory Liquid Assets */}
          <div className="bg-[#e2f4f5] p-4 rounded-lg text-black">
            {/* <h2 className="text-xl font-semibold mb-4">
              Regulatory Liquid Assets to Total Assets
            </h2>
            <Chart
              options={liquidAssetsOptions}
              series={liquidAssetsSeries}
              type="line"
              height={250}
            /> */}
            <div className="flex-col justify-center">
              <img
                src="/images/charts/operatingEnv/regularity.png"
                alt="ownership image"
                className="w-full mb-4 rounded-lg"
              />
            </div>
            <p className="mt-4 text-sm">
              The LFCs sector maintained a strong liquidity position throughout
              2023, exceeding the minimum regulatory requirement. At the end of
              the year, the sector held Rs. 254.9 billion in regulatory liquid
              assets, significantly exceeding the mandated Rs. 103.4 billion.
              This resulted in a liquidity surplus of Rs. 151.5 billion, a
              substantial increase from the Rs. 86.9 billion surplus reported at
              the end of 2022.
            </p>
          </div>
        </div>

        {/* Outlook */}
        <div className=" py-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Outlook</h2>
          <p className="mb-4">
            The improving macroeconomic environment and the resurgence of
            businesses, particularly Micro, Small, and Medium Enterprises
            (MSMEs), are poised to create a more conducive landscape for the
            Non-Banking Financial Institution (NBFI) sector in 2024. This
            positive outlook is fuelled by proactive measures to bolster
            regulatory frameworks, strengthen corporate governance, and
            cultivate financial stability and growth.
          </p>
        </div>

        {/* Key Challenges */}
        <div className="py-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">
            KEY CHALLENGES OF THE LFC SECTOR
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-semibold">Economic Headwinds:</span>{' '}
              Restrictions on vehicle imports, adverse macroeconomic conditions,
              elevated inflation, and eroded household disposable income are
              negatively impacting the demand for loans and leases, a key part
              of the sector&#39;s business.
            </li>
            <li>
              <span className="font-semibold">
                Credit Risk & Asset Quality:
              </span>{' '}
              Heightened exposure to pawning advances poses a risk due to gold
              price volatility. Deteriorating asset quality, evidenced by rising
              Stage 3 loan ratios, necessitates increased impairment charges and
              careful risk management.
            </li>
            <li>
              <span className="font-semibold">Operational Challenges:</span> The
              sector faces challenges in managing credit risk, fostering growth,
              and maintaining stability amid challenging macroeconomic
              conditions.
            </li>
            <li>
              <span className="font-semibold">Cybersecurity:</span> Protecting
              customer data and infrastructure from cyber threats is paramount.
            </li>
            <li>
              <span className="font-semibold">Regulatory Environment:</span> The
              sector must navigate a rapidly evolving regulatory landscape,
              including new policies and compliance requirements.
            </li>
            <li>
              <span className="font-semibold">Market Volatility:</span>{' '}
              Volatility in exchange rates and interest rates creates
              uncertainty and challenges for the sector.
            </li>
            <li>
              <span className="font-semibold">Sovereign Risk:</span> Sri
              Lanka&#39;s sovereign rating continues to impact the non-bank
              financial sector&#39;s ability to access financing and operate
              effectively.
            </li>
          </ul>
        </div>

        <div className="mt-8 text-right text-gray-500">
          <p>Source: CBSL Annual Economic Review 2023</p>
        </div>
      </div>

      <div className=" mx-auto">
        <h1 className="text-3xl font-bold text-[#F4A261] mb-8">
          OUR COMPETITIVE LANDSCAPE (FIVE FORCES ANALYSIS)
        </h1>

        <div className="space-y-6">
          {forces.map((force, index) => (
            <div key={index} className="bg-[#FFF8E1] p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-[#264653]">
                  {force.title}
                </h2>
                <div className="flex items-center text-black">
                  <span className="mr-2">Impact</span>
                  <div
                    className={`w-16 h-4 rounded ${getImpactColor(force.impact)}`}
                  ></div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-4 text-black">{force.description}</p>
                </div>
                <div className="bg-[#E9F5DB] p-4 rounded">
                  <h3 className="font-semibold mb-2 text-[#264653]">
                    Our Response
                  </h3>
                  <p className="text-sm mb-4 text-black">{force.response}</p>
                  <div className="flex items-center text-sm text-[#2A9D8F]">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    {force.reference}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#58c07d] rounded mr-2"></div>
            <span>Low</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#466fb4] rounded mr-2"></div>
            <span>Medium</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#fb5579] rounded mr-2"></div>
            <span>High</span>
          </div>
        </div>
      </div>
    </div>
  );
}
