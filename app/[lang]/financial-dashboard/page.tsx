'use client';

import DropdownWithCheckbox from '@/components/DropdownWithCheckbox/DropdownWithCheckbox';
import FinancialPositionGraph from '@/components/graphTypesFinancial/financialPositionGraph';
import GrowthGraph from '@/components/graphTypesFinancial/growthGraph';
import InvestorChart from '@/components/graphTypesFinancial/investorInformation';
import OperatingResultsGraph from '@/components/graphTypesFinancial/operatingResultsGraph';
import StatutoryRatiosChart from '@/components/graphTypesFinancial/statutoryRatios';
import SpeechText from '@/components/SpeechText';
import { graphCategories } from '@/data/graphDataFinancial';
import { useDictionary } from '@/hooks/useDictionary';
import { Locale } from '@/i18n-config';
import { useState } from 'react';

function FinancialDashboard({
  params: { lang },
}: Readonly<{
  params: { lang: Locale };
}>) {
  const dictionary = useDictionary(lang);

  const [selectedValues, setSelectedValues] = useState<string[]>(
    graphCategories
      ?.filter((category) => category?.isShow)
      ?.map((category) => category?.key),
  );

  const filteredChart = selectedValues.filter((value) => value !== 'growth');

  const lastChart = filteredChart?.pop();

  const desiredOrder = [
    'operatingResults',
    'financialPosition',
    'investorInformation',
    'statutoryRatios',
    'growth',
  ];

  return (
    <div className="container lg:pb-20 pb-10 px-5">
      <header className="pt-11">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-3 lg:gap-1">
          <SpeechText>
            <h1 className="font-black text-2xl lg:text-[2.75rem]">
              {dictionary?.financial_dashboard}
            </h1>
          </SpeechText>
          <DropdownWithCheckbox
            selectedValues={selectedValues}
            setSelectedValues={setSelectedValues}
            graphCategories={graphCategories}
            desiredOrder={desiredOrder}
          />
        </div>
      </header>
      <main
        className={`pt-16 grid gap-4 grid-cols-1 ${filteredChart?.length === 0 ? 'lg:grid-cols-1' : 'lg:grid-cols-2'}`}
      >
        {selectedValues?.includes('operatingResults') && (
          <div
            className={`${lastChart === 'operatingResults' && filteredChart?.length === 2 ? 'lg:col-span-2' : 'lg:col-span-1'}`}
          >
            <OperatingResultsGraph dictionary={dictionary} />
          </div>
        )}
        {selectedValues?.includes('financialPosition') && (
          <div
            className={`${lastChart === 'financialPosition' && filteredChart?.length === 2 ? 'lg:col-span-2' : 'lg:col-span-1'}`}
          >
            <FinancialPositionGraph dictionary={dictionary} />
          </div>
        )}
        {selectedValues?.includes('investorInformation') && (
          <div
            className={`${lastChart === 'investorInformation' && filteredChart?.length === 2 ? 'lg:col-span-2' : 'lg:col-span-1'}`}
          >
            <InvestorChart dictionary={dictionary} />
          </div>
        )}
        {selectedValues?.includes('statutoryRatios') && (
          <div
            className={`${lastChart === 'statutoryRatios' && filteredChart?.length === 2 ? 'lg:col-span-2' : 'lg:col-span-1'}`}
          >
            <StatutoryRatiosChart dictionary={dictionary} />
          </div>
        )}
        {selectedValues?.includes('growth') && (
          <div className="lg:col-span-2">
            <GrowthGraph dictionary={dictionary} />
          </div>
        )}
      </main>
    </div>
  );
}

export default FinancialDashboard;
