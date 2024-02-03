import { SettingOutlined } from "@ant-design/icons"
import iconStyle from "./iconStyleConfig";
import './iconStyle.less'


function ReloadIcon () {
    
    return (
        <div className="header-icon-hover">
            <SettingOutlined style={iconStyle} />
        </div>
    )
};
 
export default ReloadIcon;