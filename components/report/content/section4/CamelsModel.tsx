import React from 'react';
import Image from 'next/image';

export default function CamelsModel() {
  return (
    <div className="camels-model p-6 bg-themeGreen max-h-[70vh] overflow-y-auto custom-scrollbar">
      <div className="bg-greeen2 p-3 rounded-lg mb-8">
        {/* CAMELS Introduction */}
        <div className="bg-cardGreen p-4 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-2">
            CAMELS – SIX PILLARS OF FINANCIAL STEWARDSHIP
          </h2>
          <p>
            Resilience is not accidental, it is the result of disciplined
            strategy, sound governance, and data driven insight. Our adapted
            CAMELS model reflects this core approach, offering a clear and
            structured evaluation of performance across six core pillars:
            Capital Adequacy, Asset Quality, Management Efficiency, Earnings,
            Liquidity, and Sensitivity to Financial and Operating Conditions.
          </p>
        </div>

        {/* Capital Adequacy Section */}
        <div className="bg-cardGreen p-4 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            CAPITAL ADEQUACY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-2">
                <li>
                  <strong>CAR Tier I:</strong> 30.45% (2023/24: 31.45%)
                </li>
                <li>
                  <strong>CAR Total:</strong> 31.31% (2023/24: 32.19%)
                </li>
                <li>
                  <strong>Stage 3 Loans to Equity Ratio:</strong> 9.01%
                  (2023/24: 14.82%)
                </li>
                <li>
                  <strong>Capital Funds to Deposit Ratio:</strong> 37.02%
                  (2023/24: 35.52%)
                </li>
              </ul>
            </div>
            <div>
              <div>
                <div>
                  <h3 className="text-center">Capital Adequacy Ratio Chart</h3>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/images/report/content/Capital Adequacy Ratio.png"
                    alt="Capital Adequacy Ratio Chart"
                    width={260}
                    height={270}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-[#467643] p-3 rounded-lg">
            <p className="font-semibold">Way forward:</p>
            <p>
              We aim to maintain a capital buffer at least 2% above the minimum
              regulatory requirement set by the CBSL.
            </p>
          </div>
        </div>

        {/* Asset Quality Section */}
        <div className="bg-cardGreen p-4 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            ASSET QUALITY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-2">
                <li>
                  <strong>Gross NPL:</strong> 2.25% (2023/24: 3.54%)
                </li>
                <li>
                  <strong>Net NPL:</strong> -1.22% (2023/24: -0.79%)
                </li>
                <li>
                  <strong>Provision Coverage Ratio:</strong> 154.02% (2023/24:
                  122.42%)
                </li>
                <li>
                  <strong>Open Credit Exposure Ratio:</strong> -4.87% (2023/24:
                  -3.07%)
                </li>
              </ul>
            </div>
            <div>
              <div>
                <div>
                  <p className="text-center">Gross and Net NPL Ratio Chart</p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/images/report/content/Gross and Net NPL Ratio.png"
                    alt="Gross and Net NPL Ratio Chart Placeholder"
                    width={260}
                    height={270}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-[#467643] p-3 rounded-lg">
            <p className="font-semibold">Way forward:</p>
            <p>
              To maintain Gross NPL rate below 5% and net NPL Ratio at zero
              level.
            </p>
          </div>
        </div>

        {/* Management Efficiency Section */}
        <div className="bg-cardGreen p-4 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            MANAGEMENT EFFICIENCY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-2">
                <li>
                  <strong>Cost to Income:</strong> 32.58% (2023/24: 31.13%)
                </li>
                <li>
                  <strong>Impairment Charge to Total Operating Income:</strong>{' '}
                  -0.85% (2023/24: 1.34%)
                </li>
                <li>
                  <strong>Profit per Employee:</strong> Rs. 2.45 Mn (2023/24:
                  Rs. 2.31 Mn)
                </li>
                <li>
                  <strong>Operating Expense to Income:</strong> 20.95% (2023/24:
                  17.61%)
                </li>
              </ul>
            </div>
            <div>
              <div>
                <div>
                  <p className="text-center">Cost to Income Ratio Chart</p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/images/report/content/Cost to Income Ratio.png"
                    alt="Cost to Income Ratio Chart Placeholder"
                    width={260}
                    height={270}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-[#467643] p-3 rounded-lg">
            <p className="font-semibold">Way forward:</p>
            <p>
              Maintain a lean cost structure with expenses consuming no more
              than 35% of Operating income.
            </p>
          </div>
        </div>

        {/* Earnings Section */}
        <div className="bg-cardGreen p-4 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            EARNINGS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-2">
                <li>
                  <strong>Return on Equity:</strong> 22.77% (2023/24: 23.40%)
                </li>
                <li>
                  <strong>Return on Assets:</strong> 4.88% (2023/24: 4.97%)
                </li>
                <li>
                  <strong>Net Interest Margin:</strong> 12.22% (2023/24: 13.72%)
                </li>
                <li>
                  <strong>Interest Spread:</strong> 11.05% (2023/24: 10.35%)
                </li>
              </ul>
            </div>
            <div>
              <div>
                <div>
                  <p className="text-center">Return on Equity Chart</p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/images/report/content/Return on Equity.png"
                    alt="Return on Equity Chart Placeholder"
                    width={260}
                    height={270}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-[#467643] p-3 rounded-lg">
            <p className="font-semibold">Way forward:</p>
            <p>
              We aim to achieve a minimum ROE of 20% by optimising our
              operations and financial performance.
            </p>
          </div>
        </div>

        {/* Liquidity Section */}
        <div className="bg-cardGreen p-4 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            LIQUIDITY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-2">
                <li>
                  <strong>Liquid Assets Ratio:</strong> 20.01% (2023/24: 21.02%)
                </li>
                <li>
                  <strong>Loans to Deposit Ratio:</strong> 142.80% (2023/24:
                  131.34%)
                </li>
                <li>
                  <strong>Total Liquidity Reserves:</strong> Rs. 29.60 Bn
                  (2023/24: Rs. 27.17 Bn)
                </li>
                <li>
                  <strong>Liquid Assets to External Funds:</strong> 15.74%
                  (2023/24: 17.37%)
                </li>
              </ul>
            </div>
            <div>
              <div>
                <div>
                  <p className="text-center">Liquidity Ratio Chart</p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/images/report/content/Liqudity Ratio.png"
                    alt="Liquidity Ratio Chart"
                    width={260}
                    height={270}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-[#467643] p-3 rounded-lg">
            <p className="font-semibold">Way forward:</p>
            <p>
              Maintain a robust liquidity buffer of minimum 150% to ensure
              financial stability.
            </p>
          </div>
        </div>

        {/* Sensitivity Section */}
        <div className="bg-cardGreen p-4 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4 border-b border-[#F3A847] pb-1">
            SENSITIVITY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-2">
                <li>
                  <strong>Interest Rate Δ 1%:</strong> 0.70% Δ PAT (Rs. 75.35
                  Mn)
                </li>
                <li>
                  <strong>Cost to Income Ratio Δ 1%:</strong> 1.46% Δ PAT (Rs.
                  158.27 Mn)
                </li>
                <li>
                  <strong>Impairment Charge Δ 1%:</strong> 0.01% Δ PAT (Rs. 1.35
                  Mn)
                </li>
                <li>
                  <strong>Income Tax Rate Δ 1%:</strong> 1.90% Δ PAT (Rs. 205.11
                  Mn)
                </li>
              </ul>
            </div>
            <div>
              <div>
                <div>
                  <p className="text-center">Sensitivity of PAT Chart</p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/images/report/content/Sensitivity of PAT.png"
                    alt="Sensitivity of PAT Chart"
                    width={260}
                    height={270}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-[#467643] p-3 rounded-lg">
            <p className="font-semibold">Way forward:</p>
            <p>
              We use sensitivity analysis to support strategic decisions that
              align with stakeholder interests and maximise shareholder value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
