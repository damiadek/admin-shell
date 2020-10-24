import { Button, Icon, Modal, Upload } from "antd";
import React, { useState } from "react";

interface IMultipleFileHandler {
	limit: number;
	listType?: string;
	uploadButton?: any;
	fileList: any;
	setFileList: any;
	disabled: boolean;
}

function getBase64(file: File) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = error => reject(error);
	});
}

export function MultipleFileHandler(props: IMultipleFileHandler) {
	const [previewVisible, setPreviewVisible] = useState(false);
	const [previewImage, setPreviewImage] = useState("");

	const { fileList, setFileList } = props;

	const handleChange = (info: any) => {
		let fileList = [...info.fileList];

		fileList = fileList.slice(props.limit - 2 * props.limit);

		setFileList(fileList);
	};

	const handleCancel = () => setPreviewVisible(false);

	const handlePreview = async (file: any) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}

		setPreviewImage(file.url || file.preview);
		setPreviewVisible(true);
	};

	const fileProps: any = {
		onRemove: (file: File) => {
			const index = fileList.indexOf(file);
			const newFileList = fileList.slice();
			newFileList.splice(index, 1);
			setFileList(newFileList);
		},
		beforeUpload: (file: File) => {
			setFileList([...fileList, file]);

			return false;
		},
		onChange: handleChange,
		onPreview: handlePreview,
		listType: props.listType || "text",
		fileList,
		disabled: props.disabled
	};

	return (
		<div>
			<Upload {...fileProps} style={{ width: "20px", borderRadius: "100%" }}>
				{props.uploadButton ? (
					props.uploadButton
				) : (
					<Button>
						<Icon type="upload" /> Select File
					</Button>
				)}
			</Upload>
			<Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
				<img alt="example" style={{ width: "100%" }} src={previewImage} />
			</Modal>
		</div>
	);
}
