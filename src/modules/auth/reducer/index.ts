import { fetchUserDetails } from "../../../common/services";
import { LoggedInUserStoreModel } from "../types/session-model";
import { ReduxActionModel } from "../../../common/types";
import {
	USER_LOGIN_FAILED,
	USER_LOGIN_SUCCESSFUL,
	USER_LOGOUT,
	USER_LOGIN_ATTEMPT,
} from "../actions/types";

let user = fetchUserDetails();

let initialState: LoggedInUserStoreModel = {
	loading: false,
	error: null,
	data: user,
};

export default (state = initialState, action: ReduxActionModel) => {
	const { type, payload } = action;

	switch (type) {
		case USER_LOGIN_ATTEMPT:
			state = { ...state, loading: true, error: null };
			break;
		case USER_LOGIN_FAILED:
			state = { ...state, loading: false, error: payload };
			break;
		case USER_LOGIN_SUCCESSFUL:
			state = { ...state, loading: false, error: null, data: payload };
			break;
		case USER_LOGOUT:
			state = { ...state, loading: false, error: null, data: payload };
			break;
		default:
			break;
	}

	return state;
};
