'use client';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import ManagementCard from '../cards/managementCard/managementCard';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
const boardPriorities = [
  { name: 'Strategic Planning', percentage: 19 },
  { name: 'Risk Management', percentage: 16 },
  { name: 'Financial Performance', percentage: 15 },
  { name: 'Sustainability', percentage: 10 },
  { name: 'Governance', percentage: 9 },
  { name: 'Internal Controls', percentage: 8 },
  { name: 'Customer Experience', percentage: 8 },
  { name: 'People', percentage: 5 },
  { name: 'IT Strategy', percentage: 5 },
  { name: 'Regulatory Matters', percentage: 5 },
];
const highlights = [
  {
    category: 'Regulatory Matters',
    items: [
      'Appointment of Chief Information Security Officer (CISO)',
      'Develop a Board approved Personal Data Protection Policy',
      'Implementation of CSE listing rule No. 9 - Corporate Governance',
      'Appointment of Key Responsible Persons for regulatory reporting',
    ],
  },
  {
    category: 'Committees of the Board',
    items: [
      'Appointed Board Committee for Sustainability',
      'Expanded mandate of Nominations & Governance Committee',
      'Adopting Terms of Reference of BISC',
    ],
  },
  {
    category: 'Appointments',
    items: [
      'Appointment of Central Depository Systems (Pvt) Ltd., as Corporate Registrars',
    ],
  },
  {
    category: 'Strategy & Oversight',
    items: [
      'Board approved strategic plan from 2023/24 to 2025/26',
      'Periodic review of progress',
    ],
  },
  {
    category: 'Risk Management and Internal Control',
    items: [
      'Strengthened risk management function',
      'Review and updating risk related policies',
      'Updating Risk Appetite Statement (RAS)',
      'Implementation of exception monitoring process',
      'Implementation of ICAAP',
      'Review of Control Assessment Forms (CAF)',
    ],
  },
];

const externalDevelopments = [
  'Issue of Direction No. 1 of 2024 on Financial Reporting Requirements by CBSL',
  'Issue of ESG Sustainability Disclosure Standards by ISSB and subsequent amendments',
  'Issue of SLRS Sustainability Disclosure Standards by CA Sri Lanka',
  'Issue of Listing Rules',
  'Rule No. 9 on Corporate Governance by the Colombo Stock Exchange',
  'Revised Code of Best Practice on Corporate Governance issued by CA Sri Lanka',
];

const shareholderCommunications = [
  { topic: 'Annual Report 2022/23', date: '07 June 2023' },
  { topic: 'Annual General Meeting', date: '30 June 2023' },
  { topic: 'Q1 Performance', date: '19 July 2023' },
  { topic: 'Q2 Performance', date: '18 Oct 2023' },
  { topic: 'Q3 Performance', date: '17 Jan 2024' },
  { topic: 'Appointment of Registrars', date: '09 Jan 2024' },
  { topic: 'Q4 Performance', date: '15 May 2024' },
];

const chartOptions = {
  chart: {
    type: 'bar' as const,
    height: 350,
    background: '#fff',
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val: number) {
      return val + '%';
    },
    style: {
      colors: ['text-blue'],
    },
  },
  xaxis: {
    categories: boardPriorities.map((item) => item.name),
    labels: {
      style: {
        colors: 'text-blue',
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: 'text-blue',
      },
    },
  },
  title: {
    text: 'Board Priorities',
    align: 'center' as const,
    style: {
      color: 'text-blue',
    },
  },
  theme: {
    mode: 'dark' as const,
  },
};

const chartSeries = [
  {
    name: '% of Time Spent',
    data: boardPriorities.map((item) => item.percentage),
  },
];
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

const beforeEachMeeting = [
  'Meeting calendar is prepared by the Company Secretary annually in advance and communicated to all Board members',
  'The Company Secretary seeks advice from the Chairman and the Managing Director to set the agenda',
  "Routine matters on the agenda include: discussions on strategy, the Company's performance, Industry Performance, Financial Results, Treasury updates, status of Human Resources, Risk Management and Compliance, progress on Company's digital initiatives, status on Cyber Security and Data Privacy etc.",
  'A Board approved procedure is in place to include additional matters and proposals to the Agenda by Directors',
  'The agenda and the information pack containing relevant Board Papers are uploaded to a secure portal at least seven (07) working days prior to the meeting date to give Directors remote access',
  'Selected members of the Senior Management / Board Committees may also be invited to be present at Board Meetings where necessary',
  "All Directors are allowed to reach the Company's Senior Management to obtain necessary information or clarifications. They also have the right to seek independent professional advice",
];

const boardMembers = [
  {
    name: 'Mr. G A R D Prasanna',
    designation: 'Chairman / Non-Independent Non-Executive Director',
    tenure: 2,
    gender: 'Male',
    age: 53,
    eligibleToAttend: '13/13',
    participation: { inPerson: 13, virtual: '-' },
    mandatoryCommittees: { BAC: '-', BIRMC: '-', BRCC: '4/4', BHRRC: '3/3' },
    voluntaryCommittees: { BSC: '-', BIC: '1/1' },
  },
  {
    name: 'Mr. Ashane Jayasekara',
    designation:
      'Independent Non-Executive Director Senior Independent Director',
    tenure: 6,
    gender: 'Male',
    age: 45,
    eligibleToAttend: '12/13',
    participation: { inPerson: 12, virtual: '13/13' },
    mandatoryCommittees: {
      BAC: '6/6',
      BIRMC: '4/4',
      BRCC: '3/3',
      BHRRC: '7/7',
    },
    voluntaryCommittees: { BSC: '2/2', BIC: '-' },
  },
  {
    name: 'Mr. Sumith Adhihetty',
    designation: 'Managing Director',
    tenure: 20,
    gender: 'Male',
    age: 73,
    eligibleToAttend: '11/13',
    participation: { inPerson: 11, virtual: '-' },
    mandatoryCommittees: { BAC: '1*', BIRMC: '1*', BRCC: '-', BHRRC: '-' },
    voluntaryCommittees: { BSC: '-', BIC: '-' },
  },
  {
    name: 'Mr. Niroshan Udage',
    designation: 'Deputy Managing Director',
    tenure: 17,
    gender: 'Male',
    age: 53,
    eligibleToAttend: '12/13',
    participation: { inPerson: 12, virtual: '-' },
    mandatoryCommittees: { BAC: '1*', BIRMC: '1*', BRCC: '-', BHRRC: '1*' },
    voluntaryCommittees: { BSC: '1*', BIC: '1/1' },
  },
  {
    name: 'Mr. B D A Perera',
    designation: 'Executive Director',
    tenure: 21,
    gender: 'Male',
    age: 56,
    eligibleToAttend: '12/13',
    participation: { inPerson: 12, virtual: '-' },
    mandatoryCommittees: { BAC: '1*', BIRMC: '1*', BRCC: '1*', BHRRC: '1*' },
    voluntaryCommittees: { BSC: '2/2', BIC: '-' },
  },
  {
    name: 'Mr. Ravindra Yatawara',
    designation: 'Executive Director',
    tenure: 8,
    gender: 'Male',
    age: 53,
    eligibleToAttend: '12/13',
    participation: { inPerson: 12, virtual: '-' },
    mandatoryCommittees: { BAC: '-', BIRMC: '-', BRCC: '-', BHRRC: '-' },
    voluntaryCommittees: { BSC: '2/2', BIC: '-' },
  },
  {
    name: 'Ms. Yogadinusha Bhaskaran',
    designation: 'Non-Executive Director',
    tenure: 8,
    gender: 'Female',
    age: 49,
    eligibleToAttend: '12/13',
    participation: { inPerson: 12, virtual: '12/13' },
    mandatoryCommittees: { BAC: '5/6', BIRMC: '-', BRCC: '-', BHRRC: '-' },
    voluntaryCommittees: { BSC: '-', BIC: '-' },
  },
  {
    name: 'Ms. Anandhiy Gunawardhana',
    designation: 'Independent Non-Executive Director',
    tenure: 5,
    gender: 'Female',
    age: 36,
    eligibleToAttend: '13/13',
    participation: { inPerson: 13, virtual: '13/13' },
    mandatoryCommittees: { BAC: '6/6', BIRMC: '4/4', BRCC: '-', BHRRC: '7/7' },
    voluntaryCommittees: { BSC: '2/2', BIC: '1/1' },
  },
  {
    name: 'Mr. Dharmadasa Rangalle',
    designation: 'Non-Executive Director',
    tenure: 4,
    gender: 'Male',
    age: 65,
    eligibleToAttend: '13/13',
    participation: { inPerson: 13, virtual: '-' },
    mandatoryCommittees: { BAC: '-', BIRMC: '-', BRCC: '-', BHRRC: '7/7' },
    voluntaryCommittees: { BSC: '-', BIC: '-' },
  },
  {
    name: 'Ms. Varshanamali Arsakulasuriya',
    designation: 'Independent Non-Executive Director',
    tenure: 2,
    gender: 'Female',
    age: 29,
    eligibleToAttend: '12/13',
    participation: { inPerson: 12, virtual: '-' },
    mandatoryCommittees: { BAC: '-', BIRMC: '-', BRCC: '3/3', BHRRC: '-' },
    voluntaryCommittees: { BSC: '-', BIC: '1/1' },
  },
];

