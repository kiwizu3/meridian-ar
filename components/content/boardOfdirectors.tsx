import MgtCard from '../cards/mgtCard';

const directors = [
  {
    name: 'MR. G A R D PRASANNA',
    role: 'Chairman/Non-Independent Non-Executive Director',
    appointedInfo: 'APPOINTED TO THE BOARD',
    appointedDate: '1st December 2021',
    additionalInfo: 'APPOINTED AS THE CHAIRMAN',
    additionalDate: '1st March 2022',
    imgSrc: '/images/annual-report/prasannaA.png',
    bgColor: 'bg-[#00C0C5]',
    circleColors: ['bg-[#466fb4]', 'bg-[#a04b85]', 'bg-[#58c07d]'],
  },
  {
    name: 'MR. ASHANE JAYASEKARA',
    role: 'Independent Non-Executive Director/Senior Director ',
    appointedInfo: 'APPOINTED TO THE BOARD',
    appointedDate: '30th October 2017',
    additionalInfo: 'APPOINTED AS SENIOR INDEPENDENT DIRECTOR',
    additionalDate: '1st March 2022',
    imgSrc: '/images/annual-report/ashaneA.png',
    bgColor: 'bg-[#00C0C5]',
    circleColors: [
      'bg-[#466fb4]',
      'bg-[#91c94c]',
      'bg-[#a04b85]',
      'bg-[#ff8e51]',
      'bg-[#fb5579]',
      'bg-[#00456b]',
    ],
  },
  {
    name: 'MR. SUMITH ADHIHETTY',
    role: 'Managing Director',
    appointedInfo: 'APPOINTED TO THE BOARD',
    appointedDate: '10th December 2003',
    imgSrc: '/images/annual-report/sumithA.png',
    bgColor: 'bg-[#d4a262]',
    circleColors: [],
  },
  {
    name: 'MR. NIROSHAN UDAGE',
    role: 'Deputy Managing Director',
    appointedInfo: 'APPOINTED TO THE BOARD',
    appointedDate: '1st January 2007',
    imgSrc: '/images/annual-report/niroshanA.png',
    bgColor: 'bg-[#d4a262]',
    circleColors: ['bg-[#58c07d]'],
  },
  {
    name: 'MR. B D A PERERA',
    role: 'Executive Director',
    appointedInfo: 'APPOINTED TO THE BOARD',
    appointedDate: '1st January 2007',
    imgSrc: '/images/annual-report/pereraA.png',
    bgColor: 'bg-[#d4a262]',
    circleColors: ['bg-[#00456b]'],
  },
  {
    name: 'MR. RAVINDRA YATAWARA',
    role: 'Executive Director',
    appointedInfo: 'APPOINTED TO THE BOARD',
    appointedDate: '15th March 2016',
    imgSrc: '/images/annual-report/raveendraA.png',
    bgColor: 'bg-[#d4a262]',
    circleColors: [],
  },
  {
    name: 'MS. YOGADINUSHA BHASKARAN',
    role: 'Non-Executive Director',
    appointedInfo: 'APPOINTED TO THE BOARD',
    appointedDate: '15th March 2016',
    imgSrc: '/images/annual-report/yogaA.png',
    bgColor: 'bg-[#00acb4]',
    circleColors: ['bg-[#91c94c]', 'bg-[#ff8e51]'],
  },
  {
    name: 'MS. ASHWINI NATESAN',
    role: 'Independent Non-Executive Director',
    appointedInfo: 'APPOINTED TO THE BOARD',
    appointedDate: '1st September 2018',
    imgSrc: '/images/annual-report/ashwiniA.png',
    bgColor: 'bg-[#00C0C5]',
    circleColors: [
      'bg-[#466fb4]',
      'bg-[#91c94c]',
      'bg-[#ff8e51]',
      'bg-[#fb5579]',
      'bg-[#00456b]',
      'bg-[#58c07d]',
    ],
  },
  {
    name: 'MR. DHARMADASA RANGALLE',
    role: 'Non-Executive Director',
    appointedInfo: 'APPOINTED TO THE BOARD',
    appointedDate: '10th April 2019',
    imgSrc: '/images/annual-report/dharmadasaA.png',
    bgColor: 'bg-[#00C0C5]',
    circleColors: ['bg-[#fb5579]'],
  },
  {
    name: 'MS. YANIKA AMARASEKERA',
    role: 'Independent Non-Executive Director',
    appointedInfo: 'APPOINTED TO THE BOARD',
    appointedDate: '1st July 2021',
    imgSrc: '/images/annual-report/yanika.png',
    bgColor: 'bg-[#00C0C5]',
    circleColors: ['bg-[#a04b85]', 'bg-[#58c07d]'],
  },
];

