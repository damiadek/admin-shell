export type SidebarReduxActionModel = {
	type: string;
	payload: SidebarReduxModel;
};

export type SidebarReduxModel = {
	collapsed: boolean;
};
