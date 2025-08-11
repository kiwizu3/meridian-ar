interface ICardProps {
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

function Card({ colorCount, color, bgColor, content }: Readonly<ICardProps>) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 justify-center">
        {Array.from({ length: colorCount }).map((_, index) => (
          <div
            key={`${index.toString()}`}
            className={`${color} rounded-xl h-2 w-4`}
          />
        ))}
      </div>
      <div className={`${bgColor} rounded-b-lg p-4`}>
        <p className="text-black">{content}</p>
      </div>
    </div>
  );
}

export default function IntegratedReporting3() {
  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col gap-8 overflow-x-hidden">
          <div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                APPROACH TO STRATEGY
              </h2>
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
                  Business ecosystems: Updating our product range and customer
                  reach through partnerships with fintechs and telcos
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
                      Enhancing the technology platform and cyber security
                      practices while improving the speed of delivery
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
                  Digital MSME: Developing digital lending for the Micro, Small
                  and Medium Enterprises (MSMEs)
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
                  <img
                    src="/images/annual-report/strategicfocusMap.png"
                    alt="strategicfocusMap"
                    className="w-full"
                  />
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
                <div className="h-2 w-4 rounded-lg bg-[#58c07d]" />
              </div>
              <div className="flex gap-2 items-center">
                <p className="font-bold">Medium</p>
                <div className="h-2 w-4 rounded-lg bg-[#466fb4]" />
                <div className="h-2 w-4 rounded-lg bg-[#466fb4]" />
              </div>
              <div className="flex gap-2 items-center">
                <p className="font-bold">Long</p>
                <div className="h-2 w-4 rounded-lg bg-[#fb5579]" />
                <div className="h-2 w-4 rounded-lg bg-[#fb5579]" />
                <div className="h-2 w-4 rounded-lg bg-[#fb5579]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
