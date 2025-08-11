type BoardMember = {
  name: string;
  position: string;
};

type Committee = {
  name: string;
  members: BoardMember[];
  reportPage?: number;
};

const committees: Committee[] = [
  {
    name: 'Board Audit Committee (BAC)',
    members: [
      {
        name: 'Ms. Yogadinusha Bhaskaran',
        position: 'Chairperson/Non-Executive Director',
      },
      {
        name: 'Mr. M A J W Jayasekara',
        position: 'Independent Non-Executive Director',
      },
      {
        name: 'Ms. Ashwini Natesan',
        position: 'Independent Non-Executive Director',
      },
    ],
    reportPage: 188,
  },
  {
    name: 'Board Integrated Risk Management Committee (BIRMC)',
    members: [
      {
        name: 'Mr. M A J W Jayasekara',
        position: 'Chairman/Independent Non-Executive Director',
      },
      { name: 'Ms. Yogadinusha Bhaskaran', position: 'Non-Executive Director' },
      {
        name: 'Ms. Ashwini Natesan',
        position: 'Independent Non-Executive Director',
      },
    ],
    reportPage: 192,
  },
  {
    name: 'Board Human Resources and Remuneration Committee',
    members: [
      {
        name: 'Mr. M A J W Jayasekara',
        position: 'Chairman/Independent Non-Executive Director',
      },
      { name: 'Mr. G A R D Prasanna', position: 'Non-Executive Director' },
      {
        name: 'Ms. Yanika Amarasekera',
        position: 'Independent Non-Executive Director',
      },
    ],
    reportPage: 196,
  },
  {
    name: 'Board Related Party Transactions Review Committee (BRPTRC)',
    members: [
      {
        name: 'Ms. Ashwini Natesan',
        position: 'Chairperson/Independent Non-Executive Director',
      },
      {
        name: 'Mr. M A J W Jayasekara',
        position: 'Independent Non-Executive Director',
      },
      { name: 'Mr. Dharmadasa Rangalle', position: 'Executive Director' },
    ],
    reportPage: 198,
  },
  {
    name: 'Board Nomination Committee (BNC) (renamed as Board Nomination and Governance Committee)',
    members: [
      {
        name: 'Mr. M A J W Jayasekara',
        position: 'Chairman - Independent Non-Executive Director',
      },
      { name: 'Mr. G A R D Prasanna', position: 'Non-Executive Director' },
      { name: ' Ms. Ashwini Natesan', position: 'Independent Non-Executive Director' },
    ],
    reportPage: 194,
  },
  {
    name: 'Board Information Security Committee (BISC)',
    members: [
      {
        name: 'Ms. Ashwini Natesan',
        position: 'Chairperson - Independent Non-Executive Director',
      },
      {
        name: 'Mr. Ashane Jayasekara',
        position: 'Independent Non-Executive Director',
      },
      { name: 'Mr. B D A Perera', position: 'Executive Director' },
    ],
    reportPage: 200,
  },
  {
    name: 'Board Sustainability Committee (BSC)',
    members: [
      {
        name: 'Ms. Yanika Amarasekera',
        position: 'Chairperson - Independent Non-Executive Director',
      },
      { name: 'Mr. G A R D Prasanna', position: 'Non-Executive Director' },
      { name: 'Mr. Niroshan Udage', position: 'Deputy Managing Director' },
      {
        name: 'Ms. Ashwini Natesan',
        position: 'Independent Non-Executive Director',
      },
    ],
    reportPage: 202,
  },
];
export default function AnnualReportofBoarsofDirectors() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-4 h-[654px] overflow-auto grid grid-cols-1 gap-6 custom-scrollbar">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white text-blue rounded-lg p-6">
          <p>
            The Directors of L B Finance PLC have the pleasure of presenting to
            the shareholders the Annual Report of the Board of Directors on the
            affairs of the Company together with the Consolidated Financial
            Statements of the Company and its subsidiaries for the year ended
            31st March 2024 and the Independent Auditors Report on those
            Financial Statements, conforming to the relevant statutory
            requirements.
          </p>
          <p>
            This Report includes the information as required by the Companies
            Act No. 7 of 2007 (Companies Act), Finance Business Act Directions
            No. 5 of 2021 on Corporate Governance read together with Finance
            Companies (Corporate Governance) Direction No. 3 of 2008 (as
            amended) and the Listing Rules of the Colombo Stock Exchange. It is
            also guided by the Recommended Best Practices on Corporate
            Governance
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 ">
          <h3 className="text-xl font-bold mb-2">GENERAL</h3>
          <p>
            L B Finance PLC (the Company) is a Licensed Finance Company in terms
            of the Finance Business Act No.42 of 2011.
          </p>
          <p>
            It was incorporated under the Companies Ordinance No. 51 of 1938 as
            a private limited liability company on 30th May 1971, converted to a
            public limited liability company on 29th September 1982, and was
            admitted to the Official List of the Colombo Stock Exchange on 30th
            December 1997. The Company was re-registered as per the Companies
            Act No. 07 of 2007 on 6th June 2008 under Company Registration No.
            PQ 156.
          </p>
          <p>
            The Company is a Registered Finance Leasing Establishment in terms
            of the Finance Leasing Act No. 56 of 2000
          </p>
          <p>
            The Ordinary Shares issued by the Company are listed on the Main
            Board of Colombo Stock Exchange.
          </p>
          <p>
            The Company has been assigned a national long-term rating of BBB+
            (lka) with a stable outlook by Fitch Ratings Lanka Limited.
          </p>
          <p>
            Both the Registered Office of the Company and its Head Office are
            situated at No. 275/75, Prof. Stanley Wijesundera Mawatha, Colombo
            07.
          </p>
          <p>
            As per the requirements set out in Section 168 of the Companies Act
            No. 07 of 2007, the following information is disclosed in this
            Report for the year under review.
          </p>
        </div>
      </div>

      <div className="bg-white text-blue p-6 rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 font-semibold text-left border-b-2 border-blue">
                  Information required to be disclosed as per the Companies Act
                  No. 7 of 2007
                </th>
                <th className="px-4 py-2 font-semibold text-left border-b-2 border-blue">
                  Reference to the Companies Act
                </th>
                <th className="px-4 py-2 font-semibold text-left border-b-2 border-blue">
                  Level of compliance by the Company
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b-1 border-blue">
                  The nature of the business of the Company
                </td>
                <td className="px-4 py-2 border-b-1 border-blue">
                  Section 168 (1) (a)
                </td>
                <td className="px-4 py-2 border-b-1 border-blue">Page 179</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b-1 border-blue">
                  Signed Group Financial Statements of the Company for the
                  accounting period under review
                </td>
                <td className="px-4 py-2 border-b-1 border-blue">
                  Section 168 (1) (a)
                </td>
                <td className="px-4 py-2 border-b-1 border-blue">
                  Page 239 to 347
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b-1 border-blue">
                  Auditor’s Report on Group Financial Statements of the Company
                </td>
                <td className="px-4 py-2 border-b-1 border-blue">
                  Section 168 (1) (b)
                </td>
                <td className="px-4 py-2 border-b-1 border-blue">
                  Page 235 to 237
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b-1 border-blue">
                  Changes in Accounting Policies during the accounting period
                </td>
                <td className="px-4 py-2 border-b-1 border-blue">
                  Section 168 (1) (d)
                </td>
                <td className="px-4 py-2 border-b-1 border-blue">Page 249</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b-1 border-blue">
                  Particulars of entries in the Interest Register made during
                  the accounting period
                </td>
                <td className="px-4 py-2 border-b-1 border-blue">
                  Section 168 (1) (e)
                </td>
                <td className="px-4 py-2 border-b-1 border-blue">Page 182</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b-1 border-blue">
                  Remuneration and other benefits paid to the Directors during
                  the accounting period
                </td>
                <td className="px-4 py-2 border-b-1 border-blue">
                  Section 168 (1) (f)
                </td>
                <td className="px-4 py-2 border-b-1 border-blue">Page 318</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b-1 border-blue">
                  Total amount of donations made by the Company during the
                  accounting period
                </td>
                <td className="px-4 py-2 border-b-1 border-blue">
                  Section 168 (1) (g)
                </td>
                <td className="px-4 py-2 border-b-1 border-blue">Page 185</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b-1 border-blue">
                  Information on Directorate of the Company at the end of the
                  accounting period
                </td>
                <td className="px-4 py-2 border-b-1 border-blue">
                  Section 168 (1) (h)
                </td>
                <td className="px-4 py-2 border-b-1 border-blue">Page 181</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b-1 border-blue">
                  Amounts payable to the Auditor as audit fees and fees for
                  other services rendered during the accounting period as a
                  separate disclosure
                </td>
                <td className="px-4 py-2 border-b-1 border-blue">
                  Section 168 (1) (i)
                </td>
                <td className="px-4 py-2 border-b-1 border-blue">
                  Page 185 to 186
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b-1 border-blue">
                  Auditors’ relationship or any interest with the Company
                </td>
                <td className="px-4 py-2 border-b-1 border-blue">
                  Section 168 (1) (j)
                </td>
                <td className="px-4 py-2 border-b-1 border-blue">Page 186</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b-1 border-blue">
                  Annual Report of the Board of Directors on the affairs of the
                  Company to be signed on behalf of the Board by two Directors
                  and the Company Secretary
                </td>
                <td className="px-4 py-2 border-b-1 border-blue">
                  Section 168 (1) (k)
                </td>
                <td className="px-4 py-2 border-b-1 border-blue">Page 187</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b-1 border-blue">
                  Information as per Section 168 (1)(b) to (l) in relation to
                  the subsidiaries
                </td>
                <td className="px-4 py-2 border-b-1 border-blue">
                  Section 168 (2)
                </td>
                <td className="px-4 py-2 border-b-1 border-blue">
                  Pages 179 and 187
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white text-blue rounded-lg p-6 ">
          <h3 className="text-xl font-bold mb-2">
            VISION, MISSION AND CORPORATE CONDUCT
          </h3>
          <p>
            The Company’s vision, mission and values are given on page 10 of
            this Report.
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 ">
          <h3 className="text-xl font-bold mb-2">PRINCIPAL ACTIVITIES</h3>
          <p>
            The Company’s principal activities during the year were
            savings/deposit mobilisation, lending activities including Finance
            Lease/Vehicle Loan facilities, Gold Loans, Mortgage Loans, Personal
            Loans and other Credit Facilities, value added Services and Digital
            Financial Services.
          </p>
          <p>
            The Company’s subsidiaries, LB Microfinance Myanmar Company Limited,
            carried on Micro Finance business in Myanmar and Multi Finance PLC
            carries on business as a Licensed Finance Company.{' '}
          </p>
          <p>
            The Company has an interest in the leisure sector through its
            investment in The Fortress Resorts PLC.
          </p>
          <p>
            There were no significant changes in the nature of the principal
            activities of the Company during the year under review.
          </p>
          <p>
            It is further declared that the Company has not engaged in any
            activity which contravenes laws and regulations.
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 ">
          <h3 className="text-xl font-bold mb-2">REVIEW OF OPERATIONS</h3>
          <p>
            A review of the business of the Company and its subsidiaries and
            their performance during the year under review with comments on
            financial results, future strategies and prospects are contained in
            the Managing Director’s Review on pages 28 to 30 which forms an
            integral part of this Report.
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 ">
          <h3 className="text-xl font-bold mb-2">FUTURE DEVELOPMENTS</h3>
          <p>
            An overview of the future developments of the Company is given in
            the Chairman’s Message on pages 26 to 27, Managing Director’s Review
            on pages 28 to 30 and the Management Discussion and Analysis on page
            32.
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 ">
          <h3 className="text-xl font-bold mb-2">FINANCIAL STATEMENTS</h3>
          <p>
            The Consolidated Financial Statements of the Company and its
            subsidiaries have been prepared and presented in accordance with the
            Sri Lanka Accounting Standards comprising Sri Lanka Financial
            Reporting Standards (SLFRSs) and Sri Lanka Accounting Standards
            (LKASs) laid down by The Institute of Chartered Accountants of Sri
            Lanka and in compliance with the requirements of the Companies Act
            No. 07 of 2007, Finance Business Act No.42 of 2011 the directions
            and guidelines issued under the said Finance Business Act and the
            Listing Rules of the Colombo Stock Exchange. Consequent to the Board
            Audit Committee’s recommendations, the Financial Statements were
            reviewed and approved by the Board of Directors on 27th May 2024.
            The Consolidated Financial Statements of the Company and its
            subsidiaries duly signed by the Chief Financial Officer and two
            Directors on behalf of the Board which are attached hereto form an
            integral part of the Annual Report.
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">
            DIRECTORS’ RESPONSIBILITY FOR FINANCIAL REPORTING
          </h3>
          <p>
            In terms of Section 150(1), 151, 152(1) and 153(1) and (2) of the
            Companies Act No. 7 of 2007, the Board of Directors of the Company
            is responsible for the preparation of the Financial Statements of
            the Group and the Company which reflect a true and fair view of the
            state of affairs of the Company and its subsidiaries as at the
            reporting date and the profit or loss or income and expenditure of
            the Company and its subsidiaries for the accounting period ending as
            at the reporting date.
          </p>
          <p>
            The Directors confirm that the Income Statement, Statement of
            Financial Position, Statement of Changes in Equity, Cash Flow
            Statement and Notes to Financial Statements appearing on pages 239
            to 347 have been prepared in conformity with the requirements of the
            Sri Lanka Accounting Standards, Sri Lanka Accounting and Auditing
            Standards Act No. 15 of 1995 and the amendments thereto, Companies
            Act No. 7 of 2007, directions and guidelines issued under the
            Finance Business Act No. 42 of 2011 and the Listing Rules of the
            Colombo Stock Exchange.
          </p>
          <p>
            The Statement of Directors’ Responsibilities for Financial Reporting
            is given on page 203 and forms an integral part of the Annual Report
            of the Board of Directors on the Affairs of the Company.
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 ">
          <h3 className="text-xl font-bold mb-2">
            DIRECTORS’ STATEMENT ON INTERNAL CONTROL
          </h3>
          <p>
            The Board has issued a statement on the Internal Control Mechanism
            of the Company as per Section 16.1 (ix) of Finance Companies
            (Corporate Governance) Direction No. 5 of 2021.
          </p>
          <p>
            The said statement which forms an integral part of the Annual Report
            of the Board of Directors on the Affairs of the Company is given on
            page 179.
          </p>
          <p>
            The Board has obtained an Assurance Report from the Independent
            Auditors on the Directors’ Statement on Internal Control over
            Financial Reporting as referred to on page 206.
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 ">
          <h3 className="text-xl font-bold mb-2">AUDITORS’ REPORT</h3>
          <p>
            The Report of the Independent Auditors on the Financial Statements
            of the Company and the Group is given on page 235.
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 ">
          <h3 className="text-xl font-bold mb-2">
            ACCOUNTING POLICIES AND CHANGES DURING THE YEAR
          </h3>
          <p>
            The accounting policies adopted in the preparation of the Financial
            Statements are given on pages 249. There were no significant changes
            to the accounting policies used by the Company during the year under
            review vis-à-vis those used in the previous year.
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 ">
          <h3 className="text-xl font-bold mb-2">INCOME</h3>
          <p>
            The income of the Company for the year ended 31st March 2024 was Rs.
            49,230 Million (2022/23 - Rs.42,756 Million)
          </p>

          <p>
            Group Income during the year under review was Rs. 49,636 Million
            (2023/24 – Rs.43,133 Million)
          </p>

          <p>
            An analysis of the Income is given in Note 2.1.1. to the Financial
            Statements.
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 md:col-span-2">
          <h3 className="text-xl font-bold mb-2">
            FINANCIAL RESULTS AND APPROPRIATIONS
          </h3>
          <p>
            The Profit Before Tax increased by 29 % whilst the Company recorded
            a growth of 13% in Net Profit After Tax for the year under review in
            comparison to those of the preceding year.{' '}
          </p>

          <p>The growth in total comprehensive income was 12%.</p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6  md:col-span-2">
          <h2 className="text-xl font-bold mb-4">
            Details of appropriation of profit of the Company and the Group are
            given below:
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b-2 border-blue text-right"></th>
                  <th className="px-4 py-2 border-b-2 border-blue text-right bg-green-100 text-green-900">
                    2023 Rs.’000
                  </th>
                  <th className="px-4 py-2 border-b-2 border-blue text-right bg-green-200 text-green-900">
                    2022 Rs.’000
                  </th>
                </tr>
              </thead>
              <tbody className="text-blue">
                <tr>
                  <td className="px-4 py-2 border-b-1 border-blue text-left">
                    Profit for the year after payment of all the expenses of
                    management, provision for depreciation and amortisation,
                    impairment of loans and other losses, gold loan auction
                    losses and tax on financial services
                  </td>
                  <td className="px-4 py-2 border-b-1 border-blue text-right">
                    15,180,207
                  </td>
                  <td className="px-4 py-2 border-b-1 border-blue text-right">
                    11,746,552
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b-1 border-blue text-left">
                    Less: Income Tax Expense
                  </td>
                  <td className="px-4 py-2 border-b-1 border-blue text-right">
                    5,616,569
                  </td>
                  <td className="px-4 py-2 border-b-1 border-blue text-right">
                    3,286,221
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b-1 border-blue text-left">
                    Profit After Tax
                  </td>
                  <td className="px-4 py-2 border-b-1 border-blue text-right">
                    9,563,638
                  </td>
                  <td className="px-4 py-2 border-b-1 border-blue text-right">
                    8,460,361
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b-1 border-blue text-left">
                    Unappropriated Balance Brought Forward from Previous Year
                  </td>
                  <td className="px-4 py-2 border-b-1 border-blue text-right">
                    28,784,409
                  </td>
                  <td className="px-4 py-2 border-b-1 border-blue text-right">
                    21,849,942
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b-1 border-blue text-left">
                    Actuarial Gains/(losses) on Defined Benefit Plans
                  </td>
                  <td className="px-4 py-2 border-b-1 border-blue text-right">
                    (37,594)
                  </td>
                  <td className="px-4 py-2 border-b-1 border-blue text-right">
                    5,277
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b-1 border-blue text-left">
                    Profit Available for Appropriation
                  </td>
                  <td className="px-4 py-2 border-b-1 border-blue text-right">
                    38,348,407
                  </td>
                  <td className="px-4 py-2 border-b-1 border-blue text-right">
                    30,315,550
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b-1 border-blue text-left">
                    Less: Appropriations
                  </td>
                  <td className="px-4 py-2 border-b-1 border-blue text-right"></td>
                  <td className="px-4 py-2 border-b-1 border-blue text-right"></td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b-1 border-blue text-left">
                    Dividend Paid for Previous Financial Year
                  </td>
                  <td className="px-4 py-2 border-b-1 border-blue text-right">
                    2,770,285
                  </td>
                  <td className="px-4 py-2 border-b-1 border-blue text-right">
                    1,108,114
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b-1 border-blue text-left">
                    Interim Dividend Payable/Paid for Current Financial Year
                  </td>
                  <td className="px-4 py-2 border-b-1 border-blue text-right">
                    1,246,629
                  </td>
                  <td className="px-4 py-2 border-b-1 border-blue text-right"></td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b-1 border-blue text-left">
                    Transfers During the Year
                  </td>
                  <td className="px-4 py-2 border-b-1 border-blue text-right">
                    478,182
                  </td>
                  <td className="px-4 py-2 border-b-1 border-blue text-right">
                    423,027
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b-1 border-blue text-left">
                    Total Appropriation
                  </td>
                  <td className="px-4 py-2 border-b-1 border-blue text-right">
                    4,495,096
                  </td>
                  <td className="px-4 py-2 border-b-1 border-blue text-right">
                    1,531,141
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b-1 border-blue text-left">
                    Unappropriated Balance Carried Forward
                  </td>
                  <td className="px-4 py-2 border-b-1 border-blue text-right">
                    33,853,311
                  </td>
                  <td className="px-4 py-2 border-b-1 border-blue text-right">
                    28,784,409
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b-1 border-blue text-left">
                    Proposed Final Dividend
                  </td>
                  <td className="px-4 py-2 border-b-1 border-blue text-right">
                    Rs.3.50 per share
                  </td>
                  <td className="px-4 py-2 border-b-1 border-blue text-right">
                    Rs.3.00 per share
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white text-blue rounded-lg p-6 ">
          <h2 className="text-xl font-bold mb-4">RESERVES</h2>
          <p className="mb-4">
            The Reserves of the Company and the Group with the movements during
            the year under review are given in Note 2.35 to the Financial
            Statements on pages 316.
          </p>
        </div>
        <div className="bg-white text-blue rounded-lg p-6 ">
          <h2 className="text-xl font-bold mb-4">TAXATION</h2>
          <p className="mb-4">
            The Income Tax rate applicable to the Company’s operations is 30%
            (1st April to 30th September 2022 – 24% and 1st October 2022 to 31st
            March 2023 – 30%)
          </p>
          <p className="mb-4">
            The Company was also liable for Value Added Tax (VAT) on Financial
            Services at 18% (2022/23 – 18%) and Social Security Contribution
            Levy at 2.5% (1st October 2022 to 31st March 2023 – 2.5%)
          </p>
        </div>
        <div className="bg-white text-blue rounded-lg p-6 md:col-span-2">
          <h2 className="text-xl font-bold mb-4">THE BOARD OF DIRECTORS</h2>
          <p className="mb-4">
            The Board of Directors of the Company as at 31st March 2024
            consisted of ten (10) Directors with a balance of skills, wide
            knowledge and experience in Entrepreneurship, Banking, Finance,
            Audit & Assurance, Legal and Marketing which is imperative for the
            business carried out by the Company.
          </p>
          <p className="mb-4">
            The names of the Directors who held office as at the end of the
            accounting period are given below and their brief profiles appear on
            page 156 which also includes other directorships held by Directors.
          </p>

          <div className="bg-teal-200 p-4 rounded-lg mb-4">
            <p className="font-semibold">Executive Directors</p>
            <ul className="list-disc list-inside">
              <li>Mr. J A S S Adhihetty - Managing Director</li>
              <li>Mr. Niroshan Udage - Deputy Managing Director</li>
              <li>Mr. B D A Perera</li>
              <li>Mr. R S Yatawara</li>
            </ul>
          </div>
          <div className="bg-teal-100 p-4 rounded-lg mb-4">
            <p className="font-semibold mt-4">Non-Executive Directors</p>
            <ul className="list-disc list-inside">
              <li>Mr. G A R D Prasanna - Chairman</li>
              <li>Mr. A J M Jayasekara *</li>
              <li>Ms. Yogadinusha Bhaskaran</li>
              <li>Ms. Ashwini Netsan *</li>
              <li>Mr. Dharmadasa Rangalle</li>
              <li>Ms. Yanika Amarasakera *</li>
              <li>* Independent Directors</li>
              <li>Senior Independent Director</li>
            </ul>
          </div>

          <h2 className="text-xl font-bold mb-4">
            Fit and Proper Assessment of Directors
          </h2>
          <p className="mb-4">
            In terms of Rule 9.7.4 of the Listing Rules of the Colombo Stock
            Exchange, Declarations were obtained from the Directors who
            confirmed that they have continuously satisfied the Fit and Proper
            Assessment Criteria set out in the Listing Rules during the
            financial year under review and as at the date of such Declarations.
          </p>

          <h2 className="text-xl font-bold mb-4">
            Extension of Office of the Managing Director
          </h2>
          <p className="mb-4">
            The approval of the Monetary Board of the Central Bank of Sri Lanka
            was granted on 21st June 2023 in terms of the Finance Business Act,
            Directions No.5 of 2021, for the Managing Director, Mr. J A S S
            Adhihetty to continue in office, for a period of one (01) year after
            attaining the age of seventy three (73) years. Accordingly, in terms
            of the said Regulatory approval read together with the shareholders’
            approval at the Annual General Meeting held on 30th June 2023, Mr
            Adhihetty continues to function as the Managing Director of the
            Company.
          </p>
          <p className="mb-4">
            The Board at its meeting held on 17th April 2024, resolved to seek
            the approval of the Monetary Board, for a further extension of
            office of the Managing Director in terms of the said Directions and
            submitted the relevant documents to the Director – Department of
            Supervision of Non-Bank Financial Institutions in relation to the
            said extension.
          </p>

          <h2 className="text-xl font-bold mb-4">Resignations/Cessations</h2>
          <p className="mb-4">
            There were no Resignations/Cessations during the year under review.
          </p>
          <div className="bg-teal-100 p-4 rounded-lg mb-4">
            <h2 className="text-xl font-bold mb-4">
              Directors of the Subsidiaries
            </h2>
            <p className="mb-4">
              The Directors of the subsidiary, LB Microfinance Myanmar Company
              Limited as at 31st March 2024 consisted of the following:
            </p>
            <ul className="list-disc list-inside">
              <li>Mr. J A S S Adhihetty</li>
              <li>Mr. Niroshan Udage</li>
              <li>Mr. B D A Perera</li>
              <li>Mr. R S Yatawara</li>
            </ul>
            <p className="mb-4">
              The Directors of the subsidiary, Multi Finance PLC as at 31st
              March 2024
            </p>
            <ul className="list-disc list-inside">
              <li>Mr. G A R D Prasanna</li>
              <li>Mr. J A S S Adhihetty</li>
              <li>Mr. Niroshan Udage</li>
              <li>Mr. B D A Perera</li>
              <li>Mr. R S Yatawara</li>
              <li>Mr. D Ranagala</li>
            </ul>
            <p className="mb-4">
              There were no changes in the Directors of the subsidiaries.
            </p>
          </div>
          <h2 className="text-xl font-bold mb-4">
            Retirement by Rotation and Re Election of Directors/Annual
            Assessment of continuing Directors
          </h2>
          <p className="mb-4">The names of the Directors who are:</p>
          <ol className="list-decimal list-inside mb-4">
            <li>
              subject to retirement by rotation in terms of Articles 85 and 86
              of the Articles of Association, and,
            </li>
            <li>
              proposed for re-appointment in terms of Section 211 of the
              Companies Act No. 7 of 2007, and the applicable provisions
              thereto,
            </li>
            <li>
              subject to annual assessment of their fitness and propriety to
              continue as Directors in terms of Finance Business Act Directions
              No.6 of 2021, are set out in the undernoted Table.
            </li>
          </ol>
          <p className="mb-4">
            The Board Nomination Committee / the Board of Directors have
            recommended the re-election/re-appointment / continuation of the
            said Directors, subject to the relevant Regulatory approval/s in
            terms of the applicable Directions issued under the Finance Business
            Act.
          </p>
          <p className="mb-4">
            Directors’ Interests Register and Directors’ Interests in Contracts
            or Proposed Contracts{' '}
          </p>
          <p className="mb-4">
            The Company maintains the Directors’ Interests Register in terms of
            the Companies Act No. 7 of 2007
          </p>
          <p className="mb-4">
            Directors of the Company have made necessary declarations of their
            interests in Contracts and proposed Contracts in terms of Section
            192 (1) and 192 (2) of the Companies Act. These interests are
            entered in the Interests Register which is deemed to form part and
            parcel of this Annual Report and available for inspection upon
            request.
          </p>

          <p className="mb-4">
            The particulars of the Directors Interests in Contracts with the
            Company are given in Note 3.1 to the Financial Statements on pages
            318 and form an integral part of this Annual Report.
          </p>

          <p className="mb-4">
            The remuneration paid to the Directors during the year under review
            is entered in the Interests Register and the aggregate of such
            remuneration is disclosed in this Annual Report under “Directors’
            Remuneration” on page 318.
          </p>
          <p className="mb-4">
            The relevant interests of Directors in the Shares of the Company as
            at 31st March 2024 as recorded in the Interests Register are given
            in this Report under Directors’ shareholding on page 184.
          </p>
          <p className="mb-4">
            In accordance with the Myanmar Companies Law, Directors of the
            Myanmar subsidiary have disclosed their interests in shares and
            securities in the said subsidiary and also their interests in
            contracts and other arrangements with the said company.
          </p>
          <p className="mb-4">
            The Directors of Multi Finance PLC too have disclosed their
            interests in Shares of the said subsidiaries together with their
            interests in contracts and agreements with the said subsidiary.
          </p>

          <h2 className="text-xl font-bold mb-4">
            Directors’ Declarations in terms of Rule 9.16(i) of the Listing
            Rules of the CSE
          </h2>

          <p className="mb-4">
            The Directors declare that all material interests in contracts
            involving the Company have been disclosed to the Board and wherever
            any Director was materially interested in a contract or a proposed
            contract with the Company, they have refrained from voting on such
            contracts. It is further declared that during the year under review,
            the Company did not enter into any contracts in which any Director
            was interested.
          </p>
          <h2 className="text-xl font-bold mb-4">
            Directors’ Declarations in terms of Section 16.1(ii) and (v) of
            Finance Business Act Directions No. 5 of 2021 and Rule 9.10.4 (c) of
            the Listing Rules of the CSE
          </h2>

          <p className="mb-4">
            The Chairman and the Directors of the Company have made declarations
            as per the requirements in the above Directions / Rules, that there
            is no financial, business, family or other material/relevant
            relationship(s) between the Chairman and the Managing Director
            and/or amongst the members of the Board.
          </p>
        </div>

        <div className="md:col-span-2 bg-white text-blue p-6 rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse bg-white items-start ">
              <thead className="align-top">
                <tr>
                  <th className="px-4 py-2 border-b-2 border-blue text-left font-semibold">
                    Name of Director
                  </th>
                  <th className="px-4 py-2 border-b-2 border-blue text-left font-semibold">
                    Applicable Article of the Articles of Association / Section
                    of the Companies Act / Finance Business Act Directions
                  </th>
                  <th className="px-4 py-2 border-b-2 border-blue text-left font-semibold">
                    Other information
                  </th>
                </tr>
              </thead>
              <tbody className="align-top">
                <tr>
                  <td className="px-4 py-2 border-b-1 border-blue ">
                    Ms. Ashwini Natesan
                  </td>
                  <td className="px-4 py-2 border-b-1 border-blue text-left">
                    Articles 85 and 86 / FBA Directions No.6 of 2021
                  </td>
                  <td className="px-4 py-2 border-b-1 border-blue text-left">
                    According to Articles 85 and 86, the Directors to retire by
                    rotation at the Annual General Meeting (AGM) are those who
                    (being subject to retirement by rotation) have been longest
                    in office since their last election or appointment.
                    <br />
                    <br />
                    If one-third (1/3rd) of the Directors eligible for
                    retirement by rotation is not a multiple of three (03), the
                    number nearest to (but not greater than) one-third (1/3rd)
                    shall retire from office. As per the Articles, in
                    calculating the said number, a Director appointed to the
                    office of Chairman and Executive Directors are excluded.
                    <br />
                    <br />
                    Accordingly, after excluding the Chairman and the four (04)
                    Executive Directors, the number of Directors subject to
                    retirement by rotation is five (05) and therefore, one (01)
                    Director should retire by rotation.
                    <br />
                    <br />
                    Accordingly, Ms. Ashwini Natesan who has been longest in
                    office, since her last re-election retires and offers
                    herself for re-election at the forthcoming AGM.
                    <br />
                    <br />
                    The Company has applied to the Director – Department of
                    Supervision of Non-Bank Financial Institutions of the
                    Central Bank of Sri Lanka, for the requisite regulatory
                    approval in terms of Section 5.1.2 of the Finance Business
                    Act Directions No. 06 of 2021, with respect to the said
                    re-election and continuation.
                    <br />
                    <br />A Resolution will be placed before the shareholders at
                    the forthcoming AGM for the re-election of the said Director
                    which will be effective, upon the receipt of requisite
                    Regulatory approval as aforesaid.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg bg-white text-blue">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse bg-white text-blue">
            <thead>
              <tr>
                <th className="border-b-2 border-blue px-4 py-2 text-left align-top font-semibold">
                  Name of Director
                </th>
                <th className="border-b-2 border-blue px-4 py-2 text-left align-top font-semibold">
                  Applicable Article of the Articles of Association / Section of
                  the Companies Act / Finance Business Act Directions
                </th>
                <th className="border-b-2 border-blue px-4 py-2 text-left align-top font-semibold">
                  Other information
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b-1 border-blue px-4 py-2 text-left align-top">
                  Mr. J A S S Adhihetty
                </td>
                <td className="border-b-1 border-blue px-4 py-2 text-left align-top">
                  Section 211 of the Companies Act / FBA Directions No.5 of 2021
                </td>
                <td className="border-b-1 border-blue px-4 py-2 text-left align-top">
                  Mr. J A S S Adhihetty, who holds the position of Managing
                  Director of the Company, attained the age of seventy three
                  (73) years on 4th July 2023. The Board at its meeting held on
                  17th April 2024 having considered the Finance Business Act
                  Directions No.5 of 2021 and the approval granted by the
                  Monetary Board on 21st June 2023, for a period of one (01)
                  year from 4th July 2023, resolved to seek the prior approval
                  of the Monetary Board for a further extension of time period
                  vis-à-vis Mr. Adhihetty.
                  <br />
                  <br />
                  In terms of Section 210 of the Companies Act, Mr. Adhihetty
                  vacates office at the conclusion of the next Annual General
                  Meeting.
                  <br />
                  <br />
                  In line with the decision of the Board of Directors to seek an
                  extension of time period for Mr. Adhihetty in terms of the
                  aforesaid Directions No.5 of 2021 and the Company’s
                  application for the requisite Regulatory approval in terms of
                  the said Directions No.5 of 2021, the Board further resolved
                  to place a Resolution before the shareholders at the
                  forthcoming Annual General Meeting in terms of Section 211 of
                  the Companies Act seeking the approval of the shareholders for
                  the re-appointment of Mr. Adhihetty specially declaring that
                  the age limit referred to in Section 210 of the Companies Act
                  shall not apply to Mr. Adhihetty, subject to receiving the
                  requisite Regulatory approval in terms of the said Directions.
                  <br />
                  <br />
                  In terms of Section 3.3 of the said Directions, the fitness
                  and propriety of continuing Board of Directors is subject to
                  annual assessment by the Director, Department of Supervision
                  of the Non-Bank Financial Institutions of the Central Bank of
                  Sri Lanka.
                  <br />
                  <br />
                  The Company has applied to the Director – Department of
                  Supervision of Non-Bank Financial Institutions of the Central
                  Bank of Sri Lanka, for the requisite regulatory approval in
                  terms of the said Directions and the continuation of the
                  office of the said Directors is subject to receiving the
                  requisite Regulatory approval.
                </td>
              </tr>
              <tr>
                <td className="border-b-1 border-blue px-4 py-2 text-left align-top">
                  8 Other Directors
                </td>
                <td className="border-b-1 border-blue px-4 py-2 text-left align-top">
                  FBA Directions No.6 of 2021
                </td>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  In terms of Section 3.3 of the said Directions, the fitness
                  and propriety of continuing Board of Directors is subject to
                  annual assessment by the Director, Department of Supervision
                  of the Non-Bank Financial Institutions of the Central Bank of
                  Sri Lanka.
                  <br />
                  <br />
                  The Company has applied to the Director – Department of
                  Supervision of Non-Bank Financial Institutions of the Central
                  Bank of Sri Lanka, for the requisite regulatory approval in
                  terms of the said Directions and the continuation of the
                  office of the said Directors is subject to receiving the
                  requisite Regulatory approval.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white text-blue rounded-lg p-6 ">
        <h2 className="text-xl font-bold mb-4">
          RELATED PARTY TRANSACTIONS WITH THE COMPANY
        </h2>
        <p className="mb-4">
          The Directors have also disclosed transactions, if any, that could be
          classified as Related Party Transactions (RPTs) in terms of LKAS 24.
        </p>

        <p className="mb-4">
          With effect from 1st January 2016, all proposed non-recurrent (RPTs)
          have been placed before the Related Party Transactions Review
          Committee in accordance with Listing Rules of Colombo Stock Exchange,
          for its review and recommendations, which was extended to recurrent
          transactions as well, during the financial year under review.
        </p>

        <p className="mb-4">
          The aggregate value of transactions of related parties (as defined in
          LKAS 24 – “Related Parties Disclosure”) with the Company are set out
          in Note 3.1 to the Financial Statements on page 318.
        </p>

        <p className="mb-4">
          The Board confirms that the Company has not engaged in transactions
          with any related party in a manner that would grant such party ‘more
          favourable treatment’ than that accorded to other similar constituents
          of the Company. The Board of Directors declares that the Company is in
          compliance with the applicable provisions of the Listing Rules
          pertaining to (RPTs) during the Financial Year ended 31st March 2024.
        </p>
      </div>

      <div className="bg-white text-blue rounded-lg p-6 ">
        <h2 className="text-xl font-bold mb-4">DIRECTORS’ REMUNERATION</h2>
        <p className="mb-4">
          The remuneration of Directors of the Company and its subsidiaries is
          disclosed under Key Management Personnel compensation in Note 3.1.1 to
          the Financial Statements on page 318.
        </p>
      </div>
      <h2 className="text-xl font-bold">
        RELEVANT INTERESTS OF DIRECTORS’ IN SHARES
      </h2>
      <div>
        <p className="text-blue bg-white rounded-lg p-6">
          The Directors’ shareholding and the relevant interests of Directors in
          the shares of the Company as at 31st March 2024 and 31st March 2023
          are as follows;
        </p>
      </div>
      <div>
        <div className="overflow-x-auto bg-white p-6 rounded-lg text-blue">
          <table className="min-w-full table-auto border-collapse bg-white ">
            <thead>
              <tr>
                <th className="border-b-2 border-blue px-4 py-2 text-left font-semibold"></th>
                <th className="border-b-2 border-blue px-4 py-2 text-left font-semibold">
                  Shareholding as at 31st March 2024
                </th>
                <th className="border-b-2 border-blue px-4 py-2 text-left font-semibold">
                  Shareholding as at 31st March 2023
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  Mr. G A R D Prasanna
                </td>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  -
                </td>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  -
                </td>
              </tr>
              <tr>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  Mr. A J M Jayasekara
                </td>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  -
                </td>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  -
                </td>
              </tr>
              <tr>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  Mr. J A S S Adhihetty
                </td>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  424,480
                </td>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  424,480
                </td>
              </tr>
              <tr>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  Mr. N Udage
                </td>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  2,861,235
                </td>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  1,816,540
                </td>
              </tr>
              <tr>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  Mr. B D A Perera
                </td>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  1,000,000*
                </td>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  -
                </td>
              </tr>
              <tr>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  Mr. R S Yatawara
                </td>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  8,593
                </td>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  8,593
                </td>
              </tr>
              <tr>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  Ms. Yogadinusha Bhaskaran
                </td>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  -
                </td>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  -
                </td>
              </tr>
              <tr>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  Ms. Ashwini Natesan
                </td>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  -
                </td>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  -
                </td>
              </tr>
              <tr>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  Mr. Dharmadasa Rangalle
                </td>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  -
                </td>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  -
                </td>
              </tr>
              <tr>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  Ms Yanika Amarasakera
                </td>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  -
                </td>
                <td className="border-b-1 border-blue px-4 py-2 text-left">
                  -
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm">
            * Shares held by the spouse, Mrs M C P Perera (nee Gunaratne).
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className=" bg-white p-6 rounded-lg text-blue">
          <div className="grid grid-cols-1 ">
            <div>
              <p className="mb-4">
                Vallibel One PLC, holds 286,729,600 Ordinary Shares constituting
                51.75% of the shares representing the Stated Capital of the
                Company.
              </p>
            </div>
            <div>
              <p className="mb-4">
                Vallibel One PLC is also the holding company of Royal Ceramics
                Lanka PLC which holds 144,492,928 shares constituting 26.08% of
                the shares representing the stated capital of the Company.
              </p>
            </div>
          </div>
          <p>
            Mr. J A S S Adhihetty and Ms. Yogadinusha Bhaskaran are Directors of
            Vallibel One PLC, where they serve as a Managing Director and
            Non-Executive Director respectively.
          </p>
        </div>

        <div className=" bg-white p-6 rounded-lg text-blue">
          <h2 className="text-xl font-bold mb-2">BOARD SUBCOMMITTEES</h2>
          <p>
            The Board of Directors of the Company has formed seven (07)
            Committees in compliance with the Finance Business Act Direction
            No.5 of 2021 and read together with Finance Companies (Corporate
            Governance) Direction No.3 of 2008 (as amended), Finance Business
            Act Direction No.1 of 2022 on Technology Risk Management and
            Resilience, Listing Rules of the Colombo Stock Exchange and the
            Recommended Best Practices on Corporate Governance and SFRS-1 and S2
            (Sustainability Disclosure Standards).
          </p>
          <p className="mt-2">
            They are the Board Audit Committee, Board Integrated Risk Management
            Committee, Board Human Resources and Remuneration Committee, Board
            Related Party Transactions Review Committee, Board Nomination
            Committee (renamed as Board Nomination and Governance Committee),
            Board Information Security Committee, and Board Sustainability
            Committee.
          </p>
          <p className="mt-2">
            The composition of the said committees is as follows:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {committees.map((committee, index) => (
              <div key={index} className="bg-blue-800 p-4 rounded">
                <h3 className="text-lg font-bold mb-2">{committee.name}</h3>
                <ul>
                  {committee.members.map((member, mIndex) => (
                    <li key={mIndex}>
                      <p className="font-semibold">{member.name}</p>
                      <p className="text-sm">{member.position}</p>
                    </li>
                  ))}
                </ul>
                {committee.reportPage && (
                  <p className="mt-2 text-sm">
                    The Report of the said Committee appears on page{' '}
                    {committee.reportPage}.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        <div className="bg-white text-blue rounded-lg p-6 md:col-span-2">
          <h2 className="text-xl font-bold mb-2">DIVIDENDS</h2>
          <p>
            The Company paid an Interim Dividend of Rs. 2.25 per Ordinary Share
            for the year under review out of the profits of the Company.
          </p>
          <p className="mt-2">
            The Directors have recommended a Final Dividend of Rs.3.50 per
            Ordinary Share for the year under review on the shares in issue of
            554,057,136 to be approved by the shareholders at the forthcoming
            Annual General Meeting.
          </p>
          <p className="mt-2">
            As required by Section 56 of Companies Act No. 07 of 2007 (Companies
            Act), the Directors have certified that they are satisfied that the
            Company will, immediately after the said distribution is made,
            satisfy the solvency test in accordance with the Companies Act and
            have obtained the Auditors&#39; Certificate of Solvency thereon.
          </p>
          <p className="mt-2">
            In compliance with Guideline on Declaration of Dividends and
            Distribution of Profits dated 31st January 2023 - Ref.
            201/0001/0019/005 issued under the Finance Business Act, the Company
            obtained the approval of the Director, Department of Supervision of
            Non-Bank Financial Institutions of the Central Bank of Sri Lanka for
            the proposed Final Dividend.
          </p>
          <p className="mt-2">
            The said Final Dividend will, subject to approval by the
            shareholders, be payable on or before 5th July 2024 to those
            shareholders who have provided accurate dividend disposal
            instructions, by way of direct credit to their respective Bank
            Accounts, through SLIPS and on 18th July 2024 to those shareholders
            whose payments are to be made by way of cheques.
          </p>
        </div>

        {/* <div className="bg-white text-blue rounded-lg p-6 ">
          <h2 className="text-xl font-bold mb-2">
            STATED CAPITAL AND DEBENTURES
          </h2>
          <p>
            The Stated Capital of the Company as of 31st March 2024 was Rs.
            838,282,159/- represented by 554,057,136 Ordinary Shares. There were
            no changes in the Stated Capital of the Company during the year
            under review.
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 ">
          <h2 className="text-xl font-bold mb-2">
            SHARE INFORMATION AND SUBSTANTIAL SHAREHOLDINGS
          </h2>
          <h3 className="text-lg font-semibold mt-2">Shareholders</h3>
          <p>
            There were 5,014 shareholders registered as of 31st March 2024
            (4,939 shareholders as of 31st March 2023).
          </p>
          <h3 className="text-lg font-semibold mt-2">
            Distribution Schedule of Shareholders, Major Shareholders, Public
            Holding and Ratios and Market Price Information
          </h3>
          <p>
            Information as required by the Listing Rules on distribution of
            shareholding with the respective percentages, twenty (20) Major
            Shareholders&#39; Names, Public Holding & Ratios and Market Price
            Information are set out on pages 350 to 354 under &#34;Financial
            Review&#34;.
          </p>
        </div> */}

        <div className="bg-white text-blue rounded-lg p-6 ">
          <h2 className="text-xl font-bold mb-2">
            Property Plant & Equipment and Significant changes in the
            Company&#39;s and its Subsidiary&#39;s Fixed Assets/ Market Value of
            Land
          </h2>
          <p>
            The details of Property, Plant and Equipment are given in Notes 2.23
            of the Financial Statements.
          </p>
          <p className="mt-2">
            The Land and Buildings owned by the Company are recorded at cost and
            details of those properties and their market values as at 31st March
            2024 as per valuations conducted by Mr. H V Manjula Basnayake an
            Independent Valuer. The said information is set out in Note 2.23.9
            to the Financial Statements on page 298.
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 ">
          <h2 className="text-xl font-bold mb-2">HUMAN RESOURCES</h2>
          <p>
            The Company&#39;s Employment Policy is totally non-discriminatory
            which respects individuals and provides career opportunities
            irrespective of the gender, race, and religion.
          </p>
          <p className="mt-2">
            As at 31st March 2024, the Company had 4,132 employees (3,562
            employees as at 31st March 2023).
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 ">
          <h2 className="text-xl font-bold mb-2">
            Material issues pertaining to employees and industrial relations
            pertaining to the Company
          </h2>
          <p>
            No material issues pertaining to employees or industrial relations
            of the Company occurred during the year under review which required
            disclosure under Rule 7.6 (vii) of the Listing Rules.
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 ">
          <h2 className="text-xl font-bold mb-2">
            Employee Share Option Schemes/ Employee Share Purchase Schemes
          </h2>
          <p>
            The Company has not implemented any Share Option/Share Purchase
            Schemes for its employees.
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 ">
          <h2 className="text-xl font-bold mb-2">DONATIONS</h2>
          <p>
            The Company made donations to the value of Rs.9.98 million during
            the year under review.
          </p>
          <p className="mt-2">
            The subsidiaries L B Myanmar and Multi Finance PLC did not make any
            donations during the year under review.
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 ">
          <h2 className="text-xl font-bold mb-2">AUDITORS</h2>
          <p>
            Messrs Ernst & Young, Chartered Accountants served as the
            Independent Auditors during the year under review and also provided
            audit related services and permitted non-audit/consultancy services.
          </p>
          <p className="mt-2">
            The Auditor of the subsidiary company, L B Microfinance Myanmar
            Company Ltd is UTW (Myanmar) Limited, a Member of Ernst & Young
            Global Limited.
          </p>
          <p className="mt-2">
            The Auditors of the subsidiary company Multi Finance PLC is Messrs
            KPMG, Chartered Accountants.
          </p>
          <p>
            A sum of Rs. 8,387,150/- is payable by the Company to the Auditors
            for the year under review comprising Rs. 4,857,724/- as Audit Fees,
            and 2,250,000/- as audit related fees and expenses and Rs1,279,425/-
            for non-audit services.
          </p>
          <p className="mt-2">
            The amounts payable to the Auditors of the subsidiary companies for
            the year under review are Subsidiary in Myanmar - Rs.2,020,455/- as
            Audit Fees - Statutory and Multi Finance PLC - Rs1,967,290/- as
            Audit Fees and Rs. 500,000/- as audit related fees and expenses.
          </p>
          <p className="mt-2">
            The Board adopted a policy of rotation of Auditors in keeping with
            the principles of good Corporate Governance and to ensure compliance
            with Finance Business Act Direction No.5 of 2021 on Corporate
            Governance (Direction No.10.2 d(vi)).
          </p>
          <p className="mt-2">
            Following a comprehensive evaluation process, the Board Audit
            Committee has Messrs KPMG, Chartered Accountants been selected for
            appointment as the Company&#39;s Auditors, for the financial year
            ending 31st March 2025.
          </p>
          <p className="mt-2">
            A Resolution to appoint Messrs KPMG, Chartered Accountants as the
            Company&#39;s Auditors and to authorise the Directors to determine
            their remuneration will be proposed at the Annual General Meeting.
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 ">
          <h2 className="text-xl font-bold mb-2">
            RISK MANAGEMENT AND INTERNAL CONTROL
          </h2>
          <p>
            An ongoing process is in place to identify and manage the risks that
            are associated with the business and operations of the Company. The
            Directors review this process through the Board Audit Committee and
            the Board Integrated Risk Management Committee. Specific steps taken
            by the Company to manage the Risks are detailed under
            &#34;Integrated Risk Management Report&#34; on page 208.
          </p>
          <p className="mt-2">
            The Board, through the Board Audit Committee and Board Integrated
            Risk Management Committee, conducts a review of the internal control
            covering financial, operational and compliance controls and risk
            management and has obtained reasonable assurance of their
            effectiveness and successful adherence therewith.
          </p>
          <p className="mt-2">
            Directors&#39; Statement on Internal Control is on page 204.
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 ">
          <h2 className="text-xl font-bold mb-2">
            MATERIAL FORESEEABLE RISK FACTORS
          </h2>
          <p>
            Material risks that are applicable to the business operations of the
            Company and subsidiaries are set out in Notes 4 to 4.5 to the
            Financial Statements.
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 ">
          <h2 className="text-xl font-bold mb-2">
            APPRAISAL OF BOARD PERFORMANCE
          </h2>
          <p>
            A scheme of self-assessment is undertaken by each Director in
            conformity with the Section 1.5 (s) of the Finance Business Act
            Directions No. 05 of 2021 by answering a self-assessment
            questionnaire. The responses are collated by the Company Secretary,
            which are submitted to the Board for discussion and further
            evaluation by the Board.
          </p>
          <p className="mt-2">
            In terms of the said Direction, the Board also carried out an annual
            self-evaluation of its own performance and that of the
            Sub-Committees to ensure that they discharge their duties and
            responsibilities satisfactorily in terms of the Companies Act No. 07
            of 2007, Finance Business Act Direction No.05 of 2021, Listing Rules
            of Colombo Stock Exchange and Best Practices on Corporate
            Governance.
          </p>
          <p className="mt-2">
            Evaluations for the year under review of the Board of Directors and
            its Sub-Committees were discussed at the meeting of the Board of
            Directors held in the month of May, 2024.
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 ">
          <h2 className="text-xl font-bold mb-2">CORPORATE GOVERNANCE</h2>
          <p>
            The Board of Directors is responsible for the Governance of the
            Company.
          </p>
          <p className="mt-2">
            The Board of Directors has placed considerable emphasis on
            developing rules, structures and processes to ensure Integrity and
            Transparency in all of Company’s dealings and on making the best
            effort in achieving performance and quality profits. The Board has
            continuously refined the structure and systems to ensure governance
            on the lines as defined, being aware all the time that it is
            accountable to the stakeholders and to the general public.
          </p>
          <p className="mt-2">
            The Report on Corporate Governance which is on pages 164 to 178
            details the Governance practices and structures that are in place in
            the Company during the year under review.
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 ">
          <h2 className="text-xl font-bold mb-2">
            COMPLIANCE WITH LAWS AND REGULATIONS
          </h2>
          <p>
            The Compliance Officer independently monitors adherence with all
            applicable laws, regulations and statutory requirements and reports
            to the Board of Directors, the Board Audit Committee and the Board
            Integrated Risk Management Committee.
          </p>
          <p className="mt-2">
            The Board has made arrangements to make themselves aware of
            applicable laws, rules, and regulations and changes thereto,
            particularly to Listing Rules and applicable capital market
            provisions through regular updates provided by the Compliance
            Officer, Head of Legal, the Company Secretaries, and the Directors
            themselves, whose expertise lies in the f ield of Law / Finance /
            Audit.
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 ">
          <h2 className="text-xl font-bold mb-2">STATUTORY PAYMENTS</h2>
          <p>
            The Directors confirm that, to the best of their knowledge, all
            taxes, duties and levies payable by the Company, all contributions,
            levies and taxes payable on behalf of and in respect of employees of
            the Company and all other known statutory dues as were due and
            payable by the Company as at the reporting date have been paid or
            where relevant provided for, except for certain assessments where
            appeals have been lodged.
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 ">
          <h2 className="text-xl font-bold mb-2">ENVIRONMENTAL PROTECTION</h2>
          <p>
            The Company has not engaged in any activity that is harmful or
            hazardous to the environment. Measures taken by the Company on
            environmental protection are given in the report on Natural Capital
            on page 146.
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 ">
          <h2 className="text-xl font-bold mb-2">OUTSTANDING LITIGATION</h2>
          <p>
            In the opinion of the Directors and Company’s Lawyers, pending
            litigation by and against the Company will not have a material
            impact on the financial position of the Company or its future
            operations.
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 ">
          <h2 className="text-xl font-bold mb-2">CONTINGENT LIABILITIES</h2>
          <p>
            Except as disclosed in Note 43.2 to the Financial Statements, there
            were no material contingent liabilities as at the reporting date.
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 ">
          <h2 className="text-xl font-bold mb-2">
            EVENTS AFTER THE REPORTING DATE
          </h2>
          <p>
            Except for matters disclosed in Note 3.10 to the Financial
            Statements, there are no material events as at the date of the
            Auditor&#39;s Report which require adjustment to or disclosure in
            the Financial Statements.
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 ">
          <h2 className="text-xl font-bold mb-2">
            PROPOSED AMALGAMATION OF MULTI FINANCE PLC WITH THE COMPANY
          </h2>
          <p>
            In furtherance of the Financial Sector Consolidation Plan of the
            Central Bank of Sri Lanka, the Boards of Directors of Multi Finance
            PLC and the Company resolved, to amalgamate Multi Finance PLC with
            the Company under Section 239 of the Companies Act No.07 of 2007,
            whereby LB Finance PLC will be the Amalgamated Company, subject
            however to the regulatory approvals and the approval of the
            shareholders of both Multi Finance PLC and the Company, by way of
            Special Resolutions at Extraordinary General Meetings of the
            respective companies. The in-principle approval of the Central Bank
            of Sri Lanka has been received for the amalgamation, and an
            Extraordinary General Meeting of the Company will be held on 28th
            June 2024 following the Annual General Meeting for the purpose of
            considering and if thought fit, to pass the requisite Special
            Resolution approving the amalgamation..
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 ">
          <h2 className="text-xl font-bold mb-2">GOING CONCERN</h2>
          <p>
            The Board of Directors has reviewed the Company&#39;s
            corporate/business plans and is satisfied that the Company has
            adequate resources to continue its operations in the foreseeable
            future. Accordingly, the Financial Statements of the Company are
            prepared based on the going concern concept.
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 md:col-span-2">
          <h2 className="text-xl font-bold mb-2">ANNUAL GENERAL MEETING</h2>
          <p>
            The Notice of the Fifty First (51st) Annual General Meeting appears
            on page 431.
          </p>
        </div>

        <div className="bg-white text-blue rounded-lg p-6 md:col-span-2">
          <h2 className="text-xl font-bold mb-2">
            ACKNOWLEDGEMENT OF THE CONTENT OF THE REPORT
          </h2>
          <p>
            As required by section 168 (1) (k) of the Companies Act, this Report
            is signed on behalf of the Board of Directors of the Company by two
            (02) Directors and the Company Secretaries in pursuance of the
            authority granted by the Board Resolution passed on 31st May 2024
            pursuant to having acknowledged the contents of this Annual Report.
          </p>
          <div className="mt-4">
            <p className="font-bold">Signed on behalf of the Board by</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <img
                  src="/images/annual-report/prasannaSig.png"
                  alt="Chairman sign"
                />
                <p className="font-semibold">G A R D Prasanna</p>
                <p>Chairman</p>
              </div>
              <div>
                <img
                  src="/images/annual-report/sumithSig.png"
                  alt="ChairmanManaging Director sign"
                />
                <p className="font-semibold">Sumith Adhihetty</p>
                <p>Managing Director</p>
              </div>
            </div>
            <div className="mt-4">
              <img
                src="/images/annual-report/corporateSig.png"
                alt="Secretaries sign"
              />
              <p className="font-semibold">
                P W Corporate Secretarial (Pvt) Ltd
              </p>
              <p>Secretaries</p>
            </div>
            <p className="mt-4">27 May 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
