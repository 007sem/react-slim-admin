import "./header.less";

import CollapseIcon from "./CollapseIcon"
import BreadCrumb from "./BreadCrumb";

function Header() {


	

	return (
		<div
			className="header"
			style={{
				height: "4rem",
			}}
		>
			<CollapseIcon />
			<BreadCrumb />
		</div>
	);
}

export default Header;
