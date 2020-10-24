import { Button, Icon, Upload } from "antd";
import React, { useState } from "react";

interface ISingleFileHandler {
	limit: number;
	listType?: string;
	uploadButton?: any;
	fileList: any;
	actionUrl?: string;
	setFileList: any;
	disabled: boolean;
}

function getBase64(img: Blob, callback: Function) {
	const reader = new FileReader();
	reader.addEventListener("load", () => callback(reader.result));
	reader.readAsDataURL(img);
}

export function SingleFileHandler(props: ISingleFileHandler) {
	const [previewImage, setPreviewImage] = useState("");

	const { fileList, setFileList } = props;

	const handleChange = (info: any) => {
		getBase64(info.file, (imageUrl: string) => {
			setPreviewImage(imageUrl);
		});
	};

	const fileProps: any = {
		beforeUpload: (file: File) => {
			console.log(file);
			setFileList([{ originFileObj: file }]);
			return false;
		},
		onChange: handleChange,
		showUploadList: false,
		listType: props.listType || "text",
		fileList,
		disabled: props.disabled,
	};

	return (
		<div>
			<Upload {...fileProps} style={{ width: "20px", borderRadius: "100%" }}>
				{fileList.length > 0 ? (
					<img alt="example" style={{ width: "100%" }} src={previewImage} />
				) : props.uploadButton ? (
					props.uploadButton
				) : (
					<Button>
						<Icon type="upload" /> Select File
					</Button>
				)}
			</Upload>
			{/* <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
				<img alt="example" style={{ width: "100%" }} src={previewImage} />
			</Modal> */}
		</div>
	);
}
