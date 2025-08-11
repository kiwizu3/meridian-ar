'use client';

import DropdownMenuComponent from '@/components/DropdownMenuComponent';
import MobileMenuDropdown from '@/components/mobileMenuDropdown';
import { NavigationProps } from '@/types';
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar';
import Link from 'next/link';
import { useState } from 'react';
import AccessibilityToggle from '../AccessibilityToggle';
import { Logo } from '../icons';
import LanguageToggle from '../languageToggle';

const Nav = ({ lang, navbarItems }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      position="sticky"
      classNames={{
        base: 'bg-black/70 lg:rounded-2xl h-[78px] lg:w-[97%] mx-auto lg:top-4 filter-home',
        wrapper: 'px-4 md:px-6 xl:px-8 max-w-none flex justify-between',
        menu: 'container py-8 bg-black/70 w-full',
      }}
    >
      <NavbarContent className="pr-3" justify="start">
        <NavbarItem>
          <Link href={`/${lang}/`} aria-label="logo">
            <Logo />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        className="hidden lg:flex xl:gap-10 w-fit basis-full"
        justify="center"
      >
        {navbarItems.map((item) => (
          <NavbarItem className="whitespace-normal" key={item.key}>
            <DropdownMenuComponent item={item} />
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <LanguageToggle />
        </NavbarItem>
        <NavbarItem>
          <AccessibilityToggle lang={`/${lang}`} />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden" justify="center">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarMenu className="container z-[9999]">
        {isMenuOpen &&
          navbarItems.map((item) => (
            <NavbarMenuItem key={item.key}>
              {item.children ? (
                <MobileMenuDropdown
                  title={item?.title}
                  childElement={item?.children}
                  setIsMenuOpen={setIsMenuOpen}
                />
              ) : (
                <Link
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  href={item.url}
                  className="font-secondary font-medium text-lg hover:text-themeYellow"
                >
                  <p className="py-2">{item.title}</p>
                </Link>
              )}
            </NavbarMenuItem>
          ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
