import { CloseOutlined } from "@ant-design/icons";
import { useEffect, useState, MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TabItemType } from "./type";
import { useCommonStore } from "@/hooks/useCommonStore";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { deleteTab } from "@/store/Tab";
import { useAnimation } from "@/hooks/useAnimation";

// @ts-ignore
import { CSSTransition } from "react-transition-group";

import { useAliveController } from "react-activation";



function TabItem({ name, path }: TabItemType) {

    const duration = 300;

	const { tabList, tabActive, themeStyle } = useCommonStore();
	const navigate = useNavigate();
	const dispatch: AppDispatch = useDispatch();
	const { dropScope } = useAliveController();
	const { pathname } = useLocation();
	const [active, setActive] = useState(tabActive == pathname ? "true" : "");

    const [flag, setFlag] = useState(true);
	const [show, stage] = useAnimation(flag, duration, ["entry","leave"]);

	// console.log("tab", name, tabActive)
	useEffect(() => {
		setActive(tabActive == path ? "true" : "");
	}, [tabActive]);

	function handleClick() {
		navigate(path);
	}

	function CloseClick(event: MouseEvent) {
		event.stopPropagation();
		let index = tabList.findIndex((item) => item.path === path);
		if (active) navigate(tabList[index - 1].path);

        setFlag(false)
		setTimeout(() => {
            // 删除 tab
            dispatch(deleteTab(name));
            // 清除 keep alive
            dropScope(name);
        },duration)
	}

	return (
		show && <div
			className={
				"tab-item " +
				(active ? "active " : "") +
				stage
			}
			style={{ 
				background: themeStyle.bgc4,
				opacity: active ? 1 : 0.5,
				color: themeStyle.textColor
			 }}
			onClick={handleClick}
		>
			<span className="name">{name}</span>
			{path !== "/" ? (
				<span className="close-icon" onClick={CloseClick}>
					<CloseOutlined />
				</span>
			) : (
				""
			)}
		</div>
	);
}

export default TabItem;
