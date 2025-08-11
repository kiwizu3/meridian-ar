interface StakeholderGroup {
  name: string;
  name2: string;
  icon: string;
  relevantCapitals: string[];
  relevantSDGs: number[];
  engagementMechanisms: { mechanism: string; frequency: string }[];
  concerns: string[];
  strategicResponses: string[];
  futureFocus: string[];
}
interface StakeholderGoal {
  stakeholder: string;
  goal: string;
  relationshipLevel: number;
  engagementLevel: string;
}
const stakeholderGroups: StakeholderGroup[] = [
  {
    name: 'CUSTOMERS',
    name2: 'Customer concerns',
    icon: '👥',
    relevantCapitals: ['SC', 'MC'],
    relevantSDGs: [8, 9, 11, 17],
    engagementMechanisms: [
      { mechanism: 'Interactions with branch teams', frequency: 'Continuous' },
      {
        mechanism: 'Mass/digital media advertising campaigns',
        frequency: 'Continuous',
      },
      { mechanism: 'Emails', frequency: 'As required' },
      { mechanism: 'Corporate website', frequency: 'Continuous' },
      { mechanism: 'Propaganda vehicle', frequency: 'Continuous' },
      { mechanism: 'Product and service brochures', frequency: 'As required' },
      { mechanism: 'Product launches', frequency: 'As required' },
      { mechanism: 'Market surveys', frequency: 'Annually' },
      { mechanism: 'Call centre', frequency: 'Continuous' },
      { mechanism: 'Customer visits', frequency: 'As required' },
      { mechanism: 'Social media platforms', frequency: 'Continuous' },
    ],
    concerns: [
      'Efficient service',
      'Access to finance',
      'Product and service innovation',
      'Data privacy',
      'Customer security',
      'Fair selling practices',
      'Financial literacy',
      'Grievances handling',
    ],
    strategicResponses: [
      'Strengthening the branch proposition to facilitate better access to financial services in both local and regional markets',
      'Introducing relevant new products and services to meet customer needs',
      'Investing in expanding digital ecosystems to facilitate access to digital financial solutions',
      'Investing in information security',
    ],
    futureFocus: [
      'To provide sound financial advice and financial consumer education',
      'To access 24/7 world-class innovative solutions and services',
      'To enjoy convenient access to banking that is cost-effective, user-friendly and flexible',
      'To protect their investment and information through secure information technology (IT) systems and infrastructure',
      'To provide competitive financial solutions',
    ],
  },
  {
    name: 'SHAREHOLDERS',
    name2: 'Shareholder concerns',
    icon: '⏱️',
    relevantCapitals: ['SC', 'FC'],
    relevantSDGs: [8, 9, 12],
    engagementMechanisms: [
      {
        mechanism: 'Annual reports and AGMs/EGMs',
        frequency: 'Annually/ As required',
      },
      { mechanism: 'Financial results', frequency: 'Annually/ Quarterly' },
      { mechanism: 'CSE announcements', frequency: 'As required' },
      { mechanism: 'General correspondence', frequency: 'As required' },
      { mechanism: 'Press releases', frequency: 'As required' },
      { mechanism: 'Corporate website', frequency: 'Continuous' },
      { mechanism: 'Feedback surveys', frequency: 'As required' },
    ],
    concerns: [
      'Financial performance and dividends',
      'Improved market presence',
      'Investor confidence',
      'Adaptability to dynamic economic conditions',
    ],
    strategicResponses: [
      'Ensuring sound risk management process',
      'Ensuring robust governance and internal control framework',
      'Accelerating market development activities',
      'Offering incremental growth in shareholder returns',
      'Ensuring strong capital and liquidity levels',
    ],
    futureFocus: [
      'To provide current and future shareholders with relevant and timely information',
      'To maintain strong relationships, keep abreast of market developments, and inform our shareholders of ongoing developments regarding our strategy execution',
      'To ensure good governance and trust-based relationships',
      'To become a compelling listing proposition',
    ],
  },
  {
    name: 'EMPLOYEES',
    name2: 'Employee concerns',
    icon: '👥',
    relevantCapitals: ['SC', 'MC', 'HC'],
    relevantSDGs: [5, 10, 16],
    engagementMechanisms: [
      { mechanism: 'Staff meetings', frequency: 'As required' },
      { mechanism: 'Performance appraisal', frequency: 'Annually' },
      { mechanism: 'Social media platforms', frequency: 'Continuous' },
      { mechanism: 'E-publications', frequency: 'Monthly' },
      { mechanism: 'Notifications', frequency: 'As required' },
      { mechanism: 'Emails', frequency: 'As required' },
      {
        mechanism: 'Training programmes and workshops',
        frequency: 'As required',
      },
      { mechanism: 'Post-training feedback', frequency: 'As required' },
      { mechanism: 'One-on-one engagement', frequency: 'Continuous' },
      { mechanism: 'Focus group sessions', frequency: 'As required' },
    ],
    concerns: [
      'Comprehensive benefit package',
      'Reward and recognition',
      'Equality and diversity',
      'Career development opportunities',
      'Work-life balance',
    ],
    strategicResponses: [
      'Establishing "Pinnacle Club" to recognise high performers',
      'Engaging in management development programmes for identified employees with potential',
      'Implementing extensive employee engagement activities',
      'Facilitating equality through HR policies and procedures',
      'Providing performance-based rewards and recognition',
      'Providing a comprehensive wellness programme to nurture a healthy work-life balance',
    ],
    futureFocus: [
      "To ensure we proactively address employees' concerns, expectations and opportunities",
      "To have strong relationships that will contribute towards LBF being a 'Top Employer' within our sector",
      'To ensure clear, regular and transparent communications within the staff',
      'To ensure that all matters impacting the primary conditions of employment are addressed through collective bargaining',
      'To promote fairness and equality',
    ],
  },
  {
    name: 'COMMUNITY',
    name2: 'Community concerns',
    icon: '🌍',
    relevantCapitals: ['SC', 'HC', 'NC'],
    relevantSDGs: [1, 2, 4, 6, 13, 15],
    engagementMechanisms: [
      { mechanism: 'Individual engagements', frequency: 'As required' },
      { mechanism: 'Press publication', frequency: 'As required' },
      { mechanism: 'Corporate website', frequency: 'Continuous' },
      { mechanism: 'Social media', frequency: 'Continuous' },
      { mechanism: 'Public events', frequency: 'As required' },
    ],
    concerns: [
      'Ethical business conduct',
      'Responsible corporate citizen',
      'Support for socioeconomic growth',
    ],
    strategicResponses: [
      'Donating IT infrastructure to a government hospital',
      'Continuing tree planting projects',
      'Skill development programmes with selected universities',
      'Empowering women entrepreneurs',
    ],
    futureFocus: [
      'To engage community representatives to ensure that our products and services remain relevant and needed',
      'To provide accessible financial education to our communities',
      'To be a sustainable organisation that proactively drives environmental protection and socioeconomic socio-economic development',
    ],
  },
  {
    name: 'REGULATORS',
    name2: 'Regulator concerns',
    icon: '⚖️',
    relevantCapitals: ['SC', 'FC'],
    relevantSDGs: [8, 9, 11, 16],
    engagementMechanisms: [
      { mechanism: 'Meetings', frequency: 'As required' },
      { mechanism: 'Directives and circulars', frequency: 'As required' },
      { mechanism: 'Telephone discussions', frequency: 'As required' },
      {
        mechanism: 'On-site and off-site examinations',
        frequency: 'As required',
      },
      {
        mechanism: 'Periodic or thematic assessments',
        frequency: 'As required',
      },
      { mechanism: 'Participation in forums', frequency: 'As required' },
    ],
    concerns: [
      'Strong governance and compliance',
      'Business transparency',
      'Ethical business operations',
      'Financial system stability',
    ],
    strategicResponses: [
      'Ensuring timely submission of regulatory reports and returns',
      'Ensuring timely tax payments',
      'Ensuring appropriate due diligence to maintain 100% compliance',
    ],
    futureFocus: [
      'Ensure continuous compliance with new regulations and directions',
      'Continuous support to regulators in developing macro economic policies for financial sector stability',
      'Invest in training and education programmes to ensure employees understand and comply with regulatory requirements',
    ],
  },
  {
    name: 'BUSINESS PARTNERS',
    name2: 'Business partners concerns',
    icon: '🤝',
    relevantCapitals: ['SC', 'MC'],
    relevantSDGs: [9, 17],
    engagementMechanisms: [
      { mechanism: 'Field visits', frequency: 'As required' },
      { mechanism: 'Service agreements', frequency: 'Annually' },
      { mechanism: 'Supplier appraisal', frequency: 'As required' },
      { mechanism: 'Meetings', frequency: 'As required' },
    ],
    concerns: [
      'Timely payments',
      'Fair dealings',
      'Transparency',
      'Competitive pricing',
      'Maintaining healthy relationships',
    ],
    strategicResponses: [
      "Communicating the Company's policies and procedures",
      'Continuous engagement',
    ],
    futureFocus: [
      'To negotiate mutually beneficial commercial agreements',
      'To develop suppliers that will serve us and the financial sector over the long-term',
      'To develop new businesses that meaningfully contribute to the economy',
      'To promote local procurement',
    ],
  },
];
const stages = [
  {
    name: 'Identify and Classify Stakeholders',
    color: '#6B7280',
    content:
      'Identify, segment and prioritise stakeholders into engagement categories',
  },
  {
    name: 'Plan',
    color: '#D97706',
    content:
      'Identify objectives and issues to be addressed and the manner in which it will be done',
  },
  {
    name: 'Understand',
    color: '#0E7490',
    content:
      "Understand stakeholder wants and needs and how this correlates with our business' wants and needs",
  },
  {
    name: 'Internal Preparation and Alignment',
    color: '#C084FC',
    content:
      'Design the interaction and engagement plan, obtain internal alignment and the mandate',
  },
  {
    name: 'Build Trust',
    color: '#92400E',
    content:
      'Identify current and desired trust levels, then build the relationship in a structured manner',
  },
  {
    name: 'Stakeholder Engagement',
    color: '#F472B6',
    content:
      'Engage with each stakeholder according to the business objectives',
  },
  {
    name: 'Respond and Implement',
    color: '#22C55E',
    content: 'Implement the agreed plan and managing associated dynamics',
  },
  {
    name: 'Monitor, Evaluate and Document',
    color: '#60A5FA',
    content:
      'Monitor, evaluate, document and report in line with set objectives',
  },
];

