'use client';

import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function HumanCapitalPart12() {
  const trainingProgramsChartOptions = {
    chart: {
      type: 'pie' as const,
    },
    labels: ['2020', '2021', '2022', '2023', '2024'],
    colors: ['#6495ED', '#FF69B4', '#32CD32', '#FFA500', '#9370DB'],
    legend: {
      position: 'bottom' as const,
      labels: {
        colors: '#FFFFFF',
      },
    },
  };

  const trainingProgramsChartSeries = [137, 103, 39, 21, 10];

  // Average Hours of Training Line Chart
  const avgTrainingHoursChartOptions = {
    chart: {
      type: 'line' as const,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ['2020', '2021', '2022', '2023', '2024'],
      labels: {
        style: {
          colors: '#FFFFFF',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#FFFFFF',
        },
      },
    },
    colors: ['#FFA500'],
    markers: {
      size: 6,
    },
    stroke: {
      curve: 'smooth' as const,
    },
  };

  const avgTrainingHoursChartSeries = [
    {
      name: 'Average Hours',
      data: [2.19, 4.48, 5.84, 10.57, 11.18],
    },
  ];

  return (
    <div>
      <div className="bg-[#001a4a] text-white p-8">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Gender Parity</h2>
              <table className="w-full mb-6">
                <thead>
                  <tr className="bg-[#7f9b65]">
                    <th className="p-2 text-left">Gender parity indicator</th>
                    <th className="p-2 text-right">2023/24 (%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">
                      Female representation at Board level
                    </td>
                    <td className="p-2 text-right">30</td>
                  </tr>
                  <tr>
                    <td className="p-2">
                      Female representation at Senior Management level
                    </td>
                    <td className="p-2 text-right">8</td>
                  </tr>
                  <tr>
                    <td className="p-2">
                      Female representation at Middle Management level
                    </td>
                    <td className="p-2 text-right">17</td>
                  </tr>
                  <tr>
                    <td className="p-2">
                      Female representation at Executive level
                    </td>
                    <td className="p-2 text-right">49</td>
                  </tr>
                  <tr>
                    <td className="p-2">
                      Female representation at Non-Executive level
                    </td>
                    <td className="p-2 text-right">52</td>
                  </tr>
                  <tr>
                    <td className="p-2">Female recruits</td>
                    <td className="p-2 text-right">48</td>
                  </tr>
                  <tr>
                    <td className="p-2">
                      Number of female staff members promoted
                    </td>
                    <td className="p-2 text-right">515 (Head Count)</td>
                  </tr>
                  <tr>
                    <td className="p-2">
                      Average training hours for female staff members
                    </td>
                    <td className="p-2 text-right">15,940.8 Hr</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">
                GRI 404-1 Average Hours of Training per Year per Employee
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p>Male - 7.5</p>
                  <p>Female - 8.5</p>
                  <p className="mt-2">Senior Management and above</p>
                </div>
                <div>
                  <p>Male - 5.9</p>
                  <p>Female - 5.0</p>
                  <p className="mt-2">Executive</p>
                </div>
                <div>
                  <p>Male - 7.5</p>
                  <p>Female - 4.3</p>
                  <p className="mt-2">Non Executives</p>
                </div>
                <div>
                  <p>Male - 5.6</p>
                  <p>Female - 4.8</p>
                  <p className="mt-2">Other</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">
            GRI 404-2 Programs for Upgrading Employee Skills and Transition
            Assistance Programmes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-[#1E90FF] p-4 rounded-lg">
              <h3 className="font-bold mb-2">
                Management development programme
              </h3>
              <p>99 participants</p>
              <p>2,957 training hours</p>
              <p>180 training hours</p>
            </div>
            <div className="bg-[#1E90FF] p-4 rounded-lg">
              <h3 className="font-bold mb-2">One on one coaching sessions</h3>
              <p>2 participants</p>
              <p>40 training hours</p>
              <p>0 training hours</p>
            </div>
            <div className="bg-[#1E90FF] p-4 rounded-lg">
              <h3 className="font-bold mb-2">
                Ultimate leadership program for Gold Loan OIC & second officers
              </h3>
              <p>206 participants</p>
              <p>368 training hours</p>
              <p>1,148 training hours</p>
            </div>
            <div className="bg-[#1E90FF] p-4 rounded-lg">
              <h3 className="font-bold mb-2">
                Ultimate leadership program for Recovery Department
              </h3>
              <p>163 participants</p>
              <p>848 training hours</p>
              <p>456 training hours</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <h3 className="text-xl font-bold mb-2">
                Number of Training Programmes
              </h3>
              <Chart
                options={trainingProgramsChartOptions}
                series={trainingProgramsChartSeries}
                type="pie"
                height={300}
              />
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">
                Average Hours of Training per Employee
              </h3>
              <Chart
                options={avgTrainingHoursChartOptions}
                series={avgTrainingHoursChartSeries}
                type="line"
                height={300}
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">
            Incidents of Discrimination and Corrective Actions Taken
          </h2>
          <table className="w-full">
            <thead>
              <tr className="bg-[#7f9b65]">
                <th className="p-2 text-left">Description</th>
                <th className="p-2 text-right">Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">
                  Number of incidents of discrimination during the reporting
                  period
                </td>
                <td className="p-2 text-right">0</td>
              </tr>
              <tr>
                <td className="p-2">
                  Status of the incidents and actions taken with reference to
                  the following:
                </td>
                <td className="p-2 text-right"></td>
              </tr>
              <tr>
                <td className="p-2 pl-4">
                  i. Incident reviewed by the organisation;
                </td>
                <td className="p-2 text-right">0</td>
              </tr>
              <tr>
                <td className="p-2 pl-4">
                  ii. Remediation plans being implemented;
                </td>
                <td className="p-2 text-right">0</td>
              </tr>
              <tr>
                <td className="p-2 pl-4">
                  iii. Remediation plans that have been implemented, with
                  results reviewed through routine internal management review
                  processes;
                </td>
                <td className="p-2 text-right">0</td>
              </tr>
              <tr>
                <td className="p-2 pl-4">
                  iv. Incident no longer subject to action
                </td>
                <td className="p-2 text-right">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
