export default function GRIReporting6() {
  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
          <div className="bg-white text-blue rounded-lg p-6 mt-8">
            <p>The governance structure of the Company is as follows:</p>
            <img
              src="/images/annual-report/goverance-structure.png"
              alt="governance structure"
              className="w-full"
            />
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#d3d8eb] rounded-lg">
            <div className="p-4">
              <div className="rounded-lg p-4 bg-[#466fb4] text-white h-full flex flex-col justify-center">
                <p>Role of Managing Director/</p>
                <p>Chief Executive Officer</p>
              </div>
            </div>
            <div className="rounded-lg p-4 text-blue">
              <ul className="list-disc list-inside">
                <li>
                  Implement business and risk strategies in order to achieve the
                  LBF’s strategic objectives
                </li>
                <li>
                  Establish an appropriate management structure that promotes
                  accountability, and transparency throughout LBF’s operations,
                  and preserves the effectiveness and independence of control
                  functions
                </li>
                <li>
                  Promote, together with the Board, a sound corporate culture
                  within LBF which reinforces ethical, prudent and professional
                  behaviour
                </li>
                <li>
                  Ensure implementation of proper compliance culture and being
                  accountable for accurate submission of information to the
                  regulator
                </li>
                <li>
                  Strengthen the regulatory and supervisory compliance framework
                </li>
                <li>
                  Address the supervisory concerns and non-compliance with
                  regulatory requirements or internal policies in a timely and
                  appropriate manner
                </li>
                <li>
                  Devote the whole of the professional time to the service of
                  LBF and shall not carry on any other business, except as a
                  Non-Executive Director of another Company
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#cee8d2] rounded-lg">
            <div className="p-4">
              <div className="rounded-lg p-4 bg-[#58c07d] text-white h-full flex flex-col justify-center">
                <p>Role of Senior Director</p>
              </div>
            </div>
            <div className="rounded-lg p-4 text-blue">
              <ul className="list-disc list-inside">
                <li>
                  Bring an objective and unbiased perspective to the Board
                </li>
                <li>
                  Participate in Board meetings, provide expertise, and
                  contribute to strategic decision-making
                </li>
                <li>
                  Contribute to performance evaluation of MD/CEO’s performance
                  evaluation and succession planning
                </li>
                <li>
                  Conduct semi-annual meetings with only independent directors
                  to find out if there are any concerns
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md shadow-md mt-8">
            <h2 className="text-[#0A3D5F] font-bold">Work of Committees</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white mt-4 text-blue">
                <thead className="text-blue">
                  <tr>
                    <th className="text-left py-2 px-4 border-b-2 border-blue">
                      Committee
                    </th>
                    <th className="text-left py-2 px-4 border-b-2 border-blue">
                      Area of Oversight
                    </th>
                    <th className="text-left py-2 px-4 border-b-2 border-blue">
                      Link to Strategy
                    </th>
                    <th className="text-left py-2 px-4 border-b-2 border-blue">
                      Link to Capital
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-blue px-4 py-2">
                      <strong>
                        Board Nominations & Governance Committee (BNGC)
                      </strong>{' '}
                      <br /> Mr. Ashane Jayasekara - Chairperson <br /> Mr. G A
                      R D Prasanna <br /> Ms. Ashwini Natesan
                    </td>
                    <td className="border-b border-blue px-4 py-2">
                      <ul className="list-disc pl-5">
                        <li>
                          Review the Board structure, size, composition and
                          competencies
                        </li>
                        <li>Appointment of Board of Directors</li>
                        <li>
                          Overseeing the Board and the Senior Management
                          succession planning
                        </li>
                        <li>
                          Oversight the overall Governance Framework of the
                          Company
                        </li>
                      </ul>
                    </td>
                    <td className="border-b border-blue px-4 py-2 text-center">
                      HC, SC
                    </td>
                    <td className="border-b border-blue px-4 py-2 text-center">
                      FC, IC
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-blue px-4 py-2">
                      <strong>Board Audit Committee (BAC)</strong> <br /> Ms.
                      Yogadinuha Bhaskaran - Chairperson <br /> Mr. Ashane
                      Jayasekara <br /> Ms. Ashwini Natesan
                    </td>
                    <td className="border-b border-blue px-4 py-2">
                      <ul className="list-disc pl-5">
                        <li>
                          Reviewing the accuracy and integrity of the financial
                          reporting
                        </li>
                        <li>Internal and external assurance</li>
                        <li>
                          Reviewing the design and effectiveness of internal
                          control system and risk management
                        </li>
                      </ul>
                    </td>
                    <td className="border-b border-blue px-4 py-2 text-center">
                      FC, MC, IC
                    </td>
                    <td className="border-b border-blue px-4 py-2 text-center">
                      HC
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-blue px-4 py-2">
                      <strong>
                        Board Human Resource and Remuneration Committee (BHRRC)
                      </strong>{' '}
                      <br /> Mr. Ashane Jayasekara - Chairperson <br /> Mr. G A
                      R D Prasanna <br /> Ms. Yanika Amaraekera
                    </td>
                    <td className="border-b border-blue px-4 py-2">
                      <ul className="list-disc pl-5">
                        <li>Remuneration policy</li>
                        <li>
                          Remuneration and compensations of Directors, Senior
                          Management and staff salaries in general
                        </li>
                        <li>Structure for staff performance evaluation</li>
                      </ul>
                    </td>
                    <td className="border-b border-blue px-4 py-2 text-center">
                      FC, MC
                    </td>
                    <td className="border-b border-blue px-4 py-2 text-center">
                      HC
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-blue px-4 py-2">
                      <strong>
                        Board Integrated Risk Management Committee (BIRMC)
                      </strong>{' '}
                      <br /> Mr. Ashane Jayasekara - Chairperson <br /> Ms.
                      Yogadinuha Bhaskaran <br /> Ms. Ashwini Natesan
                    </td>
                    <td className="border-b border-blue px-4 py-2">
                      <ul className="list-disc pl-5">
                        <li>Risk Management Framework</li>
                        <li>Risk measurement, monitoring and management</li>
                        <li>
                          Compliance with regulatory and internal prudential
                          requirements
                        </li>
                        <li>Reviewing the business continuity planning</li>
                      </ul>
                    </td>
                    <td className="border-b border-blue px-4 py-2 text-center">
                      IC, SC, NC
                    </td>
                    <td className="border-b border-blue px-4 py-2 text-center">
                      FC, MC, HC
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-blue px-4 py-2">
                      <strong>
                        Board Related Party Transactions Review Committee
                        (BRPTRC)
                      </strong>{' '}
                      <br /> Ms. Ashwini Natesan - Chairperson <br /> Mr.
                      Dharamadasa Rangalle
                    </td>
                    <td className="border-b border-blue px-4 py-2">
                      <ul className="list-disc pl-5">
                        <li>Related party transaction policy</li>
                        <li>
                          Providing independent review, approval and oversight
                          of RPT
                        </li>
                        <li>Ensuring relevant market disclosures</li>
                      </ul>
                    </td>
                    <td className="border-b border-blue px-4 py-2 text-center">
                      HC, IC, SC
                    </td>
                    <td className="border-b border-blue px-4 py-2 text-center">
                      FC
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-blue px-4 py-2">
                      <strong>
                        Board Information Security Committee (BISC)
                      </strong>{' '}
                      <br /> Ms. Ashwini Natesan - Chairperson <br /> Mr. B D A
                      Perera
                    </td>
                    <td className="border-b border-blue px-4 py-2">
                      <ul className="list-disc pl-5">
                        <li>
                          Strengthen the information security and technology
                          risk resilience process
                        </li>
                        <li>
                          Continuous evaluation and improvement of
                          information/data security policies controls and
                          practices
                        </li>
                      </ul>
                    </td>
                    <td className="border-b border-blue px-4 py-2 text-center">
                      IC, SC, NC
                    </td>
                    <td className="border-b border-blue px-4 py-2 text-center">
                      FC, MC
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-blue px-4 py-2">
                      <strong>Board Sustainability Committee (BSC)</strong>{' '}
                      <br /> Ms. Yanika Amaraekera - Chairperson <br /> Mr. G A
                      R D Prasanna <br /> Mr. Niroshan Udage
                    </td>
                    <td className="border-b border-blue px-4 py-2">
                      <ul className="list-disc pl-5">
                        <li>
                          Oversight of processes in place to identify and manage
                          sustainability related risks and opportunities
                        </li>
                        <li>
                          Review the measures taken to ensure the long-term
                          sustainability of the Company in its ESG dimensions
                        </li>
                        <li>
                          Review the Company&#39;s plans and actions with regard
                          to ESG/Sustainability topics
                        </li>
                      </ul>
                    </td>
                    <td className="border-b border-blue px-4 py-2 text-center">
                      HC, IC, SC, NC
                    </td>
                    <td className="border-b border-blue px-4 py-2 text-center">
                      FC, MC, HC
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8">
            <div className="bg-white text-blue p-6 rounded-lg">
              <p className="mb-6">
                The Board and Board Sub Committees are supported by Executive
                Management Committees which are listed below:
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white text-blue">
                  <thead>
                    <tr className="bg-white text-left">
                      <th className="px-6 py-3 border-b-2 border-blue text-blue">
                        Executive Management Committee
                      </th>
                      <th className="px-6 py-3 border-b-2 border-blue text-blue">
                        Tasks
                      </th>
                      <th className="px-6 py-3 border-b-2 border-blue text-blue">
                        Members
                      </th>
                      <th className="px-6 py-3 border-b-2 border-blue text-blue">
                        Frequency of Meetings
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-6 py-4 border-b border-blue">
                        IT Security & Steering Committee (ITSSC)
                      </td>
                      <td className="px-6 py-4 border-b border-blue">
                        To ensure that IT strategy is aligned with the strategic
                        goals of the Company whilst its top most mandate is to
                        find and align business solutions that may leverage
                        technology. ITSSC also looks into information
                        security-related matters on a regular basis.
                      </td>
                      <td className="px-6 py-4 border-b border-blue">
                        <ul className="list-disc list-inside">
                          <li>Managing Director</li>
                          <li>Deputy Managing Director</li>
                          <li>Executive Director - Asset Management</li>
                          <li>Chief Financial Officer</li>
                          <li>Chief Information Officer</li>
                          <li>Chief Information Security Officer</li>
                          <li>Representatives from relevant departments</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 border-b border-blue">
                        Every other month
                      </td>
                    </tr>

                    {/* Assets & Liability Committee (ALCO) */}
                    <tr>
                      <td className="px-6 py-4 border-b border-blue">
                        Assets & Liability Committee (ALCO)
                      </td>
                      <td className="px-6 py-4 border-b border-blue">
                        To monitor and manage the assets and liabilities of the
                        Company and also overall liquidity position to keep the
                        Company’s liquidity at healthy levels, whilst satisfying
                        regulatory requirements.
                      </td>
                      <td className="px-6 py-4 border-b border-blue">
                        <ul className="list-disc list-inside">
                          <li>Managing Director</li>
                          <li>Deputy Managing Director</li>
                          <li>Executive Directors</li>
                          <li>Head of Treasury</li>
                          <li>Head of Deposits</li>
                          <li>Chief Financial Officer</li>
                          <li>Assistant General Manager – Risk Management</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 border-b border-blue">
                        Monthly
                      </td>
                    </tr>

                    {/* Credit Committee (CC) */}
                    <tr>
                      <td className="px-6 py-4 border-b border-blue">
                        Credit Committee (CC)
                      </td>
                      <td className="px-6 py-4 border-b border-blue">
                        The committee shall be responsible for laying out the
                        overall credit policy for the Company. This includes
                        setting lending guidelines in conformity with credit
                        risk appetite set by the Board of Directors.
                      </td>
                      <td className="px-6 py-4 border-b border-blue">
                        <ul className="list-disc list-inside">
                          <li>Managing Director</li>
                          <li>Deputy Managing Director</li>
                          <li>Executive Directors</li>
                          <li>Deputy General Manager - Credit</li>
                          <li>Chief Financial Officer</li>
                          <li>Assistant General Manager – Risk Management</li>
                          <li>Senior Manager - BPD</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 border-b border-blue">
                        Quarterly
                      </td>
                    </tr>

                    {/* Sustainability Committee (SC) */}
                    <tr>
                      <td className="px-6 py-4 border-b border-blue">
                        Sustainability Committee (SC)
                      </td>
                      <td className="px-6 py-4 border-b border-blue">
                        The formulation and the review of the Company’s
                        Sustainability policy, and ensuring such activities are
                        integrated into the Company’s operations. Keeping in
                        line with the Company’s Environment, Social and
                        Governance (ESG) focus, the Committee is tasked with the
                        responsibility of steering the Company’s policy on
                        sustainability which aimed at uplifting the communities
                        which work with and preserving the environment.
                      </td>
                      <td className="px-6 py-4 border-b border-blue">
                        <ul className="list-disc list-inside">
                          <li>Deputy Managing Director</li>
                          <li>Chief Financial Officer</li>
                          <li>Head of Treasury</li>
                          <li>
                            Senior Manager - Digital Strategy and Sustainability
                          </li>
                          <li>Representatives from relevant departments</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 border-b border-blue">
                        Meets when required
                      </td>
                    </tr>

                    {/* Business Continuity Management Steering Committee (BCMSC) */}
                    <tr>
                      <td className="px-6 py-4 border-b border-blue">
                        Business Continuity Management Steering Committee
                        (BCMSC)
                      </td>
                      <td className="px-6 py-4 border-b border-blue">
                        Committee is responsible for aligning BCM goals with
                        business goals and provides strategic direction and
                        support in establishing, implementing, operating,
                        monitoring, reviewing and improving the BCMSC.
                      </td>
                      <td className="px-6 py-4 border-b border-blue">
                        <ul className="list-disc list-inside">
                          <li>Deputy Managing Director</li>
                          <li>Senior Manager - BPD</li>
                          <li>Representatives from the relevant departments</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 border-b border-blue">
                        Meets when required
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
