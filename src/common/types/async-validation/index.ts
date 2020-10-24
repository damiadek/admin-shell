export class ValidityStatus {
	validationAttempted: boolean = false;
	validating: boolean = false;
	valid: boolean = false;
	message: string | null = null;
}

export type SetValidityStatusState = React.Dispatch<
	React.SetStateAction<ValidityStatus>
>;
