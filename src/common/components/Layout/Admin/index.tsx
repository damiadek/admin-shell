import { Layout } from "antd";
import React, { useCallback, useEffect } from "react";
import { isMobile } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import { animated, useSpring } from "react-spring";
import { logUserOut } from "../../../../modules/auth/actions";
import history from "../../../config/history";
import { ReduxStoreModel } from "../../../types";
import Sidebar from "./Sidebar";
import { collapseSidebar, expandSidebar } from "./Sidebar/actions";
import TopNav from "./TopNav";

const { Content } = Layout;

export function AdminShell(props: any) {
	const styleProps = useSpring({ opacity: 1, from: { opacity: 0 } });

	const user = useSelector((store: ReduxStoreModel) => store.user);

	// const [loadingPage, setloadingPage] = useState(true);

	const dispatch = useDispatch();
	const sidebarState = useSelector((store: ReduxStoreModel) => store.sidebar);

	const sidebarWidth = 210;
	const responsiveMargin = isMobile ? 0 : 80;

	useEffect(() => {
		if (!user || !user.data || !user.data.loggedIn) {
			history.push("/auth/login");
		}
	}, [user]);

	useEffect(() => {
		if (isMobile) {
			dispatch(collapseSidebar());
		}
	}, [dispatch]);

	const logout = (e: any) => {
		e.preventDefault();
		// setloadingPage(true);
		dispatch(logUserOut());
	};

	const toggle = useCallback(() => {
		if (sidebarState.collapsed) {
			dispatch(expandSidebar());
		} else {
			dispatch(collapseSidebar());
		}
	}, [sidebarState, dispatch]);

	return (
		<Layout className="admin-shell">
			<Sidebar
				sidebarWidth={sidebarWidth}
				responsiveMargin={responsiveMargin}
				collapsed={sidebarState.collapsed}
				toggle={toggle}
				isMobile={isMobile}
			/>
			{isMobile && !sidebarState.collapsed ? (
				<div
					onClick={toggle}
					style={{
						position: "fixed",
						top: 0,
						bottom: 0,
						right: 0,
						left: 0,
						zIndex: 1,
						background: "rgba(0,0,0,0.5)",
					}}
				></div>
			) : null}

			<Layout
				style={{
					marginLeft: isMobile
						? 0
						: sidebarState.collapsed
						? responsiveMargin
						: sidebarWidth,
				}}
			>
				<TopNav
					collapsed={sidebarState.collapsed}
					logout={logout}
					toggle={toggle}
				/>
				{/* <PageLoader loading={loadingPage}> */}
				<div>
					<animated.div style={styleProps}>
						<Content className="relative admin-shell-content py-10 md:px-12 px-6 bg-gray-500">
							{props.children}
						</Content>
					</animated.div>
				</div>
				{/* </PageLoader> */}
			</Layout>
		</Layout>
	);
}
