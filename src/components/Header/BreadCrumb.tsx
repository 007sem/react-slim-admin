import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";

import { PathFindName } from "@/util/index";

interface BreadcrumbItem {
	title: string;
}

function BreadCrumb() {
	function getBreadcrumb() {
		const location = useLocation();
		let res: BreadcrumbItem[] = [];
		let arr = location.pathname.split("/");
		arr.shift();
		if (arr.length == 1 && arr[0] == "") {
			return res;
		} else if (arr.length == 1) {
			return [{ title: PathFindName(arr[0]) }];
		} else {
			return arr.map((item) => {
				return { title: PathFindName(item) };
			});
		}
	}

	return <Breadcrumb items={[{ title: "工作台" }, ...getBreadcrumb()]} />;
}

export default BreadCrumb;
