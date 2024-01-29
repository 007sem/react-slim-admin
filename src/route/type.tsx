import { ReactNode } from 'react'

export interface RouteType {
	path: string;
	element?: ReactNode;
	icon?: ReactNode;
  name?: string,
	label?: ReactNode;
	key?: string;
	index?: "true" | undefined; // 解决react-dom 不能识别 bool值
	type?: string;
	children?: RouteType[];
}