'use client';

import Image from 'next/image';
import EmploymentOppurnuties from '@/public/images/sustainability-goals/employment-oppurnuties.jpg';

export default function NoPovertyPart3() {
  return (
    <div>
      <div className="bg-cardGreen rounded-lg text-black p-8 mb-8">
        <div className="w-full">
          <div className="grid grid-cols-2 auto-rows-auto gap-6 mb-8">
            <div className="flex flex-col gap-5 md:col-span-1">
              <div className="bg-yellow rounded-lg p-6 ">
                <h2 className="text-2xl font-semibold mb-2 text-cardBlue]">
                  2. JOB CREATION
                </h2>
                <h3 className="text-xl font-semibold my-4">
                  From Employment to Empowerment
                </h3>
                <p className="text-white">
                  We empower entrepreneurs to build businesses and create jobs.
                  Our commitment to economic growth extends far beyond our own
                  Company, impacting communities across Sri Lanka.
                </p>
                <div>
                  <div className="border-black rounded-xl p-1">
                    <h3>New Employment Opportunities</h3>
                  </div>
                  <div>
                    <Image
                      src={EmploymentOppurnuties}
                      alt="Job Creation Chart"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-yellow rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">
                  4. EMPOWERING WOMEN
                </h2>
                <p className="text-white">
                  Financial independence is a key driver of social progress, and
                  we are leading the charge in empowering women entrepreneurs
                  and professionals. Our targeted programmes provide customised
                  financial support, mentorship, and networking opportunities,
                  empowering women-owned businesses to thrive and achieve
                  significant growth.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4 text-center">
                  <div>
                    <h3 className="text-2xl font-bold">Rs. 84 Bn</h3>
                    <p className="text-white">
                      Gold Loans to women entrepreneurs
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">2,090</h3>
                    <p className="text-white">
                      Woman Representational workforce
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Rs. 374 Mn</h3>
                    <p className="text-white">
                      LB CIM Business and Personal Loans disbursed to women
                      entrepreneurs
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">10,289</h3>
                    <p className="text-white">
                      Number of vehicle financing facilities granted to women
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow md:col-span-1 auto-rows-auto rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">
                3. ECONOMIC VALUE CREATION
              </h2>
              <h3 className="text-xl font-semibold mb-2">
                Economic Value Creation
              </h3>
              <p className="text-white">
                At LBF, we measure success by more than profit. We measure it by
                the real economic value we create.
              </p>
              <p className="text-white">
                Our Economic Value Added (EVA) and Market Value Added (MVA)
                reflect our commitment to sustainable wealth creation for all
                stakeholders
              </p>
              <p className="text-white">
                Our EVA and MVA demonstrate our commitment to generating wealth
                beyond financial transactions, ensuring long-term prosperity for
                shareholders, employees, and customers.
              </p>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Economic Value Added (EVA)
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300 bg-[#4DA28C]">
                    <thead>
                      <tr>
                        <th className="border px-4 py-1">
                          For the year ended 31st March
                        </th>
                        <th className="border px-4 py-1">
                          2024/25 Rs. million
                        </th>
                        <th className="border px-4 py-1">
                          2023/24 Rs. million
                        </th>
                      </tr>
                      <tr>
                        <td className="border px-4 py-1" colSpan={3}>
                          Invested Equity
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-1">
                          Equity owner's funds
                        </td>
                        <td className="border px-4 py-1"> 51,266.00 </td>
                        <td className="border px-4 py-1">43,626.07</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-1">
                          Add: Cumulative loan loss provision/provision for
                          impairment
                        </td>
                        <td className="border px-4 py-1"> 7,112.63</td>
                        <td className="border px-4 py-1">7,309.25</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-1" colSpan={3}></td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-1" colSpan={3}>
                          Earnings
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-1">
                          Profit attributable to shareholders
                        </td>
                        <td className="border px-4 py-1">10,805.63</td>
                        <td>9,563.64</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-1">
                          Add: Loan losses and provisions/impairment provision
                        </td>
                        <td className="border px-4 py-1">(256.24)</td>
                        <td className="border px-4 py-1">373.24</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-1"></td>
                        <td className="border px-4 py-1">10,549.40</td>
                        <td className="border px-4 py-1">9,936.87</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-1">
                          Economic cost % (Average Treasury Bill rate plus 2%
                          risk premium)
                        </td>
                        <td className="border px-4 py-1">11.51</td>
                        <td className="border px-4 py-1">16.80</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-1">Economic cost</td>
                        <td className="border px-4 py-1">6,291.02</td>
                        <td className="border px-4 py-1">8,140.42</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-1">
                          Economic value added
                        </td>
                        <td className="border px-4 py-1">4,258.38</td>
                        <td className="border px-4 py-1">1,796.45</td>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
              <div className="my-5">
                <h3 className="text-xl font-semibold mb-2">
                  Market Value Added (MVA)
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300 bg-[#4DA28C]">
                    <thead>
                      <tr>
                        <th className="border px-4 py-1">
                          For the year ended 31st March
                        </th>
                        <th className="border px-4 py-1">
                          2024/25 Rs. million
                        </th>
                        <th className="border px-4 py-1">
                          2023/24 Rs. million
                        </th>
                      </tr>
                      <tr>
                        <td colSpan={3} className="border px-4 py-1">
                          Market capitalisation
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-1">
                          Market value of equity
                        </td>
                        <td className="border px-4 py-1"> 47,925.94</td>
                        <td className="border px-4 py-1">34,794.79</td>
                      </tr>
                      <tr>
                        <td colSpan={3} className="border px-4 py-1">
                          Less: Equity owners' funds
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-1">
                          Total equity owners' funds
                        </td>
                        <td className="border px-4 py-1">51,266.00</td>
                        <td className="border px-4 py-1">43,626.07 </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-1">
                          Market value added/(destroyed)
                        </td>
                        <td className="border px-4 py-1">(3,340.06)</td>
                        <td className="border px-4 py-1"> (8,831.28)</td>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
              <div>
                <p className="text-white">
                  By expanding financial access and providing crucial skills
                  development, we are empowering women to become economic
                  powerhouses, creating a ripple effect of job creation,
                  stability, and transformative economic change across
                  communities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
