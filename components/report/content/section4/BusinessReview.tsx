import React from 'react';

export default function BusinessReview() {
  return (
    <div className="business-review p-6 bg-themeGreen max-h-[70vh] overflow-y-auto">
      <h1 className="text-4xl font-bold mb-4">BUSINESS REVIEW</h1>

      <div className="space-y-8">
        {/* Overview Section */}
        <div>
          <p className="mb-4">
            LB Finance maintains a strong, customer-centric business model built
            around a diversified portfolio that addresses the evolving financial
            needs of individuals and businesses. The company operates through
            three core business segments: Funding, Lending and Value Added
            Services - each playing a strategic role in delivering value to
            customers while ensuring sustainable growth.
          </p>
          <p>
            Our extensive branch network and dedicated teams enable seamless
            service delivery, while continued investments in digital
            infrastructure have significantly enhanced customer convenience and
            operational efficiency. From intuitive mobile platforms to
            integrated service channels, LB Finance remains committed to
            blending personalised service with digital innovation to create a
            responsive and future-ready financial ecosystem.
          </p>
        </div>

        {/* Core Business Segments Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            CORE BUSINESS SEGMENTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Lending Column */}
            <div className="bg-cardGreen p-4 rounded-lg">
              <h3 className="font-bold mb-2">LENDING</h3>
              <p className="text-sm mb-4">
                Our financing strategy, aligned with our Company's goals, aims
                to make LBF the top lending solutions provider in Sri Lanka. We
                focus on enhancing our lending portfolio for individuals and
                businesses through activities such as leasing, vehicle loans,
                mortgage loans, gold loans, and other credit options to achieve
                our long-term, medium-term, and short-term objectives.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white text-sm">
                  <thead>
                    <tr className="bg-[#0A3D5F] text-white">
                      <th className="py-2 px-4 text-left">Category</th>
                      <th className="py-2 px-4 text-left">Value (Rs. Mn)</th>
                      <th className="py-2 px-4 text-left">Lending Mix (%)</th>
                      <th className="py-2 px-4 text-left">
                        Interest income (Rs. Mn)
                      </th>
                      <th className="py-2 px-4 text-left">
                        Contribution to Interest Income(%)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Lease Receivables', '36,035', '18%', '9,462', '24%'],
                      ['Vehicle Loans', '46,106', '23%', '10,176', '25%'],
                      ['Power Drafts', '17,698', '9%', '2,669', '7%'],
                      ['Gold Loans', '83,973', '42%', '15,272', '38%'],
                      ['Mortgage Loans', '2,178', '2%', '647', '2%'],
                      ['Term Loans', '11,777', '6%', '1,776', '4%'],
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? 'bg-[#f7f7f7]' : 'bg-white'}
                      >
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            className="py-2 px-4 border-b border-gray-200"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Funding Column */}
            <div className="bg-cardGreen p-4 rounded-lg">
              <h3 className="font-bold mb-2">FUNDING</h3>
              <p className="text-sm mb-4">
                We deliver a range of deposit and savings solutions, enabling
                customers to capitalise on market opportunities to boost their
                financial capacity. We also focus on fostering enduring customer
                relationships through personalised services.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white text-sm">
                  <thead>
                    <tr className="bg-[#0A3D5F] text-white">
                      <th className="py-2 px-4 text-left">Category</th>
                      <th className="py-2 px-4 text-left">Value (Rs. Mn)</th>
                      <th className="py-2 px-4 text-left">Funding Mix (%)</th>
                      <th className="py-2 px-4 text-left">
                        Interest Expense (Rs. Mn)
                      </th>
                      <th className="py-2 px-4 text-left">
                        Contribution to Interest Expense (%)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Deposits', '138,497', '60%', '13,539', '81%'],
                      ['Bank Borrowings', '42,417', '18%', '3,148', '19%'],
                      ['Equity', '51,266', '22%', '-', '-'],
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? 'bg-[#f7f7f7]' : 'bg-white'}
                      >
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            className="py-2 px-4 border-b border-gray-200"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Value Added Services Column */}
            <div className="bg-cardGreen p-4 rounded-lg">
              <h3 className="font-bold mb-2">VALUE ADDED SERVICES</h3>
              <p className="text-sm mb-4">
                We offer customers streamlined payment systems and a range of
                Value Added Services (VAS) through interconnected channels,
                aiming to give them full control over their finances. With an
                extensive branch network, we efficiently process utility
                payments, foreign currency exchange, and money remittance
                (Western Union) to meet our customers' needs comprehensively.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white text-sm">
                  <thead>
                    <tr className="bg-[#0A3D5F] text-white">
                      <th className="py-2 px-4 text-left">Category</th>
                      <th className="py-2 px-4 text-left">
                        No. of Transactions
                      </th>
                      <th className="py-2 px-4 text-left">
                        Transaction value (Rs. Mn)
                      </th>
                      <th className="py-2 px-4 text-left">Composition</th>
                      <th className="py-2 px-4 text-left">
                        Fee based Income generated (Rs. Mn)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Foreign Currency Exchange', '2,983', '146', '2%', '11'],
                      [
                        'Western Union - Money Remittances',
                        '51,853',
                        '4,554',
                        '76%',
                        '21',
                      ],
                      ['Bill Payments', '928,979', '1,330', '22%', '13'],
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? 'bg-[#f7f7f7]' : 'bg-white'}
                      >
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            className="py-2 px-4 border-b border-gray-200"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            PRODUCTS AND SERVICES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Lending Products */}
            <div className="bg-cardGreen p-4 rounded-lg">
              <h3 className="font-bold mb-2">Lending Products</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>LB Finance Leasing</li>
                <li>LB Finance POWER PLUS</li>
                <li>LB Finance MUL GALA</li>
                <li>LB Finance THREE WHEELER LEASING</li>
                <li>LB Finance POWER DRAFT</li>
                <li>LB Finance Mortage Loans</li>
                <li>LB Finance MOTOR CYCLE LEASING</li>
                <li>LB Finance PERSONAL LOANS</li>
                <li>LB Finance GOLD LOANS</li>
              </ul>
            </div>

            {/* Deposit Products */}
            <div className="bg-cardGreen p-4 rounded-lg">
              <h3 className="font-bold mb-2">Deposit Products</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>LB Finance YASA ISUSRU</li>
                <li>LB Finance LITTLE HEROES</li>
                <li>LB Finance SAVINGS</li>
                <li>LB Finance SALARY PLAN</li>
              </ul>
            </div>

            {/* Value Added Services */}
            <div className="bg-cardGreen p-4 rounded-lg">
              <h3 className="font-bold mb-2">Value Added Services</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>LB Finance Bill Payments</li>
                <li>LB Finance money exchange</li>
                <li>Western Union</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Digital Support and Future Focus Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            DIGITAL TRANSFORMATION
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Digital Support */}
            <div className="bg-cardGreen p-4 rounded-lg">
              <h3 className="font-bold mb-2">DIGITAL SUPPORT</h3>
              <p className="text-sm">
                The Company improved process efficiency and customer experience
                through automation initiatives, including fixed deposit account
                opening and managing the FD portfolio via the CIM app,
                e-statement generation, automated tax certificate issuance, and
                digital due diligence. Automated RMV Process: Digitises the
                manual RMV process, reducing turnaround time and minimising
                errors.
              </p>
            </div>

            {/* Future Focus */}
            <div className="bg-cardGreen p-4 rounded-lg">
              <h3 className="font-bold mb-2">FUTURE FOCUS</h3>
              <p className="text-sm">
                We are shaping the future of lending through smart, secure, and
                seamless solutions. By harnessing technology and data-driven
                insights, we're making borrowing faster, more transparent, and
                tailored to the evolving needs of individuals and businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
