import TabItem from "./TabItem";
import { useEffect, useState } from "react";
import { useCommonStore } from "@/hooks/useCommonStore";

import "./nav.less";

function NavComponent() {
	const { tabList } = useCommonStore();
	const [_tabList, _setTabList] = useState(tabList);

	// 监听tabList变化
	useEffect(()=>{
		console.log(tabList)
		_setTabList(tabList);
	},[tabList])

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
