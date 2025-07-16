'use client';

import React from 'react';

export default function SustainabilitySASB() {
  const tableData = [
    {
      topic: 'Customer Privacy',
      rows: [
        {
          metric:
            'Number of account holders whose information is used for secondary purposes 1',
          category: 'Quantitative',
          unitOfMeasure: 'Number',
          code: 'FN-CF-220a.1 ',
          disclosure: 'No such incidents were reported',
        },
        {
          metric:
            'Total amount of monetary losses as a result of legal proceedings associated with customer privacy 2',
          category: 'Quantitative',
          unitOfMeasure: 'Presentation currency',
          code: 'FN-CF-220a.2',
          disclosure: 'No such incidents were reported',
        },
      ],
    },
    {
      topic: 'Data Security',
      rows: [
        {
          metric:
            'Number of data breaches, percentage that are personal data breaches, (3) number of account holders affected 3',
          category: 'Quantitative',
          unitOfMeasure: 'Number, Percentage (%)',
          code: 'FN-CF-230a.1 ',
          disclosure: 'No such incidents were reported',
        },
        {
          metric:
            'Card-related fraud losses from (1) card- not-present fraud and (2) card-present and other fraud',
          category: 'Quantitative',
          unitOfMeasure: 'Presentation currency',
          code: 'FN-CF-230a.2',
          disclosure: 'No such incidents were reported',
        },
        {
          metric:
            'Description of approach to identifying and addressing data security risks',
          category: 'Discussion and Analysis',
          unitOfMeasure: 'n/a',
          code: 'FN-CF-230a.3',
          disclosure: 'Intellectual Capital Page 179-180',
        },
      ],
    },
    {
      topic: 'Selling Practices',
      rows: [
        {
          metric:
            'Percentage of total remuneration for covered employees that is variable and linked to the amount of products and services sold 4',
          category: 'Quantitative',
          unitOfMeasure: 'Percentage (%)',
          code: 'FN-CF-270a.1',
          disclosure: '',
        },
        {
          metric:
            'In the dynamic world of LBF, a vibrant performance-based culture fuels the drive for excellence. Here, marketing officers navigate their roles with clear, ambitious targets, both individually tailored and collectively embraced by their teams. Each goal set is a beacon guiding their efforts, promising lucrative incentives for those who reach the summit. This system transforms targets into motivational milestones, sparking a competitive yet collaborative spirit. However, the stakes are high—missing a target means the incentive remains an unclaimed reward, a constant reminder of the relentless pursuit of success that defines LBF’s ethos.',
          category: '',
          unitOfMeasure: '',
          code: '',
          disclosure: '',
        },
        {
          metric:
            'Approval rate for (1) credit and (2) pre- paid products for applicants 5',
          category: 'Quantitative',
          unitOfMeasure: 'Percentage (%)',
          code: 'FN-CF-270a.2',
          disclosure: 'N/A',
        },
        {
          metric:
            'Average fees from add-on products\n, average APR of credit products\n, average age of credit products\n, average number of credit accounts, and (5) average\n annual fees for pre-paid products',
          category: 'Quantitative',
          unitOfMeasure:
            'Presentation currency, Percentage (%), Months, Number',
          code: 'FN-CF-270a.3',
          disclosure: 'N/A',
        },
        {
          metric:
            'Number of customer complaints filed, percentage with monetary or non- monetary relief',
          category: 'Quantitative',
          unitOfMeasure: 'Number, Percentage (%)',
          code: 'FN-CF-270a.4',
          disclosure: 'No such incidents were reported',
        },
        {
          metric:
            'Total amount of monetary losses as a result of legal proceedings associated with selling and servicing of products 6',
          category: 'Quantitative',
          unitOfMeasure: 'Presentation currency',
          code: 'FN-CF-270a.5',
          disclosure: 'No such incidents were reported',
        },
      ],
    },
  ];

  return (
    <div>
      <div className="min-h-screen bg-cardGreen text-white p-8">
        <h1 className="text-3xl font-bold mb-6">
          DISCLOSURES RELATING TO SUSTAINABILITY ACCOUNTING STANDARD BOARD
          (SASB) FOR CONSUMER FINANCE
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600">
                <th className="border border-white p-2">TOPIC</th>
                <th className="border border-white p-2">METRIC</th>
                <th className="border border-white p-2">CATEGORY</th>
                <th className="border border-white p-2">UNIT OF MEASURE</th>
                <th className="border border-white p-2">CODE</th>
                <th className="border border-white p-2">
                  DISCLOSURE/ PAGE REFERENCE
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((topicGroup, index) => (
                <React.Fragment key={index}>
                  {topicGroup.rows.map((row, rowIndex) => (
                    <tr key={`${index}-${rowIndex}`} className="bg-blue-700">
                      {rowIndex === 0 && (
                        <td
                          rowSpan={topicGroup.rows.length}
                          className="border border-white p-2 align-top"
                        >
                          {topicGroup.topic}
                        </td>
                      )}
                      <td className="border border-white p-2">{row.metric}</td>
                      <td className="border border-white p-2">
                        {row.category}
                      </td>
                      <td className="border border-white p-2">
                        {row.unitOfMeasure}
                      </td>
                      <td className="border border-white p-2">{row.code}</td>
                      <td className="border border-white p-2">
                        {row.disclosure}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
