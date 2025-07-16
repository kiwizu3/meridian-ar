import Image from 'next/image';

export default function CompetentLeadership() {
  // Content data structure
  interface ContentItem {
    type: string;
    title?: string;
    text?: string | string[];
    items?: {
      title: string;
      content: string;
    }[];
    chart?: {
      image: any;
      alt: string;
      caption?: string;
    };
    columns?: {
      title: string;
      content: string;
      chart?: {
        image: any;
        alt: string;
        caption?: string;
      };
    }[];
  }

  // Main content
  const leadershipContent: ContentItem[] = [
    {
      type: 'header',
      title: 'COMPETENT LEADERSHIP',
      text: '5.2 The Board',
    },
    {
      type: 'section',
      title: 'CASL code principle (A.1)',
      text: [
        'Every public company should be headed by an effective Board, which should direct, lead and control the Company.',
        "The Board of Directors holds ultimate responsibility for the overall governance, strategic direction, and performance of the Company. As the highest governing authority, the Board provides strategic leadership and ensures that management and operational frameworks align with the Company's mission and long-term goals. It exercises close oversight across all functions, with a focus on effective risk management, compliance, and internal controls. Through policy guidance and performance monitoring, the Board plays a key role in driving sustainable growth and protecting stakeholder interests.",
        "In addition to its leadership and oversight functions, the Board is committed to upholding strong ethical standards, transparency, and accountability throughout the organisation. It actively promotes a culture of integrity and continuously reviews the governance framework to reflect global best practices and evolving expectations. This commitment ensures the Company maintains a solid reputation, fosters stakeholder trust, and remains resilient in a dynamic business environment. By reinforcing sound governance at every level, the Board helps secure the Company's long-term success and its ability to adapt to future challenges while delivering consistent value to all stakeholders.",
      ],
    },
    {
      type: 'section',
      title: '5.2 Governance Structure and Composition',
      text: [
        'CASL code principle (A.10) Shareholders should be kept advised of relevant details in respect of Directors',
        "The size and composition of the Board are considered appropriate, reflecting the current scale and geographic footprint of our operations. The Board comprises a balanced mix of Executive, Non-Executive, and Independent Non-Executive Directors. This balance enables the Board to provide clear and effective leadership across all areas of company's business activities.",
        'The views of Non-Executive and Independent Non-Executive Directors carry significant weight in Board deliberations, ensuring robust strategic oversight and leadership for the Company. To support this, Company has appointed Directors who are respected professionals, academics, and business leaders, each of whom has held senior positions within their respective fields and brings the appropriate calibre and expertise to the Board.',
        'In addition, the Board benefits from healthy age and gender diversity, bringing fresh perspectives that enhance the sustainability and resilience of our Business. To further strengthen governance, Non-Executive Directors meet during the year, without the presence of Executive Directors, to review management effectiveness. Separate sessions are also held annually for Independent Directors to discuss governance matters, thereby reinforcing the effectiveness of the Board in managing the affairs of both the Company and the Group.',
      ],
    },
    {
      type: 'columns',
      columns: [
        {
          title: 'Gender Representation',
          content:
            'A balanced approach to gender diversity in leadership roles',
          chart: {
            image: '',
            alt: 'Gender representation chart',
            caption: 'Male 75% | Female 25%',
          },
        },
        {
          title: 'Age Diversity',
          content: 'Board members across different age groups',
          chart: {
            image: '',
            alt: 'Age diversity chart',
            caption: '>60: 3 | 50-60: 6 | 40-50: 1 | 30-40: 2',
          },
        },
      ],
    },
    {
      type: 'section',
      title: 'A Balanced Board & Tenure of Services',
      text: [
        '- Executive Directors (Including MD): > 9 Years',
        '- Non-Independent Non-Executive Directors: 3 - 5 Years & 6 - 9 Years',
        '- Independent Non-Executive Directors: < 3 Years',
      ],
    },
  ];

  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6 rounded-lg">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
          <div className="bg-[#fcf7ef] rounded-lg p-6">
            {leadershipContent.map((item, index) => (
              <div key={index} className="mb-8 last:mb-0">
                {/* Header Section */}
                {item.type === 'header' && (
                  <>
                    <h1 className="text-2xl font-bold mb-2 text-[#0A3D5F]">
                      {item.title}
                    </h1>
                    <h2 className="text-xl font-bold mb-4 text-[#F3A847]">
                      {item.text}
                    </h2>
                  </>
                )}

                {/* Section with Text */}
                {item.type === 'section' && (
                  <>
                    <h2 className="text-xl font-bold mb-4 text-[#F3A847] border-b border-[#F3A847] pb-1">
                      {item.title}
                    </h2>
                    {Array.isArray(item.text) ? (
                      item.text.map((paragraph, i) => (
                        <p key={i} className="text-sm text-black mb-3">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="text-sm text-black">{item.text}</p>
                    )}
                  </>
                )}

                {/* Columns Section */}
                {item.type === 'columns' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    {item.columns?.map((column, i) => (
                      <div key={i} className="bg-[#daa765] p-4 rounded-lg">
                        <h3 className="font-bold text-[#0A3D5F] mb-2">
                          {column.title}
                        </h3>
                        {column.content && (
                          <p className="text-sm text-black mb-3">
                            {column.content}
                          </p>
                        )}
                        {column.chart && (
                          <div className="mt-4">
                            <Image
                              src={column.chart.image}
                              alt={column.chart.alt}
                              className="w-full h-auto"
                            />
                            {column.chart.caption && (
                              <p className="text-xs text-center mt-2 text-black">
                                {column.chart.caption}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
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
