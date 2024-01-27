import {  Menu, Layout, ConfigProvider } from "antd";
import  {  useState } from "react";
import routes from "@/route/routes";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/react.svg";
import "./menu.less";

type MenuTree = {
	path: string;
	label: string;
	father?: string;
	children?: MenuTree[];
};

function flattenTree(tree: any, key?: string) {
	let arr: any[] = [];

	tree.forEach((item: any) => {
		if (key) item.father = key;
		if (item.children) {
			arr.push(item);
			arr.push(...flattenTree(item.children, item.path));
		} else {
			arr.push(item);
		}
	});
	return arr;
}

function creatTree(arr: MenuTree[]) {
	let tree: any[] = [];
	arr.forEach((item: any) => {
		if (!item.father) {
			tree.push(item);
		}
	});
	arr.forEach((item: any) => {
		// 找到父节点
		if (item.father) {
			tree.forEach(
				(node: any) =>
					node.key === item.father && node.children.push(item)
			);
		}
	});
	return tree;
}

// TODO: 优化导航列表算法
function MenuComponent() {
	const navigate = useNavigate();

	function creatSubNode(label: string, key: string, icon: any) {
		return {
			label: <div style={{ width: "2rem" }}>{label}</div>,
			key,
			icon,
			children: [],
		};
	}
	function creatMenuItem(label: string, key: string, father: string, icon: any) {
		return {
			label: <div style={{ width: "2rem" }}>{label}</div>,
			key,
            icon,
			father,
		};
	}
    
	const routesData = routes.find((item) => item.path === "/")?.children;
	let items: any[] = flattenTree(routesData);
	items = items.map((item: any) => {
		if (item.type === "sub") {
			return creatSubNode(item.label, item.path, item.icon);
		} else {
			return creatMenuItem(item.label, item.path, item.father,item.icon);
		}
	});
	items = creatTree(items);

	const handleClick = (e: { keyPath: string[] }) => {
		let path = e.keyPath.reverse().join("/");
		navigate(path);
	};

	const [collaps, setCollaps] = useState(false);

	return (
		<ConfigProvider
			theme={{
				components: {
					Menu: {
						/* 这里是你的组件 token */
                        itemHoverColor: '#fff',
                        itemHoverBg: "#222",
                        itemSelectedBg: "#333",
                        itemSelectedColor: "#fff",
                        popupBg: "#181818",
                        itemColor:"#888"
					},
				},
			}}
		>
			<Layout.Sider
				collapsed={collaps}
				style={{
					height: "100vh",
					padding: "1rem",
					backgroundColor: "#181818",
                    
				}}
			>
				<div className="aside">
					<div className="logo">
						<img
							src={logo}
							alt="logo"
							onClick={() => setCollaps(!collaps)}
						/>
					</div>
					<Menu
						style={{
							background: "transparent",
						}}
						onClick={handleClick}
						mode="inline"
						defaultSelectedKeys={["/"]}
						items={items}
					></Menu>
				</div>
			</Layout.Sider>
		</ConfigProvider>
	);
}

export default MenuComponent;
