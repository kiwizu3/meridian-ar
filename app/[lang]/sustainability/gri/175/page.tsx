export default function GRIReporting7() {
  const atTheBoardMeeting = [
    'The Chairman plays a key role in promoting open and active debate among Directors',
    'The Chairpersons of each Board committee will be called upon to provide an update on significant matters discussed at their respective Board sub-committee meetings',
    "The Managing Director provides a comprehensive update on the Company's business and operations and overview of the context in which these outcomes were achieved",
    'The Chief Financial Officer provides the Board with detailed monthly financial performance reports',
    'Other Business heads are invited to provide updates on business aspects under their purview',
    "Directors' interests and related party transactions are tabled at Board Meetings",
    'In a situation where a conflict of interest arises, the relevant Director shall recuse from the discussions and refrain voting on such matter',
    'Directors who are unable to attend a Board meeting in person are allowed to participate through virtual means',
    'The Company secretary maintains the minutes with adequate information',
  ];

  const afterTheBoardMeeting = [
    'Minutes are first presented to the Chairman for approval prior to being circulated among the Directors',
    'Minutes of the meetings are circulated within two weeks after the meeting date',
    'Strong emphasis is placed on encouraging continuous and ongoing engagement of Directors in the matters of the Company',
    'Directors have access to senior management and may request any additional information to make informed and timely decisions',
    "The Managing Director keeps the Board updated on LB's performance and prospects vis-a-vis the prevailing economic and regulatory climate",
    'Special Board meetings are also convened on occasion as and when the need arises',
  ];

  const informationAndTraining = {
    information: [
      'The Chairman ensures that the Board has sufficient information provided in a timely manner to be discussed at the meeting. He is assisted in this by the CEO and the Company Secretary.',
      'Additionally, the Directors have access to the key management personnel to clarify matters set before them.',
      'The Chairpersons of the Board Committees also follow the same procedure for their meetings.',
      'The Senior Leadership of the Company take care to provide information in a concise but comprehensive manner, using reliable and verifiable sources of information where possible.',
      'Regular agenda items typically have well established formats that facilitate location of information and ease of review.',
    ],
    training: [
      'All new Directors have an induction programme which is determined by the Chairman, CEO and the Company Secretary.',
      'New Directors receive an orientation pack with relevant external and internal documentation to ensure they have the requisite knowledge of the company and its operations.',
      'Directors are also given the opportunity to meet with the Senior Management.',
      'Directors further benefit from regular training programmes throughout their tenure to support ongoing knowledge enhancement and also to inform them of economic, regulatory and industry trends.',
      'Each Director receives adequate training hours annually.',
      'During the year following training sessions were conducted to the Board of Directors:',
      '- AML/CFT regulations',
      '- Information and cyber security risk awareness',
      '- Laws and regulations surrounding Personal Data Protection',
      '- Potential risk of Robotics Process Automation',
    ],
  };

  const inductionPack = [
    'Articles of Association',
    'Latest annual report and quarterly financial statements',
    'Minutes of the previous meeting',
    'Code of Conduct',
    'Board Charter and other key policies',
  ];

  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
          <div className="bg-white text-blue rounded-lg p-6 ">
            <h3 className="text-xl font-bold mb-2">AT THE BOARD MEETING</h3>
            <ul className="list-disc pl-5">
              {atTheBoardMeeting.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After The Board Meeting Section */}
          <div className="bg-white text-blue rounded-lg p-6 ">
            <h3 className="text-xl font-bold mb-2">AFTER THE BOARD MEETING</h3>
            <ul className="list-disc pl-5">
              {afterTheBoardMeeting.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Information and Training Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white text-blue rounded-lg p-6 ">
              <h3 className="text-xl font-bold mb-2">Information</h3>
              <ul className="list-disc pl-5">
                {informationAndTraining.information.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white text-blue rounded-lg p-6 ">
              <h3 className="text-xl font-bold mb-2">Training & Induction</h3>
              <ul className="list-disc pl-5">
                {informationAndTraining.training.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Induction Pack Section */}
          <div className="bg-white text-blue rounded-lg p-6 ">
            <h3 className="text-xl font-bold mb-2">Induction Pack</h3>
            <ul className="list-disc pl-5">
              {inductionPack.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Managing Conflicts of Interest Section */}
          <div className="bg-white text-blue rounded-lg p-6 ">
            <h3 className="text-xl font-bold mb-2">
              MANAGING CONFLICTS OF INTERESTS
            </h3>
            <p>
              The Board has implemented a formal Conflict of Interest Policy
              that sets out clear guidelines to ensure that the Board of
              Directors, Senior Management, and all employees are well aware of
              the steps that need to be taken to avoid any conflict of interest.
              Directors are expected to exercise utmost good faith, honesty, and
              integrity in all their dealings with or on behalf of the Company.
              They are required to act in the Company’s best interests by
              disclosing real or perceived conflicts to the Board.{' '}
            </p>
            <p>
              All Directors are expected to disclose any potential conflicts of
              interest in their annual declarations and also before any meeting
              where a potential conflict may arise. The Company Secretary
              maintains a Register of Interests which is updated if there are
              any new declarations. Related party transactions are reviewed by
              the Related Party Transactions Review Committee and any
              transactions that require disclosure under the Listing Rules are
              disclosed as specified. These are disclosed in Note 3.1 of the
              financial statements on page 318.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
