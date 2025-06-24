import dynamic from 'next/dynamic';

const ValueCreatingBusinessModel = dynamic(
  () => import('@/components/content/valueCreatingBusinessModel'),
  {
    ssr: false,
    suspense: true,
  },
);

export default function IntegratedReporting7() {
  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6">
        <ValueCreatingBusinessModel />
      </div>
    </div>
  );
}
