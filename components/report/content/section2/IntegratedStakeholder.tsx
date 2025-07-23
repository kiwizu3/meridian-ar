import React from 'react';
import Image from 'next/image';

export default function IntegratedStakeholder() {
  return (
    <div className="stakeholder-engagement p-6 bg-themeGreen max-h-[70vh] overflow-y-auto">
      <h1 className="text-4xl font-bold mb-4">STAKEHOLDER ENGAGEMENT</h1>

      <div className="space-y-8">
        <div className="">
          <Image
            src="/images/report/content/Six-Step-approach-to-stakeholder-engagement.png"
            alt="Six Step approach to stakeholder engagement"
            width={1000}
            height={600}
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3 border-b border-[#F3A847] pb-1">
            Our Stakeholder Engagement Initiatives Seek to:
          </h2>
          <ul className="list-disc pl-6">
            <li>Proactively unlock growth</li>
            <li>Respond to stakeholder issues</li>
            <li>Demonstrate good governance</li>
            <li>
              Display leadership and foresight as a good corporate citizen
            </li>
          </ul>
        </div>
        {/* Engagement Objectives & Stakeholder Identification */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Engagement Objectives */}
          <div className="bg-cardGreen p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-3 border-b border-[#F3A847] pb-1">
              Engagement Objectives
            </h2>
            <p className="mb-3">
              Our engagement objectives form the foundation for building
              meaningful relationships with stakeholders, fostering
              transparency, and driving mutual benefits.
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>
                To enhance stakeholder trust through transparent communication
              </li>
              <li>To align stakeholder expectations with LBF's goals</li>
              <li>
                To ensure active participation in sustainability and business
                growth initiatives
              </li>
              <li>
                To address concerns and feedback proactively for continuous
                improvement
              </li>
              <li>
                To strengthen partnerships that contribute to long-term value
                creation
              </li>
            </ul>
          </div>

          {/* Stakeholder Identification */}
          <div className="bg-cardGreen p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-3 border-b border-[#F3A847] pb-1">
              Stakeholder Identification
            </h2>
            <p className="mb-3">
              Identifying stakeholders ensure that all relevant groups are
              considered in decision- making and project execution processes.
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>
                <strong>Customers:</strong> End-users of our financial products
                and services
              </li>
              <li>
                <strong>Shareholders:</strong> Our investors and equity partners
                seeking sustainable financial returns and long-term value
                creation
              </li>
              <li>
                <strong>Employees:</strong> Our dedicated team whose expertise
                and commitment drive operational excellence
              </li>
              <li>
                <strong>Regulators:</strong> Government and supervisory entities
                defining our operational framework
              </li>
              <li>
                <strong>Business Partners/Suppliers:</strong> Valued entities
                integral to our supply chain
              </li>
              <li>
                <strong>Society/Communities:</strong> The local and broader
                societies where we operate
              </li>
            </ul>
          </div>
        </div>

        {/* Engagement Approaches & Strategies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Engagement Approaches */}
          <div className="bg-cardGreen p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-3 border-b border-[#F3A847] pb-1">
              Engagement Approaches
            </h2>
            <p className="mb-3">
              Our approaches outline the methodologies for effective
              communication and interaction with stakeholders.
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>
                <strong>Consultation:</strong> Conducting surveys and focus
                groups to gather insights
              </li>
              <li>
                <strong>Collaboration:</strong> Partnering with stakeholders in
                planning and implementation
              </li>
              <li>
                <strong>Communication:</strong> Using digital platforms,
                newsletters, and reports
              </li>
              <li>
                <strong>Involvement:</strong> Inviting stakeholders to
                participate in decision-making
              </li>
              <li>
                <strong>Feedback Mechanisms:</strong> Establishing channels for
                receiving concerns
              </li>
            </ul>
          </div>

          {/* Engagement Strategies */}
          <div className="bg-cardGreen p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-3 border-b border-[#F3A847] pb-1">
              Engagement Strategies
            </h2>
            <p className="mb-3">
              For each selected engagement, our strategies provide a roadmap for
              achieving meaningful and impactful stakeholder engagement.
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>
                Develop tailored engagement plans for each stakeholder group
              </li>
              <li>
                Leverage technology for efficient communication and data-driven
                decisions
              </li>
              <li>Foster inclusivity by prioritising marginalised groups</li>
              <li>Align engagement activities with our sustainability goals</li>
              <li>
                Monitor and evaluate engagement effectiveness to refine
                strategies
              </li>
            </ul>
          </div>
        </div>

        {/* Engagement Plan & Outcomes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Engagement Plan */}
          <div className="bg-cardGreen p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-3 border-b border-[#F3A847] pb-1">
              Engagement Plan
            </h2>
            <p className="mb-3">
              Our engagement plan outlines actionable steps and timelines to
              implement the strategies.
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>
                <strong>Timeline:</strong> Clear milestones for engagement
                activities
              </li>
              <li>
                <strong>Activities:</strong> Scheduled meetings, events, and
                campaigns
              </li>
              <li>
                <strong>Resources:</strong> Allocation of budgets, tools, and
                personnel
              </li>
              <li>
                <strong>Monitoring:</strong> Periodic reviews and updates to the
                plan
              </li>
              <li>
                <strong>Reporting:</strong> Transparent documentation of
                progress and outcomes
              </li>
            </ul>
          </div>

          {/* Engagement Outcomes */}
          <div className="bg-cardGreen p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-3 border-b border-[#F3A847] pb-1">
              Engagement Outcomes
            </h2>
            <p className="mb-3">
              Outcomes define the tangible and intangible benefits achieved
              through our engagement efforts.
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>Strengthened stakeholder relationships and trust</li>
              <li>
                Improved alignment between organisational goals and stakeholder
                expectations
              </li>
              <li>Enhanced community goodwill through our CSR initiatives</li>
              <li>Increased employee satisfaction and retention</li>
              <li>
                Positive contributions to sustainability and long-term value
                creation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
