import moment from "moment";
import numeral from "numeral";

const VALIDATION_RULES = [
	{
		id: 1,
		title: "1 Capital Letter",
		passed: false,
		regex: "^(?=.*?[A-Z])",
	},
	{ id: 2, title: "1 Number", passed: false, regex: "(?=.*?[0-9])" },
	{
		id: 3,
		title: "1 Special Character from !@#$%^&_",
		passed: false,
		regex: "(?=.*[!@#$%^&_])",
	},
	{ id: 4, title: "8 Characters", passed: false, regex: ".{8,}" },
];

const COLOR_PALETTE = ["#f50", "#2db7f5", "#87d068", "#108ee9", "#ff7900"];

/**format number to friendly number **/

export const FormatToFriendlyNumber = (value: number): string => {
	if (value > 999999) return numeral(value).format("0a");
	return numeral(value).format("0,0,0");
};

export const FormatMoney = (
	value: number | string,
	useDecimals: boolean = true
): string => {
	if (!value) return "";

	if (typeof value === "string") value = Number(value);

	let currency = process.env.REACT_APP_COUNTRY_CURRENCY
		? process.env.REACT_APP_COUNTRY_CURRENCY + " "
		: "";

	return currency + numeral(value).format(useDecimals ? "0,0,0.00" : "0,0,0");
};

export const FormatNumber = (value: number | string): string => {
	if (typeof value === "string") value = Number(value);

	let currency = "";
	return currency + numeral(value).format("0,0,0");
};

/** convert currency frmo minor to major value **/

export const MinorToMajorValue = (
	minorValue: number,
	useCurrency: boolean = false
): string => {
	let locale = process.env.REACT_APP_COUNTRY_LOCALE;
	let currency = {
		style: "currency",
		currency: process.env.REACT_APP_COUNTRY_CURRENCY,
	};

	if (!locale || !currency) {
		return minorValue.toString();
	}

	let majorValue = minorValue / 100;

	if (useCurrency) {
		return new Intl.NumberFormat(locale, currency).format(majorValue);
	}

	return new Intl.NumberFormat(locale, {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(majorValue);
};

/** extract human friendly date from date-time string **/
export const HumanFriendlyDate = (dateTime: string | null | number): string => {
	if (!dateTime) {
		return "";
	}
	const _dateTime = moment(dateTime);
	return `${_dateTime.format("Do MMM, YYYY")}`;
};

/** extract human friendly date-time from date-time string **/
export const HumanFriendlyDateTime = (
	dateTime: string | null | number,
	format?: string
): string => {
	if (!dateTime) {
		return "";
	}
	let _dateTime;

	if (format) {
		_dateTime = moment(dateTime, format);
	} else {
		_dateTime = moment(dateTime);
	}

	return _dateTime.format("Do MMM, YYYY [at] hh:mma");
};

/** generate url with query params from baseUrl and data object **/
export const ExtractQueryString = (baseUrl: string, object: any): string => {
	let queryParams = [];

	for (const key in object) {
		if (object.hasOwnProperty(key)) {
			const element = object[key];
			if (
				element ||
				key === "page" ||
				(key === "ignored" && element !== null) ||
				(key === "reconciled" && element !== null)
			) {
				queryParams.push(`${key}=${encodeURI(element)}`);
			}
		}
	}
	if (queryParams.length) {
		baseUrl += `?${queryParams.join("&")}`;
	}
	return baseUrl;
};

export const CheckPasswordStrength = (
	password: string
): { count: number; total: number } => {
	if (!password) return { count: 0, total: VALIDATION_RULES.length };

	let count = 0;

	VALIDATION_RULES.forEach((rule) => {
		if (password.match(rule.regex)) count += 1;
	});

	return { count, total: VALIDATION_RULES.length };
};

export const GetPasswordStrengthStrokeColor = (
	passwordStrength: number
): string => {
	if (passwordStrength > 75) {
		return "#9ac753";
	} else if (passwordStrength >= 40) {
		return "#FED25D";
	} else {
		return "red";
	}
};


export const SearchDropdownWithKeyword = (
	value: string,
	option: string | number | null
) => {
	return option
		? option.toString().toLowerCase().includes(value.toLowerCase())
		: false;
};

export const RemoveSpacesFromString = (stringToStrip: string) =>
	stringToStrip.replace(/ /g, "");

export const ReplaceUnderscoresWithSpaces = (stringWithUnderscore: string) =>
	stringWithUnderscore.split("_").join(" ");

export const GenerateRandomColor = (): string =>
	COLOR_PALETTE[Math.round(Math.random() * (COLOR_PALETTE.length - 1))];
