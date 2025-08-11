'use client';

import GraphWrapperCard from '@/components/graphWrapperCard';
import { colorMap } from '@/data/graphColor';
import { financialPosition } from '@/data/graphDataFinancial';
import { SeriesData } from '@/types';
import {
  comboChartOptions,
  financialFilters,
  horizontalBarChartOptions,
  lineChartOptions,
  radialBarChartOptions,
  verticalBarChartOptions,
} from '@/utility/financialDashBoardChartDetails';
import { getInitialSelectedValues } from '@/utility/getInitialSelectedValues';
import { memo, useCallback, useMemo, useState } from 'react';
import ChartSelector from './chartSelector';
import { generateYAxisConfig } from '@/utility/extractType';

const FinancialPositionGraph = ({ dictionary }: any) => {
  const [dateRange, setDateRange] = useState<string[]>([]);
  const [selectedValues, setSelectedValues] = useState(() =>
    getInitialSelectedValues(financialFilters),
  );

  const radialBarChartSelected =
    selectedValues?.chartType?.toString() === 'radialBarChart';

  const getFilteredResults = useCallback(() => {
    if (selectedValues?.years && radialBarChartSelected) {
      return financialPosition?.filter((result) =>
        selectedValues?.years?.includes(result.year),
      );
    } else {
      return dateRange.length === 0
        ? financialPosition
        : financialPosition?.filter((result) =>
            dateRange?.includes(result.year),
          );
    }
  }, [dateRange, selectedValues]);

  const getSeriesRadialBarChart: any = useCallback(
    (data: SeriesData): number[] => {
      const seriesTypeValues = data.map((array) =>
        array.reduce((sum, value) => sum + parseFloat(value), 0),
      );

      const seriesSum = seriesTypeValues.reduce((sum, value) => sum + value, 0);

      return seriesTypeValues.map((value) =>
        Math.round((value / seriesSum) * 100),
      );
    },
    [],
  );

  const getSeriesData = useCallback(() => {
    const filteredResults = getFilteredResults();
    const seriesData = [];

    if (selectedValues.items.includes('equityToDeposits')) {
      seriesData.push({
        name: 'Equity to Deposits (%)',
        data: filteredResults?.map((item) =>
          parseFloat(item?.equityToDeposits),
        ),
        color: colorMap[0],
        type: 'bar',
        stroke: 0,
      });
    }

    if (selectedValues.items.includes('debtToEquity')) {
      seriesData.push({
        name: 'Debt to Equity (Times)',
        type: 'line',
        data: filteredResults?.map((item) => parseFloat(item?.debtToEquity)),
        color: colorMap[1],
        stroke: 4,
      });
    }
    if (selectedValues.items.includes('totalAssetsToEquity')) {
      seriesData.push({
        name: 'Total Assets to Equity (Times)',
        type: 'line',
        data: filteredResults?.map((item) =>
          parseFloat(item?.totalAssetsToEquity),
        ),
        color: colorMap[2],
        stroke: 4,
      });
    }

    return seriesData;
  }, [selectedValues, getFilteredResults]);

  const selectedItems = getSeriesData().map((item) => item?.name);

  const yaxisConfig = useMemo(
    () => generateYAxisConfig(selectedItems, getSeriesData()),
    [selectedItems],
  );

  const chartOptions = {
    comboChartData: {
      ...comboChartOptions,
      stroke: {
        width: getSeriesData().map((item) => item.stroke),
      },
      colors: getSeriesData().map((item) => item.color),
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 6,
      },
      xaxis: {
        labels: {
          style: {
            fontSize: '14px',
            fontWeight: '400',
            colors: '#fff',
          },
          offsetX: 0,
          offsetY: 0,
          rotateAlways: false,
        },
        categories: dateRange,
      },
      yaxis: yaxisConfig,
    },
    lineGraphData: {
      ...lineChartOptions,
      yaxis: yaxisConfig,
      xaxis: { ...lineChartOptions.xaxis, categories: dateRange },
    },
    verticalBarChartData: {
      ...verticalBarChartOptions,
      yaxis: yaxisConfig,

      xaxis: { ...verticalBarChartOptions.xaxis, categories: dateRange },
    },
    horizontalBarChartData: {
      ...horizontalBarChartOptions,
      xaxis: {
        ...horizontalBarChartOptions.xaxis,
        categories: dateRange?.toReversed(),
      },
    },
    radialBarChartData: {
      ...radialBarChartOptions,
      labels: getSeriesData().map((item) => item.name),
      colors: getSeriesData().map((item) => item.color),
    },
  };

  const chartType = selectedValues.chartType.toString();

  const radialBarSeries = getSeriesRadialBarChart(
    getSeriesData().map((item) => item.data),
  );

  return (
    <div>
      <GraphWrapperCard
        setDateRange={setDateRange}
        chartFilters={financialFilters}
        selectedValues={selectedValues}
        setSelectedValues={setSelectedValues}
        title={dictionary?.financial_position}
      >
        <ChartSelector
          chartOptions={chartOptions}
          getSeriesData={getSeriesData().map(({ type, ...rest }) => rest)}
          getSeriesDataComboChart={getSeriesData()}
          chartType={chartType}
          getSeriesRadialBarChart={radialBarSeries}
        />
      </GraphWrapperCard>
    </div>
  );
};

export default memo(FinancialPositionGraph);
