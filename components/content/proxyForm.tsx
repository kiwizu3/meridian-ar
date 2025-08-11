import React from 'react';

interface Candidate {
  name: string;
  failText: string;
}

interface Resolution {
  content: string;
}

const candidates: Candidate[] = [
  {
    name: 'Mr. Godewatta Arachchige Rasika Dimuth Prasanna',
    failText: 'or failing him*',
  },
  {
    name: 'Mr. Moderage Ashane Joseph Waas Jayasekara',
    failText: 'or failing him*',
  },
  {
    name: 'Mr. John Anthony Sunil Sumith Adhihetty',
    failText: 'or failing him*',
  },
  { name: 'Mr. Niroshan Udage', failText: 'or failing him*' },
  { name: 'Mr. Biyanwilage Dudley Auburn Perera', failText: 'or failing him*' },
  { name: 'Mr. Ravindra Shanaka Yatawara', failText: 'or failing him*' },
  { name: 'Ms. Yogadinusha Bhaskaran', failText: 'or failing her*' },
  { name: 'Ms. Ashwini Natesan', failText: 'or failing her*' },
  { name: 'Mr. Dharmadasa Rangalle', failText: 'or failing him*' },
  { name: 'Ms. Yanika Amarasekera', failText: '' },
];

const resolutions: Resolution[] = [
  {
    content:
      'To re-elect Ms. Ashwini Natesan as a Director in terms of Articles 85 and 86 of the Articles of Association of the Company.',
  },
  {
    content: `To pass the ordinary resolution set out below to re-appoint Mr. John Anthony Sunil Sumith Adhihetty who
is 73 years of age, as a Director of the Company;
“IT IS HEREBY RESOLVED THAT the age limit stipulated in Section 210 of the Companies Act No.07 of 2007
shall not apply to Mr. John Anthony Sunil Sumith Adhihetty who attained the age of 73 years on 4th July
2023 and that he be and is hereby re-appointed a Director of the Company.”`,
  },
  {
    content:
      "To appoint Messrs KPMG, Chartered Accountants as the Company's Auditors and to authorise the Directors to determine their remuneration.",
  },
  {
    content:
      'To authorize the Directors to determine donations for the Financial Year ending 31st March 2025 and up to the date of the next Annual General Meeting.',
  },
];

