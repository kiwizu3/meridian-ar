export default function NominationSuccession() {
  // Content data structure
  interface ContentItem {
    type: string;
    title?: string;
    text?: string | string[];
    items?: {
      title: string;
      content: string;
    }[];
    image?: {
      src: any;
      alt: string;
    };
  }

  // Main content
  const nominationContent: ContentItem[] = [
    {
      type: 'header',
      title: '5.5 Nomination, Selection, Re-election and Succession',
    },
    {
      type: 'section',
      title: 'a. Appointments and Re-elections',
      text: [
        'CASL Code Principle (A.7) Board should establish a formal and transparent procedure for the appointment of new Directors to the Board.',
        'CASL Code Principle (A.8) All directors should be required to submit themselves for re-election at regular intervals and at least once in every three years.',
        "The Board Nominations and Governance Committee plays a crucial role in identifying and recommending candidates for appointment as Directors. The Committee evaluates the skills, expertise, and attributes necessary to support the Company's business needs and actively searches for individuals who meet these requirements.",
        'All potential candidates undergo a vetting and screening process against fit and proper standards, and for Independent Directors, additional criteria to assess independence are applied. Candidates who satisfy the relevant criteria are then recommended to the Board for approval.',
        "Non-Executive Directors are appointed by shareholders and are subject to retirement and re-election at the Annual General Meeting (AGM), following a brief review of each director's participation, contribution, and engagement in discharging their duties. Executive Directors, meanwhile, are appointed by the Board and typically serve for the duration of their employment contracts. Executive Directors who reach the age of 70 must be re-appointed annually at the AGM, with approval from CBSL.",
        "Non-Executive Directors who either directly or indirectly hold more than 10% of the Company's shares, or who are appointed to represent such shareholders, may serve beyond nine years, subject to approval by the Director, Department of Supervision of Non-Bank Financial Institutions, CBSL. However, the number of Directors serving more than nine years must not exceed one-fourth of the Board.",
        'The Board is also authorised to fill any casual vacancies arising during the year. In such cases, the Board Nominations & Governance Committee will recommend a candidate subject to fit and proper assessment, whose appointment must be vetted and approved by the Board. Directors appointed during the year must retire at the next AGM and may offer themselves for re-election by shareholders at that meeting.',
        'All Director appointments are subject to approval by the Director, Department of Supervision of Non-Bank Financial Institutions, CBSL. Furthermore, every new appointment must be notified to the CSE along with a brief profile of the Director, clearly indicating the capacity in which they are appointed.',
      ],
    },
    {
      type: 'section',
      title: 'b. Retirement and Resignations (A.8.3)',
      text: [
        "Each year, one-third of the Directors eligible for re-election must retire, with the longest-serving Directors retiring first. These Directors may offer themselves re-election by shareholders at the Annual General Meeting, with a separate resolution presented for each Director's re-election.",
        "Non-Executive Directors generally retire after serving nine years, except for those who directly or indirectly hold more than 10% of the Company's shares or represent such shareholders.",
        'Refer Report of the Board of Directors on the Affairs of the Company on page 282.',
        'Directors may also resign at any time by submitting a written notice to the Chairman, stating the reasons for their resignation. The resignation becomes effective upon formal acceptance and approval by the Director, Department of Supervision of Non-Bank Financial Institutions.',
        "The Colombo Stock Exchange (CSE) is immediately notified of any resignation or retirement, along with disclosure of the Director's shareholding in the Company, if applicable.",
      ],
    },
    {
      type: 'section',
      title: 'c. Succession (A.7.3)',
      text: [
        'The Company has in place a Board-approved succession plan designed to ensure leadership continuity and minimise disruption to governance and operations. This plan identifies potential successors for each member of the Board as well as key responsible persons within the organisation.',
        "The succession plan considers factors such as experience, skills, leadership qualities, and alignment with the Company's strategic objectives. It is reviewed periodically to remain aligned with the evolving needs of the business and regulatory requirements.",
        'By proactively planning for leadership transitions, the Company ensures stability, preserves institutional knowledge, and maintains the confidence of stakeholders, regulators, and shareholders.',
      ],
    },
  ];

  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6 rounded-lg">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
          <div className="bg-[#fcf7ef] rounded-lg p-6">
            {nominationContent.map((item, index) => (
              <div key={index} className="mb-8 last:mb-0">
                {/* Header Section */}
                {item.type === 'header' && (
                  <h1 className="text-2xl font-bold mb-4 text-[#0A3D5F]">
                    {item.title}
                  </h1>
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
                    {item.items && (
                      <div className="mt-4">
                        {item.items.map((listItem, i) => (
                          <div key={i} className="mb-3">
                            <h3 className="font-semibold text-[#0A3D5F]">
                              {listItem.title}
                            </h3>
                            <p className="text-sm text-black">
                              {listItem.content}
                            </p>
                          </div>
                        ))}
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
