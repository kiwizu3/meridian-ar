'use client';

import GraphWrapperCard from '@/components/graphWrapperCard';
import { environmentAndLandscape } from '../../data/graphDataNonFinancial';
import { memo, useCallback, useMemo, useState } from 'react';
import { FootprintIcon, TreeIcon } from '@/components/icons';
import GraphCard from '../cards/graphCard';
import { getInitialSelectedValues } from '@/utility/getInitialSelectedValues';
import { nonFinancialGraphYears } from '@/data/graphYears';
import {
  environmentItems,
  environmentLandscapeFilters,
  horizontalBarChartOptions,
  lineChartOptions,
  verticalBarChartOptions,
  comboChartOptions,
} from '@/utility/nonFinancialDashboardChartDetails';
import NonFinancialChartSelector from './nonFinancialChartSelector';
import { colorMap } from '@/data/graphColor';
import { generateYAxisConfig } from '@/utility/extractType';

function EnvironmentAndLandscape({ dictionary }: any) {
  const [selectedValues, setSelectedValues] = useState(
    getInitialSelectedValues(environmentLandscapeFilters),
  );

  const [dateRange, setDateRange] = useState<string[]>([]);

  const getFilteredResults = useCallback(() => {
    return dateRange.length === 0
      ? environmentAndLandscape
      : environmentAndLandscape?.filter((result) =>
          dateRange?.includes(result.year),
        );
  }, [dateRange]);

  const getSeriesData = (selectedValues: any) => {
    const filteredResults = getFilteredResults();
    const seriesData: any = [];

    environmentItems.forEach((item, index) => {
      if (selectedValues?.includes(item.key)) {
        seriesData.push({
          name: item.label,
          data: filteredResults.map((result: any) => result[item.key]),
          color: colorMap[index],
          type: item.type,
          stroke: item.type === 'line' ? 4 : 0,
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

  const chartType = selectedValues.chartType.toString();

  const chartOptions = {
    comboChartData: {
      ...comboChartOptions,
      stroke: {
        width: seriesData.map((item: any) => item.stroke),
      },
      labels: dateRange,
      colors: seriesData.map((item: any) => item.color),
      type: seriesData.map((item: any) => item.type),
      dataLabels: {
        enabled: true,
        enabledOnSeries: [
          seriesData.map((item: any) => item.type).indexOf('line'),
        ],
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

  const cardFiltersToRemove = ['chartType', 'timePeriod'];
  const graphCardItemValues = [
    'environmentRelatedProjects',
    'totalCarbonFootprintPerProfit',
  ];

  const environmentRelatedProjectsData = {
    lineGraphData: {
      ...lineChartOptions,
      xaxis: { ...lineChartOptions.xaxis, categories: dateRange },
      yaxis: {
        ...lineChartOptions.yaxis,
        min: 0,
        forceNiceScale: true,
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
        name: 'Projects',
        data: [5, 15, 4, 3, 3],
      },
    ],
  };

  const carbonFootprintData = {
    lineGraphData: {
      ...lineChartOptions,
      xaxis: { ...lineChartOptions.xaxis, categories: dateRange },
      yaxis: {
        ...lineChartOptions.yaxis,
        min: 0,
        forceNiceScale: true,
        title: {
          text: 'tCo2e',
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
        name: 'Total carbon footprint per Rs. million of profit (tCo2e)',
        data: [0.11, 0.1, 0.37, 0.41, 2.4],
      },
    ],
  };

  return (
    <div className="h-full">
      <GraphWrapperCard
        title={dictionary?.environment_and_landscape}
        chartFilters={
          selectedValues.items.toString() === 'environmentRelatedProjects' ||
          selectedValues.items.toString() === 'totalCarbonFootprintPerProfit'
            ? environmentLandscapeFilters.filter(
                (item) => !cardFiltersToRemove.includes(item.key),
              )
            : environmentLandscapeFilters.filter((item) => item.key !== 'year')
        }
        selectedValues={selectedValues}
        setSelectedValues={setSelectedValues}
        setDateRange={setDateRange}
        isDateRangeVisible={
          !graphCardItemValues.includes(selectedValues.items.toString())
        }
        years={nonFinancialGraphYears}
      >
        {selectedValues.items.toString() === 'environmentRelatedProjects' ? (
          <GraphCard
            cardData={[
              {
                title: 'Environment related projects  (Number)',
                value: environmentAndLandscape.find(
                  (item) => item.year === selectedValues.year.toString(),
                )?.environmentRelatedProjects as number,
              },
            ]}
            icon={<TreeIcon />}
            chartData={environmentRelatedProjectsData}
          />
        ) : selectedValues.items.toString() ===
          'totalCarbonFootprintPerProfit' ? (
          <GraphCard
            cardData={[
              {
                title:
                  'Total carbon footprint per Rs. million of profit (tCo2e)',
                value: environmentAndLandscape.find(
                  (item) => item.year === selectedValues.year.toString(),
                )?.totalCarbonFootprintPerProfit as number,
              },
            ]}
            icon={<FootprintIcon />}
            chartData={carbonFootprintData}
          />
        ) : (
          <NonFinancialChartSelector
            chartOptions={chartOptions}
            getSeriesData={seriesData.map(
              ({ type, stroke, ...rest }: any) => rest,
            )}
            chartType={chartType}
            getSeriesDataComboChart={seriesData}
            expand={true}
          />
        )}
      </GraphWrapperCard>
    </div>
  );
}

export default memo(EnvironmentAndLandscape);
