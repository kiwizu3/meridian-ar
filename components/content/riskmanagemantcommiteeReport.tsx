'use client';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import ManagementCard from '../cards/managementCard/managementCard';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const chartOptions: ApexOptions = {
  chart: {
    type: 'donut',
  },
  labels: [
    'Material Exposure Review',
    'Technology Risk and Information Security',
    'Compliance Function',
    'Risk Policies and Review',
    'Stress Testing and Capital Adequacy',
    'Statutory Risk Assessment and other aspects',
  ],
  colors: ['#4e79a7', '#f28e2c', '#e15759', '#76b7b2', '#59a14f', '#edc949'],
  legend: {
    position: 'bottom',
  },
};

const chartSeries = [20, 15, 13, 25, 10, 17];
export default function RiskManagementCommitteeReport() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto grid grid-cols-1 gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:col-span-2 gap-6">
          <div className="mb-8 xl:col-span-2">
            <p className="text-lg mb-4">
              We reviewed and strengthened LBF&#39;s risk management framework
              during the year by conducting risk assessments across all business
              units and implementing strategic initiatives to mitigate
              identified risks. We are pleased to report that current risk
              levels remain within the boundaries established by the Board with
              improved capacity to absorb risks, positioning LBF for sustained
              profitable growth.
            </p>
          </div>

          <div className="flex justify-center items-center flex-col">
            <ManagementCard
              name={'Ashane Jayasekara'}
              title={'Chairman'}
              position={'Board Integrated Risk Management Committee'}
              image={'/images/annual-report/ashaneA.png'}
              height="fit-content"
            />
          </div>
        </div>

        <div className="bg-teal-500 p-6 rounded-lg ">
          <h2 className="text-2xl font-semibold mb-4">
            Purpose of the Committee
          </h2>
          <p>
            The Board Integrated Risk Management Committee (BIRMC) is tasked
            with assisting the Board of Directors with oversight of the
            Company&#39;s enterprise-wide risk management function, ensuring the
            adequacy and effectiveness of the risk management framework.
          </p>
        </div>

        <div className=" text-blue bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Composition of the Committee
          </h2>
          <p>
            BIRMC comprises three Non-Executive Directors and is chaired by an
            Independent Non-Executive Director, in compliance with the Finance
            Business Act Direction No. 5 of 2021 on Corporate Governance issued
            by the CBSL. There was no alteration to its membership during the
            year. The profiles of the BIRMC members are given on pages 156 to
            160.
          </p>
        </div>
        <div className="md:col-span-2 text-blue bg-white p-6 rounded-lg">
          <div className="overflow-x-auto">
            <table className="w-full bg-white text-blue rounded-lg overflow-hidden">
              <thead>
                <tr className="border-b-2 border-blue">
                  <th className="p-3 text-left">Board Member</th>
                  <th className="p-3 text-left">Board Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-1 border-blue">
                  <td className="p-3">Mr. Ashane Jayasekara</td>
                  <td className="p-3">
                    Independent Non-Executive Director (Chairman)
                  </td>
                </tr>
                <tr className="border-b-1 border-blue">
                  <td className="p-3">Ms. Yogadinusha Bhaskaran</td>
                  <td className="p-3">Non-Executive Director</td>
                </tr>
                <tr className="border-b-1 border-blue">
                  <td className="p-3">Mr. Ashwin Nanayakkara</td>
                  <td className="p-3">Independent Non-Executive Director</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="md:col-span-2 text-blue bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Committee Meetings</h2>
          <p className="mb-4">
            The Committee convened six (6) meetings throughout the reviewed year
            complying with the regulatory requirements. Details of the
            attendance of committee members are stated in the page 174. The
            Managing Director, Deputy Managing Director, Executive Directors and
            the Senior Management of LBF including AGM Risk Management,
            Compliance Officer, Chief Internal Auditor and Chief Financial
            Officer attended the meetings by invitation. AGM Risk Management
            functioned as the Secretary to the Committee. Proceedings of the
            Committee were reported to the Board through submission of the
            meeting minutes. Risk profile and other specific matters are
            submitted separately for information of the Board. The
            recommendations made by the BIRMC during the year under review were
            duly approved by the Board.
          </p>
        </div>
        <div className="md:col-span-2 text-blue bg-white p-6 rounded-lg ">
          <h2 className="text-2xl font-semibold mb-4">
            Charter and Responsibilities
          </h2>
          <p className="mb-4">
            A Board approved charter is in place with clearly defined terms of
            reference that set out the mandate of the BIRMC in accordance with
            the Finance Business Act Direction no. 5 of 2021 on Corporate
            Governance. The charter is reviewed annually to reflect regulatory
            and other developments. The BIRMC charter was last reviewed and
            approved by the Board of Directors in August 2023.
          </p>
          <p>
            The responsibilities of BIRMC as set out in the charter are as
            follows:
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li>
              Establish an independent risk management function responsible for
              managing risk taking activities across the company
            </li>
            <li>
              Develop risk appetite through a Risk Appetite Statement (RAS),
              which articulates the individual and aggregate level and types of
              risk that the Company will accept, or avoid, in order to achieve
              the strategic business objectives
            </li>
            <li>
              Review at least annually, the Company&#39;s overall risk
              governance structure and the risk management policy & procedure
            </li>
            <li>
              Assess all material risks i.e. credit, market, liquidity,
              operational, strategic, IT and information security risk of the
              Company at least once in two months basis through appropriate risk
              indicators and management information and make recommendations on
              the risk strategies and the risk appetite to the Board
            </li>
            <li>
              Review the adequacy and effectiveness of all management level
              committees to address specific risks and to manage those risks
              within quantitative and qualitative risk limits as specified by
              the Committee{' '}
            </li>
            <li>
              Review any issues raised by Regulator, External Audit or Internal
              Audit that may materially impact the Company’s risk management
              framework
            </li>
            <li>
              Take prompt corrective action to mitigate the effects of specific
              risk in the case such risks are at levels beyond the prudent
              levels, decided by the Board on the basis of the Company’s
              policies and regulatory and supervisory requirements
            </li>
            <li>
              Assess all aspects of risk management including business
              continuity and disaster recovery plans
            </li>
            <li>
              Submit a risk assessment report to the Board meeting following the
              BIRMC meeting seeking the Board’s view, concurrence and/or
              specific directions
            </li>
            <li>
              Oversee and review the outcomes of stress testing of the risk
              portfolio, including both scenario analysis and sensitivity
              analysis for the capital adequacy assessment process and liquidity
              adequacy assessment process
            </li>
            <li>
              Oversee the reports from management regarding the Company’s
              insurance strategy
            </li>
            <li>
              Review new products/processes of the Company and recommend the
              proposed products/processes for the Board approval{' '}
            </li>
            <li>
              Oversee management processes to ensure adherence to the Company’s
              risk management policy & procedure The process through which the
              BIRMC discharges its responsibilities is detailed in the Interated
              Risk Management Report in Page 208.
            </li>
          </ul>
        </div>
      </div>

      <div className=" text-blue bg-white p-6 rounded-lg flex gap-6 flex-col">
        <h2 className="text-2xl font-semibold ">
          COMMITTEE ACTIVITIES DURING THE FINANCIAL YEAR
        </h2>
        <div className="flex justify-center">
          {/* <Chart
            options={chartOptions}
            series={chartSeries}
            type="donut"
            height={600}
          /> */}
           <img
            src="/images/charts/coparateStuwardship/committeeOversight2.png"
            alt="ownership image"
            className="w-full md:w-1/2 mb-4 rounded-lg"
          />
        </div>
        <p className="">
          In discharging its responsibilities, BIRMC performed the following
          activities:
        </p>
        <h3 className="text-xl font-semibold">Credit Risk</h3>
        <ul className="list-disc pl-8">
          <li>
            Regular review of overall credit risk exposures through key risk
            indicators, assessing mitigating strategies and making
            recommendations
          </li>
          <li>
            Review of Risk Appetite Statement and recommendations to set new
            criteria and revise limits to ensure that the Company operates
            within healthy risk tolerance boundaries
          </li>
          <li>
            Local and global macro economic factors were discussed to identify
            the impact of such factors on the Company in order to initiate
            actions in a proactive manner
          </li>
          <li>
            Credit Risk Management Framework was strengthened and recommended
            for the approval of the Board
          </li>
        </ul>

        <h3 className="text-xl font-semibold">Liquidity and Market Risk</h3>
        <ul className="list-disc pl-8 ">
          <li>
            Review of liquidity management strategies and cashflow forecast to
            have sufficient liquidity buffers
          </li>
          <li>
            Review of stress testing results on liquidity risk to assess
            adequacy of liquidity reserves under stressed scenarios
          </li>
          <li>
            Continuous monitoring of gold prices to assess adequacy of Loan to
            Value ratio and distribution of the gold loan portfolio
          </li>
          <li>
            Review Assets and Liability Management and Liquidity Risk Management
            Framework and recommend same for approval by the Board.
          </li>
          <li>
            Oversight of Asset and Liability management and functioning of ALCO,
            reviewing minutes of ALCO meetings as deemed necessary{' '}
          </li>
          <li>
            Movement of macro economic factors were discussed and reviewed the
            sensitivity of net interest income to changes in the interest rate
          </li>
        </ul>

        <h3 className="text-xl font-semibold ">Operational Risk</h3>
        <ul className="list-disc pl-8 ">
          <li>
            Monitoring the implementation of an automated exception monitoring
            procedure and strengthening the Policy on Exception Monitoring to
            strengthen the process
          </li>
          <li>
            Risk and Control Self Assessments on Fraud risk were reviewed as a
            key deterrent to promoting a conducive organisation culture
          </li>
          <li>
            Approving an enhanced methodology assessing branch operational risk
            assessment
          </li>
          <li>
            Operational Risk Management Framework was reviewed and recommended
            for the approval of the Board
          </li>
        </ul>
        <h3 className="text-xl font-semibold ">
          IT and Information Security Risk
        </h3>
        <ul className="list-disc pl-8 ">
          <li>
            Reviewed progress on implementation of technology security controls
            as per the regulatory Direction No 1 of 2022
          </li>
          <li>
            Information Technology Risk Management Framework was reviewed and
            recommended for the approval of the Board
          </li>
          <li>
            Close attention of the committee was given on setting up a framework
            for Personal Data Protection. Committee extended its assistance in
            initial tasks required in this process such as data mapping,
            establishing a policy, etc. and recommended recruiting expertise on
            the relevant area{' '}
          </li>
        </ul>

        <h3 className="text-xl font-semibold ">Capital Adequacy</h3>
        <ul className="list-disc pl-8 ">
          <li>
            Reviewed the Internal Capital Adequacy Assessment Process (ICAAP)
            report, which is a voluntary adoption and recommended for the
            approval of the Board
          </li>
          <li>
            Stress testing results were reviewed to ensure the Company&#39;s
            solvency under stressed scenarios
          </li>
        </ul>

        <h3 className="text-xl font-semibold ">
          Other Risk Related Activities
        </h3>
        <ul className="list-disc pl-8">
          <li>
            Assessed the effectiveness and adequacy of management level
            committees
          </li>
          <li>Monitored the risk exposures of the Company&#39;s subsidiary</li>
          <li>
            Risk register was reviewed to check the management commitment
            towards mitigating the open risks
          </li>
        </ul>

        <h3 className="text-xl font-semibold ">Compliance Function</h3>
        <ul className="list-disc pl-8">
          <li>
            Monitored implementation of new rules and directions issued by the
            regulatory authorities
          </li>
          <li>
            Reviewed the Compliance checklist on monthly basis to ensure that
            the Company and its subsidiary are compliant with regulatory
            requirements
          </li>
          <li>
            Anti-Money Laundering (AML) and Countering of Financing of Terrorism
            (CFT) process were reviewed quarterly
          </li>
          <li>
            Review of annual risk assessment covering ML & TF risks of the
            customers, products, processes and the overall Company
          </li>
        </ul>

        <p>
          BIRMC continues to remain vigilant in view of the dynamic risk
          landscape and review the need for new additional tools to assess risk
          in the operations of LBF.
        </p>
        <div>
          <img
            src="/images/annual-report/ashene-sig.png"
            alt="Secretaries sign"
          />
          <p className="mt-2">
            Ashane Jayasekara
            <br />
            Chairman
            <br />
            Board Integrated Risk Management Committee
            <br />
            27 May 2024
          </p>
        </div>
      </div>
    </div>
  );
}
