import Section4 from '@/components/content/gir/Section168';
import Section2 from '@/components/content/sustainable-development/humanCapital/part11';
import Section3 from '@/components/content/sustainable-development/humanCapital/part12';
import Section1 from '@/components/content/sustainable-development/humanCapital/part8';

export default function GRIReporting34() {
  const tableContent = [
    {
      key: 'A.8.2',
      heading: 'Re-election of Chairman and other Directors',
      status: 'Complied',
      para: [
        'The provisions of the Company&#39;s Articles of Association also require Directors appointed by the Board to hold office until the next AGM and seek appointment by the shareholders at that meeting.',
        'When the Chairman and other Directors submit themselves for re-election or reappointment, minimal disclosures as defined in this code are made to all shareholders to make informed decisions on their election. The fitness and proprietary of each Director are reviewed by the BNGC and make recommendations for re-election.',
      ],
    },
    {
      key: 'A.8.3',
      heading: 'Resignation',
      status: 'Complied',
      para: [
        'A process is in place, if a Director who wish to resign prior to completion of appointed term. However, there were no such resignations during the year.',
      ],
    },
    {
      key: 'A.9',
      heading: 'Appraisal of Board & Sub Committees&#39; Performance',
      status: 'Complied',
      para: [
        'The Board has appraised their own performance through annual self-evaluation process in order to ensure that Board responsibilities are satisfactorily discharged.',
      ],
    },
    {
      key: 'A.9.1',
      heading: 'Appraisal of Board performance',
      status: 'Complied',
      para: [
        'The Board and Board appointed Sub-Committees annually appraise their own performance to ensure that they are discharging their responsibilities satisfactorily. This process requires each Director to fill Board Performance Evaluation Forms in line with this section of the Code.',
        'The responses are reviewed by the Company Secretary who collates them and submits it to the Chairman for necessary action as appropriate as decided by the Board.',
      ],
    },
    {
      key: 'A.9.2',
      heading: 'Annual self-evaluation by the Board of its Sub Committees',
      status: 'Complied',
      para: [
        'A formal process is in place for the Board and its Sub Committee to carry out self-evaluations to determine the effectiveness of their performance.',
        'The Board as a whole performed an annual self-assessment to evaluate the overall effectiveness of LBF Board according to the criteria set out alongside. The feedback from Directors is collated and reviewed by the Board and BNGC and conveyed to the Chairman of the Board for discussion at the Board meeting. All Sub Committees have performed self-evaluations of their performance during 2023/24 and areas identified for improvements are also discussed at their respective meetings and updated the Board by respective Chairperson.',
      ],
    },
    {
      key: 'A.9.3',
      heading: 'Review of each Director at the time of re-election',
      status: 'Complied',
      para: [
        'The Board has a process to review the participation, contribution and engagement of each Director at the time of re-election.',
      ],
    },
    {
      key: 'A.9.4',
      heading:
        'Disclosure in the Annual Report about the Board&#39;s performance evaluation methodology',
      status: 'Complied',
      para: [
        'Board approved procedure is in place to evaluate the performance of Chairman, CEO/MD and other members of the Board and its sub-committees. The process adopted by LBF is detailed on page 177 of this report.',
      ],
    },
    {
      key: 'A.10',
      heading:
        'Annual Report to Disclose Specified Information Regarding Directors',
      status: 'Complied',
      para: [
        'Shareholders are kept informed about the relevant details in respect of Directors.',
      ],
    },
    {
      key: 'A.10.1',
      heading: 'Annual Report disclosures in respect of Directors',
      status: 'Complied',
      para: [
        'Profiles of the Board of Directors are given on pages 156 to 160 including other Directorships held by the Directors and memberships of Board Committees. Directors&#39; attendance is disclosed on page 174.',
      ],
    },
    {
      key: 'A.11',
      heading: 'Appraisal of CEO/MD',
      status: 'Complied',
      para: [
        'As required in this code, the Board assess the performance of CEO/MD at least annually.',
      ],
    },
    {
      key: 'A.11.1/A.11.2',
      heading:
        'Targets for CEO at the commencement of each financial year and performance evaluation',
      status: 'Complied',
      para: [
        'CEO/MD7#39;s performance targets are aligned with business strategies of the Company. Financial and non-financial targets are set at the beginning of every financial year by the Board which is in line with the short- medium- and long-term objectives of the Company. At the end of each financial year the Board evaluates the set targets and the actual performance.',
      ],
    },
  ];

  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
          <Section1 />
          <div className="mt-6">
            <Section2 />
          </div>
          <div className="mt-6">
            <Section3 />
          </div>
          <div className="mt-6">
            <Section4 />
          </div>

          <div className="mt-8">
            {tableContent.map((content) => (
              <div
                key={content.key}
                className="bg-white text-black p-4 rounded-lg mb-4"
              >
                <h3 className="text-xl font-bold mb-2">
                  {content.key}
                  {') '}
                  {content.heading}
                </h3>
                {content.para.length > 0 && (
                  <>
                    <p>
                      Compliance Status: <strong>{content.status}</strong>
                    </p>
                    {content.para.map((para, index) => (
                      <p key={index} className="mt-2">
                        {para}
                      </p>
                    ))}
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
