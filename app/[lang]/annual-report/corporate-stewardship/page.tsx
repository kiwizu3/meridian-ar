import CustomAccordion from '@/components/Accordian';
import AnnualReportofBoarsofDirectors from '@/components/content/AnnualReportoftheDirectors';
import AssuranceReportTheBoardOfDirectors from '@/components/content/assuranceReportToTheBoardOfDirectors';
import BoardAuditCommitteeReport from '@/components/content/boardAuditCommiteeReport';
import BoardOfDirectors from '@/components/content/boardOfdirectors';
import CorporateGovernance from '@/components/content/corporateGovernace';
import DirectorsFinancialCommitteeReport from '@/components/content/directorFinancialReporting';
import DirectorsStatementInternalControl from '@/components/content/directorsStatementInternalControl';
import HumanResourceCommitteeReport from '@/components/content/humanResourceCommitteeReport';
import InformationSecurityCommitteeReport from '@/components/content/informationSecurityCommitteReport';
import NominationAndCoveranceCommitteeReport from '@/components/content/nominationAndGoveranceCommitteeReport';
import ResponsibilityStatementMdAndCFO from '@/components/content/responsibilityStatementMdAndCfo';
import RiskManagementCommitteeReport from '@/components/content/riskmanagemantcommiteeReport';
import SeniorManagement from '@/components/content/seniorManagement';
import SustainabilityCommitteeReport from '@/components/content/sustainabilityCommitteeReport';
import TransactionReviewCommitteeReport from '@/components/content/transactionReviewCommityReport';
import DownloadButton from '@/components/downloadButton';
import Image from 'next/image';

import { assetUrl } from '@/lib/assets';
// import corporateStewardship from '@/public/images/annual-report/corporate-stewardship.png';
import IntegratedRiskManagement from '@/components/content/integratedRiskManagement';

const corporateStewardship = assetUrl('/images/annual-report/corporate-stewardship.png');

