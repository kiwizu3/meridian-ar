'use client';

import Image from 'next/image';

export default function CitiesAndCommunitiesPart2() {
  return (
    <div>
      <div className="bg-themeGreen text-black p-8">
        <div className="flex items-center mb-4">
          <h1 className="text-4xl font-bold text-white">
            NURTURING NATURAL CAPITAL
          </h1>
        </div>
        <div className="w-full">
          <div className="bg-cardGreen rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Restoration of degraded patches of Yagirala forest reserve
                </h3>
                <p className="text-white">
                  With 45% of its plant species endemic to Sri Lanka, the
                  Yagirala forest reserve is a treasure trove of biodiversity.
                  Recognising its importance, we are investing in the future of
                  this valuable ecosystem by planting 700 trees in degraded
                  sections of the reserve. This initiative will enhance Sri
                  Lanka's forest cover and contribute to the long-term health of
                  the region. An MoU for this project was signed on 25 March
                  2025.
                </p>

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
                      <p className="text-xl font-bold">Rs. 392,700</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Team engagement</h4>
                      <p className="text-xl font-bold">05</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Man hours</h4>
                      <p className="text-xl font-bold">10</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-2">
                    Expected benefits and impact
                  </h4>
                  <ul className="list-disc pl-6 text-white">
                    <li className="mb-2">
                      Restore degraded forest areas with native species to
                      facilitate forest rehabilitation
                    </li>
                    <li className="mb-2">
                      Support research and educational initiatives
                    </li>
                    <li className="mb-2">
                      Enhance villagers' livelihoods through nature-based
                      ecotourism
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cardGreen rounded-lg p-6 mb-8">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-semibold">URBAN TREE PLANTING</h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <p className="text-white">
                  The trees planted at selected urban locations and centers in
                  the towns were carefully maintained throughout the year,
                  reinforcing our ongoing commitment to urban greening and
                  environmental care.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-[#4DA28C] rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Maintained by</h4>
                    <p>Hemsandu Marketing</p>
                  </div>
                  <div className="bg-[#4DA28C] rounded-lg p-4 text-center">
                    <h4 className="font-semibold mb-2">Investment</h4>
                    <p className="text-xl font-bold">Rs. 15,750,000</p>
                  </div>
                  <div className="bg-[#4DA28C] rounded-lg p-4 text-center">
                    <h4 className="font-semibold mb-2">Man hours</h4>
                    <p className="text-xl font-bold">25</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-2">
                    Expected benefits and impact
                  </h4>
                  <ul className="list-disc pl-6 text-white">
                    <li className="mb-2">
                      Lower urban temperatures through shade
                    </li>
                    <li className="mb-2">
                      Plant trees in urban areas to boost biodiversity and air
                      quality
                    </li>
                    <li className="mb-2">
                      Support for climate resilience and carbon sequestration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cardGreen rounded-lg p-6">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-semibold">FUTURE ROAD MAP</h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <p className="text-white">
                  Moving forward, we will integrate tree planting as a core
                  sustainability initiative across all branches, encouraging
                  employees and customers to actively participate in
                  environmental conservation. By partnering with schools and
                  universities, we will empower students to lead reforestation
                  projects, fostering environmental stewardship from a young
                  age.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
