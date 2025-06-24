import React from 'react';

export default function Materiality() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col gap-8">
      <div>
        <h2 className="text-2xl font-semibold">
          APPROACH TO DETERMINE MATERIALITY
        </h2>

        <p className="pb-8">
          As a financial services provider, we play a crucial role in the
          economy, supporting individuals, businesses, and our nation in
          building and safeguarding wealth through partnerships in economic
          development. Our ability to create value is influenced by factors
          including our operating environment, stakeholders, responses to risks
          and opportunities, and our strategic decisions. This report outlines
          what we consider our most important concerns ones that could
          substantially impact our capacity to generate or, preserve or erode
          value in the short, medium, and long-term. Illustrated below is our
          three-tiered materiality determination process:
        </p>

        <div className="bg-[#004470] p-4 rounded-t-lg text-center font-bold mb-6">
          MATERIALITY DETERMINATION PROCESS
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-[#F0B165] p-4 text-center font-bold rounded-b-lg">
            INPUT
          </div>
          <div className="bg-[#D4A373] p-4 text-center font-bold rounded-b-lg">
            PROCESS
          </div>
          <div className="bg-[#4e73b6] p-4 text-center font-bold rounded-b-lg">
            METHOD
          </div>
          <div className="bg-[#ff8f57] p-4 text-center font-bold rounded-b-lg">
            STAKEHOLDER ENGAGED
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-[#F0B165] p-4 rounded-lg flex gap-2">
            <div className="flex justify-center rotate-180">
              <p style={{ writingMode: 'vertical-rl' }} className="text-center">
                IDENTIFY
              </p>
            </div>
            <ul className="list-disc list-inside">
              <li>Industry and market trends in Sri Lanka</li>
              <li>Global research reports</li>
              <li>Internal documentation and risk reports</li>
              <li>Internal interviews</li>
              <li>External stakeholder engagement</li>
            </ul>
          </div>
          <div className="bg-[#D4A373] p-4 rounded-lg">
            <p>Scan the internal and external environment</p>
          </div>
          <div className="bg-[#4e73b6] p-4 rounded">
            <p>
              Identify factors threatening sustainability by conducting SWOT,
              PESTEL and Five Forces analyses
            </p>
          </div>
          <div className="bg-[#ff8f57] p-4 rounded">
            <p>
              Engage stakeholder through in-person and virtual modes to
              prioritize topics of significance
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-[#F0B165] p-4 rounded flex gap-2">
            <div className="flex justify-center rotate-180">
              <p style={{ writingMode: 'vertical-rl' }} className="text-center">
                PRIORITISE
              </p>
            </div>
            <ul className="list-disc list-inside">
              <li>
                Sustainability Committee deliberation on and impact analysis of
                each capital
              </li>
              <li>Consider resources required and the availability</li>
              <li>Approval from appropriate governance structures</li>
            </ul>
          </div>
          <div className="bg-[#D4A373] p-4 rounded">
            <p>
              Develop the strategic risk and opportunity register and list the
              material topics
            </p>
          </div>
          <div className="bg-[#4e73b6] p-4 rounded">
            <p>
              Evaluate material topics to identify those that threaten the
              Company&#39;s ability to deliver value
            </p>
          </div>
          <div className="bg-[#ff8f57] p-4 rounded">
            <p>
              Material topics are thoroughly evaluated, monitored and updated
              during the strategic management process
            </p>
          </div>
        </div>

        <div className='md:flex justify-end'> 
        <div className="bg-[#ffaf7c] p-4 text-center mb-6 rounded-lg md:w-3/4">
          Refine strategic focus and the business model based on the changes
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-[#F0B165] p-4 rounded flex gap-2">
            <div className="flex justify-center rotate-180">
              <p style={{ writingMode: 'vertical-rl' }} className="text-center">
                DEFINE STRATEGY AND TARGETS
              </p>
            </div>
            <div className="flex items-center">
              <ul className="list-disc list-inside">
                <li>Board-determined strategic direction</li>
                <li>Strategic plan of the Company</li>
                <li>KPIs derived from strategy</li>
              </ul>
            </div>
          </div>
          <div className="bg-[#D4A373] p-4 rounded">
            <p>
              Establish performance targets and define measures using KPIs
              aligned with the strategies
            </p>
          </div>
          <div className="bg-[#4e73b6] p-4 rounded">
            <p>
              Integrate SBU and individual targets and goals into performance
              measures that align with the corporate strategic objectives
            </p>
          </div>
          <div className="bg-[#ff8f57] p-4 rounded">
            <p>
              The material topics are grouped into material themes and ensure
              they remain relevant in a dynamic operating context
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-center mb-6">
          Material Matters
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
          <div className="bg-[#008bc9] p-4 rounded text-center">
            <h4 className="font-bold">ECONOMIC</h4>
            <p>GRI: 201</p>
            <p>Challenging Economic Conditions</p>
          </div>
          <div className="bg-[#93cc4a] p-4 rounded text-center">
            <h4 className="font-bold">ENVIRONMENTAL</h4>
            <p>GRI: 202, 401, 404, 405</p>
            <p>Future-fit Organisation</p>
          </div>
          <div className="bg-[#ac8140] p-4 rounded text-center">
            <h4 className="font-bold">SOCIAL</h4>
            <p>GRI: 418</p>
            <p>Serving and Meeting the Needs of Customer</p>
            <p>GRI: 305, 413</p>
            <p>Supporting Social Cohesion</p>
          </div>
          <div className="bg-[#daa765] p-4 rounded text-center">
            <h4 className="font-bold">GOVERNANCE</h4>
            <p>GRI: 205, 206</p>
            <p>Good Governance and Risk Optimisation</p>
          </div>
        </div>

        <div className="bg-blue-400 p-4 rounded text-center">
          <p>
            Hello! Want to delve into how our material matters impact the six
            capitals, our strategic focus, and stakeholders? Visit the link
            below to explore in detail.
          </p>
          <img
            src="/images/annual-report/materialityQr.png"
            alt="QR Code"
            className="mx-auto mt-4"
          />
        </div>
      </div>

      <div>
        {/* Challenging economic conditions */}
        <div className="bg-[#FFF3E0] text-black p-4 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-[#F0B165]">Material Theme</h4>
              <p>Challenging economic conditions</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-blue-700">Importance to LBF</h4>
              <ul className="list-disc list-inside">
                <li>
                  Evolving away from the digital business model providing
                  secured and unsecured loans towards a fully-fledged financial
                  offerings for customers and targeted business segments focused
                  on unleashing the potential untouched areas
                </li>
                <li>
                  Provision of multiple product offerings which diversify the
                  type of revenue lines within both non-interest and
                  interest-based revenue
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-orange-500">
                Material Topics (FY 2022/23)
              </h4>
              <ul className="list-disc list-inside">
                <li>Business model innovation</li>
                <li>Business continuity</li>
                <li>Sustainable revenue growth</li>
                <li>Delivering appropriate returns</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 md:flex gap-6 justify-around">
            <p className="font-bold">Relevant Capitals: FC, MC, IC</p>
            <div className="flex gap-4 items-center">
              <p className="font-bold">Sustainability strategy impact:</p>
              <img
                src="/images/charts/icons/1.png"
                alt="icons"
                className="w-8 h-8"
              />
            </div>
            <p className="font-bold">SDGs: 8, 11, 17</p>
          </div>
        </div>

        {/* Serving and meeting customer needs */}
        <div className="bg-[#FFF3E0] text-black p-4 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-[#F0B165]">Material Theme</h4>
              <p>Serving and meeting customer needs</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-blue-700">Importance to LBF</h4>
              <ul className="list-disc list-inside">
                <li>
                  Fast-tracking development of consumers through our digital
                  developments and integrated operations
                </li>
                <li>
                  Scaling the organisation to offer more products and services
                  to the people, via our people and technology capabilities
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-orange-500">
                Material Topics (FY 2022/23)
              </h4>
              <ul className="list-disc list-inside">
                <li>Customer satisfaction</li>
                <li>Regional expansion</li>
                <li>Brand loyalty</li>
                <li>Social license to operate</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 md:flex gap-6 justify-around">
            <p className="font-bold">Relevant Capitals: SC, MC, HC</p>
            <div className="flex gap-4 items-center">
              <p className="font-bold">Sustainability strategy impact:</p>
              <img
                src="/images/charts/icons/2.png"
                alt="icons"
                className="w-8 h-8"
              />
            </div>
            <p className="font-bold">SDGs: 8, 9</p>
          </div>
        </div>

        {/* Good governance and risk optimisation */}
        <div className="bg-[#FFF3E0] text-black p-4 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-[#F0B165]">Material Theme</h4>
              <p>Good governance and risk optimisation</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-blue-700">Importance to LBF</h4>
              <ul className="list-disc list-inside">
                <li>
                  Implemented agile ways of work to address the impairment and
                  operational risk and continue to work on end-to-end risk and
                  control management
                </li>
                <li>
                  Refinement of various products considering the current
                  internal and external market conditions to improve our risk
                  posture and profitability
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-orange-500">
                Material Topics (FY 2022/23)
              </h4>
              <ul className="list-disc list-inside">
                <li>Risk and capital management</li>
                <li>Ethics and transparency</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 md:flex gap-6 justify-around">
            <p className="font-bold">Relevant Capitals: SC, FC</p>
            <div className="flex gap-4 items-center">
              <p className="font-bold">Sustainability strategy impact:</p>
              <img
                src="/images/charts/icons/3.png"
                alt="icons"
                className="w-8 h-8"
              />
              <img
                src="/images/charts/icons/2.png"
                alt="icons"
                className="w-8 h-8"
              />
            </div>
            <p className="font-bold">SDGs: 8, 9, 10, 16</p>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-[#FFF3E0] text-black p-4 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              {/* <h4 className="font-bold text-[#F0B165]">Material Theme</h4>
              <p>Challenging economic conditions</p> */}
              <h4 className="font-bold text-blue-700 mt-4">
                Material Topics (FY 2023/24)
              </h4>
              <ul className="list-disc list-inside">
                <li>Reinventing the business model</li>
                <li>Business continuity</li>
                <li>Sustainable revenue growth</li>
                <li>Delivering appropriate returns</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 col-span-2">
              <h4 className="font-bold text-blue-700">
                Mitigating Risk and Maximising Opportunity
              </h4>
              <ul className="list-disc list-inside">
                <li>Creating a balance in revenue mix across our portfolio</li>
                <li>Improving productivity in resource management</li>
                <li>
                  Pursue cost containment to achieve the Company’s strategic
                  goals
                </li>
                <li>
                  Diversifying revenue streams through initiatives that aligned
                  with positive social outcomes
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4 md:flex gap-6 justify-around">
            <div className="flex gap-4 items-center">
              <p className="font-bold">Strategic Pillar</p>
              <img
                src="/images/charts/icons/4.png"
                alt="icons"
                className="w-8 h-8"
              />
              <img
                src="/images/charts/icons/5.png"
                alt="icons"
                className="w-8 h-8"
              />
            </div>
            <div className="flex gap-4 items-center">
              <p className="font-bold">Impacted stakeholders</p>
              <img
                src="/images/charts/icons/6.png"
                alt="icons"
                className="w-8 h-8"
              />
              <img
                src="/images/charts/icons/7.png"
                alt="icons"
                className="w-8 h-8"
              />
              <img
                src="/images/charts/icons/8.png"
                alt="icons"
                className="w-8 h-8"
              />
            </div>
          </div>
        </div>

        {/* Serving and meeting customer needs */}
        <div className="bg-[#FFF3E0] text-black p-4 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 ">
              {/* <h4 className="font-bold text-[#F0B165]">Material Theme</h4>
              <p>Serving and meeting customer needs</p> */}
              <h4 className="font-bold text-blue-700 mt-4">
                Material Topics (FY 2023/24)
              </h4>
              <ul className="list-disc list-inside">
                <li>Customer experience</li>
                <li>Product and service evolution</li>
                <li>Regional expansion</li>
                <li>Digital transformation</li>
                <li>Customer complaints resolution</li>
                <li>Social license to operate</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 col-span-2">
              <h4 className="font-bold text-blue-700">
                Mitigating Risk and Maximising Opportunity
              </h4>
              <ul className="list-disc list-inside">
                <li>
                  Offering customised advisory services to meet the unique needs
                  of customers
                </li>
                <li>Creating platforms to increase customer engagement </li>
                <li>
                  Encouraging and rewarding employees for their customer-centric
                  innovations
                </li>
                <li>
                  Promoting financial inclusion through targeted and relevant
                  financial advice and products
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4 md:flex gap-6 justify-around">
            <div className="flex gap-4 items-center">
              <p className="font-bold">Strategic Pillar</p>
              <img
                src="/images/charts/icons/9.png"
                alt="icons"
                className="w-8 h-8"
              />
              <img
                src="/images/charts/icons/10.png"
                alt="icons"
                className="w-8 h-8"
              />
            </div>
            <div className="flex gap-4 items-center">
              <p className="font-bold">Impacted stakeholders</p>
              <img
                src="/images/charts/icons/6.png"
                alt="icons"
                className="w-8 h-8"
              />
              <img
                src="/images/charts/icons/7.png"
                alt="icons"
                className="w-8 h-8"
              />
              <img
                src="/images/charts/icons/8.png"
                alt="icons"
                className="w-8 h-8"
              />
            </div>
          </div>
        </div>

        {/* Good governance and risk optimisation */}
        <div className="bg-[#FFF3E0] text-black p-4 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              {/* <h4 className="font-bold text-[#F0B165]">Material Theme</h4>
              <p>Good governance and risk optimisation</p> */}
              <h4 className="font-bold text-blue-700 mt-4">
                Material Topics (FY 2023/24)
              </h4>
              <ul className="list-disc list-inside">
                <li>Risk and capital management</li>
                <li>Legal and regulatory requirements</li>
                <li>Data privacy and cyber security</li>
                <li>Anti-fraud environment</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 col-span-2">
              <h4 className="font-bold text-blue-700">
                Mitigating Risk and Maximising Opportunity
              </h4>
              <ul className="list-disc list-inside">
                <li>
                  Supporting and aligning with international and local practices
                  upholding capital and ESG requirements
                </li>
                <li>
                  Adhering to strong capital and liquidity management principles
                  to mobilise adequate resources for business growth while
                  complying with regulatory capital buffers and Board-approved
                  liquidity appetite limits
                </li>
                <li>
                  Increasing transparency through reporting and disclosures
                </li>
                <li>
                  Conducting stringent due diligence, including third-party
                  assurance on compliance systems at various levels of the
                  business
                </li>
                <li>
                  Balancing robust risk management with growth aspirations
                  across our markets
                </li>
                <li>
                  Enhancing privacy by providing safe, reliable, and seamless
                  customer service{' '}
                </li>
                <li>
                  Mitigating or preventing systemic risks across the Company
                </li>
                <li>Promoting financial stability </li>
              </ul>
            </div>
          </div>
          <div className="mt-4 md:flex gap-6 justify-around">
            <div className="flex gap-4 items-center">
              <p className="font-bold">Strategic Pillar</p>
              <img
                src="/images/charts/icons/4.png"
                alt="icons"
                className="w-8 h-8"
              />
              <img
                src="/images/charts/icons/12.png"
                alt="icons"
                className="w-8 h-8"
              />
            </div>
            <div className="flex gap-4 items-center">
              <p className="font-bold">Impacted stakeholders</p>
              <img
                src="/images/charts/icons/6.png"
                alt="icons"
                className="w-8 h-8"
              />
              <img
                src="/images/charts/icons/7.png"
                alt="icons"
                className="w-8 h-8"
              />
              <img
                src="/images/charts/icons/8.png"
                alt="icons"
                className="w-8 h-8"
              />
              <img
                src="/images/charts/icons/11.png"
                alt="icons"
                className="w-8 h-8"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-[#FFF3E0] text-black p-4 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-[#F0B165]">Material Theme</h4>
              <p>Future-fit organisation</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-blue-700">Importance to LBF</h4>
              <ul className="list-disc list-inside">
                <li>
                  Leveraging technology, agile practices, digitised and
                  digitalised capabilities that enable efficient and cost
                  effective scalability
                </li>
                <li>
                  Building on existing digital and analytics capabilities to
                  improve end-to-end customer journeys, driving growth
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-orange-500">
                Material Topics (FY 2022/23)
              </h4>
              <ul className="list-disc list-inside">
                <li>Process excellence</li>
                <li>Technological advancement</li>
                <li>Online customer support</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 md:flex gap-6 justify-around">
            <p className="font-bold">Relevant Capitals: SC, IC, HC</p>
            <div className="flex gap-4 items-center">
              <p className="font-bold">Sustainability strategy impact:</p>
              <img
                src="/images/charts/icons/2.png"
                alt="icons"
                className="w-8 h-8"
              />
              <img
                src="/images/charts/icons/13.png"
                alt="icons"
                className="w-8 h-8"
              />
            </div>
            <p className="font-bold">SDGs: 9, 11</p>
          </div>
        </div>

        <div className="bg-[#FFF3E0] text-black p-4 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-[#F0B165]">Material Theme</h4>
              <p>Supporting social cohesion</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-blue-700">Importance to LBF</h4>
              <ul className="list-disc list-inside">
                <li>
                  Embedding sustainable practices across all areas of the
                  business, including environmental and stakeholder aspects
                </li>
                <li>
                  Strengthening, empowering, serving and transforming our
                  communities through community social responsibility and
                  enterprise supplier development
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-orange-500">
                Material Topics (FY 2022/23)
              </h4>
              <ul className="list-disc list-inside">
                <li>Corporate citizenship</li>
                <li>Health and safety</li>
                <li>Employee engagement</li>
                <li>Training and development</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 md:flex gap-6 justify-around">
            <p className="font-bold">Relevant Capitals: SC, NC, FC</p>
            <div className="flex gap-4 items-center">
              <p className="font-bold">Sustainability strategy impact:</p>
              <img
                src="/images/charts/icons/3.png"
                alt="icons"
                className="w-8 h-8"
              />
            </div>
            <p className="font-bold">SDGs: 1, 2, 3, 4, 13</p>
          </div>
        </div>

        {/* Materiality Drivers Section */}
        <h3 className="text-2xl font-semibold mt-12 mb-6">
          MATERIALITY DRIVERS 2023/24
        </h3>
        <div className="bg-[#FFF3E0] text-black p-4 rounded-lg overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-2 py-1 text-left">No.</th>
                <th className="px-2 py-1 text-left">Driver</th>
                <th className="px-2 py-1">Short</th>
                <th className="px-2 py-1">Medium</th>
                <th className="px-2 py-1">Long</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  no: 1,
                  driver: 'Reinventing the business model',
                  short: false,
                  medium: true,
                  long: false,
                },
                {
                  no: 2,
                  driver: 'Business continuity',
                  short: false,
                  medium: false,
                  long: true,
                },
                {
                  no: 3,
                  driver: 'Sustainable revenue growth',
                  short: false,
                  medium: false,
                  long: true,
                },
                {
                  no: 4,
                  driver: 'Delivering appropriate returns',
                  short: true,
                  medium: false,
                  long: false,
                },
                {
                  no: 5,
                  driver: 'Customer experience',
                  short: true,
                  medium: false,
                  long: false,
                },
                {
                  no: 6,
                  driver: 'Product and service evolution',
                  short: false,
                  medium: true,
                  long: false,
                },
                {
                  no: 7,
                  driver: 'Regional expansion',
                  short: false,
                  medium: true,
                  long: false,
                },
                {
                  no: 8,
                  driver: 'Digital transformation',
                  short: false,
                  medium: false,
                  long: true,
                },
                {
                  no: 9,
                  driver: 'Customer complaints resolution',
                  short: true,
                  medium: false,
                  long: false,
                },
                {
                  no: 10,
                  driver: 'Social license to operate',
                  short: false,
                  medium: false,
                  long: true,
                },
                {
                  no: 11,
                  driver: 'Risk and capital management',
                  short: true,
                  medium: false,
                  long: false,
                },
                {
                  no: 12,
                  driver: 'Legal and regulatory requirements',
                  short: true,
                  medium: false,
                  long: false,
                },
                {
                  no: 13,
                  driver: 'Data Privacy and cyber security',
                  short: false,
                  medium: false,
                  long: true,
                },
                {
                  no: 14,
                  driver: 'Anti-fraud environment',
                  short: false,
                  medium: true,
                  long: false,
                },
                {
                  no: 15,
                  driver: 'Process excellence',
                  short: true,
                  medium: false,
                  long: false,
                },
                {
                  no: 16,
                  driver: 'Tech resource allocation',
                  short: true,
                  medium: false,
                  long: false,
                },
                {
                  no: 17,
                  driver: 'Skills development and competencies',
                  short: false,
                  medium: true,
                  long: false,
                },
                {
                  no: 18,
                  driver: 'Data science and data analytics',
                  short: false,
                  medium: false,
                  long: true,
                },
                {
                  no: 19,
                  driver: 'Transformative innovations',
                  short: false,
                  medium: true,
                  long: false,
                },
                {
                  no: 20,
                  driver: 'Corporate citizenship',
                  short: false,
                  medium: false,
                  long: true,
                },
                {
                  no: 21,
                  driver: 'Health and safety',
                  short: false,
                  medium: false,
                  long: true,
                },
                {
                  no: 22,
                  driver: 'Employee engagement',
                  short: false,
                  medium: true,
                  long: false,
                },
                {
                  no: 23,
                  driver: 'Tech-savvy trained employees',
                  short: true,
                  medium: false,
                  long: false,
                },
              ].map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-gray-100' : ''}
                >
                  <td className="px-2 py-1">{item.no}</td>
                  <td className="px-2 py-1">{item.driver}</td>
                  <td className="px-2 py-1 text-center">
                    {item.short ? '🟢' : ''}
                  </td>
                  <td className="px-2 py-1 text-center">
                    {item.medium ? '🔵' : ''}
                  </td>
                  <td className="px-2 py-1 text-center">
                    {item.long ? '🔴' : ''}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <div className="bg-[#FFF3E0] text-black p-4 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-blue-700">
                Material Topics (FY 2023/24)
              </h4>
              <ul className="list-disc list-inside">
                <li>Process excellence</li>
                <li>Tech resource allocation</li>
                <li>Skills development and competencies</li>
                <li>Data science and data analytics</li>
                <li>Transformative imperatives</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-orange-500">
                Mitigating Risk and Maximising Opportunity
              </h4>
              <ul className="list-disc list-inside">
                <li>
                  Growing revenue from digital products and services using
                  mobile technology and fintech partnerships
                </li>
                <li>Furthering financial and digital inclusion</li>
                <li>
                  Increasing agility, efficiency and cost optimisation through
                  cloud computing and AI
                </li>
                <li>
                  Enhancing the LB CIM mobile app with new digital features
                  alongside upgraded security measures to promote higher rates
                  of digital adoption
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4 md:flex gap-6 justify-around">
            <div className="flex gap-4 items-center">
              <p className="font-bold">Strategic Pillar</p>
              <img
                src="/images/charts/icons/4.png"
                alt="icons"
                className="w-8 h-8"
              />
              <img
                src="/images/charts/icons/10.png"
                alt="icons"
                className="w-8 h-8"
              />
            </div>
            <div className="flex gap-4 items-center">
              <p className="font-bold">Impacted stakeholders</p>
              <img
                src="/images/charts/icons/6.png"
                alt="icons"
                className="w-8 h-8"
              />
              <img
                src="/images/charts/icons/7.png"
                alt="icons"
                className="w-8 h-8"
              />
              <img
                src="/images/charts/icons/14.png"
                alt="icons"
                className="w-8 h-8"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#FFF3E0] text-black p-4 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-blue-700">
                Material Topics (FY 2023/24)
              </h4>
              <ul className="list-disc list-inside">
                <li>Corporate citizenship</li>
                <li>Health and safety</li>
                <li>Employee engagement</li>
                <li>Tech-savvy trained employees</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-orange-500">
                Mitigating Risk and Maximising Opportunity
              </h4>
              <ul className="list-disc list-inside">
                <li>
                  Allocating capital to environmentally responsible businesses
                </li>
                <li>Aligning initiatives with positive social outcomes</li>
                <li>
                  Increasing insight into customers&#39; sustainability needs
                  and roadmaps to climate change adaptability leading to new
                  financing opportunities, including nature-positive financing
                </li>
                <li>
                  Focusing on developing and retaining a capable team of
                  talented and empowered employees who embrace our
                  high-performing culture
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4 md:flex gap-6 justify-around">
            <div className="flex gap-4 items-center">
              <p className="font-bold">Strategic Pillar</p>
              <img
                src="/images/charts/icons/12.png"
                alt="icons"
                className="w-8 h-8"
              />
            </div>
            <div className="flex gap-4 items-center">
              <p className="font-bold">Impacted stakeholders</p>
              <img
                src="/images/charts/icons/6.png"
                alt="icons"
                className="w-8 h-8"
              />
              <img
                src="/images/charts/icons/14.png"
                alt="icons"
                className="w-8 h-8"
              />
            </div>
          </div>
        </div>

        {/* Materiality Mapping Section */}
        <h3 className="text-2xl font-semibold mt-12 mb-6">
          MATERIALITY MAPPING
        </h3>
        <div className="bg-[#FFF3E0] text-black p-4 rounded-lg">
          <img
            src="/images/annual-report/materialityMapping.png"
            alt="MATERIALITY MAPPING"
          />
        </div>
      </div>
    </div>
  );
}
