import Image from 'next/image';

export default function CybersecurityPart4() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold mb-6">Cybersecurity Strategy</h2>

      <div className="mb-8">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <p>
              Our cybersecurity strategy is built on a multi-layered defense
              model aligned with the Three Lines of Defense. This approach
              integrates preventive, detective, and responsive controls across
              systems and processes.
            </p>
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">Key Components:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Advanced security technologies (firewalls, encryption, etc.)
                </li>
                <li>
                  Regular vulnerability assessments and penetration testing
                </li>
                <li>Comprehensive data privacy measures</li>
                <li>
                  Robust Business Continuity and Disaster Recovery frameworks
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Image
              src="/placeholder-cybersecurity.jpg"
              alt="Cybersecurity"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-4">17.3 Compliance Risk</h3>
          <p>
            LBF remains committed to conducting business with the highest
            integrity, embedding compliance across the organization through
            continuous training and active Board oversight.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-4">Managing Compliance Risk</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Periodic internal compliance reviews</li>
            <li>Regular monitoring of regulatory directions</li>
            <li>Early adoption of new requirements</li>
            <li>Continuous transaction monitoring</li>
            <li>Customer Due Diligence processes</li>
            <li>Staff awareness initiatives</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-4">17.4 Model Risk</h3>
          <p>
            At LB Finance, quantitative models play an essential role in
            strategic decisions. We established a comprehensive Model Risk
            Management Framework to govern the entire model lifecycle.
          </p>
        </div>
      </div>
    </div>
  );
}
