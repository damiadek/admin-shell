import React, { CSSProperties } from "react";
import { Button, Icon } from "antd";
import { ButtonHTMLType } from "antd/lib/button/button";

interface ICustomButtonProps {
	actionText: string;
	disabled?: boolean;
	action?: any;
	loading?: boolean;
	block?: boolean;
	loaded?: boolean;
	style?: CSSProperties;
	type?: ButtonHTMLType;
}

export function CustomButton({
	actionText,
	loading = false,
	disabled = false,
	loaded = false,
	block = false,
	action = () => {},
	style = {},
	type = "button",
}: ICustomButtonProps) {
	return (
		<Button
			disabled={loading || disabled}
			htmlType={type}
			onClick={action}
			style={style}
			block={block}
			className="btn btn-primary flex align-items-center"
		>
			{actionText}
			<Icon
				style={{
					fontSize: 20,
					width: loading && !loaded ? 25 : 0,
					transition: "all .4s",
					overflow: "hidden",
				}}
				type="loading-3-quarters"
				spin
			/>
			{!loading && loaded && (
				<Icon
					className="turn-around"
					style={{ fontSize: 20, width: 25 }}
					type="check"
				/>
			)}
		</Button>
	);
}
