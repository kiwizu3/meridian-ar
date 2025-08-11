import Image from 'next/image';

export default function LifeOnLandPart1() {
  return (
    <div className="bg-themeGreen p-5 mb-10">
      <h1 className="text-4xl font-bold mb-6">
        ENVIRONMENT FOCUSED CSR PROJECTS
      </h1>

      <div className="bg-cardGreen p-4 rounded-lg mb-10">
        <p className="mb-6">
          LBF’s environment-focused CSR projects are not just initiatives; they
          represent a strategic, stage-by-stage roadmap. With each stage, we
          activate new lines of environmental protection activities, building
          upon the previous one. This roadmap reflects our commitment to
          sustainability, where every project marks a step forward in our
          ongoing journey toward a greener future.
        </p>

        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4">
            A look back at the progress
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#4DA28C] p-4 rounded-lg">
              <h4 className="font-medium mb-2">Thuru Wawamu</h4>
              <p>
                As of March 31, 2025, the Thuru Wawamu project, launched in
                2018, has successfully cultivated 38,316 trees.
              </p>
            </div>
            <div className="bg-[#4DA28C] p-4 rounded-lg">
              <h4 className="font-medium mb-2">LB ThiraSara Piya Satahan</h4>
              <p>
                To celebrate the opening of our new branches, we launched a tree
                planting initiative, marking the start of our programme to
                offset the carbon footprint of new branch openings and
                contribute to a greener future.
              </p>
              <div className="grid grid-cols-1 gap-4 mt-4">
                <div>
                  <h5 className="font-medium">Investment</h5>
                  <p>Rs. 36,800</p>
                </div>
                <div>
                  <h5 className="font-medium">Team engagement</h5>
                  <p>12</p>
                </div>
                <div>
                  <h5 className="font-medium">Man hours</h5>
                  <p>50</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4">
            Restoration of degraded mangrove patches in the Ittepana mangrove
            forest
          </h3>

          <div className="grid grid-cols-1 gap-6 mb-6">
            <div>
              <p>
                Recognising the critical role of mangroves in carbon
                sequestration (storing 3-4 times more carbon than terrestrial
                forests), we are restoring Sri Lanka's mangrove ecosystems,
                which have suffered over 50% loss in the last 30 years. Our
                initial effort will focus on restoring 400 mangrove plants in
                the Ittepana mangrove forest, with a Memorandum of Understanding
                (MoU) signed on 25 March 2025.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-[#4DA28C] rounded-lg p-4">
                <h4 className="font-semibold mb-2">Partnership</h4>
                <p>
                  Center for Sustainability of the University of Sri
                  Jayewardenepura.
                </p>
              </div>
              <div className="bg-[#4DA28C] rounded-lg p-4 text-center col-span-2 flex justify-evenly">
                <div>
                  <h4 className="font-semibold mb-2">Investment</h4>
                  <p className="text-xl font-bold">Rs. 376,250</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Team engagement</h4>
                  <p className="text-xl font-bold">05</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Man hours</h4>
                  <p className="text-xl font-bold">10</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Beneficiaries</h4>
                  <p className="text-xl font-bold">Many</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-lg font-medium mb-2">
              Expected benefits and impact
            </h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Generate significant ecological improvements</li>
              <li>
                Provide sustainable livelihood opportunities for local
                communities through responsible mangrove resource harvesting
              </li>
              <li>
                Facilitate academic research, environmental education, and
                skills training
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
