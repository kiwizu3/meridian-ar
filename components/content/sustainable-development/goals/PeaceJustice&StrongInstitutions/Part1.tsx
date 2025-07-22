import Image from 'next/image';

export default function ESGGovernancePart1() {
  return (
    <div className="bg-themeGreen p-5 mb-10">
      <h1 className="text-4xl font-bold mb-6">CORPORATE GOVERNANCE</h1>

      <div className="mb-8">
        <h3 className="text-xl font-medium mb-4">ESG GOVERNANCE</h3>
        <div>
          <Image
            src="/images/sustainability-goals/ESG-GOVERNANCE.png"
            alt="ESG GOVERNANCE"
            width={400}
            height={500}
          />
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-4">
          <h4 className="text-lg font-medium mb-2">
            6.2 Roles and Responsibilities
          </h4>
          <p>
            The Board Sustainability Committee is a key component of our
            governance structure, entrusted by the Board to guide LBF’s
            strategic direction on ESG matters. It oversees the company’s
            response to global and local sustainability challenges, ensuring
            alignment between strategic initiatives and overarching
            sustainability objectives. The Committee is responsible for ensuring
            that the sustainability strategy remains strong, relevant, and
            effectively implemented throughout the organisation.
          </p>
          <p>
            At LBF, we are committed to reducing our carbon footprint in support
            of Sri Lanka's goal to achieve Net Zero status by 2050. In line with
            this commitment, we have initiated several key projects and
            established robust governance practices.
          </p>
          <p>
            These efforts underscore our dedication to integrating
            sustainability into our core business strategies, ensuring that our
            growth contributes positively to both society and the environment.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h4 className="text-lg font-medium mb-2">
            6.3 Board Empowerment and Capacity Building
          </h4>
          <p>
            As part of its commitment to informed governance, the Board
            participates in educational sessions led by esteemed academics and
            industry experts on ESG related topics. These sessions are designed
            to enhance Board members’ understanding of emerging SRRO and CRRO
            challenges and trends impacting both the region and the financial
            sector. This ongoing learning empowers the Board to make
            wellinformed decisions and provide effective oversight of LBF’s
            climate strategies and sustainability policies.
          </p>
        </div>
      </div>
    </div>
  );
}
