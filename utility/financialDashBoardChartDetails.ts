import { ChartTooltip } from '@/components/ChartTooltip';
import { chartCatagories } from '@/types';
import ApexCharts from 'apexcharts';

export const comboChartOptions: ApexCharts.ApexOptions = {
  legend: {
    onItemClick: {
      toggleDataSeries: false,
    },
    show: true,
    showForSingleSeries: true,
    fontSize: '14px',
    fontWeight: 400,
    labels: {
      colors: 'text-white',
      useSeriesColors: false,
    },
    markers: {
      shape: 'circle',
      offsetX: -5,
      strokeWidth: 0,
    },
    itemMargin: {
      horizontal: 16,
      vertical: 0,
    },
  },
  grid: {
    borderColor: '#1F5772',
  },
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false,
    },
    events: {
      mounted(chartContext: any, config: any) {
        ChartTooltip(chartContext);
      },

      updated(chartContext: any, config: any) {
        ChartTooltip(chartContext);
      },
    },
  },

  dataLabels: {
    enabled: true,
    enabledOnSeries: [1],
  },
  yaxis: [
    {
      title: {
        text: 'Times',
        rotate: -90,
        offsetX: -5,
        offsetY: 0,
        style: {
          color: '#FFF',
          fontSize: '18px',
          fontWeight: 500,
        },
      },

      axisBorder: {
        show: true,
        color: '#fff',
        offsetX: 0,
        offsetY: 0,
      },

      labels: {
        formatter(val) {
          return val?.toFixed(2);
        },
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
    },
    {
      opposite: true,
      title: {
        text: '%',
        rotate: -90,
        offsetX: 6,
        offsetY: 0,
        style: {
          color: '#FFF',
          fontSize: '18px',
          fontWeight: 500,
        },
      },
      axisBorder: {
        show: true,
        color: '#fff',
        offsetX: 0,
        offsetY: 0,
      },
      labels: {
        formatter(val) {
          return val?.toFixed(2);
        },
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
    },
  ],
  xaxis: {
    tickPlacement: 'on',
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
    axisBorder: {
      show: true,
      color: '#fff',
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: true,
      color: '#fff',
      height: 6,
      offsetX: 0,
      offsetY: 0,
    },
  },
};

export const verticalBarChartOptions: ApexCharts.ApexOptions = {
  grid: {
    borderColor: '#1F5772',
  },
  chart: {
    zoom: {
      enabled: false,
    },
    events: {
      mounted(chartContext: any, config: any) {
        ChartTooltip(chartContext);
      },

      updated(chartContext: any, config: any) {
        ChartTooltip(chartContext);
      },
    },
  },
  plotOptions: {
    bar: {
      borderRadiusApplication: 'end',
      horizontal: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    colors: ['transparent'],
    width: 2,
  },
  legend: {
    onItemClick: {
      toggleDataSeries: false,
    },
    show: true,
    showForSingleSeries: true,
    fontSize: '14px',
    fontWeight: 400,
    labels: {
      colors: 'text-white',
      useSeriesColors: false,
    },
    markers: {
      shape: 'circle',
      offsetX: -5,
      strokeWidth: 0,
    },
    itemMargin: {
      horizontal: 16,
      vertical: 2,
    },
  },
  xaxis: {
    tickPlacement: 'on',
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
    axisBorder: {
      show: true,
      color: '#fff',
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: true,
      color: '#fff',
      height: 6,
      offsetX: 0,
      offsetY: 0,
    },
  },
  yaxis: {
    min: 0,
    forceNiceScale: true,
    labels: {
      formatter(val) {
        return val?.toFixed(2);
      },
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
    title: {
      text: '%',
      rotate: -90,
      offsetX: -4,
      offsetY: 0,
      style: {
        color: '#FFF',
        fontSize: '18px',
        fontWeight: 500,
      },
    },
  },
};

export const horizontalBarChartOptions: ApexCharts.ApexOptions = {
  grid: {
    borderColor: '#1F5772',
  },
  chart: {
    zoom: {
      enabled: false,
    },
    events: {
      mounted(chartContext: any, config: any) {
        ChartTooltip(chartContext);
      },

      updated(chartContext: any, config: any) {
        ChartTooltip(chartContext);
      },
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 2,
    colors: ['transparent'],
  },
  xaxis: {
    tickPlacement: 'on',
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
    axisBorder: {
      show: true,
      color: '#fff',
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: true,
      borderType: 'solid',
      color: '#fff',
      height: 6,
      offsetX: 0,
      offsetY: 0,
    },
  },
  yaxis: {
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
    title: {
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
  tooltip: {
    shared: true,
    intersect: false,
  },
  legend: {
    onItemClick: {
      toggleDataSeries: false,
    },
    show: true,
    showForSingleSeries: true,
    fontSize: '14px',
    fontWeight: 400,
    labels: {
      colors: 'text-white',
      useSeriesColors: false,
    },
    markers: {
      shape: 'circle',
      offsetX: -5,
      strokeWidth: 0,
    },
    itemMargin: {
      horizontal: 16,
      vertical: 0,
    },
  },
};

export const lineChartOptions: ApexCharts.ApexOptions = {
  chart: {
    type: 'line',
    zoom: {
      enabled: false,
    },
    events: {
      mounted(chartContext: any, config: any) {
        ChartTooltip(chartContext);
      },

      updated(chartContext: any, config: any) {
        ChartTooltip(chartContext);
      },
    },
  },
  stroke: {
    curve: 'smooth',
  },
  plotOptions: {
    bar: {
      borderRadiusApplication: 'end',
      horizontal: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    onItemClick: {
      toggleDataSeries: false,
    },
    show: true,
    showForSingleSeries: true,
    fontSize: '14px',
    fontWeight: 400,
    labels: {
      colors: 'text-white',
      useSeriesColors: false,
    },
    markers: {
      shape: 'circle',
      offsetX: -5,
      strokeWidth: 0,
    },
    itemMargin: {
      horizontal: 16,
      vertical: 0,
    },
  },
  markers: {
    size: 6,
  },
  grid: {
    borderColor: '#1F5772',
  },
  xaxis: {
    tickPlacement: 'on',
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
    axisBorder: {
      show: true,
      color: '#fff',
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: true,
      borderType: 'solid',
      color: '#fff',
      height: 6,
      offsetX: 0,
      offsetY: 0,
    },
  },
  yaxis: {
    min: 0,
    forceNiceScale: true,
    labels: {
      formatter(val) {
        return val?.toFixed(2);
      },
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
      color: '#fff',
      show: true,
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: true,
      color: '#fff',
      width: 6,
      offsetX: 0,
      offsetY: 0,
    },
    title: {
      text: '%',
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
};

export const radialBarChartOptions: ApexCharts.ApexOptions = {
  chart: {
    type: 'radialBar',
    zoom: {
      enabled: false,
    },
    events: {
      mounted(chartContext: any, config: any) {
        ChartTooltip(chartContext);
      },

      updated(chartContext: any, config: any) {
        ChartTooltip(chartContext);
      },
    },
  },
  plotOptions: {
    radialBar: {
      track: {
        background: '#093553',
      },
      offsetY: 0,
      startAngle: 0,
      endAngle: 270,
      hollow: {
        margin: 5,
        size: '30%',
        background: 'transparent',
        image: undefined,
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          show: false,
        },
      },
      barLabels: {
        enabled: true,
        useSeriesColors: true,
        offsetX: -8,
        fontSize: '11px',
        fontWeight: 500,
        formatter(seriesName: any, opts: any) {
          return `${seriesName}:  ${opts.w.globals.series[opts.seriesIndex]}`;
        },
      },
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          show: false,
        },
      },
    },
  ],
};

export const operatingFilters = [
  {
    key: 'items',
    title: 'Items',
    selectionType: 'multiple',
    items: [
      {
        key: 'netInterestMargin',
        label: 'Net Interest Margin (%)',
        isChecked: true,
        category: chartCatagories.rates,
      },
      {
        key: 'interestSpread',
        label: 'Interest Spread (%)',
        isChecked: true,
        category: chartCatagories.rates,
      },
      {
        key: 'costToIncome',
        label: 'Cost to Income (%)',
        isChecked: false,
        category: chartCatagories.rates,
      },
    ],
  },
  {
    key: 'chartType',
    title: 'Chart type',
    selectionType: 'single',
    items: [
      {
        key: 'verticalBarChart',
        label: 'Vertical bar chart',
        isChecked: true,
      },
      {
        key: 'horizontalBarChart',
        label: 'Horizontal bar chart',
        isChecked: false,
      },
      { key: 'lineGraph', label: 'Line graph', isChecked: false },
      { key: 'radialBarChart', label: 'Radial bar chart', isChecked: false },
    ],
  },
  {
    key: 'years',
    title: 'Year',
    selectionType: 'single',
    items: [
      {
        key: '2015',
        label: '2015',
        isChecked: false,
      },
      {
        key: '2016',
        label: '2016',
        isChecked: false,
      },
      {
        key: '2017',
        label: '2017',
        isChecked: false,
      },
      {
        key: '2018',
        label: '2018',
        isChecked: false,
      },
      {
        key: '2019',
        label: '2019',
        isChecked: false,
      },
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

export const financialFilters = [
  {
    key: 'items',
    title: 'Items',
    selectionType: 'multiple',
    items: [
      {
        key: 'totalAssetsToEquity',
        label: 'Total Assets to Equity (Times)',
        isChecked: false,
        category: chartCatagories.times,
      },
      {
        key: 'debtToEquity',
        label: 'Debt to Equity (Times)',
        isChecked: true,
        category: chartCatagories.times,
      },
      {
        key: 'equityToDeposits',
        label: 'Equity to Deposits (%)',
        isChecked: true,
        category: chartCatagories.rates,
      },
    ],
  },
  {
    key: 'chartType',
    title: 'Chart type',
    selectionType: 'single',
    items: [
      {
        key: 'verticalBarChart',
        label: 'Vertical bar chart',
        isChecked: false,
      },
      {
        key: 'horizontalBarChart',
        label: 'Horizontal bar chart',
        isChecked: false,
      },
      {
        key: 'lineGraph',
        label: 'Line graph',
        isChecked: false,
      },
      {
        key: 'comboChart',
        label: 'Combo chart',
        isChecked: true,
      },
      // {
      //   key: 'radialBarChart',
      //   label: 'Radial bar chart',
      //   isChecked: false,
      // },
    ],
  },
  {
    key: 'years',
    title: 'Year',
    selectionType: 'single',
    items: [
      {
        key: '2015',
        label: '2015',
        isChecked: false,
      },
      {
        key: '2016',
        label: '2016',
        isChecked: false,
      },
      {
        key: '2017',
        label: '2017',
        isChecked: false,
      },
      {
        key: '2018',
        label: '2018',
        isChecked: false,
      },
      {
        key: '2019',
        label: '2019',
        isChecked: false,
      },
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

export const investorItems = [
  {
    key: 'roe',
    label: 'Return on Equity (%)',
    isChecked: true,
    type: 'line',
    category: chartCatagories.rates,
  },
  {
    key: 'roa',
    label: 'Return on Assets (%)',
    isChecked: true,
    type: 'bar',
    category: chartCatagories.rates,
  },
  {
    key: 'equityToAssets',
    label: 'Equity to Assets (%)',
    isChecked: false,
    type: 'bar',
    category: chartCatagories.rates,
  },
  {
    key: 'navPerShare',
    label: 'Net Assets Value per Share (Rs.)',
    isChecked: false,
    type: 'bar',
    category: chartCatagories.rupees,
  },
  {
    key: 'eps',
    label: 'Earnings per Share (Rs.)',
    isChecked: false,
    type: 'bar',
    category: chartCatagories.rupees,
  },
  {
    key: 'dps',
    label: 'Dividend per Share (Rs.)',
    isChecked: false,
    type: 'bar',
    category: chartCatagories.rupees,
  },
  {
    key: 'dividendCover',
    label: 'Dividend Cover (Times)',
    isChecked: false,
    type: 'bar',
    category: chartCatagories.times,
  },
  {
    key: 'dividendYield',
    label: 'Dividend Yield (%)',
    isChecked: false,
    type: 'bar',
    category: chartCatagories.rates,
  },
  {
    key: 'dividendPayout',
    label: 'Dividend Payout (%)',
    isChecked: false,
    type: 'bar',
    category: chartCatagories.rates,
  },
  {
    key: 'peRatio',
    label: 'Price Earning Ratio (Times)',
    isChecked: false,
    type: 'bar',
    category: chartCatagories.times,
  },
  {
    key: 'pbvRatio',
    label: 'Price to Book Value (Times)',
    isChecked: false,
    type: 'bar',
    category: chartCatagories.times,
  },
  {
    key: 'marketPricePerShare',
    label: 'Market Price per Share (Rs.)',
    isChecked: false,
    type: 'bar',
    category: chartCatagories.rupees,
  },
  {
    key: 'marketCapitalisation',
    label: 'Market Capitalisation (Rs. Mn)',
    isChecked: false,
    type: 'bar',
    category: chartCatagories.millions,
  },
  {
    key: 'interestCover',
    label: 'Interest Cover (Times)',
    isChecked: false,
    type: 'bar',
    category: chartCatagories.times,
  },
];

export const investorFilters = [
  {
    key: 'items',
    title: 'Items',
    selectionType: 'multiple',
    items: investorItems,
  },
  {
    key: 'chartType',
    title: 'Chart type',
    selectionType: 'single',
    items: [
      {
        key: 'verticalBarChart',
        label: 'Vertical bar chart',
        isChecked: false,
      },
      {
        key: 'horizontalBarChart',
        label: 'Horizontal bar chart',
        isChecked: true,
      },
      {
        key: 'lineGraph',
        label: 'Line graph',
        isChecked: false,
      },
      {
        key: 'comboChart',
        label: 'Combo chart',
        isChecked: false,
      },
      // {
      //   key: 'radialBarChart',
      //   label: 'Radial bar chart',
      //   isChecked: false,
      // },
    ],
  },
  {
    key: 'years',
    title: 'Year',
    selectionType: 'single',
    items: [
      {
        key: '2015',
        label: '2015',
        isChecked: false,
      },
      {
        key: '2016',
        label: '2016',
        isChecked: false,
      },
      {
        key: '2017',
        label: '2017',
        isChecked: false,
      },
      {
        key: '2018',
        label: '2018',
        isChecked: false,
      },
      {
        key: '2019',
        label: '2019',
        isChecked: false,
      },
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

export const statutoryItems = [
  {
    key: 'ccrwar',
    label: 'Core Capital (%)',
    isChecked: true,
    category: chartCatagories.rates,
  },
  {
    key: 'trwcr',
    label: 'Total Capital (%)',
    isChecked: true,
    category: chartCatagories.rates,
  },
  {
    key: 'equityToDeposits',
    label: 'Equity to Deposits (%)',
    isChecked: true,
    category: chartCatagories.rates,
  },
  {
    key: 'liquidityRatio',
    label: 'Liquidity Ratio (%)',
    isChecked: true,
    category: chartCatagories.rates,
  },
];

export const statutoryFilters = [
  {
    key: 'items',
    title: 'Items',
    selectionType: 'multiple',
    items: statutoryItems,
  },
  {
    key: 'chartType',
    title: 'Chart type',
    selectionType: 'single',
    items: [
      {
        key: 'verticalBarChart',
        label: 'Vertical bar chart',
        isChecked: true,
      },
      {
        key: 'horizontalBarChart',
        label: 'Horizontal bar chart',
        isChecked: false,
      },
      {
        key: 'lineGraph',
        label: 'Line graph',
        isChecked: false,
      },
      // {
      //   key: 'radialBarChart',
      //   label: 'Radial bar chart',
      //   isChecked: false,
      // },
    ],
  },
  {
    key: 'years',
    title: 'Year',
    selectionType: 'single',
    items: [
      {
        key: '2015',
        label: '2015',
        isChecked: false,
      },
      {
        key: '2016',
        label: '2016',
        isChecked: false,
      },
      {
        key: '2017',
        label: '2017',
        isChecked: false,
      },
      {
        key: '2018',
        label: '2018',
        isChecked: false,
      },
      {
        key: '2019',
        label: '2019',
        isChecked: false,
      },
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

export const growthItems = [
  {
    key: 'income',
    label: 'Growth in Income (%)',
    isChecked: true,
    category: chartCatagories.rates,
  },
  {
    key: 'interestIncome',
    label: 'Growth in Interest Income (%)',
    isChecked: true,
    category: chartCatagories.rates,
  },
  {
    key: 'interestExpense',
    label: 'Growth in Interest Expense (%)',
    isChecked: false,
    category: chartCatagories.rates,
  },
  {
    key: 'netInterestIncome',
    label: 'Growth in Net Interest Income (%)',
    isChecked: false,
    category: chartCatagories.rates,
  },
  {
    key: 'profitBeforeTaxation',
    label: 'Growth in Profit before Taxation (%)',
    isChecked: false,
    category: chartCatagories.rates,
  },
  {
    key: 'profitAfterTaxation',
    label: 'Growth in Profit after Taxation (%)',
    isChecked: false,
    category: chartCatagories.rates,
  },
  {
    key: 'totalAssets',
    label: 'Growth in Total Assets (%)',
    isChecked: false,
    category: chartCatagories.rates,
  },
  {
    key: 'lendingPortfolio',
    label: 'Growth in Lending Portfolio (%)',
    isChecked: false,
    category: chartCatagories.rates,
  },
  {
    key: 'customerDeposits',
    label: 'Growth in Customer Deposits (%)',
    isChecked: false,
    category: chartCatagories.rates,
  },
  {
    key: 'equity',
    label: 'Growth in Equity (%)',
    isChecked: false,
    category: chartCatagories.rates,
  },
];

export const growthFilters = [
  {
    key: 'items',
    title: 'Items',
    selectionType: 'multiple',
    items: growthItems,
  },
  {
    key: 'chartType',
    title: 'Chart type',
    selectionType: 'single',
    items: [
      {
        key: 'verticalBarChart',
        label: 'Vertical bar chart',
        isChecked: false,
      },
      {
        key: 'horizontalBarChart',
        label: 'Horizontal bar chart',
        isChecked: false,
      },
      {
        key: 'lineGraph',
        label: 'Line graph',
        isChecked: false,
      },
      {
        key: 'areaChart',
        label: 'Area Chart',
        isChecked: true,
      },
      // {
      //   key: 'radialBarChart',
      //   label: 'Radial bar chart',
      //   isChecked: false,
      // },
    ],
  },
  {
    key: 'years',
    title: 'Year',
    selectionType: 'single',
    items: [
      {
        key: '2015',
        label: '2015',
        isChecked: false,
      },
      {
        key: '2016',
        label: '2016',
        isChecked: false,
      },
      {
        key: '2017',
        label: '2017',
        isChecked: false,
      },
      {
        key: '2018',
        label: '2018',
        isChecked: false,
      },
      {
        key: '2019',
        label: '2019',
        isChecked: false,
      },
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
