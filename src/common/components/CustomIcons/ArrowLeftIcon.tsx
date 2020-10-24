import React from "react";

export default function ArrowLeftIcon(props: {
	height?: number;
	width?: number;
}) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={props.height ? props.height : "13.294"}
			width={props.width ? props.width : "7.578"}
			viewBox="0 0 8.064 14.146"
			style={{ display: "inline" }}
		>
			<path
				d="M97.429,7.773l6.082,6.082a.991.991,0,0,0,1.4-1.4L99.53,7.072l5.382-5.382a.991.991,0,0,0-1.4-1.4L97.428,6.372a.99.99,0,0,0,0,1.4Z"
				transform="translate(-97.139 0)"
			/>
		</svg>
	);
}
