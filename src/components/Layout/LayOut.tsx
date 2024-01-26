import React from "react";
import { Layout, Flex } from "antd";

import { Outlet } from "react-router-dom"

const { Header, Footer, Sider } = Layout;

function LayOut() {

	const layoutStyle: React.CSSProperties = {
		height: "100vh",
		
	}
	const siderStyle: React.CSSProperties = {
		backgroundColor: "orange"
	}
	const headerStyle: React.CSSProperties = {
		backgroundColor: "#bfa"
	}

	return (
		<Flex gap="middle" wrap="wrap">
			<Layout style={layoutStyle}>
				<Sider width="20%" style={siderStyle}>
					Sider
				</Sider>
				<Layout>
					<Header style={headerStyle}>Header</Header>
					<Outlet></Outlet>
				</Layout>
			</Layout>
		</Flex>
	);
}

export default LayOut;
