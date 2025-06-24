'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function HumanCapitalPart11() {
  const employeeServiceChart = {
    series: [
      {
        name: 'Male',
        data: [1528, 366, 206, 59, 16],
      },
      {
        name: 'Female',
        data: [1590, 0, 0, 0, 0],
      },
    ],
    options: {
      chart: {
        type: 'bar' as const,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      colors: ['#4169E1', '#FF69B4'],
      xaxis: {
        categories: [
          '0-5 years',
          '6-10 years',
          '11-15 years',
          '16-20 years',
          'Above 20',
        ],
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
      legend: {
        position: 'top' as const,
        horizontalAlign: 'left' as const,
        labels: {
          colors: '#FFFFFF',
        },
      },
      fill: {
        opacity: 1,
      },
    },
  };

  const recruitmentChart = {
    series: [
      {
        name: 'Under 30',
        data: [1070, 66, 0],
      },
      {
        name: '30-50',
        data: [0, 1036, 13],
      },
      {
        name: 'Over 50',
        data: [0, 0, 9],
      },
    ],
    options: {
      chart: {
        type: 'bar' as const,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      colors: ['#32CD32', '#FFA500', '#FF6347'],
      xaxis: {
        categories: ['Male', 'Female', 'Other'],
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
      legend: {
        position: 'top' as const,
        horizontalAlign: 'left' as const,
        labels: {
          colors: '#FFFFFF',
        },
      },
      fill: {
        opacity: 1,
      },
    },
  };

  const provinceRecruitmentChart = {
    series: [
      {
        name: 'Male',
        data: [180, 305, 110, 225, 205, 105, 205, 70, 305],
      },
      {
        name: 'Female',
        data: [220, 295, 90, 175, 195, 95, 195, 130, 295],
      },
    ],
    options: {
      chart: {
        type: 'bar' as const,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      colors: ['#4169E1', '#FF69B4'],
      xaxis: {
        categories: [
          'Central',
          'Eastern',
          'North Central',
          'North Western',
          'Northern',
          'Sabaragamuwa',
          'Southern',
          'Uva',
          'Western',
        ],
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
      legend: {
        position: 'top' as const,
        horizontalAlign: 'left' as const,
        labels: {
          colors: '#FFFFFF',
        },
      },
      fill: {
        opacity: 1,
      },
    },
  };

  const turnoverReasonsChart = {
    series: [767, 838],
    options: {
      chart: {
        type: 'donut' as const,
      },
      labels: ['Resignation', 'Premature retirement'],
      colors: ['#FF6347', '#4169E1'],
      legend: {
        position: 'bottom' as const,
        labels: {
          colors: '#FFFFFF',
        },
      },
    },
  };
  return (
    <div>
      <div className="bg-[#001a4a] text-white p-8">
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-6">HR DASHBOARD</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  src="/images/sustainability/clean-energy-male-female.PNG"
                  alt="Employee Icons"
                  className="w-24 h-24 mr-4"
                  width={300}
                  height={500}
                  style={{ width: '180px' }}
                />
                <div>
                  <h2 className="text-4xl font-bold text-[#3fba82]">4,132</h2>
                  <p>Employees</p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4">
                  <p className="text-2xl font-bold text-[#4169E1]">54%</p>
                  <p>Male</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#FF69B4]">46%</p>
                  <p>Female</p>
                </div>
              </div>
            </div>

            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <h3 className="text-xl font-bold mb-2">
                Employees by Gender and Service Period
              </h3>
              <Chart
                options={employeeServiceChart.options}
                series={employeeServiceChart.series}
                type="bar"
                height={300}
              />
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">
                Recruitments in 2023/24
              </h3>
              <Chart
                options={recruitmentChart.options}
                series={recruitmentChart.series}
                type="bar"
                height={300}
              />
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">
                Province-wise Recruitments in 2023/24
              </h3>
              <Chart
                options={provinceRecruitmentChart.options}
                series={provinceRecruitmentChart.series}
                type="bar"
                height={300}
              />
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">
                Reasons for Turnover vs Gender
              </h3>
              <Chart
                options={turnoverReasonsChart.options}
                series={turnoverReasonsChart.series}
                type="donut"
                height={300}
              />
            </div>

            {/* Add more sections here for Province-wise Staff Allocation, Benefits Provided, etc. */}
          </div>
        </div>
      </div>
    </div>
  );
}
