interface RowData {
  category: string;
  strategicFocus: string;
  kpi: string;
  whereWeAre: 'achieved' | 'in-process' | 'not-initiated';
  whereWeWillBe2030: 'achieved' | 'in-process' | 'not-initiated';
  whereWeWillBe2050: 'achieved' | 'in-process' | 'not-initiated';
  capitalAlignment: string[];
}

const data: RowData[] = [
  {
    category: 'Financial Stability',
    strategicFocus: 'Capital adequacy',
    kpi: 'Core capital ratio and total capital ratio',
    whereWeAre: 'achieved',
    whereWeWillBe2030: 'achieved',
    whereWeWillBe2050: 'achieved',
    capitalAlignment: ['FC'],
  },
  {
    category: 'Financial Stability',
    strategicFocus: 'Earnings',
    kpi: 'ROE',
    whereWeAre: 'achieved',
    whereWeWillBe2030: 'achieved',
    whereWeWillBe2050: 'achieved',
    capitalAlignment: ['FC'],
  },
  {
    category: 'Financial Stability',
    strategicFocus: 'Liquidity',
    kpi: 'Liquidity ratio',
    whereWeAre: 'achieved',
    whereWeWillBe2030: 'achieved',
    whereWeWillBe2050: 'achieved',
    capitalAlignment: ['FC'],
  },
  {
    category: 'Positive Environmental Impact',
    strategicFocus: 'Building sustainable portfolio',
    kpi: 'Enhancing green and sustainability linked portfolio',
    whereWeAre: 'in-process',
    whereWeWillBe2030: 'achieved',
    whereWeWillBe2050: 'achieved',
    capitalAlignment: ['NC', 'SC'],
  },
  {
    category: 'Positive Environmental Impact',
    strategicFocus: 'Responsible consumption',
    kpi: 'Reducing water consumption, Electricity consumption, Fuel consumption, 3Rs implementation',
    whereWeAre: 'in-process',
    whereWeWillBe2030: 'in-process',
    whereWeWillBe2050: 'achieved',
    capitalAlignment: ['NC'],
  },
  {
    category: 'Positive Environmental Impact',
    strategicFocus: 'Aligning with net zero emission target',
    kpi: 'GHG carbon footprint measurement',
    whereWeAre: 'in-process',
    whereWeWillBe2030: 'in-process',
    whereWeWillBe2050: 'achieved',
    capitalAlignment: ['NC'],
  },
  {
    category: 'Positive Environmental Impact',
    strategicFocus: 'Net per employee GHG emission reduction through monitoring',
    kpi: 'GHG carbon footprint measurement',
    whereWeAre: 'in-process',
    whereWeWillBe2030: 'achieved',
    whereWeWillBe2050: 'achieved',
    capitalAlignment: ['NC', 'SC'],
  },
  {
    category: 'Positive Environmental Impact',
    strategicFocus: 'Climate risk management',
    kpi: 'Adaptation of SLFRS S1 & S2',
    whereWeAre: 'in-process',
    whereWeWillBe2030: 'achieved',
    whereWeWillBe2050: 'achieved',
    capitalAlignment: ['NC'],
  },
  {
    category: 'Inclusive Growth',
    strategicFocus: 'Promoting diversity and gender balance',
    kpi: 'Increase in women recruitments',
    whereWeAre: 'in-process',
    whereWeWillBe2030: 'achieved',
    whereWeWillBe2050: 'achieved',
    capitalAlignment: ['HC'],
  },
  {
    category: 'Inclusive Growth',
    strategicFocus: 'Financial inclusion',
    kpi: 'Attract more customers through digital deposit product and portfolio innovation',
    whereWeAre: 'achieved',
    whereWeWillBe2030: 'achieved',
    whereWeWillBe2050: 'achieved',
    capitalAlignment: ['MC', 'IC', 'SC'],
  },
  {
    category: 'Inclusive Growth',
    strategicFocus: 'Empowering employee',
    kpi: 'Increase in number of promotions',
    whereWeAre: 'in-process',
    whereWeWillBe2030: 'achieved',
    whereWeWillBe2050: 'achieved',
    capitalAlignment: ['HC'],
  },
  {
    category: 'Inclusive Growth',
    strategicFocus: 'Community well being',
    kpi: 'Expanding the net of CSR beneficiaries',
    whereWeAre: 'in-process',
    whereWeWillBe2030: 'achieved',
    whereWeWillBe2050: 'achieved',
    capitalAlignment: ['SC'],
  },
  {
    category: 'Great Workplace',
    strategicFocus: 'Empowering employees',
    kpi: 'Yearly increase of training hours',
    whereWeAre: 'in-process',
    whereWeWillBe2030: 'achieved',
    whereWeWillBe2050: 'achieved',
    capitalAlignment: ['HC'],
  },
  {
    category: 'Great Workplace',
    strategicFocus: 'Diverse environment',
    kpi: 'Gender parity, equal opportunity employment',
    whereWeAre: 'achieved',
    whereWeWillBe2030: 'achieved',
    whereWeWillBe2050: 'achieved',
    capitalAlignment: ['HC'],
  },
  {
    category: 'Great Workplace',
    strategicFocus: 'Fair pay',
    kpi: 'Ratio of basic salary men to women',
    whereWeAre: 'in-process',
    whereWeWillBe2030: 'achieved',
    whereWeWillBe2050: 'achieved',
    capitalAlignment: ['HC'],
  },
];

