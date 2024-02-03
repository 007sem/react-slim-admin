import { BellOutlined } from "@ant-design/icons";
import iconStyle from "./iconStyleConfig";
import "./iconStyle.less";


function ReloadIcon() {
	

	return (
			<div className="header-icon-hover">
				<BellOutlined style={iconStyle} />
			</div>
	);
}

export default ReloadIcon;
