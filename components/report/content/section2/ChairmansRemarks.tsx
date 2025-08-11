import React from 'react';
import Image from 'next/image';

const chartData = [
  {
    title: 'Profit After Tax',
    src: '/images/report/content/profit-after-tax.png',
  },
  {
    title: 'Gross and Net NPL Ratio',
    src: '/images/report/content/gross-and-net-npl-ratio.png',
  },
  {
    title: 'Customer Deposits',
    src: '/images/report/content/customer-deposits.png',
  },
  {
    title: 'Net Asset Value per Share',
    src: '/images/report/content/net-asset-value-per-share.png',
  },
  {
    title: 'Return on Equity',
    src: '/images/report/content/return-on-equity.png',
  },
  {
    title: 'EPS and PE Ratio',
    src: '/images/report/content/eps-and-pe-ratio.png',
  },

  {
    title: 'Market Capitalisation',
    src: '/images/report/content/market-capitalisation.png',
  },
  {
    title: 'Total Assets',
    src: '/images/report/content/total-assets.png',
  },
];

export default function ChairmansRemarks() {
  return (
    <div className="chairmans-remarks p-6 bg-themeGreen max-h-[70vh] overflow-y-auto custom-scrollbar">
      <h1 className="text-4xl font-bold mb-4">CHAIRMAN'S REMARKS</h1>
      <div className="space-y-8">
        {/* Introduction Section */}
        <div>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic mb-6">
            "Robust governance is not merely a compliance exercise for LBF; it
            is the bedrock of our operations and fundamental to creating
            sustainable value for all stakeholders. Our commitment in this
            regard is comprehensive, spanning both traditional risk management
            and proactive integration of Environmental, Social, and Governance
            (ESG) principles."
          </blockquote>
          <p className="text-right font-medium">
            G A R D Prasanna
            <br />
            Chairman
          </p>
        </div>

        {/* Year in Review Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            A YEAR OF UNPRECEDENTED ACHIEVEMENT AND STRATEGIC STRENGTH
          </h2>
          <p className="mb-4">
            Financial Year 2024/25 was a landmark year for LB Finance PLC (LBF),
            marked by a commanding performance that culminated in our
            highest-ever profit after tax. This exceptional financial outcome
            was further complemented by significant expansion of our asset base
            and sustained strength and quality of our portfolio. These results
            are the direct consequence of our disciplined strategic execution,
            the prudent leveraging of a robust balance sheet to invest in key
            growth opportunities, and pivotal investments in technology, which
            have enhanced customer experience. Fundamentally, this success is
            underpinned by the unwavering passion, dedication, and perseverance
            of the LBF team.
          </p>
        </div>

        {/* Financial Charts Section - Placeholders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
          {chartData.map(({ title, src }) => (
            <div
              key={title}
              className="p-2 sm:p-3 md:p-4 rounded-lg shadow-sm sm:shadow-md"
            >
              <h3 className="font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                {title}
              </h3>
              <div className="relative aspect-video bg-gray-100 rounded">
                <Image
                  src={src}
                  alt={title}
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Company Legacy Section */}
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <p>
            For over 54 years, LBF has been a potent force in Sri Lanka's
            economic and social progress. We have consistently fostered job
            creation, broadened financial inclusion, spearheaded innovation, and
            empowered communities, reshaping the financial landscape for
            individuals and businesses. This deep-rooted legacy provides the
            foundation for our continued leadership and impact.
          </p>
        </div>

        {/* Operating Environment Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            NAVIGATING A DYNAMIC OPERATING ENVIRONMENT
          </h2>
          <p className="mb-4">
            The financial year unfolded within a complex yet increasingly stable
            environment. While we welcomed the trend towards a more predictable
            policy landscape after March 2024, which facilitated stable
            conditions for product pricing. These positives were balanced by
            heightened market competition, particularly due to regulatory
            changes enabling broader branch expansions across the financial
            services sector. Furthermore, macroeconomic pressures continued to
            pose challenges, notably impacting staff retention across the
            industry. While our staff attrition remained manageable and
            primarily linked to external factors, we navigated these conditions
            with resilience, ensuring our strategic agility remained paramount.
          </p>
        </div>

        {/* Performance Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            DELIVERING RECORD PERFORMANCE AND OPERATIONAL EXCELLENCE
          </h2>
          <p className="mb-4">
            Our focus on execution translated directly into tangible results. We
            exceeded our financial performance budget in FY 2024/25, delivering
            the highest business volumes and growth rate witnessed in the
            Company's history. This culminated in the record-breaking profit
            after tax of Rs. 10.80 billion, reflecting a 12.99% growth YoY.
          </p>
          <p className="mb-4">
            Our rigorous operational management led to a significant reduction
            in our Non-Performing Loan (NPL) ratio to a historic low of 2.25% in
            the year under review, underscoring the effectiveness of our market
            recoveries and collection mechanisms. Moreover, we maintained
            healthy Key Performance Indicators (KPIs) across all operational
            facets and preserved margins despite the intense competitive
            pressures.
          </p>
        </div>

        <div className="bg-cardGreen border p-4 rounded-lg">
          We undertook a comprehensive review and revitalisation of our ESG
          policy, including the development of a specific Climate Risk Policy,
          to ensure alignment with evolving expectations and sectoral risks.
          This proactive stance is further evidenced by the commencement of
          integrating SLFRS S1 and S2 sustainability and climate-related risk
          and opportunity management requirements
        </div>

        {/* ESG and Growth Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            GOVERNANCE, RISK MANAGEMENT, AND SUSTAINABLE VALUE CREATION
          </h2>
          <p className="mb-4">
            Robust governance is not merely a compliance exercise for LBF; it is
            the bedrock of our operations and fundamental to creating
            sustainable value for all stakeholders. Our commitment in this
            regard is comprehensive, spanning both traditional risk management
            and proactive integration of Environmental, Social, and Governance
            (ESG) principles.
          </p>
          <p className="mb-4">
            This year, we significantly enhanced our governance and risk
            management framework. Key structural improvements included
            strengthening of Chief Information Security Officer (CISO) function
            to bolster our cyber risk oversight and a formal Operational Risk
            Management Committee (ORMC) to strengthen operational risk
            governance. We also introduced a Boardapproved Model Risk Management
            Framework, ensuring robust oversight of our statistical and AI
            models, and appointed a dedicated employee to specifically oversee
            personal data governance and compliance.
          </p>
          <p className="mb-4">
            Furthermore, our unwavering commitment to sustainability was
            significantly formalised and integrated into our risk approach. We
            undertook a comprehensive review and revitalisation of our ESG
            policy, including the development of a specific Climate Risk Policy,
            to ensure alignment with evolving expectations and sectoral risks.
            This proactive stance is further evidenced by the commencement of
            integrating SLFRS S1 and S2 sustainability and climate-related risk
            and opportunity management requirements into our overall risk
            framework and the initiation of clear, measurable
            sustainability-related Key Performance Indicators (KPIs). Our
            dedicated Board Sustainability Committee ensures sustainability is
            deeply woven into our corporate governance and strategic planning.
          </p>
          <p className="mb-4">
            Our targeted growth strategies paid off, with approximately 35%
            business volume growth in specific areas, supported by strong
            customer loyalty, evidenced by 40- 50% of new disbursements being
            directed towards existing customers.
          </p>
          <p className="mb-4">
            Customer deposits reached Rs. 138.49 billion by 31 March 2025,
            marking a 12.78% YoY increase largely driven by fixed deposits. This
            outcome resulted from a strategic emphasis on fixed deposits to
            secure stable funding with favourable costs and enhance the maturity
            profile, capitalising on prevailing interest rates. High deposit
            renewal ratio and new depositor attraction highlighted strong
            customer confidence.{' '}
          </p>
          <p className="mb-4">
            Our commitment to strengthening the Company and delivering value to
            our shareholders is reflected in the growth of our Equity. As of 31
            March 2025, Equity reached Rs. 51.26 billion, a substantial increase
            of Rs. 7.63 billion, or 17.51% YoY. This robust growth is primarily
            attributable to the strong retained earnings generated from the
            year's record profitability. Crucially, this significant internal
            capital generation was achieved while consistently adhering to our
            dividend payout policy of 1/3 of profit, underscoring our ability to
            reinvest for future growth and provide attractive returns to our
            shareholders. As a result, the Board has proposed a final dividend
            of Rs. 4.25 per share, bringing the total dividend for the year
            (including the interim dividend of Rs. 2.25 per share) to Rs. 6.50
            per share. This demonstrates our commitment to rewarding our
            shareholders for their ongoing trust and support. Consequently, the
            Company's capital adequacy remains comfortably above regulatory
            requirements, providing a strong and sufficient capital base to
            support our strategic expansion plans
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            STRATEGIC MILESTONES AND FUTURE FOUNDATION
          </h2>
          <p className="mb-4">
            The financial year under review was also marked by strategic
            execution that strengthened our platform for future growth. We
            enhanced our branding and market reach through the addition of new
            branches, cementing our position as the financial institution with
            the largest branch network. A pivotal corporate event was the
            successful completion of the amalgamation of Multi Finance PLC in
            July 2024. Acquired under the guidance of the Central Bank of Sri
            Lanka (CBSL), this strategic integration resulted in the full
            absorption of Multi Finance's assets and liabilities, which are now
            fully reflected in our financial statements.
          </p>
          <p className="mb-4">
            Moreover, we continued to invest in our strategic transformation,
            including the recruitment of a Chief Transformation Officer, tasked
            with leading enterprisewide change and fostering a culture of
            innovation. While early AI-based lending initiatives are underway,
            the full impact of these innovations is anticipated to become more
            evident in the coming year.
          </p>
          <p className="mb-4">
            Across all material risk categories including Credit, Integrated,
            Operational, Information Security, Sustainability, and Model Risk we
            have implemented targeted enhancements, refined policies, updated
            risk appetites, and conducted rigorous stress testing and
            assessments. A notable achievement was the successful upgrade of our
            Information Security Management System (ISMS) to the ISO/IEC
            27001:2022 standard, positioning LBF as the first NBFI in Sri Lanka
            to reach this benchmark, reinforcing our commitment to international
            best practices. We also initiated the implementation of a Security
            Operations Centre (SOC) to enhance real-time monitoring and response
            capabilities.
          </p>
          <p className="mb-4">
            These comprehensive initiatives fortify our control environment,
            enhance our resilience against an evolving risk landscape, reinforce
            our adherence to national and international standards, and
            ultimately ensure we are well-equipped to support our future growth
            trajectory while upholding our culture of transparency and ethical
            leadership
          </p>
        </div>

        {/* Future Outlook Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">FUTURE OUTLOOK</h2>
          <p className="mb-4">
            As we transition from a year of exceptional performance, LBF is
            poised to build upon this strong momentum. Our strategic direction
            is unequivocally clear: to solidify our standing as a leading
            technologydriven financial service provider. We will strategically
            leverage Fintech and AI across every facet of our operations, not
            only to enhance efficiency but critically, to elevate customer
            experience. While credit income will remain a vital revenue driver,
            our operational framework will progressively become more
            tech-centric.
          </p>
          <p className="mb-4">
            Central to this forward-looking strategy are several key
            expansionary initiatives. We will significantly grow our
            Microfinance and Small Business Loan portfolio, develop bespoke
            financial products for small business owners, and enhance our
            Alternate Finance Solutions offering. Focused regional expansion
            also remains a critical objective. Concurrently, we are committed to
            the pervasive integration of Sustainability and ESG principles
            across the organisation.
          </p>
        </div>

        {/* Acknowledgements */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">ACKNOWLEDGEMENTS</h2>
          <p className="mb-4">
            As I conclude this message, the exceptional performance achieved in
            FY 2024/25 is a clear validation of our disciplined strategic
            execution, coupled with our deepening commitment to robust
            governance and sustainable value creation. We are confident in our
            ability to build upon this momentum, navigating future challenges
            and opportunities with resilience and focus, to ensure enduring
            prosperity for all who place their trust in LBF.
          </p>
          <p>
            To conclude, I wish to express my sincere appreciation to the LBF
            team. Your unwavering commitment, dedication, and steadfast loyalty
            to LBF's vision, particularly amidst challenging circumstances, have
            been truly commendable and were essential to our record achievements
            this year. I am deeply grateful for the continuous support, wise
            counsel, and encouragement I consistently receive from my esteemed
            fellow Board members. Finally, a special thank you is due to the
            Governor of the Central Bank of Sri Lanka and the dedicated
            officials at the Department of Supervision of Non-Bank Financial
            Institutions for their invaluable guidance and oversight throughout
            the year.
          </p>
          <p className="text-right font-medium mt-4">
            G A R D Prasanna
            <br />
            Chairman
            <br />
            30 May 2025
          </p>
        </div>
      </div>
    </div>
  );
}
