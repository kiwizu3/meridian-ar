'use client';

import GraphWrapperCard from '@/components/graphWrapperCard';
import { reputationData } from '@/data/graphDataNonFinancial';
import { memo, useCallback, useState } from 'react';
import { getInitialSelectedValues } from '@/utility/getInitialSelectedValues';
import { SeriesDataType } from '@/types';
import { nonFinancialGraphYears } from '@/data/graphYears';
import {
  reputationFilters,
  horizontalBarChartOptions,
  lineChartOptions,
  verticalBarChartOptions,
} from '@/utility/nonFinancialDashboardChartDetails';
import NonFinancialChartSelector from './nonFinancialChartSelector';
import GraphCard from '../cards/graphCard';
import { AwardIcon } from '../icons';
import areaSingle from '@/public/images/area-single.png';

function Reputation({ dictionary }: any) {
  const [selectedValues, setSelectedValues] = useState(
    getInitialSelectedValues(reputationFilters),
  );

  const [dateRange, setDateRange] = useState<string[]>([]);

  const getFilteredResults = useCallback(() => {
    return dateRange.length === 0
      ? reputationData
      : reputationData?.filter((result) => dateRange?.includes(result.year));
  }, [dateRange]);

  const getSeriesData = () => {
    const seriesData: SeriesDataType[] = [];
    const filteredResults = getFilteredResults();

    selectedValues.items.forEach((item: any) => {
      if (item === 'brandValue') {
        seriesData.push({
          name: 'Brand value (Brand Finance) (Rs. Mn)',
          data: filteredResults.map((result) => result.brandValue),
          color: '#97CA3C',
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
  };

  const graphCardFilters = ['timePeriod', 'chartType'];

  const graphCardItemValues = ['brandRanking', 'creditRating'];

  const brandRankingChartData = {
    lineGraphData: {
      ...lineChartOptions,
      xaxis: { ...lineChartOptions.xaxis, categories: dateRange },
      yaxis: {
        ...lineChartOptions.yaxis,
        min: 0,
        title: {
          text: 'Position',
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
    getSeriesData: [
      {
        name: 'Brand ranking (Brand Finance) (Position)',
        data: [29, 25, 24, 24, 25],
      },
    ],
  };
  return (
    <>
      <GraphWrapperCard
        title={dictionary?.reputation}
        chartFilters={
          graphCardItemValues.includes(selectedValues.items.toString())
            ? reputationFilters.filter(
                (item) => !graphCardFilters.includes(item.key),
              )
            : reputationFilters.filter((item) => item.key !== 'year')
        }
        selectedValues={selectedValues}
        setSelectedValues={setSelectedValues}
        setDateRange={setDateRange}
        isDateRangeVisible={
          !graphCardItemValues.includes(selectedValues.items.toString())
        }
        years={nonFinancialGraphYears}
      >
        {selectedValues.items.toString() === 'brandRanking' ? (
          <GraphCard
            cardData={[
              {
                title: 'Brand ranking',
                value: reputationData.find(
                  (item) => item.year === selectedValues.year.toString(),
                )?.brandRanking as number,
              },
            ]}
            icon={<AwardIcon />}
            chartData={brandRankingChartData}
          />
        ) : selectedValues.items.toString() === 'creditRating' ? (
          <GraphCard
            cardData={[
              {
                title: 'Credit rating (Fitch Rating)',
                value: reputationData.find(
                  (item) => item.year === selectedValues.year.toString(),
                )?.creditRating as string,
              },
            ]}
            icon={<AwardIcon />}
            image={areaSingle}
          />
        ) : (
          <NonFinancialChartSelector
            chartOptions={chartOptions}
            getSeriesData={getSeriesData()}
            chartType={chartType}
          />
        )}
      </GraphWrapperCard>
    </>
  );
}

export default memo(Reputation);
