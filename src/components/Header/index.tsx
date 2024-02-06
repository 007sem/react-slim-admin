import "./header.less";

import CollapseIcon from "./CollapseIcon";
import BreadCrumb from "./BreadCrumb";
import Tabs from "@/components/Tabs";
import AvatarComponent from "./Avatar"


import ReloadIcon from "./HeaderIcon/ReloadIcon";
import NotificationsIcon from "./HeaderIcon/NotificationsIcon";
import SettingsIcon from "./HeaderIcon/SettingsIcon"
import GithubIcon from "./HeaderIcon/GithubIcon";



import { GithubOutlined } from "@ant-design/icons";

function Header() {
	const iconStyle = {
		fontSize: "1.4rem",
		marginRight: "1.4rem",
		cursor: "pointer",
	};


	

	return (
		<div className="header">
			<div
				className="header-top"
				style={{
					height: "4rem",
				}}
			>
				<div className="header-top-left">
					<CollapseIcon />
					<BreadCrumb />
				</div>
				<div className="header-top-right">
					
					
					<ReloadIcon />
					<NotificationsIcon />
					<SettingsIcon />
					<GithubIcon />
					{/* 头像 */}
					<AvatarComponent />
					
				</div>
			</div>
			<div className="header-bottom">
				<Tabs />
			</div>
		</div>
	);
}

export default Header;
