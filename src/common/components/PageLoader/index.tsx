import React, { Fragment } from "react";
import { Loader } from "../Loader";
import Language from "../../utils/language/en";

const { PageLoaderComponent: PageDictionary } = Language;

const PageLoader = (props: any) => {
	if (props.loading) {
		return (
			<div
				className="bg-white absolute center flex flex-1 flex-col"
				style={{
					position: "absolute",
					top: 0,
					bottom: 0,
					right: 0,
					left: 0,
					zIndex: 10,
					justifyContent: "center",
					alignItems: "center"
				}}
			>
				<Loader />
				{PageDictionary.loadingText}
			</div>
		);
	}
	return <Fragment>{props.children}</Fragment>;
};

export default PageLoader;
