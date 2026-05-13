'use client';

import Image from 'next/image';
import { assetUrl } from '@/lib/assets';

// import Accessibility from '../../public/images/user-guide/accessibility_tool.png';
// import Speaker from '../../public/images/user-guide/home_page.png';  
const Accessibility = assetUrl('/images/user-guide/accessibility_tool.png');
const Speaker = assetUrl('/images/user-guide/home_page.png');
import SpeechText from '../SpeechText';

export default function GridSection({ dictionary }: any) {
  return (
    <div className="user-guild-grid-section">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-7 gap-6">
          <div className="grid-box-inner md:col-span-3 col-span-7">
            <div className="text-wrap">
              <div className="title mb-2">
                <SpeechText>
                  <p>{dictionary?.speaker_title}</p>
                </SpeechText>
              </div>
              <div className="para font-secondary">
                <SpeechText>
                  <p>{dictionary?.speaker_description}</p>
                </SpeechText>
              </div>
            </div>
            <div className="img-wrap max-w-[408px]">
              <Image src={Speaker} alt="Speaker" />
            </div>
          </div>
          <div className="grid-box-inner md:col-span-4 col-span-7">
            <div className="text-wrap">
              <div className="title mb-2">
                <SpeechText>
                  <p>{dictionary?.language_preference_title}</p>
                </SpeechText>
              </div>
              <div className="para font-secondary">
                <SpeechText>
                  <p>{dictionary?.language_preference_description}</p>
                </SpeechText>
              </div>
            </div>
            <div className="img-wrap max-w-[408px]">
              <Image src={Speaker} alt="Language Preference" />
            </div>
          </div>
          <div className="grid-box-inner col-span-7  md:!pr-0 mb-7 md:mb-[148px]">
            <div className="lg:text-[2rem] text-[1.75rem] font-black leading-[48px] font-primary pr-6">
              <SpeechText>{dictionary?.accessibility_tools_title}</SpeechText>
            </div>
            <div className="grid grid-cols-5 gap-4 md:gap-2 pb-8">
              <div className="text-wrap md:col-span-3 col-span-5">
                <div className="text-[0.875rem] text-gary font-normal leading-[21px] pt-2 font-secondary">
                  <SpeechText>
                    <p className="whitespace-pre-line p-1.5">
                      {dictionary?.accessibility_tools_description}
                    </p>
                  </SpeechText>
                </div>
                {[
                  dictionary?.accessibility_tools_description_list1,
                  dictionary?.accessibility_tools_description_list2,
                  dictionary?.accessibility_tools_description_list3,
                  dictionary?.accessibility_tools_description_list4,
                  dictionary?.accessibility_tools_description_list5,
                  dictionary?.accessibility_tools_description_list6,
                  dictionary?.accessibility_tools_description_list7,
                  dictionary?.accessibility_tools_description_list8,
                  dictionary?.accessibility_tools_description_list9,
                  dictionary?.accessibility_tools_description_list10,
                  dictionary?.accessibility_tools_description_list11,
                  dictionary?.accessibility_tools_description_list12,
                ].some((item) => !!item?.trim()) && (
                  <div className="text-[0.875rem] text-gary font-normal leading-[21px] pt-2 font-secondary">
                    <ul className="list-disc list-outside pl-10 space-y-2">
                      {dictionary?.accessibility_tools_description_list1 && (
                        <li>
                          <SpeechText>
                            {dictionary.accessibility_tools_description_list1}
                          </SpeechText>
                        </li>
                      )}
                      {dictionary?.accessibility_tools_description_list2 && (
                        <li>
                          <SpeechText>
                            {dictionary.accessibility_tools_description_list2}
                          </SpeechText>
                        </li>
                      )}
                      {dictionary?.accessibility_tools_description_list3 && (
                        <li>
                          <SpeechText>
                            {dictionary.accessibility_tools_description_list3}
                          </SpeechText>
                        </li>
                      )}
                      {dictionary?.accessibility_tools_description_list4 && (
                        <li>
                          <SpeechText>
                            {dictionary.accessibility_tools_description_list4}
                          </SpeechText>
                        </li>
                      )}
                      {dictionary?.accessibility_tools_description_list5 && (
                        <li>
                          <SpeechText>
                            {dictionary.accessibility_tools_description_list5}
                          </SpeechText>
                        </li>
                      )}
                      {dictionary?.accessibility_tools_description_list6 && (
                        <li>
                          <SpeechText>
                            {dictionary.accessibility_tools_description_list6}
                          </SpeechText>
                        </li>
                      )}
                      {dictionary?.accessibility_tools_description_list7 && (
                        <li>
                          <SpeechText>
                            {dictionary.accessibility_tools_description_list7}
                          </SpeechText>
                        </li>
                      )}
                      {dictionary?.accessibility_tools_description_list8 && (
                        <li>
                          <SpeechText>
                            {dictionary.accessibility_tools_description_list8}
                          </SpeechText>
                        </li>
                      )}
                      {dictionary?.accessibility_tools_description_list9 && (
                        <li>
                          <SpeechText>
                            {dictionary.accessibility_tools_description_list9}
                          </SpeechText>
                        </li>
                      )}
                      {dictionary?.accessibility_tools_description_list10 && (
                        <li>
                          <SpeechText>
                            {dictionary.accessibility_tools_description_list10}
                          </SpeechText>
                        </li>
                      )}
                      {dictionary?.accessibility_tools_description_list11 && (
                        <li>
                          <SpeechText>
                            {dictionary.accessibility_tools_description_list11}
                          </SpeechText>
                        </li>
                      )}
                      {dictionary?.accessibility_tools_description_list12 && (
                        <li>
                          <SpeechText>
                            {dictionary.accessibility_tools_description_list12}
                          </SpeechText>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
              <div className="md:col-span-2 col-span-5">
                <Image src={Accessibility} alt="Accessibility Tools" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
