export type APIResponseModel<T> = {
	data: T;
	access_token?: any;
	status: boolean | number;
	message?: string;
};

// export class APIResults {
// 	content: Array<any> = [];
// 	totalPages: number = 0;
// 	totalElements: number = 0;
// 	size: number = 0;
// 	number: number = 0;
// 	numberOfElements: number = 0;
// }

export class PaginatedData<T> {
	page: number = 1;
	limit: number = 10;
	total: number = 0;
	list: Array<T> = [];
}

export class PaginatedResponse<T> {
	status: boolean | number = false;
	data: PaginatedData<T> = new PaginatedData<T>();
}

export type ErrorResponseModel = {
	status: boolean;
	message: string;
};
