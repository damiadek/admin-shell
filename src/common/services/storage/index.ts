import { STORAGE_KEYS } from "../../config/constants";
import {
	LoggedInUserDetails,
	LoggedOutUserDetails,
} from "../../../modules/auth/types/session-model";

const getItem = (key: string) => {
	return localStorage.getItem(key) || null;
};

const setItem = (key: string, value: string) => {
	return localStorage.setItem(key, value);
};

export const clearData = () => localStorage.clear();

export const storeUserDetails = (userDetails: LoggedInUserDetails) => {
	setItem(STORAGE_KEYS.USER_DETAILS_STORAGE_KEY, JSON.stringify(userDetails));
};

export const fetchUserDetails = ():
	| LoggedInUserDetails
	| LoggedOutUserDetails => {
	let details = getItem(STORAGE_KEYS.USER_DETAILS_STORAGE_KEY);
	if (details) {
		return JSON.parse(details);
	}
	return { username: "", loggedIn: false };
};

export const storeUserToken = (token: string) => {
	return setItem(STORAGE_KEYS.CLIENT_TOKEN_STORAGE_KEY, token);
};

export const fetchUserToken = () => {
	return getItem(STORAGE_KEYS.CLIENT_TOKEN_STORAGE_KEY);
};
