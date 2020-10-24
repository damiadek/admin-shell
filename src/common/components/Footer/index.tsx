import React from "react";
import { Link } from "react-router-dom";
import Language from "../../utils/language/en";

const { FooterText: PageDictionary } = Language;

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
	return (
		<React.Fragment>
			<div
				className="flex flex-wrap justify-between px-5 md:px-20 py-5"
				style={{
					position: "absolute",
					bottom: 0,
					left: 0,
					width: "100%"
				}}
			>
				<div style={{ color: "#808B9D", fontSize: 10 }}>
					{PageDictionary.needHelpText}{" "}
					<Link className="black-link bold" to="/auth/signup">
						{PageDictionary.contactSupportText}
					</Link>
				</div>
				<div
					style={{
						color: "#A3ABB7",
						fontWeight: "lighter",
						width: "auto"
					}}
				>
					<Link className="grey-link" to="/auth/signup">
						{PageDictionary.privacy}
					</Link>{" "}
					|{" "}
					<Link className="grey-link" to="/auth/signup">
						{PageDictionary.terms}
					</Link>
				</div>
			</div>
		</React.Fragment>
	);
}
