'use client';

import { graphYears } from '@/data/graphYears';
import { Select, SelectItem } from '@nextui-org/react';
import { Dispatch, memo, ReactElement, SetStateAction, useRef } from 'react';
import Calendar from '../Calendar';

export type filterItems = {
  key: string;
  isCheckbox?: boolean;
  title: string;
  items: any[];
  selectionType?: any;
  keysToDisable?: string[];
};

export interface GraphWrapperCardProps {
  title: string;
  children: ReactElement;
  chartFilters?: filterItems[];
  setSelectedValues?: Dispatch<SetStateAction<Record<string, string[]>>>;
  selectedValues?: Record<string, string[]>;
  setDateRange?: Dispatch<SetStateAction<string[]>>;
  isDateRangeVisible?: boolean;
  years?: string[];
}

function GraphWrapperCard(props: Readonly<GraphWrapperCardProps>) {
  const {
    title,
    children,
    chartFilters,
    selectedValues,
    setSelectedValues,
    setDateRange,
    isDateRangeVisible = true,
    years = graphYears,
  } = props;

  const disabledKeysRef = useRef<Record<string, string[]>>({});

  const comboChartSelected =
    selectedValues?.chartType?.toString() === 'comboChart';
  const stackedBarChartSelected =
    selectedValues?.chartType?.toString() === 'stackedBarChart';

  const handleSelectionChange = (
    filterKey: string,
    selected: Iterable<string | number>,
  ) => {
    const selectedArray = Array.from(selected, (key) => String(key));

    if (!stackedBarChartSelected && selectedArray?.length === 0) {
      return;
    }

    if (filterKey === 'chartType') {
      const selectedItemsKeys = selectedValues?.items || [];

      const itemsFilter = chartFilters?.find(
        (filter) => filter?.key === 'items',
      );

      const includesTotalMaleWorkForce = itemsFilter?.items?.some(
        (item) => item?.key === 'totalMaleWorkForce',
      );

      const selectedItems = itemsFilter?.items?.filter((item) =>
        selectedItemsKeys?.includes(item.key),
      );

      const selectedCategories = selectedItems?.map((item) => item?.category);

      const uniqueCategories = Array.from(new Set(selectedCategories));

      const chartTypeSelected = selectedArray.toString();

      if (chartTypeSelected === 'pieChart') {
        if (setSelectedValues) {
          setSelectedValues((prev) => ({
            ...prev,
            chartType: selectedArray,
            items: ['totalMaleWorkForce', 'totalFemaleWorkForce'], // Force these two items when pieChart is selected
          }));
        }

        disabledKeysRef.current = {
          ...disabledKeysRef.current,
          items:
            chartFilters
              ?.find((filter) => filter.key === 'items')
              ?.items?.filter(
                (item) =>
                  item.key !== 'totalMaleWorkForce' &&
                  item.key !== 'totalFemaleWorkForce',
              )
              .map((item) => item.key) || [],
        };

        return; // Exit early since we handle both chartType and items here
      } else if (
        chartTypeSelected === 'stackedBarChart' &&
        includesTotalMaleWorkForce
      ) {
        if (setSelectedValues) {
          setSelectedValues((prev) => ({
            ...prev,
            chartType: selectedArray,
            items: ['totalMaleWorkForce', 'totalFemaleWorkForce'], // Force these two items when pieChart is selected
          }));
        }
        disabledKeysRef.current = {
          ...disabledKeysRef.current,
          items:
            chartFilters
              ?.find((filter) => filter.key === 'items')
              ?.items?.filter(
                (item) =>
                  item.key !== 'totalMaleWorkForce' &&
                  item.key !== 'totalFemaleWorkForce',
              )
              .map((item) => item.key) || [],
        };
      } else if (uniqueCategories?.length === 2) {
        const disabled =
          selectedItems
            ?.filter((item) => !uniqueCategories?.includes(item.category))
            .map((item) => item?.key) || [];
        disabledKeysRef.current = {
          ...disabledKeysRef.current,
          [filterKey]: disabled,
        };
      } else {
        disabledKeysRef.current = {
          ...disabledKeysRef.current,
          items: [],
        };
      }
    }

    if (filterKey === 'items') {
      const selectedItems = chartFilters?.find(
        (filter) => filter.key === 'items',
      )?.items;
      const selectedCategories = Array.from(
        new Set(
          selectedArray.map(
            (key) => selectedItems?.find((item) => item.key === key)?.category,
          ),
        ),
      ).filter((category) => category) as string[];

      if (selectedCategories.length > 2) {
        return;
      }

      if (comboChartSelected && selectedArray?.length < 2) {
        return;
      }
      if (stackedBarChartSelected && selectedCategories?.length > 1) {
        return;
      }

      if (
        (!stackedBarChartSelected && selectedCategories.length === 2) ||
        (stackedBarChartSelected && selectedCategories.length === 1)
      ) {
        const disabled =
          selectedItems
            ?.filter((item) => !selectedCategories.includes(item.category))
            .map((item) => item.key) || [];
        disabledKeysRef.current = {
          ...disabledKeysRef.current,
          [filterKey]: disabled,
        };
      } else {
        disabledKeysRef.current = {
          ...disabledKeysRef.current,
          [filterKey]: [],
        };
      }
    }

    if (setSelectedValues) {
      setSelectedValues((prev) => ({
        ...prev,
        [filterKey]: selectedArray,
      }));
    }
  };

  const selectedYear =
    selectedValues?.years?.toString() || selectedValues?.year?.toString();

  const radialBarChartNotSelected =
    selectedValues?.chartType?.toString() !== 'radialBarChart' &&
    selectedValues?.chartType?.toString() !== 'pieChart';

  const filteredChartFilters = chartFilters?.filter(
    (filter) => !(radialBarChartNotSelected && filter.key === 'years'),
  );

  return (
    <div className="bg-cardGreen p-6 rounded-xl lg:h-full">
      <div className="flex flex-col lg:flex-row justify-between font-black text-[1.375rem] lg:items-center">
        <h1>{title}</h1>
        <div className="flex flex-row lg:overflow-hidden overflow-x-auto items-center">
          {filteredChartFilters?.map((filter: filterItems) => (
            <Select
              startContent={
                <p className="text-xs font-medium text-white font-secondary flex">
                  {filter?.title === 'Year' ? selectedYear : filter?.title}
                </p>
              }
              aria-label="chart"
              key={filter?.key}
              selectionMode={filter?.selectionType}
              className="max-w-sm py-1 focus-visible:outline-none"
              classNames={{
                popoverContent: 'bg-lightBlack inline-table',
                trigger:
                  'bg-transparent data-[hover=true]:!bg-cardGreen focus:!border-[#FFFFFF33] focus-visible:!outline-none  data-[open]:!border-[#FFFFFF33] data-[selected]:!bg-[#0B466E]',
                value: '!text-white hidden ',
                innerWrapper: 'min-w-[80px] mr-2',
              }}
              listboxProps={{
                itemClasses: {
                  selectedIcon: ['ml-2'],
                  base: [
                    '!text-white',
                    'transition-opacity',
                    'data-[hover=true]:text-white',
                    'data-[hover=true]:!bg-cardGreen',
                    'data-[selectable=true]:focus:bg-cardGreen',
                    'data-[selectable=true]:focus:text-white',
                    'data-[pressed=true]:opacity-70',
                    'data-[focus-visible=true]:ring-default-500',
                  ],
                },
              }}
              selectedKeys={selectedValues?.[filter?.key] || []}
              onSelectionChange={(keys) =>
                handleSelectionChange(filter.key, keys)
              }
              disabledKeys={disabledKeysRef.current[filter?.key]}
            >
              {filter.items.map((item: any) => (
                <SelectItem
                  key={item.key}
                  textValue={item.label}
                  aria-label={item.label}
                >
                  {item.label}
                </SelectItem>
              ))}
            </Select>
          ))}
          {isDateRangeVisible && radialBarChartNotSelected && setDateRange && (
            <Calendar years={years} setDateRange={setDateRange} />
          )}
        </div>
      </div>
      <div className="h-full">{children}</div>
    </div>
  );
}

export default memo(GraphWrapperCard);
