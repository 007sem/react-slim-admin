import { ReloadOutlined } from "@ant-design/icons"
import iconStyle from "./iconStyleConfig";
import './iconStyle.less'

import { Dropdown } from "antd";
import type { MenuProps } from "antd";

import { useAliveController } from "react-activation";
import { useLocationHooks } from "@/hooks/useLoaction";



function ReloadIcon () {

    const { refresh, getCachingNodes } = useAliveController();
    const { currentName } = useLocationHooks()

    const items: MenuProps["items"] = [
		{
			key: "1",
			label: "刷新当前页面",
		},
	];
    const onClick: MenuProps["onClick"] = ({ key }) => {
        switch (key) {
            case "1":
                refresh(currentName as string)
                break;
            default:
                break;
        }

	};
    
    return (
        <Dropdown menu={{ items, onClick }} placement="bottomRight" trigger={['click']}>
            <div className="header-icon-hover">
                <ReloadOutlined style={iconStyle} />
            </div>
        </Dropdown>
        
    )
};
 
export default ReloadIcon;