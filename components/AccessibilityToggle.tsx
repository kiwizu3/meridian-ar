'use client';

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AccessibilityIcon } from './icons';
import ContrastIcon from './icons/contrast';
import IncreaseText from './icons/increaseText';
import Saturation from './icons/saturation';
import ScreenReader from './icons/screen-reader';
import SmartContrast from './icons/smartContrast';
import TextAlignIcon from './icons/text-align';
import TextSpacing from './icons/textSpacing';
import TextIncrease from './icons/textIncrease';
import TextDecrease from './icons/textDecrease';
import Reset from './icons/reset';
import Brightness from './icons/brightness';

const AccessibilityActions = Object.freeze({
  INCREASE_TEXT: 'increase-text',
  DECREASE_TEXT: 'decrease-text',
  GRAYSCALE: 'grayscale',
  HIGH_CONTRAST: 'high-contrast',
  NEGATIVE_CONTRAST: 'negative-contrast',
  TEXT_SPACING: 'text-spacing',
  SATURATION: 'saturation',
  READER: 'reader',
  BRIGHTNESS: 'brightness',
  TEXT_ALIGN: 'text-align',
  LINE_HEIGHT: 'line-height',
  RESET: 'reset',
});

function AccessibilityToggle({ lang }: any) {
  const [_isGrayscale, setIsGrayscale] = useState(false);
  const [_isHighContrast, setIsHighContrast] = useState(false);
  const [_isNegativeContrast, setIsNegativeContrast] = useState(false);
  const [_textSize, setTextSize] = useState(100);
  const [_textSpacing, setTextSpacing] = useState(false);
  const [_saturation, setSaturation] = useState(false);
  const [_brightness, setBrightness] = useState(false);
  const [_textAlign, setTextAlign] = useState('text-move-to-normal');
  const [_lineHeight, setLineHeight] = useState(false);

  const pathName = usePathname();

  const handleClick = (key: string) => {
    switch (key) {
      case AccessibilityActions.INCREASE_TEXT:
        handleIncreaseText();
        break;
      case AccessibilityActions.DECREASE_TEXT:
        handleDecreaseText();
        break;
      case AccessibilityActions.GRAYSCALE:
        handleGrayscale();
        break;
      case AccessibilityActions.HIGH_CONTRAST:
        handleHighContrast();
        break;
      case AccessibilityActions.NEGATIVE_CONTRAST:
        handleNegativeContrast();
        break;
      case AccessibilityActions.TEXT_SPACING:
        handleTextSpacing();
        break;
      case AccessibilityActions.SATURATION:
        handleSaturation();
        break;
      case AccessibilityActions.READER:
        handleTextReader();
        break;
      case AccessibilityActions.BRIGHTNESS:
        handleBrightness();
        break;
      case AccessibilityActions.TEXT_ALIGN:
        handleTextAlign();
        break;
      case AccessibilityActions.LINE_HEIGHT:
        handleLineHeight();
        break;
      case AccessibilityActions.RESET:
        handleReset();
        break;
      default:
        break;
    }
  };

  const handleIncreaseText = () => {
    setTextSize((prevSize) => {
      const newSize = prevSize + 10;
      document.documentElement.style.fontSize = `${newSize}%`;
      return newSize;
    });
  };

  const handleDecreaseText = () => {
    setTextSize((prevSize) => {
      const newSize = prevSize - 10;
      document.documentElement.style.fontSize = `${newSize}%`;
      return newSize;
    });
  };

  const handleGrayscale = () => {
    setIsGrayscale((prevState) => !prevState);
    // document.body.classList.toggle('grayscale');
    if (pathName === lang) {
      document?.querySelectorAll('.filter-home').forEach((element) => {
        element.classList.toggle('grayscale');
      });
    } else {
      document?.querySelector('.filter-layout')?.classList.toggle('grayscale');
    }
  };

  const handleHighContrast = () => {
    setIsHighContrast((prevState) => !prevState);
    if (pathName === lang) {
      document?.querySelectorAll('.filter-home').forEach((element) => {
        element.classList.toggle('contrast-200');
      });
    } else {
      document
        ?.querySelector('.filter-layout')
        ?.classList.toggle('contrast-200');
    }
  };

  const handleNegativeContrast = () => {
    setIsNegativeContrast((prevState) => !prevState);
    if (pathName === lang) {
      document?.querySelectorAll('.filter-home').forEach((element) => {
        element.classList.toggle('invert');
      });
    } else {
      document?.querySelector('.filter-layout')?.classList.toggle('invert');
    }
  };

  const handleTextSpacing = () => {
    setTextSpacing((prevState) => !prevState);
    document.body.classList.toggle('tracking-widest');
  };

  const handleBrightness = () => {
    setBrightness((prevState) => !prevState);
    if (pathName === lang) {
      document?.querySelectorAll('.filter-home').forEach((element) => {
        element.classList.toggle('brightness-200');
      });
    } else {
      document
        ?.querySelector('.filter-layout')
        ?.classList.toggle('brightness-200');
    }
  };

  const handleLineHeight = () => {
    setLineHeight((prevState) => !prevState);
    document.body.classList.toggle('increase-line-height');
  };

  const handleTextAlign = () => {
    setTextAlign((prevAlign) => {
      const newAlign =
        prevAlign === 'text-move-to-normal'
          ? 'text-move-to-left'
          : prevAlign === 'text-move-to-left'
            ? 'text-move-to-right'
            : 'text-move-to-normal';

      document.body.classList.remove(
        'text-move-to-normal',
        'text-move-to-left',
        'text-move-to-right',
      );
      document.body.classList.add(`${newAlign}`);

      return newAlign;
    });
  };

  function speakText(text: string) {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    }
  }

  function stopSpeech() {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
    }
  }

  const handleTextReader = () => {
    if (document?.body?.classList?.contains('text-to-speech')) {
      stopSpeech();
      document.body.classList.remove('text-to-speech');
      speakText('Screen reader disabled');

      setTimeout(() => {
        const event = new Event('screen-reader-disabled');
        window.dispatchEvent(event);
      }, 1500);
    } else {
      stopAllAudio();
      speakText('Screen reader enabled');
      document.body.classList.add('text-to-speech');
    }
  };

  function stopAllAudio() {
    const audioElements = document.querySelectorAll('audio');
    audioElements?.forEach((audioElement) => {
      if (!audioElement.paused) {
        audioElement.pause(); // Pause the audio
      }
    });
  }

  const handleSaturation = () => {
    setSaturation((prevState) => !prevState);
    if (pathName === lang) {
      document?.querySelectorAll('.filter-home').forEach((element) => {
        element.classList.toggle('saturate-200');
      });
    } else {
      document
        ?.querySelector('.filter-layout')
        ?.classList.toggle('saturate-200');
    }
  };

  const handleReset = () => {
    if (document?.body?.classList?.contains('text-to-speech')) {
      speakText('Screen reader disabled');
      stopSpeech();
      document.body.classList.remove('text-to-speech');

      setTimeout(() => {
        const event = new Event('screen-reader-disabled');
        window.dispatchEvent(event);
      }, 1500);
    }
    setIsGrayscale(false);
    setIsHighContrast(false);
    setIsNegativeContrast(false);
    setTextSize(100);
    setTextSpacing(false);
    setSaturation(false);
    setBrightness(false);
    setTextAlign('left');
    document?.querySelectorAll('.filter-home').forEach((element) => {
      element.classList.remove('saturate-200');
    });
    document?.querySelectorAll('.filter-home').forEach((element) => {
      element.classList.remove('contrast-200');
    });
    document?.querySelectorAll('.filter-home').forEach((element) => {
      element.classList.remove('invert');
    });
    document?.querySelectorAll('.filter-home').forEach((element) => {
      element.classList.remove('grayscale');
    });
    document?.querySelectorAll('.filter-home').forEach((element) => {
      element.classList.remove('brightness-200');
    });
    document?.querySelector('.filter-apply')?.classList.remove('invert');
    document?.querySelector('.filter-apply')?.classList.remove('saturate-200');
    document?.querySelector('.filter-apply')?.classList.remove('contrast-200');
    document?.querySelector('.filter-apply')?.classList.remove('grayscale');
    document
      ?.querySelector('.filter-apply')
      ?.classList.remove('brightness-200');

    document.body.classList.remove(
      'grayscale',
      'contrast-200',
      'invert',
      'tracking-widest',
      'saturate-200',
      'text-to-speech',
      'brightness-200',
      'text-move-to-normal',
      'text-move-to-left',
      'text-move-to-right',
      'increase-line-height',
    );
    document.documentElement.style.fontSize = '100%';
  };

  const accessibilityItems = [
    {
      key: AccessibilityActions.READER,
      title: 'Screen Reader',
      icon: <ScreenReader />,
    },
    {
      key: AccessibilityActions.INCREASE_TEXT,
      title: 'Increase Text',
      icon: <TextIncrease />,
    },
    {
      key: AccessibilityActions.DECREASE_TEXT,
      title: 'Decrease Text',
      icon: <TextDecrease />,
    },
    {
      key: AccessibilityActions.GRAYSCALE,
      title: 'Grayscale',
      icon: <SmartContrast />,
    },
    {
      key: AccessibilityActions.HIGH_CONTRAST,
      title: 'High Contrast',
      icon: <ContrastIcon />,
    },
    {
      key: AccessibilityActions.NEGATIVE_CONTRAST,
      title: 'Negative Contrast',
      icon: <ContrastIcon />,
    },
    {
      key: AccessibilityActions.TEXT_SPACING,
      title: 'Text Spacing',
      icon: <TextSpacing />,
    },
    {
      key: AccessibilityActions.SATURATION,
      title: 'Saturation',
      icon: <Saturation />,
    },
    {
      key: AccessibilityActions.TEXT_ALIGN,
      title: 'Text Align',
      icon: <TextAlignIcon />,
    },
    {
      key: AccessibilityActions.LINE_HEIGHT,
      title: 'Line Height',
      icon: <TextSpacing />,
    },
    {
      key: AccessibilityActions.BRIGHTNESS,
      title: 'Brightness',
      icon: <Brightness />,
    },
    {
      key: AccessibilityActions.RESET,
      title: 'Reset',
      icon: <Reset />,
    },
  ];

  return (
    <div className="flex items-center">
      <Dropdown
        classNames={{
          content: 'bg-lightBlack rounded-2xl p-4 border-0',
          trigger:
            'data-[hover=true]:bg-transparent px-0 h-auto aria-expanded:opacity-100',
        }}
      >
        <DropdownTrigger>
          <button
            aria-label="accessibility-icon"
            type="button"
            className="text-white opacity-100 focus:outline-none"
          >
            <AccessibilityIcon className="fill-white hover:fill-red transition ease-in-out duration-300" />
          </button>
        </DropdownTrigger>
        <DropdownMenu
          classNames={{
            list: 'grid grid-cols-2 gap-4',
            base: 'max-h-[70vh] overflow-y-scroll custom-scrollbar',
          }}
          aria-label="accessibility-selection"
          closeOnSelect={false}
        >
          {accessibilityItems.map((item) => (
            <DropdownItem
              textValue={item.title}
              className="flex-row data-[hover=true]:bg-blue filter-home bg-cardGreen text-[#F0F0F0] border-[#616161] border rounded-lg px-4 py-2 flex justify-center items-center"
              onClick={() => handleClick(item.key)}
              key={item.title}
            >
              <div className="flex justify-center mb-2">{item.icon}</div>
              <p className="text-center text-base font-medium">{item.title}</p>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default AccessibilityToggle;
