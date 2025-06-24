import { GraphDataCategories } from '@/types';

export const graphCategories: GraphDataCategories[] = [
  { key: 'customers', label: 'Customers', isShow: true },
  {
    key: 'environmentLandscape',
    label: 'Environment and landscape',
    isShow: true,
  },
  { key: 'economicWellbeing', label: 'Economic Wellbeing', isShow: true },
  { key: 'employeeWellbeing', label: 'Employee Wellbeing', isShow: true },
  { key: 'socialWellbeing', label: 'Social Wellbeing', isShow: true },
  {
    key: 'businessSophistication',
    label: 'Business Sophistication',
    isShow: true,
  },
  {
    key: 'reputation',
    label: 'Reputation',
    isShow: true,
  },
  {
    key: 'infrastructureQualityService',
    label: 'Infrastructure and quality of services',
    isShow: true
  },
];

export const environmentAndLandscape = [
  {
    year: '2020',
    environmentRelatedProjects: 5,
    waterConsumption: 39793,
    waterConsumptionPerMillionProfit: 7.67,
    treesPlanted: 34853,
    treesSavedFromRecycling: 94,
    investmentGreenInitiatives: 9.54,
    paperRecycled: 5501,
    energyConsumption: 20538,
    energyPerProfit: 3.96,
    totalCarbonFootprint: 4484,
    totalCarbonFootprintPerProfit: 0.11,
  },
  {
    year: '2021',
    environmentRelatedProjects: 15,
    waterConsumption: 31013,
    waterConsumptionPerMillionProfit: 4.56,
    treesPlanted: 6180,
    treesSavedFromRecycling: 68,
    investmentGreenInitiatives: 1.01,
    paperRecycled: 3986,
    energyConsumption: 15418.08,
    energyPerProfit: 2.27,
    totalCarbonFootprint: 3110,
    totalCarbonFootprintPerProfit: 0.1,
  },
  {
    year: '2022',
    environmentRelatedProjects: 4,
    waterConsumption: 33044,
    waterConsumptionPerMillionProfit: 3.82,
    treesPlanted: 1000,
    treesSavedFromRecycling: 398,
    investmentGreenInitiatives: 3.81,
    paperRecycled: 23399,
    energyConsumption: 30944,
    energyPerProfit: 3.57,
    totalCarbonFootprint: 3259,
    totalCarbonFootprintPerProfit: 0.37,
  },
  {
    year: '2023',
    environmentRelatedProjects: 3,
    waterConsumption: 38847,
    waterConsumptionPerMillionProfit: 4.59,
    treesPlanted: 0,
    treesSavedFromRecycling: 827,
    investmentGreenInitiatives: 8.53,
    paperRecycled: 48643,
    energyConsumption: 14384,
    energyPerProfit: 1.7,
    totalCarbonFootprint: 3480,
    totalCarbonFootprintPerProfit: 0.41,
  },
  {
    year: '2024',
    environmentRelatedProjects: 3,
    waterConsumption: 44908,
    waterConsumptionPerMillionProfit: 0.21,
    treesPlanted: 8200,
    treesSavedFromRecycling: 342,
    investmentGreenInitiatives: 0,
    paperRecycled: 20109,
    energyConsumption: 16852.95,
    energyPerProfit: 1.76,
    totalCarbonFootprint: 3982.9,
    totalCarbonFootprintPerProfit: 2.4,
  },
];

export const economicWellbeing = [
  {
    year: '2020',
    economicValueCreated: 4330.14,
    economicValueDistributed: {
      depositorsAndLenders: 13218.85,
      employees: 2986.63,
      government: 5014.32,
      shareholders: 0,
    },
  },
  {
    year: '2021',
    economicValueCreated: '6148.39',
    economicValueDistributed: {
      depositorsAndLenders: '11125.01',
      employees: '2955.81',
      government: '4651.0',
      shareholders: '1662.17',
    },
  },
  {
    year: '2022',
    economicValueCreated: '6282.85',
    economicValueDistributed: {
      depositorsAndLenders: '8204.42',
      employees: '3193.77',
      government: '6017.63',
      shareholders: '3878.4',
    },
  },
  {
    year: '2023',
    economicValueCreated: '-3588.56',
    economicValueDistributed: {
      depositorsAndLenders: '19967.6',
      employees: '3533.42',
      government: '6923.29',
      shareholders: '2770.29',
    },
  },
  {
    year: '2024',
    economicValueCreated: '1796.45',
    economicValueDistributed: {
      depositorsAndLenders: '21144.19',
      employees: '4353.25',
      government: '9485.08',
      shareholders: '3185.83',
    },
  },
];

