export interface RoutesProps {
	setCurrentPageIndex?: Function;
}

export interface RouteConfig {
	path: string;
	access: "everyone" | "guest-only" | "logged-in-user";
	exact: boolean;
	Component: any;
}
