import Image from 'next/image';

export default function DigitalEnvironmentPart3() {
  return (
    <div className="bg-themeGreen p-5 mb-10">
      <h1 className="text-4xl font-bold mb-6">
        INTEGRATED RISK MANAGEMENT REPORT
      </h1>

      <div className="mb-8">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-cardGreen p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-4">
              Digital and Technological Environment
            </h3>
            <p>
              The financial services industry is evolving rapidly with the rise
              of digital technologies bringing new opportunities as well as
              emerging risks. Over the year, LBF, like many others, saw a
              growing dependence on digital infrastructure, cloud platforms,
              data science and thirdparty technology providers. While these
              tools enhance efficiency and accessibility, they also increase
              exposure to cyber threats, system outages, and the risk of
              technology becoming outdated
            </p>
            <p className="mt-4">
              These risks have been compounded by the increasing sophistication
              of cyberattacks and evolving regulatory demands around data
              protection and digital resilience. In this context, ensuring
              uninterrupted digital services, safeguarding customer data, and
              maintaining system integrity became key priorities for us.
            </p>
            <p className="mt-4">
              To stay ahead, the Company accelerated its investment in
              cybersecurity infrastructure and reinforced its information
              security governance. Regular vulnerability assessments,
              penetration testing, and employee training were conducted to
              improve overall preparedness. Business continuity and disaster
              recovery plans were also strengthened to ensure resilience in the
              face of potential digital disruptions, both internal and external.
            </p>
          </div>
          <div className=" bg-cardGreen p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-4">
              Regulatory and Policy Environment
            </h3>
            <p>
              Over the past year, Sri Lanka’s regulatory landscape continued to
              evolve, introducing new measures aimed at strengthening
              governance, protecting consumer rights, data protection and
              enhancing digital resilience in the financial sector. One of the
              most notable developments was the expected introduction of the
              Personal Data Protection Act, a major step toward safeguarding
              individual privacy. This prompted financial institutions to adopt
              stricter data management and protection protocols
            </p>
            <p className="mt-4">
              At the same time, the Central Bank’s issuance of the Financial
              Consumer Protection Framework brought renewed focus to
              transparency, fairness, and accountability in customer dealings.
              Furthermore, amendments to the listing rules issued by the Colombo
              Stock Exchange strengthened corporate governance standards across
              all listed entities. These changes required financial institutions
              to upgrade their compliance systems and deepen engagement with
              regulators.
            </p>
            <p className="mt-4">
              In response to these developments, LB Finance undertook a series
              of proactive measures, from updating internal policies and
              upgrading systems to delivering targeted staff training and
              awareness programmes. The governance structure at LB Finance was
              also strengthened to align with emerging regulatory expectations
              and best practices. These efforts ensured full compliance with new
              standards while reinforcing stakeholder confidence in a rapidly
              changing regulatory environment.
            </p>
          </div>
          <div className="bg-cardGreen p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-4">
              Financial Crime Threats
            </h3>
            <p>
              The financial services sector is facing growing threats from
              financial crimes, fuelled by the increasing sophistication of
              cyber-enabled fraud, identity theft, and cross-border money
              laundering. With digital transactions on the rise and criminal
              tactics becoming more advanced, the risk landscape has expanded
              drawing heightened regulatory attention and requiring stronger
              vigilance across the sector. These developments highlight the
              critical need for robust financial crime risk management.
            </p>
            <p className="mt-4">
              At LBF, we continued to prioritise transaction monitoring, with a
              strong focus on identifying and responding to suspicious
              activities. Throughout the year, we maintained strict compliance
              with all Anti-Money Laundering (AML) and Countering the Financing
              of Terrorism (CFT) regulations, reinforcing our commitment to
              safeguarding the integrity of our operations and protecting our
              stakeholders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
