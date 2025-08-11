'use client';

import { memo, useRef, useState } from 'react';
import { PauseIcon, WaveIcon } from '../icons';

interface AudioPlayerProps {
  src: string;
  isPlaying: boolean;
  togglePlay: () => void;
}

const CustomAudioPlayer = ({ src, togglePlay }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isStart, setIsStart] = useState(false);

  const handleOnEnded = () => {
    setIsDisabled(true);
    setIsStart(false);
    togglePlay();
  };

  return (
    !isDisabled && (
      <div className="flex items-center justify-center p-2  rounded-lg border-2 border-orange">
        <button
          onClick={() => {
            setIsStart((prev) => !prev),
              togglePlay(),
              isStart && setIsDisabled(true);
          }}
          className="text-orange font-semibold text-base"
          disabled={isDisabled}
        >
          <div className="flex gap-2">
            {isStart ? <PauseIcon /> : <WaveIcon />}
            {isStart ? 'Stop' : 'Read me'}
          </div>
        </button>
        {isStart && (
          <audio ref={audioRef} autoPlay src={src} onEnded={handleOnEnded} />
        )}
      </div>
    )
  );
};

export default memo(CustomAudioPlayer);