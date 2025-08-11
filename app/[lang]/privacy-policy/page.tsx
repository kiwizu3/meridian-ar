import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import React from 'react';

export default async function PrivacyPolicy({
  params = { lang: 'en' },
}: Readonly<{
  params?: { lang: Locale };
}>) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  return (
    <main>
      <section className="px-5 flex flex-col gap-4 pb-28 mb-12">
        <h1 className="font-primary font-black text-center text-4xl p-10 md:text-5xl lg:text-[56px] lg:leading-[83.2px]">
          {dictionary?.privacy_policy_topic}
        </h1>
        <div className="container relative flex flex-col gap-8">
          <h1 className="font-primary font-black text-4xl md:text-5xl lg:text-[56px] lg:leading-[83.2px]">
            {dictionary?.privacy_policy_heading}
          </h1>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.introduction}
          </p>
          <div>
            <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
              {dictionary?.privacy_highlights}
            </p>
            <p className="font-secondary font-normal whitespace-pre-line pl-6 text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
              {dictionary?.privacy_highlights_list}
            </p>
          </div>
        </div>

        <div className="container lg:mt-[66px] mt-10 relative flex flex-col gap-8">
          <h2 className="font-primary font-black text-xl md:text-3xl lg:text-[46px] lg:leading-[83.2px]">
            {dictionary?.what_we_collect_heading}
          </h2>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.collection_intro}
          </p>
          <div className="pl-5">
            <ul className="list-disc list-outside font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px] px-4">
              <li>{dictionary?.collection_identification_data}</li>
              <li>{dictionary?.collection_contact_information}</li>
              <li>{dictionary?.collection_professional_data}</li>
              <li>{dictionary?.collection_financial_and_commercial_data}</li>
              <li>{dictionary?.collection_geo_location_data}</li>
              <li>{dictionary?.collection_behavioural_data}</li>
              <li>{dictionary?.collection_personal_relationship_data}</li>
              <li>{dictionary?.collection_communications_data}</li>
              <li>{dictionary?.collection_Special_category_personal_data}</li>
            </ul>
          </div>
        </div>

        <div className="container lg:mt-[66px] mt-10 relative flex flex-col gap-8">
          <h2 className="font-primary font-black text-xl md:text-3xl lg:text-[46px] lg:leading-[83.2px]">
            {dictionary?.data_collection_methods_topic}
          </h2>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.data_collection_methods_intro}
          </p>
          <ul className="list-disc list-outside font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px] px-4">
            <li className="whitespace-pre-line">
              {dictionary?.data_collection_directly_from_you}
            </li>
            <li>{dictionary?.data_collection_from_third_parties}</li>
            <li>{dictionary?.data_collection_from_other_source}</li>
            <li>{dictionary?.data_collection_cookies}</li>
          </ul>
        </div>

        <div className="container lg:mt-[66px] mt-10 relative flex flex-col gap-8">
          <h2 className="font-primary font-black text-xl md:text-3xl lg:text-[46px] lg:leading-[83.2px]">
            {dictionary?.reason_for_collecting_data}
          </h2>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.reason_for_collecting_data_introduction}
          </p>
          <div>
            <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
              {dictionary?.reason_for_collecting_data_highlights}
            </p>
            <p className="font-secondary font-normal whitespace-pre-line pl-6 text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
              {dictionary?.reason_for_collecting_data_highlights_list}
            </p>
          </div>
          <div>
            <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
              {dictionary?.reason_for_collecting_data_highlights2}
            </p>
            <p className="font-secondary font-normal whitespace-pre-line pl-6 text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
              {dictionary?.reason_for_collecting_data_highlights_list2}
            </p>
          </div>
          <div>
            <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
              {dictionary?.reason_for_collecting_data_highlights3}
            </p>
            <p className="font-secondary font-normal whitespace-pre-line pl-6 text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
              {dictionary?.reason_for_collecting_data_highlights_list3}
            </p>
          </div>
          <div>
            <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
              {dictionary?.reason_for_collecting_data_highlights4}
            </p>
            <p className="font-secondary font-normal whitespace-pre-line pl-6 text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
              {dictionary?.reason_for_collecting_data_highlights_list4}
            </p>
          </div>
          <div>
            <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
              {dictionary?.reason_for_collecting_data_highlights5}
            </p>
            <p className="font-secondary font-normal whitespace-pre-line pl-6 text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
              {dictionary?.reason_for_collecting_data_highlights_list5}
            </p>
          </div>
          <div>
            <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
              {dictionary?.reason_for_collecting_data_highlights6}
            </p>
            <p className="font-secondary font-normal whitespace-pre-line pl-6 text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
              {dictionary?.reason_for_collecting_data_highlights_list6}
            </p>
          </div>
          <div>
            <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
              {dictionary?.reason_for_collecting_data_highlights7}
            </p>
            <p className="font-secondary font-normal whitespace-pre-line pl-6 text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
              {dictionary?.reason_for_collecting_data_highlights_list7}
            </p>
          </div>
          <div>
            <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
              {dictionary?.reason_for_collecting_data_highlights8}
            </p>
            <p className="font-secondary font-normal text-sm my-4 md:text-base pl-3 lg:text-[18px] lg:leading-[27px]">
              {dictionary?.reason_for_collecting_data_highlights8_intro}
            </p>
            <p className="font-secondary font-normal whitespace-pre-line pl-6 text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
              {dictionary?.reason_for_collecting_data_highlights_list8}
            </p>
          </div>
        </div>

        <div className="container lg:mt-[66px] mt-10 relative flex flex-col gap-8">
          <h2 className="font-primary font-black text-xl md:text-3xl lg:text-[46px] lg:leading-[83.2px]">
            {dictionary?.share_personal_data}
          </h2>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.share_personal_data_intro}
          </p>
          <div>
            <p className="font-secondary font-normal whitespace-pre-line pl-6 text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
              {dictionary?.share_personal_data_list}
            </p>
          </div>
        </div>

        <div className="container lg:mt-[66px] mt-10 relative flex flex-col gap-8">
          <h2 className="font-primary font-black text-xl md:text-3xl lg:text-[46px] lg:leading-[83.2px]">
            {dictionary?.protecting_personal_data}
          </h2>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.protecting_personal_data_intro}
          </p>
        </div>

        <div className="container lg:mt-[66px] mt-10 relative flex flex-col gap-8">
          <h2 className="font-primary font-black text-xl md:text-3xl lg:text-[46px] lg:leading-[83.2px]">
            {dictionary?.retention_of_personal_data}
          </h2>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.retention_of_personal_data_intro}
          </p>
        </div>

        <div className="container lg:mt-[66px] mt-10 relative flex flex-col gap-8">
          <h2 className="font-primary font-black text-xl md:text-3xl lg:text-[46px] lg:leading-[83.2px]">
            {dictionary?.rights_regarding_personal_data}
          </h2>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.rights_regarding_personal_data_intro}
          </p>
          <div>
            <p className="font-secondary font-normal whitespace-pre-line pl-6 text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
              {dictionary?.rights_regarding_personal_data_list}
            </p>
            <p className="font-secondary font-normal text-sm mt-4 md:text-base lg:text-[18px] lg:leading-[27px]">
              {dictionary?.rights_regarding_personal_data_list_conclusion}
            </p>
          </div>
        </div>

        <div className="container lg:mt-[66px] mt-10 relative flex flex-col ">
          <h2 className="font-primary font-black text-xl md:text-3xl lg:text-[46px] lg:leading-[83.2px]">
            {dictionary?.contact_for_inquiries}
          </h2>
          <p className="font-secondary font-normal text-sm mb-2 md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.contact_for_inquiries_intro}
          </p>
          <p className="font-secondary font-normal text-sm mb-2 whitespace-pre-line md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.contact_for_inquiries_address}
          </p>
          <p className="font-secondary font-normal text-sm mb-2 whitespace-pre-line md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.contact_for_inquiries_contact_details}
          </p>

          <p className="font-secondary font-normal text-sm mb-2 md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.contact_for_inquiries_intro_sub1}
          </p>
          <p className="font-secondary font-normal text-sm mb-2 md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.contact_for_inquiries_intro_sub2}
          </p>
          <p className="font-secondary font-semibold text-lg my-4 md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.contact_for_inquiries_website_disclaimer}
          </p>
          <p className="font-secondary font-normal text-sm mb-2 md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.contact_for_inquiries_website_disclaimer_intro}
          </p>
          <p className="font-secondary font-normal text-sm mb-2 md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.contact_for_inquiries_website_disclaimer_intro_sub}
          </p>
        </div>
      </section>
    </main>
  );
}
