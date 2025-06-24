import CustomAccordion from '@/components/Accordian';
import AntiCorruptionReport from '@/components/content/antiCorruptionReport';
import CorporateGovernance from '@/components/content/corporateGovernance';
import DecadeGlance from '@/components/content/decadeAtaGlance';
import FinancialStatementInUsd from '@/components/content/financialStatementInUsd';
import GriContentIndex from '@/components/content/griContentIndex';
import InvestorInformation from '@/components/content/investorInformation';
import OrganizationChart from '@/components/content/organizationChart';
import QuarterlyFinancialReport from '@/components/content/quartalyFinancialStatement';
import TenPricipleOfUnGlobal from '@/components/content/tenPricipleofUnGlobal';
import DownloadButton from '@/components/downloadButton';
import FutureFocus from '@/components/content/futureFocus';
import AbbrevationsList from '@/components/content/abbrevationsList';
import GlossaryTerms from '@/components/content/glossaryTerms';
import SupplementaryInformation from '@/components/content/supplementaryInformation';
import CorporateInformation from '@/components/content/corporateInformation';
import NoticesAGM from '@/components/content/noticesAGM';
import ProxyForm from '@/components/content/proxyForm';
import FeedbackForm from '@/components/content/feedbackForm';
import Image from 'next/image';
import suplimentoryInfo from '@/public/images/annual-report/suplimentary-information.png';

const page = () => {
  const accordionItems = [
    {
      key: 'Investor-Information',
      title: 'Investor Information',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-7/investor-information.pdf'}
            downloadText={'investor-information'}
          />
          <InvestorInformation />
        </div>
      ),
    },
    {
      key: 'Reporting-on-Anti-corruption-Programmes',
      title: 'Reporting on Anti-corruption Programmes',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={
              '/pdf/annual-report/section-7/reporting-anti-corruption-programs.pdf'
            }
            downloadText={'reporting-anti-corruption-programs'}
          />
          <AntiCorruptionReport />
        </div>
      ),
    },
    {
      key: 'Organization-Chart',
      title: 'Organization Chart',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-7/organization-chart.pdf'}
            downloadText={'organization-chart'}
          />
          <OrganizationChart />
        </div>
      ),
    },
    {
      key: 'Corporate-Governance',
      title: 'Corporate Governance',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-7/corporate-governance.pdf'}
            downloadText={'corporate-governance'}
          />
          <CorporateGovernance />
        </div>
      ),
    },
    {
      key: 'GRI-Content-Index',
      title: 'GRI Content Index',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-7/GRI-content-index.pdf'}
            downloadText={'GRI-content-index'}
          />
          <GriContentIndex />
        </div>
      ),
    },
    {
      key: 'The-Ten-Principles-of-the-UN-Global-Impact',
      title: 'The Ten Principles of the UN Global Impact',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={
              '/pdf/annual-report/section-7/ten-principles-of-global-impact.pdf'
            }
            downloadText={'ten-principles-of-global-impact'}
          />
          <TenPricipleOfUnGlobal />
        </div>
      ),
    },
    {
      key: 'Decade-at-a-Glance',
      title: 'Decade at a Glance',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-7/decade-at-a-glance.pdf'}
            downloadText={'decade-at-a-glance'}
          />{' '}
          <DecadeGlance />
        </div>
      ),
    },
    {
      key: 'Quarterly-Financial-Statements',
      title: 'Quarterly Financial Statements',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={
              '/pdf/annual-report/section-7/quarterly-financial-statements.pdf'
            }
            downloadText={'quarterly-financial-statements'}
          />
          <QuarterlyFinancialReport />
        </div>
      ),
    },
    {
      key: 'Financial-Statements-in-USD',
      title: 'Financial Statements in USD',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-7/financial-statements-USD.pdf'}
            downloadText={'financial-statements-USD'}
          />
          <FinancialStatementInUsd />
        </div>
      ),
    },
    {
      key: 'Future-Focus',
      title: 'Future Focus',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-7/future-focus.pdf'}
            downloadText={'future-focus'}
          />
          <FutureFocus />
        </div>
      ),
    },
    {
      key: 'List-of-Abbreviations',
      title: 'List of Abbreviations',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-7/list-of-abbreviations.pdf'}
            downloadText={'list-of-abbreviations'}
          />
          <AbbrevationsList />
        </div>
      ),
    },
    {
      key: 'Glossary-of-Terms',
      title: 'Glossary of Terms',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-7/glossary-of-terms.pdf'}
            downloadText={'glossary-of-terms'}
          />
          <GlossaryTerms />
        </div>
      ),
    },
    {
      key: 'Supplimentary-Sustainability-Information',
      title: ' Supplimentary Sustainability Information',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={
              '/pdf/annual-report/section-7/supplementary-sustainabilitiy-focus.pdf'
            }
            downloadText={'supplementary-sustainabilitiy-focus'}
          />
          <SupplementaryInformation />
        </div>
      ),
    },
    {
      key: 'Corporate-Information',
      title: 'Corporate Information',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-7/corporate-information.pdf'}
            downloadText={'corporate-information'}
          />
          <CorporateInformation />
        </div>
      ),
    },
    {
      key: 'Notice-of-Annual-General-Meeting',
      title: 'Notice of Annual General Meeting',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={
              '/pdf/annual-report/section-7/notice-on-annual-general-meeting.pdf'
            }
            downloadText={'notice-on-annual-general-meeting'}
          />
          <NoticesAGM />
        </div>
      ),
    },
    {
      key: 'Form-of-Proxy',
      title: 'Form of Proxy',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-7/form-of-proxy.pdf'}
            downloadText={'form-of-proxy'}
          />{' '}
          <ProxyForm />
        </div>
      ),
    },
    {
      key: 'Feedback-Form',
      title: 'Feedback Form',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-7/feedback-form.pdf'}
            downloadText={'feedback-form'}
          />
          <FeedbackForm />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="relative">
        <Image
          src={suplimentoryInfo}
          alt={'report-image'}
          className="w-full rounded-lg"
        />
        <h1 className="absolute bottom-4 md:bottom-6 capitalize left-6 font-black text-2xl font-primary text-white">
          Supplementary Information
        </h1>
      </div>
      <div className="pt-5">
        <CustomAccordion accordionItems={accordionItems} />
      </div>
    </div>
  );
};

export default page;
