import { CheckCircle } from '@/components/icons';
import SpeechText from '@/components/SpeechText';
import { DocCardProps } from '@/types';

export default function HtmlCard(props: Readonly<DocCardProps>) {
  return (
    <div className="flex border-1 border-white/20 bg-themeYellow h-full rounded-[9px] p-2">
      <div className="py-3 pr-8 pl-4">{props.svg}</div>
      <div className="py-3">
        <SpeechText>
          <p className="font-primary font-black text-darkBlue text-lg leading-[21.8px] opacity-80">
            {props.title}
          </p>
        </SpeechText>
        <div className="pt-2">
          <SpeechText>
            <p className="font-secondary text-darkBlue text-xs font-light whitespace-pre-line opacity-80">
              {props.description}
            </p>
          </SpeechText>
        </div>
        <div className="pt-7 font-primary">
          <a
            target="_blank"
            href={props.link}
            className="font-secondary font-medium text-sm no-underline text-darkBlue hover:text-white"
          >
            {props?.viewTitle}
          </a>
        </div>
      </div>
      <div className="flex justify-end w-full py-3">
        <CheckCircle />
      </div>
    </div>
  );
}
