import Image from 'next/image';

export default function QualityEducationPart1() {
  return (
    <div className="bg-[#4DA28C] w-full p-8 mb-8 rounded-lg">
      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-semibold text-black">
          Stationery Donation to Pre-School
        </h2>
      </div>
      <div className="mb-6 bg-[#3C8D79] rounded-lg p-5">
        <div className="md:w-2/3">
          <h3 className="text-xl font-medium mb-2">What we did in past</h3>
          <p className="mb-4">
            LBF established 120 number of pre-schools around the country to
            support kindergarten education
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

      <div className="bg-[#3C8D79] p-6 rounded-lg mb-6">
        <h3 className="text-xl font-medium mb-2">
          Expected Benefits and Impact
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Supports early childhood education and learning.</li>
          <li>Encourages school attendance and participation.</li>
          <li>Reduces financial burden on families.</li>
          <li>Builds positive relationships with local communities.</li>
          <li>
            Enhances LBF’s reputation as a socially responsible organisation.
          </li>
          <li>
            Empowers children with the tools needed for academic success .
          </li>
          <li>Promotes long-term community development through education.</li>
        </ul>
      </div>

      <div className="italic text-black text-xl mb-6">
        "LBF is dedicated to supporting education by donating stationery to
        local pre-schools, helping to create a positive learning environment for
        children. This initiative reflects our commitment to nurturing future
        generations and empowering communities through education."
      </div>

      <h3 className="text-xl font-medium mb-2 text-black">Future Road Map</h3>
      <p className="p-2">
        Going forward, LBF will continue to expand its support for early
        childhood education through regular stationery donations and other
        initiatives that empower young learners and strengthen our community
        ties.
      </p>
    </div>
  );
}
