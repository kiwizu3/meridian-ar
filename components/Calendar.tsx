'use client';

import { Chevron } from '@/components/icons';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

export interface CalendarProps {
  years: string[];
  setDateRange?: Dispatch<SetStateAction<string[]>>;
}

const Calendar: React.FC<CalendarProps> = ({ years, setDateRange }) => {
  const [startYear, setStartYear] = useState<string | null>(years[0]);
  const [endYear, setEndYear] = useState<string | null>(
    years[years.length - 1],
  );
  const [visibleYears, setVisibleYears] = useState<string[]>(years); // State to hold visible years based on screen size

  const isMobileView = () => window.matchMedia('(max-width: 768px)').matches;

  useEffect(() => {
    const updateYearsBasedOnScreen = () => {
      if (isMobileView()) {
        const last4Years = years?.slice(-4);
        setVisibleYears(last4Years);
        setStartYear(last4Years?.[0]);
        setEndYear(last4Years?.[last4Years?.length - 1]);
        setDateRange?.(last4Years); // Set the last 4 years in the date range
      } else {
        setVisibleYears(years);
        setStartYear(years?.[0]);
        setEndYear(years?.[years?.length - 1]);
        setDateRange?.(years); // Set all years in the date range for larger screens
      }
    };

    updateYearsBasedOnScreen();
    window.addEventListener('resize', updateYearsBasedOnScreen);

    return () => window.removeEventListener('resize', updateYearsBasedOnScreen);
  }, [years, setDateRange]);

  const handleYearClick = (year: string) => {
    if (!startYear || (startYear && endYear)) {
      setStartYear(year);
      setEndYear(null);
    } else {
      setEndYear(year);
    }
  };

  useEffect(() => {
    if (startYear && endYear) {
      const startIndex = years.indexOf(startYear);
      const endIndex = years.indexOf(endYear);

      if (startIndex !== -1 && endIndex !== -1) {
        const newRange =
          startIndex <= endIndex
            ? years.slice(startIndex, endIndex + 1)
            : years.slice(endIndex, startIndex + 1);
        setDateRange?.(newRange);
      }
    }
  }, [startYear, endYear, setDateRange, years]);

  const isInRange = (year: string) => {
    if (!startYear || !endYear) return false;

    const startIndex = years.indexOf(startYear);
    const endIndex = years.indexOf(endYear);
    const yearIndex = years.indexOf(year);

    return startIndex <= endIndex
      ? startIndex <= yearIndex && yearIndex <= endIndex
      : endIndex <= yearIndex && yearIndex <= startIndex;
  };

  return (
    <div className="flex items-center">
      <Dropdown
        classNames={{
          content: 'bg-lightBlack rounded-2xl p-4 border-0',
          trigger:
            'data-[hover=true]:bg-transparent px-0 h-auto aria-expanded:opacity-100',
        }}
      >
        <DropdownTrigger>
          <Button variant="light" className="text-white opacity-100">
            <p className="cursor-pointer flex gap-2 items-center opacity-100 font-secondary font-medium text-xs text-white">
              {startYear
                ? `${startYear ?? ''} - ${endYear ?? ''}`
                : 'Time period'}
              <Chevron
                width={20}
                height={20}
                className="fill-white hover:fill-white opacity-100"
              />
            </p>
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          classNames={{ list: 'grid grid-cols-3 gap-4' }}
          aria-label="year-selection"
          closeOnSelect={false}
        >
          {visibleYears?.map((item) => (
            <DropdownItem
              onClick={() => handleYearClick(item)}
              key={item}
              className={`text-white border-1 border-grayAsh text-center ${
                isInRange(item) ? 'bg-cardGreen text-white' : 'text-white'
              } ${startYear === item || endYear === item ? 'bg-themeGreen' : 'text-white'}`}
            >
              {item}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Calendar;
