import CustomAccordion from '@/components/Accordian';
import IntegratedStakeholderEngagement from '@/components/content/integratedStakeholderEngagement';
import Materiality from '@/components/content/materiality';
import OperatingEnvironment from '@/components/content/oparatingEnvironment';
import Strategy from '@/components/content/strategy';
import ValueCreatingBusinessModel from '@/components/content/valueCreatingBusinessModel';
import DownloadButton from '@/components/downloadButton';
import Image from 'next/image';
import theCompany from '@/public/images/annual-report/strategic-report.png';

const page = () => {
  const accordionItems = [
    {
      key: 'operating-environment',
      title: 'Operating Environment',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton url={'/pdf/annual-report/section-2/operating-environment.pdf'} downloadText={'download'} />
          <OperatingEnvironment />
        </div>
      ),
    },
    {
      key: 'our-value-creating-business-model',
      title: 'Our Value Creating - Business Model',
      content: <div className="flex flex-col gap-6"><DownloadButton url={'/pdf/annual-report/section-2/our-value-creating-business-model.pdf'} downloadText={'download'} /><ValueCreatingBusinessModel /></div>,
    },
    {
      key: 'integrated-stockholder-engagement',
      title: 'Integrated Stakeholder Engagement',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton url={'/pdf/annual-report/section-2/integrated-stakeholder-engagement.pdf'} downloadText={'download'} />
          <IntegratedStakeholderEngagement />
        </div>
      ),
    },
    {
      key: 'materiality',
      title: 'Materiality',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton url={'/pdf/annual-report/section-2/materiality.pdf'} downloadText={'download'} />
          <Materiality />
        </div>
      ),
    },
    {
      key: 'strategy',
      title: 'Strategy',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton url={'/pdf/annual-report/section-2/strategy.pdf'} downloadText={'download'} />
          <Strategy />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="relative">
        <Image
          src={theCompany}
          alt={'report-image'}
          className="w-full rounded-lg"
        />
        <h1 className="absolute bottom-4 md:bottom-6 capitalize left-6 font-black text-2xl font-primary text-white">
          The Strategic Report
        </h1>
      </div>
      <div className="pt-5">
        <CustomAccordion accordionItems={accordionItems} />
      </div>
    </div>
  );
};

export default page;
