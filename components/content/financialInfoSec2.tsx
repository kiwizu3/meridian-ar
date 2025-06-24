export default function FinancialInfoSec2() {
  const ImageGallery = () => {
    // Generate an array of image numbers from 8 to 102
    const imageNumbers = Array.from({ length: 95 }, (_, i) => i + 8);
  
    return (
      <div className="overflow-x-auto min-w-[800px] md:max-w-max rounded-lg">
        {imageNumbers.map((number) => {
          // Format the image number with leading zeros to 5 digits
          const formattedNumber = number.toString().padStart(5, '0');
          return (
            <img
              key={number}
              className="w-full"
              src={`/images/annual-report/notes-to-the-financial/notes-to-the-financial-statement_${formattedNumber}.jpg`}
              alt={`notes-to-the-financial-${formattedNumber}`}
            />
          );
        })}
      </div>
    );
  };
  return (
    <div className="bg-white text-blue rounded-lg">
      {/* <div className="mb-4 p-6">
        <h4 className="md:text-md font-bold text-blue mt-4 mb-4">
          2 MATERIAL ACCOUNTING POLICIES AND NOTES - SPECIFIC
        </h4>

        <h5 className=" md:text-base font-bold text-blue mb-2">
          2.1 Net Interest Income
        </h5>
        <h6 className=" md:text-base font-bold text-blue mb-2">
          Accounting Policy
        </h6>
        <p className=" md:text-base text-[#333333] mb-2">
          Revenue is recognised to the extent that it is probable that the
          economic benefits will flow to the Group and the revenue can be
          reliably measured. The following specific recognition criteria must
          also be met before revenue is recognised.
        </p>
        <p className=" md:text-base text-[#333333] mb-2">
          The Group use the Effective Interest Rate (EIR) method for recognising
          the interest income and interest expenses of financial assets and
          financial liabilities that are measured at amortised cost, fair value
          through profit or loss or fair value through other comprehensive
          income under SLFRS 09. EIR is the rate that exactly discounts
          estimated future cash payments or receipts through the expected life
          of the financial instrument or a shorter period, where appropriate, to
          the net carrying amount of the financial asset or financial liability.
        </p>
        <p className=" md:text-base text-[#333333] mb-2">
          The calculation of EIR takes into account all contractual terms of the
          financial instrument and includes any fees or incremental costs that
          are directly attributable to the instrument and are an integral part
          of the EIR, but not future credit losses.
        </p>
        <p className=" md:text-base text-[#333333] mb-2">
          The carrying amount of the financial asset or financial liability is
          adjusted if the Group revises its estimates of payments or receipts.
          The adjusted carrying amount is calculated based on the original EIR
          and the change in carrying amount is recorded as an impairment charge
          or reversal to the Income Statement.
        </p>
        <p className=" md:text-base text-[#333333] mb-2">
          Once the recorded value of a financial asset or a Group of similar
          financial assets has been reduced due to an impairment loss, interest
          income continues to be recognised, using the rate of interest used to
          discount the future cash flows for the purpose of measuring the
          impairment loss. Recognition of interest income is ceased when one or
          more of the criteria set out in Note 2.18 is present for a financial
          asset. More information on interest cessation is discussed in Note
          2.18 to these Financial Statements. Interest from overdue rentals have
          been accounted for on a cash received basis.
        </p>
      </div> */}
      <div className="mb-4">
        <div className="overflow-x-auto">
          <ImageGallery />
        </div>
      </div>
    </div>
  );
}
