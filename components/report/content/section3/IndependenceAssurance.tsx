import React from 'react';
import Image from 'next/image';

export default function IndependenceAssurance() {
  return (
    <div className="annual-report p-6 bg-themeGreen max-h-[70vh] overflow-y-auto">
      <h1 className="text-4xl font-bold mb-4">INDEPENDENCE ASSURANCE</h1>

      <div className="bg-greeen2 p-3 rounded-lg mb-8">
        <div className="bg-cardGreen p-4 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            INDEPENDENT ASSURANCE REPORT TO THE BOARD OF THE DIRECTORS OF LB
            FINANCE PLC
          </h2>
          <p className="mb-4">
            ON THE INFORMATION PRESENTED WITH REFERENCE TO THE GRI, SLFRS S1 and
            S2, SASB STANDARDS AND THE INTEGRATED REPORTING (IR) FRAMEWORK IN
            THE INTEGRATED ANNUAL REPORT -2025.
          </p>
        </div>

        {/* SCOPE */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            SCOPE
          </h2>
          <div className="bg-cardGreen p-4 rounded-lg">
            <p>
              We have been engaged by the management of LB Finance PLC ("the
              Company") to perform an independent limited assurance engagement,
              as defined by the Sri Lanka Standard on Assurance Engagements, on
              the information presented with reference to the GRI (Global
              Reporting Initiative), SLFRS S1 and S2, SASB (Sustainability
              Accounting Standards Board) Standards and the integrated reporting
              (IR) framework ("Information") in its Integrated Annual Report for
              the year ended 31 March 2025 (the "Report").
            </p>
          </div>
        </div>

        {/* MANAGEMENT'S RESPONSIBILITY */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            MANAGEMENT'S RESPONSIBILITY
          </h2>
          <div className="bg-cardGreen p-4 rounded-lg">
            <p>
              Management of the Company is responsible for preparation and
              presentation of the information with reference to the GRI, SLFRS
              S1 and S2, SASB standards and the Integrated Reporting (IR)
              framework. This responsibility includes the design,
              implementation, and maintenance of internal control relevant to
              the preparation and presentation of the information that is free
              from material misstatement, whether due to fraud or error.
            </p>
          </div>
        </div>

        {/* OUR INDEPENDENCE AND QUALITY CONTROL */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            OUR INDEPENDENCE AND QUALITY CONTROL
          </h2>
          <div className="bg-cardGreen p-4 rounded-lg">
            <p>
              We have complied with the independence and other ethical
              requirements of the Code of Ethics for Professional Accountants
              issued by CA Sri Lanka (Code of Ethics), which is founded on
              fundamental principles of integrity, objectivity, professional
              competence and due care, confidentiality, and professional
              behavior. The firm applies Sri Lanka Standard on Quality
              Management and accordingly maintains a comprehensive system of
              quality control including documented policies and procedures
              regarding compliance with ethical requirements, professional
              standards, and applicable legal and regulatory requirements.
            </p>
          </div>
        </div>

        {/* OUR RESPONSIBILITY */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            OUR RESPONSIBILITY
          </h2>
          <div className="bg-cardGreen p-4 rounded-lg">
            <p>
              Our responsibility is to express a conclusion on the information
              presented in Report with reference to the GRI, SLFRS S1 and S2,
              SASB standards and the Integrated Reporting (IR) framework. We
              conducted our limited assurance engagement in accordance with the
              Sri Lanka Standard on Assurance Engagements 3000, Assurance
              Engagements other than Audits or Reviews of Historical Financial
              Information ("SLSAE 3000") issued by the Institute of Chartered
              Accountants of Sri Lanka. That standard requires that we plan and
              perform this engagement to obtain limited assurance about whether
              the information is free from material misstatement.
            </p>
            <p className="mt-4">
              A limited assurance engagement undertaken in accordance with SLSAE
              3000 involves assessing the risks of material misstatement of the
              information whether due to fraud or error, responding to the
              assessed risks as necessary in the circumstances, and evaluating
              the overall presentation of the information.
            </p>
            <p className="mt-4">
              A limited assurance engagement is substantially less in scope than
              a reasonable assurance engagement in relation to both the risk
              assessment procedures, including an understanding of internal
              control, and the procedures performed in response to the assessed
              risks.
            </p>
          </div>
        </div>

        {/* Procedures Performed */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            PROCEDURES PERFORMED
          </h2>
          <div className="bg-cardGreen p-4 rounded-lg">
            <p>
              The procedures we performed were based on our professional
              judgment and were included:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                Comparing of the content of the Report against the GRI, SLFRS S1
                and S2, SASB standards and the Integrated Reporting (IR)
                framework.
              </li>
              <li>
                Inquiring relevant organization's personnel to understand the
                process for collection, analysis, aggregation, and presentation
                of data.
              </li>
              <li>
                Cross checking the non-financial data / information presented in
                the Report with the supporting documents and schedules
                maintained by the Company.
              </li>
              <li>
                Checking the calculations performed by the organization on a
                sample basis through recalculation.
              </li>
              <li>
                Cross checking the financial information presented in the Report
                with the audited financial statements of the Company for the
                financial reporting period ended 31 March 2025.
              </li>
            </ul>
          </div>
        </div>

        {/* CONCLUSION */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            CONCLUSION
          </h2>
          <div className="bg-cardGreen p-4 rounded-lg">
            <p>
              Based on the procedures we have performed and the evidence we have
              obtained, nothing has come to our attention that causes us to
              believe that the information, as defined above, for the year ended
              31 March 2025, is not presented, in all material respects, with
              reference to the GRI, SLFRS S1 and S2, SASB standards and the
              Integrated Reporting (IR) framework.
            </p>
          </div>
        </div>

        {/* OTHER MATTER */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            OTHER MATTER
          </h2>
          <div className="bg-cardGreen p-4 rounded-lg">
            <p>
              Our assurance is not extending to the prospective/comparative
              information, or any other information presented in the Report
              other than based on the GRI, SLFRS S1 and S2, SASB standards and
              the Integrated Reporting (IR) framework. Further, we do not
              provide any assurance on the assumptions and achievability of
              prospective information presented in the Report.
            </p>
          </div>
        </div>

        {/* Signature Block */}
        <div className="bg-cardGreen p-4 rounded-lg mt-6">
          <div className="text-right">
            <p className="font-bold">Deloitte Partners</p>
            <p className="font-bold">Chartered Accountants</p>
            <p>Colombo</p>
            <p>30 May 2025</p>
            <p className="mt-4">(IR 3F)</p>
            <p className="mt-2">www.deloitte.com</p>
          </div>
          <div className="mt-4 text-sm">
            <p>
              C S Manoharan FCA, T U Jayasinghe FCA, M D B Boyagoda FCA, H A C H
              Gunarathne FCA,
            </p>
            <p>
              M P M T Gunasekara FCA, N R Gunasekera FCA, M S J Henry FCA, M M R
              Hilmy FCA,
            </p>
            <p>
              H P V Laksiri FCA, K M D R P Muthukuda ACA, M M M Fonseka FCA, L A
              C Tillakaratne ACA
            </p>
          </div>
          <div className="mt-4 text-sm">
            <p>Deloitte Partners</p>
            <p>100 Colombo 2</p>
            <p>Braybrooke Place</p>
            <p>Sri Lanka</p>
            <p>Tel: +94 11 771 97</p>
          </div>
        </div>
      </div>
    </div>
  );
}