const ProxyForm: React.FC = () => {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto grid grid-cols-1 gap-6">
      <div className="container mx-auto px-4 py-8 text-blue">
        <form className="bg-white shadow-md rounded-lg p-6">
          <p className="mb-4">
            I/We* ____________________________________________ (holder of
            NIC/Passport/Company Registration No. _______________________) of
            ________________________________________________ shareholder/s of LB
            FINANCE PLC hereby appoint
            _________________________________________________ (holder of NIC No.
            _________________________________) of
            ________________________________________________
          </p>
          <p className="mb-4">or failing him/her*</p>
          <ul className="list-disc list-inside mb-4">
            {candidates.map((candidate, index) => (
              <li key={index}>
                {candidate.name}{' '}
                <span className="italic">{candidate.failText}</span>
              </li>
            ))}
          </ul>
          <p className="mb-4">
            as my/our* proxy to represent me/us* to speak and to vote as
            indicated hereunder for me/us* and on my/our* behalf at the Fifty
            First (51st) Annual General Meeting of the Company to be held on
            28th June 2024 and at every poll which may be taken in consequence
            of the aforesaid meeting and at any adjournment thereof.
          </p>
          <div className="mb-4">
            {resolutions.map((resolution, index) => (
              <div key={index} className="mb-6">
                <p>
                  {index + 1}. {resolution.content}
                </p>
                <div className="flex items-center space-x-8 mt-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>For</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Against</span>
                  </label>
                </div>
              </div>
            ))}
          </div>
          <p className="mb-8">
            In witness my/our* hands this ________________ day of
            ________________ Two Thousand and Twenty Four.
          </p>
          <p className="mb-4">
            _________________________________
            <br />
            Signature of Shareholder/s
          </p>
          <p className="text-sm text-gray-600">
            *Please delete what is inapplicable.
          </p>
        </form>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-xl font-semibold text-white">
            Instructions for completion
          </h2>
          <ul className="list-decimal list-inside">
            <li>
              The Full name, National Identity Card / Passport / Company
              Registration number (as applicable) and the registered address of
              the shareholder appointing the Proxy and the relevant details of
              the Proxy [Full name, National Identity Card / Passport No. and
              the address] should be legibly entered in the Form of Proxy which
              should be duly signed and dated.
            </li>
            <li>
              The completed Proxy should be deposited at the Registered Office
              of the Company, No.275/75, Professor Stanley Wijesundera Mawatha,
              Colombo 07, by 8.30 a.m. on 26th June 2024.
            </li>
            <li>
              The Proxy shall: <br />
              <br />
              (a) In the case of an individual be signed by the shareholder or
              by his/her attorney, and if signed by an Attorney, a notarially
              certified copy of the Power of Attorney should be attached to the
              completed Proxy if it has not already been registered with the
              Company. <br />
              (b) In the case of a company or corporate/statutory body either be
              under its Common Seal or signed by its Attorney or by an Officer
              on behalf of the company or corporate/statutory body in accordance
              with its Articles of Association or the Constitution or the
              Statute (as applicable).
            </li>
            <li>
              Please indicate with a &#39;X&#39; how the Proxy should vote on
              each resolution. If no indication is given, the Proxy in his/her
              discretion will vote as he/she thinks fit.
            </li>
            <li>
              Articles 59 to 62 of the Articles of Association of the Company
              dealing with voting are quoted below for information of the
              shareholders.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">
            59 METHOD OF VOTING
          </h2>
          <p>
            At any General Meeting a resolution put to the vote of the meeting
            shall be decided on a show of hands unless a poll is (before or on
            the declaration of the result of the show of hands) demanded by:
          </p>
          <ul className="list-disc list-inside">
            <li>the Chairman of the meeting; or</li>
            <li>
              not less than three persons present in person or by Attorney or
              representative or by proxy and entitled to vote; or
            </li>
            <li>
              a Member or Members present in person or by Attorney or
              representative or by proxy and representing not less than one
              tenth of the total voting rights of all the Members having the
              right to vote at the meeting; or
            </li>
            <li>
              a Member or Members present in person or by attorney or
              representative or by proxy and holding shares in the Company
              conferring a right to vote at the meeting being shares on which an
              aggregate sum has been paid up equal to not less than one tenth of
              the total sum paid up on all the shares conferring that right.
            </li>
          </ul>
          <br />
          <p>
            A demand for a poll may be withdrawn, unless a poll be demanded (and
            the demand be not withdrawn) a declaration by the Chairman of the
            meeting that a resolution has been carried, or carried unanimously,
            or by a particular majority, or lost, and an entry to that effect in
            the minute book, shall be conclusive evidence of the fact without
            proof of the number or proportion of the votes recorded for or
            against such resolution.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">
            60 HOW A POLL IS TO BE TAKEN
          </h2>
          <p>
            If a poll is duly demanded (and the demand be not withdrawn), it
            shall be taken in such manner (including the use of ballot or voting
            papers or tickets) as the Chairman of the meeting may direct, and
            the results of a poll shall be deemed to be the resolution of the
            meeting at which the poll was demanded. The Chairman may (and if so
            requested shall) appoint scrutinisers and may adjourn the meeting to
            some place and time fixed by him for the purpose of declaring the
            result of the poll.
          </p>
        </div>
        <div>
          <p>
            In the case of an equality of votes, whether on a show of hands or
            on a poll, the Chairman of the meeting at which the show of hands
            takes place or at which the poll is demanded shall be entitled to a
            second or casting vote.
          </p>
        </div>
        <div>
          <p>
            A poll demanded on the election of a Chairman of the meeting or on a
            question of a adjournment shall be taken forthwith. A poll demanded
            on any other question shall be taken either immediately or at such
            subsequent time (not being more than thirty days from the date of
            the meeting) and place as the Chairman may direct. No notice need be
            given of a poll not taken immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProxyForm;
