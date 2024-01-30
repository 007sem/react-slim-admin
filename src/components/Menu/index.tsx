import { Menu, Layout, ConfigProvider } from "antd";
import { useState, useEffect, useContext } from "react";
import { routes } from "@/route/routes";
import { RouteType } from "@/route/type";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import type { AppDispatch, MenuListItem } from "@/store";
import { useCommonStore } from "@/hooks/useCommonStore";
import { setMenuList } from "@/store/menu";

import logo from "@/assets/react.svg";
import "./menu.less";

function splitKeysArray(arr: string[], index: number): [string[], string[]] {
	const arr1 = arr.slice(1, index);
	const arr2 = arr.slice(index);

	return [arr1, arr2];
}

function MenuComponent() {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch: AppDispatch = useDispatch();
	const { isCollapsed, menuList } = useCommonStore();

	let pathArr = location.pathname.split("/");

	let _openKeys: string[] = [],
		_selectKeys: string[] = [];
	if (pathArr.length <= 2) {
		if (pathArr[1] === "") {
			_selectKeys = ["/"];
		} else {
			_selectKeys = [pathArr[1]];
		}
	} else {
		[_openKeys, _selectKeys] = splitKeysArray(pathArr, pathArr.length - 1);
	}

	const [selectedKeys] = useState<string[]>(_selectKeys);
	const [openKeys] = useState<string[]>(_openKeys);

	useEffect(() => {
		dispatch(setMenuList(MenuList));
	}, []);

	let MenuList: MenuListItem[] = [];

	function GetMenuItems(tree: RouteType[]): any[] {
		tree.forEach((item: RouteType) => {
			MenuList.push({
				key: item.path,
				path: item.path,
				name: item.name!,
			});
			item.key = item.path;
			item.label = <div style={{ width: "2rem" }}>{item.name}</div>;
			if (item.children && item.children.length > 0) {
				GetMenuItems(item.children);
			}
		});
		return tree;
	}

	const MenuData = routes.find((item) => item.path === "/")?.children!;
	let items: any[] = GetMenuItems(MenuData);

	const handleClick = (e: { keyPath: string[]; key: string }) => {
		let path = e.keyPath.reverse().join("/");
		navigate(path);
	};

	return (
		<ConfigProvider
			theme={{
				components: {
					Menu: {
						/* 这里是你的组件 token */
						itemHoverColor: "#fff",
						itemHoverBg: "#222",
						itemSelectedBg: "#333",
						itemSelectedColor: "#fff",
						popupBg: "#181818",
						itemColor: "#888",
					},
				},
			}}
		>
			<Layout.Sider
				collapsed={isCollapsed}
				style={{
					height: "100vh",
					padding: "1rem",
					backgroundColor: "#181818",
				}}
			>
				<div className="aside">
					<div className="logo">
						<img src={logo} alt="logo" />
					</div>
					<Menu
						style={{
							background: "transparent",
						}}
						onClick={handleClick}
						mode="inline"
						defaultOpenKeys={openKeys}
						defaultSelectedKeys={selectedKeys}
						items={items}
					></Menu>
				</div>
			</Layout.Sider>
		</ConfigProvider>
	);
}

export default MenuComponent;
