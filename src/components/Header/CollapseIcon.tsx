import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";

function CollapseIcon () {
    const iconSize = "1.2rem";

	const [collapsed, setCollapsed] = useState(false);

	function handleCollapse() {
		setCollapsed(!collapsed);
	}
    
    return (
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
    )
};
 
export default CollapseIcon;