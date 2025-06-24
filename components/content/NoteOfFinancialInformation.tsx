'use client';

import FinancialInfoSec1 from './financialInfoSec1';
import FinancialInfoSec2 from './financialInfoSec2';

export default function NoteOfFinancialInformation() {
  return (
    <div className="bg-[#0A3D5F] px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-y-auto">
      <div className="grid grid-cols-1 gap-6">
        <FinancialInfoSec1 />
        <FinancialInfoSec2 />
      </div>
    </div>
  );
}
