'use client';

import GraphWrapperCard from '@/components/graphWrapperCard';
import CustomerIcon from '@/components/icons/customer';
import GraphCard from '../cards/graphCard';
import { memo, useState } from 'react';
import { customerData } from '@/data/graphDataNonFinancial';
import { lineChartOptions } from '@/utility/nonFinancialDashboardChartDetails';

const customerFilters = [
  {
    key: 'year',
    title: 'Year',
    selectionType: 'single',
    items: [
      {
        key: '2020',
        label: '2020',
        isChecked: false,
      },
      {
        key: '2021',
        label: '2021',
        isChecked: false,
      },
      {
        key: '2022',
        label: '2022',
        isChecked: false,
      },
      {
        key: '2023',
        label: '2023',
        isChecked: false,
      },
      {
        key: '2024',
        label: '2024',
        isChecked: true,
      },
    ],
  },
];

function CustomersPage({ dictionary }: any) {
  const getInitialSelectedValues = (filters: any) => {
    const initialSelectedValues: any = {};
    filters.forEach((filter: any) => {
      initialSelectedValues[filter.key] = filter.items
        .filter((item: any) => item.isChecked)
        .map((item: any) => item.key);
    });
    return initialSelectedValues;
  };

  const [selectedValues, setSelectedValues] = useState(
    getInitialSelectedValues(customerFilters),
  );

  const customerChartData = {
    lineGraphData: {
      ...lineChartOptions,
      xaxis: {
        ...lineChartOptions.xaxis,
        categories: ['2020', '2021', '2022', '2023', '2024'],
      },
      yaxis: [
        {
          ...lineChartOptions.yaxis,
          min: 0,
          title: {
            text: '',
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

        {
          min: 0,
          opposite: true,
          // title: {
          //   text: 'Number',
          //   rotate: -90,
          //   offsetX: 6 ,
          //   offsetY: 0,
          //   style: {
          //     color: '#FFF',
          //     fontSize: '18px',
          //     fontWeight: 500,
          //   },
          // },
          labels: {
            show: true,
            align: 'right',
            minWidth: 0,
            maxWidth: 300,
            style: {
              colors: '#fff',
              fontSize: '11px',
              fontWeight: 500,
            },
            offsetX: 0,
            offsetY: 0,
            rotate: 0,
          },
          axisBorder: {
            show: true,
            color: '#fff',
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            color: '#fff',
            offsetX: 0,
            offsetY: 0,
          },
        },
      ],
    },
    getSeriesData: [
      {
        name: 'Total customer base',
        data: [600000, 600000, 650000, 750000, 800000],
      },
      {
        name: 'Customer financial solutions',
        data: [30, 31, 32, 32, 33],
      },
    ],
  };
  return (
    <GraphWrapperCard
      title={dictionary?.customers}
      selectedValues={selectedValues}
      setSelectedValues={setSelectedValues}
      chartFilters={customerFilters}
    >
      <div>
        <GraphCard
          cardData={[
            {
              title: dictionary?.total_customer_base,
              value: `${
                customerData
                  .find((item) => item.year === selectedValues.year.toString())
                  ?.totalCustomerBase?.toLocaleString() as string
              }+`,
            },
            {
              title: dictionary?.customer_financial_solutions,
              value: customerData.find(
                (item) => item.year === selectedValues.year.toString(),
              )?.financialSolutions as number,
            },
          ]}
          icon={<CustomerIcon />}
          chartData={customerChartData}
          classNames="max-w-[120px]"
        />
      </div>
    </GraphWrapperCard>
  );
}

export default memo(CustomersPage);
