import { GithubOutlined } from "@ant-design/icons"
import iconStyle from "./iconStyleConfig";
import { Tooltip } from "antd";


function GithubIcon () {
    const tip_text = <span>访问GitHub</span>
    const link = "https://github.com/007sem/react-slim-admin"

    function handleClick(){
        window.open(link)
    }
    
    return (
        <Tooltip placement="bottom" title={tip_text}>
            <div className="icon-wrapper">
                <div className="header-icon-hover" onClick={handleClick}>
                    <GithubOutlined style={iconStyle} />
                </div>
            </div>
        </Tooltip>
    )
};
 
export default GithubIcon;