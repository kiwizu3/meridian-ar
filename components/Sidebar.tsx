'use client';

import { ISidebarItem, LangTypes } from '@/types';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { Chevron } from './icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const itemClasses = {
  base: 'px-0 shadow-none',
  heading: '',
  titleWrapper: '',
  title: 'font-secondary font-normal text-base leading-8 text-gray50 ',
  trigger:
    'data-[hover=true]:bg-black rounded-none py-0 flex items-center pr-4',
  indicator: 'text-medium ',
  content: 'py-0',
};

const Sidebar = ({ lang, dictionary }: any) => {
  const items: ISidebarItem[] = [
    {
      key: 'the-company',
      name: dictionary?.the_company,
      url: `/${lang}/annual-report/the-company`,
    },
    {
      key: 'the-strategic-report',
      name: dictionary?.the_strategic_report,
      url: `/${lang}/annual-report/the-strategic-report`,
    },
    {
      key: 'sustainability-reporting',
      name: dictionary?.sustainability_reporting,
      url: `/${lang}/annual-report/sustainability-reporting`,
    },
    {
      key: 'business-reviews',
      name: dictionary?.business_reviews,
      url: `/${lang}/annual-report/`,
      items: [
        {
          key: 'business-reviews',
          name: dictionary?.business_reviews_general,
          url: `/${lang}/annual-report/business-review/general`,
        },
        {
          key: 'sustainability-information',
          name: dictionary?.subsidiary_information,
          url: `/${lang}/annual-report/business-review/sustainability-information`,
        },
        {
          key: 'the-capitals-report',
          name: dictionary?.the_capitals_report,
          url: `/${lang}/annual-report/business-review/the-capitals-report`,
        },
      ],
    },
    {
      key: 'corporate-stewardship',
      name: dictionary?.corporate_stewardship,
      url: `/${lang}/annual-report/corporate-stewardship`,
    },
    {
      key: 'financial-information',
      name: dictionary?.financial_information,
      url: `/${lang}/annual-report/financial-information`,
    },
    {
      key: 'supplementary-information',
      name: dictionary?.supplementary_information,
      url: `/${lang}/annual-report/supplementary-information`,
    },
  ];

  const pathName = usePathname();

  const route = pathName?.split('/')?.[3];

  return (
    <div>
      <Accordion itemClasses={itemClasses}>
        {items.map((item) => (
          <AccordionItem
            href={item.url}
            key={item?.name}
            aria-label={item?.name}
            title={
              !Array.isArray(item.items) ? (
                <Link href={item.url}>
                  <div className="px-6 py-3 capitalize data-[hover=true]:bg-black rounded-none h-14 flex items-center">
                    <p>{item?.name}</p>
                  </div>
                </Link>
              ) : (
                <p className="px-6 py-3 capitalize data-[hover=true]:bg-black rounded-none h-14 flex items-center">
                  {item?.name}
                </p>
              )
            }
            className={`mb-2 hover:bg-plainBlack cursor-pointer text-white ${route === item.key ? 'bg-plainBlack' : 'bg-[#F3F3F33D]'}`}
            hideIndicator={!Array.isArray(item.items)}
            indicator={({ isOpen }) =>
              isOpen ? (
                <Chevron
                  className="fill-white text-white -rotate-90"
                  width={24}
                  height={24}
                />
              ) : (
                <Chevron
                  className="fill-white text-white"
                  width={24}
                  height={24}
                />
              )
            }
          >
            {item.items &&
              item.items.map((element) => (
                <div
                  key={element.name}
                  className={`px-6 py-3 mb-2 hover:bg-slate-500 capitalize cursor-pointer ${route === item.key ? 'bg-plainBlack' : 'bg-[#F3F3F33D]'}`}
                >
                  <Link href={element.url}>
                    <p>{element.name}</p>
                  </Link>
                </div>
              ))}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Sidebar;
