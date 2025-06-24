import { reverseDataArrays } from '@/utility/reverseDataArrays';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function ChartSelector({
  chartType,
  chartOptions,
  getSeriesData,
  getSeriesDataComboChart,
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
            height={300}
            width="100%"
          />
        )}
      {chartType === 'lineGraph' && (
        <Chart
          options={chartOptions?.lineGraphData}
          series={getSeriesData}
          type="line"
          height={300}
          width="100%"
        />
      )}
      {(chartType === 'verticalBarChart' ||
        chartType === 'clusterBarChartVertical') && (
        <Chart
          options={chartOptions?.verticalBarChartData}
          series={getSeriesData}
          type="bar"
          height={300}
          width="100%"
        />
      )}
      {chartType === 'radialBarChart' && (
        <div className="justify-center items-center h-full">
          <Chart
            options={chartOptions?.radialBarChartData}
            series={getSeriesData?.map((item: any) => item?.data)}
            type="radialBar"
            height={350}
          />
        </div>
      )}
      {(chartType === 'horizontalBarChart' ||
        chartType === 'clusterBarChartHorizontal') && (
        <Chart
          options={chartOptions?.horizontalBarChartData}
          series={reverseDataArrays(getSeriesData)}
          type="bar"
          height={300}
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
      {chartType === 'stackedBarChart' && (
        <Chart
          options={chartOptions?.stackedVerticalBarChartData}
          series={getSeriesData}
          type="bar"
          height={300}
        />
      )}
    </div>
  );
}
