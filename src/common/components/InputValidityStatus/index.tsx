import * as React from "react";
import { Icon } from "antd";
import Text from "antd/lib/typography/Text";

export interface IInputValidityStatusProps {
	valid: boolean;
	validMessage: string;
	invalidMessage: string;
}

export function InputValidityStatus(props: IInputValidityStatusProps) {
	return (
		<React.Fragment>
			<Icon
				className="mr-3"
				style={{ lineHeight: "18px" }}
				type={props.valid ? "check-circle" : "close-circle"}
				theme="filled"
			></Icon>
			<Text className="text-sm">
				{props.valid ? props.validMessage : props.invalidMessage}
			</Text>
		</React.Fragment>
	);
}
