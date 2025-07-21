import React from 'react';
import Image from 'next/image';

export default function CreatingBusinessModel() {
  return (
    <div className="annual-report p-6 bg-themeGreen max-h-[70vh] overflow-y-auto">
      <h1 className="text-4xl font-bold mb-4">
        OUR VALUE CREATING - BUSINESS MODEL
      </h1>

      <div className="bg-greeen2 p-3 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-6">
          Availability and Quality of Our Six Capital Inputs (2023/24)
        </h2>
        <div className="space-y-8">
          {/* Financial Capital Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
              Financial Capital
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cardGreen p-4 rounded-lg">
                <p>
                  Our capital base, diversified sources of deposits, and funding
                  from investors and customers are utilised to support our
                  operations. This includes providing credit, facilitating
                  payments and transactions, and rewarding shareholders for the
                  capital invested through dividends.
                </p>
              </div>
              <div className="bg-cardGreen p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>Deposits: Rs. 122.80 Bn</li>
                  <li>Shareholders’ Equity: Rs. 43.62 Bn</li>
                  <li>Return on Equity: 23.40%</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Manufactured Capital Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
              Manufactured Capital
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cardGreen p-4 rounded-lg">
                <p>
                  Our business structure and operational processes, including
                  our property and equipment, as well as our digital assets such
                  as products, channels, and information technology (IT)
                  systems, provide the framework and mechanics for how we
                  conduct business and create value.
                </p>
              </div>
              <div className="bg-cardGreen p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>Modern IT Systems</li>
                  <li>Technology Platform Investment: Rs. 279 Mn </li>
                  <li>Physical Presence: 200 branches and 24 CDMs</li>
                  <li>Branch Relocations: 02 </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Human Capital Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
              Human Capital
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cardGreen p-4 rounded-lg">
                <p>
                  Our employees, culture, and collective knowledge, skills, and
                  experience enable us to deliver innovative and competitive
                  solutions for our customers, creating value for all
                  stakeholders.
                </p>
              </div>
              <div className="bg-cardGreen p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>4,052 Permanent Employees</li>
                  <li>Salary and Benefits Paid: Rs. 4.09 Bn</li>
                  <li>Training and Skills Development Spent: Rs. 23.22 Mn</li>
                  <li>
                    A Differentiated Culture: customer- and peoplecentered,
                    innovative, competitive, service-focused, and strong in
                    compliance and governance
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Intellectual Capital Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
              Intellectual Capital
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cardGreen p-4 rounded-lg">
                <p>
                  Our intangible assets, including our brand, reputation,
                  innovation capacity, knowledge and expertise, as well as
                  strategic partnerships, play a key role in helping us grow our
                  business.
                </p>
              </div>
              <div className="bg-cardGreen p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>Leading Digital Capabilities</li>
                  <li>
                    A Trusted Brand: LB Finance ranked among the top 28
                    companies in Sri Lanka
                  </li>
                  <li>Brand Value (Brand Finance): Rs. 3,597 Mn</li>
                  <li>
                    Market Leadership and Differentiation: Strong position
                    across various products and segments
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social and Relationship Capital Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
              Social and Relationship Capital
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cardGreen p-4 rounded-lg">
                <p>
                  Stakeholder relationships, including those with customers,
                  business partners, and the communities we operate, are central
                  to our business environment. We recognise the vital role we
                  play in building a thriving society and a strong financial
                  ecosystem.
                </p>
              </div>
              <div className="bg-cardGreen p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>Total Customers: 800,000+</li>
                  <li>
                    Purpose-led Sustainable Development initiatives: Rs. 20.20
                    Mn aligned with UN SDGs
                  </li>
                  <li>Responsible ESG Practices</li>
                  <li>Business Partners: 10,000+</li>
                  <li>Good Relationships with Stakeholders</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Natural Capital Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
              Natural Capital
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cardGreen p-4 rounded-lg">
                <p>
                  The direct use and impact we have on natural resources through
                  our operations, including energy, water, waste, emissions and
                  climate, as well as our influence through our business
                  activities
                </p>
              </div>
              <div className="bg-cardGreen p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>Market-leading ESG Policy</li>
                  <li>
                    A Maturing Environmental Management System: Evaluating the
                    impact of our lending to customers
                  </li>
                  <li>
                    Strong Track Record and Market-leading Capabilities: In
                    renewable energy financing, funding, and our operations
                  </li>
                  <li>Carbon Footprint: 3,982 tCO2e</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Value Section */}
          <div className="grid grid-cols-3 gap-4 text-center font-bold">
            <div className="bg-cardGreen p-4 rounded-lg">
              <h3 className="text-xl text-black mb-6">Risks Impacted</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Market Risk Credit Risk Operational Risk Sustainability Risk
                </li>
                <li>Cybersecurity Risk IT Risk Operational risk</li>
                <li> Market Risk IT Risk Climate Risk </li>
                <li>
                  Operational Risk Sustainability Risk Reputation Risk Climate
                  Risk
                </li>
                <li>Operational Risk Reputation Risk Sustainability Risk</li>
                <li>Climate Risk Reputation Risk Sustainability Risk</li>
              </ul>
            </div>
            <div className="bg-cardGreen p-4 rounded-lg">
              <h3 className="text-xl text-black mb-6">Material Themes</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Sustainable Business Growth</li>
                <li>Future Fit Organisation</li>
                <li>Good Governance and Risk Optimisation</li>
                <li>Supporting Social Cohesion</li>
                <li>Serving and Meeting Customer Needs</li>
              </ul>
            </div>
            <div className="bg-cardGreen p-4 rounded-lg">
              <h3 className="text-xl text-black mb-6">Strategies</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Sustainable Growth</li>
                <li>Customer Centricity</li>
                <li>Digital Leadership</li>
                <li>Positive Impacts</li>
                <li>Empowering People</li>
                <li>Risk Management and Governance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-greeen2 p-3 rounded-lg mb-8 space-y-8">
        <h2 className="text-2xl font-bold mb-6 pt-5">
          Availability and Quality of Our Six Capital Inputs (2023/24)
        </h2>
        {/* Financial Capital Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            Financial Capital
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-cardGreen p-4 rounded-lg">
              <ul className="space-y-2">
                <li>Revenue of Rs. 46.73 billion, a decrease of 5%</li>
                <li>Dividend per share up by 13%</li>
                <li>Return on Equity (ROE) decrease to 3%</li>
                <li>Net Asset Value per share (NAV) up by 18%</li>
              </ul>
            </div>
            <div className="bg-cardGreen p-4 rounded-lg">
              <ul className="space-y-2">
                <li>Strong balance sheet with total assets increased by 19%</li>
                <li>Share price increased by 38% year-on-year</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Manufactured Capital Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            Manufactured Capital
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-cardGreen p-4 rounded-lg">
              <ul className="space-y-2">
                <li>CIM app transactions: Increased by 33%</li>
                <li>03 Branches were relocated for convenience service</li>
                <li>Investment in PPE increased by 8%</li>
              </ul>
            </div>
            <div className="bg-cardGreen p-4 rounded-lg">
              <ul className="space-y-2">
                <li>3 branches opened in Northern and Eastern Province</li>
                <li>Profit per branch Rs. 50 Mn</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Human Capital Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            Human Capital
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-cardGreen p-4 rounded-lg">
              <ul className="space-y-2">
                <li>2,207 new recruitments</li>
                <li>Salaries and benefits increased by 19.7%</li>
                <li>Maintained and managed the retention rate</li>
              </ul>
            </div>
            <div className="bg-cardGreen p-4 rounded-lg">
              <ul className="space-y-2">
                <li>Internal promotions: 1,145</li>
                <li>Investment in training decreased by 7%</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Intellectual Capital Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            Intellectual Capital
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-cardGreen p-4 rounded-lg">
              <ul className="space-y-2">
                <li>Market-leading Digital and Ecosystem Solutions</li>
                <li>
                  LB Finance's rank among companies in Sri Lanka improving to 20
                </li>
              </ul>
            </div>
            <div className="bg-cardGreen p-4 rounded-lg">
              <ul className="space-y-2">
                <li>Developing In-house Systems and Programmes</li>
                <li>
                  Retained scarce skills in areas such as data analytics, IT,
                  risk management, and customised solutions
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social and Relationship Capital Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            Social and Relationship Capital
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-cardGreen p-4 rounded-lg">
              <ul className="space-y-2">
                <li>Customers: Increased by 7% to 850,000+</li>
                <li>CSR Investment: Rs. 27.35 Mn</li>
                <li>
                  Customer Queries: 598 queries, increased by 12% year-on-year
                </li>
              </ul>
            </div>
            <div className="bg-cardGreen p-4 rounded-lg">
              <ul className="space-y-2">
                <li>
                  Customers' NPS recorded at 51% for brand loyalty and 41% for
                  service quality
                </li>
                <li>Direct and indirect tax contributions of Rs. 12.6 Bn</li>
                <li>120 No. of Pre-schools developed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Natural Capital Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            Natural Capital
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-cardGreen p-4 rounded-lg">
              <ul className="space-y-2">
                <li>Green finance portfolio Rs. 7.35 Bn</li>
                <li>Number of Solar panel installation locations: 40</li>
                <li>36,934 tCO₂ e Greenhouse gas emitted to the atmosphere</li>
              </ul>
            </div>
            <div className="bg-cardGreen p-4 rounded-lg">
              <ul className="space-y-2">
                <li>Paper recycled: 52,640 kg</li>
                <li>375 sustainable trees planted</li>
                <li>
                  Tree planting conducted for branch openings to offset the
                  trees removed at the branch installation locations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
