import * as React from "react";
import { Button, Icon } from "antd";
import Text from "antd/lib/typography/Text";

export interface IInlineSelectDataLoadingErrorProps {
	errorMessage: string;
	errorText: string;
	action: React.MouseEventHandler;
}

export default function InlineSelectDataLoadingError(
	props: IInlineSelectDataLoadingErrorProps
) {
	return (
		<Text style={{ color: "red", fontSize: 10 }} type="danger">
			{props.errorMessage}
			<Button size="small" type="link" onClick={props.action}>
				{props.errorText} <Icon style={{ fontSize: 10 }} type="reload"></Icon>
			</Button>
		</Text>
	);
}
