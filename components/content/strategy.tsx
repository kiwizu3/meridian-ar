import React from 'react';

interface cardProps {
  color: string;
  colorCount: number;
  content: string;
  bgColor: string;
}

const card1 = [
  {
    color: 'bg-[#58c07d]',
    colorCount: 1,
    content: 'Capital and liquidity buffers   \nAsset quality',
    bgColor: 'bg-[#c3c6d2]',
  },
  {
    color: 'bg-[#466fb4]',
    colorCount: 2,
    content: 'Profitability and business growth',
    bgColor: 'bg-[#c3c6d2]',
  },
  {
    color: 'bg-[#fb5579]',
    colorCount: 2,
    content: 'Long-term value creation',
    bgColor: 'bg-[#c3c6d2]',
  },
];
const card2 = [
  {
    color: 'bg-[#58c07d]',
    colorCount: 1,
    content: 'CSR efforts',
    bgColor: 'bg-[#dac2b6]',
  },
  {
    color: 'bg-[#466fb4]',
    colorCount: 2,
    content: 'Lover carbon footprint',
    bgColor: 'bg-[#dac2b6]',
  },
  {
    color: 'bg-[#fb5579]',
    colorCount: 2,
    content: 'Net zero finance company',
    bgColor: 'bg-[#dac2b6]',
  },
  {
    color: 'bg-[#58c07d]',
    colorCount: 1,
    content: 'Objective based performance management',
    bgColor: 'bg-[#abe0e3]',
  },
  {
    color: 'bg-[#466fb4]',
    colorCount: 2,
    content: 'Talent development',
    bgColor: 'bg-[#abe0e3]',
  },
  {
    color: 'bg-[#fb5579]',
    colorCount: 2,
    content: 'No.1 employer in Sri Lanka',
    bgColor: 'bg-[#abe0e3]',
  },
];
const card3 = [
  {
    color: 'bg-[#58c07d]',
    colorCount: 1,
    content: 'Financial inclusion Expansion of customer touchpoints',
    bgColor: 'bg-[#f6e9d8]',
  },
  {
    color: 'bg-[#466fb4]',
    colorCount: 2,
    content: 'Enhance Engagement and Satisfaction',
    bgColor: 'bg-[#f6e9d8]',
  },
  {
    color: 'bg-[#fb5579]',
    colorCount: 2,
    content: 'Tailored service enhancement and feedback mechanisms',
    bgColor: 'bg-[#f6e9d8]',
  },
  {
    color: 'bg-[#58c07d]',
    colorCount: 1,
    content: 'Process automation and RPAs',
    bgColor: 'bg-[#ffe4d2]',
  },
  {
    color: 'bg-[#466fb4]',
    colorCount: 2,
    content: 'Optimum resource allocation',
    bgColor: 'bg-[#ffe4d2]',
  },
  {
    color: 'bg-[#fb5579]',
    colorCount: 2,
    content: 'Most efficiently run financial services provider in Sri Lanka',
    bgColor: 'bg-[#ffe4d2]',
  },
];

