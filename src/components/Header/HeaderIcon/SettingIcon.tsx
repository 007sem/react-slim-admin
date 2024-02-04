import { SettingOutlined } from "@ant-design/icons";
import iconStyle from "./iconStyleConfig";
import "./iconStyle.less";
import { Tooltip, Drawer } from "antd";
import { useState } from "react"

function ReloadIcon() {

	const [ open, setOpen ] = useState(false)

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
						<SettingOutlined style={iconStyle} />
					</div>
				</div>
			</Tooltip>
			<Drawer title="設置" onClose={onClose} open={open}>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Drawer>
		</div>
	);
}

export default ReloadIcon;
