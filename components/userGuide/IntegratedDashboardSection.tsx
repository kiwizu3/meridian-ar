'use client';

import Image from 'next/image';
import Dashboard1 from '../../public/images/dashboard-1.png';
import Dashboard2 from '../../public/images/dashboard-2.png';
import InformationIcon from '../icons/information';
import SpeechText from '../SpeechText';

export default function IntegratedDashboardSection({ dictionary }: any) {
  return (
    <div className="integrated-dashboard-section">
      <div className="user-guide-container">
        <div className="user-guide-container-inner container mx-auto px-4 lg:px-0">
          <div className="user-guide-heading text-center mb-4">
            <SpeechText>
              <p>{dictionary?.integrated_dashboard_heading}</p>
            </SpeechText>
          </div>
          <div className="font-secondary user-guide-para text-center">
            <SpeechText>
              <p>{dictionary?.integrated_dashboard_description}</p>
            </SpeechText>
          </div>

          <div className="dashboard-box-wrap">
            <div className="box-item">
              <div className="title mb-2 text-center">
                <SpeechText>
                  <p>{dictionary?.financial_dashboard_title}</p>
                </SpeechText>
              </div>
              <div className="para mb-6 text-center">
                <SpeechText>
                  <p>{dictionary?.financial_dashboard_description}</p>
                </SpeechText>
              </div>
              <Image src={Dashboard1} alt="Financial dashboard" />
            </div>
            <div className="box-item">
              <div className="title mb-2 text-center">
                <SpeechText>
                  <p>{dictionary?.non_financial_dashboard_title}</p>
                </SpeechText>
              </div>
              <div className="para mb-6 text-center">
                <SpeechText>
                  <p>{dictionary?.non_financial_dashboard_description}</p>
                </SpeechText>
              </div>
              <Image src={Dashboard2} alt="Non-financial dashboard" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mt-14 rounded-2xl border border-orange p-3 flex gap-4 w-fit max-w-[640px] items-center">
              <div className="p-3 bg-[#0B324D] rounded-full flex justify-center items-center">
                <InformationIcon />
              </div>
              <div>
                <div className="text-gary font-normal text-base font-secondary whitespace-pre-line">
                  <SpeechText>
                    <p>{dictionary?.please_note_that_under_both_above}</p>
                  </SpeechText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
