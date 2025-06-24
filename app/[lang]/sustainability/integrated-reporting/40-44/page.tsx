import dynamic from 'next/dynamic';

const IntegratedStakeholderEngagement = dynamic(
  () => import('@/components/content/integratedStakeholderEngagement'),
  {
    ssr: false,
    suspense: true,
  },
);

export default function IntegratedReporting1() {
  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6">
        <IntegratedStakeholderEngagement />
      </div>
    </div>
  );
}
