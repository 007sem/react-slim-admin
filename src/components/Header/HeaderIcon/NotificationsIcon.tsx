import { BellOutlined } from "@ant-design/icons";
import {useIconStyle} from "./iconStyleConfig";
import "./iconStyle.less";

import { Tooltip, Drawer } from "antd";
import { useState } from "react";

function ReloadIcon() {
	const tip_text = <span>消息</span>;
	const style = useIconStyle();

	const [open, setOpen] = useState(false);

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};
	return (
		<div>
			<Tooltip placement="bottom" title={tip_text}>
				<div className="icon-wrapper" onClick={showDrawer}>
					<div className="header-icon-hover">
						<BellOutlined style={style} />
					</div>
				</div>
			</Tooltip>
			<Drawer title="消息" onClose={onClose} open={open}>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Drawer>
		</div>
	);
}

export default ReloadIcon;
