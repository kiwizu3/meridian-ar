'use client';

export default function FinancialCapitalPart12() {
  const hexagonStyle =
    'relative w-32 h-32 bg-[#00bcd4] text-white flex flex-col items-center justify-center transform rotate-45 shadow-md';
  const hexagonTextStyle = 'transform -rotate-45 text-center';
  return (
    <div>
      <div className="bg-gradient-to-b from-[#e0f7fa] to-[#ffccbc] p-8 min-h-screen text-black">
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-8 text-[#ff9800]">
            DUPONT ANALYSIS
          </h2>
          <p className="mb-8 text-sm">
            DuPont analysis breaks down Return on Equity (ROE) into three key
            components: profit margin, asset turnover, and financial leverage.
            By examining each of these factors, stakeholders can gain valuable
            insights into a Company&apos;s profitability, operational
            efficiency, and risk profile.
          </p>

          <div className="relative">
            {/* First row */}
            <div className="flex justify-between mb-16">
              <div className={hexagonStyle}>
                <div className={hexagonTextStyle}>
                  <div className="font-bold">Income</div>
                  <div>49.23</div>
                  <div className="text-xs">2022/23: 42.76</div>
                </div>
              </div>
              <div className={hexagonStyle}>
                <div className={hexagonTextStyle}>
                  <div className="font-bold">Total Expenses</div>
                  <div>39.67</div>
                  <div className="text-xs">2022/23: 34.30</div>
                </div>
              </div>
              <div className={hexagonStyle}>
                <div className={hexagonTextStyle}>
                  <div className="font-bold">Financial Assets</div>
                  <div>191.11</div>
                  <div className="text-xs">2022/23: 171.53</div>
                </div>
              </div>
              <div className={hexagonStyle}>
                <div className={hexagonTextStyle}>
                  <div className="font-bold">Non-Financial Assets</div>
                  <div>11.06</div>
                  <div className="text-xs">2022/23: 10.82</div>
                </div>
              </div>
              <div className={hexagonStyle}>
                <div className={hexagonTextStyle}>
                  <div className="font-bold">Financial Liabilities</div>
                  <div>153.76</div>
                  <div className="text-xs">2022/23: 140.52</div>
                </div>
              </div>
              <div className={hexagonStyle}>
                <div className={hexagonTextStyle}>
                  <div className="font-bold">Non-Financial Liabilities</div>
                  <div>4.79</div>
                  <div className="text-xs">2022/23: 3.71</div>
                </div>
              </div>
            </div>

            {/* Second row */}
            <div className="flex justify-around mb-16">
              <div className={hexagonStyle}>
                <div className={hexagonTextStyle}>
                  <div className="font-bold">Net Profit</div>
                  <div>9.56</div>
                  <div className="text-xs">2022/23: 8.46</div>
                </div>
              </div>
              <div className={hexagonStyle}>
                <div className={hexagonTextStyle}>
                  <div className="font-bold">Income</div>
                  <div>49.23</div>
                  <div className="text-xs">2022/23: 42.76</div>
                </div>
              </div>
              <div className={hexagonStyle}>
                <div className={hexagonTextStyle}>
                  <div className="font-bold">Average Total Assets</div>
                  <div>192.26</div>
                  <div className="text-xs">2022/23: 173.36</div>
                </div>
              </div>
              <div className={hexagonStyle}>
                <div className={hexagonTextStyle}>
                  <div className="font-bold">Average Total Liabilities</div>
                  <div>151.39</div>
                  <div className="text-xs">2022/23: 137.77</div>
                </div>
              </div>
              <div className={hexagonStyle}>
                <div className={hexagonTextStyle}>
                  <div className="font-bold">Average Equity</div>
                  <div>40.87</div>
                  <div className="text-xs">2022/23: 35.58</div>
                </div>
              </div>
            </div>

            {/* Third row */}
            <div className="flex justify-around mb-16">
              <div className={hexagonStyle}>
                <div className={hexagonTextStyle}>
                  <div className="font-bold">Net Profit Margin</div>
                  <div>19.43%</div>
                  <div className="text-xs">2022/23: 19.79%</div>
                </div>
              </div>
              <div className={hexagonStyle}>
                <div className={hexagonTextStyle}>
                  <div className="font-bold">Asset Turnover</div>
                  <div>25.61%</div>
                  <div className="text-xs">2022/23: 24.66%</div>
                </div>
              </div>
              <div className={hexagonStyle}>
                <div className={hexagonTextStyle}>
                  <div className="font-bold">Average Equity</div>
                  <div>40.87</div>
                  <div className="text-xs">2022/23: 35.58</div>
                </div>
              </div>
              <div className={hexagonStyle}>
                <div className={hexagonTextStyle}>
                  <div className="font-bold">Average Total Assets</div>
                  <div>192.26</div>
                  <div className="text-xs">2022/23: 173.36</div>
                </div>
              </div>
            </div>

            {/* Fourth row */}
            <div className="flex justify-around mb-16">
              <div className={hexagonStyle}>
                <div className={hexagonTextStyle}>
                  <div className="font-bold">Return on Assets</div>
                  <div>4.97%</div>
                  <div className="text-xs">2022/23: 4.88%</div>
                </div>
              </div>
              <div className={hexagonStyle}>
                <div className={hexagonTextStyle}>
                  <div className="font-bold">Equity Ratio</div>
                  <div>21.26%</div>
                  <div className="text-xs">2022/23: 20.58%</div>
                </div>
              </div>
            </div>

            {/* Final row */}
            <div className="flex justify-center">
              <div className="relative w-32 h-32 bg-[#8bc34a] text-white flex flex-col items-center justify-center transform rotate-45 shadow-md">
                <div className="transform -rotate-45 text-center">
                  <div className="font-bold">Return on Equity</div>
                  <div>23.40%</div>
                  <div className="text-xs">2022/23: 23.78%</div>
                </div>
              </div>
            </div>

            {/* Connector lines would go here, but they're complex to implement in CSS alone */}
            {/* You might want to use an SVG or a canvas element for more precise line drawing */}
          </div>
        </div>
      </div>
    </div>
  );
}
