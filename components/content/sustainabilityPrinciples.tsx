'use client';

import React from 'react';

export default function UNGlobalCompactPrinciples() {
  const principles = [
    {
      category: 'HUMAN RIGHTS',
      items: [
        {
          principle: 'Principle 1 :',
          description:
            'Businesses should support and respect the protection of internationally proclaimed human rights',
          pageNo: '115',
          link: '/sustainability/un-gc/115',
        },
        {
          principle: 'Principle 2 :',
          description:
            'Businesses should make sure that they are not complicit in human rights abuses',
          pageNo: '115',
          link: '/sustainability/un-gc/115',
        },
      ],
    },
    {
      category: 'LABOUR',
      items: [
        {
          principle: 'Principle 3 :',
          description:
            'Businesses should uphold the freedom of association and the effective recognition of the right to collective bargaining',
          pageNo: '',
          additionalInfo: `Declarations of the International Labor Organisation (ILO), including the employee right to the freedom of association and the right to engage in collective bargaining, LBFS strong relationships with employees has meant there is no need for any collective agreement. During the year under review, the Company has not faced any type of industrial disputes.`,
          link: null,
        },
        {
          principle: 'Principle 4 :',
          description:
            'Businesses should uphold the elimination of all forms of forced and compulsory labour',
          pageNo: 'No such incidents were reported',
          additionalInfo: null,
          link: null,
        },
        {
          principle: 'Principle 5 :',
          description:
            'Businesses should uphold the effective abolition of child labour',
          pageNo: 'No such incidents were reported',
          additionalInfo: null,
          link: null,
        },
        {
          principle: 'Principle 6 :',
          description:
            'Businesses should uphold the elimination of discrimination in respect of employment and occupation',
          pageNo: 'No such incidents were reported',
          additionalInfo: null,
          link: null,
        },
      ],
    },
    {
      category: 'ENVIRONMENT',
      items: [
        {
          principle: 'Principle 7 :',
          description:
            'Businesses should support a precautionary approach to environmental challenges',
          pageNo: '33, 60',
          additionalInfo: null,
          link: '/sustainability/un-gc/33-60',
        },
        {
          principle: 'Principle 8 :',
          description:
            'Businesses should undertake initiatives to promote greater environmental responsibility',
          pageNo: '33, 60',
          additionalInfo: null,
          link: '/sustainability/un-gc/33-60',
        },
        {
          principle: 'Principle 9 :',
          description:
            'Businesses should encourage the development and diffusion of environmentally friendly technologies',
          pageNo: '150',
          link: '/sustainability/un-gc/150',
        },
      ],
    },
    {
      category: 'ANTI-CORRUPTION',
      items: [
        {
          principle: 'Principle 10 :',
          description:
            'Businesses should work against corruption in all its forms, including extortion and bribery',
          pageNo: '355',
          link: '/sustainability/un-gc/355',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-cardGreen text-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-white">
        THE TEN PRINCIPLES OF THE UN GLOBAL COMPACT
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-600">
              <th className="border border-white p-2">PRINCIPLE</th>
              <th className="border border-white p-2">DESCRIPTION</th>
              <th className="border border-white p-2">PAGE NO</th>
            </tr>
          </thead>
          <tbody>
            {principles.map((category, index) => (
              <React.Fragment key={index}>
                <tr className="bg-blue-800">
                  <td colSpan={3} className="border border-white p-2 font-bold">
                    {category.category}
                  </td>
                </tr>
                {category.items.map((item, itemIndex) => (
                  <tr
                    key={`${index}-${itemIndex}`}
                    className={
                      itemIndex % 2 === 0 ? 'bg-blue-700' : 'bg-blue-800'
                    }
                  >
                    <td className="border border-white p-2">
                      {item.principle}
                    </td>
                    <td className="border border-white p-2">
                      {item.description}
                      {item.additionalInfo && (
                        <p className="mt-2 text-sm italic">
                          {item.additionalInfo}
                        </p>
                      )}
                    </td>
                    <td className="border border-white p-2">
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-blue-300 hover:text-blue-100 hover:underline"
                        >
                          {item.pageNo}
                        </a>
                      ) : (
                        <span>{item.pageNo}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-right text-sm italic">
        LB Finance PLC Integrated Annual Report 2024/25
      </div>
    </div>
  );
}
