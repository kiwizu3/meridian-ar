import React from 'react';
import Image from 'next/image';

export default function IncomeStatement() {
  return (
    <div className="income-statement p-6 bg-themeGreen max-h-[70vh] overflow-y-auto">
      <h1 className="text-4xl font-bold mb-4">INCOME STATEMENT</h1>

      <div className="space-y-8">
        {/* Income Statement Table */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            Year ended 31 March
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-cardGreen rounded-lg">
              <thead>
                <tr className="border-b border-[#F3A847]">
                  <th className="text-left py-3 px-4"></th>
                  <th className="text-left py-3 px-4">Note</th>
                  <th className="text-left py-3 px-4">Page No.</th>
                  <th className="text-left py-3 px-4">Company</th>
                  <th className="text-left py-3 px-4">Group</th>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4"></th>
                  <th className="text-left py-3 px-4"></th>
                  <th className="text-left py-3 px-4"></th>
                  <th className="text-left py-3 px-4">
                    <div>2025 Rs. '000</div>
                    <div>2024 Rs. '000</div>
                    <div>Change %</div>
                  </th>
                  <th className="text-left py-3 px-4">
                    <div>2025 Rs. '000</div>
                    <div>2024 Rs. '000</div>
                    <div>Change %</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Income */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">Income</td>
                  <td className="py-3 px-4">2.1</td>
                  <td className="py-3 px-4">370</td>
                  <td className="py-3 px-4">
                    <div>46,730,955</div>
                    <div>49,230,095</div>
                    <div>(5)</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>47,156,260</div>
                    <div>49,635,771</div>
                    <div>(5)</div>
                  </td>
                </tr>

                {/* Interest Income */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">Interest Income</td>
                  <td className="py-3 px-4">2.1.2</td>
                  <td className="py-3 px-4">370</td>
                  <td className="py-3 px-4">
                    <div>41,815,458</div>
                    <div>45,729,853</div>
                    <div>(9)</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>42,201,896</div>
                    <div>46,102,501</div>
                    <div>(8)</div>
                  </td>
                </tr>

                {/* Less: Interest Expenses */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">
                    Less: Interest Expenses
                  </td>
                  <td className="py-3 px-4">2.1.5</td>
                  <td className="py-3 px-4">371</td>
                  <td className="py-3 px-4">
                    <div>16,687,381</div>
                    <div>21,379,499</div>
                    <div>(22)</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>16,783,707</div>
                    <div>21,460,631</div>
                    <div>(22)</div>
                  </td>
                </tr>

                {/* Net Interest Income */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">
                    Net Interest Income
                  </td>
                  <td className="py-3 px-4">2.1.1</td>
                  <td className="py-3 px-4">370</td>
                  <td className="py-3 px-4">
                    <div>25,128,077</div>
                    <div>24,350,354</div>
                    <div>3</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>25,418,189</div>
                    <div>24,641,870</div>
                    <div>3</div>
                  </td>
                </tr>

                {/* Fee and Commission Income */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">
                    Fee and Commission Income
                  </td>
                  <td className="py-3 px-4">2.2</td>
                  <td className="py-3 px-4">372</td>
                  <td className="py-3 px-4">
                    <div>4,604,441</div>
                    <div>3,186,422</div>
                    <div>45</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>4,642,914</div>
                    <div>3,217,460</div>
                    <div>44</div>
                  </td>
                </tr>

                {/* Net Trading Income */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">
                    Net Trading Income
                  </td>
                  <td className="py-3 px-4">2.3</td>
                  <td className="py-3 px-4">372</td>
                  <td className="py-3 px-4">
                    <div>101,101</div>
                    <div>141,629</div>
                    <div>(29)</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>101,101</div>
                    <div>141,629</div>
                    <div>(29)</div>
                  </td>
                </tr>

                {/* Other Operating Income */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">
                    Other Operating Income
                  </td>
                  <td className="py-3 px-4">2.4</td>
                  <td className="py-3 px-4">373</td>
                  <td className="py-3 px-4">
                    <div>209,955</div>
                    <div>172,191</div>
                    <div>22</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>210,349</div>
                    <div>174,181</div>
                    <div>21</div>
                  </td>
                </tr>

                {/* Total Operating Income */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">
                    Total Operating Income
                  </td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4">
                    <div>30,043,574</div>
                    <div>27,850,596</div>
                    <div>8</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>30,372,553</div>
                    <div>28,175,140</div>
                    <div>8</div>
                  </td>
                </tr>

                {/* Less: Impairment Charges/(Reversals) */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">
                    Less: Impairment Charges/(Reversals)
                  </td>
                  <td className="py-3 px-4">2.5</td>
                  <td className="py-3 px-4">373</td>
                  <td className="py-3 px-4">
                    <div>(256,236)</div>
                    <div>373,236</div>
                    <div>(&gt;100)</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>(261,031)</div>
                    <div>270,093</div>
                    <div>(&gt;100)</div>
                  </td>
                </tr>

                {/* Net Operating Income */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">
                    Net Operating Income
                  </td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4">
                    <div>30,299,810</div>
                    <div>27,477,360</div>
                    <div>10</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>30,633,584</div>
                    <div>27,905,047</div>
                    <div>10</div>
                  </td>
                </tr>

                {/* Less: Operating Expenses */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">
                    Less: Operating Expenses
                  </td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                </tr>

                {/* Personnel Expenses */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 pl-8">Personnel Expenses</td>
                  <td className="py-3 px-4">2.6</td>
                  <td className="py-3 px-4">377</td>
                  <td className="py-3 px-4">
                    <div>5,146,257</div>
                    <div>4,376,475</div>
                    <div>18</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>5,267,903</div>
                    <div>4,503,482</div>
                    <div>17</div>
                  </td>
                </tr>

                {/* Depreciation */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 pl-8">
                    Depreciation of Property, Plant and Equipment
                  </td>
                  <td className="py-3 px-4">2.7.1</td>
                  <td className="py-3 px-4">378</td>
                  <td className="py-3 px-4">
                    <div>979,953</div>
                    <div>866,348</div>
                    <div>13</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>987,173</div>
                    <div>882,572</div>
                    <div>12</div>
                  </td>
                </tr>

                {/* Amortisation */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 pl-8">
                    Amortisation of Intangible Assets
                  </td>
                  <td className="py-3 px-4">2.7.2</td>
                  <td className="py-3 px-4">378</td>
                  <td className="py-3 px-4">
                    <div>13,128</div>
                    <div>8,414</div>
                    <div>56</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>14,355</div>
                    <div>11,189</div>
                    <div>28</div>
                  </td>
                </tr>

                {/* Other Operating Expenses */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 pl-8">Other Operating Expenses</td>
                  <td className="py-3 px-4">2.8</td>
                  <td className="py-3 px-4">379</td>
                  <td className="py-3 px-4">
                    <div>3,649,089</div>
                    <div>3,418,294</div>
                    <div>7</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>3,768,235</div>
                    <div>3,543,136</div>
                    <div>6</div>
                  </td>
                </tr>

                {/* Total Operating Expenses */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">
                    Total Operating Expenses
                  </td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4">
                    <div>9,788,427</div>
                    <div>8,669,531</div>
                    <div>13</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>10,037,666</div>
                    <div>8,940,379</div>
                    <div>12</div>
                  </td>
                </tr>

                {/* Operating Profit before Tax */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">
                    Operating Profit before Tax on Financial Services
                  </td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4">
                    <div>20,511,383</div>
                    <div>18,807,829</div>
                    <div>9</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>20,595,918</div>
                    <div>18,964,668</div>
                    <div>9</div>
                  </td>
                </tr>

                {/* Less: Tax on Financial Services */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">
                    Less: Tax on Financial Services
                  </td>
                  <td className="py-3 px-4">2.9</td>
                  <td className="py-3 px-4">379</td>
                  <td className="py-3 px-4">
                    <div>4,169,710</div>
                    <div>3,627,622</div>
                    <div>15</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>4,183,241</div>
                    <div>3,630,243</div>
                    <div>15</div>
                  </td>
                </tr>

                {/* Profit before Taxation */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">
                    Profit before Taxation
                  </td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4">
                    <div>16,341,673</div>
                    <div>15,180,207</div>
                    <div>8</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>16,412,677</div>
                    <div>15,334,425</div>
                    <div>7</div>
                  </td>
                </tr>

                {/* Less: Income Tax Expense */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">
                    Less: Income Tax Expense
                  </td>
                  <td className="py-3 px-4">2.10.1 (a)</td>
                  <td className="py-3 px-4">380</td>
                  <td className="py-3 px-4">
                    <div>5,536,039</div>
                    <div>5,616,569</div>
                    <div>(1)</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>5,550,743</div>
                    <div>5,627,414</div>
                    <div>(1)</div>
                  </td>
                </tr>

                {/* Profit for the Year */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">
                    Profit for the Year
                  </td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4">
                    <div>10,805,634</div>
                    <div>9,563,638</div>
                    <div>13</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>10,861,934</div>
                    <div>9,707,011</div>
                    <div>12</div>
                  </td>
                </tr>

                {/* Profit Attributable To */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 pl-8">
                    Profit Attributable to: Equity Holders of the Company
                  </td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4">
                    <div>10,805,634</div>
                    <div>9,563,638</div>
                    <div>13</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>10,860,002</div>
                    <div>9,713,917</div>
                    <div>12</div>
                  </td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 pl-8">Non-Controlling Interest</td>
                  <td className="py-3 px-4">2.37</td>
                  <td className="py-3 px-4">444</td>
                  <td className="py-3 px-4">
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>1,932</div>
                    <div>(6,906)</div>
                    <div>&gt;100</div>
                  </td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">
                    Profit for the Year
                  </td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4">
                    <div>10,805,634</div>
                    <div>9,563,638</div>
                    <div>13</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>10,861,934</div>
                    <div>9,707,011</div>
                    <div>12</div>
                  </td>
                </tr>

                {/* Earnings per Share */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">
                    Earnings per Share: Basic/Diluted (Rs.)
                  </td>
                  <td className="py-3 px-4">2.11.1</td>
                  <td className="py-3 px-4">382</td>
                  <td className="py-3 px-4">
                    <div>19.50</div>
                    <div>17.26</div>
                    <div>13</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>19.60</div>
                    <div>17.53</div>
                    <div>12</div>
                  </td>
                </tr>

                {/* Dividend per Share */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">
                    Dividend per Share (Rs.)
                  </td>
                  <td className="py-3 px-4">2.12</td>
                  <td className="py-3 px-4">382</td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 pl-8">
                    Dividend per Share : Gross (Rs.)
                  </td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4">
                    <div>6.50*</div>
                    <div>5.75</div>
                    <div>13</div>
                  </td>
                  <td className="py-3 px-4"></td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 pl-8">
                    Dividend per Share : Net (Rs.)
                  </td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4">
                    <div>5.53*</div>
                    <div>4.89</div>
                    <div>13</div>
                  </td>
                  <td className="py-3 px-4"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-cardGreen p-4 rounded-lg mt-4">
            <p className="text-sm italic">
              *Dividend per share is calculated based on the interim dividend
              paid and the proposed final dividend which is to be approved at
              the Annual General Meeting.
            </p>
            <p className="mt-2">
              Accounting Policies and Notes from pages 363 to 478 form an
              integral part of these Financial Statements.
            </p>
          </div>
        </div>

        {/* Comprehensive Income Statement */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            Statement of Profit or Loss and Comprehensive Income
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-cardGreen rounded-lg">
              <thead>
                <tr className="border-b border-[#F3A847]">
                  <th className="text-left py-3 px-4"></th>
                  <th className="text-left py-3 px-4">Note</th>
                  <th className="text-left py-3 px-4">Page No.</th>
                  <th className="text-left py-3 px-4">
                    <div>Company</div>
                    <div>2025 Rs. '000</div>
                    <div>2024 Rs. '000</div>
                    <div>Change %</div>
                  </th>
                  <th className="text-left py-3 px-4">
                    <div>Group</div>
                    <div>2025 Rs. '000</div>
                    <div>2024 Rs. '000</div>
                    <div>Change %</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Profit for the Year */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">
                    Profit for the Year
                  </td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4">
                    <div>10,805,634</div>
                    <div>9,563,638</div>
                    <div>13</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>10,861,934</div>
                    <div>9,707,011</div>
                    <div>12</div>
                  </td>
                </tr>

                {/* Other Comprehensive Income */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">
                    Other Comprehensive Income that will be Reclassified to
                    Income Statement
                  </td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                </tr>

                {/* Gains/(Losses) */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 pl-8">
                    Gains/(Losses) from Translating the Financial Statements of
                    the Foreign Operations
                  </td>
                  <td className="py-3 px-4">2,35.3</td>
                  <td className="py-3 px-4">443</td>
                  <td className="py-3 px-4">
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>(13,210)</div>
                    <div>(73,048)</div>
                    <div>(82)</div>
                  </td>
                </tr>

                {/* Deferred Tax */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 pl-8">
                    Less: Deferred Tax Charge/(Reversal) on above Items
                  </td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4">
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                  </td>
                </tr>

                {/* Net Other Comprehensive Income */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 pl-8">
                    Net Other Comprehensive Income that will be Reclassified to
                    Income Statement
                  </td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4">
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>(13,210)</div>
                    <div>(73,048)</div>
                    <div>(82)</div>
                  </td>
                </tr>

                {/* Other Comprehensive Income that will never be reclassified */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">
                    Other Comprehensive Income that will never be Reclassified
                    to Income Statement
                  </td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                </tr>

                {/* Net Gains/(Losses) */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 pl-8">
                    Net Gains/(Losses) on Investment in Equity Instruments -
                    Fair Value Through Other Comprehensive Income
                  </td>
                  <td className="py-3 px-4">2,35.2</td>
                  <td className="py-3 px-4">443</td>
                  <td className="py-3 px-4">
                    <div>8,649</div>
                    <div>1,199</div>
                    <div>&gt;100</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>8,649</div>
                    <div>1,199</div>
                    <div>&gt;100</div>
                  </td>
                </tr>

                {/* Actuarial Gains/(Losses) */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 pl-8">
                    Actuarial Gains/(Losses) on Defined Benefit Plans
                  </td>
                  <td className="py-3 px-4">2,33.3</td>
                  <td className="py-3 px-4">441</td>
                  <td className="py-3 px-4">
                    <div>16,392</div>
                    <div>(53,706)</div>
                    <div>&gt;100</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>16,392</div>
                    <div>(54,333)</div>
                    <div>&gt;100</div>
                  </td>
                </tr>

                {/* Deferred Tax Charge */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 pl-8">
                    Less: Deferred Tax Charge/(Reversal) on Actuarial Gains and
                    Losses
                  </td>
                  <td className="py-3 px-4">2,10.1 (b)</td>
                  <td className="py-3 px-4">380</td>
                  <td className="py-3 px-4">
                    <div>4,917</div>
                    <div>(16,112)</div>
                    <div>&gt;100</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>4,917</div>
                    <div>(16,112)</div>
                    <div>&gt;100</div>
                  </td>
                </tr>

                {/* Net Actuarial Gains/(Losses) */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 pl-8">
                    Net Actuarial Gains/(Losses) on Defined Benefit Plans
                  </td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4">
                    <div>11,475</div>
                    <div>(37,594)</div>
                    <div>&gt;100</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>11,475</div>
                    <div>(38,221)</div>
                    <div>&gt;100</div>
                  </td>
                </tr>

                {/* Net Other Comprehensive Income */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 pl-8">
                    Net Other Comprehensive Income that will never be
                    Reclassified to Income Statement
                  </td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4">
                    <div>20,124</div>
                    <div>(36,395)</div>
                    <div>&gt;100</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>20,124</div>
                    <div>(37,022)</div>
                    <div>&gt;100</div>
                  </td>
                </tr>

                {/* Other Comprehensive Income for the Year */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">
                    Other Comprehensive Income for the Year, Net of Tax
                  </td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4">
                    <div>20,124</div>
                    <div>(36,395)</div>
                    <div>&gt;100</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>6,914</div>
                    <div>(110,070)</div>
                    <div>&gt;100</div>
                  </td>
                </tr>

                {/* Total Comprehensive Income */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">
                    Total Comprehensive Income for the Year, Net of Tax
                  </td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4">
                    <div>10,825,758</div>
                    <div>9,527,243</div>
                    <div>14</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>10,868,848</div>
                    <div>9,596,941</div>
                    <div>13</div>
                  </td>
                </tr>

                {/* Attributable To */}
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 pl-8">Attributable to:</td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 pl-12">
                    Equity Holders of the Company
                  </td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4">
                    <div>10,825,758</div>
                    <div>9,527,243</div>
                    <div>14</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>10,866,916</div>
                    <div>9,604,068</div>
                    <div>13</div>
                  </td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 pl-12">Non-Controlling Interest</td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4">
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>1,932</div>
                    <div>(7,127)</div>
                    <div>&gt;100</div>
                  </td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">
                    Total Comprehensive Income for the Year, Net of Tax
                  </td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4">
                    <div>10,825,758</div>
                    <div>9,527,243</div>
                    <div>14</div>
                  </td>
                  <td className="py-3 px-4">
                    <div>10,868,848</div>
                    <div>9,596,941</div>
                    <div>13</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-cardGreen p-4 rounded-lg mt-4">
            <p>
              Accounting Policies and Notes from pages 363 to 478 form an
              integral part of these Financial Statements.
            </p>
          </div>
        </div>

        {/* Page Reference */}
        <div className="bg-cardGreen p-4 rounded-lg text-center">
          <p>LB Finance PLC Integrated Annual Report 2024/25 356</p>
        </div>
      </div>
    </div>
  );
}
