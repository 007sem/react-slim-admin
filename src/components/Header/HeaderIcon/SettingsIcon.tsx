import { SettingOutlined } from "@ant-design/icons";
import { useIconStyle } from "./iconStyleConfig";
import "./iconStyle.less";
import { Tooltip } from "antd";
import { ReactNode, useState } from "react";
import { useCommonStore } from "@/hooks/useCommonStore"; 

import Drawer from "@/components/Drawer"

import ChooseTheme from "./settings/ChooseTheme";
import Stretch from "./settings/Stretch";
import PageSetting from "./settings/PageSetting";

function ReloadIcon() {
	const [open, setOpen] = useState(false);
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
			{/* @ts-ignore */}
			<Drawer title={"設置"} onClose={onClose} open={open} width="20rem">
				<SettingItem title="Theme">
					<ChooseTheme />
				</SettingItem>
				<SettingItem title="Stretch">
					<Stretch />
				</SettingItem>
				<SettingItem title="Page">
					<PageSetting />
				</SettingItem>
			</Drawer>
		</div>
	);
}

interface SettingItemProps {
	title: string;
	children?: ReactNode;
}

function SettingItem({ title, children }: SettingItemProps) {

	const { themeStyle } = useCommonStore()

	return (
		<div style={{margin:"0 0 1.4rem"}}>
			<div
				style={{
					color: themeStyle.textColor,
					fontSize: "1.2rem",
					fontWeight: "600",
					marginBottom: " .8rem",
				}}
			>
				{title}
			</div>
			{children}
		</div>
	);
}

export default ReloadIcon;
