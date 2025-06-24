'use client';

import GraphWrapperCard from '@/components/graphWrapperCard';
import { colorMap } from '@/data/graphColor';
import { growth } from '@/data/graphDataFinancial';
import {
  growthFilters,
  growthItems,
  horizontalBarChartOptions,
  lineChartOptions,
  radialBarChartOptions,
  verticalBarChartOptions,
} from '@/utility/financialDashBoardChartDetails';
import { getInitialSelectedValues } from '@/utility/getInitialSelectedValues';
import { memo, useCallback, useMemo, useState } from 'react';
import ChartSelector from './chartSelector';
import { SeriesData } from '@/types';
import { generateYAxisConfig } from '@/utility/extractType';

const GrowthGraph = ({ dictionary }: any) => {
  const [dateRange, setDateRange] = useState<string[]>([]);
  const [selectedValues, setSelectedValues] = useState(() =>
    getInitialSelectedValues(growthFilters),
  );

  const radialBarChartSelected =
    selectedValues?.chartType?.toString() === 'radialBarChart';

  const getFilteredResults = useCallback(() => {
    if (selectedValues?.years && radialBarChartSelected) {
      return growth?.filter((result) =>
        selectedValues?.years?.includes(result.year),
      );
    } else {
      return dateRange.length === 0
        ? growth
        : growth?.filter((result) => dateRange?.includes(result.year));
    }
  }, [dateRange, selectedValues]);

  const getSeriesData = (selectedValues: any) => {
    const filteredResults = getFilteredResults();
    const seriesData: any = [];

    growthItems.forEach((item, index) => {
      if (selectedValues?.includes(item.key)) {
        seriesData.push({
          name: item.label,
          data: filteredResults.map((result: any) => result[item.key]),
          color: colorMap[index],
        });
      }
    });

    return seriesData;
  };

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

  const seriesData = getSeriesData(selectedValues.items);

  const selectedItems = seriesData.map((item: any) => item?.name);

  const yaxisConfig = useMemo(
    () => generateYAxisConfig(selectedItems, seriesData),
    [selectedItems],
  );

  const chartOptions = {
    lineGraphData: {
      ...lineChartOptions,
      xaxis: { ...lineChartOptions.xaxis, categories: dateRange },
      yaxis: yaxisConfig,
    },
    verticalBarChartData: {
      ...verticalBarChartOptions,
      xaxis: { ...verticalBarChartOptions.xaxis, categories: dateRange },
      yaxis: yaxisConfig,
    },
    horizontalBarChartData: {
      ...horizontalBarChartOptions,
      xaxis: {
        ...horizontalBarChartOptions.xaxis,
        categories: dateRange?.toReversed(),
      },
    },
    areaBarChartData: {
      ...lineChartOptions,
      xaxis: { ...lineChartOptions.xaxis, categories: dateRange },
      labels: seriesData.map((item: any) => item.name),
      colors: seriesData.map((item: any) => item.color),
      yaxis: yaxisConfig,
    },
    radialBarChartData: {
      ...radialBarChartOptions,
      labels: seriesData.map((item: any) => item.name),
      colors: seriesData.map((item: any) => item.color),
    },
  };

  const chartType = selectedValues.chartType.toString();

  return (
    <div>
      <GraphWrapperCard
        setDateRange={setDateRange}
        chartFilters={growthFilters}
        selectedValues={selectedValues}
        setSelectedValues={setSelectedValues}
        title={dictionary?.growth}
      >
        <ChartSelector
          getSeriesRadialBarChart={getSeriesRadialBarChart(
            seriesData.map((item: any) => item.data),
          )}
          chartOptions={chartOptions}
          getSeriesData={seriesData}
          chartType={chartType}
        />
      </GraphWrapperCard>
    </div>
  );
};

export default memo(GrowthGraph);
