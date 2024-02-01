import { Avatar, Dropdown, message } from "antd";
import type { MenuProps } from "antd";
import config from "@/config";
import { useNavigate } from "react-router-dom";

function AvatarComponent() {

    const navtigate = useNavigate()

	const items: MenuProps["items"] = [
		{
			key: "1",
			label: "admin@163.com",
		},
		{
			type: "divider",
		},
		{
			key: "goToHome",
			label: "工作台",
		},
		{
			type: "divider",
		},
		{
			key: "logout",
			label: <div style={{ width: "6rem" }}>退出登录</div>,
			danger: true,
		},
	];
	const onClick: MenuProps["onClick"] = ({ key }) => {
        switch (key) {
            case "logout":
                // 退出登录逻辑
                logout()
                break;
            case "goToHome":
                goToHome()
                break;
            default:
                break;
        }

	};

    function logout () {
        localStorage.removeItem(config.TOKEN_NAME);
        navtigate("/login")
    }

    function goToHome () {
        navtigate("/")
    }


	return (
		<Dropdown menu={{ items, onClick }} placement="bottomRight">
			<Avatar />
		</Dropdown>
	);
}

export default AvatarComponent;
