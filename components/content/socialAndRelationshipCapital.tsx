'use client';
import dynamic from 'next/dynamic';
import { Image } from '@nextui-org/image';
import { ApexOptions } from 'apexcharts';
// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface Project {
  name: string;
  description: string;
  achievements: string[];
  volunteerism: number;
  expenditure: string;
  category:
    | 'knowledge-sharing'
    | 'community-well-being'
    | 'build-partnerships'
    | 'transformative-csr';
}

const projects1: Project[] = [
  {
    name: 'CSE Stock Market Challenge 2023',
    description:
      'CSE Stock Market Challenge 2023 organized by the Student Association of Financial Management of the Department of Commerce and Financial Management was held at University of Kelaniya. The event was organized with the collaboration of Colombo Stock Exchange and LB Finance PLC. The objectives were: Increasing the investments in stock market among new generation.',
    achievements: [
      'Increasing the knowledge about the process of stock market among school students.',
      'Encouraging new generation to be alert about corporate regulations and world economic market.',
      'Increasing the general sense about prevailing micro-economic conditions of the country among school students.',
    ],
    volunteerism: 237,
    expenditure: '300,000/-',
    category: 'knowledge-sharing',
  },
  {
    name: 'Educational Resources for Ampe Junior School',
    description:
      "The Educational Resources for Ampe Junior School project aimed to provide essential books and equipment for Grade 1 students for the year 2024. The list of required items included rule books, drawing books, stationery, and other educational materials necessary for the students' learning and development.",
    achievements: [
      'Early Literacy Development',
      'Enhanced Social and Emotional Development',
      'Preparation for Lifelong Learning',
      'Positive School Experience',
    ],
    volunteerism: 192,
    expenditure: '100,050',
    category: 'knowledge-sharing',
  },
  {
    name: 'Consumer education',
    description:
      'Education on financial management Conducted video series on social media to build awareness of the financial management under the concept of building investment habits,developing your savings habit, golden rules for strong financial security',
    achievements: [
      'Enhance the savings habit of the customers and non-customers',
      'Day today financial information and regulatory requirements',
      'Information on wealth maximisation',
    ],
    volunteerism: 74,
    expenditure: '',
    category: 'knowledge-sharing',
  },
];

const projects2: Project[] = [
  {
    name: 'Business development',
    description:
      'We launched video series and sharing information on social media to raise awareness about business development. Our focus includes key topics such as building and developing a business on social media, meeting financial needs, leveraging hidden skills to generate income, and identifying potential customers. Stay tuned for valuable insights and tips to help you succeed in your entrepreneurial journey.',
    achievements: [
      'Wealth Creation and Poverty Alleviation',
      'Inclusive Growth',
      'Diversification of the Economy',
      'Innovation and Creativity',
      'Job Creation',
    ],
    volunteerism: 304,
    expenditure: '-',
    category: 'knowledge-sharing',
  },
  {
    name: 'Fuelling Futures: LB Finance empowers women/youth with LCES',
    description:
      ' LBF proudly sponsored another impactful community project at the La Sallian Community Education Center (LCES) in Colombo. One of the primary vocational training programs that the organisation offers is a tailoring program, which helps individuals develop skills in the field of tailoring and sewing and relaunch a comprehensive Dress Making Course, a transformative educational program for those embarking on a career in the fashion industry. ',
    achievements: [
      'Empowers women by equipping them with practical skills and knowledge',
      'Vocational training opens up diverse career opportunities for women in traditionally male-dominated fields enables women to gain entry into skilled professions that offer higher wages and greater financial stability',
      'Women who receive vocational training contribute to the development of their communities by participating in skilled labour markets',
    ],
    volunteerism: 401,
    expenditure: '890,817',
    category: 'knowledge-sharing',
  },
  {
    name: 'Women Empowerment: Developing start-up business and budding entrepreneurs in Sri Lanka and Myanmar',
    description:
      'We organised a video series showcasing success stories, awareness sessions, financial literacy, and entrepreneurial capacity building for LBF women entrepreneurs. These initiatives highlight the contributions made by LBF to enhance their lives and foster their development.',
    achievements: [
      "Empowering women entrepreneurs is essential for achieving sustainable development goals, including poverty eradication, gender equality, and economic growth. By investing in women's entrepreneurship, societies can create a more inclusive, equitable, and prosperous future for all.",
    ],
    volunteerism: 77,
    expenditure: '-',
    category: 'knowledge-sharing',
  },
];

const projects3: Project[] = [
  {
    name: 'Blood donation campaign',
    description:
      'As part of the Anniversary celebration, the Kekirawa branch organised a blood donation campaign, engaging more than 150 donors who generously contributed blood to fulfil the needs of the blood bank.',
    achievements: [
      'Help meet the ongoing demand for blood and blood products in healthcare facilities.',
      'Support the overall functioning of healthcare systems by providing a critical resource for medical treatment.',
      'Promote health and well-being by encouraging individuals to engage in altruistic behaviours that benefit others.',
    ],
    volunteerism: 103,
    expenditure: '60,000/-',
    category: 'community-well-being',
  },
  {
    name: 'Little Hearts Project',
    description:
      'We contributed to The Little Hearts Project, aimed to provide essential medical interventions, care, and support to children with Congenital Heart Disease at the Lady Ridgeway Hospital in Sri Lanka. This project addressed a significant healthcare challenge in the country, where approximately 3,000 babies are born with these conditions annually, but only around 1,500 receive necessary treatment due to limited facilities.',
    achievements: [
      'Providing care and support to children with CHD can reduce mortality rates associated with the condition.',
      'Support and care for children with CHD can contribute to an improved quality of life.',
      'Supporting care for children with CHD also involves providing assistance and resources to their families.',
      'By supporting care and awareness initiatives, it is possible to promote early detection and intervention for CHD.',
    ],
    volunteerism: 367,
    expenditure: '1,350,000',
    category: 'community-well-being',
  },
  {
    name: 'Helping hand to physically impaired people',
    description:
      'The Wheelchair Assistance Program is a vital initiative aimed at enhancing the quality of life for physically impaired members of the Sri Lanka Navy Seva vanitha Unit (SLNSVU) community. Recognising the diverse needs within our community, this project seeks to provide essential mobility support to individuals facing physical challenges.',
    achievements: [
      'Assistance from others can help physically impaired individuals navigate their environment more easily, improving their mobility and independence.',
      'Providing assistance to physically impaired individuals empowers them to advocate for their needs and rights.',
    ],
    volunteerism: 141,
    expenditure: '120,000',
    category: 'community-well-being',
  },
  {
    name: 'Financial assistance',
    description:
      'The project aims to assist Mr. Sarath Kumara, an employee with over 12 years of service at LBF. Due to his current employment status on extension, he is not eligible for medical insurance coverage. The project specifically targets the approval of funds for Mr. Sarath Kumara’s eye surgery expense.',
    achievements: [
      'Helps to reduce disparities in access to healthcare by ensuring that individuals from all socioeconomic backgrounds can afford needed medical interventions.',
      'Alleviates the emotional and mental stress associated with worrying about healthcare costs',
    ],
    volunteerism: 27,
    expenditure: '78,500',
    category: 'community-well-being',
  },
  {
    name: 'Continuation project of rehabilitation center development',
    description:
      ' A project to build a drug rehabilitation centre in Rumassala in the Galle district, and continuation of the project \n • Biggest Loser (Weight Losing  Competition) \n • Weekly workouts / CrossFit Session \n • Weekly Yoga',
    achievements: [
      'Provide assistance and guidance to rehabilitate drug users to become productive members of society.',
      'Minimising the negative impact caused by drug addiction to the general public',
    ],
    volunteerism: 127,
    expenditure: '377,850',
    category: 'community-well-being',
  },
  {
    name: 'Health camps and workshops',
    description:
      "Was initiated to give prominence to Health First and to promote a month of Fitness to all staff. Fitness in workplace plays a vital role in improving the staff member's health, resulting in a safer, healthier and more productive work environment.",
    achievements: [
      "Fitness in workplace plays a vital role in improving the staff member's health, resulting in a safer, healthier and more productive work environment.",
      'Biggest Loser (Weight Losing Competition)',
      'Weekly workouts / CrossFit Session',
      'Weekly Yoga',
    ],
    volunteerism: 783,
    expenditure: '90,000',
    category: 'community-well-being',
  },
  {
    name: 'Community Awareness programmes',
    description: 'Awareness build on international days through social media',
    achievements: [
      'World Autism Awareness Day, World Heritage Day, International Labour Day, World Oceans Day, International Day of Sign Languages, World Heart Day, World Food Day, Easter Sunday, Vesak poya day, World Happiness, Thaipongal day, World Happiness Day etc.',
    ],
    volunteerism: 43,
    expenditure: '-',
    category: 'community-well-being',
  },
];

const projects4: Project[] = [
  {
    name: 'Donating Firewall to Lady Ridgeway Hospital',
    description:
      "LBF donated a firewall to Lady Ridgeway Hospital on 10th January 2024 in support of the hospital's initiative to securely share its patients' medical details with other hospitals in a secure manner. The mechanism would be crucial in transforming patients’ details to better assist them during emergencies and LB Finance is proud to be a part of this initiative.",
    achievements: [
      "Protect patients' medical information from unauthorised access",
      "Secure sharing of patients' medical information between hospitals helps avoid duplication of tests, procedures, and treatments",
    ],
    volunteerism: 63,
    expenditure: '4,801,566',
    category: 'build-partnerships',
  },
];

