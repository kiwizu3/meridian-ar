import {
  SpeechConfig,
  AudioConfig,
  SpeechRecognizer,
  SpeechRecognitionResult,
} from 'microsoft-cognitiveservices-speech-sdk';

const speechConfig = SpeechConfig.fromSubscription(
  process.env.NEXT_PUBLIC_SPEECH_KEY as string,
  process.env.NEXT_PUBLIC_SPEECH_REGION as string,
);
speechConfig.speechRecognitionLanguage = 'en-US';

const audioConfig = AudioConfig.fromDefaultMicrophoneInput();
const recognizer = new SpeechRecognizer(speechConfig, audioConfig);

export const speechRecognition = async (): Promise<string> => {
  return new Promise((resolve, reject) => {
    recognizer.recognizeOnceAsync(
      (result: SpeechRecognitionResult) => {
        if (result) {
          console.log('Recognition result:', result.text);
          console.log('Full result object:', JSON.stringify(result, null, 2));
          resolve(result.text || 'No speech detected');
        } else {
          reject(new Error('Speech recognition result is undefined'));
        }
      },
      (error) => {
        console.error('Error during speech recognition:', error);
        reject(error);
      },
    );
  });
};
