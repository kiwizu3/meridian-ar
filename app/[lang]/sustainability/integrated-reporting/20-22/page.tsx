import dynamic from 'next/dynamic';
import '../style.css';

const FinancialHighlights = dynamic(
  () => import('@/components/content/financialHighlights'),
  {
    ssr: false,
    suspense: true,
  },
);

const NonFinancialHighlights = dynamic(
  () => import('@/components/content/nonFinancialHighlights'),
  { ssr: false, suspense: true },
);

export default function IntegratedReporting10() {
  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col gap-8">
          <div className="without-scroll">
            <FinancialHighlights />
          </div>
          <div className="without-scroll mt-6">
            <NonFinancialHighlights />
          </div>
        </div>
      </div>
    </div>
  );
}
