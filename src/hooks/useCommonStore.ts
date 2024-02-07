import type { RootState } from "@/store";
import { useSelector } from "react-redux";


// 常用的状态
export const useCommonStore = () => {
	const menuList = useSelector((state: RootState) => state.menu.menuList);
	const isCollapsed = useSelector((state: RootState) => state.menu.isCollapsed);
	const selectedKeys = useSelector((state: RootState) => state.menu.selectedKeys);
	const openKeys = useSelector((state: RootState) => state.menu.openKeys);
	const tabList = useSelector((state: RootState) => state.tab.tabList);
	const tabActive = useSelector((state: RootState) => state.tab.tabActive);
	const theme = useSelector((state: RootState) => state.theme.theme);
	const themeStyle = useSelector((state: RootState) => state.theme.style);

	const isStretched = useSelector((state: RootState) => state.settings.isStretched);
	const tabShow = useSelector((state: RootState) => state.settings.TabShow)
	const beardCrumbShow = useSelector((state: RootState) => state.settings.BeardCrumbShow)

	return {
		menuList,
        isCollapsed,
		selectedKeys,
		openKeys,
		tabList,
		tabActive,
		theme,
		themeStyle,
		isStretched,
		tabShow,
		beardCrumbShow
	};
};
