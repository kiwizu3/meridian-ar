'use client';

import React from 'react';

export default function IntegratedReportingIndex() {
  type SectionItem = {
    id: string;
    description: string;
    location: string;
    explanation?: string;
    link?: string | null;
  };

  type Section = {
    title: string;
    items: SectionItem[];
  };

  const sections: Section[] = [
    {
      title: '1. Using the <IR> Framework',
      items: [
        {
          id: '1A',
          description:
            'An integrated report should be prepared in accordance with the <IR> Framework',
          location: '18',
        },
        {
          id: '1C',
          description: 'The primary purpose of an integrated report',
          location: '15',
        },
        {
          id: '1D',
          description: 'Quantitative and qualitative information',
          location: '17',
        },
        {
          id: '1G',
          description:
            'An integrated report should include a statement from those charged with governance',
          location: '20',
        },
      ],
    },
    {
      title: '2. Fundamental Concepts',
      items: [
        {
          id: '2A',
          description:
            'An integrated report aims to provide insight about external environment, resources and the relationships used and affected by the organisation and how the organisation interacts with the external environment and the capitals to create',
          location: '56, 124-221',
        },
        {
          id: '2B',
          description:
            'Value created, preserved or eroded by an organisation over time manifests',
          location: '128, 144, 152, 174, 186, 210',
        },
        {
          id: '2C',
          description: 'Categories and descriptions of the capitals',
          location: '124-221',
        },
        {
          id: '2D',
          description:
            'Business model, which draws on various capitals as inputs and, through its business activities, converts them to outputs',
          location: '54',
        },
      ],
    },
    {
      title: '3. Guiding Principles',
      items: [
        {
          id: '3A',
          description: 'Strategic focus and future orientation',
          location: '81-95, 96',
        },
        {
          id: '3B',
          description:
            'Connectivity of information - An integrated report should show a holistic picture',
          location: 'Maintained throughout the report',
        },
        {
          id: '3C',
          description: 'Stakeholder relationships',
          location: '62-73',
        },
        {
          id: '3D',
          description: 'Materiality',
          location: '74-80',
        },
        {
          id: '3E',
          description:
            "An integrated report includes sufficient context to understand organisation's strategy, governance, performance and prospects without being burden with less relevant information",
          location: '81-95, 246-281, 124-221',
        },
        {
          id: '3F',
          description: 'Reliability and completeness',
          location: '540',
        },
      ],
    },
    {
      title: '4. Content Elements',
      items: [
        {
          id: '4A',
          description: 'Organisational overview and external environment',
          location: '24-32, 56-61',
        },
        {
          id: '4B',
          description: 'Governance',
          location: '246-281',
        },
        {
          id: '4C',
          description: 'Business model',
          location: '54',
        },
        {
          id: '4D',
          description: 'Risks and opportunities',
          location: '311-345',
        },
        {
          id: '4E',
          description: 'Strategy and resource allocation',
          location: '81-95',
        },
        {
          id: '4F',
          description: 'Performance',
          location: '38-41, 484-485',
        },
        {
          id: '4G',
          description: 'Outlook',
          location: '46-48, 50-53, 96',
        },
        {
          id: '4H',
          description: 'Basis of preparation and presentation',
          location: '16-18, 74-80',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-cardGreen text-white p-8">
      <h1 className="text-3xl font-bold mb-6">
        INTEGRATED REPORTING - CONTENT INDEX
      </h1>
      <p className="mb-6">LB Finance PLC Integrated Annual Report 2024/25</p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-600">
              <th className="border border-white p-2">IR Reference</th>
              <th className="border border-white p-2">Description</th>
              <th className="border border-white p-2">Page</th>
            </tr>
          </thead>
          <tbody>
            {sections.map((section, index) => (
              <React.Fragment key={index}>
                <tr className="bg-blue-800">
                  <td colSpan={3} className="border border-white p-2 font-bold">
                    {section.title}
                  </td>
                </tr>
                {section.items.map((item, itemIndex) => (
                  <tr key={itemIndex} className="bg-blue-700">
                    <td className="border border-white p-2">{item.id}</td>
                    <td className="border border-white p-2">
                      {item.description}
                    </td>
                    <td className="border border-white p-2">{item.location}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
