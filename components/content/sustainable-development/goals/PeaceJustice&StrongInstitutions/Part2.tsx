import Image from 'next/image';

export default function RiskManagementPart2() {
  return (
    <div className="bg-themeGreen p-5 mb-10">
      <h1 className="text-4xl font-bold mb-6">
        BOARD INTEGRATED RISK MANAGEMENT COMMITTEE REPORT
      </h1>

      <div className="mb-8">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-[#4DA28C] p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-4">
              IT and Information Security Risk
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Reviewed progress on the implementation of technology security
                controls in line with Regulatory Direction No. 1 of 2022
              </li>
              <li>
                Monitored progress and recommended actions to strengthen
                controls in preparation for compliance with the proposed
                Personal Data Protection Act No. 9 of 2022
              </li>
              <li>
                Reviewed critical system availability reports to ensure IT
                service continuity and operational resilience
              </li>
            </ul>
          </div>
          <div className="bg-[#4DA28C] p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-4">Capital Adequacy</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Reviewed Internal Capital Adequacy Assessment Process (ICAAP)
                report
              </li>
              <li>Reviewed stress testing results</li>
            </ul>
          </div>
          <div className=" bg-[#4DA28C] p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-4">
              Other Risk Related Activities
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Assessed effectiveness of Management-level Committees</li>
              <li>Reviewed risk exposures of the Company's subsidiary</li>
              <li>Reviewed the risk register</li>
              <li>Reviewed risk assessments of new products</li>
              <li>Reviewed risk management framework for models</li>
            </ul>
          </div>
          <div className="bg-[#4DA28C] p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-4">Compliance Function</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Monitored implementation of new rules and regulations</li>
              <li>Conducted monthly reviews of compliance checklist</li>
              <li>Reviewed AML/CFT reports quarterly</li>
              <li>Reviewed annual ML/TF risk assessment</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-medium mb-2">ACTION PLAN FOR 2025/26</h3>
          <p>
            BIRMC will focus on improving risk appetite monitoring and enhancing
            oversight of data privacy and cybersecurity. The Committee will also
            review emerging and strategic risks more closely.
          </p>
          <div className="mt-4 text-right">
            <p className="font-medium">Ashwini Natesan</p>
            <p>Chairperson, Board Integrated Risk Management Committee</p>
            <p>30 May 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