export default function  BoardOfDirectors() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-4 h-[654px] overflow-auto flex flex-col gap-6 custom-scrollbar">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {directors?.map((item: any) => (
          <div key={item.name}>
            <MgtCard
              key={item}
              name={item.name}
              role={item.role}
              appointedInfo={item.appointedInfo}
              appointedDate={item.appointedDate}
              additionalInfo={item.additionalInfo}
              additionalDate={item.additionalDate}
              imgSrc={item.imgSrc}
              bgColor={item.bgColor}
              circleColors={item.circleColors}
            />
          </div>
        ))}
      </div>
      <div className="bg-white text-blue rounded-lg p-6 grid gap-6 col-span-2">
        <div>
          <h2 className="text-xl text-blue">Board Composition</h2>
          <div className="flex gap-4 items-center">
            <div className={`w-3 h-3 rounded-full bg-[#d4a262]`}></div>
            <p> Executive Director</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className={`w-3 h-3 rounded-full bg-[#00acb4]`}></div>
            <p> Non-Executive Director</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl text-blue">Board Sub-Committee Membership</h2>
          <div className="flex gap-4 items-center">
            <div className={`w-3 h-3 rounded-full bg-[#466fb4]`}></div>
            <p> Board Nominations and Governance Committee (BNGC)</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className={`w-3 h-3 rounded-full bg-[#91c94c]`}></div>
            <p> Board Audit Committee (BAC)</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className={`w-3 h-3 rounded-full bg-[#a04b85]`}></div>
            <p> Board Human Resource and Remuneration Committee (BHRRC)</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className={`w-3 h-3 rounded-full bg-[#ff8e51]`}></div>
            <p> Board Integrated Risk Management Committee (BIRMC)</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className={`w-3 h-3 rounded-full bg-[#fb5579]`}></div>
            <p>Board Related Party Transactions Review Committee (BRPTRC)</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className={`w-3 h-3 rounded-full bg-[#00456b]`}></div>
            <p>Board Information Security Committee (BISC)</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className={`w-3 h-3 rounded-full bg-[#58c07d]`}></div>
            <p> Board Sustainability Committee (BSC)</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Column */}
        <div className="bg-[#D69055] p-6 rounded-md text-white">
          <h3 className="font-bold text-lg mb-4">MR. G A R D PRASANNA</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">Appointed to the Board</p>
              <p>
                Appointed to the Board on 1st December 2021 and as the Chairman
                of the Board of Directors on 1st March 2022.
              </p>
            </div>
            <div>
              <p className="font-semibold">Role</p>
              <p>Chairman/Non-Independent Non-Executive Director</p>
            </div>
            <div>
              <p className="font-semibold">Skills and Experience</p>
              <p>
                Mr. G A R D Prasanna has wide experience in various business
                management strategies and a business leader in manufacturing,
                banking and finance, leisure, plantations, and hydropower
                generation. He has many of years of experience in managing
                businesses and extensive governance experience gained through
                leadership of the Boards of quoted and unquoted companies.
              </p>
            </div>
            <div>
              <p className="font-semibold">Current Appointments</p>
              <p>
                He holds directorships in sixteen other companies viz: an
                Independent Non Executive Director of Royal Ceramics Lanka PLC,
                Managing Director of Wise Property Solutions (Pvt) Ltd,
                Executive Director of Wise Homes (Pvt) Ltd and Grandmark (Pvt)
                Ltd, Non-Executive Director of Multi Finance PLC, Rocell
                Bathware Limited, Rocell Ceramics Distributors (Private)
                Limited, Rocell Properties Limited, Country Energy (Private)
                Limited, La Forteresse (Private) Limited, Delmege Forsyth & Co.
                (Shipping) Ltd, Lewis Shipping (Pvt) Ltd, Delmege Air Services
                (Pvt) Ltd, Delmege Aero Services (Private) Limited, Delmege
                Insurance Brokers (Pvt) Limited and Delmege Airline Services
                (Private) Limited.
              </p>
            </div>
            <div>
              <p className="font-semibold">Former Appointments</p>
              <p>
                Director of Lanka Ceramics PLC, Director of Delmege Forsyth &
                Co. Ltd, Director of Delship Services (Pvt) Ltd, Director of
                Lewis Brown Air Services (Pvt) Ltd, Chairman of Pan Asian
                Banking Corporation PLC, Director of Tekro Holdings (Pvt) Ltd,
                Delship Services (Pvt) Ltd, Hayleys Global Beverages (Pvt) Ltd,
                Director of Delmege Forsyth & Co. (Exports) (Pvt) Ltd, Delmege
                Coir (Pvt) Ltd, Director of Delmege Aviation Services (Pvt) Ltd
                and Alternate Director to Mr. K D D Perera of Lanka Tiles PLC.
              </p>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="bg-[#00989E] p-6 rounded-md text-white">
          <h3 className="font-bold text-lg mb-4">MR. ASHANE JAYASEKARA</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">Appointed to the Board</p>
              <p>
                On 30th October 2017, Appointed as Senior Independent Director
                on 1st March 2022
              </p>
            </div>
            <div>
              <p className="font-semibold">Role</p>
              <p>
                Independent Non-Executive Director (Senior Independent Director)
              </p>
            </div>
            <div>
              <p className="font-semibold">Skills and Experience</p>
              <p>
                Mr. Jayasekara is a Fellow Member (FCA) of the Institute of
                Chartered Accountants of Sri Lanka, a Fellow Member (FCMA) of
                the Chartered Institute of Management Accountants – UK, and a
                Fellow Member (FBCS) of the British Computer Society - UK. He
                holds Associate Membership (AIArb) of the Singapore Institute of
                Arbitrators. He has a Bachelor of Science Degree [Hons] in
                Information Systems from the London Guildhall University and a
                Master of Business Administration from the University of
                Southern Queensland. He also holds a Master of Laws (LLM) from
                Cardiff Metropolitan University specialising in Information
                Technology and Intellectual Property. Mr. Jayasekara is a
                Certified Internal Auditor [IIA - USA], Certified Fraud Examiner
                [ACFE - USA], Certified Information Systems Auditor [ISACA -
                USA] and a Computer Hacking Forensic Investigator [EC Council -
                USA].
              </p>
              <p>
                He has over 20 years of experience in the fields of internal
                audit, cyber security, fraud investigations, corporate
                governance, risk management and internal controls. His
                experience spans private, publicly listed, multinational and
                government enterprises across a range of sectors. He has
                overseen many forensic audits and provided litigation support
                for cases ranging from arbitration hearings to Magistrates and
                High Court cases. He has served as a consultant to local
                government and state-owned enterprises on the development of
                enterprise risk management policies and IPPF based Internal
                audit manuals. He is a visiting faculty member at leading state
                and private sector universities and has played a pioneering role
                in the introduction and delivery of Fraud & Forensic Accounting
                as a subject in undergraduate and postgraduate programs in Sri
                Lanka.
              </p>
            </div>
            <div>
              <p className="font-semibold">Other Current Appointments</p>
              <p>
                He holds directorships in three other companies viz: Deputy
                Managing Partner of BDO Partners Sri Lanka and Managing Director
                of BDO Partners (Pvt) Ltd and Independent Non-Executive Director
                of National Savings Bank.
              </p>
              <p>
                He is also a Council Member - Institute of Chartered Accountants
                Sri Lanka, Council Member - University of Colombo, Vice
                President - ISACA Sri Lanka Chapter [Affiliated to ISACA Global
                USA], Member - Global Advisory Council of the Association of
                Certified Fraud Examiners USA and Member – Global Advisory Board
                on Computer Forensics of the EC Council USA.
              </p>
            </div>
            <div>
              <p className="font-semibold">Previous Key Appointments</p>
              <p>
                Managing Partner of BDO Maldives, Director of BT Communication
                Lanka (Pvt) Ltd. (Subsidiary of British Telecom Global Services
                UK), Director of BDO BPO Services (Pvt) Ltd, Director of BDO
                Prime Consultants (Pvt) Ltd, President of the Institute of
                Internal Auditors Sri Lanka [Affiliated to IIA Global USA] in
                2012/13, Chairman of the Integrated Reporting Council of Sri
                Lanka.
              </p>
            </div>
          </div>
        </div>

        {/* Third Column */}
        <div className="bg-[#00989E] p-6 rounded-md text-white">
          <h3 className="font-bold text-lg mb-4">MR. SUMITH ADHITHETTY</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">Appointed to the Board</p>
              <p>On 10th December 2003</p>
            </div>
            <div>
              <p className="font-semibold">Role</p>
              <p>Managing Director</p>
            </div>
            <div>
              <p className="font-semibold">Skills and Experience</p>
              <p>
                He is a well-known professional in the marketing field, counts
                over 45 years of experience in the finance sector.
              </p>
            </div>
            <div>
              <p className="font-semibold">Current Appointments</p>
              <p>
                He holds directorships in nine other companies viz: a
                Non-Executive Director of Vallibel One PLC, Multi Finance PLC,
                The Fortress Resorts PLC , LB Microfinance Myanmar Company
                Limited, Greener Water Ltd., Summer Season Ltd., Summer Season
                Mirissa (Pvt) Ltd., Summer Season Residencies Ltd., and La
                Fortresse (Private) Limited.
              </p>
            </div>
            <div>
              <p className="font-semibold">Former appointments</p>
              <p>
                Deputy Managing Director of Mercantile Investments Limited and
                served as a Director of Nuwara Eliya Hotels Company Limited,
                Grand Hotel (Private) Limited, Royal Palm Beach Hotels Limited,
                Tangerine Tours Limited, Security Ceylon (Private) Limited,
                Director of Vallibel Finance PLC and Pan Asia Banking
                Corporation PLC. Also served as the Managing Director of The
                Fortress Resorts PLC.
              </p>
            </div>
          </div>
        </div>

        <div className=" bg-[#D69055] p-6 rounded-md text-white">
          <h3 className="font-bold text-lg mb-4">MR. NIROSHAN UDAGE</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">Appointed to the Board</p>
              <p>On 1st January 2007</p>
            </div>
            <div>
              <p className="font-semibold">Role</p>
              <p>Deputy Managing Director</p>
            </div>
            <div>
              <p className="font-semibold">Skills and Experience</p>
              <p>
                He holds Bachelor’s Degree in Science from the University of
                Colombo and possesses 33 years of experience in the field of
                leasing and finance, including 10 years at Lanka Orix Leasing
                Company PLC and 03 years at Mercantile Investments Limited prior
                to joining LB Finance PLC in 2004. He has undergone extensive
                training in Strategy and Management in Banking conducted by
                Intentional Development Ireland Ltd in Dublin and London and
                also successfully completed High Potentials Leadership Program
                at Harvard Business School in Boston, MA, USA in 2012.
              </p>
            </div>
            <div>
              <p className="font-semibold">Current Appointments</p>
              <p>
                He holds directorships in two other companies viz: a
                Non-Executive Director of Multi Finance PLC, LB Microfinance
                Myanmar Company Limited.
              </p>
            </div>
            <div>
              <p className="font-semibold">Former Appointments</p>
              <p>
                He is also a Council Member of The Finance Houses Association of
                Sri Lanka (FHA). Director of Hayleys Fibre PLC, Chairman of The
                Finance Houses Association of Sri Lanka (FHA), Member of the
                Financial System Stability Consultative Committee established by
                the Central Bank of Sri Lanka, Director of Ceybit Information
                Bureau of Sri Lanka (CRIB).
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#D69055] p-6 rounded-md text-white">
          <h3 className="font-bold text-lg mb-4">MR. B D A PERERA</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">Appointed to the Board</p>
              <p>On 1st January 2007</p>
            </div>
            <div>
              <p className="font-semibold">Role</p>
              <p>Executive Director</p>
            </div>
            <div>
              <p className="font-semibold">Skills and Experience</p>
              <p>
                He is an Associate Member of the Chartered Institute of
                Management Accountants of UK (ACMA, CGMA (UK)) and holds a BSc
                (Business Administration) Special Degree from the University of
                Sri Jayewardenepura, successfully completed High Potentials
                Leadership Program in 2012 at Harvard Business School in Boston,
                MA, USA. Counts over 26 years of experience in the leasing
                industry that includes positions at Commercial Leasing Company
                Limited, Lanka Orix Leasing Company PLC and a Merchant Bank in
                Bangladesh.
              </p>
            </div>
            <div>
              <p className="font-semibold">Current Appointments</p>
              <p>
                He holds directorships in three other companies viz: an
                Non-Executive Director of Multi Finance PLC, LB Microfinance
                Myanmar Company Limited and Independent Non-Executive Director
                of Pan Asia Banking Corporation PLC
              </p>
            </div>
            <div>
              <p className="font-semibold">Former Appointments</p>
              <p>Director of Hayleys Fibre PLC</p>
            </div>
          </div>
        </div>

        {/* Fifth Column */}
        <div className="bg-[#00989E] p-6 rounded-md text-white">
          <h3 className="font-bold text-lg mb-4">MR. RAVINDRA YATAWARA</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">Appointed to the Board</p>
              <p>On 15th March 2016</p>
            </div>
            <div>
              <p className="font-semibold">Role</p>
              <p>Executive Director</p>
            </div>
            <div>
              <p className="font-semibold">Skills and Experience</p>
              <p>
                He Holds a BSc. Degree in Business Administration from the
                Oklahoma State University, USA. Counts over 28 years’ experience
                in the Finance Industry, including both Managerial and Senior
                Managerial positions in the LOLC Group, Hatton National Bank PLC
                and AMW Capital Leasing PLC.
              </p>
            </div>
            <div>
              <p className="font-semibold">Current Appointments</p>
              <p>
                He holds directorships in two other companies viz: an
                Non-Executive Director of Multi Finance PLC and LB Microfinance
                Myanmar Company Limited.
              </p>
            </div>
            <div>
              <p className="font-semibold">Former Appointments</p>
              <p>
                General Manager of LB Finance PLC, Chairman of The Finance
                Houses Association of Sri Lanka (FHA). Vice Chairman of the
                Leasing Association of Sri Lanka (LASL).
              </p>
            </div>
          </div>
        </div>

        {/* Sixth Column */}
        <div className=" bg-[#00989E] p-6 rounded-md text-white">
          <h3 className="font-bold text-lg mb-4">MS. YOGADINUSHA BHASKARAN</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">Appointed to the Board</p>
              <p>On 15th March 2016</p>
            </div>
            <div>
              <p className="font-semibold">Role</p>
              <p>Non-Executive Director</p>
            </div>
            <div>
              <p className="font-semibold">Skills and Experience</p>
              <p>
                Ms. Dinusha Bhaskaran is a Fellow member of the Chartered
                Institute of Management Accountants of UK (FCMA), Fellow member
                of CPA Australia (FCPA) and Fellow Member of the Institute of
                Bankers Sri Lanka (IBSL).
              </p>
            </div>
            <div>
              <p className="font-semibold">Current Appointments</p>
              <p>
                She holds directorships in six other companies viz: Managing
                Director of Vallibel One PLC, Chairperson / Director of Greener
                Water Ltd, Executive Director of Delmege Ltd, Non-Executive
                Director of Vallibel Power Erathna PLC, Multi Finance PLC and
                Country Energy (Private) Limited.
              </p>
            </div>
            <div>
              <p className="font-semibold">Former Appointments</p>
              <p>
                Ms. Dinusha Bhaskaran has previously worked as a Chief Financial
                Officer of Clenergy, Australia and Financial Controller in
                several Australian companies based in Melbourne, Assistant
                General Manager (Finance & Planning) at Pan Asia Banking
                Corporation PLC. Alternate Director to Mr. K D D Perera on the
                Boards of Haycarb PLC, Hayleys Fabric PLC and Dipped Products
                PLC.
              </p>
            </div>
          </div>
        </div>

        {/* Seventh Column */}
        <div className="bg-[#D69055] p-6 rounded-md text-white">
          <h3 className="font-bold text-lg mb-4">MS. ASHWINI NATESAN</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">Appointed to the Board</p>
              <p>On 1st September 2018</p>
            </div>
            <div>
              <p className="font-semibold">Role</p>
              <p>Independent Non-Executive Director</p>
            </div>
            <div>
              <p className="font-semibold">Skills and Experience</p>
              <p>
                She is a qualified legal practitioner, specialising in
                Technology, Media and Telecommunications (TMT) Law. She consults
                on TMT Law issues including those concerning financial
                technology (FinTech) . She also works on research projects
                relating to data protection, privacy, right to information,
                alternative dispute resolution mechanisms, etc. both
                independently and with other organisations. She is also a
                Research Fellow at LIRNEasia, a think tank in Sri Lanka. She
                frequently participates in national and international forums to
                speak on broader TMT law issues. In India, she has previously
                worked in litigation and corporate law offices including with
                Senior Counsel Mr. P. Wilson, former Additional Solicitor
                General of India and former Additional Advocate General of Tamil
                Nadu. She holds an LL.M (Master of Laws) in International
                Business Law from Faculty of Law, National University of
                Singapore where she graduated as one of the top students of her
                batch. She has a Bachelor of Arts and Law (B.A. LL.B (Hons.),
                Distinction from the School of Excellence in Law, Tamil Nadu Dr.
                Ambedkar Law University, Chennai, India. Additionally, she has
                diplomas in International Business Management (offered by Loyola
                Institute of Business Administration, India) Commercial
                Arbitration (offered by ICLP, Sri Lanka) and AI Policy (Center
                for AI and Digital Policy).
              </p>
            </div>
            <div>
              <p className="font-semibold">Current appointments</p>
              <p>None</p>
            </div>
            <div>
              <p className="font-semibold">Former appointments</p>
              <p>Independent Non-Executive Director of Multi Finance PLC.</p>
            </div>
          </div>
        </div>

        {/* Eighth Column */}
        <div className="bg-[#D69055] p-6 rounded-md text-white">
          <h3 className="font-bold text-lg mb-4">MR. DHARMADASA RANGALLE</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">Appointed to the Board</p>
              <p>On 10th April 2019</p>
            </div>
            <div>
              <p className="font-semibold">Role</p>
              <p>Non-Executive Director</p>
            </div>
            <div>
              <p className="font-semibold">Skills and Experience</p>
              <p>
                He is a retired Senior Commissioner of the Department of Inland
                Revenue (Special Grade). He has over 34 years of experience in
                the Government (Public) Sector, including 31 years of experience
                of Tax Administration as an Assessor, a Deputy Commissioner, a
                Commissioner, and a Senior Commissioner. He obtained the Master
                of Commerce (M. Com) Degree from the University of Kelaniya, the
                Bachelor of Commerce (B. Com) Special Degree- Second Class Upper
                Division (Honours) from the University of Kelaniya. He has
                completed all course work relating to the Doctoral Degree
                Programmer at the Open University of Malaysia. He is also a
                fellow member of the Sri Lanka Institute of Taxation. He was a
                visiting Lecturer at the University of Kelaniya, Sri Lanka
                Institute of Information Technology (SLIIT), Business School of
                Institute of Chartered Accountants of Sri Lanka and the Sri
                Lanka Institute of Taxation.
              </p>
            </div>
            <div>
              <p className="font-semibold">Current Appointments</p>
              <p>
                He holds directorships in five other companies viz: a
                Non-Executive Director of Hayleys Aventura (Pvt) Ltd. and
                Hayleys Advantis Limited, which are subsidiaries of Hayleys PLC,
                Multi Finance PLC, DHS Holdings (Pvt) Ltd and Flying Angels’
                Flight Academy (Pvt) Ltd.
              </p>
            </div>
            <div>
              <p className="font-semibold">Former Appointments</p>
              <p>None</p>
            </div>
          </div>
        </div>

        <div className="bg-[#00989E] p-6 rounded-md text-white">
          <h3 className="font-bold text-lg mb-4">MS. YANIKA AMARASEKERA</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">Appointed to the Board</p>
              <p>On 01 July 2021</p>
            </div>
            <div>
              <p className="font-semibold">Role</p>
              <p>Independent Non-Executive Director</p>
            </div>
            <div>
              <p className="font-semibold">Skills and Experience</p>
              <p>
                She is an alumni of the prestigious UC Berkeley from where she
                obtained two Bachelor of Arts degrees in Political Economy and
                Media Studies with an emphasis on Digital Marketing. She
                completed her MSc in Entrepreneurship, Innovation, and
                Management in Imperial College, London. She founded the
                country’s first online wedding gift registry, Silver Aisle,
                which has since evolved into a multidimensional E-commerce
                gifting site and is now considered the premier platform of
                choice.
              </p>
            </div>
            <div>
              <p className="font-semibold">Current Appointments</p>
              <p>Chief Executive Officer of Silver Aisle (Pvt) Ltd.</p>
            </div>
            <div>
              <p className="font-semibold">Former Appointments</p>
              <p>
                Director of Water Land and Non-Executive Director of Multi
                Finance PLC.
              </p>
            </div>
          </div>
        </div>    
      </div>
    </div>
  );
}
