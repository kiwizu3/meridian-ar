import LeftArrow from '@/components/icons/leftArrow';
import Sidebar from '@/components/Sidebar';
import SpeechText from '@/components/SpeechText';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { NextUIProvider } from '@nextui-org/react';
import Link from 'next/link';

export default async function Layout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const dictionary = await getDictionary(lang);

  return (
    <div lang={lang}>
      <div className="container min-h-screen mb-20 md:mb-40 px-4 lg:px-0">
        <div className="flex items-center mt-14">
          <LeftArrow />
          <p className="font-medium cursor-pointer text-base text-white font-secondary">
            <Link href={`/${lang}`}>{dictionary.go_back}</Link>
          </p>
        </div>
        <div>
          <div className="lg:text-[56px] lg:leading-[83px] text-xl font-black text-white mt-10">
            <SpeechText>
              <h1>{dictionary.annual_report_title}</h1>
            </SpeechText>
          </div>
          <div className="mt-1">
            <div className="text-[#E5E5E5] font-normal text-sm lg:text-lg">
              <SpeechText>
                <p>{dictionary.annual_report_intro}</p>
              </SpeechText>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-14 gap-4">
          <div className="lg:col-span-1 col-span-4">
            <Sidebar lang={lang} dictionary={dictionary} />
          </div>
          <div className="lg:col-span-3 col-span-4 bg-cardBlue lg:p-8 p-4 md:p-6 ">
            <NextUIProvider className="relative">{children}</NextUIProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
