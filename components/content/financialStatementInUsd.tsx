type FinancialData = {
  category: string;
  companyCurrentYear: string;
  companyPreviousYear: string;
  companyChange: string;
  groupCurrentYear: string;
  groupPreviousYear: string;
  groupChange: string;
};

type ComprehensiveIncomeData = {
  category: string;
  companyCurrentYear: string;
  companyPreviousYear: string;
  companyChange: string;
  groupCurrentYear: string;
  groupPreviousYear: string;
  groupChange: string;
};
type FinancialPositionData = {
  category: string;
  companyCurrentYear: string;
  companyPreviousYear: string;
  companyChange: string;
  groupCurrentYear: string;
  groupPreviousYear: string;
  groupChange: string;
};

const comprehensiveIncomeData: ComprehensiveIncomeData[] = [
  {
    category: 'Profit for the Year',
    companyCurrentYear: '31,879',
    companyPreviousYear: '28,201',
    companyChange: '13',
    groupCurrentYear: '32,357',
    groupPreviousYear: '28,510',
    groupChange: '13',
  },
  {
    category:
      'Other Comprehensive Income that will be Reclassified to Income Statement',
    companyCurrentYear: '',
    companyPreviousYear: '',
    companyChange: '',
    groupCurrentYear: '',
    groupPreviousYear: '',
    groupChange: '',
  },
  {
    category:
      'Net Gains/(Losses) from Translating the Financial Statements of the Foreign Operations',
    companyCurrentYear: '',
    companyPreviousYear: '',
    companyChange: '',
    groupCurrentYear: '(243)',
    groupPreviousYear: '(235)',
    groupChange: '3',
  },
  {
    category: 'Less: Deferred Tax Charge/(Reversal) on above items',
    companyCurrentYear: '',
    companyPreviousYear: '',
    companyChange: '',
    groupCurrentYear: '-',
    groupPreviousYear: '-',
    groupChange: '',
  },
  {
    category:
      'Net Other Comprehensive Income that will be Reclassified to Income Statement',
    companyCurrentYear: '',
    companyPreviousYear: '',
    companyChange: '',
    groupCurrentYear: '(243)',
    groupPreviousYear: '(235)',
    groupChange: '3',
  },
  {
    category:
      'Other Comprehensive Income that will never be Reclassified to Income Statement',
    companyCurrentYear: '',
    companyPreviousYear: '',
    companyChange: '',
    groupCurrentYear: '',
    groupPreviousYear: '',
    groupChange: '',
  },
  {
    category:
      'Net Gains/(Losses) on Investment in Equity Instruments - Fair Value Through Other Comprehensive Income',
    companyCurrentYear: '4',
    companyPreviousYear: '105',
    companyChange: '(96)',
    groupCurrentYear: '4',
    groupPreviousYear: '105',
    groupChange: '(96)',
  },
  {
    category: 'Actuarial Gains/(Losses) on Defined Benefit Plans',
    companyCurrentYear: '(179)',
    companyPreviousYear: '25',
    companyChange: '(>100)',
    groupCurrentYear: '(181)',
    groupPreviousYear: '27',
    groupChange: '(>100)',
  },
  {
    category:
      'Less: Deferred Tax Charge/(Reversal) on Actuarial Gains and Losses',
    companyCurrentYear: '(54)',
    companyPreviousYear: '8',
    companyChange: '(>100)',
    groupCurrentYear: '(54)',
    groupPreviousYear: '8',
    groupChange: '(>100)',
  },
  {
    category: 'Net Actuarial Gains/(Losses) on Defined Benefit Plans',
    companyCurrentYear: '(125)',
    companyPreviousYear: '17',
    companyChange: '(>100)',
    groupCurrentYear: '(127)',
    groupPreviousYear: '19',
    groupChange: '(>100)',
  },
  {
    category:
      'Net Other Comprehensive Income that will never be Reclassified to Income Statement',
    companyCurrentYear: '(121)',
    companyPreviousYear: '122',
    companyChange: '(>100)',
    groupCurrentYear: '(123)',
    groupPreviousYear: '124',
    groupChange: '(>100)',
  },
  {
    category: 'Other Comprehensive Income for the Year, Net of Tax',
    companyCurrentYear: '(121)',
    companyPreviousYear: '122',
    companyChange: '(>100)',
    groupCurrentYear: '(367)',
    groupPreviousYear: '(111)',
    groupChange: '(>100)',
  },
  {
    category: 'Total Comprehensive Income for the Year, Net of Tax',
    companyCurrentYear: '31,758',
    companyPreviousYear: '28,323',
    companyChange: '12',
    groupCurrentYear: '31,990',
    groupPreviousYear: '28,398',
    groupChange: '13',
  },
  {
    category: 'Attributable to:',
    companyCurrentYear: '',
    companyPreviousYear: '',
    companyChange: '',
    groupCurrentYear: '',
    groupPreviousYear: '',
    groupChange: '',
  },
  {
    category: 'Equity Holders of the Company',
    companyCurrentYear: '31,758',
    companyPreviousYear: '28,323',
    companyChange: '12',
    groupCurrentYear: '32,014',
    groupPreviousYear: '28,403',
    groupChange: '13',
  },
  {
    category: 'Non-Controlling Interest',
    companyCurrentYear: '',
    companyPreviousYear: '',
    companyChange: '',
    groupCurrentYear: '(24)',
    groupPreviousYear: '(5)',
    groupChange: '(>100)',
  },
  {
    category: 'Total Comprehensive Income for the Year, Net of Tax',
    companyCurrentYear: '31,758',
    companyPreviousYear: '28,323',
    companyChange: '12',
    groupCurrentYear: '31,990',
    groupPreviousYear: '28,398',
    groupChange: '13',
  },
];

