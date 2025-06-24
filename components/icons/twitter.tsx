import { IconProps } from "@/types";
import React from "react";

function Twitter(props:IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <g clipPath="url(#clip0_5268_5566)">
        <path
          fill=""
          d="M25.176 11.867h2.76l-6.03 6.893L29 28.137h-5.555l-4.35-5.688-4.978 5.688h-2.762l6.45-7.373L11 11.868h5.695l3.933 5.199 4.548-5.2zm-.968 14.618h1.529l-9.872-13.053h-1.642l9.984 13.053z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_5268_5566">
          <path
            fill=""
            d="M0 0H18V18H0z"
            transform="translate(11 11)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Twitter;