import type { MenuListItem } from "@/store";
import { flatRoutesList } from "@/route/routes";

export function setTitle(name: string) {
	let title: string = document.title.split(" | ")[0];

	document.title = title + " | " + name;
}

export function PathFindName(path: string): string {
	let res = "";
	flatRoutesList.forEach((item) => {
		if (item.path == path) res = item.name!;
	});
	return res;
}
