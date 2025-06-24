import Image from 'next/image';
export default function AssuranceReportTheBoardOfDirectors() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-4 h-[654px] overflow-auto grid grid-cols-1 gap-6 custom-scrollbar">
      <div className="grid grid-cols-1 gap-6">
        <div className="flex flex-col md:flex-row gap-6 p-6 text-blue rounded-lg bg-white">
          <div>
            <Image
              src="/images/annual-report/ey-logo.png"
              alt="EY Logo"
              width={100}
              height={50}
            />
          </div>
          <div className="mt-4 text-sm">
            <p>Ernst & Young</p>
            <p>Chartered Accountants</p>
            <p>Reluske Towers</p>
            <p>No. 407, Galle Road</p>
            <p>P.O. Box 101</p>
            <p>Colombo 03, Sri Lanka</p>
          </div>
          <div className="mt-4 text-sm">
            <p>Tel: +94 11 246 3500</p>
            <p>Fax: +94 11 268 7869</p>
            <p>Email: ey.lk@ey.com</p>
            <p>ey.com</p>
          </div>
        </div>

        <div className="p-6 text-blue rounded-lg bg-white">
          <h1 className="text-2xl font-bold mb-4">
            INDEPENDENT ASSURANCE REPORT TO THE BOARD OF DIRECTORS OF LB FINANCE
            PLC
          </h1>

          <p className="mb-4">
            Report on the Statement on Internal Control Over Financial Reporting
            included in the Directors’ Statement on Internal Control
          </p>

          <p className="mb-4">
            We were engaged by the Board of Directors of LB Finance PLC (the
            “Company”) to provide assurance on the Statement of Internal Control
            Over Financial Reporting included in the Directors’ Statement on
            Internal Control for the year ended 31 March 2024 (the “Statement”)
            included in the annual report.
          </p>

          <h2 className="text-xl font-semibold mb-2">
            Management&#39;s Responsibility
          </h2>
          <p className="mb-4">
            Management is responsible for the preparation and presentation of
            the Statement in accordance with the “Guidance for Directors of
            License Finance Company/ Finance Leasing Company on the Directors’
            Statement on Internal Control” issued in compliance with the section
            16 (1) (ix) of the Finance Companies Corporate Governance Direction
            no. 05 of 2021, by the Institute of Chartered Accountants of Sri
            Lanka.
          </p>

          <h2 className="text-xl font-semibold mb-2">
            Our Independence and Quality Control
          </h2>
          <p className="mb-4">
            We have complied with the independence and other ethical requirement
            of the Code of Ethics for Professional Accountants issued by the
            Institute of Chartered Accountants of Sri Lanka, which is founded on
            fundamental principles of integrity, objectivity, professional
            competence and due care, confidentiality and professional behaviour.
          </p>
          <p className="mb-4">
            The firm applies Sri Lanka Standard on Quality Control 1 and
            accordingly maintains a comprehensive system of quality control
            including documented policies and procedures regarding compliance
            with ethical requirements, professional standards and applicable
            legal and regulatory requirements.
          </p>

          <h2 className="text-xl font-semibold mb-2">
            Our Responsibilities and Compliance with SLSAE 3051
          </h2>
          <p className="mb-4">
            Our responsibility is to assess whether the Statement is both
            supported by the documentation prepared by or for Directors and
            appropriately reflects the process the Directors have adopted in
            reviewing the design and effectiveness of the internal control of
            the Company.
          </p>
          <p className="mb-4">
            We conducted our engagement in accordance with Sri Lanka Standard on
            Assurance Engagements (SLSAE) 3051, Assurance Report for License
            Finance Company/ Finance Leasing Company on Directors&#39; Statement
            on Internal Control, issued by the Institute of Chartered
            Accountants of Sri Lanka.
          </p>
          <p className="mb-4">
            This Standard required that we plan and perform procedures to obtain
            limited assurance about whether Management has prepared, in all
            material respects, the Statement on Internal Control.
          </p>
          <p className="mb-4">
            For purpose of this engagement, we are not responsible for updating
            or reissuing any reports, nor have we, in the course of this
            engagement, performed an audit or review of the financial
            information.
          </p>

          <h2 className="text-xl font-semibold mb-2">
            Summary of Work Performed
          </h2>
          <p className="mb-4">
            We conducted our engagement to assess whether the Statement is
            supported by the documentation prepared by or for Directors; and
            appropriately reflected the process the Directors have adopted in
            reviewing the system of internal control over financial reporting of
            the Company.
          </p>
          <p className="mb-4">
            The procedures performed were limited primarily to inquiries of the
            Company personnel and the existence of documentation on a sample
            basis that supported the process adopted by the Board of Directors.
          </p>
          <p className="mb-4">
            SLSAE 3051 does not require us to consider whether the Statement
            covers all risks and controls or to form an opinion on the
            effectiveness of the Company&#39;s risk and control procedures.
            SLSAE 3051 also does not require us to consider whether the
            processes described to deal with material internal control aspects
            of any significant problems disclosed in the annual report will, in
            fact, remedy the problems.
          </p>
          <p className="mb-4">
            The procedures selected depend on our judgement, having regard to
            our understanding of the nature of the Company, the event or
            transaction in respect of which the Statement has been prepared.
          </p>
          <p className="mb-4">
            We believe that the evidence we have obtained is sufficient and
            appropriate to provide a basis for our conclusion.
          </p>

          <h2 className="text-xl font-semibold mb-2">Our Conclusion</h2>
          <p className="mb-4">
            Based on the procedures performed, nothing has come to our attention
            that causes us to believe that the Statement included in the annual
            report is inconsistent with our understanding of the process the
            Board of Directors has adopted in the review of the design and
            effectiveness of internal control over financial reporting of the
            Company.
          </p>

          <div className="mt-8">
            <Image
              src="/images/annual-report/ey-sign-2.png"
              alt="Signature"
              width={150}
              height={50}
            />
            <p>27 May 2024</p>
            <p>Colombo</p>
          </div>
        </div>
      </div>
    </div>
  );
}
