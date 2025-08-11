'use client';

import GraphWrapperCard from '@/components/graphWrapperCard';
import { businessSophistication } from '@/data/graphDataNonFinancial';
import { memo, useCallback, useState } from 'react';
import { getInitialSelectedValues } from '@/utility/getInitialSelectedValues';
import { SeriesDataType } from '@/types';
import { nonFinancialGraphYears } from '@/data/graphYears';
import {
  businessSophisticationFilters,
  horizontalBarChartOptions,
  lineChartOptions,
  stackedVerticalBarChartOptions,
  verticalBarChartOptions,
} from '@/utility/nonFinancialDashboardChartDetails';
import NonFinancialChartSelector from './nonFinancialChartSelector';

function BusinessSophistication({ dictionary }: any) {
  const [selectedValues, setSelectedValues] = useState(
    getInitialSelectedValues(businessSophisticationFilters),
  );
  const [dateRange, setDateRange] = useState<string[]>([]);

  const getFilteredResults = useCallback(() => {
    return dateRange.length === 0
      ? businessSophistication
      : businessSophistication?.filter((result) =>
          dateRange?.includes(result.year),
        );
  }, [dateRange]);

  const getSeriesData = () => {
    const seriesData: SeriesDataType[] = [];
    const filteredResults = getFilteredResults();

    selectedValues.items.forEach((item: any) => {
      switch (item) {
        case 'totalBranches':
          seriesData.push({
            name: 'Total branches/ Total outlets (Number)',
            data: filteredResults.map((result) => result.totalBranches),
            color: '#F26722',
          });
          break;

        case 'branchesOutsideWP':
          seriesData.push({
            name: 'Branches outside Western province (Number)',
            data: filteredResults.map((result) => result.outsideBranches),
            color: '#61CAE6',
          });
          break;
        case 'cdmMachines':
          seriesData.push({
            name: 'CDM machines (Number)',
            data: filteredResults.map((result) => result.cdmMachines),
            color: '#9B4C86',
          });
          break;
        case 'newOutlets':
          seriesData.push({
            name: 'New outlets opened (Number)',
            data: filteredResults.map((result) => result.newOutlets),
            color: '#97CA3C',
          });
          break;
        default:
          return null;
      }
    });
    return seriesData;
  };

  const chartType = selectedValues.chartType.toString();

  const chartOptions = {
    verticalBarChartData: {
      ...verticalBarChartOptions,
      xaxis: { ...verticalBarChartOptions.xaxis, categories: dateRange },
      yaxis: {
        ...verticalBarChartOptions.yaxis,
        title: {
          text: 'Number',
          rotate: -90,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: '#FFF',
            fontSize: '18px',
            fontWeight: 500,
          },
        },
      },
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
      yaxis: {
        ...verticalBarChartOptions.yaxis,
        title: {
          text: 'Number',
          rotate: -90,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: '#FFF',
            fontSize: '18px',
            fontWeight: 500,
          },
        },
      },
    },
    stackedVerticalBarChartData: {
      ...stackedVerticalBarChartOptions,
      xaxis: {
        ...stackedVerticalBarChartOptions.xaxis,
        categories: dateRange,
      },
      yaxis: {
        ...verticalBarChartOptions.yaxis,
        title: {
          text: 'Number',
          rotate: -90,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: '#FFF',
            fontSize: '18px',
            fontWeight: 500,
          },
        },
      },
    },
  };

  return (
    <GraphWrapperCard
      title={dictionary?.business_sophistication}
      chartFilters={businessSophisticationFilters}
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
}

export default memo(BusinessSophistication);
