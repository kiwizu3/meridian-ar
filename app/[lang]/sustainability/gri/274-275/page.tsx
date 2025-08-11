import Image from 'next/image';
import { ReactNode } from 'react';

export default function BoardPerformanceEvaluation() {
  // Content data structure
  interface ContentItem {
    type: string;
    title?: string;
    text?: string | string[];
    items?: string[];
    table?: {
      headers: string[];
      rows: {
        values: string[];
      }[];
    };
    chart?: {
      image: any;
      alt: string;
      caption?: string;
    };
    columns?: {
      title: string;
      content: ReactNode;
    }[];
  }

  // Main content
  const performanceContent: ContentItem[] = [
    {
      type: 'header',
      title: '5.8 Managing Conflicts',
    },
    {
      type: 'section',
      title: 'b. Related Party Transactions',
      text: [
        "The Board has established a Related Party Transactions Policy that sets out the procedures for providing accommodations to Directors, their close family members, Key Responsible Persons, their close family members, related entities and entities where Directors serve as Board members. All such transactions are carried out in accordance with CBSL rules and regulations, and under the same terms and conditions applicable to the Company's other customers.",
        'All the related party transactions are prior reviewed by the BRPTRC through circulation. Such transactions are tabled at the next BRPTRC for ratification. Further, any transactions requiring disclosure under the Listing Rules are reported accordingly. These disclosures are detailed in Note 3.1 of the financial statements on page 445.',
      ],
    },
    {
      type: 'header',
      title: '5.9 Evaluating Performance',
    },
    {
      type: 'section',
      text: [
        'CASL Code Principle (A.9) Boards should periodically appraise their own performance in order to ensure that board responsibilities are satisfactorily discharged.',
      ],
    },
    {
      type: 'section',
      title: 'a. Evaluating the Effectiveness of the Board (A.9.1/A.9.2)',
      text: [
        "The BNGC conducts an annual self-assessment to evaluate the overall effectiveness of the LBF Board based on established criteria. Directors' feedback is collected, reviewed by the BNGC, and shared with the Board Chairman for discussion in a closed-door meeting. The BNGC is responsible for developing and implementing action plans to address the issues and concerns identified.",
      ],
    },
    {
      type: 'section',
      title:
        'b. Evaluating the Effectiveness of the Board Sub Committees (A.9.2)',
      text: [
        'The effectiveness of each sub-committee was self-evaluated by its members to ensure the effective discharging of its duties for the year and the results were presented to the Board. The review focused on mandate clarity, skills adequacy, meeting efficiency, and strategic alignment. Findings confirmed that all sub-committees operate effectively and continue to provide robust oversight in their respective areas.',
      ],
    },
    {
      type: 'section',
      title: 'c. Evaluating the Effectiveness of the Chairman',
      text: [
        "The Chairman of the LBF Board is evaluated annually by the Company's Senior Director and other NEDs to assess his effectiveness in fulfilling the duties and responsibilities of the Board chair.",
      ],
    },
    {
      type: 'columns',
      columns: [
        {
          title: 'Establish expectations',
          content: `
            <ul class="list-disc pl-5 space-y-1 text-sm">
              <li>The Board agrees goals and key expectations for the MD</li>
              <li>The Board negotiates performance goals with the MD</li>
              <li>Set expectations</li>
              <li>Expectations for the MD performance are agreed by MD and Board</li>
            </ul>
          `,
        },
        {
          title: 'Guide',
          content: `
            <ul class="list-disc pl-5 space-y-1 text-sm">
              <li>On going advice, particularly from the Chairman</li>
              <li>PERFORMANCE</li>
            </ul>
          `,
        },
        {
          title: 'Assess',
          content: `
            <ul class="list-disc pl-5 space-y-1 text-sm">
              <li>The Board undertakes a detailed review using:
                <ul class="list-circle pl-5">
                  <li>Financial goals</li>
                  <li>Non-financial goals</li>
                </ul>
              </li>
              <li>The Board formally discusses the findings</li>
              <li>Formal Appraisal</li>
              <li>Performance assessment process formally reviewed at Board meeting</li>
            </ul>
          `,
        },
      ],
    },
    {
      type: 'section',
      title: 'd. Evaluating the Performance of Managing Director',
      text: [
        'CASL Code Principle (A.11) Boards should periodically appraise their own performance in order to ensure that Board responsibilities are satisfactorily discharged.',
        "The MD's performance is assessed annually by the Chairman of the Board, based on the goals and objectives agreed upon at the start of each financial year. After the year end performance evaluation, the BHRRC recommends to the Board both the performance related pay for the completed year and any adjustments to compensation for the upcoming year.",
      ],
    },
    {
      type: 'section',
      title: 'e. Evaluating the Performance of Directors',
      text: [
        "All Directors are required to submit an annual self-evaluation to the BNGC, providing their assessment of the Board's collective performance in areas such as strategy development and monitoring, risk management, internal control systems, and oversight of Board Sub-Committees. These self-evaluations are reviewed by the BNGC in collaboration with the Board Chairman, and the insights are used to facilitate constructive discussions on improving Board effectiveness and to determine whether each Director remains suitably qualified to continue serving on the LBF Board. Based on the evaluation results, the Chairman and/or the Chairperson of the BNGC may recommend the appointment of new Directors or request the resignation of existing ones, if deemed necessary.",
      ],
    },
    {
      type: 'header',
      title: '5.10 Remuneration',
    },
    {
      type: 'section',
      title: 'a. Remuneration Policy',
      text: [
        "The Company's Remuneration Policy is structured to align employee rewards with its strategic goals and long-term success. It provides a strong framework aimed at attracting, retaining, and motivating individuals who possess the skills, values, and expertise essential for the Company's sustainable growth.",
        "LBF's Remuneration Policy is designed to establish a competitive and transparent framework that balances strategic business objectives with the principles of fairness, integrity, and prudent risk management, fully complying with the applicable Directions of the Central Bank of Sri Lanka. The policy aims to attract top talent by offering an employee value proposition, retain skilled professionals through competitive rewards and benefits, and inspire behaviours aligned with LBF's core values and goals. It ensures that remuneration structures are aligned with long-term business success and sustainability, while recognising and competitively rewarding high-performing areas, fostering employee engagement, loyalty, and continuous growth across the organisation.",
        "LBF's Remuneration Policy is closely linked to annual business performance and is aligned with its strategy, objectives, values, and long-term interests. It ensures transparency, minimises complexity, and avoids conflicts of interest by discouraging excessive risk-taking. Remuneration structures balance fixed and variable components, reflecting market competitiveness and considering factors such as experience, qualifications, and non-financial benefits. NEDs' pay maintains independence through non-discriminatory practices. The policy promotes meritocracy, includes broader performance metrics beyond sales, and regularly benchmarks compensation to attract and retain top talent in line with regulatory and best practice standards.",
        'Remuneration adjustments such as salary increases, bonuses, and incentives are then awarded based on the evaluation outcomes. High performers are rewarded proportionately, while areas for improvement are identified to support development. This method not only motivates employees but also fosters a culture of meritocracy, where rewards are directly connected to effort and results. However, it requires careful management to ensure evaluations remain objective, fair, and free from favouritism, and to prevent excessive focus on short-term results at the expense of long-term sustainability.',
      ],
    },
    {
      type: 'section',
      title: 'c. Process to determine remuneration',
      text: [
        'CASL Code Principle (B.1) Companies should establish a formal and transparent procedure for developing policy on executive remuneration',
        'CASL Code Principle (B.2) Level and makeup of remuneration of both executive and Non-Executive Directors',
        'The remuneration policy is overseen by the BHRRC, comprised entirely of non-executive directors of whom majority are independent. It operates under the authority of the Board of Directors to avoid conflicts of interest.',
        "Performance-based evaluation system ties an individual's remuneration directly to their contributions and achievements within the organisation. This approach aligns employee incentives with business objectives, encouraging high performance and accountability.",
        'The process typically involves setting clear, measurable performance indicators (KPIs) at the start of each evaluation period. These indicators may include quantitative targets such as sales growth, project completion, or efficiency improvements, as well as qualitative assessments like leadership, collaboration, and innovation. Performance is assessed annually at the end of each financial year.',
      ],
    },
    {
      type: 'columns',
      columns: [
        {
          title: 'Fairness and Transparency',
          content: `
            <p class="text-sm">Evaluation criteria are communicated in advance, ensuring employees understand how their performance influences their pay</p>
          `,
        },
        {
          title: 'Alignment with Organisational Goals',
          content: `
            <p class="text-sm">Individual objectives are linked to broader company strategies, ensuring that personal achievements contribute to business success</p>
          `,
        },
        {
          title: 'Consistency and Objectivity',
          content: `
            <p class="text-sm">Standardised evaluation tools and processes are used to minimise bias and ensure consistency across teams and departments</p>
          `,
        },
      ],
    },
  ];

  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6 rounded-lg">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
          <div className="bg-[#fcf7ef] rounded-lg p-6">
            {performanceContent.map((item, index) => (
              <div key={index} className="mb-8 last:mb-0">
                {/* Header Section */}
                {item.type === 'header' && (
                  <h2 className="text-xl font-bold mb-4 text-[#F3A847] border-b border-[#F3A847] pb-1">
                    {item.title}
                  </h2>
                )}

                {/* Section with Text */}
                {item.type === 'section' && (
                  <>
                    {item.title && (
                      <h3 className="text-lg font-bold mb-3 text-[#0A3D5F]">
                        {item.title}
                      </h3>
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
                    {item.items && (
                      <ul className="list-disc pl-5 space-y-2 text-sm text-black">
                        {item.items.map((listItem, i) => (
                          <li key={i}>{listItem}</li>
                        ))}
                      </ul>
                    )}
                  </>
                )}

                {/* Columns Section */}
                {item.type === 'columns' && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      {item.columns?.map((column, i) => (
                        <div key={i} className="bg-[#daa765] p-4 rounded-lg">
                          <h3 className="font-bold text-[#0A3D5F] mb-2">
                            {column.title}
                          </h3>
                          {column.content}
                        </div>
                      ))}
                    </div>
                    {item.chart && (
                      <div className="mt-4">
                        <Image
                          src={item.chart.image}
                          alt={item.chart.alt}
                          className="w-full h-auto rounded-lg"
                        />
                        {item.chart.caption && (
                          <p className="text-xs text-center mt-2 text-black">
                            {item.chart.caption}
                          </p>
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
