import "./header.less";

import CollapseIcon from "./CollapseIcon";
import BreadCrumb from "./BreadCrumb";
import Tabs from "@/components/Tabs";
import AvatarComponent from "./Avatar";

import ReloadIcon from "./HeaderIcon/ReloadIcon";
import NotificationsIcon from "./HeaderIcon/NotificationsIcon";
import SettingsIcon from "./HeaderIcon/SettingsIcon";
import GithubIcon from "./HeaderIcon/GithubIcon";

import { useState, useEffect } from "react";
import { useCommonStore } from "@/hooks/useCommonStore";

function Header() {
	const { themeStyle, beardCrumbShow, tabShow } = useCommonStore();

	const [isTabShow, setIsTabShow] = useState<boolean>(tabShow);
	const [isBeardCrumbShow, setIsBeardCrumbShow] = useState<boolean>(beardCrumbShow);

	useEffect(() => {
	    setIsBeardCrumbShow(beardCrumbShow)
		setIsTabShow(tabShow)
	},[beardCrumbShow, tabShow])

	return (
		<div
			className="header"
			style={{
				backgroundColor: themeStyle.bgc,
			}}
		>
			<div className="header-top">
				<div className="header-top-left">
					<CollapseIcon />
					{isBeardCrumbShow? <BreadCrumb />:""}
					
				</div>
				<div className="header-top-right">
					<GithubIcon />
					<ReloadIcon />
					<NotificationsIcon />
					<SettingsIcon />
					
					{/* 头像 */}
					<AvatarComponent />
				</div>
			</div>
			<div
				className="header-bottom"
				style={{
					borderBottom: "2px dashed " + themeStyle.borderColor,
				}}
			>
				{isTabShow ? <Tabs /> : ""}
			</div>
		</div>
	);
}

export default Header;
