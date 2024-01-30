import { routes } from "@/route/routes.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { createContext } from "react";
import { RouteType } from "./route/type";

import { KeepAlive } from "react-activation";

import { useLocation } from "react-router-dom";

export const MenuContext = createContext<any>([]);

function App() {

	console.log("App")

	// 不需要keep alive 的路由
	const aliveIgnoreArr = ["login", "*"];
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
						<KeepAlive cacheKey={route.path} name={route.name}>
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

	return <RouterProvider router={router} />;
}

export default App;
