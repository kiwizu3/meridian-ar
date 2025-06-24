'use client';

import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function FinancialCapitalPart14() {
  const chartOptions2 = {
    chart: {
      type: 'bar' as const,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['2020', '2021', '2022', '2023', '2024'],
    },
    yaxis: {
      title: {
        text: 'Rs. Mn',
      },
    },
    fill: {
      opacity: 1,
    },
    colors: ['#4caf50', '#2196f3'],
  };

  const lbmmSeries = [
    {
      name: 'Profit/(Loss) for the Year',
      data: [23.81, 4.21, -31.84, 99.91, 47.73],
    },
  ];

  const mfpSeries = [
    {
      name: 'Profit/(Loss) for the Year',
      data: [-141.74, -82.6, -199.5, -4.7, -19.6],
    },
  ];
  return (
    <div>
      <div className="bg-white text-black p-8">
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4 text-[#ff9800]">
            LBF SUBSIDIARIES: PERFORMANCE OVERVIEW
          </h2>
          <p className="mb-4 text-sm">
            We believe that as a non-bank financial institution that provides a
            comprehensive range of financial services, the Company has set out
            on a steadfast journey to expand its presence both locally and
            internationally, aiming to capitalize on various opportunities for
            growth and development. The Company&apos;s expertise reached the
            international financial market through LB Microfinance Myanmar
            Company Limited. Further the Company strengthened its capacities
            with the acquisition of Multi Finance PLC which is resolved to be
            amalgamated with the Company.
          </p>
          <p className="mb-8 text-sm text-[#2196f3]">
            Refer Business Segment Review – Subsidiaries - page 80
          </p>

          <div className="bg-[#e8f5e9] p-4 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4 text-[#4caf50]">
              LB MICROFINANCE MYANMAR COMPANY LIMITED (LBMM)
            </h3>
            <p className="mb-4 text-sm">
              LB Microfinance Myanmar Company Limited, a fully owned subsidiary
              of LB Finance PLC, was incorporated in Myanmar on 22 May 2017. The
              Company specialises in microfinance lending, having commenced
              commercial operations in December 2017 following the issuance of
              its license. The Company&apos;s Profit After Tax declined to Rs.
              47.73 million in 2024 from Rs. 99.91 million in the previous year.
              Total assets increased by 23.55% to Rs. 1,229.74 million.
            </p>
            <div className="mb-4">
              <Chart
                options={chartOptions2}
                series={lbmmSeries}
                type="bar"
                height={300}
              />
            </div>
            <table className="w-full">
              <thead className="bg-[#4caf50] text-white">
                <tr>
                  <th className="p-2 text-left"></th>
                  <th className="p-2 text-left">2024</th>
                  <th className="p-2 text-left">2023</th>
                  <th className="p-2 text-left">2022</th>
                  <th className="p-2 text-left">2021</th>
                  <th className="p-2 text-left">2020</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">Income (Rs. Mn)</td>
                  <td className="p-2">234.02</td>
                  <td className="p-2">217.08</td>
                  <td className="p-2">58.87</td>
                  <td className="p-2">153.24</td>
                  <td className="p-2">136.81</td>
                </tr>
                <tr>
                  <td className="p-2">Profit After Tax (Rs. Mn)</td>
                  <td className="p-2">47.73</td>
                  <td className="p-2">99.91</td>
                  <td className="p-2">-31.84</td>
                  <td className="p-2">4.21</td>
                  <td className="p-2">23.81</td>
                </tr>
                <tr>
                  <td className="p-2">Lending portfolio (Rs. Mn)</td>
                  <td className="p-2">1,140.22</td>
                  <td className="p-2">890.42</td>
                  <td className="p-2">804.94</td>
                  <td className="p-2">688.39</td>
                  <td className="p-2">554.09</td>
                </tr>
                <tr>
                  <td className="p-2">Total Assets (Rs. Mn)</td>
                  <td className="p-2">1,229.74</td>
                  <td className="p-2">995.31</td>
                  <td className="p-2">909.55</td>
                  <td className="p-2">909.94</td>
                  <td className="p-2">895.37</td>
                </tr>
                <tr>
                  <td className="p-2">Total Equity (Rs. Mn)</td>
                  <td className="p-2">806.75</td>
                  <td className="p-2">831.68</td>
                  <td className="p-2">805.01</td>
                  <td className="p-2">719.12</td>
                  <td className="p-2">681.39</td>
                </tr>
                <tr>
                  <td className="p-2">ROA</td>
                  <td className="p-2">4.29%</td>
                  <td className="p-2">10.49%</td>
                  <td className="p-2">-3.50%</td>
                  <td className="p-2">0.47%</td>
                  <td className="p-2">3.65%</td>
                </tr>
                <tr>
                  <td className="p-2">ROE</td>
                  <td className="p-2">5.83%</td>
                  <td className="p-2">12.21%</td>
                  <td className="p-2">-4.18%</td>
                  <td className="p-2">0.60%</td>
                  <td className="p-2">4.58%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#e3f2fd] p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-[#2196f3]">
              MULTI FINANCE PLC (MFP)
            </h3>
            <p className="mb-4 text-sm">
              Following the acquisition of Multi Finance PLC in March 2022, LB
              Finance PLC became the majority shareholder and the parent
              company. In furtherance of the Financial Sector Consolidation Plan
              of the Central Bank of Sri Lanka, the Boards of Directors of LB
              Finance PLC and Multi Finance PLC (MFP) have resolved to
              amalgamate Multi Finance PLC with LB Finance PLC under Section 239
              of the Companies Act, No 07 of 2007, whereby LB Finance PLC will
              be the Amalgamated Company, subject however to the regulatory
              approvals and the approval of the shareholders of both Multi
              Finance PLC and LB Finance PLC by way of Special Resolutions at
              Extraordinary General Meetings of the respective companies.
            </p>
            <div className="mb-4">
              <Chart
                options={chartOptions2}
                series={mfpSeries}
                type="bar"
                height={300}
              />
            </div>
            <table className="w-full">
              <thead className="bg-[#2196f3] text-white">
                <tr>
                  <th className="p-2 text-left"></th>
                  <th className="p-2 text-left">2024</th>
                  <th className="p-2 text-left">2023</th>
                  <th className="p-2 text-left">2022</th>
                  <th className="p-2 text-left">2021</th>
                  <th className="p-2 text-left">2020</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">Income (Rs. Mn)</td>
                  <td className="p-2">109.20</td>
                  <td className="p-2">147.87</td>
                  <td className="p-2">120.36</td>
                  <td className="p-2">134.14</td>
                  <td className="p-2">218.66</td>
                </tr>
                <tr>
                  <td className="p-2">Profit After Tax (Rs. Mn)</td>
                  <td className="p-2">-19.60</td>
                  <td className="p-2">-4.70</td>
                  <td className="p-2">-199.50</td>
                  <td className="p-2">-82.60</td>
                  <td className="p-2">-141.74</td>
                </tr>
                <tr>
                  <td className="p-2">Lending portfolio (Rs. Mn)</td>
                  <td className="p-2">90.60</td>
                  <td className="p-2">292.00</td>
                  <td className="p-2">336.86</td>
                  <td className="p-2">569.53</td>
                  <td className="p-2">861.74</td>
                </tr>
                <tr>
                  <td className="p-2">Total Assets (Rs. Mn)</td>
                  <td className="p-2">441.19</td>
                  <td className="p-2">516.21</td>
                  <td className="p-2">617.53</td>
                  <td className="p-2">870.14</td>
                  <td className="p-2">1,194.72</td>
                </tr>
                <tr>
                  <td className="p-2">Total Equity (Rs. Mn)</td>
                  <td className="p-2">274.51</td>
                  <td className="p-2">294.74</td>
                  <td className="p-2">298.81</td>
                  <td className="p-2">493.85</td>
                  <td className="p-2">577.15</td>
                </tr>
                <tr>
                  <td className="p-2">ROA</td>
                  <td className="p-2">-4.09%</td>
                  <td className="p-2">-0.83%</td>
                  <td className="p-2">-26.82%</td>
                  <td className="p-2">-8.00%</td>
                  <td className="p-2">-10.58%</td>
                </tr>
                <tr>
                  <td className="p-2">ROE</td>
                  <td className="p-2">-6.89%</td>
                  <td className="p-2">-1.58%</td>
                  <td className="p-2">-50.33%</td>
                  <td className="p-2">-15.42%</td>
                  <td className="p-2">-21.87%</td>
                </tr>
              </tbody>
            </table>
            Sustainability reporting frameworks GRI Integrated reporting SASB
            Standard - Consumer finance SLFRS Sustainability disclosure standard
            Sustainable development goals UNGC 10 principles
          </div>
        </div>
      </div>
    </div>
  );
}
