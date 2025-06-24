'use client';

import React, { memo, useCallback, useMemo, useState } from 'react';
import GraphWrapperCard from '@/components/graphWrapperCard';
import { economicWellbeing } from '../../data/graphDataNonFinancial';
import { getInitialSelectedValues } from '@/utility/getInitialSelectedValues';
import { SeriesDataType } from '@/types';
import { nonFinancialGraphYears } from '@/data/graphYears';
import {
  economicWellbeingFilters,
  horizontalBarChartOptions,
  lineChartOptions,
  verticalBarChartOptions,
} from '@/utility/nonFinancialDashboardChartDetails';
import NonFinancialChartSelector from './nonFinancialChartSelector';
import { generateYAxisConfig } from '@/utility/extractType';

const EconomicWellbeing = ({ dictionary }: any) => {
  const [selectedValues, setSelectedValues] = useState(
    getInitialSelectedValues(economicWellbeingFilters),
  );

  const [dateRange, setDateRange] = useState<string[]>([]);

  const getFilteredResults = useCallback(() => {
    return dateRange.length === 0
      ? economicWellbeing
      : economicWellbeing?.filter((result) => dateRange?.includes(result.year));
  }, [dateRange]);

  const getSeriesData = () => {
    const seriesData: SeriesDataType[] = [];
    const filteredResults = getFilteredResults();

    selectedValues.items.forEach((item: any) => {
      switch (item) {
        case 'economicValueCreated':
          seriesData.push({
            name: 'Economic value created (Rs. Mn)',
            data: filteredResults.map((result) => result.economicValueCreated),
            color: '#F26722',
          });
          break;

        case 'depositorsLenders':
          seriesData.push({
            name: 'Depositors and Lenders (Rs. Mn)',
            data: filteredResults.map(
              (result) => result.economicValueDistributed.depositorsAndLenders,
            ),
            color: '#61CAE6',
          });
          break;
        case 'employees':
          seriesData.push({
            name: 'Employees (Rs. Mn)',
            data: filteredResults.map(
              (result) => result.economicValueDistributed.employees,
            ),
            color: '#9B4C86',
          });
          break;
        case 'government':
          seriesData.push({
            name: 'Government (Rs. Mn)',
            data: filteredResults.map(
              (result) => result.economicValueDistributed.government,
            ),
            color: '#97CA3C',
          });
          break;
        case 'shareholders':
          seriesData.push({
            name: 'Shareholders (Rs. Mn)',
            data: filteredResults.map(
              (result) => result.economicValueDistributed.shareholders,
            ),
            color: '#FF33A1',
          });
          break;
        default:
          return null;
      }
    });
    return seriesData;
  };

  const selectedItems = getSeriesData().map((item) => item?.name);

  const yaxisConfig = useMemo(
    () => generateYAxisConfig(selectedItems, getSeriesData()),
    [selectedItems],
  );

  console.log('yaxisConfig', yaxisConfig);

  const chartOptions = {
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
    lineGraphData: {
      ...lineChartOptions,
      xaxis: { ...lineChartOptions.xaxis, categories: dateRange },
      yaxis: yaxisConfig,
    },
  };

  const chartType = selectedValues.chartType.toString();
  return (
    <GraphWrapperCard
      title={dictionary?.economic_wellbeing}
      chartFilters={economicWellbeingFilters}
      selectedValues={selectedValues}
      setSelectedValues={setSelectedValues}
      setDateRange={setDateRange}
      years={nonFinancialGraphYears}
    >
      <NonFinancialChartSelector
        chartOptions={chartOptions}
        getSeriesData={getSeriesData()}
        chartType={chartType}
      />
    </GraphWrapperCard>
  );
};

export default memo(EconomicWellbeing);
