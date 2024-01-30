import TabItem from "./TabItem";

import "./nav.less"

function NavComponent() {
	const tabList = [
		{
			name: "首页",
			path: "/",
			active: "true"
		},
		{
			name: "图表",
			path: "charts",
			active: ""
		},
	];

	return (
		<div className="tab-bar">
			{tabList.map((item) => (
				<TabItem key={item.name} active={item.active} name={item.name} path={item.path} />
			))}
		</div>
	);
}

export default NavComponent;
