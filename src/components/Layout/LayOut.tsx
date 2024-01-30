import { Layout, Flex } from "antd";
import { Outlet } from "react-router-dom";

import MenuComponent from "@/components/Menu";
import Header from "@/components/Header";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PathFindName, setTitle } from "@/util";
import { useCommonStore } from "@/hooks/useCommonStore"


function LayOut() {
	const location = useLocation();
	
	useEffect(() => {
		let pathArr = location.pathname.split('/')
		let path = pathArr[pathArr.length-1]
		if (path === '') {
			path = '/'
		}
		setTitle(PathFindName( path));
	}, [location])

	return (
		<Flex gap="middle" wrap="wrap">
			<Layout>
				<MenuComponent />
				<Layout>
					<Header></Header>
					<div
						style={{
							backgroundColor: "#bfa",
							height: "100%",
						}}
					>
						<Outlet />
					</div>
				</Layout>
			</Layout>
		</Flex>
	);
}

export default LayOut;
