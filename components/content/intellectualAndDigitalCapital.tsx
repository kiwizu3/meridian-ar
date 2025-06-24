'use client';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const chartOptions: ApexOptions = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  xaxis: {
    categories: ['2020', '2021', '2022', '2023', '2024'],
  },
  yaxis: {
    title: {
      text: 'Rs. Mn',
    },
  },
  colors: ['#FEB019'],
  title: {
    text: 'Brand Value',
    align: 'center',
    style: {
      fontSize: '14px',
      color: '#555',
    },
  },
  plotOptions: {
    bar: {
      distributed: true,
      horizontal: false,
      columnWidth: '55%',
    },
  },
};

const chartSeries = [
  {
    name: 'Brand Value',
    data: [4000, 5000, 6000, 7000, 8000],
  },
];

export default function IntellectualDigitalCapital() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col gap-6">
      <div>
        <div className="overflow-x-auto">
          <img
            className="max-w-none"
            src="/images/annual-report/finance_capital/Intellectual.png"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Main Content */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white text-blue p-6 rounded-lg">
          <div className="bg-white text-blue p-4 rounded-lg">
            <p>
              Intellectual capital comprises the intangible assets that shape
              our identity and provide a competitive edge. It encompasses our
              brand, our information technology assets, control systems and
              frameworks, and knowledgebased assets.
            </p>
          </div>
        </div>
      </div>

      {/* Management Approach */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white text-blue p-6 rounded-lg">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">MANAGEMENT APPROACH</h3>
          <p>
            We continued to nurture our intellectual capital by adhering to the
            latest globally accepted best practices, and ongoing investments in
            our digital capabilities, processes, and people that would position
            us for future growth and success.
          </p>
        </div>
        <div>
          {/* Components of Human Capital */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">
              COMPONENTS OF INTELLECTUAL CAPITAL
            </h3>
            <ul className="list-disc list-inside">
              <li>BRAND</li>
              <li>INFORMATION TECHNOLOGY ASSETS</li>
              <li>CONTROL SYSTEMS AND FRAMEWORKS</li>
              <li>KNOWLEDGE-BASED SYSTEMS AND PROCESSES</li>
            </ul>
          </div>

          {/* Nurturing Human Capital */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              NURTURING INTELLECTUAL CAPITAL
            </h3>
            <ul className="list-disc list-inside">
              <li>Digitising business processes</li>
              <li>Strengthening IT security</li>
              <li>Enhancing brand image</li>
              <li>Developing employees</li>
              <li>Strengthening IT governance</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 bg-white text-blue p-6 rounded-lg">
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
                  Enhance the systems with the latest software and secure
                  protocols
                </td>
                <td className="py-2 px-4 text-sm text-blue align-top">
                  Obtain ISO 27001Scope certification for managing information
                  security requirement related to IT services
                </td>
                <td className="py-2 px-4 text-sm text-blue align-top">
                  Improve time to market by automating the software development
                  lifecycle
                </td>
                <td className="py-2 px-4 text-sm text-blue align-top">
                  Continuous R & D to boost idea generation and innovation
                  capabilities
                </td>
                <td className="py-2 px-4 text-sm text-blue align-top">
                  Pursue continuous process enhancements
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="py-2 px-4 text-sm text-blue align-top">
                  Fraud awareness campaigns aimed at educating and creating
                  customer awareness on fraudulent activities
                </td>
                <td className="py-2 px-4 text-sm text-blue align-top">
                  Training and email awareness campaigns were conducted
                  continuously for the staff members
                </td>
                <td className="py-2 px-4 text-sm text-blue align-top">
                  Improve efficiency of the system audit process using AI
                  technology
                </td>
                <td className="py-2 px-4 text-sm text-blue align-top">
                  Enable the digital migration of core products
                </td>
                <td className="py-2 px-4 text-sm text-blue align-top">
                  Prioritise cyber security initiatives to protect digital
                  assets, customer data, and sensitive information from cyber
                  threats
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="py-2 px-4 text-sm text-blue align-top">
                  Acquisition of software that permits the digital interaction
                  of customers
                </td>
                <td className="py-2 px-4 text-sm text-blue align-top">
                  Transfer the digital CIM App development function from outside
                  development to in-house management
                </td>
                <td className="py-2 px-4 text-sm text-blue align-top">
                  Introduce a new audit programme to provide assurance regarding
                  LBF’s IT compliance status
                </td>
                <td className="py-2 px-4 text-sm text-blue align-top">
                  Forge strategic partnerships and collaborations with
                  technology vendors, startups, and industry peers to access
                  specialised expertise
                </td>
                <td className="py-2 px-4 text-sm text-blue align-top">
                  Leverage data analytics and business intelligence tools to
                  derive actionable insights from data
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
        {/* Contributing to Our Mission */}
        <div className="bg-white text-black p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">
            CONTRIBUTING TO OUR MISSION
          </h3>
          <p>
            To mobilise public funds by innovating investment products that will
            enhance the value delivered to our depositors.
          </p>
        </div>

        {/* Contributing to Our Values */}
        <div className="bg-white text-black p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">
            CONTRIBUTING TO OUR VALUES
          </h3>
          <div className="flex justify-center">
            <img
              src="/images/annual-report/finance_capital/values.png"
              alt="values"
            />
          </div>
        </div>
        <div className="bg-white text-black p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">STAKEHOLDERS IMPACTED</h3>
          <div>
            <img
              src="/images/charts/capitalReport/HumanCapitalReports/stakeholdersImpacted.png"
              alt="stakeholder impacted"
            />
          </div>
          <div className="bg-white text-black mt-6 rounded-lg">
            <h3 className="text-xl font-semibold">COMMITMENTS TO UN SDGs</h3>
            <div className="flex justify-center">
              <img
                src="/images/annual-report/finance_capital/intellectual-committment.jpg"
                alt="values"
              />
            </div>
          </div>
        </div>
        {/* Material Matters */}
        <div className="bg-white text-black p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">MATERIAL MATTERS</h3>
          <ul className="list-disc list-inside">
            <li>Business continuity</li>
            <li>Digital transformation</li>
            <li>Data privacy and Cyber security</li>
            <li>Process Excellence</li>
            <li>Tech resource allocation</li>
            <li>Data science and data analytics</li>
            <li>Tech-savvy trained employees</li>
          </ul>
        </div>

        {/* Commitments to UN SDGs */}

        {/* Employee Chart */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-[#0A3D5F]">
            Brand Value
          </h3>
          <div>
            <div className="p-4 flex flex-col items-center">
              <img
                src="/images/annual-report/finance_capital/intellectual-brand-value.jpg"
                alt="No. Of Employees"
                className="mb-4 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-white rounded-lg">
        <h2 className="pb-2 border-b-1 text-center">CAPITAL TRADE-OFF</h2>
        <h3 className="py-2 text-center">Process automation</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-[#d1dff2] rounded-t-lg text-center">
            <h4 className="font-bold bg-[#0989ca] p-2 rounded-t-lg">FC</h4>
            <p className="p-2 text-black">
              Significant financial outlay in the short-term but financial
              returns in the long-term due to improved efficiency{' '}
            </p>
          </div>
          <div className="bg-[#fadde9] rounded-t-lg text-center">
            <h4 className="font-bold bg-[#5a3f97] p-2 rounded-t-lg">HC</h4>
            <p className="p-2 text-black"> Improves employee productivity</p>
          </div>
          <div className="bg-[#e7f0d4] rounded-t-lg text-center">
            <h4 className="font-bold bg-[#97c839] p-2 rounded-t-lg">NC</h4>
            <p className="p-2 text-black">
              Less paper usage contributes to environmental sustainability
            </p>
          </div>
          <div className="bg-[#e7f0d4] rounded-t-lg text-center">
            <h4 className="font-bold bg-[#a67e35] p-2 rounded-t-lg">SC</h4>
            <p className="p-2 text-black">
              Improves customer satisfaction through enhanced convenience
            </p>
          </div>
        </div>
        <h3 className="py-2 text-center">
          Investment in Advanced data analytics, digital financing and machine
          learning platform
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
            <h4 className="font-bold bg-[#ef56a0] p-2 rounded-t-lg">IC</h4>
            <p className="p-2 text-black">
              Enhances innovation, and improves brand reputation
            </p>
          </div>
          <div className="bg-[#e7f0d4] rounded-t-lg text-center">
            <h4 className="font-bold bg-[#a67e35] p-2 rounded-t-lg">NC</h4>
            <p className="p-2 text-black">New products and services</p>
          </div>
          <div className="bg-[#fadde9] rounded-t-lg text-center">
            <h4 className="font-bold bg-[#5a3f97] p-2 rounded-t-lg">MC</h4>
            <p className="p-2 text-black">
              Improves decision making, new skill development
            </p>
          </div>
        </div>
      </div>

      <div className=" text-blue bg-white p-6 rounded-lg">
        <h2 className="text-blue font-bold text-lg mb-4">Our Brand</h2>
        <p className="">
          Since its inception over 50 years ago, the journey of LBF has been one
          of continuous growth, evolving into a pivotal asset within the Group.
          Our brand has undergone numerous transformative phases, reinforcing
          the fundamental principles defining LBF: Excellence, Quality,
          Innovation, Professionalism, Ethics, and Transparency.
        </p>
        <p className=" mt-2">
          Our strategic objective has been to enhance our brand image, ensuring
          it resonates with our audience. This is facilitated by a range of
          tactical and business support initiatives, including a robust public
          relations strategy, well-defined social media policies, and precise
          communication protocols. These initiatives effectively disseminate our
          brand messages across a variety of digital platforms and communication
          channels, ensuring that critical messages are amplified while
          safeguarding our brand equity at all times.
        </p>
        <p className=" mt-2">
          By steadfastly adhering to these core principles, we have earned the
          trust and admiration of all stakeholders, thereby cementing our
          reputation as one of the most respected and beloved brands in Sri
          Lanka.
        </p>
      </div>

      <div className=" text-blue bg-white p-6 rounded-lg">
        <h2 className="text-blue font-bold text-lg mb-4">
          Information Technological Assets
        </h2>
        <p className="">
          Our information technology assets encompass an extensive IT
          infrastructure and software architecture developed over the years. We
          refine our IT strategy annually to leverage technology to accelerate
          business growth. Through sustained investments over the years, we have
          expanded and upgraded our technology assets, positioning LBF to gain
          substantial competitive advantages. These advantages further solidify
          the Company’s position as a digital leader in the local financial
          services sector.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col items-center">
          <img
            src="/images/annual-report/brand-1.png"
            alt="LBF Finance Image 1"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/images/annual-report/brand-2.png"
            alt="LBF Finance Image 2"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/images/annual-report/brand-3.png"
            alt="LBF Finance Image 3"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/images/annual-report/brand-4.png"
            alt="LBF Finance Image 4"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <h2 className="font-bold text-lg">Our Brand Performance - 2023</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className=" text-blue bg-white p-6 rounded-lg">
          <h3 className="text-blue font-bold">LMD Brand Finance</h3>
          <p className="text-blue">
            Brand value reflects the image of the Company in the eyes of
            customers, existing or potential and other important stakeholders.
            Since LBF recognises the importance of brand as a key value driver
            the Company is constantly striving to preserve and nurture it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-[#dfba8a] text-white rounded-lg p-4">
              <h4 className="text-blue font-bold">
                25<sup>th</sup> <br /> place in
              </h4>
              <p className="text-white">MOST VALUABLE BRAND</p>
            </div>
            <div className="bg-[#dfba8a] text-white rounded-lg p-4">
              <h4 className="text-blue font-bold">
                01<sup>st</sup> <br /> place in
              </h4>
              <p className="text-white">SECTOR WINNER - FINANCE AND LEASING</p>
            </div>
            <div className="bg-[#dfba8a] text-white rounded-lg p-4">
              <h4 className="text-blue font-bold">
                28<sup>th</sup> <br /> place in
              </h4>
              <p className="text-white">MOST RESPECTED ENTITY</p>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="font-bold text-blue">Attribute Ranking</h4>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <p className="bg-[#dfba8a] text-white rounded-lg p-4 ">
                11<sup>th</sup> place in Financial Performance
              </p>
              <p className="bg-[#dfba8a] text-white rounded-lg p-4">
                14<sup>th</sup> place in Management Profile
              </p>
              <p className="bg-[#dfba8a] text-white rounded-lg p-4">
                22<sup>nd</sup> place in Honesty
              </p>
              <p className="bg-[#dfba8a] text-white rounded-lg p-4">
                20<sup>th</sup> place in Innovation
              </p>
              <p className="bg-[#dfba8a] text-white rounded-lg p-4">
                25<sup>th</sup> place in Dynamism
              </p>
              <p className="bg-[#dfba8a] text-white rounded-lg p-4">
                32<sup>nd</sup> place in CSR and Sustainability
              </p>
              <p className="bg-[#dfba8a] text-white rounded-lg p-4">
                20<sup>th</sup> place in Vision
              </p>
              <p className="bg-[#dfba8a] text-white rounded-lg p-4">
                25<sup>th</sup> place in HR and People Management
              </p>
              <p className="bg-[#dfba8a] text-white rounded-lg p-4">
                21<sup>st</sup> place in Crisis Management
              </p>
            </div>
          </div>
        </div>

        <div className=" text-blue bg-white p-6 rounded-lg">
          <h3 className="text-orange-500 font-bold">
            Control Systems and Frameworks
          </h3>
          <h4 className="text-blue-500 font-bold mt-4">
            Business Continuity Planning
          </h4>
          <p className="">
            To mitigate potential risks that could disrupt or jeopardise our
            critical business functions, our strategy places utmost importance
            on the safety and security of all employees while ensuring
            uninterrupted continuity of essential business operations. This
            involves ensuring uninterrupted business operations from a
            pre-established alternative site in the event of an emergency.
          </p>
          <p className="text-blue mt-2">
            Our comprehensive Business Continuity Plan (BCP) is formulated in
            accordance with the guidelines of the Central Bank of Sri Lanka
            (CBSL) and is benchmarked against global standards. It serves as a
            fail-safe mechanism, offering comprehensive protection for our staff
            members, facilities, technology, and information systems.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className=" text-blue bg-white p-6 rounded-lg">
          <h4 className="font-bold ">Licensed Software</h4>
          <ul className="list-disc list-inside text-blue mt-2">
            <li>E-financial system, leasing, treasury modules</li>
            <li>Oracle fusion ERP cloud</li>
            <li>Oracle budgeting and planning modules</li>
            <li>Oracle profitability management modules</li>
            <li>ATM switch</li>
            <li>HRIS system</li>
            <li>Document management system</li>
            <li>Customer relationship management system</li>
            <li>Internet banking and e-wallet (iOS & Android)</li>
            <li>E-learning platform</li>
            <li>Reporting services and Tableau</li>
            <li>AML system</li>
            <li>CAML system</li>
            <li>Western Union system</li>
            <li>Kaspersky End point security</li>
            <li>Robotic process automated software</li>
            <li>Data visualisation and modelling software</li>
            <li>Azure DevOps</li>
            <li>Kibana</li>
          </ul>
        </div>

        <div className=" text-blue bg-white p-6 rounded-lg">
          <h4 className="font-bold ">Inhouse Software</h4>
          <ul className="list-disc list-inside text-blue mt-2">
            <li>Common business partner management module</li>
            <li>Common cashier module</li>
            <li>Gold loan module</li>
            <li>
              Credit origination module including iOS oracle profitability
              management modules and Android mobile apps
            </li>
            <li>Savings module</li>
            <li>Fixed deposit module</li>
            <li>Money exchange module</li>
            <li>MIS reporting services</li>
            <li>Eclipse credit mobile app</li>
            <li>CIM wallet app</li>
            <li>3CX call centre application</li>
            <li>PAM solution</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className=" text-blue bg-white p-6 rounded-lg">
          <div className="bg-slate-400 p-4 rounded-lg mb-4">
            <h4 className="font-bold text-red-600">
              Bureau Veritas Certification
            </h4>
            <img
              src="/images/annual-report/bureau-certificate.png"
              alt="Certification"
              className="w-full h-auto rounded-lg mt-2"
            />
          </div>

          <h3 className="text-blue font-bold">Ensuring Customer Privacy</h3>
          <p className="text-blue mt-2">
            We maintain the highest standards of data security and privacy and
            we prioritise the protection of customer data in accordance with
            regulatory requirements.
          </p>
          <p className="text-blue mt-2">
            A comprehensive Data Protection Policy has been developed to
            strengthen our data protection measures. Additionally, we are
            evaluating the implementation of a data leakage prevention solution
            to enhance security measures.
          </p>

          <h3 className="text-blue font-bold mt-4">IT Training</h3>
          <p className="text-blue mt-2">
            The following IT-related training programmes were conducted in FY
            2023/24:
          </p>
          <div className="overflow-x-auto mt-2">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b-2 border-blue px-4 py-2 text-left text-blue font-bold">
                    Programme
                  </th>
                  <th className="border-b-2 border-blue px-4 py-2 text-left text-blue font-bold">
                    Focus
                  </th>
                  <th className="border-b-2 border-blue px-4 py-2 text-left text-blue font-bold">
                    Medium
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-blue px-4 py-2">
                    Targeted awareness and training on avoiding phishing
                  </td>
                  <td className="border-b border-blue px-4 py-2">
                    Avoiding phishing
                  </td>
                  <td className="border-b border-blue px-4 py-2">Online</td>
                </tr>
                <tr>
                  <td className="border-b border-blue px-4 py-2">
                    Orientation programme for newly recruited employees
                  </td>
                  <td className="border-b border-blue px-4 py-2">
                    IT operations and systems
                  </td>
                  <td className="border-b border-blue px-4 py-2">Physical</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    User awareness for customers and the general public
                  </td>
                  <td className="px-4 py-2">CIM app</td>
                  <td className="px-4 py-2">Online</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className=" text-blue bg-white p-6 rounded-lg">
          <h3 className="text-blue font-bold">Information Security</h3>
          <p className="text-blue mt-2">
            We continued to safeguard our information and data assets
            proactively. The following initiatives were implemented during the
            FY 2023/24:
          </p>
          <ul className="list-disc list-inside text-blue mt-2">
            <li>
              Streamlined routine internal due diligence processes to ensure
              ongoing compliance and operational efficiency.
            </li>
            <li>
              Successfully transitioned from ISO 27001:2013 to ISO 27001:2022
              certification, marking the fourth certification cycle. The new
              standard has brought down the 140 clauses to 93, and integrated 11
              new clauses. A pre-certification audit was conducted to validate
              coverage of these clauses, affirming our seamless upgrade.
            </li>
            <li>
              Conducted a comprehensive audit of the CIM App based on the CBSL
              guidelines for payment-related applications, by engaging a
              third-party vendor for compliance verification.
            </li>
            <li>
              The technology risk management framework was overhauled to align
              with the CBSL standards. Our adherence to the comprehensive CBSL
              Technology Risk Management and Resilience Framework No.1 of 2022.
              Tech risk and resilience framework stands at over 70%, with
              ongoing efforts to fulfill the remaining requirements outlined in
              our compliance roadmap.
            </li>
          </ul>

          <h3 className="text-blue-500 font-bold mt-4">
            Monitoring Information Security Risk
          </h3>
          <p className="text-blue mt-2">
            The Risk Management Department has a dedicated function responsible
            for overseeing security risks, as mandated by CBSL requirements.
            This includes conducting initial risk assessments on new
            developments to ensure compliance and mitigate potential risks.
          </p>
          <p className="text-blue mt-2">
            In addition, we have a separate product development team tasked with
            thoroughly discussing and addressing all compliance and risk aspects
            during the development phase. Our streamlined process ensures that
            all necessary measures are taken to safeguard against risks and
            maintain regulatory compliance.
          </p>
        </div>
      </div>

      <div className=" text-blue bg-white p-6 rounded-lg">
        <h3 className="text-blue-600 font-bold">IS Audit</h3>
        <p className="text-blue mt-2">
          Our information systems audit function conducts specialised audits to
          safeguard the integrity of our internal systems. These encompass
          reviews of IT policies, procedures, and guidelines, vulnerability
          management audits for web environments and mobile apps, software
          development lifecycle audits, and evaluations of database and server
          administration, network security, cloud governance, disaster recovery,
          access management, endpoint security, software compliance, phishing
          simulations, and robotic process automation.
        </p>
        <p className="text-blue mt-2">
          In addition to these assessments, our program ensures adherence to ISO
          27001:2022 standards, covering IT supplier security, operations
          processes, risk assessments, asset and capacity management, and
          incident management.
        </p>
        <p className="text-blue mt-2">
          All independent audits are structured based on industry best practices
          and international standards such as ISO 27001, NIST Cybersecurity
          Framework, COBIT, ITIL, and CIS to drive continuous improvements to
          our internal technology processes.
        </p>
        <p className="text-blue mt-2">
          Furthermore, we integrate control requirements from regulatory
          mandates such as the Direction Technology Risk Management & Resilience
          - Direction No 01 of 2022 and the Sri Lanka Personal Data Protection
          Act into our validation processes.
        </p>

        <h3 className="text-blue-600 font-bold mt-4">IT Governance</h3>
        <p className="text-blue mt-2">
          We have strengthened our digital governance structure and policy
          framework which articulates our priorities, facilitates resource
          allocation and supports the overall internal control framework of the
          Company.
        </p>
        <p>
          The Board Digital Information Security Committee and Board Audit
          Committee provide oversight in the implementation of the digital
          strategy of the Company. While the IT Security and Steering Committee
          executes the IT framework. During the year under review, we enhanced
          our governance structure by implementing a multi-tiered approach.
        </p>

        <p>
          Moreover, the Board reviewed the information security policy and
          approximately 40 Standard Operating Procedures (SOPs) were approved
          during the year.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white p-4 rounded-lg ">
            <h4 className="font-bold text-yellow-600">
              Multi-Tier IT Governance Approach
            </h4>
            <p className="text-blue mt-2">
              <strong>L1 Level</strong>
              <br />
              Focuses on regulatory compliance daily, ensuring adherence to all
              necessary standards and regulations.
            </p>
            <p className="text-blue mt-2">
              <strong>L2 Level</strong>
              <br />
              Integrated within the Risk Department, specifically addressing
              technology risk and resilience, ensuring robustness in our
              technological infrastructure.
            </p>
            <p className="text-blue mt-2">
              <strong>L3 Level</strong>
              <br />
              Conducts independent Information Systems (IS) audits of both L1
              and L2, ensuring comprehensive evaluation and alignment with
              established standards and best practices.
            </p>
          </div>

          <div className="bg-white text-blue p-4 rounded-lg">
            <h3 className=" font-bold">
              Knowledge-Based Systems and Processes
            </h3>
            <h4 className="font-bold  mt-4">Process Re-engineering</h4>
            <p className=" mt-2">
              Process re-engineering plays a major role in our efforts to
              improve internal efficiencies that would benefit the Company’s
              bottom line and enhance service delivery to customers. As such
              existing processes and technology are regularly reviewed to
              determine scope for improvement, while changes made are strictly
              monitored to determine if the desired results are being achieved.
            </p>

            <h4 className="font-bold  mt-4">Data Analytics</h4>
            <p className=" mt-2">
              We have formed a data science team of 15 experts, focusing on
              creating impactful dashboards and advanced data modelling projects
              to improve decision-making.
            </p>
            <ul className="list-disc list-inside  mt-2">
              <li>
                Revamped the gold loan pawning model to provide customised
                benefits to loyal customers through a scoring system
              </li>
              <li>
                Developed a scoring framework, by integrating the CRIB score and
                the internal score of customers
              </li>
              <li>
                Developed a dashboard to track profitability at branch and
                product levels
              </li>
              <li>
                In the process of probability model to predict early settlement
                or default likelihood, with forecasting early termination in
                leasing facilities
              </li>
              <li>
                Streamlined MIS reporting and implemented advanced data
                visualisation tools to facilitate senior management
                decision-making
              </li>
              <li>
                Developed GOAML, the Anti-Money Laundering system aligned to the
                recommendations of the Central Bank of Sri Lanka (CBSL)
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white text-blue p-4 rounded-lg">
          <h3 className=" font-bold">Digital Infrastructure</h3>
          <p className=" mt-2">
            The following infrastructure developments were done during the FY
            2023/24 to enhance customer experience by providing efficient,
            user-friendly, and accessible financial services and ensuring a
            seamless and convenient transaction experience. Furthermore, this
            has greatly improved employee productivity by reducing their manual
            workload.
          </p>
          <ul className="list-disc list-inside  mt-2">
            <li>Digitisation of the core banking process</li>
            <li>
              Digitised the entire lifecycle of Fixed Deposits (FD) while
              offering comprehensive services from initiation to maturity
            </li>
            <li>
              Conversion of conventional FDs to digital platforms - conventional
              deposits that previously required physical placement at a branch
              were digitised enabling customers to operate these FDs via our
              digital platform. This has enabled customers to access and manage
              their investments conveniently. Moreover, the manual workload for
              our staff has been reduced significantly by digitising
              approximately 50% of FDs
            </li>
          </ul>

          <h4 className="font-bold text-blue-600 mt-4">
            Our Revamp Efforts Include:
          </h4>
          <ul className="list-disc list-inside  mt-2">
            <li>
              Separate versions for Android and iOS: To streamline development
              and prevent duplication, we adopted Flutter to create separate
              versions of our application for Android and iOS platforms
            </li>
            <li>
              Improved application performance for faster response times and
              smoother user experience
            </li>
            <li>
              Revamped User Interface (UI) and User Experience (UE) to make
              navigation intuitive and interactions seamless
            </li>
            <li>
              Upgraded the storage servers and implemented a new router and WiFi
              infrastructure to enhance connectivity and efficiency across the
              network
            </li>
            <li>
              Improved server capacity by upgrading memory, CPU, and RAM to
              facilitate the smooth operation of our applications
            </li>
            <li>
              Implemented Huawei storage solution for anticipated data growth
              over 5 years, enabling data retrieval, increasing capacity,
              enabling remote work, and cost-effectively eliminating expensive
              cables, promoting environmental sustainability
            </li>
            <li>
              Transitioned from traditional firewalls to a cloud-based Managed
              Security Service Provider (MSSP) model enabling cost efficiencies,
              and providing branches with improved security and higher bandwidth
            </li>
            <li>
              Implemented Privileged Access Management (PAM) to protect admins
              and senior resources from cyber attacks, providing additional
              security measures. This initiative is part of CBSL security
              control
            </li>
            <li>
              Acquired the source code of the LB CIM app, granting us complete
              control over the product
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1  gap-6">
        <div className="bg-white rounded-lg p-6 text-blue ">
          <p className="py-2">
            Transitioned from traditional firewalls to a cloud-based Managed
            Security Service Provider (MSSP) model enabling cost efficiencies,
            and providing branches with improved security and higher bandwidth
          </p>
          <h3 className=" font-bold">
            Digital Initiatives to Enhance Employee Value Proposition
          </h3>
          <ul className="list-disc list-inside  mt-2">
            <li>
              Ongoing enhancements to the core banking and in-house systems
            </li>
            <li>Revamped the intranet platform for improved usability</li>
            <li>
              Introduced an app allowing employees to make calls from their
              desktops/laptops
            </li>
            <li>Implemented the WhatsApp channel for incident reporting</li>
            <li>Conducted cyber security awareness campaigns</li>
            <li>
              Adopted lean management practices to eliminate non-value-added
              activities and enhance performance
            </li>
            <li>
              Established an Operations Management Office to oversee all
              IT-related developments
            </li>
            <li>
              Implemented infrastructure IT library to meet internally set
              service level agreements (SLAs)
            </li>
          </ul>
        </div>

        <div className="bg-[#ffedf3] p-6 text-blue rounded-lg">
          <h3 className=" font-bold">Future Crafting</h3>
          <h4 className="font-bold  mt-4">
            Investing in our brand of improved technologies
          </h4>
          <p className=" mt-2">
            Our brand identity is an important component of our intellectual
            property and a driving force behind our corporate plans and
            decisions. Our brand and ethos are being used to get our staff and
            business practices into line with our brand pledge. Our integrated
            stakeholder engagement approach, which is part of our broader
            reputation management framework, is a key focus field. Our customer
            engagement initiative, which we call our customer relationship
            management (CRM) approach, is a core differentiator of our brand
            promise.
          </p>
          <p className=" mt-2">
            Our integrated stakeholder engagement approach, which is part of our
            broader reputation management framework, is a key focus field. The
            key differentiator of our brand promise is our approach for customer
            relationships management (CRM), which we call our customer
            experiences programme. Our interaction was improved during past
            years and analysis into other digital tools for stakeholder
            interaction ensures that we are up-to-date with state of the art
            technologies. Our brand protection remains a core priority and we
            are committed to strong brand leadership values, including our brand
            guidelines on the use of our brand, which we also cover with
            external engagements.
          </p>

          <h4 className="font-bold text-pink-500 mt-4">
            Identify Business Excellence Opportunities
          </h4>
          <p className=" mt-2">
            We are still looking to improve our business procedures and
            functions more effectively in order to satisfy the demands of our
            customers. We use business processes and technology for business
            analysis to define key performance processes that enable us to
            concentrate on core expertise. In addition, LBF has developed a
            center of innovation and technology to supervise management
            activities of business processes.
          </p>

          <h4 className="font-bold text-pink-500 mt-4">
            Leveraging Technology in Our Spaces
          </h4>
          <p className=" mt-2">
            We are committed to creativity to maximise our market worth and our
            stakeholders and have thus taken the unorthodox path to our
            infrastructure. This ensures that we have the freedom to take the
            decisions to mould our experience as desired and still keep control
            of the produced results. We also wanted to follow new world class
            digital platforms.
          </p>
          <p className=" mt-2">
            We partner with media agencies to capitalise our room and our own
            screens to achieve ‘space’ or slots on digital advertisement space.
            We thus build on established ties and industrial know-how of our
            stakeholders while ensuring that the bulk of revenue is kept within
            our company.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="flex flex-col items-center md:col-span-2">
          <img
            src="/images/annual-report/group-1.png"
            alt="Group Photo"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center md:col-span-1">
          <img
            src="/images/annual-report/group-2.png"
            alt="Event Photo"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
