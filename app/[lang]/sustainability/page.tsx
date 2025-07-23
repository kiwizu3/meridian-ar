import { Download } from '@/components/icons';
import SpeechText from '@/components/SpeechText';
import AssuranceReport from '@/components/sustainability/assuranceReport';
import AudioTrack from '@/components/sustainability/audioTrack';
import Governance from '@/components/sustainability/governance';
import ReportingFrameworks from '@/components/sustainability/reportingFrameworks';
import ValueCreationModel from '@/components/sustainability/valueCreationModel';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import BottomComma from '@/public/images/bottom-comma-green.png';
import bgImage from '@/public/images/Clippath.png';
import TopComma from '@/public/images/top-comma-green.png';
import ProfileImage from '@/public/images/yanika_amarasekera.png';
import ProfileImage2 from '@/public/images/niroshan_udage.png';
import Image from 'next/image';

export default async function sustainability({
  params = { lang: 'en' },
}: Readonly<{
  params?: { lang: Locale };
}>) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const sustainabilityFiles = [
    {
      key: 'en',
      file: '/pdf/messages/sustainability-chair-message.pdf',
      lang: 'English',
    },
    {
      key: 'si',
      file: '/pdf/messages/yanikas-message-sinhala.pdf',
      lang: 'සිංහල',
    },
    {
      key: 'tn',
      file: '/pdf/messages/yanikas-message-tamil.pdf',
      lang: 'தமிழ்',
    },
  ];

  return (
    <div className="relative">
      <div className="lg:-mt-[426px] absolute top-0 z-0 left-0 right-0">
        <Image src={bgImage} alt={'background-image'} className="w-full" />
      </div>

      {/* 1st person  */}
      <div className="!container relative z-10 flex flex-wrap justify-between pt-[98px] px-5 sm:px-10">
        <div className="w-full lg:w-[35%] xl:w-[calc(100% - 723px)] mb-6 xl:mb-0 text-center lg:text-left">
          <div className="w-[225px] h-[225px] overflow-hidden rounded-full mb-[29px] block mx-auto lg:mx-0">
            <Image
              src={ProfileImage}
              className="w-full h-full"
              alt="Ms. Yanika Amarasekera"
            />
          </div>
          <div className="text-[1.125rem] leading-[32px] sm:text-[1.5rem] sm:leading-[42px] xl:text-[2rem] xl:leading-[48px] font-black text-white">
            <SpeechText>
              <p>{dictionary?.yanika_amarasekera}</p>
            </SpeechText>
          </div>
          <div className="text-[1rem] leading-[24px] sm:text-[1.125rem] sm:leading-[32px] xl:text-[1.625rem] xl:leading-[46.8px] font-light text-white font-secondary">
            <SpeechText>
              <p> {dictionary?.chairperson}</p>
            </SpeechText>
          </div>
          <div className="text-[1rem] leading-[24px] sm:text-[1.125rem] sm:leading-[32px] xl:text-[1.375rem] xl:leading-[39.6px] font-light text-white font-secondary">
            <SpeechText>
              <p>{dictionary?.board_sustainability_committee}</p>
            </SpeechText>
          </div>
          <div className="mt-5 sm:mt-7 mb-7 lg:mb-0 text-center lg:text-left">
            <div className="text-base lg:text-[1.125rem] lg:leading-[32.4px] text-white font-secondary mb-4 font-normal">
              <SpeechText>
                <p>{dictionary?.listen_to_the_message}</p>
              </SpeechText>
            </div>
            <AudioTrack />
          </div>
        </div>

        <div className="w-full lg:w-[60%] xl:w-[723px] xl:pr-6">
          <div>
            <Image
              src={TopComma}
              className="w-[30px] lg:w-[44px] h-auto mb-1"
              alt="comma icon"
            />
            <div className="text-[1.125rem] leading-[24px] sm:text-[1.5rem] sm:leading-[32px] xl:text-[2rem] xl:leading-[44.2px] font-light text-shadeWhite font-secondary text-[#E5E5E5]">
              <SpeechText>
                <p>{dictionary?.throughout_the_year}</p>
              </SpeechText>
            </div>
            <Image
              src={BottomComma}
              className="w-[60px] lg:w-[117px] h-auto mt-1 lg:mt-[30px] ml-auto bottom-comma"
              alt="comma icon"
            />
          </div>
          <div>
            <div className="text-base lg:text-[1.125rem] lg:leading-[32.4px] text-white font-secondary mb-4 font-normal">
              <SpeechText>
                <p>{dictionary?.download_transcript}</p>
              </SpeechText>
            </div>
            <div className="flex md:gap-6 gap-2 font-primary">
              {sustainabilityFiles?.map((items: any) => (
                <a
                  key={items?.key}
                  href={items?.file}
                  download
                  className="bg-transparent md:gap-3 border-1 border-themeYellow text-themeYellow hover:border-white hover:text-white rounded-lg h-[56px] w-[125px] px-2 font-medium font-secondary text-sm lg:text-lg flex items-center justify-center"
                >
                  {items?.lang}
                  <Download />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2nd person  */}
      <div className="!container relative z-10 flex flex-wrap justify-between pt-[98px] px-5 sm:px-10">
        <div className="w-full lg:w-[60%] xl:w-[723px] xl:pr-6">
          <div>
            <Image
              src={TopComma}
              className="w-[30px] lg:w-[44px] h-auto mb-1"
              alt="comma icon"
            />
            <div className="text-[1.125rem] leading-[24px] sm:text-[1.5rem] sm:leading-[32px] xl:text-[2rem] xl:leading-[44.2px] font-light text-shadeWhite font-secondary text-[#E5E5E5]">
              <SpeechText>
                <p>{dictionary?.sustainability_is_a_core_driving}</p>
              </SpeechText>
            </div>
            <Image
              src={BottomComma}
              className="w-[60px] lg:w-[117px] h-auto mt-1 lg:mt-[30px] ml-auto bottom-comma"
              alt="comma icon"
            />
          </div>
          <div>
            <div className="text-base lg:text-[1.125rem] lg:leading-[32.4px] text-white font-secondary mb-4 font-normal">
              <SpeechText>
                <p>{dictionary?.download_transcript}</p>
              </SpeechText>
            </div>
            <div className="flex md:gap-6 gap-2 font-primary">
              {sustainabilityFiles?.map((items: any) => (
                <a
                  key={items?.key}
                  href={items?.file}
                  download
                  className="bg-transparent md:gap-3 border-1 border-themeYellow text-themeYellow hover:border-white hover:text-white rounded-lg h-[56px] w-[125px] px-2 font-medium font-secondary text-sm lg:text-lg flex items-center justify-center"
                >
                  {items?.lang}
                  <Download />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[35%] xl:w-[calc(100% - 723px)] mb-6 xl:mb-0 text-center lg:text-left">
          <div className="w-[225px] h-[225px] overflow-hidden rounded-full mb-[29px] block mx-auto lg:mx-0">
            <Image
              src={ProfileImage2}
              className="w-full h-full"
              alt="Mr. Niroshan Udage"
            />
          </div>
          <div className="text-[1.125rem] leading-[32px] sm:text-[1.5rem] sm:leading-[42px] xl:text-[2rem] xl:leading-[48px] font-black text-white">
            <SpeechText>
              <p>{dictionary?.niroshan_udage}</p>
            </SpeechText>
          </div>
          <div className="text-[1rem] leading-[24px] sm:text-[1.125rem] sm:leading-[32px] xl:text-[1.625rem] xl:leading-[46.8px] font-light text-white font-secondary">
            <SpeechText>
              <p> {dictionary?.chairperson}</p>
            </SpeechText>
          </div>
          <div className="text-[1rem] leading-[24px] sm:text-[1.125rem] sm:leading-[32px] xl:text-[1.375rem] xl:leading-[39.6px] font-light text-white font-secondary">
            <SpeechText>
              <p>{dictionary?.sustainability_management_committee}</p>
            </SpeechText>
          </div>
          <div className="mt-5 sm:mt-7 mb-7 lg:mb-0 text-center lg:text-left">
            <div className="text-base lg:text-[1.125rem] lg:leading-[32.4px] text-white font-secondary mb-4 font-normal">
              <SpeechText>
                <p>{dictionary?.listen_to_the_message}</p>
              </SpeechText>
            </div>
            <AudioTrack />
          </div>
        </div>
      </div>

      <ValueCreationModel dictionary={dictionary} />
      <Governance dictionary={dictionary} />
      <ReportingFrameworks dictionary={dictionary} />
      <AssuranceReport dictionary={dictionary} />
    </div>
  );
}
