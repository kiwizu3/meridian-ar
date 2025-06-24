'use client';

import GraphWrapperCard from '@/components/graphWrapperCard';
import { colorMap } from '@/data/graphColor';
import { investorInformation } from '@/data/graphDataFinancial';
import { SeriesData } from '@/types';
import { generateYAxisConfig } from '@/utility/extractType';
import {
  comboChartOptions,
  horizontalBarChartOptions,
  investorFilters,
  investorItems,
  lineChartOptions,
  radialBarChartOptions,
  verticalBarChartOptions,
} from '@/utility/financialDashBoardChartDetails';
import { getInitialSelectedValues } from '@/utility/getInitialSelectedValues';
import { memo, useCallback, useMemo, useState } from 'react';
import ChartSelector from './chartSelector';

const InvestorChart = ({ dictionary }: any) => {
  const [dateRange, setDateRange] = useState<string[]>([]);
  const [selectedValues, setSelectedValues] = useState(() =>
    getInitialSelectedValues(investorFilters),
  );

  const radialBarChartSelected =
    selectedValues?.chartType?.toString() === 'radialBarChart';

  const getFilteredResults = useCallback(() => {
    if (selectedValues?.years && radialBarChartSelected) {
      return investorInformation?.filter((result) =>
        selectedValues?.years?.includes(result.year),
      );
    } else {
      return dateRange.length === 0
        ? investorInformation
        : investorInformation?.filter((result) =>
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
    [selectedValues],
  );

  const getSeriesData = (selectedValues: any) => {
    const filteredResults = getFilteredResults();
    const seriesData: any = [];

    const firstItemCate = investorItems.filter((val) =>
      selectedValues?.[0]?.includes(val.key),
    )?.[0]?.category;

    investorItems.forEach((item, index) => {
      if (selectedValues?.includes(item.key)) {
        seriesData.push({
          name: item.label,
          type: firstItemCate === item?.category ? 'column' : 'line',
          data: filteredResults.map((result: any) => result[item.key]),
          color: colorMap[index],
          stroke: firstItemCate === item?.category ? 0 : 4,
        });
      }
    });

    return seriesData;
  };

  const seriesData = getSeriesData(selectedValues.items);

  const selectedItems = seriesData.map((item: any) => item?.name);

  const yaxisConfig = useMemo(
    () => generateYAxisConfig(selectedItems, seriesData),
    [selectedItems],
  );

  const chartOptions = {
    comboChartData: {
      ...comboChartOptions,
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 6,
      },
      stroke: {
        width: seriesData.map((item: any) => item.stroke),
      },
      labels: dateRange,
      colors: seriesData.map((item: any) => item.color),
      type: seriesData.map((item: any) => item.type),
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
      xaxis: { ...lineChartOptions.xaxis, categories: dateRange },
      yaxis: yaxisConfig,
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
      labels: seriesData.map((item: any) => item.name),
      colors: seriesData.map((item: any) => item.color),
    },
  };

  const chartType = selectedValues.chartType.toString();

  return (
    <GraphWrapperCard
      setDateRange={setDateRange}
      chartFilters={investorFilters}
      selectedValues={selectedValues}
      setSelectedValues={setSelectedValues}
      title={dictionary?.investor_information}
    >
      <ChartSelector
        chartOptions={chartOptions}
        chartType={chartType}
        getSeriesRadialBarChart={getSeriesRadialBarChart(
          seriesData.map((item: any) => item.data),
        )}
        getSeriesData={seriesData.map(({ type, stroke, ...rest }: any) => rest)}
        getSeriesDataComboChart={seriesData}
      />
    </GraphWrapperCard>
  );
};

export default memo(InvestorChart);
