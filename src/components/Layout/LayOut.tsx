// import React, {useState} from "react";
import { Layout, Flex } from "antd";
import { Outlet } from "react-router-dom"


import MenuComponent from "@/components/Menu";
import Header from "@/components/Header";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store";
import { setOpenKeys, setSelectedKeys } from "@/store/menu";


import { useEffect } from "react";

function splitKeysArray(arr: string[], index: number): [string[], string[]] {
	const arr1 = arr.slice(1, index);
	const arr2 = arr.slice(index);

	return [arr1, arr2];
}



function LayOut() {
	const location = useLocation();
	const dispatch: AppDispatch = useDispatch();



	// useEffect(()=>{
	// 	console.log("layout")
	// 	console.log("location", location.pathname);

	// 	let pathArr = location.pathname.split("/");

	// 	if (pathArr.length > 1) {
	// 		const [_openKeys, _selectKeys] = splitKeysArray(
	// 			pathArr,
	// 			pathArr.length - 1
	// 		);
	// 		dispatch(setOpenKeys(_openKeys));
	// 		dispatch(setSelectedKeys(_selectKeys));
	// 		console.log(_openKeys, _selectKeys);
	// 	} else {

	// 	}
	// },[])

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
