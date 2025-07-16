import Image from 'next/image';

export default function DigitalEnvironmentPart3() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold mb-6">
        Digital and Technological Environment
      </h2>

      <div className="mb-8">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <p>
              The financial services industry is evolving rapidly with digital
              technologies bringing new opportunities and risks. LBF saw growing
              dependence on digital infrastructure, cloud platforms, and
              third-party providers, increasing exposure to cyber threats and
              system outages.
            </p>
            <p className="mt-4">
              These risks have been compounded by sophisticated cyberattacks and
              evolving regulatory demands around data protection. Ensuring
              uninterrupted digital services and safeguarding customer data
              became key priorities.
            </p>
          </div>
          <div>
            <Image
              src="/placeholder-digital.jpg"
              alt="Digital Environment"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-4">Our Response</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Accelerated investment in cybersecurity infrastructure</li>
            <li>
              Conducted regular vulnerability assessments and penetration
              testing
            </li>
            <li>
              Strengthened business continuity and disaster recovery plans
            </li>
            <li>Implemented employee training programs</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-4">
            Regulatory and Policy Environment
          </h3>
          <p>
            Sri Lanka's regulatory landscape introduced new measures including
            the Personal Data Protection Act and Financial Consumer Protection
            Framework, requiring financial institutions to upgrade compliance
            systems.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-4">Financial Crime Threats</h3>
          <p>
            The sector faces growing threats from financial crimes, requiring
            stronger vigilance. At LBF, we prioritized transaction monitoring
            and maintained strict compliance with AML/CFT regulations.
          </p>
        </div>
      </div>
    </div>
  );
}
