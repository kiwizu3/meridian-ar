'use client';

import Image from 'next/image';

export default function ManufacturedCapitalPart4() {
  const provinceData = [
    {
      id: 1,
      name: 'Central',
      branches: 18,
      employees: 310,
      population: 2788,
      gdpGrowth: 243253,
    },
    {
      id: 2,
      name: 'Eastern',
      branches: 25,
      employees: 331,
      population: 1774,
      gdpGrowth: 1248306,
    },
    {
      id: 3,
      name: 'North Central',
      branches: 8,
      employees: 138,
      population: 1395,
      gdpGrowth: 1209771,
    },
    {
      id: 4,
      name: 'North Western',
      branches: 11,
      employees: 210,
      population: 2572,
      gdpGrowth: 2706227,
    },
    {
      id: 5,
      name: 'Northern',
      branches: 29,
      employees: 258,
      population: 1175,
      gdpGrowth: 985139,
    },
    {
      id: 6,
      name: 'Sabaragamuwa',
      branches: 7,
      employees: 162,
      population: 2080,
      gdpGrowth: 1725853,
    },
    {
      id: 7,
      name: 'Southern',
      branches: 13,
      employees: 270,
      population: 2688,
      gdpGrowth: 2199791,
    },
    {
      id: 8,
      name: 'Uva',
      branches: 6,
      employees: 122,
      population: 1405,
      gdpGrowth: 1176221,
    },
    {
      id: 9,
      name: 'Western',
      branches: 83,
      employees: 2331,
      population: 6160,
      gdpGrowth: 10475166,
    },
  ];

  return (
    <div>
      <div className="min-h-screen bg-white text-black p-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-8">
            <div className="rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Province Data</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#fbbe96] text-black">
                      <th className="p-2">Province</th>
                      <th className="p-2">No. of Branches</th>
                      <th className="p-2">No. of Employees</th>
                      <th className="p-2">Mid-Year Population &apos;000</th>
                      <th className="p-2">GDP Growth Rs. Mn (in 2022)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {provinceData.map((province) => (
                      <tr
                        key={province.id}
                        className="border-b border-gray-200"
                      >
                        <td className="p-2">{province.name}</td>
                        <td className="p-2 text-center">{province.branches}</td>
                        <td className="p-2 text-center">
                          {province.employees}
                        </td>
                        <td className="p-2 text-center">
                          {province.population}
                        </td>
                        <td className="p-2 text-right">
                          {province.gdpGrowth.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-lg p-6">
              <div className="relative w-full h-96">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src="/images/sustainability/clean-energy-sl.PNG"
                    alt="Sri Lanka Map"
                    width={500}
                    height={800}
                    style={{
                      width: 'auto',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              INVESTMENTS IN DIGITAL INFRASTRUCTURE
            </h2>
            <p className="mb-4">
              Our investments in technology drive digitalization across our
              manufactured capital. By strategically allocating resources to
              technological advancements, we are transforming traditional
              processes into streamlined, automated workflows. Furthermore, by
              integrating cutting-edge solutions, we have enhanced operational
              efficiency, reduced redundancies, and mitigated errors.
            </p>
            <p className="mb-4">
              Moreover, we are harnessing the full potential of automation and
              data analytics to engage in data-driven decision-making and foster
              innovation. Please refer to the intellectual capital report on
              page 120 for further information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="h-48 rounded-lg flex items-center justify-center">
                <Image
                  src="/images/sustainability/clean-energy-gallery-1.PNG"
                  alt="Sri Lanka Map"
                  width={300}
                  height={300}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>
              <p className="mt-1 text-center">Palai Branch Opening</p>
            </div>
            <div>
              <div className="h-48 rounded-lg flex items-center justify-center">
                <Image
                  src="/images/sustainability/clean-energy-gallery-2.PNG"
                  alt="Sri Lanka Map"
                  width={300}
                  height={300}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>
              <p className="mt-1 text-center">Kaduwela Branch Relocation</p>
            </div>
            <div>
              <div className="h-48 rounded-lg flex items-center justify-center">
                <Image
                  src="/images/sustainability/clean-energy-gallery-3.PNG"
                  alt="Sri Lanka Map"
                  width={300}
                  height={300}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>
              <p className="mt-1 text-center">Poonakary Branch Opening</p>
            </div>
            <div>
              <div className="h-48 rounded-lg flex items-center justify-center">
                <Image
                  src="/images/sustainability/clean-energy-gallery-4.PNG"
                  alt="Sri Lanka Map"
                  width={300}
                  height={300}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>
              <p className="mt-1 text-center">Nanthan Branch Relocation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
