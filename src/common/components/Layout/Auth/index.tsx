import { Col, Layout, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import logo from "../../../../static/images/logo.svg";
import history from "../../../config/history";
import { ReduxStoreModel } from "../../../types";
import Language from "../../../utils/language/en";

const { AuthShell: PageDictionary } = Language;
const { Content } = Layout;

interface AuthShellProps {
	mainHeaderText: string;
	subHeaderText: string;
}

export const AuthShell: React.SFC<AuthShellProps> = (props) => {
	const dispatch = useDispatch();
	const user = useSelector((store: ReduxStoreModel) => store.user);

	useEffect(() => {
		if (user.data && user.data.loggedIn) {
			history.push("/admin");
		}
	}, [user, dispatch]);

	return (
		<Content>
			<Row className="bg-mikro-purple">
				<Col className="full-screen-height bg-white py-6 md:py-24" span={24}>
					<Row className="flex justify-content-center">
						<Col className="flex justify-center mt-24 mb-10" md={6} xs={20}>
							{/* <img
								style={{ height: 35 }}
								alt={PageDictionary.imageLogoAlt}
								src={logo}
							/> */}
						</Col>
					</Row>
					<Row className="flex justify-content-center pb-12">
						<Col md={6} xs={20}>
							{props.children}
						</Col>
					</Row>
					{/* <Footer /> */}
				</Col>
			</Row>
		</Content>
	);
};
