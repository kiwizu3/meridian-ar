type FinancialData = {
  category: string;
  q1Current: string;
  q1Previous: string;
  q2Current: string;
  q2Previous: string;
  q3Current: string;
  q3Previous: string;
  q4Current: string;
  q4Previous: string;
};

type FinancialPositionData = {
  category: string;
  q1Current: string;
  q1Previous: string;
  q2Current: string;
  q2Previous: string;
  q3Current: string;
  q3Previous: string;
  q4Current: string;
  q4Previous: string;
};

const financialPositionData: FinancialPositionData[] = [
  {
    category: 'Assets',
    q1Current: '',
    q1Previous: '',
    q2Current: '',
    q2Previous: '',
    q3Current: '',
    q3Previous: '',
    q4Current: '',
    q4Previous: '',
  },
  {
    category: 'Cash and Cash Equivalents',
    q1Current: '7,817,028',
    q1Previous: '9,366,958',
    q2Current: '5,124,972',
    q2Previous: '6,313,830',
    q3Current: '9,019,358',
    q3Previous: '5,843,040',
    q4Current: '9,314,425',
    q4Previous: '4,524,032',
  },
  {
    category:
      'Financial Assets Recognised Through Profit or Loss - Measured at Fair Value',
    q1Current: '11,385',
    q1Previous: '9,448',
    q2Current: '15,366',
    q2Previous: '15,752',
    q3Current: '13,555',
    q3Previous: '10,467',
    q4Current: '14,674',
    q4Previous: '10,653',
  },
  {
    category: 'Financial Assets at Amortised Cost - Loans and Receivables',
    q1Current: '143,481,784',
    q1Previous: '138,633,126',
    q2Current: '146,654,223',
    q2Previous: '144,576,412',
    q3Current: '152,284,625',
    q3Previous: '147,581,821',
    q4Current: '161,291,486',
    q4Previous: '145,189,174',
  },
  {
    category:
      'Financial Assets Measured at Fair Value Through Other Comprehensive Income',
    q1Current: '112,496',
    q1Previous: '71,368',
    q2Current: '109,282',
    q2Previous: '109,940',
    q3Current: '98,767',
    q3Previous: '99,968',
    q4Current: '118,587',
    q4Previous: '117,388',
  },
  {
    category: 'Other Financial Assets',
    q1Current: '15,653,272',
    q1Previous: '8,231,082',
    q2Current: '16,468,650',
    q2Previous: '13,999,273',
    q3Current: '12,700,562',
    q3Previous: '13,057,631',
    q4Current: '20,374,770',
    q4Previous: '21,685,834',
  },
  {
    category: 'Other Non Financial Assets',
    q1Current: '574,524',
    q1Previous: '512,327',
    q2Current: '653,132',
    q2Previous: '603,070',
    q3Current: '582,118',
    q3Previous: '587,502',
    q4Current: '430,651',
    q4Previous: '474,347',
  },
  {
    category: 'Investment in Subsidiaries',
    q1Current: '921,998',
    q1Previous: '921,997',
    q2Current: '921,998',
    q2Previous: '921,998',
    q3Current: '921,998',
    q3Previous: '921,998',
    q4Current: '698,935',
    q4Previous: '921,998',
  },
  {
    category: 'Property, Plant and Equipment and Right-of-Use Assets',
    q1Current: '8,613,839',
    q1Previous: '8,488,014',
    q2Current: '8,714,842',
    q2Previous: '8,499,623',
    q3Current: '8,833,190',
    q3Previous: '8,590,201',
    q4Current: '8,984,363',
    q4Previous: '8,633,347',
  },
  {
    category: 'Intangible Assets',
    q1Current: '20,472',
    q1Previous: '12,618',
    q2Current: '18,424',
    q2Previous: '10,583',
    q3Current: '22,859',
    q3Previous: '17,581',
    q4Current: '20,701',
    q4Previous: '22,628',
  },
  {
    category: 'Deferred Tax Assets',
    q1Current: '767,186',
    q1Previous: '-',
    q2Current: '767,186',
    q2Previous: '-',
    q3Current: '767,186',
    q3Previous: '-',
    q4Current: '927,914',
    q4Previous: '767,186',
  },
  {
    category: 'Total Assets',
    q1Current: '177,973,984',
    q1Previous: '166,246,938',
    q2Current: '179,448,075',
    q2Previous: '175,050,481',
    q3Current: '185,244,218',
    q3Previous: '176,710,209',
    q4Current: '202,176,506',
    q4Previous: '182,346,587',
  },
  {
    category: 'Liabilities',
    q1Current: '',
    q1Previous: '',
    q2Current: '',
    q2Previous: '',
    q3Current: '',
    q3Previous: '',
    q4Current: '',
    q4Previous: '',
  },
  {
    category: 'Due to Banks',
    q1Current: '17,015,091',
    q1Previous: '23,442,194',
    q2Current: '14,864,031',
    q2Previous: '26,527,662',
    q3Current: '18,280,111',
    q3Previous: '23,700,712',
    q4Current: '21,702,012',
    q4Previous: '19,369,784',
  },
  {
    category: 'Financial Liabilities at Amortised Cost - Due to Depositors',
    q1Current: '111,999,687',
    q1Previous: '94,049,620',
    q2Current: '114,836,202',
    q2Previous: '100,541,867',
    q3Current: '115,404,940',
    q3Previous: '107,635,568',
    q4Current: '122,808,124',
    q4Previous: '114,011,699',
  },
  {
    category: 'Debt Instruments Issued and Other Borrowed Funds',
    q1Current: '2,616,962',
    q1Previous: '8,201,488',
    q2Current: '2,704,739',
    q2Previous: '8,402,045',
    q3Current: '1,509,076',
    q3Previous: '3,968,260',
    q4Current: '5,491,401',
    q4Previous: '3,882,024',
  },
  {
    category: 'Other Financial Liabilities',
    q1Current: '3,047,509',
    q1Previous: '3,042,460',
    q2Current: '3,753,231',
    q2Previous: '3,220,951',
    q3Current: '4,003,826',
    q3Previous: '3,224,748',
    q4Current: '3,757,776',
    q4Previous: '3,255,862',
  },
  {
    category: 'Other Non Financial Liabilities',
    q1Current: '3,255,709',
    q1Previous: '3,638,864',
    q2Current: '1,554,352',
    q2Previous: '1,270,104',
    q3Current: '1,546,557',
    q3Previous: '1,022,903',
    q4Current: '1,547,570',
    q4Previous: '1,090,091',
  },
  {
    category: 'Current Tax Liabilities',
    q1Current: '2,229,929',
    q1Previous: '1,757,335',
    q2Current: '1,615,755',
    q2Previous: '962,460',
    q3Current: '1,931,773',
    q3Previous: '1,289,975',
    q4Current: '2,770,496',
    q4Previous: '2,255,830',
  },
  {
    category: 'Deferred Tax Liabilities',
    q1Current: '-',
    q1Previous: '111,486',
    q2Current: '-',
    q2Previous: '111,486',
    q3Current: '-',
    q3Previous: '111,486',
    q4Current: '-',
    q4Previous: '-',
  },
  {
    category: 'Post Employment Benefit Liability',
    q1Current: '368,852',
    q1Previous: '327,698',
    q2Current: '381,113',
    q2Previous: '333,986',
    q3Current: '377,910',
    q3Previous: '341,292',
    q4Current: '473,058',
    q4Previous: '365,557',
  },
  {
    category: 'Total Liabilities',
    q1Current: '140,533,739',
    q1Previous: '134,571,145',
    q2Current: '139,709,423',
    q2Previous: '141,370,561',
    q3Current: '143,054,193',
    q3Previous: '141,294,944',
    q4Current: '158,550,437',
    q4Previous: '144,230,847',
  },
  {
    category: 'Equity',
    q1Current: '',
    q1Previous: '',
    q2Current: '',
    q2Previous: '',
    q3Current: '',
    q3Previous: '',
    q4Current: '',
    q4Previous: '',
  },
  {
    category: 'Stated Capital',
    q1Current: '838,282',
    q1Previous: '838,282',
    q2Current: '838,282',
    q2Previous: '838,282',
    q3Current: '838,282',
    q3Previous: '838,282',
    q4Current: '838,282',
    q4Previous: '838,282',
  },
  {
    category: 'Reserves',
    q1Current: '8,593,141',
    q1Previous: '8,127,585',
    q2Current: '8,705,008',
    q2Previous: '8,264,434',
    q3Current: '8,817,588',
    q3Previous: '8,341,729',
    q4Current: '8,972,430',
    q4Previous: '8,493,049',
  },
  {
    category: 'Retained Earnings',
    q1Current: '28,008,822',
    q1Previous: '22,709,926',
    q2Current: '30,195,362',
    q2Previous: '24,577,204',
    q3Current: '32,534,155',
    q3Previous: '26,235,254',
    q4Current: '33,815,357',
    q4Previous: '28,784,409',
  },
  {
    category: 'Total Equity',
    q1Current: '37,440,245',
    q1Previous: '31,675,793',
    q2Current: '39,738,652',
    q2Previous: '33,679,920',
    q3Current: '42,190,025',
    q3Previous: '35,415,265',
    q4Current: '43,626,069',
    q4Previous: '38,115,740',
  },
  {
    category: 'Total Liabilities and Equity',
    q1Current: '177,973,984',
    q1Previous: '166,246,938',
    q2Current: '179,448,075',
    q2Previous: '175,050,481',
    q3Current: '185,244,218',
    q3Previous: '176,710,209',
    q4Current: '202,176,506',
    q4Previous: '182,346,587',
  },
];
const financialData: FinancialData[] = [
  {
    category: 'Income',
    q1Current: '12,437,998',
    q1Previous: '8,524,817',
    q2Current: '12,410,733',
    q2Previous: '10,387,022',
    q3Current: '12,516,224',
    q3Previous: '11,496,971',
    q4Current: '11,865,140',
    q4Previous: '12,347,648',
  },
  {
    category: 'Interest Income',
    q1Current: '11,820,531',
    q1Previous: '7,738,975',
    q2Current: '11,630,768',
    q2Previous: '9,539,093',
    q3Current: '11,637,426',
    q3Previous: '10,805,229',
    q4Current: '10,777,814',
    q4Previous: '11,560,637',
  },
  {
    category: 'Less: Interest Expenses',
    q1Current: '6,112,844',
    q1Previous: '3,082,431',
    q2Current: '5,543,510',
    q2Previous: '5,046,984',
    q3Current: '5,061,174',
    q3Previous: '6,107,231',
    q4Current: '4,661,971',
    q4Previous: '6,378,939',
  },
  {
    category: 'Net Interest Income',
    q1Current: '5,707,687',
    q1Previous: '4,656,544',
    q2Current: '6,087,258',
    q2Previous: '4,492,109',
    q3Current: '6,576,252',
    q3Previous: '4,697,998',
    q4Current: '6,115,843',
    q4Previous: '5,181,698',
  },
  {
    category: 'Fee and Commission Income',
    q1Current: '606,080',
    q1Previous: '755,941',
    q2Current: '754,800',
    q2Previous: '747,088',
    q3Current: '853,231',
    q3Previous: '672,177',
    q4Current: '972,311',
    q4Previous: '775,859',
  },
  {
    category: 'Net Trading Income',
    q1Current: '732',
    q1Previous: '(3,759)',
    q2Current: '4,839',
    q2Previous: '6,304',
    q3Current: '(1,748)',
    q3Previous: '(5,285)',
    q4Current: '1,120',
    q4Previous: '644',
  },
  {
    category: 'Other Operating Income',
    q1Current: '10,655',
    q1Previous: '33,660',
    q2Current: '20,326',
    q2Previous: '94,537',
    q3Current: '27,315',
    q3Previous: '24,850',
    q4Current: '113,895',
    q4Previous: '10,508',
  },
  {
    category: 'Total Operating Income',
    q1Current: '6,325,154',
    q1Previous: '5,442,386',
    q2Current: '6,867,223',
    q2Previous: '5,340,038',
    q3Current: '7,455,050',
    q3Previous: '5,389,740',
    q4Current: '7,203,169',
    q4Previous: '5,968,709',
  },
  {
    category: 'Less: Impairment Charges',
    q1Current: '99,483',
    q1Previous: '190,998',
    q2Current: '157,521',
    q2Previous: '247,717',
    q3Current: '277,736',
    q3Previous: '88,543',
    q4Current: '-161,504',
    q4Previous: '18,487',
  },
  {
    category: 'Net Operating Income',
    q1Current: '6,225,671',
    q1Previous: '5,251,388',
    q2Current: '6,709,702',
    q2Previous: '5,092,321',
    q3Current: '7,177,314',
    q3Previous: '5,301,197',
    q4Current: '7,364,673',
    q4Previous: '5,950,222',
  },
  {
    category: 'Less: Operating Expenses',
    q1Current: '',
    q1Previous: '',
    q2Current: '',
    q2Previous: '',
    q3Current: '',
    q3Previous: '',
    q4Current: '',
    q4Previous: '',
  },
  {
    category: 'Personnel Expenses',
    q1Current: '1,009,917',
    q1Previous: '869,309',
    q2Current: '1,112,020',
    q2Previous: '880,132',
    q3Current: '1,144,864',
    q3Previous: '867,700',
    q4Current: '1,109,673',
    q4Previous: '927,996',
  },
  {
    category: 'Depreciation of Property, Plant and Equipment',
    q1Current: '210,050',
    q1Previous: '207,538',
    q2Current: '215,441',
    q2Previous: '199,705',
    q3Current: '217,344',
    q3Previous: '204,049',
    q4Current: '223,513',
    q4Previous: '205,441',
  },
  {
    category: 'Amortisation of Intangible Assets',
    q1Current: '2,157',
    q1Previous: '2,258',
    q2Current: '2,032',
    q2Previous: '2,035',
    q3Current: '2,037',
    q3Previous: '1,639',
    q4Current: '2,189',
    q4Previous: '2,251',
  },
  {
    category: 'Other Operating Expenses',
    q1Current: '793,842',
    q1Previous: '630,520',
    q2Current: '790,551',
    q2Previous: '630,659',
    q3Current: '926,534',
    q3Previous: '751,406',
    q4Current: '907,368',
    q4Previous: '795,363',
  },
  {
    category: 'Operating Profit before Tax on Financial Services',
    q1Current: '4,209,705',
    q1Previous: '3,541,763',
    q2Current: '4,589,658',
    q2Previous: '3,379,790',
    q3Current: '4,886,535',
    q3Previous: '3,476,403',
    q4Current: '5,121,930',
    q4Previous: '4,019,171',
  },
  {
    category: 'Less: Tax on Financial Services',
    q1Current: '840,810',
    q1Previous: '614,079',
    q2Current: '902,531',
    q2Previous: '598,294',
    q3Current: '946,149',
    q3Previous: '692,881',
    q4Current: '938,131',
    q4Previous: '765,321',
  },
  {
    category: 'Profit before Taxation',
    q1Current: '3,368,895',
    q1Previous: '2,927,684',
    q2Current: '3,687,127',
    q2Previous: '2,781,496',
    q3Current: '3,940,386',
    q3Previous: '2,783,522',
    q4Current: '4,183,799',
    q4Previous: '3,253,850',
  },
  {
    category: 'Less: Income Tax Expense',
    q1Current: '1,269,211',
    q1Previous: '856,002',
    q2Current: '1,385,506',
    q2Previous: '815,940',
    q3Current: '1,478,500',
    q3Previous: '1,038,205',
    q4Current: '1,483,352',
    q4Previous: '576,074',
  },
  {
    category: 'Profit for the Year',
    q1Current: '2,099,684',
    q1Previous: '2,071,682',
    q2Current: '2,301,621',
    q2Previous: '1,965,556',
    q3Current: '2,461,886',
    q3Previous: '1,745,317',
    q4Current: '2,700,447',
    q4Previous: '2,677,776',
  },
  {
    category: 'Quarterly Key Performance Indicators',
    q1Current: '',
    q1Previous: '',
    q2Current: '',
    q2Previous: '',
    q3Current: '',
    q3Previous: '',
    q4Current: '',
    q4Previous: '',
  },
  {
    category: 'Asset Quality',
    q1Current: '',
    q1Previous: '',
    q2Current: '',
    q2Previous: '',
    q3Current: '',
    q3Previous: '',
    q4Current: '',
    q4Previous: '',
  },
  {
    category: 'NPL Ratio - Gross',
    q1Current: '6.69%',
    q1Previous: '5.07%',
    q2Current: '6.39%',
    q2Previous: '4.81%',
    q3Current: '4.53%',
    q3Previous: '4.81%',
    q4Current: '3.54%',
    q4Previous: '4.45%',
  },
  {
    category: 'NPL Ratio - Net',
    q1Current: '1.37%',
    q1Previous: '-0.18%',
    q2Current: '1.56%',
    q2Previous: '-0.33%',
    q3Current: '-0.38%',
    q3Previous: '-0.33%',
    q4Current: '-0.79%',
    q4Previous: '-0.65%',
  },
  {
    category: 'Profitability',
    q1Current: '',
    q1Previous: '',
    q2Current: '',
    q2Previous: '',
    q3Current: '',
    q3Previous: '',
    q4Current: '',
    q4Previous: '',
  },
  {
    category: 'Return on Equity',
    q1Current: '22.23%',
    q1Previous: '25.61%',
    q2Current: '22.61%',
    q2Previous: '24.20%',
    q3Current: '22.79%',
    q3Previous: '22.52%',
    q4Current: '23.40%',
    q4Previous: '23.78%',
  },
  {
    category: 'Return on Assets',
    q1Current: '4.66%',
    q1Previous: '5.01%',
    q2Current: '4.87%',
    q2Previous: '4.76%',
    q3Current: '4.98%',
    q3Previous: '4.52%',
    q4Current: '4.97%',
    q4Previous: '4.88%',
  },
];
export default function QuarterlyFinancialReport() {
  return (
    <div className="bg-[#0A3D5F] text-white p-4 md:pl-0 md:pr-2 custom-scrollbar h-[650px] overflow-auto">
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white text-blue rounded-lg p-6">
          <h1 className="text-xl font-bold mb-4">
            QUARTERLY FINANCIAL STATEMENTS
          </h1>
          <div>
            <div className="overflow-x-auto">
              <img
                src="/images/charts/supplementaryInformation/quartltInformation/incomestatementcompany.png"
                alt="income statement company"
                className="xl:w-full xl:max-w-full max-w-[800px]"
              />
            </div>
          </div>
          {/* <h6 className="font-bold mb-4">Income Statement - Company</h6>
          <div className="overflow-x-auto ">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-100">
                  <th className="p-2 border"></th>
                  <th className="p-2 border" colSpan={2}>
                    1st Quarter
                  </th>
                  <th className="p-2 border" colSpan={2}>
                    2nd Quarter
                  </th>
                  <th className="p-2 border" colSpan={2}>
                    3rd Quarter
                  </th>
                  <th className="p-2 border" colSpan={2}>
                    4th Quarter
                  </th>
                </tr>
                <tr className="bg-blue-50">
                  <th className="p-2 border">For the 03 Months Ended</th>
                  <th className="p-2 border">30.06.2023 Rs. &#39;000</th>
                  <th className="p-2 border">30.06.2022 Rs. &#39;000</th>
                  <th className="p-2 border">30.09.2023 Rs. &#39;000</th>
                  <th className="p-2 border">30.09.2022 Rs. &#39;000</th>
                  <th className="p-2 border">31.12.2023 Rs. &#39;000</th>
                  <th className="p-2 border">31.12.2022 Rs. &#39;000</th>
                  <th className="p-2 border">31.03.2024 Rs. &#39;000</th>
                  <th className="p-2 border">31.03.2023 Rs. &#39;000</th>
                </tr>
              </thead>
              <tbody>
                {financialData.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="p-2 border font-medium">{row.category}</td>
                    <td className="p-2 border text-right">{row.q1Current}</td>
                    <td className="p-2 border text-right">{row.q1Previous}</td>
                    <td className="p-2 border text-right">{row.q2Current}</td>
                    <td className="p-2 border text-right">{row.q2Previous}</td>
                    <td className="p-2 border text-right">{row.q3Current}</td>
                    <td className="p-2 border text-right">{row.q3Previous}</td>
                    <td className="p-2 border text-right">{row.q4Current}</td>
                    <td className="p-2 border text-right">{row.q4Previous}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}
        </div>
        <div className="bg-white text-blue rounded-lg p-6">
          {/* <h1 className="text-xl font-bold mb-4">
            Statement of Financial Position - Company
          </h1>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-100">
                  <th className="p-2 border">As at</th>
                  <th className="p-2 border" colSpan={2}>
                    1st Quarter
                  </th>
                  <th className="p-2 border" colSpan={2}>
                    2nd Quarter
                  </th>
                  <th className="p-2 border" colSpan={2}>
                    3rd Quarter
                  </th>
                  <th className="p-2 border" colSpan={2}>
                    4th Quarter
                  </th>
                </tr>
                <tr className="bg-blue-50">
                  <th className="p-2 border"></th>
                  <th className="p-2 border">30.06.2023 Rs. &#39;000</th>
                  <th className="p-2 border">30.06.2022 Rs. &#39;000</th>
                  <th className="p-2 border">30.09.2023 Rs. &#39;000</th>
                  <th className="p-2 border">30.09.2022 Rs. &#39;000</th>
                  <th className="p-2 border">31.12.2023 Rs. &#39;000</th>
                  <th className="p-2 border">31.12.2022 Rs. &#39;000</th>
                  <th className="p-2 border">31.03.2024 Rs. &#39;000</th>
                  <th className="p-2 border">31.03.2023 Rs. &#39;000</th>
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
                        row.category === 'Assets' ||
                        row.category === 'Liabilities' ||
                        row.category === 'Equity'
                          ? 'font-bold'
                          : ''
                      }`}
                    >
                      {row.category}
                    </td>
                    <td className="p-2 border text-right">{row.q1Current}</td>
                    <td className="p-2 border text-right">{row.q1Previous}</td>
                    <td className="p-2 border text-right">{row.q2Current}</td>
                    <td className="p-2 border text-right">{row.q2Previous}</td>
                    <td className="p-2 border text-right">{row.q3Current}</td>
                    <td className="p-2 border text-right">{row.q3Previous}</td>
                    <td className="p-2 border text-right">{row.q4Current}</td>
                    <td className="p-2 border text-right">{row.q4Previous}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}
          <div>
            <div className="overflow-x-auto">
              <img
                src="/images/charts/supplementaryInformation/quartltInformation/financialpositioncompany.png"
                alt="income statement company"
                className="xl:w-full xl:max-w-full max-w-[800px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