const StatusDot: React.FC<{
  status: 'achieved' | 'in-process' | 'not-initiated';
}> = ({ status }) => {
  const colorClass =
    status === 'achieved'
      ? 'bg-[#58c07d]'
      : status === 'in-process'
        ? 'bg-[#d4a262]'
        : 'bg-[#fb5579]';
  return <div className={`w-3 h-3 rounded-full ${colorClass} mx-auto`}></div>;
};
export default function SustainabilityStrategyMeasurableTargets() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto grid grid-cols-1 gap-6">
      <div className="mx-auto overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-sm font-bold rounded-t-lg">
              <th className=""></th>
              <th className="p-2 bg-[#91c94c] text-white">Strategic focus</th>
              <th className="p-2 bg-[#91c94c]">KPI</th>
              <th className="p-2 bg-[#91c94c]">Where we are 2024</th>
              <th className="p-2 bg-[#91c94c]">Where we will be 2030</th>
              <th className="p-2 bg-[#91c94c]">Where we will be 2050</th>
              <th className="p-2 bg-[#91c94c]">Capital alignment</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={`text-xs ${index % 2 === 0 ? 'bg-opacity-10 bg-white' : ''}`}
              >
                <td className="p-2 border border-white">{row.category}</td>
                <td className="p-2 border border-white">
                  {row.strategicFocus}
                </td>
                <td className="p-2 border border-white">{row.kpi}</td>
                <td className="p-2 border border-white">
                  <StatusDot status={row.whereWeAre} />
                </td>
                <td className="p-2 border border-white">
                  <StatusDot status={row.whereWeWillBe2030} />
                </td>
                <td className="p-2 border border-white">
                  <StatusDot status={row.whereWeWillBe2050} />
                </td>
                <td className="p-2 border border-white">
                  {row.capitalAlignment.map((capital, idx) => (
                    <span key={idx} className="bg-gray-700 px-1 rounded">
                      {capital}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-col md:flex-row gap-4 justify-end mt-6">
          <div className="flex justify-center items-center gap-4">
            <div className={`w-3 h-3 rounded-full bg-[#58c07d]`}></div>
            <p>Achieved</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className={`w-3 h-3 rounded-full bg-[#d4a262] `}></div>
            <p>In Process</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className={`w-3 h-3 rounded-full bg-[#fb5579] `}></div>
            <p>Not Initiated</p>
          </div>
        </div>
      </div>
    </div>
  );
}
