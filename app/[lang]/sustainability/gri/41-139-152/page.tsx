import Section2 from '@/components/content/sustainable-development/naturalCapital/part5';
import Section1 from '@/components/content/sustainable-development/socialRelationshipCapital/part8';

export default function GRIReporting36() {
  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-[#F0B165]">
              STAKEHOLDER MAPPING
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Stakeholder Influence/Interest Grid */}
              <div className="rounded-lg col-span-2">
                <img
                  src="/images/annual-report/stackholderMapping.png"
                  alt="stakeholder mapping"
                  className="w-full rounded-lg"
                />
              </div>
              {/* Stakeholder Mapping Description */}
              <div className="bg-[#fcf7ef] text-black p-6 rounded-lg ">
                <p>
                  It is important to strike a balance between the expectations
                  of key stakeholders for the long-term sustainability of our
                  business. The effectiveness of our business model is closely
                  tied to the contributions made by these stakeholders. The
                  table below illustrates our engagement mechanisms to manage
                  our relationships with multiple stakeholders.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-[#F0B165]">
              VALUE CREATION AND DISTRIBUTION
            </h2>
            <p className="mb-8">
              Stakeholder engagement is a core component of our social and
              financial value creation as both an input and an outcome. Our
              stakeholder-focused, value-added statement demonstrates how
              financial value is created and distributed to our stakeholders.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Income Breakdown */}
              <div className="grid grid-cols-1 md:col-span-3 gap-4">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4 ">
                  <div className="bg-[#fff5eb] text-black p-4 rounded-lg text-center">
                    <p>DISTRIBUTABLE INTEREST INCOME</p>
                    <p className="font-bold">Rs. 45.86 Bn</p>
                    <p>(2022/23 Rs. 39.64 Bn)</p>
                  </div>
                  <div className="bg-[#fff5eb] text-black p-4 rounded-lg text-center">
                    <p>DISTRIBUTABLE FEE AND OTHER INCOME</p>
                    <p className="font-bold">Rs. 3.36 Bn</p>
                    <p>(2022/23 Rs. 3.11 Bn)</p>
                  </div>
                  <div className="bg-[#fff5eb] text-black p-4 rounded-lg text-center">
                    <p>DISTRIBUTABLE OPERATING COST</p>
                    <p className="font-bold">Rs. 4.57 Bn</p>
                    <p>(2022/23 Rs. 4.08 Bn)</p>
                  </div>
                </div>
                <div className="bg-[#fff5eb] text-black p-4 rounded-lg text-center">
                  <p>NET VALUE CREATED</p>
                  <p className="font-bold">Rs. 44.65 Bn</p>
                  <p>(2022/23 Rs. 38.67 Bn)</p>
                </div>
              </div>
            </div>

            {/* Distribution Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-[#dcddee] text-black p-6 rounded-lg border border-black">
                <h3 className="font-bold mb-2">Funders</h3>
                <p>
                  We distributed 47.35% (2022/23: 52.79%) of the value created
                  to depositors and lenders through the payment of interest on
                  deposits and debt.
                </p>
                <p className="font-bold mt-2">Rs. 21.14 Bn</p>
              </div>
              <div className="bg-[#dcddee] text-black p-6 rounded-lg border border-black">
                <h3 className="font-bold mb-2">Employees</h3>
                <p>
                  We distributed 9.75% (2022/23: 9.14%) of the value created to
                  employees through remuneration and benefits.
                </p>
                <p className="font-bold mt-2">Rs. 4.35 Bn</p>
              </div>
              <div className="bg-[#dcddee] text-black p-6 rounded-lg border border-black">
                <h3 className="font-bold mb-2">Capital providers</h3>
                <p>
                  We distributed 7.13% (2022/23: 8.84%) of the value created to
                  investors through the payment of dividends.
                </p>
                <p className="font-bold mt-2">Rs. 3.18 Bn</p>
              </div>
              <div className="bg-[#dcddee] text-black p-6 rounded-lg border border-black">
                <h3 className="font-bold mb-2">Value retained</h3>
                <p>
                  We retained 14.48% (2022/23: 5.27%) of the value created to
                  liquidity support and allocate capital expenditure.
                </p>
                <p className="font-bold mt-2">Rs. 6.46 Bn</p>
              </div>
              <div className="bg-[#dcddee] text-black p-6 rounded-lg border border-black">
                <h3 className="font-bold mb-2">Government</h3>
                <p>
                  We distributed 21.24% (2022/23: 23.90%) of the value created
                  to government through the payment of taxes.
                </p>
                <p className="font-bold mt-2">Rs. 9.48 Bn</p>
              </div>
              <div className="bg-[#dcddee] text-black p-6 rounded-lg border border-black">
                <h3 className="font-bold mb-2">Community</h3>
                <p>
                  We distributed 0.05% (2022/23: 0.06%) of the value created to
                  community through CSR projects.
                </p>
                <p className="font-bold mt-2">Rs. 0.02 Bn</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Section1 />
          </div>

          <div className="mt-6">
            <Section2 />
          </div>
        </div>
      </div>
    </div>
  );
}