const stakeholders = [
  { name: 'Customers', icon: '👥' },
  { name: 'Shareholders', icon: '⏱️' },
  { name: 'Employees', icon: '👫' },
  { name: 'Society/ Communities', icon: '🌍' },
  { name: 'Regulators', icon: '⚖️' },
  { name: 'Business Partners', icon: '🤝' },
];

interface StakeholderGoal {
  stakeholder: string;
  goal: string;
  relationshipLevel: number;
  engagementLevel: string;
}

const stakeholderGoals: StakeholderGoal[] = [
  {
    stakeholder: 'Shareholders',
    goal: 'Sustained growth and wealth maximisation',
    relationshipLevel: 3,
    engagementLevel: 'Consult',
  },
  {
    stakeholder: 'Customers',
    goal: 'Customer at the center of the business',
    relationshipLevel: 5,
    engagementLevel: 'Involve',
  },
  {
    stakeholder: 'Employees',
    goal: 'Career progress and best place to work',
    relationshipLevel: 5,
    engagementLevel: 'Collaborate',
  },
  {
    stakeholder: 'Communities',
    goal: 'Empowering communities through CSR',
    relationshipLevel: 2,
    engagementLevel: 'Collaborate',
  },
  {
    stakeholder: 'Regulators',
    goal: 'Full statutory compliance',
    relationshipLevel: 4,
    engagementLevel: 'Collaborate',
  },
  {
    stakeholder: 'Business partners',
    goal: 'Sustainable business practices',
    relationshipLevel: 3,
    engagementLevel: 'Collaborate',
  },
];

