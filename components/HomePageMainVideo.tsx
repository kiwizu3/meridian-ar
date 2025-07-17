'use client';

import { useRef, useState } from 'react';

export default function HomePageMainVideo() {

  const firstVideoRef = useRef<HTMLVideoElement | null>(null);
  const secondVideoRef = useRef<HTMLVideoElement | null>(null);
  const [playSecond, setPlaySecond] = useState(false);

  const handleFirstVideoEnd = () => {
    setPlaySecond(true);
    secondVideoRef.current?.play();
  };

  return (
    <div>
        {/* <video
          ref={firstVideoRef}
          src="/videos/LB_lion_animation_v4_intro_SFX.mp4"
          autoPlay
          muted
          playsInline
          onEnded={handleFirstVideoEnd}
          width="640"
          height="480"
          /> */}

      {!playSecond ? (
        <video
          ref={firstVideoRef}
          src="/videos/LB_lion_animation_v4_intro_SFX.mp4"
          autoPlay
          muted
          playsInline
          onEnded={handleFirstVideoEnd}
          className="max-h-[79vh] max-w-[1280px] w-full object-cover appl1-hdvd-xx rounded-2xl"
        />
      ) : (
        <video
          ref={secondVideoRef}
          src="/videos/lion_animation_Loop.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="max-h-[79vh] max-w-[1280px] w-full object-cover appl1-hdvd-xx rounded-2xl"
        />
      )}
    </div>
  );
}
