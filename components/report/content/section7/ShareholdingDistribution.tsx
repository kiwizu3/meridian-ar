import React from 'react';
import Image from 'next/image';

export default function ShareholdingDistribution() {
  return (
    <div className="investor-info p-6 bg-themeGreen max-h-[70vh] overflow-y-auto">
      <div className="grid grid-cols-1 gap-6">
        <h1 className="text-4xl font-bold mb-2">INVESTOR INFORMATION</h1>

        {/* Largest Shareholders Table */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Largest Shareholders of the Company
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border text-left">Name</th>
                  <th className="p-2 border text-center" colSpan={2}>
                    As at 31 March 2025
                  </th>
                  <th className="p-2 border text-center" colSpan={2}>
                    As at 31 March 2024
                  </th>
                </tr>
                <tr className="bg-gray-50">
                  <th className="p-2 border"></th>
                  <th className="p-2 border">No. of Shares</th>
                  <th className="p-2 border">%</th>
                  <th className="p-2 border">No. of Shares</th>
                  <th className="p-2 border">%</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    rank: '1',
                    name: 'Vallibel One PLC',
                    shares2025: '286,729,600',
                    percent2025: '51.751',
                    shares2024: '286,729,600',
                    percent2024: '51.751',
                  },
                  {
                    rank: '2',
                    name: 'Royal Ceramics Lanka PLC',
                    shares2025: '125,708,928',
                    percent2025: '',
                    shares2024: '',
                    percent2024: '',
                  },
                  {
                    rank: '3',
                    name: 'Commercial Bank of Ceylon PLC /Royal Ceramics Lanka PLC',
                    shares2025: '18,784,000',
                    percent2025: '',
                    shares2024: '144,492,928',
                    percent2024: '26.079',
                  },
                  {
                    rank: '4',
                    name: 'Hatton National Bank PLC/Enna Holdings (Pvt) Ltd',
                    shares2025: '15,248,000',
                    percent2025: '2.752',
                    shares2024: '-',
                    percent2024: '-',
                  },
                  {
                    rank: '5',
                    name: 'Seylan Bank PLC/JN Lanka Holdings Company (Pvt) Ltd',
                    shares2025: '8,314,886',
                    percent2025: '1.501',
                    shares2024: '1,000,000',
                    percent2024: '0.180',
                  },
                  {
                    rank: '6',
                    name: 'Mr W.G.D.C. Ranaveera',
                    shares2025: '6,381,928',
                    percent2025: '1.152',
                    shares2024: '8,868,376',
                    percent2024: '1.601',
                  },
                  {
                    rank: '7',
                    name: 'Mr. K.R.E.M.D.M.B.jayasundara',
                    shares2025: '5,000,000',
                    percent2025: '0.902',
                    shares2024: '5,956,152',
                    percent2024: '1.075',
                  },
                  {
                    rank: '8',
                    name: 'Mr. K.D.A. Perera',
                    shares2025: '4,289,735',
                    percent2025: '0.774',
                    shares2024: '4,289,735',
                    percent2024: '0.774',
                  },
                  {
                    rank: '9',
                    name: 'DFCC Bank PLC/J N Lanka Holdings Company (Pvt) Ltd',
                    shares2025: '3,000,000',
                    percent2025: '0.541',
                    shares2024: '-',
                    percent2024: '-',
                  },
                  {
                    rank: '10',
                    name: 'Mr N. Udage',
                    shares2025: '2,861,235',
                    percent2025: '0.516',
                    shares2024: '2,861,235',
                    percent2024: '0.516',
                  },
                  {
                    rank: '11',
                    name: 'Hatton National Bank PLC/JN Lanka Holdings Company (Pvt) Ltd',
                    shares2025: '2,720,745',
                    percent2025: '0.491',
                    shares2024: '1,000,000',
                    percent2024: '0.180',
                  },
                  {
                    rank: '12',
                    name: 'DFCC Bank PLC A/C No .02',
                    shares2025: '2,227,260',
                    percent2025: '0.402',
                    shares2024: '-',
                    percent2024: '-',
                  },
                  {
                    rank: '13',
                    name: 'Mr F.N. Herft',
                    shares2025: '1,970,973',
                    percent2025: '0.356',
                    shares2024: '1,751,100',
                    percent2024: '0.316',
                  },
                  {
                    rank: '14',
                    name: 'Rosewood (Pvt) Limited-Account No.1',
                    shares2025: '1,963,807',
                    percent2025: '0.354',
                    shares2024: '-',
                    percent2024: '-',
                  },
                  {
                    rank: '15',
                    name: 'Janashakthi Insurance PLC - Shareholders',
                    shares2025: '1,952,700',
                    percent2025: '0.352',
                    shares2024: '1,952,700',
                    percent2024: '0.352',
                  },
                  {
                    rank: '16',
                    name: 'Mr. Y.S.H.R.S. Silva',
                    shares2025: '1,881,500',
                    percent2025: '0.340',
                    shares2024: '125,000',
                    percent2024: '0.023',
                  },
                  {
                    rank: '17',
                    name: 'J.B. Cocoshell (Pvt) Ltd',
                    shares2025: '1,635,407',
                    percent2025: '0.295',
                    shares2024: '3,340,958',
                    percent2024: '0.603',
                  },
                  {
                    rank: '18',
                    name: 'Mr. M. Keil',
                    shares2025: '1,300,000',
                    percent2025: '0.235',
                    shares2024: '-',
                    percent2024: '-',
                  },
                  {
                    rank: '19',
                    name: 'Mr M.A.T. Raaymakers',
                    shares2025: '1,270,922',
                    percent2025: '0.229',
                    shares2024: '1,267,245',
                    percent2024: '0.229',
                  },
                  {
                    rank: '20',
                    name: 'Mr A.A. Page',
                    shares2025: '1,259,200',
                    percent2025: '0.227',
                    shares2024: '1,259,200',
                    percent2024: '0.227',
                  },
                  {
                    rank: '21',
                    name: 'DFCC Bank PLC A/C 1',
                    shares2025: '1,186,099',
                    percent2025: '0.214',
                    shares2024: '-',
                    percent2024: '-',
                  },
                ].map((row, index) => (
                  <tr key={`shareholder-${index}`}>
                    <td className="p-2 border">
                      {row.rank} {row.name}
                    </td>
                    <td className="p-2 border text-right">{row.shares2025}</td>
                    <td className="p-2 border text-right">{row.percent2025}</td>
                    <td className="p-2 border text-right">{row.shares2024}</td>
                    <td className="p-2 border text-right">{row.percent2024}</td>
                  </tr>
                ))}
                <tr className="font-bold">
                  <td className="p-2 border"></td>
                  <td className="p-2 border text-right">495,686,925</td>
                  <td className="p-2 border text-right">89.465</td>
                  <td className="p-2 border text-right">464,894,229</td>
                  <td className="p-2 border text-right">83.907</td>
                </tr>
                <tr>
                  <td className="p-2 border">Others</td>
                  <td className="p-2 border text-right">58,370,211</td>
                  <td className="p-2 border text-right">10.535</td>
                  <td className="p-2 border text-right">89,162,907</td>
                  <td className="p-2 border text-right">16.093</td>
                </tr>
                <tr className="font-bold">
                  <td className="p-2 border">Total</td>
                  <td className="p-2 border text-right">554,057,136</td>
                  <td className="p-2 border text-right">100.000</td>
                  <td className="p-2 border text-right">554,057,136</td>
                  <td className="p-2 border text-right">100.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Distribution of Shareholdings Table */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Distribution of Shareholdings
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border text-center" colSpan={2}>
                    Range
                  </th>
                  <th className="p-2 border text-center" colSpan={3}>
                    As at 31 March 2025
                  </th>
                  <th className="p-2 border text-center" colSpan={3}>
                    As at 31 March 2024
                  </th>
                </tr>
                <tr className="bg-gray-50">
                  <th className="p-2 border">From</th>
                  <th className="p-2 border">To</th>
                  <th className="p-2 border">No. of Shareholders</th>
                  <th className="p-2 border">No. of Shares</th>
                  <th className="p-2 border">%</th>
                  <th className="p-2 border">No. of Shareholders</th>
                  <th className="p-2 border">No. of Shares</th>
                  <th className="p-2 border">%</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    from: '1',
                    to: '1,000',
                    shareholders2025: '3,237',
                    shares2025: '803,609',
                    percent2025: '0.15',
                    shareholders2024: '2,853',
                    shares2024: '756,611',
                    percent2024: '0.14',
                  },
                  {
                    from: '1,001',
                    to: '10,000',
                    shareholders2025: '1,418',
                    shares2025: '5,299,034',
                    percent2025: '0.96',
                    shareholders2024: '1,487',
                    shares2024: '5,817,375',
                    percent2024: '1.05',
                  },
                  {
                    from: '10,001',
                    to: '100,000',
                    shareholders2025: '560',
                    shares2025: '16,766,330',
                    percent2025: '3.03',
                    shareholders2024: '568',
                    shares2024: '17,529,395',
                    percent2024: '3.16',
                  },
                  {
                    from: '100,001',
                    to: '1,000,000',
                    shareholders2025: '110',
                    shares2025: '33,194,103',
                    percent2025: '5.99',
                    shareholders2024: '95',
                    shares2024: '31,658,947',
                    percent2024: '5.71',
                  },
                  {
                    from: 'Over',
                    to: '1,000,000',
                    shareholders2025: '23',
                    shares2025: '497,994,060',
                    percent2025: '89.88',
                    shareholders2024: '20',
                    shares2024: '498,294,808',
                    percent2024: '89.94',
                  },
                ].map((row, index) => (
                  <tr key={`distribution-${index}`}>
                    <td className="p-2 border text-right">{row.from}</td>
                    <td className="p-2 border text-right">{row.to}</td>
                    <td className="p-2 border text-right">
                      {row.shareholders2025}
                    </td>
                    <td className="p-2 border text-right">{row.shares2025}</td>
                    <td className="p-2 border text-right">{row.percent2025}</td>
                    <td className="p-2 border text-right">
                      {row.shareholders2024}
                    </td>
                    <td className="p-2 border text-right">{row.shares2024}</td>
                    <td className="p-2 border text-right">{row.percent2024}</td>
                  </tr>
                ))}
                <tr className="font-bold">
                  <td className="p-2 border" colSpan={2}>
                    Total
                  </td>
                  <td className="p-2 border text-right">5,348</td>
                  <td className="p-2 border text-right">554,057,136</td>
                  <td className="p-2 border text-right">100.00</td>
                  <td className="p-2 border text-right">5,023</td>
                  <td className="p-2 border text-right">554,057,136</td>
                  <td className="p-2 border text-right">100.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="text-xs text-gray-500 mt-4">
          482 LB Finance PLC Integrated Annual Report 2024/25
        </div>
      </div>
    </div>
  );
}
