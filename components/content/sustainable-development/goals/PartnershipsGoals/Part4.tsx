import Image from 'next/image';

export default function NaturalCapitalPart1() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold mb-6">NURTURING NATURAL CAPITAL</h2>

      <div className="mb-12">
        <h3 className="text-xl font-medium mb-4">Wetland Day celebration</h3>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <p>
              To underscore the vital role of wetland conservation, we partnered
              in a World Wetlands Day event on 2 February 2025. The event
              included a tree-planting programme, the launch of a Wetland
              Conservation Museum, and an informative lecture, bringing together
              students and wildlife conservation experts.
            </p>

            <div className="mt-4">
              <h4 className="font-medium mb-2">Partnership</h4>
              <p>Department of Wildlife Conservation – Colombo Region</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <div>
                <h5 className="font-medium">Investment</h5>
                <p>Rs. 100,000</p>
              </div>
              <div>
                <h5 className="font-medium">Team engagement</h5>
                <p>06</p>
              </div>
              <div>
                <h5 className="font-medium">Man hours</h5>
                <p>16</p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/placeholder-wetland.jpg"
              alt="Wetland Conservation"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h4 className="text-lg font-medium mb-2">
            Expected benefits and impact
          </h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Conservation of natural resources</li>
            <li>Biodiversity preservation</li>
            <li>Awareness of environmental conservation</li>
          </ul>
        </div>

        <h4 className="text-lg font-medium mb-2">Future road map</h4>
        <p className="mb-8">
          We aim to participate in relevant international and national days,
          demonstrating our ongoing commitment to environmental and social
          responsibility.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-medium mb-4">
          Climate change awareness programmes at schools
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <p>
              Understanding that Sri Lanka faces regular threats from natural
              disasters, we are enhancing community resilience through
              education. In November and December 2024, we conducted two
              targeted awareness sessions for students at two schools in the
              Kalutara District, providing critical information about floods and
              landslides.
            </p>

            <div className="mt-4">
              <h4 className="font-medium mb-2">Partnership</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Western Provincial Council</li>
                <li>Sri Lanka Red Cross</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <h5 className="font-medium">Beneficiaries</h5>
                <p>150 students</p>
                <p>16 teachers</p>
              </div>
              <div>
                <h5 className="font-medium">Team engagement</h5>
                <p>05</p>
                <h5 className="font-medium mt-2">Man hours</h5>
                <p>22</p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/placeholder-school-awareness.jpg"
              alt="School Awareness Program"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h4 className="text-lg font-medium mb-2">
            Expected benefits and impact
          </h4>
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

        <h4 className="text-lg font-medium mb-2">Future road map</h4>
        <p>
          By partnering with government organisations and NGOs, we will
          strengthen community resilience and ensure long-term sustainability.
          Through continuous awareness efforts, we remain committed to equipping
          future generations with the knowledge and skills needed to stay safe
          during natural disasters.
        </p>
      </div>
    </div>
  );
}