export default function IntegratedStakeholderEngagement() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col gap-8">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">
              We continuously strive to enrich the lives of our stakeholders
            </h2>
            <p className="mb-4">
              Our long-term strategy is geared to empower individuals towards
              financial freedom. We recognise that fulfilling this commitment
              necessitates an in-depth understanding of our stakeholders and
              their aspirations. Hence, meaningful engagement with our diverse
              stakeholder groups is paramount to our success.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4 text-[#F0B165]">
              STAKEHOLDER ANALYSIS AND ENGAGEMENT PROCESS
            </h2>
            <p className="mb-4">
              We adopt a eight-point stakeholder engagement model to engage
              proactively and interactively with our stakeholders. Acknowledging
              the dynamic financial landscape and evolving social trends, we
              emphasise the importance of regularly assessing and adjusting
              engagement strategies to address stakeholders&#39; changing needs
              and expectations.
            </p>
            <p className="mb-4">
              This approach enables alignment with stakeholders’ concerns amid a
              continuously evolving operating context.
            </p>
            <p className="mb-4">
              By conducting a thorough review of our engagement mechanisms, we
              identified areas for improvement. This enabled us to refine
              integrating stakeholder engagement into our value creation
              process.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-6 text-center">
          Eight Stage Stakeholder Engagement Process and Creating Shared Value
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {stakeholders.map((stakeholder, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white bg-opacity-10 p-4 rounded-lg"
            >
              <span className="text-3xl mb-2">{stakeholder.icon}</span>
              <span className="text-center">{stakeholder.name}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="overflow-hidden p-4 rounded-lg"
              style={{ backgroundColor: stage.color }}
            >
              <div className="bg-opacity-20">
                <h3 className="text-lg font-semibold">{`Stage ${index + 1}: ${stage.name}`}</h3>
              </div>
              <div className="py-4">
                <p>{stage.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col md:flex-row p-6 bg-teal-500 rounded-lg">
          <div>
            <p className="text-lg mb-2">
              Hey there! Interested in checking out our Value Creation
              Scorecard?
            </p>
            <p className="text-lg mb-4">Just follow the link to dive in!</p>
          </div>
          <img
            src="/images/annual-report/stakeholedrQr.png"
            alt="QR Code placeholder"
            className="mx-auto"
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4 text-[#F0B165]">
          STAKEHOLDER MAPPING
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stakeholder Influence/Interest Grid */}
          <div className="rounded-lg col-span-2">
            <img
              src="/images/annual-report/stackholderMapping.png"
              alt="stakeholder mapping"
              className="w-full rounded-lg"
            />
          </div>
          {/* Stakeholder Mapping Description */}
          <div className="bg-[#fcf7ef] text-black p-6 rounded-lg ">
            <p>
              It is important to strike a balance between the expectations of
              key stakeholders for the long-term sustainability of our business.
              The effectiveness of our business model is closely tied to the
              contributions made by these stakeholders. The table below
              illustrates our engagement mechanisms to manage our relationships
              with multiple stakeholders.
            </p>
          </div>
        </div>
      </div>

      {/* Value Creation and Distribution Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-[#F0B165]">
          VALUE CREATION AND DISTRIBUTION
        </h2>
        <p className="mb-8">
          Stakeholder engagement is a core component of our social and financial
          value creation as both an input and an outcome. Our
          stakeholder-focused, value-added statement demonstrates how financial
          value is created and distributed to our stakeholders.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Income Breakdown */}
          <div className="grid grid-cols-1 md:col-span-3 gap-4">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 ">
              <div className="bg-[#fff5eb] text-black p-4 rounded-lg text-center">
                <p>DISTRIBUTABLE INTEREST INCOME</p>
                <p className="font-bold">Rs. 45.86 Bn</p>
                <p>(2022/23 Rs. 39.64 Bn)</p>
              </div>
              <div className="bg-[#fff5eb] text-black p-4 rounded-lg text-center">
                <p>DISTRIBUTABLE FEE AND OTHER INCOME</p>
                <p className="font-bold">Rs. 3.36 Bn</p>
                <p>(2022/23 Rs. 3.11 Bn)</p>
              </div>
              <div className="bg-[#fff5eb] text-black p-4 rounded-lg text-center">
                <p>DISTRIBUTABLE OPERATING COST</p>
                <p className="font-bold">Rs. 4.57 Bn</p>
                <p>(2022/23 Rs. 4.08 Bn)</p>
              </div>
            </div>
            <div className="bg-[#fff5eb] text-black p-4 rounded-lg text-center">
              <p>NET VALUE CREATED</p>
              <p className="font-bold">Rs. 44.65 Bn</p>
              <p>(2022/23 Rs. 38.67 Bn)</p>
            </div>
          </div>
        </div>

        {/* Distribution Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-[#dcddee] text-black p-6 rounded-lg border border-black">
            <h3 className="font-bold mb-2">Funders</h3>
            <p>
              We distributed 47.35% (2022/23: 52.79%) of the value created to
              depositors and lenders through the payment of interest on deposits
              and debt.
            </p>
            <p className="font-bold mt-2">Rs. 21.14 Bn</p>
          </div>
          <div className="bg-[#dcddee] text-black p-6 rounded-lg border border-black">
            <h3 className="font-bold mb-2">Employees</h3>
            <p>
              We distributed 9.75% (2022/23: 9.14%) of the value created to
              employees through remuneration and benefits.
            </p>
            <p className="font-bold mt-2">Rs. 4.35 Bn</p>
          </div>
          <div className="bg-[#dcddee] text-black p-6 rounded-lg border border-black">
            <h3 className="font-bold mb-2">Capital providers</h3>
            <p>
              We distributed 7.13% (2022/23: 8.84%) of the value created to
              investors through the payment of dividends.
            </p>
            <p className="font-bold mt-2">Rs. 3.18 Bn</p>
          </div>
          <div className="bg-[#dcddee] text-black p-6 rounded-lg border border-black">
            <h3 className="font-bold mb-2">Value retained</h3>
            <p>
              We retained 14.48% (2022/23: 5.27%) of the value created to
              liquidity support and allocate capital expenditure.
            </p>
            <p className="font-bold mt-2">Rs. 6.46 Bn</p>
          </div>
          <div className="bg-[#dcddee] text-black p-6 rounded-lg border border-black">
            <h3 className="font-bold mb-2">Government</h3>
            <p>
              We distributed 21.24% (2022/23: 23.90%) of the value created to
              government through the payment of taxes.
            </p>
            <p className="font-bold mt-2">Rs. 9.48 Bn</p>
          </div>
          <div className="bg-[#dcddee] text-black p-6 rounded-lg border border-black">
            <h3 className="font-bold mb-2">Community</h3>
            <p>
              We distributed 0.05% (2022/23: 0.06%) of the value created to
              community through CSR projects.
            </p>
            <p className="font-bold mt-2">Rs. 0.02 Bn</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4 text-[#F0B165]">
          MATERIAL THEMES AND TOPICS
        </h2>

        {stakeholderGroups.map((group, index) => (
          <div key={index} className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{group.name}</h3>
              <p>Relevant Capitals:  {group.relevantCapitals.join(' ')}</p>
              <p>Relevant SDGs:  {group.relevantSDGs.join(' ')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg md:col-span-2 text-black">
                <h4 className="font-semibold mb-2">Engagement Mechanism</h4>
                {/* <div className="grid grid-cols-2 gap-2">
                  <div>
                    <h5 className="font-semibold mb-1">Mechanism</h5>
                    <ul className="list-disc list-inside">
                      {group.engagementMechanisms.map((item, i) => (
                        <li key={i}>{item.mechanism}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Frequency</h5>
                    <ul className="list-none">
                      {group.engagementMechanisms.map((item, i) => (
                        <li key={i}>{item.frequency}</li>
                      ))}
                    </ul>
                  </div>
                </div> */}
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="text-left">
                      <th className="font-semibold mb-1">Mechanism</th>
                      <th className="font-semibold mb-1">Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.engagementMechanisms.map((item, i) => (
                      <tr key={i}>
                        <td>
                          <li>{item.mechanism}</li>
                        </td>
                        <td>{item.frequency}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-[#b4e6f3] p-4 rounded-lg text-black">
                <h4 className="font-semibold mb-2">{group.name2}</h4>
                <ul className="list-disc list-inside">
                  {group.concerns.map((concern, i) => (
                    <li key={i}>{concern}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#b7dfbb] p-4 rounded-lg text-black">
                <h4 className="font-semibold mb-2">
                  Our strategic response/value proposition
                </h4>
                <ul className="list-disc list-inside">
                  {group.strategicResponses.map((response, i) => (
                    <li key={i}>{response}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg text-black md:col-span-2">
                <h4 className="font-semibold mb-2">Future focus</h4>
                <ul className="list-disc list-inside">
                  {group.futureFocus.map((focus, i) => (
                    <li key={i}>{focus}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h1 className="mb-4">
          Our stakeholder goals drive us forward, articulating the value we seek
          to deliver for each of our key stakeholders, and therefore serve to
          inform our strategy.
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#ff9054] text-white">
                <th className="p-2 text-left">Key stakeholders</th>
                <th className="p-2 text-left">Goals</th>
                <th className="p-2 text-center">Level of relationship</th>
                <th className="p-2 text-left">Level of engagement</th>
              </tr>
            </thead>
            <tbody>
              {stakeholderGoals.map((item, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? 'bg-blue-900 bg-opacity-50'
                      : 'bg-blue-800 bg-opacity-50'
                  }
                >
                  <td className="p-2 border-t border-gray-700">
                    {item.stakeholder}
                  </td>
                  <td className="p-2 border-t border-gray-700">{item.goal}</td>
                  <td className="p-2 border-t border-gray-700">
                    <div className="flex justify-center">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div
                          key={level}
                          className={`w-4 h-4 mx-1 rounded-sm ${
                            level <= item.relationshipLevel
                              ? 'bg-[#ff9054]'
                              : 'bg-gray-400'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </td>
                  <td className="p-2 border-t border-gray-700">
                    {item.engagementLevel}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
