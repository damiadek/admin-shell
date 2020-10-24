import { Icon } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

export interface ISidebarLinkItemProps {
	linkUrl: string;
	icon: string;
	linkText: string;
}

export default function SidebarLinkItem(props: ISidebarLinkItemProps) {
	return (
		<NavLink activeClassName="active" to={props.linkUrl}>
			<Icon className="flex align-items-center" type={props.icon} />
			<span>{props.linkText}</span>
		</NavLink>
	);
}
