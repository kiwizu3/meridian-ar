'use client';

import { useEffect, useRef, useState } from 'react';
import videoThumbnail from '@/public/images/video-frame-home.png';

const HomePageVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const video: any = videoRef.current;
    const playButton = document.querySelector('.snap-motion-item.smi-play');

    if (video && playButton) {
      const handlePlay = () => {
        setIsPlaying(true);
      };

      const handlePauseOrEnded = () => {
        setIsPlaying(false);
      };

      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePauseOrEnded);
      video.addEventListener('ended', handlePauseOrEnded);

      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePauseOrEnded);
        video.removeEventListener('ended', handlePauseOrEnded);
      };
    }
  }, []);

  useEffect(() => {
    const playButton = document.querySelector('.snap-motion-item.smi-play');
    if (playButton) {
      if (isPlaying) {
        playButton.classList.add('hidden');
      } else {
        playButton.classList.remove('hidden');
      }
    }

    const handleAudioPlay = (event: Event) => {
      const video = videoRef.current;
      if (video && event.target !== video && isPlaying) {
        video.pause();
      }
    };

    document.addEventListener('play', handleAudioPlay, true);

    return () => {
      document.removeEventListener('play', handleAudioPlay, true);
    };
  }, [isPlaying]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <video
        id="videoPlayer"
        ref={videoRef}
        className="max-h-[70vh] w-full object-cover appl1-hdvd-xx"
        controls
        poster={videoThumbnail?.src}
      >
        {isClient &&
          typeof window !== 'undefined' &&
          window?.innerWidth > 700 && (
            <>
              <source
                src="https://firebasestorage.googleapis.com/v0/b/todo-app-b057b.appspot.com/o/LB%20Finance%20Annual%20Report%20-%202024-new.mp4?alt=media&token=c9428274-cd10-4c9c-aa73-5ff2df926449"
                type="video/mp4"
              />
              <track
                kind="captions"
                src="https://firebasestorage.googleapis.com/v0/b/todo-app-b057b.appspot.com/o/LB%20Finance%20Annual%20Report%20-%202024-new.mp4?alt=media&token=c9428274-cd10-4c9c-aa73-5ff2df926449"
                srcLang="en"
                label="English captions"
                default
              />
            </>
          )}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HomePageVideo;
