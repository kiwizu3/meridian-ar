'use client';

import Image from 'next/image';

export default function NaturalCapitalPart6() {
  return (
    <div className="bg-gray-100 text-gray-800 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-[#f9f4ea] p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-yellow-600">
              OUR WASTE FOOTPRINT
            </h2>
            <div className="flex items-center mb-4">
              <Image
                src="/images/sustainability/climate-energy-recyle.PNG"
                alt="OUR WATER FOOTPRINT"
                width={100}
                height={100}
                className="w-16 h-16 mr-4"
                style={{ width: '4rem' }}
              />

              <div>
                <p className="text-sm">Total paper recycled</p>
                <p className="text-3xl font-bold">20,109.00Kg</p>
                <p className="text-xs text-gray-500">48,645.00Kg (2022/23)</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Saved</span>
                <span className="font-bold">342 No. of fully-grown trees</span>
              </div>
              <div className="flex justify-between">
                <span>35,291 Litres</span>
                <span className="font-bold">of oil</span>
              </div>
              <div className="flex justify-between">
                <span>80,436 KWh</span>
                <span className="font-bold">of electricity</span>
              </div>
              <div className="flex justify-between">
                <span>639,064 Litres</span>
                <span className="font-bold">of water</span>
              </div>
              <div className="flex justify-between">
                <span>60 m³</span>
                <span className="font-bold">of landfill</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#4e70b7]">
              WASTE MANAGEMENT
            </h2>
            <p className="mb-4">
              To minimise paper waste, our EMS promotes the 4R principles:
            </p>
            <div className="bg-white p-4 rounded-lg mb-4">
              <h3 className="text-xl font-semibold mb-2">
                Waste Management Initiatives
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-[#4e70b7]">FOCUS PILLAR</h4>
                  <ul className="list-disc list-inside">
                    <li>Refuse</li>
                    <li>Reduce</li>
                    <li>Recycle</li>
                    <li>Reuse</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-orange-600">ACTIONS TAKEN</h4>
                  <ul className="list-disc list-inside">
                    <li>
                      Implementing strategies to minimise paper usage through
                      digitisation and responsible document management
                    </li>
                    <li>
                      Creating a centralised web portal has created a paperless
                      work environment
                    </li>
                    <li>
                      Monitoring and controlling inventory consumption through
                      the inventory management system
                    </li>
                    <li>
                      Directing paper items to a designated area in each office
                      to be sent for recycling
                    </li>
                    <li>Recycling all paper waste through Neptune Recyclers</li>
                    <li>
                      Recycling all e-waste through an authorised e-waste
                      recycling partner
                    </li>
                    <li>Reuse of paper and envelopes as much as possible</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Thuru Wawamu</h3>
            <p className="mb-4">
              Under the Thuru Wawamu project launched in 2018 we have grown
              8,200 trees as of 31 March 2024. The project was launched
              coinciding with the Company&apos;s 50th anniversary, contributing
              to the restoration of Sri Lanka&apos;s forest cover. The
              collaborative approach with key stakeholders including school
              authorities, local governing bodies, and the general public have
              ensured community involvement and long-term sustainability of the
              project.
            </p>
            <p>
              The initiative focuses on installing and maintaining informative
              display boards at the entrances of national parks across Sri
              Lanka. These boards provide visitors with essential information
              about the parks&apos; ecosystem, wildlife conservation efforts,
              and guidelines for responsible behaviour to minimise their impact
              on the environment. By educating visitors about the significance
              of national parks and promoting responsible tourism practices, we
              aim to contribute to the long-term preservation of Sri
              Lanka&apos;s rich biodiversity and natural heritage.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Awareness Building</h3>
            <p className="mb-4">
              We partnered with the Young Zoologists&apos; Association of Sri
              Lanka in a joint initiative to raise awareness about the
              importance of national parks and responsible visitor behaviour.
            </p>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold mb-2">Project Locations</h4>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left">Year</th>
                    <th className="text-left">Project Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2023/24</td>
                    <td>Dehiwala, Pinnawala</td>
                  </tr>
                  <tr>
                    <td>2022/23</td>
                    <td>
                      Udawalawa, Katharagama, Suriyawewa, Palatupana,
                      Ambalantota, Tissamaharama, Hambantota, Dehiwala
                    </td>
                  </tr>
                  <tr>
                    <td>2021/22</td>
                    <td>Dehiwala</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-[#97c93c]">
            ENVIRONMENTAL SUSTAINABILITY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Green Lending</h3>
              <p>
                Our Green Lending scheme promotes sustainable transportation by
                offering attractive financing options for hybrid vehicles. These
                vehicles significantly reduce carbon emissions and contribute to
                a cleaner environment compared to traditional gasoline-fueled
                vehicles.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Green financing facilities
              </h3>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left">Year</th>
                    <th className="text-left">Volume (Nos)</th>
                    <th className="text-left">Volume (Rs.)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2019/20</td>
                    <td>2,814</td>
                    <td>5,750,625,199</td>
                  </tr>
                  <tr>
                    <td>2020/21</td>
                    <td>2,293</td>
                    <td>4,253,103,819</td>
                  </tr>
                  <tr>
                    <td>2021/22</td>
                    <td>1,457</td>
                    <td>4,135,768,244</td>
                  </tr>
                  <tr>
                    <td>2022/23</td>
                    <td>855</td>
                    <td>2,411,246,625</td>
                  </tr>
                  <tr>
                    <td>2023/24</td>
                    <td>1,597</td>
                    <td>5,056,620,478</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
