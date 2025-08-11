import React from 'react';
import Image from 'next/image';

export default function MaterialityDetermination() {
  return (
    <div className="materiality-determination p-6 bg-themeGreen max-h-[70vh] overflow-y-auto custom-scrollbar">
      <h1 className="text-4xl font-bold mb-4">MATERIALITY</h1>

      <div className="space-y-8">
        {/* Integrated Dynamic and Double Materiality Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1 ">
            INTEGRATED DYNAMIC AND DOUBLE MATERIALITY
          </h2>
          <p className="mb-4">
            Our process for determining Material Matters adheres to a double
            materiality approach, examining issues from an internal and external
            perspective. This means we consider the impact of a matter on both
            our ability to create value (inward focus) and its broader impact on
            the environment and society (outward focus). In conducting this
            assessment, we consider significant events from the past year and,
            importantly, the views of our stakeholders. Material Matters, as
            identified through this rigorous process and aligned with (IR), GRI,
            and SLFRS requirements, have the potential to significantly
            influence the delivery of our business strategy and affect our
            ability to create and preserve value over time.
          </p>
        </div>

        {/* Materiality Determination Process Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            Materiality Determination Process
          </h2>

          {/* Process Steps - First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-cardGreen p-4 rounded-lg">
              <h3 className="font-bold mb-2">
                Understand the Organisation's Context
              </h3>
              <div className="text-sm whitespace-pre-line">
                • Understand the operational environmental, organisational
                purpose, and expected strategic outcomes • Engage stakeholders
                through in-person and virtual channels to understand their
                expectations • Understand sustainability-related risks and
                opportunities (SRROs), and climate-related risks and
                opportunities (CRROs)
              </div>
            </div>

            <div className="bg-cardGreen p-4 rounded-lg">
              <h3 className="font-bold mb-2">Identify Potential Impacts</h3>
              <div className="text-sm whitespace-pre-line">
                • Identify the potential risks and opportunities and their
                impacts across various capitals • Identify the impact of value
                creation and value depletion on our business model
              </div>
            </div>
          </div>

          {/* Process Steps - Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-cardGreen p-4 rounded-lg">
              <h3 className="font-bold mb-2">
                Assess the Significance of Impacts
              </h3>
              <div className="text-sm whitespace-pre-line">
                • Evaluate based on their strategic impact on organisational
                objectives and alignment with stakeholder priorities • Determine
                which issues are material to the business and should be
                prioritised for reporting
              </div>
            </div>

            <div className="bg-cardGreen p-4 rounded-lg">
              <h3 className="font-bold mb-2">
                Prioritise Impacts for Reporting
              </h3>
              <div className="text-sm whitespace-pre-line">
                • Prioritise impacts that are critical to the Company's
                performance and aligned with stakeholder interests • Establish
                performance targets and KPIs aligned with the strategies
              </div>
            </div>

            <div className="bg-cardGreen p-4 rounded-lg">
              <h3 className="font-bold mb-2">Reporting</h3>
              <div className="text-sm whitespace-pre-line">
                • Report material matters subject to annual evaluation
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