const page = () => {
  const accordionItems = [
    {
      key: 'Board-of-Directors',
      title: 'Board of Directors',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-5/board-of-directors.pdf'}
            downloadText={'board-of-directors'}
          />
          <BoardOfDirectors />
        </div>
      ),
    },
    {
      key: 'Senior-Management',
      title: 'Senior Management',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-5/senior-management.pdf'}
            downloadText={'senior-management'}
          />
          <SeniorManagement />
        </div>
      ),
    },
    {
      key: 'Corporate-Governance',
      title: 'Corporate Governance',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-5/corporate-governance.pdf'}
            downloadText={'corporate-governance'}
          />
          <CorporateGovernance />
        </div>
      ),
    },
    {
      key: 'Annual-Report-of-the-Board-of-Directors-on-the-Affairs-of-the-Company',
      title:
        'Annual Report of the Board of Directors on the Affairs of the Company',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={
              '/pdf/annual-report/section-5/annual-report-board-of-directors-affairs-of-company.pdf'
            }
            downloadText={'annual-report-board-of-directors-affairs-of-company'}
          />
          <AnnualReportofBoarsofDirectors />
        </div>
      ),
    },
    {
      key: 'Board-Audit-Committee-Report',
      title: 'Board Audit Committee Report',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-5/board-audit-commitee-report.pdf'}
            downloadText={'board-audit-commitee-report'}
          />
          <BoardAuditCommitteeReport />
        </div>
      ),
    },
    {
      key: 'Board-Integrated-Risk-Management-Committee-Report',
      title: 'Board Integrated Risk Management Committee Report',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={
              '/pdf/annual-report/section-5/board-integrated-risk-managment-commitee-report.pdf'
            }
            downloadText={'board-integrated-risk-managment-commitee-report'}
          />
          <RiskManagementCommitteeReport />
        </div>
      ),
    },
    {
      key: 'Board-Nomination-and-Governance-Committee-Report',
      title: 'Board Nomination and Governance Committee Report',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={
              '/pdf/annual-report/section-5/board-nomination-and-governance-commitee-report.pdf'
            }
            downloadText={'board-nomination-and-governance-commitee-report'}
          />
          <NominationAndCoveranceCommitteeReport />
        </div>
      ),
    },
    {
      key: 'Board-Human-Resources-and-Remuneration-Committee-Report',
      title: 'Board Human Resources and Remuneration Committee Report',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={
              '/pdf/annual-report/section-5/board-HR-adn-renumeration-commitee-report.pdf'
            }
            downloadText={'board-HR-adn-renumeration-commitee-report'}
          />
          <HumanResourceCommitteeReport />
        </div>
      ),
    },
    {
      key: 'Board-Related-Party-Transaction-Review-Committee-Report',
      title: 'Board Related Party Transaction Review Committee Report',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={
              '/pdf/annual-report/section-5/board-party-transc-review-commitee-report.pdf'
            }
            downloadText={'board-party-transc-review-commitee-report'}
          />
          <TransactionReviewCommitteeReport />
        </div>
      ),
    },
    {
      key: 'Board-Information-Security-Committee-Report',
      title: 'Board Information Security Committee Report',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={
              '/pdf/annual-report/section-5/board-information-security-commitee-report.pdf'
            }
            downloadText={'board-information-security-commitee-report'}
          />
          <InformationSecurityCommitteeReport />
        </div>
      ),
    },
    {
      key: 'Board-Sustainability-Committee-Report',
      title: 'Board Sustainability Committee Report',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={
              '/pdf/annual-report/section-5/board-sustainability-commitee-report.pdf'
            }
            downloadText={'board-sustainability-commitee-report'}
          />
          <SustainabilityCommitteeReport />
        </div>
      ),
    },
    {
      key: ' Directors-Responsibility-for-Financial-Reporting',
      title: ' Directors’ Responsibility for Financial Reporting',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={
              '/pdf/annual-report/section-5/directors-responsibility-for-financ-reporting.pdf'
            }
            downloadText={'directors-responsibility-for-financ-reporting'}
          />
          <DirectorsFinancialCommitteeReport />
        </div>
      ),
    },
    {
      key: 'Directors-Statement-on-Internal-Control',
      title: 'Directors’ Statement on Internal Control',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={
              '/pdf/annual-report/section-5/directors-statement-for-internet-control.pdf'
            }
            downloadText={'directors-statement-for-internet-control'}
          />
          <DirectorsStatementInternalControl />
        </div>
      ),
    },
    {
      key: 'Independent-Assurance-Report-to-the-Board-of-Directors',
      title: 'Independent Assurance Report to the Board of Directors',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={
              '/pdf/annual-report/section-5/independance-assurance-report-for-BOD.pdf'
            }
            downloadText={'independance-assurance-report-for-BOD'}
          />
          <AssuranceReportTheBoardOfDirectors />
        </div>
      ),
    },
    {
      key: 'Responsibility-Statement-of-Managing-Director-and-Chief-Financial-Officer',
      title:
        'Responsibility Statement of Managing Director and Chief Financial Officer',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={
              '/pdf/annual-report/section-5/responsibility-statement-for-MD-and-CFO.pdf'
            }
            downloadText={'responsibility-statement-for-MD-and-CFO'}
          />
          <ResponsibilityStatementMdAndCFO />
        </div>
      ),
    },
    {
      key: 'Integrated-Risk-Management-Report',
      title: 'Integrated Risk Management Report',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={
              '/pdf/annual-report/section-5/integrated-risk-management-report.pdf'
            }
            downloadText={'integrated-risk-management-report'}
          />
          <IntegratedRiskManagement />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="relative">
        <Image
          src={corporateStewardship}
          alt={'report-image'}
          className="w-full rounded-lg"
        />
        <h1 className="absolute bottom-4 md:bottom-6 capitalize left-6 font-black text-2xl font-primary text-white">
          Corporate Stewardship
        </h1>
      </div>
      <div className="pt-5">
        <CustomAccordion accordionItems={accordionItems} />
      </div>
    </div>
  );
};

export default page;
