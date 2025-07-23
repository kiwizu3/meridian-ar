import {
  Facebook,
  Instagram,
  Linkedin,
  Ticktock,
  Twitter,
  Youtube,
} from '@/components/icons';
import { getDictionary } from '@/get-dictionary';
import { LangTypes } from '@/types';
import Link from 'next/link';

export default async function Footer({ lang }: Readonly<LangTypes>) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="bg-cardGreen relative z-10">
      <div className="py-10 container px-5 lg:px-0">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:py-[28px] justify-center md:gap-14 gap-6">
            <Link
              prefetch={false}
              href={'https://www.lbfinance.com/about'}
              target="_blank"
              className="font-primary font-black lg:text-lg text-base hover:text-themeYellow transition ease-in-out duration-300"
            >
              {dictionary?.about_us}
            </Link>
            <Link
              prefetch={false}
              href={'https://www.lbfinance.com/investor-relations'}
              target="_blank"
              className="font-primary font-black lg:text-lg text-base hover:text-themeYellow transition ease-in-out duration-300"
            >
              {dictionary?.investor_relations}
            </Link>
            <Link
              prefetch={false}
              href={`/${lang}/connect?section=contact-us`}
              className="font-primary font-black lg:text-lg text-base hover:text-themeYellow transition ease-in-out duration-300"
            >
              {dictionary?.contact_us}
            </Link>
          </div>
          <div className="h-[2px] bg-white1" />
          <div className="flex flex-col md:flex-row gap-8 justify-between">
            <div className="flex flex-col justify-between">
              <div className="flex gap-6">
                <Link
                  prefetch={false}
                  href={`/${lang}/terms-of-use`}
                  className="font-primary text-base leading-8 font-black hover:text-themeYellow transition ease-in-out duration-300"
                >
                  {dictionary?.terms_of_use}
                </Link>
                <Link
                  prefetch={false}
                  href={`/${lang}/privacy-policy`}
                  className="font-primary text-base leading-8 font-black hover:text-themeYellow transition ease-in-out duration-300"
                >
                  {dictionary?.privacy_policy}
                </Link>
              </div>
              <p className="font-secondary mt-5 font-normal text-sm leading-[28px] opacity-50">
                {dictionary?.copyright_arimac}
              </p>
              <a
                target="_blank"
                href="https://arimaclanka.com/"
                className="font-secondary text-themeYellow font-medium text-sm leading-[28px]"
              >
                {dictionary?.powered_by_arimac_lanka}
              </a>
            </div>
            <div className="py-[22px] px-4 md:px-6 lg:px-[35px] bg-white/15 flex md:gap-3 border-1 rounded-lg justify-between items-center">
              <a
                href="https://www.facebook.com/LBFinancePLC"
                target="_blank"
                aria-label="fb"
              >
                <Facebook className="fill-white hover:fill-themeYellow transition ease-in-out duration-300" />
              </a>
              <a
                href="https://www.instagram.com/lbfinanceplc/"
                target="_blank"
                aria-label="instagram"
              >
                <Instagram className="fill-white hover:fill-themeYellow transition ease-in-out duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/company/lb-finance-plc/"
                target="_blank"
                aria-label="linkedIn"
              >
                <Linkedin className="fill-white hover:fill-themeYellow transition ease-in-out duration-300" />
              </a>
              <a
                href="https://x.com/lbfinanceplc"
                target="_blank"
                aria-label="twitter"
              >
                <Twitter className="fill-white hover:fill-themeYellow transition ease-in-out duration-300" />
              </a>
              <a
                href="https://www.tiktok.com/@lbfinanceplcofficial"
                target="_blank"
                aria-label="tik-tok"
              >
                <Ticktock className="fill-white hover:fill-themeYellow transition ease-in-out duration-300" />
              </a>
              <a
                href="https://www.youtube.com/@LBTVOne"
                target="_blank"
                aria-label="youtube"
              >
                <Youtube className="fill-white hover:fill-themeYellow transition ease-in-out duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
