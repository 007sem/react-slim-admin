
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import { flatRoutesList } from "@/route/routes"


export const useLocationHooks = ( ) =>{
    const [fullName , setFullname] = useState<string>()
    const [currentName, setCurrentName ] = useState<string>()

    const location = useLocation()

    useEffect(()=>{
        setFullname(location.pathname)

        const pathArr = location.pathname.split('/')
        let _current = pathArr[pathArr.length-1]
        if (_current == '') _current = "/" 
        setCurrentName(_current)

    },[location])


    return { fullName, currentName }
}

export const usePageName = () =>{
    const [pageName, setPageName] = useState<string>()
    const location = useLocation()

    useEffect(()=>{
        // console.log(location.pathname)
        const pathArr = location.pathname.split('/')
        let _current = pathArr[pathArr.length-1]
        if (_current == '') _current = "/" 

        console.log(flatRoutesList)

        setPageName(_current)

    },[location])

    return { pageName }
}