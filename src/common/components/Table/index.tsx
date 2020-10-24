import { Table } from "antd";
import { PaginationConfig, TableSize } from "antd/lib/table";
import React from "react";
import { Loader } from "../Loader";

interface PaginationType {
	totalPages: number;
	size: number;
	totalElements: number;
	currentPage: number;
	onChange: Function;
	position?: "top" | "bottom" | "both";
}

interface SizeControlProps {
	showSizeControl: boolean;
	setPageSize: Function;
	pageSize: number;
}

interface SelectionProps {
	allowSelect: boolean;
	rows: Array<any>;
	onChange: Function;
}
interface IProps {
	onRow?: any;
	size?: TableSize;
	rowKey?: string;
	selection?: SelectionProps;
	loading?: boolean;
	columns: Array<any>;
	data: Array<any>;
	title?: Function;
	paginated?: boolean;
	bodyStyle?: any;
	useFixedHeader?: boolean;
	paginationProps?: PaginationType;
	sizeControlProps?: SizeControlProps;
}

export const CustomTable = (props: IProps) => {
	let tableConfig: any = {
		loading: {
			spinning: props.loading ? props.loading : false,
			indicator: <Loader />,
		},
		rowKey: props.rowKey || "id",
		onRow: props.onRow,
		columns: props.columns,
		dataSource: props.data,
	};

	if (props.size) {
		tableConfig.size = props.size;
	}

	if (props.useFixedHeader) {
		tableConfig.useFixedHeader = true;
	}

	if (props.bodyStyle) {
		tableConfig.bodyStyle = props.bodyStyle;
	}

	if (props.paginated && props.paginationProps) {
		tableConfig.pagination = {
			total: props.paginationProps.totalElements,
			current: props.paginationProps.currentPage,
			pageSize: props.paginationProps.size,
			onChange: props.paginationProps.onChange || (() => null),
			showQuickJumper: true,
			showTotal: (total: any, range: any) =>
				`${range[0]}-${range[1]} of ${total} items`,
			position: props.paginationProps.position || "both",
		} as PaginationConfig;

		if (props.sizeControlProps && props.sizeControlProps.showSizeControl) {
			tableConfig.pagination.showSizeChanger = true;
			tableConfig.pagination.onShowSizeChange = (page: any, size: any) =>
				props.sizeControlProps && props.sizeControlProps.setPageSize(size);
			tableConfig.pagination.pageSizeOptions = [
				"10",
				"20",
				"30",
				"40",
				"50",
				"60",
				"70",
				"80",
				"90",
				"100",
				"200",
				"300",
				"400",
				"500",
				"1000",
			];
		}
	} else {
		tableConfig.pagination = false;
	}

	if (props.selection && props.selection.allowSelect) {
		tableConfig.rowSelection = {
			selectedRowKeys: props.selection.rows,
			onChange: props.selection.onChange,
		};
	}

	if (props.title) {
		tableConfig.title = props.title;
	}

	return (
		<div style={{ overflowX: "auto" }}>
			<Table {...tableConfig} />
		</div>
	);
};
