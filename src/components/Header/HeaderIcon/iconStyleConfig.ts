import { useState, useEffect } from "react";
import { useCommonStore } from "@/hooks/useCommonStore"; 


export function useIconStyle() {
    const defaultStyle = {
        fontSize: "1.4rem",
        padding: "0.2rem",
    }
    const { theme,themeStyle } = useCommonStore();
	const [iconStyle, setIconStyle] = useState({} as React.CSSProperties);
	useEffect(() => {
		// 在组件挂载后执行一些操作
		// 这里可以根据需要设置 iconStyle 的初始
        setIconStyle({...defaultStyle, color: themeStyle.descColor});
	}, [theme]);

	return iconStyle; // 返回样式对象
}
