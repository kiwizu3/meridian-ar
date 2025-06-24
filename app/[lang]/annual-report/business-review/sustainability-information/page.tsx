import CustomAccordion from '@/components/Accordian';
import BusinessOperationInMyanmar from '@/components/content/businessOperationInMyanmar';
import MultiFinanceBusinessOperation from '@/components/content/multiFinanceBusinessOperation';
import DownloadButton from '@/components/downloadButton';
import Image from 'next/image';
import businessReview from '@/public/images/annual-report/business-review.png';

const page = () => {
  const accordionItems = [
    {
      key: 'business-operation-in-myanmar',
      title: 'Business Operation in Myanmar',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-4/business-operation-in-myannmar.pdf'}
            downloadText={'business-operation-in-myannmar'}
          />
          <BusinessOperationInMyanmar />
        </div>
      ),
    },
    {
      key: 'Multi-finance-business-operation',
      title: 'Multi Finance Business Operation',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-4/multi-financ-business-operation.pdf'}
            downloadText={'multi-financ-business-operation'}
          />
          <MultiFinanceBusinessOperation />
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
        Subsidiary Information
        </h1>
      </div>
      <div className="pt-5">
        <CustomAccordion accordionItems={accordionItems} />
      </div>
    </div>
  );
};

export default page;
