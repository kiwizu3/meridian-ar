'use client';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
const chartOptions = {
  chart: {
    type: 'bar' as const,
    height: 350,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  xaxis: {
    categories: ['2020', '2021', '2022', '2023', '2024'],
  },
  yaxis: {
    title: {
      text: 'Number of Employees',
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val: number) {
        return val + ' employees';
      },
    },
  },
  colors: ['#8884d8'],
};

const chartSeries = [
  {
    name: 'Employees',
    data: [1000, 2000, 3000, 4000, 5000],
  },
];

const genderServicePeriodChartOptions: ApexOptions = {
  chart: {
    type: 'line',
    height: 350,
  },
  series: [
    {
      name: 'Male',
      data: [1590, 198, 133, 59, 16],
    },
    {
      name: 'Female',
      data: [1528, 366, 206, 53, 12],
    },
  ],
  xaxis: {
    categories: [
      '<5 years',
      '6-10 years',
      '11-15 years',
      '16-20 years',
      '>20 years',
    ],
  },
};

const ageCategoryChartOptions: ApexOptions = {
  chart: {
    type: 'bar',
    height: 350,
  },
  series: [
    {
      name: 'Below 30',
      data: [26, 189, 1, 0],
    },
    {
      name: '30-50',
      data: [14, 667, 37, 5],
    },
    {
      name: 'Over 50',
      data: [0, 28, 7, 0],
    },
  ],
  xaxis: {
    categories: ['Senior Management', 'Executives', 'Clerical', 'Minor'],
  },
};

const provinceEmploymentChartOptions: ApexOptions = {
  chart: {
    type: 'bar',
    height: 350,
  },
  series: [
    {
      name: 'Full time',
      data: [2256, 38, 198, 131, 164, 145, 150, 70, 2311],
    },
    {
      name: 'Contract',
      data: [5, 0, 4, 2, 6, 7, 3, 0, 9],
    },
  ],
  xaxis: {
    categories: [
      'Western',
      'Southern',
      'Central',
      'North Western',
      'North Central',
      'Sabaragamuwa',
      'Eastern',
      'Uva',
      'Northern',
    ],
  },
};

const genderRecruitmentChartOptions: ApexOptions = {
  chart: {
    type: 'bar',
    height: 350,
  },
  series: [
    {
      name: 'Male',
      data: [1075, 66, 4],
    },
    {
      name: 'Female',
      data: [1036, 13, 1],
    },
  ],
  xaxis: {
    categories: ['Under 30', '30-50', 'Over 50'],
  },
};

const provinceRecruitmentChartOptions: ApexOptions = {
  chart: {
    type: 'bar',
    height: 350,
  },
  series: [
    {
      name: 'Male',
      data: [108, 70, 28, 95, 81, 40, 91, 19, 89],
    },
    {
      name: 'Female',
      data: [48, 93, 14, 47, 64, 48, 29, 20, 43],
    },
  ],
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
  },
};

const turnoverChartOptions: ApexOptions = {
  chart: {
    type: 'bar',
    height: 350,
  },
  series: [
    {
      name: 'Male',
      data: [656, 170, 13],
    },
    {
      name: 'Female',
      data: [691, 75, 1],
    },
  ],
  xaxis: {
    categories: ['Under 30', '30-50', 'Over 50'],
  },
};

const provinceTurnoverChartOptions: ApexOptions = {
  chart: {
    type: 'bar',
    height: 350,
  },
  series: [
    {
      name: 'Male',
      data: [70, 58, 23, 45, 38, 29, 72, 22, 82],
    },
    {
      name: 'Female',
      data: [38, 64, 15, 40, 51, 36, 37, 24, 50],
    },
  ],
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
  },
};

const turnoverReasonsChartOptions: ApexOptions = {
  chart: {
    type: 'pie',
    height: 350,
  },
  series: [767, 94, 838],
  labels: ['Resignation', 'Premature Retirement', 'Other Reasons'],
};

const staffPromotionsChartOptions: ApexOptions = {
  chart: {
    type: 'bar',
    height: 350,
  },
  series: [
    {
      name: 'Female',
      data: [0, 8, 4],
    },
    {
      name: 'Male',
      data: [33, 118, 2],
    },
  ],
  xaxis: {
    categories: ['Senior management', 'Middle management', 'Executives'],
  },
};

const trainingProgramsChartOptions: ApexOptions = {
  chart: {
    type: 'pie',
    height: 350,
  },
  series: [137, 39, 21, 103],
  labels: ['2023', '2022', '2021', '2020'],
};

const investmentTrainingChartOptions: ApexOptions = {
  chart: {
    type: 'bar',
    height: 350,
  },
  series: [
    {
      name: 'Investment in Training & Development per Employee (Rs.)',
      data: [30, 45, 60, 75, 100],
    },
  ],
  xaxis: {
    categories: ['2020', '2021', '2022', '2023', '2024'],
  },
};

const averageTrainingHoursChartOptions: ApexOptions = {
  chart: {
    type: 'line',
    height: 350,
  },
  series: [
    {
      name: 'Average Hours of Training per Employee',
      data: [14.64, 2.19, 4.65, 3.1, 10.87],
    },
  ],
  xaxis: {
    categories: ['2020', '2021', '2022', '2023', '2024'],
  },
};

