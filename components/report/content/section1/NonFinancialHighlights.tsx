import React from 'react';

export default function NonFinancialHighlights() {
  return (
    <div className="non-financial-highlights p-6 bg-themeGreen max-h-[70vh] overflow-y-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">NON-FINANCIAL HIGHLIGHTS</h1>
      </header>

      <div className="space-y-8">
        <div className="overflow-x-auto">
          {/* ECONOMIC Table */}
          <h3 className="text-xl font-bold mb-4">ECONOMIC</h3>
          <table className="w-full border-collapse mb-8">
            <thead>
              <tr className="bg-cardGreen">
                <th className="border border-white p-2 text-left">
                  Measurement
                </th>
                <th className="border border-white p-2"></th>
                <th className="border border-white p-2">2024/25</th>
                <th className="border border-white p-2">2023/24</th>
                <th className="border border-white p-2">Related Capital</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white p-2 font-semibold">
                  Economic value created
                </td>
                <td className="border border-white p-2">Rs. Mn</td>
                <td className="border border-white p-2">4,258.38</td>
                <td className="border border-white p-2">1,796.45</td>
                <td className="border border-white p-2">FC</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2 font-semibold">
                  Economic value distributed to:
                </td>
                <td className="border border-white p-2"></td>
                <td className="border border-white p-2"></td>
                <td className="border border-white p-2"></td>
                <td className="border border-white p-2"></td>
              </tr>
              <tr>
                <td className="border border-white p-2 pl-6">
                  Depositors and lenders
                </td>
                <td className="border border-white p-2">Rs. Mn</td>
                <td className="border border-white p-2">16,432.58</td>
                <td className="border border-white p-2">21,144.19</td>
                <td className="border border-white p-2">SRC</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2 pl-6">Employees</td>
                <td className="border border-white p-2">Rs. Mn</td>
                <td className="border border-white p-2">5,124.55</td>
                <td className="border border-white p-2">4,353.25</td>
                <td className="border border-white p-2">HC</td>
              </tr>
              <tr>
                <td className="border border-white p-2 pl-6">Government</td>
                <td className="border border-white p-2">Rs. Mn</td>
                <td className="border border-white p-2">10,145.77</td>
                <td className="border border-white p-2">9,485.08</td>
                <td className="border border-white p-2">SRC</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2 pl-6">Shareholders</td>
                <td className="border border-white p-2">Rs. Mn</td>
                <td className="border border-white p-2">3,601.37</td>
                <td className="border border-white p-2">3,185.83</td>
                <td className="border border-white p-2">SRC</td>
              </tr>
            </tbody>
          </table>

          {/* ENVIRONMENTAL - Our footprint Table */}
          <h3 className="text-xl font-bold mb-4">
            ENVIRONMENTAL - Our footprint
          </h3>
          <table className="w-full border-collapse mb-8">
            <thead>
              <tr className="bg-cardGreen">
                <th className="border border-white p-2 text-left">
                  Measurement
                </th>
                <td className="border border-white p-2"></td>
                <th className="border border-white p-2">2024/25</th>
                <th className="border border-white p-2">2023/24</th>
                <th className="border border-white p-2">Related Capital</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white p-2">
                  Total carbon footprint
                </td>
                <td className="border border-white p-2">
                  tCO<sub>2</sub>e
                </td>
                <td className="border border-white p-2">36,934.07</td>
                <td className="border border-white p-2">3,982.90</td>
                <td className="border border-white p-2">NC</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">Scope 1 emissions</td>
                <td className="border border-white p-2">
                  tCO<sub>2</sub>e
                </td>
                <td className="border border-white p-2">2,711</td>
                <td className="border border-white p-2">278</td>
                <td className="border border-white p-2">NC</td>
              </tr>
              <tr>
                <td className="border border-white p-2">Scope 2 emissions</td>
                <td className="border border-white p-2">
                  tCO<sub>2</sub>e
                </td>
                <td className="border border-white p-2"> 2,241</td>
                <td className="border border-white p-2">2,199</td>
                <td className="border border-white p-2">NC</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">Scope 3 emissions</td>
                <td className="border border-white p-2">
                  tCO<sub>2</sub>e
                </td>
                <td className="border border-white p-2">31,981</td>
                <td className="border border-white p-2">1,506</td>
                <td className="border border-white p-2">NC</td>
              </tr>
              <tr>
                <td className="border border-white p-2">
                  Total carbon footprint per Rs. Million of profit
                </td>
                <td className="border border-white p-2">
                  tCO<sub>2</sub>e
                </td>
                <td className="border border-white p-2">3.41</td>
                <td className="border border-white p-2">0.41</td>
                <td className="border border-white p-2">NC</td>
              </tr>
            </tbody>
          </table>

          {/* ENVIRONMENTAL - Resource efficiency Table */}
          <h3 className="text-xl font-bold mb-4">
            ENVIRONMENTAL - Resource efficiency
          </h3>
          <table className="w-full border-collapse mb-8">
            <thead>
              <tr className="bg-cardGreen">
                <th className="border border-white p-2 text-left">
                  Measurement
                </th>
                <td className="border border-white p-2"></td>
                <th className="border border-white p-2">2024/25</th>
                <th className="border border-white p-2">2023/24</th>
                <th className="border border-white p-2">Related Capital</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white p-2">Solarised branches</td>
                <td className="border border-white p-2">Number</td>
                <td className="border border-white p-2">40</td>
                <td className="border border-white p-2">26</td>
                <td className="border border-white p-2">NC</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">
                  Electricity saving through solar power generation
                </td>
                <td className="border border-white p-2">kWh</td>
                <td className="border border-white p-2">122,472.00</td>
                <td className="border border-white p-2">79,606.80</td>
                <td className="border border-white p-2">NC</td>
              </tr>
              <tr>
                <td className="border border-white p-2">Paper recycled</td>
                <td className="border border-white p-2">kg</td>
                <td className="border border-white p-2">52,604.00</td>
                <td className="border border-white p-2">20,109.00</td>
                <td className="border border-white p-2">NC</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">
                  Trees saved from recycling
                </td>
                <td className="border border-white p-2">Number</td>
                <td className="border border-white p-2">894.00</td>
                <td className="border border-white p-2">342.00</td>
                <td className="border border-white p-2">NC</td>
              </tr>
              <tr>
                <td className="border border-white p-2">
                  Trees saved from digital operations
                </td>
                <td className="border border-white p-2">Number</td>
                <td className="border border-white p-2">440</td>
                <td className="border border-white p-2">-</td>
                <td className="border border-white p-2">NC</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">Water consumption</td>
                <td className="border border-white p-2">
                  m<sup>3</sup>
                </td>
                <td className="border border-white p-2">48,514</td>
                <td className="border border-white p-2">44,908</td>
                <td className="border border-white p-2">NC</td>
              </tr>
              <tr>
                <td className="border border-white p-2">
                  Water consumption per Rs. Million of profit
                </td>
                <td className="border border-white p-2">
                  m<sup>3</sup>
                </td>
                <td className="border border-white p-2">4.49</td>
                <td className="border border-white p-2">4.69</td>
                <td className="border border-white p-2">NC</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">Energy consumption</td>
                <td className="border border-white p-2">GJ</td>
                <td className="border border-white p-2">55,714.08</td>
                <td className="border border-white p-2">16,852.95</td>
                <td className="border border-white p-2">NC</td>
              </tr>
              <tr>
                <td className="border border-white p-2">
                  Energy per Rs. Million of profit
                </td>
                <td className="border border-white p-2">GJ</td>
                <td className="border border-white p-2">5.16</td>
                <td className="border border-white p-2">1.76</td>
                <td className="border border-white p-2">NC</td>
              </tr>
            </tbody>
          </table>

          {/* ENVIRONMENTAL - Green financing Table */}
          <h3 className="text-xl font-bold mb-4">
            ENVIRONMENTAL - Green financing
          </h3>
          <table className="w-full border-collapse mb-8">
            <thead>
              <tr className="bg-cardGreen">
                <th className="border border-white p-2 text-left">
                  Measurement
                </th>
                <th className="border border-white p-2"></th>
                <th className="border border-white p-2">2024/25</th>
                <th className="border border-white p-2">2023/24</th>
                <th className="border border-white p-2">Related Capital</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white p-2">
                  Green financing portfolio
                </td>
                <td className="border border-white p-2">Rs. Bn</td>
                <td className="border border-white p-2">7.35</td>
                <td className="border border-white p-2">5.05</td>
                <td className="border border-white p-2">NC</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">
                  Green financing facilities facilitated during the year
                </td>
                <td className="border border-white p-2">Number</td>
                <td className="border border-white p-2">2,716</td>
                <td className="border border-white p-2">1,597</td>
                <td className="border border-white p-2">NC</td>
              </tr>
            </tbody>
          </table>

          {/* ENVIRONMENTAL - Environmental stewardship Table */}
          <h3 className="text-xl font-bold mb-4">
            ENVIRONMENTAL - Environmental stewardship
          </h3>
          <table className="w-full border-collapse mb-8">
            <thead>
              <tr className="bg-cardGreen">
                <th className="border border-white p-2 text-left">
                  Measurement
                </th>
                <th className="border border-white p-2"></th>
                <th className="border border-white p-2">2024/25</th>
                <th className="border border-white p-2">2023/24</th>
                <th className="border border-white p-2">Related Capital</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white p-2">
                  Environment related projects
                </td>
                <td className="border border-white p-2">Number</td>
                <td className="border border-white p-2">9</td>
                <td className="border border-white p-2">3</td>
                <td className="border border-white p-2">NC</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">
                  Trees planted/distributed
                </td>
                <td className="border border-white p-2">Number</td>
                <td className="border border-white p-2">375</td>
                <td className="border border-white p-2">8,200</td>
                <td className="border border-white p-2">NC</td>
              </tr>
            </tbody>
          </table>

          {/* SOCIAL - Employees Table */}
          <h3 className="text-xl font-bold mb-4">SOCIAL - Employees</h3>
          <table className="w-full border-collapse mb-8">
            <thead>
              <tr className="bg-cardGreen">
                <th className="border border-white p-2 text-left">
                  Measurement
                </th>
                <th className="border border-white p-2"></th>
                <th className="border border-white p-2">2024/25</th>
                <th className="border border-white p-2">2023/24</th>
                <th className="border border-white p-2">Related Capital</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white p-2">Total employees</td>
                <td className="border border-white p-2">Number</td>
                <td className="border border-white p-2">4,407</td>
                <td className="border border-white p-2">4,132</td>
                <td className="border border-white p-2">HC</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">
                  New recruits during the year
                </td>
                <td className="border border-white p-2">Number</td>
                <td className="border border-white p-2">2,207</td>
                <td className="border border-white p-2">2,194</td>
                <td className="border border-white p-2">HC</td>
              </tr>
              <tr>
                <td className="border border-white p-2">
                  Investments in training and development
                </td>
                <td className="border border-white p-2">Rs. Mn</td>
                <td className="border border-white p-2">21.70</td>
                <td className="border border-white p-2">23.22</td>
                <td className="border border-white p-2">HC</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">
                  Training programmes carried out
                </td>
                <td className="border border-white p-2">Number</td>
                <td className="border border-white p-2">130</td>
                <td className="border border-white p-2">68</td>
                <td className="border border-white p-2">NC</td>
              </tr>
              <tr>
                <td className="border border-white p-2">
                  Total training hours
                </td>
                <td className="border border-white p-2">Hours</td>
                <td className="border border-white p-2">53,845</td>
                <td className="border border-white p-2">43,677</td>
                <td className="border border-white p-2">HC</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">
                  Average training hours per employee
                </td>
                <td className="border border-white p-2">Hours</td>
                <td className="border border-white p-2">5.75</td>
                <td className="border border-white p-2">5.67</td>
                <td className="border border-white p-2">HC</td>
              </tr>
              <tr>
                <td className="border border-white p-2">
                  Staff remuneration and benefits
                </td>
                <td className="border border-white p-2">Rs. Mn</td>
                <td className="border border-white p-2">4,902.96</td>
                <td className="border border-white p-2">4,095.93</td>
                <td className="border border-white p-2">HC</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">
                  Internal staff promotions
                </td>
                <td className="border border-white p-2">Number</td>
                <td className="border border-white p-2">1,145</td>
                <td className="border border-white p-2">1,037</td>
                <td className="border border-white p-2">HC</td>
              </tr>
              <tr>
                <td className="border border-white p-2">
                  Staff retention ratio
                </td>
                <td className="border border-white p-2">%</td>
                <td className="border border-white p-2">56</td>
                <td className="border border-white p-2">58</td>
                <td className="border border-white p-2">HC</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">
                  Gender diversity ratio (Male : Female)
                </td>
                <td className="border border-white p-2">Ratio</td>
                <td className="border border-white p-2">1:0.90</td>
                <td className="border border-white p-2">1:0.85</td>
                <td className="border border-white p-2">HC</td>
              </tr>
            </tbody>
          </table>

          {/* SOCIAL - Customer Table */}
          <h3 className="text-xl font-bold mb-4">SOCIAL - Customer</h3>
          <table className="w-full border-collapse mb-8">
            <thead>
              <tr className="bg-cardGreen">
                <th className="border border-white p-2 text-left">
                  Measurement
                </th>
                <th className="border border-white p-2"></th>
                <th className="border border-white p-2">2024/25</th>
                <th className="border border-white p-2">2023/24</th>
                <th className="border border-white p-2">Related Capital</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white p-2">Total customer base</td>
                <td className="border border-white p-2">Number</td>
                <td className="border border-white p-2">850,000+</td>
                <td className="border border-white p-2">800,000+</td>
                <td className="border border-white p-2">SRC</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">
                  Customer financial solutions
                </td>
                <td className="border border-white p-2">Number</td>
                <td className="border border-white p-2">34.00</td>
                <td className="border border-white p-2">33.00</td>
                <td className="border border-white p-2">SRC</td>
              </tr>
              <tr>
                <td className="border border-white p-2">
                  Total branches/Total outlets
                </td>
                <td className="border border-white p-2">Number</td>
                <td className="border border-white p-2">216</td>
                <td className="border border-white p-2">200</td>
                <td className="border border-white p-2">MC</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">CDM machines</td>
                <td className="border border-white p-2">Number</td>
                <td className="border border-white p-2">24</td>
                <td className="border border-white p-2">24</td>
                <td className="border border-white p-2">MC</td>
              </tr>
              <tr>
                <td className="border border-white p-2">
                  Branches outside Western province
                </td>
                <td className="border border-white p-2">Number</td>
                <td className="border border-white p-2">128</td>
                <td className="border border-white p-2">117</td>
                <td className="border border-white p-2">MC</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">New outlets opened</td>
                <td className="border border-white p-2">Number</td>
                <td className="border border-white p-2">10</td>
                <td className="border border-white p-2">8</td>
                <td className="border border-white p-2">MC</td>
              </tr>
              <tr>
                <td className="border border-white p-2">
                  Brand ranking (Brand Finance)
                </td>
                <td className="border border-white p-2">Number</td>
                <td className="border border-white p-2">20</td>
                <td className="border border-white p-2">28</td>
                <td className="border border-white p-2">IC</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2" rowSpan={2}>
                  Credit rating (Fitch Rating)
                </td>
                <td className="border border-white p-2" rowSpan={2}>
                  Rating
                </td>
                <td className="border border-white p-2" rowSpan={2}>
                  A-(lka) (Stable Outlook)
                </td>
                <td className="border border-white p-2" rowSpan={2}>
                  BBB+(lka) (Stable Outlook)
                </td>
                <td className="border border-white p-2" rowSpan={2}>
                  IC
                </td>
              </tr>
              <tr></tr>
              <tr>
                <td className="border border-white p-2">CIM app downloads</td>
                <td className="border border-white p-2">Number</td>
                <td className="border border-white p-2">200,000+</td>
                <td className="border border-white p-2">100,000+</td>
                <td className="border border-white p-2">IC</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">
                  CIM app transaction volume growth
                </td>
                <td className="border border-white p-2">%</td>
                <td className="border border-white p-2">124</td>
                <td className="border border-white p-2">82</td>
                <td className="border border-white p-2">IC</td>
              </tr>
            </tbody>
          </table>

          {/* SOCIAL - Community Table */}
          <h3 className="text-xl font-bold mb-4">SOCIAL - Community</h3>
          <table className="w-full border-collapse mb-8">
            <thead>
              <tr className="bg-cardGreen">
                <th className="border border-white p-2 text-left">
                  Measurement
                </th>
                <th className="border border-white p-2"></th>
                <th className="border border-white p-2">2024/25</th>
                <th className="border border-white p-2">2023/24</th>
                <th className="border border-white p-2">Related Capital</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white p-2">
                  Community development programmes
                </td>
                <td className="border border-white p-2">Number</td>
                <td className="border border-white p-2">18</td>
                <td className="border border-white p-2">18</td>
                <td className="border border-white p-2">SRC</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">
                  Staff volunteered hours
                </td>
                <td className="border border-white p-2">Hours</td>
                <td className="border border-white p-2">7,552</td>
                <td className="border border-white p-2">7,132</td>
                <td className="border border-white p-2">SRC</td>
              </tr>
              <tr>
                <td className="border border-white p-2">
                  Investment in CSR projects
                </td>
                <td className="border border-white p-2">Rs. Mn</td>
                <td className="border border-white p-2">27.35</td>
                <td className="border border-white p-2">20.20</td>
                <td className="border border-white p-2">SRC</td>
              </tr>
            </tbody>
          </table>

          {/* GOVERNANCE - Board composition & sub-committees Table */}
          <h3 className="text-xl font-bold mb-4">
            GOVERNANCE - Board composition & sub-committees
          </h3>
          <table className="w-full border-collapse mb-8">
            <thead>
              <tr className="bg-cardGreen">
                <th className="border border-white p-2 text-left">
                  Measurement
                </th>
                <th className="border border-white p-2"></th>
                <th className="border border-white p-2">2024/25</th>
                <th className="border border-white p-2">2023/24</th>
                <th className="border border-white p-2">Related Capital</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white p-2">Total directors</td>
                <td className="border border-white p-2">Number</td>
                <td className="border border-white p-2">12</td>
                <td className="border border-white p-2">10</td>
                <td className="border border-white p-2">HC</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2 pl-6">1. Female</td>
                <td className="border border-white p-2">Number</td>
                <td className="border border-white p-2">3</td>
                <td className="border border-white p-2">3</td>
                <td className="border border-white p-2">HC</td>
              </tr>
              <tr>
                <td className="border border-white p-2 pl-6">2. Male</td>
                <td className="border border-white p-2">Number</td>
                <td className="border border-white p-2">9</td>
                <td className="border border-white p-2">7</td>
                <td className="border border-white p-2">HC</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">
                  Independent Non-Executive directors
                </td>
                <td className="border border-white p-2">Number</td>
                <td className="border border-white p-2">5</td>
                <td className="border border-white p-2">3</td>
                <td className="border border-white p-2">HC</td>
              </tr>
              <tr>
                <td className="border border-white p-2">
                  Board sub-committees
                </td>
                <td className="border border-white p-2">Number</td>
                <td className="border border-white p-2">7</td>
                <td className="border border-white p-2">7</td>
                <td className="border border-white p-2">HC</td>
              </tr>
            </tbody>
          </table>

          {/* GOVERNANCE - Skill development programmes Table */}
          <h3 className="text-xl font-bold mb-4">
            GOVERNANCE - Skill development programmes
          </h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-cardGreen">
                <th className="border border-white p-2 text-left">
                  Measurement
                </th>
                <th className="border border-white p-2"></th>
                <th className="border border-white p-2">2024/25</th>
                <th className="border border-white p-2">2023/24</th>
                <th className="border border-white p-2">Related Capital</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white p-2">
                  Board level trainings
                </td>
                <td className="border border-white p-2">Number</td>
                <td className="border border-white p-2">9</td>
                <td className="border border-white p-2">1</td>
                <td className="border border-white p-2">HC</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">
                  Leadership and motivational programmes
                </td>
                <td className="border border-white p-2">Number</td>
                <td className="border border-white p-2">12</td>
                <td className="border border-white p-2">4</td>
                <td className="border border-white p-2">HC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
