
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"



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