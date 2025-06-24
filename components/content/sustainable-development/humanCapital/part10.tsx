'use client';

import Image from 'next/image';

export default function HumanCapitalPart10() {
  return (
    <div>
      <div className="bg-white text-[#333333] p-8">
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4 text-[#FF7F50]">
            TRAINING PROGRAMMES
          </h2>
          <p className="mb-4">
            The following training programmes were conducted during the FY
            2023/24
          </p>

          <table className="w-full mb-6">
            <thead>
              <tr className="bg-[#8A2BE2] text-white">
                <th className="p-2">Training Programme</th>
                <th className="p-2">Target Group</th>
                <th className="p-2">No. of Participants</th>
                <th className="p-2" colSpan={3}>
                  Training Hours
                </th>
              </tr>
              <tr className="bg-[#8A2BE2] text-white">
                <th className="p-2"></th>
                <th className="p-2"></th>
                <th className="p-2"></th>
                <th className="p-2">Male</th>
                <th className="p-2">Female</th>
                <th className="p-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Management Development Programme</td>
                <td className="p-2">
                  Credit, Gold Loan, Recoveries and Fixed Deposits Management
                </td>
                <td className="p-2 text-center">99</td>
                <td className="p-2 text-center">2,777</td>
                <td className="p-2 text-center">180</td>
                <td className="p-2 text-center">2,957</td>
              </tr>
              <tr>
                <td className="p-2">One on one Coaching Session</td>
                <td className="p-2">Credit Management</td>
                <td className="p-2 text-center">2</td>
                <td className="p-2 text-center">40</td>
                <td className="p-2 text-center">-</td>
                <td className="p-2 text-center">40</td>
              </tr>
              <tr>
                <td className="p-2">
                  Ultimate leadership programme for Gold Loan OIC & Second
                  Officers
                </td>
                <td className="p-2">Gold Loan OIC & Second Officers</td>
                <td className="p-2 text-center">206</td>
                <td className="p-2 text-center">368</td>
                <td className="p-2 text-center">1,148</td>
                <td className="p-2 text-center">1,516</td>
              </tr>
              <tr>
                <td className="p-2">
                  Ultimate leadership programme for the Recoveries Department
                </td>
                <td className="p-2">Recoveries Team</td>
                <td className="p-2 text-center">163</td>
                <td className="p-2 text-center">848</td>
                <td className="p-2 text-center">456</td>
                <td className="p-2 text-center">1,304</td>
              </tr>
            </tbody>
          </table>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="h-32 flex items-center justify-center">
              <Image
                src="/images/sustainability/clean-energy-gallery-34.PNG"
                alt="Sri Lanka Map"
                width={300}
                height={300}
                style={{ height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div className="h-32 flex items-center justify-center">
              <Image
                src="/images/sustainability/clean-energy-gallery-35.PNG"
                alt="Sri Lanka Map"
                width={300}
                height={300}
                style={{ height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div className="h-32 flex items-center justify-center">
              <Image
                src="/images/sustainability/clean-energy-gallery-36.PNG"
                alt="Sri Lanka Map"
                width={300}
                height={300}
                style={{ height: '100%', objectFit: 'contain' }}
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-[#FF7F50]">
            HUMAN RESOURCE ACCOUNTING
          </h2>
          <p className="mb-4">
            The process of measuring the worth of human capital in terms of its
            potential to generate future value for the Company is known as human
            resource accounting, or HRA. HRA is basically the process of
            determining, quantifying, and reporting on the investments in human
            resources that are not already taken into consideration by standard
            accounting procedures. Unlike the typical accounting approach, which
            treats personnel costs as an expense item in the profit and loss
            account, the HRA approach reports human resource-related
            expenditures as assets on the balance sheet.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-[#FF7F50]">
            KEY HR METRICES PER EMPLOYEE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-[#dff3f9] p-4 rounded-lg">
              <h3 className="font-bold mb-2">FACILITY DISBURSEMENT</h3>
              <p className="text-2xl font-bold">Rs. 39.03 Mn</p>
              <p className="text-sm">2022/23 Rs. 40.76 Mn</p>
            </div>
            <div className="bg-[#fee4d0] p-4 rounded-lg">
              <h3 className="font-bold mb-2">DEPOSIT PORTFOLIO</h3>
              <p className="text-2xl font-bold">Rs. 29.72 Mn</p>
              <p className="text-sm">2022/23 Rs. 32 Mn</p>
            </div>
            <div className="bg-[#d1cbe4] p-4 rounded-lg">
              <h3 className="font-bold mb-2">BORROWINGS</h3>
              <p className="text-2xl font-bold">Rs. 5.25 Mn</p>
              <p className="text-sm">2022/23 Rs. 5.43 Mn</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-[#feebdb] p-4 rounded-full text-center">
              <h3 className="font-bold mb-2">Income</h3>
              <p className="text-xl font-bold">Rs. 12 Mn</p>
              <p className="text-sm">2022/23 Rs. 12 Mn</p>
            </div>
            <div className="bg-[#feebdb] p-4 rounded-full text-center">
              <h3 className="font-bold mb-2">Operating Expenses</h3>
              <p className="text-xl font-bold">Rs. 2.10 Mn</p>
              <p className="text-sm">2022/23 Rs. 2.01 Mn</p>
            </div>
            <div className="bg-[#feebdb] p-4 rounded-full text-center">
              <h3 className="font-bold mb-2">Personal Expenses</h3>
              <p className="text-xl font-bold">Rs. 1.06 Mn</p>
              <p className="text-sm">2022/23 Rs. 1 Mn</p>
            </div>
            <div className="bg-[#feebdb] p-4 rounded-full text-center">
              <h3 className="font-bold mb-2">Training Cost</h3>
              <p className="text-xl font-bold">Rs. 0.01 Mn</p>
              <p className="text-sm">2022/23 Rs. 0.003 Mn</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-[#4169E1] p-4 rounded-lg text-white">
              <h3 className="font-bold mb-2">OPERATING PROFIT</h3>
              <p className="text-2xl font-bold">Rs. 4.55 Mn</p>
              <p className="text-sm">2022/23 Rs. 4.05 Mn</p>
            </div>
            <div className="bg-[#4169E1] p-4 rounded-lg text-white">
              <h3 className="font-bold mb-2">PBT</h3>
              <p className="text-2xl font-bold">Rs. 3.67 Mn</p>
              <p className="text-sm">2022/23 Rs. 3.30 Mn</p>
            </div>
            <div className="bg-[#4169E1] p-4 rounded-lg text-white">
              <h3 className="font-bold mb-2">PAT</h3>
              <p className="text-2xl font-bold">Rs. 2.31 Mn</p>
              <p className="text-sm">2022/23 Rs. 2.37 Mn</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-[#FF7F50]">
            GRIEVANCE HANDLING
          </h2>
          <p className="mb-4">
            We nurture a culture of open communication, encouraging our
            employees to voice any work-related concerns or grievances without
            hesitation. Multiple channels are provided for employees to express
            their opinions and seek resolution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-[#dff3f9] p-4 rounded-lg ">
              <h3 className="font-bold mb-2">Regular Team Briefings</h3>
              <p>
                Daily, weekly, and monthly team meetings offer a platform for
                open dialogue and collective feedback
              </p>
            </div>
            <div className="bg-[#fee4d0] p-4 rounded-lg">
              <h3 className="font-bold mb-2">Open-Door Policy</h3>
              <p>
                Employees have direct access to senior management to discuss
                individual concerns impacting their roles.
              </p>
            </div>
            <div className="bg-[#d1cbe4] p-4 rounded-lg">
              <h3 className="font-bold mb-2">Formal Grievance Procedure</h3>
              <p>
                Our HR department maintains a structured grievance procedure,
                outlined in our Code of Conduct, for formal escalation of
                concerns directly to the HR Head. This procedure ensures timely
                resolution with clear timelines and expectations
              </p>
            </div>
          </div>

          <p className="mb-6">
            We are pleased to report that no formal grievances were filed with
            the HR department during FY2023/24, reflecting our commitment to a
            positive and supportive work environment.
          </p>

          <div className="flex items-center p-4 rounded-lg">
            <Image
              src="/images/sustainability/clean-energy-lion-qr.PNG"
              alt="Sri Lanka Map"
              width={800}
              height={400}
              style={{ height: '100%', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
