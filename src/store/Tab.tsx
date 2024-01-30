import { createSlice } from "@reduxjs/toolkit";
import { TabItemType } from "./index";

const tabSlice = createSlice({
	name: "tabs",
	initialState: {
		tabList: [
			{
				name: "首页",
				path: "/",
				active: "true",
			},
		] as TabItemType[],
	},
	reducers: {
		setTabList: (state, action) => {
			state.tabList = action.payload;
		},
		addTabItem: (state, action) => {
			state.tabList.push(action.payload as TabItemType);
		},
		// payload = name
		deleteTab: (state, action) => {
			state.tabList = state.tabList.filter(
				(item) => item.name !== action.payload
			);
		},
	},
});

export const { setTabList, addTabItem } = tabSlice.actions;

export default tabSlice.reducer;
