import React from 'react';
import Image from 'next/image';

export default function IndependentAuditorsReport() {
  return (
    <div className="auditors-report p-6 bg-themeGreen max-h-[70vh] overflow-y-auto">
      <h1 className="text-4xl font-bold mb-4">INDEPENDENT AUDITORS' REPORT</h1>

      <div className="space-y-8">
        {/* Header Section */}
        <div className="bg-cardGreen p-4 rounded-lg">
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold">KPMG</h2>
            <p>(Chartered Accountants)</p>
            <p>32A, Sir Mohamed Macan Markar Mawatha,</p>
            <p>P. 0. Box 186,</p>
            <p>Colombo 00300, Sri Lanka.</p>
          </div>
          <p className="text-center font-semibold">
            To the shareholders of LB Finance PLC
          </p>
        </div>

        {/* Report on the Audit Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            Report on the Audit of the Financial Statements
          </h2>

          {/* Opinion Section */}
          <div className="bg-cardGreen p-4 rounded-lg mb-6">
            <h3 className="font-bold mb-2">Opinion</h3>
            <p>
              We have audited the financial statements of LB Finance PLC ('the
              Company') and the consolidated financial statements of the Company
              and its subsidiaries ('the Group'), which comprise the statement
              of financial position as at March 31, 2025, statement of profit or
              loss and other comprehensive income, statement of changes in
              equity and statement of cash flows for the year then ended, and
              notes to the financial statements, including material accounting
              policies and other explanatory information.
            </p>
            <p className="mt-2">
              In our opinion, the accompanying financial statements of the
              Company and the Group give a true and fair view of the financial
              position of the Company and the Group as at March 31, 2025, and of
              its financial performance and its cash flows for the year then
              ended in accordance with Sri Lanka Accounting Standards.
            </p>
          </div>

          {/* Basis for Opinion Section */}
          <div className="bg-cardGreen p-4 rounded-lg mb-6">
            <h3 className="font-bold mb-2">Basis for Opinion</h3>
            <p>
              We conducted our audit in accordance with Sri Lanka Auditing
              Standards (SLAuSs). Our responsibilities under those standards are
              further described in the Auditor's Responsibilities for the Audit
              of the Financial Statements section of our report. We are
              independent of the Group in accordance with the Code of Ethics for
              professional Accountants issued by CA Sri Lanka (Code of Ethics)
              and we have fulfilled our other ethical responsibilities in
              accordance with the Code of Ethics. We believe that the audit
              evidence we have obtained is sufficient and appropriate to provide
              a basis for our opinion.
            </p>
          </div>

          {/* Key Audit Matters Section */}
          <div>
            <h3 className="font-bold mb-2">Key Audit Matters</h3>
            <p className="mb-4">
              Key audit matters are those matters that, in our professional
              judgment, were of most significance in our audit of the Company
              and the consolidated financial statements of the current period.
              These matters were addressed in the context of our audit of the
              Company and the consolidated financial statements as a whole, and
              in forming our opinion thereon, and we do not provide a separate
              opinion on these matters.
            </p>

            {/* Allowances for Expected Credit Losses */}
            <div className="bg-cardGreen p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">
                Allowances for Expected Credit Losses of Financial Assets at
                Amortized Cost - Loans and Receivables
              </h4>
              <p>
                Allowances for expected credit losses of financial assets
                amounting to 7.1 Bn arising from loans and receivables of LKR
                204.8 Bn (Note 2.17) is determined by the management based on
                the accounting policies described in Note 2.18. High degree of
                complexity and judgment are involved in estimating Expected
                Credit Loss (ECL) on Loans and receivables to the customers.
              </p>
              <p className="mt-2">
                Collective impairment is calculated using internally developed
                statistical models which are inherently complex, and judgment is
                required in developing the models. There is a number of key
                inputs and assumptions used by the Company in applying the
                requirements of SLFRS 9 to the models including definition of
                significant increase in credit risk (SICR), selection and input
                of forward-looking information, past due information, historical
                loss parameters etc.
              </p>
              <p className="mt-2">
                Some of these assumptions and inputs are heavily dependent upon
                the macroeconomic environment, also additional adjustments and
                overlays are provided to the model to reflect the effects of
                current economic developments to address known model limitations
                due to emerging trends in the economy and the portfolios.
              </p>
              <p className="mt-2">
                Accordingly, due to the significance of the value of the
                Financial Assets at Amortised Cost - Loans and Receivables
                relative to total assets, subjectivity and complexity of the
                significant judgments involved and estimation uncertainty
                associated with the impairment provision calculation, we
                considered impairment of loans and receivables as a Key Audit
                Matter.
              </p>

              <h4 className="font-semibold mt-4 mb-2">Our Responses</h4>
              <p>
                Our audit procedures to assess the allowances for ECL included
                the following:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Testing key controls of the Company in relation to:
                  <ul className="list-disc pl-5 mt-1">
                    <li>
                      The ECL model governance and validation processes which
                      involved assessment of model performance;
                    </li>
                    <li>
                      The assessment and approval of the forward-looking
                      macroeconomic assumptions through challenge applied by
                      internal governance processes;
                    </li>
                  </ul>
                </li>
                <li>
                  Assessing the adequacy of collective impairment by:
                  <ul className="list-disc pl-5 mt-1">
                    <li>
                      Assessing the accuracy of the data used in the ECL models
                      by checking a sample of data fields such as account
                      balance, days past due, interest rate to relevant source
                      systems.
                    </li>
                    <li>
                      Working with our Financial Risk Management (FRM)
                      specialist we carried out the following procedures:
                      <ul className="list-disc pl-5 mt-1">
                        <li>
                          Assessed the accuracy of the ECL model estimates by
                          re-performing, for a sample of loans and comparing
                          this to the amount recorded by the Company;
                        </li>
                        <li>
                          Examined the model design and calculation approach
                          compared with industry standards.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Assessing the adequacy of post model adjustments
                  <ul className="list-disc pl-5 mt-1">
                    <li>
                      We challenged key assumptions in the components of the
                      Company's post-model adjustments to the ECL allowance
                      balance.
                    </li>
                    <li>
                      Assessing post-model adjustments against the Company's ECL
                      model and data deficiencies identified by the Company's
                      ECL model validation processes, particularly in light of
                      the significant volatility in economic scenarios;
                    </li>
                    <li>
                      Assessing the completeness of post-model adjustments by
                      checking the consistency of overlay criteria we identified
                      in the loan portfolios against the Company's assessment.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* IT Systems and Controls */}
            <div className="bg-cardGreen p-4 rounded-lg">
              <h4 className="font-semibold mb-2">
                Information Technology (IT) systems and controls over financial
                reporting.
              </h4>
              <p>
                The Company's key financial accounting and reporting processes
                are highly dependent on the automated controls over the
                Company's information systems.
              </p>
              <p className="mt-2">
                The controls over access, changes to and operations,
                integrations of IT systems are key to the recording of financial
                transactions/ information and the preparation of financial
                statements which provide a true and fair view of the Company's
                financial position and performance.
              </p>
              <p className="mt-2">
                Key areas of importance are system calculations in relation to
                significant accounts including interest calculations, updating
                of the general ledger, interface between different modules
                within the system etc.
              </p>
              <p className="mt-2">
                The IT systems and controls, as they impact the recording and
                reporting of financial transactions, is a key audit matter as
                our audit approach could significantly differ depending on the
                effective operation of the Company's IT controls.
              </p>

              <h4 className="font-semibold mt-4 mb-2">Our Responses</h4>
              <p>Our audit procedures included the following key procedures:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  We worked with KPMG IT Audit specialists to perform audit
                  procedures to assess IT systems and controls over financial
                  reporting, which included:
                  <ul className="list-disc pl-5 mt-1">
                    <li>
                      Obtaining an understanding of and assessing the design,
                      implementation and operating effectiveness of general IT
                      controls in relation to financial accounting and reporting
                      system involving restrictions on system access,
                      permissions and responsibilities of the authorized users,
                      process for approving changes to the systems etc;
                    </li>
                    <li>
                      Examining the framework of governance over the Company's
                      IT organization and the controls over programme
                      development and changes, access to programmes and data and
                      IT operations, including compensating controls where
                      required;
                    </li>
                    <li>
                      Evaluating the design, implementation and operating
                      effectiveness of the specific application controls which
                      are required to be operating effectively to mitigate the
                      risk of misstatement in the financial statements;
                    </li>
                    <li>
                      Assessing the availability and stability of key operating
                      systems, taking into consideration the rapid development
                      of business types and transactions volumes as well as IT
                      projects that have a significant impact on business
                      continuity;
                    </li>
                    <li>
                      Re-performing selected automated computations and
                      comparing the results with the system calculations and the
                      general ledger.
                    </li>
                    <li>
                      Testing the access rights given to staff by checking them
                      to approved records, and inspecting the reports over the
                      granting and removal of access rights;
                    </li>
                    <li>
                      Testing manual compensating controls, such as
                      reconciliations between systems and other information
                      sources and performed additional substantive testing such
                      as using extended sample sizes and performing data
                      analysis routines over the full population of
                      transactions.
                    </li>
                    <li>
                      Tested source data of the reports used to generate
                      disclosures for accuracy and completeness
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Other Matter Section */}
        <div className="bg-cardGreen p-4 rounded-lg">
          <h3 className="font-bold mb-2">Other Matter</h3>
          <p>
            The financial statements of LB Finance PLC for the year ended 31st
            March 2024, were audited by another auditor who expressed an
            unmodified opinion on those statements on 27th May 2024.
          </p>
        </div>

        {/* Other Information Section */}
        <div className="bg-cardGreen p-4 rounded-lg">
          <h3 className="font-bold mb-2">Other Information</h3>
          <p>
            Management is responsible for the other information. The other
            information comprises the information included in the annual report,
            but does not include the financial statements and our auditor's
            report thereon.
          </p>
          <p className="mt-2">
            Our opinion on the financial statements does not cover the other
            information and we will not express any form of assurance conclusion
            thereon.
          </p>
          <p className="mt-2">
            In connection with our audit of the financial statements, our
            responsibility is to read the other information and, in doing so,
            consider whether the other information is materially inconsistent
            with the financial statements or our knowledge obtained in the
            audit, or otherwise appears to be materially misstated.
          </p>
          <p className="mt-2">
            If, based on the work we have performed, we conclude that there is a
            material misstatement of this other information, we are required to
            report that fact. We have nothing to report in this regard.
          </p>
        </div>

        {/* Responsibilities Sections */}
        <div className="space-y-6">
          <div className="bg-cardGreen p-4 rounded-lg">
            <h3 className="font-bold mb-2">
              Responsibilities of Management and Those Charged with Governance
              for the Financial Statements
            </h3>
            <p>
              Management is responsible for the preparation of financial
              statements that give a true and fair view in accordance with Sri
              Lanka Accounting Standards, and for such internal control as
              management determines is necessary to enable the preparation of
              financial statements that are free from material misstatement,
              whether due to fraud or error.
            </p>
            <p className="mt-2">
              In preparing the financial statements, management is responsible
              for assessing the Group's ability to continue as a going concern,
              disclosing, as applicable, matters related to going concern and
              using the going concern basis of accounting unless management
              either intends to liquidate the Group or to cease operations, or
              has no realistic alternative but to do so.
            </p>
            <p className="mt-2">
              Those charged with governance are responsible for overseeing the
              Company's and Group's financial reporting process.
            </p>
          </div>

          <div className="bg-cardGreen p-4 rounded-lg">
            <h3 className="font-bold mb-2">
              Auditor's Responsibilities for the Audit of the Financial
              Statements
            </h3>
            <p>
              Our objectives are to obtain reasonable assurance about whether
              the financial statements as a whole are free from material
              misstatement, whether due to fraud or error, and to issue an
              auditor's report that includes our opinion. Reasonable assurance
              is a high level of assurance, but is not a guarantee that an audit
              conducted in accordance with SLAuSs will always detect a material
              misstatement when it exists. Misstatements can arise from fraud or
              error and are considered material if, individually or in the
              aggregate, they could reasonably be expected to influence the
              economic decisions of users taken on the basis of these financial
              statements.
            </p>
            <p className="mt-2">
              As part of an audit in accordance with SLAuSs, we exercise
              professional judgment and maintain professional skepticism
              throughout the audit. We also:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                Identify and assess the risks of material misstatement of the
                financial statements, whether due to fraud or error, design and
                perform audit procedures responsive to those risks, and obtain
                audit evidence that is sufficient and appropriate to provide a
                basis for our opinion. The risk of not detecting a material
                misstatement resulting from fraud is higher than for one
                resulting from error, as fraud may involve collusion, forgery,
                intentional omissions, misrepresentations, or the override of
                internal control.
              </li>
              <li>
                Obtain an understanding of internal control relevant to the
                audit in order to design audit procedures that are appropriate
                in the circumstances, but not for the purpose of expressing an
                opinion on the effectiveness of the Company's and Group's
                internal control.
              </li>
              <li>
                Evaluate the appropriateness of accounting policies used and the
                reasonableness of accounting estimates and related disclosures
                made by management.
              </li>
              <li>
                Conclude on the appropriateness of management's use of the going
                concern basis of accounting and, based on the audit evidence
                obtained, whether a material uncertainty exists related to
                events or conditions that may cast significant doubt on the
                Group's ability to continue as a going concern. If we conclude
                that a material uncertainty exists, we are required to draw
                attention in our auditor's report to the related disclosures in
                the financial statements or, if such disclosures are inadequate,
                to modify our opinion. Our conclusions are based on the audit
                evidence obtained up to the date of our auditor's report.
                However, future events or conditions may cause the Group to
                cease to continue as a going concern.
              </li>
              <li>
                Evaluate the overall presentation, structure and content of the
                financial statements, including the disclosures, and whether the
                financial statements represent the underlying transactions and
                events in a manner that achieves fair presentation.
              </li>
              <li>
                Obtain sufficient appropriate audit evidence regarding the
                financial information of the entities or business activities
                within the Group to express an opinion on the consolidated
                financial statements. We- are responsible for the direction,
                supervision, and performance of the Group audit. We remain
                solely responsible for our audit opinion.
              </li>
            </ul>
            <p className="mt-2">
              We communicate with those charged with governance regarding, among
              other matters, the planned scope and timing of the audit and
              significant audit findings, including any significant deficiencies
              in internal control that we identify during our audit.
            </p>
            <p className="mt-2">
              We also provide those charged with governance with a statement
              that we have complied with relevant ethical requirements regarding
              independence, and to communicate with them all relationships and
              other matters that may reasonably be thought to bear on our
              independence, and where applicable, actions taken to eliminate
              threats or safeguards applied.
            </p>
            <p className="mt-2">
              From the matters communicated with those charged with governance,
              we determine those matters that were of most significance in the
              audit of the financial statements of the current period and are
              therefore the key audit matters. We describe these matters in our
              auditor's report unless law or regulation precludes public
              disclosure about the matter or when, in extremely rare
              circumstances, we determine that a matter should not be
              communicated in our report because the adverse consequences of
              doing so would reasonably be expected to outweigh the public
              interest benefits of such communication.
            </p>
          </div>
        </div>

        {/* Report on Other Legal Requirements */}
        <div className="bg-cardGreen p-4 rounded-lg">
          <h3 className="font-bold mb-2">
            Report on Other Legal and Regulatory Requirements
          </h3>
          <p>
            As required by section 163 (2) of the Companies Act No. 07 of 2007,
            we have obtained all the information and explanations that were
            required for the audit and as far as appears from our examination,
            proper accounting records have been kept by the Company.
          </p>
          <p className="mt-2">
            CA Sri Lanka membership number of the engagement partner responsible
            for signing this independent auditor's report is FCA 3272.
          </p>
        </div>

        {/* Signature Block */}
        <div className="bg-cardGreen p-4 rounded-lg mt-6">
          <div className="text-right">
            <p className="font-bold">KPMG</p>
            <p>Colombo, Sri Lanka</p>
            <p>30 May 2025</p>
          </div>
          <div className="mt-4">
            <p className="font-semibold">Principals:</p>
            <p>C.P. Jayatilhar PCA</p>
            <p>Ms. S. Jeepen FCA</p>
            <p>R.M.D.B. Rajapakas PCA</p>
            <p>M.R.M. Summari FCA</p>
            <p>Ms. P.M.K. Summariasera FCA</p>
            <p>T.J.S. Rajasthan FCA</p>
            <p>W.K.D.C. Averymans FCA</p>
            <p>Ms. D.K.D.T.W. Roenge FCA</p>
            <p>Ms. R.T.W.R. Ramaswaran FCA</p>
            <p>WWJ J.C. Devan FCA</p>
            <p>CA J.I. Karamantra FCA</p>
            <p>R.H. Rajan FCA</p>
            <p>A.M.R.P. Alathakoon ACA</p>
            <p>S.R.I. Peters FCMM (UK)</p>
            <p>L.L.A. Altamy et al Law</p>
            <p>H.S. Goorawadzine ACA</p>
            <p>Ms. F.R Ziyani FCMM (UK), FCTI</p>
            <p>K. Somasundaram ACMA (UK)</p>
            <p>R. G. H. Reddella ACA</p>
            <p>Ms. D. Corsa Dhamaratne</p>
          </div>
        </div>

        {/* Page Reference */}
        <div className="bg-cardGreen p-4 rounded-lg text-center">
          <p>LB Finance PLC Integrated Annual Report 2024/25 351-354</p>
        </div>
      </div>
    </div>
  );
}
