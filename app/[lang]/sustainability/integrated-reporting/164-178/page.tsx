import dynamic from 'next/dynamic';

const CorporateGovernance = dynamic(
  () => import('@/components/content/corporateGovernace'),
  {
    ssr: false,
    suspense: true,
  },
);

export default function IntegratedReporting6() {
  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6">
        <CorporateGovernance />
      </div>
    </div>
  );
}
