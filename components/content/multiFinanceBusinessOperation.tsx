export default function MultiFinanceBusinessOperation() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-[#ff9057]">MULTI FINANCE PLC</h2>
      {/* Multi Finance PLC */}
      <div className="bg-white text-[#0A3D5F] p-4 rounded-lg">
        <p>
          Multi Finance PLC (MFP) is a licensed finance company regulated by the
          Central Bank of Sri Lanka. Initially incorporated as a Limited
          Liability Company in Kandy on 14 October 1974, it was re-registered
          under the Companies Act No.07 of 2007 on 26 February 2009.
          Subsequently, on 13 July 2011, the company was listed on the Colombo
          Stock Exchange.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Vision */}
        <div className="bg-white text-[#0A3D5F] p-4 rounded-lg">
          <h2 className="font-bold text-xl mb-2">VISION</h2>
          <p className="text-lg font-semibold">
            To be the first choice for financial solutions
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white text-[#0A3D5F] p-4 rounded-lg">
          <h2 className="font-bold text-xl mb-2">MISSION</h2>
          <ul className="list-disc list-inside ">
            <li>
              To enhance shareholder value through financial stability and
              growth
            </li>
            <li>
              To satisfy our valued customers by providing innovative solutions
              to their financial needs
            </li>
            <li>To train, develop and empower employees to give their best</li>
            <li>
              To achieve the highest operational efficiency through advanced
              technology
            </li>
            <li>
              To adhere to the highest corporate ethics and social
              responsibilities
            </li>
            <li>To be recognized for our expertise and professionalism</li>
          </ul>
        </div>
      </div>

      {/* Business Focus */}
      <div className="mt-6 bg-white text-[#0A3D5F] p-4 rounded-lg">
        <h2 className="font-bold text-xl mb-2">BUSINESS FOCUS</h2>
        <p>
          Over the years, MFP has garnered the trust of diverse customer
          segments, ranging from individuals to micro entrepreneurs, SMEs to
          high-level corporate clients. Today, it is recognised as a dependable
          financial institution committed to fostering the development of people
          and businesses across all sectors of the Sri Lankan economy. LBF’s
          acquisition of MFP aligns seamlessly with LBF’s growth strategy,
          offering MFP’s customer base access to LBF’s wide array of investment
          opportunities, financing options, value added services, and digital
          solutions. This integration ensures that customers benefit not only
          from MFP’s established reliability but also from LBF’s unwavering
          commitment to service excellence.
        </p>
      </div>

      {/* Map and Outlook */}
      <div className="grid grid-cols-1  gap-4 mt-6">
        <div className="bg-white p-4 rounded-lg">
          <div className="flex justify-center">
            <img
              src="/images/annual-report/srilankaMap.png"
              alt="Sri Lanka Map"
            />
          </div>

          <p className=" text-[#0A3D5F] mt-2">
            In March 2022, LB Finance PLC acquired a 64.63% controlling stake in
            Multi Finance PLC (MFP), aligning with the Central Bank’s proposed
            consolidation strategy for the Non-Bank Financial Institutions
            (NBFIs) sector. Subsequently, this stake increased to 64.76%
            following a mandatory offer made at the beginning of 2022/23.
          </p>
          <p className="text-[#0A3D5F] mt-2">
            Please refer to Financial Capital on page 84 for the financial
            performance of MFP.
          </p>
        </div>
        <div className="bg-white text-[#0A3D5F] p-4 rounded-lg">
          <h2 className="font-bold text-xl mb-2">Outlook</h2>
          <p>
            As prospect in the Central Bank of Sri Lanka’s Master Plan for
            Consolidation of Non-Bank Financial Institutions, we are excited to
            announce the upcoming amalgamation of LBF and MFP. This strategic
            move aligns perfectly with LBF’s growth strategy, providing MFP’s
            customers with access to our comprehensive suite of investment,
            financing, and value-added services – all delivered with our
            unwavering commitment to service excellence.
          </p>
        </div>
      </div>
    </div>
  );
}
