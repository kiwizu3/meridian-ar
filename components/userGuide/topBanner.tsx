'use client';

import Image from 'next/image';
import { assetUrl } from '@/lib/assets';
const BannerImg = assetUrl('/images/user-guide-banner-img.png');
// import BannerImg from '../../public/images/user-guide-banner-img.png';
import SpeechText from '../SpeechText';

export default function TopBanner({ dictionary }: any) {
  return (
    <div className="bg-[url('/images/user-guide-background.png')] md:mb-52 pm-20 px-5">
      <div className="user-guide-container container mx-auto user-guide-banner">
        <div className="user-guide-container-inner lg:px-0 px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="text-wrap">
              <div className="heading mb-2">
                <SpeechText>
                  <h1>{dictionary?.heading}</h1>
                </SpeechText>
              </div>
              <div className="para font-secondary">
                <SpeechText>
                  <p>{dictionary?.welcome_message}</p>
                </SpeechText>
              </div>
              <div className="para font-secondary">
                <SpeechText>
                  <p>{dictionary?.user_guide_description}</p>
                </SpeechText>
              </div>

              <div className="para font-secondary">
                <SpeechText>
                  <p>{dictionary?.micro_site_overview}</p>
                </SpeechText>
              </div>
            </div>
            <div className="img-wrap">
              <Image src={BannerImg} alt="banner image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
