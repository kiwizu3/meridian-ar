import CustomAccordion from '@/components/Accordian';
import FinancialCapital from '@/components/content/financialCapital';
import HumanCapital from '@/components/content/humanCapital';
import IntellectualDigitalCapital from '@/components/content/intellectualAndDigitalCapital';
import ManufacturedCapital from '@/components/content/manufacturedCapital';
import NaturalCapital from '@/components/content/naturalCapital';
import SocialRelationshipCapital from '@/components/content/socialAndRelationshipCapital';
import DownloadButton from '@/components/downloadButton';
import Image from 'next/image';
import { assetUrl } from '@/lib/assets';

// import businessReview from '@/public/images/annual-report/business-review.png';
const businessReview = assetUrl('/images/annual-report/business-review.png');


const page = () => {
  const accordionItems = [
    {
      key: 'financial-capital',
      title: 'Financial capital',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-4/financial-capital.pdf'}
            downloadText={'financial-capital'}
          />
          <FinancialCapital />
        </div>
      ),
    },
    {
      key: 'manufactured-capital',
      title: 'Manufactured Capital',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-4/manufactured-capital.pdf'}
            downloadText={'manufactured-capital'}
          />
          <ManufacturedCapital />
        </div>
      ),
    },
    {
      key: 'human-capital',
      title: 'Human capital',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-4/human-capital.pdf'}
            downloadText={'human-capital'}
          />
          <HumanCapital />
        </div>
      ),
    },
    {
      key: 'intellectual-capital',
      title: 'Intellectual capital',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-4/intellectual-capital.pdf'}
            downloadText={'intellectual-capital'}
          />
          <IntellectualDigitalCapital />
        </div>
      ),
    },
    {
      key: 'social-and-relationship-capital',
      title: 'Social and Relationship capital',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-4/social-and-relationship-capital.pdf'}
            downloadText={'social-and-relationship-capital'}
          />
          <SocialRelationshipCapital />
        </div>
      ),
    },
    {
      key: 'natural-capital',
      title: 'Natural capital',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-4/natural-capital.pdf'}
            downloadText={'natural-capital'}
          />
          <NaturalCapital />
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
          The Capital Report
        </h1>
      </div>
      <div className="pt-5">
        <CustomAccordion accordionItems={accordionItems} />
      </div>
    </div>
  );
};

export default page;
