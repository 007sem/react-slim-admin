import { CloseOutlined } from "@ant-design/icons"
import { useEffect, useState, MouseEvent } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { TabItemType } from './type'
import { useCommonStore } from "@/hooks/useCommonStore";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { deleteTab } from "@/store/Tab";

import { useAliveController } from "react-activation"



function TabItem ({
    name,
    path,
}: TabItemType) {

    const { tabList } = useCommonStore()
    const navigate = useNavigate()
    const dispatch:AppDispatch = useDispatch()
    const { dropScope } = useAliveController()
    const { pathname } = useLocation()
    const [active, setActive] = useState('')

    useEffect(()=>{
        let pathArr = pathname.split("/")
        let _path = pathArr[pathArr.length - 1]
        if(_path === "") _path =  "/"

        if(pathname === path){
            setActive("true")
        } else {
            setActive("")
        }
    }, [pathname])


    function handleClick(){
        navigate(path)
    }

    function CloseClick(event: MouseEvent){
        event.stopPropagation();
        let index =  tabList.findIndex((item) => item.path === path)
        if( active ) navigate(tabList[index-1].path)

        // 删除 tab
        dispatch(deleteTab(name))
        // 清除 keep alive
        dropScope(name)

    }
    
    return (
        <div className={ active ? "active tab-item" : 'tab-item '} onClick={handleClick}>
            <span className="name">{name}</span>
            {
                path !== "/" ? (
                    <span className="close-icon" onClick={CloseClick}>
                        <CloseOutlined />
                    </span>
                ) : ""
            }
        </div>
    )
};
 
export default TabItem;