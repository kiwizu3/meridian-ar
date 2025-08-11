import Image from 'next/image';
import React from 'react';

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

function Section({ title, textColor, children }: any) {
  return (
    <div className="mb-6">
      <h2 className={`text-xl font-bold mb-2 ${textColor}`}>{title}</h2>
      {children}
    </div>
  );
}

export default function IntegratedReporting11() {
  const capitalsIcons = [
    {
      name: 'Financial Capital',
      img: '/images/integrated-reporting-icon-1.PNG',
    },
    {
      name: 'Manufactured Capital',
      img: '/images/integrated-reporting-icon-2.PNG',
    },
    { name: 'Human Capital', img: '/images/integrated-reporting-icon-3.PNG' },
    {
      name: 'Intellectual and Digital Capital',
      img: '/images/integrated-reporting-icon-4.PNG',
    },
    {
      name: 'Social and Relationship Capital',
      img: '/images/integrated-reporting-icon-5.PNG',
    },
    { name: 'Natural Capital', img: '/images/integrated-reporting-icon-6.PNG' },
  ];

  const stakeholdersIcons = [
    {
      name: 'Customers',
      img: '/images/integrated-reporting-icon-7.PNG',
    },
    {
      name: 'Shareholders',
      img: '/images/integrated-reporting-icon-8.PNG',
    },
    {
      name: 'Employees',
      img: '/images/integrated-reporting-icon-9.PNG',
    },
    {
      name: 'Society/Communities',
      img: '/images/integrated-reporting-icon-10.PNG',
    },
    {
      name: 'Regulators',
      img: '/images/integrated-reporting-icon-11.PNG',
    },
    {
      name: 'Business Partners',
      img: '/images/integrated-reporting-icon-12.PNG',
    },
  ];

  const materialMattersIcons = [
    {
      name: 'Challenging Economic Conditions',
      img: '/images/integrated-reporting-icon-19.PNG',
    },
    {
      name: 'Serving and Meeting the Needs of Customer',
      img: '/images/integrated-reporting-icon-20.PNG',
    },
    {
      name: 'Good Governance and Risk Optimisation',
      img: '/images/integrated-reporting-icon-21.PNG',
    },
    {
      name: 'Future-fit Organisation',
      img: '/images/integrated-reporting-icon-22.PNG',
    },
    {
      name: 'Supporting Social Cohesion',
      img: '/images/integrated-reporting-icon-23.PNG',
    },
  ];

  const strategicPillarsIcons = [
    {
      name: 'Financial Resilience',
      img: '/images/integrated-reporting-icon-13.PNG',
    },
    {
      name: 'Customer Centricity',
      img: '/images/integrated-reporting-icon-14.PNG',
    },
    {
      name: 'Business Simplification and Optimisation',
      img: '/images/integrated-reporting-icon-15.PNG',
    },
    {
      name: 'Digital Transformation',
      img: '/images/integrated-reporting-icon-16.PNG',
    },
    {
      name: 'Workforce Empowermen',
      img: '/images/integrated-reporting-icon-17.PNG',
    },
    {
      name: 'Manage Our Impacts',
      img: '/images/integrated-reporting-icon-18.PNG',
    },
  ];

  const sustainabilityPillars = [
    {
      name: 'Financial Stability',
      img: '/images/annual-report/financialSustainabilityIcon.png',
    },
    {
      name: 'Positive Environmental Impact',
      img: '/images/annual-report/pEnvImpactIcon.png',
    },
    {
      name: 'Inclusive Growth',
      img: '/images/annual-report/inclusiveGrowthIcon.png',
    },
    {
      name: 'Great Work Place',
      img: '/images/annual-report/greatWorkPlaceIcon.png',
    },
  ];

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

          <div className="text-white mt-8">
            <h1 className="text-2xl font-bold text-[#F0A500] mb-4">
              OUR INTEGRATED ANNUAL REPORT BOUNDARY
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { title: 'Strategy and Sustainability', pages: '50 to 62' },
                { title: 'Business Model', pages: '38 to 39' },
                { title: 'Operational Performance', pages: '68 to 82' },
                { title: 'Material Matters', pages: '45 to 49' },
                { title: 'Operating Context', pages: '32 to 37' },
                { title: 'Risk Management', pages: '208 to 230' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#cae9ec] text-black p-4 rounded-lg"
                >
                  <h3 className="font-semibold">{item.title}</h3>
                  <div className="flex items-center mt-2">
                    <div>
                      <Image
                        src="/images/book-icon.png"
                        width={32}
                        height={32}
                        alt="book icon"
                      />
                    </div>
                    <span className="ml-2">Refer pages {item.pages}</span>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-bold text-blue-600 mb-4">
              SUSTAINABILITY
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { title: 'Environment', pages: '146 to 154' },
                { title: 'Social', pages: '128 to 145' },
                { title: 'Governance', pages: '164 to 178' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#f4e9d7] text-black p-4 rounded-lg"
                >
                  <h3 className="font-semibold">{item.title}</h3>
                  <div className="flex items-center mt-2">
                    <div>
                      <Image
                        src="/images/book-icon.png"
                        width={32}
                        height={32}
                        alt="book icon"
                      />
                    </div>
                    <span className="ml-2">Refer pages {item.pages}</span>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-bold text-[#4e70b7] mb-4">
              OUR FINANCIAL REPORTING BOUNDARY
            </h2>
            <div className="bg-red-100 p-4 rounded-lg mb-6">
              <p className="text-center">
                (defined by control and significant influence)
              </p>
              <div className="bg-[#f7a9b0] text-center p-2 rounded mt-2 mb-4">
                LB Finance PLC
              </div>
              <div className="flex justify-between">
                <span>LB Microfinance Myanmar Company Limited</span>
                <span>Multi Finance PLC</span>
              </div>
            </div>

            <h2 className="text-xl font-bold text-[#4e70b7] mb-4">
              STAKEHOLDER ENGAGEMENT
            </h2>
            <div className="bg-[#5ecae6] text-black p-4 rounded-lg grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Customers',
                'Shareholders',
                'Employees',
                'Business partners',
                'Society and communities',
                'Regulators',
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <span className="ml-2">{item}</span>
                </div>
              ))}
              <div className="flex items-center col-span-2 md:col-span-3">
                <span className="ml-2">Refer pages 40 to 44</span>
              </div>
            </div>

            <h2 className="text-xl font-bold text-[#F0A500] mt-6 mb-4">
              OUR PREVIOUS REPORTS
            </h2>
            <div className="flex flex-wrap items-end">
              <div className="w-1/4 p-2">
                <Image
                  src="/images/pre-report-1.PNG"
                  width={300}
                  height={400}
                  alt="Annual Report 2020/21"
                  className="w-full"
                />
                <p className="text-center mt-2">Annual Report 2020/21</p>
              </div>
              <div className="w-1/4 p-2">
                <Image
                  src="/images/pre-report-2.PNG"
                  width={300}
                  height={400}
                  alt="Annual Report 2021/22"
                  className="w-full"
                />
                <p className="text-center mt-2">Annual Report 2021/22</p>
              </div>
              <div className="w-1/4 p-2">
                <Image
                  src="/images/pre-report-3.PNG"
                  width={300}
                  height={400}
                  alt="Annual Report 2022/23"
                  className="w-full"
                />
                <p className="text-center mt-2">Annual Report 2022/23</p>
              </div>
            </div>

            <div className="mt-6 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-xl font-bold text-[#4e70b7] mb-2">
                REPORTING PERIOD
              </h2>
              <p className="text-black">
                In line with LBF&apos;s established procedure of publishing an
                annual integrated report including sustainability information,
                this current report has been prepared for the period 01 April
                2023 to 31 March 2024 in alignment with the Company&apos;s
                financial reporting cycle ending on 31st March 2024. Any
                material events after this date and up to date of Board approval
                31 May 2024 have also been included.
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-bold text-[#4e70b7] mb-2">
                GUIDING PRINCIPLES
              </h2>
              <p className="mb-2">
                LBF has applied the following guiding principles in preparing
                this report to ensure that it provides a credible review of our
                performance:
              </p>
              <ul className="list-disc pl-5">
                <li>
                  <strong>Faithful representation:</strong> We have presented a
                  balanced view of our performance, including both positive,
                  neutral and negative aspects
                </li>
                <li>
                  <strong>Materiality:</strong> We have reported on material
                  matters using the dual materiality concept
                </li>
                <li>
                  <strong>Connectivity of information:</strong> Icons have been
                  used to connect strategy, capitals and stakeholders throughout
                  the report
                </li>
                <li>
                  <strong>Conciseness:</strong> This has been a key objective to
                  convey the critical matters to users of the report in a
                  complete but concise manner
                </li>
                <li>
                  <strong>Consistency and comparability:</strong> Information in
                  this report has been aligned to reporting frameworks and
                  industry standards wherever possible facilitating
                  comparability
                </li>
                <li>
                  <strong>Reliability:</strong> Internal processes and controls
                  have been put in place to ensure the reliability of both
                  financial and non-financial information
                </li>
              </ul>
            </div>
          </div>

          <div className="text-white mt-8" id="section8">
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <Section title="ASSURANCE" textColor="text-[#F0A500]">
                  <p>
                    External assurance for both financial and non-financial
                    information has been provided by Messrs Ernst & Young. Their
                    report is given on pages 63 to 66.
                  </p>
                </Section>
              </div>

              <div className="mb-6">
                <Section
                  title="CONNECTIVITY OF INFORMATION"
                  textColor="text-[#F0A500]"
                >
                  <p>
                    The connectivity of information has been improved by the use
                    of the following icons throughout the report:
                  </p>

                  <div className="mt-6">
                    <h2 className="mb-4">The Capitals</h2>
                    <div className="grid grid-cols-6 gap-4 mt-4">
                      {capitalsIcons.map((icon, index) => (
                        <div key={index} className="block text-center">
                          <div className="flex items-center justify-center w-[60px] h-[60px] mx-auto bg-[#7ecaa7]">
                            <Image
                              src={icon.img}
                              alt="icon.name"
                              width={100}
                              height={100}
                              style={{
                                width: '90%',
                                height: '90%',
                                objectFit: 'contain',
                              }}
                            />
                          </div>
                          <span className="text-sm">{icon.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h2 className="mb-4">Stakeholders</h2>
                    <div className="grid grid-cols-6 gap-4 mt-4">
                      {stakeholdersIcons.map((icon, index) => (
                        <div key={index} className="block text-center">
                          <div className="flex items-center justify-center w-[60px] h-[60px] mx-auto bg-[#f1eacb]">
                            <Image
                              src={icon.img}
                              alt="icon.name"
                              width={100}
                              height={100}
                              style={{
                                width: '90%',
                                height: '90%',
                                objectFit: 'contain',
                              }}
                            />
                          </div>
                          <span className="text-sm">{icon.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h2 className="mb-4">Material Matters</h2>
                    <div className="grid grid-cols-6 gap-4 mt-4">
                      {materialMattersIcons.map((icon, index) => (
                        <div key={index} className="block text-center">
                          <div className="flex items-center justify-center w-[60px] h-[60px] mx-auto bg-[#bcbdc0]">
                            <Image
                              src={icon.img}
                              alt="icon.name"
                              width={100}
                              height={100}
                              style={{
                                width: '90%',
                                height: '90%',
                                objectFit: 'contain',
                              }}
                            />
                          </div>
                          <span className="text-sm">{icon.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h2 className="mb-4">Strategic Pillars</h2>
                    <div className="grid grid-cols-6 gap-4 mt-4">
                      {strategicPillarsIcons.map((icon, index) => (
                        <div key={index} className="block text-center">
                          <div className="flex items-center justify-center w-[60px] h-[60px] mx-auto bg-[#aeb5db]">
                            <Image
                              src={icon.img}
                              alt="icon.name"
                              width={100}
                              height={100}
                              style={{
                                width: '90%',
                                height: '90%',
                                objectFit: 'contain',
                              }}
                            />
                          </div>
                          <span className="text-sm">{icon.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h2 className="mb-4">Sustainability Pillars</h2>
                    <div className="grid grid-cols-4 gap-4 mt-4">
                      {sustainabilityPillars.map((icon, index) => (
                        <div key={index} className="block text-center">
                          <div className="flex items-center justify-center w-[60px] h-[60px] mx-auto bg-[#cae9e8]">
                            <Image
                              src={icon.img}
                              alt="icon.name"
                              width={100}
                              height={100}
                              style={{
                                width: '90%',
                                height: '90%',
                                objectFit: 'contain',
                              }}
                            />
                          </div>
                          <span className="text-sm">{icon.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Section>
              </div>

              <Section
                title="FORWARD-LOOKING STATEMENTS"
                textColor="text-[#F0A500]"
              >
                <p>
                  This report contains &quot;forward-looking&quot; statements
                  which have been included to enhance the future orientation of
                  the report. These are based on information available at the
                  time of preparation of the report sourced from reliable and
                  credible available information, internal information and our
                  perceptions and opinions. These statements can be verified
                  only with hindsight and therefore, have significant levels of
                  uncertainty associated with the same. As Sri Lanka is on a
                  path to economic recovery and geopolitical risks continue to
                  remain high, the external operating environment continues to
                  remain fluid, and readers are advised to exercise their own
                  judgments using the latest available information at the time
                  of assessing such forward-looking statements. While
                  significant efforts have been made to ensure the validity of
                  these, all forward-looking statements are provided without
                  recourse or any liability whatsoever to the Board or other
                  preparers of the Annual Report due to the reasons enumerated
                  above.
                </p>
              </Section>

              <Section
                title="RESTATEMENTS OF INFORMATION"
                textColor="text-[#F0A500]"
              >
                <p>
                  There are no restatements of financial or non-financial
                  information which was audited in the previous year.
                </p>
              </Section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-[#F2F2F2] text-black p-4 rounded-lg">
                  <h2 className="text-xl font-bold mb-4 text-[#F0A500]">
                    FEEDBACK
                  </h2>
                  <p>
                    We welcome your suggestions and comments on further
                    improving the readability and relevance of our Report.
                    Kindly direct your feedback to:
                  </p>
                  <p className="mt-4">
                    <strong>
                      Chief Financial Officer or Manager
                      <br />
                      Sustainability & Corporate Reporting
                      <br />
                      <br />
                      <span className="text-[#d9242f]">LB Finance PLC</span>
                    </strong>
                    <br />
                    Corporate Office,
                    <br />
                    No. 20, Dharmapala Mawatha,
                    <br />
                    Colombo 03.
                    <br />
                    Tel: 011-2155 473 | Fax: 011 2575 096
                  </p>
                </div>

                <div className="bg-[#b3e2f1] text-black p-4 rounded-lg">
                  <h2 className="text-xl font-bold mb-4 text-[#F0A500]">
                    BOARD RESPONSIBILITY STATEMENT
                  </h2>
                  <p>
                    The Integrated Annual Report of LB Finance PLC has been
                    prepared by the Management of the Company and has been
                    reviewed by the Board of Directors of the Company to ensure
                    the integrity of the 2023/24 Integrated Report. The Board
                    has considered the completeness of the material aspects
                    addressed in the report, and the reliability of financial
                    and non-financial information presented, taking into
                    consideration the internal and external assurance provided.
                  </p>
                  <p className="mt-4">
                    The Board is satisfied that the 2023/24 Integrated Report
                    provides a faithful representation of the performance of LB
                    Finance PLC and its financial position for the year under
                    review. This 2023/24 Integrated Report was approved by the
                    Board and signed on its behalf by:
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <Image
                        src="/images/sig-2.PNG"
                        alt="G R D Prasanna Signature"
                        width={100}
                        height={50}
                      />
                      <p>
                        G R D Prasanna
                        <br />
                        Chairman
                      </p>
                    </div>
                    <div>
                      <Image
                        src="/images/sig-1.PNG"
                        alt="J A S S Adhihetty Signature"
                        width={100}
                        height={50}
                      />
                      <p>
                        J A S S Adhihetty
                        <br />
                        Managing Director
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
