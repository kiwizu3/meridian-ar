export default function StatementsCashFlows() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto">
      <div>
        <div className="bg-white p-6  rounded-lg">
          <div className="mb-4 p-4 bg-white rounded-lg">
            <h3 className="text-lg font-bold mb-2 text-[#0A3D5F]">
              Accounting Policy
            </h3>
            <p className=" text-[#333333]">
              The Cash Flow Statement has been prepared by using ‛The Indirect
              Method’ in accordance with the Sri Lanka Accounting Standard -
              LKAS 07 (Statement of Cash Flows), whereby operating activities,
              financing activities and investing activities have been
              recognised. Cash and cash equivalents comprise short term, highly
              liquid investments that are readily convertible to known amounts
              of cash and are subject to an insignificant risk of changes in
              value. The cash and cash equivalents consist of cash in hand,
              balances with banks, placements with banks, money at call and
              short notice.
            </p>
          </div>

          <div className="overflow-x-auto">
            <img
              src="/images/charts/financialInformation/statementofcashflow1.jpg"
              alt="income-statement"
              className="md:w-full md:max-w-full max-w-[800px]"
            />
          </div>

          <div className="overflow-x-auto">
            <img
              src="/images/charts/financialInformation/statementofcashflow2.jpg"
              alt="income-statement"
              className="md:w-full md:max-w-full max-w-[800px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
