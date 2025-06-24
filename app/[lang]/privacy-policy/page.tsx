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
        <div className="container lg:mt-[66px] mt-10 relative flex flex-col gap-8">
          <h1 className="font-primary font-black text-4xl md:text-5xl lg:text-[56px] lg:leading-[83.2px]">
            {dictionary?.privacy_policy_heading}
          </h1>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.introduction}
          </p>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.commitment_to_privacy}
          </p>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.policy_changes_notice}
          </p>
        </div>

        <div className="container lg:mt-[66px] mt-10 relative flex flex-col gap-8">
          <h2 className="font-primary font-black text-xl md:text-3xl lg:text-[46px] lg:leading-[83.2px]">
            {dictionary?.what_we_collect_heading}
          </h2>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.collection_intro}
          </p>
          <ul className="list-disc list-outside font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px] px-4">
            <li>{dictionary?.collection_name_job_title}</li>
            <li>{dictionary?.collection_contact_information}</li>
            <li>{dictionary?.collection_demographic_information}</li>
            <li>{dictionary?.collection_customer_surveys}</li>
            <li>{dictionary?.collection_loan_account_details}</li>
            <li>{dictionary?.collection_third_party_registration}</li>
          </ul>
        </div>

        <div className="container lg:mt-[66px] mt-10 relative flex flex-col gap-8">
          <h2 className="font-primary font-black text-xl md:text-3xl lg:text-[46px] lg:leading-[83.2px]">
            {dictionary?.use_of_information_heading}
          </h2>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.use_information_intro}
          </p>
          <ul className="list-disc list-outside font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px] px-4">
            <li>{dictionary?.use_internal_record_keeping}</li>
            <li>{dictionary?.use_improve_products_services}</li>
            <li>{dictionary?.use_promotional_emails}</li>
            <li>{dictionary?.use_market_research}</li>
          </ul>
        </div>

        <div className="container lg:mt-[66px] mt-10 relative flex flex-col gap-8">
          <h2 className="font-primary font-black text-xl md:text-3xl lg:text-[46px] lg:leading-[83.2px]">
            {dictionary?.security_heading}
          </h2>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.security_commitment}
          </p>
        </div>

        <div className="container lg:mt-[66px] mt-10 relative flex flex-col gap-8">
          <h2 className="font-primary font-black text-xl md:text-3xl lg:text-[46px] lg:leading-[83.2px]">
            {dictionary?.cookies_heading}
          </h2>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.cookies_intro}
          </p>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.cookies_traffic_log}
          </p>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.cookies_overall_use}
          </p>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.cookies_choice}
          </p>
        </div>

        <div className="container lg:mt-[66px] mt-10 relative flex flex-col gap-8">
          <h2 className="font-primary font-black text-xl md:text-3xl lg:text-[46px] lg:leading-[83.2px]">
            {dictionary?.links_to_other_sites_heading}
          </h2>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.links_to_other_sites_notice}
          </p>
        </div>

        <div className="container lg:mt-[66px] mt-10 relative flex flex-col gap-8">
          <h2 className="font-primary font-black text-xl md:text-3xl lg:text-[46px] lg:leading-[83.2px]">
            {dictionary?.app_permissions_heading}
          </h2>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.app_permissions_intro}
          </p>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.app_permissions_phone}
          </p>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.app_permissions_location}
          </p>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.app_permissions_contacts}
          </p>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.app_permissions_sms}
          </p>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.app_permissions_apps}
          </p>
        </div>

        <div className="container lg:mt-[66px] mt-10 relative flex flex-col gap-8">
          <h2 className="font-primary font-black text-xl md:text-3xl lg:text-[46px] lg:leading-[83.2px]">
            {dictionary?.controlling_personal_info_heading}
          </h2>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.controlling_personal_info_intro}
          </p>
          <ul className="list-disc list-outside font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px] px-4">
            <li>{dictionary?.controlling_personal_info_form_option}</li>
            <li>{dictionary?.controlling_personal_info_change_mind}</li>
          </ul>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.controlling_personal_info_no_third_party}
          </p>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.controlling_personal_info_access_request}
          </p>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {dictionary?.controlling_personal_info_correction}
          </p>
        </div>
      </section>
    </main>
  );
}
