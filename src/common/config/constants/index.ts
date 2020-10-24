var API_URL = process.env.REACT_APP_API_URL;

// if (process.env.NODE_ENV === "production") {
// 	API_URL = ;
// }

export const REQUEST_TIMEOUT = 60000;
export const PAGE_SIZE = 10;

export { API_URL };

// local storage keys
export const STORAGE_KEYS = {
	USER_DETAILS_STORAGE_KEY: "contest.friday.user",
	CLIENT_TOKEN_STORAGE_KEY: "contest.friday.token",
};

