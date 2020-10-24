import { COLLAPSE_SIDEBAR, EXPAND_SIDEBAR } from "../actions/types";
import { SidebarReduxActionModel } from "../types";

let initialState: { collapsed: boolean } = {
	collapsed: false,
};

export default (state = initialState, action: SidebarReduxActionModel) => {
	const { type, payload } = action;

	switch (type) {
		case COLLAPSE_SIDEBAR:
		case EXPAND_SIDEBAR:
			state = { ...state, ...payload };
			break;
		default:
			break;
	}

	return state;
};
