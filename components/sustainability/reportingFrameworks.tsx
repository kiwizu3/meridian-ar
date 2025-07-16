'use client';

import { Chevron } from '@/components/icons';
import { Accordion, AccordionItem } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { memo, ReactElement, useCallback, useState } from 'react';
import SpeechText from '../SpeechText';

const SustainabilityDisclosureStandards = dynamic(
  () => import('../content/sustainabilityDisclosureStandards'),
  { ssr: false, suspense: true },
);

const GRIContent = dynamic(() => import('../content/sustainabilityGRI'), {
  ssr: false,
  suspense: true,
});

const SustainabilityIntegratedReporting = dynamic(
  () => import('../content/sustainabilityIntegratedReporting'),
  { ssr: false, suspense: true },
);

const SustainabilityPrinciples = dynamic(
  () => import('../content/sustainabilityPrinciples'),
  { ssr: false, suspense: true },
);

const SustainabilitySASB = dynamic(
  () => import('../content/sustainabilitySASB'),
  { ssr: false, suspense: true },
);

const ModalDialog = dynamic(() => import('./modalDialog'), {
  ssr: false,
  suspense: true,
});

const ReportCard = dynamic(() => import('./reportCard'), {
  ssr: false,
  suspense: true,
});

const FinancialCapital = dynamic(
  () => import('../content/sustainable-development/financialCapital/index'),
  { ssr: false, suspense: true },
);

const HumanCapital = dynamic(
  () => import('../content/sustainable-development/humanCapital/index'),
  { ssr: false, suspense: true },
);

const IntellectualDigitalCapital = dynamic(
  () =>
    import(
      '../content/sustainable-development/intellectualDigitalCapital/index'
    ),
  { ssr: false, suspense: true },
);

const ManufacturedCapital = dynamic(
  () => import('../content/sustainable-development/manufacturedCapital/index'),
  { ssr: false, suspense: true },
);

const NaturalCapital = dynamic(
  () => import('../content/sustainable-development/naturalCapital/index'),
  { ssr: false, suspense: true },
);

const NoPovertyPart = dynamic(
  () => import('../content/sustainable-development/goals/NoPoverty/index'),
  { ssr: false, suspense: true },
);
const ZeroHungerPart = dynamic(
  () => import('../content/sustainable-development/goals/ZeroHunger/index'),
  { ssr: false, suspense: true },
);

const GoodHealthWellbeingPart = dynamic(
  () =>
    import(
      '../content/sustainable-development/goals/GoodHealth&Wellbeing/index'
    ),
  { ssr: false, suspense: true },
);

const QualityEducationPart = dynamic(
  () =>
    import('../content/sustainable-development/goals/QualityEducation/index'),
  { ssr: false, suspense: true },
);
const GenderQualityPart = dynamic(
  () => import('../content/sustainable-development/goals/GenderEquality/index'),
  { ssr: false, suspense: true },
);

const CleanWaterSanitation = dynamic(
  () =>
    import(
      '../content/sustainable-development/goals/CleanWater&Sanitation/index'
    ),
  { ssr: false, suspense: true },
);

const CleanEnergy = dynamic(
  () => import('../content/sustainable-development/goals/CleanEnergy/index'),
  { ssr: false, suspense: true },
);

const WorkAndEconomic = dynamic(
  () => import('../content/sustainable-development/goals/Work&Economic/index'),
  { ssr: false, suspense: true },
);

const IndustryInnovationInfrastructure = dynamic(
  () =>
    import(
      '../content/sustainable-development/goals/Industry&Innovation&Infracture/index'
    ),
  { ssr: false, suspense: true },
);
const ReducedInequalities = dynamic(
  () =>
    import(
      '../content/sustainable-development/goals/ReducedInequalities/index'
    ),
  { ssr: false, suspense: true },
);

