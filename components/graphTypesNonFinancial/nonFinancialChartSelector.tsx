import { reverseDataArrays } from '@/utility/reverseDataArrays';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function NonFinancialChartSelector({
  chartType,
  chartOptions,
  getSeriesData,
  getSeriesRadialBarChart,
  getSeriesDataComboChart,
  getSeriesDataPieChart,
  expand = false,
}: any) {
  return (
    <div className="h-full min-h-[300px]">
      {Array.isArray(getSeriesDataComboChart) &&
        getSeriesDataComboChart?.length > 0 &&
        chartOptions?.comboChartData?.colors &&
        chartType === 'comboChart' && (
          <Chart
            options={chartOptions?.comboChartData}
            series={getSeriesDataComboChart}
            type="line"
            height={expand ? 360 : 300}
            width="100%"
          />
        )}
      {chartType === 'lineGraph' && (
        <Chart
          options={chartOptions?.lineGraphData}
          series={getSeriesData}
          type="line"
          height={expand ? 360 : 300}
          width="100%"
        />
      )}
      {chartType === 'verticleBarChart' && (
        <Chart
          options={chartOptions?.verticalBarChartData}
          series={getSeriesData}
          type="bar"
          height={expand ? 360 : 300}
          width="100%"
        />
      )}
      {chartType === 'radialBarChart' && (
        <div className="justify-center items-center h-full">
          <Chart
            options={chartOptions?.radialBarChartData}
            series={getSeriesRadialBarChart}
            type="radialBar"
            height={350}
          />
        </div>
      )}
      {chartType === 'horizontalBarChart' && (
        <Chart
          options={chartOptions?.horizontalBarChartData}
          series={reverseDataArrays(getSeriesData)}
          type="bar"
          height={expand ? 360 : 300}
        />
      )}
      {chartType === 'areaChart' && (
        <Chart
          options={chartOptions?.areaBarChartData}
          series={getSeriesData}
          type="area"
          height={350}
        />
      )}
      {chartType === 'stackedBarChart' && getSeriesData?.length > 0 && (
        <Chart
          options={chartOptions?.stackedVerticalBarChartData}
          series={getSeriesData}
          type="bar"
          height={300}
        />
      )}
      {chartType === 'pieChart' && (
        <Chart
          options={chartOptions?.pieChartData}
          series={getSeriesDataPieChart}
          type="pie"
          height={300}
        />
      )}
    </div>
  );
}
