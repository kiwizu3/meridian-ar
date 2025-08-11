'use client';

import Image from 'next/image';

export default function IntellectualDigitalCapitalPart3() {
  return (
    <div>
      <div className="bg-white text-black p-8">
        <div className="w-full">
          <h2 className="text-2xl font-bold text-center bg-[#ff69b4] text-white p-2 rounded">
            CAPITAL TRADE-OFF
          </h2>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-center">
              Process automation
            </h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-[#d1e0f2] p-4 rounded">
                <h4 className="font-bold mb-2">FC</h4>
                <p className="text-sm">
                  Significant financial outlay in the short-term but financial
                  returns in the long-term due to improved efficiency
                </p>
              </div>
              <div className="bg-[#fbdde9] p-4 rounded">
                <h4 className="font-bold mb-2">HC</h4>
                <p className="text-sm">Improves employee productivity</p>
              </div>
              <div className="bg-[#d1cbe4] p-4 rounded">
                <h4 className="font-bold mb-2">NC</h4>
                <p className="text-sm">
                  Less paper usage contributes to environmental sustainability
                </p>
              </div>
              <div className="bg-[#e7f1d4] p-4 rounded">
                <h4 className="font-bold mb-2">SC</h4>
                <p className="text-sm">
                  Improves customer satisfaction through enhanced convenience
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-center">
              Investment in Advanced data analytics, digital financing and
              machine learning platform
            </h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-[#d1e0f2] p-4 rounded">
                <h4 className="font-bold mb-2">FC</h4>
                <p className="text-sm">
                  Investments made on new infrastructure system to improve
                  reliability and productivity
                </p>
              </div>
              <div className="bg-[#fbdde9] p-4 rounded">
                <h4 className="font-bold mb-2">IC</h4>
                <p className="text-sm">
                  Enhances innovation, and improves brand reputation
                </p>
              </div>
              <div className="bg-[#e9ddc8] p-4 rounded">
                <h4 className="font-bold mb-2">SC</h4>
                <p className="text-sm">New products and services</p>
              </div>
              <div className="bg-[#d1cbe4] p-4 rounded">
                <h4 className="font-bold mb-2">HC</h4>
                <p className="text-sm">
                  Improves decision making, new skill development
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 mt-5">
            <h2 className="text-2xl font-bold text-[#ff9800]">OUR BRAND</h2>
            <p className="text-sm">
              Since its inception over 50 years ago, the journey of LBF has been
              one of continuous growth, evolving into a pivotal asset within the
              Group. Our brand has undergone numerous transformative phases,
              reinforcing the fundamental principles defining LBF: Excellence,
              Quality, Innovation, Professionalism, Ethics, and Transparency.
            </p>
            <p className="text-sm">
              Our strategic objective has been to enhance our brand image,
              ensuring it resonates with our audience. This is facilitated by a
              range of tactical and business support initiatives, including a
              robust public relations strategy, well-defined social media
              policies, and precise communication protocols. These initiatives
              effectively disseminate our brand messages across a variety of
              digital platforms and communication channels, ensuring that
              critical messages are amplified while safeguarding our brand
              equity at all times.
            </p>
            <p className="text-sm">
              By steadfastly adhering to these core principles, we have earned
              the trust and admiration of all stakeholders, thereby cementing
              our reputation as one of the most respected and beloved brands in
              Sri Lanka.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/sustainability/partnerships-goals-gallery-1.PNG"
                alt="Sri Lanka Map"
                width={400}
                height={400}
              />
              <Image
                src="/images/sustainability/partnerships-goals-gallery-2.PNG"
                alt="Sri Lanka Map"
                width={400}
                height={400}
              />
              <Image
                src="/images/sustainability/partnerships-goals-gallery-3.PNG"
                alt="Sri Lanka Map"
                width={400}
                height={400}
              />
              <Image
                src="/images/sustainability/partnerships-goals-gallery-4.PNG"
                alt="Sri Lanka Map"
                width={400}
                height={400}
              />
            </div>
          </div>

          <div className="space-y-4 mt-5">
            <h2 className="text-2xl font-bold text-[#ff9800]">
              INFORMATION TECHNOLOGICAL ASSETS
            </h2>
            <p className="text-sm">
              Our information technology assets encompass an extensive IT
              infrastructure and software architecture developed over the years.
              We refine our IT strategy annually to leverage technology to
              accelerate business growth. Through sustained investments over the
              years, we have expanded and upgraded our technology assets,
              positioning LBF to gain substantial competitive advantages. These
              advantages further solidify the Company&apos;s position as a
              digital leader in the local financial services industry.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white text-black p-8">
        <div className="w-full">
          <h2 className="text-2xl font-bold text-center mb-6 bg-[#ef56a0] text-white py-2 rounded">
            OUR BRAND PERFORMANCE - 2023
          </h2>

          <div className="flex flex-wrap justify-between items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-16 h-16 bg-red-600 flex items-center justify-center text-white font-bold mr-4">
                LMD
              </div>
              <Image
                src="/images/sustainability/brand-finance-logo.PNG"
                alt="Sri Lanka Map"
                width={200}
                height={200}
                style={{ width: '150px' }}
              />
            </div>
            <p className="text-sm max-w-md">
              Brand value reflects the image of the Company in the eyes of
              customers, existing or potential and other important stakeholders.
              Since LBF recognises the importance of brand as a key value driver
              the Company is constantly striving to preserve and nurture it.
            </p>
          </div>

          <div className="flex flex-wrap justify-between mb-8">
            {[
              {
                rank: '25th',
                title: 'MOST VALUABLE BRAND',
                color: 'bg-[#ef56a0]',
              },
              {
                rank: '01st',
                title: 'SECTOR WINNER - FINANCE AND LEASING',
                color: 'bg-[#ef56a0]',
              },
              {
                rank: '28th',
                title: 'MOST RESPECTED ENTITY',
                color: 'bg-[#ef56a0]',
              },
            ].map((item, index) => (
              <div key={index} className="w-full md:w-1/3 p-2">
                <div
                  className={`${item.color} p-4 rounded-lg text-center text-white`}
                >
                  <h3 className="text-3xl font-bold mb-2">{item.rank}</h3>
                  <p className="text-sm">{item.title}</p>
                  <p className="text-xs">place in</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold bg-[#DEB887] p-2 mb-4">
              ATTRIBUTE RANKING
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { rank: '11th', title: 'FINANCIAL PERFORMANCE' },
                { rank: '14th', title: 'MANAGEMENT PROFILE' },
                { rank: '22nd', title: 'HONESTY' },
                { rank: '20th', title: 'INNOVATION' },
                { rank: '25th', title: 'DYNAMISM' },
                { rank: '32nd', title: 'CSR AND SUSTAINABILITY' },
                { rank: '20th', title: 'VISION' },
                { rank: '25th', title: 'HR AND PEOPLE MANAGEMENT' },
                { rank: '21st', title: 'CRISIS MANAGEMENT' },
              ].map((item, index) => (
                <div key={index} className="bg-gray-100 p-2 rounded">
                  <h4 className="text-[#FF69B4] font-bold">{item.rank}</h4>
                  <p className="text-xs">{item.title}</p>
                  <p className="text-xs">place in</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold bg-[#DEB887] p-2 mb-4">
                LICENSED SOFTWARE
              </h3>
              <ul className="list-disc list-inside text-sm">
                <li>E-financial system, leasing, treasury modules</li>
                <li>Oracle fusion ERP cloud</li>
                <li>Oracle budgeting and planning modules</li>
                <li>Oracle profitability management modules</li>
                <li>ATM switch</li>
                <li>HRIS system</li>
                <li>Document management system</li>
                <li>Customer relationship management system</li>
                <li>Internet banking and e-wallet (iOS & Android)</li>
                <li>E-learning platform</li>
                <li>Reporting services and Tableau</li>
                <li>AML system</li>
                <li>CACM system</li>
                <li>Western Union system</li>
                <li>Kaspersky End point security</li>
                <li>Robotic process automated software</li>
                <li>Data visualisation and modelling software</li>
                <li>Azure DevOps</li>
                <li>Kibana</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold bg-[#4169E1] text-white p-2 mb-4">
                IN-HOUSE SOFTWARE
              </h3>
              <ul className="list-disc list-inside text-sm">
                <li>Common business partner management module</li>
                <li>Common cashier module</li>
                <li>Gold loan module</li>
                <li>
                  Credit origination module including iOS oracle profitability
                  management modules and Android mobile apps
                </li>
                <li>Savings module</li>
                <li>Fixed deposit module</li>
                <li>Money exchange module</li>
                <li>MIS reporting services</li>
                <li>Eclipse credit mobile app</li>
                <li>CIM wallet app</li>
                <li>3CX call centre application</li>
                <li>PAM solution</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-[#FFA500] mb-4">
              CONTROL SYSTEMS AND FRAMEWORKS
            </h3>
            <h4 className="font-semibold mb-2">Business Continuity Planning</h4>
            <p className="text-sm">
              To mitigate potential risks that could disrupt or jeopardise our
              critical business functions, our strategy places utmost importance
              on the safety and security of all employees while ensuring
              uninterrupted continuity of essential business operations. This
              involves ensuring uninterrupted business operations from a
              pre-established alternative site in the event of an emergency.
            </p>
            <p className="text-sm mt-2">
              Our comprehensive Business Continuity Plan (BCP) is formulated in
              accordance with the guidelines of the Central Bank of Sri Lanka
              (CBSL) and is benchmarked against global standards. It serves as a
              fail-safe mechanism, offering comprehensive protection for our
              staff members, facilities, technology, and information systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
