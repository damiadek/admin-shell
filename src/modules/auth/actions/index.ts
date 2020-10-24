import {
	login,
	logout,
	storeUserDetails,
	clearData,
	storeUserToken,
} from "../../../common/services";

import {
	USER_LOGIN_SUCCESSFUL,
	USER_LOGIN_FAILED,
	USER_LOGOUT,
	USER_LOGIN_ATTEMPT,
} from "./types";
import { Dispatch } from "redux";
import { APIResponseModel } from "../../../common/types";
import { LoggedInUserDetails } from "../types/session-model";
import Language from "../../../common/utils/language/en";

/* ==== action creators ==== */

const loggingIn = () => ({
	type: USER_LOGIN_ATTEMPT,
});

const loginSuccessful = (payload: LoggedInUserDetails): any => ({
	type: USER_LOGIN_SUCCESSFUL,
	payload,
});

const loginfailed = (payload: string) => ({
	type: USER_LOGIN_FAILED,
	payload,
});

const logoutAction = () => ({
	type: USER_LOGOUT,
	payload: logout(),
});

/* ==== action creators ==== */

const persistUserDetails = (
	userData: LoggedInUserDetails,
	dispatch: Dispatch
) => {
	if (!userData.token) {
		dispatch(loginfailed(Language.LoginPage.loginError));
		return;
	}
	userData = { ...userData, loggedIn: true };
	storeUserDetails(userData);
	storeUserToken(userData.token);
	dispatch(loginSuccessful(userData));
};

const logUserIn = (email: string, password: string) => (dispatch: Dispatch) => {
	dispatch(loggingIn());

	login(email, password)
		.then((response: APIResponseModel<LoggedInUserDetails>) => {
			let userData = { ...response.data };
			persistUserDetails(userData, dispatch);
		})
		.catch((error) => {
			if (error) {
				error = typeof error == "string" ? error : error.message;
			} else {
				error = Language.NetworkErrorMessage.errorMessage;
			}
			dispatch(loginfailed(error));
		});
};

const logUserOut = () => (dispatch: Dispatch) => {
	clearData();

	dispatch(logoutAction());
};

export { logUserIn, logUserOut, logoutAction, persistUserDetails };
