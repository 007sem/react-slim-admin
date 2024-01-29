import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";

import { useDispatch } from 'react-redux';
import type { AppDispatch, } from '@/store';
import { setIsCollapsed } from "@/store/menu"
import { useCommonStore } from "@/hooks/useCommonStore";

function CollapseIcon () {
    const iconSize = "1.2rem";
	const { isCollapsed } = useCommonStore()
	const dispatch: AppDispatch = useDispatch()

	// TODO: !isCollapsed BUG
	const [collapsed, setCollapsed] = useState(!isCollapsed);

	function handleCollapse() {
		setCollapsed(!collapsed);
		dispatch(setIsCollapsed(collapsed))
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