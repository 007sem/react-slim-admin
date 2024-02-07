import icon_theme_light from "@/assets/svg/icon_theme_light.svg"
import icon_theme_dark from "@/assets/svg/icon_theme_dark.svg"

import "./style.less"
import { useDispatch } from "react-redux"
import { toggleTheme } from "@/store/theme"
import { useCommonStore } from "@/hooks/useCommonStore" 
import { useState,useEffect } from "react"

function ChooseTheme () {
    const { theme } = useCommonStore()
    const dispatch = useDispatch()
    const [currentTheme,setCurrentTheme] = useState<string>(theme)

    useEffect(()=>{
        setCurrentTheme(theme)
    },[theme])

    function ChooseHandle (theme: string){
        dispatch(toggleTheme(theme))
    }
    
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginBottom: "1rem"
        }}>
            <div className={"theme-item" + (currentTheme=="light" ? " active": "")} onClick={()=>{ChooseHandle("light")}}>
                <img src={icon_theme_light} alt="" />
            </div>
            <div className={"theme-item" + (currentTheme=="dark" ? " active": "")} onClick={()=>{ChooseHandle("dark")}}>
                <img src={icon_theme_dark} alt="" />
            </div>
        </div>
    )
};
 
export default ChooseTheme;