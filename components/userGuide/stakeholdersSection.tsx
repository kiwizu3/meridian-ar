'use client';

import Image from 'next/image';
import SmartAIImg from '../../public/images/user-guide/smart box.png';
import StakeholdersImg from '../../public/images/user-guide/stakeholder.png';
import ConnectImg from '@/public/images/user-guide/connect.png';
import OurImpactImg from '../../public/images/user-guide/our_impact.png';
import SpeechText from '../SpeechText';

export default function StakeholdersSection({ dictionary }: any) {
  return (
    <div className="stakeholders-section">
      <div className="stakeholders-block-wrap">
        <div className="stakeholders-block">
          <div className="text-wrap">
            <div className="text-wrap-inner">
              <div className="user-guide-heading mb-1 sm:md-4">
                <SpeechText>
                  <p>{dictionary?.stakeholders_title}</p>
                </SpeechText>
              </div>
              <div className="font-secondary para">
                <SpeechText>
                  <p>{dictionary?.stakeholders_description}</p>
                </SpeechText>
              </div>
            </div>
          </div>
          <div className="img-wrap right-align">
            <Image src={StakeholdersImg} alt="Stakeholders" />
          </div>
        </div>

        <div className="stakeholders-block">
          <div className="img-wrap">
            <Image src={OurImpactImg} alt="Our Impact" />
          </div>
          <div className="text-wrap">
            <div className="text-wrap-inner">
              <div className="user-guide-heading mb-1 sm:md-4">
                <SpeechText>
                  <p>{dictionary?.our_impact_heading}</p>
                </SpeechText>
              </div>
              <div className="font-secondary para">
                <SpeechText>
                  <p className="whitespace-pre-line">
                    {dictionary?.our_impact_description}
                    {'\n'}
                    {'\n'}
                    {dictionary?.our_impact_description_sub}
                  </p>
                </SpeechText>
              </div>
            </div>
          </div>
        </div>

        <div className="stakeholders-block">
          <div className="text-wrap">
            <div className="text-wrap-inner">
              <div className="user-guide-heading mb-1 sm:md-4">
                <SpeechText>
                  <p>{dictionary?.connect_heading}</p>
                </SpeechText>
              </div>
              <div className="font-secondary para">
                <SpeechText>
                  <p className="whitespace-pre-line">
                    {dictionary?.connect_description}
                    {'\n'}
                    {dictionary?.connect_description_sub}
                  </p>
                </SpeechText>
              </div>
            </div>
          </div>
          <div className="img-wrap right-align">
            <Image src={ConnectImg} alt="Connect" className="w-full" />
          </div>
        </div>

        <div className="stakeholders-block">
          <div className="img-wrap">
            <Image src={SmartAIImg} alt="Smart AI" />
          </div>
          <div className="text-wrap">
            <div className="text-wrap-inner">
              <div className="user-guide-heading mb-1 sm:md-4">
                <SpeechText>
                  <p>{dictionary?.smart_ai_chatbot_heading}</p>
                </SpeechText>
              </div>
              <div className="font-secondary para">
                <SpeechText>
                  <p className="whitespace-pre-line">
                    {dictionary?.we_have_introduced_a_smart_ai}
                    {'\n'}
                    {'\n'}
                    {dictionary?.we_have_introduced_a_smart_ai_sub}
                  </p>
                </SpeechText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
