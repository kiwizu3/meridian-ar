import CustomAccordion from '@/components/Accordian';
import Deposits from '@/components/content/deposits';
import LoansAndReceivables from '@/components/content/loansAndReceivables';
import ValueAddedService from '@/components/content/valueAddedService';
import DownloadButton from '@/components/downloadButton';

import { assetUrl } from '@/lib/assets';
// import businessReview from '@/public/images/annual-report/business-review.png';

import Image from 'next/image';

const businessReview = assetUrl('/images/annual-report/business-review.png');

const page = () => {
  const accordionItems = [
    {
      key: 'deposits',
      title: 'Deposits',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-4/deposits.pdf'}
            downloadText={'deposits'}
          />
          <Deposits />
        </div>
      ),
    },
    {
      key: 'loans-and-receivables',
      title: 'Loans and receivables',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-4/loans-and-receivables.pdf'}
            downloadText={'loans-and-receivables'}
          />
          <LoansAndReceivables />
        </div>
      ),
    },
    {
      key: 'value-added-service',
      title: 'Value added Services',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-4/value-added-services.pdf'}
            downloadText={'value-added-services'}
          />
          <ValueAddedService />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="relative">
        <Image
          src={businessReview}
          alt={'report-image'}
          className="w-full rounded-lg"
        />
        <h1 className="absolute bottom-4 md:bottom-6 capitalize left-6 font-black text-2xl font-primary text-white">
          Business Reviews
        </h1>
      </div>
      <div className="pt-5">
        <CustomAccordion accordionItems={accordionItems} />
      </div>
    </div>
  );
};

export default page;
