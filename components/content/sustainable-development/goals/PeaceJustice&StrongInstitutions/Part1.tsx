import Image from 'next/image';

export default function ESGGovernancePart1() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold mb-6">ESG GOVERNANCE</h2>

      <div className="mb-8">
        <h3 className="text-xl font-medium mb-4">Governance Structure</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Board of Directors</li>
          <li>Board Sustainability Committee</li>
          <li>Sustainability Management Committee</li>
          <li>Senior Manager - Corporate Strategy & Sustainability</li>
          <li>Manager Sustainability & Corporate Reporting</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h4 className="text-lg font-medium mb-2">
            6.2 Roles and Responsibilities
          </h4>
          <p>
            The Board Sustainability Committee is a key component of our
            governance structure, entrusted by the Board to guide LBF's
            strategic direction on ESG matters. It oversees the company's
            response to global and local sustainability challenges, ensuring
            alignment between strategic initiatives and overarching
            sustainability objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-medium mb-2">
              Board Sustainability Committee Members
            </h4>
            <ul className="space-y-2">
              <li>
                Ms. Yanika Amarasekera - Chairperson/Independent Non-Executive
                Director
              </li>
              <li>
                Mr. G.A.R.D. Prasanna - Non-Independent Non-Executive Director
              </li>
              <li>Mr. Niroshan Udage - Deputy Managing Director</li>
              <li>Ms. Ashwini Natesan - Independent Non-Executive Director</li>
            </ul>
          </div>
          <div>
            <Image
              src="/placeholder-governance.jpg"
              alt="Governance Structure"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-medium mb-2">Management Committee Members</h4>
          <ul className="list-disc pl-5 columns-2">
            <li>Deputy Managing Director</li>
            <li>Chief Financial Officer</li>
            <li>AGM - Risk Management</li>
            <li>Chief Internal Auditor</li>
            <li>AGM - Treasury</li>
            <li>Senior Manager - Compliance</li>
            <li>Senior Manager - Business Process Development</li>
            <li>Senior Manager - Corporate Strategy & Sustainability</li>
            <li>Manager - Sustainability & Corporate Reporting</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h4 className="text-lg font-medium mb-2">
            6.3 Board Empowerment and Capacity Building
          </h4>
          <p>
            The Board participates in educational sessions led by esteemed
            academics and industry experts on ESG related topics. These sessions
            enhance Board members' understanding of emerging challenges and
            trends impacting both the region and the financial sector.
          </p>
        </div>
      </div>
    </div>
  );
}
