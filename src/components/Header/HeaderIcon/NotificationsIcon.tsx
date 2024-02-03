import { BellOutlined } from "@ant-design/icons";
import iconStyle from "./iconStyleConfig";
import "./iconStyle.less";


function ReloadIcon() {
	

	return (
		<div className="icon-wrapper">
			<div className="header-icon-hover">
				<BellOutlined style={iconStyle} />
			</div>
		</div>
			
	);
}

export default ReloadIcon;
