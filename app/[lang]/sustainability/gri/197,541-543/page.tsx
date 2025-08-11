import Image from 'next/image';

export default function CustomerAndAntiCorruption() {
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
    list?: {
      title?: string;
      items: string[];
    };
    table?: {
      headers: string[];
      rows: {
        [key: string]: string;
      }[];
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
      title: 'Call Centre Performance',
    },
    {
      type: 'section',
      title: 'Customer Communication',
    },
    {
      type: 'table',
      table: {
        headers: ['Channel', 'Purpose'],
        rows: [
          {
            Channel: 'Social media',
            Purpose: 'Engage, inform, and promote brand values',
          },
          {
            Channel: 'SMS and email',
            Purpose: 'Transaction alerts, updates, promotions',
          },
          {
            Channel: 'Website',
            Purpose: 'Product information and financial literacy',
          },
          { Channel: 'Call centre', Purpose: 'Customer service and support' },
          { Channel: 'LB CIM app', Purpose: 'Self-service convenience' },
          {
            Channel: 'Branch communication',
            Purpose: 'Personal interaction, relationship building',
          },
          {
            Channel: 'Surveys and feedback',
            Purpose: 'Understand needs and improve service',
          },
        ],
      },
    },
    {
      type: 'section',
      title: '3.9 Customer Privacy and Protection at LBF',
      text: [
        'Safeguarding customer privacy stands as a fundamental value and legal responsibility at LBF. Our comprehensive Customer Protection Framework, aligned with the Finance Business Act No. 42 of 2011, formalises this commitment and provides clear guidelines to all staff regarding the confidentiality and privacy of customer data.',
        'Stringent measures are in place for the secure handling of customer information, covering data storage, transmission, and access control. Access to sensitive data is strictly limited to authorised personnel for legitimate business purposes. We maintain adherence to relevant data protection laws and proactively update security protocols to manage emerging risks and prevent unauthorised access or misuse.',
        'In the review year, our commitment was further reinforced through the implementation of a Board-approved Personal Data Protection Policy, which documents company-wide procedures for data handling. Employee understanding and compliance with these new procedures were ensured through a series of educational workshops.',
      ],
    },
    {
      type: 'section',
      title: 'Total Normal Calls Received',
    },
    {
      type: 'columns',
      columns: [
        {
          title: 'Product-wise Calls',
          content: 'Deposits: 2%\nGeneral: 45%\nLoans and receivables: 53%',
        },
        {
          title: 'Language-wise Calls',
          content: 'Sinhala: 89%\nTamil: 8%\nEnglish: 3%',
        },
      ],
    },
    {
      type: 'section',
      title: 'LB CIM Call Centre Performance',
    },
    {
      type: 'columns',
      columns: [
        {
          title: 'Inbound/Outbound',
          content: 'Inbound: 71%\nOutbound: 29%',
        },
        {
          title: 'Language-wise Calls',
          content: 'Sinhala: 98%\nTamil: 2%\nEnglish: 0%',
        },
      ],
    },
    {
      type: 'section',
      title: 'Our social media footprint',
    },
    {
      type: 'table',
      table: {
        headers: ['Platform', 'Metric', '2024/25', '2023/24'],
        rows: [
          {
            Platform: 'Facebook',
            Metric: 'Reach',
            '2023/24': '5.6 M',
            '2024/25': '5.5 M',
          },
          {
            Platform: 'Facebook',
            Metric: 'Followers',
            '2023/24': '178 K',
            '2024/25': '185 K',
          },
          {
            Platform: 'Facebook',
            Metric: 'Impressions',
            '2023/24': '51 M',
            '2024/25': '55 M',
          },
          {
            Platform: 'Instagram',
            Metric: 'Reach',
            '2023/24': '506.7 K',
            '2024/25': '369.4 K',
          },
          {
            Platform: 'Instagram',
            Metric: 'Followers',
            '2023/24': '15 K',
            '2024/25': '15 K',
          },
          {
            Platform: 'YouTube',
            Metric: 'Reach',
            '2023/24': '648.9 K',
            '2024/25': '3.4 M',
          },
          {
            Platform: 'YouTube',
            Metric: 'Followers',
            '2023/24': '31 K',
            '2024/25': '71.9 K',
          },
          {
            Platform: 'YouTube',
            Metric: 'Impressions',
            '2023/24': '1.3 M',
            '2024/25': '3.8 M',
          },
          {
            Platform: 'LinkedIn',
            Metric: 'Reach',
            '2023/24': 'N/A',
            '2024/25': '5.2 M',
          },
          {
            Platform: 'LinkedIn',
            Metric: 'Followers',
            '2023/24': '10 K',
            '2024/25': '73 K',
          },
          {
            Platform: 'LinkedIn',
            Metric: 'Impressions',
            '2023/24': '48.2 K',
            '2024/25': '301.8 K',
          },
        ],
      },
    },
    {
      type: 'header',
      title: 'REPORTING ON ANTI-CORRUPTION PROGRAMMES',
      text: 'TRANSPARENCY IN CORPORATE REPORTING ASSESSMENT',
    },
    {
      type: 'section',
      text: [
        'At LBF, we are committed to act ethically and with integrity in everything we do. Through our approach, we seek to build long term relationships with stakeholders based on trust. LBF Board of Directors set the tone from the top to promote a culture of ethics and transparent behaviour across the Company.',
        'This is supported by a range of policies that specify the ethical conduct expected from all employees including specific actions to deal with anti-corruption and bribery, guidelines on receiving and giving gifts and the exclusion of political party sponsorships.',
      ],
    },
    {
      type: 'list',
      title: 'Key ABC Policy Provisions:',
      items: [
        {
          title: 'Enhanced due diligence',
          content: 'for payments to Politically Exposed Persons (PEPs)',
        },
        {
          title: 'No political contributions',
          content: 'to candidates, officials, or parties',
        },
        { title: 'Regular communication', content: 'of policies to employees' },
        {
          title: 'Published Anti-bribery and corruption policy',
          content: 'on company website',
        },
      ],
    },
    {
      type: 'header',
      title: 'REPORTING ON ANTI-CORRUPTION PROGRAMMES',
      text: 'TRANSPARENCY IN CORPORATE REPORTING ASSESSMENT, ISSUED BY TRANSPARENCY INTERNATIONAL SRI LANKA',
    },
    {
      type: 'section',
      title:
        '1. Does the company have a publicly stated commitment to anti-corruption?',
      text: [
        'Commitment to anti-corruption with Anti-bribery and corruption policy',
        'At LBF, we committed to act ethically and with integrity in everything we do. Through our approach, we seek to build long term relationships with stakeholders based on trust. LBF Board of Directors set the tone from the top to promote a culture of ethics and transparent behaviour across the Company. This is supported by a range of policies that specify the ethical conduct expected from all employees including specific actions to deal with anti-corruption and bribery, guidelines on receiving and giving gifts and the exclusion of political party sponsorships. According to ABC policy of the Company;',
        "• Enhanced due diligence should be carried out where any payment is made to a Politically Exposed Person (PEP) as defined in Company's Anti-Money Laundering Policy",
        '• No political contribution to a candidate for public office, an elected official, a political party or political action committee, can be made, on behalf of LB Finance PLC.',
        'Frequently we communicate these policies to our employees and also continuously reiterate the importance of legal and regulatory compliance. The Anti-bribery and corruption policy is published in the corporate web site of the Company',
      ],
    },
    {
      type: 'section',
      title:
        '2. Does the company publicly commit to be in compliance with all relevant laws including anti-corruption laws?',
      text: [
        'Internal processes are in place to ensure that the Company comply with all laws regulations, directions and internal policies of the Company. The Board affirms that the Company complies with all relevant laws, regulations, directions and internal policies of the Company.',
      ],
    },
    {
      type: 'section',
      title:
        '3. Does the company leadership (senior membership or board) demonstrate support for anti-corruption?',
      text: [
        'The Board approved Anti-Bribery and Corruption (ABC) Policy is in place. Operationalization and compliance of the policy is ensured through the Compliance Officer.',
      ],
    },
    {
      type: 'section',
      title:
        '4. Does the company code of conduct/anti-corruption policy explicitly apply to all employees and directors?',
      text: [
        'The Board approved Code of Conduct, ABC policy are in place. These policies have been duly communicated to all employees including Directors of the Company in all three languages and employee acknowledgements have been obtained. Further, periodic e-flyers related to ABC have been circulated through e-mails among all employees aiming continuous awareness and compliance.',
      ],
    },
    {
      type: 'section',
      title:
        "5. Does the company's anti-corruption policy explicitly apply to persons who are not employees but are authorised to act on behalf of the company or represent it (for example: agents, advisors, representatives or intermediaries)?",
      text: [
        "The Company's ABC Policy explicitly applies for all stakeholders including agents, advisors, representatives and all other intermediaries. The Anti-bribery and corruption policy is published in the corporate web site of the Company",
      ],
    },
    {
      type: 'section',
      title:
        "6. Does the company require external entities that provide goods or services under contract (for example: contractors, subcontractors, suppliers) to abide by the company's anti-corruption programme or supplier code?",
      text: [
        "The Company's ABC Policy explicitly applies for external entities that provide goods and services under contracts to comply with company's ABC policy requirements. Regular AML and ABC Due diligence are conducted on all business partners including external entities that provide goods and services under contracts.",
      ],
    },
    {
      type: 'section',
      title:
        '7. Does the company have in place an anti-corruption training programme for its employees and directors?',
      text: [
        "The Board and Senior Management participated in a comprehensive training session, focusing on Anti-Bribery and corruption. The training addressed current and potential risks, aiming to enhance the Company's anti-bribery and corruption programmes. Further, periodic e-flyers related to ABC have been circulated through e-mails among all employees aiming continuous awareness and compliance.",
        'ABC Policy was communicated to all employees of the Company. Refer page 272.',
      ],
    },
    {
      type: 'section',
      title:
        '8. Does the company have a policy on gifts, hospitality and expenses?',
      text: [
        "These guiding principles are supported by a company ABC policy, Policy on Managing Conflicts of Interests and code of conduct dealing with anti-bribery and corruption, including conflicts of interests, gifts and hospitality, facilitation payments, hosting of customer events, marketing sponsorships, and due diligence of third party service providers. In addition, receiving or giving/ offering gifts and hospitality that is excessive, inappropriate, in breach of applicable laws and LBF policies, can be damaging to LBF's reputation, create conflicts of interests, and harm our business relationships. Suppliers shall not use third parties to perform illegal and improper activities, whether directly or indirectly on their behalf like paying bribes or making facilitation payments.",
      ],
    },
    {
      type: 'section',
      title:
        '9. Does the policy on gift and hospitality or expenses include a definition of threshold (descriptive or quoted as amounts) as well as procedures and reporting requirements?',
      text: [
        'The ABC policy, Policy on Managing Conflicts of Interests and code of conduct set out definitions of descriptive thresholds and outline the procedures to be followed when such situation is arose. Additionally, these documents specify the obligations for reporting such incidents and the channels through which they should be reported.',
      ],
    },
    {
      type: 'section',
      title:
        '10. Is there a policy that explicitly prohibits facilitation payments?',
      text: ['Refer point 8 above'],
    },
    {
      type: 'section',
      title:
        '11. Does the company provides a mechanism/channel through which employees can report suspected act of corruption or breaches of anti corruption policies, and does mechanism/channel allow for confidential and/or anonymous reporting (whistle blowing)?',
      text: [
        'Board approved whistle blowing policy is in place. Frequent awareness campaigns are conducted through various means to encourage the reporting of suspected wrongdoings, acts of corruption or breaches of anti-corruption policies. It allows for confidential and/or anonymous reporting (whistle-blowing) and there is a two-way communication with the whistle blower for any needed follow up on the disclosure.',
        'The compliance officer submitted a confidential report on quarterly basis to the members of the BAC on of any whistleblowing and actions taken in compliance with the policy.',
        'Awareness programmes were carried out to build employee capacity and help them to develop a sensitivity to situations of real or perceived conflict of interest and learn how to deal with them when they arise.',
      ],
    },
    {
      type: 'section',
      title:
        '12. Does the whistle blowing mechanism/channel enable employees and other to raise concerns and report suspected acts of corruption or breaches of anti corruption policies without of risk of reprisal?',
      text: [
        'The policy on whistleblowing clearly outlines the process for reporting or raising concerns about suspected acts of corruption or violations of anti-corruption policies, ensuring that individuals can do so without fear of retaliation.',
        'No incidents have been reported during the year.',
        'The BAC remains committed to follow-up on any future complaints/incidents, should they occur. No employee would suffer demotion, penalty or other reprisals for raising concerns or reporting violation.',
      ],
    },
    {
      type: 'section',
      title:
        '13. Does the mechanism/channel provide for two way communication with the whistle blower for any needed follow up on the concern/s raised?',
      text: [
        'Regular awareness campaigns are implemented using diverse methods to promote the reporting of suspected misconduct, corruption, or violations of anti-corruption policies. These campaigns enable individuals to report confidentially and/or anonymously (whistleblowing), and establish a two-way communication channel with whistleblowers for any necessary follow-up on the information disclosed.',
      ],
    },
    {
      type: 'section',
      title:
        "14. Does the company carry out regular monitoring of its anti-corruption programme to review the programme's suitability, adequacy and effectiveness, and implement improvements as appropriate?",
      text: [
        'A process is in place to carry out annual review of anti-corruption programme to ensure the suitability, adequacy and effectiveness of the ABC programme.',
        'The process of mitigating the ABC risk through three (3) lines of defense are stated below,',
        'Assessing Bribery and Corruption Risk (BC Risk)',
        '• Bribery and corruption risks to business operations of the company where applicable shall be identified, periodically assessed, monitored and managed effectively by the respective process owners in order to maintain a strong control system.',
        'Role of the Risk Department: Each business unit should assess the BC risk when carrying out their respective Risk Assessment which is rolled out and reviewed by the Risk Department.',
        '• Role of Compliance Department: Compliance being an independent function will monitor non-compliance of this policy with relevant reporting by the respective business unit or the Human Resource Department or as detected by the Internal Audit Department and with the related Risk assessment reviewed by the Risk Department and company takes appropriate action to address policy violations.',
        '• Head of Compliance being the subject policy owner will report any Non-compliance of this policy to the Board Audit Committee (BAC) on a Quarterly basis.',
        '• Role of Internal Audit: Internal Audit being an independent function from the business operations, will carry out the audit function in line with the Board approved Audit methodology for providing the assurance. As per board approved annual plan, required verifications/tests are conducted to assess the adequacy of the controls established within the entity.',
      ],
    },
    {
      type: 'section',
      title:
        '15. Does the company have a policy on political contributions that either prohibits such contributions or if it does not, requires such contributions to be publicly disclosed?',
      text: [
        'The Company has a policy on political contribution that prohibits political sponsorships/contributions. This aspect clearly covers in the ABC policy.',
      ],
    },
    {
      type: 'section',
      title: '16. Does the company disclose its ultimate beneficial owner/s?',
      text: [
        'A process is in place to identify Ultimate Beneficial Owners of the company and is disclosed in the Annual report of the Company.',
      ],
    },
    {
      type: 'section',
      title:
        '17. Which of the following information does the company disclose for all of its fully consolidated subsidiaries? 17 full list with names',
      text: [
        'Refer Principal Business Activity, nature of operations of the group and ownership by the company in its subsidiary on pages 31 and 549. ',
      ],
    },
    {
      type: 'section',
      title: '18 percentages owned in each of them',
      text: [
        'Refer Principal Business Activity, nature of operations of the group and ownership by the company in its subsidiary on page 549.',
      ],
    },
    {
      type: 'section',
      title: '19 Countries of incorporation (for each entity)',
      text: [
        'Refer Investment in Subsidiary on page 358 Refer Annual report of the Board of Directors on the Affairs of the Company on page 282.',
      ],
    },
    {
      type: 'section',
      title: '20. Does the company disclose countries of operations?',
      text: [
        'Refer Investment in Subsidiary on page 358 Refer Annual report of the Board of Directors on the Affairs of the Company on page 282.',
      ],
    },
    {
      type: 'section',
      title:
        'Which of the following information does the company disclose for all of its non fully consolidated holdings, such as associates, joint-ventures?',
      text: [],
    },
    {
      type: 'section',
      title: '21. Full list with names',
      text: ['N/A'],
    },
    {
      type: 'section',
      title: '22. Percentages owned in each of them',
      text: ['N/A'],
    },
    {
      type: 'section',
      title: '23. Country of incorporation (for each entity)',
      text: ['N/A'],
    },
    {
      type: 'section',
      title: '24. Country of operations',
      text: ['N/A'],
    },
    {
      type: 'section',
      title: '25. Does the company disclose its revenue/sales in Sri Lanka?',
      text: [
        'LB Microfinance Myanmar Limited - Rs. 353 Mn. (Refer segmental information in Notes to the financial statements on page 452)',
      ],
    },
    {
      type: 'section',
      title:
        '26. Does the company disclose its capital expenditure in Sri Lanka?',
      text: [
        'LB Microfinance Myanmar Limited - Rs. 20.5 Mn. (Refer segmental information in Notes to the financial statements on page 452)',
      ],
    },
    {
      type: 'section',
      title: '27. Does the company disclose its pre-tax income in Sri Lanka?',
      text: [
        'LB Microfinance Myanmar Limited - Rs. 68.9 Mn. (Refer segmental information in Notes to the financial statements on page 452)',
      ],
    },
    {
      type: 'section',
      title: '28. Does the company disclose its income tax in Sri Lanka?',
      text: [
        'LB Microfinance Myanmar limited has not paid any taxes during the financial year owing to a carried forward tax over payment made in the previous financial year. Total tax payable for current financial year Rs. 14.7 Mn. Tax paid Rs. 15.7 Mn.',
      ],
    },
    {
      type: 'section',
      title:
        '29. Does the Company disclose its community contribution in Sri Lanka?',
      text: ['Refer social and relationship capital on page 184.'],
    },
    {
      type: 'section',
      title:
        '30. Does the Company have a publicly stated policy against sexual harassment?',
      text: [
        'Board approved HR policy of the company include the zero tolerance against sexual harassments or equivalents. The company is committed to fight any form of harassment at the work place.',
      ],
    },
    {
      type: 'section',
      title:
        '31. Does the company have an explicit, publicly stated commitment to non-discrimination based on gender?',
      text: [
        "Board approved HR policy of the company include the company's commitment to non discrimination based on the gender.",
      ],
    },
    {
      type: 'section',
      title:
        '32. Does the Company adopt a gender inclusive/equal opportunity recruitment policy?',
      text: [
        'An explicit commitment to non-discrimination on the basis of gender is in place when recruiting new employees to the company. 47% (2023/24 - 46%) of the workforce is females which shows a continuous improvement. Refer Human Capital in the Annual report on page 150.',
      ],
    },
    {
      type: 'section',
      title:
        '33. Does the Company adopt a gender inclusive/equal opportunity promotion policy?',
      text: [
        'There is an explicit commitment in the HR policy on non-discrimination on the basis of gender when promoting employees. 50% of the employees promoted during 2024/25 are female employees.',
      ],
    },
    {
      type: 'section',
      title:
        '34. Does the company have a policy for bidding on government contracts/tenders?',
      text: [
        'Not Applicable.',
        'The company does not engage for bidding on government contracts/tenders',
      ],
    },
    {
      type: 'section',
      title:
        '35. Does the company disclose its current contracts with local and/or foreign governments?',
      text: [
        'Not Applicable.',
        'The company does not engage in any contract with local and/ or any foreign government',
      ],
    },
    {
      type: 'section',
      title:
        '36. Does the company publish tendering and post award documents for government contracts and awarded tenders?',
      text: [
        'Not Applicable.',
        'The company does not engage in any business transactions with the Government',
      ],
    },
    {
      type: 'section',
      title:
        '37. Does the company disclose audited financial accounts for government contracts and awarded tenders?',
      text: [
        'Not Applicable.',
        'The company does not engage in any business transactions with the Government',
      ],
    },
  ];

  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6 rounded-lg">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
          <div className="bg-[#fcf7ef] rounded-lg p-6 text-[#000]">
            {content.map((item, index) => (
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
                  </>
                )}

                {/* Table Section */}
                {item.type === 'table' && item.table && (
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full border border-[#0A3D5F]">
                      <thead>
                        <tr className="bg-[#0A3D5F] text-white">
                          {item.table.headers.map((header, i) => (
                            <th
                              key={i}
                              className="p-2 text-left border border-[#0A3D5F]"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {item.table.rows.map((row, i) => (
                          <tr
                            key={i}
                            className={
                              i % 2 === 0 ? 'bg-white' : 'bg-[#f0f0f0]'
                            }
                          >
                            {item.table &&
                              item.table.headers.map((header, j) => (
                                <td
                                  key={j}
                                  className="p-2 border border-[#0A3D5F] text-sm"
                                >
                                  {row[header]}
                                </td>
                              ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Columns Section */}
                {item.type === 'columns' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {item.columns?.map((column, i) => (
                      <div key={i} className="bg-[#daa765] p-4 rounded-lg">
                        <h3 className="font-bold text-[#0A3D5F] mb-2">
                          {column.title}
                        </h3>
                        {column.content && (
                          <div className="text-sm text-black mb-3 whitespace-pre-line">
                            {column.content}
                          </div>
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

                {/* List Section */}
                {item.type === 'list' && (
                  <div className="mb-6">
                    {item.title && (
                      <h3 className="text-lg font-bold mb-2 text-[#F3A847]">
                        {item.title}
                      </h3>
                    )}
                    <ul className="list-disc pl-5 text-sm text-black">
                      {item.items?.map((listItem, i) => {
                        let listContent;
                        if (typeof listItem === 'string') {
                          listContent = listItem;
                        } else if (listItem.title) {
                          listContent = (
                            <>
                              <span className="font-semibold">
                                {listItem.title}:
                              </span>{' '}
                              {listItem.content}
                            </>
                          );
                        } else {
                          listContent = JSON.stringify(listItem);
                        }
                        return (
                          <li key={i} className="mb-2">
                            {listContent}
                          </li>
                        );
                      })}
                    </ul>
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
