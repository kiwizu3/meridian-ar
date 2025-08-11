'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

const InvestorInformation: React.FC = () => {
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
    },
    xaxis: {
      categories: ['20', '21', '22', '23', '24'],
    },
    colors: ['#97CA3C', '#97CA3C', '#97CA3C', '#97CA3C', '#0B466E'],
    plotOptions: {
      bar: {
        distributed: true,
        horizontal: false,
      },
    },
    legend: {
      show: false,
    },
  };

  const lineChartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: 'line',
      toolbar: { show: false },
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: [
        'Apr 23',
        'May 23',
        'Jun 23',
        'Jul 23',
        'Aug 23',
        'Sep 23',
        'Oct 23',
        'Nov 23',
        'Dec 23',
        'Jan 24',
        'Feb 24',
        'Mar 24',
      ],
    },
  };

  const marketTurnoverData = {
    name: 'Market Turnover',
    data: [10, 20, 15, 30, 40, 35, 20, 25, 45, 40, 30, 50],
    color: '#97CA3C',
  };

  const aspiData = {
    name: 'ASPI',
    data: [
      3000, 3200, 3100, 3300, 3400, 3200, 3100, 3000, 3100, 3200, 3300, 3400,
    ],
    color: '#61CAE6',
  };

  const sp20Data = {
    name: 'S&P SL 20',
    data: [
      1500, 1600, 1550, 1700, 1800, 1700, 1600, 1550, 1700, 1800, 1750, 1900,
    ],
    color: '#F26722',
  };

  const sharePerformanceChartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: 'line',
      toolbar: { show: false },
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: [
        'Apr 23',
        'May 23',
        'Jun 23',
        'Jul 23',
        'Aug 23',
        'Sep 23',
        'Oct 23',
        'Nov 23',
        'Dec 23',
        'Jan 24',
        'Feb 24',
        'Mar 24',
      ],
    },
  };

  const priceData = {
    name: 'Price',
    data: [
      58.4, 66.7, 62.3, 62.8, 65.4, 60.0, 58.8, 58.4, 66.7, 62.3, 62.8, 58.4,
    ],
    color: '#F26722',
  };

  const volumeData = {
    name: 'Traded Volume',
    data: [743, 665, 273, 2170, 3800, 2900, 4500, 6200, 5000, 7000, 6500, 3852],
    color: '#3357FF',
  };

  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col gap-6 custom-scrollbar">
      <div className="pr-3">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl font-bold mb-8">KEY INVESTOR INDICATORS</h1>
          <img
            src="/images/charts/supplementaryInformation/investorInformation/key-investor-indicators.jpg"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />

          <div className="mt-8 bg-white p-6 text-blue rounded-lg">
            <p className="text-lg mb-4">
              Dear Investor, <br />
              At LB Finance PLC, we understand that our investors are the
              lifeblood of our business, and we are unwaveringly committed to
              maximise your wealth through effective risk management and
              business strategies crafted in your best interests.
            </p>
            <p>
              By actively engaging with our investors, we gain a deep
              understanding of your expectations and goals, resulting in better
              outcomes with a lasting and trusting relationship. Through this
              process of engagement, we are able to make strategic decisions
              that not only benefit our shareholders but also ensure the long
              term success and sustainability of our Company.
            </p>
            <p>
              We are proud to have a loyal group of investors who share our
              vision and we are committed to provide timely and comprehensive
              information which empowers our investors to make wise decisions.
              Despite challenging macroeconomic conditions, we have consistently
              met the expectations of our valued investors by providing a steady
              return on your investment and remain committed to fulfill our
              obligations in the future. Our Integrated Financial Reporting
              serves as a valuable resource, offering insights into our
              strengths and capabilities, credibility and reliability and
              encouraging loyalty among our investor community.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="p-4 bg-[#F1E1EE] text-blue rounded-lg">
              <h2 className="text-xl font-bold">
                QUARTERLY FINANCIAL STATEMENTS
              </h2>
              <p>
                We publish financial information to our investors on the CSE and
                the Company website on a quarterly basis. In order to serve our
                investors&apos; best interests, we deliver an analysis of
                interim financial statements in our annual reports.
              </p>
              <p className="mt-2">Refer page 418</p>
            </div>
            <div className="p-4 bg-[#D8E2F6] rounded-lg text-blue">
              <h2 className="text-xl font-bold">FINANCIAL STATEMENTS IN USD</h2>
              <p>
                Financial statements have been presented in USD for the
                convenience of our investors in order to facilitate comparisons
                of LBF&apos;s financial information.
              </p>
              <p className="mt-2">Refer page 420</p>
            </div>
          </div>
        </div>
        <div className="mt-8  text-black grid grid-cols-1 md:grid-cols-1 gap-4">
          <div className="p-4 bg-[#B8DFBD] rounded-lg">
            <h2 className="text-xl font-bold pb-3">
              INSIGHTS FROM SHAREHOLDERS TO LB
            </h2>
            <p>
              LBF values shareholder engagement and engages in various methods
              to ensure effective communication. We hold an annual general
              meeting (AGM) where shareholders can interact with the Board and
              ask questions. Our annual and quarterly financial reports provide
              consistent, high-quality information in accordance with market
              best practices. We utilise press conferences, media releases, and
              evaluations to keep shareholders informed and seek their valuable
              feedback. Despite challenging circumstances, our active engagement
              with shareholders has made our shares an attractive investment
              especially reflected by the last quarter of LBF market turnover.
              We comply with regulatory requirements by regularly publishing
              disclosures on the CSE and Company websites. LBF recognizes the
              importance of shareholders in achieving our vision and strives to
              establish a strong connection through meaningful engagement.
            </p>
          </div>

          <div className="p-4 bg-[#F1E1EE] rounded-lg">
            <h2 className="text-xl font-bold pb-3">DIVIDENDS</h2>
            <p>
              The dividend policy of LBF is crucial for maintaining a balance
              between the expectations of shareholders and the business needs of
              the Company. LB has been one of the best-performing companies in
              the industry, as it is emphasised that the optimum utilisation of
              capital is essential for creating value over time, pursuing
              sustainability and providing healthy returns to investors. It is
              Company&apos;s policy to pay 1/3 of its earnings as dividends with
              the best interest of shareholders. LBF has continuously maintained
              dividend payouts. The Board of Directors of LBF has given due
              consideration to the requirements stipulated by CBSL and declared
              an interim dividend of Rs. 2.25 per ordinary share of LBF for the
              financial year 2023/24. Further, the proposed final dividend of
              Rs. 3.50 per share for the financial year 2023/24 will be
              submitted for the approval of shareholders at the upcoming AGM to
              be held on 28 June 2024 to ensure a sustainable return to the
              shareholders of the Company. LBF remains committed to providing
              sustainable and healthy financial returns to its shareholders over
              the years.
            </p>
          </div>

          <div className="p-4 bg-[#D8E2F6] rounded-lg">
            <h2 className="text-xl font-bold pb-3">
              COLOMBO STOCK EXCHANGE (CSE)
            </h2>
            <p>
              The Colombo Stock Exchange (CSE) experienced a mixed performance
              during the financial year 2023/24. All Share Price Index (ASPI)
              demonstrated a positive trajectory, climbing from 9,301.09 points
              on 31 March 2023 to 11,444.38 points on 31 March 2024, reflecting
              a notable 23.04% increase. Additionally, the market capitalisation
              of the CSE grew from Rs. 3,903.54 billion to Rs. 4,534.65 billion,
              signifying a 16.17% rise. However, contrasting this upward trend,
              the S&P SL 20 index, which monitors the performance of prominent
              blue-chip companies, faced a decline, decreasing from 2,682.83
              points on 31 March 2023, to 3,317.62 points on 31 March 2024,
              resulting in a substantial 23.66% up. Moreover, the number of
              listed companies experienced a setback, diminishing from 289 at
              the end of 2022/23 to 284 by the end of 2023/24. The reduction in
              the number of listed companies can be attributed to multiple
              factors, including the adverse macroeconomic conditions, political
              instability and the shortage of foreign exchange throughout the
              financial year. Nevertheless, the upward movement of the ASPI
              index suggest an encouraging trajectory for the economy and
              demonstrates businesses’ optimism regarding the future.
            </p>
          </div>
        </div>

        {/* Performance Chart Section */}
        <div className="mt-8 bg-white p-6 text-black rounded-lg">
          <img
            src="/images/charts/supplementaryInformation/investorInformation/marketTurnover.png"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />
          {/* <h2 className="text-xl font-bold mb-4">
            ASPI, S&P SL 20 and Market Turnover
          </h2>

          <ApexCharts
            options={lineChartOptions}
            series={[marketTurnoverData, aspiData, sp20Data]}
            type="line"
            height={300}
          /> */}
        </div>

        {/* Performance Table */}
        <div className="mt-8 bg-white p-6 text-black rounded-lg">
          <h2 className="text-xl font-bold mb-4">
            PERFORMANCE OF DIVERSIFIED FINANCIAL SECTOR AND LBF
          </h2>
          <p className="pb-4">
            Along with ASPI and S&P SL 20 indices, LBF market turnover also
            followed the same trend during the first three quarters of the
            financial year. Moreover, in the last quarter, LBF market turnover
            was more aligned with the improvement reflected in ASPI and S&P SL
            20 indices reflecting the growth of the business
          </p>
          <img
            src="/images/charts/supplementaryInformation/investorInformation/performance-financial-capital.jpg"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />
        </div>

        {/* Where to find LBF in Newswire Platforms */}
        <div className="mt-8 bg-white p-6 rounded-lg text-black grid grid-cols-1 md:grid-cols-1">
          <img
            src="/images/charts/supplementaryInformation/investorInformation/newswire-platforms.jpg"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />
        </div>
        {/* New content section - LBF Share Performance */}
        <div className="mt-8 bg-white p-6 text-black rounded-lg">
          <img
            src="/images/charts/supplementaryInformation/investorInformation/sharePerformance.png"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />
          {/* <h2 className="text-xl font-bold mb-4">LBF SHARE PERFORMANCE</h2>
          <ApexCharts
            options={sharePerformanceChartOptions}
            series={[priceData, volumeData]}
            type="line"
            height={300}
          /> */}
        </div>

        {/* Share Trading Information */}
        <div className="mt-8 bg-white p-6 text-black rounded-lg">
          <img
            src="/images/charts/supplementaryInformation/investorInformation/share-trading-information.jpg"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />
        </div>

        {/* Market Capitalisation */}
        <div className="mt-8 bg-white p-6 text-black rounded-lg">
          <img
            src="/images/charts/supplementaryInformation/investorInformation/market-capitalization.jpg"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />
        </div>

        {/* Public Shareholding */}
        <div className="mt-8 bg-white p-6 text-black rounded-lg">
          <img
            src="/images/charts/supplementaryInformation/investorInformation/public-shareholding.jpg"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />
        </div>

        {/* Float Adjusted Market Capitalisation */}
        <div className="mt-8 bg-white p-6 text-black rounded-lg">
          <h2 className="text-xl font-bold mb-4">
            FLOAT ADJUSTED MARKET CAPITALISATION
          </h2>
          <p>
            The Float adjusted market capitalisation as at 31 March 2024 – Rs.
            7,432,197,418.80
          </p>
          <p>
            The Float adjusted market capitalisation of the Company falls under
            Option 3 of Rule 7.14.1 (i) (a) of the Listing Rules of the Colombo
            Stock Exchange and the Company has complied with the minimum public
            holding requirement applicable under the said option.
          </p>
        </div>

        {/* Largest Shareholders of the Company */}
        <div className="mt-8 bg-white p-6 text-black rounded-lg">
          <img
            src="/images/charts/supplementaryInformation/investorInformation/largest-shareholders.jpg"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />
        </div>

        {/* Distribution of Shareholdings as at 31 March */}
        <div className="mt-8 bg-white p-6 text-black rounded-lg">
          <img
            src="/images/charts/supplementaryInformation/investorInformation/distribution-shareholders.jpg"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />
        </div>

        {/* Composition of Shareholders */}
        <div className="mt-8 bg-white p-6 text-black rounded-lg">
          <img
            src="/images/charts/supplementaryInformation/investorInformation/composition-shareholders.jpg"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />
        </div>

        {/* Share Prices for the Year */}
        <div className="mt-8 bg-white p-6 text-black rounded-lg">
          <img
            src="/images/charts/supplementaryInformation/investorInformation/share-prices-year.jpg"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />
        </div>

        {/* Directors' Shareholdings */}
        <div className="mt-8 bg-white p-6 text-black rounded-lg">
          <img
            src="/images/charts/supplementaryInformation/investorInformation/directors-shareholdings.jpg"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />
        </div>

        {/* Credit Ratings */}
        <div className="mt-8 bg-white p-6 text-black rounded-lg">
          <h2 className="text-xl font-bold mb-4">CREDIT RATINGS</h2>
          <p>
            The Company has been assigned BBB+(lka) Stable by Fitch Ratings
            Lanka Limited.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestorInformation;
