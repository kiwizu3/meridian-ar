'use client';

import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function SocialRelationshipCapitalPart8() {
  const investmentChartOptions = {
    chart: {
      type: 'bar' as const,
      stacked: true,
    },
    xaxis: {
      categories: ['2020', '2021', '2022', '2023', '2024'],
    },
    colors: ['#70AD47', '#5B9BD5'],
    legend: {
      position: 'top' as const,
    },
  };

  const investmentChartSeries = [
    {
      name: 'Actual',
      data: [40, 35, 25, 20, 0],
    },
    {
      name: 'Budget',
      data: [0, 0, 0, 0, 10],
    },
  ];

  const keyAreasChartOptions = {
    chart: {
      type: 'donut' as const,
    },
    labels: [
      'Access to education',
      'Knowledge sharing',
      'Community well-being',
      'Build partnerships',
      'Donations',
      'Tree planting',
    ],
    colors: ['#4472C4', '#70AD47', '#00B0F0', '#FFC000', '#ED7D31', '#9DC3E6'],
    legend: {
      position: 'bottom' as const,
    },
  };

  const keyAreasChartSeries = [40, 10, 5, 24, 18, 3];

  return (
    <div>
      <div className="text-black pt-8">
        <div className="bg-white rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-[#333333] mb-4">
                We will continue to adopt a hybrid approach, blending physical
                and digital engagements, to bolster our CSR strategy. We
                anticipate that this &apos;phygital&apos; CSR strategy will be
                crucial in driving significant outcomes in the years ahead.
              </p>
              <p className="text-[#333333] mb-4">
                During the year under review, there were no operations with
                significant actual and potential negative impacts on local
                communities.
              </p>
              <h3 className="font-semibold text-[#333333] mb-2">
                CSR GOVERNANCE
              </h3>
              <p className="text-[#333333]">
                Under the guidance of our senior management, the sustainability
                team at LBF is responsible for determining sustainability
                initiatives and implementing projects aligned with the
                Company&apos;s five CSR pillars.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#333333] mb-2">
                Investment in CSR
              </h3>
              <Chart
                options={investmentChartOptions}
                series={investmentChartSeries}
                type="bar"
                height={300}
              />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-[#333333] mb-2">
              Key Areas Supported to Community
            </h3>
            <Chart
              options={keyAreasChartOptions}
              series={keyAreasChartSeries}
              type="donut"
              height={300}
            />
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 bg-[#C55A11] text-white p-2 rounded">
              Corporate Social Responsibility
            </h2>
            <h3 className="font-semibold text-[#333333] mb-2">
              Access to education
            </h3>
            <p className="text-[#333333] mb-4">
              We advocate that quality education across all levels serves as the
              cornerstone for mitigating inequalities and fostering sustainable
              socio-economic development over the long haul. Within LBF&apos;s
              CSR strategy, priority is given to enhancing education access with
              the goal of eradicating the enduring knowledge gap prevalent in
              Sri Lanka. Additionally, as a responsible financial institution,
              we recognize our significant role in enhancing digital literacy
              among the broader community. This, in turn, fosters the
              development of self-sustaining communities capable of driving
              economic growth.
            </p>

            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">
                    Project
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    Description
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    Achievement
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    Employee volunteerism (hours)
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    Expenditure (Rs.)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">
                    &apos;Chathurmasai&apos;: The Inter-University Talent
                    Competition
                  </td>
                  <td className="border border-gray-300 p-2">
                    Talent show for University students. 500+ contestants from
                    14 universities participated in the inter-university talent
                    show, LBF was the Diamond sponsor for this competition which
                    was organised by the Accounting and Financial Management
                    Association (AFMA), the student body of the Department of
                    Accounting, Faculty of Management Studies and Commerce,
                    University of Sri Jayewardenepura.
                  </td>
                  <td className="border border-gray-300 p-2">
                    <ul className="list-disc list-inside">
                      <li>Showcasing Diverse Skills</li>
                      <li>Promoting Confidence and Self-esteem</li>
                      <li>Fostering Creativity and Innovation</li>
                      <li>Building Teamwork and Collaboration</li>
                      <li>Stress Relief and Entertainment</li>
                      <li>Enhancing Event Management Skills</li>
                    </ul>
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    224
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    350,000/-
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    Empowering Future Technologists
                  </td>
                  <td className="border border-gray-300 p-2">
                    The project aims to provide essential computer resources to
                    students facing financial difficulties, with a specific
                    focus on supporting Mr. Yalitha Kankanamage Rushan
                    Chamikara. Mr. Chamikara is a dedicated student enrolled in
                    the BSc in Electronics and Automation Technologies degree
                    programme at the University of Colombo.
                  </td>
                  <td className="border border-gray-300 p-2">
                    <ul className="list-disc list-inside">
                      <li>Equal Opportunity</li>
                      <li>Increased Engagement and Participation</li>
                      <li>Reduction of Barriers to Education</li>
                    </ul>
                  </td>
                  <td className="border border-gray-300 p-2 text-center">42</td>
                  <td className="border border-gray-300 p-2 text-center">
                    185,000/-
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
