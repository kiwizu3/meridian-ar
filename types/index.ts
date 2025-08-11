import { Locale } from '@/i18n-config';
import { StaticImageData } from 'next/image';
import { ReactElement, SVGProps } from 'react';

export type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
  width?: number;
  height?: number;
};

export type ScrollTextProps = {
  text?: string;
};
export type DetailCardProps = {
  title?: string;
  image: string | StaticImageData;
  description?: string;
  audioTrack?: {
    en: string;
    ta: string;
    si: string;
  };
  dictionary?: any;
  files: {
    key: string;
    file: string;
    lang: string;
  }[];
};

export type DocCardProps = {
  title?: string;
  description?: string;
  viewTitle?: string;
  link: string;
  svg: ReactElement;
  dictionary?: any;
};

export type languageProps = {
  items: { key: string; title: string }[];
  onLanguageChange?: any;
  currentLang?: any;
};

export type AccordionItem = {
  key: string;
  title: string;
  content: ReactElement;
};

export type AccordionProps = {
  accordionItems: AccordionItem[];
};

export type VideoCardProps = {
  title: string;
  videoUrl: string;
  thumbnailUrl: string | StaticImageData;
};

export type CounterCardProps = {
  title?: string;
  content?: string;
  subTitle?: string;
  value: number;
  counterText?: string;
};

export type CardSectionProps = {
  title?: string;
  gradientTitle?: string;
  bgImage?: string | StaticImageData;
  bgImagePosition?: 'left' | 'right';
  cards: CounterCardProps[];
  lang: Locale;
};

export type SeriesData = string[][];

export interface LangTypes {
  lang: 'en' | 'sn' | 'tm';
}

export type MobileMenuDropdownProps = {
  title: string;
  childElement: Array<{ title: string; key: string; url: string }>;
  setIsMenuOpen: (isOpen: boolean) => void;
};

export interface NavigationProps {
  lang: Locale;
  navbarItems: (
    | {
        title: string;
        key: string;
        url: string;
        children: undefined;
      }
    | {
        title: string;
        key: string;
        url: string;
        children: {
          title: string;
          key: string;
          url: string;
        }[];
      }
  )[];
}

export interface ISidebarItem {
  key: string;
  name: string;
  url: string;
  items?: ISubItem[];
}

export interface ISubItem {
  key: string;
  name: string;
  url: string;
}

export type GraphDataCategories = {
  key: string;
  label: string;
  isShow: boolean;
};

export type SeriesDataType = {
  name: string;
  data: any[];
  color: string;
  type?: string;
};

export type DownloadButtonProps = {
  url: string;
  downloadText: string;
};

export interface ContactUsProps {
  searchParams: {
    section: string;
  };
  params: { lang: Locale };
}

export interface CardProps {
  name: string;
  role?: string;
  appointedInfo?: string;
  appointedDate?: string;
  additionalInfo?: string;
  additionalDate?: string;
  imgSrc: string;
  bgColor: string;
  circleColors?: string[];
}

export enum chartCatagories {
  rates = 'rates',
  times = 'times',
  rupees = 'rupees',
  millions = 'millions',
  m3 = 'm3',
  kg = 'Kg',
  gj = 'GJ',
  tCo2e = 'tCo2e',
  number = 'number',
  hours = 'hours',
}

interface IAccordion {
  title: string;
  thumbnail: StaticImageData;
  video: string;
}

export interface AccordionContentProps {
  accordionContent: IAccordion[];
}
