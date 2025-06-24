'use client';
import { MobileMenuDropdownProps } from '@/types';
import Link from 'next/link';
import { useState } from 'react';
import { Chevron } from '@/components/icons';

export default function MobileMenuDropdown(
  props: Readonly<MobileMenuDropdownProps>,
) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const handleClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className={`flex flex-col ${isDropdownOpen && 'gap-2'}`}>
      <button
        type="button"
        className="flex focus-visible:outline-none items-center justify-between"
        onClick={handleClick}
      >
        <p className="font-secondary py-2 font-medium text-lg hover:text-red transition ease-in-out duration-300">
          {props?.title}
        </p>
        <Chevron
          width={20}
          height={20}
          className="fill-white text-white hover:text-red transition ease-in-out duration-300"
        />
      </button>
      <div className="flex flex-col gap-4">
        {isDropdownOpen &&
          props?.childElement.map((child) => (
            <div key={child.key}>
              <Link
                onClick={() => props?.setIsMenuOpen(false)}
                href={child.url}
                className="px-4 text-white font-secondary font-medium text-lg hover:text-red transition ease-in-out duration-300"
              >
                {child.title}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
