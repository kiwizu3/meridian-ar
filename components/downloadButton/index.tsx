import { DownloadButtonProps } from '@/types';
import { Pdf } from '../icons';

export default function DownloadButton(props: DownloadButtonProps) {
  return (
    <div>
      <a href={props?.url} download={props?.downloadText}>
        <div className="flex gap-2 font-secondary font-medium text-base text-orange">
          Download PDF <Pdf className={'fill-orange h-6 w-6'} />
        </div>
      </a>
    </div>
  );
}
