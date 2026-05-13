import CustomAccordion from '@/components/Accordian';
import EquityStatementCompany from '@/components/content/equlityStatementCompany';
import EquityStatementGroup from '@/components/content/equlityStatementGeoup';
import FinancialCalender from '@/components/content/financialCalender';
import FinancialStatementHighlights from '@/components/content/financialStatementHighlights';
import IncomeStatement from '@/components/content/incomeStatement';
import IndependentAuditorsReport from '@/components/content/independentAuditorsReport';
import NoteOfFinancialInformation from '@/components/content/NoteOfFinancialInformation';
import StatementsCashFlows from '@/components/content/statementOfCashFlows';
import StatementOfComprehensiveIncome from '@/components/content/statementOfComprehensiveIncome';
import StatementOfFinancialPosition from '@/components/content/statementOfFinancialPosition';
import DownloadButton from '@/components/downloadButton';
import Image from 'next/image';
import { assetUrl } from '@/lib/assets';

// import financialInfo from '@/public/images/annual-report/financial-information.png';
const financialInfo = assetUrl('/images/annual-report/financial-information.png');

const page = () => {
  const accordionItems = [
    {
      key: 'Financial-Statement-Highlights',
      title: 'Financial Statement Highlights',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-6/financial-statement-highlights.pdf'}
            downloadText={'financial-statement-highlights'}
          />
          <FinancialStatementHighlights />
        </div>
      ),
    },
    {
      key: 'Financial-Calendar',
      title: 'Financial Calendar',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-6/financial-calender.pdf'}
            downloadText={'financial-calender'}
          />
          <FinancialCalender />
        </div>
      ),
    },
    {
      key: 'Independent-Auditors-Report',
      title: 'Independent Auditors’ Report',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-6/independant-audit-report.pdf'}
            downloadText={'independant-audit-report'}
          />
          <IndependentAuditorsReport />
        </div>
      ),
    },
    {
      key: 'Income-Statement',
      title: 'Income Statement',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-6/income-statement.pdf'}
            downloadText={'income-statement'}
          />
          <IncomeStatement />
        </div>
      ),
    },
    {
      key: 'Statement-of-Comprehensive-Income',
      title: 'Statement of Comprehensive Income',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-6/statement-of-comprehensive-income.pdf'}
            downloadText={'statement-of-comprehensive-income'}
          />{' '}
          <StatementOfComprehensiveIncome />
        </div>
      ),
    },
    {
      key: 'Statement-of-Financial-Position',
      title: 'Statement of Financial Position',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-6/statement-of-financial-postiion.pdf'}
            downloadText={'statement-of-financial-postiion'}
          />
          <StatementOfFinancialPosition />
        </div>
      ),
    },
    {
      key: 'Statement-of-Changes-in-Equity-Company',
      title: 'Statement of Changes in Equity - Company',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-6/statement-of-changes-in-equity-company.pdf'}
            downloadText={'statement-of-changes-in-equity-company'}
          />
          <EquityStatementCompany />
        </div>
      ),
    },
    {
      key: 'Statement-of-Changes-in-Equity-Group',
      title: 'Statement of Changes in Equity - Group',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-6/statement-of-changes-in-equity-group.pdf'}
            downloadText={'statement-of-changes-in-equity-group'}
          />{' '}
          <EquityStatementGroup />
        </div>
      ),
    },
    {
      key: 'Statement-of-Cash-Flows',
      title: 'Statement of Cash Flows',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-6/statement-of-cash-flows.pdf'}
            downloadText={'statement-of-cash-flows'}
          />
          <StatementsCashFlows />
        </div>
      ),
    },
    {
      key: 'Notes-to-the-Financial-Statements',
      title: 'Notes to the Financial Statements',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-6/notes-to-the-financial-statement.pdf'}
            downloadText={'notes-to-the-financial-statement'}
          />
          <NoteOfFinancialInformation />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="relative">
        <Image
          src={financialInfo}
          alt={'report-image'}
          className="w-full rounded-lg"
        />
        <h1 className="absolute bottom-4 md:bottom-6 capitalize left-6 font-black text-2xl font-primary text-white">
          Financial Information
        </h1>
      </div>
      <div className="pt-5">
        <CustomAccordion accordionItems={accordionItems} />
      </div>
    </div>
  );
};

export default page;
