interface EmissionData {
  source: string;
  tCO2: number | string;
  tCH4: number | string;
  tN2O: number | string;
  tHFCs: number | string;
  tCO2e: number;
}

export const emissionData: EmissionData[] = [
  {
    source: 'Onsite diesel generators',
    tCO2: 16.56749,
    tCH4: 0.000671,
    tN2O:  0.000134,
    tHFCs: '',
    tCO2e: 16.7,
  },
  {
    source: 'Company-owned vehicles, fuel paid by LB Finance PLC',
    tCO2: 167.2859,
    tCH4:  0.029897,
    tN2O:  0.008483,
    tHFCs: '',
    tCO2e: 170.4,
  },
  {
    source: 'Refrigerant leakage',
    tCO2: '',
    tCH4: '',
    tN2O: '',
    tHFCs: 91.1,
    tCO2e: 91.1,
  },
  {
    source: 'CO2 fire extinguisher',
    tCO2: 0.09,
    tCH4: '',
    tN2O: '',
    tHFCs: '',
    tCO2e: 0.1,
  },
  {
    source: 'Grid-connected electricity',
    tCO2:  2188.403,
    tCH4:  0.041019,
    tN2O: 0.034873,
    tHFCs: '',
    tCO2e: 2198.9,
  },
  {
    source: 'Transmission & Distribution loss',
    tCO2: 213.2685,
    tCH4: 0.003997,
    tN2O: 0.003399,
    tHFCs: '',
    tCO2e: 214.3,
  },
  {
    source: 'Municipal water',
    tCO2: 6.752379,
    tCH4: 0.000127,
    tN2O:  0.000108,
    tHFCs: '',
    tCO2e: 6.8,
  },
  {
    source: 'Waste Disposal',
    tCO2: 0.425871,
    tCH4: 7.98E-06,
    tN2O: 6.79E-06,
    tHFCs: '',
    tCO2e: 0.4,
  },
  {
    source: 'Employee commuting, not paid by the LB Finance PLC',
    tCO2: 1251.402,
    tCH4: 0.595906,
    tN2O: 0.057785,
    tHFCs: '',
    tCO2e: 1283.4,
  },
  {
    source: 'Business air travel',
    tCO2: 0.793831,
    tCH4: 5.67E-06,
    tN2O: 2.27E-05,
    tHFCs: '',
    tCO2e: 0.8,
  },
];

function SupplementaryInformation() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 custom-scrollbar overflow-auto grid grid-cols-1 gap-6">
      <p className="text-white">EMISSION TYPES AND SOURCES</p>
      <img className="w-full" src="/images/annual-report/supplementary-information/supplimentary.png" alt="supplimentary"/>
      {/* <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-white text-blue">
            <th className="border border-white p-2">Emission source</th>
            <th className="border border-white p-2">
              tCO<sub>2</sub>
            </th>
            <th className="border border-white p-2">
              tCH<sub>4</sub>
            </th>
            <th className="border border-white p-2">
              tN2<sub>0</sub>
            </th>
            <th className="border border-white p-2">tHFCs</th>
            <th className="border border-white p-2">
              tCO2e
            </th>
          </tr>
        </thead>
        <tbody>
          {emissionData.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border border-white p-2">{item.source}</td>
              <td className="border border-white p-2">{item.tCO2}</td>
              <td className="border border-white p-2">{item.tCH4}</td>
              <td className="border border-white p-2">{item.tN2O}</td>
              <td className="border border-white p-2">{item.tHFCs}</td>
              <td className="border border-white p-2">{item.tCO2e}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <div>
        <h1 className="text-xl font-bold">Communication of critical concerns</h1>
        <p>
        If there is/are critical concern/s, management will communicate the same to the Board of Directors for their discussion and Board will 
        provide narrations and direction to solve or mitigate the concern/s.
        </p>
      </div>
    </div>
  );
}

export default SupplementaryInformation;
