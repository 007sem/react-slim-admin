import TabItem from "./TabItem";

import "./nav.less";

import { useAliveController } from "react-activation";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setTabList } from "@/store/Tab";

import type { AppDispatch } from "@/store";
import type { TabItemType } from "./type";
import { useCommonStore } from "@/hooks/useCommonStore"

function NavComponent() {
	const { tabList } = useCommonStore()
	const [_tabList, _setTabList] = useState(tabList);



	return (
		<div className="tab-bar">
			{_tabList &&
				_tabList.map((item) => (
					<TabItem
						key={item.name}
						active={item.active}
						name={item.name!}
						path={item.path}
					/>
				))}
		</div>
	);
}

export default NavComponent;
