import AnnualResults from '@/components/userGuide/annualResults';
import HomePageSection from '@/components/userGuide/homePageSection';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import TopBanner from '@/components/userGuide/topBanner';
import MessageChairman from '@/components/userGuide/MessageChairmanSection';
import IntegratedDashboardSection from '@/components/userGuide/IntegratedDashboardSection';
import SustainabilitySection from '@/components/userGuide/sustainabilitySection';
import StakeholdersSection from '@/components/userGuide/stakeholdersSection';
import GridSection from '@/components/userGuide/gridSection';
import './user-guide.css';

export default async function UserGuide({
  params = { lang: 'en' },
}: Readonly<{
  params?: { lang: Locale };
}>) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  return (
    <div>
      <TopBanner dictionary={dictionary} />
      <HomePageSection dictionary={dictionary} />
      <AnnualResults dictionary={dictionary} />
      <MessageChairman dictionary={dictionary} />
      <IntegratedDashboardSection dictionary={dictionary} />
      <SustainabilitySection dictionary={dictionary} />
      <StakeholdersSection dictionary={dictionary} />
      <GridSection dictionary={dictionary} />
    </div>
  );
}
