import React from "react";
interface Props extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  fill?: string;
}
export const MoonIcon = ({
  size = "1em",
  fill = "currentColor",
  ...props
}: Props) => {
  return (
    <svg
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  );
};
