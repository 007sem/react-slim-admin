import "./header.less";

import CollapseIcon from "./CollapseIcon";
import BreadCrumb from "./BreadCrumb";
import Nav from "@/components/Nav";

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
				<Nav />
			</div>
		</div>
	);
}

export default Header;
