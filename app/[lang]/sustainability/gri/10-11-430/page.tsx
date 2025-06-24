import building from '@/public/images/annual-report/LB-Building.jpg';
import aboutlbqr from '@/public/images/annual-report/aboutlbqr.png';
import Image from 'next/image';

export default function GRIReporting1() {
  interface CompanyInfo {
    title: string;
    details: string | string[];
  }

  const companyInfo: CompanyInfo[] = [
    { title: 'Name of Company', details: 'L B Finance PLC' },
    {
      title: 'Legal Form',
      details: [
        'Public Limited Liability Company Incorporated in Sri Lanka under the provisions of the Companies Ordinance No.51 of 1938 (Cap 145) and re-registered as per the Companies Act No. 07 of 2007 on 06th June, 2008.',
        'A Licensed Finance Company under the Finance Business Act No. 42 of 2011.',
        'A Registered Finance Leasing Establishment in terms of Finance Leasing Act No. 56 of 2000.',
      ],
    },
    {
      title: 'Stock Exchange Listing',
      details:
        'The Company was admitted to the official list of the Colombo Stock Exchange on 30th December, 1997, in which the Company’s Ordinary Shares are listed currently.',
    },
    { title: 'Date of Incorporation', details: '30th May 1971' },
    { title: 'Company Registration Number', details: 'PQ 156' },
    { title: 'Tax Payer Identification Number', details: '104033431' },
    { title: 'VAT Registration Number', details: '104033431 7000' },
    { title: 'Central Bank Registration Number', details: 'RFC 1003' },
    {
      title: 'Principal Activities',
      details: [
        'The Company provides a comprehensive range of financial services encompassing acceptance of Fixed Deposits, maintenance of Savings Accounts, providing Finance Leases and Vehicle Loan Facilities, Mortgage Loans, Gold Loans, Personal Loans, other Credit Facilities, Digital Financial Services and Value Added Services.',
        'Principal Activities of the Company’s Subsidiaries',
        'L B Microfinance Myanmar Company Limited - carries on Microfinance lending in Myanmar.',
        'Multi Finance PLC – carries on business as a Licensed Finance Company and its business activities include acceptance of Fixed Deposits, maintenance of Savings Accounts, providing Finance Leases and Vehicle Loan Facilities, Mortgage Loans, Gold Loans, Personal Loans, other Credit Facilities.',
      ],
    },
    {
      title: 'Registered Office',
      details: [
        'No. 275/75, Prof. Stanley Wijesundara Mawatha, Colombo 07.',
        'Tel: 011 - 2 200 000 Fax: 011-5 345 327',
      ],
    },
    {
      title: 'Corporate Office',
      details: [
        'No. 20, Dharmapala Mawatha, Colombo 03.',
        'Tel: 011-2 155 000 Fax: 011-2 575 098',
      ],
    },
    { title: 'Outlets', details: 'Two Hundred (200) Branches' },
    { title: 'Website', details: 'www.lbfinance.com' },
    { title: 'Financial Year End', details: '31 March' },
    {
      title: 'Credit Rating',
      details:
        'The Company has been assigned a national long-term rating of BBB+ (lka) with a Stable Outlook by Fitch Ratings Lanka Limited.',
    },
    {
      title: 'Board of Directors and Board Appointed Committees',
      details: [
        'Board of Directors',
        'Mr. G A R D Prasanna (Chairman)',
        'Mr. Ashane Jayasekara (Independent Non-Executive Director/ Senior Director)',
        'Mr. Sumith Adhikary (Managing Director)',
        'Mr. Niroshan Udag (Deputy Managing Director)',
        'Mr. B D A Perera (Executive Director)',
        'Mr. Ravindra Yatawara (Executive Director)',
        'Ms. Yogadunsha Bhaskaran (Non-Executive Director)',
        'Ms. Ashwini Natesan (Independent Non-Executive Director)',
        'Mr. Dharmadasa Rangalle (Non-Executive Director)',
        'Ms. Yanika Amarasakera (Independent Non-Executive Director)',
      ],
    },
  ];

  const positions = [0, 11, 15, 19, 23, 27, 31, 35];

  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-4 md:pb-8 ">
            {/* Right column */}
            <div className="gap-4 flex flex-col bg-[#fcf7ef] rounded-lg p-4">
              {/* Vision */}
              <div className="bg-blue-600">
                <h2 className="text-xl font-bold mb-2 text-[#F3A847]">
                  Vision
                </h2>
                <p className="text-sm text-black">
                  To contribute to the quality of life experienced by our
                  depositors, customers, employees, and the general public
                  through partnerships that fuel the growth of our Company and
                  to create shareholder value both in the short term and long
                  term
                </p>
              </div>

              {/* Mission */}
              <div className="bg-orange-400 md:row-span-2">
                <h2 className="text-xl font-bold mb-2 text-[#F3A847]">
                  Mission
                </h2>
                <ul className="flex flex-col list-disc list-inside text-sm gap-4 text-black">
                  <li>
                    To mobilise public funds by innovating investment products
                    that will enhance the value delivered to our depositors
                  </li>
                  <li>
                    To engage in prudent lending to entrepreneurs to assist them
                    in the creation of wealth
                  </li>
                  <li>
                    To embark on investments in which results can be clearly
                    assessed and seize new opportunities in the market
                  </li>
                  <li>
                    To offer a caring and personalised service that will form
                    the foundation for developing lasting partnerships with our
                    stakeholders, employees, and the general public
                  </li>
                  <li>
                    To use training and career development to create an
                    empowered and committed group of employees who will drive
                    the Company to higher levels of achievement
                  </li>
                </ul>
              </div>

              {/* Goal */}
              <div>
                <h2 className="text-xl font-bold mb-2 text-[#F3A847]">Goal</h2>
                <p className="text-sm text-black">
                  To be a major player in the financial services sector in Sri
                  Lanka
                </p>
              </div>

              {/* Values */}
              <div className=" md:col-span-2">
                <h2 className="text-xl font-bold mb-2 text-[#F3A847]">
                  Values
                </h2>
                <ul className="flex flex-wrap gap-6 text-sm list-disc list-inside text-black">
                  <li>Excellence</li>
                  <li>Ethics</li>
                  <li>Transparency</li>
                  <li>Innovation</li>
                  <li>Professionalism</li>
                  <li>Quality</li>
                </ul>
              </div>
            </div>

            {/* Left column */}
            <div className="md:col-span-1 bg-[#daa765] p-4 rounded-lg">
              <Image
                src={building}
                alt="LB Finance Building"
                className="w-full h-auto mb-4 object-cover"
              />
              <p className="text-sm mb-4">
                LB Finance PLC was established as a private limited liability
                company in May 1971 and was converted to a public limited
                liability company in 1982. It became listed on the Colombo Stock
                Exchange in 1997, with Vanik Incorporation Limited holding the
                majority of shares. In 1999, Vanik Incorporation Limited gained
                control of the Company. Later on, in 2003, the renowned Sri
                Lankan entrepreneur, Mr Dhammika Perera assumed controlling
                interest in LB Finance PLC (then known as Vanik Leasing PLC)
                which is diverse in our operations with interests spanning
                lifestyle, finance, aluminium, plantation, leisure, consumer,
                and investments. In June 2008, LB Finance PLC was re-registered
                under the new Companies Act, No. 7 of 2007.
              </p>
              <p className="text-sm mb-4">
                Today, we proudly stand among the top-tier Non-Banking Financial
                Institutions (NBFIs) in Sri Lanka, backed by 53 years of
                invaluable experience. Throughout the past five decades, we have
                played a crucial role in fostering prosperity for individuals
                and businesses across the island. With the trust and respect of
                millions earned along the way, we are widely acknowledged as the
                preferred financial services provider in the market.
              </p>
              <div className="flex items-center">
                <Image src={aboutlbqr} alt="" className="mr-2 w-32 h-auto" />
                <p className="text-sm">
                  Visit our website for more information about LB Finance PLC
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#0A3D5F] text-white pb-4 md:pb-8">
            <div className="mx-auto">
              <div className="grid grid-cols-1 gap-y-4 md:gap-y-8">
                {/* Left column */}
                <div className="md:col-span-2">
                  <h2 className="text-3xl font-bold mb-2 text-[#F3A847]">
                    OWNERSHIP STRUCTURE
                  </h2>

                  <div className="text-center mb-4 p-6">
                    <Image
                      src="/images/annual-report/ownership.png"
                      alt="ownership image"
                      className="w-full mb-4 rounded-lg"
                      width={400}
                      height={400}
                    />
                  </div>

                  <h2 className="text-xl font-bold mb-2 text-[#F3A847]">
                    What Differentiates LBF ?
                  </h2>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex flex-col ">
                      <p>
                        Industry-best technology and leading digital innovations
                      </p>
                    </div>
                    <div className="flex flex-col ">
                      <p>A prudent lending strategy</p>
                    </div>
                    <div className="flex flex-col ">
                      <p>Customer oriented personalised business solutions</p>
                    </div>
                    <div className="flex flex-col ">
                      <p>Solid risk management fundamentals</p>
                    </div>
                    <div className="flex flex-col ">
                      <p>Carbon conscious business operations</p>
                    </div>
                    <div className="flex flex-col ">
                      <p>Good governance and ESG best practices</p>
                    </div>
                    <div className="flex flex-col ">
                      <p>Top-rated customer satisfaction activities</p>
                    </div>
                    <div className="flex flex-col ">
                      <p>Qualified and experienced Board of Directors</p>
                    </div>
                  </div>
                </div>

                {/* Right column */}
                <div className="bg-[#f9eddc] p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-2 text-[#F3A847]">
                      SIMPLICITY
                    </h3>
                    <p className="text-sm text-black">
                      Simplicity is the hallmark of our value proposition and
                      the essence of how LBF operates
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-2 text-[#F3A847]">
                      ACCESSIBILITY
                    </h3>
                    <p className="text-sm text-black">
                      Accessibility is at the heart of our brand promise to
                      enable customers to access our financial services in their
                      preferred medium
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-2 text-[#F3A847]">
                      AFFORDABILITY
                    </h3>
                    <p className="text-sm text-black">
                      Affordability is the assurance we give to our customers
                      that they will receive the best possible outcome at the
                      right price
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#F3A847]">
                      PERSONALISATION
                    </h3>
                    <p className="text-sm text-black">
                      Personalisation is the key to our effort to meet the exact
                      needs of all customer segments around the Country
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-blue">
            {companyInfo.map((info, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                {Array.isArray(info.details) ? (
                  <ul>
                    {info.details.map((detail, i) => (
                      <li
                        key={i}
                        className={`${positions.includes(i) && info.title.includes('Board of Directors and Board Appointed Committees') ? 'text-lg font-bold py-2' : ''}`}
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{info.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
