import CustomAccordion from '@/components/Accordian';
import AboutLBFinance from '@/components/content/abooutLb';
import AwardAndAccolades from '@/components/content/awardsAndAccolades';
import ChairmanMessage from '@/components/content/chairmanMessage';
import FinancialHighlights from '@/components/content/financialHighlights';
import MdsReview from '@/components/content/mdsReview';
import NonFinancialHighlights from '@/components/content/nonFinancialHighlights';
import LBFinanceSocioEconomicImpact from '@/components/content/ourSocioEconomicImpact';
import StrategicJourney from '@/components/content/strategicJourney';
import DownloadButton from '@/components/downloadButton';
import Image from 'next/image';

import { assetUrl } from '@/lib/assets';
// import theCompany from '@/public/images/annual-report/the-company.png';
const theCompany = assetUrl('/images/annual-report/the-company.png');

const page = () => {
  const accordionItems = [
    {
      key: 'about-lb-finance',
      title: 'About LB Finance',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-1/About-LB-finance.pdf'}
            downloadText={'About-LB-finance'}
          />
          <AboutLBFinance />
        </div>
      ),
    },
    {
      key: 'our-socio-economic-impact',
      title: 'Our Socio-Economic Impact',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-1/our-socio-economic-impact.pdf'}
            downloadText={'our-socio-economic-impact.pdf'}
          />
          <LBFinanceSocioEconomicImpact />
        </div>
      ),
    },
    {
      key: 'awards-and-accolades',
      title: 'Awards and Accolades',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-1/awards-and-accolades.pdf'}
            downloadText={'awards-and-accolades'}
          />
          <AwardAndAccolades />
        </div>
      ),
    },
    {
      key: 'financial-highlights',
      title: 'Financial Highlights',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-1/financial-highlights.pdf'}
            downloadText={'financial-highlights'}
          />
          <FinancialHighlights />
        </div>
      ),
    },
    {
      key: 'non-financial-highlights',
      title: 'Non-Financial highlights',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-1/non-financial-highlights.pdf'}
            downloadText={'non-financial-highlights'}
          />
          <NonFinancialHighlights />
        </div>
      ),
    },
    {
      key: 'strategic-journey',
      title: 'Strategic Journey',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-1/strategic-journey.pdf'}
            downloadText={'strategic-journey'}
          />
          <StrategicJourney />
        </div>
      ),
    },
    {
      key: 'chairman-Message',
      title: 'Chairman’s Message',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-1/chairmans-message.pdf'}
            downloadText={'chairmans-message'}
          />
          <ChairmanMessage />
        </div>
      ),
    },
    {
      key: 'managing-director-review',
      title: 'Managing Director’s Review',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-1/managing-directors-review.pdf'}
            downloadText={'managing-directors-review'}
          />
          <MdsReview />
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
          The Company
        </h1>
      </div>
      <div className="pt-5">
        <CustomAccordion accordionItems={accordionItems} />
      </div>
    </div>
  );
};

export default page;
