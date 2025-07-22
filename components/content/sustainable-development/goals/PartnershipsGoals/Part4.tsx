import Image from 'next/image';

export default function LifeBelowWaterPart1() {
  return (
    <div className="bg-themeGreen p-5 my-10">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Wetland Day celebration</h1>

        <div className="bg-cardGreen p-4 rounded-lg mb-5">
          <div>
            <p className="mb-4">
              To underscore the vital role of wetland conservation, we partnered
              in a World Wetlands Day event on 2 February 2025. The event, which
              included a tree-planting programme, the launch of a Wetland
              Conservation Museum, and an informative lecture, brought together
              passionate students from local schools and universities alongside
              renowned wildlife conservation experts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-[#4DA28C] p-4 rounded-lg">
                <h3 className="font-medium">Partnership</h3>
                <p>Department of Wildlife Conservation – Colombo Region</p>
              </div>
              <div className="bg-[#4DA28C] p-4 rounded-lg">
                <h3 className="font-medium">Investment</h3>
                <p>Rs. 100,000</p>
              </div>
              <div className="bg-[#4DA28C] p-4 rounded-lg">
                <h3 className="font-medium">Team engagement</h3>
                <p>06</p>
              </div>
              <div className="bg-[#4DA28C] p-4 rounded-lg">
                <h3 className="font-medium">Man hours</h3>
                <p>16</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-medium mb-2">
              Expected Benefits and Impact
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Conservation of natural resources</li>
              <li> Biodiversity preservation </li>
              <li> Awareness of environmental conservation</li>
            </ul>
          </div>
          <h3 className="text-xl font-medium mb-2">Future Road Map</h3>
          <p className="mb-8">
            We aim to participate in relevant international and national days,
            demonstrating our ongoing commitment to environmental and social
            responsibility.
          </p>
        </div>
      </div>

      <div>
        <h1 className="text-4xl font-bold mb-4">
          Climate change awareness programmes at schools
        </h1>
        <div className="bg-cardGreen p-4 rounded-lg mb-5">
          <div>
            <p className="mb-4">
              Understanding that Sri Lanka faces regular threats from natural
              disasters such as floods, landslides, and droughts, we are
              enhancing community resilience through education. In November and
              December 2024, we conducted two targeted awareness sessions for
              students at two schools in the Kalutara District, providing them
              with critical information and skills to protect themselves from
              the dangers of floods and landslides.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-[#4DA28C] p-4 rounded-lg">
                <h3 className="font-medium">Partnership</h3>
                <p>Western Provincial Council</p>
                <p>Sri Lanka Red Cross</p>
              </div>
              <div className="bg-[#4DA28C] p-4 rounded-lg">
                <h3 className="font-medium">Beneficiaries</h3>
                <p>150 Students</p>
                <p>16 Teachers</p>
              </div>
              <div className="bg-[#4DA28C] p-4 rounded-lg">
                <h3 className="font-medium">Team engagement</h3>
                <p>05</p>
              </div>

              <div className="bg-[#4DA28C] p-4 rounded-lg">
                <h3 className="font-medium">Man hours</h3>
                <p>22</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-medium mb-2">
              Expected Benefits and Impact
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Foster environmental responsibility among students by educating
                them on climate change
              </li>
              <li>Empower future generations to advocate for climate action</li>
              <li>
                Community engagement by involving schools, teachers, and parents
                in environmental stewardship
              </li>
            </ul>
          </div>
          <h3 className="text-xl font-medium mb-2">Future Road Map</h3>
          <p>
            By partnering with government organisations and NGOs, we will
            strengthen community resilience and ensure long-term sustainability.
            Through continuous awareness efforts, we remain committed to
            equipping future generations with the knowledge and skills needed to
            stay safe during natural disasters.
          </p>
        </div>
      </div>
    </div>
  );
}
