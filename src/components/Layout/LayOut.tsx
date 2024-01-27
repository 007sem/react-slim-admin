// import React, {useState} from "react";
import { Layout, Flex } from "antd";
import { Outlet } from "react-router-dom"


import MenuComponent from "@/components/Menu";
import Header from "@/components/Header";




function LayOut() {

	return (
		<Flex gap="middle" wrap="wrap">
			<Layout >
				<MenuComponent />
				<Layout>
					<Header></Header>
					<div style={{
						backgroundColor: "#bfa",
						height: "100%",
					}}>
						<Outlet></Outlet>
					</div>
				</Layout>
			</Layout>
		</Flex>
	);
}

export default LayOut;
