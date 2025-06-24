import { IconProps } from "@/types";
import React from "react";

function Linkedin(props:IconProps) {
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
        d="M15.4 28.108V17.302H11.81v10.806H15.4zm-1.794-12.28c1.251 0 2.03-.83 2.03-1.867-.023-1.06-.779-1.867-2.006-1.867-1.228 0-2.03.806-2.03 1.867 0 1.037.778 1.866 1.982 1.866h.024zm3.78 12.28h3.588v-6.034c0-.322.023-.646.118-.876.259-.646.85-1.314 1.84-1.314 1.299 0 1.819.991 1.819 2.444v5.78h3.587v-6.196c0-3.319-1.77-4.863-4.13-4.863-1.936 0-2.786 1.083-3.258 1.82h.024v-1.566h-3.588c.047 1.014 0 10.805 0 10.805z"
      ></path>
    </svg>
  );
}

export default Linkedin;
