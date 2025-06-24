'use client';

import GraphWrapperCard from '@/components/graphWrapperCard';
import { socialWellbeing } from '@/data/graphDataNonFinancial';
import { memo, useCallback, useState } from 'react';
import GraphCard from '../cards/graphCard';
import { Community } from '@/components/icons';
import areaSingle from '@/public/images/area-single.png';
import { SeriesDataType } from '@/types';
import { getInitialSelectedValues } from '@/utility/getInitialSelectedValues';
import { nonFinancialGraphYears } from '@/data/graphYears';
import {
  horizontalBarChartOptions,
  lineChartOptions,
  socialWellbeingFilters,
  verticalBarChartOptions,
} from '@/utility/nonFinancialDashboardChartDetails';
import NonFinancialChartSelector from './nonFinancialChartSelector';

function SocialWellbeing({ dictionary }: any) {
  const swXAxis = socialWellbeing?.map((item: any) => item?.year);

  const [selectedValues, setSelectedValues] = useState(
    getInitialSelectedValues(socialWellbeingFilters),
  );

  const [dateRange, setDateRange] = useState<string[]>([]);

  const getFilteredResults = useCallback(() => {
    return dateRange.length === 0
      ? socialWellbeing
      : socialWellbeing?.filter((result) => dateRange?.includes(result.year));
  }, [dateRange]);

  const getSeriesData = () => {
    const seriesData: SeriesDataType[] = [];
    const filteredResults = getFilteredResults();

    selectedValues.items.forEach((item: any) => {
      if (item === 'staffVolunteeredHours') {
        seriesData.push({
          name: 'Staff volunteered (Hours)',
          data: filteredResults.map((result) => result.hours),
          color: '#F26722',
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
          text: 'Hours',
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
          text: 'Hours',
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

  const communityDevelopmentFilters = ['timePeriod', 'chartType'];

  const graphCardItemValues = ['communityDevelopmentPrograms'];

  const communityDevelopmentChartData = {
    lineGraphData: {
      ...lineChartOptions,
      xaxis: { ...lineChartOptions.xaxis, categories: dateRange },
      yaxis: {
        ...lineChartOptions.yaxis,
        min: 0,
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
    getSeriesData: [
      {
        name: 'Community Development Programmes (Number)',
        data: [12, 22, 20, 25, 18],
      },
    ],
  };
  return (
    <GraphWrapperCard
      title={dictionary?.social_wellbeing}
      chartFilters={
        selectedValues.items.toString() === 'communityDevelopmentPrograms'
          ? socialWellbeingFilters.filter(
              (item) => !communityDevelopmentFilters.includes(item.key),
            )
          : socialWellbeingFilters.filter((item) => item.key !== 'year')
      }
      selectedValues={selectedValues}
      setSelectedValues={setSelectedValues}
      setDateRange={setDateRange}
      isDateRangeVisible={
        !graphCardItemValues.includes(selectedValues.items.toString())
      }
      years={nonFinancialGraphYears}
    >
      {selectedValues.items.toString() === 'communityDevelopmentPrograms' ? (
        <GraphCard
          cardData={[
            {
              title: 'Community development programmes',
              value: socialWellbeing.find(
                (item) => item.year === selectedValues.year.toString(),
              )?.programmes as number,
            },
          ]}
          icon={<Community />}
          chartData={communityDevelopmentChartData}
        />
      ) : (
        <NonFinancialChartSelector
          chartOptions={chartOptions}
          getSeriesData={getSeriesData()}
          chartType={chartType}
        />
      )}
    </GraphWrapperCard>
  );
}

export default memo(SocialWellbeing);
