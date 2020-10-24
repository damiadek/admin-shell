import * as React from "react";
import { CustomTable } from "../Table";

export interface IEmptyTableProps {
	columns: Array<any>;
	loading?: boolean;
}

export default function EmptyTable(props: IEmptyTableProps) {
	return (
		<CustomTable loading={props.loading} data={[]} columns={props.columns} />
	);
}
