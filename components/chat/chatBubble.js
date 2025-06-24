const ChatBubble = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 38"
      width="44"
      height="38"
    >
      <defs>
        <style>
          {`
            @keyframes bounce {
              0%, 80%, 100% { transform: translateY(0); }
              40% { transform: translateY(-5px); }
            }
            .dot {
              fill: gray; /* Dots in gray */
              animation: bounce 1.4s infinite ease-in-out both;
            }
            .dot1 { animation-delay: -0.32s; }
            .dot2 { animation-delay: -0.16s; }
          `}
        </style>
      </defs>
      <path
        d="M16 0C7.163 0 0 7.163 0 16v20.44h26.32c8.837 0 16-7.163 16-16V16c0-8.837-7.163-16-16-16H16z"
        fill="#d3edff" // Light blue bubble
      />
      <circle className="dot dot1" cx="15" cy="19" r="2" />
      <circle className="dot dot2" cx="22" cy="19" r="2" />
      <circle className="dot dot3" cx="29" cy="19" r="2" />
    </svg>
  );
};

export default ChatBubble;
