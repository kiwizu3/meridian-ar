'use client';

import { graphCategories } from '@/data/graphDataNonFinancial';
import CustomersPage from '@/components/graphTypesNonFinancial/customers';
import EnvironmentAndLandscape from '@/components/graphTypesNonFinancial/environment-and-landscape';
import EconomicWellbeing from '@/components/graphTypesNonFinancial/economicWellbeing';
import EmployeeWellbeingChart from '@/components/graphTypesNonFinancial/employeeWellbeing';
import SocialWellbeing from '@/components/graphTypesNonFinancial/socialWellbeing';
import BusinessSophistication from '@/components/graphTypesNonFinancial/businessSophistication';
import { useState } from 'react';
import DropdownWithCheckbox from '@/components/DropdownWithCheckbox/DropdownWithCheckbox';
import Reputation from '@/components/graphTypesNonFinancial/reputation';
import InfrastructureQualityService from '@/components/graphTypesNonFinancial/infrastructureQualityService';
import SpeechText from '@/components/SpeechText';
import { Locale } from '@/i18n-config';
import { useDictionary } from '@/hooks/useDictionary';

export default function NonFinancialDashboard({
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

  const desiredOrder = [
    'customers',
    'environmentLandscape',
    'economicWellbeing',
    'employeeWellbeing',
    'socialWellbeing',
    'businessSophistication',
    'reputation',
    'infrastructureQualityService',
  ];

  return (
    <div className="container lg:pb-20 pb-10">
      <header className="pt-11 px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-3 lg:gap-1">
          <SpeechText>
            <h1 className="font-black text-2xl lg:text-[2.75rem]">
              {dictionary?.non_financial_dashboard}
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
      <main className={`pt-16 grid gap-4 px-4 lg:px-0`}>
        <div
          className={`grid gap-4 grid-cols-1 grid-row ${selectedValues.includes('customers') && selectedValues?.includes('environmentLandscape') ? 'lg:grid-cols-3' : 'grid-cols-1'}`}
        >
          {selectedValues?.includes('customers') && (
            <div className="md:col-span-1 col-span-2">
              <CustomersPage dictionary={dictionary} />
            </div>
          )}
          {selectedValues?.includes('environmentLandscape') && (
            <div className="col-span-2">
              <EnvironmentAndLandscape dictionary={dictionary} />
            </div>
          )}
        </div>
        <div
          className={`grid gap-4 grid-cols-1 grid-row ${selectedValues.includes('economicWellbeing') && selectedValues?.includes('employeeWellbeing') ? 'lg:grid-cols-2' : 'grid-cols-1'}`}
        >
          {selectedValues?.includes('economicWellbeing') && (
            <div>
              <EconomicWellbeing dictionary={dictionary} />
            </div>
          )}
          {selectedValues?.includes('employeeWellbeing') && (
            <div>
              <EmployeeWellbeingChart dictionary={dictionary} />
            </div>
          )}
        </div>

        <div
          className={`grid gap-4 grid-cols-1 grid-row ${selectedValues.includes('socialWellbeing') && selectedValues?.includes('businessSophistication') ? 'lg:grid-cols-2' : 'grid-cols-1'}`}
        >
          {selectedValues?.includes('socialWellbeing') && (
            <div>
              <SocialWellbeing dictionary={dictionary} />
            </div>
          )}
          {selectedValues?.includes('businessSophistication') && (
            <div>
              <BusinessSophistication dictionary={dictionary} />
            </div>
          )}
        </div>
        <div
          className={`grid gap-4 grid-cols-1 grid-row ${selectedValues.includes('reputation') && selectedValues?.includes('infrastructureQualityService') ? 'lg:grid-cols-2' : 'grid-cols-1'}`}
        >
          {selectedValues?.includes('reputation') && (
            <div>
              <Reputation dictionary={dictionary} />
            </div>
          )}
          {selectedValues?.includes('infrastructureQualityService') && (
            <div>
              <InfrastructureQualityService dictionary={dictionary} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
