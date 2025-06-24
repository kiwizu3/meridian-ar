import CardSection from '@/components/cardSection';
import FadeInText from '@/components/FadeInText';
import RectIconGroup from '@/components/icons/rectIconGroup';
import ScrollOurImpact from '@/components/ScrollOurImpact';
import SpeechText from '@/components/SpeechText';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import bgImage from '@/public/images/Clippath.png';
import bgSec2 from '@/public/images/our-impact-s2-bg.png';
import bgSec3 from '@/public/images/our-impact-s3-bg.png';
import bgSec4 from '@/public/images/our-impact-s4-bg.png';
import bgSec5 from '@/public/images/our-impact-s5-bg.png';
import bgSec6 from '@/public/images/our-impact-s6-bg.png';
import bgSec7 from '@/public/images/our-impact-s7-bg.png';
import Image from 'next/image';

export default async function OurImpact({
  params: { lang },
}: Readonly<{
  params: { lang: Locale };
}>) {
  const dictionary = await getDictionary(lang);

  const dummyData = [
    {
      title: dictionary?.access_to,
      gradientTitle: dictionary?.education,
      bgImage: bgSec2,
      bgImagePosition: 'right',
      cards: [
        {
          title: dictionary?.chathurmana_competition,
          content: dictionary?.chathurmana_competition_content,
          subtitle: dictionary?.students_benefited_1203,
          counterText: dictionary?.employee_hours,
          value: 224,
        },
        {
          title: dictionary?.cse_stock_market_challenge,
          content: dictionary?.cse_stock_market_challenge_content,
          subtitle: dictionary?.students_benefited_974,
          counterText: dictionary?.employee_hours,
          value: 237,
        },
        {
          title: dictionary?.donating_computer_resources,
          content: dictionary?.donating_computer_resources_content,
          subtitle: dictionary?.children_benefited_412,
          counterText: dictionary?.employee_hours,
          value: 8106,
        },
        {
          title: dictionary?.awareness_on_education,
          content: dictionary?.awareness_on_education_content,
          subtitle: dictionary?.unlimited_beneficiaries,
          counterText: dictionary?.employee_hours,
          value: 183,
        },
        {
          title: dictionary?.donating_dry_rations,
          content: dictionary?.donating_dry_rations_content,
          subtitle: dictionary?.families_benefited_23,
          counterText: dictionary?.employee_hours,
          value: 63,
        },
        {
          title: dictionary?.awareness_on_financial_management,
          content: dictionary?.awareness_on_financial_management_content,
          subtitle: dictionary?.unlimited_beneficiaries,
          counterText: dictionary?.employee_hours,
          value: 108,
        },
        {
          title: dictionary?.pre_schools_development,
          content: dictionary?.pre_schools_development_content,
          subtitle: dictionary?.unlimited_beneficiaries,
          counterText: dictionary?.employee_hours,
          value: 2843,
        },
      ],
    },
    {
      title: dictionary?.knowledge,
      gradientTitle: dictionary?.sharing,
      bgImage: bgSec3,
      bgImagePosition: 'left',
      cards: [
        {
          title: dictionary?.awareness_on_business_development,
          content: dictionary?.awareness_on_business_development_content,
          subtitle: dictionary?.unlimited_beneficiaries,
          counterText: dictionary?.employee_hours,
          value: 864,
        },
        {
          title: dictionary?.women_empowerment,
          content: dictionary?.women_empowerment_content,
          subtitle: dictionary?.entrepreneurs_benefited_51,
          counterText: dictionary?.employee_hours,
          value: 401,
        },
        {
          title: dictionary?.business_entrepreneurship_development,
          content: dictionary?.business_entrepreneurship_development_content,
          subtitle: dictionary?.entrepreneurs_benefited_143,
          counterText: dictionary?.employee_hours,
          value: 589,
        },
      ],
    },
    {
      title: dictionary?.community,
      gradientTitle: dictionary?.wellbeing,
      bgImage: bgSec4,
      bgImagePosition: 'right',
      cards: [
        {
          title: dictionary?.donating_blood,
          content: dictionary?.donating_blood_content,
          subtitle: '',
          counterText: dictionary?.employee_hours,
          value: 103,
        },
        {
          title: dictionary?.little_hearts_project,
          content: dictionary?.little_hearts_project_content,
          subtitle: '',
          counterText: dictionary?.employee_hours,
          value: 367,
        },
        {
          title: dictionary?.drug_rehabilitation,
          content: dictionary?.drug_rehabilitation_content,
          subtitle: dictionary?.unlimited_beneficiaries,
          counterText: dictionary?.employee_hours,
          value: 127,
        },
        {
          title: dictionary?.donating_wheelchairs,
          content: dictionary?.donating_wheelchairs_content,
          subtitle: dictionary?.patients_benefited_2,
          counterText: dictionary?.employee_hours,
          value: 141,
        },
        {
          title: dictionary?.health_camps_workshops,
          content: dictionary?.health_camps_workshops_content,
          subtitle: dictionary?.employees_benefited_383,
          counterText: dictionary?.employee_hours,
          value: 783,
        },
        {
          title: dictionary?.awareness_on_first_aid,
          content: dictionary?.awareness_on_first_aid_content,
          subtitle: dictionary?.unlimited_beneficiaries,
          counterText: dictionary?.employee_hours,
          value: 84,
        },
      ],
    },
    {
      title: dictionary?.building,
      gradientTitle: dictionary?.partnerships,
      bgImage: bgSec5,
      bgImagePosition: 'left',
      cards: [
        {
          title: dictionary?.donating_firewall,
          content: dictionary?.donating_firewall_content,
          subtitle: dictionary?.unlimited_beneficiaries,
          counterText: dictionary?.employee_hours,
          value: 63,
        },
        {
          title: dictionary?.lb_career_fair,
          content: dictionary?.lb_career_fair_content,
          subtitle: dictionary?.students_benefited_212,
          counterText: dictionary?.employee_hours,
          value: 54,
        },
        {
          title: dictionary?.donating_blood,
          content: dictionary?.donating_blood_senehasa,
          subtitle: '',
          counterText: dictionary?.employee_hours,
          value: 136,
        },
      ],
    },
    {
      title: dictionary?.transformative_business_linked_csr,
      gradientTitle: dictionary?.transformative_business_linked_csr_gradient,
      bgImage: bgSec6,
      bgImagePosition: 'right',
      cards: [
        {
          title: dictionary?.awareness_on_cyber_security,
          content: dictionary?.awareness_on_cyber_security_content,
          subtitle: dictionary?.unlimited_beneficiaries,
          counterText: dictionary?.employee_hours,
          value: 88,
        },
        {
          title: dictionary?.lb_auto_review,
          content: dictionary?.lb_auto_review_content,
          subtitle: dictionary?.unlimited_beneficiaries,
          counterText: dictionary?.employee_hours,
          value: 384,
        },
        {
          title: dictionary?.career_guidance,
          content: dictionary?.career_guidance_content,
          subtitle: dictionary?.students_benefited_234,
          counterText: dictionary?.employee_hours,
          value: 256,
        },
        {
          title: dictionary?.enhancing_digital_literacy,
          content: dictionary?.enhancing_digital_literacy_content,
          subtitle: dictionary?.unlimited_beneficiaries,
          counterText: dictionary?.employee_hours,
          value: 74,
        },
        {
          title: dictionary?.health_camps_workshops,
          content: dictionary?.conducting_social_media,
          subtitle: dictionary?.employees_benefited_383,
          counterText: dictionary?.employee_hours,
          value: 783,
        },
        {
          title: dictionary?.awareness_on_first_aid,
          content: dictionary?.providing_knowledge_and,
          subtitle: dictionary?.unlimited_beneficiaries,
          counterText: dictionary?.employee_hours,
          value: 84,
        },
      ],
    },
    {
      title: dictionary?.protecting,
      gradientTitle: dictionary?.environment,
      bgImage: bgSec7,
      bgImagePosition: 'left',
      cards: [
        {
          title: dictionary?.thuru_wawamu_project,
          content: dictionary?.thuru_wawamu_project_content,
          subtitle: dictionary?.unlimited_beneficiaries,
          counterText: dictionary?.employee_hours,
          value: 396,
        },
        {
          title: dictionary?.gewathu_wagawata_athwelak,
          content: dictionary?.gewathu_wagawata_athwelak_content,
          subtitle: dictionary?.employees_benefited_54,
          counterText: dictionary?.employee_hours,
          value: 144,
        },
        {
          title: dictionary?.lowering_environmental_footprint,
          content: dictionary?.lowering_environmental_footprint_content,
          subtitle: dictionary?.unlimited_beneficiaries,
          counterText: dictionary?.employee_hours,
          value: 74,
        },
        {
          title: dictionary?.awareness_on_national_parks,
          content: dictionary?.awareness_on_national_parks_content,
          subtitle: dictionary?.unlimited_beneficiaries,
          counterText: dictionary?.employee_hours,
          value: 1184,
        },
      ],
    },
  ];

  return (
    <main>
      <section className="lg:px-0 px-5">
        <div className="container z-10 relative pt-[70px] md:pt-[100px] lg:pt-[138px] max-w-[734px]">
          <FadeInText>
            <div className="font-primary font-black text-4xl md:text-5xl lg:text-[4rem] !leading-[1.5] text-center">
              <SpeechText>
                <p>{dictionary?.glimpse_of_what_we_did}</p>
              </SpeechText>
            </div>
          </FadeInText>
        </div>
        <div className="h-[250px] lg:h-[508px] w-full flex justify-center items-center our-impact-img">
          <RectIconGroup />
        </div>
        <div className="lg:-mt-[426px] absolute top-0 z-0 left-0 right-0">
          <Image src={bgImage} alt={'background-image'} className="w-full" />
        </div>
      </section>

      <div className="flex flex-col gap-[100px] md:gap-[130px] lg:gap-[150px] xl:gap-[199px]">
        {dummyData?.map((sections: any, index) => (
          <section key={index}>
            <CardSection
              cards={sections?.cards}
              title={sections?.title}
              gradientTitle={sections?.gradientTitle}
              bgImage={sections?.bgImage}
              bgImagePosition={sections?.bgImagePosition}
              lang={lang}
            />
          </section>
        ))}
      </div>
      <ScrollOurImpact />
    </main>
  );
}
