import Image from 'next/image';

export default function MaterialityComponent() {
  // Content data structure
  interface ContentItem {
    type: string;
    title?: string;
    text?: string | string[];
    items?: {
      title: string;
      content: string;
    }[];
    columns?: {
      title: string;
      content: string;
    }[];
    list?: {
      title?: string;
      items: string[];
    };
    image?: {
      src: any;
      alt: string;
      caption?: string;
    };
  }

  // Main content
  const content: ContentItem[] = [
    {
      type: 'header',
      title: 'MATERIALITY',
    },
    {
      type: 'section',
      title: '1. INTEGRATED DYNAMIC AND DOUBLE MATERIALITY',
      text: [
        'Our process for determining Material Matters adheres to a double materiality approach, examining issues from an internal and external perspective. This means we consider the impact of a matter on both our ability to create value (inward focus) and its broader impact on the environment and society (outward focus). In conducting this assessment, we consider significant events from the past year and, importantly, the views of our stakeholders. Material Matters, as identified through this rigorous process and aligned with <IR>, GRI, and SLFRS requirements, have the potential to significantly influence the delivery of our business strategy and affect our ability to create and preserve value over time.',
      ],
    },
    {
      type: 'section',
      title: '1.1 Materiality Determination Process',
      // Note: You would add your process image/chart here
      // image: {
      //   src: MaterialityProcessImage,
      //   alt: 'Materiality determination process',
      //   caption: 'Our 5-step materiality assessment process'
      // }
    },
    {
      type: 'columns',
      columns: [
        {
          title: 'Understand the Organisation’s Context',
          content:
            '• Understand the operational environmental, organisational purpose, and expected strategic outcomes\n• Engage stakeholders through in-person and virtual channels to understand their expectations\n• Understand sustainability-related risks and opportunities (SRROs), and climate-related risks and opportunities (CRROs)',
        },
        {
          title: 'Identify Potential Impacts',
          content:
            '• Identify the potential risks and opportunities and their impacts across various capitals\n• Identify the impact of value creation and value depletion on our business model',
        },
      ],
    },
    {
      type: 'columns',
      columns: [
        {
          title: 'Assess the Significance of Impacts',
          content:
            '• Evaluate based on their strategic impact on organisational objectives and alignment with stakeholder priorities\n• Determine which issues are material to the business and should be prioritised for reporting',
        },
        {
          title: 'Prioritise Impacts for Reporting',
          content:
            "• Prioritise impacts that are critical to the Company's performance and aligned with stakeholder interests\n• Establish performance targets and KPIs aligned with the strategies",
        },
        {
          title: 'Reporting',
          content: '• Report material matters subject to annual evaluation',
        },
      ],
    },
    {
      type: 'section',
      title: '1.2 We Recognise a Matter as Double Material If:',
    },
    {
      type: 'columns',
      columns: [
        {
          title: 'Double Materiality',
          content:
            'We assess double materiality through:\n• Aspects material to investors or other financial capital providers (financial materiality)\n• Matters affecting the environment, society, and the economy (impact materiality)',
        },
        {
          title: 'Purpose',
          content:
            'Our material matters:\n• Serve as key drivers of value that shape our strategic decision-making\n• Impact the evaluation of our capacity to generate enduring enterprise value by our financial capital providers\n• Underline our commitment to generate sustained shared value for all stakeholders',
        },
        {
          title: 'Process',
          content:
            'Our material matters:\n • Serve as key drivers of value that shape our strategic decision-making\n • Impact the evaluation of our capacity to generate enduring enterprise value by our financial capital providers\n • Underline our commitment to generate sustained shared value for all stakeholders',
        },
      ],
    },
  ];

  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6 rounded-lg">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
          <div className="bg-[#fcf7ef] rounded-lg p-6">
            {content.map((item, index) => (
              <div key={index} className="mb-8 last:mb-0">
                {/* Header Section */}
                {item.type === 'header' && (
                  <div>
                    <h1 className="text-2xl font-bold mb-2 text-[#0A3D5F]">
                      {item.title}
                    </h1>
                  </div>
                )}

                {/* Section with Text */}
                {item.type === 'section' && (
                  <>
                    {item.title && (
                      <h2 className="text-xl font-bold mb-4 text-[#F3A847] border-b border-[#F3A847] pb-1">
                        {item.title}
                      </h2>
                    )}
                    {Array.isArray(item.text) ? (
                      item.text.map((paragraph, i) => (
                        <p key={i} className="text-sm text-black mb-3">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="text-sm text-black">{item.text}</p>
                    )}
                    {item.list && (
                      <ul className="list-disc pl-5 text-sm text-black">
                        {item.list.items.map((listItem, i) => (
                          <li key={i} className="mb-2">
                            {listItem}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}

                {/* Columns Section */}
                {item.type === 'columns' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {item.columns?.map((column, i) => (
                      <div key={i} className="bg-[#daa765] p-4 rounded-lg">
                        {column.title && (
                          <h3 className="font-bold text-[#0A3D5F] mb-2">
                            {column.title}
                          </h3>
                        )}
                        {column.content && (
                          <div className="text-sm text-black whitespace-pre-line">
                            {column.content}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Image Section */}
                {item.type === 'image' && item.image && (
                  <div className="my-6">
                    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                      />
                    </div>
                    {item.image.caption && (
                      <p className="text-xs text-center mt-2 text-black italic">
                        {item.image.caption}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