export default function HumanCapita() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col gap-6">
      <div>
        <div className="overflow-x-auto">
          <img
            className="max-w-none"
            src="/images/annual-report/finance_capital/human-capital.png"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-6">
        {/* Main Content */}
        <div className=" bg-white text-black p-6 rounded-lg">
          <p className="mb-4">
            At LBF, our employees are more than just a workforce; they are the
            guardians of our business, the engine driving our competitive
            advantage, and the architects of our success. We are committed to
            their well-being, offering a holistic employee value proposition
            that caters to both personal aspirations and organisational
            objectives.
          </p>

          {/* Management Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                MANAGEMENT APPROACH
              </h3>
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
            <div>
              {/* Components of Human Capital */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  COMPONENTS OF HUMAN CAPITAL
                </h3>
                <ul className="list-disc list-inside">
                  <li>EMPLOYEE VALUE PROPOSITION</li>
                  <li>HR GOVERNANCE</li>
                  <li>TALENT MANAGEMENT</li>
                  <li>TALENT RETENTION</li>
                </ul>
              </div>

              {/* Nurturing Human Capital */}
              <div>
                <h3 className="text-xl font-semibold mb-2">
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
            </div>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <td
                    rowSpan={2}
                    className="py-2 px-4 text-left text-sm font-semibold text-blue"
                  >
                    <p> STRATEGIC PRIORITIES </p>
                  </td>
                  <td
                    rowSpan={2}
                    className="py-2 px-4 text-left text-sm font-semibold text-blue"
                  >
                    <p>PROGRESS IN FY 2023/24</p>
                  </td>
                  <td
                    colSpan={3}
                    className="py-2 px-4 text-left text-sm font-semibold text-blue"
                  >
                    <p className="text-center">LOOKING AHEAD</p>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4 text-left text-sm font-semibold text-blue">
                    <p>Short-term</p>
                  </td>
                  <td className="py-2 px-4 text-left text-sm font-semibold text-blue">
                    <p> Medium-term</p>
                  </td>
                  <td className="py-2 px-4 text-left text-sm font-semibold text-blue">
                    <p className="">Long-term</p>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    Scope, design and update Group Human Capital frameworks and
                    processes and Invest in developing a competency
                  </td>
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    3D orientation programmes were conducted (Dream, Dare and
                    Deliver with LB Finance){' '}
                  </td>
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    Strengthen the talent acquisition process by strengthening
                    screening and evaluation procedures
                  </td>
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    Continue to embed the culture, leadership and values rollout
                    within the organisation
                  </td>
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    Continue on the journey of implanting our digital ways of
                    work
                  </td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    Promote employee wellness programme and encourage work life
                    balance
                  </td>
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    31 events and activities conducted to enhance employee
                    engagement
                  </td>
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    {' '}
                    Drive a competitive reward strategy at all levels
                  </td>
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    Having finalised the target operating model, we have now
                    transitioned activities to the business-as usual cadence
                  </td>
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    {' '}
                    Continuously digitising, automating and aligning people
                    practices to best known methods
                  </td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    Developing an in-house training plan to comprehensively
                    manage training needs of all employees
                  </td>
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    {' '}
                    103 training programmes were conducted during the year
                  </td>
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    {' '}
                    Embrace diversity to build a future-ready workforce
                  </td>
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    {' '}
                    Implement a f it for purpose Human Capital System
                  </td>
                  <td className="py-2 px-4 text-sm text-blue align-top">
                    Using mobile learning and other business technology to
                    enhance the environment for continuous learning that was
                    created by our digital learning approach
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Side Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
          {/* Contributing to Our Mission */}
          <div className="bg-white text-black p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              CONTRIBUTING TO OUR MISSION
            </h3>
            <p>
              To use training and career development to create an empowered and
              committed group of employees who will drive the Company to high
              levels of achievement.
            </p>
          </div>

          {/* Contributing to Our Values */}
          <div className="bg-white text-black p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              CONTRIBUTING TO OUR VALUES
            </h3>
            <div className="flex justify-center">
              <img
                src="/images/charts/capitalReport/HumanCapitalReports/values.png"
                alt="values"
              />
            </div>
          </div>
          <div className="bg-white text-black p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              STAKEHOLDERS IMPACTED
            </h3>
            <div>
              <img
                src="/images/charts/capitalReport/HumanCapitalReports/stakeholdersImpacted.png"
                alt="stakeholder impacted"
              />
            </div>
          </div>
          {/* Material Matters */}
          <div className="bg-white text-black p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">MATERIAL MATTERS</h3>
            <ul className="list-disc list-inside">
              <li>Skills development and competencies</li>
              <li>Data science and analytics</li>
              <li>Health and well-being</li>
              <li>Employee engagement</li>
              <li>Tech-savvy trained employees</li>
            </ul>
          </div>

          {/* Commitments to UN SDGs */}
          <div className="bg-white text-black p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              COMMITMENTS TO UN SDGs
            </h3>
            <div className="flex justify-center">
              <img
                src="/images/charts/capitalReport/HumanCapitalReports/commitment.png"
                alt="values"
              />
            </div>
          </div>

          {/* Employee Chart */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-[#0A3D5F]">
              No. of Employees
            </h3>
            <div>
              <div className="p-4 flex flex-col items-center">
                <img
                  src="/images/charts/capitalReport/HumanCapitalReports/no-of-employees.PNG"
                  alt="No. Of Employees"
                  className="mb-4 rounded-lg"
                />
              </div>
              {/* <Chart
                options={chartOptions}
                series={chartSeries}
                type="bar"
                height={350}
              /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid grid-cols-1 gap-6">
        {/* Capital Trade-off Section */}
        <div className="text-white rounded-lg">
          <h2 className="pb-2 border-b-1 text-center">CAPITAL TRADE-OFF</h2>
          <h3 className="py-2 text-center">
            Employee training and development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-[#d1dff2] rounded-t-lg text-center">
              <h4 className="font-bold bg-[#0989ca] p-2 rounded-t-lg">FC</h4>
              <p className='p-2 text-black'> Investments in training and development </p>
            </div>
            <div className="bg-[#fadde9] rounded-t-lg text-center">
            <h4 className="font-bold bg-[#ef56a0] p-2 rounded-t-lg">IC</h4>
              <p className='p-2 text-black'>Improves productivity and tacit knowledge </p>
            </div>
            <div className="bg-[#e7f0d4] rounded-t-lg text-center">
            <h4 className="font-bold bg-[#97c839] p-2 rounded-t-lg">NC</h4>
              <p className='p-2 text-black'>
                Productive employees improve efficiency contributing to less
                consumption of resources
              </p>
            </div>
            <div className="bg-[#e7f0d4] rounded-t-lg text-center">
            <h4 className="font-bold bg-[#a67e35] p-2 rounded-t-lg">MC</h4>
              <p className='p-2 text-black'>
                Exceptional customer service through trained and skilled staff
              </p>
            </div>
          </div>
          <h3 className="py-2 text-center">
            Employee well-being and work-life balance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-[#d1dff2] rounded-t-lg text-center">
            <h4 className="font-bold bg-[#0989ca] p-2 rounded-t-lg">FC</h4>
              <p className='p-2 text-black'>Financial resources to enhance employee engagement </p>
            </div>
            <div className="bg-[#fadde9] rounded-t-lg text-center">
            <h4 className="font-bold bg-[#ef56a0] p-2 rounded-t-lg">IC</h4>
              <p className='p-2 text-black'>Nurtures a productive and motivated team </p>
            </div>
            <div className="bg-[#e7f0d4] rounded-t-lg text-center">
            <h4 className="font-bold bg-[#97c839] p-2 rounded-t-lg">NC</h4>
              <p className='p-2 text-black'>
                Employees volunteering to engage in environmental conservation
                initiatives
              </p>
            </div>
            <div className="bg-[#e3e1e0] rounded-t-lg text-center">
            <h4 className="font-bold bg-[#8c8e90] p-2 rounded-t-lg">MC</h4>
              <p className='p-2 text-black'> Employees volunteering to engage in CSR initiatives </p>
            </div>
          </div>
        </div>
        {/* Employee Value Proposition */}
        <div className="bg-white text-[#0A3D5F] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            EMPLOYEE VALUE PROPOSITION
          </h2>
          <p className="mb-4">
            Our comprehensive employee value proposition is the cornerstone of
            our talent strategy. It not only fosters employee retention but also
            attracts top talent who aligns with the Organisation’s aspirations.
            This includes nurturing collective knowledge, ensuring employee
            satisfaction, and aligning individual goals with organisational
            objectives.
          </p>
          <p className="mb-4">
            To strengthen our culture, we relaunched our corporate values, and
            clearly defined each value to guide employee behaviours and inspire
            them to become powerful brand ambassadors.
          </p>
          <p>
            Furthermore, we are in the process of implementing a recognition
            point scheme to reward employees who exemplify our core values in
            their daily work. This, along with our core value index integrated
            into performance evaluations, reinforces a sense of pride and
            belonging within the LBF community.
          </p>
        </div>

        {/* HR Governance Structure */}
        <div className="bg-white text-[#0A3D5F] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">HR GOVERNANCE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <img
                src="/images/annual-report/hr-goverance.png"
                alt="hr goverance structure"
              />
            </div>
            <div className="space-y-4">
              <p>
                Our Human Resource Department (HRD) centrally manages all
                aspects of HR governance. Led by the Head of HR, who reports
                directly to the Deputy Managing Director, the HRD ensures
                alignment with the company’s strategic goals. The Head of HR
                also collaborates closely with the Board Human Resources and
                Remuneration Committee and the Nominations Committee on relevant
                HR matters.
              </p>
              <p>
                Under the Head of HR’s supervision, the HRD guarantees full
                compliance with all applicable labour laws and regulations.
                Furthermore, the department oversees the execution of human
                capital development initiatives, ensuring alignment with the
                Company’s overall business strategy and the evolving needs of
                its workforce.
              </p>
              <p>
                As part of our ongoing commitment to maintaining a fair and
                compliant work environment, we have recently reviewed and
                updated two key HR policies:
              </p>
              <p>
                <strong>Whistle-blowing Policy:</strong>
                The revised policy clarifies reporting procedures and
                strengthens protections for employees who raise concerns about
                potential misconduct. E-campaigns and quizzes were initiated to
                educate the staff on this.
              </p>
              <p>
                <strong>Working Hours and Leave Policy:</strong> The updated
                policy ensures alignment with current labour regulations and
                provides greater flexibility for employees to manage their
                work-life balance.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white text-[#0A3D5F] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            {' '}
            Modernising Our HR Functions
          </h2>
          <p className="mb-4">
            {' '}
            We have transitioned from traditional HR practices to a more
            strategic and employee-centric approach. This includes:{' '}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#59328F] p-6 rounded-lg text-white">
              <h2 className="text-xl font-semibold mb-4">
                Data-Driven Decision Making
              </h2>
              <p>
                Utilising data and analytics to inform HR strategies and measure
                the effectiveness of our initiatives.
              </p>
            </div>
            <div className="bg-blue p-6 rounded-lg text-white">
              <h2 className="text-xl font-semibold mb-4">
                Technology Adoption
              </h2>
              <p>
                Implementing HR technology solutions to streamline processes,
                enhance communication, and improve the employee experience. This
                also includes providing IT-related training to our employees to
                nurture a tech-savvy workforce.
              </p>
            </div>
            <div className="bg-[#C8910A] p-6 rounded-lg text-white">
              <h2 className="text-xl font-semibold mb-4">
                Focus on Employee Experience
              </h2>
              <p>
                Prioritising employee feedback and creating a positive and
                engaging workplace culture.
              </p>
            </div>
          </div>
        </div>

        {/* Our Winning Team */}
        <div className="bg-white text-blue p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Our Winning Team</h2>
          <p>
            Our team of 4,132 employees are the driving force behind our success
            and a key source of our competitive advantage. We are proud to be an
            equal opportunity employer, fostering a diverse and inclusive
            workplace where individuals are valued for their unique talents and
            contributions. We do not discriminate based on gender, age,
            religion, race, or any other factor, ensuring a level playing f ield
            and equal opportunities for all. The following provides a snapshot
            of our diverse team composition comprising 2,237 men and 1,895 women
            in FY 2023/24.
          </p>
        </div>

        {/* Recruitment */}
        <div className="bg-white text-blue p-6 rounded-lg ">
          <h2 className="text-xl font-semibold mb-4">Recruitment</h2>
          <p>
            Attracting and retaining top talent is crucial to our continued
            success. We seek individuals who not only possess the necessary
            skills and experience but also embody diverse perspectives and
            values that align with our business model. Our recruitment strategy
            is tailored to the specific requirements of each position, utilising
            a combination of targeted sourcing and selection methods. Our
            diverse recruitment channels include career fairs, industry
            partnerships, walk-in interviews, and a strong employee referral
            programme. Furthermore, with 200 branches nationwide, we offer our
            employees a continuous flow of internal career opportunities,
            fostering growth and development within the Organisation.
          </p>
          <p className="mt-4">
            Our <strong>“Discover You”</strong> career guidance programme,
            launched in March 2024, assists undergraduates and A-Level students
            in making informed career choices. Additionally, we provide
            employment opportunities through our
            <strong>“NextGen”</strong> programme, currently with 80 candidates.
          </p>
          <p className="mt-4">
            Moreover, we offer Management Trainee programmes for undergraduates
            and Clerical Trainee programmes for A-level students, providing them
            with valuable experience and development opportunities. During the
            year 2,194 individuals joined the LBF team.
          </p>
        </div>
        {/* Addressing Attrition */}
        <div className="bg-white text-blue p-6 rounded-lg ">
          <h2 className="text-xl font-semibold mb-4">Employee Turnover</h2>
          <p>
            We experienced the resignation of 1,605 employees and the premature
            retirement of one employee, leading to an attrition rate of 41.7%.
          </p>
          <h2 className="text-lg font-semibold my-4">Addressing Attrition</h2>
          <p>
            We experienced a higher attrition rate within the Leasing and Gold
            Loan segments, particularly during the first year of employment. We
            implemented the following strategies to address this challenge and
            retain valuable talent.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              <strong>Assessment and Career Development Programme:</strong>Our
              focus on attracting school leavers is coupled with comprehensive
              development programmes aimed at nurturing and retaining
              high-potential employees.
            </li>
            <li>
              <strong>60 Days Buddy Programme:</strong> We offer a comprehensive
              60-day buddy programme, wherein each new recruit is paired with a
              dedicated buddy. This buddy serves both a mentor and a supportive
              guide, assisting the new comer in navigating their new role and
              providing a continuous support throughout their integration
              process.
            </li>
            <li>
              <strong>Marketing Officer Development Programme:</strong>{' '}
              Professional Certification in Credit & Marketing is a special
              three-day certification program designed to upskill and retain top
              performers within the Credit Department.
            </li>
            <li>
              <strong>Staff Development Programmes:</strong> Provides targeted
              training and development opportunities for employees in various
              roles, including the Marketing Officer Development Programme for
              the second management tier.
            </li>
            <li>
              <strong>Leadership Development Programme:</strong> At LBF we have
              initiated “Leadership Development Programmes” designed at
              identifying employees with inherent leadership qualities.
              Following thorough performance evaluations, individuals
              demonstrating potential undergo specialized training to refine
              their leadership skills. This proactive approach also enables us
              to entrust them with new responsibilities within their job roles.
            </li>
            <li>
              <strong>Performance Recognition:</strong> We offer exclusive
              programmes to acknowledge and reward high-performing employees.
            </li>
            <li>
              <strong>Best Starters Programme:</strong> Recognises and rewards
              high-performing new recruits.
            </li>
          </ul>
        </div>

        {/* Health and Well-being */}
        <div className="bg-white text-blue p-6 rounded-lg ">
          <h2 className="text-xl font-semibold mb-4">Health and Well-being</h2>
          <p>Employee Health and Safety Initiatives:</p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              We have appointed a dedicated Safety Officer responsible for
              overseeing all aspects of fire safety training and other
              safety-related training programmes at the branch level.
            </li>
            <li>
              Our Administration Department has a designated Safety Auditor who
              conducts comprehensive safety audits to identify and mitigate
              potential risks across all branches.
            </li>
            <li>
              We have a team of Technical Officers who provide specialised
              support and expertise in various safety-related areas.
            </li>
          </ul>
        </div>
        <div className="bg-white text-blue p-6 rounded-lg ">
          <h1 className="text-2xl font-bold mb-6">
            ENHANCING EMPLOYEE VALUE PROPOSITION (EVP)
          </h1>
          <p>
            We are committed to providing a comprehensive EVP that fosters
            employee well-being and engagement. Our focus areas include:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              <strong>Holistic Development:</strong> We go beyond professional
              development to support our employees&#39; moral and character
              development, creating a positive and ethical work environment.
            </li>
            <li>
              <strong>Work-Life Balance:</strong> We promote a healthy work-life
              balance through flexible work arrangements, wellness initiatives,
              and programmes that support employee well-being.
            </li>
            <li>
              <strong>Teamwork and Collaboration:</strong> We foster a
              collaborative culture that values teamwork, communication, and
              mutual support.
            </li>
            <li>
              <strong>Motivation and Engagement:</strong> Recognising the needs
              of our younger generation workforce, we have implemented
              initiatives to boost employee motivation and engagement. These
              include modern communication channels, recognition programmes, and
              opportunities for growth and development.<br></br>
              During the year under review, the LB Service Excellence Awards was
              held to recognise and reward employees who have served the Company
              for over 10 and 15 years. Accordingly, 537 employees were awarded
              gold coins for their dedicated service to the Company.
            </li>
            <li>
              <strong>Recognition and Rewards:</strong> Launching the LB
              Pinnacle Club, The Achiever’s Fraternity, in tandem with the
              performance evaluations and award conferment of Branch Managers of
              Credit Department after analysing their Branch performance, is a
              strategic move to recognise outstanding performance. Categorising
              members into Platinum Elite, Platinum, Gold, and Silver tiers adds
              a competitive yet motivating dimension to the initiative. Offering
              a variety of rewards tailored to each category allows individuals
              to select rewards that resonate with their preferences and
              aspirations, thus further boosting their morale and engagement.
            </li>
          </ul>
          <p className="my-4">
            Employees in positions ranging from Marketing Officer to Assistant
            Manager within each category are eligible to receive a recognition
            badge based on their performance metrics such as Target achievement
            and Weighted Average Lending Rate. The quarterly top 5 performers
            from each branch category have the opportunity to join LB Silver
            Circle fostering healthy competition within the organisation while
            motivating employees to strive for excellence.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 rounded-lg bg-[#e6e3f1] p-6'>
            <div className='flex justify-center'>
              <div className='w-1/2'><img src="/images/charts/capitalReport/HumanCapitalReports/awards.png" alt="award" className='w-full' /></div>
              
            </div>
            <div className='flex justify-center'>
              <div className='w-1/2'><img src="/images/charts/capitalReport/HumanCapitalReports/award2.png" alt="award" className='w-full' /></div>
            </div>
          </div>
        </div>

        {/* Supporting Employee Health, Well-being and Work-life Balance */}
        <div className="bg-white rounded-lg">
          <h1 className="text-2xl font-bold text-blue p-6">
            SUPPORTING EMPLOYEE HEALTH, WELL-BEING AND WORK-LIFE BALANCE
          </h1>
          <p className="px-6 text-blue">
            Investing in our employees’ well-being creates a positive and
            productive work environment that benefits everyone. Going beyond
            traditional medical insurance, we offer a comprehensive programme
            addressing both the mental and physical health of our employees.{' '}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {/* Mental Well-being */}
            <div className="bg-white text-blue p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Mental Well-being</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  SMILE Counselling Programme – Provides free and confidential
                  access to external consultants for all employees seeking
                  support with personal or work-related challenges.
                </li>
                <li>
                  ‘Battle of Minds’ quiz competition was conducted across all 9
                  provinces encompassing two categories, Provincial and
                  Departmental.
                </li>
              </ul>
            </div>

            {/* Physical Well-being */}
            <div className="bg-white text-blue p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">
                Physical Well-being
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Post-work fitness sessions organised by Fitness Feb with
                  monthly themes, encouraging employee participation and team
                  building
                </li>
                <li>
                  Employees at branch locations enjoy complimentary access to
                  gym facilities for maintaining physical fitness
                </li>
                <li>
                  Annual regional sports events fostering teamwork, friendly
                  competition, and physical activity
                </li>
                <li>
                  Opportunities for employees to engage in competitive sports
                  and showcase their talents through the Mercantile tournaments
                </li>
                <li>
                  Outward bound training for team building and to enhance
                  communication, collaboration, and problem-solving skills
                </li>
                <li>
                  Regional events including head office and inter-branch sports
                  days
                </li>
                <li>
                  Organised free eye campaigns, hearing screening tests and
                  health campaigns
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* HR Event Gallery */}
        <div>
          <h1 className="text-2xl font-bold">HR EVENT GALLERY</h1>
        </div>

        <div className="bg-white text-blue p-6 rounded-lg ">
          <h2 className="text-xl font-semibold mb-4">Fitness Feb</h2>
          <p>
            An initiative was launched to prioritise health and promote fitness
            among staff throughout the month. Recognising the crucial role of
            workplace fitness in enhancing employee well-being and creating a
            safer, healthier, and more productive environment, the program aimed
            to reduce stress and absenteeism while boosting mental health and
            job satisfaction. Additionally, daily e-flyers were circulated to
            educate staff on valuable health information.
          </p>

          <div className="mt-4">
            <h3 className="font-semibold">
              Biggest Loser (Weight Losing Competition)
            </h3>
            <p>
              A 29-day fitness challenge took place in February, to lose the
              most weight to become the ‘Biggest Loser.’ Impressively, three
              employees emerged as winners with the top performer losing an
              astounding 13.7 kilograms.
            </p>

            <h3 className="font-semibold mt-4">
              Weekly workouts/CrossFit Sessions
            </h3>
            <p>
              We implemented a CrossFit program for our staff, held twice weekly
              at the corporate office. Due to unexpectedly rapid health
              improvements and popular demand, the programme was expanded to
              include additional days, kickboxing, and workshops. The
              participants experienced remarkable results.
            </p>

            <h3 className="font-semibold mt-4">Weekly Yoga</h3>
            <p>
              We also arranged special yoga sessions for our staff every
              Wednesday at the Corporate Office focusing on promoting a healthy
              mental lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <img
              src="/images/annual-report/hr-event-1.png"
              alt="Fitness Feb 1"
              className="rounded-lg"
            />
            <img
              src="/images/annual-report/hr-even-2.png"
              alt="Fitness Feb 2"
              className="rounded-lg"
            />
            <img
              src="/images/annual-report/hr-event-3.png"
              alt="Fitness Feb 3"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="bg-white text-blue p-6 rounded-lg ">
          <h2 className="text-xl font-semibold mb-4">LB Battle of Minds</h2>
          <p>
            LB Battle of Minds 2024 was a successful grand quiz competition
            initiated for the very first at LB Finance to foster an unbreakable
            spirit of knowledge of staff and to boost self confidence while
            giving prominence to competitive learning.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <img
              src="/images/annual-report/hr-event-4.png"
              alt="Battle of Minds 1"
              className="rounded-lg"
            />
            <img
              src="/images/annual-report/hr-event-5.png"
              alt="Battle of Minds 2"
              className="rounded-lg"
            />
            <img
              src="/images/annual-report/hr-event-6.png"
              alt="Battle of Minds 3"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="bg-white text-blue p-6 rounded-lg ">
          <h2 className="text-xl font-semibold mb-4">
            &#34;Merry & Bright&#34; Great Christmas Tree Competition
          </h2>
          <p>
            The Great Christmas Tree Contest Season 06, themed &#34;Merry &
            Bright,&#34; successfully promoted eco-friendly practices during the
            holiday season. By encouraging the use of sustainable materials and
            fostering creativity, the event raised awareness about environmental
            responsibility while strengthening team spirit and creating a
            memorable experience for employees.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <img
              src="/images/annual-report/hr-event-7.png"
              alt="Merry & Bright 1"
              className="rounded-lg"
            />
            <img
              src="/images/annual-report/hr-event-8.png"
              alt="Merry & Bright 2"
              className="rounded-lg"
            />
            <img
              src="/images/annual-report/hr-event-9.png"
              alt="Merry & Bright 3"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Regional Events */}
        <div className="bg-white text-blue p-6 rounded-lg ">
          <h2 className="text-xl font-semibold mb-4">Regional Events</h2>
          <p>
            Organising regional engagement events like sports days and themed
            get-togethers for staff across the island was a fantastic initiative
            that fostered leadership skills and promoted unity among staff.
            Regional Heads were empowered to plan and execute these events,
            allowing for a decentralised approach. The success of the sports
            days and themed get-togethers in 12 and 13 regions respectively
            demonstrates the effectiveness of this strategy. The variety of
            activities provided a sense of community, fostering a positive work
            culture and enhancing morale. These events not only provided fun but
            also served as platforms for personal and professional development,
            helping organisers enhance their leadership skills and strengthen
            their relationships with colleagues.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <img
              src="/images/annual-report/hr-event-10.png"
              alt="Regional Events 1"
              className="rounded-lg"
            />
            <img
              src="/images/annual-report/hr-event-11.png"
              alt="Regional Events 2"
              className="rounded-lg"
            />
            <img
              src="/images/annual-report/hr-event-12.png"
              alt="Regional Events 3"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Olympia Trophy - Sports Day */}
        <div className="bg-white text-blue p-6 rounded-lg ">
          <h2 className="text-xl font-semibold mb-4">
            Olympia Trophy - Sports Day
          </h2>
          <p>
            Sports Day was a resounding success, characterised by strong
            teamwork, dedication, and sportsmanship. The event ignited passion
            and enthusiasm among all participants, fostering a positive and
            supportive atmosphere. While each team strived for victory, the
            focus remained on encouraging and motivating one another to perform
            at their best, demonstrating exceptional camaraderie and respect.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <img
              src="/images/annual-report/hr-event-13.png"
              alt="Olympia Trophy 1"
              className="rounded-lg"
            />
            <img
              src="/images/annual-report/hr-event-14.png"
              alt="Olympia Trophy 2"
              className="rounded-lg"
            />
            <img
              src="/images/annual-report/hr-event-15.png"
              alt="Olympia Trophy 3"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* LB Got Sweetest Pongal Fiesta */}
        <div className="bg-white text-blue p-6 rounded-lg ">
          <h2 className="text-xl font-semibold mb-4">
            LB Got Sweetest Pongal Fiesta
          </h2>
          <p>
            This marked a historic first for LB Finance PLC, celebrating Thai
            Pongal and sharing Hindu and Tamil culture with colleagues. The
            event served as a gesture of gratitude towards farmers worldwide,
            acknowledging their essential role in providing sustenance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <img
              src="/images/annual-report/hr-event-16.png"
              alt="Pongal Fiesta 1"
              className="rounded-lg"
            />
            <img
              src="/images/annual-report/hr-event-17.png"
              alt="Pongal Fiesta 2"
              className="rounded-lg"
            />
            <img
              src="/images/annual-report/hr-event-18.png"
              alt="Pongal Fiesta 3"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* X-Citing Fridays */}
        <div className="bg-white text-blue p-6 rounded-lg ">
          <h2 className="text-xl font-semibold mb-4">X-Citing Fridays</h2>
          <p>
            A series of engaging online activities was held over three
            consecutive Fridays in December 2023, aimed to showcase the positive
            aspects of online games and recognise employee creativity during the
            festive season. Themed dress codes, puzzles, riddles, brainteasers,
            and selfie competitions fostered a fun and interactive experience
            for staff.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <img
              src="/images/annual-report/hr-event-19.png"
              alt="X-Citing Fridays 1"
              className="rounded-lg"
            />
            <img
              src="/images/annual-report/hr-event-20.png"
              alt="X-Citing Fridays 2"
              className="rounded-lg"
            />
            <img
              src="/images/annual-report/hr-event-21.png"
              alt="X-Citing Fridays 3"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Supporting Career Transitions */}
        <div className="bg-white text-blue p-6 rounded-lg ">
          <h2 className="text-xl font-semibold mb-4">
            Supporting Career Transitions
          </h2>
          <p>
            We provide assistance programmes to facilitate continued
            employability and manage career transitions, whether due to
            retirement or termination of employment. Our initiatives include:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              <strong>Succession Planning:</strong> We proactively identify
              potential successors for key positions through our performance
              appraisal process, focusing on employee potential and development
              needs.
            </li>
            <li>
              <strong>PDP Programmes:</strong> We offer Personalised Development
              Programmes (PDPs) tailored to individual career aspirations and
              goals.
            </li>
            <li>
              <strong>Speech Masters Programme:</strong> Our specialised
              three-month certification programme is meticulously crafted to
              enhance presentation skills, refine telephone etiquette, and
              elevate email writing standards with a tailored approach,
              fostering personal and professional development.
            </li>
          </ul>
        </div>
        {/* Remuneration and Benefits */}
        <div className="bg-white text-blue p-6 rounded-lg ">
          <h2 className="text-xl font-semibold mb-4">
            Remuneration and Benefits
          </h2>
          <p>
            We provide our employees with a rewarding and fulfilling work
            experience that recognises their value and contributions to the
            organisation. Accordingly, this includes fair and equitable
            compensation for all employees, based solely on merit and
            contributions. Our remuneration and benefit structures are designed
            to attract and retain top talent while ensuring competitiveness
            within our industry. Compensation is determined based on job role
            and responsibilities, skills and competencies, experience and
            performance, and industry benchmarking to ensure our compensation
            packages remain competitive.
          </p>
        </div>

        {/* Work-Life Balance */}
        <div className="bg-white text-blue p-6 rounded-lg ">
          <h2 className="text-xl font-semibold mb-4">Work-Life Balance</h2>
          <p>
            We have implemented initiatives to empower our employees, allowing
            them to manage their time effectively and achieve a fulfilling
            balance between their work and personal commitments. These
            initiatives include:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              <strong>Work From Home (WFH):</strong> IT and selected staff have
              the option to work remotely, promoting flexibility and autonomy.
            </li>
            <li>
              <strong>Flexi Rosters:</strong> Accommodate individual employee
              needs with flexible work schedules, assessed on a case-by-case
              basis.
            </li>
            <li>
              <strong>Weekly Dress Down Days:</strong> Create a relaxed and
              comfortable work atmosphere.
            </li>
            <li>
              <strong>SMILE Volunteer Club:</strong> Employees are enabled to
              participate in Corporate Social Responsibility (CSR) initiatives,
              contributing to the community and fostering a sense of purpose.
            </li>
            <li>
              <strong>Statutory Benefits:</strong>In addition to competitive
              salaries, we offer a comprehensive benefits package by Sri Lankan
              labour laws, including the Shop and Office Employees Act No. 19 of
              1954, EPF Act No. 24 of 1971, ETF Act No. 46 of 1980, and Payment
              of Gratuity Act No. 12 of 1983.
            </li>
          </ul>
          <p className="mt-4">
            The ratio of the basic salary and remuneration of women to men for
            each employee category, by significant locations of operation:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left mt-4 border-collapse overflow-x-auto">
              <thead>
                <tr>
                  <th className="border-b-2 border-blue py-2" rowSpan={2}></th>
                  <th
                    className="border-b-2 border-blue py-2 text-center"
                    colSpan={2}
                  >
                    {' '}
                    2023/24
                  </th>
                  <th
                    className="border-b-2 border-blue py-2 text-center"
                    colSpan={2}
                  >
                    2022/23
                  </th>
                </tr>
                <tr>
                  <th className="border-b-2 border-blue py-2">Male</th>
                  <th className="border-b-2 border-blue py-2">Female</th>
                  <th className="border-b-2 border-blue py-2">Male</th>
                  <th className="border-b-2 border-blue py-2">Female</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-blue py-2">
                    Senior Management
                  </td>
                  <td className="border-b border-blue py-2">1</td>
                  <td className="border-b border-blue py-2">0.53</td>
                  <td className="border-b border-blue py-2">1</td>
                  <td className="border-b border-blue py-2">0.36</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    Middle Management
                  </td>
                  <td className="border-b border-blue py-2">1</td>
                  <td className="border-b border-blue py-2">0.98</td>
                  <td className="border-b border-blue py-2">1</td>
                  <td className="border-b border-blue py-2">1.03</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">Executive</td>
                  <td className="border-b border-blue py-2">1</td>
                  <td className="border-b border-blue py-2">0.84</td>
                  <td className="border-b border-blue py-2">1</td>
                  <td className="border-b border-blue py-2">0.91</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">Clerical</td>
                  <td className="border-b border-blue py-2">1</td>
                  <td className="border-b border-blue py-2">0.94</td>
                  <td className="border-b border-blue py-2">1</td>
                  <td className="border-b border-blue py-2">0.90</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="py-6">
            {' '}
            During the year, we offered special financial benefits to support
            our employees through the economic challenges of the country.{' '}
          </p>
          <h2 className="text-xl font-semibold mb-4">
            Benefits Offered to Our Employees
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left mt-4 border-collapse">
              <thead>
                <tr>
                  <th className="border-b-2 border-blue py-2"></th>
                  <th className="border-b-2 border-blue py-2">2023/24</th>
                  <th className="border-b-2 border-blue py-2">2022/23</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-blue py-2">
                    Salaries and other related expenses (Rs. Mn)
                  </td>
                  <td className="border-b border-blue py-2">3,617.72</td>
                  <td className="border-b border-blue py-2">3,000.43</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    Employer’s contribution to EPF (Rs. Mn)
                  </td>
                  <td className="border-b border-blue py-2">296.72</td>
                  <td className="border-b border-blue py-2">262.01</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    Employer’s contribution to ETF (Rs. Mn)
                  </td>
                  <td className="border-b border-blue py-2">63.21</td>
                  <td className="border-b border-blue py-2">54.3</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    Gratuity (Rs. Mn)
                  </td>
                  <td className="border-b border-blue py-2">118.28</td>
                  <td className="border-b border-blue py-2">102.77</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Life at LB */}
        <div className="bg-white text-blue p-6 rounded-lg grid gap-4">
          <h2 className="text-xl font-semibold ">Life at LB</h2>
          <h2 className="text-lg font-semibold ">Employees’ Journey</h2>
          <p className="">
            Employees drive our business, and we consider it as our
            responsibility to make their life journey more comfortable and
            trouble-free.
          </p>
          <h2 className="text-lg font-semibold"> Family</h2>
          <ul className="list-disc pl-5">
            <li>
              Support our employees and their families through their vulnerable
              moments and difficult life circumstances
            </li>
            <li>
              Extend our culture of savings and investment to encourage our
              employees and their families to cultivate the savings habit
            </li>
            <li>
              Provide a better work-life balance to enable our employees to
              manage to their family commitments
            </li>
          </ul>

          <h2 className="text-lg font-semibold"> Financial</h2>
          <ul className="list-disc pl-5">
            <li>
              Support development of financial acumen and a culture of saving
              and investment to empower our employees
            </li>
          </ul>

          <h2 className="text-lg font-semibold">
            Physical and mental well-being{' '}
          </h2>
          <ul className="list-disc pl-5">
            <li>
              Provide a healthy, supportive and enabling work environment free
              from discrimination or harassment
            </li>
          </ul>

          <h2 className="text-lg font-semibold">Relationships</h2>
          <p>Create a place to work that:</p>
          <ul className="list-disc pl-5">
            <li>
              Embraces diversity and facilitates opportunities for employees to
              “give back”
            </li>
            <li>
              Promotes a culture of respect, and fosters positive working
              relationships
            </li>
          </ul>

          <h2 className="text-lg font-semibold">
            {' '}
            Work, job, career and employment
          </h2>
          <ul className="list-disc pl-5">
            <li>
              Empower employees through meaningful work and an environment that
              supports career progression, collaboration and learning from
              mistakes, while encouraging high performance
            </li>
          </ul>

          <h2 className="text-lg font-semibold">
            Lifestyle, dreams, aspirations
          </h2>
          <ul className="list-disc pl-5">
            <li>
              Position LBF as a prominent financial services company by engaging
              prospective employees prior to their LBF journey
            </li>
          </ul>
        </div>

        {/* Diversity and Equal Opportunity */}
        <div className="bg-white text-blue p-6 rounded-lg ">
          <h2 className="text-xl font-semibold mb-4">
            Diversity and Equal Opportunity
          </h2>
          <p>
            We foster a diverse and inclusive workplace, recognising that a
            broader range of perspectives drives innovation and benefits both
            the company and our stakeholders. Accordingly, we strive to bridge
            the gender gap at all levels of our Organisation. Our commitment is
            reflected in our non-discriminatory policies that ensure equal
            opportunities for all employees, regardless of gender, religion,
            race or any other criteria.
          </p>
          <p className="mt-4">
            Gender Parity targets have been established for every stage of the
            employee lifecycle, from recruitment to promotions. In the current
            financial year, women comprised 45.86% of our workforce and received
            49.60% of promotions, demonstrating our progress towards achieving
            gender balance.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              <strong>Diversity and inclusion policy:</strong> Reflects our
              commitment to maintaining gender equality across all HR processes
              including recruitment, remuneration and benefits, training and
              development, promotions, employee retention, flexible work
              arrangements, leave entitlement, policies and procedures, Board
              appointments, and succession planning.
            </li>
            <li>
              <strong>Gender pays equity:</strong> Guides our Board and
              management in remuneration decisions, ensuring that men and women
              in similar roles at any level of the Organisation are entitled to
              be remunerated equally. Specific policies on sexual harassment in
              the workplace are aimed at safeguarding employees from sexual
              harassment and providing them with guidelines to report incidents.
            </li>
          </ul>
        </div>

        {/* Incidents of Discrimination and Corrective Action */}
        <div className="bg-white text-blue p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">
            Incidents of Discrimination and Corrective Action Taken in FY
            2023/24
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left mt-4 border-collapse overflow-x-auto">
              <thead>
                <tr>
                  <th className="border-b-2 border-blue py-2">Incident </th>
                  <th className="border-b-2 border-blue py-2">
                    No. of Incidents
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-blue py-2">
                    Total number of incidents of discrimination during the
                    reporting period.
                  </td>
                  <td className="border-b border-blue py-2">0</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    Status of the incidents and actions taken concerning the
                    following:
                  </td>
                  <td className="border-b border-blue py-2">0</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    i. Incident reviewed by the organisation;
                  </td>
                  <td className="border-b border-blue py-2">0</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    ii. Remediation plans being implemented;
                  </td>
                  <td className="border-b border-blue py-2">0</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    iii. Remediation plans that have been implemented, with
                    results reviewed through routine internal management review
                    processes;
                  </td>
                  <td className="border-b border-blue py-2">0</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    {' '}
                    iv. Incident no longer subject to action.
                  </td>
                  <td className="border-b border-blue py-2">0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="overflow-x-auto mt-6">
            <table className="w-full text-left mt-4 border-collapse overflow-x-auto">
              <thead>
                <tr>
                  <th className="border-b-2 border-blue py-2">
                    Gender Parity Indicators
                  </th>
                  <th className="border-b-2 border-blue py-2">2022/23</th>
                  <th className="border-b-2 border-blue py-2">2023/24</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-blue py-2">
                    Female representation at the Board level
                  </td>
                  <td className="border-b border-blue py-2">30%</td>
                  <td className="border-b border-blue py-2">30%</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    Female representation at the Senior Management level
                  </td>
                  <td className="border-b border-blue py-2">7%</td>
                  <td className="border-b border-blue py-2">8%</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    Female representation at the Middle Management level
                  </td>
                  <td className="border-b border-blue py-2">16%</td>
                  <td className="border-b border-blue py-2">17%</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    Female representation at the Executive level
                  </td>
                  <td className="border-b border-blue py-2">50%</td>
                  <td className="border-b border-blue py-2">49%</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    Female representation at the non-executive level
                  </td>
                  <td className="border-b border-blue py-2">55%</td>
                  <td className="border-b border-blue py-2">52%</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">Female recruits</td>
                  <td className="border-b border-blue py-2">53%</td>
                  <td className="border-b border-blue py-2">48%</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    Number of female staff members promoted (Nos.)
                  </td>
                  <td className="border-b border-blue py-2">523</td>
                  <td className="border-b border-blue py-2">515</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    Average training hours for female staff members (Hrs.)
                  </td>
                  <td className="border-b border-blue py-2">15,056.45</td>
                  <td className="border-b border-blue py-2">16,940.8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Parental Leave - FY 2023/24 */}
        <div className="bg-white text-blue rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            Parental Leave - FY 2023/24
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left mt-4 border-collapse">
              <thead>
                <tr>
                  <th className="border-b-2 border-blue py-2"></th>
                  <th className="border-b-2 border-blue p-2">Male</th>
                  <th className="border-b-2 border-blue p-2">Female</th>
                  <th className="border-b-2 border-blue py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-blue py-2">
                    Total number of employees that were entitled to parental
                    leave
                  </td>
                  <td className="border-b border-blue py-2 text-center">-</td>
                  <td className="border-b border-blue py-2 text-center">13</td>
                  <td className="border-b border-blue py-2 text-center">13</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    Total number of employees that took parental leave
                  </td>
                  <td className="border-b border-blue py-2 text-center">-</td>
                  <td className="border-b border-blue py-2 text-center">51</td>
                  <td className="border-b border-blue py-2 text-center">51</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    Total number of employees that returned to work in the
                    reporting period after parental leave ended
                  </td>
                  <td className="border-b border-blue py-2 text-center">-</td>
                  <td className="border-b border-blue py-2 text-center">25</td>
                  <td className="border-b border-blue py-2 text-center">25</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    Total number of employees that returned to work after
                    parental leave ended that were still employed 12 months
                    after their return to work
                  </td>
                  <td className="border-b border-blue py-2 text-center">-</td>
                  <td className="border-b border-blue py-2 text-center">40</td>
                  <td className="border-b border-blue py-2 text-center">40</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    Return to work employees who took parental leave
                  </td>
                  <td className="border-b border-blue py-2 text-center">-</td>
                  <td className="border-b border-blue py-2 text-center">49%</td>
                  <td className="border-b border-blue py-2 text-center">49%</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    Retention rates of employees who took parental leave
                  </td>
                  <td className="border-b border-blue py-2 text-center">-</td>
                  <td className="border-b border-blue py-2 text-center">78%</td>
                  <td className="border-b border-blue py-2 text-center">78%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Performance Management */}
        <div className="bg-white text-blue rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Performance Management</h2>
          <p>
            Our performance management system is designed to nurture a
            high-performance culture and effectively manage talent throughout
            the Organisation.
          </p>
          <h3 className="font-semibold mt-4">Key Features</h3>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              <strong>Pre-agreed KPIs:</strong> Clear performance expectations
              are established at the beginning of the year, ensuring alignment
              with company goals.
            </li>
            <li>
              <strong>Continuous Monitoring and Feedback:</strong> Regular
              performance monitoring with mid-year and annual reviews provides
              ongoing feedback and development opportunities.
            </li>
            <li>
              <strong>Automated HRIS:</strong> Our fully automated Human
              Resource Information System (HRIS) streamlines the performance
              management process.
            </li>
            <li>
              <strong>Data-Driven Decision Making:</strong> Performance data
              informs decisions regarding salary increments, promotions,
              training needs, and talent development initiatives.
            </li>
          </ul>
          <p className="mt-4">
            100% of employees received regular performance review.
          </p>
          <p className="mt-4">
            During the year under review, all permanent employees underwent
            performance appraisals.
          </p>
        </div>

        {/* Training on Anti-Corruption */}
        <div className="bg-white text-blue rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            Training and Development
          </h2>
          <p>
            We provide our employees with continuous learning opportunities to
            enhance their skills and support their professional growth. In
            response to labour market trends, we focused on developing a
            pipeline of versatile employees equipped to drive the Company’s
            strategic goals. This included specialised training interventions
            and leadership development programmes for middle management.
          </p>
          <p className="mt-4">
            {' '}
            In FY 2023/24, the total investment in training amounted to Rs.
            23.22 Mn. while a total of 3,905 employees underwent 43,677 hours of
            training during the year. The average training hours per employee
            was 11.18.
          </p>
        </div>

        {/* Training and Development */}
        <div className="bg-white text-blue rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
           Training on Anti-corruption
          </h2>
          <p>
            We strive to create a culture of awareness and accountability
            regarding the Anti bribery and Corruption (ABC) Policy, ensuring its
            effective implementation throughout the Organisation.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              Recruitment Stage: All new employees sign a declaration
              acknowledging their responsibility to read and understand the ABC
              Policy.
            </li>
            <li>
              Induction and Refresher Programmes: Comprehensive training on the
              ABC Policy is incorporated into employee induction programs and
              ongoing refresher sessions.
            </li>
            <li>
              E-Learning Modules: We provide accessible e-learning modules to
              reinforce understanding of the ABC Policy and its implications.
            </li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <img
              src="/images/annual-report/hr-event-22.png"
              alt="Training 1"
              className="rounded-lg"
            />
            <img
              src="/images/annual-report/hr-event-23.png"
              alt="Training 2"
              className="rounded-lg"
            />
            <img
              src="/images/annual-report/hr-event-24.png"
              alt="Training 3"
              className="rounded-lg"
            />
            <img
              src="/images/annual-report/hr-event-25.png"
              alt="Training 3"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Training Programmes */}
        <div className="bg-white text-blue rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Training Programmes</h2>
          <p>
            The following training programmes were conducted during the FY
            2023/24:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left mt-4 border-collapse">
              <thead>
                <tr>
                  <th className="border-b-2 border-blue py-2">
                    Training Programme
                  </th>
                  <th className="border-b-2 border-blue py-2">Target Group</th>
                  <th className="border-b-2 border-blue py-2">
                    No. of Participants
                  </th>
                  <th className="border-b-2 border-blue py-2">
                    Training Hours (Male)
                  </th>
                  <th className="border-b-2 border-blue py-2">
                    Training Hours (Female)
                  </th>
                  <th className="border-b-2 border-blue py-2">
                    Training Hours (Total)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-blue py-2">
                    Management Development Programme
                  </td>
                  <td className="border-b border-blue py-2">
                    Credit, Gold Loan, Recoveries and Fixed Deposits Management
                  </td>
                  <td className="border-b border-blue py-2">99</td>
                  <td className="border-b border-blue py-2">2,777</td>
                  <td className="border-b border-blue py-2">180</td>
                  <td className="border-b border-blue py-2">2,957</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    One on one Coaching session
                  </td>
                  <td className="border-b border-blue py-2">
                    Credit Management
                  </td>
                  <td className="border-b border-blue py-2">2</td>
                  <td className="border-b border-blue py-2">40</td>
                  <td className="border-b border-blue py-2">-</td>
                  <td className="border-b border-blue py-2">40</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    Ultimate leadership programme for Gold Loan OIC & Second
                    Officers
                  </td>
                  <td className="border-b border-blue py-2">
                    Gold Loan OIC & Second Officers
                  </td>
                  <td className="border-b border-blue py-2">206</td>
                  <td className="border-b border-blue py-2">368</td>
                  <td className="border-b border-blue py-2">1,148</td>
                  <td className="border-b border-blue py-2">1,516</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    Ultimate leadership programme for the Recoveries Department
                  </td>
                  <td className="border-b border-blue py-2">Recoveries Team</td>
                  <td className="border-b border-blue py-2">163</td>
                  <td className="border-b border-blue py-2">848</td>
                  <td className="border-b border-blue py-2">456</td>
                  <td className="border-b border-blue py-2">1,304</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <img
              src="/images/annual-report/hr-event-26.png"
              alt="Training Programme 1"
              className="rounded-lg"
            />
            <img
              src="/images/annual-report/hr-event-27.png"
              alt="Training Programme 2"
              className="rounded-lg"
            />
            <img
              src="/images/annual-report/hr-event-28.png"
              alt="Training Programme 3"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Grievance Handling */}
        <div className="bg-white text-blue rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Grievance Handling</h2>
          <p>
            We nurture a culture of open communication, encouraging our
            employees to voice any work-related concerns or grievances without
            hesitation. Multiple channels are provided for employees to express
            their opinions and seek resolution.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-[#2874A6] text-white p-4 rounded-lg">
              <h3 className="font-semibold">Regular Team Briefings</h3>
              <p>
                Daily, weekly, and monthly team meetings offer a platform for
                open dialogue and collective feedback.
              </p>
            </div>
            <div className="bg-[#2874A6] text-white p-4 rounded-lg">
              <h3 className="font-semibold">Open-Door Policy</h3>
              <p>
                Employees have direct access to senior management to discuss
                individual concerns impacting their roles.
              </p>
            </div>
            <div className="bg-[#2874A6] text-white p-4 rounded-lg">
              <h3 className="font-semibold">Formal Grievance Procedure</h3>
              <p>
                Our HR department maintains a structured grievance procedure,
                outlined in our Code of Conduct, for formal escalation of
                concerns directly to the HR Head. This procedure ensures timely
                resolution with clear timelines and expectations.
              </p>
            </div>
          </div>
          <p className="mt-4">
            We are pleased to report that no formal grievances were filed with
            the HR department during FY 2023/24, reflecting our commitment to a
            positive and supportive work environment.
          </p>
        </div>

        {/* Human Resource Accounting */}
        <div className="bg-white text-blue rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            Human Resource Accounting
          </h2>
          <p>
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
        </div>

        {/* Key HR Metrics per Employee */}
        <div className="bg-white text-blue rounded-lg p-6">
          <div className="flex justify-center">
            <img
              src="/images/charts/capitalReport/HumanCapitalReports/keyHrMetrices.png"
              className="w-full"
              alt="keyHrMetrices"
            />
          </div>
        </div>

        {/* HR Dashboard Information */}
        <div className="bg-white text-blue rounded-lg p-6 flex items-center">
          <div className="flex-1">
            <p>
              Now you’re turning to our HR dashboard, your tool for simplifying
              HR statistics. Whether it’s employee performance, attendance, or
              recruitment trends, we’ve got it covered. Our dashboard makes it
              all easy to simplify and understand.
            </p>
            <p className="mt-4">
              But wait, there’s more! Dive deeper and discover all the features
              we offer. Visit our micro-site through the following link and
              start exploring today!
            </p>
          </div>
          <div className="flex-shrink-0">
            <img
              src="/images/annual-report/human-qr.png"
              alt="Lion Mascot"
              className="w-24 h-24 rounded-lg"
            />
          </div>
        </div>

        {/* HR Dashboard Overview */}
        <h2 className="text-xl font-semibold">HR Dashboard</h2>
        <div className=" bg-[#001947] rounded-lg p-6">
          <div className="md:flex justify-center overflow-x-auto ">
            <img
              src="/images/charts/capitalReport/HumanCapitalReports/4132.png"
              className="md:w-full max-w-none md:max-w-full"
              alt="Employees by Gender and Service Period"
            />
          </div>
        </div>

        {/* Gender and Service Period Chart */}

        {/* <Chart
            options={genderServicePeriodChartOptions}
            series={genderServicePeriodChartOptions.series}
            type="line"
            height={350}
          /> */}

        {/* Province-wise Staff Allocation Table */}
        <div className="bg-white rounded-lg p-6 text-blue">
          <h3 className="font-semibold">Province-wise Staff Allocation</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left mt-4 border-collapse">
              <thead>
                <tr>
                  <td
                    className="border-b-2 border-blue p-2 text-center"
                    rowSpan={2}
                  >
                    Province
                  </td>
                  <td
                    className="border-b-2 border-blue p-2 text-center"
                    colSpan={4}
                  >
                    2023/24
                  </td>
                  <td
                    className="border-b-2 border-blue p-2 text-center"
                    colSpan={4}
                  >
                    2022/23
                  </td>
                </tr>
                <tr>
                  <th className="border-b-2 border-blue p-2">
                    No. of branches
                  </th>
                  <th className="border-b-2 border-blue p-2">Male</th>
                  <th className="border-b-2 border-blue p-2">Female</th>
                  <th className="border-b-2 border-blue p-2">Grand Total</th>
                  <th className="border-b-2 border-blue p-2">
                    No. of branches
                  </th>
                  <th className="border-b-2 border-blue p-2">Male</th>
                  <th className="border-b-2 border-blue p-2">Female</th>
                  <th className="border-b-2 border-blue p-2">Grand Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-blue p-2">Central</td>
                  <td className="border-b border-blue p-2">18</td>
                  <td className="border-b border-blue p-2">197</td>
                  <td className="border-b border-blue p-2">113</td>
                  <td className="border-b border-blue p-2">310</td>
                  <td className="border-b border-blue p-2">17</td>
                  <td className="border-b border-blue p-2">189</td>
                  <td className="border-b border-blue p-2">99</td>
                  <td className="border-b border-blue p-2">288</td>
                </tr>
                <tr>
                  <td className="border-b border-blue p-2">Eastern</td>
                  <td className="border-b border-blue p-2">25</td>
                  <td className="border-b border-blue p-2">168</td>
                  <td className="border-b border-blue p-2">163</td>
                  <td className="border-b border-blue p-2">331</td>
                  <td className="border-b border-blue p-2">25</td>
                  <td className="border-b border-blue p-2">142</td>
                  <td className="border-b border-blue p-2">134</td>
                  <td className="border-b border-blue p-2">276</td>
                </tr>
                <tr>
                  <td className="border-b border-blue p-2">North Central</td>
                  <td className="border-b border-blue p-2">8</td>
                  <td className="border-b border-blue p-2">96</td>
                  <td className="border-b border-blue p-2">42</td>
                  <td className="border-b border-blue p-2">138</td>
                  <td className="border-b border-blue p-2">8</td>
                  <td className="border-b border-blue p-2">85</td>
                  <td className="border-b border-blue p-2">44</td>
                  <td className="border-b border-blue p-2">129</td>
                </tr>
                <tr>
                  <td className="border-b border-blue p-2">North Western</td>
                  <td className="border-b border-blue p-2">11</td>
                  <td className="border-b border-blue p-2">118</td>
                  <td className="border-b border-blue p-2">92</td>
                  <td className="border-b border-blue p-2">210</td>
                  <td className="border-b border-blue p-2">11</td>
                  <td className="border-b border-blue p-2">101</td>
                  <td className="border-b border-blue p-2">93</td>
                  <td className="border-b border-blue p-2">194</td>
                </tr>
                <tr>
                  <td className="border-b border-blue p-2">Northern</td>
                  <td className="border-b border-blue p-2">29</td>
                  <td className="border-b border-blue p-2">113</td>
                  <td className="border-b border-blue p-2">145</td>
                  <td className="border-b border-blue p-2">258</td>
                  <td className="border-b border-blue p-2">23</td>
                  <td className="border-b border-blue p-2">92</td>
                  <td className="border-b border-blue p-2">102</td>
                  <td className="border-b border-blue p-2">194</td>
                </tr>
                <tr>
                  <td className="border-b border-blue p-2">Sabaragamuwa</td>
                  <td className="border-b border-blue p-2">7</td>
                  <td className="border-b border-blue p-2">97</td>
                  <td className="border-b border-blue p-2">65</td>
                  <td className="border-b border-blue p-2">162</td>
                  <td className="border-b border-blue p-2">7</td>
                  <td className="border-b border-blue p-2">92</td>
                  <td className="border-b border-blue p-2">57</td>
                  <td className="border-b border-blue p-2">149</td>
                </tr>
                <tr>
                  <td className="border-b border-blue p-2">Southern</td>
                  <td className="border-b border-blue p-2">13</td>
                  <td className="border-b border-blue p-2">169</td>
                  <td className="border-b border-blue p-2">101</td>
                  <td className="border-b border-blue p-2">270</td>
                  <td className="border-b border-blue p-2">13</td>
                  <td className="border-b border-blue p-2">154</td>
                  <td className="border-b border-blue p-2">95</td>
                  <td className="border-b border-blue p-2">249</td>
                </tr>
                <tr>
                  <td className="border-b border-blue p-2">Uva</td>
                  <td className="border-b border-blue p-2">6</td>
                  <td className="border-b border-blue p-2">80</td>
                  <td className="border-b border-blue p-2">42</td>
                  <td className="border-b border-blue p-2">122</td>
                  <td className="border-b border-blue p-2">6</td>
                  <td className="border-b border-blue p-2">76</td>
                  <td className="border-b border-blue p-2">36</td>
                  <td className="border-b border-blue p-2">112</td>
                </tr>
                <tr>
                  <td className="border-b border-blue p-2">Western</td>
                  <td className="border-b border-blue p-2">83</td>
                  <td className="border-b border-blue p-2">1199</td>
                  <td className="border-b border-blue p-2">1132</td>
                  <td className="border-b border-blue p-2">2331</td>
                  <td className="border-b border-blue p-2">82</td>
                  <td className="border-b border-blue p-2">1009</td>
                  <td className="border-b border-blue p-2">969</td>
                  <td className="border-b border-blue p-2">1978</td>
                </tr>
                <tr>
                  <td className="border-b border-blue p-2">Grand Total</td>
                  <td className="border-b border-blue p-2">200</td>
                  <td className="border-b border-blue p-2">2,237</td>
                  <td className="border-b border-blue p-2">1,895</td>
                  <td className="border-b border-blue p-2">4,132</td>
                  <td className="border-b border-blue p-2">192</td>
                  <td className="border-b border-blue p-2">1,940</td>
                  <td className="border-b border-blue p-2">1,629</td>
                  <td className="border-b border-blue p-2">3,569</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Age Analysis by Staff Category */}
        <div className="bg-[#001947] rounded-lg p-6 text-blue">
          <h3 className="font-semibold text-white">
            Age Analysis by Staff Category
          </h3>
          <div className="flex flex-col items-center">
            <img
              src="/images/charts/capitalReport/HumanCapitalReports/age-analysis-by-staff-category.PNG"
              alt="Age Analysis by Staff Category"
              className="mb-4 mt-4 rounded-lg"
            />
          </div>
          {/* <Chart
            options={ageCategoryChartOptions}
            series={ageCategoryChartOptions.series}
            type="bar"
            height={350}
          /> */}
        </div>

        {/* Province-wise Employees by Type of Employment */}
        <div className="bg-[#001947] rounded-lg p-6 text-blue">
          <h3 className="font-semibold text-white">
            Province-wise Employees by Type of Employment
          </h3>
          <div className="flex flex-col items-center">
            <img
              src="/images/charts/capitalReport/HumanCapitalReports/province-wise-employees-by-type-of-employment.PNG"
              alt="Province-wise Employees by Type of Employment"
              className="mb-4 mt-4 rounded-lg"
            />
          </div>
          {/* <Chart
            options={provinceEmploymentChartOptions}
            series={provinceEmploymentChartOptions.series}
            type="bar"
            height={350}
          /> */}
        </div>

        <div className=" bg-[#001947] text-blue p-4 rounded-lg">
          <h3 className="font-semibold text-white">Recruitment in 2023/24</h3>
          <div className="flex flex-col items-center">
            <img
              src="/images/charts/capitalReport/HumanCapitalReports/recruitment-by-gender.PNG"
              alt="Recruitment in 2023/24 by Gender"
              className="mb-4 mt-4 rounded-lg"
            />
          </div>
          {/* <Chart
            options={genderRecruitmentChartOptions}
            series={genderRecruitmentChartOptions.series}
            type="bar"
            height={350}
          /> */}
        </div>

        {/* Province-wise Recruitments in 2023/24 */}
        <div className=" bg-[#001947] text-white p-4 rounded-lg">
          <h3 className="font-semibold">
            Province-wise Recruitments in 2023/24
          </h3>
          <div className="flex flex-col items-center">
            <img
              src="/images/charts/capitalReport/HumanCapitalReports/province-wise-recruitments.PNG"
              alt="Province-wise Recruitments in 2023/24"
              className="mb-4 mt-4 rounded-lg"
            />
          </div>
          {/* <Chart
            options={provinceRecruitmentChartOptions}
            series={provinceRecruitmentChartOptions.series}
            type="bar"
            height={350}
          /> */}
        </div>

        {/* Benefits Provided Table */}
        <div className=" bg-white text-blue p-4 rounded-lg">
          <h3 className="font-semibold">
            Benefits Provided to Full-time Employees that are not Provided to
            Temporary or Part-time Employees
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left mt-4 border-collapse">
              <thead>
                <tr>
                  <th className="border-b-2 border-blue py-2">
                    Benefit category
                  </th>
                  <th className="border-b-2 border-blue py-2">
                    Full time employees
                  </th>
                  <th className="border-b-2 border-blue py-2">
                    Employees on contract basis
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-blue py-2">
                    Insurance scheme (including medical)
                  </td>
                  <td className="border-b border-blue py-2">✓</td>
                  <td className="border-b border-blue py-2">×</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">Parental leave</td>
                  <td className="border-b border-blue py-2">✓</td>
                  <td className="border-b border-blue py-2">×</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    Retirement provision
                  </td>
                  <td className="border-b border-blue py-2">✓</td>
                  <td className="border-b border-blue py-2">×</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">Stock ownership</td>
                  <td className="border-b border-blue py-2">✓</td>
                  <td className="border-b border-blue py-2">×</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Ratio of Basic Salary and Remuneration of Women to Men */}
        <div className=" bg-white text-blue p-4 rounded-lg">
          <h3 className="font-semibold">
            Ratio of Basic Salary and Remuneration of Women to Men
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left mt-4 border-collapse">
              <thead>
                <tr>
                  <th className="border-b-2 border-blue py-2">
                    Type of Employment
                  </th>
                  <th className="border-b-2 border-blue py-2">Male</th>
                  <th className="border-b-2 border-blue py-2">Female</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-blue py-2">
                    Senior Management
                  </td>
                  <td className="border-b border-blue py-2">1</td>
                  <td className="border-b border-blue py-2">0.53</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    Middle Management
                  </td>
                  <td className="border-b border-blue py-2">1</td>
                  <td className="border-b border-blue py-2">0.98</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">Executive</td>
                  <td className="border-b border-blue py-2">1</td>
                  <td className="border-b border-blue py-2">0.84</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">Clerical</td>
                  <td className="border-b border-blue py-2">1</td>
                  <td className="border-b border-blue py-2">0.94</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Turnover in 2023/24 by Gender */}
        <div className=" bg-[#001947] text-white p-4 rounded-lg">
          <h3 className="font-semibold">Turnover in 2023/24</h3>
          <div className="flex flex-col items-center">
            <img
              src="/images/charts/capitalReport/HumanCapitalReports/turnover-by-gender.PNG"
              alt="Turnover in 2023/24 by Gender"
              className="mb-4 mt-4 rounded-lg"
            />
          </div>
          {/* <Chart
            options={turnoverChartOptions}
            series={turnoverChartOptions.series}
            type="bar"
            height={350}
          /> */}
        </div>

        {/* Province-wise Turnover in 2023/24 */}
        <div className=" bg-[#001947] text-white p-4 rounded-lg">
          <h3 className="font-semibold">Province-wise Turnover in 2023/24</h3>
          <div className="flex flex-col items-center">
            <img
              src="/images/charts/capitalReport/HumanCapitalReports/province-wise-turnover.PNG"
              alt="Province-wise Turnover in 2023/24"
              className="mb-4 mt-4 rounded-lg"
            />
          </div>
          {/* <Chart
            options={provinceTurnoverChartOptions}
            series={provinceTurnoverChartOptions.series}
            type="bar"
            height={350}
          /> */}
        </div>

        {/* Reasons for Turnover vs Gender */}
        <div className=" bg-[#001947] text-white p-4 rounded-lg">
          <h3 className="font-semibold">Reasons for Turnover vs Gender</h3>
          <div className="flex flex-col items-center">
            <img
              src="/images/charts/capitalReport/HumanCapitalReports/reasons-for-turnover-vs-gender.PNG"
              alt="Reasons for Turnover vs Gender"
              className="mb-4 mt-4 rounded-lg"
            />
          </div>
          {/* <Chart
            options={turnoverReasonsChartOptions}
            series={turnoverReasonsChartOptions.series}
            type="pie"
            height={350}
          /> */}
        </div>

        {/* Staff Promotions */}
        <div className=" bg-[#001947] text-white p-4 rounded-lg">
          <h3 className="font-semibold">Staff Promotions</h3>
          <div className="flex flex-col items-center">
            <img
              src="/images/charts/capitalReport/HumanCapitalReports/staff-promotions.PNG"
              alt="Staff Promotions"
              className="mb-4 mt-4 rounded-lg"
            />
          </div>
          {/* <Chart
            options={staffPromotionsChartOptions}
            series={staffPromotionsChartOptions.series}
            type="bar"
            height={350}
          /> */}
        </div>

        {/* Average Training Hours Per Female Staff Member */}
        <div className=" bg-[#001a49] text-white p-4 rounded-lg">
          <p className="font-semibold">
            Average Training Hours Per Female Staff Member Increased by 12.51%
            YoY
          </p>
          <div className="flex flex-col items-center">
            <img
              src="/images/charts/capitalReport/HumanCapitalReports/avarageTrainigHours.png"
              alt="Staff Promotions"
              className="mb-4 mt-4 rounded-lg w-full md:w-1/2"
            />
          </div>
        </div>

        <div className="bg-white text-blue p-6 rounded-lg">
          <h3 className="font-semibold">Gender Parity</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left mt-4 border-collapse">
              <thead>
                <tr>
                  <th className="border-b-2 border-blue py-2">
                    Gender parity indicator
                  </th>
                  <th className="border-b-2 border-blue py-2">2023/24 (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-blue py-2">
                    Female representation at Board level
                  </td>
                  <td className="border-b border-blue py-2">30</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    Female representation at Senior Management level
                  </td>
                  <td className="border-b border-blue py-2">8</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    Female representation at Middle Management level
                  </td>
                  <td className="border-b border-blue py-2">17</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    Female representation at Executive level
                  </td>
                  <td className="border-b border-blue py-2">49</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    Female representation at Non-Executive level
                  </td>
                  <td className="border-b border-blue py-2">52</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">Female recruits</td>
                  <td className="border-b border-blue py-2">48</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    Number of female staff members promoted
                  </td>
                  <td className="border-b border-blue py-2">
                    515 (Head Count)
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    Average training hours for female staff members
                  </td>
                  <td className="border-b border-blue py-2">16,940.8 Hr</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* GRI 404-1 Average Hours of Training per Year per Employee */}
        <div className=" bg-[#001a49] text-white p-4 rounded-lg">
          <h3 className="font-semibold">
            GRI 404-1 Average Hours of Training per Year per Employee
          </h3>
          <div className="flex flex-col items-center">
            <img
              src="/images/charts/capitalReport/HumanCapitalReports/gri404.png"
              alt="Staff Promotions"
              className="mb-4 mt-4 rounded-lg w-full"
            />
          </div>
        </div>

        {/* GRI 404-2 Programs for Upgrading Employee Skills and Transition Assistance Programmes */}
        <div className="bg-[#001a49] text-white p-4 rounded-lg">
          <h3 className="font-semibold">
            GRI 404-2 Programs for Upgrading Employee Skills and Transition
            Assistance Programmes
          </h3>
          <div className="flex flex-col overflow-x-auto">
            <img
              src="/images/charts/capitalReport/HumanCapitalReports/gri404-2.png"
              alt="Staff Promotions"
              className="mb-4 mt-4 rounded-lg w-full"
            />
          </div>
        </div>

        {/* Number of Training Programmes */}
        <div className="bg-[#001947] text-white p-6 rounded-lg">
          <h3 className="font-semibold">Number of Training Programmes</h3>
          <div className="flex flex-col items-center">
            <img
              src="/images/charts/capitalReport/HumanCapitalReports/number-of-training-programmes.PNG"
              alt="Number of Training Programmes"
              className="mb-4 mt-4 rounded-lg"
            />
          </div>
          {/* <Chart
            options={trainingProgramsChartOptions}
            series={trainingProgramsChartOptions.series}
            type="pie"
            height={350}
          /> */}
        </div>

        {/* Investment in Training & Development per Employee */}
        <div className="bg-[#001947] text-white p-6 rounded-lg">
          <h3 className="font-semibold">
            Investment on Training & Development per Employee (Rs.)
          </h3>
          <div className="flex flex-col items-center">
            <img
              src="/images/charts/capitalReport/HumanCapitalReports/investment-in-training.PNG"
              alt="Investment in Training"
              className="mb-4 mt-4 rounded-lg"
            />
          </div>
          {/* <Chart
            options={investmentTrainingChartOptions}
            series={investmentTrainingChartOptions.series}
            type="bar"
            height={350}
          /> */}
        </div>

        {/* Average Hours of Training per Employee */}
        <div className="bg-[#001947] text-white p-6 rounded-lg">
          <h3 className="font-semibold">
            Average Hours of Training per Employee
          </h3>
          <div className="flex flex-col items-center">
            <img
              src="/images/charts/capitalReport/HumanCapitalReports/average-hours-of-training-per-employee.PNG"
              alt="Average Hours of Training per Employee"
              className="mb-4 mt-4 rounded-lg"
            />
          </div>
          {/* <Chart
            options={averageTrainingHoursChartOptions}
            series={averageTrainingHoursChartOptions.series}
            type="line"
            height={350}
          /> */}
        </div>

        {/* Incidents of Discrimination and Corrective Actions Taken */}
        <div className="bg-white text-blue p-6 rounded-lg">
          <h3 className="font-semibold">
            Incidents of Discrimination and Corrective Actions Taken
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left mt-4 border-collapse">
              <thead>
                <tr>
                  <th className="border-b-2 border-blue py-2">Description</th>
                  <th className="border-b-2 border-blue py-2">Count</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-blue py-2">
                    Number of incidents of discrimination during the reporting
                    period
                  </td>
                  <td className="border-b border-blue py-2 text-center">0</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    Status of the incidents and actions taken with reference to
                    the following:
                  </td>
                  <td className="border-b border-blue py-2 text-center">0</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    i. Incident reviewed by the organisation;
                  </td>
                  <td className="border-b border-blue py-2 text-center">0</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    ii. Remediation plans being implemented;
                  </td>
                  <td className="border-b border-blue py-2 text-center">0</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    iii. Remediation plans that have been implemented, with
                    results reviewed through routine internal management review
                    processes;
                  </td>
                  <td className="border-b border-blue py-2 text-center">0</td>
                </tr>
                <tr>
                  <td className="border-b border-blue py-2">
                    iv. Incident no longer subject to action
                  </td>
                  <td className="border-b border-blue py-2 text-center">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
