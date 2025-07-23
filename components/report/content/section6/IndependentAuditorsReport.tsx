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
          {/* Report on the Audit Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
              Report on the Audit of the Financial Statements
            </h2>

            {/* Opinion Section */}
            <div className="p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Opinion</h3>
              <p>
                We have audited the financial statements of LB Finance PLC ('the
                Company') and the consolidated financial statements of the
                Company and its subsidiaries ('the Group'), which comprise the
                statement of financial position as at March 31, 2025, statement
                of profit or loss and other comprehensive income, statement of
                changes in equity and statement of cash flows for the year then
                ended, and notes to the financial statements, including material
                accounting policies and other explanatory information.
              </p>
              <p className="mt-2">
                In our opinion, the accompanying financial statements of the
                Company and the Group give a true and fair view of the financial
                position of the Company and the Group as at March 31, 2025, and
                of its financial performance and its cash flows for the year
                then ended in accordance with Sri Lanka Accounting Standards.
              </p>
            </div>

            {/* Basis for Opinion Section */}
            <div className="p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Basis for Opinion</h3>
              <p>
                We conducted our audit in accordance with Sri Lanka Auditing
                Standards (SLAuSs). Our responsibilities under those standards
                are further described in the Auditor's Responsibilities for the
                Audit of the Financial Statements section of our report. We are
                independent of the Group in accordance with the Code of Ethics
                for professional Accountants issued by CA Sri Lanka (Code of
                Ethics) and we have fulfilled our other ethical responsibilities
                in accordance with the Code of Ethics. We believe that the audit
                evidence we have obtained is sufficient and appropriate to
                provide a basis for our opinion.
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
                Company and the consolidated financial statements as a whole,
                and in forming our opinion thereon, and we do not provide a
                separate opinion on these matters.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-[#0A3D5F] text-white">
                  <th className="border border-gray-300 p-3 text-left">
                    Risk Description
                  </th>
                  <th className="border border-gray-300 p-3 text-left">
                    Our Responses
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 align-top">
                    <p className="font-semibold mb-2">
                      Allowances for Expected Credit Losses of Financial Assets
                      at Amortized Cost - Loans and Receivables
                    </p>
                    <p className="mb-2">
                      Allowances for expected credit losses of financial assets
                      amounting to 7.1 Bn arising from loans and receivables of
                      LKR 204.8 Bn (Note 2.17) is determined by the management
                      based on the accounting policies described in Note 2.18.
                      High degree of complexity and judgment are involved in
                      estimating Expected Credit Loss (ECL) on Loans and
                      receivables to the customers.
                    </p>
                    <p className="mb-2">
                      Collective impairment is calculated using internally
                      developed statistical models which are inherently complex,
                      and judgment is required in developing the models.
                    </p>
                    <p>
                      There is a number of key inputs and assumptions used by
                      the Company in applying the requirements of SLFRS 9 to the
                      models including definition of significant increase in
                      credit risk (SICR), selection and input of forward-
                      looking information, past due information, historical loss
                      parameters etc.
                    </p>
                  </td>
                  <td className="border border-gray-300 p-3 align-top">
                    <p className="mb-2">
                      Our audit procedures to assess the allowances for ECL
                      included the following:
                    </p>
                    <p className="mb-2">
                      Testing key controls of the Company in relation to:
                    </p>
                    <ul className="list-disc pl-5 mb-2">
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
                    <p className="mb-2">
                      Assessing the adequacy of collective impairment by:
                    </p>
                    <ul className="list-disc pl-5 mb-2">
                      <li>
                        Assessing the accuracy of the data used in the ECL
                        models by checking a sample of data fields such as
                        account balance, days past due, interest rate to
                        relevant source systems.
                      </li>
                    </ul>
                    <p>
                      Working with our Financial Risk Management (FRM)
                      specialist we carried out the following procedures:
                    </p>
                    <ul className="list-disc pl-5">
                      <li>
                        Assessed the accuracy of the ECL model estimates by
                        re-performing, for a sample of loans and comparing this
                        to the amount recorded by the Company;
                      </li>
                      <li>
                        Examined the model design and calculation approach
                        compared with industry standards.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
