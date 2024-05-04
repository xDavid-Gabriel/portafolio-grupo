import React from "react";
interface Props extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  fill?: string;
}

export const CloseIcon = ({
  size = "1em",
  fill = "currentColor",
  ...props
}: Props) => {
  return (
    <svg
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill={fill}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M368 368 144 144m224 0L144 368"
      ></path>
    </svg>
  );
};
