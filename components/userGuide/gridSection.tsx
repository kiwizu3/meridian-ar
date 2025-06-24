'use client';

import Image from 'next/image';
import Accessibility from '../../public/images/accessibility-tools-screen.png';
import Speaker from '../../public/images/speaker-screen-img.png';
import SpeechText from '../SpeechText';

export default function GridSection({ dictionary }: any) {
  return (
    <div className="user-guild-grid-section">
      <div className="container mx-auto px-4 lg:px-0">
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
          <div className="grid-box-inner col-span-7  md:!pr-0 mb-7 md:mb-[348px]">
            <div className="lg:text-[2rem] text-[1.75rem] font-black leading-[48px] font-primary pr-6">
              <SpeechText>
                <h2>{dictionary?.accessibility_tools_title}</h2>
              </SpeechText>
            </div>
            <div className="grid grid-cols-5 gap-4 md:gap-2 pb-8">
              <div className="text-wrap md:col-span-3 col-span-5">
                <div className="text-[0.875rem] text-gary font-normal leading-[21px] pt-2 font-secondary">
                  <SpeechText>
                    <p>{dictionary?.accessibility_tools_description}</p>
                  </SpeechText>
                </div>
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