const CitiesAndCommunities = dynamic(
  () =>
    import(
      '../content/sustainable-development/goals/SustainableCities&Communities/index'
    ),
  { ssr: false, suspense: true },
);

const ConsumptionProduction = dynamic(
  () =>
    import(
      '../content/sustainable-development/goals/Consumption&Production/index'
    ),
  { ssr: false, suspense: true },
);

const ClimateAction = dynamic(
  () => import('../content/sustainable-development/goals/ClimateAction/index'),
  { ssr: false, suspense: true },
);

const LifeBelowWater = dynamic(
  () => import('../content/sustainable-development/goals/LifeBelowWater/index'),
  { ssr: false, suspense: true },
);

const LifeOnLand = dynamic(
  () => import('../content/sustainable-development/goals/LifeOnLand/index'),
  { ssr: false, suspense: true },
);

const PeaceJusticeInstitutions = dynamic(
  () =>
    import(
      '../content/sustainable-development/goals/PeaceJustice&StrongInstitutions/index'
    ),
  { ssr: false, suspense: true },
);

const PartnershipsGoals = dynamic(
  () =>
    import('../content/sustainable-development/goals/PartnershipsGoals/index'),
  { ssr: false, suspense: true },
);

const SocialRelationshipCapital = dynamic(
  () =>
    import(
      '../content/sustainable-development/socialRelationshipCapital/index'
    ),
  { ssr: false, suspense: true },
);

type TabItem = {
  id: number;
  label: string;
  content: ReactElement;
};

