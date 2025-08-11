import React from "react";
import { IconProps } from '@/types';

function Facebook(props:IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <path
        fill=""
        d="M24.894 21.306l.57-3.62h-3.51V15.33c0-.99.49-1.957 2.057-1.957h1.618V10.29a19.61 19.61 0 00-2.85-.243c-2.889 0-4.775 1.737-4.775 4.877v2.761H14.8v3.621h3.203v8.759h3.95v-8.759h2.94z"
      ></path>
    </svg>
  );
}

export default Facebook;
