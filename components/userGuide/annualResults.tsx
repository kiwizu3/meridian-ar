'use client';

import Image from 'next/image';

import { assetUrl } from '@/lib/assets';

// import Icon2 from '../../public/images/annual-results-html-icon-new.svg';
// import Icon1 from '../../public/images/annual-results-pdf-icon-new.svg';
// import Icon3 from '../../public/images/annual-results-search-icon-new.svg';
import SpeechText from '../SpeechText';

const Icon2 = assetUrl('/images/annual-results-html-icon-new.svg');
const Icon1 = assetUrl('/images/annual-results-pdf-icon-new.svg');
const Icon3 = assetUrl('/images/annual-results-search-icon-new.svg');


export default function AnnualResults({ dictionary }: any) {
  return (
    <div className="annual-results-section">
      <div className="user-guide-container">
        <div className="user-guide-container-inner container mx-auto px-5">
          <div className="user-guide-heading text-center mb-4 sm:mb-6">
            <SpeechText>
              <h1>{dictionary?.annual_results_heading}</h1>
            </SpeechText>
          </div>
          <div className="user-guide-para text-center font-secondary">
            <SpeechText>
              <p>{dictionary?.annual_results_description}</p>
            </SpeechText>
          </div>
          <div className="annual-results-box-wrap">
            <div className="annual-results-box md:min-h-[276px] h-auto">
              <div className="icon">
                <Image src={Icon1} alt="icon" />
              </div>
              <div className="heading mb-1">
                <SpeechText>
                  <p>{dictionary?.pdf_version_heading}</p>
                </SpeechText>
              </div>
              <div className="para font-secondary">
                <SpeechText>
                  <p>{dictionary?.pdf_version_description}</p>
                </SpeechText>
              </div>
            </div>

            <div className="annual-results-box md:min-h-[276px] h-auto">
              <div className="icon">
                <Image src={Icon2} alt="icon" />
              </div>
              <div className="heading mb-1">
                <SpeechText>
                  <p>{dictionary?.html_version_heading}</p>
                </SpeechText>
              </div>
              <div className="para font-secondary">
                <SpeechText>
                  <p>{dictionary?.html_version_description}</p>
                </SpeechText>
              </div>
            </div>

            <div className="annual-results-box md:min-h-[276px] h-auto">
              <div className="icon">
                <Image src={Icon3} alt="icon" />
              </div>
              <div className="heading mb-1">
                <SpeechText>
                  <p>{dictionary?.flip_book_heading}</p>
                </SpeechText>
              </div>
              <div className="para font-secondary">
                <SpeechText>
                  <p>{dictionary?.flip_book_description}</p>
                </SpeechText>
              </div>
            </div>

            <div className="annual-results-box md:min-h-[276px] h-auto">
              <div className="icon">
                <Image src={Icon3} alt="icon" />
              </div>
              <div className="heading mb-1">
                <SpeechText>
                  <p>{dictionary?.annual_report_video_heading}</p>
                </SpeechText>
              </div>
              <div className="para font-secondary">
                <SpeechText>
                  <p>{dictionary?.annual_report_video_description}</p>
                </SpeechText>
              </div>
            </div>
            <div className="annual-results-box md:min-h-[276px] h-auto">
              <div className="icon">
                <Image src={Icon3} alt="icon" />
              </div>
              <div className="heading mb-1">
                <SpeechText>
                  <p>{dictionary?.Create_Your_Own_Report}</p>
                </SpeechText>
              </div>
              <div className="para font-secondary">
                <SpeechText>
                  <p>{dictionary?.Create_Your_Own_Report_description}</p>
                </SpeechText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
