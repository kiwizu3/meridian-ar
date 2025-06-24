export default function DecadeGlance() {
  const keyIndicators = [
    {
      isSubheading: true,
      title: 'Operating Results',
      data: [],
    },
    {
      isSubheading: false,
      title: 'Net Interest Margin (NIM) %',
      data: [
        '12.67',
        '12.17',
        '10.91',
        '11.15',
        '11.87',
        '11.96',
        '12.15',
        '13.28',
        '11.86',
        '13.70',
      ],
    },
    {
      isSubheading: false,
      title: 'Interest Spread',
      data: [
        '11.55',
        '11.09',
        '9.59',
        '9.65',
        '10.32',
        '10.46',
        '10.62',
        '11.98',
        '9.15',
        '10.95',
      ],
    },
    {
      isSubheading: false,
      title: 'Cost to Income %',
      data: [
        '35.88',
        '35.89',
        '39.01',
        '37.37',
        '34.22',
        '33.44',
        '30.56',
        '29.28',
        '32.42',
        '31.13',
      ],
    },
    {
      isSubheading: true,
      title: 'Financial Position',
      data: [],
    },
    {
      isSubheading: false,
      title: 'Total Assets to Equity  (No. of times)',
      data: [
        '8.52',
        '8.07',
        '8.21',
        '7.87',
        '7.40',
        '6.26',
        '4.99',
        '4.97',
        '4.78',
        '4.63',
      ],
    },
    {
      isSubheading: false,
      title: 'Debt to Equity (No. of times)',
      data: [
        '7.15',
        '6.73',
        '6.89',
        '6.58',
        '6.02',
        '5.01',
        '3.74',
        '3.77',
        '3.60',
        '3.44',
      ],
    },
    {
      isSubheading: false,
      title: 'Equity to Deposits %',
      data: [
        '17.45',
        '19.63',
        '20.71',
        '21.04',
        '22.14',
        '25.77',
        '32.83',
        '37.07',
        '33.43',
        '35.52',
      ],
    },
    {
      isSubheading: true,
      title: 'Investor Information',
      data: [],
    },
    {
      isSubheading: false,
      title: 'Return on Equity (ROE) %',
      data: [
        '30.88',
        '40.40',
        '34.09',
        '30.52',
        '29.93',
        '25.04',
        '26.58',
        '28.29',
        '23.78',
        '23.40',
      ],
    },
    {
      isSubheading: false,
      title: 'Return on Assets (ROA) %',
      data: [
        '3.40',
        '4.89',
        '4.18',
        '3.80',
        '3.93',
        '3.70',
        '4.78',
        '5.68',
        '4.88',
        '4.97',
      ],
    },
    {
      isSubheading: false,
      title: 'Equity to Assets %',
      data: [
        '11.74',
        '12.40',
        '12.17',
        '12.70',
        '13.51',
        '15.98',
        '20.05',
        '20.11',
        '20.90',
        '21.58',
      ],
    },
    {
      isSubheading: false,
      title: 'Net Assets Value per Share (Rs.)',
      data: [
        '14.31',
        '18.91',
        '22.58',
        '27.70',
        '33.26',
        '41.51',
        '50.88',
        '59.65',
        '68.79',
        '78.74',
      ],
    },
    {
      isSubheading: false,
      title: 'Earnings per Share (EPS) (Rs.)',
      data: [
        '3.94',
        '6.71',
        '7.07',
        '7.67',
        '9.12',
        '9.36',
        '12.28',
        '15.63',
        '15.27',
        '17.26',
      ],
    },
    {
      isSubheading: false,
      title: 'Dividend per Share (DPS) (Rs.)',
      data: [
        '10.00',
        '7.50',
        '9.00',
        '11.00',
        '12.00',
        '-',
        '7.00',
        '5.00',
        '5.00',
        '5.75',
      ],
    },
    {
      isSubheading: false,
      title: 'Dividend Cover (No. of times)',
      data: [
        '3.15',
        '3.58',
        '3.14',
        '2.79',
        '3.04',
        '-',
        '1.75',
        '3.13',
        '3.05',
        '3.00',
      ],
    },
    {
      isSubheading: false,
      title: 'Dividend Yield %',
      data: [
        '6.66',
        '7.07',
        '7.60',
        '9.25',
        '9.99',
        '-',
        '14.77',
        '8.62',
        '9.09',
        '9.16',
      ],
    },
    {
      isSubheading: false,
      title: 'Dividend Payout %',
      data: [
        '31.74',
        '27.94',
        '31.82',
        '35.84',
        '32.88',
        '-',
        '57.01',
        '31.98',
        '32.74',
        '33.31',
      ],
    },
    {
      isSubheading: false,
      title: 'Price Earnings Ratio (P/E) (No. of times)',
      data: [
        '4.77',
        '3.95',
        '4.19',
        '3.87',
        '3.29',
        '3.22',
        '3.86',
        '3.71',
        '3.60',
        '3.64',
      ],
    },
    {
      isSubheading: false,
      title: 'Price to Book Value (P/BV) (No. of times)',
      data: [
        '1.31',
        '1.40',
        '1.31',
        '1.07',
        '0.90',
        '0.73',
        '0.93',
        '0.97',
        '0.80',
        '0.80',
      ],
    },
    {
      isSubheading: false,
      title: 'Market Price per Share (Rs.)',
      data: [
        '150.20',
        '106.10',
        '118.40',
        '118.90',
        '120.10',
        '120.50',
        '47.40',
        '58.00',
        '55.00',
        '62.80',
      ],
    },
    {
      isSubheading: false,
      title: 'Market Capitalisation (Rs. Million)',
      data: [
        '10,402',
        '14,696',
        '16,400',
        '16,469',
        '16,636',
        '16,691',
        '26,262',
        '32,135',
        '30,473',
        '34,795',
      ],
    },
    {
      isSubheading: false,
      title: 'Interest Cover (No. of times)',
      data: [
        '1.56',
        '1.92',
        '1.72',
        '1.56',
        '1.60',
        '1.56',
        '1.81',
        '2.35',
        '1.57',
        '1.71',
      ],
    },
    {
      isSubheading: true,
      title: 'Growth',
      data: [],
    },
    {
      isSubheading: false,
      title: 'Income %',
      data: [
        '8.51',
        '5.81',
        '23.76',
        '29.35',
        '16.90',
        '6.64',
        '(4.67)',
        '1.32',
        '41.77',
        '15.14',
      ],
    },
    {
      isSubheading: false,
      title: 'Interest Income %',
      data: [
        '7.65',
        '5.42',
        '24.13',
        '30.62',
        '16.97',
        '6.57',
        '(5.84)',
        '0.19',
        '44.10',
        '15.70',
      ],
    },
    {
      isSubheading: false,
      title: 'Interest Expense %',
      data: [
        '(16.65)',
        '(2.96)',
        '40.52',
        '41.74',
        '12.64',
        '5.13',
        '(15.37)',
        '(23.23)',
        '133.03',
        '3.71',
      ],
    },
    {
      isSubheading: false,
      title: 'Net Interest Income %',
      data: [
        '38.76',
        '11.86',
        '13.20',
        '21.41',
        '21.16',
        '7.86',
        '2.51',
        '17.13',
        '1.95',
        '28.69',
      ],
    },
    {
      isSubheading: false,
      title: 'Profit before Taxation %',
      data: [
        '78.33',
        '59.81',
        '10.33',
        '10.26',
        '19.50',
        '(1.68)',
        '22.29',
        '27.98',
        '(1.38)',
        '29.23',
      ],
    },
    {
      isSubheading: false,
      title: 'Profit after Taxation %',
      data: [
        '62.84',
        '70.37',
        '5.39',
        '8.49',
        '18.91',
        '2.62',
        '31.15',
        '27.33',
        '(2.33)',
        '13.04',
      ],
    },
    {
      isSubheading: false,
      title: 'Total Assets %',
      data: [
        '11.06',
        '25.13',
        '21.59',
        '17.57',
        '12.89',
        '5.55',
        '(2.35)',
        '16.92',
        '10.94',
        '10.87',
      ],
    },
    {
      isSubheading: false,
      title: 'Loans & Advances %',
      data: [
        '13.75',
        '27.87',
        '24.59',
        '14.80',
        '10.85',
        '4.78',
        '(3.98)',
        '17.75',
        '8.03',
        '11.09',
      ],
    },
    {
      isSubheading: false,
      title: 'Customer Deposits %',
      data: [
        '(1.44)',
        '17.50',
        '13.16',
        '20.76',
        '14.08',
        '7.26',
        '(3.81)',
        '3.82',
        '27.90',
        '7.72',
      ],
    },
    {
      isSubheading: false,
      title: 'Equity %',
      data: [
        '27.72',
        '32.20',
        '19.37',
        '22.70',
        '20.06',
        '24.81',
        '22.56',
        '17.23',
        '15.34',
        '14.46',
      ],
    },
    {
      isSubheading: true,
      title: 'Employee',
      data: [],
    },
    {
      isSubheading: false,
      title: "Profit before Tax per Employee (Rs. '000)",
      data: [
        '1,387',
        '1,940',
        '1,823',
        '1,883',
        '2,139',
        '2,110',
        '2,631',
        '3,116',
        '3,298',
        '3,674',
      ],
    },
    {
      isSubheading: false,
      title: "Profit after Tax per Employee (Rs. '000)",
      data: [
        '908',
        '1,354',
        '1,216',
        '1,235',
        '1,397',
        '1,438',
        '1,923',
        '2,266',
        '2,375',
        '2,315',
      ],
    },
    {
      isSubheading: false,
      title: "Total Assets per Employee (Rs. '000)",
      data: [
        '28,131',
        '30,800',
        '31,904',
        '35,112',
        '37,697',
        '39,923',
        '39,755',
        '43,005',
        '51,192',
        '48,929',
      ],
    },
    {
      isSubheading: false,
      title: 'No. of Branches',
      data: [
        '135',
        '146',
        '154',
        '159',
        '163',
        '165',
        '169',
        '181',
        '192',
        '200',
      ],
    },
    {
      isSubheading: false,
      title: 'No. of ATMs',
      data: [
        '2,401',
        '2,744',
        '3,221',
        '3,441',
        '3,618',
        '3,606',
        '3,536',
        '3,822',
        '3,562',
        '4,132',
      ],
    },
    {
      isSubheading: false,
      title: 'Employees per Branch',
      data: ['18', '19', '21', '22', '22', '22', '21', '21', '19', '21'],
    },
  ];

  const financialStatements = [
    {
      isSubheading: true,
      title: 'Income Statement',
      data: [],
    },
    {
      isSubheading: false,
      title: 'Income',
      data: [
        '14,787,757',
        '15,646,467',
        '19,363,429',
        '25,046,202',
        '29,278,024',
        '31,222,860',
        '29,766,124',
        '30,159,476',
        '42,756,458',
        '49,230,095',
      ],
    },
    {
      isSubheading: false,
      title: 'Interest Income',
      data: [
        '13,687,070',
        '14,428,729',
        '17,909,935',
        '23,394,115',
        '27,363,768',
        '29,160,292',
        '27,457,741',
        '27,510,530',
        '39,643,934',
        '45,866,539',
      ],
    },
    {
      isSubheading: false,
      title: 'Interest Expense',
      data: [
        '5,949,496',
        '5,773,255',
        '8,112,337',
        '11,498,408',
        '12,951,323',
        '13,615,391',
        '11,522,802',
        '8,846,608',
        '20,615,585',
        '21,379,499',
      ],
    },
    {
      isSubheading: false,
      title: 'Net Interest Income',
      data: [
        '7,737,574',
        '8,655,474',
        '9,797,599',
        '11,895,707',
        '14,412,445',
        '15,544,901',
        '15,934,939',
        '18,663,922',
        '19,028,349',
        '24,487,040',
      ],
    },
    {
      isSubheading: false,
      title: 'Other Operating Income',
      data: [
        '1,100,686',
        '1,217,737',
        '1,453,493',
        '1,652,087',
        '1,914,256',
        '2,062,567',
        '2,308,383',
        '2,648,946',
        '3,112,524',
        '3,363,556',
      ],
    },
    {
      isSubheading: false,
      title: 'Total Operating Income',
      data: [
        '8,838,260',
        '9,873,212',
        '11,251,092',
        '13,547,795',
        '16,326,701',
        '17,607,469',
        '18,243,322',
        '21,312,868',
        '22,140,873',
        '27,850,596',
      ],
    },
    {
      isSubheading: false,
      title: 'Impairment Charges',
      data: [
        '2,019,766',
        '411,793',
        '(40,064)',
        '670,623',
        '983,154',
        '1,831,057',
        '1,691,734',
        '1,025,981',
        '545,744',
        '373,236',
      ],
    },
    {
      isSubheading: false,
      title: 'Total Operating Expenses',
      data: [
        '3,171,408',
        '3,543,352',
        '4,389,212',
        '5,062,788',
        '5,587,279',
        '5,887,565',
        '5,575,890',
        '6,239,874',
        '7,178,002',
        '8,669,531',
      ],
    },
    {
      isSubheading: false,
      title: 'Tax on Financial Services',
      data: [
        '315,232',
        '593,452',
        '1,027,101',
        '1,336,693',
        '2,015,619',
        '2,278,560',
        '1,669,323',
        '2,136,551',
        '2,670,575',
        '3,627,622',
      ],
    },
    {
      isSubheading: false,
      title: 'Profit before Taxation',
      data: [
        '3,331,853',
        '5,324,615',
        '5,874,843',
        '6,477,691',
        '7,740,649',
        '7,610,287',
        '9,306,375',
        '11,910,462',
        '11,746,552',
        '15,180,207',
      ],
    },
    {
      isSubheading: false,
      title: 'Income Tax Expense',
      data: [
        '1,149,727',
        '1,606,822',
        '1,956,639',
        '2,226,969',
        '2,685,989',
        '2,423,234',
        '2,503,778',
        '3,248,604',
        '3,286,221',
        '5,616,569',
      ],
    },
    {
      isSubheading: false,
      title: 'Profit for the Year',
      data: [
        '2,182,126',
        '3,717,792',
        '3,918,204',
        '4,250,721',
        '5,054,660',
        '5,187,053',
        '6,802,597',
        '8,661,858',
        '8,460,331',
        '9,563,638',
      ],
    },
    {
      isSubheading: true,
      title: 'Statement of Financial Position',
      data: [],
    },
    {
      isSubheading: true,
      title: 'Assets',
      data: [],
    },
    {
      isSubheading: false,
      title: 'Cash and Cash Equivalents',
      data: [
        '6,067,670',
        '6,051,898',
        '2,895,085',
        '5,874,375',
        '4,040,586',
        '6,162,637',
        '6,187,300',
        '14,458,986',
        '4,524,032',
        '9,314,425',
      ],
    },
    {
      isSubheading: false,
      title: 'Financial Assets Measured at Fair Value',
      data: [
        '10,063',
        '10,645',
        '10,068',
        '9,683',
        '6,866',
        '4,648',
        '10,862',
        '13,208',
        '10,653',
        '14,674',
      ],
    },
    {
      isSubheading: false,
      title: 'Loans and Receivables',
      data: [
        '55,958,277',
        '71,554,005',
        '89,149,742',
        '102,345,084',
        '113,445,454',
        '118,865,924',
        '114,137,823',
        '134,395,603',
        '145,189,174',
        '161,291,486',
      ],
    },
    {
      isSubheading: false,
      title:
        'Financial Assets Measured at Fair Value Through Other Comprehensive Income',
      data: [
        '140,587',
        '138,411',
        '118,021',
        '121,624',
        '89,710',
        '59,141',
        '77,789',
        '86,102',
        '117,388',
        '118,587',
      ],
    },
    {
      isSubheading: false,
      title: 'Other Financial Assets',
      data: [
        '2,140,178',
        '4,142,716',
        '6,721,526',
        '6,772,554',
        '10,804,517',
        '9,119,681',
        '10,453,903',
        '5,598,624',
        '21,685,834',
        '20,374,770',
      ],
    },
    {
      isSubheading: false,
      title: 'Other Non Financial Assets',
      data: [
        '1,206,275',
        '538,898',
        '305,047',
        '815,808',
        '1,067,360',
        '967,469',
        '920,406',
        '454,711',
        '474,347',
        '430,651',
      ],
    },
    {
      title: 'Investment in Subsidiaries',
      data: [
        '-',
        '-',
        '-',
        '152,915',
        '318,999',
        '521,162',
        '521,162',
        '921,162',
        '921,998',
        '698,935',
      ],
      //missing: true,
    },
    {
      isSubheading: false,
      title: 'Property, Plant and Equipment',
      data: [
        '1,984,160',
        '2,045,295',
        '3,514,356',
        '4,680,619',
        '6,577,379',
        '8,221,248',
        '8,241,259',
        '8,421,741',
        '8,633,347',
        '8,984,363',
      ],
    },
    {
      isSubheading: false,
      title: 'Intangible Assets',
      data: [
        '35,305',
        '34,765',
        '49,189',
        '48,119',
        '39,847',
        '41,809',
        '26,021',
        '14,875',
        '22,628',
        '20,701',
      ],
    },
    {
      title: 'Deferred Tax Assets',
      data: ['-', '-', '-', '-', '-', '-', '-', '-', '767,186', '927,914'],
      //missing: true,
    },
    {
      isSubheading: false,
      title: 'Total Assets',
      data: [
        '67,542,519',
        '84,516,636',
        '102,763,035',
        '120,820,780',
        '136,390,718',
        '143,963,719',
        '140,576,525',
        '164,365,012',
        '182,346,587',
        '202,176,506',
      ],
    },
    {
      isSubheading: true,
      title: 'Liabilities',
      data: [],
    },
    {
      isSubheading: false,
      title: 'Due to Banks',
      data: [
        '7,703,265',
        '14,577,233',
        '23,778,147',
        '22,838,038',
        '24,633,508',
        '22,771,085',
        '16,467,179',
        '26,858,737',
        '19,369,784',
        '21,702,012',
      ],
    },
    {
      isSubheading: false,
      title: 'Financial Liabilities at Amortised Cost - Due to Depositors',
      data: [
        '45,430,551',
        '53,379,801',
        '60,401,955',
        '72,943,833',
        '83,214,949',
        '89,256,435',
        '85,860,070',
        '89,143,982',
        '114,011,699',
        '122,808,124',
      ],
    },
    {
      isSubheading: false,
      title: 'Other Borrowed Funds',
      data: [
        '3,529,575',
        '2,601,282',
        '2,044,216',
        '5,152,832',
        '3,107,783',
        '3,111,186',
        '3,113,916',
        '8,564,617',
        '3,882,024',
        '5,491,401',
      ],
    },
    {
      isSubheading: false,
      title: 'Other Financial Liabilities',
      data: [
        '1,776,066',
        '1,869,940',
        '2,007,402',
        '1,761,418',
        '1,974,490',
        '2,766,410',
        '3,043,526',
        '3,305,112',
        '3,255,862',
        '3,757,776',
      ],
    },
    {
      isSubheading: false,
      title: 'Other Non Financial Liabilities',
      data: [
        '516,719',
        '597,806',
        '673,436',
        '852,715',
        '2,070,632',
        '909,266',
        '1,028,054',
        '1,134,771',
        '1,090,091',
        '1,547,570',
      ],
    },
    {
      isSubheading: false,
      title: 'Current Tax Liabilities',
      data: [
        '534,744',
        '741,251',
        '691,091',
        '633,058',
        '1,395,971',
        '766,752',
        '1,872,154',
        '1,882,242',
        '2,255,830',
        '2,770,496',
      ],
    },
    {
      isSubheading: false,
      title: 'Deferred Tax Liabilities',
      data: [
        '11,930',
        '143,142',
        '503,488',
        '1,058,750',
        '1,309,722',
        '1,037,580',
        '637,073',
        '111,486',
        '-',
        '-',
      ],
    },
    {
      isSubheading: false,
      title: 'Employee Retirement Benefit Liability',
      data: [
        '112,574',
        '126,858',
        '153,621',
        '231,240',
        '256,512',
        '345,456',
        '365,265',
        '316,973',
        '365,557',
        '473,058',
      ],
    },
    {
      isSubheading: false,
      title: 'Total Liabilities',
      data: [
        '59,615,427',
        '74,037,317',
        '90,253,356',
        '105,471,884',
        '117,963,567',
        '120,964,170',
        '112,387,237',
        '131,317,920',
        '144,230,847',
        '158,550,437',
      ],
    },
    {
      isSubheading: true,
      title: 'Equity',
      data: [],
    },
    {
      isSubheading: false,
      title: 'Stated Capital',
      data: [
        '838,282',
        '838,282',
        '838,282',
        '838,282',
        '838,282',
        '838,282',
        '838,282',
        '838,282',
        '838,282',
        '838,282',
      ],
    },
    {
      isSubheading: false,
      title: 'Reserves',
      data: [
        '1,908,324',
        '2,670,537',
        '3,412,318',
        '4,270,522',
        '5,210,097',
        '6,216,939',
        '7,596,106',
        '8,038,658',
        '8,493,049',
        '8,972,430',
      ],
    },
    {
      isSubheading: false,
      title: 'Retained Earnings',
      data: [
        '5,180,485',
        '6,970,499',
        '8,259,079',
        '10,240,092',
        '12,378,772',
        '15,944,328',
        '19,754,900',
        '24,170,152',
        '28,784,409',
        '33,815,357',
      ],
    },
    {
      isSubheading: false,
      title: 'Total Equity',
      data: [
        '7,927,091',
        '10,479,319',
        '12,509,680',
        '15,348,896',
        '18,427,151',
        '22,999,549',
        '28,189,288',
        '33,047,092',
        '38,115,740',
        '43,626,069',
      ],
    },
    {
      isSubheading: false,
      title: 'Total Liabilities and Equity',
      data: [
        '67,542,519',
        '84,516,636',
        '102,763,035',
        '120,820,780',
        '136,390,718',
        '143,963,719',
        '140,576,525',
        '164,365,012',
        '182,346,587',
        '202,176,506',
      ],
    },
  ];
  return (
    <div className="bg-[#0A3D5F] text-white p-4 md:pl-0 md:pr-2 custom-scrollbar h-[650px] overflow-auto">
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white text-blue rounded-lg p-6">
          <h4 className="text-xl font-bold mb-6">DECADE AT A GLANCE</h4>
          <div className="overflow-x-auto">
            {/* <table className="w-full text-left text-sm border-collapse">
              
              <thead>
                <tr className="border-b-2 border-blue">
                  <th className="p-4">Key Indicators</th>
                  <th className="p-4">2014/15</th>
                  <th className="p-4">2015/16</th>
                  <th className="p-4">2016/17</th>
                  <th className="p-4">2017/18</th>
                  <th className="p-4">2018/19</th>
                  <th className="p-4">2019/20</th>
                  <th className="p-4">2020/21</th>
                  <th className="p-4">2021/22</th>
                  <th className="p-4">2022/23</th>
                  <th className="p-4">2023/24</th>
                </tr>
              </thead>
              
              <tbody>
                {keyIndicators.map((item, index) => (
                  <tr key={index} className="border-b border-[#1F4D67]">
                    {item.isSubheading ? (
                      <>
                        <td className="p-4 font-extrabold" colSpan={11}>
                          {item.title}
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="p-4">{item.title}</td>
                        {item.data.map((value, idx) => (
                          <td key={idx} className="p-4">
                            {value}
                          </td>
                        ))}
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table> */}
            <img
              src="/images/charts/supplementaryInformation/decadeGlance/glance.png"
              alt="income statement company"
              className="xl:w-full xl:max-w-full max-w-[800px]"
            />
          </div>
        </div>
        <div className="bg-white text-blue rounded-lg p-6">
          <h4 className="text-xl font-bold mb-6">
            Financial Statements - Company
          </h4>
          <div className="overflow-x-auto mt-6">
            {/* <table className="w-full text-left text-sm border-collapse">
              
              <thead>
                <tr className="border-b-2 border-blue">
                  <th className="p-4">Income Statement</th>
                  <th className="p-4">2014/15</th>
                  <th className="p-4">2015/16</th>
                  <th className="p-4">2016/17</th>
                  <th className="p-4">2017/18</th>
                  <th className="p-4">2018/19</th>
                  <th className="p-4">2019/20</th>
                  <th className="p-4">2020/21</th>
                  <th className="p-4">2021/22</th>
                  <th className="p-4">2022/23</th>
                  <th className="p-4">2023/24</th>
                </tr>
              </thead>
              
              <tbody>
                {financialStatements.map((item, index) => (
                  <tr key={index} className="border-b border-[#1F4D67]">
                    {item.isSubheading ? (
                      <>
                        <td className="p-4 font-extrabold" colSpan={11}>
                          {item.title}
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="p-4">{item.title}</td>
                        {item.data.map((value, idx) => (
                          <td key={idx} className="p-4">
                            {value}
                          </td>
                        ))}
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table> */}
            <img
              src="/images/charts/supplementaryInformation/decadeGlance/financialstatement.png"
              alt="income statement company"
              className="xl:w-full xl:max-w-full max-w-[800px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
