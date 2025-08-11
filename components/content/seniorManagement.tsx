import ManagementCard from '../cards/managementCard/managementCard';

const teamData = [
  {
    name: 'Mr. Marlon Perera',
    title: 'Senior Deputy General Manager',
    position: 'Deposits',
    image: '/images/annual-report/marlonA.png',
  },
  {
    name: 'Mr. Ainsley Motha',
    title: 'Deputy General Manager',
    position: 'Credit and Branch Operations',
    image: '/images/annual-report/ainslyA.png',
  },
  {
    name: 'Mr. Chethana Kahandugoda',
    title: 'Chief Information Officer',
    position: 'Information Technology',
    image: '/images/annual-report/chethanaA.png',
  },
  {
    name: 'Mr. Roshan Jayawardena',
    title: 'Senior Assistant General Manager',
    position: 'Micro Leasing',
    image: '/images/annual-report/roshanA.png',
  },
  {
    name: 'Mr. Prasanna Kalinga',
    title: 'Assistant General Manager',
    position: 'Human Resources',
    image: '/images/annual-report/kalingaA.png',
  },
  {
    name: 'Mr. Wickrama Punchihewa',
    title: 'Assistant General Manager',
    position: 'Legal',
    image: '/images/annual-report/wickramaA.png',
  },
  {
    name: 'Mr. Kalpa Sanjeewa',
    title: 'Assistant General Manager',
    position: 'Credit and Branch Operations',
    image: '/images/annual-report/kalpaA.png',
  },
  {
    name: 'Mr. Malith Hewage',
    title: 'Chief Financial Officer',
    position: '',
    image: '/images/annual-report/malithA.png',
  },
  {
    name: 'Mr. Suneth Dabareera',
    title: 'Chief Internal Auditor',
    position: '',
    image: '/images/annual-report/sunethA.png',
  },
  {
    name: 'Mr. Suraj Karunanayaka',
    title: 'Assistant General Manager',
    position: 'Gold Loan',
    image: '/images/annual-report/surajA.png',
  },
  {
    name: 'Ms. Deshika Yatawara',
    title: 'Assistant General Manager',
    position: 'Treasury',
    image: '/images/annual-report/deshikaA.png',
  },
  {
    name: 'Ms. Thisari Gunasekera',
    title: 'Assistant General Manager',
    position: 'Risk Management',
    image: '/images/annual-report/thisariA.png',
  },
  // Additional members from the new image
  {
    name: 'Mr. Kenneth Daniel',
    title: 'Senior Chief Manager',
    position: 'Credit and Branch Operations',
    image: '/images/annual-report/kennethA.png',
  },
  {
    name: 'Mr. Gihan De Silva',
    title: 'Chief Manager',
    position: 'Recoveries',
    image: '/images/annual-report/gihanA.png',
  },
  {
    name: 'Mr. Gayan Ayuwardane',
    title: 'Chief Manager',
    position: 'Central Region',
    image: '/images/annual-report/gayanA.png',
  },
  {
    name: 'Mr. Sudeep Perera',
    title: 'Chief Manager',
    position: 'Marketing',
    image: '/images/annual-report/sudeepA.png',
  },
  {
    name: 'Mr. Shanaka Perera',
    title: 'Senior Manager',
    position: 'Administration',
    image: '/images/annual-report/shanakaA.png',
  },
  {
    name: 'Mr. Waruna Perera',
    title: 'Country Manager',
    position: 'Myanmar',
    image: '/images/annual-report/warunaA.png',
  },
  {
    name: 'Mr. Sameera Wanninayake',
    title: 'Senior Manager',
    position: 'Business Process Development',
    image: '/images/annual-report/sameeraA.png',
  },
  {
    name: 'Mr. Maheshan Karunarathne',
    title: 'Senior Manager',
    position: 'Credit & Branch Operations',
    image: '/images/annual-report/maheshanA.png',
  },
  {
    name: 'Mr. Prasad Surendra',
    title: 'Senior Manager',
    position: 'Credit & Branch Operations',
    image: '/images/annual-report/prasadA.png',
  },
  {
    name: 'Mr. Chanaka Alexander',
    title: 'Senior Manager',
    position: 'Credit & Branch Operations',
    image: '/images/annual-report/chanakaA.png',
  },
  {
    name: 'Mr. Varuna Perera',
    title: 'Senior Manager',
    position: 'Compliance',
    image: '/images/annual-report/varunaA.png',
  },
  {
    name: 'Mr. Surain Silva',
    title: 'Chief Information Security Officer',
    position: '',
    image: '/images/annual-report/surainA.png',
  },
  {
    name: 'Mr. Chaminda Perera',
    title: 'Senior Manager',
    position: 'Finance Operations',
    image: '/images/annual-report/chamindaA.png',
  },
  {
    name: 'Mr. Stephan Fonseka',
    title: 'Senior Manager',
    position: 'Insurance',
    image: '/images/annual-report/stephonA.png',
  },
  {
    name: 'Mr. Shane Ahamat',
    title: 'Senior Manager',
    position: 'Fixed Deposits',
    image: '/images/annual-report/shaneA.png',
  },
  {
    name: 'Mr. Hemal Ekanayake',
    title: 'Senior Manager',
    position: 'ERP & Business Analysis',
    image: '/images/annual-report/hemalA.png',
  },
  {
    name: 'Mr. Thusitha Wickrama',
    title: 'Senior Manager',
    position: 'Sustainability & Digital Strategy',
    image: '/images/annual-report/thusithA.png',
  },
  {
    name: 'Mr. Jagath Hettiarachchi',
    title: 'Senior Manager',
    position: 'Credit & Branch Operations',
    image: '/images/annual-report/jagathA.png',
  },
  {
    name: 'Mr. Chanaka Pemuwan',
    title: 'Senior Manager',
    position: 'Credit & Branch Operations',
    image: '/images/annual-report/chanakaA.png',
  },
  {
    name: 'Mr. Pamudra Jayatissa',
    title: 'Senior Manager',
    position: 'Credit & Branch Operations',
    image: '/images/annual-report/pamudraA.png',
  },
  {
    name: 'Mr. Panduka Wijekoon',
    title: 'Senior Manager',
    position: 'Security Surveillances & Transport',
    image: '/images/annual-report/pandukaA.png',
  },
  {
    name: 'Mr. Sampath Kumara',
    title: 'Senior Manager',
    position: 'Solution Architect, Information Technology',
    image: '/images/annual-report/sampathA.png',
  },
];
export default function SeniorManagement() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto grid grid-cols-1 gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {teamData.map((member, index) => (
          <ManagementCard
            key={index}
            name={member.name}
            title={member.title}
            position={member.position}
            image={member.image}
          />
        ))}
      </div>
      <div className="bg-white text-blue rounded-lg p-6 flex flex-col md:flex-row gap-6 justify-center">
        <img src="/images/annual-report/mgtTeamQr.png" alt="Qr" className='w-36'/>
        <p className='w-40'>Scan QR code to view our Senior Management profiles online</p>
      </div>
    </div>
  );
}
