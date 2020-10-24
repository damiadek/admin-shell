export type LoggedInUserDetails = {
	id: string;
	department: string;
	email: string;
	firstName: string;
	imageId: string | null;
	lastName: string;
	staffLevel: string;
	staffStatus: string;
	timeCreated: number;
	timeUpdated: number;
	token: string;
	tokenExpiredAt: string;
	loggedIn: boolean;
};

export type LoggedOutUserDetails = {
	loggedIn: boolean;
	username: string;
};
export class EmptyLoggedInUserDataModel {
	loading: boolean = false;
	error: null = null;
	data: LoggedInUserDetails | LoggedOutUserDetails = {
		username: "",
		loggedIn: false,
	};
}

export type LoggedInUserStoreModel = {
	loading: boolean;
	error: string | null;
	data: LoggedInUserDetails | LoggedOutUserDetails;
};
