import React from 'react';
import Image from 'next/image';

export default function FinancialStatementHighlights() {
  return (
    <div className="financial-statement p-6 bg-themeGreen max-h-[70vh] overflow-y-auto custom-scrollbar">
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
                Profit After Taxation (PAT)
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
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Profitability Ratios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Gross Profit Margin */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-black">
                Gross Profit Margin*
              </h3>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/report/content/gross-profit-margin.png"
                  alt="Gross Profit Margin chart"
                  width={300}
                  height={200}
                />
              </div>
            </div>

            {/* Operating Profit Margin */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-black">
                Operating Profit Margin*
              </h3>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/report/content/operating-profit-margin.png"
                  alt="Operating Profit Margin chart"
                  width={300}
                  height={200}
                />
              </div>
            </div>

            {/* Net Profit Margin */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-black">Net Profit Margin*</h3>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/report/content/net-profit-margin.png"
                  alt="Net Profit Margin chart"
                  width={300}
                  height={200}
                />
              </div>
            </div>

            {/* EBIT, ROE, ROA */}

            {/* EBIT */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-black">
                Earnings before Interest & Tax (EBIT)
              </h3>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/report/content/Earnings before Interest & Tax (EBIT.png"
                  alt="EBIT chart"
                  width={300}
                  height={200}
                />
              </div>
            </div>

            {/* ROE */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-black">
                Return on Equity (ROE)
              </h3>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/report/content/Return on Equity (ROE).png"
                  alt="ROE chart"
                  width={300}
                  height={200}
                />
              </div>
              <div className="mt-2">
                <p>2025: 22.77%</p>
                <p>2024: 23.40%</p>
              </div>
            </div>

            {/* ROA */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-black">
                Return on Assets (ROA)
              </h3>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/report/content/Return on Assets (ROA).png"
                  alt="ROA chart"
                  width={300}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Equity Ratios</h2>
          {/* Equity Ratios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* EPS */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-black">
                Earnings per Share (EPS)
              </h3>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/report/content/earning-per-share (eps).png"
                  alt="EPS chart"
                  width={200}
                  height={200}
                />
              </div>
            </div>

            {/* Market Cap */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-black">
                Market Capitalisation
              </h3>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/report/content/Market Capitalisation.png"
                  alt="Market Cap chart"
                  width={200}
                  height={200}
                />
              </div>
            </div>

            {/* NAV */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-black">
                Net Asset Value per Share
              </h3>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/report/content/Net Asset Value per Share.png"
                  alt="NAV chart"
                  width={200}
                  height={200}
                />
              </div>
            </div>

            {/* PE Ratio */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-black">
                Price Earnings Ratio
              </h3>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/report/content/Price Earnings Ratio.png"
                  alt="PE Ratio chart"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            {/* Market Price */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-black">
                Market Price per Share
              </h3>
              <div className=" flex items-center justify-center">
                <Image
                  src="/images/report/content/Market Price per Share .png"
                  alt="Market Price chart"
                  width={600}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Debt Ratios</h2>
          {/* Debt Ratios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Debt to Equity */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-black">
                Debt to Equity Ratio
              </h3>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/report/content/debt-to-equity-ratio.png"
                  alt="Debt to Equity chart"
                  width={300}
                  height={200}
                />
              </div>
            </div>

            {/* Interest Cover */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-black">Interest Cover</h3>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/report/content/interest-cover.png"
                  alt="Interest Cover chart"
                  width={300}
                  height={200}
                />
              </div>
            </div>

            {/* Equity Assets Ratio */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-black">Equity Assets Ratio</h3>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/report/content/equity-assets-ratio.png"
                  alt="Equity Assets Ratio chart"
                  width={300}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Liquidity Ratios</h2>
          {/* Liquidity Ratios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Quick Asset Ratio */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-black">Quick Asset Ratio</h3>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/report/content/quick-asset-ratio.png"
                  alt="Quick Asset Ratio chart"
                  width={300}
                  height={200}
                />
              </div>
            </div>

            {/* Liquidity Ratio */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-black">Liquidity Ratio</h3>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/report/content/liqudity-ratio.png"
                  alt="Liquidity Ratio chart"
                  width={300}
                  height={200}
                />
              </div>
            </div>

            {/* Total Liquidity Reserves */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-black">
                Total Liquidity Reserves
              </h3>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/report/content/total-liquidity-reserves.png"
                  alt="Liquidity Reserves chart"
                  width={300}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
