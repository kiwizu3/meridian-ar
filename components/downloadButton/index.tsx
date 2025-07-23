import { DownloadButtonProps } from '@/types';
import { Pdf } from '../icons';

export default function DownloadButton(props: DownloadButtonProps) {
  return (
    <div>
      <a href={props?.url} download={props?.downloadText}>
        <div className="flex gap-2 font-secondary font-medium text-base text-themeYellow">
          Download PDF <Pdf className={'fill-themeYellow h-6 w-6'} />
        </div>

        {/* <div className="flex gap-2 items-center font-secondary font-medium text-base text-themeYellow">
  <span>Download PDF</span>
  <img
    src="/images/ant-design_file-pdf-filled.png"
    alt="PDF Icon"
    className="w-5 h-5"
  />
</div> */}

      </a>
    </div>
  );
}
