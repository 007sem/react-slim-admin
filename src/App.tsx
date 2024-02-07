import { routes } from "@/route/routes.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import {  } from "react";
import { RouteType } from "./route/type";
import { ConfigProvider } from "antd"

import { KeepAlive } from "react-activation";
import { useCommonStore } from "./hooks/useCommonStore"; 


function App() {
	console.log("App");
	const { themeStyle } = useCommonStore()

	// 不需要keep alive 的路由
	const aliveIgnoreArr = ["login", "*", "/not_found"];
	function wrapKeepAlive(routes: RouteType[]): RouteType[] {
		let res: RouteType[] = [];
		routes.forEach((route) => {
			if (
				route.element &&
				route.name &&
				!aliveIgnoreArr.includes(route.path)
			) {
				res.push({
					...route,
					alive: true,
					element: (
						<KeepAlive cacheKey={route.path} name={route.path}>
							{route.element}
						</KeepAlive>
					),
				});
			}

			if (route.children && route.children.length > 0) {
				res.push({ ...route, children: wrapKeepAlive(route.children) });
			}
		});

		return res;
	}
	const aliveRoutes = wrapKeepAlive(routes);

	// @ts-ignore
	const router = createHashRouter(aliveRoutes);

	return (
		<ConfigProvider
		theme={{
			token: {
			  // Seed Token，影响范围大
			  colorPrimary: themeStyle.primary,
			},
		  }}>
			<RouterProvider router={router} />
		</ConfigProvider>
	)
	
	
	
}

export default App;
