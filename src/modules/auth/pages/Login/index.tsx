import React from "react";
import Helmet from "react-helmet";
import { AuthShell } from "../../../../common/components";
import Language from "../../../../common/utils/language/en";
import LoginFormWrapper from "./components/LoginForm";

export interface LoginProps {}

const { LoginPage: PageDictionary } = Language;

const Login: React.SFC<LoginProps> = () => {
	return (
		<AuthShell
			mainHeaderText={PageDictionary.imageHeader}
			subHeaderText={PageDictionary.imageSubHeader}
		>
			<Helmet title={PageDictionary.title} />
			<LoginFormWrapper />
		</AuthShell>
	);
};

export default Login;
