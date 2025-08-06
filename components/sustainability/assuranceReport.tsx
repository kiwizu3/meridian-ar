import Image from 'next/image';
import DownloadPDF from '../../public/images/download-pdf-icon-yellow.svg';
import SpeechText from '../SpeechText';

export default function AssuranceReport({ dictionary }: any) {
  return (
    <div className="assurance-report-wrap">
      <div className="creation-model-wrap !container px-4">
        <div className="creation-model-inner">
          <div className="text-center">
            <SpeechText>
              <p className="sus-heading md:!leading-[6rem] !leading-[3rem]">
                {dictionary?.independent_practitioner}
              </p>
              <p className="gradient-text sus-heading md:!leading-[6rem] !leading-[3rem]">
                {dictionary?.assurance_report}
              </p>
            </SpeechText>
          </div>

          <div className="flex flex-wrap download-pdf-section">
            <div className="text-wrap">
              <SpeechText>
                <p className="p-5 text-center text font-secondary whitespace-pre-line">
                  {dictionary?.independent_practitioners_assurance_report}
                  {'\n'}
                  {dictionary?.fy_2025}
                </p>
              </SpeechText>
              <a
                href="/pdf/Independent-auditors-reports-(page-540).pdf"
                download="Independent-auditors-reports-(page-540)"
                className="sus-btn font-secondary w-max"
              >
                <span>{dictionary?.download_pdf}</span>
                <Image src={DownloadPDF} alt="pdf icon" />
              </a>
            </div>
            <div className="text-wrap">
              <SpeechText>
                <p className="p-5 text-center text font-secondary whitespace-pre-line">
                  {
                    dictionary?.independent_practitioners_assurance_report_to_the_board
                  }
                  {'\n'}
                  {dictionary?.page_112}
                </p>
              </SpeechText>
              <a
                href="/pdf/Independent-auditors-reports-(page-112-114).pdf"
                download="Independent-auditors-reports-(page-112-114)"
                className="sus-btn font-secondary w-max"
              >
                <span>{dictionary?.download_pdf}</span>
                <Image src={DownloadPDF} alt="pdf icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
