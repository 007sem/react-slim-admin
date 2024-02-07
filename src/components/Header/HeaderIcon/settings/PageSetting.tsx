import { Switch } from "antd";
import { useCommonStore } from "@/hooks/useCommonStore"; 
import { useDispatch } from "react-redux"; 
import {setBeardCrumbShow, setTabShow} from "@/store/settings"


function PageSetting () {
    const dispatch = useDispatch();

    const { tabShow, beardCrumbShow } = useCommonStore()

    const itemStyle = {
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:"10px"
    }
    

    function BeardCrumbShowHandle(checked: boolean){
        dispatch(setBeardCrumbShow(checked))
    }
    function TabShowHandle (checked: boolean){
        dispatch(setTabShow(checked))
    }

    return (
        <div>
            <div style={itemStyle}>
                <span>BeardCrumb Show</span>
                <Switch defaultChecked={tabShow} onChange={BeardCrumbShowHandle} />
            </div>
            <div style={itemStyle}>
                <span>Tab Show</span>
                <Switch defaultChecked={beardCrumbShow} onChange={TabShowHandle} />
            </div>
        </div>
    )
};
 
export default PageSetting;