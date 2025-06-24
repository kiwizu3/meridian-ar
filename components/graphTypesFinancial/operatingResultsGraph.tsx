'use client';

import GraphWrapperCard from '@/components/graphWrapperCard';
import { colorMap } from '@/data/graphColor';
import { operatingResults } from '@/data/graphDataFinancial';
import { SeriesData } from '@/types';
import {
  horizontalBarChartOptions,
  lineChartOptions,
  operatingFilters,
  radialBarChartOptions,
  verticalBarChartOptions,
} from '@/utility/financialDashBoardChartDetails';
import { getInitialSelectedValues } from '@/utility/getInitialSelectedValues';
import { memo, useCallback, useState } from 'react';
import ChartSelector from './chartSelector';

const OperatingResultsGraph = ({ dictionary }: any) => {
  const [dateRange, setDateRange] = useState<string[]>([]);
  const [selectedValues, setSelectedValues] = useState(() =>
    getInitialSelectedValues(operatingFilters),
  );

  const radialBarChartSelected =
    selectedValues?.chartType?.toString() === 'radialBarChart';

  const getFilteredResults = useCallback(() => {
    if (selectedValues?.years && radialBarChartSelected) {
      return operatingResults?.filter((result) =>
        selectedValues?.years?.includes(result.year),
      );
    } else {
      return dateRange.length === 0
        ? operatingResults
        : operatingResults?.filter((result) =>
            dateRange?.includes(result.year),
          );
    }
  }, [dateRange, selectedValues]);

  const getSeriesData = useCallback(() => {
    const filteredResults = getFilteredResults();
    const seriesData = [];

    if (selectedValues.items.includes('netInterestMargin')) {
      seriesData.push({
        name: 'Net Interest Margin (%)',
        data: filteredResults?.map((item) =>
          parseFloat(item?.netInterestMargin),
        ),
        color: colorMap[0],
      });
    }

    if (selectedValues.items.includes('interestSpread')) {
      seriesData.push({
        name: 'Interest Spread (%)',
        data: filteredResults?.map((item) => parseFloat(item?.interestSpread)),
        color: colorMap[1],
      });
    }

    if (selectedValues.items.includes('costToIncome')) {
      seriesData.push({
        name: 'Cost to Income (%)',
        data: filteredResults?.map((item) => parseFloat(item?.costToIncome)),
        color: colorMap[2],
      });
    }

    return seriesData;
  }, [selectedValues, getFilteredResults, dateRange]);

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
    [dateRange, selectedValues],
  );

  const chartOptions = {
    verticalBarChartData: {
      ...verticalBarChartOptions,
      xaxis: { ...verticalBarChartOptions.xaxis, categories: dateRange },
    },
    horizontalBarChartData: {
      ...horizontalBarChartOptions,
      xaxis: {
        ...horizontalBarChartOptions.xaxis,
        categories: dateRange?.toReversed(),
      },
    },
    lineGraphData: {
      ...lineChartOptions,
      xaxis: { ...lineChartOptions.xaxis, categories: dateRange },
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
    <GraphWrapperCard
      setDateRange={setDateRange}
      title={dictionary?.operating_results}
      chartFilters={operatingFilters}
      selectedValues={selectedValues}
      setSelectedValues={setSelectedValues}
    >
      <ChartSelector
        chartOptions={chartOptions}
        getSeriesData={getSeriesData()}
        chartType={chartType}
        getSeriesRadialBarChart={radialBarSeries}
      />
    </GraphWrapperCard>
  );
};

export default memo(OperatingResultsGraph);
