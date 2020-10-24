import * as React from "react";

export interface IPageHeaderProps {
	headerTitle: string;
	actionButton?: React.ReactElement;
}

export default function PageHeader(props: IPageHeaderProps) {
	return (
		<div className="pb-10 text-2xl flex flex-row flex-wrap justify-between items-center">
			<h1 className="mb-3 md:mb-0 text-gray-700">{props.headerTitle}</h1>
			{props.actionButton && <div>{props.actionButton}</div>}
		</div>
	);
}
