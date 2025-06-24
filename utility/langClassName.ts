import { Locale } from '@/i18n-config';

export const getAnnualResultTopPotion = (lang: Locale) => {
  switch (lang) {
    case 'en':
      return 'top-[25rem]';
    case 'sn':
      return 'top-[30rem]';
    default:
      return 'top-[36rem]';
  }
};
export const getHomeVideoPosition = (lang: Locale) => {
  switch (lang) {
    case 'en':
      return 'lg:top-[15rem] top-[7rem]';
    case 'sn':
      return 'lg:top-[15rem] top-[7rem]';
    default:
      return 'lg:top-[24rem] top-[14rem]';
  }
};

export function getFontClass(lang: Locale) {
  switch (lang) {
    case 'sn': // Sinhala
      return 'font-notoSinhala';
    case 'tm': // Tamil
      return 'font-notoTamil';
    default: // English or any other default language
      return 'font-primary';
  }
}
