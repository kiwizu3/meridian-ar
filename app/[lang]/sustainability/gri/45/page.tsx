export default function GRIReporting19() {
  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
          <h2 className="text-2xl font-semibold">
            APPROACH TO DETERMINE MATERIALITY
          </h2>

          <p className="pb-8">
            As a financial services provider, we play a crucial role in the
            economy, supporting individuals, businesses, and our nation in
            building and safeguarding wealth through partnerships in economic
            development. Our ability to create value is influenced by factors
            including our operating environment, stakeholders, responses to
            risks and opportunities, and our strategic decisions. This report
            outlines what we consider our most important concerns ones that
            could substantially impact our capacity to generate or, preserve or
            erode value in the short, medium, and long-term. Illustrated below
            is our three-tiered materiality determination process:
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
            <div className="bg-[#F0B165] p-4 rounded-lg">
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
            <div className="bg-[#F0B165] p-4 rounded">
              <ul className="list-disc list-inside">
                <li>
                  Sustainability Committee deliberation on and impact analysis
                  of each capital
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

          <div className="bg-[#ffaf7c] p-4 text-center mb-6 rounded-lg">
            Refine strategic focus and the business model based on the changes
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-[#F0B165] p-4 rounded">
              <ul className="list-disc list-inside">
                <li>Board-determined strategic direction</li>
                <li>Strategic plan of the Company</li>
                <li>KPIs derived from strategy</li>
              </ul>
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
              <p>GRI: 202, 301, 404, 405</p>
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
      </div>
    </div>
  );
}
