import BackgroundMusic from '@/components/backgroundMusic';
import FadeInText from '@/components/FadeInText';
import { Html5con, MidFileSearch, Pdf } from '@/components/icons';
import ScrollingText from '@/components/sccrollText';
// import SnapMotionComponent from '@/components/SnapMotion/SnapMotion';
import SpeechText from '@/components/SpeechText';
// import VideoSection from '@/components/VideoSection/VideoSection';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
// import gifImage from '@/public/gif/pyramid.gif';
import PolygonChipNew from '@/public/images/PolygonChipNew.png';
import secTwoImage from '@/public/images/Clippath.png';
import avatar from '@/public/images/gard_prasanna.png';
import avatar2 from '@/public/images/sumith_Avatar.png';
import {
  getAnnualResultTopPotion,
  getHomeVideoPosition,
} from '@/utility/langClassName';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import PdfDownload from '@/components/icons/pdfDownload';

const HomePageVideo = dynamic(() => import('@/components/HomePageVideo'), {
  ssr: false,
});
const HomePageMainVideo = dynamic(
  () => import('@/components/HomePageMainVideo'),
  {
    ssr: false,
  },
);
const DocumentCard = dynamic(() => import('@/components/cards/documentCard'), {
  ssr: false,
});
const HtmlCard = dynamic(() => import('@/components/cards/htmlCard'), {
  ssr: false,
});
const DetailCard = dynamic(() => import('@/components/cards/detailCard'), {
  ssr: false,
});
// const HTMLVersion = dynamic(() => import('@/components/HTMLVersion'), {
//   ssr: false,
// });
// const FadeInRight = dynamic(() => import('@/components/FadeInRight'), {
//   ssr: false,
// });
// const FadeInLeft = dynamic(() => import('@/components/FadeInLeft'), {
//   ssr: false,
// });

