// import Section1 from '@/components/content/sustainable-development/humanCapital/part11';
// import Section2 from '@/components/content/sustainable-development/humanCapital/part12';

// export default function GRIReporting4() {
//   return (
//     <div className="py-24 container px-5 lg:px-0">
//       <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6">
//         <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
//           <Section1 />
//           <Section2 />
//         </div>
//       </div>
//     </div>
//   );
// }
//

export default function HRDashboard() {
  // Content data structure
  interface ContentItem {
    type: string;
    title?: string;
    text?: string | string[];
    items?: {
      title: string;
      content: string;
    }[];
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
      content: string;
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
    }[];
    textOptional?: string[];
  }

  // Main content
  const hrContent: ContentItem[] = [
    {
      type: 'header',
      title: 'FRAMING HUMAN CAPITAL',
      text: '17. HR DASHBOARD',
    },
    {
      type: 'metric',
      title: '4,407 TOTAL EMPLOYEES',
    },
    {
      type: 'section',
      title: 'Total Employees by Region and Gender',
      table: {
        headers: ['Province', '2024/25', '', '', '', '2023/24', '', '', ''],
        rows: [
          {
            values: [
              '',
              'No. of Branches',
              'Male',
              'Female',
              'Total',
              'No. of Branches',
              'Male',
              'Female',
              'Total',
            ],
          },
          {
            values: [
              'Central',
              '19',
              '209',
              '121',
              '330',
              '18',
              '197',
              '113',
              '310',
            ],
          },
          {
            values: [
              'Eastern',
              '27',
              '179',
              '183',
              '362',
              '25',
              '168',
              '163',
              '331',
            ],
          },
          {
            values: [
              'Northern',
              '30',
              '107',
              '165',
              '272',
              '29',
              '113',
              '145',
              '258',
            ],
          },
          {
            values: [
              'North Central',
              '9',
              '106',
              '52',
              '158',
              '8',
              '96',
              '42',
              '138',
            ],
          },
          {
            values: [
              'North Western',
              '12',
              '128',
              '100',
              '228',
              '11',
              '118',
              '92',
              '210',
            ],
          },
          {
            values: [
              'Sabaragamuwa',
              '8',
              '100',
              '81',
              '181',
              '7',
              '97',
              '65',
              '162',
            ],
          },
          {
            values: [
              'Southern',
              '16',
              '201',
              '124',
              '325',
              '13',
              '169',
              '101',
              '270',
            ],
          },
          { values: ['Uva', '7', '83', '50', '133', '6', '80', '42', '122'] },
          {
            values: [
              'Western',
              '88',
              '1,204',
              '1,214',
              '2,418',
              '83',
              '1,199',
              '1,132',
              '2,331',
            ],
          },
          {
            values: [
              'Total',
              '216',
              '2,317',
              '2,090',
              '4,407',
              '200',
              '2,237',
              '1,895',
              '4,132',
            ],
          },
        ],
      },
    },
    {
      type: 'columns',
      columns: [
        {
          title: 'Employee Composition by Gender',
          content: '',
          // chart: {
          //   image: genderChart,
          //   alt: 'Gender composition chart',
          //   caption: 'Female 47% | Male 53%'
          // }
        },
        {
          title: 'Employee promotions by category and gender',
          content: '',
          table: {
            headers: ['Category', 'Promotions'],
            rows: [
              { values: ['Senior Management', '12'] },
              { values: ['Middle Management', '154'] },
              { values: ['Executive', '380'] },
              { values: ['Other', '5'] },
            ],
          },
        },
      ],
    },
    {
      type: 'section',
      title: 'Average hours of training per year per employee',
      table: {
        headers: [
          'Category',
          'Total Training Hours',
          'No. of Employees',
          'Avg. Hrs',
        ],
        rows: [
          { values: ['Senior Management', '617.0', '158', '4'] },
          { values: ['Middle Management', '6,579.0', '1,118', '6'] },
          { values: ['Executive', '12,780.00', '2,681', '5'] },
          { values: ['Clerical', '33,848.0', '5,398', '6'] },
          { values: ['Minor', '21.0', '7', '3'] },
          { values: ['Total', '53,845.0', '9,362', '6'] },
        ],
      },
    },
    {
      type: 'section',
      title:
        'Programmes for upgrading employee skills and transition assistance programmes',
      table: {
        headers: ['Category', 'Programmes', 'Participants', 'Total Hours'],
        rows: [
          { values: ['Senior Management', '144', '14', '617'] },
          { values: ['Middle Management', '909', '209', '6,579'] },
          { values: ['Executive', '1,187', '1,494', '12,780'] },
          { values: ['Clerical', '2,784', '2,614', '33,848'] },
          { values: ['Minor', '7', '0', '21'] },
        ],
      },
    },
    {
      type: 'columns',
      columns: [
        {
          title: 'Service analysis of employees by category',
          content: '',
          // chart: {
          //   image: serviceChart,
          //   alt: 'Service analysis chart',
          //   caption: '5 years and below 78% | 6-10 years 12% | 11-15 years 7% | 16-20 years 1% | Above 20 years 2%'
          // }
        },
        {
          title:
            'Composition of the Board and employees by employee category and age group',
          content: '',
          // chart: {
          //   image: ageChart,
          //   alt: 'Age composition chart',
          //   caption: 'Over 50 years: 83 total'
          // }
        },
      ],
    },
    {
      type: 'section',
      title: 'Employee turnover by region and gender',
      table: {
        headers: ['Region', 'Male', 'Female', 'Total'],
        rows: [
          { values: ['Central', '94', '55', '149'] },
          { values: ['Eastern', '93', '54', '147'] },
          { values: ['Northern', '57', '36', '93'] },
          { values: ['North Central', '23', '33', '56'] },
          { values: ['North Western', '45', '23', '68'] },
          { values: ['Sabaragamuwa', '54', '34', '88'] },
          { values: ['Southern', '44', '24', '68'] },
          { values: ['Uva', '20', '14', '34'] },
          { values: ['Western', '547', '568', '1,115'] },
          { values: ['Total', '1,020', '854', '1,874'] },
        ],
      },
    },
    {
      type: 'section',
      title: 'Employee turnover by reason',
      table: {
        headers: ['Reason', 'Count'],
        rows: [
          { values: ['Resignation', '1,005'] },
          { values: ['Retirement', '14'] },
          { values: ['Deceased', '1'] },
          { values: ['Other', '854'] },
        ],
      },
    },
    {
      type: 'section',
      title: 'Employee turnover by age group and Gender',
      table: {
        headers: ['Age Group', 'Male', 'Female', 'Total'],
        rows: [
          { values: ['Below 30 years', '354', '191', '545'] },
          { values: ['30-50 years', '664', '542', '1,206'] },
          { values: ['Over 50 years', '2', '1', '3'] },
        ],
      },
    },
    {
      type: 'section',
      title: 'Diversity of Governance Bodies and Employees',
      table: {
        headers: ['Category', 'Count'],
        rows: [
          { values: ['Board of Directors', '11'] },
          { values: ['Senior Management', '158'] },
          { values: ['Middle Management', '1,118'] },
          { values: ['Executive', '2,681'] },
          { values: ['Other', '5,398'] },
        ],
      },
    },
    {
      type: 'header',
      title: 'BOARD HUMAN RESOURCES AND REMUNERATION COMMITTEE REPORT',
    },
    {
      type: 'section',
      title: 'PURPOSE OF THE COMMITTEE',
      text: [
        "The Board Human Resources and Remuneration Committee (BHRRC) is responsible for guiding and overseeing the Company's human capital strategy, including remuneration policies, executive performance evaluation, talent development, and organisational culture.",
      ],
    },
    {
      type: 'section',
      title: 'COMPOSITION OF THE COMMITTEE',
      text: [
        'As of 31 March 2025, the Committee comprised the following members:',
      ],
      items: [
        {
          title: 'Ms. Yanika Amarasekera*',
          content: 'Chairperson, Independent Non-Executive Director',
        },
        {
          title: 'Mr. G A R D Prasanna',
          content: 'Non-Executive Director',
        },
        {
          title: 'Mr. Ashane Jayasekara**',
          content: 'Independent Non-Executive Director',
        },
      ],
      textOptional: [
        '*Appointed as Chairperson w.e.f. 11/06/2024',
        '**Chaired the Committee up to 10/06/2024',
        'All members bring substantial experience in leadership, governance, and human resources oversight. The composition of the Committee adheres to applicable corporate governance standards and regulatory requirements.',
      ],
    },
    {
      type: 'section',
      title: 'KEY RESPONSIBILITIES',
      text: ['The Committee is responsible for:'],
      items: [
        {
          title: '',
          content:
            'Reviewing and recommending compensation packages for Executive Directors and Senior Management',
        },
        {
          title: '',
          content:
            'Overseeing short-term and long-term incentive schemes aligned with Company strategy and shareholder value creation.',
        },
        {
          title: '',
          content:
            'Monitoring performance evaluation frameworks for key executives',
        },
        {
          title: '',
          content:
            'Ensuring a competitive and equitable remuneration structure across the organisation',
        },
        {
          title: '',
          content:
            'Providing oversight of leadership development, succession planning, and employee engagement',
        },
        {
          title: '',
          content:
            'Reviewing Diversity, Equity, and Inclusion (DEI) initiatives and workplace culture',
        },
      ],
    },
    {
      type: 'section',
      text: [
        "The Human Resources and Remuneration Committee remains committed to fostering a performance-driven, fair, and inclusive work culture, where talent is recognised and rewarded in alignment with LBF's strategic objectives. Guided by principles of transparency, equity, and accountability, the Committee ensures that remuneration frameworks support long-term value creation and attract, retain, and motivate high-calibre individuals.",
      ],
    },
    {
      type: 'section',
      title: 'COMMITTEE MEETINGS',
      text: [
        'The Committee met five (05) times during the financial year. The attendance of each member is outlined below:',
      ],
      table: {
        headers: [
          'Member Name',
          'Meetings Held',
          'Meetings Attended',
          'Attendance Percentage',
        ],
        rows: [
          { values: ['Ms. Yanika Amarasekera', '5', '5', '100%'] },
          { values: ['Mr. G A R D Prasanna', '5', '5', '100%'] },
          { values: ['Mr. Ashane Jayasekara', '5', '5', '100%'] },
        ],
      },
      textOptional: [
        'The Company Secretary acts as the secretary to the Committee.',
      ],
    },
    {
      type: 'section',
      title: 'COMMITTEE FOCUS DURING 2024/25',
      text: ['During the year under review, the Committee:'],
      items: [
        {
          title: '',
          content:
            'Approved the annual and variable remuneration packages for the CEO and Key Management Personnel based on predefined performance metrics',
        },
        {
          title: '',
          content:
            'Reviewed and realigned the executive compensation structure to enhance the link between pay and long-term performance',
        },
        {
          title: '',
          content: 'Discussed long-term incentive plans',
        },
        {
          title: '',
          content:
            'Oversaw the annual performance appraisal process for KMPs, with a focus on strategy execution, ESG targets, and leadership behaviour',
        },
        {
          title: '',
          content:
            "Reviewed the Company's HR Policies, ensuring alignment with current regulations and best practices",
        },
        {
          title: '',
          content:
            'Evaluated and supported Company wide efforts to strengthen the talent pipeline, particularly in critical business areas',
        },
        {
          title: '',
          content:
            'Reviewed and monitored succession planning for key roles, including readiness assessments and leadership development initiatives',
        },
        {
          title: '',
          content:
            'Promoted the enhancement of workplace diversity and inclusion, with special focus on gender representation in leadership',
        },
      ],
    },
    {
      type: 'section',
      title: 'KEY DECISIONS AND POLICY UPDATES',
      items: [
        {
          title: '',
          content:
            'Adopted a revised Remuneration Policy, which introduces clearer links between performance and variable pay components',
        },
        {
          title: '',
          content:
            'Updated the Succession Planning Policy to include emergency succession plans for executive leadership',
        },
        {
          title: '',
          content:
            'Endorsed the launch of a leadership acceleration programme aimed at developing high potential talent for future leadership roles',
        },
      ],
    },
    {
      type: 'section',
      title: 'ACTION PLAN FOR 2025/26',
      text: [
        "The Committee remains committed to fostering a performance-driven and inclusive culture by ensuring fair, transparent, and competitive remuneration practices. It will continue to support leadership development, talent retention, and human capital strategies aligned with the Company's long-term goals and stakeholder expectations.",
      ],
    },
    {
      type: 'signature',
      text: [
        'Yanika Amarasekara',
        'Chairperson',
        'Board Human Resources and Remuneration Committee',
        '30 May 2025',
      ],
    },
  ];

  const renderTable = (table: any) => (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-white text-sm text-black">
        <thead>
          <tr className="bg-[#0A3D5F] text-white">
            {table.headers.map((header: string, i: number) => (
              <th key={i} className="py-2 px-4 text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row: any, i: number) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-[#f7f7f7]' : 'bg-white'}>
              {row.values.map((value: string, j: number) => (
                <td key={j} className="py-2 px-4 border-b border-gray-200">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6 rounded-lg">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
          <div className="bg-[#fcf7ef] rounded-lg p-6">
            {hrContent.map((item, index) => (
              <div key={index} className="mb-8 last:mb-0">
                {/* Header Section */}
                {item.type === 'header' && (
                  <>
                    <h1 className="text-2xl font-bold mb-2 text-[#0A3D5F]">
                      {item.title}
                    </h1>
                    {item.text && (
                      <h2 className="text-xl font-bold mb-4 text-[#F3A847]">
                        {item.text}
                      </h2>
                    )}
                  </>
                )}

                {/* Metric Section */}
                {item.type === 'metric' && (
                  <div className="bg-[#0A3D5F] text-white p-4 rounded-lg text-center mb-6">
                    <h3 className="text-2xl font-bold">{item.title}</h3>
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
                    {item.items && (
                      <ul className="list-disc pl-5 space-y-2 text-sm text-black">
                        {item.items.map((listItem, i) => (
                          <li key={i}>
                            {listItem.title && (
                              <strong>{listItem.title}</strong>
                            )}{' '}
                            {listItem.content}
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.table && renderTable(item.table)}
                  </>
                )}

                {/* Signature Section */}
                {item.type === 'signature' && (
                  <div className="text-right mt-8">
                    {Array.isArray(item.text) ? (
                      item.text.map((paragraph, i) => (
                        <p
                          key={i}
                          className={`text-sm text-black ${i === 0 ? 'font-bold' : ''}`}
                        >
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="text-sm text-black">{item.text}</p>
                    )}
                  </div>
                )}

                {/* Columns Section */}
                {item.type === 'columns' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        {column.table && renderTable(column.table)}
                        {column.chart && (
                          <div className="mt-4">
                            {/* <Image
                              src={column.chart.image}
                              alt={column.chart.alt}
                              className="w-full h-auto"
                            /> */}
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