const card4 = [
  {
    color: 'bg-[#58c07d]',
    colorCount: 1,
    content: 'Digital lending',
    bgColor: 'bg-[#f6e9d8]',
  },
  {
    color: 'bg-[#466fb4]',
    colorCount: 2,
    content: 'Tech-based solutions',
    bgColor: 'bg-[#f6e9d8]',
  },
  {
    color: 'bg-[#fb5579]',
    colorCount: 2,
    content: 'Digitised branches',
    bgColor: 'bg-[#f6e9d8]',
  },
];
export default function Strategy() {
  function Card(props: cardProps) {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 justify-center">
          {Array.from({ length: props.colorCount }).map((_, index) => (
            <div
              key={index}
              className={`${props.color} rounded-xl h-2 w-4`}
            ></div>
          ))}
        </div>
        <div className={`${props.bgColor} rounded-b-lg p-4`}>
          <p className="text-black">{props.content}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col gap-8">
      <div>
        <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">APPROACH TO STRATEGY</h2>
          <div className="relative">
            <div className="pt-4 pb-4 text-center">
              <h3 className="text-xl font-semibold mb-2">VISION</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#F9A825] rounded p-2">Mission</div>
                <div className="bg-[#CD853F] rounded p-2">Values</div>
                <div className="bg-[#F9A825] rounded p-2">Goals</div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-xs text-center mt-4">
              <div>FOR THE ECONOMY</div>
              <div>IN TO THE SOCIETY</div>
              <div>WITHIN THE GOVERNANCE</div>
              <div>TO THE ENVIRONMENT</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#ddefe0] bg-opacity-20 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              Expand the core
            </h3>
            <p className="text-sm">
              Business ecosystems: Updating our product range and customer reach
              through partnerships with fintechs and telcos
            </p>
          </div>
          <div className="md:col-span-2 bg-[#ace2f0] bg-opacity-20 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-center">
              Strengthen the core
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-1">Digitisation</h4>
                <p className="text-sm">
                  Building on existing digital and analytics capabilities to
                  improve end-to-end customer journeys and drive growth
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Customer acquisition</h4>
                <p className="text-sm">
                  Delivering front-line training programmes to increase
                  cross-selling and drive growth
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Business systems</h4>
                <p className="text-sm">
                  Enhancing the technology platform and cyber security practices
                  while improving the speed of delivery
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Distribution</h4>
                <p className="text-sm">
                  Optimising the branch footprint through additional
                  distribution opportunities
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#ddefe0] bg-opacity-20 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 flex items-center justify-end">
              Expand the core
            </h3>
            <p className="text-sm">
              Digital MSME: Developing digital lending for the Micro, Small and
              Medium Enterprises (MSMEs)
            </p>
          </div>
        </div>

        <div className="p-4 mb-4 bg-[#c6e9ec] rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-center bg-[#41cae4] rounded-xl p-2">
            DRIVEN BY OUR SUSTAINABILITY LEVERS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-black">
            <div>
              <img
                src="/images/annual-report/financialSustainabilityIcon.png"
                alt="Financial Stability"
                className="mx-auto mb-2"
              />
              <p className="text-sm">Financial Stability</p>
            </div>
            <div>
              <img
                src="/images/annual-report/pEnvImpactIcon.png"
                alt="Positive Environmental Impact"
                className="mx-auto mb-2"
              />
              <p className="text-sm">Positive Environmental Impact</p>
            </div>
            <div>
              <img
                src="/images/annual-report/inclusiveGrowthIcon.png"
                alt="Inclusive Growth"
                className="mx-auto mb-2"
              />
              <p className="text-sm">Inclusive Growth</p>
            </div>
            <div>
              <img
                src="/images/annual-report/greatWorkPlaceIcon.png"
                alt="Great Work Place"
                className="mx-auto mb-2"
              />
              <p className="text-sm">Great Work Place</p>
            </div>
          </div>
        </div>

        <div className="p-4 mb-4 bg-[#c6e9ec] rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-center bg-[#58c07d] rounded-xl p-2">
            STRATEGIC PILLARS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center text-black">
            <div>
              <img
                src="/images/annual-report/financiResiIcon.png"
                alt="Financial Resilience"
                className="mx-auto mb-2"
              />
              <p className="text-sm">Financial Resilience</p>
            </div>
            <div>
              <img
                src="/images/annual-report/customerReciIcon.png"
                alt="Customer Centricity"
                className="mx-auto mb-2"
              />
              <p className="text-sm">Customer Centricity</p>
            </div>
            <div>
              <img
                src="/images/annual-report/businessSimplyIcon.png"
                alt="Business Simplification and Optimisation"
                className="mx-auto mb-2"
              />
              <p className="text-sm">
                Business Simplification and Optimisation
              </p>
            </div>
            <div>
              <img
                src="/images/annual-report/degitalTransformationIcon.png"
                alt="Digital Transformation"
                className="mx-auto mb-2"
              />
              <p className="text-sm">Digital Transformation</p>
            </div>
            <div>
              <img
                src="/images/annual-report/workforceIcon.png"
                alt="Workforce Empowerment"
                className="mx-auto mb-2"
              />
              <p className="text-sm">Workforce Empowerment</p>
            </div>
            <div>
              <img
                src="/images/annual-report/manageImpactIcon.png"
                alt="Manage Our Impact"
                className="mx-auto mb-2"
              />
              <p className="text-sm">Manage Our Impact</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-lg font-semibold mb-4 text-center bg-[#466fb4] rounded-t-xl p-2">
          CONNECTIVITY OF STRATEGIC DRIVERS
        </h3>
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {card1?.map((item: any) => (
              <div key={item}>
                <Card
                  color={item.color}
                  colorCount={item.colorCount}
                  content={item.content}
                  bgColor={item.bgColor}
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="flex flex-col gap-4">
              {card2?.map((item: any) => (
                <div key={item}>
                  <Card
                    color={item.color}
                    colorCount={item.colorCount}
                    content={item.content}
                    bgColor={item.bgColor}
                  />
                </div>
              ))}
            </div>
            <div className="md:col-span-4 flex justify-center items-center">
              <img src="/images/annual-report/strategicfocusMap.png" alt="strategicfocusMap" className='w-full'/>
            </div>
            <div className="flex flex-col gap-4 justify-between">
              {card3?.map((item: any) => (
                <div key={item}>
                  <Card
                    color={item.color}
                    colorCount={item.colorCount}
                    content={item.content}
                    bgColor={item.bgColor}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between">
            {card4?.map((item: any) => (
              <div key={item}>
                <Card
                  color={item.color}
                  colorCount={item.colorCount}
                  content={item.content}
                  bgColor={item.bgColor}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-end">
          <div className="flex gap-2 items-center">
            <p className="font-bold">Short</p>
            <div className="h-2 w-4 rounded-lg bg-[#58c07d]"></div>
          </div>
          <div className="flex gap-2 items-center">
            <p className="font-bold">Medium</p>
            <div className="h-2 w-4 rounded-lg bg-[#466fb4]"></div>
            <div className="h-2 w-4 rounded-lg bg-[#466fb4]"></div>
          </div>
          <div className="flex gap-2 items-center">
            <p className="font-bold">Long</p>
            <div className="h-2 w-4 rounded-lg bg-[#fb5579]"></div>
            <div className="h-2 w-4 rounded-lg bg-[#fb5579]"></div>
            <div className="h-2 w-4 rounded-lg bg-[#fb5579]"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1  gap-6">
    
        <div className="bg-gray-200 rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4 flex items-center text-[#00456b]">
            <span className="bg-[#00456b] text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
              1
            </span>
            FINANCIAL RESILIENCE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* KPIs */}
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-[#ff8e51] rounded-t-lg p-22 bg-[#d4a262] rounded-t-lg p-2">
                KPIs
              </h3>
              <p className="text-black">Liquidity ratio</p>
              <p className="text-black">
                CAR &gt;2% more than the regulatory requirement
              </p>
              <p className="text-black">Net NPL &lt;1%</p>
              <p className="text-black">ROE, ROA</p>
              <p className="text-black">EVA, MVA</p>
            </div>
            {/* Progress for the year */}
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold text-orange-7020 bg-[#466fb4] rounded-t-lg p-2">
                Progress for the year
              </h3>
              <div className="text-black">
                <p>
                  <span className="font-semibold">Liquidity ratio</span>
                </p>
                <p>Rs. 1.8 Bn 23.48%</p>
                <p>
                  <span className="font-semibold">NPA</span>
                </p>
                <p>Rs. (8.8) Bn (0.79)%</p>
                <p>
                  <span className="font-semibold">ROE</span>{' '}
                  <span className="font-semibold">ROA</span>
                </p>
                <p>23.40% 4.97%</p>
              </div>
            </div>
            {/* Value creation activities */}
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-teal-700 rounded-t-lg p-2">
                Value creation activities
              </h3>
              <ul className="list-disc pl-4 text-black">
                <li>Maintained sufficient capital and liquidity buffers</li>
                <li>Improved asset quality levels</li>
                <li>Strengthened credit risk rating based lending practices</li>
                <li>Maintained profitability</li>
              </ul>
            </div>
            {/* Focus for 2024/25 */}
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-[#fb5579] rounded-t-lg p-2">
                Focus for 2024/25
              </h3>
              <p className="text-black">Enhance profitability</p>
              <div className="mt-2 text-black">
                <p className="font-bold">Related Capitals</p>
                <span className=" text-black px-2 py-1 rounded-full text-sm">
                  FC
                </span>
              </div>
              <div className="mt-2">
                <p className="font-bold text-black">
                  Related Sustainability Levers
                </p>
                <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-sm">
                  SDG
                </span>
              </div>
            </div>
            {/* Resource allocation */}
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-[#ff8e51] rounded-t-lg p-2">
                Resource allocation
              </h3>
              <ul className="list-disc pl-4 text-black">
                <li>
                  Investment on continuous improvement of the Eclipse core
                  banking system enabling capacity expansion and accurate
                  decision making
                </li>
                <li>Enhance team strength</li>
                <li>
                  Optimum resource allocation for non-vehicle financing products
                </li>
              </ul>
            </div>
            {/* Challenges */}
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-purple-700 rounded-t-lg p-2">
                Challenges
              </h3>
              <ul className="list-disc pl-4 text-black">
                <li>Volatility in the operating environment</li>
                <li>
                  Economic recovery and economic activities were slower than
                  anticipated
                </li>
                <li>Continued pressure on repayment capacity of customers</li>
                <li>Continuation of vehicle import restrictions</li>
                <li>Frequent changes in the Fiscal Policy</li>
              </ul>
            </div>
          </div>
        </div>

    
        <div className="bg-gray-200 rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4 flex items-center text-yellow-600">
            <span className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
              2
            </span>
            CUSTOMER CENTRICITY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-[#ff8e51] rounded-t-lg p-2">KPIs</h3>
              <div className="text-black">
                <p>New branches opened</p>
                <p>Brand ranking</p>
                <p>Brand value</p>
              </div>
            </div>
           
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-[#466fb4] rounded-t-lg p-2">
                Progress for the year
              </h3>
              <div className="text-black">
                <p>No. of new branches opened: 09</p>
                <p>
                  <span className="font-semibold">Brand ranking</span>{' '}
                  <span className="font-semibold">Brand value</span>
                </p>
                <p>25 Rs. 3,597 Mn</p>
                <p className="text-sm">(Brand Finance)</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-teal-700 rounded-t-lg p-2">
                Value creation activities
              </h3>
              <ul className="list-disc pl-4 text-black">
                <li>
                  Focused growth in female participation to increase financial
                  inclusivity
                </li>
                <li>
                  Optimised customer reach through existing distribution
                  channels and while adopting digitised distribution networks
                </li>
              </ul>
            </div>
       
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-[#fb5579] rounded-t-lg p-2">
                Focus for 2024/25
              </h3>
              <p className="text-black">
                Brand building to drive digital channel expansion
              </p>
              <div className="mt-2 text-black">
                <p className="font-bold">Related Capitals</p>
                <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-sm mr-1">
                  SC
                </span>
                <span className="bg-gray-500  text-white px-2 py-1 rounded-full text-sm">
                  HC
                </span>
              </div>
              <div className="mt-2 text-black">
                <p className="font-bold">Related Sustainability Levers</p>
                <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-sm mr-1">
                  SDG
                </span>
                <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-sm">
                  ESG
                </span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-[#ff8e51] rounded-t-lg p-2">
                Resource allocation
              </h3>
              <ul className="list-disc pl-4 text-black">
                <li>Investment on land and building</li>
                <li>Investment on digital channels and related developments</li>
                <li>
                  Investment on staff training on customer service standards
                </li>
              </ul>
            </div>
          
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-purple-700 rounded-t-lg p-2">
                Challenges
              </h3>
              <ul className="list-disc pl-4 text-black">
                <li>Increased branch setup cost</li>
                <li>Customer resistance to change into digital channels</li>
                <li>Brand building and challenges in communication channels</li>
                <li>
                  Implementation of financial consumer protection framework
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4 flex items-center text-[#ff8e51]">
            <span className="bg-[#ff8e51] text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
              3
            </span>
            BUSINESS SIMPLIFICATION AND OPTIMISATION
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-[#ff8e51] rounded-t-lg p-2">KPIs</h3>
              <p className="text-black">Process automations</p>
              <p className="text-black">
                Growth in volumes of digital transactions volume
              </p>
            </div>
           
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-[#466fb4] rounded-t-lg p-2">
                Progress for the year
              </h3>
              <p className="text-black">RPA&#39; s system implementation</p>
              <p className="text-black">52% growth in CIM transaction volume</p>
            </div>
         
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-teal-700 rounded-t-lg p-2">
                Value creation activities
              </h3>
              <ul className="list-disc pl-4 text-black">
                <li>Enhanced efficiency through process automation and RPAs</li>
                <li>
                  Evaluated core and non-core activities for better internal
                  resource allocation
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-[#fb5579] rounded-t-lg p-2">
                Focus for 2024/25
              </h3>
              <p className="text-black">Lean management</p>
              <div className="mt-2">
                <p className="font-bold text-black">Related Capitals</p>
                <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-sm mr-1">
                  IC
                </span>
                <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-sm">
                  MC
                </span>
              </div>
              <div className="mt-2">
                <p className="font-bold text-black">
                  Related Sustainability Levers
                </p>
                <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-sm mr-1">
                  SDG
                </span>
                <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-sm">
                  ESG
                </span>
              </div>
            </div>
           
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-[#ff8e51] rounded-t-lg p-2">
                Resource allocation
              </h3>
              <ul className="list-disc pl-4 text-black">
                <li>Investment on RPAs</li>
                <li>Investment on analytical tools</li>
                <li>Investment on process automation</li>
                <li>
                  Investment on human capital - specific training to IT Staff
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-purple-700 rounded-t-lg p-2">
                Challenges
              </h3>
              <ul className="list-disc pl-4 text-black">
                <li>Frequent changes in underlying technologies</li>
                <li>Employee resistance towards automations</li>
              </ul>
            </div>
          </div>
        </div>

      
        <div className="bg-gray-200 rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4 flex items-center text-purple-600">
            <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
              4
            </span>
            DIGITAL TRANSFORMATION
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-[#ff8e51] rounded-t-lg p-2">KPIs</h3>
              <div className="text-black">
                <p>Digitally active customers</p>
                <p>System and CIM app downtime</p>
                <p>No. of CIM app downloads</p>
              </div>
            </div>
           
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-[#466fb4] rounded-t-lg p-2">
                Progress for the year
              </h3>
              <div className="text-black">
                <p>Digitally active customers: +200,000</p>
                <p>No. of CIM app downloads: +200,000</p>
                <p>CIM app downtime: 0.41%</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-teal-700 rounded-t-lg p-2">
                Value creation activities
              </h3>
              <ul className="list-disc pl-4 text-black">
                <li>High focus and priority for digital lending</li>
                <li>
                  Implemented tech-based solutions for customer onboarding,
                  customer service and internal processes
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-[#fb5579] rounded-t-lg p-2">
                Focus for 2024/25
              </h3>
              <p className="text-black">
                Enriching the digital journey of the customers
              </p>
              <div className="mt-2">
                <p className="font-bold text-black">Related Capitals</p>
                <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-sm mr-1">
                  IC
                </span>
                <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-sm">
                  SC
                </span>
              </div>
              <div className="mt-2">
                <p className="font-bold text-black">
                  Related Sustainability Levers
                </p>
                <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-sm">
                  SDG
                </span>
              </div>
            </div>
          
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-[#ff8e51] rounded-t-lg p-2">
                Resource allocation
              </h3>
              <ul className="list-disc pl-4 text-black">
                <li>Investment in data security</li>
                <li>Investment in customer care operations</li>
                <li>
                  Investment in human capital specific, IT related training to
                  staff
                </li>
              </ul>
            </div>
           
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-purple-700 rounded-t-lg p-2">
                Challenges
              </h3>
              <ul className="list-disc pl-4 text-black">
                <li>Cyber security related threats and vulnerabilities</li>
                <li>Implementation of data protection regulations</li>
                <li>Evolving digital need of customers</li>
                <li>Customer complaints</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4 flex items-center text-teal-500">
            <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
              5
            </span>
            WORKFORCE EMPOWERMENT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-[#ff8e51] rounded-t-lg p-2">KPIs</h3>
              <div className="text-black">
                <p>Employee training hours</p>
                <p>Gender parity</p>
                <p>Employee promotions</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-[#466fb4] rounded-t-lg p-2">
                Progress for the year
              </h3>
              <div className="text-black">
                <p>Employee training hours: 43,127</p>
                <p>Gender parity (M : F): 1 : 0.85</p>
                <p>Employee promotions: 1,037</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-teal-700 rounded-t-lg p-2">
                Value creation activities
              </h3>
              <ul className="list-disc pl-4 text-black">
                <li>
                  Further improved our objective-based performance management
                  process across the Company
                </li>
                <li>Continued to invest in talent development</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-[#fb5579] rounded-t-lg p-2">
                Focus for 2024/25
              </h3>
              <p className="text-black">Retain and empower talented staff</p>
              <div className="mt-2">
                <p className="font-bold text-black">Related Capitals</p>
                <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-sm mr-1">
                  HC
                </span>
                <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-sm">
                  SC
                </span>
              </div>
              <div className="mt-2">
                <p className="font-bold text-black">
                  Related Sustainability Levers
                </p>
                <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-sm">
                  SDG
                </span>
              </div>
            </div>
           
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-[#ff8e51] rounded-t-lg p-2">
                Resource allocation
              </h3>
              <ul className="list-disc pl-4 text-black">
                <li>Employment compensations</li>
                <li>Investment in employee engagement activities</li>
                <li>Investment in physical and mental well-being</li>
                <li>Investment in training and development</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-purple-700 rounded-t-lg p-2">
                Challenges
              </h3>
              <ul className="list-disc pl-4 text-black">
                <li>Brain drain</li>
                <li>Talent acquisition</li>
                <li>
                  Management of employee mental well-being due to uncertainties
                  in the socio-economic environment
                </li>
              </ul>
            </div>
          </div>
        </div>

       
        <div className="bg-gray-200 rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4 flex items-center text-[#8c4c33]">
            <span className="bg-[#8c4c33] text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
              6
            </span>
            MANAGE OUR IMPACT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-[#ff8e51] rounded-t-lg p-2">KPIs</h3>
              <div className="text-black">
                <p>Carbon footprint</p>
                <p>Investment in CSR</p>
                <p>Green financing</p>
                <p>CSR projects</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-[#466fb4] rounded-t-lg p-2">
                Progress for the year
              </h3>
              <div className="text-black">
                <p>Carbon footprint: 3,982 tCO₂e</p>
                <p>Investment in CSR: Rs. 20.20 Mn</p>
                <p>Green financing: Rs. 5.05 Bn</p>
                <p>No. of CSR projects: 22</p>
              </div>
            </div>
      
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-teal-700 rounded-t-lg p-2">
                Value creation activities
              </h3>
              <ul className="list-disc pl-4 text-black">
                <li>Further optimised CSR efforts to maximise impact</li>
                <li>Increased geographic presence</li>
                <li>Lowered carbon footprint</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-[#fb5579] rounded-t-lg p-2">
                Focus for 2024/25
              </h3>
              <p className="text-black">Climate resilience</p>
              <div className="mt-2">
                <p className="font-bold text-black">Related Capitals</p>
                <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-sm mr-1">
                  SC
                </span>
                <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-sm">
                  NC
                </span>
              </div>
              <div className="mt-2">
                <p className="font-bold text-black">
                  Related Sustainability Levers
                </p>
                <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-sm">
                  ESG
                </span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-[#ff8e51] rounded-t-lg p-2">
                Resource allocation
              </h3>
              <ul className="list-disc pl-4 text-black">
                <li>Investment on renewable energy generation at branches</li>
                <li>Investment on training</li>
                <li>Investment on carbon credits</li>
              </ul>
            </div>
           
            <div className="bg-white rounded-lg p-3">
              <h3 className="font-bold bg-purple-700 rounded-t-lg p-2">
                Challenges
              </h3>
              <ul className="list-disc pl-4 text-black">
                <li>New standard and regulatory implementation</li>
                <li>Quantification of scope 3 GHG emissions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
