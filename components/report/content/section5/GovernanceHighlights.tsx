import React from 'react';
import Image from 'next/image';

export default function GovernanceHighlights() {
  return (
    <div className="corporate-governance p-6 bg-themeGreen max-h-[70vh] overflow-y-auto">
      <h1 className="text-4xl font-bold mb-4">
        CORPORATE GOVERNANCE HIGHLIGHTS 2024/25
      </h1>

      <div className="space-y-8">
        {/* Board of Directors Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            CORPORATE GOVERNANCE HIGHLIGHTS 2024/25
          </h2>

          {/* First Row of Directors */}
          <div className="mb-8">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-6">
              {/* Director 1 */}
              <div className="bg-cardGreen p-4 rounded-lg">
                <div>
                  <Image
                    src="/images/report/content/Board Priorities.png"
                    alt="Board Priorities"
                    width={420}
                    height={370}
                  />
                </div>
              </div>
              <div className="overflow-x-auto">
                <h2 className="text-2xl font-semibold mb-4">
                  Key Shareholder Communications
                </h2>
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 p-3 text-left">
                        TOPIC
                      </th>
                      <th className="border border-gray-300 p-3 text-left">
                        DATE
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3">
                        Final Dividend announcement
                      </td>
                      <td className="border border-gray-300 p-3">
                        27 May 2024
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">
                        Annual Report 2023/24
                      </td>
                      <td className="border border-gray-300 p-3">
                        04 June 2024
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">
                        Appointment of Company Secretary
                      </td>
                      <td className="border border-gray-300 p-3">
                        11 Jun 2024
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">
                        Annual General Meeting
                      </td>
                      <td className="border border-gray-300 p-3">
                        28 June 2024
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">
                        Q1 Performance
                      </td>
                      <td className="border border-gray-300 p-3">
                        17 July 2024
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">
                        Q2 Performance
                      </td>
                      <td className="border border-gray-300 p-3">
                        16 Oct 2024
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">
                        Appointment of Directors
                      </td>
                      <td className="border border-gray-300 p-3">
                        18 Nov 2024
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">
                        Q3 Performance
                      </td>
                      <td className="border border-gray-300 p-3">
                        22 Jan 2025
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">
                        Interim Dividend announcement
                      </td>
                      <td className="border border-gray-300 p-3">
                        19 Feb 2025
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">
                        Q4 Performance
                      </td>
                      <td className="border border-gray-300 p-3">
                        21 May 2025
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Director 2 */}
              <div className="bg-cardGreen p-4 rounded-lg">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    Implementation of SLFRS S1 and S2
                  </h2>
                </div>
                <ul className="list-disc ml-5">
                  <li>
                    Enhancement of composition of BSC by appointing INED with
                    related skills and expertise
                  </li>
                  <li>
                    Broadening the mandate of Board and Management level
                    sustainability committees to align with established
                    standards (SLFRS S1 & S2) and regulatory requirements
                  </li>
                  <li>Implementation of Board approved ESG Policy</li>
                  <li>
                    Adopting an integrated approach to identifying and managing
                    risks and opportunities associated with SLFRS S1 and S2
                  </li>
                  <li>
                    Training and awareness on SLFRS S1 and S2 to the employees
                    including BOD
                  </li>
                  <li>
                    Alignment of integrated risk management framework to cater
                    SLFRS S1 S2 requirements
                  </li>
                </ul>
              </div>

              {/* Director 3 */}
              <div className="bg-cardGreen p-4 rounded-lg">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">IT Governance</h2>
                </div>
                <ul className="list-disc ml-5">
                  <li>Re-certification of ISO 27001:2022</li>
                  <li>
                    Further strengthen the information security and IT
                    Governance team to align with cybersecurity risks
                  </li>
                  <li>
                    Well-structured approach on AI and cybersecurity governance.{' '}
                  </li>
                  <li>
                    Higher investments on information and cybersecurity aspects
                  </li>
                </ul>
              </div>
              {/* Director 3 */}
              <div className="bg-cardGreen p-4 rounded-lg">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    Key governance initiatives
                  </h2>
                </div>
                <ul className="list-disc ml-5">
                  <li>
                    Appointment of two Independent Non-Executive Directors to
                    strengthen the Board’s independence
                  </li>
                  <li>
                    Formation of Operational risk management committee with a
                    TOR
                  </li>
                  <li>
                    Review and update of operational risk management framework
                  </li>
                  <li>Review and update of 70 policies, procedures & TORs</li>
                  <li>Fully adoption of section 9 of CSE listing rules</li>
                </ul>
              </div>
              {/* Director 3 */}
              <div className="bg-cardGreen p-4 rounded-lg">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    Governance Strategies for Future Readiness
                  </h2>
                </div>
                <ul className="list-disc ml-5">
                  <li>
                    Proactive PDPA initiatives – Appointment of DPO, review and
                    update of PDP Policy, implementation of provisions of PDP
                    act
                  </li>
                  <li>
                    Developing Incident reporting mechanism relating to
                    Operational Risk Management
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
