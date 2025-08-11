function EconomicValueAddedTable() {
  return (
    <table className="w-full text-sm">
      <thead className="bg-[#1D4ED8]/50 text-white">
        <tr>
          <th className="text-left p-2">For the year</th>
          <th className="text-right p-2">
            2023/24
            <br />
            Rs. Million
          </th>
          <th className="text-right p-2">
            2022/23
            <br />
            Rs. Million
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-blue-100">
          <td colSpan={3} className="font-bold p-2">
            Invested Equity
          </td>
        </tr>
        <tr>
          <td className="p-2">Shareholders&#39; funds</td>
          <td className="text-right p-2">43,626.07</td>
          <td className="text-right p-2">38,115.74</td>
        </tr>
        <tr>
          <td className="p-2">Add: Allowance for Impairment losses</td>
          <td className="text-right p-2">7,309.25</td>
          <td className="text-right p-2">7,858.72</td>
        </tr>
        <tr className="bg-blue-100">
          <td colSpan={3} className="font-bold p-2">
            Earnings
          </td>
        </tr>
        <tr>
          <td className="p-2">Profit attributable to shareholders</td>
          <td className="text-right p-2">9,563.64</td>
          <td className="text-right p-2">8,460.33</td>
        </tr>
        <tr>
          <td className="p-2">Add: Impairment charges</td>
          <td className="text-right p-2">373.24</td>
          <td className="text-right p-2">545.74</td>
        </tr>
        <tr>
          <td className="p-2">
            Economic cost %<br />
            (Average Treasury Bill rate plus 2% risk premium)
          </td>
          <td className="text-right p-2">16.80</td>
          <td className="text-right p-2">29.12</td>
        </tr>
        <tr>
          <td className="p-2">Economic cost</td>
          <td className="text-right p-2">8,140.42</td>
          <td className="text-right p-2">12,594.64</td>
        </tr>
        <tr>
          <td className="p-2">Economic value added</td>
          <td className="text-right p-2">1,796.45</td>
          <td className="text-right p-2">(3,588.56)</td>
        </tr>
      </tbody>
    </table>
  );
}

function MarketValueAddedTable() {
  return (
    <table className="w-full text-sm">
      <thead className="bg-[#1D4ED8]/50 text-white">
        <tr>
          <th className="text-left p-2 ">For the year</th>
          <th className="text-right p-2">
            2023/24
            <br />
            Rs. Million
          </th>
          <th className="text-right p-2">
            2022/23
            <br />
            Rs. Million
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2">
            Market capitalisation
            <br />
            Market value of equity
          </td>
          <td className="text-right p-2">34,794.79</td>
          <td className="text-right p-2">30,473.14</td>
        </tr>
        <tr>
          <td className="p-2">
            Less: Equity owners&#39; funds
            <br />
            Shareholders&#39; funds
          </td>
          <td className="text-right p-2">43,626.07</td>
          <td className="text-right p-2">38,115.74</td>
        </tr>
        <tr>
          <td className="p-2">Total equity owners&#39; funds</td>
          <td className="text-right p-2">43,626.07</td>
          <td className="text-right p-2">38,115.74</td>
        </tr>
        <tr>
          <td className="p-2">Market value added/(destroyed)</td>
          <td className="text-right p-2">(8,831.28)</td>
          <td className="text-right p-2">(7,642.60)</td>
        </tr>
      </tbody>
    </table>
  );
}

export default function GRIReporting20() {
  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
          <div className="mx-auto pb-6 md:pb-8">
            <div className="grid grid-cols-1 gap-8">
              <div className="grid grid-cols-1 gap-8">
                <div className="flex items-start mb-4 bg-[#fbcfe8] text-black p-4 rounded-lg">
                  <div className="bg-gray-300 p-2 rounded-full mr-4">
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2">Economic Value</h2>
                    <p className="text-sm">
                      As one of the largest NBFI&#39;s in the country, we play a
                      key role in facilitating wealth creation and access to
                      finance in Sri Lanka and Myanmar. A network of 200
                      branches in Sri Lanka and 16 branches in Myanmar drives
                      our growth, supporting financial inclusion.
                      Digitalisation, connectivity and strong business
                      partnerships facilitate our customers to manage their
                      finances in a digital era. The value created by LB Finance
                      is set out below.
                    </p>
                  </div>
                </div>

                <div className="border p-4 rounded-b-xl overflow-x-auto">
                  <h3 className="text-lg font-bold mb-2">
                    Economic Value Added Statement
                  </h3>
                  <EconomicValueAddedTable />
                </div>

                <div className="border p-4 rounded-b-xl overflow-x-auto">
                  <h3 className="text-lg font-bold mt-6 mb-2">
                    Market Value Added (MVA)
                  </h3>
                  <MarketValueAddedTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
