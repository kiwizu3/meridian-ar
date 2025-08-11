import { chartCatagories } from '@/types';

// =============== DIFFERENT CHART OPTIONS ==================//

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
    type: 'bar',
    stacked: false,
    toolbar: {
      show: true,
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
    show: true,
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
          return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex];
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

export const stackedVerticalBarChartOptions: ApexCharts.ApexOptions = {
  chart: {
    stacked: true,
    stackType: 'normal',
  },
  grid: {
    borderColor: '#1F5772',
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

export const pieChartOptions: ApexCharts.ApexOptions = {
  chart: {
    width: 300,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    fontSize: '14px',
    position: 'right',
    fontWeight: 400,
    labels: {
      colors: 'text-white',
      useSeriesColors: false,
    },
    offsetY: 60,
    markers: {
      shape: 'circle',
      offsetX: -5,
      strokeWidth: 0,
    },
    itemMargin: {
      horizontal: 16,
      vertical: 4,
    },
  },
};

// ============== CHART FILTERS =================== //

export const employeeItems = [
  {
    key: 'totalMaleWorkForce',
    label: 'Workforce Male (%)',
    isChecked: true,
    category: chartCatagories.rates,
    type: 'bar',
  },
  {
    key: 'totalFemaleWorkForce',
    label: 'Workforce Female (%)',
    isChecked: true,
    category: chartCatagories.rates,
    type: 'bar',
  },
  {
    key: 'totalWorkforce',
    label: 'Total workforce (Number)',
    isChecked: false,
    category: chartCatagories.number,
    type: 'line',
  },
  {
    key: 'employeesHired',
    label: 'Employees hired (Number)',
    isChecked: false,
    category: chartCatagories.number,
    type: 'bar',
  },
  {
    key: 'trainingPrograms',
    label: 'Training programs carried out (Number)',
    isChecked: false,
    category: chartCatagories.number,
    type: 'bar',
  },
  {
    key: 'investmentOnTraining',
    label: 'Investment on training and development (Rs. Mn)',
    isChecked: false,
    category: chartCatagories.millions,
    type: 'bar',
  },
  {
    key: 'totalTrainingHours',
    label: 'Total training hours (Hours)',
    isChecked: false,
    category: chartCatagories.hours,
    type: 'bar',
  },
  {
    key: 'averageTrainingHours',
    label: 'Avg hours of training per employee (Hours)',
    isChecked: false,
    category: chartCatagories.hours,
    type: 'bar',
  },
  {
    key: 'staffRemuneration',
    label: 'Staff remuneration and benefits (Rs. Mn)',
    isChecked: false,
    category: chartCatagories.millions,
    type: 'bar',
  },
];

export const employeeWellbeingFilters = [
  {
    key: 'items',
    title: 'Items',
    selectionType: 'multiple',
    items: employeeItems,
  },
  {
    key: 'chartType',
    title: 'Chart type',
    selectionType: 'single',
    items: [
      {
        key: 'pieChart',
        label: 'Pie Chart',
        isChecked: false,
      },
      {
        key: 'verticleBarChart',
        label: 'Verticle bar chart',
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
      {
        key: 'comboChart',
        label: 'Combo chart',
        isChecked: false,
      },
      {
        key: 'stackedBarChart',
        label: 'Stacked bar chart (Verticle)',
        isChecked: false,
      },
    ],
  },
  {
    key: 'years',
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
        isChecked: false,
      },
      {
        key: '2025',
        label: '2025',
        isChecked: true,
      },
    ],
  },
];

export const economicWellbeingFilters = [
  {
    key: 'items',
    title: 'Items',
    selectionType: 'multiple',
    items: [
      {
        key: 'economicValueCreated',
        label: 'Economic value created (Rs. Mn)',
        isChecked: false,
      },
      {
        key: 'depositorsLenders',
        label: 'Depositors and Lenders (Rs. Mn)',
        isChecked: true,
      },
      {
        key: 'employees',
        label: 'Employees (Rs. Mn)',
        isChecked: true,
      },
      {
        key: 'government',
        label: 'Government (Rs. Mn)',
        isChecked: true,
      },
      {
        key: 'shareholders',
        label: 'Shareholders (Rs. Mn)',
        isChecked: false,
      },
    ],
  },
  {
    key: 'chartType',
    title: 'Chart type',
    selectionType: 'single',
    items: [
      {
        key: 'verticleBarChart',
        label: 'Verticle bar chart',
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
    ],
  },
];

export const businessSophisticationFilters = [
  {
    key: 'items',
    title: 'Items',
    selectionType: 'multiple',
    items: [
      {
        key: 'totalBranches',
        label: 'Total branches/ Total outlets (Number)',
        isChecked: true,
      },
      {
        key: 'cdmMachines',
        label: 'CDM machines (Number)',
        isChecked: true,
      },
      {
        key: 'branchesOutsideWP',
        label: 'Branches outside Western province (Number)',
        isChecked: true,
      },
      {
        key: 'newOutlets',
        label: 'New outlets opened (Number)',
        isChecked: true,
      },
    ],
  },
  {
    key: 'chartType',
    title: 'Chart type',
    selectionType: 'single',
    items: [
      {
        key: 'verticleBarChart',
        label: 'Verticle bar chart',
        isChecked: false,
      },
      {
        key: 'horizontalBarChart',
        label: 'Horizontal bar chart',
        isChecked: false,
      },
      {
        key: 'stackedBarChart',
        label: 'Stacked bar chart (Verticle)',
        isChecked: true,
      },
      {
        key: 'lineGraph',
        label: 'Line graph',
        isChecked: false,
      },
    ],
  },
];

export const socialWellbeingFilters = [
  {
    key: 'items',
    title: 'Items',
    selectionType: 'single',
    items: [
      {
        key: 'staffVolunteeredHours',
        label: 'Staff volunteered (Hours)',
        isChecked: true,
      },
      {
        key: 'communityDevelopmentPrograms',
        label: 'Community development programs (Number)',
        isChecked: false,
      },
    ],
  },
  {
    key: 'chartType',
    title: 'Chart type',
    selectionType: 'single',
    items: [
      {
        key: 'verticleBarChart',
        label: 'Verticle bar chart',
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
    ],
  },
  {
    key: 'year',
    title: 'Year',
    selectionType: 'single',
    items: [
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
        isChecked: false,
      },
      {
        key: '2025',
        label: '2025',
        isChecked: true,
      },
    ],
  },
];

export const environmentItems = [
  {
    key: 'environmentRelatedProjects',
    label: 'Environment related projects  (Number)',
    isChecked: false,
    category: chartCatagories.number,
    type: 'bar',
  },
  {
    key: 'waterConsumption',
    label: 'Water consumption (m3)',
    isChecked: true,
    category: chartCatagories.m3,
    type: 'line',
  },
  {
    key: 'waterConsumptionPerMillionProfit',
    label: 'Water consumption per Rs. million of profit (m3)',
    isChecked: true,
    category: chartCatagories.m3,
    type: 'bar',
  },
  {
    key: 'treesPlanted',
    label: 'Trees planted/ distributed  (Number)',
    isChecked: false,
    category: chartCatagories.number,
    type: 'bar',
  },
  {
    key: 'treesSavedFromRecycling',
    label: 'Trees saved from recycling (Number)',
    isChecked: false,
    category: chartCatagories.number,
    type: 'bar',
  },
  {
    key: 'investmentGreenInitiatives',
    label: 'Investment on green initiatives (Rs. Mn)',
    isChecked: false,
    category: chartCatagories.millions,
    type: 'bar',
  },
  {
    key: 'paperRecycled',
    label: 'Paper recycled (Kg)',
    isChecked: false,
    category: chartCatagories.kg,
    type: 'bar',
  },
  {
    key: 'energyConsumption',
    label: 'Energy consumption (GJ)',
    isChecked: false,
    category: chartCatagories.gj,
    type: 'bar',
  },
  {
    key: 'energyPerProfit',
    label: 'Energy per Rs. million of profit (GJ)',
    isChecked: false,
    category: chartCatagories.gj,
    type: 'bar',
  },
  {
    key: 'totalCarbonFootprint',
    label: 'Total carbon footprint (tCo2e)',
    isChecked: false,
    category: chartCatagories.tCo2e,
    type: 'bar',
  },
  {
    key: 'totalCarbonFootprintPerProfit',
    label: 'Total carbon footprint per Rs. million of profit (tCo2e)',
    isChecked: false,
    category: chartCatagories.tCo2e,
    type: 'bar',
  },
];

export const environmentLandscapeFilters = [
  {
    key: 'items',
    title: 'Items',
    selectionType: 'multiple',
    items: environmentItems,
  },
  {
    key: 'chartType',
    title: 'Chart type',
    selectionType: 'single',
    items: [
      {
        key: 'verticleBarChart',
        label: 'Verticle bar chart',
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
        label: 'Combo Chart',
        isChecked: false,
      },
    ],
  },
  {
    key: 'year',
    title: 'Year',
    selectionType: 'single',
    items: [
      {
        key: '2020',
        label: '2020',
        isChecked: true,
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
        isChecked: false,
      },
      {
        key: '2025',
        label: '2025',
        isChecked: false,
      },
    ],
  },
];

export const reputationFilters = [
  {
    key: 'items',
    title: 'Items',
    selectionType: 'single',
    items: [
      {
        key: 'brandRanking',
        label: 'Brand ranking (Brand Finance) (Position)',
        isChecked: true,
      },
      {
        key: 'brandValue',
        label: 'Brand value (Brand Finance) (Rs. Mn)',
        isChecked: false,
      },
      {
        key: 'creditRating',
        label: 'Credit rating (Fitch Rating)',
        isChecked: false,
      },
    ],
  },
  {
    key: 'chartType',
    title: 'Chart type',
    selectionType: 'single',
    items: [
      {
        key: 'verticleBarChart',
        label: 'Verticle bar chart',
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
    ],
  },
  {
    key: 'year',
    title: 'Year',
    selectionType: 'single',
    items: [
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
        isChecked: false,
      },
      {
        key: '2025',
        label: '2025',
        isChecked: true,
      },
    ],
  },
];

export const insfrastructureQualityServiceFilters = [
  {
    key: 'items',
    title: 'Items',
    selectionType: 'multiple',
    items: [
      {
        key: 'investmentICT',
        label: 'Investment on ICT (Rs. Mn)',
        isChecked: true,
      },
      {
        key: 'investmentFreeholdLand',
        label: 'Investment on freehold land and building (Rs. Mn)',
        isChecked: false,
      },
    ],
  },
  {
    key: 'chartType',
    title: 'Chart type',
    selectionType: 'single',
    items: [
      {
        key: 'verticleBarChart',
        label: 'Verticle bar chart',
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
      {
        key: 'stackedBarChart',
        label: 'Stacked bar chart (Verticle)',
        isChecked: false,
      },
    ],
  },
];