const financialData: FinancialData[] = [
  {
    category: 'Income',
    companyCurrentYear: '164,101',
    companyPreviousYear: '142,522',
    companyChange: '15',
    groupCurrentYear: '165,453',
    groupPreviousYear: '143,779',
    groupChange: '15',
  },
  {
    category: 'Interest Income',
    companyCurrentYear: '152,889',
    companyPreviousYear: '132,146',
    companyChange: '16',
    groupCurrentYear: '154,131',
    groupPreviousYear: '133,245',
    groupChange: '16',
  },
  {
    category: 'Less: Interest Expenses',
    companyCurrentYear: '71,265',
    companyPreviousYear: '68,719',
    companyChange: '4',
    groupCurrentYear: '71,535',
    groupPreviousYear: '68,880',
    groupChange: '4',
  },
  {
    category: 'Net Interest Income',
    companyCurrentYear: '81,624',
    companyPreviousYear: '63,427',
    companyChange: '29',
    groupCurrentYear: '82,596',
    groupPreviousYear: '64,365',
    groupChange: '28',
  },
  {
    category: 'Fee and Commission Income',
    companyCurrentYear: '10,621',
    companyPreviousYear: '9,837',
    companyChange: '8',
    groupCurrentYear: '10,725',
    groupPreviousYear: '9,955',
    groupChange: '8',
  },
  {
    category: 'Net Trading Income',
    companyCurrentYear: '16',
    companyPreviousYear: '(7)',
    companyChange: '>100',
    groupCurrentYear: '16',
    groupPreviousYear: '(7)',
    groupChange: '>100',
  },
  {
    category: 'Other Operating Income',
    companyCurrentYear: '574',
    companyPreviousYear: '545',
    companyChange: '5',
    groupCurrentYear: '581',
    groupPreviousYear: '585',
    groupChange: '(1)',
  },
  {
    category: 'Total Operating Income',
    companyCurrentYear: '92,835',
    companyPreviousYear: '73,802',
    companyChange: '26',
    groupCurrentYear: '93,918',
    groupPreviousYear: '74,898',
    groupChange: '25',
  },
  {
    category: 'Less: Impairment Charges',
    companyCurrentYear: '1,244',
    companyPreviousYear: '1,819',
    companyChange: '(32)',
    groupCurrentYear: '900',
    groupPreviousYear: '1,730',
    groupChange: '(48)',
  },
  {
    category: 'Net Operating Income',
    companyCurrentYear: '91,591',
    companyPreviousYear: '71,983',
    companyChange: '27',
    groupCurrentYear: '93,018',
    groupPreviousYear: '73,168',
    groupChange: '27',
  },
  {
    category: 'Less: Operating Expenses',
    companyCurrentYear: '',
    companyPreviousYear: '',
    companyChange: '',
    groupCurrentYear: '',
    groupPreviousYear: '',
    groupChange: '',
  },
  {
    category: 'Personnel Expenses',
    companyCurrentYear: '14,588',
    companyPreviousYear: '11,817',
    companyChange: '23',
    groupCurrentYear: '15,012',
    groupPreviousYear: '12,232',
    groupChange: '23',
  },
  {
    category: 'Depreciation of Property, Plant and Equipment',
    companyCurrentYear: '2,888',
    companyPreviousYear: '2,722',
    companyChange: '6',
    groupCurrentYear: '2,942',
    groupPreviousYear: '2,781',
    groupChange: '6',
  },
  {
    category: 'Amortisation of Intangible Assets',
    companyCurrentYear: '28',
    companyPreviousYear: '27',
    companyChange: '3',
    groupCurrentYear: '37',
    groupPreviousYear: '44',
    groupChange: '(16)',
  },
  {
    category: 'Other Operating Expenses',
    companyCurrentYear: '11,394',
    companyPreviousYear: '9,360',
    companyChange: '22',
    groupCurrentYear: '11,811',
    groupPreviousYear: '9,709',
    groupChange: '22',
  },
  {
    category: 'Total Operating Expenses',
    companyCurrentYear: '28,898',
    companyPreviousYear: '23,926',
    companyChange: '21',
    groupCurrentYear: '29,802',
    groupPreviousYear: '24,766',
    groupChange: '20',
  },
  {
    category: 'Operating Profit before Tax on Financial Services',
    companyCurrentYear: '62,693',
    companyPreviousYear: '48,057',
    companyChange: '30',
    groupCurrentYear: '63,217',
    groupPreviousYear: '48,402',
    groupChange: '31',
  },
  {
    category: 'Less: Tax on Financial Services',
    companyCurrentYear: '12,092',
    companyPreviousYear: '8,902',
    companyChange: '36',
    groupCurrentYear: '12,101',
    groupPreviousYear: '8,925',
    groupChange: '36',
  },
  {
    category: 'Profit before Taxation',
    companyCurrentYear: '50,601',
    companyPreviousYear: '39,155',
    companyChange: '29',
    groupCurrentYear: '51,116',
    groupPreviousYear: '39,477',
    groupChange: '29',
  },
  {
    category: 'Less: Income Tax Expense',
    companyCurrentYear: '18,722',
    companyPreviousYear: '10,954',
    companyChange: '71',
    groupCurrentYear: '18,758',
    groupPreviousYear: '10,967',
    groupChange: '71',
  },
  {
    category: 'Profit for the Year',
    companyCurrentYear: '31,879',
    companyPreviousYear: '28,201',
    companyChange: '13',
    groupCurrentYear: '32,358',
    groupPreviousYear: '28,510',
    groupChange: '13',
  },
  {
    category: 'Profit Attributable to:',
    companyCurrentYear: '',
    companyPreviousYear: '',
    companyChange: '',
    groupCurrentYear: '',
    groupPreviousYear: '',
    groupChange: '',
  },
  {
    category: 'Equity Holders of the Company',
    companyCurrentYear: '31,879',
    companyPreviousYear: '28,201',
    companyChange: '13',
    groupCurrentYear: '32,380',
    groupPreviousYear: '28,516',
    groupChange: '14',
  },
  {
    category: 'Non-Controlling Interest',
    companyCurrentYear: '',
    companyPreviousYear: '',
    companyChange: '',
    groupCurrentYear: '(22)',
    groupPreviousYear: '(6)',
    groupChange: '(>100)',
  },
  {
    category: 'Profit for the Year',
    companyCurrentYear: '31,879',
    companyPreviousYear: '28,201',
    companyChange: '13',
    groupCurrentYear: '32,357',
    groupPreviousYear: '28,510',
    groupChange: '13',
  },
  {
    category: 'Earnings per Share: Basic/Diluted (USD)',
    companyCurrentYear: '0.06',
    companyPreviousYear: '0.05',
    companyChange: '13',
    groupCurrentYear: '0.06',
    groupPreviousYear: '0.05',
    groupChange: '14',
  },
  {
    category: 'Dividend per Share (USD)',
    companyCurrentYear: '',
    companyPreviousYear: '',
    companyChange: '',
    groupCurrentYear: '',
    groupPreviousYear: '',
    groupChange: '',
  },
  {
    category: 'Dividend per Share - Gross (USD)',
    companyCurrentYear: '0.02*',
    companyPreviousYear: '0.02',
    companyChange: '15',
    groupCurrentYear: '',
    groupPreviousYear: '',
    groupChange: '',
  },
  {
    category: 'Dividend per Share - Net (USD)',
    companyCurrentYear: '0.02*',
    companyPreviousYear: '0.01',
    companyChange: '15',
    groupCurrentYear: '',
    groupPreviousYear: '',
    groupChange: '',
  },
];

