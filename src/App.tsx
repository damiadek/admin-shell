import React from "react";
import { Router, Switch } from "react-router";
import history from "./common/config/history";
import Routes from "./common/components/Routes";

declare var location: Location;

const App = () => (
	<Router history={history}>
		<Switch>
			<Routes />
		</Switch>
	</Router>
);

export default App;
