'use client';

import GraphWrapperCard from '@/components/graphWrapperCard';
import { colorMap } from '@/data/graphColor';
import { nonFinancialGraphYears } from '@/data/graphYears';
import {
  comboChartOptions,
  horizontalBarChartOptions,
  lineChartOptions,
  verticalBarChartOptions,
  pieChartOptions,
} from '@/utility/nonFinancialDashboardChartDetails';
import { getInitialSelectedValues } from '@/utility/getInitialSelectedValues';
import {
  employeeItems,
  employeeWellbeingFilters,
  stackedVerticalBarChartOptions,
} from '@/utility/nonFinancialDashboardChartDetails';
import { memo, useCallback, useMemo, useState } from 'react';
import { employeeWellbeing } from '../../data/graphDataNonFinancial';
import ChartSelector from '../graphTypesFinancial/chartSelector';
import NonFinancialChartSelector from './nonFinancialChartSelector';
import { extractType, generateYAxisConfig } from '@/utility/extractType';

const EmployeeWellbeingChart = ({ dictionary }: any) => {
  const [dateRange, setDateRange] = useState<string[]>([]);
  const [selectedValues, setSelectedValues] = useState(() =>
    getInitialSelectedValues(employeeWellbeingFilters),
  );

  const getFilteredResults = useCallback(() => {
    return dateRange.length === 0
      ? employeeWellbeing
      : employeeWellbeing?.filter((result) => dateRange?.includes(result.year));
  }, [dateRange, selectedValues]);

  const getSeriesData = (selectedValues: any) => {
    const filteredResults = getFilteredResults();
    const seriesData: any = [];

    const firstItemCate = employeeItems.filter((val) =>
      selectedValues?.[0]?.includes(val.key),
    )?.[0]?.category;

    employeeItems.forEach((item, index) => {
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
      stroke: {
        width: seriesData.map((item: any) => item.stroke),
      },
      labels: dateRange,
      colors: seriesData.map((item: any) => item.color),
      type: seriesData.map((item: any) => item.type),
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 6,
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
    stackedVerticalBarChartData: {
      ...stackedVerticalBarChartOptions,
      xaxis: { ...stackedVerticalBarChartOptions.xaxis, categories: dateRange },
      yaxis: yaxisConfig,
    },
    horizontalBarChartData: {
      ...horizontalBarChartOptions,
      xaxis: {
        ...horizontalBarChartOptions.xaxis,
        categories: dateRange?.toReversed(),
      },
    },
    pieChartData: {
      ...pieChartOptions,
      labels: seriesData.map((item: any) => item.name),
      colors: seriesData.map((item: any) => item.color),
    },
  };

  const getPieChartSeriesData = (year: string): number[] => {
    const data: number[] = [];
    const selectedYearData = employeeWellbeing?.filter((result) =>
      year?.includes(result.year),
    );
    selectedValues.items.forEach((item: any) => {
      switch (item) {
        case 'totalMaleWorkForce':
          data.push(
            ...selectedYearData.map((result) => result.totalMaleWorkForce),
          );
          break;
        case 'totalFemaleWorkForce':
          data.push(
            ...selectedYearData.map((result) => result.totalFemaleWorkForce),
          );
        default:
          break;
      }
    });

    return data;
  };

  const chartType = selectedValues.chartType.toString();

  return (
    <GraphWrapperCard
      title={dictionary?.employee_wellbeing}
      setDateRange={setDateRange}
      chartFilters={employeeWellbeingFilters}
      selectedValues={selectedValues}
      setSelectedValues={setSelectedValues}
      years={nonFinancialGraphYears}
    >
      <NonFinancialChartSelector
        chartOptions={chartOptions}
        chartType={chartType}
        getSeriesData={seriesData.map(({ type, stroke, ...rest }: any) => rest)}
        getSeriesDataComboChart={seriesData}
        getSeriesDataPieChart={getPieChartSeriesData(selectedValues.years)}
      />
    </GraphWrapperCard>
  );
};

export default memo(EmployeeWellbeingChart);
