import { IconProps } from '@/types';
import React from 'react';

function LeftArrow(props: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.6667 15L12.8417 13.825L9.02499 10L12.8417 6.175L11.6667 5L6.66666 10L11.6667 15Z"
        fill="white"
      />
    </svg>
  );
}

export default LeftArrow;
