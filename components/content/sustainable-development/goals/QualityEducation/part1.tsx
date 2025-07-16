import Image from 'next/image';

export default function QualityEducationPart1() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Blood Donation Programmes (Continued)
        </h2>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-medium mb-2">
            Expected Benefits and Impact
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Builds stronger connections with local communities</li>
            <li>Promotes a culture of compassion and volunteerism</li>
            <li>Supports healthcare systems during emergencies</li>
            <li>Encourages collective social responsibility</li>
            <li>Fosters unity and inclusivity across society</li>
            <li>
              Enhances LB's image as a caring, socially responsible organisation
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-medium mb-2">Future Road Map</h3>
        <p className="mb-8">
          Going forward, we will continue our blood donation drives and
          awareness sessions to strengthen community health and save more lives.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Stationery Donation to Pre-School
        </h2>
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="md:w-1/3">
            <Image
              src="/placeholder-stationery.jpg"
              alt="Stationery Donation"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-xl font-medium mb-2">What we did in past</h3>
            <p className="mb-4">
              LBF established 120 number of pre-schools around the country to
              support kindergarten education.
            </p>

            <h3 className="text-xl font-medium mb-2">Partnership</h3>
            <p className="mb-4">Stanley Janz Pre-school</p>

            <h3 className="text-xl font-medium mb-2">Current Year Activity</h3>
            <p className="mb-2">
              We donated stationery to Stanley Janz Pre-school to support
              educational activities of the children.
            </p>
            <ul className="grid grid-cols-2 gap-2 mb-4">
              <li>Investment (Rs.): 80,820</li>
              <li>No. of Beneficiaries: 28</li>
              <li>Man hours: 10</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-medium mb-2">
            Expected Benefits and Impact
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Supports early childhood education and learning</li>
            <li>Encourages school attendance and participation</li>
            <li>Reduces financial burden on families</li>
            <li>Builds positive relationships with local communities</li>
            <li>
              Enhances LBFS reputation as a socially responsible organisation
            </li>
            <li>
              Empowers children with the tools needed for academic success
            </li>
            <li>Promotes long-term community development through education</li>
          </ul>
        </div>

        <div className="italic text-gray-600 mb-6">
          "LBF is dedicated to supporting education by donating stationery to
          local pre-schools, helping to create a positive learning environment
          for children. This initiative reflects our commitment to nurturing
          future generations and empowering communities through education."
        </div>

        <h3 className="text-xl font-medium mb-2">Future Road Map</h3>
        <p>
          Going forward, LBF will continue to expand its support for early
          childhood education through regular stationery donations and other
          initiatives that empower young learners and strengthen our community
          ties.
        </p>
      </div>
    </div>
  );
}
