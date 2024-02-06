import { Breadcrumb, ConfigProvider } from "antd";
import { useLocation } from "react-router-dom";

import { PathFindName } from "@/util/index";
import { useCommonStore } from "@/hooks/useCommonStore"; 

interface BreadcrumbItem {
	title: string;
}

function BreadCrumb() {

	const { themeStyle } = useCommonStore();

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

	return <ConfigProvider
	theme={{
	  components: {
		Breadcrumb: {
		  /* 这里是你的组件 token */
		  itemColor: themeStyle.descColor,
		  separatorColor: themeStyle.descColor,
		  lastItemColor: themeStyle.textColor,
		},
	  },
	}}
  >
	<Breadcrumb items={[{ title: "工作台" }, ...getBreadcrumb()]} />
  </ConfigProvider>;
}

export default BreadCrumb;
