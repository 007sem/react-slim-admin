import {  SettingOutlined } from "@ant-design/icons";
import { useIconStyle } from "./iconStyleConfig";
import "./iconStyle.less";
import { Tooltip, Drawer } from "antd";
import { useState } from "react"

import ChooseTheme from "./settings/ChooseTheme";


function ReloadIcon() {

	const [ open, setOpen ] = useState(false)
	const style = useIconStyle();

	const showDrawer = () => {
		setOpen(true);
	  };
	
	  const onClose = () => {
		setOpen(false);
	  };

	const tip_text = <span>設置</span>;
	return (
		<div>
			<Tooltip placement="bottom" title={tip_text}>
				<div className="icon-wrapper" onClick={showDrawer}>
					<div className="header-icon-hover">
						<SettingOutlined style={style} />
					</div>
				</div>
			</Tooltip>
			<Drawer title="設置" onClose={onClose} open={open}  width="20rem">
				<div className="settings-title">Theme</div>
				<ChooseTheme />
			</Drawer>
		</div>
	);
}

export default ReloadIcon;
