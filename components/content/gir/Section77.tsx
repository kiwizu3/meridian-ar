'use client';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Section77() {
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

  return (
    <div>
      <div className="grid grid-cols-1 gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">UNCOVER YOUR DREAMS</h2>
          <div>
            <img src="/images/annual-report/loan-banner.png" alt="hero image" />
          </div>
        </div>

        <div className="bg-white text-black p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">STRATEGY</h3>
          <p>
            Our financing strategy, aligned with our Company&#39;s goals, aims
            to make LBF the top lending solutions provider in Sri Lanka. We
            focus on enhancing our lending portfolio for individuals and
            businesses through activities such as leasing, vehicle loans,
            mortgage loans, gold loans, and other credit options to achieve our
            long-term, medium-term, and short-term objectives.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white text-black p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">CORE COMPETENCIES</h3>
          <ul className="list-disc list-inside">
            <li>Diverse product suite catering to all customer segments</li>
            <li>Customized solutions catering to individual customer</li>
            <li>Wide and multi-channel network for easy accessibility</li>
            <li>Exceptional service and quick response time</li>
          </ul>
        </div>

        <div className="bg-white text-black p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">PERFORMANCE HIGHLIGHTS</h3>
          <p>
            LEASE, VEHICLE LOANS AND POWER DRAFT PORTFOLIO GROWTH: 14% (2022/23
            : 11%)
          </p>
          <p>
            LOANS AND RECEIVABLES PORTFOLIO: Rs. 161 Bn (2022/23 : Rs. 145 Bn)
          </p>
          <p>GOLD LOAN PORTFOLIO GROWTH: 10% (2022/23 : 46%)</p>
          <p>LENDING CUSTOMER BASE: 400,000+</p>
        </div>
      </div>

      <div className=" bg-white text-black p-6 rounded-lg mt-6">
        <h3 className="text-xl font-semibold mb-4">PRODUCT PORTFOLIO</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <img src="/images/annual-report/lbleasing.png" alt="product logo" />
          <img src="/images/annual-report/3wlleasing.png" alt="product logo" />
          <img
            src="/images/annual-report/motercycleleasing.png"
            alt="product logo"
          />
          <img src="/images/annual-report/powerplus.png" alt="product logo" />
          <img src="/images/annual-report/powerdraft.png" alt="product logo" />
          <img
            src="/images/annual-report/personalloans.png"
            alt="product logo"
          />
          <img src="/images/annual-report/mulgala.png" alt="product logo" />
          <img src="/images/annual-report/mortageloan.png" alt="product logo" />
          <img src="/images/annual-report/goldloan.png" alt="product logo" />
        </div>
      </div>

      <div className=" bg-white text-black p-6 rounded-lg mt-6">
        <h3 className="text-xl font-bold mb-4">PRODUCT PORTFOLIO</h3>
        <Chart
          options={productPortfolioChartOptions}
          series={productPortfolioSeries}
          type="donut"
          width="100%"
          height={300}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white text-black p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">SWOT ANALYSIS</h3>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <div className="bg-[#dcf3f8]  p-2 rounded-se-xl rounded-es-xl">
              <h4 className="font-semibold rounded-se-xl p-2 bg-[#466fb4] text-white text-center">
                Strengths
              </h4>
              <ul className="list-disc list-inside">
                <li>Expansive physical and digital presence</li>
                <li>Diverse product portfolio</li>
                <li>Prompt customer service</li>
                <li>Competent team</li>
              </ul>
            </div>
            <div className="bg-purple-200 p-2 rounded-ss-xl rounded-ee-xl">
              <h4 className="font-semibold text-white bg-[#5a4296] rounded-ss-xl p-2 text-center">
                Weaknesses
              </h4>
              <ul className="list-disc list-inside">
                <li>
                  Staff turnover due to the macro-economic conditions of the
                  country
                </li>
                <li>Limited regional presence (Myanmar)</li>
              </ul>
            </div>
            <div className="bg-[#ffe4d2] p-2 rounded-ss-xl rounded-ee-xl">
              <h4 className="font-semibold bg-[#ff8e51] rounded-ss-xl p-2 text-center text-white">
                Opportunities
              </h4>
              <ul className="list-disc list-inside">
                <li>
                  Automation and digitisation to enhance customer experience
                </li>
                <li>Green lending</li>
              </ul>
            </div>
            <div className="bg-yellow-200 p-2 rounded-se-xl rounded-es-xl">
              <h4 className="font-semibold bg-[#d4a262] rounded-se-xl p-2 text-center text-white">
                Threats
              </h4>
              <ul className="list-disc list-inside">
                <li>Macroeconomic vulnerabilities</li>
                <li>Adverse fiscal policies</li>
                <li>High bargaining power of the customer</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg text-black">
          <h3 className="text-xl font-bold mb-4">
            LEASE/ VEHICLE LOANS AND POWER DRAFT
          </h3>
          <h4 className="font-bold">Operating Context and Strategy</h4>
          <p>
            The operating context in the financial year 2023/24 improved
            compared to the previous year, marked by a continued decline in
            interest rates and improved business sentiments. This shift
            benefited the auto loans business, making it more attractive,
            resulting in increased volumes and improved contribution to the
            Company&#39;s bottom line.
          </p>
          <p>
            During the FY, we remained committed to expanding our lending
            activities and supporting our customers&#39; financial needs. Our
            focus was on expanding our existing portfolio with improved service
            and customer-centric initiatives. Notably, after a pause of three
            years, we resumed lending to the tourism sector, placing a greater
            emphasis on this industry.
          </p>
        </div>
      </div>
    </div>
  );
}
