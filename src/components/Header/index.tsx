import "./header.less";

import CollapseIcon from "./CollapseIcon";
import BreadCrumb from "./BreadCrumb";
import Tabs from "@/components/Tabs";




function Header() {
	

	return (
		<div className="header">
			<div
				className="header-top"
				style={{
					height: "4rem",
				}}
			>
				<CollapseIcon />
				<BreadCrumb />
			</div>
			<div className="header-bottom">
				<Tabs />
			</div>
		</div>
	);
}

export default Header;
