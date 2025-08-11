'use client';
import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

export default function FinancialStatementHighlights() {


  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto">
      {/* Operating Results Section */}
      <div className="grid">
        <div className="bg-white text-blue p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-bold mb-4">
            OPERATING RESULTS
          </h2>
          <img
            src="/images/charts/financialInformation/operatingResults.png"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div id="chart-income"></div>
            <div id="chart-net-interest-income"></div>
            <div id="chart-pbt"></div>
            <div id="chart-pat"></div>
            <div id="chart-ci-ratio"></div>
            <div id="chart-dividend-payout"></div>
          </div> */}
        </div>

        {/* Profitability Ratios Section */}
        <div className="bg-white text-blue p-4 md:p-6 ">
          <h2 className="text-lg md:text-xl font-bold mb-4">
            PROFITABILITY RATIOS
          </h2>
          <img
            src="/images/charts/financialInformation/profitableRatios.png"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div id="chart-gross-margin"></div>
            <div id="chart-operating-margin"></div>
            <div id="chart-net-margin"></div>
            <div id="chart-ebit"></div>
            <div id="chart-roe"></div>
            <div id="chart-roa"></div>
          </div> */}
        </div>

        {/* Equity Ratios Section */}
        <div className="bg-white text-blue p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-bold mb-4">EQUITY RATIOS</h2>
          <img
            src="/images/charts/financialInformation/equityRatios.png"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div id="chart-eps"></div>
            <div id="chart-market-cap"></div>
            <div id="chart-navps"></div>
            <div id="chart-pe-ratio"></div>
            <div id="chart-market-price"></div>
          </div> */}
        </div>

        {/* Debt Ratios Section */}
        <div className="bg-white text-blue p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-bold mb-4">DEBT RATIOS</h2>
          <img
            src="/images/charts/financialInformation/debitRatios.png"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div id="chart-debt-equity"></div>
            <div id="chart-interest-cover"></div>
            <div id="chart-equity-assets"></div>
          </div> */}
        </div>

        {/* Liquidity Ratios Section */}
        <div className="bg-white text-blue p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-bold mb-4">
            LIQUIDITY RATIOS
          </h2>
          <img
            src="/images/charts/financialInformation/liquidityRatios.png"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div id="chart-quick-asset"></div>
            <div id="chart-liquidity-ratio"></div>
            <div id="chart-total-liquidity"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
