import { Dropdown, Icon, Layout, Menu } from "antd";
import React from "react";
import { MouseClickEvent } from "../../../../types/MouseClickEvent";
import Language from "../../../../utils/language/en";
import CustomAvatar from "../CustomAvatar";

const { Header } = Layout;

export interface CustomNavProps {
	collapsed: boolean;
	toggle: MouseClickEvent;
	logout: MouseClickEvent;
}

const TopNav: React.SFC<CustomNavProps> = ({ collapsed, toggle, logout }) => {
	return (
		<Header
			className="flex justify-content-space-between shadow-md top-nav"
			style={{ background: "#fff", paddingLeft: 20 }}
		>
			<Icon
				className="flex items-center trigger"
				type={collapsed ? "menu-unfold" : "menu-fold"}
				onClick={toggle}
			/>
			<div className="flex flex-row">
				{/* <div className="flex flex-col justify-content-center pr-2">
					<Badge count={0} dot>
						<Icon
							component={() => <MessagesIcon height={35} width={42} />}
							className="text-2xl"
						/>
					</Badge>
				</div>
				<div className="flex flex-col justify-content-center pr-2">
					<Badge dot>
						<Icon
							component={() => <NotificationIcon height={35} width={32} />}
							className="text-2xl"
						/>
					</Badge>
				</div> */}
				<Dropdown
					overlay={
						<Menu>
							<Menu.Item>
								<a rel="noopener noreferrer" href="/" onClick={logout}>
									<Icon style={{ marginRight: 10 }} type="logout"></Icon>
								</a>
							</Menu.Item>
						</Menu>
					}
					placement="bottomRight"
				>
					<div className="ml-4 px-3" style={{ cursor: "pointer" }}></div>
				</Dropdown>
			</div>
		</Header>
	);
};

export default TopNav;
