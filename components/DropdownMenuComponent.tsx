'use client';

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown';
import Link from 'next/link';
import { Chevron } from './icons';
import { usePathname } from 'next/navigation';
import SpeechText from './SpeechText';

interface DropdownMenuComponentProps {
  item: any;
}

const DropdownMenuComponent = ({ item }: DropdownMenuComponentProps) => {
  const pathname = usePathname();
  const urlPathName = pathname?.concat('/');

  const isActive = (url: string) => {
    return pathname === url || urlPathName === url;
  };

  const isDropdownActive = () => {
    if (
      pathname?.includes('financial-dashboard') ||
      pathname?.includes('non-financial-dashboard')
    )
      return true;
  };

  return (
    <div>
      {item?.children ? (
        <Dropdown
          placement="bottom-start"
          classNames={{
            content: 'bg-black rounded-2xl p-4 border-0',
            trigger: 'aria-expanded:scale-[1] aria-expanded:opacity-100',
          }}
        >
          <DropdownTrigger aria-label="integrated-dashboard">
            <button
              type="button"
              aria-label="dashboard-dropdown"
              className={`cursor-pointer focus-visible:outline-none flex gap-2 items-center font-secondary font-medium leading-[19.54px] text-base hover:text-red ${
                isDropdownActive() ? 'text-themeYellow' : 'text-white'
              }`}
            >
              {item?.title}
              <Chevron width={20} height={20} />
            </button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="light">
            {item?.children?.map((child: any) => (
              <DropdownItem textValue={child.key} key={child.key}>
                <SpeechText>
                  <Link prefetch={false}
                    href={child.url}
                    className={`font-secondary font-medium leading-[19.54px] text-base hover:text-red transition ease-in-out duration-300 ${isActive(child?.url) ? 'text-themeYellow' : 'text-white'}`}
                  >
                    {child.title}
                  </Link>
                </SpeechText>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      ) : (
        <SpeechText>
          <Link prefetch={false}
            href={item?.url}
            className={`font-secondary font-medium leading-[19.54px] text-base hover:text-themeYellow transition ease-in-out duration-300 ${isActive(item?.url) ? 'text-themeYellow' : 'text-white'}`}
          >
            {item?.title}
          </Link>
        </SpeechText>
      )}
    </div>
  );
};

export default DropdownMenuComponent;
