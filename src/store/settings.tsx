import { createSlice } from "@reduxjs/toolkit";

interface SettingState {
	isStretched: boolean; // 是否拉伸布局
	BeardCrumbShow: boolean; // 是否显示面包屑
	TabShow: boolean;
}

const settingsSlice = createSlice({
	name: "theme",
	initialState: {
		isStretched: true, // 是否拉伸布局
		BeardCrumbShow: true, // 是否显示面包屑
		TabShow: true, // 是否显示页面标签
	} as SettingState,
	reducers: {
		setIsStretched: (state, action) => {
			state.isStretched = action.payload;
		},
		setBeardCrumbShow: (state, action) => {
			state.BeardCrumbShow = action.payload;
		},
		setTabShow: (state, action) => {
			state.TabShow = action.payload;
		},
	},
});

export const {setIsStretched, setBeardCrumbShow, setTabShow} = settingsSlice.actions;

export default settingsSlice.reducer;
