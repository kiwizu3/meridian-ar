'use client';

import { i18n, Locale } from '@/i18n-config';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Chevron } from '../icons';

export default function LanguageToggle() {
  const router = useRouter();
  const pathName = usePathname();
  const segments = pathName.split('/');
  const [selected, setSelected] = useState<any>(segments?.[1]);

  const redirectedPathName = (locale: Locale): string => {
    if (!pathName) return '/';
    const segments = pathName?.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const handleChange = (selectedKey: any) => {
    setSelected(selectedKey);
    router.push(redirectedPathName(selectedKey));
  };

  const getLocaleName = (locale: Locale) => {
    switch (locale) {
      case 'en':
        return 'English';
      case 'sn':
        return 'සිංහල';
      case 'tm':
        return 'தமிழ்';
      default:
        return locale;
    }
  };

  return (
    <div className="flex">
      <Dropdown
        placement="bottom-end"
        classNames={{
          content: 'bg-lightBlack rounded-2xl border-0 min-w-16',
          trigger: 'aria-expanded:scale-[1] aria-expanded:opacity-100',
        }}
      >
        <DropdownTrigger>
          <button
            type="button"
            aria-label="lang-dropdown"
            aria-labelledby="lang-dropdown"
            className="flex items-center focus-visible:outline-none gap-2 cursor-pointer uppercase text-sm lg:text-base font-semibold leading-[16.94px] font-inter hover:text-red"
          >
            {{ en: 'EN', sn: 'සිං', tm: 'தமி' }[selected as Locale] || 'EN'}
            <Chevron width={24} height={24} />
          </button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Static Actions"
          variant="light"
          onAction={handleChange}
        >
          {i18n.locales.map((item) => (
            <DropdownItem textValue={item} key={item}>
              <p className="hover:text-red items-center uppercase transition ease-in-out duration-300 text-sm lg:text-base">
                {getLocaleName(item)}
              </p>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
