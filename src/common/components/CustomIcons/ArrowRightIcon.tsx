import React from "react";

export default function ArrowRightIcon(props: {
	height?: number;
	width?: number;
}) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={props.height ? props.height : "13.294"}
			width={props.width ? props.width : "7.578"}
			viewBox="0 0 7.578 13.294"
			style={{ display: "inline" }}
		>
			<g transform="translate(-97.138 0)">
				<path d="M104.444,7.3l-5.716,5.716A.931.931,0,0,1,97.411,11.7l5.058-5.058L97.411,1.589A.931.931,0,1,1,98.728.272l5.716,5.716a.931.931,0,0,1,0,1.316Z" />
			</g>
		</svg>
	);
}
