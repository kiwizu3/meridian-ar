import React from 'react';

export default function FinancialHighlights() {
  return (
    <div className="financial-highlights p-6 bg-themeGreen max-h-[70vh] overflow-y-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">FINANCIAL HIGHLIGHTS</h1>
      </header>

      <div className="space-y-8">
        {/* Operating Results Table */}

        <div className="overflow-x-auto mb-8">
          <h3 className="text-xl font-bold mb-4">Operating Results</h3>
          <table className="min-w-full border mb-8">
            <thead>
              <tr className="bg-cardGreen">
                <th className="border border-white p-2 text-left">Indicator</th>
                <th colSpan={3} className="border border-white p-2 text-center">
                  Company
                </th>
                <th colSpan={3} className="border border-white p-2 text-center">
                  Group
                </th>
              </tr>
              <tr className="bg-cardGreen">
                <th className="border border-white p-2"></th>
                <th className="border border-white p-2">2024/25</th>
                <th className="border border-white p-2">2023/24</th>
                <th className="border border-white p-2">Change (%)</th>
                <th className="border border-white p-2">2024/25</th>
                <th className="border border-white p-2">2023/24</th>
                <th className="border border-white p-2">Change (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white p-2">Income</td>
                <td className="border border-white p-2">
                  Rs. Million 46,730.95
                </td>
                <td className="border border-white p-2">49,230.09</td>
                <td className="border border-white p-2">(5.08)</td>
                <td className="border border-white p-2">47,156.26</td>
                <td className="border border-white p-2">49,635.77</td>
                <td className="border border-white p-2">(5.00)</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">Interest Income</td>
                <td className="border border-white p-2">
                  Rs. Million 41,815.46
                </td>
                <td className="border border-white p-2">45,729.85</td>
                <td className="border border-white p-2">(8.56)</td>
                <td className="border border-white p-2">42,201.90</td>
                <td className="border border-white p-2">46,102.50</td>
                <td className="border border-white p-2">(8.46)</td>
              </tr>
              <tr>
                <td className="border border-white p-2">Net Interest Income</td>
                <td className="border border-white p-2">
                  Rs. Million 25,128.08
                </td>
                <td className="border border-white p-2">24,350.35</td>
                <td className="border border-white p-2">3.19</td>
                <td className="border border-white p-2">25,418.19</td>
                <td className="border border-white p-2">24,641.87</td>
                <td className="border border-white p-2">3.15</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">
                  Profit before Taxation (PBT)
                </td>
                <td className="border border-white p-2">
                  Rs. Million 16,341.67
                </td>
                <td className="border border-white p-2">15,180.21</td>
                <td className="border border-white p-2">7.65</td>
                <td className="border border-white p-2">16,412.68</td>
                <td className="border border-white p-2">15,334.43</td>
                <td className="border border-white p-2">7.03</td>
              </tr>
              <tr>
                <td className="border border-white p-2">
                  Profit after Taxation (PAT)
                </td>
                <td className="border border-white p-2">
                  Rs. Million 10,805.63
                </td>
                <td className="border border-white p-2">9,563.64</td>
                <td className="border border-white p-2">12.99</td>
                <td className="border border-white p-2">10,861.93</td>
                <td className="border border-white p-2">9,707.01</td>
                <td className="border border-white p-2">11.90</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto mb-8">
          {/* Financial Position Table */}
          <h3 className="text-xl font-bold mb-4">Financial Position</h3>
          <table className="min-w-full border mb-8">
            <thead>
              <tr className="bg-cardGreen">
                <th className="border border-white p-2 text-left">Indicator</th>
                <th colSpan={3} className="border border-white p-2 text-center">
                  Company
                </th>
                <th colSpan={3} className="border border-white p-2 text-center">
                  Group
                </th>
              </tr>
              <tr className="bg-cardGreen">
                <th className="border border-white p-2"></th>
                <th className="border border-white p-2">2024/25</th>
                <th className="border border-white p-2">2023/24</th>
                <th className="border border-white p-2">Change (%)</th>
                <th className="border border-white p-2">2024/25</th>
                <th className="border border-white p-2">2023/24</th>
                <th className="border border-white p-2">Change (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white p-2">Total Assets</td>
                <td className="border border-white p-2">
                  Rs. Million 240,890.24
                </td>
                <td className="border border-white p-2">202,176.51</td>
                <td className="border border-white p-2">19.15</td>
                <td className="border border-white p-2">241,984.41</td>
                <td className="border border-white p-2">203,147.89</td>
                <td className="border border-white p-2">19.12</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">
                  Loans and Receivables
                </td>
                <td className="border border-white p-2">
                  Rs. Million 197,766.69
                </td>
                <td className="border border-white p-2">161,291.49</td>
                <td className="border border-white p-2">22.61</td>
                <td className="border border-white p-2">199,271.05</td>
                <td className="border border-white p-2">162,521.73</td>
                <td className="border border-white p-2">22.61</td>
              </tr>
              <tr>
                <td className="border border-white p-2">Due to Depositors</td>
                <td className="border border-white p-2">
                  Rs. Million 138,496.87
                </td>
                <td className="border border-white p-2">122,808.12</td>
                <td className="border border-white p-2">12.78</td>
                <td className="border border-white p-2">138,823.90</td>
                <td className="border border-white p-2">123,034.55</td>
                <td className="border border-white p-2">12.83</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">Borrowings</td>
                <td className="border border-white p-2">
                  Rs. Million 42,417.09
                </td>
                <td className="border border-white p-2">27,193.41</td>
                <td className="border border-white p-2">55.98</td>
                <td className="border border-white p-2">42,805.11</td>
                <td className="border border-white p-2">27,447.26</td>
                <td className="border border-white p-2">55.95</td>
              </tr>
              <tr>
                <td className="border border-white p-2">Equity</td>
                <td className="border border-white p-2">
                  Rs. Million 51,265.99
                </td>
                <td className="border border-white p-2">43,626.07</td>
                <td className="border border-white p-2">17.51</td>
                <td className="border border-white p-2">51,590.15</td>
                <td className="border border-white p-2">43,911.26</td>
                <td className="border border-white p-2">17.49</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto mb-8">
          {/* Investor Information Table */}
          <h3 className="text-xl font-bold mb-4">Investor Information</h3>
          <table className="w-full border-collapse mb-8">
            <thead>
              <tr className="bg-cardGreen">
                <th className="border border-white p-2 text-left">Indicator</th>
                <th colSpan={3} className="border border-white p-2 text-center">
                  Company
                </th>
                <th colSpan={3} className="border border-white p-2 text-center">
                  Group
                </th>
              </tr>
              <tr className="bg-cardGreen">
                <th className="border border-white p-2"></th>
                <th className="border border-white p-2">2024/25</th>
                <th className="border border-white p-2">2023/24</th>
                <th className="border border-white p-2">Change (%)</th>
                <th className="border border-white p-2">2024/25</th>
                <th className="border border-white p-2">2023/24</th>
                <th className="border border-white p-2">Change (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white p-2">
                  Market Price per Share
                </td>
                <td className="border border-white p-2">Rs. 86.50</td>
                <td className="border border-white p-2">62.80</td>
                <td className="border border-white p-2">37.74</td>
                <td className="border border-white p-2">N/A</td>
                <td className="border border-white p-2">N/A</td>
                <td className="border border-white p-2">-</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">
                  Market Capitalisation
                </td>
                <td className="border border-white p-2">
                  Rs. Million 47,925.94
                </td>
                <td className="border border-white p-2">34,794.79</td>
                <td className="border border-white p-2">37.74</td>
                <td className="border border-white p-2">N/A</td>
                <td className="border border-white p-2">N/A</td>
                <td className="border border-white p-2">-</td>
              </tr>
              <tr>
                <td className="border border-white p-2">
                  Net Asset Value per Share
                </td>
                <td className="border border-white p-2">Rs. 92.53</td>
                <td className="border border-white p-2">78.74</td>
                <td className="border border-white p-2">17.51</td>
                <td className="border border-white p-2">93.11</td>
                <td className="border border-white p-2">79.25</td>
                <td className="border border-white p-2">17.49</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">
                  Earning per Share (EPS) Basic
                </td>
                <td className="border border-white p-2">Rs. 19.50</td>
                <td className="border border-white p-2">17.26</td>
                <td className="border border-white p-2">12.97</td>
                <td className="border border-white p-2">19.60</td>
                <td className="border border-white p-2">17.53</td>
                <td className="border border-white p-2">11.79</td>
              </tr>
              <tr>
                <td className="border border-white p-2">
                  Earning per Share (EPS) Diluted
                </td>
                <td className="border border-white p-2">Rs. 19.50</td>
                <td className="border border-white p-2">17.26</td>
                <td className="border border-white p-2">12.97</td>
                <td className="border border-white p-2">19.60</td>
                <td className="border border-white p-2">17.53</td>
                <td className="border border-white p-2">11.79</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">
                  Dividend per Share (DPS)
                </td>
                <td className="border border-white p-2">Rs. 6.50</td>
                <td className="border border-white p-2">5.75</td>
                <td className="border border-white p-2">13.04</td>
                <td className="border border-white p-2">N/A</td>
                <td className="border border-white p-2">N/A</td>
                <td className="border border-white p-2">-</td>
              </tr>
              <tr>
                <td className="border border-white p-2">Dividend Yield</td>
                <td className="border border-white p-2">% 7.51</td>
                <td className="border border-white p-2">9.16</td>
                <td className="border border-white p-2">(18.01)</td>
                <td className="border border-white p-2">N/A</td>
                <td className="border border-white p-2">N/A</td>
                <td className="border border-white p-2">-</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">
                  Dividend Payout Ratio
                </td>
                <td className="border border-white p-2">% 33.33</td>
                <td className="border border-white p-2">33.31</td>
                <td className="border border-white p-2">0.06</td>
                <td className="border border-white p-2">N/A</td>
                <td className="border border-white p-2">N/A</td>
                <td className="border border-white p-2">-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto mb-8">
          {/* Statutory Ratios Table */}
          <h3 className="text-xl font-bold mb-4">Statutory Ratios</h3>
          <table className="w-full border-collapse mb-8">
            <thead>
              <tr className="bg-cardGreen">
                <th className="border border-white p-2 text-left">Indicator</th>
                <th colSpan={3} className="border border-white p-2 text-center">
                  Company
                </th>
                <th colSpan={3} className="border border-white p-2 text-center">
                  Group
                </th>
              </tr>
              <tr className="bg-cardGreen">
                <th className="border border-white p-2"></th>
                <th className="border border-white p-2">2024/25</th>
                <th className="border border-white p-2">2023/24</th>
                <th className="border border-white p-2">Change (%)</th>
                <th className="border border-white p-2">2024/25</th>
                <th className="border border-white p-2">2023/24</th>
                <th className="border border-white p-2">Change (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white p-2">
                  Core Capital to Risk Weighted Assets Ratio (Tier I) (Minimum
                  10%)
                </td>
                <td className="border border-white p-2">% 30.45</td>
                <td className="border border-white p-2">31.45</td>
                <td className="border border-white p-2">(3.18)</td>
                <td className="border border-white p-2">30.37</td>
                <td className="border border-white p-2">31.59</td>
                <td className="border border-white p-2">(3.86)</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">
                  Total Capital to Risk Weighted Assets Ratio (Tier I & II)
                  (Minimum 14%)
                </td>
                <td className="border border-white p-2">% 31.31</td>
                <td className="border border-white p-2">32.19</td>
                <td className="border border-white p-2">(2.73)</td>
                <td className="border border-white p-2">31.38</td>
                <td className="border border-white p-2">32.33</td>
                <td className="border border-white p-2">(2.94)</td>
              </tr>
              <tr>
                <td className="border border-white p-2">
                  Equity to Deposits (Minimum 10%)
                </td>
                <td className="border border-white p-2">% 37.02</td>
                <td className="border border-white p-2">35.52</td>
                <td className="border border-white p-2">4.21</td>
                <td className="border border-white p-2">37.16</td>
                <td className="border border-white p-2">35.69</td>
                <td className="border border-white p-2">4.12</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">Liquidity Ratio</td>
                <td className="border border-white p-2">% 20.01</td>
                <td className="border border-white p-2">21.02</td>
                <td className="border border-white p-2">(4.80)</td>
                <td className="border border-white p-2">19.98</td>
                <td className="border border-white p-2">21.21</td>
                <td className="border border-white p-2">(5.80)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto mb-8">
          {/* Other Ratios Table */}
          <h3 className="text-xl font-bold mb-4">Other Ratios</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-cardGreen">
                <th className="border border-white p-2 text-left">Indicator</th>
                <th colSpan={3} className="border border-white p-2 text-center">
                  Company
                </th>
                <th colSpan={3} className="border border-white p-2 text-center">
                  Group
                </th>
              </tr>
              <tr className="bg-cardGreen">
                <th className="border border-white p-2"></th>
                <th className="border border-white p-2">2024/25</th>
                <th className="border border-white p-2">2023/24</th>
                <th className="border border-white p-2">Change (%)</th>
                <th className="border border-white p-2">2024/25</th>
                <th className="border border-white p-2">2023/24</th>
                <th className="border border-white p-2">Change (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-white p-2">
                  Return on Assets (ROA)
                </td>
                <td className="border border-white p-2">% 4.88</td>
                <td className="border border-white p-2">4.97</td>
                <td className="border border-white p-2">(1.81)</td>
                <td className="border border-white p-2">4.88</td>
                <td className="border border-white p-2">5.03</td>
                <td className="border border-white p-2">(2.98)</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">
                  Return on Equity (ROE)
                </td>
                <td className="border border-white p-2">% 22.77</td>
                <td className="border border-white p-2">23.40</td>
                <td className="border border-white p-2">(2.69)</td>
                <td className="border border-white p-2">22.72</td>
                <td className="border border-white p-2">23.57</td>
                <td className="border border-white p-2">(3.61)</td>
              </tr>
              <tr>
                <td className="border border-white p-2">
                  Net Interest Margin (NIM)
                </td>
                <td className="border border-white p-2">% 12.22</td>
                <td className="border border-white p-2">13.72</td>
                <td className="border border-white p-2">(10.93)</td>
                <td className="border border-white p-2">12.16</td>
                <td className="border border-white p-2">13.68</td>
                <td className="border border-white p-2">(11.11)</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">Cost to Income</td>
                <td className="border border-white p-2">% 32.58</td>
                <td className="border border-white p-2">31.13</td>
                <td className="border border-white p-2">4.66</td>
                <td className="border border-white p-2">33.05</td>
                <td className="border border-white p-2">31.74</td>
                <td className="border border-white p-2">4.13</td>
              </tr>
              <tr>
                <td className="border border-white p-2">Loan to Deposits</td>
                <td className="border border-white p-2">Times 1.43</td>
                <td className="border border-white p-2">1.31</td>
                <td className="border border-white p-2">8.72</td>
                <td className="border border-white p-2">1.44</td>
                <td className="border border-white p-2">1.32</td>
                <td className="border border-white p-2">8.67</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">
                  Gross Non-Performing Loans Ratio (Gross NPL)
                </td>
                <td className="border border-white p-2">% 2.25</td>
                <td className="border border-white p-2">3.54</td>
                <td className="border border-white p-2">(36.44)</td>
                <td className="border border-white p-2">2.29</td>
                <td className="border border-white p-2">3.60</td>
                <td className="border border-white p-2">(36.39)</td>
              </tr>
              <tr>
                <td className="border border-white p-2">
                  Net Non-Performing Loans Ratio (Net NPL)
                </td>
                <td className="border border-white p-2">% (1.22)</td>
                <td className="border border-white p-2">(0.79)</td>
                <td className="border border-white p-2">54.43</td>
                <td className="border border-white p-2">(1.19)</td>
                <td className="border border-white p-2">(0.74)</td>
                <td className="border border-white p-2">60.81</td>
              </tr>
              <tr className="bg-cardGreen">
                <td className="border border-white p-2">
                  Provision Coverage Ratio
                </td>
                <td className="border border-white p-2">% 154.02</td>
                <td className="border border-white p-2">122.42</td>
                <td className="border border-white p-2">25.81</td>
                <td className="border border-white p-2">151.84</td>
                <td className="border border-white p-2">119.79</td>
                <td className="border border-white p-2">26.75</td>
              </tr>
              <tr>
                <td className="border border-white p-2">
                  Total Impairment as a Percentage of Gross Loans and
                  Receivables
                </td>
                <td className="border border-white p-2">% 3.47</td>
                <td className="border border-white p-2">4.34</td>
                <td className="border border-white p-2">(20.05)</td>
                <td className="border border-white p-2">3.48</td>
                <td className="border border-white p-2">4.50</td>
                <td className="border border-white p-2">(22.67)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
