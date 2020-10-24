import { Select } from "antd";
import React, { ReactElement } from "react";
import Language from "../../../utils/language/en";
import { PAGE_SIZE } from "../../../config/constants";

const { Option } = Select;

const { SwitchTableSize: PageDictionary } = Language;

const SwitchTablePageSize = ({
	changePageSize
}: {
	changePageSize: any;
}): ReactElement => {
	let pageSizeOptions = [
		10,
		20,
		30,
		40,
		50,
		60,
		70,
		80,
		90,
		100,
		200,
		300,
		400,
		500,
		1000
	];

	return (
		<Select
			onChange={(pageSize: number) => changePageSize(pageSize)}
			style={{
				width: "100%",
				minWidth: "200px",
				maxWidth: "100%",
				textTransform: "capitalize"
			}}
			placeholder={PageDictionary.pageSizeText}
			defaultValue={PAGE_SIZE}
		>
			{pageSizeOptions.map(pageSize => (
				<Option key={pageSize} value={pageSize}>
					{pageSize} {PageDictionary.switchOptionText}
				</Option>
			))}
		</Select>
	);
};

export default SwitchTablePageSize;
