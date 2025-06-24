'use client';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
// ApexCharts configuration
const chartOptions: ApexOptions = {
  chart: {
    type: 'bar',
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
    },
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ['#FFFFFF'],
    },
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  xaxis: {
    categories: ['2020', '2021', '2022', '2023', '2024'],
  },
  yaxis: {
    title: {
      text: 'tCO2e',
    },
  },
  fill: {
    opacity: 1,
    colors: ['#53C154', '#53C154', '#53C154', '#53C154', '#003B6F'],
  },
  tooltip: {
    y: {
      formatter: function (val: number) {
        return val.toFixed(2);
      },
    },
  },
};

const chartSeries = [
  {
    name: 'Total Carbon Footprint',
    data: [4484, 3110, 3259, 3480, 3983],
  },
];

export default function NaturalCapital() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col gap-6">
      <div>
        <div className="overflow-x-auto">
          <img
            className="max-w-none"
            src="/images/annual-report/finance_capital/natural-capital.png"
          />
        </div>
      </div>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white text-blue p-6 rounded-lg">
          <p className="mb-4">
            We focus on mitigating the adverse impacts of climate change by
            implementing initiatives to minimise our carbon footprint.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Management Approach */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                MANAGEMENT APPROACH
              </h3>
              <p>
                We are focused on mitigating our environmental impact,
                especially as the consequences of climate change become more
                pronounced. Beyond minimising our operational carbon footprint
                and safeguarding ecosystems, we have integrated green financing
                principles into our lending strategy. Moreover, we adopt
                energy-efficient practices and technologies, resource
                conservation, and biodiversity conservation to positively
                contribute to mitigating adverse climate change impacts
              </p>
            </div>
            <div className="grid gap-6">
              {/* Components of Human Capital */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  COMPONENTS OF NATURAL CAPITAL
                </h3>
                <ul className="list-disc list-inside">
                  <li>ENERGY MANAGEMENT</li>
                  <li>WATER MANAGEMENT</li>
                  <li>EMISSIONS MANAGEMENT</li>
                  <li>WASTE MANAGEMENT</li>
                </ul>
              </div>
              {/* Nurturing Human Capital */}
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  NURTURING NATURAL CAPITAL
                </h3>
                <ul className="list-disc list-inside">
                  <li>Digitalisation of business processes</li>
                  <li>Environmental Management System</li>
                  <li>Water conservation </li>
                  <li>Reducing energy consumption</li>
                  <li>Green lending</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Full Width Sections */}
          <div className="col-span-2">
            {/* Strategic Priorities */}
            <div className="bg-white text-blue rounded-lg py-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th
                        rowSpan={2}
                        className="text-blue border-b border-blue text-left p-2"
                      >
                        STRATEGIC PRIORITIES
                      </th>
                      <th
                        rowSpan={2}
                        className="text-blue  border-b border-blue  text-left p-2"
                      >
                        PROGRESS IN FY 2023/24
                      </th>
                      <th
                        colSpan={3}
                        className="text-blue  border-b border-blue  text-center p-2"
                      >
                        LOOKING AHEAD
                      </th>
                    </tr>
                    <tr>
                      <th className="text-blue border-b border-blue text-left p-2">
                        Short-term
                      </th>
                      <th className="text-blue  border-b border-blue  text-left p-2">
                        Medium-term
                      </th>
                      <th className="text-blue  border-b border-blue  text-left p-2">
                        Long-term
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-blue text-blue p-2 align-top">
                        Engaging with internationally recognised frameworks and
                        standards
                      </td>
                      <td className="border-b border-blue text-blue p-2 align-top">
                        Implementing SLFRS S1 and SLFRS S2
                      </td>
                      <td className="border-b border-blue text-blue p-2 align-top">
                        Identifying and quantifying the impact our business
                        activities and value chain have on the environment
                      </td>
                      <td className="border-b border-blue text-blue p-2 align-top">
                        To be a catalyst for good and achieve our UN SDG
                        commitments, we must carefully manage our impact on
                        natural capital.
                      </td>
                      <td className="border-b border-blue text-blue p-2 align-top">
                        Unwavering commitment lies in the seamless integration
                        of ESG principles across all facets of our operations.
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-blue text-blue p-4 align-top">
                        The initiative to digitise operations and automate
                        processes aims to minimise paper usage throughout the
                        organisation
                      </td>
                      <td className="border-b border-blue text-blue p-4 align-top">
                        Newly implemented 100% digital personal loan portfolio
                        recorded Rs. 59.8 Mn
                      </td>
                      <td className="border-b border-blue text-blue p-4 align-top">
                        Identifying and mitigating our environmental risks and
                        opportunities respectively
                      </td>
                      <td className="border-b border-blue text-blue p-4 align-top">
                        Measuring our impact through selected metrics and
                        targets
                      </td>
                      <td className="border-b border-blue text-blue p-4 align-top">
                        Integrating Environmental and Social (E&S) factors into
                        lending decisions to promote environmental
                        sustainability among customers
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contributing to Our Mission */}
        <div className="bg-white text-blue p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">
            CONTRIBUTING TO OUR MISSION
          </h3>
          <p>
            To mobilise public funds by innovating investment products that will
            enhance the value delivered to our depositors.
          </p>
        </div>

        {/* Contributing to Our Values */}
        <div className="bg-white text-blue p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">
            CONTRIBUTING TO OUR VALUES
          </h3>
          <div>
            <img
              src="/images/charts/icons/nourvalues.png"
              alt="stakeholders"
              className="w-full"
            />
          </div>
        </div>
        <div className="bg-white text-blue p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">STAKEHOLDERS IMPACTED</h3>
          <div>
            <img
              src="/images/charts/capitalReport/NaturalReport/stackholderImpacted.png"
              alt="stakeholders"
              className="w-full"
            />
          </div>
        </div>
        {/* Material Matters */}
        <div className="bg-white text-blue p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">MATERIAL MATTERS</h3>
          <ul className="list-disc list-inside">
            <li>Digital transformation</li>
            <li>Social license to operate</li>
            <li>Corporate citizenship</li>
            <li>Employee engagement</li>
            <li>Digital transformation</li>
          </ul>
        </div>
        <div className="bg-white text-blue p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">COMMITMENTS TO UN SDGs</h3>
          <div className="flex justify-center">
            <img
              src="/images/charts/capitalReport/NaturalReport/commitmentToUn.png"
              className="w-full"
              alt="commitment to un sdgs"
            />
          </div>
        </div>
        <div className="bg-white text-blue p-6 rounded-lg flex flex-col items-center">
          <img
            src="/images/charts/capitalReport/NaturalReport/total-carbon-footprint.PNG"
            alt="Total Carbon Footprint"
            className="mb-4 rounded-lg w-full"
          />
        </div>
        {/* <Chart
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height={350}
        /> */}
      </div>
      <div className="text-white rounded-lg">
        <h2 className="pb-2 border-b-1 text-center">CAPITAL TRADE-OFF</h2>
        <h3 className="py-2 text-center">Managing our carbon footprint</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b">
          <div className="bg-[#d1dff2] rounded-t-lg text-center">
            <h4 className="font-bold bg-[#0989ca] p-2 rounded-t-lg">FC</h4>
            <p className="p-2 text-black">
              Investment in energy-efficient equipment
            </p>
          </div>
          <div className="bg-[#fadde9] rounded-t-lg text-center">
            <h4 className="font-bold bg-[#5a3f97] p-2 rounded-t-lg">HC</h4>
            <p className="p-2 text-black">
              Nurtures an environmentally conscious workforce through training
              and awareness creation{' '}
            </p>
          </div>
          <div className="bg-[#e3e1e0] rounded-t-lg text-center">
            <h4 className="font-bold bg-[#8c8e90] p-2 rounded-t-lg">MC</h4>
            <p className="p-2 text-black">
              Adopts green concepts in branches including maximising natural
              light
            </p>
          </div>
          <div className="bg-[#e8dcc8] rounded-t-lg text-center">
            <h4 className="font-bold bg-[#a67e35] p-2 rounded-t-lg">SC</h4>
            <p className="p-2 text-black">
              Maintains a sustainable value chain through supplier screening and
              promoting green lending
            </p>
          </div>
        </div>
        <h3 className="py-2 text-center">Expanding green initiatives</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b">
          <div className="bg-[#d1dff2] rounded-t-lg text-center">
            <h4 className="font-bold bg-[#0989ca] p-2 rounded-t-lg">FC</h4>
            <p className="p-2 text-black">
              Expands green financing and lending
            </p>
          </div>
          <div className="bg-[#fadde9] rounded-t-lg text-center">
            <h4 className="font-bold bg-[#ef56a0] p-2 rounded-t-lg">IC</h4>
            <p className="p-2 text-black">
              Automation and digitisation contribute to a paperless office and
              efficiency improvement
            </p>
          </div>
          <div className="bg-[#e8dcc8] rounded-t-lg text-center">
            <h4 className="font-bold bg-[#a67e35] p-2 rounded-t-lg">NC</h4>
            <p className="p-2 text-black">
              Conducts tree-planting projects in collaboration with the
              community
            </p>
          </div>
          <div className="bg-[#d1cce3] rounded-t-lg text-center">
            <h4 className="font-bold bg-[#5a3f97] p-2 rounded-t-lg">MC</h4>
            <p className="p-2 text-black">
              Employee volunteering to engage in environmental conservation
              initiatives
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white text-blue p-5 rounded-md mb-10">
        <h3 className="text-xl font-bold mb-3">
          DRIVING BEHAVIOURAL CHANGE THROUGH ENGAGEMENT
        </h3>
        <p className="">
          Our approach to safeguarding natural capital is based on understanding
          stakeholder needs and taking action in areas where we can positively
          impact long-term sustainability and effective environmental
          stewardship. By incorporating ESG into our stakeholder engagement, we
          are able to create awareness and influence better practices.
        </p>
        <h3 className="text-xl font-bold my-3 text-blue text-center">
          ENGAGEMENT
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-4">
          <div className="bg-[#7ED321] text-white rounded-lg p-6">
            <p className="text-3xl font-bold">1</p>
            <p>Understand impact</p>
          </div>
          <div className="bg-[#7ED321] text-white rounded-lg p-6">
            <p className="text-3xl font-bold">2</p>
            <p>Awareness and response</p>
          </div>
          <div className="bg-[#7ED321] text-white rounded-lg p-6">
            <p className="text-3xl font-bold">3</p>
            <p>Influence behaviour</p>
          </div>
        </div>
      </div>
      <h2 className="font-bold text-lg ">
        RESOURCE MANAGEMENT – UNDERSTANDING OUR IMPACTS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white text-blue rounded-lg p-6 grid gap-4">
          <h2>INPUT MANAGEMENT</h2>
          <div className="bg-[#7ED321] text-white rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">Water Footprint</h3>
            <p>
              Established contingency plans to mitigate and improve efficiency
              of water consumption across our business
            </p>
          </div>
          <div className="bg-[#7ED321] text-white rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">Energy Footprint</h3>
            <p>
              Our energy consumption matrix helps to streamline energy
              consumption in day-to-day activities
            </p>
          </div>
        </div>
        <div className="bg-white text-blue rounded-lg p-6 grid gap-4">
          <h2>OUTPUT MANAGEMENT</h2>
          <div className="bg-[#7ED321] text-white rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">Emission Footprint</h3>
            <p>
              Continuous and ongoing monitoring of our carbon footprint helps to
              maintain control over our emissions and emissions related
              materials
            </p>
          </div>
          <div className="bg-[#7ED321] text-white rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">Waste Footprint</h3>
            <p>
              Proactive effort to control waste through the promotion of 4R
              principles. (Reduce, Reuse, Refuse and Recycle)
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white p-5 rounded-lg text-blue">
        <h3 className="text-xl font-bold  mb-3">ENVIRONMENTAL GOVERNANCE</h3>
        <p>
          The sustainability team plays a vital role in overseeing effective
          management of the EMS (Environmental Management System). This
          encompasses monitoring the adequacy of the EMS in relation to the
          evolving regulatory requirements.
        </p>
        <div className="bg-[#7ED321] text-white p-5 mt-5 rounded-md">
          <h3 className="text-xl font-bold mb-3">
            Environmental Management System (EMS)
          </h3>
          <p>
            Our EMS is the foundation of our commitment to the environment. All
            our employees are encouraged to uphold the Environmental Pledge,
            which reflects our core values and guiding principles. The EMS is
            dynamic, evolving to address emerging environmental challenges while
            ensuring compliance with regulations. Our focus on addressing key
            environmental issues demonstrates our commitment to responsible
            stewardship and driving positive change. Through the EMS, we have
            achieved specific achievements, including management in carbon
            emissions and the implementation of a successful recycling
            programme. Through these efforts, we cultivate a workforce of
            environmentally conscious individuals, adopt sustainable green
            practices, and contribute to the conservation of our planet for
            future generations.
          </p>
        </div>
      </div>
      <h2 className="text-xl font-bold">THE SIX PILLARS OF EMS</h2>

      <div className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg text-blue">
            <h3 className="text-xl font-bold mb-3">REDUCE</h3>
            <p>
              Identify and implement strategies to reduce energy consumption,
              water usage, and waste generation across all operations.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg text-blue">
            <h3 className="text-xl font-bold mb-3">REUSE</h3>
            <p>
              Prioritise reusing materials whenever possible and explore
              creative ways to extend the lifespan of resources.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg text-blue">
            <h3 className="text-xl font-bold mb-3">RECYCLE</h3>
            <p>
              Implement a comprehensive recycling programme encompassing various
              materials and diverting waste from landfills.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg text-blue">
            <h3 className="text-xl font-bold mb-3">TRAINING</h3>
            <p>
              All employees undergo regular environmental awareness training to
              understand their role in minimising our negative impact.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg text-blue">
            <h3 className="text-xl font-bold mb-3">POLICIES AND PRACTICES</h3>
            <p>
              Establish clear environmental policies and procedures that guide
              our operations and decision-making.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg text-blue">
            <h3 className="text-xl font-bold mb-3">EMPLOYEE ENGAGEMENT</h3>
            <p>
              Foster a culture of environmental responsibility, encouraging
              employees to participate in sustainability initiatives actively.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center bg-[#f8f1ea] rounded-lg p-6">
          <img src="/images/charts/icons/waterfootprint.png" alt="direct emission" className='w-full' />
          </div>

          <div className="bg-white p-5 rounded-lg text-blue md:col-span-2">
            <h3 className="text-xl font-bold mb-3">WATER MANAGEMENT</h3>
            <p>
              We manage our water consumption, primarily reserved for essential
              staff utility purposes. Reducing our water footprint is a key
              objective outlined in our EMS. To achieve this, we have
              established a company-wide water management plan, outlining clear
              guidelines to minimise daily water usage. Additionally, we raise
              staff awareness, encouraging vigilance to minimise wastage and
              support conservation efforts.
            </p>

            <div className="mt-5">
              <h3 className="text-xl font-bold mb-3">
                Water Management Initiatives
              </h3>
              <table>
                <thead>
                  <tr>
                    <td>FOCUS PILLAR</td>
                    <td>ACTIONS TAKEN</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>Reduce consumption</p>
                    </td>
                    <td>
                      <ul className="list-disc pl-4 ">
                        <li>
                          Using high-intensity pressure pumps for vehicle
                          washing
                        </li>
                        <li>
                          Using pressure-reducing valves to maintain consistent
                          water pressure
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Awareness</p>
                    </td>
                    <td>
                      <ul className="list-disc pl-4 ">
                        <li>Displaying water-saving tips</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Reuse</p>
                    </td>
                    <td>
                      <ul className="list-disc pl-4 ">
                        <li>Using drain water for air conditioner cooling</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Policies and procedures </p>
                    </td>
                    <td>
                      <ul className="list-disc pl-4 ">
                        <li>
                          Employees committing to the Sustainability Pledge
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center">
            <img
              src="/images/annual-report/nc-1.png"
              alt="Sustainability Pledge"
              className="w-full"
            />
          </div>
          <div>
            <img
              src="/images/annual-report/nc-2.png"
              alt="Environment Policy"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center bg-[#f8f1ea] rounded-lg p-6">
          <img src="/images/charts/icons/enargyfootprint.png" alt="direct emission" className='w-full' />
          </div>

          <div className="col-span-1 md:col-span-2 bg-white text-blue rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">ENERGY MANAGEMENT</h3>
            <p>
              We recognise the environmental impact of our growing energy
              consumption and are committed to mitigating it through our Energy
              Management framework.
            </p>

            <div className="mt-5">
              <h3 className="text-xl font-bold mb-3">
                Energy Management Initiatives
              </h3>
              <div className="grid grid-cols-1">
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white text-blue rounded-md">
                    <thead>
                      <tr>
                        <th className="text-left py-2 px-4 bg-blue-100 font-semibold">
                          FOCUS PILLAR
                        </th>
                        <th className="text-left py-2 px-4 bg-orange-200 font-semibold">
                          ACTIONS TAKEN
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-t border-blue py-2 px-4">
                          Reduce consumption
                        </td>
                        <td className="border-t border-blue py-2 px-4">
                          <ul className="list-disc list-inside">
                            <li>Using high-tech energy-efficient equipment</li>
                            <li>Adopting energy reduction methodologies</li>
                            <li>
                              Using energy-efficient lighting for sign boards at
                              outlets
                            </li>
                            <li>Maximising usage of natural light</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-t border-blue py-2 px-4">
                          Awareness
                        </td>
                        <td className="border-t border-blue py-2 px-4">
                          <ul className="list-disc list-inside">
                            <li>Displaying of energy-saving tips</li>
                            <li>
                              Conducting an e-mail campaign on the benefits of
                              energy-saving
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-t border-blue py-2 px-4">
                          Reuse
                        </td>
                        <td className="border-t border-blue py-2 px-4">
                          <ul className="list-disc list-inside">
                            <li>
                              Using energy reduction methods at the office and
                              home
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-t border-blue py-2 px-4">
                          Policies and procedures
                        </td>
                        <td className="border-t border-blue py-2 px-4">
                          <ul className="list-disc list-inside">
                            <li>
                              Employees committing to the Sustainability Pledge
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3  gap-6 mb-10">
          <div className="flex flex-col items-center bg-[#f8f1ea] rounded-lg p-6">
          <img src="/images/charts/icons/emissionfootprint.png" alt="direct emission" className='w-full' />
          </div>
          <div className="col-span-1 md:col-span-2 bg-white text-blue rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">EMISSION MANAGEMENT</h3>
            <p>
              As a financial services institution, our direct emission (scope 1
              as defined by the GHG protocol) resulting from business activities
              are minimal. However, we recognise that our responsibility extends
              beyond direct emission and are taking steps to address scope 2 and
              3 emissions associated with our operations. We are pursuing energy
              efficiency measures and exploring renewable energy options to
              reduce our reliance on grid electricity, thus minimising our scope
              2 emissions.
            </p>
            <p className="mt-3">
              To address scope 3 emission, we are implementing programmes to
              encourage employees to adopt sustainable commuting options such as
              carpooling, public transportation, cycling, and walking. We are
              also exploring options for remote work and flexible work
              arrangements to further reduce commuting-related emission.
            </p>
            <p className="mt-3">
              While our assessments did not reveal significant air emissions or
              hazardous compounds, we are committed to continuous improvement.
              We are exploring more comprehensive emission measurement
              methodologies to further refine the understanding of our
              environmental impact and identify additional areas for
              improvement.
            </p>

            <div className="mt-5">
              <h3 className="text-xl font-bold mb-3">
                Emission Management Initiatives
              </h3>
              <div className="grid grid-cols-1">
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white text-blue rounded-md">
                    <thead>
                      <tr>
                        <th className="text-left py-2 px-4 bg-blue-100 font-semibold">
                          FOCUS PILLAR
                        </th>
                        <th className="text-left py-2 px-4 bg-orange-200 font-semibold">
                          ACTIONS TAKEN
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-t border-blue py-2 px-4">
                          Reduce consumption
                        </td>
                        <td className="border-t border-blue py-2 px-4">
                          <ul className="list-disc list-inside">
                            <li>
                              Moving away from high-energy intensive equipment
                              to energy-saving equipment
                            </li>
                            <li>
                              Promoting common transport as opposed to private
                              transport
                            </li>
                            <li>Regulating usage during peak times</li>
                            <li>
                              Providing integrated transport solutions for
                              business duties
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 bg-white text-blue rounded-md p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white text-blue rounded-md">
            <thead>
              <tr>
                <th className="text-left py-2 px-4 bg-blue-100 font-semibold">
                  FOCUS PILLAR
                </th>
                <th className="text-left py-2 px-4 bg-orange-200 font-semibold">
                  ACTIONS TAKEN
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-t border-blue py-2 px-4">Awareness</td>
                <td className="border-t border-blue py-2 px-4">
                  <ul className="list-disc list-inside">
                    <li>
                      E-mail campaign on energy-saving mechanisms across the
                      Company
                    </li>
                    <li>
                      Encouraging customers, corporate entities, and the general
                      public to adopt low-emission initiatives
                    </li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td className="border-t border-blue py-2 px-4">Reuse</td>
                <td className="border-t border-blue py-2 px-4">
                  <ul className="list-disc list-inside">
                    <li>
                      Leading by example and encouraging peers to focus on
                      carbon neutrality by adopting the carbon footprint
                      calculation process
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border-t border-blue py-2 px-4">
                  Policies and procedures
                </td>
                <td className="border-t border-blue py-2 px-4">
                  <ul className="list-disc list-inside">
                    <li>Securing the commitment of employees to the EMS</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white text-blue rounded-lg p-6">
        <h3 className="text-xl font-bold mb-3">
          CARBON FOOTPRINT VERIFICATION
        </h3>
        <p>
          Our carbon footprint calculations are independently verified according
          to the ISO 14064-1:2006 standard, ensuring the accuracy and
          credibility of our reported emissions data.
        </p>
        <p>
          This carbon footprint assessment provides valuable insights that guide
          our emission reduction strategies and initiatives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white text-blue rounded-lg p-6">
          <h3 className="text-xl font-bold mb-3">
            CARBON FOOTPRINT CALCULATION
          </h3>
          <p>
            Following the GHG Protocol, we report our emissions across three
            scopes:
          </p>
          <p>Scope 1 : Direct emissions from sources we own or control.</p>
          <p>
            Scope 2 : Indirect emissions from purchased electricity, heating,
            and cooling.
          </p>
          <p>
            Scope 3 : Other indirect emissions across our value chain, such as
            employee commuting and business travel.
          </p>
        </div>
        <div className="bg-white text-blue rounded-lg p-6">
          <div className="flex gap-2">
            <img
              src="/images/annual-report/nc-qr.png"
              alt="qr code"
              className="w-32"
            />
            <p>
              Visit web page for more information on the carbon footprint report
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 bg-white text-blue rounded-md p-6">
        <h3 className="text-xl font-bold mb-3 text-blue">
          Strategies and targets
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full ">
            <thead>
              <tr>
                <th className="text-left py-2 px-4 bg-blue-100 font-semibold">
                  SCOPE
                </th>
                <th className="text-left py-2 px-4 bg-orange-200 font-semibold">
                  TARGET
                </th>
                <th className="text-left py-2 px-4 bg-orange-200 font-semibold">
                  STRATEGY
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-t border-blue py-2 px-4">Scope 1</td>
                <td className="border-t border-blue py-2 px-4">
                  <ul className="list-disc list-inside">
                    <li>
                      Effectively and efficient use of natural capital at
                      workplace
                    </li>
                  </ul>
                </td>
                <td className="border-t border-blue py-2 px-4">
                  <ul className="list-disc list-inside">
                    <li>
                      Focus on GHG emission reduction in work place
                      arrangements, construction and maintenance of office
                      premises{' '}
                    </li>
                    <li>
                      Maintain optimum temperature of air conditions at all
                      locations{' '}
                    </li>
                    <li>
                      Use of energy intensity sensor based lights where possible
                    </li>
                    <li>
                      Awareness on LB sustainability pledge and environment
                      policy
                    </li>
                    <li>Purchase laptops while phasing out old desktops </li>
                    <li>
                      Encourage using online platforms and digital systems in
                      the business processes and business meetings
                    </li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td className="border-t border-blue py-2 px-4">Scope 2</td>
                <td className="border-t border-blue py-2 px-4">
                  <ul className="list-disc list-inside">
                    <li>Reduction of carbon emission of our own operation</li>
                  </ul>
                </td>
                <td className="border-t border-blue py-2 px-4">
                  <ul className="list-disc list-inside">
                    <li>Installation of solar panel in 26 branches</li>
                    <li>
                      Awareness campaign for employees to promote responsible
                      green practices
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 bg-white text-blue rounded-md p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full ">
            <thead>
              <tr>
                <th className="text-left py-2 px-4 bg-blue-100 font-semibold">
                  SCOPE
                </th>
                <th className="text-left py-2 px-4 bg-orange-200 font-semibold">
                  STRATEGY IN MEDIUM TERM
                </th>
                <th className="text-left py-2 px-4 bg-orange-200 font-semibold">
                  STRATEGY IN LONG TERM
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-t border-blue py-2 px-4">Scope 3</td>
                <td className="border-t border-blue py-2 px-4">
                  <ul className="list-disc list-inside">
                    <li>Take necessary actions to measure finance emissions</li>
                    <li>
                      Provide financial incentives for environmental friendly
                      business practices
                    </li>
                  </ul>
                </td>
                <td className="border-t border-blue py-2 px-4">
                  <ul className="list-disc list-inside">
                    <li>Promote recycling and circular economy</li>
                    <li>
                      Assess the financial risks and opportunities associated
                      with the scenarios
                    </li>
                    <li>
                      Support research and development efforts for reducing GHG
                      emission
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col items-center bg-white rounded-lg p-6">
        <img src="/images/charts/icons/directemission.png" alt="direct emission" className='w-full' />
      </div>

      

      <div className="grid gap-6 text-blue">
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      <div className="flex flex-col items-center bg-[#f8f1ea] rounded-lg p-6">
        <img src="/images/charts/icons/wastefootprint.png" alt="direct emission" className='w-full' />
      </div>
        {/* Middle Column */}
        <div className="bg-white p-6 rounded-lg shadow-lg col-span-1 md:col-span-2">
          <h2 className="text-xl font-semibold ">WASTE MANAGEMENT</h2>
          <p className="mt-4">
            To minimize paper waste, our EMS promotes the 4R principles:
          </p>
          <h3 className='font-bold py-2'>Waste Management Initiatives</h3>
          <table className="w-full mt-2">
            <thead>
              <tr className="text-left bg-gray-100">
                <th className="p-2">FOCUS PILLAR</th>
                <th className="p-2">ACTIONS TAKEN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 font-semibold">Refuse</td>
                <td className="p-2">
                  Implementing strategies to minimize paper usage through
                  digitization and responsible document management.
                  <br />
                  Creating a centralized web portal has created a paperless work
                  environment.
                </td>
              </tr>
              <tr>
                <td className="p-2 font-semibold">Reduce</td>
                <td className="p-2">
                  Monitoring and controlling inventory consumption through the
                  inventory management system.
                </td>
              </tr>
              <tr>
                <td className="p-2 font-semibold">Recycle</td>
                <td className="p-2">
                  Directing paper items to a designated area in each office to
                  be sent for recycling.
                  <br />
                  Recycling all paper waste through Neptune Recyclers.
                  <br />
                  Recycling all e-waste through an authorized e-waste recycling
                  partner.
                </td>
              </tr>
              <tr>
                <td className="p-2 font-semibold">Reuse</td>
                <td className="p-2">
                  Reuse of paper and envelopes as much as possible.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

        {/* Right Column */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Thuru Wawamu</h2>
          <p className="mt-4">
            Under the Thuru Wawamu project launched in 2018 we have grown 8,200
            trees as of 31 March 2024. The project was launched coinciding with
            the Company&apos;s 50th anniversary, contributing to the restoration
            of Sri Lanka&apos;s forest cover.
          </p>
          <p className="mt-4">
            The collaborative approach with key stakeholders including school
            authorities, local governing bodies, and the general public has
            ensured community involvement and long-term sustainability of the
            project.
          </p>
          <h2 className="text-xl font-semibold mt-6">Awareness Building</h2>
          <p className="mt-4">
            We partnered with the Young Zoologists’ Association of Sri Lanka in
            a joint initiative to raise awareness about the importance of
            national parks and responsible visitor behavior.
          </p>
          <p className="mt-4">
            The initiative focuses on installing and maintaining informative
            display boards at the entrances of national parks across Sri Lanka.
            These boards provide visitors with essential information about the
            parks’ ecosystem, wildlife conservation efforts, and guidelines for
            responsible behavior to minimize their impact on the environment. By
            educating visitors about the significance of national parks and
            promoting responsible tourism practices, we aim to contribute to the
            long-term preservation of Sri Lanka&apos;s rich biodiversity and
            natural heritage.
          </p>
          <div className="mt-4">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2">Year</th>
                  <th className="p-2">Project Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">2023/24</td>
                  <td className="p-2">Dehiwala, Pinnawala</td>
                </tr>
                <tr>
                  <td className="p-2">2022/23</td>
                  <td className="p-2">
                    Udawala, Katharagama, Suriyawewa, Padalangala, Matara,
                    Ambalantota, Ussangoda, Hambantota, Dehiwala
                  </td>
                </tr>
                <tr>
                  <td className="p-2">2021/22</td>
                  <td className="p-2">Dehiwala</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 text-blue rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold">ENVIRONMENTAL SUSTAINABILITY</h2>
        <h3 className="text-lg font-semibold mt-4">Green Lending</h3>
        <p className="mt-2">
          Our Green Lending scheme promotes sustainable transportation by
          offering attractive financing options for hybrid vehicles. These
          vehicles significantly reduce carbon emissions and contribute to a
          cleaner environment compared to traditional gasoline or diesel
          vehicles.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full mt-4 text-left overflow-x-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">Year</th>
                <th className="p-2">Volume (Nos)</th>
                <th className="p-2">Volume (LKR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">2019/20</td>
                <td className="p-2">2,814</td>
                <td className="p-2">5,750,625,199</td>
              </tr>
              <tr>
                <td className="p-2">2020/21</td>
                <td className="p-2">2,293</td>
                <td className="p-2">4,293,103,819</td>
              </tr>
              <tr>
                <td className="p-2">2021/22</td>
                <td className="p-2">1,457</td>
                <td className="p-2">4,135,768,244</td>
              </tr>
              <tr>
                <td className="p-2">2022/23</td>
                <td className="p-2">855</td>
                <td className="p-2">2,411,246,225</td>
              </tr>
              <tr>
                <td className="p-2">2023/24</td>
                <td className="p-2">1,597</td>
                <td className="p-2">5,056,620,478</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white text-blue p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold ">CARBON JOURNEY</h2>
        <p className="text-lg text-green-600 mt-4">
          Our commitment to protect and preserve the environment by continuously
          refining our policies and procedures and improving our products and
          services through the use of technology has enabled LB Finance PLC to
          be certified as a Carbon Neutral Company until last year.
        </p>
        <p className="text-lg text-green-600 mt-4">
          LBF&apos;s commitment towards nature and sustainability by promoting
          environment-friendly business practices to the various business
          segments of the country as well as reducing carbon footprints from our
          organisational framework.
        </p>
        <p className="text-3xl font-bold text-green mt-6">
          3,982.9 tCO<sub>2</sub>e
        </p>
        <div className="mt-4 flex items-center">
          <img
            src="/images/annual-report/nc-qr-2.png"
            alt="QR Code"
            className="w-24 h-24 mr-4"
          />
          <p className="">Scan QR code to view our Carbon Journey online</p>
        </div>
        <div className="mt-8 flex justify-center p-4 rounded-lg">
          <img src="/images/annual-report/nc-3.png" alt="carbon certificate" />
        </div>
      </div>
    </div>
  );
}
