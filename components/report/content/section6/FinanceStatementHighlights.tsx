import React from 'react';
import Image from 'next/image';

export default function FinancialStatementHighlights() {
  return (
    <div className="financial-statement p-6 bg-themeGreen max-h-[70vh] overflow-y-auto">
      <div className="grid grid-cols-1 gap-6">
        <h1 className="text-4xl font-bold mb-2">
          Financial Statement Highlights
        </h1>
        <div>
          <h2 className="text-2xl font-semibold">Operating Results</h2>
          {/* Operating Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Income */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-black font-bold mb-2">Income</h3>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/report/content/income.png"
                  alt="Income chart"
                  width={400}
                  height={200}
                />
              </div>
            </div>

            {/* Net Interest Income */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-black font-bold mb-2">Net Interest Income</h3>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/report/content/net-interest-income.png"
                  alt="Net Interest Income chart"
                  width={400}
                  height={200}
                />
              </div>
            </div>

            {/* Profit before Taxation (PBT) */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-black font-bold mb-2">
                Profit before Taxation (PBT)
              </h3>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/report/content/Profit before Taxation (PBT).png"
                  alt="PBT chart"
                  width={400}
                  height={200}
                />
              </div>
            </div>

            {/* Profit After Taxation (PAT) */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-black font-bold mb-2">
                Profit After Taxation (PBT)
              </h3>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/report/content/Profit after Taxation (PAT).png"
                  alt="PAT chart"
                  width={400}
                  height={200}
                />
              </div>
            </div>

            {/* Cost to Income (CI Ratio) */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-black font-bold mb-2">
                Cost to Income (CI Ratio)
              </h3>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/report/content/Cost to Income (CI Ratio).png"
                  alt="CI Ratio chart"
                  width={400}
                  height={200}
                />
              </div>
            </div>
            {/* Dividend Payout vs Retained Profits */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-black font-bold mb-2">
                Dividend Payout vs Retained Profits
              </h3>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/report/content/Dividend Payout vs Retained Profits.png"
                  alt="Dividend chart"
                  width={400}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Profitability Ratios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Gross Profit Margin */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Gross Profit Margin*</h3>
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <Image
                src="/images/report/content/placeholder-gross-margin.png"
                alt="Gross Profit Margin chart"
                width={300}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <div className="mt-2">
              <p>2025: 53.77%</p>
              <p>2024: 49.46%</p>
              <p className="text-xs mt-1">
                *Net interest income as a % of income
              </p>
            </div>
          </div>

          {/* Operating Profit Margin */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Operating Profit Margin*</h3>
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <Image
                src="/images/report/content/.png"
                alt="Operating Profit Margin chart"
                width={300}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <div className="mt-2">
              <p>2025: 53.77%</p>
              <p>2024: 49.46%</p>
              <p className="text-xs mt-1">
                *Operating profit before tax as a % of income
              </p>
            </div>
          </div>

          {/* Net Profit Margin */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Net Profit Margin*</h3>
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <Image
                src="/images/report/content/.png"
                alt="Net Profit Margin chart"
                width={300}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <div className="mt-2">
              <p>2025: 23.12%</p>
              <p>2024: 19.43%</p>
              <p className="text-xs mt-1">*Profit after tax as a % of income</p>
            </div>
          </div>
        </div>

        {/* EBIT, ROE, ROA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* EBIT */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">
              Earnings before Interest & Tax (EBIT)
            </h3>
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <Image
                src="/images/report/content/.png"
                alt="EBIT chart"
                width={300}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <div className="mt-2">
              <p>2025: Rs. 33.03 Bn</p>
              <p>2024: Rs. 36.56 Bn</p>
            </div>
          </div>

          {/* ROE */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Return on Equity (ROE)</h3>
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <Image
                src="/images/report/content/.png"
                alt="ROE chart"
                width={300}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <div className="mt-2">
              <p>2025: 22.77%</p>
              <p>2024: 23.40%</p>
            </div>
          </div>

          {/* ROA */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Return on Assets (ROA)</h3>
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <Image
                src="/images/report/content/.png"
                alt="ROA chart"
                width={300}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <div className="mt-2">
              <p>2025: 4.88%</p>
              <p>2024: 4.97%</p>
            </div>
          </div>
        </div>

        {/* Equity Ratios */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* EPS */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Earnings per Share (EPS)</h3>
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <Image
                src="/images/report/content/.png"
                alt="EPS chart"
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <div className="mt-2">
              <p>2025: Rs. 19.50</p>
              <p>2024: Rs. 17.26</p>
            </div>
          </div>

          {/* PE Ratio */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Price Earnings Ratio</h3>
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <Image
                src="/images/report/content/.png"
                alt="PE Ratio chart"
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <div className="mt-2">
              <p>2025: 4.44 times</p>
              <p>2024: 3.64 times</p>
            </div>
          </div>

          {/* Market Cap */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Market Capitalisation</h3>
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <Image
                src="/images/report/content/.png"
                alt="Market Cap chart"
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <div className="mt-2">
              <p>2025: Rs. 47.93 Bn</p>
              <p>2024: Rs. 34.79 Bn</p>
            </div>
          </div>

          {/* NAV */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Net Asset Value per Share</h3>
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <Image
                src="/images/report/content/.png"
                alt="NAV chart"
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <div className="mt-2">
              <p>2025: Rs. 92.53</p>
              <p>2024: Rs. 78.74</p>
            </div>
          </div>
        </div>

        {/* Market Price */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Market Price per Share</h3>
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            <Image
              src="/images/report/content/.png"
              alt="Market Price chart"
              width={600}
              height={200}
              className="w-full h-auto"
            />
          </div>
          <div className="mt-2">
            <p>Closing Market Price</p>
            <p>2025: Rs. 86.50</p>
            <p>2024: Rs. 62.80</p>
          </div>
        </div>

        {/* Debt Ratios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Debt to Equity */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Debt to Equity Ratio</h3>
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <Image
                src="/images/report/content/.png"
                alt="Debt to Equity chart"
                width={300}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <div className="mt-2">
              <p>2025: 3.53 times</p>
              <p>2024: 3.44 times</p>
            </div>
          </div>

          {/* Interest Cover */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Interest Cover</h3>
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <Image
                src="/images/report/content/.png"
                alt="Interest Cover chart"
                width={300}
                height={200}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Equity Assets Ratio */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Equity Assets Ratio</h3>
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <Image
                src="/images/report/content/.png"
                alt="Equity Assets Ratio chart"
                width={300}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <div className="mt-2">
              <p>2025: 21.28%</p>
              <p>2024: 21.58%</p>
            </div>
          </div>
        </div>

        {/* Liquidity Ratios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Quick Asset Ratio */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Quick Asset Ratio</h3>
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <Image
                src="/images/report/content/.png"
                alt="Quick Asset Ratio chart"
                width={300}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <div className="mt-2">
              <p>2025: 0.59 times</p>
              <p>2024: 0.65 times</p>
            </div>
          </div>

          {/* Liquidity Ratio */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Liquidity Ratio</h3>
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <Image
                src="/images/report/content/.png"
                alt="Liquidity Ratio chart"
                width={300}
                height={200}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Total Liquidity Reserves */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Total Liquidity Reserves</h3>
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <Image
                src="/images/report/content/.png"
                alt="Liquidity Reserves chart"
                width={300}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <div className="mt-2">
              <p>2025: Rs. 29.60 Bn</p>
              <p>2024: Rs. 27.17 Bn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
