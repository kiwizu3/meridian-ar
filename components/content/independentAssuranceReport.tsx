export default function IndependentAssuranceReport() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto grid grid-cols-1 gap-6">
      <div className="flex flex-col md:flex-row gap-6 p-6 rounded-lg bg-white text-blue">
        <div className="">
          <img
            src="/images/annual-report//ey-logo.png"
            alt="EY Logo"
            className="w-full h-auto mb-4"
          />
        </div>
        <div className="md:mt-10">
          <p>Ernst & Young</p>
          <p>Chartered Accountants</p>
          <p>Rotunda Towers</p>
          <p>No. 109, Galle Road</p>
          <p>P.O. Box 101</p>
          <p>Colombo 03, Sri Lanka</p>
        </div>
        <div className="md:mt-10">
          <p>Tel : +94 11 246 3500</p>
          <p>Fax : +94 11 768 7869</p>
          <p>Email: eysl@lk.ey.com</p>
          <p>ey.com</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Scope Section */}
        <div className="bg-white text-blue rounded-lg p-6">
          <h2 className="font-bold">
            INDEPENDENT PRACTITIONER’S ASSURANCE REPORT TO THE BOARD OF
            DIRECTORS OF LB FINANCE PLC ON THE SUSTAINABILITY REPORTING CRITERIA
            PRESENTED IN THE INTEGRATED ANNUAL REPORT FY2023/24
          </h2>
          <h3 className="font-bold mt-4">SCOPE</h3>
          <p className="mt-2">
            We have been engaged by LB Finance PLC to perform a ‘limited
            assurance engagement,’ as defined by Sri Lanka Standard on Assurance
            Engagements, here after referred to as the engagement, to report on
            LB Finance PLC’s Economic, Environment, Social and Governance (EESG)
            indicators (the “Subject Matter”) contained in LB Finance PLC’s (the
            “Entity’s”) Sustainability Report for the year ended 31 March 2024
            (the “Report”).
          </p>
          <p className="mt-2">
            Other than as described in the preceding paragraph, which sets out
            the scope of our engagement, we did not perform assurance procedures
            on the remaining information included in the Report, and
            accordingly, we do not express a conclusion on this information.
          </p>
        </div>

        {/* Criteria Section */}
        <div className="bg-white text-blue rounded-lg p-6">
          <h3 className="font-bold ">CRITERIA APPLIED BY LB FINANCE PLC</h3>
          <p className="mt-2">
            In preparing the Subject Matter, LB Finance PLC applied the
            following criteria (“Criteria”):
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              The Global Reporting Initiative’s (GRI) Sustainability Reporting
              Guidelines, publicly available at https://www.globalreporting.org
            </li>
            <li>
              The Sustainability Accounting Standards Board (SASB) Standards,
              publicly available at https://sasb.org/standards/
            </li>
          </ul>
          <p className="mt-2">
            Such Criteria were specifically designed for the purpose of
            assisting you in determining whether Entity’s Economic, Environment,
            Social and Governance (EESG) indicators contained in the Entity’s
            Report is presented in accordance with the relevant criteria; As a
            result, the subject matter information may not be suitable for
            another purpose.
          </p>
        </div>

        {/* Responsibilities Section */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 bg-white text-blue rounded-lg p-6 gap-6 md:col-span-2">
          <div>
            <h3 className="font-bold text-red-600">
              LB FINANCE PLC’S RESPONSIBILITIES
            </h3>
            <p className="mt-2">
              LB Finance PLC management is responsible for selecting the
              Criteria, and for presenting the Subject Matter in accordance with
              that Criteria, in all material respects. This responsibility
              includes establishing and maintaining internal controls,
              maintaining adequate records and making estimates that are
              relevant to the preparation of the subject matter, such that it is
              free from material misstatement, whether due to fraud or error.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-red-600">
              ERNST & YOUNG’S RESPONSIBILITIES
            </h3>
            <p className="mt-2">
              Our responsibility is to express a conclusion on the presentation
              of the Subject Matter based on the evidence we have obtained.
            </p>
            <p className="mt-2">
              We conducted our engagement in accordance with the Sri Lanka
              Standard for Assurance Engagements Other Than Audits or Reviews of
              Historical Financial Information (SLSAE 3000 (Revised), and the
              terms of reference for this engagement as agreed with the LB
              Finance PLC on 3 June 2024. Those standards require that we plan
              and perform our engagement to express a conclusion on whether we
              are aware of any material modifications that need to be made to
              the Subject Matter in order for it to be in accordance with the
              Criteria, and to issue a report. The nature, timing, and extent of
              the procedures selected depend on our judgment, including an
              assessment of the risk of material misstatement, whether due to
              fraud or error.
            </p>
            <p className="mt-2">
              We believe that the evidence obtained is sufficient and
              appropriate to provide a basis for our limited assurance
              conclusions.
            </p>
          </div>
        </div>

        {/* Independence and Quality Management Section */}
        <div className="bg-white text-blue rounded-lg p-6 md:col-span-2">
          <h3 className="font-bold text-red-600">
            OUR INDEPENDENCE AND QUALITY MANAGEMENT
          </h3>
          <p className="mt-2">
            We have maintained our independence and confirm that we have met the
            requirements of the Code of Ethics for Professional Accountants
            issued by the Institute of Chartered Accountants of Sri Lanka (CA
            Sri Lanka) and have the required competencies and experience to
            conduct this assurance engagement.
          </p>
          <p className="mt-2">
            EY also applies International Standard on Quality Management 1,
            Quality Management for Firms that Perform Audits or Reviews of
            Financial Statements, or Other Assurance or Related Services
            engagements, which requires that we design, implement and operate a
            system of quality management including policies or procedures
            regarding compliance with ethical requirements, professional
            standards and applicable legal and regulatory requirements.
          </p>
        </div>

        {/* Description of Procedures Performed Section */}
        <div className="bg-white text-blue rounded-lg p-6 md:col-span-2">
          <h3 className="font-bold text-red-600">
            DESCRIPTION OF PROCEDURES PERFORMED
          </h3>
          <p className="mt-2">
            Procedures performed in a limited assurance engagement vary in
            nature and timing from, and are less in extent than for a reasonable
            assurance engagement. Consequently, the level of assurance obtained
            in a limited assurance engagement is substantially lower than the
            assurance that would have been obtained had a reasonable assurance
            engagement been performed. Our procedures were designed to obtain a
            limited level of assurance on which to base our conclusion and do
            not provide all the evidence that would be required to provide a
            reasonable level of assurance.
          </p>
          <p className="mt-2">
            Although we considered the effectiveness of management’s internal
            controls when determining the nature and extent of our procedures,
            our assurance engagement was not designed to provide assurance on
            internal controls. Our procedures did not include testing controls
            or performing procedures relating to checking aggregation or
            calculation of data within IT systems.
          </p>
          <p className="mt-2">
            A limited assurance engagement consists of making enquiries,
            primarily of persons responsible for preparing the subject matter
            and related information and applying analytical and other
            appropriate procedures.
          </p>
          <p className="mt-2">Our procedures included:</p>
          <ul className="list-disc list-inside mt-2">
            <li>
              Validated the information presented and checked the calculations
              performed by the organization through recalculation.
            </li>
            <li>
              Performed a comparison of the content given in the Report against
              the criteria given in the selected sustainability
              standards/frameworks.
            </li>
            <li>
              Conducted interviews with relevant organization’s personnel to
              understand the process for collection, analysis, aggregation and
              presentation of data. Interviews included selected key management
              personnel and relevant staff.
            </li>
            <li>
              Read the content presented in the Report for consistency with our
              overall knowledge obtained during the course of our assurance
              engagement and requested changes wherever required.
            </li>
            <li>
              Provided guidance, recommendations and feedback on the improvement
              of the sustainability reporting indicators to improve the
              presentation standard.
            </li>
          </ul>
          <p className="mt-2">
            We also performed such other procedures as we considered necessary
            in the circumstances.
          </p>
        </div>

        {/* Emphasis of Matter Section */}
        <div className="bg-white text-blue rounded-lg p-6 ">
          <h3 className="font-bold text-red-600">EMPHASIS OF MATTER</h3>
          <p className="mt-2">
            Economic, Environment, Social management data/information are
            subject to inherent limitations given their nature and the methods
            used for determining, calculating and estimating such data. Such
            inherent limitations are common in Sri Lanka.
          </p>
          <p className="mt-2">
            We also do not provide any assurance on the assumptions and
            achievability of prospective information presented in the Entity’s
            Report.
          </p>
        </div>

        {/* Conclusion Section */}
        <div className="bg-white text-blue rounded-lg p-6 ">
          <h3 className="font-bold text-red-600">CONCLUSION</h3>
          <p className="mt-2">
            Based on our procedures and the evidence obtained, we are not aware
            of any material modifications that should be made to the information
            on the Economic, Environment, Social and Governance (EESG) contained
            in the Integrated Annual Report of LB Finance PLC for the year ended
            31 March 2024, in order for it to be in accordance with the
            Criteria.
          </p>
          <img
            src="/images/annual-report/ey-sign.png"
            alt="ey sign"
            className="mt-2"
          />
          <p className="mt-2">27 May 2024</p>
          <p className="mt-2">Colombo</p>
        </div>
      </div>
    </div>
  );
}
