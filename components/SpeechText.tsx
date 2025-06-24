'use client';

import React, { useEffect, useState } from 'react';

interface SpeechTextProps {
  children: React.ReactNode;
}

function speakText(text: string, onEnd: () => void) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = onEnd;
    speechSynthesis.speak(utterance);
  }
}

// function stopSpeech() {
//   if ('speechSynthesis' in window) {
//     speechSynthesis.cancel();
//   }
// }

function stopAllAudio() {
  const audioElements = document.querySelectorAll('audio');
  audioElements?.forEach((audioElement) => {
    if (!audioElement.paused) {
      audioElement.pause(); // Pause the audio
    }
  });
}

const SpeechText: React.FC<SpeechTextProps> = ({ children }: any) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleClick = () => {
    if (!isSpeaking && document?.body?.classList?.contains('text-to-speech')) {
      setIsSpeaking(true);
      stopAllAudio();
      const text =
        children instanceof Array
          ? children.map((child) => child.props.children).join(' ')
          : children.props.children;

      speakText(text, () => setIsSpeaking(false));
    }
    // else {
    //   setIsSpeaking(false);
    //   stopSpeech();
    // }
  };

  useEffect(() => {
    // setTimeout(() => {
    //   stopSpeech();
    // }, 1500);
    const handleScreenReaderDisabled = () => {
      setIsSpeaking(false);
      // stopSpeech();
    };

    window.addEventListener(
      'screen-reader-disabled',
      handleScreenReaderDisabled,
    );

    return () => {
      window.removeEventListener(
        'screen-reader-disabled',
        handleScreenReaderDisabled,
      );
    };
  }, []);

  return (
    <span
      onClick={handleClick}
      style={{ color: isSpeaking ? 'yellow' : 'inherit' }}
    >
      {children}
    </span>
  );
};

export default SpeechText;
