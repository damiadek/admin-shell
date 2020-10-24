import { Icon, Upload } from "antd";
import { DraggerProps } from "antd/lib/upload";
import { UploadFile } from "antd/lib/upload/interface";
import * as React from "react";
import "./file-drag-and-upload.scss";

const { Dragger } = Upload;

const FileDragAndUpload = (props: {
	icon?: string;
	fileTitle?: string;
	disabled?: boolean;
	fileList?: Array<UploadFile>;
	setFileList: any;
}) => {
	const handleChange = (info: any) => {
		let fileList = [...info.fileList];

		if (fileList.length) {
			fileList = [fileList[fileList.length - 1]];
		} else {
			fileList = [];
		}

		props.setFileList(fileList);
	};

	let fileProps: DraggerProps = {
		name: "file",
		beforeUpload: (file: File) => {
			return false;
		},
		accept: ".csv, .xls, .xlsx",
		// accept:
		// 	".csv,.xlsx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
		onChange: handleChange
	};

	if (props.fileList) {
		fileProps.fileList = props.fileList;
	}

	return (
		<Dragger {...fileProps} disabled={props.disabled} multiple={false}>
			<p className="ant-upload-drag-icon">
				<Icon type={props.icon || "inbox"} />
			</p>
			<p className="ant-upload-text"></p>
		</Dragger>
	);
};

export default FileDragAndUpload;
