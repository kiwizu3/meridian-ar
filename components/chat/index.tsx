'use client';

import BlurChart from '@/public/images/blur-chart.png';
import LionBlink from '@/public/images/lb_lion_blink.gif';
import LionTalk from '@/public/images/lb_lion_talk.gif';
import { credentials, generateUniqueId } from '@/utility/chatBotEmailUtils';
import { Modal, ModalContent, Tooltip } from '@nextui-org/react';
import clsx from 'clsx';
import Image from 'next/image';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import ChatMessageIcon from '../../public/images/chat-message-icon.png';
import SendIcon from '../../public/images/chat-send-icon.svg';
import VoiceIcon from '../../public/images/chat-voice-icon.svg';
import { ChatCloseIcon, ChatInfoIcon, CloseIcon } from '../icons';
import './chat.css';
import ChatBubble from './chatBubble';
import CustomAudioPlayer from './customAudioPlayer';
import { speechRecognition } from './speechRecognition';

export interface ChatMessageType {
  id: string;
  question: string;
  answer: string;
  htmlCode?: string; // HTML code for iframe rendering
}

export default function Chat() {
  const [open, setOpen] = useState(false);
  const chatWrapRef = useRef<HTMLDivElement | null>(null);
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [singleMessage, setSingleMessage] = useState<string>('');
  const [sessionId, setSessionId] = useState<string>('');
  const hasRun = useRef(false);
  const chatEndRef = useRef<HTMLDivElement>(null); // Ref to scroll to the bottom
  const [isExpanded, setIsExpanded] = useState<string | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null); // Track which audio is playing
  const [openModalId, setOpenModalId] = useState<string | null>(null); // Track which modal is open


  // Toggle play state
  const togglePlay = useCallback((id: string) => {
    setPlayingId((prev) => (prev === id ? null : id));
  }, []);

  // Handle modal open/close based on the message ID
  const handleOpenModal = (id: string) => {
    setOpenModalId(id);
  };

  const handleCloseModal = () => {
    setOpenModalId(null);
  };

  const onToggle = () => setOpen((pv) => !pv);

  const [selectedOption, setSelectedOption] = useState<string>('Info');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    // Scroll to the bottom when messages update
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    // This code makes sure useEffect runs only once
    if (hasRun.current) return;
    hasRun.current = true;

    const startSession = async () => {
      try {
        const response = await fetch("http://75.119.134.134:3008/start_session", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${credentials}`,
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSessionId(data.session_id);
      } catch (error) {
        console.error('Error fetching session:', error);
      }
    };

    startSession();

  }, [open, selectedOption]);

  const handleSend = (message: string) => {
    const messageId = generateUniqueId();

    // Include the selectedOption in the message object as chatType
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: messageId,
        question: message,
        answer: '',
        chatType: selectedOption,
        voice:
        selectedOption === 'Info'
            ? `http://75.119.134.134:3008/chat/generate_audio/${sessionId}`
            : `http://75.119.134.134:3008/chart/generate_audio/${sessionId}`,

      }, // Add chatType
    ]);

    getChatResponse(sessionId, message, messageId);
    setSingleMessage('');
  };

  const getChatResponse = async (
    sessionId: string,
    question: string,
    id: string,
  ) => {
    try {
      if (selectedOption === 'Info') {
        const response = await fetch("http://75.119.134.134:3008/chat", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${credentials}`,
          },
          body: JSON.stringify({
            session_id: sessionId,
            question: question,
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg.id === id ? { ...msg, answer: data.answer } : msg,
          ),
        );
      } else {
        const response = await fetch("http://75.119.134.134:3008/chart", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${credentials}`,
          },
          body: JSON.stringify({
            session_id: sessionId,
            question: question,
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Create a Blob URL for the plot HTML
        if (data.html_code !== '') {
          const blob = new Blob([data.html_code], { type: 'text/html' });
          const url = URL.createObjectURL(blob);
          setMessages((prevMessages) =>
            prevMessages.map((msg) =>
              msg.id === id
                ? { ...msg, answer: data.details, htmlCode: url }
                : msg,
            ),
          );
        } else {
          setMessages((prevMessages) =>
            prevMessages.map((msg) =>
              msg.id === id ? { ...msg, answer: data.details } : msg,
            ),
          );
        }
      }
    } catch (error) {
      console.error('Error fetching session:', error);
    }
  };

  const handleSpeechToText = async () => {
    const response = await speechRecognition();
    if (response) {
      setSingleMessage(response);
      handleSend(response);
    } else {
      console.error('Failed to get response');
    }
  };

  const toggleExpansion = (id: string) => {
    setIsExpanded((prev) => (prev === id ? null : id));
  };

  const TooltipContent = () => {
    return (
      <div className="text-white font-primary max-w-md">
        <p>
          The information provided by this AI chatbot is intended for general
          informational purposes only and should not be considered financial,
          legal, or professional advice. While we strive for accuracy and
          up-to-date content, the chatbot may not reflect the most current
          developments or data. For official and detailed information, please
          refer to our complete annual report and consult with a qualified
          professional for specific inquiries. The use of this chatbot is at
          your own risk, and we assume no liability for any errors or omissions
          in the content provided.
        </p>
      </div>
    );
  };

  return (
    <div className="chat-container">
      <div className="flex flex-col gap-4 items-end">
        {!open && (
          <button type="button" onClick={onToggle}>
            <p className="bg-[#EDF7FF] p-4 rounded-xl w-fit text-[#2F2F2F] font-secondary text-lg font-light">
              Hello!👋🏼 Need Help?
            </p>
          </button>
        )}
        <button
          type="button"
          className="chat-open-btn pl-3"
          onClick={onToggle}
          aria-label="Toggle menu"
        >
          {playingId ? (
            <Image src={LionTalk} alt="icon" />
          ) : (
            <Image src={LionBlink} alt="icon" />
          )}
        </button>
      </div>
      <div className="chat-wrap" data-collapse={open} ref={chatWrapRef}>
        <div className="flex flex-row justify-end bg-[#124c3d] rounded-t-xl py-2 px-4 gap-4">
          <Tooltip
            content={<TooltipContent />}
            placement="bottom-start"
            color="foreground"
          >
            <button type="button">
              <ChatInfoIcon />
            </button>
          </Tooltip>
          <button onClick={onToggle} type="button">
            <ChatCloseIcon />
          </button>
        </div>
        <div className="relative w-full h-full">
          <div className="chat-inner px-6 py-6">
            <div className="messages">
              {/* chat from bot */}
              <div className="bot-chat">
                <div className="bot-icon">
                  <Image src={ChatMessageIcon} alt="chat icon" />
                </div>
                <div className="chat-block">
                  <p className="text font-secondary">
                    Hello! I am LB mascot
                    <br />
                    <br /> How can I help you today?
                  </p>
                </div>
              </div>

              {messages.map((item: any, index: number) => (
                <div key={item.id}>
                  <div className="chat-block break-words">
                    <p className="text font-secondary">
                      {item.question}
                      <span className="type font-secondary">
                        {item.chatType === 'Chart' ? 'Chart' : 'Info'}
                      </span>
                    </p>
                  </div>

                  {!item.answer && !item.htmlCode && <ChatBubble />}

                  {item.answer && !item.htmlCode && (
                    <div className="bot-chat">
                      <div className="bot-icon">
                        <Image src={ChatMessageIcon} alt="chat icon" />
                      </div>
                      <div className="chat-block relative">
                        <p className="text font-secondary">
                          <ReactMarkdown
                            components={{
                              a: ({ node, ...props }) => (
                                <a
                                  {...props}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {props.children}
                                </a>
                              ),
                            }}
                          >
                            {isExpanded === item?.id
                              ? item.answer
                              : `${item.answer.slice(0, 250)}...`}
                          </ReactMarkdown>
                        </p>
                        <div
                          className={`${
                            isExpanded === item?.id || item.answer.length <= 250
                              ? 'hidden'
                              : 'h-14 bg-gradient-to-b from-transparent to-[#D3EDFF] -mt-14 relative z-50'
                          }`}
                        />
                        {item.answer.length > 250 && (
                          <button
                            onClick={() => toggleExpansion(item.id)}
                            className="text-orange mb-2 font-semibold text-sm"
                          >
                            {isExpanded === item.id ? 'See less' : 'See more'}
                          </button>
                        )}

                        {/* Audio player, outside of isExpanded logic */}
                        {index === messages?.length - 1 && (
                          <CustomAudioPlayer
                            src={item?.voice}
                            isPlaying={playingId === item.id} // Check if this audio is playing
                            togglePlay={() => togglePlay(item.id)} // Toggle this audio's play state
                          />
                        )}
                      </div>
                    </div>
                  )}

                  {item.htmlCode && (
                    <div className="bot-chat">
                      <div className="bot-icon">
                        <Image src={ChatMessageIcon} alt="chat icon" />
                      </div>
                      <div className="chat-block relative">
                        <div className="relative rounded-lg">
                          <Image
                            src={BlurChart}
                            alt="chart-preview"
                            className="w-full"
                          />
                          <button
                            className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold bg-black bg-opacity-50 hover:bg-opacity-70"
                            onClick={() => handleOpenModal(item.id)} // Open modal for this chart
                          >
                            Click for enlarged view
                          </button>
                        </div>

                        {/* Modal specific to this message */}
                        <Modal
                          size={'full'}
                          isOpen={openModalId === item.id} // Check if this modal is open
                          onClose={handleCloseModal}
                          closeButton={
                            <CloseIcon className="fill-white hover:fill-black" />
                          }
                          classNames={{
                            base: 'bg-[#124c3d] w-[95%] h-[90%] !mb-[40px]',
                            closeButton:
                              'right-2 top-2 w-12 h-12 hover:bg-white/10',
                          }}
                          placement="bottom"
                        >
                          <ModalContent className="p-10">
                            <div className="h-full md:w-full overflow-x-auto">
                              <iframe
                                src={item.htmlCode}
                                className="md:min-w-full h-full border-none min-w-[800px]"
                              ></iframe>
                              </div>
                          </ModalContent>
                        </Modal>

                        <br />
                        <p className="text font-secondary">
                          <ReactMarkdown
                            components={{
                              a: ({ node, ...props }) => (
                                <a
                                  {...props}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {props.children}
                                </a>
                              ),
                            }}
                          >
                            {isExpanded === item?.id
                              ? item.answer
                              : `${item.answer.slice(0, 250)}...`}
                          </ReactMarkdown>
                        </p>
                        <div
                          className={`${
                            isExpanded === item?.id
                              ? 'hidden'
                              : 'h-14 bg-gradient-to-b from-transparent to-[#D3EDFF] -mt-14 relative z-50'
                          }`}
                        />
                        {item.answer.length > 250 && (
                          <button
                            onClick={() => toggleExpansion(item.id)}
                            className="text-orange my-2 font-semibold text-sm"
                          >
                            {isExpanded === item.id ? 'See less' : 'See more'}
                          </button>
                        )}
                        <br />
                        <div>
                          {index === messages?.length - 1 && (
                            <CustomAudioPlayer
                              src={`http://75.119.134.134:3008/chart/generate_audio/${sessionId}`}
                              isPlaying={playingId === item.id} // Check if this audio is playing
                              togglePlay={() => togglePlay(item.id)} // Toggle this audio's play state
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div ref={chatEndRef} />
          </div>

          <div className="chat-bottom px-4 pb-6">
            <div className="switch-wrap">
              <p className="text mb-3 font-secondary">
                Select the output type you want
              </p>
              <div className="switch-inner">
                <div
                  className={clsx('switch', {
                    active: selectedOption === 'Info',
                  })}
                >
                  <input
                    type="radio"
                    value="Info"
                    checked={selectedOption === 'Info'}
                    onChange={handleChange}
                  />
                  <p className="font-secondary">Info</p>
                </div>
                <div
                  className={clsx('switch', {
                    active: selectedOption === 'Chart',
                  })}
                >
                  <input
                    type="radio"
                    value="Chart"
                    checked={selectedOption === 'Chart'}
                    onChange={handleChange}
                  />
                  <p className="font-secondary">Chart</p>
                </div>
              </div>
            </div>
            <div className="chat-input">
              <input
                placeholder="Type your message"
                className="message-input w-full"
                type="text"
                value={singleMessage}
                onChange={(e) => setSingleMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && singleMessage) {
                    e.preventDefault();
                    handleSend(singleMessage);
                  }
                }}
              />
              <div className="flex items-center">
                <button
                  type="button"
                  className="send-btn"
                  onClick={() => singleMessage && handleSend(singleMessage)}
                >
                  <Image src={SendIcon} alt="chat send" />
                </button>
                <button
                  type="button"
                  className="voice-btn"
                  onClick={handleSpeechToText}
                >
                  <Image src={VoiceIcon} alt="chat send" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
