'use client';

import { Download } from '@/components/icons';
import SpeechText from '@/components/SpeechText';
import { DetailCardProps } from '@/types';
import { Radio, RadioGroup } from '@nextui-org/react';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

let currentAudio: HTMLAudioElement | null = null; // Track globally to handle multiple instances

export default function DetailCard(props: Readonly<DetailCardProps>) {
  const dictionary = props?.dictionary;
  const fileDownload = props?.files;

  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
    }
  };

  const getAudioSrc = () => {
    switch (selectedLanguage) {
      case 'si':
        return props?.audioTrack?.si;
      case 'ta':
        return props?.audioTrack?.ta;
      default:
        return props?.audioTrack?.en;
    }
  };

  const handleAudioPlay = () => {
    if (currentAudio && currentAudio !== audioRef.current) {
      currentAudio.pause();
    }
    if (audioRef.current) {
      currentAudio = audioRef.current;
    }
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener('play', handleAudioPlay);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener('play', handleAudioPlay);
      }
    };
  }, [audioRef]);

  return (
    <div className="bg-cardGreen rounded-[21px] py-6 md:pl-10 md:pr-6 px-6 flex flex-col md:flex-row gap-7 max-w-[896px] w-full md:fit-content shadow-[0_15px_10px_15px_rgba(0, 0, 0, 0.07)]">
      <div className="flex md:items-center justify-center">
        <Image
          src={props?.image}
          alt={'avatar'}
          className="w-[80%] h-[80%] object-cover md:w-[357px] md:h-auto"
        />
      </div>
      <div className="md:py-8 lg:py-11 flex gap-4 md:gap-6 lg:gap-8 flex-col font-primary">
        <div className="text-center md:text-left">
          <SpeechText>
            <p className="font-manrope font-extrabold text-[20px] md:text-[30px] md:leading-[40px] leading-[30px] lg:text-[40px] lg:leading-[60px]">
              {props?.title}
            </p>
          </SpeechText>
          <SpeechText>
            <p className="font-manrope font-normal text-[14px] leading-6 md:text-[18px] md:leading-[28px] lg:text-[28px] lg:leading-[50px]">
              {props?.description}
            </p>
          </SpeechText>
        </div>
        <div className="flex gap-4 flex-col">
          <SpeechText>
            <p className="font-secondary font-medium text-sm lg:text-lg leading-[32.4px]">
              {dictionary?.listen_to_the_message}
            </p>
          </SpeechText>
          <div className="flex gap-6 font-primary">
            <RadioGroup
              orientation="horizontal"
              value={selectedLanguage}
              onValueChange={handleLanguageChange}
              className="flex gap-2 items-center"
            >
              {fileDownload?.map((items: any) => (
                <div className="flex gap-2 items-center" key={items?.key}>
                  <p className="text-themeYellow font-medium font-secondary text-sm lg:text-lg">
                    {items?.lang}
                  </p>
                  <Radio
                    value={items?.key}
                    classNames={{ control: 'bg-themeYellow' }}
                    className="custom-radio-yellow"
                    aria-label={items?.lang}
                  />
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="w-full">
            <audio
              controls
              className="w-full"
              ref={audioRef}
              onPlay={handleAudioPlay}
            >
              <source src={getAudioSrc()} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <SpeechText>
            <p className="font-secondary font-medium text-sm lg:text-lg leading-[32.4px]">
              {dictionary?.download_transcript}
            </p>
          </SpeechText>
          <div className="flex md:gap-6 gap-1 flex-row">
            {fileDownload.map((items: any) => (
              <a
                key={items.key}
                href={items.file}
                download
                className="bg-transparent md:gap-3 border-1 border-themeYellow text-themeYellow hover:border-white hover:text-white rounded-lg h-[56px] w-[125px] px-2 font-medium font-secondary text-sm lg:text-lg flex items-center justify-center"
              >
                {items.lang}
                <Download />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
