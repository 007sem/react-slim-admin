import "./header.less";
import { Breadcrumb } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";

function Header() {
    const iconSize = "1.2rem";

	const [collapsed, setCollapsed] = useState(false);

	function handleCollapse() {
		setCollapsed(!collapsed);
	}

	

	return (
		<div
			className="header"
			style={{
				height: "4rem",
			}}
		>
			<div className="collaps-icon">
				{collapsed ? (
					<MenuFoldOutlined
						style={{ fontSize: iconSize }}
						onClick={() => handleCollapse()}
					/>
				) : (
					<MenuUnfoldOutlined
						style={{ fontSize: iconSize }}
						onClick={() => handleCollapse()}
					/>
				)}
			</div>
			<div className="bread-crumb"></div>
		</div>
	);
}

export default Header;
