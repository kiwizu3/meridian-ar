import { IconProps } from '@/types';
import React from 'react';

function IncreaseText(props: IconProps) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 37 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.475 6.1875H21.4275V9H24.24V3.375H1.875V9H4.6875V6.1875H11.6625V29.8125H6.825V32.625H19.3125V29.8125H14.475V6.1875Z"
        fill="#F0F0F0"
      />
      <path
        d="M28.65 15.1875H18.885V20.8125H21.6975V18H25.8375V29.8125H22.4175V32.625H32.0925V29.8125H28.65V18H32.8125V20.8125H35.625V15.1875H28.65Z"
        fill="#F0F0F0"
      />
    </svg>
  );
}

export default IncreaseText;
