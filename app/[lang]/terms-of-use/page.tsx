import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

export default async function TermsOfUse({
  params = { lang: 'en' },
}: Readonly<{
  params?: { lang: Locale };
}>) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  return (
    <section className="px-5 flex flex-col gap-4 pb-28 mb-12">
      <div className="container lg:mt-[66px] mt-10 relative flex flex-col gap-8">
        <h1 className="font-primary font-black text-4xl md:text-5xl lg:text-[56px] lg:leading-[83.2px]">
          {dictionary?.terms_title}
        </h1>
        <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
          {dictionary?.effectiveDate}
        </p>
        <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
          {dictionary?.welcomeMessage}
        </p>
      </div>

      {dictionary?.terms_sections?.map((term: any, index: number) => (
        <div
          key={index}
          className="container lg:mt-[66px] mt-10 relative flex flex-col gap-8"
        >
          <h2 className="font-primary font-semibold text-lg md:text-3xl">
            {index + 1}. {term.title}
          </h2>
          <p className="font-secondary font-normal text-sm md:text-base lg:text-[18px] lg:leading-[27px]">
            {term.description}
          </p>
        </div>
      ))}
    </section>
  );
}
