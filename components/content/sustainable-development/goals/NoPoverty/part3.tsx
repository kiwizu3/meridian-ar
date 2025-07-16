'use client';

import Image from 'next/image';

export default function NoPovertyPart3() {
  return (
    <div>
      <div className="bg-[#5d8de8] text-black p-8">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#7ba1eb] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-2 text-cardBlue]">
                2. JOB CREATION
              </h2>
              <h3 className="text-xl font-semibold my-4">
                From Employment to Empowerment
              </h3>
              <p>
                We empower entrepreneurs to build businesses and create jobs.
                Our commitment to economic growth extends far beyond our own
                Company, impacting communities across Sri Lanka.
              </p>
              <div className="relative h-48 mt-4">
                <Image
                  src="/placeholder-job-chart.jpg"
                  alt="Job Creation Chart"
                  className="rounded-lg"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            <div className="bg-[#7ba1eb] rounded-lg p-6  row-span-3">
              <h2 className="text-2xl font-semibold mb-4">
                3. ECONOMIC VALUE CREATION
              </h2>
              <h3 className="text-xl font-semibold my-4">
                Economic Value Creation
              </h3>
              <p>
                At LBF, we measure success by more than profit. We measure it by
                the real economic value we create.
              </p>
              <p>
                Our Economic Value Added (EVA) and Market Value Added (MVA)
                reflect our commitment to sustainable wealth creation for all
                stakeholders
              </p>
              <p>
                Our EVA and MVA demonstrate our commitment to generating wealth
                beyond financial transactions, ensuring long-term prosperity for
                shareholders, employees, and customers.
              </p>
              <div className="relative h-48 mt-4">
                <h3 className="text-xl font-semibold my-8">
                  Economic Value Added (EVA)
                </h3>
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">
                        For the year ended 31st March
                      </th>
                      <th className="border px-4 py-2">2024/25 Rs. million</th>
                      <th className="border px-4 py-2">2023/24 Rs. million</th>
                    </tr>
                    <tr>
                      <td className="border px-4 py-1" colSpan={3}>
                        Invested Equity
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-1">Equity owner's funds</td>
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
                        Economic cost % (Average Treasury Bill rate plus 2% risk
                        premium)
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
                      <td className="border px-4 py-1">Economic value added</td>
                      <td className="border px-4 py-1">4,258.38</td>
                      <td className="border px-4 py-1">1,796.45</td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>

            <div className="bg-[#7ba1eb] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">
                4. EMPOWERING WOMEN
              </h2>
              <p>
                Financial independence is a key driver of social progress, and
                we are leading the charge in empowering women entrepreneurs and
                professionals. Our targeted programmes provide customised
                financial support, mentorship, and networking opportunities.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4 text-center">
                <div>
                  <h3 className="text-xl font-bold">Rs. 84 Bn</h3>
                  <p>Gold Loans to women entrepreneurs</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">2,090</h3>
                  <p>Representational workforce</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Rs. 374 Mn</h3>
                  <p>Business/Personal Loans</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">10,289</h3>
                  <p>Vehicle financing facilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
