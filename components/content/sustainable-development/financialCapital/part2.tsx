'use client';

import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function FinancialCapitalPart2() {
  const chartOptions = {
    chart: {
      type: 'bar' as const,
      stacked: true,
    },
    colors: ['#4caf50', '#2196f3'],
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['2023', '2022'],
    },
  };

  const series = [
    {
      name: 'Profit After Tax',
      data: [9558, 5417],
    },
    {
      name: 'Profit Before Taxes',
      data: [8858, 7679],
    },
  ];
  return (
    <div>
      <div className="bg-white text-black p-8">
        <div className="w-full">
          <header className="bg-[#9b59b6] text-white p-4 rounded-lg">
            <p className="text-sm">
              LB Finance PLC demonstrated resilience in the face of challenging
              macroeconomic conditions and widespread systemic shocks within the
              industry. Despite these headwinds, the Company achieved a robust
              profit after tax of Rs. 9.56 billion, highlighting its strong
              financial performance and unwavering commitment to its strategic
              objectives.
            </p>
          </header>

          <div className="grid grid-cols-3 gap-4 mt-5">
            <div className="col-span-2">
              <h2 className="text-xl font-bold mb-4">MANAGEMENT APPROACH</h2>
              <p className="text-sm mb-4">
                We have implemented policies and procedures to guide our
                financial management, encompassing key areas such as risk
                management, strategic planning, budgeting, revenue management,
                cost control, internal controls, treasury and liquidity
                management and asset quality management.
              </p>
              <h3 className="font-bold mb-2">
                COMPONENTS OF FINANCIAL CAPITAL
              </h3>
              <ul className="list-none space-y-2 text-sm">
                <li className="flex items-center">REVENUE MANAGEMENT</li>
                <li className="flex items-center">
                  STRATEGIC PLANNING AND BUDGETING
                </li>
                <li className="flex items-center">COST CONTROL</li>
                <li className="flex items-center">ASSET QUALITY MANAGEMENT</li>
                <li className="flex items-center">
                  TREASURY AND LIQUIDITY MANAGEMENT
                </li>
              </ul>
            </div>
            <div>
              <div className="bg-[#3498db] text-white p-4 rounded-lg mb-4">
                <h3 className="font-bold mb-2">CONTRIBUTING TO OUR MISSION</h3>
                <p className="text-sm">
                  To mobilise public funds by innovating investment products
                  that will enhance the value delivered to our depositors.
                </p>
                <p className="text-sm mt-2">
                  To engage in prudent lending to entrepreneurs to assist them
                  in the creation of wealth.
                </p>
              </div>
              <div className="bg-[#3498db] text-white p-4 rounded-lg mb-4">
                <h3 className="font-bold mb-2">CONTRIBUTION TO OUR VALUES</h3>
                <div>
                  <p className="mb-3">Excellence</p>
                  <p className="mb-3">Innovation</p>
                  <p className="mb-3">Quality</p>
                </div>
              </div>
              <div className="bg-[#3498db] text-white p-4 rounded-lg">
                <h3 className="font-bold mb-2">MATERIAL MATTERS</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>Sustainable Revenue Growth</li>
                  <li>Delivering Appropriate Returns</li>
                  <li>Business Continuity</li>
                  <li>Risk and Capital Management</li>
                </ul>
              </div>
            </div>
          </div>

          <section>
            <h2 className="text-xl font-bold mb-4 mt-5">
              STRATEGIC PRIORITIES
            </h2>
            <table className="w-full text-sm">
              <thead className="bg-[#2ecc71] text-white">
                <tr>
                  <th className="p-2">STRATEGIC PRIORITIES</th>
                  <th className="p-2">PROGRESS IN FY 2023/24</th>
                  <th className="p-2" colSpan={3}>
                    LOOKING AHEAD
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td className="p-2">Short-term</td>
                  <td className="p-2">Medium-term</td>
                  <td className="p-2">Long-term</td>
                </tr>
                <tr>
                  <td className="p-2">Income Generation</td>
                  <td className="p-2">Rs. 49 Bn.</td>
                  <td className="p-2">Maintain at current levels</td>
                  <td className="p-2">10% Growth</td>
                  <td className="p-2">Increase to Rs. 100 Bn.</td>
                </tr>
                <tr>
                  <td className="p-2">Profitability</td>
                  <td className="p-2">Rs. 9.5 Bn.</td>
                  <td className="p-2">Increase to Rs. 10 Bn.</td>
                  <td className="p-2">20% Growth</td>
                  <td className="p-2">Increase to Rs. 25 Bn.</td>
                </tr>
                <tr>
                  <td className="p-2">Growth (Total Assets)</td>
                  <td className="p-2">Rs. 202 Bn.</td>
                  <td className="p-2">20% Growth</td>
                  <td className="p-2">50% Growth</td>
                  <td className="p-2">Increase to Rs. 500 Bn.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 mt-5">Profitability</h2>
            <div className="h-64">
              <Chart
                options={chartOptions}
                series={series}
                type="bar"
                height={250}
              />
            </div>
          </section>

          <section className="mt-5">
            <h2 className="text-xl font-bold mb-4 bg-[#3498db] text-white p-2">
              CAPITAL TRADE-OFFS
            </h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-[#e7f1d4] p-4 rounded-lg">
                <h3 className="font-bold mb-2">FC</h3>
                <p className="text-sm">
                  Investing in energy efficient equipment and expanding green
                  lending portfolio improves natural capital
                </p>
              </div>
              <div className="bg-[#d1cbe4] p-4 rounded-lg text-black">
                <h3 className="font-bold mb-2">HC</h3>
                <p className="text-sm">
                  Nurturing a motivated and skilled workforce through training
                  and providing attractive staff benefits build human capital
                </p>
              </div>
              <div className="bg-[#fddcc5] p-4 rounded-lg text-black">
                <h3 className="font-bold mb-2">MC</h3>
                <p className="text-sm">
                  Investing in the expansion of the branch network and
                  infrastructure contributes to manufactured capital
                </p>
              </div>
              <div className="bg-[#e9ddc8] p-4 rounded-lg">
                <h3 className="font-bold mb-2">SC</h3>
                <p className="text-sm">
                  Investing in community development and payments to suppliers
                  supports social and relationship capital
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
