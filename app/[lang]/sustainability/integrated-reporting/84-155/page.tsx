import dynamic from 'next/dynamic';

const FinancialCapital = dynamic(
  () =>
    import(
      '@/components/content/sustainable-development/financialCapital/index'
    ),
  { ssr: false, suspense: true },
);

const HumanCapital = dynamic(
  () =>
    import('@/components/content/sustainable-development/humanCapital/index'),
  { ssr: false, suspense: true },
);

const IntellectualDigitalCapital = dynamic(
  () =>
    import(
      '@/components/content/sustainable-development/intellectualDigitalCapital/index'
    ),
  { ssr: false, suspense: true },
);

const ManufacturedCapital = dynamic(
  () =>
    import(
      '@/components/content/sustainable-development/manufacturedCapital/index'
    ),
  { ssr: false, suspense: true },
);

const NaturalCapital = dynamic(
  () =>
    import('@/components/content/sustainable-development/naturalCapital/index'),
  { ssr: false, suspense: true },
);

const SocialRelationshipCapital = dynamic(
  () =>
    import(
      '@/components/content/sustainable-development/socialRelationshipCapital/index'
    ),
  { ssr: false, suspense: true },
);

export default function IntegratedReporting2() {
  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col gap-8 overflow-x-hidden">
          <FinancialCapital />
          <ManufacturedCapital />
          <HumanCapital />
          <IntellectualDigitalCapital />
          <SocialRelationshipCapital />
          <NaturalCapital />
        </div>
      </div>
    </div>
  );
}
