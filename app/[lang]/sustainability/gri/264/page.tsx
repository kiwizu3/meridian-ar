export default function BoardRolesResponsibilities() {
  // Content data structure
  interface ContentItem {
    type: string;
    title?: string;
    text?: string | string[];
    items?: string[];
    image?: {
      src: any;
      alt: string;
    };
  }

  // Main content
  const boardContent: ContentItem[] = [
    {
      type: 'header',
      title: '5.3 Roles, Responsibilities & Board Balance',
    },
    {
      type: 'principle',
      text: "CASL Code Principle (A.5) It is preferable for the Board to have a balance of Executive and Non-Executive Directors such that no individual or small group of individuals can dominate the Board's decision-taking.",
    },
    {
      type: 'section',
      title: 'a. Board Balance (A.5/A.5.1)',
      text: [
        'The Board consists of 12 Directors, with 8 serving as Non-Executive Directors. Of these, 5 Non-Executive Directors are independent, as defined by both regulatory and voluntary independence criteria. The profiles of the Directors and their current appointments can be found on pages 256 to 259.',
        "The Articles specify that the Board must have between 3 and 12 Directors. Together, the Board brings a diverse range of skills and experience, enabling effective guidance and oversight of LBF's operations. Furthermore, the Board's diversity in gender, age, and tenure reflects the work of the BNGC in ensuring a wide range of perspectives in its discussions.",
      ],
    },
    {
      type: 'section',
      title: 'b. Role and Responsibilities of the Board (A.1.2/A.1.6)',
      items: [
        "Formulate and implement a clear, robust business strategy aligned with the company's long-term vision, market positioning, and growth ambitions.",
        'Appoint the Chair, Senior Independent Director (if applicable), and ensure the CEO and management team possess the necessary skills, experience, and leadership capabilities.',
        "Approve annual budgets, major capital expenditures, and investment proposals, ensuring alignment with strategic priorities and the company's financial capacity.",
        'Clearly define matters reserved for the Board and those delegated to management, including authority limits and accountability frameworks.',
        'Ensure the establishment of effective systems to safeguard information integrity, maintain strong internal controls, manage key risks (including cybersecurity), and ensure business continuity across operations.',
        "Oversee the development and implementation of an ICT roadmap that supports the company's strategic goals.",
        'Ensure the company complies with all relevant laws, regulations, and ethical standards.',
        "Integrate ESG risks and opportunities into the company's strategy and operations, recognising the importance of sustainable business practices and considering the adoption of integrated reporting frameworks.",
      ],
    },
    {
      type: 'section',
      title:
        'In discharging their duties, the Board also reserves the exclusive right to review and approve the following:',
      items: [
        'Evaluating and approving of the Strategic Plan',
        "Evaluating and approving of the LBF's Annual Budget",
        'Appointment of the MD/CEO of LBF, its Key Responsible Personnel and the CEOs of all its Subsidiaries',
        'Approval of the succession plan for the Senior Management including MD/CEO',
        'Determine and approve the organisation structure',
        'Evaluating and approval of any type of strategic decisions',
        'Appointment of Board Sub Committees and defining their scope of work and the extent of delegated powers and authority for them',
      ],
    },
  ];

  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6 rounded-lg">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
          <div className="bg-[#fcf7ef] rounded-lg p-6">
            {boardContent.map((item, index) => (
              <div key={index} className="mb-8 last:mb-0">
                {/* Header Section */}
                {item.type === 'header' && (
                  <h1 className="text-2xl font-bold mb-4 text-[#0A3D5F]">
                    {item.title}
                  </h1>
                )}

                {/* Principle Section */}
                {item.type === 'principle' && (
                  <div className="bg-[#daa765] p-4 rounded-lg mb-6">
                    <p className="text-sm font-medium text-black">
                      {item.text}
                    </p>
                  </div>
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
                      <ul className="list-disc pl-5 space-y-2 text-sm text-black">
                        {item.items.map((listItem, i) => (
                          <li key={i}>{listItem}</li>
                        ))}
                      </ul>
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
