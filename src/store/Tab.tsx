import { createSlice } from "@reduxjs/toolkit";
import { TabItemType } from "./index";

const tabSlice = createSlice({
	name: "tabs",
	initialState: {
		tabList: [
			{
				name: "工作台",
				path: "/",
				active: "true",
			},
		] as TabItemType[],
		tabActive: "/" as string,
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
		changeActive: (state, action) =>{
			state.tabActive = action.payload
		}
	},
});

export const { setTabList, addTabItem, deleteTab, changeActive } = tabSlice.actions;

export default tabSlice.reducer;
