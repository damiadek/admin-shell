import { EXPAND_SIDEBAR, COLLAPSE_SIDEBAR } from "./types";

const expandSidebar = () => ({
	type: EXPAND_SIDEBAR,
	payload: { collapsed: false },
});

const collapseSidebar = (): any => ({
	type: COLLAPSE_SIDEBAR,
	payload: { collapsed: true },
});

export { expandSidebar, collapseSidebar };
