import React from 'react';

export default function GovernanceProcesses() {
  return (
    <div className="corporate-governance p-6 bg-themeGreen max-h-[70vh] overflow-y-auto custom-scrollbar">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">CORPORATE GOVERNANCE</h1>
      </header>

      <div className="space-y-8">
        <div className="mb-4">
          <p className="mb-6">
            The Board and Board Sub Committees are supported by Executive
            Management Committees which are listed below:
          </p>
        </div>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border mb-8">
            <thead>
              <tr className="bg-cardGreen">
                <th className="border border-white p-2 text-left">
                  Executive Management Committee
                </th>
                <th className="border border-white p-2 text-left">Tasks</th>
                <th className="border border-white p-2 text-left">Members</th>
                <th className="border border-white p-2 text-left">
                  Frequency of Meetings
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white p-2 font-semibold">
                  IT Security and Steering Committee (ITSSC)
                </td>
                <td className="border border-white p-2">
                  To ensure that IT strategy is aligned with the strategic goals
                  of the Company whilst its top most mandate is to find and
                  align business solutions that may leverage technology. ITSSC
                  also looks into information security-related matters on a
                  regular basis
                </td>
                <td className="border border-white p-2">
                  <ul className="list-disc pl-5">
                    <li>Managing Director</li>
                    <li>Deputy Managing Director</li>
                    <li>Executive Director - Asset Management</li>
                    <li>Chief Financial Officer</li>
                    <li>Chief Information Officer</li>
                    <li>Chief Information Security Officer</li>
                    <li>Representatives from relevant departments</li>
                  </ul>
                </td>
                <td className="border border-white p-2">Every other month</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2 font-semibold">
                  Asset and Liability Committee (ALCO)
                </td>
                <td className="border border-white p-2">
                  To monitor and manage the assets and liabilities of the
                  Company and also overall liquidity position to keep the
                  Company's liquidity at healthy levels, whilst satisfying
                  regulatory requirements
                </td>
                <td className="border border-white p-2">
                  <ul className="list-disc pl-5">
                    <li>Managing Director</li>
                    <li>Deputy Managing Director</li>
                    <li>Executive Directors</li>
                    <li>AGM - Treasury</li>
                    <li>Senior DGM - Deposits</li>
                    <li>Chief Financial Officer</li>
                    <li>Assistant General Manager - Risk Management</li>
                  </ul>
                </td>
                <td className="border border-white p-2">Monthly</td>
              </tr>
              <tr>
                <td className="border border-white p-2 font-semibold">
                  Credit Committee (CC)
                </td>
                <td className="border border-white p-2">
                  The Committee shall be responsible for laying out the overall
                  credit policy for the Company. This includes setting lending
                  guidelines in conformity with credit risk appetite set by the
                  Board of Directors
                </td>
                <td className="border border-white p-2">
                  <ul className="list-disc pl-5">
                    <li>Managing Director</li>
                    <li>Deputy Managing Director</li>
                    <li>Executive Directors</li>
                    <li>Deputy General Manager - Credit</li>
                    <li>Chief Financial Officer</li>
                    <li>Assistant General Manager - Risk Management</li>
                    <li>Senior Manager - BPD</li>
                  </ul>
                </td>
                <td className="border border-white p-2">Quarterly</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2 font-semibold">
                  Sustainability Committee (SC)
                </td>
                <td className="border border-white p-2">
                  The formulation and the review of the Company's Sustainability
                  policy, and ensuring such activities are integrated into the
                  Company's operations. Keeping in line with the Company's ESG
                  focus, the Committee is tasked with the responsibility of
                  steering the Company's policy on sustainability which aimed at
                  uplifting the communities we work with and preserving the
                  environment
                </td>
                <td className="border border-white p-2">
                  <ul className="list-disc pl-5">
                    <li>Deputy Managing Director</li>
                    <li>Chief Financial Officer</li>
                    <li>AGM - Treasury</li>
                    <li>
                      Senior Manager - Digital Strategy and Sustainability
                    </li>
                    <li>Representatives from relevant departments</li>
                  </ul>
                </td>
                <td className="border border-white p-2">Quarterly</td>
              </tr>
              <tr>
                <td className="border border-white p-2 font-semibold">
                  Business Continuity Management Steering Committee (BCMSC)
                </td>
                <td className="border border-white p-2">
                  Committee is responsible for aligning BCM goals with business
                  goals and provides strategic direction and support in
                  establishing, implementing, operating, monitoring, reviewing
                  and improving the business continuity
                </td>
                <td className="border border-white p-2">
                  <ul className="list-disc pl-5">
                    <li>Deputy Managing Director</li>
                    <li>Senior Manager - BPD</li>
                    <li>Representatives from the relevant departments</li>
                  </ul>
                </td>
                <td className="border border-white p-2">Quarterly</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2 font-semibold">
                  Operational Risk Management Committee (ORMC)
                </td>
                <td className="border border-white p-2">
                  Identify, Assess, Manage and report risk relating to
                  operations of the Company
                </td>
                <td className="border border-white p-2">
                  <ul className="list-disc pl-5">
                    <li>Deputy Managing Director</li>
                    <li>Executive Directors</li>
                    <li>Chief Risk Officer</li>
                    <li>Chief Financial Officer</li>
                    <li>Chief Internal Auditor</li>
                    <li>Compliance Officer</li>
                  </ul>
                </td>
                <td className="border border-white p-2">Quarterly</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
