import { ENDPOINTS } from "../../../common/config/endpoints";
import { MOCK } from "../../../common/config/mock/mock-service";
import { makeUnauthorizedRequestWithHeadersAndPayload } from "../../../common/services/index";
import { APIResponseModel } from "../../../common/types/api-response/api-response-types";
import { LoggedOutUserDetails } from "../types/session-model";

/** log user in **/
export const login = (username: string, password: string): Promise<any> => {
	let endpoint = ENDPOINTS.auth.login;

	if (process.env.REACT_APP_MOCK === "true") {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve({ status: true, data: MOCK.mockLoginResponse });
			}, 3000);
		});
	}

	return makeUnauthorizedRequestWithHeadersAndPayload(
		endpoint.method,
		endpoint.url,
		{ username, password }
	);
};

/** log user out **/
export const logout = () => {
	let user: LoggedOutUserDetails = {
		loggedIn: false,
		username: "",
	};

	return user;
};
