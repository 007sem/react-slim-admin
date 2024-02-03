import { SettingOutlined } from "@ant-design/icons";
import iconStyle from "./iconStyleConfig";
import "./iconStyle.less";

function ReloadIcon() {
	return (
		<div className="icon-wrapper">
			<div className="header-icon-hover">
				<SettingOutlined style={iconStyle} />
			</div>
		</div>
	);
}

export default ReloadIcon;