const projects5: Project[] = [
  {
    name: 'Cyber security',
    description:
      'Conducted awareness campaigns on social media to enhance the knowledge of cyber security tips on fraudulent e-mails, cautious of the portable devices and sensitive information',
    achievements: [
      'Awareness build on cyber security Problems',
      'Building discussion to protect from ransomware',
    ],
    volunteerism: 91,
    expenditure: '-',
    category: 'transformative-csr',
  },
  {
    name: 'LB career support',
    description:
      '"LB Career Fair" series in partnership with University of Kelaniya to increase the participation in career development',
    achievements: [
      'Opportunity to explore a wide range of career options',
      'Networking opportunities for students to connect with recruiters, hiring managers, and professionals',
      'Interacting with industry professionals at career fairs provides students with valuable insights into current trends, challenges, and opportunities',
    ],
    volunteerism: 54,
    expenditure: '-',
    category: 'transformative-csr',
  },
  {
    name: 'Digital literacy and digital engagement',
    description:
      'Building awareness of digital transactions and encouraging customers to adopt digital transaction habits through educational videos and sharing the benefits of digital payments',
    achievements: [
      'Educational videos provide a visual and interactive way to explain the process and benefits of digital transactions to customers',
      'Digital transactions have a smaller environmental footprint compared to paper-based transactions, as they reduce the need for paper, ink, and other resources',
    ],
    volunteerism: 74,
    expenditure: '-',
    category: 'transformative-csr',
  },
];
const chartOptions: ApexOptions = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
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
      text: 'Hours',
    },
    labels: {
      formatter: (value: number) => value.toLocaleString(),
    },
  },
  fill: {
    opacity: 1,
    colors: ['#28a745', '#28a745', '#28a745', '#28a745', '#0a3d5f'],
  },
  tooltip: {
    y: {
      formatter: (value: number) => `${value.toLocaleString()} Hours`,
    },
  },
  title: {
    text: 'Staff Volunteer Hours',
    align: 'center',
    style: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#0a3d5f',
    },
  },
};

const chartSeries = [
  {
    name: 'Hours',
    data: [20131, 5764, 15260, 15492, 7132],
  },
];

const investmentOptions: ApexOptions = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '50%',
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
      text: 'Rs. Mn',
    },
  },
  fill: {
    opacity: 1,
    colors: ['#00E396'],
  },
  tooltip: {
    y: {
      formatter: (val: any) => `${val} Mn`,
    },
  },
  title: {
    text: 'Investment in CSR',
    align: 'center',
    style: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#333',
    },
  },
};

const investmentSeries = [
  {
    name: 'Investment in CSR',
    data: [35, 38, 30, 20, 29.3],
  },
];

const communityOptions: ApexOptions = {
  chart: {
    type: 'donut',
  },
  labels: [
    'Access to education',
    'Knowledge sharing',
    'Community well being',
    'Build partnerships',
    'Donations',
    'Tree planting',
  ],
  legend: {
    position: 'bottom',
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    },
  ],
  fill: {
    colors: ['#FF4560', '#00E396', '#FEB019', '#775DD0', '#008FFB', '#FF69B4'],
  },
  title: {
    text: 'Key Areas Supported to Community',
    align: 'center',
    style: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#333',
    },
  },
};

