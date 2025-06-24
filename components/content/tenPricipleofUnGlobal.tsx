export default function TenPricipleOfUnGlobal() {
  const globalCompactData = [
    {
      principle: 'HUMAN RIGHTS',
      items: [
        {
          number: 1,
          description:
            'Businesses should support and respect the protection of internationally proclaimed human rights',
          page: 115,
        },
        {
          number: 2,
          description:
            'Businesses should make sure that they are not complicit in human rights abuses',
          page: 115,
        },
      ],
    },
    {
      principle: 'LABOUR',
      items: [
        {
          number: 3,
          description:
            'Businesses should uphold the freedom of association and the effective recognition of the right to collective bargaining. Declarations of the International Labor Organisation (ILO), including the employee right to the freedom of association and the right to engage in collective bargaining, LBF’s strong relationships with employees has meant there is no need for any collective agreement. During the year under review, the Company has not faced any type of industrial disputes.',
          page: '',
        },
        {
          number: 4,
          description:
            'Businesses should uphold the elimination of all forms of forced and compulsory labour',
          page: 'No such incidents were reported',
        },
        {
          number: 5,
          description:
            'Businesses should uphold the effective abolition of child labour',
          page: 'No such incidents were reported',
        },
        {
          number: 6,
          description:
            'Businesses should uphold the elimination of discrimination in respect of employment and occupation',
          page: 'No such incidents were reported',
        },
      ],
    },
    {
      principle: 'ENVIRONMENT',
      items: [
        {
          number: 7,
          description:
            'Businesses should support a precautionary approach to environmental challenges',
          page: '33, 60',
        },
        {
          number: 8,
          description:
            'Businesses should undertake initiatives to promote greater environmental responsibility',
          page: '33, 60',
        },
        {
          number: 9,
          description:
            'Businesses should encourage the development and diffusion of environmentally friendly technologies',
          page: '150',
        },
      ],
    },
    {
      principle: 'ANTI-CORRUPTION',
      items: [
        {
          number: 10,
          description:
            'Businesses should work against corruption in all its forms, including extortion and bribery',
          page: '355',
        },
      ],
    },
  ];

  const consumerFinanceData = [
    {
      topic: 'Customer Privacy',
      metrics: [
        {
          name: 'Number of account holders whose information is used for secondary purposes 1',
          category: 'Quantitative',
          unit: 'Number',
          code: 'FN-CF-220a.1',
          disclosure: 'No such incidents were reported',
        },
        {
          name: 'Total amount of monetary losses as a result of legal proceedings associated with customer privacy 2',
          category: 'Quantitative',
          unit: 'Presentation currency',
          code: 'FN-CF-220a.2',
          disclosure: 'No such incidents were reported',
        },
      ],
    },
    {
      topic: 'Data Security',
      metrics: [
        {
          name: 'Number of data breaches, percentage that are personal data breaches, (3) number of account holders affected 3',
          category: 'Quantitative',
          unit: 'Number, Percentage (%)',
          code: 'FN-CF-230a.1',
          disclosure: 'No such incidents were reported',
        },
        {
          name: 'Card-related fraud losses from (1) card-not-present fraud and (2) card-present and other fraud',
          category: 'Quantitative',
          unit: 'Presentation currency',
          code: 'FN-CF-230a.2',
          disclosure: 'No such incidents were reported',
        },
        {
          name: 'Description of approach to identifying and addressing data security risks',
          category: 'Discussion and Analysis',
          unit: 'n/a',
          code: 'FN-CF-230a.3',
          disclosure: 'Intellectual Capital Page 125',
        },
      ],
    },
    {
      topic: 'Selling Practices',
      metrics: [
        {
          name: 'Percentage of total remuneration for covered employees that is variable and linked to the amount of products and services sold 4',
          category: 'Quantitative',
          unit: 'Percentage (%)',
          code: 'FN-CF-270a.1',
          disclosure: '',
        },
        {
          description:
            'In the dynamic world of LBF, a vibrant performance-based culture fuels the drive for excellence. Here, marketing officers navigate their roles with clear, ambitious targets, both individually tailored and collectively embraced by their teams. Each goal is a beacon guiding their efforts, pointing the course towards sustained and holistic organizational success. This system transforms targets into motivational milestones, sparking a competitive yet collaborative spirit. However, the stakes are high—missing a goal means the incentive remains an unclaimed reward, a constant reminder of the relentless pursuit of success that defines LBF’s ethos.',
        },
        {
          name: 'Approval rate for (1) credit and (2) pre-paid products for applicants 5',
          category: 'Quantitative',
          unit: 'Percentage (%)',
          code: 'FN-CF-270a.2',
          disclosure: 'N/A',
        },
        {
          name: 'Average fees from add-on products, average APR of credit products, average age of credit products, average number of credit accounts, and (5) average annual fees for pre-paid products',
          category: 'Quantitative',
          unit: 'Presentation currency, Percentage (%), Months, Number',
          code: 'FN-CF-270a.3',
          disclosure: 'N/A',
        },
        {
          name: 'Number of customer complaints filed, percentage with monetary or non-monetary relief',
          category: 'Quantitative',
          unit: 'Number, Percentage (%)',
          code: 'FN-CF-270a.4',
          disclosure: 'No such incidents were reported',
        },
        {
          name: 'Total amount of monetary losses as a result of legal proceedings associated with selling and servicing of products 6',
          category: 'Quantitative',
          unit: 'Presentation currency',
          code: 'FN-CF-270a.5',
          disclosure: 'No such incidents were reported',
        },
      ],
    },
  ];
  return (
    <div className="bg-[#0A3D5F] text-white p-4 md:pl-0 md:pr-2 custom-scrollbar h-[650px] overflow-auto">
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white text-blue rounded-lg p-6">
          {/* <h1 className="text-3xl font-bold mb-8">
            UN Global Compact Principles and Consumer Finance Standards
          </h1> */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-600">
                  <th className="border p-2">Principle</th>
                  <th className="border p-2">Description</th>
                  <th className="border p-2">Page No</th>
                </tr>
              </thead>
              <tbody>
                {globalCompactData.map((section, index) => (
                  <>
                    <tr key={index}>
                      <td colSpan={3} className="border p-2 font-semibold">
                        {section.principle}
                      </td>
                    </tr>
                    {section.items.map((item, itemIndex) => (
                      <tr key={itemIndex} className="bg-blue-400">
                        <td className="border p-2">Principle {item.number}</td>
                        <td className="border p-2">{item.description}</td>
                        <td className="border p-2">{item.page}</td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white text-blue rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            SASB Standard - Consumer Finance
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2">Topic</th>
                  <th className="border p-2">Metric</th>
                  <th className="border p-2">Category</th>
                  <th className="border p-2">Unit of Measure</th>
                  <th className="border p-2">Code</th>
                  <th className="border p-2">Disclosure/Page Reference</th>
                </tr>
              </thead>
              <tbody>
                {consumerFinanceData.map((section, index) => (
                  <>
                    <tr key={index}>
                      <td colSpan={6} className="border p-2 font-semibold">
                        {section.topic}
                      </td>
                    </tr>
                    {section.metrics.map((metric, metricIndex) => (
                      <tr key={metricIndex}>
                        <td className="border p-2"></td>

                        {metric.description ? (
                          <td className="border p-2" colSpan={5}>
                            {metric.description}
                          </td>
                        ) : (
                          <>
                            <td className="border p-2">{metric.name}</td>
                            <td className="border p-2">{metric.category}</td>
                            <td className="border p-2">{metric.unit}</td>
                            <td className="border p-2">{metric.code}</td>
                            <td className="border p-2">{metric.disclosure}</td>
                          </>
                        )}
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