export const employeeWellbeing = [
  {
    year: '2020',
    totalWorkforce: 3606,
    employeesHired: 1291,
    trainingPrograms: 137,
    investmentOnTraining: 18.56,
    totalTrainingHours: 52788,
    averageTrainingHours: 14.73,
    staffRemuneration: 3005.18,
    totalMaleWorkForce: 61,
    totalFemaleWorkForce: 39,
  },
  {
    year: '2021',
    totalWorkforce: 3536,
    employeesHired: 999,
    trainingPrograms: 19,
    investmentOnTraining: 4.01,
    totalTrainingHours: 7737,
    averageTrainingHours: 2.17,
    staffRemuneration: 2959.82,
    totalMaleWorkForce: 60,
    totalFemaleWorkForce: 40,
  },
  {
    year: '2022',
    totalWorkforce: 3822,
    employeesHired: 1734,
    trainingPrograms: 21,
    investmentOnTraining: 6.18,
    totalTrainingHours: 17754,
    averageTrainingHours: 4.65,
    staffRemuneration: 3199.95,
    totalMaleWorkForce: 57,
    totalFemaleWorkForce: 43,
  },
  {
    year: '2023',
    totalWorkforce: 3562,
    employeesHired: 1281,
    trainingPrograms: 39,
    investmentOnTraining: 11.71,
    totalTrainingHours: 18163,
    averageTrainingHours: 6.5,
    staffRemuneration: 3545.13,
    totalMaleWorkForce: 55,
    totalFemaleWorkForce: 45,
  },
  {
    year: '2024',
    totalWorkforce: 4132,
    employeesHired: 2194,
    trainingPrograms: 68,
    investmentOnTraining: 23.22,
    totalTrainingHours: 43127,
    averageTrainingHours: 10.44,
    staffRemuneration: 4095.95,
    totalMaleWorkForce: 54,
    totalFemaleWorkForce: 46,
  },
];

export const socialWellbeing = [
  {
    year: '2020',
    programmes: 12,
    hours: 20131,
  },
  {
    year: '2021',
    programmes: 22,
    hours: 5764,
  },
  {
    year: '2022',
    programmes: 20,
    hours: 15250,
  },
  {
    year: '2023',
    programmes: 25,
    hours: 15492,
  },
  {
    year: '2024',
    programmes: 18,
    hours: 7132,
  },
];

export const businessSophistication = [
  {
    year: '2020',
    totalBranches: '165',
    cdmMachines: '23',
    outsideBranches: '84',
    newOutlets: '2',
  },
  {
    year: '2021',
    totalBranches: '169',
    cdmMachines: '24',
    outsideBranches: '88',
    newOutlets: '4',
  },
  {
    year: '2022',
    totalBranches: '181',
    cdmMachines: '24',
    outsideBranches: '99',
    newOutlets: '12',
  },
  {
    year: '2023',
    totalBranches: '192',
    cdmMachines: '24',
    outsideBranches: '110',
    newOutlets: '11',
  },
  {
    year: '2024',
    totalBranches: '200',
    cdmMachines: '24',
    outsideBranches: '117',
    newOutlets: '8',
  },
];

export const customerData = [
  {
    year: '2020',
    totalCustomerBase: 600000,
    financialSolutions: 30,
  },
  {
    year: '2021',
    totalCustomerBase: 600000,
    financialSolutions: 31,
  },
  {
    year: '2022',
    totalCustomerBase: 650000,
    financialSolutions: 32,
  },
  {
    year: '2023',
    totalCustomerBase: 750000,
    financialSolutions: 32,
  },
  {
    year: '2024',
    totalCustomerBase: 800000,
    financialSolutions: 33,
  },
];

export const reputationData = [
  {
    year: '2020',
    brandValue: 5133,
    brandRanking: 29,
    creditRating: 'A- (lka)',
  },
  {
    year: '2021',
    brandValue: 6237,
    brandRanking: 25,
    creditRating: 'A- (lka)',
  },
  {
    year: '2022',
    brandValue: 5918,
    brandRanking: 24,
    creditRating: 'A- (lka) (RWN)',
  },
  {
    year: '2023',
    brandValue: 5821,
    brandRanking: 24,
    creditRating: 'A- (lka) (RWN)',
  },
  {
    year: '2024',
    brandValue: 3597,
    brandRanking: 25,
    creditRating: 'BBB+(lka) (Stable Outlook)',
  },
];

export const infrastructureData = [
  {
    year: '2020',
    investmentICT: '115.65',
    investmentFreeholdLandBuilding: '230.13',
  },
  {
    year: '2021',
    investmentICT: '46.4',
    investmentFreeholdLandBuilding: '481.96',
  },
  {
    year: '2022',
    investmentICT: '69.66',
    investmentFreeholdLandBuilding: '53.04',
  },
  {
    year: '2023',
    investmentICT: '214.79',
    investmentFreeholdLandBuilding: '69.71',
  },
  {
    year: '2024',
    investmentICT: '279.25',
    investmentFreeholdLandBuilding: '88.09',
  },
];


