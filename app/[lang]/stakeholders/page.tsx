import CustomAccordion from '@/components/Accordian';
import VideoCard from '@/components/cards/videoCard';
import SpeechText from '@/components/SpeechText';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { assetUrl } from '@/lib/assets';
// import bgImage from '@/public/images/Clippath.png';
// import videoThumbnail from '@/public/images/video-thumbnail.png';
import { AccordionContentProps } from '@/types';
import Image from 'next/image';

const bgImage = assetUrl('/images/Clippath.png');
const videoThumbnail = assetUrl('/images/video-thumbnail.png');

export default async function Stakeholders({
  params = { lang: 'en' },
}: Readonly<{
  params?: { lang: Locale };
}>) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  const accordionContent = [
    {
      title: dictionary?.customers_video_title,
      thumbnail: videoThumbnail,
      video:
        'https://www.youtube.com/embed/MD19g6IVEQY?si=BoWgEpMCbNXBzdwZ&controls=1',
    },
    {
      title: dictionary?.business_partners_video_title,
      thumbnail: videoThumbnail,
      video:
        'https://www.youtube.com/embed/4ss4M2kN6v0?si=fT55i5ykDOTGl3e3&controls=1',
    },
    {
      title: dictionary?.society_video_title,
      thumbnail: videoThumbnail,
      video:
        'https://www.youtube.com/embed/Hi95oWEt9Yk?si=NZw-AOBon7n7IxoQ&controls=1',
    },
    {
      title: dictionary?.stakeholders_video_title,
      thumbnail: videoThumbnail,
      video:
        'https://www.youtube.com/embed/thF7rMWyW7Y?si=hfHElqYaWYCZB0ND&controls=1',
    },
    {
      title: dictionary?.regulators_video_title,
      thumbnail: videoThumbnail,
      video:
        'https://www.youtube.com/embed/39XN8nbgZ_E?si=bTIJEJgSEksQoTPI&controls=1',
    },
  ];

  const employeeContent = [
    {
      title: 'Employee Testimonials - Preveen Benette',
      thumbnail: videoThumbnail,
      video: 'https://www.youtube.com/embed/p9jaRqsn-tQ?controls=1',
    },
    {
      title: 'Employee Testimonials - Priyanka Peiris',
      thumbnail: videoThumbnail,
      video: 'https://www.youtube.com/embed/M7A38Q_LkjA?controls=1',
    },
    {
      title: 'Employee Testimonials - Shiranthi Perera',
      thumbnail: videoThumbnail,
      video: 'https://www.youtube.com/embed/_nNJmjNhlgw?controls=1',
    },
  ];

  const accordionItems = [
    {
      key: 'customers',
      title: dictionary?.accordion_customers_title,
      content: <AccordionContent accordionContent={accordionContent} />,
    },
    {
      key: 'employee',
      title: dictionary?.employee,
      content: <AccordionContent accordionContent={employeeContent} />,
    },
    {
      key: 'business-partners',
      title: dictionary?.accordion_business_partners_title,
      content: <div>{dictionary?.accordion_business_partners_content}</div>,
    },
    {
      key: 'society',
      title: dictionary?.accordion_society_title,
      content: <div>{dictionary?.accordion_society_content}</div>,
    },
    {
      key: 'stakeholders',
      title: dictionary?.accordion_stakeholders_title,
      content: <div>{dictionary?.accordion_stakeholders_content}</div>,
    },
    {
      key: 'regulators',
      title: dictionary?.accordion_regulators_title,
      content: <div>{dictionary?.accordion_regulators_content}</div>,
    },
  ];

  return (
    <main>
      <section className="md:px-5 lg:px-5 px-5">
        <div className="container relative z-10 lg:mt-[66px] mt-10 mb-[42px]">
          <SpeechText>
            <h1 className="font-primary font-black text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[83.2px]">
              {dictionary?.stakeholders_heading}
            </h1>
          </SpeechText>
          <SpeechText>
            <p className="font-secondary font-normal mt-2 text-sm md:text-base lg:text-[1.125rem] lg:leading-[27px] max-w-[670px]">
              {dictionary?.stakeholders_intro}
            </p>
          </SpeechText>
        </div>
        <div className="container pb-10 md:pb-20 lg:pb-40 relative z-10">
          <CustomAccordion accordionItems={accordionItems} />
        </div>
        <div className="lg:-mt-[426px] absolute top-0 z-0 left-0 right-0">
          <Image src={bgImage} alt={'background-image'} className="w-full" />
        </div>
      </section>
    </main>
  );
}

function AccordionContent({
  accordionContent,
}: Readonly<AccordionContentProps>) {
  return (
    <div className="flex flex-col lg:gap-y-10 gap-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        {accordionContent?.map((item, index) => (
          <VideoCard
            key={`${index.toString()}`}
            title={item?.title}
            videoUrl={item?.video}
            thumbnailUrl={item?.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}
