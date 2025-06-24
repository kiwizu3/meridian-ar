'use client';

import Image from 'next/image';
import HomeImg from '../../public/images/user-guide-home-section-img.png';
import SpeechText from '../SpeechText';

export default function HomePageSection({ dictionary }: any) {
  return (
    <div className="user-guide-home-section">
      <div className="user-guide-container">
        <div className="user-guide-container-inner">
          <div className="user-guide-heading text-center mb-4 sm:mb-6 container">
            <SpeechText>
              <p>{dictionary?.home_page_heading}</p>
            </SpeechText>
          </div>

          <div className="user-guide-sub-heading text-center mb-4 sm:mb-6 container">
            <SpeechText>
              <p>{dictionary?.annual_report_theme_sub_heading}</p>
            </SpeechText>
          </div>

          <div className="font-secondary para text-center py-1 sm:py-4 !container mx-auto">
            <SpeechText>
              <p>{dictionary?.home_page_description}</p>
            </SpeechText>
          </div>
          <div className="img-wrap">
            <Image src={HomeImg} alt="home page" />
          </div>
        </div>
      </div>
    </div>
  );
}
