import React from "react";
import { Avatar } from "antd";

export interface CustomAvatarProps {
	logoSrc: string;
}

const CustomAvatar: React.SFC<CustomAvatarProps> = ({ logoSrc }) => {
	return <Avatar className="bg-black" src={logoSrc} size="large"></Avatar>;
};

export default CustomAvatar;