function ReportingFrameworks({ dictionary }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [tabs, setTabs] = useState<TabItem[]>([]);

  const onOpenChange = useCallback(() => setIsOpen((prev) => !prev), []);

  const pageData = {
    developmentGoals: [
      {
        img: '/images/sustainability-goals/Goal-01.svg',
        backgroundColor: '#E5243B',
        contentLabelPairs: [
          {
            content: <NoPovertyPart />,
            label: '33-36 & 241-244',
          },
        ],
      },
      {
        img: '/images/sustainability-goals/Goal-02.svg',
        backgroundColor: '#DDA63A',
        contentLabelPairs: [
          {
            content: <ZeroHungerPart />,
            label: '34, 204',
          },
        ],
      },
      {
        img: '/images/good-health-icon.svg',
        backgroundColor: '#2D9A47',
        contentLabelPairs: [
          {
            content: <GoodHealthWellbeingPart />,
            label: '201,203',
          },
        ],
      },
      {
        img: '/images/quality-education-icon.svg',
        backgroundColor: '#C22033',
        contentLabelPairs: [
          {
            content: <QualityEducationPart />,
            label: '202,204',
          },
        ],
      },
      {
        img: '/images/gender-icon.svg',
        backgroundColor: '#EF412A',
        contentLabelPairs: [
          {
            content: <GenderQualityPart />,
            label: '35, 178, 200, 231',
          },
        ],
      },
      {
        img: '/images/sustainability-goals/Goal-06.svg',
        backgroundColor: '#26bde2',
        contentLabelPairs: [
          {
            content: <CleanWaterSanitation />,
            label: '203',
          },
        ],
      },
      {
        img: '/images/clean-energy-icon.svg',
        backgroundColor: '#FDB714',
        contentLabelPairs: [
          {
            content: <CleanEnergy />,
            label: '106, 116',
          },
          // {
          //   content: <ManufacturedCapital />,
          //   label: '100-105',
          // },
          // {
          //   content: <HumanCapital />,
          //   label: '106-119',
          // },
        ],
      },
      {
        img: '/images/economic-growth-icon.svg',
        backgroundColor: '#8F1838',
        contentLabelPairs: [{ content: <WorkAndEconomic />, label: '181' }],
      },
      {
        img: '/images/infarstructure-icon.svg',
        backgroundColor: '#F36E24',
        contentLabelPairs: [
          {
            content: <IndustryInnovationInfrastructure />,
            label: '33, 181',
          },
          // {
          //   content: <ManufacturedCapital />,
          //   label: '100-105',
          // },
          // {
          //   content: <HumanCapital />,
          //   label: '106-119',
          // },
          // {
          //   content: <IntellectualDigitalCapital />,
          //   label: '120-127',
          // },
          // {
          //   content: <SocialRelationshipCapital />,
          //   label: '128-145',
          // },
        ],
      },
      {
        img: '/images/inequalities-icon.svg',
        backgroundColor: '#E01A83',
        contentLabelPairs: [
          {
            content: <ReducedInequalities />,
            label: '35',
          },
        ],
      },
      {
        img: '/images/communities-icon.svg',
        backgroundColor: '#F99D25',
        contentLabelPairs: [
          {
            content: <CitiesAndCommunities />,
            label: '181, 216',
          },
          // {
          //   content: <ManufacturedCapital />,
          //   label: '100-105',
          // },
          // {
          //   content: <HumanCapital />,
          //   label: '106-119',
          // },
          // {
          //   content: <SocialRelationshipCapital />,
          //   label: '128-145',
          // },
        ],
      },
      {
        img: '/images/production-icon.svg',
        backgroundColor: '#CD8B2A',
        contentLabelPairs: [
          {
            content: <ConsumptionProduction />,
            label: '105, 115, 219',
          },
          // {
          //   content: <NaturalCapital />,
          //   label: '146-154',
          // },
        ],
      },
      {
        img: '/images/climate-action-icon.svg',
        backgroundColor: '#48773C',
        contentLabelPairs: [{ content: <ClimateAction />, label: '95, 213' }],
      },
      {
        img: '/images/sustainability-goals/Goal-14.svg',
        backgroundColor: '#0a97d9',
        contentLabelPairs: [{ content: <LifeBelowWater />, label: '217' }],
      },
      {
        img: '/images/life-land-icon.svg',
        backgroundColor: '#40AE49',
        contentLabelPairs: [{ content: <LifeOnLand />, label: '215, 216' }],
      },
      {
        img: '/images/sustainability-goals/Goal-16.svg',
        backgroundColor: '#00689d',
        contentLabelPairs: [
          {
            content: <PeaceJusticeInstitutions />,
            label: '277, 296, 313, 335 ',
          },
        ],
      },
      {
        img: '/images/partnerships-goals-icon.svg',
        backgroundColor: '#1A3668',
        contentLabelPairs: [
          { content: <PartnershipsGoals />, label: '215 - 218' },
          // { content: <IntellectualDigitalCapital />, label: '120-127' },
          // { content: <SocialRelationshipCapital />, label: '128-145' },
        ],
      },
    ],
  };

  const handleReportCardClick = (
    contentLabelPairs: { content: ReactElement; label: string }[] | undefined,
  ) => {
    setIsOpen(true);

    const newTabs =
      Array.isArray(contentLabelPairs) && contentLabelPairs.length > 0
        ? contentLabelPairs.map((pair, index) => ({
            id: index + 1,
            label: pair.label,
            content: pair.content,
          }))
        : [];

    setTabs(newTabs);
  };

  return (
    <div className="container px-4">
      <div className="reporting-frameworks-wrap">
        <div className="reporting-frameworks-inner">
          <div className="text-center">
            <SpeechText>
              <p className="sus-heading md:!leading-[6rem] !leading-[3rem]">
                {dictionary?.sustainability_heading_section}
              </p>
              <p className="gradient-text sus-heading md:!leading-[6rem] !leading-[3rem]">
                {dictionary?.reporting_frameworks_heading}
              </p>
            </SpeechText>
          </div>

          <div className="reporting-accordion">
            <Accordion
              className="font-secondary"
              itemClasses={{ title: 'font-secondary' }}
            >
              <AccordionItem
                key="1"
                aria-label="GRI"
                title="GRI"
                className="accordion-item font-secondary"
                indicator={({ isOpen }) =>
                  isOpen ? (
                    <Chevron
                      className="fill-white text-white -rotate-90"
                      width={24}
                      height={24}
                    />
                  ) : (
                    <Chevron
                      className="fill-white text-white"
                      width={24}
                      height={24}
                    />
                  )
                }
              >
                <div className="reporting-accordion-content">
                  <GRIContent />
                </div>
              </AccordionItem>

              <AccordionItem
                key="2"
                aria-label="Integrated reporting"
                title={dictionary?.integrated_reporting}
                className="accordion-item font-secondary"
                indicator={({ isOpen }) =>
                  isOpen ? (
                    <Chevron
                      className="fill-white text-white -rotate-90"
                      width={24}
                      height={24}
                    />
                  ) : (
                    <Chevron
                      className="fill-white text-white"
                      width={24}
                      height={24}
                    />
                  )
                }
              >
                <div className="reporting-accordion-content">
                  <SustainabilityIntegratedReporting />
                </div>
              </AccordionItem>

              <AccordionItem
                key="3"
                aria-label="SASB Standard - Consumer finance"
                title={dictionary?.sasb_standard_consumer_finance}
                className="accordion-item font-secondary"
                indicator={({ isOpen }) =>
                  isOpen ? (
                    <Chevron
                      className="fill-white text-white -rotate-90"
                      width={24}
                      height={24}
                    />
                  ) : (
                    <Chevron
                      className="fill-white text-white"
                      width={24}
                      height={24}
                    />
                  )
                }
              >
                <div className="reporting-accordion-content">
                  <SustainabilitySASB />
                </div>
              </AccordionItem>

              <AccordionItem
                key="4"
                aria-label="SLFRS Sustainability disclosure standard"
                title={dictionary?.slfrs_sustainability_disclosure_standard}
                className="accordion-item font-secondary"
                indicator={({ isOpen }) =>
                  isOpen ? (
                    <Chevron
                      className="fill-white text-white -rotate-90"
                      width={24}
                      height={24}
                    />
                  ) : (
                    <Chevron
                      className="fill-white text-white"
                      width={24}
                      height={24}
                    />
                  )
                }
              >
                <div className="reporting-accordion-content table-responsive">
                  <SustainabilityDisclosureStandards />
                </div>
              </AccordionItem>

              <AccordionItem
                key="5"
                aria-label="Sustainable development goals"
                title={dictionary?.sustainable_development_goals}
                className="accordion-item font-secondary"
                indicator={({ isOpen }) =>
                  isOpen ? (
                    <Chevron
                      className="fill-white text-white -rotate-90"
                      width={24}
                      height={24}
                    />
                  ) : (
                    <Chevron
                      className="fill-white text-white"
                      width={24}
                      height={24}
                    />
                  )
                }
              >
                <div className="report-card-wrap">
                  {pageData.developmentGoals.map((item, index) => (
                    <div className="report-card-inner" key={index.toString()}>
                      <ReportCard
                        data={item}
                        onOpen={() =>
                          handleReportCardClick(item.contentLabelPairs)
                        }
                      />
                    </div>
                  ))}
                </div>
              </AccordionItem>

              <AccordionItem
                key="6"
                aria-label="UNGC 10 principles"
                title={dictionary?.ungc_10_principles}
                className="accordion-item font-secondary text-white"
                indicator={({ isOpen }) =>
                  isOpen ? (
                    <Chevron
                      className="fill-white text-white -rotate-90"
                      width={24}
                      height={24}
                    />
                  ) : (
                    <Chevron
                      className="fill-white text-white"
                      width={24}
                      height={24}
                    />
                  )
                }
              >
                <div className="reporting-accordion-content">
                  <SustainabilityPrinciples />
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <ModalDialog isOpen={isOpen} onOpenChange={onOpenChange} tabs={tabs} />
    </div>
  );
}

export default memo(ReportingFrameworks);
