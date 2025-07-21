import React from 'react';
import Image from 'next/image';

export default function ContributingToUNSDGs() {
  return (
    <div className="annual-report p-6 bg-themeGreen max-h-[70vh] overflow-y-auto">
      <h1 className="text-4xl font-bold mb-4">CONTRIBUTING TO THE UN SDGs</h1>

      <div className="bg-greeen2 p-3 rounded-lg mb-8">
        <div className="bg-cardGreen p-4 rounded-lg mb-6">
          <p>
            Our dedication to a sustainable future at LBF is a driving force,
            deeply intertwined with our active contribution to the UN
            Sustainable Development Goals (SDGs). Our initiatives are crafted to
            stimulate economic prosperity, uphold environmental stewardship, and
            enhance social well-being. By embedding the SDGs into the core of
            our business strategies, we aim to deliver a holistic and positive
            impact, creating lasting value for our customers, the communities we
            serve, and the planet.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-cardGreen rounded-lg">
            <thead>
              <tr className="border-b border-[#F3A847]">
                <th className="text-left py-3 px-4">
                  SDGs and Underlying Targets
                </th>
                <th className="text-left py-3 px-4">
                  Initiatives Implemented by LB Finance
                </th>
                <th className="text-left py-3 px-4">Page</th>
              </tr>
            </thead>
            <tbody>
              {/* No Poverty */}
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-semibold">No Poverty (1.4)</td>
                <td className="py-3 px-4">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Conducted financial inclusion programmes</li>
                    <li>Offered microfinance facilities in Myanmar</li>
                  </ul>
                </td>
                <td className="py-3 px-4">
                  <p>33 - 36</p>
                  <p>241 - 244</p>
                </td>
              </tr>

              {/* Zero Hunger */}
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-semibold">
                  Zero Hunger (2.3, 2.4)
                </td>
                <td className="py-3 px-4">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Launched the LB CIM mobile merchant app for SME
                      development
                    </li>
                    <li>Organised capacity building for entrepreneurs</li>
                  </ul>
                </td>
                <td className="py-3 px-4">
                  <p>34</p>
                  <p>204</p>
                </td>
              </tr>

              {/* Good Health & Well-Being */}
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-semibold">
                  Good Health & Well-Being (3.1, 3.2, 3.7, 3.8)
                </td>
                <td className="py-3 px-4">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Provided health facilities for selected locations</li>
                    <li>Conducted mental and physical health programmes</li>
                  </ul>
                </td>
                <td className="py-3 px-4">
                  <p>203</p>
                  <p>201, 203</p>
                </td>
              </tr>

              {/* Quality Education */}
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-semibold">
                  Quality Education (4.1, 4.2, 4.4, 4.5, 4.6)
                </td>
                <td className="py-3 px-4">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Continuation of pre-school development project</li>
                    <li>
                      Initiated learnerships and targeted business training
                      programmes to foster skill development and enhance
                      professional capabilities
                    </li>
                    <li>
                      Supported the development of Sri Lanka's education system
                      through the implementation of targeted awareness
                      programmes
                    </li>
                  </ul>
                </td>
                <td className="py-3 px-4">
                  <p>202</p>
                  <p>204</p>
                  <p>204</p>
                </td>
              </tr>

              {/* Gender Equality */}
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-semibold">
                  Gender Equality (5.1, 5.2, 5.5, 5b)
                </td>
                <td className="py-3 px-4">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Initiated women empowerment programmes</li>
                    <li>
                      Launched a women-centric gold loan product to expand
                      financial accessibility
                    </li>
                  </ul>
                </td>
                <td className="py-3 px-4">
                  <p>200</p>
                  <p>35, 178, 231</p>
                </td>
              </tr>

              {/* Clean Water and Sanitation */}
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-semibold">
                  Clean Water and Sanitation (6.1)
                </td>
                <td className="py-3 px-4">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Provided purified drinking water to students at Sunanda
                      Maha Vidyalaya, Padeniya
                    </li>
                  </ul>
                </td>
                <td className="py-3 px-4">203</td>
              </tr>

              {/* Affordable and Clean Energy */}
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-semibold">
                  Affordable and Clean Energy (7.2, 7.3)
                </td>
                <td className="py-3 px-4">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Converted 40 branches to hybrid solar power systems</li>
                    <li>Conducted energy audits</li>
                    <li>Introduced a dedicated Solar Loan product</li>
                  </ul>
                </td>
                <td className="py-3 px-4">
                  <p>106</p>
                  <p>106</p>
                  <p>116</p>
                </td>
              </tr>

              {/* Decent Work and Economic Growth */}
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-semibold">
                  Decent Work and Economic Growth (8.2, 8.3, 8.5, 8.6, 8.10)
                </td>
                <td className="py-3 px-4">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Enhanced SME service offerings and launched m-commerce
                      platforms to support business growth
                    </li>
                    <li>
                      Championed digital transformation in Sri Lanka by
                      implementing and promoting QR-based payment solutions
                    </li>
                  </ul>
                </td>
                <td className="py-3 px-4">
                  <p>204</p>
                  <p>181</p>
                </td>
              </tr>

              {/* Industry, Innovation and Infrastructure */}
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-semibold">
                  Industry, Innovation and Infrastructure (9.1, 9.3, 9.4)
                </td>
                <td className="py-3 px-4">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Inclusion through rural connectivity by opening branches
                    </li>
                    <li>
                      Strategically deploying disruptive technologies, such as
                      Artificial Intelligence (AI), to optimise business
                      processes
                    </li>
                  </ul>
                </td>
                <td className="py-3 px-4">
                  <p>33</p>
                  <p>181</p>
                </td>
              </tr>

              {/* Reduced Inequalities */}
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-semibold">
                  Reduced Inequalities (10.2)
                </td>
                <td className="py-3 px-4">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Developing and delivering targeted financial solutions to
                      empower marginalised communities
                    </li>
                  </ul>
                </td>
                <td className="py-3 px-4">35</td>
              </tr>

              {/* Sustainable Cities and Communities */}
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-semibold">
                  Sustainable Cities and Communities (11.3, 11.7)
                </td>
                <td className="py-3 px-4">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Implemented urban tree planting and landscaping programmes
                      to improve local environments and community well-being
                    </li>
                    <li>
                      Expanding our product and service offerings through
                      accessible and user-friendly digital platforms
                    </li>
                  </ul>
                </td>
                <td className="py-3 px-4">
                  <p>216</p>
                  <p>181</p>
                </td>
              </tr>

              {/* Responsible Consumption and Production */}
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-semibold">
                  Responsible Consumption and Production (12.5)
                </td>
                <td className="py-3 px-4">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Instituted comprehensive waste management programmes
                      focused on reduction, reuse, and recycling
                    </li>
                    <li>
                      Promoted recycling and responsible use of plastics within
                      our operations and community initiatives
                    </li>
                    <li>
                      Pursuing and achieving green building accreditation for
                      our facilities to minimise environmental impact
                    </li>
                  </ul>
                </td>
                <td className="py-3 px-4">
                  <p>219</p>
                  <p>105</p>
                  <p>115</p>
                </td>
              </tr>

              {/* Climate Action */}
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-semibold">
                  Climate Action (13.1, 13.3)
                </td>
                <td className="py-3 px-4">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Implementing targeted climate programmes and robust energy
                      efficiency initiatives across operations
                    </li>
                    <li>
                      Transitioning towards greater reliance on renewable energy
                      sources for our operational needs
                    </li>
                  </ul>
                </td>
                <td className="py-3 px-4">
                  <p>95, 213</p>
                  <p>213</p>
                </td>
              </tr>

              {/* Life Below Water */}
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-semibold">
                  Life Below Water (14.2)
                </td>
                <td className="py-3 px-4">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Protection for marine eco system through projects such as
                      beach care taker and colour fish project
                    </li>
                  </ul>
                </td>
                <td className="py-3 px-4">217</td>
              </tr>

              {/* Life on Land */}
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-semibold">
                  Life on Land (15.2, 15.7, 15.5, 15c)
                </td>
                <td className="py-3 px-4">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Implemented reforestation programmes in the Yagirala
                      forest reserve
                    </li>
                    <li>
                      Instituted a tree planting programme integrated with every
                      new branch opening
                    </li>
                    <li>Launched a mangrove planting programme in Ittapana</li>
                  </ul>
                </td>
                <td className="py-3 px-4">
                  <p>216</p>
                  <p>215</p>
                  <p>215</p>
                </td>
              </tr>

              {/* Peace, Justice and Strong Institutions */}
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-semibold">
                  Peace, Justice and Strong Institutions (16.4, 16.5, 16.6)
                </td>
                <td className="py-3 px-4">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Implemented anti-money laundering and anti-bribery
                      initiatives within the organisation
                    </li>
                  </ul>
                </td>
                <td className="py-3 px-4">
                  <p>277, 296, 313, 335</p>
                </td>
              </tr>

              {/* Partnerships for the Goals */}
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-semibold">
                  Partnerships for the Goals (17.7, 17.8, 17.17)
                </td>
                <td className="py-3 px-4">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Collaborated with the UN Global Compact to advance shared
                      sustainability goals
                    </li>
                    <li>
                      Nurtured sustainable partnerships with government and
                      private organisations
                    </li>
                  </ul>
                </td>
                <td className="py-3 px-4">
                  <p>303</p>
                  <p>215 -218</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
