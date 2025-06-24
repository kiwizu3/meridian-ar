import CustomAccordion from '@/components/Accordian';
import ContributionTowardsSustainability from '@/components/content/contributionTowardsSustainability';
import IndependentAssuranceReport from '@/components/content/independentAssuranceReport';
import IndependentAssuranceReportOnIntegratedReporting from '@/components/content/independentAssuranceReportOnIntergratedRepoting';
import OurCommitmentSustainability from '@/components/content/ourCommitmentToSustainability';
import SustainabilityRelatedOpportunities from '@/components/content/sustainabilityRelatedRiskOpportunities';
import SustainabilityStrategyMeasurableTargets from '@/components/content/sustainabilityStrategyMesasurableTargets';
import DownloadButton from '@/components/downloadButton';
import Image from 'next/image';
import sustainabilityReport from '@/public/images/annual-report/sustainability-reporting.png';

const page = () => {
  const accordionItems = [
    {
      key: 'our-commitment-to-sustainability',
      title: 'Our Commitment to Sustainability',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-3/our-commitment-to-sustainability.pdf'}
            downloadText={'our-commitment-to-sustainability'}
          />
          <OurCommitmentSustainability />
        </div>
      ),
    },
    {
      key: 'sustainability-strategy-with-measurable-targets',
      title: 'Sustainability Strategy with Measurable Targets',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-3/sustainability-strategy-with-measureable-targets.pdf'}
            downloadText={'sustainability-strategy-with-measureable-targets'}
          />
          <SustainabilityStrategyMeasurableTargets />
        </div>
      ),
    },
    {
      key: 'sustainability-related-risk-and-opportunities',
      title: ' Sustainability Related Risks and Opportunities',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-3/sustainability-related-risks-and-opportunity.pdf'}
            downloadText={'sustainability-related-risks-and-opportunity'}
          />
          <SustainabilityRelatedOpportunities />
        </div>
      ),
    },
    {
      key: 'our-contribution-towards-sustainability',
      title: ' Our Contribution Towards Sustainability',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-3/our-contribution-towards-sustainability.pdf'}
            downloadText={'our-contribution-towards-sustainability'}
          />
          <ContributionTowardsSustainability />
        </div>
      ),
    },
    {
      key: 'independent-practitioner-assurance-report-on-sustainability-reporting',
      title:
        'Independent Practitioner’s Assurance Report on Sustainability Reporting',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-3/independtant-practioners-assurance-report-on-sustainability-reporting.pdf'}
            downloadText={'independtant-practioners-assurance-report-on-sustainability-reporting'}
          />
          <IndependentAssuranceReport />
        </div>
      ),
    },
    {
      key: 'independent-practitioner-assurance-report-on-integrated-reporting',
      title:
        ' Independent Practitioner’s Assurance Report on Integrated Reporting',
      content: (
        <div className="flex flex-col gap-6">
          <DownloadButton
            url={'/pdf/annual-report/section-3/independtant-practioners-assurance-report-on-integrated-reporting.pdf'}
            downloadText={'independtant-practioners-assurance-report-on-integrated-reporting'}
          />
          <IndependentAssuranceReportOnIntegratedReporting />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="relative">
        <Image
          src={sustainabilityReport}
          alt={'report-image'}
          className="w-full rounded-lg"
        />
        <h1 className="absolute bottom-4 md:bottom-6 capitalize left-6 font-black text-2xl font-primary text-white">
          Sustainability Reporting
        </h1>
      </div>
      <div className="pt-5">
        <CustomAccordion accordionItems={accordionItems} />
      </div>
    </div>
  );
};

export default page;
