'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function MdsReview() {
  const chartTheme = {
    mode: 'dark',
    palette: 'palette1',
  };

  const commonChartOptions: ApexOptions = {
    chart: {
      foreColor: '#000',
    },
    xaxis: {
      labels: { style: { colors: '#000' } },
    },
    yaxis: {
      labels: { style: { colors: '#000' } },
    },
    legend: {
      labels: { colors: '#000' },
    },
  };

  const niiAndInterestSpreadOptions: ApexOptions = {
    ...commonChartOptions,
    chart: { ...commonChartOptions.chart, type: 'line' as const, height: 350 },
    series: [
      { name: 'NII', data: [13.32, 15.95, 18.34, 19.75, 20.84] },
      { name: 'Interest Spread', data: [10.46, 10.62, 11.98, 9.15, 10.95] },
    ],
    xaxis: {
      ...commonChartOptions.xaxis,
      categories: ['2020', '2021', '2022', '2023', '2024'],
    },
    yaxis: [
      {
        ...commonChartOptions.yaxis,
        title: { text: 'Rs. Mn', style: { color: '#000' } },
      },
      {
        ...commonChartOptions.yaxis,
        opposite: true,
        title: { text: '%', style: { color: '#000' } },
      },
    ],
    colors: ['#00E396', '#FEB019'],
  };

  const pbtAndIncomeTaxOptions: ApexOptions = {
    ...commonChartOptions,
    chart: {
      ...commonChartOptions.chart,
      type: 'bar' as const,
      height: 350,
      stacked: true,
    },
    series: [
      { name: 'PBT', data: [4.03, 5.91, 8.12, 9.24, 15.18] },
      { name: 'Income Tax', data: [1.69, 2.23, 3.13, 5.28, 9.24] },
    ],
    xaxis: {
      ...commonChartOptions.xaxis,
      categories: ['2020', '2021', '2022', '2023', '2024'],
    },
    yaxis: {
      ...commonChartOptions.yaxis,
      title: { text: 'Rs.Mn', style: { color: '#000' } },
    },
    colors: ['#008FFB', '#00E396'],
  };

  const grossAndNetNPLRatioOptions: ApexOptions = {
    ...commonChartOptions,
    chart: { ...commonChartOptions.chart, type: 'line' as const, height: 350 },
    series: [
      { name: 'Gross', data: [5.73, 5.98, 4.14, 3.52, 2.54] },
      { name: 'Net', data: [-0.12, 0.1, -0.8, -0.65, -0.72] },
    ],
    xaxis: {
      ...commonChartOptions.xaxis,
      categories: ['2020', '2021', '2022', '2023', '2024'],
    },
    yaxis: {
      ...commonChartOptions.yaxis,
      title: { text: '%', style: { color: '#000' } },
    },
    colors: ['#008FFB', '#00E396'],
  };

  const newBranchesOpenedOptions: ApexOptions = {
    ...commonChartOptions,
    chart: { ...commonChartOptions.chart, type: 'pie' as const, height: 350 },
    series: [8, 11, 12, 18, 41],
    labels: ['2020', '2021', '2022', '2023', '2024'],
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'],
  };

  return (
    <div className="bg-[#0A3D5F] text-white p-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg text-blue">
          <div>
            <div className="relative">
              <img
                src="/images/annual-report/mdPhoto.png"
                alt="Managing Director"
                className="w-full rounded-lg mb-4"
              />
            </div>

            <div>
              <p className="mb-4">
                FY 2023/24 was a year of significant achievements for LBF,
                marked by a surge in our asset base surpassing to an impressive
                Rs.200 Bn. exceeding previous records and demonstrating our
                commitment to growth. We also achieved our highest-ever profit,
                a testament to the tireless efforts of our dedicated team of
                over 4,000 employees. This success is further evidenced by our
                expanded network of 200 branches, extending our reach and impact
                across the nation. Furthermore, we remain the top tax-paying
                Non-Bank Financial Institution in Sri Lanka, demonstrating our
                commitment to contributing to the nation&#39;s economic growth.
                While the record profit performance was supported by favourable
                market conditions, it is an evidence to the dedication and hard
                work of our employees. I would like to extend my sincere
                gratitude to our entire team for their unwavering commitment to
                serving our customers.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#F0AD4E] mb-4">
                A COMMENDABLE PERFORMANCE
              </h2>
              <p className="mb-4">
                Despite challenging macroeconomic conditions and industry-wide
                systemic shocks, we achieved a commendable performance in FY
                2023/24. Our balanced structure and dynamic approach, coupled
                with strategic portfolio adjustments, effective risk management,
                and operational efficiency, enabled us to consistently overcome
                challenges and deliver exceptional results.
              </p>
              <p className="mb-4">
                Net interest income surged by 28.69% YoY, fuelled by a growing
                lending base and high-yield investments. Profit Before Taxes
                surged 29.23% YoY to Rs. 15.18 Bn. driven by our proactive
                approach to managing interest-sensitive assets and liabilities,
                ensuring optimal returns amidst changing market conditions.
              </p>
              <p className="mb-4">
                The Company&#39;s asset base expanded by 10.87% to Rs. 202 Bn.
                driven by an 11.09% increase in the lending portfolio, with
                notable growth in Vehicle Financing and Gold Loans. Enhanced
                credit underwriting practices and robust recovery efforts led to
                a 31.61% decrease in impairment charges. The deposit base grew
                by 7.72% whilst shareholders&#39; equity also saw a significant
                increase, reaching Rs. 43.63 Bn. reflecting the Company&#39;s
                strong financial position and ability to generate and retain
                earnings while maintaining consistent dividend payouts.
              </p>

              <h2 className="text-xl font-bold text-[#F0AD4E] mb-4">
                ENHANCED RISK GOVERNANCE AND POLICY FRAMEWORK
              </h2>
              <p className="mb-4">
                We enhanced our risk management framework this year,
                strengthening both our governance and policy structures.
                Notably, we established a new Board Sub-Committee dedicated to
                overseeing sustainability and climate-related risks and
                opportunities. Additionally, we bolstered our second line of
                defence for Information Technology and Security risks by
                expanding our human resource capacity.
              </p>
            </div>
          </div>

          <div className="bg-[#e9ebf5] p-4 rounded-lg h-fit">
            {/* <h2 className="text-xl font-bold text-[#F0AD4E] mb-4">
              NII and Interest Spread
            </h2>
            <Chart
              options={niiAndInterestSpreadOptions}
              series={niiAndInterestSpreadOptions.series}
              type="line"
              height={350}
            /> */}
            <img
              src="/images/charts/chairmanMessage/nill.png"
              alt="ownership image"
              className="w-full mb-4 rounded-lg"
            />
            {/* <h2 className="text-xl font-bold text-[#F0AD4E] mt-8 mb-4">
              PBT and Income Tax
            </h2>
            <Chart
              options={pbtAndIncomeTaxOptions}
              series={pbtAndIncomeTaxOptions.series}
              type="bar"
              height={350}
            /> */}
            <img
              src="/images/charts/chairmanMessage/pbt.png"
              alt="ownership image"
              className="w-full mb-4 rounded-lg"
            />
            {/* <h2 className="text-xl font-bold text-[#F0AD4E] mb-4 mt-8">
              Gross and Net NPL Ratio
            </h2>
            <Chart
              options={grossAndNetNPLRatioOptions}
              series={grossAndNetNPLRatioOptions.series}
              type="line"
              height={350}
            /> */}
            <img
              src="/images/charts/chairmanMessage/gross.png"
              alt="ownership image"
              className="w-full mb-4 rounded-lg"
            />

            {/* <h2 className="text-xl font-bold text-[#F0AD4E] mb-4 mt-8">
              New Branches Opened
            </h2>
            <Chart
              options={newBranchesOpenedOptions}
              series={newBranchesOpenedOptions.series}
              type="pie"
              height={350}
            /> */}
            <img
              src="/images/charts/chairmanMessage/newbranch.png"
              alt="ownership image"
              className="w-full mb-4 rounded-lg"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#F0AD4E] mb-4">
              REDUCING OUR NON-PERFORMING LOANS
            </h2>
            <p className="mb-4">
              We navigated the challenging economic landscape and the regulator
              tightened NPL classification by reducing the number of past due
              days from 120 to 90 days. Despite industry-wide trends, the NPL
              ratio declined from 4.45% to 3.54% in FY 2023/24 highlighting our
              expertise in managing non-performing loans. This achievement stems
              from our strategic approach to customer engagement and risk
              management. We understand the unique needs of our customer base,
              particularly those at the bottom of the pyramid, and invest in
              tailored solutions, not quick fixes. By understanding the market
              forces impacting their cash flow, we provide tailored support,
              through our investments in technology, skill development, and
              long-term sustainability strategies. This commitment has resulted
              in a positive shift in the repayment behaviour of our customers,
              demonstrating our dedication to responsible and sustainable
              lending practices.
            </p>

            <h2 className="text-xl font-bold text-[#F0AD4E] mb-4">
              NURTURING A WINNING TEAM
            </h2>
            <p className="mb-4">
              Our employees are more than just a workforce – they are the heart
              of our success. We nurture a winning team by focusing on their
              holistic well-being, providing a comprehensive employee value
              proposition that caters to both personal and professional goals.
              This includes providing targeted training and development
              opportunities, modern communication tools, recognition programmes,
              and a commitment to work-life balance. Our goal is to empower our
              employees, creating a culture of collaboration, innovation, and
              engagement that drives our continued success.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#5e8bec] mb-4">
              Our balanced structure and dynamic approach, coupled with
              strategic portfolio adjustments, effective risk management, and
              operational efficiency, enabled us to consistently overcome
              challenges and deliver exceptional results.
            </h2>
            <h2 className="text-xl font-bold text-[#F0AD4E] mb-4">
              CREATING A SUSTAINABLE IMPACT IN OUR COMMUNITIES
            </h2>
            <p className="mb-4">
              We believe that true corporate social responsibility goes beyond
              philanthropy; it is about driving systemic change that generates
              lasting impact. We leverage our expertise in financial services,
              island-wide presence, talented team, and leadership in technology
              and innovation to deliver real value to the communities we serve.
              This year, also we have invested in impactful CSR initiatives
              focused on expanding access to education, fostering
              entrepreneurship, and empowering communities, directly benefiting
              many individuals. Our commitment to building a sustainable future
              extends beyond our business operations.
            </p>

            <h2 className="text-xl font-bold text-[#F0AD4E] mb-4">
              STRONG PARTNERSHIPS, SHARED SUCCESS
            </h2>
            <p className="mb-4">
              We continued to foster strong partnerships that drive mutual
              success providing our business partners with ongoing support to
              expand their reach and enhance their operations. Our robust
              infrastructure, competitive pricing, and deep industry expertise
              empower them to connect with the right customers at the right time
              and streamline their operations. This collaborative approach
              results in faster service, more competitive prices, and greater
              customer satisfaction – a true win-win for our partners,
              customers, and our business.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#F0AD4E] mb-4">
              ENVIRONMENTAL STEWARDSHIP
            </h2>
            <p className="mb-4">
              We recognise the urgency of climate change and are committed to
              mitigating our environmental impact. Going beyond simply reducing
              our operational carbon footprint, we safeguard ecosystems and
              integrate green financing principles into our lending strategy.
              This commitment translates into practical action through
              energy-efficient practices, resource conservation, and
              biodiversity conservation measures.
            </p>

            <p className="mb-4">
              Our Environmental Management System (EMS) continuously evolves to
              address emerging environmental challenges and ensure regulatory
              compliance. Through the EMS, we have achieved milestones, in
              managing carbon emissions and the successful implementation of a
              recycling programme.
            </p>
            <p className="mb-4">
              Moreover, we nurture a workforce of environmentally conscious
              individuals, embrace sustainable green practices, and contribute
              to the conservation of our planet. By doing so, we strive to build
              a sustainable future for generations to come.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#F0AD4E] mb-4">
              OUR COMMITMENT TO REGULATORY EXCELLENCE
            </h2>
            <p className="mb-4">
              As the highest taxpayer in the NBFI sector, we are proud of our
              significant contribution to the national economy. Our tax
              liability reached Rs. 9.24 Bn. in 2023/24, a significant 55.19%
              increase YoY, demonstrating our commitment to fiscal
              responsibility.
            </p>
            <p className="mb-4">
              Beyond financial contributions, we are dedicated to ethical and
              responsible business practices. We continuously strengthen our
              corporate governance and risk management frameworks, upholding the
              high standards of transparency and integrity. Our proactive
              adoption of industry best practices and voluntary compliance with
              standards beyond regulatory requirements underscore our commitment
              to operating with the utmost integrity and transparency.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#F0AD4E] mb-4">
              RECOGNITIONS AND AWARDS
            </h2>
            <p className="mb-4">
              Our commitment to excellence in financial reporting has earned us
              recognition both in Sri Lanka and internationally. Our annual
              report received multiple accolades, including a Silver and Merit
              Award at the South Asian Best Presented Annual Report Awards 2023,
              and clinched a gold award for the NBFI sector at the TAGS Awards.
              Moreover, our integrated reporting practices were recognised, with
              the Company securing the Overall First runner-up position and
              multiple awards at the CMA Excellence in Integrated Reporting
              Awards 2023.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#F0AD4E] mb-4">
              A VISION FOR THE FUTURE
            </h2>
            <h2 className="text-xl font-bold text-[#5e8bec] mb-4">
              Crafting a vibrant future of endless possibilities
            </h2>
            <p className="mb-4">
              I am incredibly proud of our Company and its accomplishments. We
              remain committed to building upon our successes and solidifying
              our position as a leading NBFI in Sri Lanka. Through strategic
              investments in technology, customercentric initiatives, and talent
              development, we are dedicated to creating a vibrant future of
              infinite possibilities for our stakeholders. This commitment
              ensures we consistently deliver enhanced value and empower our
              stakeholders to achieve their full potential. With a sustainable
              business model, a talented and dedicated team at every level, a
              proven strategy for value creation, a commitment to innovation,
              and a sound financial position, we are well-positioned to create
              long-term value for our stakeholders and strengthen our position
              as a top-tier financial services organisation in our nation.
            </p>
          </div>

          <div className="md:col-span-2 bg-white rounded-lg text-blue">
            <h2 className="text-xl font-bold text-[#F0AD4E] mb-4">
              GRATITUDE AND ACKNOWLEDGEMENT
            </h2>

            <p className="mb-4">
              My sincere appreciation goes to the Chairman and Board of
              Directors for their foresight and visionary leadership, guiding LB
              Finance PLC towards sustainable growth. Their strategic guidance
              has ensured our continued success, even amidst challenging
              circumstances.
            </p>
            <p className="mb-4">
              I extend my heartfelt gratitude to our senior management and staff
              for their tireless efforts, unwavering dedication to serving our
              customers, and commitment to all stakeholders. Your dedication is
              the foundation of our achievements.
            </p>
            <p className="mb-4">
              Finally, I extend my sincere thanks to our valued customers,
              shareholders, and stakeholders. Your trust and confidence in LB
              Finance PLC are what drive us forward. Together, let us shape a
              brighter future.
            </p>

            <div>
              <img
                src="/images/annual-report/sumithSig.png"
                alt="Signature"
                className="mb-2"
              />
              <p className="font-bold">Sumith Adhihetty</p>
              <p>Managing Director</p>
              <p>27 May 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
