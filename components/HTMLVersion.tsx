import { CheckCircle } from '@/components/icons';
import { DocCardProps } from '@/types';
import SpeechText from './SpeechText';
import Link from 'next/link';

export default function HTMLVersion(props: Readonly<DocCardProps>) {
  return (
    <div className="border-1 border-white/20 bg-themeYellow h-full flex flex-col justify-between rounded-[9px] p-4">
      <div>
        <div className="flex justify-between">
          <SpeechText>
            <h2 className="pb-3 pr-8">{props.svg}</h2>
          </SpeechText>
          <CheckCircle />
        </div>
        <div className="py-3 w-full pl-5">
          <SpeechText>
            <p className="font-primary font-black text-darkBlue text-2xl leading-[21.8px] opacity-80">
              {props.title}
            </p>
          </SpeechText>
          <div className="pt-2">
            <SpeechText>
              <p className="font-secondary text-base text-darkBlue whitespace-pre-line font-light opacity-80">
                {props.description}
              </p>
            </SpeechText>
          </div>
        </div>
      </div>
      <div>
        <div className="md:pt-7 p-2 flex md:justify-end md:items-end items-start font-primary">
          <Link prefetch={false}
            href={props.link}
            className="font-secondary hover:text-white font-medium text-lg no-underline text-darkBlue rounded-lg border p-4 border-darkBlue hover:border-white"
          >
            {props?.viewTitle}
          </Link>
        </div>
      </div>
    </div>
  );
}
