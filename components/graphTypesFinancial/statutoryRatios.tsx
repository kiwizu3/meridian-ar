'use client';

import GraphWrapperCard from '@/components/graphWrapperCard';
import { colorMap } from '@/data/graphColor';
import { statutoryRatios } from '@/data/graphDataFinancial';
import { SeriesData } from '@/types';
import {
  horizontalBarChartOptions,
  lineChartOptions,
  radialBarChartOptions,
  statutoryFilters,
  statutoryItems,
  verticalBarChartOptions,
} from '@/utility/financialDashBoardChartDetails';
import { getInitialSelectedValues } from '@/utility/getInitialSelectedValues';
import { memo, useCallback, useState } from 'react';
import ChartSelector from './chartSelector';

const StatutoryRatiosChart = ({ dictionary }: any) => {
  const [dateRange, setDateRange] = useState<string[]>([]);
  const categories = statutoryRatios?.map((item: any) => item?.year);

  const [selectedValues, setSelectedValues] = useState(() =>
    getInitialSelectedValues(statutoryFilters),
  );

  const radialBarChartSelected =
    selectedValues?.chartType?.toString() === 'radialBarChart';

  const getFilteredResults = useCallback(() => {
    if (selectedValues?.years && radialBarChartSelected) {
      return statutoryRatios?.filter((result) =>
        selectedValues?.years?.includes(result.year),
      );
    } else {
      return dateRange.length === 0
        ? statutoryRatios
        : statutoryRatios?.filter((result) => dateRange?.includes(result.year));
    }
  }, [dateRange, selectedValues]);

  const getSeriesRadialBarChart = (data: SeriesData): number[] => {
    const seriesTypeValues = data.map((array) =>
      array.reduce((sum, value) => sum + parseFloat(value), 0),
    );

    const seriesSum = seriesTypeValues.reduce((sum, value) => sum + value, 0);

    const seriesVal = seriesTypeValues.map((value) =>
      Math.round((value / seriesSum) * 100),
    );

    return seriesVal;
  };

  const getSeriesData = (selectedValues: any) => {
    const filteredResults = getFilteredResults();
    const seriesData: any = [];

    statutoryItems.forEach((item: any, index) => {
      if (selectedValues.includes(item.key)) {
        seriesData.push({
          name: item.label,
          data: filteredResults.map((result: any) => result[item.key]),
          color: colorMap[index],
        });
      }
    });

    return seriesData;
  };

  const seriesData = getSeriesData(selectedValues.items);

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
      labels: seriesData.map((item: any) => item.name),
      colors: seriesData.map((item: any) => item.color),
    },
  };

  const chartType = selectedValues.chartType.toString();

  const radialBarSeries = getSeriesRadialBarChart(
    seriesData.map((item: any) => item.data),
  );
  return (
    <GraphWrapperCard
      setDateRange={setDateRange}
      title={dictionary?.statutory_ratios}
      chartFilters={statutoryFilters}
      selectedValues={selectedValues}
      setSelectedValues={setSelectedValues}
    >
      <div className="items-center justify-center block">
        <div
          className={`min-h-[350px] ${chartType === 'radialBarChart' ? 'pt-7' : 'pt-0'}`}
        >
          <ChartSelector
            chartOptions={chartOptions}
            chartType={chartType}
            getSeriesRadialBarChart={radialBarSeries}
            getSeriesData={seriesData.map(
              ({ type, stroke, ...rest }: any) => rest,
            )}
            getSeriesDataComboChart={seriesData}
          />
        </div>
      </div>
    </GraphWrapperCard>
  );
};

export default memo(StatutoryRatiosChart);
