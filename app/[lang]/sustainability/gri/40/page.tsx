export default function GRIReporting18() {
  const stakeholders = [
    { name: 'Customers', icon: '👥' },
    { name: 'Shareholders', icon: '⏱️' },
    { name: 'Employees', icon: '👫' },
    { name: 'Society/ Communities', icon: '🌍' },
    { name: 'Regulators', icon: '⚖️' },
    { name: 'Business Partners', icon: '🤝' },
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

  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
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
                proactively and interactively with our stakeholders.
                Acknowledging the dynamic financial landscape and evolving
                social trends, we emphasise the importance of regularly
                assessing and adjusting engagement strategies to address
                stakeholders&#39; changing needs and expectations.
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
      </div>
    </div>
  );
}
