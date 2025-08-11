import Image from 'next/image';

interface ReportSectionProps {
  title: string;
  color: string;
  items: string[];
}

function ReportSection({ title, color, items }: Readonly<ReportSectionProps>) {
  return (
    <div className={`${color} p-4 rounded-lg shadow-lg`}>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <ul className="list-disc list-inside">
        {items.map((item, index) => (
          <li key={index} className="text-sm mb-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function GRIReporting17() {
  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
          <div className="text-white">
            <div className="w-full">
              <header className="flex justify-between items-start mb-8">
                <h1 className="text-3xl font-bold text-[#F0A500]">
                  INTRODUCTION TO OUR INTEGRATED REPORT
                </h1>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="flex items-center">
                  <Image
                    src="/images/current-report.PNG"
                    alt="Report Cover"
                    width={300}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <p className="text-lg mb-4">
                    We are pleased to present the 12th integrated annual report
                    of LB Finance PLC (LBF or the Company) for the year ended 31
                    March 2024 which sets out a faithful account of the
                    performance of the Group during this period. Its primary
                    intent is to meet the information requirements of investors,
                    and the information needs of other stakeholders.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ReportSection
                  title="INTEGRATED REPORTING"
                  color="bg-[#F0A500]"
                  items={[
                    'The International Integrated Reporting Framework of the International Integrated Reporting Council (IIRC)',
                    "'A Preparer's Guide to Integrated Reporting' issued by the Institute of Chartered Accountants of Sri Lanka (CA Sri Lanka)",
                  ]}
                />

                <ReportSection
                  title="ESG AND SUSTAINABILITY REPORTING"
                  color="bg-[#3498DB]"
                  items={[
                    'Global Reporting Initiative (GRI) standards - In Accordance with the GRI Standards, issued by Global Sustainability Standards Board',
                    'Guideline on Environmental, Social and Governance (ESG) Reporting issued by the Colombo Stock Exchange (CSE)',
                    'United Nations Sustainable Development Goals (SDGs)',
                    '10 Principles of United Nations Global Compact',
                    'SLFRS Sustainability Disclosure Standards S1 & S2',
                    'Consumer Finance Standard issued by the Sustainability Accounting Standards Board (SASB)',
                    'Disclosure on Gender Parity Reporting issued by CA Sri Lanka',
                  ]}
                />

                <ReportSection
                  title="EVOLVING OUR REPORT IN 2023/24"
                  color="bg-[#2ECC71]"
                  items={[
                    'The report is more concise, reducing the narrative report compared to the previous year',
                    'We have commenced implementation of SLFRS S1 & S2 and significant changes in the presentation of information throughout the report reflecting our efforts and progress',
                    'The SASB Standard on Consumer Finance has been used as an industry guidance in identifying sustainability risks and opportunities',
                    'Tagging of all GRI and SASB requirements facilitating easy search and identification',
                    'The process for determining materiality matters was fine-tuned ensuring that material topics from GRI and SASB standards as well as our business priorities were covered in the process',
                  ]}
                />

                <ReportSection
                  title="CLIMATE-RELATED DISCLOSURES"
                  color="bg-[#95A5A6]"
                  items={[
                    'ISO 14064-1:2018 Organisation Level for Quantification and Reporting of Green House Gas (GHG) Emissions and Removals',
                  ]}
                />

                <ReportSection
                  title="FINANCIAL REPORTING"
                  color="bg-[#34495E]"
                  items={[
                    'Sri Lanka Accounting Standards comprising Sri Lanka Financial Reporting Standards (SLFRSs) and Lanka Accounting Standards (LKASs) issued by CA Sri Lanka',
                    'Companies Act No. 07 of 2007',
                    'Finance Business Act No. 42 of 2011',
                    'Listing Rules of the Colombo Stock Exchange (CSE)',
                    'Listing Rules of the Colombo Stock Exchange (CSE), including the revised Section 9 which was issued in August 2023',
                  ]}
                />

                <ReportSection
                  title="CORPORATE GOVERNANCE PRACTICES"
                  color="bg-[#8E44AD]"
                  items={[
                    'Companies Act No. 07 of 2007 and amendments thereto',
                    'Corporate Governance Direction No. 5 of 2021 issued by the Central Bank of Sri Lanka',
                    'Code of Best Practice for Corporate Governance 2023 issued by CA Sri Lanka',
                    'Directions issued under Finance Business Act No. 42 of 2011',
                  ]}
                />

                <ReportSection
                  title="SCOPE AND BOUNDARY"
                  color="bg-[#2C3E50]"
                  items={[
                    'The boundaries for reporting financial and non-financial information have been aligned and refer to information regarding LB Finance PLC unless specifically stated otherwise.',
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
