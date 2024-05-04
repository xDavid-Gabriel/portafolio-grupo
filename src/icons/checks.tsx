import React from 'react'
interface Props extends React.SVGAttributes<SVGElement> {
	size?: number | string
	fill?: string
}

export const ChecksIcon = ({ size = '1em', fill = 'currentColor', ...props }: Props) => {
	return (
		<svg
			stroke="currentColor"
			strokeWidth="2"
			viewBox="0 0 24 24"
			strokeLinecap="round"
			strokeLinejoin="round"
			width={size}
			height={size}
			fill="none"
			{...props}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path d="M7 12l5 5l10 -10"></path>
			<path d="M2 12l5 5m5 -5l5 -5"></path>
		</svg>
	)
}