const financialPositionData: FinancialPositionData[] = [
  {
    category: 'Assets',
    companyCurrentYear: '',
    companyPreviousYear: '',
    companyChange: '',
    groupCurrentYear: '',
    groupPreviousYear: '',
    groupChange: '',
  },
  {
    category: 'Cash and Cash Equivalents',
    companyCurrentYear: '31,048',
    companyPreviousYear: '15,080',
    companyChange: '>100',
    groupCurrentYear: '31,865',
    groupPreviousYear: '15,604',
    groupChange: '>100',
  },
  {
    category:
      'Financial Assets Recognised Through Profit or Loss - Measured at Fair Value',
    companyCurrentYear: '49',
    companyPreviousYear: '36',
    companyChange: '38',
    groupCurrentYear: '49',
    groupPreviousYear: '36',
    groupChange: '38',
  },
  {
    category: 'Financial Assets at Amortised Cost - Loans and Receivables',
    companyCurrentYear: '537,638',
    companyPreviousYear: '483,964',
    companyChange: '11',
    groupCurrentYear: '541,739',
    groupPreviousYear: '487,905',
    groupChange: '11',
  },
  {
    category:
      'Financial Assets Measured at Fair Value Through Other Comprehensive Income',
    companyCurrentYear: '395',
    companyPreviousYear: '391',
    companyChange: '1',
    groupCurrentYear: '395',
    groupPreviousYear: '391',
    groupChange: '1',
  },
  {
    category: 'Other Financial Assets',
    companyCurrentYear: '67,916',
    companyPreviousYear: '72,286',
    companyChange: '(6)',
    groupCurrentYear: '68,145',
    groupPreviousYear: '72,369',
    groupChange: '(6)',
  },
  {
    category: 'Other Non Financial Assets',
    companyCurrentYear: '1,436',
    companyPreviousYear: '1,582',
    companyChange: '(9)',
    groupCurrentYear: '1,653',
    groupPreviousYear: '1,841',
    groupChange: '(10)',
  },
  {
    category: 'Investment in Subsidiaries',
    companyCurrentYear: '2,330',
    companyPreviousYear: '3,073',
    companyChange: '(24)',
    groupCurrentYear: '-',
    groupPreviousYear: '-',
    groupChange: '-',
  },
  {
    category: 'Property, Plant and Equipment and Right-of-Use Assets',
    companyCurrentYear: '29,948',
    companyPreviousYear: '28,778',
    companyChange: '4',
    groupCurrentYear: '30,114',
    groupPreviousYear: '28,891',
    groupChange: '4',
  },
  {
    category: 'Investment Properties',
    companyCurrentYear: '-',
    companyPreviousYear: '-',
    companyChange: '-',
    groupCurrentYear: '17',
    groupPreviousYear: '15',
    groupChange: '11',
  },
  {
    category: 'Intangible Assets',
    companyCurrentYear: '69',
    companyPreviousYear: '75',
    companyChange: '(9)',
    groupCurrentYear: '75',
    groupPreviousYear: '451',
    groupChange: '(83)',
  },
  {
    category: 'Deferred Tax Assets',
    companyCurrentYear: '3,093',
    companyPreviousYear: '2,557',
    companyChange: '21',
    groupCurrentYear: '3,108',
    groupPreviousYear: '2,557',
    groupChange: '22',
  },
  {
    category: 'Total Assets',
    companyCurrentYear: '673,922',
    companyPreviousYear: '607,822',
    companyChange: '11',
    groupCurrentYear: '677,160',
    groupPreviousYear: '610,060',
    groupChange: '11',
  },
  {
    category: 'Liabilities',
    companyCurrentYear: '',
    companyPreviousYear: '',
    companyChange: '',
    groupCurrentYear: '',
    groupPreviousYear: '',
    groupChange: '',
  },
  {
    category: 'Due to Banks',
    companyCurrentYear: '72,340',
    companyPreviousYear: '64,566',
    companyChange: '12',
    groupCurrentYear: '73,186',
    groupPreviousYear: '64,642',
    groupChange: '13',
  },
  {
    category: 'Financial Liabilities at Amortised Cost - Due to Depositors',
    companyCurrentYear: '409,360',
    companyPreviousYear: '380,039',
    companyChange: '8',
    groupCurrentYear: '410,115',
    groupPreviousYear: '380,828',
    groupChange: '8',
  },
  {
    category: 'Debt Instruments Issued and Other Borrowed Funds',
    companyCurrentYear: '18,305',
    companyPreviousYear: '12,940',
    companyChange: '41',
    groupCurrentYear: '18,305',
    groupPreviousYear: '12,940',
    groupChange: '41',
  },
  {
    category: 'Other Financial Liabilities',
    companyCurrentYear: '12,526',
    companyPreviousYear: '10,853',
    companyChange: '15',
    groupCurrentYear: '12,720',
    groupPreviousYear: '10,944',
    groupChange: '16',
  },
  {
    category: 'Other Non Financial Liabilities',
    companyCurrentYear: '5,159',
    companyPreviousYear: '3,634',
    companyChange: '42',
    groupCurrentYear: '5,305',
    groupPreviousYear: '3,849',
    groupChange: '38',
  },
  {
    category: 'Current Tax Liabilities',
    companyCurrentYear: '9,235',
    companyPreviousYear: '7,519',
    companyChange: '23',
    groupCurrentYear: '9,252',
    groupPreviousYear: '7,540',
    groupChange: '23',
  },
  {
    category: 'Post Employment Benefit Liability',
    companyCurrentYear: '1,577',
    companyPreviousYear: '1,219',
    companyChange: '29',
    groupCurrentYear: '1,584',
    groupPreviousYear: '1,225',
    groupChange: '29',
  },
  {
    category: 'Total Liabilities',
    companyCurrentYear: '528,502',
    companyPreviousYear: '480,770',
    companyChange: '10',
    groupCurrentYear: '530,467',
    groupPreviousYear: '481,968',
    groupChange: '10',
  },
  {
    category: 'Equity',
    companyCurrentYear: '',
    companyPreviousYear: '',
    companyChange: '',
    groupCurrentYear: '',
    groupPreviousYear: '',
    groupChange: '',
  },
  {
    category: 'Stated Capital',
    companyCurrentYear: '2,794',
    companyPreviousYear: '2,794',
    companyChange: '-',
    groupCurrentYear: '2,794',
    groupPreviousYear: '2,794',
    groupChange: '-',
  },
  {
    category: 'Reserves',
    companyCurrentYear: '29,908',
    companyPreviousYear: '28,310',
    companyChange: '6',
    groupCurrentYear: '30,325',
    groupPreviousYear: '28,970',
    groupChange: '5',
  },
  {
    category: 'Retained Earnings',
    companyCurrentYear: '112,718',
    companyPreviousYear: '95,948',
    companyChange: '17',
    groupCurrentYear: '113,252',
    groupPreviousYear: '95,982',
    groupChange: '18',
  },
  {
    category: 'Total Equity Attributable to Equity Holders of the Company',
    companyCurrentYear: '145,420',
    companyPreviousYear: '127,052',
    companyChange: '14',
    groupCurrentYear: '146,371',
    groupPreviousYear: '127,746',
    groupChange: '15',
  },
  {
    category: 'Non-Controlling Interest',
    companyCurrentYear: '-',
    companyPreviousYear: '-',
    companyChange: '-',
    groupCurrentYear: '322',
    groupPreviousYear: '346',
    groupChange: '(7)',
  },
  {
    category: 'Total Equity',
    companyCurrentYear: '145,420',
    companyPreviousYear: '127,052',
    companyChange: '14',
    groupCurrentYear: '146,693',
    groupPreviousYear: '128,092',
    groupChange: '15',
  },
  {
    category: 'Total Liabilities and Equity',
    companyCurrentYear: '673,922',
    companyPreviousYear: '607,822',
    companyChange: '11',
    groupCurrentYear: '677,160',
    groupPreviousYear: '610,060',
    groupChange: '11',
  },
  {
    category: 'Commitments and Contingencies',
    companyCurrentYear: '7,606',
    companyPreviousYear: '8,013',
    companyChange: '(5)',
    groupCurrentYear: '6,770',
    groupPreviousYear: '8,013',
    groupChange: '(16)',
  },
  {
    category: 'Net Asset Value per Share (USD)',
    companyCurrentYear: '0.26',
    companyPreviousYear: '0.23',
    companyChange: '14',
    groupCurrentYear: '0.26',
    groupPreviousYear: '0.23',
    groupChange: '15',
  },
];
export default function FinancialStatementInUsd() {
  return (
    <div className="bg-[#0A3D5F] text-white p-4 md:pl-0 md:pr-2 custom-scrollbar h-[650px] overflow-auto">
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white text-blue rounded-lg p-6">
          <p className="p-4">
            Following Income Statement, Statement of Comprehensive Income and
            Statement of Financial Position have been presented in USD purely
            for the information purpose of stakeholders.
          </p>
        </div>
        <div className="bg-white text-blue rounded-lg p-6">
          {/* <h2 className="text-xl font-semibold p-4">Income Statement (USD)</h2> */}
          <div className="overflow-x-auto">
            <img
              src="/images/charts/supplementaryInformation/financialStatementUSD/incomestatement.png"
              alt="income statement company"
              className="xl:w-full xl:max-w-full max-w-[800px]"
            />
            {/* <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-100">
                  <th className="p-2 border"></th>
                  <th className="p-2 border text-center" colSpan={3}>
                    Company
                  </th>
                  <th className="p-2 border text-center" colSpan={3}>
                    Group
                  </th>
                </tr>
                <tr className="bg-blue-50">
                  <th className="p-2 border">Year ended 31 March</th>
                  <th className="p-2 border">
                    2024
                    <br />
                    USD &#39;000
                  </th>
                  <th className="p-2 border">
                    2023
                    <br />
                    USD &#39;000
                  </th>
                  <th className="p-2 border">
                    Change
                    <br />%
                  </th>
                  <th className="p-2 border">
                    2024
                    <br />
                    USD &#39;000
                  </th>
                  <th className="p-2 border">
                    2023
                    <br />
                    USD &#39;000
                  </th>
                  <th className="p-2 border">
                    Change
                    <br />%
                  </th>
                </tr>
              </thead>
              <tbody>
                {financialData.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="p-2 border font-medium">{row.category}</td>
                    <td className="p-2 border text-right">
                      {row.companyCurrentYear}
                    </td>
                    <td className="p-2 border text-right">
                      {row.companyPreviousYear}
                    </td>
                    <td className="p-2 border text-right">
                      {row.companyChange}
                    </td>
                    <td className="p-2 border text-right">
                      {row.groupCurrentYear}
                    </td>
                    <td className="p-2 border text-right">
                      {row.groupPreviousYear}
                    </td>
                    <td className="p-2 border text-right">{row.groupChange}</td>
                  </tr>
                ))}
              </tbody>
            </table> */}
          </div>
          <p className="p-4 text-sm">
            *Dividend per share is calculated based on the interim dividend paid
            / payable and the proposed final dividend which is to be approved at
            the Annual General Meeting.
          </p>
          <p className="p-4 text-sm">
            A common exchange rate LKR 300 to 1 USD has been used on both
            current financial year and the previous financial year for the ease
            of comparison.
          </p>
        </div>
        <div className="bg-white text-blue rounded-lg p-6">
          {/* <h2 className="text-xl font-semibold p-4">
            Statement of Comprehensive Income (USD)
          </h2> */}
          <div className="overflow-x-auto">
            <img
              src="/images/charts/supplementaryInformation/financialStatementUSD/comprehensiveincome.png"
              alt="income statement company"
              className="xl:w-full xl:max-w-full max-w-[800px]"
            />
            {/* <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-100">
                  <th className="p-2 border"></th>
                  <th className="p-2 border text-center" colSpan={3}>
                    Company
                  </th>
                  <th className="p-2 border text-center" colSpan={3}>
                    Group
                  </th>
                </tr>
                <tr className="bg-blue-50">
                  <th className="p-2 border">Year ended 31 March</th>
                  <th className="p-2 border">
                    2024
                    <br />
                    Rs. &#39;000
                  </th>
                  <th className="p-2 border">
                    2023
                    <br />
                    Rs. &#39;000
                  </th>
                  <th className="p-2 border">
                    Change
                    <br />%
                  </th>
                  <th className="p-2 border">
                    2024
                    <br />
                    Rs. &#39;000
                  </th>
                  <th className="p-2 border">
                    2023
                    <br />
                    Rs. &#39;000
                  </th>
                  <th className="p-2 border">
                    Change
                    <br />%
                  </th>
                </tr>
              </thead>
              <tbody>
                {comprehensiveIncomeData.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="p-2 border font-medium">{row.category}</td>
                    <td className="p-2 border text-right">
                      {row.companyCurrentYear}
                    </td>
                    <td className="p-2 border text-right">
                      {row.companyPreviousYear}
                    </td>
                    <td className="p-2 border text-right">
                      {row.companyChange}
                    </td>
                    <td className="p-2 border text-right">
                      {row.groupCurrentYear}
                    </td>
                    <td className="p-2 border text-right">
                      {row.groupPreviousYear}
                    </td>
                    <td className="p-2 border text-right">{row.groupChange}</td>
                  </tr>
                ))}
              </tbody>
            </table> */}
          </div>
          <p className="p-4 text-sm">
            A common exchange rate LKR 300 to 1 USD has been used on both
            current financial year and the previous financial year for the ease
            of comparison.
          </p>
        </div>
        <div className="bg-white text-blue rounded-lg p-6">
          {/* <h2 className="text-xl font-semibold p-4">
            Statement of Comprehensive Income (USD)
          </h2> */}
          <div className="overflow-x-auto">
            {/* <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-100">
                  <th className="p-2 border"></th>
                  <th className="p-2 border text-center" colSpan={3}>
                    Company
                  </th>
                  <th className="p-2 border text-center" colSpan={3}>
                    Group
                  </th>
                </tr>
                <tr className="bg-blue-50">
                  <th className="p-2 border">As at 31 March</th>
                  <th className="p-2 border">
                    2024
                    <br />
                    USD &#39;000
                  </th>
                  <th className="p-2 border">
                    2023
                    <br />
                    USD &#39;000
                  </th>
                  <th className="p-2 border">
                    Change
                    <br />%
                  </th>
                  <th className="p-2 border">
                    2024
                    <br />
                    USD &#39;000
                  </th>
                  <th className="p-2 border">
                    2023
                    <br />
                    USD &#39;000
                  </th>
                  <th className="p-2 border">
                    Change
                    <br />%
                  </th>
                </tr>
              </thead>
              <tbody>
                {financialPositionData.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td
                      className={`p-2 border font-medium ${
                        ['Assets', 'Liabilities', 'Equity'].includes(
                          row.category,
                        )
                          ? 'font-bold'
                          : ''
                      }`}
                    >
                      {row.category}
                    </td>
                    <td className="p-2 border text-right">
                      {row.companyCurrentYear}
                    </td>
                    <td className="p-2 border text-right">
                      {row.companyPreviousYear}
                    </td>
                    <td className="p-2 border text-right">
                      {row.companyChange}
                    </td>
                    <td className="p-2 border text-right">
                      {row.groupCurrentYear}
                    </td>
                    <td className="p-2 border text-right">
                      {row.groupPreviousYear}
                    </td>
                    <td className="p-2 border text-right">{row.groupChange}</td>
                  </tr>
                ))}
              </tbody>
            </table> */}
            <img
              src="/images/charts/supplementaryInformation/financialStatementUSD/financialposition.png"
              alt="income statement company"
              className="xl:w-full xl:max-w-full max-w-[800px]"
            />
          </div>
          <p className="p-4 text-sm">
            A common exchange rate LKR 300 to 1 USD has been used on both
            current financial year and the previous financial year for the ease
            of comparison.
          </p>
        </div>
      </div>
    </div>
  );
}
