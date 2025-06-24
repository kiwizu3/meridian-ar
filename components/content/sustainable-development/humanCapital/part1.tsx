'use client';

import Image from 'next/image';

export default function HumanCapitalPart1() {
  return (
    <div>
      <div className="bg-[#9585bd] text-black p-8">
        <div className="w-full">
          <div className="flex items-center mb-8">
            <h1 className="text-4xl font-bold text-white">Human Capital</h1>
          </div>

          <div className="bg-[#aca1cc] rounded-lg p-6 mb-8">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-semibold">SHORT TERM</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Challenges</h3>
                <ul className="list-disc list-inside">
                  <li>
                    Pressure on the Talent Acquisition Strategy to meet employee
                    talents through need-based training, coaching and e-learning
                  </li>
                  <li>
                    Addressing change management issues arising from increased
                    digitisation and process automation
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Managing Capital</h3>
                <ul className="list-disc list-inside">
                  <li>
                    Supporting the career and development plans of all the
                    employees
                  </li>
                  <li>
                    Focus on providing the right training to the right personnel
                  </li>
                  <li>
                    Providing an inclusive work arrangements that embraces and
                    respect diversity
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  Opportunities Arising from this Risk
                </h3>
                <ul className="list-disc list-inside">
                  <li>
                    Identifying behaviours that drive shifting needs and
                    enhancing group-wide EVP
                  </li>
                  <li>
                    Providing innovative incentives and rewards through
                    supporting workforce mobility, professional agility, and
                    inclusion
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8 text-center">
            <div className="bg-[#aca1cc] p-4 rounded-lg">
              <h3 className="text-2xl font-bold">4,132</h3>
              <p>Total Number of Employees</p>
            </div>
            <div className="bg-[#aca1cc] p-4 rounded-lg">
              <h3 className="text-2xl font-bold">2,194</h3>
              <p>New Employees</p>
            </div>
            <div className="bg-[#aca1cc] p-4 rounded-lg">
              <h3 className="text-2xl font-bold">43,677</h3>
              <p>Training Hours</p>
            </div>
            <div className="bg-[#aca1cc] p-4 rounded-lg">
              <h3 className="text-2xl font-bold">1,895</h3>
              <p>Female Employees</p>
            </div>
            <div className="bg-[#aca1cc] p-4 rounded-lg">
              <h3 className="text-2xl font-bold">Rs. 23.22 Mn</h3>
              <p>Investment on Training</p>
            </div>
          </div>

          <div className="relative h-64 md:h-96 mx-[-2rem] mt-3">
            <Image
              src="/images/sustainability/clean-energy-page-3.PNG"
              alt="climate action"
              className="rounded-lg"
              width={800}
              height={500}
              style={{ height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      <div className="bg-[#9585bd] text-black p-8">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#aca1cc] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                Impact to Value Chain
              </h3>
              <ul className="list-disc list-inside">
                <li>
                  Enhance morale, productivity and overall operational
                  efficiency
                </li>
                <li>
                  Improving skilful and driving efficient execution workforce
                </li>
                <li>Deepening the shared value and commitments</li>
                <li>Developing critical skills and succession planning</li>
              </ul>
            </div>
            <div className="bg-[#aca1cc] rounded-lg p-6">
              <div className="flex items-center mb-2">
                <h3 className="text-xl font-semibold">MEDIUM TERM</h3>
              </div>
              <h4 className="font-semibold mb-2">Space for Development</h4>
              <ul className="list-disc list-inside">
                <li>
                  Through technology, we support employees to have a digitally
                  enabled way of working, as well as empower them to seamlessly
                  serve our customers
                </li>
                <li>
                  Our skills and experience enable us to develop state-of-the
                  art products and services and charter new territories.
                </li>
              </ul>
            </div>
            <div className="bg-[#aca1cc] rounded-lg p-6">
              <div className="flex items-center mb-2">
                <h3 className="text-xl font-semibold">LONG TERM</h3>
              </div>
              <h4 className="font-semibold mb-2">Future Crafting</h4>
              <ul className="list-disc list-inside">
                <li>
                  Focus on utilisation of competency mapping to our overall
                  Talent Management processes by incorporating them in our
                  processes
                </li>
                <li>
                  Continue the introduction of new technologies to automate HR
                  processes
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#aca1cc] rounded-lg p-6 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              <div>
                <h3 className="text-2xl font-bold">1,037</h3>
                <p>Staff Promotions</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">1 : 0.85</h3>
                <p>Gender Ratio (Male : Female)</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Strengthening Work-life Balance
                </h3>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Automated Performance Evaluation
                </h3>
              </div>
              <div>
                <h3 className="text-xl font-bold">Virtual Training</h3>
              </div>
            </div>
          </div>

          <div className="relative h-64 md:h-96 mx-[-2rem] mt-3">
            <Image
              src="/images/sustainability/clean-energy-page-4.PNG"
              alt="climate action"
              className="rounded-lg"
              width={800}
              height={500}
              style={{ height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
