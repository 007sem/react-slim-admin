
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

// 数组 arr1 是否包含 arr2
export function isArrInclude(arr1: string[], arr2: string[]): boolean {
	return arr1.every((item) => arr2.includes(item));
}
