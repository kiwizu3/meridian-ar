import Image from 'next/image';

export default function LifeBelowWaterPart1() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Beach Caretakers for Sustainable Beaches
        </h2>

        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="md:w-1/3">
            <Image
              src="/placeholder-beach-cleanup.jpg"
              alt="Beach Caretaking"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-2/3">
            <p className="mb-4">
              To protect coastal areas, we launched a beach caretaking project
              in January 2025, selecting two locations in Colombo (Crow Island
              Beach Park) and Kalutara (Wadduwa Beach). This initiative supports
              environmental stewardship and provides valuable job opportunities
              for low-income families.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="font-medium">Partnership</h3>
                <p>Marine Environment Protection Authority (MEPA)</p>
              </div>
              <div>
                <h3 className="font-medium">Investment</h3>
                <p>Rs. 1,100,000</p>
              </div>
              <div>
                <h3 className="font-medium">Team engagement</h3>
                <p>15</p>
              </div>
              <div>
                <h3 className="font-medium">Man hours</h3>
                <p>29</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-medium mb-2">
            Expected Benefits and Impact
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Reduce marine pollution caused by non-degradable waste</li>
            <li>Ensure continuous beach cleaning and maintenance</li>
            <li>Support low-income families with job opportunities</li>
            <li>
              Promote community participation in environmental conservation
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-medium mb-2">Future Road Map</h3>
        <p className="mb-8">
          We aim to expand the beach cleaning Initiative to additional coastal
          areas, integrate community-driven conservation programmes, and explore
          innovative waste management solutions.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Rehabilitation of Degraded Coastal Ecosystems
        </h2>
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="md:w-1/3">
            <Image
              src="/placeholder-coral-reef.jpg"
              alt="Coastal Ecosystem Rehabilitation"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-2/3">
            <p className="mb-4">
              We launched a project to develop a habitat for ornamental fish at
              the Kaisawella area of Dondra in Southern Province. This
              initiative will support the restoration of marine biodiversity by
              providing shelter for coral reefs and promoting sustainable
              tourism, marine ornamental fisheries, and community empowerment.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="font-medium">Partnership</h3>
                <p>
                  National Aquatic Resources Research and Development Agency
                  (NARA)
                </p>
              </div>
              <div>
                <h3 className="font-medium">Investment</h3>
                <p>Rs. 1,995,400</p>
              </div>
              <div>
                <h3 className="font-medium">Team engagement</h3>
                <p>10</p>
              </div>
              <div>
                <h3 className="font-medium">Man hours</h3>
                <p>64</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-medium mb-2">
            Expected Benefits and Impact
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Create artificial habitats to promote ornamental fish breeding
            </li>
            <li>Cultivate coral reefs to restore marine biodiversity</li>
            <li>
              Boost sustainable tourism through snorkelling and ecotourism
              initiatives
            </li>
            <li>
              Support local fishing communities by creating new economic
              opportunities
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-medium mb-2">Future Road Map</h3>
        <p>
          Moving forward, we will enhance coral reef shelters, collaborate with
          marine experts to monitor the ecosystem, and engage local communities
          in conservation efforts. Moreover, we will create sustainable economic
          opportunities while prioritising environmental sustainability.
          Strategic partnerships with schools, universities, and environmental
          organisations will drive awareness and ensure long-term stewardship.
        </p>
      </div>
    </div>
  );
}
