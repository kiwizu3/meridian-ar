import { getDictionary } from '@/get-dictionary';
import { LangTypes } from '@/types';
import Nav from './nav';

export default async function Navigation({ lang }: Readonly<LangTypes>) {
  const dictionary = await getDictionary(lang);

  const navbarItems = [
    {
      title: dictionary?.home,
      key: 'home',
      url: `/${lang}/`,
    },
    {
      title: dictionary?.integrated_dashboard,
      key: 'integrated-dashboard',
      url: '',
      children: [
        {
          title: dictionary?.financial_dashboard,
          key: 'financial-dashboard',
          url: `/${lang}/financial-dashboard`,
        },
        {
          title: dictionary?.non_financial_dashboard,
          key: 'non-financial-dashboard',
          url: `/${lang}/non-financial-dashboard`,
        },
      ],
    },
    {
      title: dictionary?.sustainability,
      key: 'sustainability',
      url: `/${lang}/sustainability`,
    },
    {
      title: dictionary?.stakeholders,
      key: 'stakeholders',
      url: `/${lang}/stakeholders`,
    },
    {
      title: dictionary?.our_impact,
      key: 'our-impact',
      url: `/${lang}/our-impact`,
    },
    {
      title: dictionary?.connect,
      key: 'connect',
      url: `/${lang}/connect`,
    },
    {
      title: dictionary?.user_guide,
      key: 'user-guide',
      url: `/${lang}/user-guide`,
    },
  ];

  return <Nav lang={lang} navbarItems={navbarItems} />;
}
