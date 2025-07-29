import CardSection from '@/components/cardSection';
import FadeInText from '@/components/FadeInText';
import RectIconGroup from '@/components/icons/rectIconGroup';
import ScrollOurImpact from '@/components/ScrollOurImpact';
import SpeechText from '@/components/SpeechText';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import bgImage from '@/public/images/Clippath.png';
import bgSec2 from '@/public/images/our-impact/our-impact-new-bg1.png';
// import bgSec2 from '@/public/images/our-impact-s2-bg.png';
import bgSec3 from '@/public/images/our-impact/our-impact-new-bg2.png';
import bgSec4 from '@/public/images/our-impact/our-impact-new-bg3.png';
import bgSec5 from '@/public/images/our-impact/our-impact-new-bg4.png';
// import bgSec6 from '@/public/images/our-impact-s6-bg.png';
import bgSec7 from '@/public/images/our-impact/our-impact-new-bg6.png';
import Image from 'next/image';

export default async function OurImpact({
  params: { lang },
}: Readonly<{
  params: { lang: Locale };
}>) {
  const dictionary = await getDictionary(lang);

  const dummyData = [
    {
      title: dictionary?.for_development,
      gradientTitle: dictionary?.education,
      bgImage: bgSec2,
      bgImagePosition: 'right',
      cards: [
        {
          title: dictionary?.tutoring_fee,
          content: dictionary?.tutoring_fee_content,
          subtitle: dictionary?.beneficiaries_53,
          counterText: dictionary?.employee_hours,
          value: 10,
        },
        {
          title: dictionary?.childrens_day,
          content: dictionary?.childrens_day_content,
          subtitle: dictionary?.beneficiaries_112,
          counterText: dictionary?.employee_hours,
          value: 264,
        },
        {
          title: dictionary?.LCES_tailoring_school,
          content: dictionary?.LCES_tailoring_school_content,
          subtitle: dictionary?.beneficiaries_41,
          counterText: dictionary?.employee_hours,
          value: 92,
        },
        {
          title: dictionary?.drug_abuse_prevention,
          content: dictionary?.drug_abuse_prevention_content,
          subtitle: dictionary?.beneficiaries_520,
          counterText: dictionary?.employee_hours,
          value: 177,
        },
        // {
        //   title: dictionary?.donating_dry_rations,
        //   content: dictionary?.donating_dry_rations_content,
        //   subtitle: dictionary?.families_benefited_23,
        //   counterText: dictionary?.employee_hours,
        //   value: 63,
        // },
        // {
        //   title: dictionary?.awareness_on_financial_management,
        //   content: dictionary?.awareness_on_financial_management_content,
        //   subtitle: dictionary?.unlimited_beneficiaries,
        //   counterText: dictionary?.employee_hours,
        //   value: 108,
        // },
        // {
        //   title: dictionary?.pre_schools_development,
        //   content: dictionary?.pre_schools_development_content,
        //   subtitle: dictionary?.unlimited_beneficiaries,
        //   counterText: dictionary?.employee_hours,
        //   value: 2843,
        // },
      ],
    },
    {
      title: dictionary?.employee_well,
      gradientTitle: dictionary?.well_being,
      bgImage: bgSec3,
      bgImagePosition: 'left',
      cards: [
        {
          title: dictionary?.smile_programme,
          content: dictionary?.smile_programme_content,
          subtitle: dictionary?.beneficiaries3,
          counterText: dictionary?.employee_hours,
          value: 8,
        },
        {
          title: dictionary?.free_health_and_vision_clinic,
          content: dictionary?.free_health_and_vision_clinic_content,
          subtitle: dictionary?.beneficiaries_50,
          counterText: dictionary?.employee_hours,
          value: 40,
        },
        {
          title: dictionary?.Weekly_Cross_Fit_and_Boot_Camp,
          content: dictionary?.Weekly_Cross_Fit_and_Boot_Camp_content,
          subtitle: dictionary?.beneficiaries_15,
          counterText: dictionary?.employee_hours,
          value: 35,
        },
      ],
    },
    // {
    //   title: dictionary?.knowledge,
    //   gradientTitle: dictionary?.sharing,
    //   bgImage: bgSec3,
    //   bgImagePosition: 'left',
    //   cards: [
    //     {
    //       title: dictionary?.awareness_on_business_development,
    //       content: dictionary?.awareness_on_business_development_content,
    //       subtitle: dictionary?.unlimited_beneficiaries,
    //       counterText: dictionary?.employee_hours,
    //       value: 864,
    //     },
    //     {
    //       title: dictionary?.women_empowerment,
    //       content: dictionary?.women_empowerment_content,
    //       subtitle: dictionary?.entrepreneurs_benefited_51,
    //       counterText: dictionary?.employee_hours,
    //       value: 401,
    //     },
    //     {
    //       title: dictionary?.business_entrepreneurship_development,
    //       content: dictionary?.business_entrepreneurship_development_content,
    //       subtitle: dictionary?.entrepreneurs_benefited_143,
    //       counterText: dictionary?.employee_hours,
    //       value: 589,
    //     },
    //   ],
    // },
    {
      title: dictionary?.community,
      gradientTitle: dictionary?.wellbeing,
      bgImage: bgSec4,
      bgImagePosition: 'right',
      cards: [
        {
          title: dictionary?.contribution_to_helpAge_eye_hospital,
          content: dictionary?.contribution_to_helpAge_eye_hospital_content,
          subtitle: dictionary?.beneficiaries_10,
          counterText: dictionary?.employee_hours,
          value: 6,
        },
        {
          title: dictionary?.little_hearts_project,
          content: dictionary?.little_hearts_project_content,
          subtitle: dictionary?.beneficiaries_3,
          counterText: dictionary?.employee_hours,
          value: 8,
        },
        {
          title: dictionary?.water_purification_project,
          content: dictionary?.water_purification_project_content,
          subtitle: dictionary?.beneficiaries_400,
          counterText: dictionary?.employee_hours,
          value: 92,
        },
        {
          title: dictionary?.Sihina_dicards_to_dreams,
          content: dictionary?.Sihina_dicards_to_dreams_content,
          subtitle: dictionary?.unlimited_beneficiaries,
          counterText: dictionary?.employee_hours,
          value: 576,
        },
        {
          title: dictionary?.promoting_purposeful_living,
          content: dictionary?.promoting_purposeful_living_content,
          subtitle: dictionary?.unlimited_beneficiaries,
          counterText: dictionary?.employee_hours,
          value: 16,
        },
        {
          title: dictionary?.community_awareness_programmes,
          content: dictionary?.community_awareness_programmes_content,
          subtitle: dictionary?.unlimited_beneficiaries,
          counterText: dictionary?.employee_hours,
          value: 112,
        },
        {
          title: dictionary?.blood_donation_programmes,
          content: dictionary?.blood_donation_programmes_content,
          subtitle: dictionary?.unlimited_beneficiaries,
          counterText: dictionary?.employee_hours,
          value: 195,
        },
      ],
    },
    {
      title: dictionary?.building,
      gradientTitle: dictionary?.partnerships_transformative_csr,
      bgImage: bgSec5,
      bgImagePosition: 'left',
      cards: [
        {
          title: dictionary?.SME_workshop,
          content: dictionary?.SME_workshop_content,
          subtitle: dictionary?.beneficiaries_162,
          counterText: dictionary?.employee_hours,
          value: 32,
        },
        {
          title: dictionary?.cyber_security_awareness,
          content: dictionary?.cyber_security_awareness_content,
          subtitle: dictionary?.unlimited_beneficiaries,
          counterText: dictionary?.employee_hours,
          value: 5393,
        },
        // {
        //   title: dictionary?.donating_firewall,
        //   content: dictionary?.donating_firewall_content,
        //   subtitle: dictionary?.unlimited_beneficiaries,
        //   counterText: dictionary?.employee_hours,
        //   value: 63,
        // },
        // {
        //   title: dictionary?.lb_career_fair,
        //   content: dictionary?.lb_career_fair_content,
        //   subtitle: dictionary?.students_benefited_212,
        //   counterText: dictionary?.employee_hours,
        //   value: 54,
        // },
        // {
        //   title: dictionary?.donating_blood,
        //   content: dictionary?.donating_blood_senehasa,
        //   subtitle: '',
        //   counterText: dictionary?.employee_hours,
        //   value: 136,
        // },
      ],
    },
    // {
    //   title: dictionary?.transformative_business_linked_csr,
    //   gradientTitle: dictionary?.transformative_business_linked_csr_gradient,
    //   bgImage: bgSec6,
    //   bgImagePosition: 'right',
    //   cards: [
    //     {
    //       title: dictionary?.awareness_on_cyber_security,
    //       content: dictionary?.awareness_on_cyber_security_content,
    //       subtitle: dictionary?.unlimited_beneficiaries,
    //       counterText: dictionary?.employee_hours,
    //       value: 88,
    //     },
    //     {
    //       title: dictionary?.lb_auto_review,
    //       content: dictionary?.lb_auto_review_content,
    //       subtitle: dictionary?.unlimited_beneficiaries,
    //       counterText: dictionary?.employee_hours,
    //       value: 384,
    //     },
    //     {
    //       title: dictionary?.career_guidance,
    //       content: dictionary?.career_guidance_content,
    //       subtitle: dictionary?.students_benefited_234,
    //       counterText: dictionary?.employee_hours,
    //       value: 256,
    //     },
    //     {
    //       title: dictionary?.enhancing_digital_literacy,
    //       content: dictionary?.enhancing_digital_literacy_content,
    //       subtitle: dictionary?.unlimited_beneficiaries,
    //       counterText: dictionary?.employee_hours,
    //       value: 74,
    //     },
    //     {
    //       title: dictionary?.health_camps_workshops,
    //       content: dictionary?.conducting_social_media,
    //       subtitle: dictionary?.employees_benefited_383,
    //       counterText: dictionary?.employee_hours,
    //       value: 783,
    //     },
    //     {
    //       title: dictionary?.awareness_on_first_aid,
    //       content: dictionary?.providing_knowledge_and,
    //       subtitle: dictionary?.unlimited_beneficiaries,
    //       counterText: dictionary?.employee_hours,
    //       value: 84,
    //     },
    //   ],
    // },
    {
      title: dictionary?.protecting,
      gradientTitle: dictionary?.environment,
      bgImage: bgSec7,
      bgImagePosition: 'left',
      cards: [
        {
          title: dictionary?.LB_thirasara_piya_satahan,
          content: dictionary?.LB_thirasara_piya_satahan_content,
          subtitle: dictionary?.unlimited_beneficiaries,
          counterText: dictionary?.employee_hours,
          value: 50,
        },
        {
          title: dictionary?.restoration_of_Ittepana_mangrove_forest,
          content: dictionary?.restoration_of_Ittepana_mangrove_forest_content,
          subtitle: dictionary?.unlimited_beneficiaries,
          counterText: dictionary?.employee_hours,
          value: 10,
        },
        {
          title: dictionary?.restoration_of_yagirala_forest_reserve,
          content: dictionary?.restoration_of_yagirala_forest_reserve_content,
          subtitle: dictionary?.unlimited_beneficiaries,
          counterText: dictionary?.employee_hours,
          value: 10,
        },
        {
          title: dictionary?.urban_tree_planting,
          content: dictionary?.urban_tree_planting_content,
          subtitle: dictionary?.unlimited_beneficiaries,
          counterText: dictionary?.employee_hours,
          value: 25,
        },
        {
          title: dictionary?.beach_caretakers_for_sustainable_beaches,
          content: dictionary?.beach_caretakers_for_sustainable_beaches_content,
          subtitle: dictionary?.unlimited_beneficiaries,
          counterText: dictionary?.employee_hours,
          value: 29,
        },
        {
          title: dictionary?.Rehabilitation_of_degraded_coastal_ecosystems,
          content:
            dictionary?.Rehabilitation_of_degraded_coastal_ecosystems_content,
          subtitle: dictionary?.unlimited_beneficiaries,
          counterText: dictionary?.employee_hours,
          value: 64,
        },
        {
          title: dictionary?.wetland_day_celebration,
          content: dictionary?.wetland_day_celebration_content,
          subtitle: dictionary?.unlimited_beneficiaries,
          counterText: dictionary?.employee_hours,
          value: 16,
        },
        {
          title: dictionary?.climate_change_awareness,
          content: dictionary?.climate_change_awareness_content,
          subtitle: dictionary?.beneficiaries_166,
          counterText: dictionary?.employee_hours,
          value: 22,
        },
        // {
        //   title: dictionary?.thuru_wawamu_project,
        //   content: dictionary?.thuru_wawamu_project_content,
        //   subtitle: dictionary?.unlimited_beneficiaries,
        //   counterText: dictionary?.employee_hours,
        //   value: 396,
        // },
        // {
        //   title: dictionary?.gewathu_wagawata_athwelak,
        //   content: dictionary?.gewathu_wagawata_athwelak_content,
        //   subtitle: dictionary?.employees_benefited_54,
        //   counterText: dictionary?.employee_hours,
        //   value: 144,
        // },
        // {
        //   title: dictionary?.lowering_environmental_footprint,
        //   content: dictionary?.lowering_environmental_footprint_content,
        //   subtitle: dictionary?.unlimited_beneficiaries,
        //   counterText: dictionary?.employee_hours,
        //   value: 74,
        // },
        // {
        //   title: dictionary?.awareness_on_national_parks,
        //   content: dictionary?.awareness_on_national_parks_content,
        //   subtitle: dictionary?.unlimited_beneficiaries,
        //   counterText: dictionary?.employee_hours,
        //   value: 1184,
        // },
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
