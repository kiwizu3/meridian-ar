export default function BoardCompetenceMatrix() {
  // Board members data
  const boardMembers = [
    'Mr. G A R D Prasanna',
    'Mr. Ashane Jayasekara',
    'Mr. Sumith Adhihetty',
    'Mr. Niroshan Udage',
    'Mr. B D A Perera',
    'Mr. Ravindra Yatawara',
    'Ms. Yogadinusha Bhaskaran',
    'Mr. Ashwini Natesan',
    'Mr. Dharmadasa Rangalle',
    'Ms. Yanika Amarasekera',
    'Mr. Piyal Hennayake',
    'Mr. Priyantha Talwatte',
  ];

  // Competencies data with ticks for each member (example data - adjust as needed)
  const competencies = [
    {
      name: 'Business leadership, transformation, innovation and business development',
      members: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // All members have this
    },
    {
      name: 'Strategy and Sustainability',
      members: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Example
    },
    {
      name: 'Banking and Finance',
      members: [1, 2, 3, 4, 5, 6, 8, 10, 11], // Example
    },
    {
      name: 'Audit and Assurance',
      members: [1, 6, 8], // Example
    },
    {
      name: 'Risk management',
      members: [1, 4, 6, 7, 8, 10, 11], // Example
    },
    {
      name: 'People management and development',
      members: [2, 3, 4, 5, 6, 8, 10], // All members
    },
    {
      name: 'Information, technology and digital',
      members: [1, 4, 6, 7, 8, 9, 11], // Example
    },
    {
      name: 'Legal and compliance',
      members: [1, 7, 8, 10, 11], // Example
    },
    {
      name: 'Environmental, Social and Governance (ESG)',
      members: [0, 6, 8, 10], // Example
    },
    {
      name: 'Business Management',
      members: [0, 1, 2, 3, 4, 5, 6, 8], // All members
    },
    {
      name: 'Leisure and hospitality',
      members: [2, 6, 8], // Example
    },
    {
      name: 'Stakeholder engagement and management',
      members: [0, 1, 2, 3, 4, 6, 8, 10], // All members
    },
  ];

  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6 rounded-lg">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
          <div className="bg-[#fcf7ef] rounded-lg p-6">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold mb-2 text-[#0A3D5F]">
                5.6 Skills, Knowledge and Competency of the Board
              </h1>
              <h2 className="text-xl font-bold mb-4 text-[#F3A847] border-b border-[#F3A847] pb-1">
                a. Competence Matrix
              </h2>
              <div className="bg-[#daa765] p-4 rounded-lg mb-6">
                <p className="text-sm font-medium text-black">
                  CASL Code Principle (A.4) The board should ensure the
                  availability within it, of those with sufficient financial
                  acumen and knowledge to offer guidance on matters of finance.
                </p>
              </div>
            </div>

            {/* Competence Matrix Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white text-sm text-black">
                <thead>
                  <tr className="bg-[#0A3D5F] text-white">
                    <th className="py-3 px-4 text-left w-1/4">Competences</th>
                    {boardMembers.map((member, index) => (
                      <th key={index} className="py-3 px-2 text-center text-xs">
                        {member.split(' ')[0]}
                        <br />
                        {member.split(' ').slice(1).join(' ')}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {competencies.map((competence, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className={
                        rowIndex % 2 === 0 ? 'bg-[#f7f7f7]' : 'bg-white'
                      }
                    >
                      <td className="py-3 px-4 border-b border-gray-200 font-medium">
                        {competence.name}
                      </td>
                      {boardMembers.map((_, colIndex) => (
                        <td
                          key={colIndex}
                          className="py-3 px-2 border-b border-gray-200 text-center"
                        >
                          {competence.members.includes(colIndex) ? (
                            <span className="text-green-600 font-bold">✓</span>
                          ) : (
                            <span className="text-gray-300">-</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Legend */}
            <div className="mt-4 text-xs text-black">
              <p>✓ = Competence present | - = Competence not present</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
