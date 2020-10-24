import { Card } from "antd";
import React from "react";

export default function DashboardSliderItem(props: {
	backgroundImage?: string;
	backgroundColor?: string;
	styles?: React.CSSProperties;
	bodyStyles?: React.CSSProperties;
	children: any;
}) {
	const styles = props.styles || {};

	return (
		<Card
			style={{
				backgroundImage: props.backgroundImage
					? `url('${props.backgroundImage}')`
					: "",
				backgroundColor: props.backgroundColor,
				minHeight: 160,
				padding: 10,
				backgroundSize: "contain",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "bottom right",
				borderRadius: 5,
				...styles,
			}}
			bodyStyle={{ ...props.bodyStyles }}
		>
			{props.children}
		</Card>
	);
}
