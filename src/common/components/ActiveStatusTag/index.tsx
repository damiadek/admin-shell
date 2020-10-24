import React from "react";

import { Tag } from "antd";

const statusColors = {
	pending: {
		background: "#FDF3E0",
		color: "#E8A24E",
	},
	success: {
		background: "#DEFFF4",
		color: "#00BE7C",
	},
	error: {
		background: "#FDEAEF",
		color: "#E2164B",
	},
};

export const getStatusColor = (
	status: string
): { background: string; color: string } => {
	switch (status.toLowerCase()) {
		case "success":
			return statusColors.success;
		case "credit":
			return statusColors.success;
		case "active":
			return statusColors.success;
		case "resolved":
			return statusColors.success;
		case "pending":
			return statusColors.pending;
		case "failed":
			return statusColors.error;
		case "debit":
			return statusColors.error;
		case "declined":
			return statusColors.error;
		default:
			return statusColors.error;
	}
};

export interface IActiveStatusTagProps {
	status: string;
}

export default function ActiveStatusTag(props: IActiveStatusTagProps) {
	return (
		<Tag
			style={{
				fontSize: 10,
				marginRight: 0,
				width: 70,
				textAlign: "center",
				textTransform: "capitalize",
				color: getStatusColor(props.status).color,
			}}
			color={getStatusColor(props.status).background}
		>
			{props.status}
		</Tag>
	);
}
