'use client';
import dynamic from 'next/dynamic';
import ManagementCard from '../cards/managementCard/managementCard';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
const chartOptions = {
  chart: { type: 'pie' as const },
  labels: [
    'Governance',
    'Financial Reporting',
    'Internal Audit',
    'Internal Control and Risk Management',
    'External Audit',
    'Compliance',
  ],
  colors: ['#4e79a7', '#f28e2c', '#e15759', '#76b7b2', '#59a14f', '#edc949'],
  legend: { position: 'bottom' as const },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: { width: 340 },
        legend: { position: 'bottom' },
      },
    },
    {
      breakpoint: 400,
      options: {
        chart: { width: 300 },
        legend: { position: 'bottom' },
      },
    },
  ],
};

const series = [20, 20, 18, 15, 15, 12];
export default function BoardAuditCommitteeReport() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-4 h-[654px] overflow-auto grid grid-cols-1 gap-6 custom-scrollbar">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className=" text-white  rounded-lg xl:col-span-2">
          <p className="text-lg mb-4">
            Our rigorous examination of internal controls and risk management
            practices ensured the integrity of the financial statements
            presented in this annual report. We engaged in constructive dialogue
            with management and external auditors, fostering a culture of
            accountability and continuous improvement. Our efforts aimed to
            safeguard the interests of shareholders and stakeholders, promoting
            trust and confidence in the company&apos;s financial operations.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <ManagementCard
            name={'Ms. Yogadinusha Bhaskaran'}
            title={'Chairperson'}
            position={'Board Audit Committee '}
            image={'/images/annual-report/yogaA.png'}
            height="fit-content"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        <div className="bg-white text-blue p-6 rounded-lg">
          <h2 className="font-bold mb-2">PURPOSE OF THE COMMITTEE</h2>
          <p className="">
            The Board Audit Committee was established by the Board to obtain an
            objective review and oversight of the financial reporting process,
            governance process, the audit process, the company&apos;s system of
            internal controls and risk management and compliance process.
          </p>
        </div>

        <div className="bg-white text-blue p-6 rounded-lg">
          <h2 className="font-bold mb-2">COMPOSITION OF THE COMMITTEE</h2>
          <p className="">
            During the year, the Board Audit Committee was composed of three
            Non-Executive Directors, a majority of whom are independent, in
            compliance with regulatory composition requirements. The Board is
            confident that the current members of the Committee poses the
            necessary competence in financial and technology related matters and
            have recent and relevant experience.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full mt-4">
              <thead>
                <tr>
                  <th className="text-left">BOARD MEMBER</th>
                  <th className="text-left">BOARD STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ms. Yogadinusha Bhaskaran</td>
                  <td>Non-Executive Director</td>
                </tr>
                <tr>
                  <td>Mr. Ashane Jayasekara</td>
                  <td>Independent Non-Executive Director</td>
                </tr>
                <tr>
                  <td>Ms. Ashwini Natesan</td>
                  <td>Independent Non-Executive Director</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white text-blue p-6 rounded-lg">
          <h2 className="font-bold mb-2">COMMITTEE MEETINGS</h2>
          <p className="">
            The Committee convened thirteen (13) meetings throughout the
            reviewed year. Details regarding the attendance of Committee Members
            are stated in the table on page 174.
          </p>
          <p className=" mt-2">
            The Managing Director, Deputy Managing Director, Executive Directors
            and the senior management of LBF including Chief Internal Auditor
            and Chief Financial Officer attended the meetings by invitation. The
            members of the management team and the Company’s External Auditor,
            Messrs. Ernst & Young were invited to participate at the meetings as
            and when required. M/s. P W Corporate Secretarial (Pvt) Ltd acted as
            Secretary to the Committee, the proceedings of which were
            periodically reported to the Board. The profiles of the Audit
            Committee members are given on pages 156 to 160.
          </p>
        </div>

        <div className="bg-white text-blue p-6 rounded-lg">
          <h2 className="font-bold mb-2">COMMITTEE CHARTER</h2>
          <p className="">
            The Board approved charter of the Audit Committee is in place and it
            clearly defines the terms of reference of the committee. The Audit
            Committee Charter is reviewed annually to ensure that all new
            developments related to audit committee are duly incorporated. The
            audit committee charter was last reviewed and approved by the Board
            of Directors in December 2023.
          </p>
          <p className=" mt-2">
            The fundamental role of the Audit Committee is to assist the Board
            in discharging its oversight responsibilities in the areas of
            internal and external audits, internal financial controls and
            financial reporting process, other internal controls and regulatory
            compliances.
          </p>
          <p className=" mt-2">
            The Audit Committee functions are regulated in conformity with the
            finance business act direction no. 5 of 2021 on corporate
            governance, revised continuing listing rules on corporate governance
            issued by CSE that came to effective on October 2023 and revised
            code of best practice on corporate governance issued by CA Sri Lanka
            in 2023.
          </p>
        </div>

        <div className="bg-white text-blue p-6 rounded-lg md:col-span-2">
          <h2 className="font-bold mb-2">COMMITTEE RESPONSIBILITIES</h2>
          <p className="">
            The key responsibilities of the Board Audit Committee as mandated by
            the Board are as follows:
          </p>
          <ul className="list-disc list-inside  mt-2">
            <li>
              The primary objective of the Audit Committee is to assist the
              Board in its independent oversight of the accuracy and integrity
              of the financial statements, internal control systems and
              compliance with company policies, legal and regulatory
              requirements. This is essential in safeguarding the interests of
              all stakeholders, including shareholders and depositors.
            </li>
            <li>
              The Committee is responsible for supervising the effectiveness of
              the internal control system, financial reporting, internal audit
              function, risk management, and compliance with applicable laws,
              regulations and directives from the CBSL, CSE and other regulatory
              bodies. Additionally, committee ensures the adequacy and
              effectiveness of the Company`s governance process.
            </li>
            <li>
              The Committee shall exercise its independent oversight over the
              internal and external assurance processes to ensure that both
              auditors maintain their independence, objectivity and the
              effectiveness of the audit process.The committee considers
              relevant local and global professional and regulatory requirements
              to ensure compliance.
            </li>
            <li>
              The Audit Committee shall ensure that the Company adopts and
              adheres to highest level of standards in corporate governance
              practices, prime ethical standards and industry best practices in
              the best interest of all stakeholders.
            </li>

            <li>
              The Committee is responsible for reviewing the results of all
              types of inspections such as internal audit reports, information
              system audit reports and working with senior management to
              identify and address control weaknesses, procedure violations,
              frauds and errors. The Committee takes necessary precautionary
              measures to mitigate any risks may arise.
            </li>
            <li>
              The Committee is provided with adequate resources to fulfil its
              duties, including support from the Internal Audit Department, the
              external auditor, legal counsel and management. The committee
              examines all matters relating to the Company’s accounting
              principles and practices, as well as reviews all material
              financial, operational and compliance controls.
            </li>
            <li>
              Examining statutory examination reports and ensure necessary
              corrective action are timely taken and monitor the implementation
              of action plan
            </li>
          </ul>
        </div>

        <div className="bg-white text-blue p-6 rounded-lg md:col-span-2">
          <h3 className="font-bold mb-2">
            COMMITTEE ACTIVITIES DURING THE FINANCIAL YEAR
          </h3>
          <h4 className="font-semibold mb-2">
            Direct oversight of the Committee
          </h4>
          <p className="">
            The committee assisted in discharging Board&#39;s responsibility on
            governance aspects, financial reporting systems, internal and
            external audit processes, risk management and system of internal
            controls of the company and internal and external compliance
            reviews. Thirteen (13) committee meetings were held during the year
            and the committee allocated sufficient time to focus on key aspects
            as follows:
          </p>
          <div className="flex justify-center">
            {/* <Chart
              options={chartOptions}
              series={series}
              type="pie"
              width="380"
            /> */}
            <img
              src="/images/charts/coparateStuwardship/committeeOversight.png"
              alt="ownership image"
              className="w-full md:w-1/2 mb-4 rounded-lg"
            />
          </div>
          <div className="mt-6">
            <h3 className="font-bold mb-2">Financial reporting system</h3>
            <p className=" mb-2">
              The Committee assisted the Board of Directors in the discharge of
              its duties by reviewing the company&#39;s financial reporting
              system. The Committee ensured that accounting policies, practices
              and internal controls are adequate to provide reasonable assurance
              that the financial reporting system is effective and efficient in
              providing reliable and timely information. The Committee
              discharged its duties with particular reference to the following:
            </p>
            <ul className="list-disc list-inside  space-y-2">
              <li>
                The preparation, presentation and adequacy of the disclosures in
                the Company&#39;s annual and interim financial statements in
                conformity with Sri Lanka Accounting Standards, regulatory and
                statutory requirements applicable to LBF;
              </li>
              <li>
                The rationale and basis for the &#39;significant estimates and
                judgments&#39; underlying the financial statements;
              </li>
              <li>
                The internal control systems including information systems and
                procedures in place to provide reasonable assurance on the
                accuracy of recording all transactions in the books of accounts;
              </li>
              <li>
                The effectiveness of the financial reporting systems including
                the management accounts to ensure reliability of the information
                provided to the Board and other stakeholders of the Company.
              </li>
              <li>
                The Audit Committee has obtained assurance from both the MD and
                the CFO regarding the LBF&#39;s operations and finances to
                further strengthen its oversight responsibility on financial
                reporting and internal controls.
              </li>
              <li>
                The annual and the quarterly financial statements have been
                reviewed and recommended for the approval of the Board.
              </li>
              <li>
                The Committee focused special attention on the assessment of
                adequacy of provision for Expected Credit Loss (ECL) recognised
                in the financial statements by factoring the potential
                implications of prevailing economic condition of the country.
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="font-bold mb-2">Compliance monitoring mechanism</h3>
            <p className=" space-y-2">
              Statutory and regulatory compliances are on priority. Mechanisms
              to ensure timely and effective implementation of regulatory
              requirements are necessary to safeguard the interests of all
              stakeholders. Process owners are responsible for complying with
              all regulations as part of their standard operating procedure.
            </p>
            <p className=" mt-2">
              The Compliance Officer reviews and reports on any gaps or areas of
              non-compliance to the Audit Committee. It is also the mandate of
              the Compliance Officer to disseminate new regulatory requirements
              and update policies and procedure manuals to incorporate such
              requirements.
            </p>
            <p className=" mt-2">
              The reports of the Compliance Officer are monthly submitted to the
              Board audit committee and committee chairperson shall update the
              Board on matters which require Board&#39;s attention.
            </p>
            <p className=" mt-2">
              A process has been set up to obtain periodic confirmations from
              the senior management regarding compliance with the statutory and
              regulatory requirements through the compliance function. The
              Committee also obtains assurance from internal auditors on several
              key regulatory compliance of the Company, in line with their
              respective internal audit programs.
            </p>
            <p className=" mt-2">
              A process is in place to establish new procedures / processes, or
              amending the existing, to facilitate new statutory / or regulatory
              requirements come in to effect. The compliance officer agrees on
              internal timelines with the respective process owners when a
              significant change in people, processes or systems are effected as
              a result of new regulations.
            </p>
            <p className=" mt-2">
              Significant regulations / directions issued by regulators came to
              effect; Financial Consumer Protection Regulations No. 01 of 2023,
              amended CSE listing rules, transition periods provided for
              direction no. 05 of 2021 on Corporate Governance and direction no.
              01 of 2022 on Technology Risk Management and Resilience have been
              incorporated to operations of the Company during the year under
              review. The implementation status of statutory and regulatory
              concerns has been duly followed up by the Compliance Officer and
              the committee is regularly updated on the status at the monthly
              meetings.{' '}
            </p>

            <p className=" mt-2">
              The statutory examination report of CBSL and Finance Intelligence
              Unit (FIU) have also been reviewed in its monthly meetings and
              necessary remedial actions have been taken as agreed in the
              time-bound action plan
            </p>
            <p className=" mt-2">
              The Committee is satisfied with the present status of compliance
              with financial reporting requirements, CBSL regulatory
              requirements, information requirements under CSE listing rules,
              the Companies Act and the SEC Act and other relevant financial
              reporting related regulations and requirements.{' '}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-bold mb-2">Internal assurance</h3>
            <p className=" space-y-2">
              The Chief Internal Auditor reports directly to the Board Audit
              Committee and provides independent assurance to the Committee in
              discharging its duties. The Committee ensures that the internal
              audit function is independent of the activities it audits and it
              possesses proficiency and exercises due professional care. The
              Board approved procedure manual for Internal Audit Department is
              in place to reflect current practices of the Internal Audit
              Department. The procedure manual was last reviewed and approved by
              the Board in August 2023.{' '}
            </p>

            <p className=" space-y-2">
              A risk-based audit methodology and approach has been adopted and
              all auditable areas/ processes of the company are covered. The
              risk-based annual internal audit plan is reviewed by the Committee
              before commencement of the financial year and assesses the
              adequacy of resources for the department to provide uninterrupted
              assurance service. The Committee has reviewed the performance of
              the chief internal auditor and senior manager IS audit for the
              period to strengthen the independent assurance process.{' '}
            </p>

            <p className="mb-2">
              {' '}
              The Committee reviewed the efficacy of the internal control system
              and compliance with regulatory requirements and also the Company’s
              accounting and operational policies through the internal audit
              function. Prior to the commencement of audits, the scope of audit
              is reviewed by the Committee which recommends amendments where
              necessary, prior to approval. Control weaknesses highlighted in
              the internal audit reports are critically examined by the
              Committee. All observations are graded into separate risk groups
              based on the risk grading matrix adopted by the company and action
              plans are prioritised according to the severity. Follow up action
              taken by the management on the audit recommendations are also
              reviewed and recommends re-audits where necessary, to ensure the
              effectiveness of the internal controls.
            </p>

            <p className="mb-2">
              The Committee paid high level attention on the company’s
              information systems and its supporting technology infrastructure
              to ascertain the adequacy of internal controls and effectiveness
              and efficiency of such investments are fulfilled while ensuring
              the confidentiality, integrity and availability of the processes
              supports for financial reporting. The IS Audit team independently
              assessed the level of confidence in line with industry standards
              such as ISO 27001:2022, COBIT, NIST, CIS etc., and other
              statutory/ regulatory directions to provide assurance at the
              monthly Audit Committee meetings.
            </p>

            <p className="mb-2">
              The committee has prioritised systematic examinations of exception
              monitoring processes throughout the reporting period. These
              evaluations entailed meticulous reviews of financial transactions,
              operational procedures, and regulatory compliance frameworks to
              detect any deviations from established norms or potential risks.
              The internal audit team has been engaged to assess methodologies
              and tools for scrutinising anomalies and exceptions, with the aim
              of fortifying the company’s control environment and reducing
              potential threats.{' '}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-bold mb-2">External assurance</h3>
            <p className=" space-y-2">
              The Committee assisted the Board by recommending the appointment
              of the External Auditor in compliance with the relevant statutes
              and regulations, the service period, audit fee and any resignation
              or dismissal of the auditor.
            </p>
            <p className=" space-y-2">
              The Committee reviewed the independence, objectivity and the
              effectiveness of the audit process in accordance with applicable
              standards and best practices. A written assurance was obtained
              from the external auditor confirming that they have been
              independent throughout the conduct of the audit engagement in
              accordance with the terms of all relevant professional and
              regulatory requirements. During the year, the Committee has
              evaluated the external auditor in line with applicable standards
              and industry best practices and satisfied with the status of the
              independence, objectivity and performance of the external auditor.
              The committee noted that the current audit partner has served in
              that capacity since 2023/24, whereas the external audit firm,
              Messrs. Ernst & Young, has been LBF’s auditor since its inception.
            </p>
            <p className=" space-y-2">
              The Committee together with management reviewed and discussed the
              scope of audit, approach and audit plan with the external auditor,
              Messrs. Ernst & Young, prior to the commencement of the audit for
              2023/24. The Committee reiterated the necessity of reviewing the
              compliance status on regulatory and statutory requirements,
              preparation of financial statements in conformity with relevant
              accounting principles and reporting obligations, cybersecurity
              aspects and other internal control measures.{' '}
            </p>
            <p className=" space-y-2">
              The Auditors were provided with the opportunity of meeting the
              Committee Members twice during the year, without any executive
              officer being present, to ensure that the auditors had the
              unrestricted opportunity to discuss and express their opinions on
              any relevant matter. This process assured the Committee that the
              management has fully cooperated in providing the information and
              explanations requested by the Auditor.{' '}
            </p>

            <p className=" space-y-2">
              The Committee met the external auditors to discuss the management
              letter pertaining to the previous year’s audit and the
              management’s response thereto. Follow up actions were taken to
              ensure that the recommendations contained in the management letter
              were implemented by management.{' '}
            </p>
            <p className=" space-y-2">
              The Committee reviewed the non-audit services provided by the
              auditor to ensure that the provision of these services does not
              impair their independence and objectivity. The Committee is
              satisfied that there is no conflict of interests between the
              Company and the Auditor which would hinder the independence and
              objectivity of the Auditor. The Policy for engaging External
              Auditor Non-Audit services was reviewed and approved in June 2023.{' '}
            </p>
            <p className=" space-y-2">
              In compliance with the provisions made in new corporate governance
              direction no. 05 of 2021, the committee evaluated several
              proposals submitted by leading audit firms practicing Sri Lanka.
              As a result of this evaluation process, the committee has proposed
              to the Board of Directors the appointment of Messrs. KPMG, Sri
              Lanka, Chartered Accountants, as the external auditor for the year
              concluding on 31 March 2025, pending ratification by shareholders
              at the forthcoming annual general meeting.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-bold mb-2">
              Internal Control systems and Risk Management
            </h3>
            <p className=" space-y-2">
              Various processes have been implemented by the Committee to ensure
              the efficiency and effectiveness of company’s internal control
              systems. Key processes related risks and internal controls are
              regularly reviewed by the internal audit department and is of the
              view that adequate controls and procedures are in place to provide
              reasonable assurance to the Board that the assets of the Company
              are safeguarded and the financial statements present a true and
              fair view. Status of remediation plans are updated at the monthly
              audit committee meetings.
            </p>
            <p className=" space-y-2">
              The committee reviewed the risk management framework and Internal
              Capital Adequacy Assessment Process (ICAAP) of the company during
              the year
            </p>
            <p className=" space-y-2">
              In addition, a process has been established to assess the
              effectiveness of the company’s internal control systems and
              internal controls over financial reporting.
            </p>
          </div>
        </div>

        <div className="bg-white text-blue p-6 rounded-lg md:col-span-2">
          <h3 className="font-bold mb-2">GOOD GOVERNANCE AND WHISTLEBLOWING</h3>
          <p className="mb-2">
            The highest standards of corporate governance and adherence to the
            internal policies and procedures were ensured by the Committee to
            establish good governance within the organisation. The requirement
            of establishing new policies/ procedures / and amending the existing
            policies/ procedures in line with applicable statutory / regulatory
            requirements have been identified by the committee and processes are
            in place to duly comply the requirements. The committee has reviewed
            25 charters / policies and procedures during the year and
            recommended them for approval of the Board. The Committee is
            satisfied with the present corporate governance framework of the
            organisation which ensures a balance of power and authority.{' '}
          </p>

          <p className="mb-2">
            The Committee ensures the Whistleblowing Policy of the Company is a
            current, active set of measures to which all employees/ incidents
            have recourse. There was only one incident reported by a
            whistleblower during the year and necessary investigations and
            actions were implemented as per the provisions made in the
            whistle-blowing policy. All employees are encouraged to practice
            whistleblowing if they suspect any wrongdoing. Senior Management,
            from time to time conducts awareness programs to encourage staff to
            raise genuine concerns. The Compliance Officer reports on the
            whistleblowing incidents confidentially to the Committee each
            quarter end. The Committee remains committed to follow-up on any
            future complaints/ incidents, should they occur. The whistleblowing
            policy has been reviewed and revised regularly with the intention of
            further strengthening the existing process
          </p>
        </div>

        <div className="bg-white text-blue p-6 rounded-lg">
          <h3 className="font-bold mb-2">
            TRAINING AND DEVELOPMENT OF COMMITTEE MEMBERS
          </h3>
          <p className="mb-2">
            Continuous training and professional development have been
            undertaken by committee. Attending virtual and physical seminars,
            conferences, workshops, presentations done by internal and external
            officers on the areas such as new developments, new accounting
            standards, tax regulations, new statutes and directions issued by
            the Central Bank of Sri Lanka. An awareness session has been
            conducted to the Committee by a leading audit firm on the potential
            risks to the internal control environment as a result of using RPAs
            and the overview of Domestic Debt Restructure (DDR), DDR Scenarios,
            SLDBs accounting and risk implications and key considerations.
          </p>
        </div>

        <div className="bg-white text-blue p-6 rounded-lg ">
          <h3 className="font-bold mb-2">COMMITTEE EFFECTIVENESS EVALUATION</h3>
          <p className="mb-2">
            As in the previous years, the effectiveness of the Committee was
            self-evaluated by its members for the year ended 31.03.2024 and the
            results were presented to the Board. The Committee has concluded
            that its performance was highly effective.{' '}
          </p>
          <p className="mb-2">
            I wish to thank my fellow Committee members, Executive Directors and
            the Senior Management for their cooperation during the year.
          </p>

          <div className="mt-4">
            <img
              src="/images/annual-report/yoga-sign.png"
              alt="Secretaries sign"
            />
            <p className="font-semibold">Ms. Yogadinusha Bhaskaran</p>
            <p>Chairperson - Board Audit Committee</p>
          </div>
          <p className="mt-4">27 May 2024</p>
        </div>
      </div>
    </div>
  );
}
