import React, { ReactElement, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { SuspenseFallback } from "../";
import { routes } from "./routes";
import { RouteConfig, RoutesProps } from "./types";

/** function to generate routes */
const generateRoutes = ({
	path,
	exact,
	Component,
}: RouteConfig): ReactElement => {
	return (
		<Route
			key={path}
			path={path}
			exact={exact || false}
			render={(props) => <Component {...props} />}
		/>
	);
};

/** routes component */

const Routes: React.SFC<RoutesProps> = () => {
	return (
		<Suspense fallback={<SuspenseFallback />}>
			<Switch>
				{routes.map((route) => generateRoutes(route))}

				<Route
					path="/admin"
					render={(props: any) => <Redirect to="/admin/staff" />}
				/>
				{/* render login page if none of the routes above is matched */}
				<Route
					path="/"
					render={(props: any) => <Redirect to="/auth/login" />}
				/>
			</Switch>
		</Suspense>
	);
};

export default Routes;
