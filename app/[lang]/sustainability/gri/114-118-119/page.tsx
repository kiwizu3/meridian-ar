import Section2 from '@/components/content/sustainable-development/humanCapital/part11';
import Section3 from '@/components/content/sustainable-development/humanCapital/part12';
import Section1 from '@/components/content/sustainable-development/humanCapital/part7';

export default function GRIReporting33() {
  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
          <Section1 />
          <div className="mt-6">
            <Section2 />
          </div>
          <div className="mt-6">
            <Section3 />
          </div>
        </div>
      </div>
    </div>
  );
}
