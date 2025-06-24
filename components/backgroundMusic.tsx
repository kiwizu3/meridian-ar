'use client';

import { useEffect, useRef, useState } from 'react';
import ScreenReader from './icons/screen-reader';
import Muted from './icons/sound-mute';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    setIsPlaying((prev) => {
      const newState = !prev;
      if (audioRef.current) {
        newState ? audioRef.current.play() : audioRef.current.pause();
      }
      return newState;
    });
  };

  useEffect(() => {
    if (audioRef?.current) {
      const audioElement = audioRef.current;

      const handlePause = () => {
        setIsPlaying(false);
      };

      const handlePlay = () => {
        setIsPlaying(true);
      };

      audioElement.addEventListener('pause', handlePause);
      audioElement.addEventListener('play', handlePlay);

      return () => {
        audioElement.removeEventListener('pause', handlePause);
        audioElement.removeEventListener('play', handlePlay);
      };
    }
  }, []);

  useEffect(() => {
    const handleMediaPlay = (event: Event) => {
      if (
        audioRef.current &&
        (event.target instanceof HTMLAudioElement ||
          (event.target instanceof HTMLVideoElement &&
            event.target.id === 'videoPlayer')) &&
        event.target !== audioRef.current &&
        isPlaying
      ) {
        setIsPlaying(false);
        audioRef.current.pause();
      }
    };

    document.addEventListener('play', handleMediaPlay, true);

    return () => {
      document.removeEventListener('play', handleMediaPlay, true);
    };
  }, [isPlaying]);

  return (
    <div>
      <button
        className="filter-home fixed z-50 bottom-9 md:bottom-[50px] left-7 md:left-[50px] bg-[#061B29] w-[68px] h-[68px] flex speaker-icon-center items-center rounded-full"
        aria-labelledby="music"
        aria-label="background-music"
        type="button"
        onClick={togglePlay}
      >
        {isPlaying ? <ScreenReader size={20} /> : <Muted size={20} />}
      </button>
      <audio loop ref={audioRef} autoPlay>
        <source src="/music/dancing-on-air.mp3" type="audio/mpeg" />
        <track
          src="/music/dancing-on-air.mp3"
          kind="captions"
          srcLang="en"
          label="English"
          default
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default BackgroundMusic;
