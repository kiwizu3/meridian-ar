import Image from 'next/image';

export default function GoodHealthWellbeingPart1() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Good Health & Wellbeing Initiatives
      </h1>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Drug Abuse Prevention Programme
        </h2>
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="md:w-1/3">
            <Image
              src="/placeholder-drug-prevention.jpg"
              alt="Drug Prevention Programme"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-xl font-medium mb-2">What we did in past</h3>
            <p className="mb-4">
              We established a drug rehabilitation centre in Rumassala in 2019
              and have been operating it since.
            </p>

            <h3 className="text-xl font-medium mb-2">Partnership</h3>
            <p className="mb-4">
              National Dangerous Drugs Control Board (NDDCB)
            </p>

            <h3 className="text-xl font-medium mb-2">Current Year Activity</h3>
            <p className="mb-2">
              A collaborative project was launched with NDDCB aimed at raising
              awareness and educating children, parents, and teachers for drug
              abuse prevention, focusing on the Western Province.
            </p>
            <ul className="grid grid-cols-2 gap-2 mb-4">
              <li>Investment (Rs.): 373,190</li>
              <li>No. of Beneficiaries: 26</li>
              <li>Teachers: 270</li>
              <li>Students: 200</li>
              <li>Parents: 50</li>
              <li>Man hours: 177</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-medium mb-2">
            Expected Benefits and Impact
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Programmes engage teachers, parents, local organisations, and the
              community, fostering collaboration and shared responsibility.
            </li>
            <li>
              Successful programmes reduce student drug and alcohol use,
              positively impacting community health.
            </li>
            <li>
              Prevention programmes can improve student academic outcomes,
              contributing to community educational attainment.
            </li>
            <li>
              Educate students, families, and the community on substance abuse
              risks, raising vital awareness.
            </li>
          </ul>
        </div>

        <div className="italic text-gray-600 mb-6">
          "LBF is proud to support the Drug Abuse Prevention Programme as part
          of our commitment to fostering healthier communities. By investing in
          awareness and education, we aim to create a positive social impact
          beyond our financial services."
        </div>

        <h3 className="text-xl font-medium mb-2">Future Road Map</h3>
        <p>
          Going forward, we will continue our efforts through these awareness
          sessions and the rehabilitation center to tackle substance abuse in
          the country.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Blood Donation Programmes
        </h2>
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="md:w-1/3">
            <Image
              src="/placeholder-blood-donation.jpg"
              alt="Blood Donation Programme"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-xl font-medium mb-2">What we did in past</h3>
            <p className="mb-4">
              Over the past several years, LB has been actively engaged in blood
              donation drives, contributing to the saving of thousands of lives.
            </p>

            <h3 className="text-xl font-medium mb-2">Partnership</h3>
            <p className="mb-4">National Blood Centre</p>

            <h3 className="text-xl font-medium mb-2">Current Year Activity</h3>
            <p className="mb-2">
              During 2024/25 LBF conducted two blood donation campaigns, one at
              the head office and the other one at Kekirawa branch in
              collaboration with National Blood Centre.
            </p>
            <ul className="grid grid-cols-2 gap-2 mb-4">
              <li>Investment (Rs.): 110,000</li>
              <li>No. of Beneficiaries: Many</li>
              <li>Man hours: 195</li>
            </ul>
          </div>
        </div>

        <div className="italic text-gray-600 mb-6">
          "LBF actively supports Blood Donation Programmes as a key part of our
          commitment to social responsibility and community wellbeing. Through
          these initiatives, we strive to save lives and promote a culture of
          giving within and beyond our organisation."
        </div>
      </div>
    </div>
  );
}
