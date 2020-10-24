import { Button, Checkbox, Col, Row } from "antd";
import React, { Fragment } from "react";
import { MouseClickEvent } from "../../../types/MouseClickEvent";

interface TableHeaderProps {
	unlinkFunction: MouseClickEvent | any;
	totalElements: number;
	selectedRowKeys: [];
	exportData: MouseClickEvent | any;
	exportingData: boolean;
	setAllSelected: Function;
	setSelectedRowKeys: Function;
	allSelected: boolean;
	buttonTitle: string;
	confirmTitle: string;
}

const TableHeader: React.SFC<TableHeaderProps> = ({
	allSelected = false,
	setAllSelected,
	selectedRowKeys = [],
	setSelectedRowKeys,
	totalElements
}: TableHeaderProps) => {
	return (
		<Fragment>
			{totalElements ? (
				<Row style={{ borderBottom: "solid 1px #eee", paddingBottom: 10 }}>
					<Col style={{ display: "flex", justifyContent: "space-between" }}>
						<div>
							<Checkbox
								//   indeterminate={!allSelected && selectedRowKeys.length > 0}
								style={{ paddingLeft: 20 }}
								checked={allSelected}
								onChange={() => setAllSelected(!allSelected)}
							>
								Select All
							</Checkbox>
						</div>
						<div>
							<b>
								{" "}
								{allSelected ? totalElements : selectedRowKeys.length} selected
							</b>
							<Button
								type="link"
								disabled={!allSelected && selectedRowKeys.length <= 0}
								onClick={() => {
									setAllSelected(false);
									setSelectedRowKeys([]);
								}}
							>
								clear selection
							</Button>
						</div>
					</Col>
				</Row>
			) : (
				""
			)}
		</Fragment>
	);
};

export default TableHeader;