const atTheBoardMeeting = [
  'The Chairman plays a key role in promoting open and active debate among Directors',
  'The Chairpersons of each Board committee will be called upon to provide an update on significant matters discussed at their respective Board sub-committee meetings',
  "The Managing Director provides a comprehensive update on the Company's business and operations and overview of the context in which these outcomes were achieved",
  'The Chief Financial Officer provides the Board with detailed monthly financial performance reports',
  'Other Business heads are invited to provide updates on business aspects under their purview',
  "Directors' interests and related party transactions are tabled at Board Meetings",
  'In a situation where a conflict of interest arises, the relevant Director shall recuse from the discussions and refrain voting on such matter',
  'Directors who are unable to attend a Board meeting in person are allowed to participate through virtual means',
  'The Company secretary maintains the minutes with adequate information',
];

const afterTheBoardMeeting = [
  'Minutes are first presented to the Chairman for approval prior to being circulated among the Directors',
  'Minutes of the meetings are circulated within two weeks after the meeting date',
  'Strong emphasis is placed on encouraging continuous and ongoing engagement of Directors in the matters of the Company',
  'Directors have access to senior management and may request any additional information to make informed and timely decisions',
  "The Managing Director keeps the Board updated on LB's performance and prospects vis-a-vis the prevailing economic and regulatory climate",
  'Special Board meetings are also convened on occasion as and when the need arises',
];

const informationAndTraining = {
  information: [
    'The Chairman ensures that the Board has sufficient information provided in a timely manner to be discussed at the meeting. He is assisted in this by the CEO and the Company Secretary.',
    'Additionally, the Directors have access to the key management personnel to clarify matters set before them.',
    'The Chairpersons of the Board Committees also follow the same procedure for their meetings.',
    'The Senior Leadership of the Company take care to provide information in a concise but comprehensive manner, using reliable and verifiable sources of information where possible.',
    'Regular agenda items typically have well established formats that facilitate location of information and ease of review.',
  ],
  training: [
    'All new Directors have an induction programme which is determined by the Chairman, CEO and the Company Secretary.',
    'New Directors receive an orientation pack with relevant external and internal documentation to ensure they have the requisite knowledge of the company and its operations.',
    'Directors are also given the opportunity to meet with the Senior Management.',
    'Directors further benefit from regular training programmes throughout their tenure to support ongoing knowledge enhancement and also to inform them of economic, regulatory and industry trends.',
    'Each Director receives adequate training hours annually.',
    'During the year following training sessions were conducted to the Board of Directors:',
    '- AML/CFT regulations',
    '- Information and cyber security risk awareness',
    '- Laws and regulations surrounding Personal Data Protection',
    '- Potential risk of Robotics Process Automation',
  ],
};

const inductionPack = [
  'Articles of Association',
  'Latest annual report and quarterly financial statements',
  'Minutes of the previous meeting',
  'Code of Conduct',
  'Board Charter and other key policies',
];

const tableData = {
  corporateValues: [
    'Excellence',
    'Ethics',
    'Transparency',
    'Innovation',
    'Professionalism',
    'Quality',
  ],
  codeOfConduct: [
    'General Conduct & Compliance',
    'Conflict of Interest',
    'Bribery & Corruption',
    'Entertainment & Gifts',
    'Accurate Record Keeping',
    'Confidentiality',
    'Safeguarding of Assets',
  ],
  policies: [
    'Anti-Bribery & Corruption Policy',
    'Whistle-blowing Policy',
    'Human Resource Policy',
    'Code of Conduct',
    'Policy on Managing conflict of interests',
    'Financial Consumer Protection Policy',
  ],
};

