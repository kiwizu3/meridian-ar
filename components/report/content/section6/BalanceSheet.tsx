import React from 'react';
import Image from 'next/image';

export default function BalanceSheet() {
  return (
    <div className="balance-sheet p-6 bg-themeGreen max-h-[70vh] overflow-y-auto custom-scrollbar">
      <div className="grid grid-cols-1 gap-6">
        <h1 className="text-4xl font-bold mb-2">
          Statement of Financial Position
        </h1>

        {/* Financial Position Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-2 border text-left">As at 31 March</th>
                <th className="p-2 border text-left">Note</th>
                <th className="p-2 border text-left">Page No.</th>
                <th className="p-2 border text-center" colSpan={3}>
                  Company
                </th>
                <th className="p-2 border text-center" colSpan={3}>
                  Group
                </th>
              </tr>
              <tr>
                <th className="p-2 border"></th>
                <th className="p-2 border"></th>
                <th className="p-2 border"></th>
                <th className="p-2 border">2025 Rs. '000</th>
                <th className="p-2 border">2024 Rs. '000</th>
                <th className="p-2 border">Change %</th>
                <th className="p-2 border">2025 Rs. '000</th>
                <th className="p-2 border">2024 Rs. '000</th>
                <th className="p-2 border">Change %</th>
              </tr>
            </thead>
            <tbody>
              {/* Assets Section */}
              <tr className="bg-yellow">
                <td className="p-2 border font-bold" colSpan={9}>
                  Assets
                </td>
              </tr>
              {[
                {
                  name: 'Cash and Cash Equivalents',
                  note: '2.15',
                  page: '397',
                  company2025: '9,024,016',
                  company2024: '7,406,083',
                  change: '22',
                  group2025: '9,074,745',
                  group2024: '7,651,260',
                  groupChange: '19',
                },
                {
                  name: 'Financial Assets Recognised Through Profit or Loss',
                  note: '2.16',
                  page: '398',
                  company2025: '718,402',
                  company2024: '1,923,016',
                  change: '(63)',
                  group2025: '718,402',
                  group2024: '1,923,016',
                  groupChange: '(63)',
                },
                {
                  name: 'Financial Assets at Amortised Cost',
                  note: '2.17',
                  page: '399',
                  company2025: '197,766,691',
                  company2024: '161,291,486',
                  change: '23',
                  group2025: '199,271,047',
                  group2024: '162,521,733',
                  groupChange: '23',
                },
                {
                  name: 'Financial Assets Measured at Fair Value Through Other Comprehensive Income',
                  note: '2.19',
                  page: '411',
                  company2025: '165,024',
                  company2024: '118,587',
                  change: '39',
                  group2025: '165,024',
                  group2024: '118,589',
                  groupChange: '39',
                },
                {
                  name: 'Other Financial Assets',
                  note: '2.20',
                  page: '413',
                  company2025: '21,201,500',
                  company2024: '20,374,770',
                  change: '4',
                  group2025: '21,188,612',
                  group2024: '20,443,404',
                  groupChange: '4',
                },
                {
                  name: 'Other Non Financial Assets',
                  note: '2.21',
                  page: '414',
                  company2025: '439,475',
                  company2024: '430,651',
                  change: '2',
                  group2025: '480,168',
                  group2024: '495,796',
                  groupChange: '(3)',
                },
                {
                  name: 'Investment in Subsidiaries',
                  note: '2.22',
                  page: '415',
                  company2025: '521,162',
                  company2024: '698,935',
                  change: '(25)',
                  group2025: '-',
                  group2024: '-',
                  groupChange: '-',
                },
                {
                  name: 'Property, Plant and Equipment and Right-of-Use Assets',
                  note: '2.23',
                  page: '420',
                  company2025: '9,725,513',
                  company2024: '8,984,363',
                  change: '8',
                  group2025: '9,751,574',
                  group2024: '9,034,106',
                  groupChange: '8',
                },
                {
                  name: 'Investment Properties',
                  note: '2.24',
                  page: '426',
                  company2025: '5,385',
                  company2024: '-',
                  change: '-',
                  group2025: '5,385',
                  group2024: '5,050',
                  groupChange: '7',
                },
                {
                  name: 'Intangible Assets',
                  note: '2.25',
                  page: '429',
                  company2025: '67,113',
                  company2024: '20,701',
                  change: '>100',
                  group2025: '67,113',
                  group2024: '22,602',
                  groupChange: '>100',
                },
                {
                  name: 'Deferred Tax Assets',
                  note: '2.26',
                  page: '432',
                  company2025: '1,255,960',
                  company2024: '927,914',
                  change: '35',
                  group2025: '1,262,343',
                  group2024: '932,330',
                  groupChange: '35',
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td className="p-2 border">{row.name}</td>
                  <td className="p-2 border">{row.note}</td>
                  <td className="p-2 border">{row.page}</td>
                  <td className="p-2 border">{row.company2025}</td>
                  <td className="p-2 border">{row.company2024}</td>
                  <td className="p-2 border">{row.change}</td>
                  <td className="p-2 border">{row.group2025}</td>
                  <td className="p-2 border">{row.group2024}</td>
                  <td className="p-2 border">{row.groupChange}</td>
                </tr>
              ))}
              <tr className="font-bold">
                <td className="p-2 border">Total Assets</td>
                <td className="p-2 border"></td>
                <td className="p-2 border"></td>
                <td className="p-2 border">240,890,241</td>
                <td className="p-2 border">202,176,506</td>
                <td className="p-2 border">19</td>
                <td className="p-2 border">241,984,413</td>
                <td className="p-2 border">203,147,886</td>
                <td className="p-2 border">19</td>
              </tr>

              {/* Liabilities Section */}
              <tr className="bg-yellow">
                <td className="p-2 border font-bold" colSpan={9}>
                  Liabilities
                </td>
              </tr>
              {[
                {
                  name: 'Due to Banks',
                  note: '2.27',
                  page: '434',
                  company2025: '37,411,682',
                  company2024: '21,702,012',
                  change: '72',
                  group2025: '37,799,707',
                  group2024: '21,955,857',
                  groupChange: '72',
                },
                {
                  name: 'Financial Liabilities at Amortised Cost - Due to Depositors',
                  note: '2.28',
                  page: '436',
                  company2025: '138,496,872',
                  company2024: '122,808,124',
                  change: '13',
                  group2025: '138,823,896',
                  group2024: '123,034,547',
                  groupChange: '13',
                },
                {
                  name: 'Debt Instruments Issued and Other Borrowed Funds',
                  note: '2.29',
                  page: '437',
                  company2025: '5,005,405',
                  company2024: '5,491,401',
                  change: '(9)',
                  group2025: '5,005,405',
                  group2024: '5,491,401',
                  groupChange: '(9)',
                },
                {
                  name: 'Other Financial Liabilities',
                  note: '2.30',
                  page: '437',
                  company2025: '4,303,422',
                  company2024: '3,757,776',
                  change: '15',
                  group2025: '4,305,386',
                  group2024: '3,815,897',
                  groupChange: '13',
                },
                {
                  name: 'Other Non Financial Liabilities',
                  note: '2.31',
                  page: '439',
                  company2025: '1,671,989',
                  company2024: '1,547,570',
                  change: '8',
                  group2025: '1,718,969',
                  group2024: '1,591,382',
                  groupChange: '8',
                },
                {
                  name: 'Current Tax Liabilities',
                  note: '2.32',
                  page: '439',
                  company2025: '2,182,738',
                  company2024: '2,070,496',
                  change: '(21)',
                  group2025: '2,188,770',
                  group2024: '2,775,700',
                  groupChange: '(21)',
                },
                {
                  name: 'Post-Employment Benefit Liability',
                  note: '2.33',
                  page: '440',
                  company2025: '552,135',
                  company2024: '473,058',
                  change: '17',
                  group2025: '552,135',
                  group2024: '475,109',
                  groupChange: '16',
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td className="p-2 border">{row.name}</td>
                  <td className="p-2 border">{row.note}</td>
                  <td className="p-2 border">{row.page}</td>
                  <td className="p-2 border">{row.company2025}</td>
                  <td className="p-2 border">{row.company2024}</td>
                  <td className="p-2 border">{row.change}</td>
                  <td className="p-2 border">{row.group2025}</td>
                  <td className="p-2 border">{row.group2024}</td>
                  <td className="p-2 border">{row.groupChange}</td>
                </tr>
              ))}
              <tr className="font-bold">
                <td className="p-2 border">Total Liabilities</td>
                <td className="p-2 border"></td>
                <td className="p-2 border"></td>
                <td className="p-2 border">189,624,243</td>
                <td className="p-2 border">158,550,437</td>
                <td className="p-2 border">20</td>
                <td className="p-2 border">190,394,268</td>
                <td className="p-2 border">159,139,893</td>
                <td className="p-2 border">20</td>
              </tr>

              {/* Equity Section */}
              <tr className="bg-yellow">
                <td className="p-2 border font-bold" colSpan={9}>
                  Equity
                </td>
              </tr>
              {[
                {
                  name: 'Stated Capital',
                  note: '2.34',
                  page: '442',
                  company2025: '838,282',
                  company2024: '838,282',
                  change: '-',
                  group2025: '838,282',
                  group2024: '838,282',
                  groupChange: '-',
                },
                {
                  name: 'Reserves',
                  note: '2.35',
                  page: '443',
                  company2025: '9,521,361',
                  company2024: '8,972,430',
                  change: '6',
                  group2025: '9,633,154',
                  group2024: '9,097,433',
                  groupChange: '6',
                },
                {
                  name: 'Retained Earnings',
                  note: '2.36',
                  page: '444',
                  company2025: '40,906,355',
                  company2024: '33,815,357',
                  change: '21',
                  group2025: '41,118,709',
                  group2024: '33,975,540',
                  groupChange: '21',
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td className="p-2 border">{row.name}</td>
                  <td className="p-2 border">{row.note}</td>
                  <td className="p-2 border">{row.page}</td>
                  <td className="p-2 border">{row.company2025}</td>
                  <td className="p-2 border">{row.company2024}</td>
                  <td className="p-2 border">{row.change}</td>
                  <td className="p-2 border">{row.group2025}</td>
                  <td className="p-2 border">{row.group2024}</td>
                  <td className="p-2 border">{row.groupChange}</td>
                </tr>
              ))}
              <tr className="font-bold">
                <td className="p-2 border">
                  Total Equity Attributable to Equity Holders of the Company
                </td>
                <td className="p-2 border"></td>
                <td className="p-2 border"></td>
                <td className="p-2 border">51,265,998</td>
                <td className="p-2 border">43,626,069</td>
                <td className="p-2 border">18</td>
                <td className="p-2 border">51,590,145</td>
                <td className="p-2 border">43,911,255</td>
                <td className="p-2 border">17</td>
              </tr>
              <tr>
                <td className="p-2 border">Non-Controlling Interest</td>
                <td className="p-2 border">2.37</td>
                <td className="p-2 border">444</td>
                <td className="p-2 border">-</td>
                <td className="p-2 border">-</td>
                <td className="p-2 border">-</td>
                <td className="p-2 border">96,738</td>
                <td className="p-2 border">-</td>
                <td className="p-2 border"></td>
              </tr>
              <tr className="font-bold">
                <td className="p-2 border">Total Equity</td>
                <td className="p-2 border"></td>
                <td className="p-2 border"></td>
                <td className="p-2 border">51,265,998</td>
                <td className="p-2 border">43,626,069</td>
                <td className="p-2 border">18</td>
                <td className="p-2 border">51,590,145</td>
                <td className="p-2 border">44,007,993</td>
                <td className="p-2 border">17</td>
              </tr>
              <tr className="font-bold">
                <td className="p-2 border">Total Liabilities and Equity</td>
                <td className="p-2 border"></td>
                <td className="p-2 border"></td>
                <td className="p-2 border">240,890,241</td>
                <td className="p-2 border">202,176,506</td>
                <td className="p-2 border">19</td>
                <td className="p-2 border">241,984,413</td>
                <td className="p-2 border">203,147,886</td>
                <td className="p-2 border">19</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-yellow p-4 rounded-lg">
            <h3 className="font-bold mb-2">Commitments and Contingencies</h3>
            <div className="flex justify-between">
              <div>
                <p>Note: 3.5</p>
                <p>Page No.: 453</p>
              </div>
              <div>
                <p>Company: 4,209,020 (2025)</p>
                <p>Company: 2,281,890 (2024)</p>
                <p>Change: 84%</p>
              </div>
              <div>
                <p>Group: 3,962,095 (2025)</p>
                <p>Group: 2,030,940 (2024)</p>
                <p>Change: 95%</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow p-4 rounded-lg">
            <h3 className="font-bold mb-2">Net Asset Value per Share (Rs.)</h3>
            <div className="flex justify-between">
              <div>
                <p>Note: 3.6</p>
                <p>Page No.: 454</p>
              </div>
              <div>
                <p>Company: 92.53 (2025)</p>
                <p>Company: 78.74 (2024)</p>
                <p>Change: 18%</p>
              </div>
              <div>
                <p>Group: 93.11 (2025)</p>
                <p>Group: 79.25 (2024)</p>
                <p>Change: 17%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Notes */}
        <div className="text-xs mt-4">
          <p>
            Accounting Policies and Notes from pages 363 to 478 form an integral
            part of these Financial Statements.
          </p>
          <p className="mt-2">
            I certify that these Financial Statements are in compliance with the
            requirements of the Companies Act No. 07 of 2007.
          </p>
          <p className="mt-4 font-bold">Malith Hewage</p>
          <p>Chief Financial Officer</p>

          <p className="mt-4">
            The Board of Directors is responsible for these Financial
            Statements. Approved and signed for and on behalf of the Board of
            Directors by,
          </p>

          <div className="mt-4 flex justify-between">
            <div>
              <p className="font-bold">J A S Sumith Adhihiety</p>
              <p>Managing Director</p>
            </div>
            <div>
              <p className="font-bold">Ashane Jayasekara</p>
              <p>Director</p>
            </div>
          </div>

          <p className="mt-2">30 May 2025</p>
          <p>Colombo</p>
        </div>

        <div className="text-xs text-gray-500 mt-4">
          LB Finance PLC Integrated Annual Report 2024/25
        </div>
      </div>
    </div>
  );
}
