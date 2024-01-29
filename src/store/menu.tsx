import { createSlice } from "@reduxjs/toolkit";
import { MenuListItem } from "./index";


const menuSlice = createSlice({
	name: "menu",
	initialState: {
        isCollapsed: false,
		selectedKeys: [] as string[], // 菜单选中值
		openKeys: [] as string[], // 菜单展开项
		menuList: [] as MenuListItem[],
	},
	reducers: {
        setIsCollapsed: (state, action)=>{
            state.isCollapsed = action.payload
        },
		setSelectedKeys: (state, action) => {
			console.log("setSelectedKeys")
			state.selectedKeys = action.payload;
		},
		setOpenKeys: (state, action) => {
			console.log("setOpenKeys")
			state.openKeys = action.payload;
		},
		setMenuList: (state, action) => {
			state.menuList = action.payload;
		},
	},
});


export const {
    setIsCollapsed,
    setSelectedKeys,
    setOpenKeys,
    setMenuList
  } = menuSlice.actions;

export default menuSlice.reducer;
