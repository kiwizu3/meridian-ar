import { IconProps } from '@/types';

function Chevron(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width}
      height={props?.height}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.706 15.707a1 1 0 01-1.414 0L5.635 10.05A1 1 0 117.05 8.636l4.95 4.95 4.95-4.95a1 1 0 011.414 1.414l-5.657 5.657z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
export default Chevron;