const communitySeries = [49, 24, 10, 7, 5, 4];
export default function SocialRelationshipCapital() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col gap-6">
      <div>
        <div className="overflow-x-auto">
          <img
            className="max-w-none"
            src="/images/annual-report/finance_capital/social-and-relationship.png"
          />
        </div>
      </div>
      <p className="text-blue bg-white rounded-lg p-6">
        Our social and relationship capital involves the relationship we have
        created and nurtured with our stakeholders as well as the
        interrelationship between them that enabled greater value creation for
        all
      </p>
      <div className="bg-white text-blue rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className=" font-bold text-lg">MANAGEMENT APPROACH</h2>
            <p>
              We continued to forge strong relationships with our customers,
              suppliers, and communities to nurture our social and relationship
              (S&R) capital. The strength of our strategic relationships remains
              fundamental to maintaining our leadership in the industry.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="bg-white text-blue rounded-lg">
              <h3 className="text-blue font-bold">
                COMPONENTS OF SOCIAL AND RELATIONSHIP CAPITAL
              </h3>
              <ul className="list-disc list-inside text-blue">
                <li>CUSTOMER CAPITAL</li>
                <li>BUSINESS PARTNER CAPITAL</li>
                <li>COMMUNITY CAPITAL</li>
              </ul>
            </div>
            <div className="bg-white text-blue rounded-lg">
              <h3 className="text-blue font-bold">
                NURTURING SOCIAL AND RELATIONSHIP CAPITAL
              </h3>
              <ul className="list-disc list-inside text-blue">
                <li>
                  Leveraging digital platforms to enhance customer convenience
                </li>
                <li>Customer relationship management</li>
                <li>Responsible customer communications</li>
                <li>Supply chain management</li>
                <li>Community development</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white text-blue rounded-lg p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left mt-4 border-collapse overflow-x-auto">
              <thead>
                <tr>
                  <th
                    rowSpan={2}
                    className="border-b border-blue px-2 py-2 text-left text-blue font-bold"
                  >
                    Strategic Priorities
                  </th>
                  <th
                    rowSpan={2}
                    className="border-b border-blue px-2 py-2 text-left text-blue font-bold"
                  >
                    Progress in FY 2023/24
                  </th>
                  <th
                    colSpan={3}
                    className="border-b border-blue px-2 py-2 text-center text-blue font-bold"
                  >
                    Looking Ahead
                  </th>
                </tr>
                <tr>
                  <th className="border-b border-blue px-2 py-2 text-left text-blue font-bold">
                    Short-term
                  </th>
                  <th className="border-b border-blue px-2 py-2 text-left text-blue font-bold">
                    Medium-term
                  </th>
                  <th className="border-b border-blue px-2 py-2 text-left text-blue font-bold">
                    Long-term
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-blue px-2 py-2 align-top">
                    Increased digital engagement through business partnerships
                  </td>
                  <td className="border-b border-blue px-2 py-2 align-top">
                    Strong partnership and focus to let out our spaces
                  </td>
                  <td className="border-b border-blue px-2 py-2 align-top">
                    Analyse our customer profiles and identify the cross-selling
                    capabilities
                  </td>
                  <td className="border-b border-blue px-2 py-2 align-top">
                    Partnerships with multilateral organisations to innovate
                    financing and community engagement solutions for underserved
                    segments
                  </td>
                  <td className="border-b border-blue px-2 py-2 align-top">
                    Empowering entrepreneurs
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-blue px-2 py-2 align-top">
                    Implement digital customer relationship management solutions
                    across the Company
                  </td>
                  <td className="border-b border-blue px-2 py-2 align-top">
                    80% of FD loans granted through the digital channel
                  </td>
                  <td className="border-b border-blue px-2 py-2 align-top">
                    Improving collective wellbeing through utilising
                    relationships within and across communities
                  </td>
                  <td className="border-b border-blue px-2 py-2 align-top">
                    Addressing customers’ queries and potential complaints
                    through digital mediums
                  </td>
                  <td className="border-b border-blue px-2 py-2 align-top">
                    Digital modules for speedy transactions
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-2 align-top">
                    Implement long-term community service and engagement
                    initiatives based on our CSR approach
                  </td>
                  <td className="px-2 py-2 align-top">
                    7,132 employee volunteer hours for CSR
                  </td>
                  <td className="px-2 py-2 align-top">
                    Increase community engagement activities through social
                    media
                  </td>
                  <td className="px-2 py-2 align-top">
                    Improving community outreach through employee volunteerism
                  </td>
                  <td className="px-2 py-2 align-top">
                    Engage in outcome-based community investment
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white text-blue rounded-lg p-6">
          <h4 className="t font-bold">Contributing to our Mission</h4>
          <p>
            To offer a caring and personalised service that will form the
            foundation for developing lasting partnerships with our stakeholders
          </p>
        </div>
        <div className="bg-white text-blue rounded-lg p-6">
          <h4 className=" font-bold">Contribution to our Values</h4>
          <img
            src="/images/charts/icons/scontributetocapital.png"
            alt="scontributetocapital"
            className="w-full"
          />
        </div>

        <div className="bg-white text-blue rounded-lg p-6">
          <h4 className=" font-bold"> Stockholders Impacted</h4>
          <img
            src="/images/charts/icons/stackholderImpact.png"
            alt="stackholderImpact"
            className="w-full"
          />
        </div>
        <div className="bg-white text-blue rounded-lg p-6">
          <h4 className="text-blue font-bold">Material Matters</h4>
          <ul className="list-disc list-inside ">
            <li>Customer Satisfaction</li>
            <li>Online customer support</li>
            <li>Technological advancement</li>
            <li>Social license to operate</li>
            <li>Regional expansion</li>
            <li>Business continuity</li>
            <li>Business model innovation</li>
          </ul>
        </div>
        <div className="bg-white text-blue rounded-lg p-6">
          <h4 className=" font-bold">Commitments to UN SDGs</h4>
          <img
            src="/images/charts/icons/commitmentToUnSdgs.png"
            alt="commitmentToUnSdgs"
            className="w-full"
          />
        </div>
        <div className=" text-blue bg-white p-6 rounded-lg">
          <div className="flex flex-col items-center">
            <img
              src="/images/charts/capitalReport/SocialRelationshipReport/staff-volunteer-hour.PNG"
              alt="Brand Value Growth"
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

      <div className="text-white rounded-lg">
        <h2 className="pb-2 border-b-1 text-center">CAPITAL TRADE-OFF</h2>
        <h3 className="py-2 text-center">Engage in community development</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-[#d1dff2] rounded-t-lg text-center">
            <h4 className="font-bold bg-[#0989ca] p-2 rounded-t-lg">FC</h4>
            <p className="p-2 text-black">
              Requires financial resources to develop entrepreneurs and uplift
              the communities leading to a positive impact on economic growth
            </p>
          </div>
          <div className="bg-[#fadde9] rounded-t-lg text-center">
            <h4 className="font-bold bg-[#5a3f97] p-2 rounded-t-lg">HC</h4>
            <p className="p-2 text-black">
              Employee engagement in CRS activities forges good
              employee-community relationships and increases employee
              satisfaction
            </p>
          </div>
          <div className="bg-[#fadde9] rounded-t-lg text-center">
            <h4 className="font-bold bg-[#ef56a0] p-2 rounded-t-lg">IC</h4>
            <p className="p-2 text-black">Enhances brand reputation</p>
          </div>
          <div className="bg-[#e5eed2] rounded-t-lg text-center">
            <h4 className="font-bold bg-[#97c839] p-2 rounded-t-lg">SC</h4>
            <p className="p-2 text-black">
              Community engagement fosters a sustainable value chain
            </p>
          </div>
        </div>
        <h3 className="py-2 text-center">
          Improve customer relationship management
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-[#d1dff2] rounded-t-lg text-center">
            <h4 className="font-bold bg-[#0989ca] p-2 rounded-t-lg">FC</h4>
            <p className="p-2 text-black">
              Investments made on new infrastructure system to improve
              reliability and productivity
            </p>
          </div>
          <div className="bg-[#fadde9] rounded-t-lg text-center">
            <h4 className="font-bold bg-[#5a3f97] p-2 rounded-t-lg">IC</h4>
            <p className="p-2 text-black">
              Enhances innovation, and improves brand reputation
            </p>
          </div>
          <div className="bg-[#fadde9] rounded-t-lg text-center">
            <h4 className="font-bold bg-[#ef56a0] p-2 rounded-t-lg">NC</h4>
            <p className="p-2 text-black">New products and services</p>
          </div>
          <div className="bg-[#e3e1e0] rounded-t-lg text-center">
            <h4 className="font-bold bg-[#8c8e90] p-2 rounded-t-lg">MC</h4>
            <p className="p-2 text-black">
              Improves decision making, new skill development
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white text-blue p-6 rounded-lg">
        <h2 className=" font-bold text-lg">Customer Capital</h2>
        <p className="mt-2">
          Our customer base includes individuals and businesses engaged in
          investing, financing, and value-added services.
        </p>
      </div>

      <div className="bg-white text-blue p-6 rounded-lg">
        <h3 className="font-bold ">What We Want</h3>
        <p className=" mt-2">
          To provide differentiated, customised financial solutions and relevant
          space in the NBFI sector.
        </p>

        <h3 className="font-bold  mt-4">What They Want</h3>
        <p className=" mt-2">
          We offer resource-efficient spaces relevant to their evolving needs,
          and our differentiators, people centricity, technology, and
          environmental efficiency are at the forefront of our offering.
        </p>
      </div>

      <div className="bg-white text-blue p-6 rounded-lg">
        <h3 className="font-bold  ">Management Approach</h3>
        <p className=" mt-2">
          Our commitment to customers is reflected in our value proposition,
          based on enhancing customer experience and fostering trust. We promote
          inclusive financial services, serving Sri Lankans across the nation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mt-4">
          <div>
            <h4 className="font-bold text-2xl">+800,000</h4>
            <p className="">Customer Base</p>
          </div>
          <div>
            <h4 className="font-bold  text-2xl">61%</h4>
            <p className="">Male Customers</p>
          </div>
          <div>
            <h4 className="font-bold  text-2xl">39%</h4>
            <p className="">Female Customers</p>
          </div>
        </div>
      </div>

      <div className="bg-white text-blue rounded-lg p-6">
      <h3 className="font-bold  mt-4">Our Customer Promise</h3>
        <p className="my-2">
          We place our customers at the forefront of all our actions.
          Accordingly, we strive to provide a service that surpasses their
          expectations through our service standards, convenience, branch
          network and touch points, digital services, product range, and quality
          of our customer relationships. Moreover, we adhere to all relevant
          legal and regulatory standards governing our business.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 border-blue px-4 py-2 text-left  font-bold">
                  Principle
                </th>
                <th className="border-b-2 border-blue px-4 py-2 text-left  font-bold">
                  Our Responsibility
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-blue px-4 py-2">
                  Customer first
                </td>
                <td className="border-b border-blue px-4 py-2">
                  Consider customer requirements first
                </td>
              </tr>
              <tr>
                <td className="border-b border-blue px-4 py-2">
                  Customer accountability
                </td>
                <td className="border-b border-blue px-4 py-2">
                  Own the issue without passing the blame
                </td>
              </tr>
              <tr>
                <td className="border-b border-blue px-4 py-2">
                  Simple, clear and transparent
                </td>
                <td className="border-b border-blue px-4 py-2">
                  Communicate in clear, simple language
                </td>
              </tr>
              <tr>
                <td className="border-b border-blue px-4 py-2">
                  Continuous improvement
                </td>
                <td className="border-b border-blue px-4 py-2">
                  Continuously improve products, services and channels in line
                  with customer expectations and changing needs
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">Monitor and reporting</td>
                <td className="px-4 py-2">
                  Identify gaps and initiate appropriate corrective actions
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white text-blue p-4 rounded-lg">
          <h4 className="font-bold ">Value Customers Receive</h4>
          <ul className="list-disc list-inside  mt-2">
            <li>Customised products to satisfy every financial need</li>
            <li>
              Investment products that provide retirement income and meet
              savings goals
            </li>
            <li>Responsible and objective financial advice</li>
          </ul>
        </div>
        <div className="bg-white text-blue p-4 rounded-lg">
          <h4 className="font-bold text-orange-600">Value We Receive</h4>
          <ul className="list-disc list-inside  mt-2">
            <li>Income generated through lending activities</li>
            <li>Access to funds through deposits</li>
            <li>Mobilisation activities</li>
            <li>
              Ability to earn fee-based income through value added services
            </li>
          </ul>
        </div>
        <div className="bg-white text-blue p-4 rounded-lg">
          <h4 className="font-bold text-pink-600">Value Society Receives</h4>
          <ul className="list-disc list-inside mt-2">
            <li>Enhances the service quality of the LBF’s value proposition</li>
            <li>Improves trust in the financial services industry</li>
            <li>Opportunity for development of start-ups</li>
          </ul>
        </div>
      </div>

      <div className="bg-white text-blue p-4 rounded-lg">
        <h3 className="font-bold ">Our Customer Value Proposition (CVP)</h3>
        <p className=" mt-2">
          We engage with our customers to understand their evolving requirements
          amidst shifting lifestyles and socio-economic conditions. These
          insights enable us to improve our CVP by continuously refining our
          ability to effectively address their needs over time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white text-blue p-4 rounded-lg">
          <h4 className="font-bold ">
            Cost-effective and affordable financial products and services
          </h4>
          <p className=" mt-2">
            Facilitating convenience by enabling more financial services through
            the CIM app and offering concessions to customers to tide over their
            financial challenges.
          </p>
        </div>
        <div className="bg-white text-blue p-4 rounded-lg">
          <h4 className="font-bold text-blue">
            Consistent support to achieve financial goals
          </h4>
          <p className=" mt-2">
            Facilitating access to financial services anywhere any time whilst
            rewarding loyal customers.
          </p>
        </div>
        <div className="bg-white text-blue p-4 rounded-lg">
          <h4 className="font-bold text-blue">
            Simple and secure platforms with 24/7-availability
          </h4>
          <p className=" mt-2">
            Accessible convenience at an affordable cost through user-friendly
            channels including the CIM app and online services.
          </p>
        </div>
      </div>

      <div className="bg-white text-blue p-4 rounded-lg">
        <h3 className="font-bold ">
          Leveraging Our Digital Platforms to Meet Our Customers’ Needs
        </h3>
        <p className=" mt-2">
          During the year under review, we have enabled our gold loan customers
          to conduct all their transactions, including gold loan top-ups and
          renewals from the comfort of their homes, eliminating the need to
          visit a branch.
        </p>
      </div>

      <div className="bg-white text-blue p-4 rounded-lg">
        <h3 className="font-bold ">
          Supporting Customers Through Financial Challenges
        </h3>
        <p className=" mt-2">
          We supported our customers to navigate the financial challenges during
          the year by:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 mt-4">
          <div className="bg-yellow-200 p-4 rounded-lg text-center">
            <p className="font-bold ">
              Extended financial advice to optimise their finances
            </p>
          </div>
          <div className="bg-yellow-200 p-4 rounded-lg text-center">
            <p className="font-bold ">Offered interest waivers</p>
          </div>
          <div className="bg-yellow-200 p-4 rounded-lg text-center">
            <p className="font-bold ">
              Offered rebates on the accumulated overdue interests
            </p>
          </div>
          <div className="bg-yellow-200 p-4 rounded-lg text-center">
            <p className="font-bold ">Rescheduled facilities</p>
          </div>
          <div className="bg-yellow-200 p-4 rounded-lg text-center">
            <p className="font-bold ">Reduced rates on flexible facilities</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white text-blue p-4 rounded-lg">
          <h3 className="font-bold ">Responsible Customer Communication</h3>
          <p className=" mt-2">
            We empower our customers by providing comprehensive information
            about our products and services, allowing them to make informed
            decisions. Our marketing materials comply with regulatory
            requirements and industry standards, reflecting insights from
            customer interactions to enhance quality. All content aligns with
            our ethical values. All product-specific content is approved by the
            respective head and generic content by the marketing head.
            Additionally, all materials undergo Board approval before
            publication.
          </p>
        </div>
        <div className="bg-white text-blue p-4 rounded-lg">
          <h3 className="font-bold ">
            Our Marketing Communication Initiatives
          </h3>
          <p className=" mt-2">
            The following marketing campaigns were launched during the year and
            each campaign was strategically designed to meet specific objectives
            and attract targeted audiences:
          </p>
          <ul className="list-disc list-inside  mt-2">
            <li>
              The Gold Loan product campaign targeting the business sector was
              conducted for 3 months with prizes as incentives. The campaign
              received significant advertising exposure, reaching a wide
              audience.
            </li>
            <li>
              Branch expansion campaign to promote the opening of new branches
              in local areas.
            </li>
            <li>Leasing and Power Draft campaigns.</li>
            <li>
              A Women’s Day campaign was launched to honour female entrepreneurs
              who play a crucial role in our nation’s economy. As part of this
              initiative, we introduced a convenient loan scheme with favourable
              rates tailored to support their endeavours.
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col items-center">
          <img
            src="/images/annual-report/cim-m-banner.png"
            alt="Marketing Image 1"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/images/annual-report/lb-m-banner.png"
            alt="Marketing Image 2"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/images/annual-report/lb-m-banner-2.png"
            alt="Marketing Image 3"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/images/annual-report/lb-m-banner-3.png"
            alt="Marketing Image 4"
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>

      <div className="bg-white text-blue p-4 rounded-lg">
        <p className=" mt-2">
          In our marketing communications, we enhanced the visual appeal and
          brought a more fun feel to the CIM app. Our aim is to achieve our
          customer reach objectives by digitising and infusing vibrancy into our
          communication. Accordingly, we shifted focus from product-oriented
          content to visually appealing material, targeting the younger
          demographic who will be our future customers. However, the challenge
          lies in striking a balance between catering to existing clients and
          making our content appealing to the younger generation.
        </p>
        <p className=" mt-2">
          Prominence was given to video content, particularly through a revamped
          TikTok presence. Additionally, we’ve launched dedicated campaigns to
          engage our staff, featuring their user-generated content on our
          channels to foster a sense of involvement. Furthermore, we conducted
          customer polls and tracked customer satisfaction metrics, with plans
          to share KPIs internally.
        </p>
        <p className=" mt-2">
          During FY 2023/24, there were no incidents of non-compliance
          concerning marketing and communication nor product and service
          information and labelling.
        </p>
      </div>
      <h2 className="font-bold text-lg">
        Our Social Media Footprint - LB Finance PLC
      </h2>

      <div className="bg-white text-blue p-4 rounded-lg">
        <div className="overflow-x-auto mt-4">
          <table className="border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 border-blue px-4 py-2 text-left text-blue font-bold"></th>
                <th className="border-b-2 border-blue px-4 py-2 text-left text-blue font-bold">
                  Facebook 2022/23
                </th>
                <th className="border-b-2 border-blue px-4 py-2 text-left text-blue font-bold">
                  Facebook 2023/24
                </th>
                <th className="border-b-2 border-blue px-4 py-2 text-left text-blue font-bold">
                  Instagram 2022/23
                </th>
                <th className="border-b-2 border-blue px-4 py-2 text-left text-blue font-bold">
                  Instagram 2023/24
                </th>
                <th className="border-b-2 border-blue px-4 py-2 text-left text-blue font-bold">
                  Youtube 2022/23
                </th>
                <th className="border-b-2 border-blue px-4 py-2 text-left text-blue font-bold">
                  Youtube 2023/24
                </th>
                <th className="border-b-2 border-blue px-4 py-2 text-left text-blue font-bold">
                  Tiktok 2022/23
                </th>
                <th className="border-b-2 border-blue px-4 py-2 text-left text-blue font-bold">
                  Tiktok 2023/24
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-blue px-4 py-2">Reach</td>
                <td className="border-b border-blue px-4 py-2">4.2 M</td>
                <td className="border-b border-blue px-4 py-2">5.6 M</td>
                <td className="border-b border-blue px-4 py-2">541.9 K</td>
                <td className="border-b border-blue px-4 py-2">506.7 K</td>
                <td className="border-b border-blue px-4 py-2">292.4 K</td>
                <td className="border-b border-blue px-4 py-2">648.9 K</td>
                <td className="border-b border-blue px-4 py-2">N/A</td>
                <td className="border-b border-blue px-4 py-2">N/A</td>
              </tr>
              <tr>
                <td className="border-b border-blue px-4 py-2">followers</td>
                <td className="border-b border-blue px-4 py-2">122 K</td>
                <td className="border-b border-blue px-4 py-2">178 K</td>
                <td className="border-b border-blue px-4 py-2">338</td>
                <td className="border-b border-blue px-4 py-2">15 K</td>
                <td className="border-b border-blue px-4 py-2">30 K</td>
                <td className="border-b border-blue px-4 py-2">31 K</td>
                <td className="border-b border-blue px-4 py-2">303</td>
                <td className="border-b border-blue px-4 py-2">10 K</td>
              </tr>
              <tr>
                <td className="border-b border-blue px-4 py-2">Impressions</td>
                <td className="border-b border-blue px-4 py-2">31 M</td>
                <td className="border-b border-blue px-4 py-2">51 M</td>
                <td className="border-b border-blue px-4 py-2">N/A</td>
                <td className="border-b border-blue px-4 py-2">N/A</td>
                <td className="border-b border-blue px-4 py-2">1.2 M</td>
                <td className="border-b border-blue px-4 py-2">1.3 M</td>
                <td className="border-b border-blue px-4 py-2">2 K</td>
                <td className="border-b border-blue px-4 py-2">48.2 K</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        <div className="flex flex-col items-center">
          <img
            src="/images/annual-report/social-b-1.png"
            alt="Social Media Image 1"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/images/annual-report/social-b-2.png"
            alt="Social Media Image 2"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/images/annual-report/social-b-3.png"
            alt="Social Media Image 3"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <div className="bg-white text-blue p-4 rounded-lg">
        <h3 className="font-bold ">Managing Channels</h3>
        <p className=" mt-2">
          Our channel infrastructure forms the backbone of delivering our
          customer value proposition. To ensure it remains adaptable to customer
          needs, we proactively enhance its flexibility and responsiveness. Our
          channel management decisions are based on our customer profiles, life
          cycles, geographical locations, population density, and competitive
          positioning. To enhance the overall appeal of our channel
          architecture, we have transitioned towards an omni-channel
          environment, facilitating seamless integration between physical and
          digital channels. For more detailed insights into our channel
          operations, please refer to the Manufactured Capital Report on page
          100.
        </p>
      </div>

      <div className="bg-white text-blue rounded-lg p-6">
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 border-blue px-4 py-2 text-left text-blue font-bold">
                  Segment
                </th>
                <th className="border-b-2 border-blue px-4 py-2 text-left text-blue font-bold">
                  Description
                </th>
                <th className="border-b-2 border-blue px-4 py-2 text-left text-blue font-bold">
                  Focus Products
                </th>
                <th className="border-b-2 border-blue px-4 py-2 text-left text-blue font-bold">
                  Channel Preference
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-blue px-4 py-2 ">
                  Kids/Teenagers 01-18
                </td>
                <td className="border-b border-blue px-4 py-2">
                  Nurturing the hopes and dreams of children, the custodian of
                  the future is crucial to build a stable future
                </td>
                <td className="border-b border-blue px-4 py-2">
                  LB Minor Savings, LB Regular Savings
                </td>
                <td className="border-b border-blue px-4 py-2">-</td>
              </tr>
              <tr>
                <td className="border-b border-blue px-4 py-2 ">
                  Millennials 19-29
                </td>
                <td className="border-b border-blue px-4 py-2">
                  Millennials prioritise life experiences, showing a significant
                  inclination towards investment and retirement products.
                </td>
                <td className="border-b border-blue px-4 py-2">
                  Personal Loan, Digital Financing, Leasing and Savings products
                </td>
                <td className="border-b border-blue px-4 py-2">Digital</td>
              </tr>
              <tr>
                <td className="border-b border-blue px-4 py-2 ">
                  Young families 30-39
                </td>
                <td className="border-b border-blue px-4 py-2">
                  Young families frequently face financial pressures due to
                  lifestyle aspirations such as acquiring larger homes, family
                  vehicles, and other expenses.
                </td>
                <td className="border-b border-blue px-4 py-2">
                  Leasing, Mortgage Loan, Gold Loan, Digital Financing and
                  Savings products
                </td>
                <td className="border-b border-blue px-4 py-2">
                  Physical/Digital
                </td>
              </tr>
              <tr>
                <td className="border-b border-blue px-4 py-2 ">
                  Established families 40-55
                </td>
                <td className="border-b border-blue px-4 py-2">
                  Balancing work commitments, children’s education expenses, and
                  retirement planning often necessitates flexible products to
                  accommodate unexpected financial needs.
                </td>
                <td className="border-b border-blue px-4 py-2">
                  Education loan, gold loan and savings products
                </td>
                <td className="border-b border-blue px-4 py-2">Physical</td>
              </tr>
              <tr>
                <td className="border-b border-blue px-4 py-2 ">
                  Mature well-off 55-60
                </td>
                <td className="border-b border-blue px-4 py-2">
                  Mature, financially stable customers prioritising a higher
                  quality of life and enjoying their retirement years.
                </td>
                <td className="border-b border-blue px-4 py-2">
                  FD products and Savings products
                </td>
                <td className="border-b border-blue px-4 py-2">Physical</td>
              </tr>
              <tr>
                <td className="border-b border-blue px-4 py-2 ">
                  Senior citizens 60+
                </td>
                <td className="border-b border-blue px-4 py-2">
                  Senior citizens who expect secure product returns to maintain
                  their quality of life.
                </td>
                <td className="border-b border-blue px-4 py-2">
                  Senior citizens’ FD and savings products
                </td>
                <td className="border-b border-blue px-4 py-2">Physical</td>
              </tr>
              <tr>
                <td className="border-b border-blue px-4 py-2 ">
                  Self-employed individuals
                </td>
                <td className="border-b border-blue px-4 py-2">
                  Independent self-sufficient individuals seeking dynamic
                  solutions to progress to the next level.
                </td>
                <td className="border-b border-blue px-4 py-2">
                  Personal Loan, Leasing, Savings, Mortgage and Gold Loan
                </td>
                <td className="border-b border-blue px-4 py-2">
                  Physical/Digital
                </td>
              </tr>
              <tr>
                <td className="border-b border-blue px-4 py-2 ">SMEs</td>
                <td className="border-b border-blue px-4 py-2">
                  The backbone of the economy, SMEs require stable, long-term
                  solutions to foster the growth and maturity of their
                  businesses
                </td>
                <td className="border-b border-blue px-4 py-2">
                  Personal Loan, Gold Loan, Mortgage, Micro Leasing and Savings
                </td>
                <td className="border-b border-blue px-4 py-2">
                  Physical/Digital
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 className="font-bold text-lg ">LB CIM</h2>

      <div className="text-blue bg-white p-6 rounded-lg">
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 border-blue px-4 py-2 text-left text-blue font-bold">
                  Platform
                </th>
                <th className="border-b-2 border-blue px-4 py-2 text-left text-blue font-bold">
                  Facebook 2022/23
                </th>
                <th className="border-b-2 border-blue px-4 py-2 text-left text-blue font-bold">
                  Facebook 2023/24
                </th>
                <th className="border-b-2 border-blue px-4 py-2 text-left text-blue font-bold">
                  Instagram 2022/23
                </th>
                <th className="border-b-2 border-blue px-4 py-2 text-left text-blue font-bold">
                  Instagram 2023/24
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-blue px-4 py-2">Reach</td>
                <td className="border-b border-blue px-4 py-2">603 K</td>
                <td className="border-b border-blue px-4 py-2">1.2 M</td>
                <td className="border-b border-blue px-4 py-2">-</td>
                <td className="border-b border-blue px-4 py-2">119.3 K</td>
              </tr>
              <tr>
                <td className="border-b border-blue px-4 py-2">Followers</td>
                <td className="border-b border-blue px-4 py-2">15 K</td>
                <td className="border-b border-blue px-4 py-2">31 K</td>
                <td className="border-b border-blue px-4 py-2">-</td>
                <td className="border-b border-blue px-4 py-2">11.1 K</td>
              </tr>
              <tr>
                <td className="border-b border-blue px-4 py-2">Impressions</td>
                <td className="border-b border-blue px-4 py-2">31 M</td>
                <td className="border-b border-blue px-4 py-2">51 M</td>
                <td className="border-b border-blue px-4 py-2">-</td>
                <td className="border-b border-blue px-4 py-2">N/A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        <div className="flex flex-col items-center">
          <img
            src="/images/annual-report/social-b-4.png"
            alt="Social Media Image 1"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/images/annual-report/social-b-5.png"
            alt="Social Media Image 2"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/images/annual-report/social-b-6.png"
            alt="Social Media Image 3"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <div className="text-blue bg-white p-6 rounded-lg">
        <h3 className="font-bold text-blue">Customer Trust and Safety</h3>
        <p className="text-blue mt-2">
          Fostering customer trust is crucial to our success as a financial
          services institution. Therefore, we strive to create a safe and secure
          environment for our customers to transact with us, which we believe is
          fundamental to building trust. LBF&apos;s Code of Conduct for
          employees outlines the behaviours and protocols expected from all
          employees, including dedicated sections on anti-corruption and
          anti-bribery practices. Additionally, we are committed to ongoing
          employee training to educate them on customer rights and emphasise the
          significance of honesty and integrity in their interactions with
          customers. There were no incidents of non-compliance concerning the
          health and safety impacts of products and services.
        </p>
      </div>

      <div className="text-blue bg-white p-6 rounded-lg">
        <h3 className="font-bold text-blue">
          Data Privacy, Customer Privacy and Information Security
        </h3>
        <p className="text-blue mt-2">
          We are committed to full compliance with all regulations pertaining
          protection of personal data collected during the provision of any
          product or service to customers. We have implemented all recommended
          safeguards to ensure adequate security and prevent data loss, misuse,
          alteration, theft, or unauthorised access. Please refer to page 120
          under Intellectual Capital for more information on our information
          security aspects.
        </p>
        <p className="text-blue mt-2">
          There were no substantiated complaints concerning breaches of customer
          privacy and losses of customer data during the financial year, neither
          were there any incidents of non-compliance with laws and regulations
          in the social and economic area.
        </p>
      </div>

      <div className="text-blue bg-white p-6 rounded-lg">
        <h3 className="font-bold text-blue">
          Customer Relationship Management
        </h3>
        <p className="text-blue mt-2">
          We have continued to build an ecosystem to promote frequent customer
          dialogue and foster two-way communication with our customers. We aim
          to empower customers and inspire them to become active partners in our
          progress.
        </p>
        <div className="overflow-x-auto">
          <img
            src="/images/charts/capitalReport/SocialRelationshipReport/callCenterTable.png"
            alt="callCenterTable"
            className="overflow-x-auto max-w-fit"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-yellow-100 p-4 rounded-lg">
            <p className="text-blue mt-2">
              The branch teams, the call centres, and other customer-facing
              departments play a crucial role in developing customer
              relationships. They engage in identifying customer needs and
              providing tailored solutions to meet the diverse needs of customer
              segments at different stages of the customer lifecycle.
            </p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h4 className="font-bold text-blue">Call Centres</h4>
            <div className="mt-2">
              <p className="text-blue">
                Complaints Resolved: <strong>95%</strong>
              </p>
              <p className="text-blue mt-2">
                Call Centre Satisfaction Rating:
                <strong> 90%</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-blue bg-white p-6 rounded-lg">
          <p className=" mt-2">
            We operate 4 call centres to efficiently respond to customer queries
            and handle complaints:
          </p>
          <ul className="list-disc  mt-2 pl-4">
            <li>A dedicated recovery call centre</li>
            <li>A dedicated gold loan call centre</li>
            <li>A dedicated marketing call centre</li>
            <li>A dedicated CIM wallet call centre</li>
          </ul>
          <p className=" mt-2">The call centres engage in:</p>
          <ul className="list-disc  mt-2 pl-4">
            <li>Direct business conversions convert leads into sales</li>
            <li>
              Customer complaint resolution: enhance handling of customer
              complaints
            </li>
            <li>
              Provision of customer information: provide accurate and timely
              information to customers
            </li>
          </ul>
          <p className=" mt-2">
            During the year under review, we implemented the following:
          </p>
          <ul className="list-disc  mt-2 pl-4">
            <li>
              The capacity of the call centre was increased to 20 agents, along
              with a supervisor and admin officer
            </li>
            <li>
              A new inquiry channel was introduced to improve customer
              accessibility
            </li>
            <li>
              Established a business unit to follow up on potential business
              leads
            </li>
          </ul>
          <p className=" mt-2">
            The call centres continued to collaborate with the marketing
            department to boost sales efforts. During the year, more than 80% of
            customer complaints were resolved successfully and ensured efficient
            escalation for remaining issues beyond the call centre’s scope.
          </p>
        </div>

        <div className="text-blue bg-white p-6 rounded-lg">
          <h3 className="font-bold ">
            Customer Complaint Statistics for FY 2023/24
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full mt-4 border-collapse">
              <thead>
                <tr>
                  <th className="border-b-2 border-blue px-4 py-2 text-left  font-bold">
                    Category
                  </th>
                  <th className="border-b-2 border-blue px-4 py-2 text-left  font-bold">
                    No. of Customer Complaints Received
                  </th>
                  <th className="border-b-2 border-blue px-4 py-2 text-left  font-bold">
                    Customer Complaints Solved
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-blue px-4 py-2">Credit</td>
                  <td className="border-b border-blue px-4 py-2">172</td>
                  <td className="border-b border-blue px-4 py-2">170</td>
                </tr>
                <tr>
                  <td className="border-b border-blue px-4 py-2">Gold loan</td>
                  <td className="border-b border-blue px-4 py-2">39</td>
                  <td className="border-b border-blue px-4 py-2">39</td>
                </tr>
                <tr>
                  <td className="border-b border-blue px-4 py-2">Insurance</td>
                  <td className="border-b border-blue px-4 py-2">26</td>
                  <td className="border-b border-blue px-4 py-2">26</td>
                </tr>
                <tr>
                  <td className="border-b border-blue px-4 py-2">Recovery</td>
                  <td className="border-b border-blue px-4 py-2">287</td>
                  <td className="border-b border-blue px-4 py-2">263</td>
                </tr>
                <tr>
                  <td className="border-b border-blue px-4 py-2">Deposits</td>
                  <td className="border-b border-blue px-4 py-2">2</td>
                  <td className="border-b border-blue px-4 py-2">2</td>
                </tr>
                <tr>
                  <td className="border-b border-blue px-4 py-2">General</td>
                  <td className="border-b border-blue px-4 py-2">7</td>
                  <td className="border-b border-blue px-4 py-2">7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-white text-blue p-6 rounded-lg">
        <h3 className="font-bold ">Future</h3>
        <p className=" mt-2">
          We will continue to strengthen our customer relationships by improving
          customer-centricity, enhancing our digital services, and providing
          tailor-made products and services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-[#e9ebf5] text-blue p-6 rounded-lg">
            <h4 className="font-bold ">Short-term</h4>
            <ul className="list-disc list-inside  mt-2">
              <li>
                Continue to refine internal systems and processes through
                increased automation
              </li>
              <li>Improve the effectiveness of the customer survey process</li>
            </ul>
          </div>
          <div className="bg-[#e9ebf5] text-blue p-6 rounded-lg">
            <h4 className="font-bold ">Medium-term</h4>
            <ul className="list-disc list-inside  mt-2">
              <li>
                Further strengthen information security architecture by
                implementing the data protection protocol
              </li>
              <li>
                Continuously develop new technology-based solutions tailored to
                meet the needs of different customer segments
              </li>
            </ul>
          </div>
          <div className="bg-[#e9ebf5] text-blue p-6 rounded-lg">
            <h4 className="font-bold ">Long-term</h4>
            <ul className="list-disc list-inside  mt-2">
              <li>
                Track customer satisfaction and loyalty as a more frequent
                indicator across business units
              </li>
              <li>
                Capitalise on creating more customised promotional content in
                all mediums
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-blue bg-white p-6 rounded-lg">
        <h2 className="font-bold text-lg ">Business Partner Capital</h2>
        <p className=" mt-2">
          We cultivate enduring relationships with our business partners,
          fostering sustainable and mutually rewarding collaborations that drive
          business growth. During the FY 2023/24, Rs. 42,036 Mn was spent on
          local suppliers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="text-blue bg-white p-6 rounded-lg">
          <h3 className="font-bold ">Our Diverse Business Partners</h3>
          <ul className="list-disc list-inside  mt-2">
            <li>
              <strong>Assets and material suppliers</strong>: Vehicles,
              Furniture, Office equipment, Stationery
            </li>
            <li>
              <strong>Financial service providers</strong>: Banks, Financial
              institutions
            </li>
            <li>
              <strong>IT partners</strong>: IT hardware suppliers, Software
              development services, Network service security, Software services
              (ORACLE)
            </li>
            <li>
              <strong>Outsourced services</strong>: Security, Food and beverage,
              Water, Sanitary facilities, Traveling and transport, Courier,
              Auditors
            </li>
            <li>
              <strong>Other services</strong>: Utility services, Media,
              Consultancy, Premises providers
            </li>
          </ul>
        </div>
        <div className="text-blue bg-white p-6 rounded-lg">
          <h3 className="font-bold ">Management Approach</h3>
          <p className=" mt-2">
            We adopt a centralised supply chain management approach, with the
            administrative department overseeing all procurement activities. The
            department ensures alignment with the requirements of the business
            units and compliance with the Company&apos;s procurement policy,
            ensuring fair treatment of all suppliers.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="text-blue bg-white p-6 rounded-lg">
          <h3 className="font-bold ">Our Supply Chain</h3>
          <p className=" mt-2">
            The Company’s ABC (Anti-Bribery and Anti-Corruption) policy extends
            to all stakeholders: directors, employees, and third-party service
            providers, including suppliers, contractors, sub contractors,
            outsourced staff, and agents. This policy applies universally across
            all activities and functions of our Company, regardless of
            jurisdiction or business scope, incorporating stringent checks
            against bribery and corruption. We ensure our suppliers to uphold
            governance and align with our ethics and human rights policies.
            Their commitment to managing operational, financial, and
            reputational risks is evaluated during onboarding and regularly
            thereafter, guided by our procedure manual, procurement guidelines,
            external supplier management mechanism, and Code of Ethics. There
            were no negative impacts in the supply chain during the year under
            review.
          </p>
        </div>
        <div className="text-blue bg-white p-6 rounded-lg">
          <h3 className="font-bold ">Supplier Relationship Management</h3>
          <p className=" mt-2">
            The Administrative Department is entrusted with the selection and
            onboarding of suppliers and fostering ongoing dialogue to ensure
            they are well-informed and aligned with our social and environmental
            best practices. Additionally, the administrative team develops
            long-term strategic partnerships with the suppliers. We engage with
            our suppliers through social media, emails and face-to-face
            interactions.
          </p>
        </div>
        <div className="text-blue bg-white p-6 rounded-lg">
          <h3 className="font-bold ">Membership in Associations</h3>
          <p className=" mt-2">
            We maintain membership in the following industry associations to
            leverage collective strengths and foster mutually beneficial
            partnerships:
          </p>
          <ul className="list-disc list-inside  mt-2">
            <li>Finance House Association</li>
            <li>Ceylon Chamber of Commerce</li>
          </ul>
        </div>
      </div>

      <div className="text-blue bg-white p-6 rounded-lg">
        <h3 className="font-bold ">Creating Business Partner Value</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="text-blue bg-yellow-100 p-6 rounded-lg">
            <h4 className="font-bold ">Value to Business Partners</h4>
            <ul className="list-disc list-inside  mt-2">
              <li>Quick settlement of dues</li>
              <li>Nurturing long-term business relationships</li>
              <li>Ensuring the earnings stability even amidst uncertainty</li>
            </ul>
          </div>
          <div className="text-blue bg-yellow-100 p-6 rounded-lg">
            <h4 className="font-bold ">Value to LBF</h4>
            <ul className="list-disc list-inside  mt-2">
              <li>Procure high quality good and services</li>
              <li>Competitive prices</li>
              <li>Long-term contracts</li>
              <li>Business continuity</li>
            </ul>
          </div>
          <div className="text-blue bg-yellow-100 p-6 rounded-lg">
            <h4 className="font-bold ">Value to Society</h4>
            <ul className="list-disc list-inside  mt-2">
              <li>Procure high quality goods and services</li>
              <li>Business continuity</li>
              <li>Cost effective solutions</li>
              <li>High quality of service</li>
              <li>Enhanced trust in financial services industry</li>
              <li>Opportunity to develop startups</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-blue bg-white p-6 rounded-lg">
        <h3 className="font-bold ">Future</h3>
        <p className="mt-2">
          We will continue to strengthen the supply chain by enhancing supplier
          relationships, responsible procurement, and adding value to our
          suppliers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="text-blue bg-yellow-100 p-6 rounded-lg">
            <h4 className="font-bold ">Short-term</h4>
            <ul className="list-disc list-inside  mt-2">
              <li>
                Further strengthen the quality and reliability of the supply
                through diversification
              </li>
              <li>
                Create opportunities for suppliers to develop their businesses
              </li>
            </ul>
          </div>
          <div className="text-blue bg-yellow-100 p-6 rounded-lg">
            <h4 className="font-bold ">Medium-term</h4>
            <ul className="list-disc list-inside  mt-2">
              <li>
                Increase supplier training to raise awareness on ethics,
                integrity, and best business practices
              </li>
              <li>
                Use of technology solutions to streamline the supplier screening
              </li>
            </ul>
          </div>
          <div className="text-blue bg-yellow-100 p-6 rounded-lg">
            <h4 className="font-bold ">Long-term</h4>
            <ul className="list-disc list-inside  mt-2">
              <li>
                Create digital solutions to promote greater financial inclusion
                among small-scale suppliers
              </li>
              <li>
                Encourage suppliers to align with LBF’s social and environmental
                priorities
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-blue bg-white p-6 rounded-lg">
        <h2 className="font-bold text-lg">Community Capital</h2>
        <p className="mt-2">
          Our commitment to fostering positive change in the communities we
          serve is paramount to promoting financial inclusion. Critical aspects
          of our focus lie in providing access to education, knowledge sharing,
          community well-being, building partnerships, and engaging in
          business-linked CSR activities.
        </p>
      </div>

      <div className="text-blue bg-white p-6 rounded-lg">
        <h3 className="font-bold ">Management Approach</h3>
        <p className="mt-2">
          Moving beyond considering corporate social responsibility (CSR) as
          mere philanthropy, we are driving systemic change that generates
          sustainable impact over the long-term. To do this, we leverage our
          extensive experience in financial services, island-wide presence, the
          expertise of our team, and our leadership in technology and innovation
          to deliver value to the communities.
        </p>
      </div>

      <div className="text-blue bg-white p-6 rounded-lg">
        <h3 className="font-bold ">Our CSR Pillars</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
          <div className="bg-yellow-200 p-4 rounded-lg">
            <p className="text-center  font-bold">Access to Education</p>
          </div>
          <div className="bg-yellow-200 p-4 rounded-lg">
            <p className="text-center  font-bold">Knowledge Sharing</p>
          </div>
          <div className="bg-yellow-200 p-4 rounded-lg">
            <p className="text-center  font-bold">Community Wellbeing</p>
          </div>
          <div className="bg-yellow-200 p-4 rounded-lg">
            <p className="text-center  font-bold">Build Partnerships</p>
          </div>
          <div className="bg-yellow-200 p-4 rounded-lg">
            <p className="text-center  font-bold">Business Linked CSR</p>
          </div>
        </div>
      </div>

      <div className="text-blue bg-white p-6 rounded-lg">
        <h3 className="font-bold ">CSR Strategy</h3>
        <p className="mt-2">
          A summary of our five-year CSR strategy includes the following
          outcomes and initiatives:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <h4 className="font-bold ">Objectives</h4>
            <ul className="list-disc pl-4  mt-2">
              <li>
                We believe that we best serve the communities surrounding with
                CSR initiatives
              </li>
              <li>Increase our engagement and involvement</li>
              <li>
                Empower and uplift disadvantaged communities by understanding
                their needs and co-creating solutions for measurable positive
                impact on their socioeconomic conditions
              </li>
              <li>
                Monitor the impact of interventions and communities on our
                business and properties
              </li>
              <li>Build and strengthen relationships</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold ">Strategic Focus Area</h4>
            <ul className="list-disc pl-4  mt-2">
              <li>
                Driven by innovation to ensure scalability and replicability, we
                focus on five strategic focus areas for CSR:
              </li>
              <li>Education and Skills development</li>
              <li>Youth development </li>
              <li>Community development</li>
              <li>Business linkage and partnerships</li>
              <li>Environmental awareness </li>
            </ul>
            <p>
              These focus areas are crucial to create a positive legacy for our
              communities
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-4">
        <div className="bg-white text-blue rounded-lg p-6">
          <p className="mt-2">
            We will continue to adopt a hybrid approach, blending physical and
            digital engagements, to bolster our CSR strategy. We anticipate that
            this &quot;phygital&quot; CSR strategy will be crucial in driving
            significant outcomes in the years ahead.
          </p>
          <p className=" mt-2">
            During the year under review, there were no operations with
            significant actual and potential negative impacts on local
            communities.
          </p>
          <h3 className="font-bold  mt-4">CSR Governance</h3>
          <p className="mt-2">
            Under the guidance of our senior management, the sustainability team
            at LBF is responsible for determining sustainability initiatives and
            implementing projects aligned with the Company&apos;s five CSR
            pillars.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white text-blue rounded-lg p-6">
          <div className="flex flex-col items-center">
            <img
              src="/images/charts/capitalReport/SocialRelationshipReport/Investment-in-csr.PNG"
              alt="Investment in CSR"
              className="mb-4 rounded-lg"
            />
          </div>
          {/* <Chart
            options={investmentOptions}
            series={investmentSeries}
            type="bar"
            height={350}
          /> */}
        </div>
        <div className="bg-white text-blue rounded-lg p-6">
          <div className="flex flex-col items-center">
            <img
              src="/images/charts/capitalReport/SocialRelationshipReport/key-areas-supported-to-community.PNG"
              alt="Key Areas Supported to Community"
              className="mb-4 rounded-lg"
            />
          </div>
          {/* <Chart
            options={communityOptions}
            series={communitySeries}
            type="donut"
            height={350}
          /> */}
        </div>
      </div>

      <div className="bg-white text-blue rounded-lg p-6">
        <h3 className="font-bold ">Corporate Social Responsibility</h3>
        <h4 className="font-bold  mt-4">Access to education</h4>
        <p className=" mt-2">
          We advocate that quality education across all levels serves as the
          cornerstone for mitigating inequalities and fostering sustainable
          socio-economic development over the long haul. Within LBF&apos;s CSR
          strategy, priority is given to enhancing educational access with the
          goal of eradicating the enduring knowledge gap prevalent in Sri Lanka.
          Additionally, as a responsible financial institution, we recognise our
          significant role in enhancing digital literacy among the broader
          community. This, in turn, fosters the development of self-sustaining
          communities capable of driving economic growth.
        </p>
      </div>

      <div className="bg-white text-blue p-6 rounded-lg">
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 border-blue px-4 py-2 text-left  font-bold">
                  Project
                </th>
                <th className="border-b-2 border-blue px-4 py-2 text-left  font-bold">
                  Description
                </th>
                <th className="border-b-2 border-blue px-4 py-2 text-left  font-bold">
                  Achievement
                </th>
                <th className="border-b-2 border-blue px-4 py-2 text-left  font-bold">
                  Employee Volunteerism (hours)
                </th>
                <th className="border-b-2 border-blue px-4 py-2 text-left  font-bold">
                  Expenditure (Rs.)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-blue px-4 py-2">
                  ‘Chathurmana’: The Inter-University Talent Competition
                </td>
                <td className="border-b border-blue px-4 py-2">
                  Talent show for University students 500+ contestants from 16
                  universities participated in the interuniversity talent show
                  LBF was the Diamond sponsor for this competition which was
                  organised by the Accounting and Financial Management
                  Association (AFMA), the student body of the Department of
                  Accounting, Faculty of Management Studies and Commerce,
                  University of Sri Jayewardenepura.
                </td>
                <td className="border-b border-blue px-4 py-2">
                  <ul className="list-disc list-inside">
                    <li>Showcasing Diverse Skills</li>
                    <li>Promoting Confidence and Self-esteem</li>
                    <li>Fostering Creativity and Innovation</li>
                    <li>Building Teamwork and Collaboration</li>
                    <li>Stress Relief and Entertainment</li>
                    <li>Enhancing Event Management Skills</li>
                  </ul>
                </td>
                <td className="border-b border-blue px-4 py-2">224</td>
                <td className="border-b border-blue px-4 py-2">350,000/-</td>
              </tr>
              <tr>
                <td className="border-b border-blue px-4 py-2">
                  Empowering Future Technologists
                </td>
                <td className="border-b border-blue px-4 py-2">
                  The project aims to provide essential computer resources to
                  students facing financial difficulties, with a specific focus
                  on supporting Mr. Yakalla Kankanamalage Kushan Chamikara. Mr.
                  Chamikara is a dedicated student enrolled in the BSc in
                  Electronics and Automation Technologies degree programme at
                  the University of Colombo.
                </td>
                <td className="border-b border-blue px-4 py-2">
                  <ul className="list-disc list-inside">
                    <li>Equal Opportunity</li>
                    <li>Increased Engagement and Participation</li>
                    <li>Reduction of Barriers to Education</li>
                  </ul>
                </td>
                <td className="border-b border-blue px-4 py-2">42</td>
                <td className="border-b border-blue px-4 py-2">185,000/-</td>
              </tr>
              <tr>
                <td className="border-b border-blue px-4 py-2">
                  CSE Stock Market Challenge 2023
                </td>
                <td className="border-b border-blue px-4 py-2">
                  CSE Stock Market Challenge 2023 organised by the Students’
                  Association of Financial Management of the Department of
                  Commerce and Financial Management was held at University of
                  Kelaniya. The event was organised with the collaboration of
                  Colombo Stock Exchange and LB Finance PLC. The objectives
                  were; Increasing the investments in stock market among new
                  generation.
                </td>
                <td className="border-b border-blue px-4 py-2">
                  <ul className="list-disc pl-4 ">
                    <li>
                      Increasing the knowledge about the process of stock market
                      among school students.
                    </li>
                    <li>
                      Encouraging new generation to be alert about corporate
                      organisations and world economic market.
                    </li>
                    <li>
                      Increasing the general sense about prevailing
                      macro-economic conditions of the country among school
                      students.
                    </li>
                  </ul>
                </td>
                <td className="border-b border-blue px-4 py-2">237</td>
                <td className="border-b border-blue px-4 py-2">300,000/-</td>
              </tr>

              <tr>
                <td className="border-b border-blue px-4 py-2">
                  Educational Resources for Ampe Junior School
                </td>
                <td className="border-b border-blue px-4 py-2">
                  The Educational Resources for Ampe Junior School project aimed
                  to provide essential books and equipment for Grade 1 students
                  for the year 2024. The list of required items included rule
                  books, drawing books, stationery, and other educational
                  materials necessary for the students’ learning and
                  development.
                </td>
                <td className="border-b border-blue px-4 py-2">
                  <ul className="list-disc pl-4 ">
                    <li>Early Literacy Development</li>
                    <li>EEnhanced Social and Emotional Development</li>
                    <li>Preparation for Lifelong Learning</li>
                    <li>Positive School Experience</li>
                  </ul>
                </td>
                <td className="border-b border-blue px-4 py-2">192</td>
                <td className="border-b border-blue px-4 py-2">100,050/-</td>
              </tr>

              <tr>
                <td className="border-b border-blue px-4 py-2">
                  Consumer education
                </td>
                <td className="border-b border-blue px-4 py-2">
                  <strong>Education on financial </strong>
                  <br />
                  management Conducted video series on social media to build
                  awareness of the financial management under the topics of
                  building investment habits,developing your savings habit,
                  golden rules for strong financial security
                </td>
                <td className="border-b border-blue px-4 py-2">
                  <ul className="list-disc pl-4 ">
                    <li>
                      Enhance the savings habit of the customers and
                      non-customers
                    </li>
                    <li>
                      Day today financial information and regulatory
                      requirements
                    </li>
                    <li>PInformation on wealth maximisation</li>
                  </ul>
                </td>
                <td className="border-b border-blue px-4 py-2">74</td>
                <td className="border-b border-blue px-4 py-2">-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div>
            <img
              src="/images/sustainability/health-gallery-img-1.png"
              alt="health gallery"
              className="w-full rounded-lg"
            />
          </div>
          <div>
            <img
              src="/images/sustainability/health-gallery-img-2.png"
              alt="health gallery"
              className="w-full rounded-lg"
            />
          </div>
          <div>
            <img
              src="/images/sustainability/health-gallery-img-3.png"
              alt="health gallery"
              className="w-full rounded-lg"
            />
          </div>
          <div>
            <img
              src="/images/sustainability/health-gallery-img-4.png"
              alt="health gallery"
              className="w-full rounded-lg"
            />
          </div>
          <div>
            <img
              src="/images/sustainability/health-gallery-img-5.png"
              alt="health gallery"
              className="w-full rounded-lg"
            />
          </div>
          <div>
            <img
              src="/images/sustainability/health-gallery-img-6.png"
              alt="health gallery"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 text-blue rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Knowledge sharing</h1>
        <p className="mb-6">
          Entrepreneurs represent the future of our nation, and empowering them
          is crucial for driving our country’s growth trajectory in the years
          ahead. At LBF, we uphold a structured agenda aimed at offering the
          necessary guidance and support to nurture a new generation of
          innovators, business professionals, and corporate leaders
        </p>
      </div>
      <div className="bg-white text-blue rounded-lg p-6">
        <div className="mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className=" text-left">
                <th className="border-b-2 border-blue px-4 py-2 text-left  font-bold">
                  Project
                </th>
                <th className="border-b-2 border-blue px-4 py-2 text-left  font-bold">
                  Description
                </th>
                <th className="border-b-2 border-blue px-4 py-2 text-left  font-bold">
                  Achievement
                </th>
                <th className="border-b-2 border-blue px-4 py-2 text-left  font-bold">
                  <div>Employee</div>
                  <div>volunteerism</div>
                  <div>(hours)</div>
                </th>
                <th className="border-b-2 border-blue px-4 py-2 text-left  font-bold">
                  <div>Expenditure</div>
                  <div>(Rs.)</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {projects2.map((project, index) => (
                <tr key={index} className="">
                  <td className="p-2 md:p-4 align-top border-b border-blue">
                    {project.name}
                  </td>
                  <td className="p-2 md:p-4 align-top border-b border-blue">
                    {project.description}
                  </td>
                  <td className="p-2 md:p-4 align-top border-b border-blue">
                    <ul className="list-disc pl-4">
                      {project.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-2 md:p-4 align-top text-center border-b border-blue">
                    {project.volunteerism}
                  </td>
                  <td className="p-2 md:p-4 align-top text-center border-b border-blue">
                    {project.expenditure}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          <img
            src="/images/annual-report/sb-7.png"
            alt="Women in tailoring class"
            className="w-full h-auto"
          />
          <img
            src="/images/annual-report/sb-8.png"
            alt="Women in sewing class"
            className="w-full h-auto"
          />
          <img
            src="/images/annual-report/sb-9.png"
            alt="Women in discussion"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="bg-white p-6 text-blue rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Community well being</h1>
        <p className="mb-6">
          LBF’s initiatives for community well-being are meticulously crafted to
          extend assistance promptly and strategically, aligning with the
          community’s most urgent requirements. These activities are geared
          towards promptly identifying and addressing the critical needs of the
          community, ensuring that support is delivered precisely when it’s
          needed the most. Whether it’s providing essential resources, offering
          guidance, or implementing targeted interventions, LBF’s commitment
          lies in responding swiftly and effectively to the pressing needs of
          the community.
        </p>
      </div>

      <div className="bg-white text-blue rounded-lg p-6">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left">
                <th className="p-2 md:p-4 font-bold border-b-2 border-blue">
                  Project
                </th>
                <th className="p-2 md:p-4 font-bold border-b-2 border-blue">
                  Description
                </th>
                <th className="p-2 md:p-4 font-bold border-b-2 border-blue">
                  Achievement
                </th>
                <th className="p-2 md:p-4 font-bold border-b-2 border-blue">
                  <div>Employee</div>
                  <div>volunteerism</div>
                  <div>(hours)</div>
                </th>
                <th className="p-2 md:p-4 font-bold border-b-2 border-blue">
                  <div>Expenditure</div>
                  <div>(Rs.)</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {projects3.map((project, index) => (
                <tr key={index} className=" bg-opacity-20 hover:bg-opacity-30">
                  <td className="p-2 md:p-4 align-top border-b border-blue">
                    {project.name}
                  </td>
                  <td className="p-2 md:p-4 align-top border-b border-blue">
                    {project.description.split('\n').map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </td>
                  <td className="p-2 md:p-4 align-top border-b border-blue">
                    <ul className="list-disc pl-4">
                      {project.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-2 md:p-4 align-top text-center border-b border-blue">
                    {project.volunteerism}
                  </td>
                  <td className="p-2 md:p-4 align-top text-center border-b border-blue">
                    {project.expenditure}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          <Image
            src="/images/annual-report/sb-10.png"
            alt="Rehabilitation center construction"
            className="w-full h-auto"
          />
          <Image
            src="/images/annual-report/sb-11.png"
            alt="Health camp activity"
            className="w-full h-auto"
          />
          <Image
            src="/images/annual-report/sb-12.png"
            alt="Community awareness program"
            className="w-full h-auto"
          />
          <Image
            src="/images/annual-report/sb-13.png"
            alt="Fitness workshop"
            className="w-full h-auto"
          />
          <Image
            src="/images/annual-report/sb-14.png"
            alt="Community awareness poster"
            className="w-full h-auto"
          />
          <Image
            src="/images/annual-report/sb-15.png"
            alt="World Autism Awareness Day poster"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="bg-white p-6 text-blue rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Build partnerships</h1>
        <p className="mb-6">
          Recognising the power of strategic partnerships with organisations
          that share our values, we have observed how such alliances can amplify
          the impact of our community initiatives. Therefore, we are committed
          to seeking out and cultivating value-adding partnerships that align
          with our goals and objectives. These partnerships are tailored to the
          scope and scale of the projects we undertake, allowing us to leverage
          complementary strengths, resources, and expertise to achieve
          meaningful and sustainable outcomes for the communities we serve.
        </p>
      </div>

      <div className="bg-white text-blue rounded-lg p-6">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left">
                <th className="p-2 md:p-4 font-bold border-b-2 border-blue">
                  Project
                </th>
                <th className="p-2 md:p-4 font-bold border-b-2 border-blue">
                  Description
                </th>
                <th className="p-2 md:p-4 font-bold border-b-2 border-blue">
                  Achievement
                </th>
                <th className="p-2 md:p-4 font-bold border-b-2 border-blue">
                  <div>Employee</div>
                  <div>volunteerism</div>
                  <div>(hours)</div>
                </th>
                <th className="p-2 md:p-4 font-bold border-b-2 border-blue">
                  <div>Expenditure</div>
                  <div>(Rs.)</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {projects4.map((project, index) => (
                <tr key={index} className=" bg-opacity-20 hover:bg-opacity-30">
                  <td className="p-2 md:p-4 align-top border-b border-blue">
                    {project.name}
                  </td>
                  <td className="p-2 md:p-4 align-top border-b border-blue">
                    {project.description}
                  </td>
                  <td className="p-2 md:p-4 align-top border-b border-blue">
                    <ul className="list-disc pl-4">
                      {project.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-2 md:p-4 align-top text-center border-b border-blue">
                    {project.volunteerism}
                  </td>
                  <td className="p-2 md:p-4 align-top text-center border-b border-blue">
                    {project.expenditure}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white text-blue rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Transformative CSR</h1>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left">
                <th className="p-2 md:p-4 font-bold border-b-2 border-blue">
                  Project
                </th>
                <th className="p-2 md:p-4 font-bold border-b-2 border-blue">
                  Description
                </th>
                <th className="p-2 md:p-4 font-bold border-b-2 border-blue">
                  Achievement
                </th>
                <th className="p-2 md:p-4 font-bold border-b-2 border-blue">
                  <div>Employee</div>
                  <div>volunteerism</div>
                  <div>(hours)</div>
                </th>
                <th className="p-2 md:p-4 font-bold border-b-2 border-blue">
                  <div>Expenditure</div>
                  <div>(Rs.)</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {projects5.map((project, index) => (
                <tr key={index} className=" bg-opacity-20 hover:bg-opacity-30">
                  <td className="p-2 md:p-4 align-top border-b border-blue">
                    {project.name}
                  </td>
                  <td className="p-2 md:p-4 align-top border-b border-blue">
                    {project.description}
                  </td>
                  <td className="p-2 md:p-4 align-top border-b border-blue">
                    <ul className="list-disc pl-4">
                      {project.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-2 md:p-4 align-top text-center border-b border-blue">
                    {project.volunteerism}
                  </td>
                  <td className="p-2 md:p-4 align-top text-center border-b border-blue">
                    {project.expenditure}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <Image
          src="/images/annual-report/sb-16.png"
          alt="Community gathering"
          className="w-full h-auto"
        />
        <Image
          src="/images/annual-report/sb-17.png"
          alt="People in a waiting area"
          className="w-full h-auto"
        />
        <Image
          src="/images/annual-report/sb-18.png"
          alt="Special notice"
          className="w-full h-auto"
        />
        <Image
          src="/images/annual-report/sb-19.png"
          alt="Group photo"
          className="w-full h-auto"
        />
        <Image
          src="/images/annual-report/sb-20.png"
          alt="Personal Loan ad"
          className="w-full h-auto"
        />
        <Image
          src="/images/annual-report/sb-21.png"
          alt="LINKS Click ad"
          className="w-full h-auto"
        />
      </div>

      <div className="bg-white text-blue rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 ">Creating Community Value</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <ValueSection
            title="VALUE TO COMMUNITIES"
            items={[
              'Reduce inequalities',
              'Build sustainable communities',
              'Develop the rural economy',
            ]}
          />
          <ValueSection
            title="VALUE TO LBF"
            items={[
              'Improve brand equity',
              'Enhance brand recognition and awareness of products and services',
              'Build a pool of potential stakeholders',
            ]}
          />
          <ValueSection
            title="VALUE TO SOCIETY"
            items={[
              'Association with a trusted financial partner',
              'Gain from expert investment guidance',
              'Strengthened confidence in the financial services sector',
            ]}
          />
        </div>
      </div>

      <div className="bg-white text-blue rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-2">Future</h1>
        <p className="mb-4">
          We will continue to empower communities to foster sustainable
          development across Sri Lanka.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ValueSection
            title="Short-term"
            items={[
              'Systematically expand the community investment in identified areas',
              'Increase community engagement through social media',
            ]}
          />
          <ValueSection
            title="Medium-term"
            items={[
              'Partnerships with multilateral organisations to develop innovative financial solutions for underserved segments',
              'Develop and launch a formal employee volunteer programme',
            ]}
          />
          <ValueSection
            title="Long-term"
            items={[
              'Establish a formal mechanism to handle community grievances',
              'Introduce a set of quantitative and qualitative indicators to measure the effectiveness of each project over time',
            ]}
          />
        </div>
      </div>
    </div>
  );
}

const ValueSection: React.FC<{ title: string; items: string[] }> = ({
  title,
  items,
}) => (
  <div className="bg-[#c8a063] bg-opacity-20 p-4 rounded">
    <h2 className="font-bold mb-2">{title}</h2>
    <ul className="list-disc pl-4">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);
