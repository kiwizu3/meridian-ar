'use client';

import { Radio, RadioGroup } from '@nextui-org/react';
import { useEffect, useRef, useState } from 'react';

let currentAudio: HTMLAudioElement | null = null;

export default function AudioTrack() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
  };

  const getAudioSrc = () => {
    switch (selectedLanguage) {
      case 'si':
        return '/voice/sustainability-voice-si.mp3';
      case 'ta':
        return '/voice/sustainability-voice-ta.mp3';
      default:
        return '/voice/sustainability-voice.mp3';
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
      audioElement.src = getAudioSrc(); // Update the audio source
      if (!audioElement.paused) {
        audioElement.play(); // Restart the audio if it was playing
      }
    }
  }, [selectedLanguage]);

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
    <div>
      <RadioGroup
        defaultValue="en"
        orientation="horizontal"
        className="items-center lg:items-start font-primary radio-sustainability"
        value={selectedLanguage}
        onValueChange={handleLanguageChange}
      >
        <Radio
          classNames={{ control: 'bg-orange' }}
          value="en"
          className="custom-radio font-secondary mr-1 sm:mr-2 lg:mr-3 xl:mr-4"
        >
          English
        </Radio>
        <Radio
          classNames={{ control: 'bg-orange' }}
          value="si"
          className="custom-radio font-secondary mr-1 sm:mr-2 lg:mr-3 xl:mr-4"
        >
          සිංහල
        </Radio>
        <Radio
          classNames={{ control: 'bg-orange' }}
          value="ta"
          className="custom-radio font-secondary mr-1 sm:mr-2 lg:mr-3 xl:mr-4"
        >
          தமிழ்
        </Radio>
      </RadioGroup>

      <div className="mt-4 flex flex-wrap justify-center lg:justify-start">
        <audio controls className="w-[280px] sm:w-[370px]" ref={audioRef}>
          <source src={getAudioSrc()} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}