export default async function Home({
  params = { lang: 'en' },
}: Readonly<{
  params?: { lang: Locale };
}>) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  const htmlCard = [
    // {
    //   svg: <Html5con/>,
    //   title: dictionary?.pdf_version,
    //   description: dictionary?.the_annual_report_html,
    //   viewTitle: dictionary?.html_version,
    //   link: `/${lang}/report`,
    // },
    {
      svg: <Html5con />,
      title: dictionary?.html_version,
      description: dictionary?.the_annual_report_html,
      viewTitle: dictionary?.view_html,
      link: `/${lang}/report`,
    },
    {
      svg: <PdfDownload className="fill-[#06253A]" />,
      title: dictionary?.generate_report,
      description: dictionary?.the_generate_report_Pdf,
      viewTitle: dictionary?.generate_report,
      link: '/report/generate-report',
    },
  ];

  const documentCard = [
    {
      svg: <Pdf className="fill-[#06253A]" />,
      title: dictionary?.pdf_version,
      description: dictionary?.the_annual_report_pdf,
      viewTitle: dictionary?.view_pdf,
      link: `${process.env.BASE_URL_GRAPH}/annualvideos/annual%20report.pdf`,
    },
    {
      svg: <MidFileSearch />,
      title: dictionary?.flip_book,
      description: dictionary?.the_annual_report_flip,
      viewTitle: dictionary?.view_flip,
      link: 'https://lbfinance.arimac.tech/',
    },
  ];

  const mdFiles = [
    {
      key: 'en',
      file: '/pdf/messages/homePage/md-message-eng.pdf',
      lang: 'English',
    },
    {
      key: 'si',
      file: '/pdf/messages/homePage/mds-message-sinhala.pdf',
      lang: 'සිංහල',
    },
    {
      key: 'ta',
      file: '/pdf/messages/homePage/mds-message-tamil.pdf',
      lang: 'தமிழ்',
    },
  ];

  const coFiles = [
    {
      key: 'en',
      file: '/pdf/messages/homePage/message-from-the-chairman.pdf',
      lang: 'English',
    },
    {
      key: 'si',
      file: '/pdf/messages/homePage/chairmans-message-sinhala.pdf',
      lang: 'සිංහල',
    },
    {
      key: 'ta',
      file: '/pdf/messages/homePage/chairmans-message-tamil.pdf',
      lang: 'தமிழ்',
    },
  ];

  return (
    <main>
      <div className="hidden md:block">
        {/* <SnapMotionComponent duration={1500} easing="in-out-quad" /> */}
      </div>
      <a
        aria-label="cover"
        href="#cover"
        snap-motion-type="scroll"
        snap-motion-id="cover"
        className="hidden md:block"
      />
      <div className="filter-home">
        {/* <div className="md:h-[calc(100vh-3rem)] h-[calc(100vh-10rem)] flex w-full lg:-mt-[95px] -mt-20 relative">
          <div className="absolute top-0 left-0 inset-0">
            <VideoSection />
          </div>
        </div> */}
        {/* <div className="absolute lg:top-[28rem] top-[50rem] hidden md:block">
          <a
            aria-label="about"
            href="#about"
            snap-motion-type="scroll"
            snap-motion-id="about"
          />
        </div> */}

        <div className="h-[calc(100vh-43rem)] md:h-[calc(100vh-30rem)] lg:h-[calc(100vh-23rem)] xl:h-[calc(100vh-6rem)] 2xl:h-[calc(100vh-3rem)]  flex w-full lg:-mt-[95px] -mt-20 justify-center relative rounded-2xl">
          <div className="absolute">
            <div className="mt-[130px] px-4">
              <HomePageMainVideo />
            </div>
          </div>
        </div>
        <div className="absolute lg:top-[28rem] top-[50rem] hidden md:block">
          <a
            aria-label="about"
            href="#about"
            snap-motion-type="scroll"
            snap-motion-id="about"
          />
        </div>

        <section
          style={{
            backgroundImage: `url(${secTwoImage.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
          }}
          className="relative pb-10 lg:pb-[93px] pt-6 md:pt-10 lg:pt-24"
        >
          <div className="items-center gap-14 lg:px-0">
            <div className="pt-4 flex mb-14 flex-col gap-4 lg:-mt-12 -mt-8 relative w-full from-[#0D1019] to-transparent">
              <div className="flex-shrink-0 w-full">
                <div className="container max-w-[1100px] relative z-20">
                  <FadeInText>
                    <SpeechText>
                      <h1 className="font-primary font-black px-3 lg:px-0 text-4xl lg:text-[4rem] lg:leading-[76.8px] text-center lg:pb-4">
                        {dictionary?.mosaic_of_strength}
                      </h1>
                    </SpeechText>
                  </FadeInText>
                  <div
                    className={`absolute hidden md:block text-white ${getAnnualResultTopPotion(lang)}`}
                  >
                    <a
                      aria-label="about-result"
                      href="#about-result"
                      snap-motion-type="scroll"
                      snap-motion-id="about-result"
                    />
                  </div>

                  <FadeInText>
                    <SpeechText>
                      <p className="font-secondary whitespace-pre-line px-4 pt-4 lg:pt-0 lg:px-0 hover:text-shadow opacity-80 font-extralight text-sm lg:text-2xl leading-[33.6px] tracking-[1px] text-center">
                        {dictionary?.mosaic_of_strength_description}
                      </p>
                    </SpeechText>
                    <SpeechText>
                      <p className="font-secondary whitespace-pre-line px-4 pt-4 lg:pt-4 lg:px-0 hover:text-shadow opacity-80 font-extralight text-sm lg:text-2xl leading-[33.6px] tracking-[1px] text-center">
                        {dictionary?.mosaic_of_strength_description_sub}
                      </p>
                    </SpeechText>
                  </FadeInText>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4">
              <FadeInText>
                <div className="bg-cardGreen rounded-[21px] px-7 py-6">
                  <SpeechText>
                    <p className="font-primary font-black text-xl lg:text-2xl text-center">
                      {dictionary?.annual_result}
                    </p>
                  </SpeechText>
                  <div className="pt-[22px] grid lg:grid-cols-2 grid-cols-1 gap-4">
                    {/* <div>
                      <HTMLVersion
                        svg={<Html5con />}
                        link={`/${lang}/report`}
                        description={dictionary?.the_annual_report_html}
                        title={dictionary?.html_version}
                        viewTitle={dictionary?.view_html}
                        dictionary={dictionary}
                      />
                      
                    </div> */}
                    <div className="grid grid-rows-2 gap-4">
                      {htmlCard.map((item, index) => (
                        <div key={`${index.toString()}`}>
                          <HtmlCard
                            svg={item.svg}
                            link={item.link}
                            description={item.description}
                            title={item.title}
                            viewTitle={item?.viewTitle}
                            dictionary={dictionary}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-rows-2 gap-4">
                      {documentCard.map((item, index) => (
                        <div key={`${index.toString()}`}>
                          <DocumentCard
                            svg={item.svg}
                            link={item.link}
                            description={item.description}
                            title={item.title}
                            viewTitle={item?.viewTitle}
                            dictionary={dictionary}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <a
                    aria-label="animate"
                    href="#animate"
                    snap-motion-type="scroll"
                    className="hidden md:block"
                  />
                </div>
              </FadeInText>
            </div>
          </div>
        </section>
        <section className="lg:pt-10 relative" id="polygonSection">
          {/* <a
            aria-label="cover-obj"
            href="#cover-obj"
            snap-motion-type="object"
            snap-motion-id="cover"
            className="left-[50%] top-[0%] hidden md:block"
          />
          <a
            aria-label="about-obj"
            href="#about-obj"
            snap-motion-type="object"
            snap-motion-id="about"
            className="left-[50%] top-[0%] hidden md:block"
          />
          <a
            aria-label="about-result-obj"
            href="#about-result-obj"
            snap-motion-type="object"
            snap-motion-id="about-result"
            className="left-[50%] top-[0%] hidden md:block"
          />
          <a
            aria-label="animate-obj"
            href="#animate-obj"
            snap-motion-type="object"
            snap-motion-id="animate"
            className="left-[50%] bottom-[38%] hidden md:block"
          /> */}
          <div className="flex move-center items-center pb-14 pt-0 lg:pt-28 lg:pb-56">
            <div className="absolute">
              <div className="max-w-[90vw] lg:max-w-none flex">
                {/* <PolygonChip /> */}
                <Image
                  src={PolygonChipNew}
                  alt="background-image"
                  className=""
                />
              </div>
            </div>
            <div className="lg:max-w-[252px] max-w-sm h-auto mt-56" />
            {/* <img
              className="max-w-[200px] h-auto mt-48 md:hidden block"
              src={gifImage.src}
              alt="Polygon GIF"
            /> */}
            <img
              className="max-w-[250px] h-auto relative top-[96px]"
              src="/gif/Lion_pow4.gif"
              alt="Polygon GIF"
            />
          </div>
        </section>

        <section>
          <a
            aria-label="video"
            href="#video"
            snap-motion-type="object"
            snap-motion-id="video"
            className="left-[50%] bottom-[45%] hidden md:block"
          />
          <div className="flex flex-col items-center gap-14 container z-10 relative">
            <FadeInText>
              <SpeechText>
                <h1
                  className={`font-primary font-black text-5xl whitespace-pre-line lg:text-[84px] px-5 lg:px-0 leading-[50px] lg:leading-[111px] text-center break-words ${lang === 'en' ? 'leading-[50px]' : 'leading-[66px]'}`}
                >
                  {dictionary?.Discover_the_essence_of_our_Mosaic}
                </h1>
                <h1
                  className={`font-primary font-black text-5xl lg:text-[84px] lg:leading-[111px] px-5 lg:px-0 text-center bg-gradient-to-r from-[#FADD9A] to-[#73B2C2] bg-clip-text text-transparent break-words ${lang === 'en' ? 'leading-[50px] pb-3' : 'py-3 leading-[66px]'}`}
                >
                  {dictionary?.captivating_video_narrative}
                </h1>
              </SpeechText>
            </FadeInText>
            <a
              aria-label="video-obj"
              href="#video-obj"
              snap-motion-type="scroll"
              // snap-motion-id="video"
              className={`hidden md:block absolute ${getHomeVideoPosition(lang)}`}
            />
            <div>
              {/* <div className="max-h-[70vh] px-4"> */}
              <HomePageVideo />
            </div>
          </div>
          <div className="relative -mt-[18vh] md:-mt-[52vh]">
            <div className="bg-cardGreen h-full w-full pb-10">
              <div className="md:min-h-[52vh] min-h-[18vh]" />
              <div>
                <ScrollingText text={dictionary?.captivating_video_narrative} />
              </div>
            </div>
          </div>
        </section>

        <a
          aria-label="staff-a"
          href="#staff-a"
          snap-motion-type="scroll"
          className="hidden md:block"
        />
        <section className="relative overflow-hidden">
          {/* <FadeInRight> */}
          <img
            src="/images/lion-pow.png"
            className="absolute w-[500px] right-[0] top-[10vw]"
            alt="lion img"
            style={{
              animation: 'fadeInOutLeft 20s ease-out forwards',
            }}
          />
          {/* </FadeInRight> */}
          <div className="relative z-10 flex flex-col gap-14 container px-5 lg:px-0 items-center xl:items-start lg:pb-[100px] pt-8 lg:pt-[173px]">
            <DetailCard
              image={avatar}
              title={dictionary?.chairman_name}
              description={dictionary?.chairman_massage}
              audioTrack={{
                en: '/voice/chairmen-voice.mp3',
                ta: '/voice/chairmen-voice-tamil.mp3',
                si: '/voice/chaiman-voice-sinhala.mp3',
              }}
              dictionary={dictionary}
              files={coFiles}
            />
          </div>
        </section>

        <a
          aria-label="staff-b"
          href="#staff-b"
          snap-motion-type="scroll"
          className="hidden md:block"
        />
        <section className="relative pb-8 md:pb-0 md:pt-[100px]">
          <div className="relative overflow-hidden">
            {/* <FadeInLeft> */}
            <img
              src="/images/lion-pow.png"
              className="absolute w-[500px] left-[0] top-[2vw] rotate-90"
              alt="lion img"
              style={{
                animation: 'fadeInOutRight 20s ease-out forwards',
              }}
            />
            {/* </FadeInLeft> */}
            <div className="relative z-10 flex flex-col items-center xl:items-end gap-14 container px-5 lg:px-0 py-8 lg:py-0">
              <DetailCard
                image={avatar2}
                title={dictionary?.managing_director_name}
                description={dictionary?.managing_director}
                audioTrack={{
                  en: '/voice/md-voice.mp3',
                  ta: '/voice/md-tamil.mp3',
                  si: '/voice/md-voice-sinhala.mp3',
                }}
                dictionary={dictionary}
                files={mdFiles}
              />
            </div>
          </div>
          <div>
            <Image
              src={secTwoImage}
              alt={''}
              className="-mt-[18rem] lg:-mt-[15rem] xl:-mt-96 2xl:-mt-[40rem] w-full h-full lg:-mb-64"
            />
          </div>
        </section>
        <section className="relative">
          <a
            aria-label="footer-b-obj"
            href="#footer-b-obj"
            snap-motion-type="object"
            className="left-[50%] top-[0%] hidden md:block"
          />
        </section>
        <a
          aria-label="footer-obj"
          href="#footer-obj"
          snap-motion-type="scroll"
          className="hidden md:block"
        />
      </div>
      <BackgroundMusic />
    </main>
  );
}