export default function CorporateGovernance() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-4 h-[654px] overflow-auto grid grid-cols-1 gap-6 custom-scrollbar">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <ManagementCard
            name={'G A R D Prasanna'}
            title={''}
            position={'Chairman'}
            image={'/images/annual-report/prasannaA.png'}
            height="fit-content"
          />
        </div>
        <div className="xl:col-span-2">
          <div className="bg-white p-6 rounded-lg text-blue h-full">
            <h2 className="text-xl font-bold mb-2">
              MESSAGE FROM THE CHAIRMAN
            </h2>
            <p>
              Corporate governance is the bedrock on which successful
              institutions are built to last. Standing strong for over 50 years,
              LB Finance has continuously set its sights beyond regulatory
              requirements to uphold principles of good governance embedded in
              voluntary standards and codes of governance. This approach has
              served us well, particularly as we navigated three consecutive
              years of the pandemic and the economic crisis with resilience,
              honouring our commitments to stakeholders.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg text-blue">
        <p>
          We are pleased to state, we maintained a steadfast commitment to
          upholding transparency, accuracy, and compliance with regulatory
          standards throughout the fiscal year. Corporate governance is the
          bedrock on which successful institutions are built to last. Standing
          strong for over 50 years, LB Finance has continuously set its sights
          beyond regulatory requirements to uphold principles of good governance
          embedded in voluntary standards and codes of governance. This approach
          has served us well, particularly as we navigated three consecutive
          years of the pandemic and the economic crisis with resilience,
          honouring our commitments to stakeholders. Building trust in the
          institution is key to sustainable growth and feedback from
          stakeholders serve as a barometer, providing valuable insights on the
          issues that need to be addressed.
        </p>
        <p>
          The year under review saw the Board of LB Finance increased our focus
          on corporate governance as there were several developments externally
          that needed review and action to ensure that LB Finance structures
          remain future ready and resilient. The Colombo Stock Exchange issued a
          new Listing Rules on Corporate Governance for public listed companies
          and the Board reviewed the regulation to determine gaps and how they
          should be addressed. Actions taken and plans for compliance during the
          current financial year are set out in the Corporate Governance Report
          that follows. It was noted that LB Finance was compliant with many of
          the requirements and needed to address only a few areas which will be
          effective from 1st October 2024 onwards, affirming our levels of
          compliance.
        </p>
        <p>
          The Institute of Chartered Accountants (CA) of Sri Lanka also revised
          the Code of Best Practice on Corporate Governance with changes mainly
          to sustainability reporting and we have set out our compliance with
          the same in this report.
        </p>
        <p>
          The issue of the SLFRS Sustainability Disclosure Standards in January
          2024 mandating sustainability reporting necessitates significant
          changes to governance, strategy, risk management and the metrics and
          targets set. As it becomes effective for reporting period beginning in
          2025, we are commencing our journey to complying with the requirements
          proactively. I am pleased to note that the commitment to
          sustainability over the past decade has provided a head start in
          meeting the requirements. We have formed a Board Sub Committee which
          will have responsibility for oversight of sustainability related
          matters.
        </p>
        <p>
          The board sub committees were active, driving progress in their areas
          of oversight and their reports are set out at the end of the Corporate
          Governance report. Risk management continues to be an important area
          with significant transformations to strengthen capabilities and
          processes as many risks continue to remain volatile. The Board Audit
          Committee (BAC) plays a key role in ensuring the effective operation
          of a comprehensive system of internal controls supporting timely and
          reliable financial reporting. The Board Nominations & Governance
          Committee (BNGC) and the newly appointed Board Sustainability
          Committee (BSC) are developing a new agenda to steer LB Finance
          through necessary changes. The Board Human Resource and Remuneration
          Committee (BHRRC) continues to play a key role in ensuring that
          Directors’ remuneration and overall remuneration policies serve the
          long term interests of the company as well as the short term. The
          Board Integrated Risk Management Committee (BIRMC) continues to
          navigate LBF through an uncertain landscape while the Board
          Information Security Committee (BISC) contributes to the highly
          specialised area of data and information protection which is seeing
          elevated threat levels. The Board Related Party Transactions Review
          Committee (BRPTRC) continues to ensure discharging of their regulatory
          mandate, directing the necessary communications.
        </p>
        <p>
          The Annual General Meeting of the Shareholders is on 28 June 2024 at
          the Auditorium of the Corporate Office and is the main platform for
          engaging shareholders and notice of meeting is set out on page 431 in
          this regard. We welcome your active participation at the AGM where the
          Board and I look forward to interacting with you.
        </p>
        <p>
          The Board is pleased to report that the Company has applied the
          principles and complied with the corporate governance directives set
          out under the Finance Business Act and the covenants recommended in
          the Code of Best Practice on Corporate Governance, issued by the
          Institute of Chartered Accountants of Sri Lanka and Continuous Listing
          Rules on Corporate Governance issued by Colombo Stock Exchange (CSE).
          Furthermore, on behalf of the Board, I wish to declare that the Board
          of Directors, Senior Management and employees of LB Finance PLC have
          acted in good faith in conducting the affairs of the Company.
        </p>
      </div>

      <div className="bg-white text-blue rounded-lg p-6 gap-6">
        <Image
          src="/images/annual-report/prasannaSig.png"
          alt="G A R D Prasanna Signature"
          width={150}
          height={50}
        />
        <p className="font-bold">G A R D Prasanna</p>
        <p>Chairman</p>
        <p>27 May 2024</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <ManagementCard
            name={'Ashane Jayasekara'}
            title={''}
            position={'Senior Director'}
            image={'/images/annual-report/ashaneA.png'}
            height="fit-content"
          />
        </div>
        <div className="md:col-span-2">
          <div className="bg-white p-6 rounded-lg text-blue h-full">
            <h2 className="text-xl font-bold mb-2">
              REPORT OF THE SENIOR INDEPENDENT DIRECTOR
            </h2>
            <p>
              The Board has a strong representation of Independent Directors
              that helps to maintain objectivity of the Board which is vital for
              sound corporate governance. The Independence of each Director has
              been established based on the information and declaration
              submitted by each Independent Director.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg text-blue">
        <p>
          The appointment of the Senior Independent Director was made as per the
          requirements stipulated in the Finance Business Act Direction No. 5 of
          2021 Corporate Governance.
        </p>
        <p>
          The objective of the appointment of a Senior Independent Director is
          to ensure the greater independent element in proceedings of the Board
          and in all deliberations by the Board either at Board meetings or in
          resolutions circulated amongst the Board. In order to facilitate the
          functions of Senior Director, a Board approved Terms of Reference is
          available which define the roles, responsibilities and authority of
          the Senior Director function.
        </p>
        <p>
          The Board has a strong representation of Independent Directors that
          helps to maintain objectivity of the Board which is vital for sound
          corporate governance. The Independence of each Director has been
          established based on the information and declaration submitted by each
          Independent Director. Accordingly, the Board of Directors has
          concluded that the all the Independent Directors of the Company are
          compliant with the independent criteria set by “Finance Business act
          direction no. 5 of 2021”, “CSE listing Rule no. 9 Corporate
          Governance” and “Code of best practice of Corporate Governance issued
          by Institute of Chartered Accountants of Sri Lanka”.
        </p>
        <p>
          During the year under review, two (2) meetings were conducted by the
          Senior Independent Director with the Non-Executive Directors without
          the presence of Executive Directors to discuss matters relating to the
          Company and the operations of the Board. The meeting with Independent
          Directors without the presence of Non-Executive Directors and
          Executive Directors will be held in financial year 2024/25.
        </p>
        <p>
          As required by the “Finance Business act direction no. 5 of 2021”, the
          Non-Executive Directors have assessed the performance of the
          Chairperson of the Board.
        </p>
      </div>

      <div className="bg-white text-blue rounded-lg p-6 ">
        <Image
          src="/images/annual-report/ashene-sig.png"
          alt="Ashane Jayasekara Signature"
          width={150}
          height={50}
        />
        <p className="font-bold">Ashane Jayasekara</p>
        <p>Independent Non-Executive Director/ Senior Independent Director</p>
        <p>27 May 2024</p>
      </div>

      <div className="bg-white p-6 rounded-lg text-blue">
        <p>
          Corporate governance continues to evolve at LB Finance, ensuring our
          structures, policies and processes are aligned to current developments
          in regulation, voluntarily adopted international standards and our own
          assessment of economic, social and environmental issues that we impact
          or impact us
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg text-blue">
        {/* <Chart
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height={350}
        /> */}
        <img
          src="/images/charts/coparateStuwardship/boardPriorities.png"
          alt="ownership image"
          className="w-full mb-4 rounded-lg"
        />
      </div>

      {/* Highlights Section */}
      <h3 className="text-xl font-bold">HIGHLIGHTS</h3>

      {highlights.map((category, index) => (
        <div key={index} className="bg-white p-6 rounded-lg text-blue">
          <h4 className="font-bold mb-4">{category.category}</h4>
          <ul className="list-disc pl-5">
            {category.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="bg-white p-6 rounded-lg text-blue">
        <h3 className="text-xl font-bold mb-4">External Developments</h3>
        <ul className="list-disc pl-5">
          {externalDevelopments.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Shareholder Communications Table */}
      <div className="bg-white p-6 rounded-lg text-blue">
        <h3 className="text-xl font-bold mb-4">
          Key Shareholder Communications
        </h3>
        <table className="w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">TOPIC</th>
              <th className="border px-4 py-2">DATE</th>
            </tr>
          </thead>
          <tbody>
            {shareholderCommunications.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.topic}</td>
                <td className="border px-4 py-2">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Corporate Governance Matters */}
      <div className="bg-white p-6 rounded-lg text-blue">
        <h3 className="text-xl font-bold mb-4">CORPORATE GOVERNANCE MATTERS</h3>
        <p>
          As a Company engaged in the business of finance, our business license
          is issued by the Monetary Board of the Central Bank of Sri Lanka which
          also issues directions from time to time. The Board is also cognizant
          of the need to maintain the trust of its depositors and confidence of
          its borrowing customers to act in good faith as custodians of their
          wealth and providers of capital for their needs – in other words,
          maintain our social license to operate. Our governance framework is
          designed to ensure that these two licenses which are necessary for our
          continuity are maintained without any impairment. The legal enactments
          and regulations support our business licenses while we look to a range
          of voluntary frameworks and internal policies adopting best practice
          to support the social license as reflected in the Governance
          Framework. Arguably, the social license is perhaps, more fragile than
          the business license and the Board and the Senior Management are
          cognizant of this.
        </p>
      </div>

      <h2 className="text-xl font-bold">A FRAMEWORK FOR GOVERNANCE</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inputs Section */}
        <div className="bg-white text-blue p-6 rounded-lg">
          <div>
            <h2 className="font-bold">INPUTS</h2>
            <div className="mt-2 ">
              <div>
                <h3 className="text-[#0A3D5F] bg-[#F69328] p-2 font-bold">
                  Collective Responsibilities
                </h3>
                <ul className="pl-4">
                  <li>Strategic guidance</li>
                  <li>Policy framework</li>
                  <li>Resource management</li>
                  <li>Risk management</li>
                  <li>Accountability</li>
                  <li>Performance oversight</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#0A3D5F] bg-[#79C3E8] p-2 font-bold">
                  Regulatory Requirements
                </h3>
                <ul className="pl-4">
                  <li>The Finance Business Act No. 42 of 2011</li>
                  <li>Leasing act No 56 of 2000</li>
                  <li>Companies Act No.7 of 2007</li>
                  <li>Listing Rules of the Colombo Stock Exchange</li>
                  <li>Shop & Office Act</li>
                  <li>Sri Lanka Accounting & Auditing Standards Act</li>
                  <li>Personal Data Protection Act</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#0A3D5F] bg-[#73BE73] p-2 font-bold">
                  Voluntary Frameworks
                </h3>
                <ul className="pl-4">
                  <li>Code of Best Practice on Corporate Governance</li>
                  <li>GRI Standards</li>
                  <li>SLFRS Sustainability Disclosure Standards</li>
                  <li>Checklist of Transparency International Sri Lanka</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#0A3D5F] bg-[#DD1B1B] p-2 font-bold">
                  Authoritative Documents
                </h3>
                <ul className="pl-4">
                  <li>Articles of Association</li>
                  <li>Policy Framework</li>
                  <li>Code of Conduct</li>
                  <li>Organisation Structure</li>
                  <li>
                    Charters/Terms of Reference of Subcommittees and Management
                    Committees
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Board Processes Section */}
        <div className="bg-white text-blue p-6 rounded-lg">
          <h2 className="font-bold">BOARD PROCESSES</h2>
          <div className="mt-2">
            <div>
              <h3 className="text-[#0A3D5F] bg-[#F69328] p-2 font-bold">
                Tone at the Top & Culture
              </h3>
              <div className="pl-4">
                <p>
                  The Board is responsible for setting the tone at the top, a
                  duty that is taken very seriously.
                </p>
                <ul>
                  <li>Self Evaluation</li>
                  <li>Meetings & Minutes</li>
                  <li>Work of Committees</li>
                  <li>Training & Induction</li>
                  <li>Information & Exercising Judgement</li>
                </ul>
              </div>
            </div>
            <div>
              {/* <h3 className="text-[#0A3D5F] bg-[#79C3E8] p-2 font-bold">
                Social License
              </h3> */}
              <ul className="pl-4">
                <li>
                  The culture of the organization is key to effective operation
                  of internal controls, compliance and performance.
                </li>
                <li>
                  The Board meets monthly. Minutes are maintained by the Company
                  Secretary and signed by the Chairman.
                </li>
                <li>
                  Areas where more detailed reviews are required are delegated
                  to committees who report actively and escalate matters of
                  concern.
                </li>
                <li>
                  Board members are provided sufficient relevant information
                  enabling them to exercise their professional judgement.
                </li>
                <li>
                  Board members undertake learning and training activities on
                  their own. Collectively, they receive updates from senior
                  management and external experts.
                </li>
                <li>
                  The self-evaluations are key to driving improvements in Board
                  processes and effective oversight.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Outputs Section */}
        <div className="bg-white text-blue p-6 rounded-lg">
          <h2 className="font-bold">OUTPUTS</h2>
          <div className="mt-2 space-y-2">
            <div className="bg-[#F69328] p-2">
              <h3 className="text-[#0A3D5F] font-bold">
                Effective resource allocation to strategic priorities
              </h3>
            </div>
            <div className="bg-[#79C3E8] p-2">
              <h3 className="text-[#0A3D5F] font-bold">
                Informed and objective decisions on matters placed before the
                Board
              </h3>
            </div>
            <div className="bg-[#73BE73] p-2">
              <h3 className="text-[#0A3D5F] font-bold">
                Awareness and management of impacts
              </h3>
            </div>
            <div className="bg-[#DD1B1B] p-2">
              <h3 className="text-[#0A3D5F] font-bold">Compliance</h3>
            </div>
            <div className="bg-[#F69328] p-2">
              <h3 className="text-[#0A3D5F] font-bold">
                Identification of early warning signs on potential risks
              </h3>
            </div>
          </div>
        </div>

        {/* Outcomes Section */}
        <div className="bg-white text-blue p-6 rounded-lg">
          <h2 className="font-bold">OUTCOMES</h2>
          <div className="mt-2 space-y-2">
            <div className="bg-[#F69328] p-2">
              <h3 className="text-[#0A3D5F] font-bold">
                Sustainable and profitable growth for investors
              </h3>
            </div>
            <div className="bg-[#79C3E8] p-2">
              <h3 className="text-[#0A3D5F] font-bold">
                Opportunities for wealth creation and access to capital for
                customers
              </h3>
            </div>
            <div className="bg-[#73BE73] p-2">
              <h3 className="text-[#0A3D5F] font-bold">
                A resilient business model
              </h3>
            </div>
            <div className="bg-[#DD1B1B] p-2">
              <h3 className="text-[#0A3D5F] font-bold">Contribution to SDGs</h3>
            </div>
          </div>
        </div>
      </div>

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
        <div className="bg-[#ebf6ed] p-4 rounded-md shadow-md">
          <h3 className="text-[#0A3D5F] font-bold">A Balanced Board</h3>
          {/* <Chart
            options={balancedBoardOptions}
            series={balancedBoardData.series}
            type="bar"
          /> */}
          <img
            src="/images/charts/coparateStuwardship/balanceBoard.png"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />
        </div>

        {/* Gender Representation Chart */}
        <div className="bg-[#ebf6ed] p-4 rounded-md shadow-md">
          <h3 className="text-[#0A3D5F] font-bold">Gender Representation</h3>
          {/* <Chart
            options={genderChartOptions}
            series={genderChartData.series}
            type="pie"
          /> */}
          <img
            src="/images/charts/coparateStuwardship/genderRepresentation.png"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />
        </div>

        {/* Age Diversity Chart */}
        <div className="bg-[#ebf6ed] p-4 rounded-md shadow-md">
          <h3 className="text-[#0A3D5F] font-bold">Age Diversity</h3>
          {/* <Chart
            options={ageDiversityOptions}
            series={ageDiversityData.series}
            type="bar"
          /> */}
          <img
            src="/images/charts/coparateStuwardship/ageDeversity.png"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />
        </div>

        {/* Collective Knowledge Chart */}
        <div className="bg-[#ebf6ed] p-4 rounded-md shadow-md">
          <h3 className="text-[#0A3D5F] font-bold">Collective Knowledge</h3>
          {/* <Chart
            options={collectiveKnowledgeOptions}
            series={collectiveKnowledgeData.series}
            type="bar"
          /> */}
          <img
            src="/images/charts/coparateStuwardship/collectiveKnowledge.png"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />
        </div>

        {/* Tenure of Services Chart */}
        <div className="bg-[#ebf6ed] p-4 rounded-md shadow-md">
          <h3 className="text-[#0A3D5F] font-bold">Tenure of Services</h3>
          {/* <Chart
            options={tenureOptions}
            series={tenureData.series}
            type="bar"
          /> */}
          <img
            src="/images/charts/coparateStuwardship/tenureServices.png"
            alt="ownership image"
            className="w-full mb-4 rounded-lg"
          />
        </div>
      </div>

      <h3 className="text-xl font-bold">GOVERNANCE STRUCTURE</h3>
      <div className="bg-white text-blue rounded-lg p-6">
        <p>The governance structure of the Company is as follows:</p>
        <img
          src="/images/annual-report/goverance-structure.png"
          alt="governance structure"
          className="w-full"
        />
      </div>

      <div className="bg-white text-blue rounded-lg p-6">
        <h3 className="font-bold text-lg">Balance of Power</h3>
        <p>
          A balance of power has been established through segregation of the
          roles of the Chairman and Managing Director / Chief Executive Officer
          as well as the appointment of a Senior Director and the clear
          articulation of their roles.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#faf4eb] rounded-lg">
        <div className="p-4">
          <div className="rounded-lg p-4 bg-[#d4a262] text-white h-full flex flex-col justify-center">
            <p>Role of Chairman</p>
            <p>(Non-Independent Non-Executive Director)</p>
          </div>
        </div>
        <div className="rounded-lg p-4 text-blue">
          <ul className="list-disc list-inside">
            <li>
              Ensure the Board meets regularly to discuss relevant matters
            </li>
            <li>
              Maintain the appropriate balance of power between ED’s and NED’s
            </li>
            <li>
              Secure the effective participation of both ED’s and NED’s in all
              Board matters
            </li>
            <li>Implement decisions/directions of the regulator</li>
            <li>
              Prepare the agenda for each Board Meeting or delegate such
              function and to maintain minutes in an orderly manner to the
              company secretary
            </li>
            <li>
              Ensure appropriate steps are taken to maintain effective
              communication with shareholders and that the views of shareholders
              are communicated to the Board
            </li>
            <li>
              Oversee the annual assessment on the performance and the
              contribution during the past 12 months of the Board and the MD/CEO
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#d3d8eb] rounded-lg">
        <div className="p-4">
          <div className="rounded-lg p-4 bg-[#466fb4] text-white h-full flex flex-col justify-center">
            <p>Role of Managing Director/</p>
            <p>Chief Executive Officer</p>
          </div>
        </div>
        <div className="rounded-lg p-4 text-blue">
          <ul className="list-disc list-inside">
            <li>
              Implement business and risk strategies in order to achieve the
              LBF’s strategic objectives
            </li>
            <li>
              Establish an appropriate management structure that promotes
              accountability, and transparency throughout LBF’s operations, and
              preserves the effectiveness and independence of control functions
            </li>
            <li>
              Promote, together with the Board, a sound corporate culture within
              LBF which reinforces ethical, prudent and professional behaviour
            </li>
            <li>
              Ensure implementation of proper compliance culture and being
              accountable for accurate submission of information to the
              regulator
            </li>
            <li>
              Strengthen the regulatory and supervisory compliance framework
            </li>
            <li>
              Address the supervisory concerns and non-compliance with
              regulatory requirements or internal policies in a timely and
              appropriate manner
            </li>
            <li>
              Devote the whole of the professional time to the service of LBF
              and shall not carry on any other business, except as a
              Non-Executive Director of another Company
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#cee8d2] rounded-lg">
        <div className="p-4">
          <div className="rounded-lg p-4 bg-[#58c07d] text-white h-full flex flex-col justify-center">
            <p>Role of Senior Director</p>
          </div>
        </div>
        <div className="rounded-lg p-4 text-blue">
          <ul className="list-disc list-inside">
            <li>Bring an objective and unbiased perspective to the Board</li>
            <li>
              Participate in Board meetings, provide expertise, and contribute
              to strategic decision-making
            </li>
            <li>
              Contribute to performance evaluation of MD/CEO’s performance
              evaluation and succession planning
            </li>
            <li>
              Conduct semi-annual meetings with only independent directors to
              find out if there are any concerns
            </li>
          </ul>
        </div>
      </div>
      <div className="p-6 rounded-lg text-blue bg-white">
        <p>
          Additionally, the presence of independent directors who are reputed,
          knowledgeable and experienced professionals serve as an additional
          balancing mechanism
        </p>
      </div>

      <div className="p-6 rounded-lg text-blue bg-white">
        <h3 className="font-bold text-lg">Company Secretary</h3>
        <p>
          The Company Secretary manages administration of the matters of the
          Board and guides the Board in discharging their duties and
          responsibilities. Directors have the right to reach out individually
          to the Company Secretary to seek out advice or guidance on relevant
          matters. Company Secretary is also required to facilitate any training
          requirements of Directors in order to keep them updated on the latest
          developments in legislation and regulations applicable to the Company.
          The appointment or removal of the Company Secretary is a matter for
          the Board as a whole. PW Corporate Secretarial (Pvt) Ltd., serves as
          the Company Secretary for LB Finance PLC.{' '}
        </p>
      </div>

      <h3 className="font-bold text-lg">
        APPOINTMENTS, RE-ELECTIONS, RETIREMENT & RESIGNATIONS
      </h3>

      <div className="p-6 rounded-lg text-blue bg-white">
        <h3 className="font-bold text-lg">Appointments & Re-elections</h3>
        <p>
          The Board Nominations & Governance Committee plays a key role in the
          selection of candidates for appointment as Directors as they recommend
          candidates to the Board for their approval. The Committee assesses the
          skills, expertise and other attributes required to meet the business
          needs of the Company and seeks suitable candidates to meet the
          requirements. Potential candidates are vetted and screened against fit
          and proper criteria and, in the case of Independent Directors,
          criteria to determine independence as well. Candidates who meet the
          relevant criteria are recommended to the Board for appointment
        </p>
        <p>
          Non-Executive Directors are appointed by the shareholders subject to
          retirement and re-elected at the Annual General Meeting. Executive
          Directors are appointed by the Board and typically serve the duration
          of their employment contract. Executive Directors who reach the age of
          70 years are re-appointed annually at the AGM subject
        </p>

        <p>
          to approval from CBSL. Non-Executive Directors who hold more than 10%
          of shares, directly or indirectly or appointed to represent a
          shareholder who directly or indirectly holds more than 10% may serve a
          period exceeding 9 years with the approval of the Director, Department
          of Supervision of Non-Bank Financial Institutions. However, the number
          of Directors exceeding 9 years cannot exceed 1/4 of the Board. The
          Board also has the power to fill any casual vacancy that may arise
          during the year. In such cases, the recommendation of the Board
          Nominations & Governance Committee will be vetted and approved by the
          Board. Directors appointed during the year will retire at the next AGM
          and are eligible for re-election by shareholders at the same meeting.
          All appointments have to be approved by the Director, Department of
          Supervision of Non-Bank Financial Institutions. In all cases, all
          appointments of new Directors are informed to the CSE together with a
          brief profile of the Director, clearly stating in what capacity the
          Director has been appointed.
        </p>

        <p>
          The election or re-election of each Director is a separate resolution
          and is set out in the Notice of Meeting on page 432 of this report.
        </p>
      </div>

      <div className="p-6 rounded-lg text-blue bg-white">
        <h3 className="font-bold text-lg">Retirement & Resignations</h3>
        <p>
          Each year, 1/3 of Directors eligible for re-election must retire with
          the oldest Directors being those who retire. Such Directors may offer
          themselves for re-election by shareholders at the annual general
          meeting and a separate resolution is presented to shareholders for
          each such election of a Director. Non-Executive Directors typically
          retire after 9 years, except for those holding over 10% directly or
          indirectly or representing such a shareholder. Directors may also
          resign at any time by writing to the Chairman informing him of the
          reasons for the resignation and receiving formal acceptance of the
          resignation subject to the approval from Director of Department of
          Supervision of Non Bank Financial Institutions. CSE is immediately
          informed about the resignations or retirements of Directors together
          with their shareholding, if any, in the Company.
        </p>
      </div>

      <div className="bg-white p-4 rounded-md shadow-md">
        <h2 className="text-[#0A3D5F] font-bold">Work of Committees</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white mt-4 text-blue">
            <thead className="text-blue">
              <tr>
                <th className="text-left py-2 px-4 border-b-2 border-blue">
                  Committee
                </th>
                <th className="text-left py-2 px-4 border-b-2 border-blue">
                  Area of Oversight
                </th>
                <th className="text-left py-2 px-4 border-b-2 border-blue">
                  Link to Strategy
                </th>
                <th className="text-left py-2 px-4 border-b-2 border-blue">
                  Link to Capital
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-blue px-4 py-2">
                  <strong>
                    Board Nominations & Governance Committee (BNGC)
                  </strong>{' '}
                  <br /> Mr. Ashane Jayasekara - Chairperson <br /> Mr. G A R D
                  Prasanna <br /> Ms. Ashwini Natesan
                </td>
                <td className="border-b border-blue px-4 py-2">
                  <ul className="list-disc pl-5">
                    <li>
                      Review the Board structure, size, composition and
                      competencies
                    </li>
                    <li>Appointment of Board of Directors</li>
                    <li>
                      Overseeing the Board and the Senior Management succession
                      planning
                    </li>
                    <li>
                      Oversight the overall Governance Framework of the Company
                    </li>
                  </ul>
                </td>
                <td className="border-b border-blue px-4 py-2 text-center">
                  HC, SC
                </td>
                <td className="border-b border-blue px-4 py-2 text-center">
                  FC, IC
                </td>
              </tr>
              <tr>
                <td className="border-b border-blue px-4 py-2">
                  <strong>Board Audit Committee (BAC)</strong> <br /> Ms.
                  Yogadinuha Bhaskaran - Chairperson <br /> Mr. Ashane
                  Jayasekara <br /> Ms. Ashwini Natesan
                </td>
                <td className="border-b border-blue px-4 py-2">
                  <ul className="list-disc pl-5">
                    <li>
                      Reviewing the accuracy and integrity of the financial
                      reporting
                    </li>
                    <li>Internal and external assurance</li>
                    <li>
                      Reviewing the design and effectiveness of internal control
                      system and risk management
                    </li>
                  </ul>
                </td>
                <td className="border-b border-blue px-4 py-2 text-center">
                  FC, MC, IC
                </td>
                <td className="border-b border-blue px-4 py-2 text-center">
                  HC
                </td>
              </tr>
              <tr>
                <td className="border-b border-blue px-4 py-2">
                  <strong>
                    Board Human Resource and Remuneration Committee (BHRRC)
                  </strong>{' '}
                  <br /> Mr. Ashane Jayasekara - Chairperson <br /> Mr. G A R D
                  Prasanna <br /> Ms. Yanika Amaraekera
                </td>
                <td className="border-b border-blue px-4 py-2">
                  <ul className="list-disc pl-5">
                    <li>Remuneration policy</li>
                    <li>
                      Remuneration and compensations of Directors, Senior
                      Management and staff salaries in general
                    </li>
                    <li>Structure for staff performance evaluation</li>
                  </ul>
                </td>
                <td className="border-b border-blue px-4 py-2 text-center">
                  FC, MC
                </td>
                <td className="border-b border-blue px-4 py-2 text-center">
                  HC
                </td>
              </tr>
              <tr>
                <td className="border-b border-blue px-4 py-2">
                  <strong>
                    Board Integrated Risk Management Committee (BIRMC)
                  </strong>{' '}
                  <br /> Mr. Ashane Jayasekara - Chairperson <br /> Ms.
                  Yogadinuha Bhaskaran <br /> Ms. Ashwini Natesan
                </td>
                <td className="border-b border-blue px-4 py-2">
                  <ul className="list-disc pl-5">
                    <li>Risk Management Framework</li>
                    <li>Risk measurement, monitoring and management</li>
                    <li>
                      Compliance with regulatory and internal prudential
                      requirements
                    </li>
                    <li>Reviewing the business continuity planning</li>
                  </ul>
                </td>
                <td className="border-b border-blue px-4 py-2 text-center">
                  IC, SC, NC
                </td>
                <td className="border-b border-blue px-4 py-2 text-center">
                  FC, MC, HC
                </td>
              </tr>
              <tr>
                <td className="border-b border-blue px-4 py-2">
                  <strong>
                    Board Related Party Transactions Review Committee (BRPTRC)
                  </strong>{' '}
                  <br /> Ms. Ashwini Natesan - Chairperson <br /> Mr.
                  Dharamadasa Rangalle
                </td>
                <td className="border-b border-blue px-4 py-2">
                  <ul className="list-disc pl-5">
                    <li>Related party transaction policy</li>
                    <li>
                      Providing independent review, approval and oversight of
                      RPT
                    </li>
                    <li>Ensuring relevant market disclosures</li>
                  </ul>
                </td>
                <td className="border-b border-blue px-4 py-2 text-center">
                  HC, IC, SC
                </td>
                <td className="border-b border-blue px-4 py-2 text-center">
                  FC
                </td>
              </tr>
              <tr>
                <td className="border-b border-blue px-4 py-2">
                  <strong>Board Information Security Committee (BISC)</strong>{' '}
                  <br /> Ms. Ashwini Natesan - Chairperson <br /> Mr. B D A
                  Perera
                </td>
                <td className="border-b border-blue px-4 py-2">
                  <ul className="list-disc pl-5">
                    <li>
                      Strengthen the information security and technology risk
                      resilience process
                    </li>
                    <li>
                      Continuous evaluation and improvement of information/data
                      security policies controls and practices
                    </li>
                  </ul>
                </td>
                <td className="border-b border-blue px-4 py-2 text-center">
                  IC, SC, NC
                </td>
                <td className="border-b border-blue px-4 py-2 text-center">
                  FC, MC
                </td>
              </tr>
              <tr>
                <td className="border-b border-blue px-4 py-2">
                  <strong>Board Sustainability Committee (BSC)</strong> <br />{' '}
                  Ms. Yanika Amaraekera - Chairperson <br /> Mr. G A R D
                  Prasanna <br /> Mr. Niroshan Udage
                </td>
                <td className="border-b border-blue px-4 py-2">
                  <ul className="list-disc pl-5">
                    <li>
                      Oversight of processes in place to identify and manage
                      sustainability related risks and opportunities
                    </li>
                    <li>
                      Review the measures taken to ensure the long-term
                      sustainability of the Company in its ESG dimensions
                    </li>
                    <li>
                      Review the Company&#39;s plans and actions with regard to
                      ESG/Sustainability topics
                    </li>
                  </ul>
                </td>
                <td className="border-b border-blue px-4 py-2 text-center">
                  HC, IC, SC, NC
                </td>
                <td className="border-b border-blue px-4 py-2 text-center">
                  FC, MC, HC
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-blue bg-white p-6 rounded-lg">
        <p>
          The Board and Board Sub Committees are supported by Executive
          Management Committees which are listed below:
        </p>
      </div>
      <div className="bg-white text-blue p-6 rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white text-blue">
            <thead>
              <tr className="bg-white text-left">
                <th className="px-6 py-3 border-b-2 border-blue text-blue">
                  Executive Management Committee
                </th>
                <th className="px-6 py-3 border-b-2 border-blue text-blue">
                  Tasks
                </th>
                <th className="px-6 py-3 border-b-2 border-blue text-blue">
                  Members
                </th>
                <th className="px-6 py-3 border-b-2 border-blue text-blue">
                  Frequency of Meetings
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 border-b border-blue">
                  IT Security & Steering Committee (ITSSC)
                </td>
                <td className="px-6 py-4 border-b border-blue">
                  To ensure that IT strategy is aligned with the strategic goals
                  of the Company whilst its top most mandate is to find and
                  align business solutions that may leverage technology. ITSSC
                  also looks into information security-related matters on a
                  regular basis.
                </td>
                <td className="px-6 py-4 border-b border-blue">
                  <ul className="list-disc list-inside">
                    <li>Managing Director</li>
                    <li>Deputy Managing Director</li>
                    <li>Executive Director - Asset Management</li>
                    <li>Chief Financial Officer</li>
                    <li>Chief Information Officer</li>
                    <li>Chief Information Security Officer</li>
                    <li>Representatives from relevant departments</li>
                  </ul>
                </td>
                <td className="px-6 py-4 border-b border-blue">
                  Every other month
                </td>
              </tr>

              {/* Assets & Liability Committee (ALCO) */}
              <tr>
                <td className="px-6 py-4 border-b border-blue">
                  Assets & Liability Committee (ALCO)
                </td>
                <td className="px-6 py-4 border-b border-blue">
                  To monitor and manage the assets and liabilities of the
                  Company and also overall liquidity position to keep the
                  Company’s liquidity at healthy levels, whilst satisfying
                  regulatory requirements.
                </td>
                <td className="px-6 py-4 border-b border-blue">
                  <ul className="list-disc list-inside">
                    <li>Managing Director</li>
                    <li>Deputy Managing Director</li>
                    <li>Executive Directors</li>
                    <li>Head of Treasury</li>
                    <li>Head of Deposits</li>
                    <li>Chief Financial Officer</li>
                    <li>Assistant General Manager – Risk Management</li>
                  </ul>
                </td>
                <td className="px-6 py-4 border-b border-blue">Monthly</td>
              </tr>

              {/* Credit Committee (CC) */}
              <tr>
                <td className="px-6 py-4 border-b border-blue">
                  Credit Committee (CC)
                </td>
                <td className="px-6 py-4 border-b border-blue">
                  The committee shall be responsible for laying out the overall
                  credit policy for the Company. This includes setting lending
                  guidelines in conformity with credit risk appetite set by the
                  Board of Directors.
                </td>
                <td className="px-6 py-4 border-b border-blue">
                  <ul className="list-disc list-inside">
                    <li>Managing Director</li>
                    <li>Deputy Managing Director</li>
                    <li>Executive Directors</li>
                    <li>Deputy General Manager - Credit</li>
                    <li>Chief Financial Officer</li>
                    <li>Assistant General Manager – Risk Management</li>
                    <li>Senior Manager - BPD</li>
                  </ul>
                </td>
                <td className="px-6 py-4 border-b border-blue">Quarterly</td>
              </tr>

              {/* Sustainability Committee (SC) */}
              <tr>
                <td className="px-6 py-4 border-b border-blue">
                  Sustainability Committee (SC)
                </td>
                <td className="px-6 py-4 border-b border-blue">
                  The formulation and the review of the Company’s Sustainability
                  policy, and ensuring such activities are integrated into the
                  Company’s operations. Keeping in line with the Company’s
                  Environment, Social and Governance (ESG) focus, the Committee
                  is tasked with the responsibility of steering the Company’s
                  policy on sustainability which aimed at uplifting the
                  communities which work with and preserving the environment.
                </td>
                <td className="px-6 py-4 border-b border-blue">
                  <ul className="list-disc list-inside">
                    <li>Deputy Managing Director</li>
                    <li>Chief Financial Officer</li>
                    <li>Head of Treasury</li>
                    <li>
                      Senior Manager - Digital Strategy and Sustainability
                    </li>
                    <li>Representatives from relevant departments</li>
                  </ul>
                </td>
                <td className="px-6 py-4 border-b border-blue">
                  Meets when required
                </td>
              </tr>

              {/* Business Continuity Management Steering Committee (BCMSC) */}
              <tr>
                <td className="px-6 py-4 border-b border-blue">
                  Business Continuity Management Steering Committee (BCMSC)
                </td>
                <td className="px-6 py-4 border-b border-blue">
                  Committee is responsible for aligning BCM goals with business
                  goals and provides strategic direction and support in
                  establishing, implementing, operating, monitoring, reviewing
                  and improving the BCMSC.
                </td>
                <td className="px-6 py-4 border-b border-blue">
                  <ul className="list-disc list-inside">
                    <li>Deputy Managing Director</li>
                    <li>Senior Manager - BPD</li>
                    <li>Representatives from the relevant departments</li>
                  </ul>
                </td>
                <td className="px-6 py-4 border-b border-blue">
                  Meets when required
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-center text-white">
        Policy Framework
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {/* First Row */}
        <div className="col-span-1 bg-white p-4  rounded-lg text-blue">
          <h3 className="text-xl font-semibold mb-2 text-[#F79C42]">
            Policies relating to Board Matters
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>Dividend Policy</li>
            <li>Succession Plan for Key Responsible Persons</li>
            <li>Delegation of Authority</li>
          </ul>
          <p className="font-semibold">Number of Policies: 3</p>
        </div>

        <div className="col-span-1 bg-white p-4  rounded-lg text-blue">
          <h3 className="text-xl font-semibold mb-2 text-[#9DC87C]">
            Risk Management
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>TOR of BIRMC</li>
            <li>Integrated Risk Management Framework</li>
            <li>Operational Risk Management Framework and Policy</li>
            <li>Risk Appetite Statement</li>
          </ul>
          <p className="font-semibold">Number of Policies: 16</p>
        </div>

        <div className="col-span-1 bg-white p-4  rounded-lg text-blue">
          <h3 className="text-xl font-semibold mb-2 text-[#80C2D3]">
            IT & Information Security
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>Information Security Policy</li>
            <li>Disaster Recovery Plan</li>
            <li>Information Asset Management Procedure</li>
          </ul>
          <p className="font-semibold">Number of Policies: 6</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {/* Second Row */}
        <div className="col-span-1 bg-white p-4  rounded-lg text-blue">
          <h3 className="text-xl font-semibold mb-2 text-[#C891B2]">Credit</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Credit and Operations Manual</li>
            <li>Credit Committee Charter</li>
            <li>Recovery Procedure Manual</li>
          </ul>
          <p className="font-semibold">Number of Policies: 4</p>
        </div>

        <div className="col-span-1 bg-white p-4  rounded-lg text-blue">
          <h3 className="text-xl font-semibold mb-2 text-[#F49D98]">
            Governance, Audit and Compliance
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>Board Audit Committee Charter</li>
            <li>
              Anti Money Laundering, Countering the Financing of Terrorism and
              KYC Policy
            </li>
            <li>Board Sustainability Committee – Terms of Reference</li>
          </ul>
          <p className="font-semibold">Number of Policies: 7</p>
        </div>

        <div className="col-span-1 bg-white p-4  rounded-lg text-blue">
          <h3 className="text-xl font-semibold mb-2 text-[#5F789D]">
            Liquidity & Capital Management
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>Asset & Liability Management & Liquidity Management Policy</li>
            <li>Investment Policy</li>
            <li>ALCO Charter</li>
          </ul>
          <p className="font-semibold">Number of Policies: 3</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {/* Third Row */}
        <div className="col-span-1 bg-white p-4  rounded-lg text-blue">
          <h3 className="text-xl font-semibold mb-2 text-[#BF9EC3]">
            Human Resources
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>Human Resource Policy</li>
            <li>Code of Conduct</li>
          </ul>
          <p className="font-semibold">Number of Policies: 1</p>
        </div>

        <div className="col-span-1 bg-white p-4  rounded-lg text-blue">
          <h3 className="text-xl font-semibold mb-2 text-[#A5A5A5]">
            Financial Reporting and Asset Management
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>Impairment Policy Manual</li>
            <li>CBSL Reporting Regulation Manual</li>
            <li>Finance Manual</li>
          </ul>
          <p className="font-semibold">Number of Policies: 6</p>
        </div>

        <div className="col-span-1 bg-white p-4  rounded-lg text-blue">
          <h3 className="text-xl font-semibold mb-2 text-[#F5AFC7]">
            Other Products and Services
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>Foreign Currency Operations – Policy Manual</li>
            <li>
              Policy & Procedure for Development of new Products, Processes &
              Systems
            </li>
            <li>
              Procurement Manual – Administration, IT & Marketing Department
            </li>
          </ul>
          <p className="font-semibold">Number of Policies: 6</p>
        </div>
      </div>

      <div className="col-span-1 bg-white p-6  rounded-lg text-blue">
        <h2 className="text-2xl font-bold mb-4 text-[#0A3D5F]">
          Board Effectiveness
        </h2>
        <h3 className="text-xl font-semibold mb-4">Governance</h3>
        <p className="mb-4">
          Board effectiveness is key as it must uphold the commitments and
          discharge the duties set out in the governance framework as the body
          of persons charged with governance. Clear lines of delegation of
          authority and reporting have been established as set out in the
          Governance Structure with responsibilities and roles also clearly
          identified. The Board of LB Finance provides leadership and oversight
          with regular meetings facilitating review of progress, opportunities
          and threats and directions for further action.
        </p>
        <p className="mb-4">
          In discharging their duties, the Board also reserves the exclusive
          right to review and approve the following;
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Evaluating and approving of the Strategic Plan</li>
          <li>Evaluating and approving of the LBF’s Annual Budget</li>
          <li>
            Appointment of the MD/CEO of LBF, its Key Responsible Personnel and
            the CEOs of all its Subsidiaries
          </li>
          <li>
            Approval of the succession plan for the Senior Management including
            MD/CEO
          </li>
          <li>Determine and approve the organisation structure</li>
          <li>Evaluating and approval of any type of strategic decisions</li>
          <li>
            Appointment of Board Sub Committees and defining their scope of work
            and the extent of delegated powers and authority for them
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold ">Meetings & Minutes</h2>
      <div className="bg-white text-blue rounded-lg p-6 ">
        <p className="mb-4">
          The Board meets monthly with committees of the Board having varying
          frequencies as set out below in the Attendance matrix. Minutes are
          circulated within 14 days of the meeting and are ratified and signed
          by the Chairman at the next meeting. The Company Secretary is
          responsible for preparation and maintaining the minutes. Directors
          have access to minutes of the past months on their devices through a
          secure link and may request the Company Secretary for extracts of
          older minutes if required.
        </p>
      </div>

      <div className="bg-white text-blue rounded-lg p-6 ">
        <h3 className="text-xl font-bold mb-4">
          Attendance Matrix of the Board and Board Sub Committees
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="">
                <th className="px-2 py-1 border-b-2 border-blue">
                  Name of the Director
                </th>
                <th className="px-2 py-1 border-b-2 border-blue">
                  Designation
                </th>
                <th className="px-2 py-1 border-b-2 border-blue">
                  Tenure on the board (years)
                </th>
                <th className="px-2 py-1 border-b-2 border-blue">Gender</th>
                <th className="px-2 py-1 border-b-2 border-blue">Age</th>
                <th className="px-2 py-1 border-b-2 border-blue">
                  Eligible to attend/ attended
                </th>
                <th className="px-2 py-1 border-b-2 border-blue" colSpan={2}>
                  Participation
                </th>
                <th className="px-2 py-1 border-b-2 border-blue" colSpan={4}>
                  Mandatory
                </th>
                <th className="px-2 py-1 border-b-2 border-blue" colSpan={2}>
                  Voluntary
                </th>
              </tr>
              <tr>
                <th
                  className="px-2 py-1 border-b-2 border-blue"
                  colSpan={6}
                ></th>
                <th className="px-2 py-1 border-b-2 border-blue">In Person</th>
                <th className="px-2 py-1 border-b-2 border-blue">Virtual</th>
                <th className="px-2 py-1 border-b-2 border-blue">BAC</th>
                <th className="px-2 py-1 border-b-2 border-blue">BIRMC</th>
                <th className="px-2 py-1 border-b-2 border-blue">BRCC</th>
                <th className="px-2 py-1 border-b-2 border-blue">BHRRC</th>
                <th className="px-2 py-1 border-b-2 border-blue">BSC</th>
                <th className="px-2 py-1 border-b-2 border-blue">BIC</th>
              </tr>
            </thead>
            <tbody>
              {boardMembers.map((member, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                >
                  <td className="px-2 py-1 border-b border-blue">
                    {member.name}
                  </td>
                  <td className="px-2 py-1 border-b border-blue">
                    {member.designation}
                  </td>
                  <td className="px-2 py-1 border-b border-blue">
                    {member.tenure}
                  </td>
                  <td className="px-2 py-1 border-b border-blue">
                    {member.gender}
                  </td>
                  <td className="px-2 py-1 border-b border-blue">
                    {member.age}
                  </td>
                  <td className="px-2 py-1 border-b border-blue">
                    {member.eligibleToAttend}
                  </td>
                  <td className="px-2 py-1 border-b border-blue">
                    {member.participation.inPerson}
                  </td>
                  <td className="px-2 py-1 border-b border-blue">
                    {member.participation.virtual}
                  </td>
                  <td className="px-2 py-1 border-b border-blue">
                    {member.mandatoryCommittees.BAC}
                  </td>
                  <td className="px-2 py-1 border-b border-blue">
                    {member.mandatoryCommittees.BIRMC}
                  </td>
                  <td className="px-2 py-1 border-b border-blue">
                    {member.mandatoryCommittees.BRCC}
                  </td>
                  <td className="px-2 py-1 border-b border-blue">
                    {member.mandatoryCommittees.BHRRC}
                  </td>
                  <td className="px-2 py-1 border-b border-blue">
                    {member.voluntaryCommittees.BSC}
                  </td>
                  <td className="px-2 py-1 border-b border-blue">
                    {member.voluntaryCommittees.BIC}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white text-blue rounded-lg p-6 ">
        <h3 className="text-xl font-bold mb-2">BEFORE EACH MEETING</h3>
        <ul className="list-disc pl-5">
          {beforeEachMeeting.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white text-blue rounded-lg p-6 ">
        <h3 className="text-xl font-bold mb-2">AT THE BOARD MEETING</h3>
        <ul className="list-disc pl-5">
          {atTheBoardMeeting.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* After The Board Meeting Section */}
      <div className="bg-white text-blue rounded-lg p-6 ">
        <h3 className="text-xl font-bold mb-2">AFTER THE BOARD MEETING</h3>
        <ul className="list-disc pl-5">
          {afterTheBoardMeeting.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Information and Training Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white text-blue rounded-lg p-6 ">
          <h3 className="text-xl font-bold mb-2">Information</h3>
          <ul className="list-disc pl-5">
            {informationAndTraining.information.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white text-blue rounded-lg p-6 ">
          <h3 className="text-xl font-bold mb-2">Training & Induction</h3>
          <ul className="list-disc pl-5">
            {informationAndTraining.training.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Induction Pack Section */}
      <div className="bg-white text-blue rounded-lg p-6 ">
        <h3 className="text-xl font-bold mb-2">Induction Pack</h3>
        <ul className="list-disc pl-5">
          {inductionPack.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Managing Conflicts of Interest Section */}
      <div className="bg-white text-blue rounded-lg p-6 ">
        <h3 className="text-xl font-bold mb-2">
          MANAGING CONFLICTS OF INTERESTS
        </h3>
        <p>
          The Board has implemented a formal Conflict of Interest Policy that
          sets out clear guidelines to ensure that the Board of Directors,
          Senior Management, and all employees are well aware of the steps that
          need to be taken to avoid any conflict of interest. Directors are
          expected to exercise utmost good faith, honesty, and integrity in all
          their dealings with or on behalf of the Company. They are required to
          act in the Company’s best interests by disclosing real or perceived
          conflicts to the Board.{' '}
        </p>
        <p>
          All Directors are expected to disclose any potential conflicts of
          interest in their annual declarations and also before any meeting
          where a potential conflict may arise. The Company Secretary maintains
          a Register of Interests which is updated if there are any new
          declarations. Related party transactions are reviewed by the Related
          Party Transactions Review Committee and any transactions that require
          disclosure under the Listing Rules are disclosed as specified. These
          are disclosed in Note 3.1 of the financial statements on page 318.
        </p>
      </div>

      <div className="bg-white text-blue rounded-lg p-6 ">
        <h3 className="text-xl font-bold mb-2">
          ETHICAL PRACTICES & CORPORATE CULTURE
        </h3>
        <p>
          Having operated for over 5 decades, LB Finance has its own unique
          culture nurtured by its corporate values and the Code of Conduct.
          Decades of growth has seen the culture evolve into a service and
          mentoring culture that strengthens the passing down of knowledge and
          LB Finance way of doing business which has served us well in the past.
          The Code of Conduct for its employees covers the topics set out in the
          graphic alongside. The code was last reviewed in August 2023 and is
          signed by all employees on joining to ensure that they are aware of
          the standards of conduct expected of them and informed about managing
          potential conflicts and other situations that may arise in the course
          of employment. These are further reinforced by the Anti-bribery &
          Corruption Policy and the Whistle-blowing Policy which serve as broad
          spectrum controls.
        </p>
      </div>

      <div className="bg-white text-blue rounded-lg p-6 ">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="bg-green text-white p-2 text-left">
                  Corporate Values
                </th>
                <th className="bg-green text-white p-2 text-left">
                  Code of Conduct
                </th>
                <th className="bg-green text-white p-2 text-left">Policies</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({
                length: Math.max(
                  tableData.corporateValues.length,
                  tableData.codeOfConduct.length,
                  tableData.policies.length,
                ),
              }).map((_, index) => (
                <tr key={index} className="bg-white">
                  <td className="p-2 border border-green-300">
                    {tableData.corporateValues[index] || ''}
                  </td>
                  <td className="p-2 border border-green-300">
                    {tableData.codeOfConduct[index] || ''}
                  </td>
                  <td className="p-2 border border-green-300">
                    {tableData.policies[index] || ''}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white text-blue rounded-lg p-6 ">
        <h3 className="text-xl font-bold mb-2">INTERNAL CONTROL</h3>
        <p>
          The Board has, over time, established a comprehensive system of
          internal controls Including internal control over financial reporting
          and compliance with internal/ external regulations. The Board Audit
          Committee (BAC) is charged with oversight of this key function. An
          independent Internal Audit function provides support and assurance in
          accordance with the annual internal audit plan which is approved
          annually by BAC. BAC monitors progress of the same, reviews the
          internal audit reports and monitors implementation of recommendations.
          BAC also conducts an in-camera meeting with the Chief Internal Auditor
          annually to discuss any potential areas of concern. Further
          information in this regard is given in the Directors Statement on
          Internal Control on page 204 and the BAC Report on page 188.
        </p>
      </div>

      <div className="bg-white text-blue rounded-lg p-6 ">
        <h3 className="text-xl font-bold mb-2">Whistle-blowing Policy</h3>
        <p>
          LB Finance has implemented a Whistle Blowing Policy which serves as a
          broad spectrum deterrent/control. The policy encourages employees to
          report unfair, unethical, illegal, fraudulent or other irregular
          practices to the Compliance Officer. Whistles blown are reported
          confidentially to BAC who updates the Board accordingly. BAC is
          charged with oversight of potential investigation and implementing
          appropriate action. The policy contains provisions to protect the
          identity of the whistle blower making the policy more effective as it
          removed potential fears of reprisal against the whistle blower. There
          was one (1) whistles blown during the year.
        </p>
      </div>

      <div className="bg-white text-blue rounded-lg p-6 ">
        <h3 className="text-xl font-bold mb-2">RISK MANAGEMENT</h3>
        <p>
          The Board is assisted by the Board Integrated Risk Management
          Committee (BIRMC) in this regard and a more detailed description of
          this vital function is given on page 192.{' '}
        </p>
      </div>

      <div className="bg-white text-blue rounded-lg p-6 ">
        <h3 className="text-xl font-bold mb-2">ACCOUNTING & AUDIT</h3>
        <p>
          The Board is responsible for the timely quarterly and annual
          disclosure of financial statements in accordance with both the CSE and
          CBSL regulations. The BAC is tasked with detailed review of financial
          reporting processes, controls and the financial statements themselves
          as this is a principal communication to the shareholders and other
          investors. BAC reviews the quarterly financial statements and the
          annual report and recommends it to the Board for approval and
          disclosure.
        </p>
      </div>

      <div className="bg-white text-blue rounded-lg p-6 ">
        <h3 className="text-xl font-bold mb-2">REMUNERATION & INCENTIVES</h3>
        <p>
          The BHRRC makes recommendations to the Board on remuneration policy
          and the remuneration of Executive and Non-Executive Directors, and the
          Board considers the recommendations in determining the same. BHRRC has
          the authority to engage external consultants, if required, to
          determine remuneration levels, and policy to facilitate attraction and
          retention of skilled professionals. Non-Executive Directors receive a
          fixed fee taking in to consideration the commitment and
          responsibilities of their role. The Executive Director remuneration
          comprises a variable component for exceptional performance. The Board
          also approves remuneration schemes in total for executive staff
          including increments and variable pay. There are no stock options
          included in remuneration schemes.{' '}
        </p>
      </div>

      <div className="bg-white text-blue rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">
          STAKEHOLDER ENGAGEMENT & COMMUNICATION
        </h3>
        <p>
          The Company has numerous engagement mechanisms with its stakeholders
          which are set out on page 40. The Board reviews analytics of the call
          centre to understand the issues that concern customers. BHRRC and the
          Board review the employee surveys to understand the issues and
          concerns that affect the team. Queries from the regulators are tabled
          at the Board meetings. The Board is responsible for shareholder
          communications together with the Company Secretary and these are
          reviewed by the Board. Accordingly, the company publishes quarterly
          performance reports and annual report through Colombo Stock Exchange
          to provide shareholders with a comprehensive view of the company’s
          affairs during a particular financial year. The Annual General Meeting
          is the main platform for engaging shareholders and due notice is given
          of the meeting in this report and as previously announced via the CSE.
          The feedback form which is incorporated in to the annual report serves
          as a key mechanism for shareholders to communicate with the company.
          To further strengthen the communication with shareholders and other
          stakeholders the Board has approved the company’s corporate
          communication policy. We believe the adopting a structured approach to
          engaging with and involving stakeholders will allow us to collaborate
          and learn from one another in the pursuit of mutually supportive
          relationships. Accordingly, the LBF Board reinforce its commitment to
          inclusive stakeholder engagement is based on the principles of,
        </p>

        <ul className="list-disc list-inside">
          <li>
            Relevance – focusing on those issues of material concern to our
            stakeholders and identifying best to address them for our mutual
            benefits.
          </li>
          <li>
            Completeness – understanding the views, needs, performance
            expectations and perceptions associated with these material issues
            while also taking cognizance of prevailing local and global trends.{' '}
          </li>
          <li>
            Responsiveness – engaging with stakeholders on these issues and
            giving regular, comprehensive, coherent feedback.
          </li>
        </ul>
      </div>

      <div className="bg-white text-blue rounded-lg p-6 ">
        <h3 className="text-xl font-bold mb-2">SUSTAINABILITY INTEGRATION</h3>
        <p>
          LB Finance has been an early champion of sustainability and has been
          reporting on the same, winning multiple accolades for the reports over
          the years both in Sri Lanka and at international award programmes.
          While the Board provided oversight, the mandatory reporting
          requirement of sustainability reporting for reporting periods
          commencing after 1st January 2025 makes it imperative that the
          reporting has the same rigour of checks and balances as the financial
          reporting. Accordingly, the Board appointed a new Sustainability
          Committee to assist the Board in this regard. A structure is now in
          place to steer the course to sustainability reporting in line with the
          SLFRS. For more information on sustainability of LBF, refer page 56 on
          this annual report.{' '}
        </p>
      </div>

      <div className="bg-white text-blue rounded-lg p-6 ">
        <h3 className="text-xl font-bold mb-2">IT GOVERNANCE</h3>
        <p>
          IT governance continues to be a key strategic priority of LB Finance
          as we rely on IT systems for record keeping but also have a legal duty
          to protect the personal data of our customers in accordance with the
          Personal Data Protection Act No.9 of 2022. Indeed, it is recognised as
          a key sustainability issue for the consumer financial services sector
          by the SASB as well.
        </p>
        <p>
          The Board has appointed the Board Information Security Committee
          (BISC) which has oversight responsibility for this key area of the
          Company’s operations. The key focus areas under IT governance include;
          safeguarding IT infrastructure, data protection, network security,
          data servers and digital channels along with the provision of system
          support. Refer Board Information Security Committee report in page 200
          of this annual report.
        </p>
        <p>
          The Board has appointed Chief Information Security Officer (CISO) and
          a dedicated IT governance team who are tasked with;
        </p>

        <ul className="list-disc list-inside">
          <li>
            Formulating policies and operational procedures based on the
            compliance requirements and other best practices
          </li>
          <li>Reviewing and monitoring privileged access activities</li>
          <li>
            Coordinating the functions related to ISO 27001:2022 certification
          </li>
          <li>
            Reviewing and recommending to the BISC regarding amendments to IT
            and IS related policies and procedures
          </li>
          <li>
            Weekly/monthly/annual monitoring of information security and cyber
            risks
          </li>
          <li>
            Follow up on corrective and preventive action plans of audit
            findings
          </li>
          <li>Conduct information security awareness campaigns</li>
          <li>Coordinate vulnerability assessments and penetration tests</li>
          <li>
            Conduct due diligence assessments, security reviews on vendors
          </li>
        </ul>
        <p>
          For more details, please refer to the Intellectual Capital section on
          page 120.
        </p>
      </div>

      <div className="bg-white text-blue rounded-lg p-6 flex flex-col gap-4">
        <h3 className="text-xl font-bold mb-2">EVALUATIONS & APPRAISAL</h3>
        <h3 className="text-lg font-bold mb-2">
          Evaluating the Performance of the Chairman
        </h3>
        <p>
          The Chairman of the LBF Board is evaluated by Non-Executive Directors
          of the Company. The evaluation is carried out annually to determine
          the Chairman’s effectiveness in discharging his assigned duties and
          responsibilities as the Board Chair.
        </p>
        <h3 className="text-lg font-bold mb-2">
          Evaluating the Effectiveness of the Board{' '}
        </h3>
        <p>
          The BNGC performs an annual self-assessment to evaluate the overall
          effectiveness of the LBF Board according to the criteria set out
          alongside. The feedback from Directors is collated and reviewed by the
          BNGC and conveyed to the Chairman of the Board for discussion at a
          closed-door meeting with the Board. BNGC is charged with formulating
          action plans and implementing the same to address the issues and
          concerns raised.
        </p>

        <h3 className="text-lg font-bold mb-2">
          Evaluating the Performance of Directors
        </h3>
        <p>
          All Directors are required to submit an annual self-evaluation to BNGC
          indicating their view of regarding the collective performance of the
          Board vis-a-vis the contribution towards developing and monitoring
          implementation of strategy, ensuring robust and effective risk
          management, maintaining effective internal control mechanism,
          oversight of Board Sub Committees etc. The BNGC together with the
          Board Chairman review these self-evaluations with the findings used to
          constructively discuss
        </p>
        <p>
          improvements to the Board and to ascertain if each individual Director
          remains qualified to remain on the LBF Board. The Chairman and/or
          Board Nomination and Governance Committee Chairman/ Chairperson acts
          on the results of the evaluation, and if appropriate, proposes new
          Directors or seeks the resignation of Directors.
        </p>

        <h3 className="text-lg font-bold mb-2">
          Evaluating the Performance of the MD
        </h3>
        <p>
          The performance of the Managing Director is assessed annually by the
          Chairman of the Board based on the agreed goals and objectives for a
          particular financial year, set at the commencement of that particular
          year. Following the year end evaluation of the Managing Director’s
          performance, the BHRRC makes recommendations to the Board regarding
          the performance related pay component for the past year and revisions
          to the compensation for the year ahead.
        </p>
      </div>

      <div className="bg-white text-blue rounded-lg p-6 ">
        <h3 className="text-xl font-bold mb-2">
          Criteria for evaluating the effectiveness of the Board
        </h3>
        <ul className="list-disc list-inside">
          <li>Composition, accountability and governance</li>
          <li>Board operations</li>
          <li>Legal responsibilities</li>
          <li>Financial overview</li>
          <li>Planning</li>
          <li>Board management relations</li>
        </ul>
      </div>

      <div className="bg-white text-blue rounded-lg p-6 ">
        <h3 className="text-xl font-bold mb-2">GROUP GOVERNANCE</h3>
        <p>
          LBF’s Governance Framework includes clearly defined Group governance
          roles and responsibilities for the oversight and implementation of
          effective Group-wide policies to safeguard the interests of
          stakeholders of the Group. The LBF Board proactively reviews and
          updates the Group Governance Framework to take cognisance of changes
          in the operating environment, including the legal and regulatory
          requirements. The Board together with the BIRMC continuously review
          the potential risks posed by the subsidiaries and implement
          appropriate controls to mitigate such risks.
        </p>
        <p>
          As part of this commitment, the Board has established clear reporting
          arrangements that promote the understanding and management of material
          risks at subsidiary level. Moreover, the Board takes the
          responsibility for mobilising adequate resources to effectively
          monitor the compliance status of subsidiaries in line with all
          applicable legal and regulatory requirements.
        </p>
      </div>

      <div className="bg-white text-blue rounded-lg p-6 ">
        <h3 className="text-xl font-bold mb-2">PRIORITIES FOR 2024/25</h3>
        <p>
          The Board have noted the following matters for attention in the year
          that has commenced:
        </p>
        <ul>
          <li>
            Ensuring compliance with CSE Listing Rule no. 9 on Corporate
            Governance prior to specified dates
          </li>
          <li>
            Facilitate and guide the newly formed committees of the Board to
            ensure they are effective in oversight of matters assigned to the
            committees
          </li>
          <li>
            Ensure that processes for compliance with SLFRS Sustainability
            Disclosure Standards are set in place and that internal controls are
            in place to verify the completeness, accuracy and reliability of
            sustainability reporting
          </li>
          <li>
            Ensure that the Board gets sufficient non-financial information to
            monitor progress against sustainability targets
          </li>
          <li>
            The Board will prioritise technological solutions to streamline
            governance processes, bolster information and data security, and
            enhance the decision-making process, thereby supporting greater
            transparency, accountability, efficiency, and effectiveness across
            enterprise-wide governance systems
          </li>
        </ul>
      </div>
    </div>
  );
}
