'use client';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import React from 'react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function ChairmanMessage() {
  const baseChartOptions: ApexOptions = {
    chart: {
      toolbar: { show: false },
      background: 'transparent',
    },
    plotOptions: {
      bar: { horizontal: false, columnWidth: '55%' },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ['2020', '2021', '2022', '2023', '2024'],
      labels: { style: { colors: '#000' } },
    },
    yaxis: {
      labels: { style: { colors: '#000' } },
    },
    tooltip: { theme: 'dark' },
    legend: { labels: { colors: '#000' } },
  };

  const epsChartOptions: ApexOptions = {
    ...baseChartOptions,
    chart: {
      ...baseChartOptions.chart,
      type: 'bar',
    },
    yaxis: {
      ...baseChartOptions.yaxis,
      title: { text: 'Rs. | Times', style: { color: '#000' } },
    },
    colors: ['#4ade80', '#facc15'],
  };

  const epsChartSeries = [
    { name: 'EPS', data: [1.24, 1.25, 1.52, 1.57, 1.58] },
    { name: 'P/E Ratio', data: [3.22, 3.86, 3.71, 3.6, 3.64] },
  ];

  const roeChartOptions: ApexOptions = {
    ...baseChartOptions,
    chart: {
      ...baseChartOptions.chart,
      type: 'bar',
    },
    yaxis: {
      ...baseChartOptions.yaxis,
      title: { text: '%', style: { color: '#000' } },
    },
    colors: ['#22c55e'],
  };

  const roeChartSeries = [
    { name: 'Return on Equity', data: [25.04, 26.58, 28.29, 23.78, 23.48] },
  ];

  const carChartOptions: ApexOptions = {
    ...baseChartOptions,
    chart: {
      ...baseChartOptions.chart,
      type: 'bar',
    },
    yaxis: {
      ...baseChartOptions.yaxis,
      title: { text: '%', style: { color: '#000' } },
    },
    colors: ['#22d3ee', '#3b82f6'],
  };

  const carChartSeries = [
    { name: 'Tier I', data: [12.3, 13.5, 14.8, 15.9, 16.9] },
    { name: 'Total', data: [13.3, 14.7, 16.2, 17.5, 18.7] },
  ];

  const greenFinanceChartOptions: ApexOptions = {
    ...baseChartOptions,
    chart: {
      ...baseChartOptions.chart,
      type: 'line',
    },
    stroke: { curve: 'smooth', width: 3 },
    yaxis: {
      ...baseChartOptions.yaxis,
      title: { text: 'Rs. Mn', style: { color: '#000' } },
    },
    colors: ['#22c55e'],
  };

  const greenFinanceChartSeries = [
    { name: 'Green Financing', data: [2411, 4136, 4293, 5057, 5751] },
  ];

  return (
    <div className="bg-[#0A3D5F] text-white p-4 md:pl-0 md:pr-2 custom-scrollbar h-[650px] overflow-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-t-lg text-blue p-6">
        <div>
          <div>
            <img
              src="/images/annual-report/Chairman photo.png"
              alt="Chairman"
              className="w-full rounded-lg mb-4 bg-white"
            />
            <p className="mb-4">
              FY 2023/24 marked a year of exceptional performance for LB Finance
              PLC , characterised by the highest-ever profit after tax,
              significant expansion of our asset base, and strong portfolio
              quality. These achievements are a testament to our strategic
              approach, underpinned by a robust balance sheet that empowers us
              to invest in key growth opportunities. Moreover, our investments
              in technology have significantly enhanced the customer experience
              and the passion and perseverance of our dedicated team, are the
              driving force behind our ongoing success.
            </p>

            <h2 className="text-xl font-bold text-[#F0AD4E] mt-6 mb-4">
              SRI LANKA&#39;S ECONOMIC COMEBACK GAINS MOMENTUM
            </h2>
            <p className="mb-4">
              Sri Lanka&#39;s economy showed promising signs of recovery in the
              latter half of 2023 and early 2024 after navigating a period of
              significant challenges.
            </p>
            <p className="mb-4">
              The resolution of the Domestic Debt Optimisation (DDO) by June
              2023 played a key role in stabilising the financial sector and
              alleviating market stress. This resulted in a sharp decline in
              interest rates, with policy rates dropping by 700 basis points.
              Targeted monetary policy interventions successfully curbed
              inflation. This stability paved the way for positive economic
              growth in the following two quarters, with contributions from all
              sectors.
            </p>
            <p className="mb-4">
              Factors such as a resurgence in tourism, increased migrant worker
              remittances, and IMF Extended Fund Facility assistance boosted
              foreign exchange liquidity, contributing to a 9% appreciation of
              the rupee. This positive momentum continued into the fourth
              quarter, with exports experiencing a notable surge.
            </p>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-bold text-[#F0AD4E] mt-6 mb-4">
              ADAPTING TO CHANGE
            </h2>
            <p className="mb-4">
              Our commitment to excellence drives us to consistently create
              positive change and foster growth for our stakeholders. Built on
              decades of experience, proven methods, and unwavering strength, we
              provide the tools and support needed to turn dreams into reality.
              Moreover, our dynamic approach ensures we consistently deliver
              exceptional results, even in the face of challenges.
            </p>
            <p className="mb-4">
              Our proactive portfolio management, particularly our focus on
              short-term business activities enabled us to successfully navigate
              volatile interest rates. By repricing these assets/liabilities and
              maintaining a balanced approach, we mitigated risks and
              capitalised on opportunities in a year where interest rates
              fluctuated significantly. This strategy, crucial to our strong
              financial performance, underscores our commitment to a resilient
              and adaptable business model.
            </p>
            <p className="mb-4">
              To our customers, we remained steadfast in our commitment to
              supporting and standing by them, particularly during times of
              hardship. Recognising the challenges they faced, we continued to
              offer comprehensive assistance and financial guidance. This
              included partnering with our customers and providing tailored
              support, empowering them to navigate the digital landscape by
              enhancing their digital literacy and enabling seamless financial
              management through our CIM app.
            </p>
            <p className="mb-4">
              Our commitment to corporate social responsibility (CSR) is deeply
              woven into the fabric of our operations. Through strategic
              partnerships and targeted investments, we address societal
              challenges in areas such as education, knowledge empowerment,
              environmental conservation, and community development. By
              leveraging our resources and expertise, we made a meaningful and
              lasting impact on the lives of individuals and communities during
              the year under review.
            </p>
          </div>
        </div>

        <div className="bg-[#e9ebf5] p-4 rounded-lg h-fit">
          {/* <h2 className="text-xl font-bold text-blue mt-6 mb-4">
            EPS and PE Ratio
          </h2> */}
          {/* <Chart
            options={epsChartOptions}
            series={epsChartSeries}
            type="line"
            height={300}
          /> */}
          <img
            src="/images/charts/chairmanMessage/eps.png"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />

          {/* <h2 className="text-xl font-bold text-blue mt-6 mb-4">
            Return on Equity (%)
          </h2>
          <Chart
            options={roeChartOptions}
            series={roeChartSeries}
            type="bar"
            height={300}
          /> */}
          <img
            src="/images/charts/chairmanMessage/return.png"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />

          {/* <h2 className="text-xl font-bold text-blue mt-6 mb-4">
            Capital Adequacy Ratio (%)
          </h2>
          <Chart
            options={carChartOptions}
            series={carChartSeries}
            type="bar"
            height={300}
          /> */}
          <img
            src="/images/charts/chairmanMessage/capital.png"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />

          {/* <h2 className="text-xl font-bold text-blue mt-6 mb-4">
            Green Financing (Rs. Mn)
          </h2>
          <Chart
            options={greenFinanceChartOptions}
            series={greenFinanceChartSeries}
            type="line"
            height={300}
          /> */}
          <img
            src="/images/charts/chairmanMessage/green.png"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#F0AD4E] mt-6 mb-4">
            A COMMENDABLE PERFORMANCE
          </h2>
          <p className="mb-4">
            We are proud to report another year of exceptional performance,
            delivering increased value to our stakeholders through strong
            financial results, enhanced customer experiences, and unwavering
            commitment to responsible business practices.
          </p>
          <p className="mb-4">
            The profit after tax reached Rs. 9.56 Bn. reflecting a 13.04%
            increase YoY in FY 2023/24.
          </p>
          <p className="mb-4">
            Significant progress was made in enhancing asset quality during the
            year under review through improved credit underwriting practices, a
            vigilant approach to credit monitoring and robust recovery efforts,
            which resulted a decrease in impairment charge.
          </p>
          <p className="mb-4">
            The tax liability reached Rs. 9.24 Bn. in 2023/24 due to the
            Company’s strong financial performance during the current financial
            year and the full impact of tax reforms introduced in the second
            half of the previous financial year. Notably, we were the highest
            tax-paying NBFI (Non Banking Financial Institution) in Sri Lanka
            making a substantial contribution to the national economy.
          </p>
          <p className="mb-4">
            Moreover, we recorded a deposit growth of 7.72% YoY and maintained a
            fixed deposit renewal ratio of 81%. This is a testament to the
            Company’s ability to retain existing customers and foster their
            ongoing trust. Furthermore, our lending portfolio grew by 11.09% YoY
            demonstrating the success of our volume driven strategy in expanding
            our lending base.
          </p>
          <p className="mb-4">
            Additionally, both Tier 1 and Total capital adequacy ratios improved
            in FY 2023/24 to 31.45% and 32.19% respectively demonstrating our
            financial stability and resilience against potential losses.
          </p>
          <p className="mb-4">
            Our dedication to driving shareholder value is evident in the 8.86%
            CAGR growth in our balance sheet and a 14.46% YoY increase in
            shareholder funds, reaching Rs. 43.63 Bn. As a result, the Board is
            pleased to recommend a dividend of Rs. 5.75 per share (Interim of
            Rs. 2.25 per share and final of Rs. 3.50 per share), continuing our
            consistent dividend policy, which reflects a payout ratio of 33.31%.
            This demonstrates our commitment to rewarding our shareholders for
            their ongoing trust and support.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#F0AD4E] mt-6 mb-4">
            A LEGACY OF INTEGRITY
          </h2>
          <h3 className="text-lg font-semibold mb-2">
            Strengthening our governance framework
          </h3>
          <p className="mb-4">
            For over half a century, we have prioritised good governance,
            adhering to not just regulatory requirements, but also voluntary
            standards and codes. This commitment proved particularly valuable in
            navigating the challenges of the pandemic and economic crisis,
            allowing us to demonstrate resilience and fulfil our promises to
            stakeholders. In response to recent external developments, including
            new listing rules and revised governance codes, the Board has
            intensified its focus on corporate governance, ensuring we remain
            adaptable and robust. While already largely compliant, we are
            addressing remaining gaps, particularly in preparation for upcoming
            mandatory sustainability reporting. The formation of a dedicated
            Board Sustainability Committee and the proactive efforts of other
            Board committees highlight our commitment to continuous improvement
            in governance and risk management.
          </p>
          <div>
            <h2 className="text-xl font-bold text-[#F0AD4E] mt-6 mb-4">
              BUILDING A SUSTAINABLE FUTURE
            </h2>
            <p className="mb-4">
              Looking ahead, we are committed to building on our achievements
              and solidifying our position as a leading NBFI. We are crafting a
              vibrant future filled with endless possibilities for all
              stakeholders, driven by innovative strategies and a dedication to
              exceeding expectations.
            </p>
            <p className="mb-4">
              Accordingly, we will continue to invest in technology, prioritise
              customer-centric initiatives, and foster talent development,
              ensuring we deliver increasing value to our stakeholders.
              Recognising the importance of environmental sustainability and
              social responsibility, we are prioritising these initiatives,
              ensuring they are embedded in every aspect of our operations. The
              recent establishment of a dedicated Board Sustainability Committee
              formalises our commitment to these essential values. With this
              dedicated focus, we will continue to drive positive change for our
              communities, our planet, and our stakeholders.
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-white rounded-b-lg text-blue px-6 pb-6">
        <h2 className="text-xl font-bold text-[#F0AD4E] mb-4">
          A NOTE OF APPRECIATION
        </h2>
        <p className="mb-4">
          To conclude, I wish to express my sincere gratitude to the entire LB
          team for their unwavering commitment and dedication. Your loyalty to
          LBF&#39;s vision, even amidst challenging circumstances, is truly
          commendable. I am deeply grateful for the unwavering support and
          encouragement I receive from my fellow Board members.
        </p>
        <p className="mb-4">
          A special thank you to the Governor of the Central Bank of Sri Lanka
          and the dedicated officials at the Department of Supervision of
          Non-Bank Financial Institutions for their invaluable guidance.
        </p>
        <p className="mb-4">
          To our valued shareholders, customers, and all other stakeholders,
          your continued trust and partnership are the foundation of our
          success. We deeply appreciate you joining us on this journey and trust
          you will remain by our side as LBF strives for even greater heights in
          the years to come.
        </p>

        <div className="mt-8">
          <img
            src="/images/annual-report/prasannaSig.png"
            alt="Signature"
            className="mb-2"
          />
          <p className="font-bold">G A R D Prasanna</p>
          <p>Chairman</p>
          <p>27 May 2024</p>
        </div>
      </div>
    </div>
  );
}
