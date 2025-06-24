'use client';

import GraphWrapperCard from '@/components/graphWrapperCard';
import { infrastructureData } from '@/data/graphDataNonFinancial';
import { memo, useCallback, useState } from 'react';
import { getInitialSelectedValues } from '@/utility/getInitialSelectedValues';
import { SeriesDataType } from '@/types';
import { nonFinancialGraphYears } from '@/data/graphYears';
import {
  insfrastructureQualityServiceFilters,
  horizontalBarChartOptions,
  lineChartOptions,
  verticalBarChartOptions,
  stackedVerticalBarChartOptions,
} from '@/utility/nonFinancialDashboardChartDetails';
import NonFinancialChartSelector from './nonFinancialChartSelector';

function InfrastructureQualityService({ dictionary }: any) {
  const [selectedValues, setSelectedValues] = useState(
    getInitialSelectedValues(insfrastructureQualityServiceFilters),
  );

  const [dateRange, setDateRange] = useState<string[]>([]);

  const getFilteredResults = useCallback(() => {
    return dateRange.length === 0
      ? infrastructureData
      : infrastructureData?.filter((result) =>
          dateRange?.includes(result.year),
        );
  }, [dateRange]);

  const getSeriesData = () => {
    const seriesData: SeriesDataType[] = [];
    const filteredResults = getFilteredResults();

    selectedValues.items.forEach((item: any) => {
      if (item === 'investmentICT') {
        seriesData.push({
          name: 'Investment on ICT (Rs. Mn)',
          data: filteredResults.map((result) => result.investmentICT),
          color: '#9B4C86',
        });
      }
      if (item === 'investmentFreeholdLand') {
        seriesData.push({
          name: 'Investment on freehold land and building (Rs. Mn)',
          data: filteredResults.map(
            (result) => result.investmentFreeholdLandBuilding,
          ),
          color: '#61CAE6',
        });
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
          text: 'Rs.Mn',
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
          text: 'Rs.Mn',
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
          text: 'Rs.Mn',
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
    <>
      <GraphWrapperCard
        title={dictionary?.infrastructure_services}
        chartFilters={insfrastructureQualityServiceFilters}
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
    </>
  );
}

export default memo(InfrastructureQualityService);
