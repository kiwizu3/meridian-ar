'use client';

import Image from 'next/image';
import { assetUrl } from '@/lib/assets';
// import BackImg from '../../public/images/message-chairman-back-img.png';
const BackImg = assetUrl('/images/message-chairman-back-img.png');

import SpeechText from '../SpeechText';

export default function MessageChairman({ dictionary }: any) {
  return (
    <div className="message-chairman-section">
      <div className="user-guide-container">
        <div className="user-guide-container-inner container mx-auto">
          <div className="user-guide-heading text-center mb-4">
            <SpeechText>
              <p className="whitespace-pre-line">
                {dictionary?.chairman_heading}
                {'\n'}
                {dictionary?.sub_heading}
              </p>
            </SpeechText>
          </div>
          <div className="font-secondary para text-center">
            <SpeechText>
              <p>{dictionary?.description}</p>
            </SpeechText>
          </div>
        </div>
      </div>
      <Image src={BackImg} className="back-img" alt="Messages from Chairman" />
    </div>
  );
}
