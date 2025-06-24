import dynamic from 'next/dynamic';

const Materiality = dynamic(() => import('@/components/content/materiality'), {
  ssr: false,
  suspense: true,
});

export default function IntegratedReporting4() {
  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6">
        <Materiality />
      </div>
    </div>
  );
}
