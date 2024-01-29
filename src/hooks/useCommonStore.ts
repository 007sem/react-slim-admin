import type { RootState } from "@/store";
import { useSelector } from "react-redux";

export const useCommonStore = () => {
	const menuList = useSelector((state: RootState) => state.menu.menuList);
	const isCollapsed = useSelector((state: RootState) => state.menu.isCollapsed);
	const selectedKeys = useSelector((state: RootState) => state.menu.selectedKeys);
	const openKeys = useSelector((state: RootState) => state.menu.openKeys);

	return {
		menuList,
        isCollapsed,
		selectedKeys,
		openKeys
	};
};
