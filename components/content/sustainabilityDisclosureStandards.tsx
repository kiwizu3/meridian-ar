'use client';
// import { ApexOptions } from 'apexcharts';
// import dynamic from 'next/dynamic';

// const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

// const chartOptions: ApexOptions = {
//   chart: {
//     type: 'bar',
//   },
//   plotOptions: {
//     bar: {
//       horizontal: false,
//       columnWidth: '55%',
//     },
//   },
//   colors: ['#28A745', '#007BFF', '#DC3545'], // Green, Blue, Red
//   dataLabels: {
//     enabled: false,
//   },
//   xaxis: {
//     categories: [
//       'Governance',
//       'Strategy',
//       'Risk Management',
//       'Metrics & Targets',
//       'GHG Emissions',
//       'Scenario Analysis',
//     ],
//     labels: {
//       rotate: -45,
//     },
//   },
//   yaxis: {
//     title: {
//       text: 'Implementation Level (%)',
//     },
//   },
//   grid: {
//     borderColor: '#eee',
//   },
//   tooltip: {
//     y: {
//       formatter: (val: number) => `${val}%`,
//     },
//   },
//   legend: {
//     position: 'bottom',
//     itemMargin: {
//       horizontal: 5,
//       vertical: 5,
//     },
//     height: 70,
//   },
// };

// const chartSeries = [
//   {
//     name: 'Current Implementation',
//     data: [85, 75, 80, 65, 70, 60],
//   },
//   {
//     name: 'Target',
//     data: [100, 100, 100, 100, 100, 100],
//   },
// ];

export default function SLFRSDisclosuresContentIndex() {
  return (
    <div className="min-h-screen bg-cardGreen text-white p-8">
      <div>
        <h1 className="text-3xl font-bold mb-6 text-white">
          SLFRS S1 AND S2 DISCLOSURES CONTENT INDEX
        </h1>

        {/* <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Implementation Progress
          </h2>
          <div className="w-full bg-gray-200 rounded-md p-4">
            <Chart
              options={chartOptions}
              series={chartSeries}
              type="bar"
              height={400}
            />
          </div>
        </div> */}

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600">
                <th className="border border-white p-2">Section</th>
                <th className="border border-white p-2">
                  SLFRS S1 & S2 Reference
                </th>
                <th className="border border-white p-2">
                  Summary of Requirements
                </th>
                <th className="border border-white p-2">Page</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-800">
                <td className="border border-white p-2">Governance</td>
                <td className="border border-white p-2">S1: 26-27, S2: 5-6</td>
                <td className="border border-white p-2">
                  Disclosures on governance to enable users to understand the
                  governance processes, controls and procedures used to monitor,
                  manage and oversee sustainability-related and climate-related
                  risks and opportunities.
                </td>
                <td className="border border-white p-2">276-277</td>
              </tr>
              <tr>
                <td className="border border-white p-2">Strategy</td>
                <td className="border border-white p-2">S1: 28-42, S2: 8-23</td>
                <td className="border border-white p-2">
                  Disclosures on how sustainability-related and climate-related
                  risks and opportunities impact the business model, strategy,
                  and financial planning over the short, medium, and long term,
                  including:
                  <ul className="list-disc pl-5 mt-2">
                    <li>Identification of risks and opportunities</li>
                    <li>Impact on business model and value chain</li>
                    <li>Effects on strategy and decision-making</li>
                    <li>
                      Effect on financial performance, position, and cash flows
                    </li>
                    <li>
                      Resilience assessment (qualitative and quantitative)
                    </li>
                    <li>Climate transition plan</li>
                  </ul>
                </td>
                <td className="border border-white p-2">83-94</td>
              </tr>
              <tr className="bg-blue-800">
                <td className="border border-white p-2">Risk Management</td>
                <td className="border border-white p-2">
                  S1: 43-44, S2: 24-26
                </td>
                <td className="border border-white p-2">
                  Disclose the processes used to identify, assess, prioritize,
                  and monitor sustainability-related and climate-related risks
                  and opportunities, including integration with the overall risk
                  management process.
                </td>
                <td className="border border-white p-2">336-345</td>
              </tr>
              <tr>
                <td className="border border-white p-2">Metrics and Targets</td>
                <td className="border border-white p-2">
                  S1: 45-53, S2: 27-28
                </td>
                <td className="border border-white p-2">
                  Disclose the metrics and targets used to assess performance in
                  relation to sustainability-related and climate-related risks
                  and opportunities, including progress toward targets and level
                  of achievement.
                </td>
                <td className="border border-white p-2">
                  105-111, 141, 149, 169, 183, 206, 221
                </td>
              </tr>
              <tr className="bg-blue-800">
                <td className="border border-white p-2">
                  GHG Emissions & Climate Metrics
                </td>
                <td className="border border-white p-2">S2: 29</td>
                <td className="border border-white p-2">
                  Disclose Scope 1, 2, and 3 greenhouse gas (GHG) emissions,
                  including methodologies, assumptions, and intensity ratios
                  used. Should align with GHG Protocol.
                </td>
                <td className="border border-white p-2">105-111</td>
              </tr>
              <tr>
                <td className="border border-white p-2">
                  Scenario Analysis & Climate Resilience
                </td>
                <td className="border border-white p-2">S2: 22</td>
                <td className="border border-white p-2">
                  Disclose the resilience of strategy and business model to
                  climate-related changes and uncertainties, considering defined
                  climate-related risks and opportunities. Scenario analysis
                  should be applied.
                </td>
                <td className="border border-white p-2">
                  345 (Non-financial content)
                </td>
              </tr>
              <tr className="bg-blue-800">
                <td className="border border-white p-2">Materiality</td>
                <td className="border border-white p-2">S1: 17-18</td>
                <td className="border border-white p-2">
                  Disclose material sustainability-related and climate-related
                  risks and opportunities that could influence the assessments
                  and decisions of primary users of financial reports.
                </td>
                <td className="border border-white p-2">76</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-4 bg-blue-900 rounded-md">
          <h2 className="text-xl font-semibold mb-2">Additional Notes</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Quantitative disclosures were not provided to be in-line with the
              transitional provision of SLFRS S1 paragraph 34 (b), that
              quantitative information need not be provided in the first year of
              adoption of the Standard.
            </li>
            <li>
              The Company did not receive any information after the end of the
              reporting period, but before the date on which the
              sustainability-related financial disclosures were authorised for
              issue that required an update to the disclosures in respect of
              conditions that existed at the end of the reporting period.
            </li>
            <li>
              Based on the sustainability-related risks and opportunities
              identified in accordance with SLFRS S1:35(a), the Company has not
              identified any risks or opportunities that give rise to a
              significant risk of a material adjustment to the carrying amounts
              of assets or liabilities reported in the financial statements
              within the next annual reporting period.
            </li>
          </ul>
        </div>

        <div className="mt-6 text-right text-sm italic">
          LB Finance PLC Integrated Annual Report 2024/25
        </div>
      </div>
    </div>
  );
}
