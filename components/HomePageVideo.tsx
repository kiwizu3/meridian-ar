'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import videoThumbnail from '@/public/images/video-frame-home.png';

const HomePageVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   const video: any = videoRef.current;
  //   const playButton = document.querySelector('.snap-motion-item.smi-play');

  //   if (video && playButton) {
  //     const handlePlay = () => {
  //       setIsPlaying(true);
  //     };

  //     const handlePauseOrEnded = () => {
  //       setIsPlaying(false);
  //     };

  //     video.addEventListener('play', handlePlay);
  //     video.addEventListener('pause', handlePauseOrEnded);
  //     video.addEventListener('ended', handlePauseOrEnded);

  //     return () => {
  //       video.removeEventListener('play', handlePlay);
  //       video.removeEventListener('pause', handlePauseOrEnded);
  //       video.removeEventListener('ended', handlePauseOrEnded);
  //     };
  //   }
  // }, []);

  // useEffect(() => {
  //   const playButton = document.querySelector('.snap-motion-item.smi-play');
  //   if (playButton) {
  //     if (isPlaying) {
  //       playButton.classList.add('hidden');
  //     } else {
  //       playButton.classList.remove('hidden');
  //     }
  //   }

  //   const handleAudioPlay = (event: Event) => {
  //     const video = videoRef.current;
  //     if (video && event.target !== video && isPlaying) {
  //       video.pause();
  //     }
  //   };

  //   document.addEventListener('play', handleAudioPlay, true);

  //   return () => {
  //     document.removeEventListener('play', handleAudioPlay, true);
  //   };
  // }, [isPlaying]);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <div>
        {isClient &&
          typeof window !== 'undefined' &&
          window?.innerWidth > 700 &&
          (isPlaying ? (
            <div>
              <iframe
                width={670}
                height={363}
                src="https://www.youtube-nocookie.com/embed/jXD2ZRcqBOg?si=dfiX5p3i2L7dKxxp&amp;controls=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            window?.innerWidth > 700 && (
              // Show thumbnail with play overlay
              <div
                className="relative cursor-pointer"
                onClick={handlePlayClick}
              >
                <Image
                  src={videoThumbnail}
                  alt="Video thumbnail"
                  width={670}
                  height={363}
                />
              </div>
            )
          ))}
      </div>
    </div>
  );
};

export default HomePageVideo;
