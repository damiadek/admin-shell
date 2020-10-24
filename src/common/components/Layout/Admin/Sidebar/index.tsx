import { Layout, Menu, Row } from "antd";
import React from "react";
import logo from "../../../../../static/images/logo.svg";
import verticalLogo from "../../../../../static/images/vertical_logo.svg";
import { MouseClickEvent } from "../../../../types/MouseClickEvent";
import Language from "../../../../utils/language/en";
import SidebarLinkItem from "./components/sidebar-link-item";

const { Sider } = Layout;
// const { AdminShell: PageDictionary } = Language;

export interface SidebarProps {
	responsiveMargin: number;
	sidebarWidth: number;
	collapsed: boolean;
	toggle: MouseClickEvent;
	isMobile: boolean;
}

const Sidebar: React.SFC<SidebarProps> = (props: SidebarProps) => {
	return (
		<Sider
			breakpoint="lg"
			className="border-r sidebar"
			theme="light"
			collapsedWidth={props.responsiveMargin}
			style={{
				overflow: "auto",
				height: "100vh",
				position: "fixed",
				zIndex: 2,
				left: 0,
				backgroundImage: "url('/pattern-bg.png')",
				backgroundBlendMode: "hard-light",
			}}
			width={props.sidebarWidth}
			trigger={null}
			collapsible
			collapsed={props.collapsed}
		>
			<div className="logo">
				<Row
					type="flex"
					className="justify-center mb-24"
					align="middle"
					style={{
						padding: 20,
					}}
				>
					{/* <img
						style={{ height: 25 }}
						alt={PageDictionary.imageLogoAlt}
						src={props.collapsed ? verticalLogo : logo}
					/> */}
				</Row>
			</div>
			<Menu className="text-xs border-0" theme="light" mode="inline">
				<Menu.Item key="staff">
					{/* <SidebarLinkItem
						icon="team"
						linkText={PageDictionary.linkText.staff}
						linkUrl={"/admin/staff"}
					/> */}
				</Menu.Item>
			</Menu>
		</Sider>
	);
};

export default Sidebar;
