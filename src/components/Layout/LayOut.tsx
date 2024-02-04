import { Layout, Flex } from "antd";
import { Outlet } from "react-router-dom";

import MenuComponent from "@/components/Menu";
import Header from "@/components/Header";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PathFindName, setTitle } from "@/util";
import { useCommonStore } from "@/hooks/useCommonStore";
import { addTabItem } from "@/store/Tab";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store";
import { useNavigate } from "react-router-dom";
import config from "@/config";


const { Content } = Layout;

function LayOut() {
	const { pathname } = useLocation();
	const { tabList } = useCommonStore();
	const dispatch: AppDispatch = useDispatch();
	const navigate = useNavigate()

	useEffect(() => {
		//  修改html title
		let pathArr = pathname.split("/");
		let path = pathArr[pathArr.length - 1];
		if (path === "") path = "/";
		let title = PathFindName(path);
		setTitle(title);

		// 修改 tab 栏
		if (path !== "/") {
			if (tabList.findIndex((item) => item.path === pathname) === -1) {
				dispatch(
					addTabItem({
						path: pathname,
						name: title,
						active: "false",
					})
				);
			}
		}

		const isLogin = localStorage.getItem(config.TOKEN_NAME)
		if (!isLogin){
			navigate("login")
		}

	}, [pathname]);

	return (
		<Flex gap="middle" wrap="wrap">
			<Layout style={{ maxHeight: "100vh"}}>
				<MenuComponent />
				<Layout>
					<Header></Header>
					<Content
						style={{
							height: "100%",
							padding: "1rem 4rem",
							overflowY: "scroll",
							backgroundColor: "#fff",
						}}
					>
						<Outlet />
					</Content>
				</Layout>
			</Layout>
		</Flex>
	);
}

export default LayOut;
