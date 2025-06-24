'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function HumanCapitalPart2() {
  const chartOptions = {
    chart: {
      type: 'line' as const,
      height: 350,
      foreColor: '#000',
    },
    xaxis: {
      categories: ['2020', '2021', '2022', '2023', '2024'],
    },
    yaxis: {
      title: {
        text: 'No. of Employees',
      },
    },
    stroke: {
      curve: 'smooth' as const,
    },
    colors: ['#4CAF50'],
  };

  const chartSeries = [
    {
      name: 'No. of Employees',
      data: [3000, 3500, 4000, 4500, 5000],
    },
  ];

  return (
    <div>
      <div className="bg-white text-black p-8">
        <div className="w-full">
          <div className="bg-[#aca1cc] text-white rounded-lg p-6 mb-8">
            <p className="text-lg">
              At LBF, our employees are more than just a workforce; they are the
              guardians of our business, the engine driving our competitive
              advantage, and the architects of our success. We are committed to
              their well-being, offering a holistic employee value proposition
              that caters to both personal aspirations and organisational
              objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">
                MANAGEMENT APPROACH
              </h2>
              <p>
                By investing in our employees and strengthening relationships,
                we create a positive work environment that translates into
                exceptional customer experiences. We do this by anticipating
                employee needs and providing resources and assistance to ensure
                their well-being and job satisfaction. Moreover, in addition to
                skills and competency development, we foster a culture of open
                communication, collaboration, and recognition, making employees
                feel valued and connected to the organisation.
              </p>
            </div>
            <div className="rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">
                COMPONENTS OF HUMAN CAPITAL
              </h2>
              <ul className="list-disc list-inside">
                <li>EMPLOYEE VALUE PROPOSITION</li>
                <li>HR GOVERNANCE</li>
                <li>TALENT MANAGEMENT</li>
                <li>TALENT RETENTION</li>
              </ul>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                NURTURING HUMAN CAPITAL
              </h3>
              <ul className="list-disc list-inside">
                <li>Training and development</li>
                <li>Work-life balance</li>
                <li>Diversity and equal opportunity</li>
                <li>Grievance handling</li>
                <li>Health and well-being</li>
                <li>Employee engagement</li>
              </ul>
            </div>
            <div className="rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">
                CONTRIBUTING TO OUR MISSION
              </h2>
              <p>
                To use training and career development to create an
                appropriately empowered group of employees who will drive the
                Company&apos;s vision of achievement.
              </p>
              <h2 className="text-2xl font-semibold mt-4 mb-2">
                CONTRIBUTION TO OUR VALUES
              </h2>
              <div>
                <p className="mb-2">Excellence</p>
                <p className="mb-2">Innovation</p>
                <p className="mb-2">Professionalism</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">
                STAKEHOLDERS IMPACTED
              </h2>
              <div className="flex justify-center">
                <Image
                  src="/images/sustainability/clean-energy-stakeholders.PNG"
                  alt="STAKEHOLDERS"
                  width={200}
                  height={100}
                  style={{ width: '200px' }}
                />
              </div>
            </div>
            <div className="rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">MATERIAL MATTERS</h2>
              <ul className="list-disc list-inside">
                <li>Skills development and competencies</li>
                <li>Data science and analytics</li>
                <li>Health and well-being</li>
                <li>Employee engagement</li>
                <li>Tech-savvy trained employees</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              COMMITMENTS TO UN SDGs
            </h2>
            <div className="flex justify-left">
              <Image
                src="/images/sustainability/clean-energy-commitements.PNG"
                alt="STAKEHOLDERS"
                width={300}
                height={150}
                style={{ width: '250px' }}
              />
            </div>
          </div>

          <div className="rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">LOOKING AHEAD</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Short-term</h3>
                <ul className="list-disc list-inside">
                  <li>
                    Strengthen the talent management process by strengthening
                    performance evaluation procedures
                  </li>
                  <li>Drive a competitive reward strategy at all levels</li>
                  <li>Embrace diversity in the workforce</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Medium-term</h3>
                <ul className="list-disc list-inside">
                  <li>
                    Continue to embed sustainability leadership and values
                    rollout across the organisation
                  </li>
                  <li>
                    Having finalised the agile working policy, we have now
                    transitioned towards a hybrid business-as-usual cadence
                  </li>
                  <li>Implement a fit for purpose Human Capital System</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Long-term</h3>
                <ul className="list-disc list-inside">
                  <li>
                    Continue on the journey of expediting our digital
                    transformation
                  </li>
                  <li>
                    Continuously digitising, automating and aligning people
                    processes with known methods
                  </li>
                  <li>
                    Using mobile learning and other business technologies to
                    change the environment for continuous learning that was
                    created by our digital learning approach
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">No. of Employees</h2>
            <Chart
              options={chartOptions}
              series={chartSeries}
              type="line"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
