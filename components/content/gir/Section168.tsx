'use client';

import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Section168() {
  const balancedBoardOptions: ApexOptions = {
    chart: {
      type: 'bar',
    },
    xaxis: {
      labels: {
        rotate: 270,
        hideOverlappingLabels: false,
        style: { fontSize: '8px' },
      },
      categories: [
        'Executive Directors',
        'Non-Independent Non-Executive Directors',
        'Independent Non-Executive Directors',
      ],
    },
    colors: ['#73BE73'],
  };

  const balancedBoardData: ApexOptions = {
    series: [
      {
        name: 'Directors',
        data: [3, 4, 3], // Example data
      },
    ],
  };

  const genderChartOptions: ApexOptions = {
    chart: {
      type: 'pie',
    },
    labels: ['Male', 'Female'],
    colors: ['#79C3E8', '#F28F40'],
  };

  const genderChartData = {
    series: [70, 30],
  };

  const ageDiversityOptions: ApexOptions = {
    chart: {
      type: 'bar',
    },
    xaxis: {
      categories: ['>60 years', '50-60 years', '40-50 years', '30-40 years'],
    },
    colors: ['#F28F40'],
  };

  const ageDiversityData = {
    series: [
      {
        name: 'Directors',
        data: [2, 4, 2, 1], // Example data
      },
    ],
  };

  const collectiveKnowledgeOptions: ApexOptions = {
    chart: {
      type: 'bar',
      height: 500,
    },
    xaxis: {
      labels: {
        rotate: 270,
        hideOverlappingLabels: false,
        style: { fontSize: '8px' },
      },

      categories: [
        'Banking and Finance',
        'Business leadership & development',
        'Business management & sustainability',
        'Audit and assurance',
        'Risk management',
        'People management and development',
        'Governance, legal and compliance',
        'IT and digital',
        'Leisure and hospitality',
      ],
    },
    colors: ['#F69328'],
  };

  const collectiveKnowledgeData = {
    series: [
      {
        name: 'Years of Experience',
        data: [6, 9, 8, 5, 6, 8, 7, 7, 7], // Example data
      },
    ],
  };

  const tenureOptions: ApexOptions = {
    chart: {
      type: 'bar',
    },
    xaxis: {
      categories: ['>9 years', '8-9 years', '4-5 years', '1-3 years'],
    },
    colors: ['#F69328'],
  };

  const tenureData = {
    series: [
      {
        name: 'Directors',
        data: [1, 3, 2, 3], // Example data
      },
    ],
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Corporate Governance Themes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-2 p-4 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 text-sm">
            <div className="bg-white text-blue rounded-lg p-6">
              <ul className="list-disc pl-5">
                <li>Composition - Page 168</li>
                <li>Governance Structure - Page 169</li>
                <li>
                  Appointments, Re-elections, Retirement & Resignations - Page
                  170
                </li>
                <li>Work of Committees - Page 171</li>
                <li>Policy Framework - Page 173</li>
                <li>Board Effectiveness - Page 173</li>
              </ul>
            </div>
            <div className="bg-white text-blue rounded-lg p-6">
              <ul className="list-disc pl-5">
                <li>Managing Conflicts of Interests - Page 175</li>
                <li>Ethical Practices & Corporate Culture - Page 176</li>
                <li>Internal Control - Page 176</li>
                <li>Risk Management - Page 176</li>
                <li>Accounting Audit - Page 176</li>
                <li>Remuneration & Incentives - Page 176</li>
                <li>Stakeholder Engagement & Communication - Page 176</li>
                <li>Sustainability Integration - Page 177</li>
                <li>IT Governance - Page 177</li>
                <li>Evaluations & Appraisal - Page 177</li>
                <li>Group Governance - Page 178</li>
                <li>Priorities for 2024/25 - Page 178</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#F69328] p-4 rounded-md shadow-md text-white">
          <p>
            Compliance with the Finance Business Act Direction No. 5 of 2021
            Corporate Governance issued by Central Bank of Sri Lanka is given on
            pages 359 to 383
          </p>
        </div>
        <div className="bg-[#79C3E8] p-4 rounded-md shadow-md text-white">
          <p>
            Compliance with Colombo Stock Exchange Listing Rule No. 7.6 -
            Contents of Annual Report and no. 9 - Corporate Governance is given
            on pages 402 to 411
          </p>
        </div>
        <div className="bg-[#73BE73] p-4 rounded-md shadow-md text-white">
          <p>
            The Code of Best Practice on Corporate Governance 2023 issued by the
            Institute of Chartered Accountants is given on pages 384 to 401
          </p>
        </div>

        {/* Composition Section */}
        <div className="col-span-2 bg-white p-4 rounded-md shadow-md">
          <h2 className="text-[#0A3D5F] font-bold">Composition</h2>
          <p className="text-[#0A3D5F] mt-2">
            The Board comprises 10 Directors of whom 6 are Non-Executive
            Directors. Three (3) of the Non-Executive Directors are independent
            as determined by the regulatory and voluntary criteria for
            independence. The profiles of the Directors together with their
            current appointments are given on page 156. The Articles require the
            number of Directors to be between 3 and 12 Directors. Collectively,
            the Board possesses the skills and experience to provide guidance
            and exercise oversight in relation to the operations of the LB
            Finance PLC as set out. The Board is also diverse with regards to
            gender, age, and tenure of service as set out, reflecting the work
            of the Board Nomination and Governance Committee to ensure there are
            diverse views at the Board.
          </p>
        </div>

        {/* A Balanced Board Chart */}
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-[#0A3D5F] font-bold">A Balanced Board</h3>
          <Chart
            options={balancedBoardOptions}
            series={balancedBoardData.series}
            type="bar"
          />
        </div>

        {/* Gender Representation Chart */}
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-[#0A3D5F] font-bold">Gender Representation</h3>
          <Chart
            options={genderChartOptions}
            series={genderChartData.series}
            type="pie"
          />
        </div>

        {/* Age Diversity Chart */}
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-[#0A3D5F] font-bold">Age Diversity</h3>
          <Chart
            options={ageDiversityOptions}
            series={ageDiversityData.series}
            type="bar"
          />
        </div>

        {/* Collective Knowledge Chart */}
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-[#0A3D5F] font-bold">Collective Knowledge</h3>
          <Chart
            options={collectiveKnowledgeOptions}
            series={collectiveKnowledgeData.series}
            type="bar"
          />
        </div>

        {/* Tenure of Services Chart */}
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-[#0A3D5F] font-bold">Tenure of Services</h3>
          <Chart
            options={tenureOptions}
            series={tenureData.series}
            type="bar"
          />
        </div>
      </div>
    </div>
  );
}
