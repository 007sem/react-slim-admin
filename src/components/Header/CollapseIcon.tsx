import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";

import { useDispatch } from 'react-redux';
import type { AppDispatch, } from '@/store';
import { setIsCollapsed } from "@/store/menu"
import { useCommonStore } from "@/hooks/useCommonStore";

function CollapseIcon () {
	const { isCollapsed, themeStyle } = useCommonStore()
	const dispatch: AppDispatch = useDispatch()


	const style = {
		fontSize: "1.2rem",
		color: themeStyle.textColor
	}

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
						style={style}
						onClick={() => handleCollapse()}
					/>
				) : (
					<MenuUnfoldOutlined
						style={style}
						onClick={() => handleCollapse()}
					/>
				)}
			</div>
    )
};
 
export default CollapseIcon;