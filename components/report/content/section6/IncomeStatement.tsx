import React from 'react';
import Image from 'next/image';

export default function IncomeStatement() {
  return (
    <div className="income-statement p-6 bg-themeGreen max-h-[70vh] overflow-y-auto custom-scrollbar">
      <h1 className="text-4xl font-bold mb-4">INCOME STATEMENT</h1>

      <div className="space-y-8">
        {/* Income Statement Table */}
        <div>
          <div className="mb-8">
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-[#0A3D5F] text-white">
                    <th
                      className="border border-gray-300 p-2 text-left"
                      rowSpan={2}
                    >
                      Year ended 31 March
                    </th>
                    <th
                      className="border border-gray-300 p-2 text-left"
                      rowSpan={2}
                    >
                      Note
                    </th>
                    <th
                      className="border border-gray-300 p-2 text-left"
                      rowSpan={2}
                    >
                      Page No.
                    </th>
                    <th
                      className="border border-gray-300 p-2 text-center"
                      colSpan={3}
                    >
                      Company
                    </th>
                    <th
                      className="border border-gray-300 p-2 text-center"
                      colSpan={3}
                    >
                      Group
                    </th>
                  </tr>
                  <tr className="bg-[#0A3D5F] text-white">
                    <th className="border border-gray-300 p-2">
                      2025 Rs. '000
                    </th>
                    <th className="border border-gray-300 p-2">
                      2024 Rs. '000
                    </th>
                    <th className="border border-gray-300 p-2">Change %</th>
                    <th className="border border-gray-300 p-2">
                      2025 Rs. '000
                    </th>
                    <th className="border border-gray-300 p-2">
                      2024 Rs. '000
                    </th>
                    <th className="border border-gray-300 p-2">Change %</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold">
                      Income
                    </td>
                    <td className="border border-gray-300 p-2">2.1</td>
                    <td className="border border-gray-300 p-2">370</td>
                    <td className="border border-gray-300 p-2">46,730,955</td>
                    <td className="border border-gray-300 p-2">49,230,095</td>
                    <td className="border border-gray-300 p-2">(5)</td>
                    <td className="border border-gray-300 p-2">47,156,260</td>
                    <td className="border border-gray-300 p-2">49,635,771</td>
                    <td className="border border-gray-300 p-2">(5)</td>
                  </tr>
                  <tr>
                    <td className="p-2 pl-4">Interest Income</td>
                    <td className="border border-gray-300 p-2">2.1.2</td>
                    <td className="border border-gray-300 p-2">370</td>
                    <td className="border border-gray-300 p-2">41,815,458</td>
                    <td className="border border-gray-300 p-2">45,729,853</td>
                    <td className="border border-gray-300 p-2">(9)</td>
                    <td className="border border-gray-300 p-2">42,201,896</td>
                    <td className="border border-gray-300 p-2">46,102,501</td>
                    <td className="border border-gray-300 p-2">(8)</td>
                  </tr>
                  <tr>
                    <td className="p-2 pl-4">Less: Interest Expenses</td>
                    <td className="border border-gray-300 p-2">2.1.5</td>
                    <td className="border border-gray-300 p-2">371</td>
                    <td className="border border-gray-300 p-2">16,687,381</td>
                    <td className="border border-gray-300 p-2">21,379,499</td>
                    <td className="border border-gray-300 p-2">(22)</td>
                    <td className="border border-gray-300 p-2">16,783,707</td>
                    <td className="border border-gray-300 p-2">21,460,631</td>
                    <td className="border border-gray-300 p-2">(22)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold">
                      Net Interest Income
                    </td>
                    <td className="border border-gray-300 p-2">2.1.1</td>
                    <td className="border border-gray-300 p-2">370</td>
                    <td className="border border-gray-300 p-2">25,128,077</td>
                    <td className="border border-gray-300 p-2">24,350,354</td>
                    <td className="border border-gray-300 p-2">3</td>
                    <td className="border border-gray-300 p-2">25,418,189</td>
                    <td className="border border-gray-300 p-2">24,641,870</td>
                    <td className="border border-gray-300 p-2">3</td>
                  </tr>
                  <tr>
                    <td className="p-2 pl-4">Fee and Commission Income</td>
                    <td className="border border-gray-300 p-2">2.2</td>
                    <td className="border border-gray-300 p-2">372</td>
                    <td className="border border-gray-300 p-2">4,604,441</td>
                    <td className="border border-gray-300 p-2">3,186,422</td>
                    <td className="border border-gray-300 p-2">45</td>
                    <td className="border border-gray-300 p-2">4,642,914</td>
                    <td className="border border-gray-300 p-2">3,217,460</td>
                    <td className="border border-gray-300 p-2">44</td>
                  </tr>
                  {/* Continue with remaining rows in the same pattern */}
                  <tr>
                    <td className="p-2 pl-4">Net Trading Income</td>
                    <td className="border border-gray-300 p-2">2.3</td>
                    <td className="border border-gray-300 p-2">372</td>
                    <td className="border border-gray-300 p-2">101,101</td>
                    <td className="border border-gray-300 p-2">141,629</td>
                    <td className="border border-gray-300 p-2">(29)</td>
                    <td className="border border-gray-300 p-2">101,101</td>
                    <td className="border border-gray-300 p-2">141,629</td>
                    <td className="border border-gray-300 p-2">(29)</td>
                  </tr>
                  <tr>
                    <td className="p-2 pl-4">Other Operating Income</td>
                    <td className="border border-gray-300 p-2">2.4</td>
                    <td className="border border-gray-300 p-2">373</td>
                    <td className="border border-gray-300 p-2">209,955</td>
                    <td className="border border-gray-300 p-2">172,191</td>
                    <td className="border border-gray-300 p-2">22</td>
                    <td className="border border-gray-300 p-2">210,349</td>
                    <td className="border border-gray-300 p-2">174,181</td>
                    <td className="border border-gray-300 p-2">21</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold">
                      Total Operating Income
                    </td>
                    <td className="border border-gray-300 p-2">2.1</td>
                    <td className="border border-gray-300 p-2">370</td>
                    <td className="border border-gray-300 p-2"> 30,043,574 </td>
                    <td className="border border-gray-300 p-2">27,850,596</td>
                    <td className="border border-gray-300 p-2">8</td>
                    <td className="border border-gray-300 p-2">30,372,553</td>
                    <td className="border border-gray-300 p-2">28,175,140</td>
                    <td className="border border-gray-300 p-2">8</td>
                  </tr>
                  <tr>
                    <td className="p-2 pl-4">
                      Less: Impairment Charges/(Reversals)
                    </td>
                    <td className="border border-gray-300 p-2">2.5</td>
                    <td className="border border-gray-300 p-2">373</td>
                    <td className="border border-gray-300 p-2">(256,236)</td>
                    <td className="border border-gray-300 p-2">373,236</td>
                    <td className="border border-gray-300 p-2">({'>'}100)</td>
                    <td className="border border-gray-300 p-2">(261,031)</td>
                    <td className="border border-gray-300 p-2"> 270,093</td>
                    <td className="border border-gray-300 p-2">({'>'}100)</td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold">
                      Net Operating Income
                    </td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2">30,299,810</td>
                    <td className="border border-gray-300 p-2">27,477,360</td>
                    <td className="border border-gray-300 p-2">10</td>
                    <td className="border border-gray-300 p-2">30,633,584</td>
                    <td className="border border-gray-300 p-2">27,905,047</td>
                    <td className="border border-gray-300 p-2">10</td>
                  </tr>
                  {/* Continue with all remaining financial data rows */}
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold">
                      Less: Operating Expenses
                    </td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                  </tr>
                  <tr>
                    <td className="p-2 pl-4">Personnel Expenses</td>
                    <td className="border border-gray-300 p-2">2.6</td>
                    <td className="border border-gray-300 p-2">377</td>
                    <td className="border border-gray-300 p-2">5,146,257 </td>
                    <td className="border border-gray-300 p-2">4,376,475</td>
                    <td className="border border-gray-300 p-2">18</td>
                    <td className="border border-gray-300 p-2">5,267,903 </td>
                    <td className="border border-gray-300 p-2">4,503,482 </td>
                    <td className="border border-gray-300 p-2">17</td>
                  </tr>
                  <tr>
                    <td className="p-2 pl-4">
                      Depreciation of Property, Plant and Equipment
                    </td>
                    <td className="border border-gray-300 p-2">2.7.1</td>
                    <td className="border border-gray-300 p-2">378</td>
                    <td className="border border-gray-300 p-2">979,953</td>
                    <td className="border border-gray-300 p-2">866,348</td>
                    <td className="border border-gray-300 p-2">13</td>
                    <td className="border border-gray-300 p-2">987,173</td>
                    <td className="border border-gray-300 p-2">882,572</td>
                    <td className="border border-gray-300 p-2">12</td>
                  </tr>
                  <tr>
                    <td className="p-2 pl-4">
                      Amortisation of Intangible Assets
                    </td>
                    <td className="border border-gray-300 p-2">2.7.2</td>
                    <td className="border border-gray-300 p-2">378</td>
                    <td className="border border-gray-300 p-2">13,128 </td>
                    <td className="border border-gray-300 p-2">8,414</td>
                    <td className="border border-gray-300 p-2">56</td>
                    <td className="border border-gray-300 p-2">14,355 </td>
                    <td className="border border-gray-300 p-2">11,189</td>
                    <td className="border border-gray-300 p-2">28</td>
                  </tr>
                  <tr>
                    <td className="p-2 pl-4">Other Operating Expenses</td>
                    <td className="border border-gray-300 p-2">2.8</td>
                    <td className="border border-gray-300 p-2">379</td>
                    <td className="border border-gray-300 p-2">3,649,089</td>
                    <td className="border border-gray-300 p-2">3,418,294</td>
                    <td className="border border-gray-300 p-2">7</td>
                    <td className="border border-gray-300 p-2">3,768,235</td>
                    <td className="border border-gray-300 p-2">3,543,136</td>
                    <td className="border border-gray-300 p-2">6</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold">
                      Total Operating Expenses
                    </td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2">9,788,427</td>
                    <td className="border border-gray-300 p-2">8,669,531</td>
                    <td className="border border-gray-300 p-2">13</td>
                    <td className="border border-gray-300 p-2">10,037,666</td>
                    <td className="border border-gray-300 p-2">8,940,379</td>
                    <td className="border border-gray-300 p-2">12</td>
                  </tr>

                  {/* Operating Profit before Tax */}
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold">
                      Operating Profit before Tax on Financial Services
                    </td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2">20,511,383</td>
                    <td className="border border-gray-300 p-2">18,807,829</td>
                    <td className="border border-gray-300 p-2">9</td>
                    <td className="border border-gray-300 p-2">20,595,918</td>
                    <td className="border border-gray-300 p-2">18,964,668</td>
                    <td className="border border-gray-300 p-2">9</td>
                  </tr>

                  {/* Tax on Financial Services */}
                  <tr>
                    <td className="p-2 pl-4">
                      Less: Tax on Financial Services
                    </td>
                    <td className="border border-gray-300 p-2">2.9</td>
                    <td className="border border-gray-300 p-2">379</td>
                    <td className="border border-gray-300 p-2">4,169,710</td>
                    <td className="border border-gray-300 p-2">3,627,622</td>
                    <td className="border border-gray-300 p-2">15</td>
                    <td className="border border-gray-300 p-2">4,183,241</td>
                    <td className="border border-gray-300 p-2">3,630,243</td>
                    <td className="border border-gray-300 p-2">15</td>
                  </tr>

                  {/* Profit before Taxation */}
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold">
                      Profit before Taxation
                    </td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2">16,341,673</td>
                    <td className="border border-gray-300 p-2">15,180,207</td>
                    <td className="border border-gray-300 p-2">8</td>
                    <td className="border border-gray-300 p-2">16,412,677</td>
                    <td className="border border-gray-300 p-2">15,334,425</td>
                    <td className="border border-gray-300 p-2">7</td>
                  </tr>

                  {/* Income Tax Expense */}
                  <tr>
                    <td className="p-2 pl-4">Less: Income Tax Expense</td>
                    <td className="border border-gray-300 p-2">2.10.1 (a)</td>
                    <td className="border border-gray-300 p-2">380</td>
                    <td className="border border-gray-300 p-2">5,536,039</td>
                    <td className="border border-gray-300 p-2">5,616,569</td>
                    <td className="border border-gray-300 p-2">(1)</td>
                    <td className="border border-gray-300 p-2">5,550,743</td>
                    <td className="border border-gray-300 p-2">5,627,414</td>
                    <td className="border border-gray-300 p-2">(1)</td>
                  </tr>

                  {/* Profit for the Year */}
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold">
                      Profit for the Year
                    </td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2">10,805,634</td>
                    <td className="border border-gray-300 p-2">9,563,638</td>
                    <td className="border border-gray-300 p-2">13</td>
                    <td className="border border-gray-300 p-2">10,861,934</td>
                    <td className="border border-gray-300 p-2">9,707,011</td>
                    <td className="border border-gray-300 p-2">12</td>
                  </tr>

                  {/* Profit Attributable to */}
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold pl-4">
                      Profit Attributable to:
                    </td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                  </tr>

                  {/* Equity Holders */}
                  <tr>
                    <td className="p-2 pl-8">Equity Holders of the Company</td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2">10,805,634</td>
                    <td className="border border-gray-300 p-2">9,563,638</td>
                    <td className="border border-gray-300 p-2">13</td>
                    <td className="border border-gray-300 p-2">10,860,002</td>
                    <td className="border border-gray-300 p-2">9,713,917</td>
                    <td className="border border-gray-300 p-2">12</td>
                  </tr>

                  {/* Non-Controlling Interest */}
                  <tr>
                    <td className="p-2 pl-8">Non-Controlling Interest</td>
                    <td className="border border-gray-300 p-2">2.37</td>
                    <td className="border border-gray-300 p-2">444</td>
                    <td className="border border-gray-300 p-2">-</td>
                    <td className="border border-gray-300 p-2">-</td>
                    <td className="border border-gray-300 p-2">-</td>
                    <td className="border border-gray-300 p-2">1,932</td>
                    <td className="border border-gray-300 p-2">(6,906)</td>
                    <td className="border border-gray-300 p-2">{'>'}100</td>
                  </tr>

                  {/* Profit for the Year (duplicate) */}
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold">
                      Profit for the Year
                    </td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2">10,805,634</td>
                    <td className="border border-gray-300 p-2">9,563,638</td>
                    <td className="border border-gray-300 p-2">13</td>
                    <td className="border border-gray-300 p-2">10,861,934</td>
                    <td className="border border-gray-300 p-2">9,707,011</td>
                    <td className="border border-gray-300 p-2">12</td>
                  </tr>

                  {/* Earnings per Share */}
                  <tr>
                    <td className="p-2 pl-4">Earnings per Share:</td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                  </tr>
                  <tr>
                    <td className="p-2 pl-8">Basic/Diluted (Rs.)</td>
                    <td className="border border-gray-300 p-2">2.11.1</td>
                    <td className="border border-gray-300 p-2">382</td>
                    <td className="border border-gray-300 p-2">19.50</td>
                    <td className="border border-gray-300 p-2">17.26</td>
                    <td className="border border-gray-300 p-2">13</td>
                    <td className="border border-gray-300 p-2">19.60</td>
                    <td className="border border-gray-300 p-2">17.53</td>
                    <td className="border border-gray-300 p-2">12</td>
                  </tr>

                  {/* Dividend per Share */}
                  <tr>
                    <td className="p-2 pl-4">Dividend per Share (Rs.)</td>
                    <td className="border border-gray-300 p-2">2.12</td>
                    <td className="border border-gray-300 p-2">382</td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                  </tr>
                  <tr>
                    <td className="p-2 pl-8">
                      Dividend per Share : Gross (Rs.)
                    </td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2">6.50*</td>
                    <td className="border border-gray-300 p-2">5.75</td>
                    <td className="border border-gray-300 p-2">13</td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                  </tr>
                  <tr>
                    <td className="p-2 pl-8">Dividend per Share : Net (Rs.)</td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2">5.53*</td>
                    <td className="border border-gray-300 p-2">4.89</td>
                    <td className="border border-gray-300 p-2">13</td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                  </tr>
                  {/* Add all other rows following the same pattern */}
                </tbody>
              </table>
              <div className="mt-2 text-sm italic">
                *Dividend per share is calculated based on the interim dividend
                paid and the proposed final dividend which is to be approved at
                the Annual General Meeting.
              </div>
              <div className="mt-1 text-sm">
                Accounting Policies and Notes from pages 363 to 478 form an
                integral part of these Financial Statements.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
