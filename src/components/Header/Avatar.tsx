import { Avatar, Dropdown } from "antd";
import type { MenuProps } from "antd";
import config from "@/config";
import { useNavigate } from "react-router-dom";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";

function AvatarComponent() {

	const [avatarUrl, setAvatarUrl] = useState<string>("")
	useEffect(()=>{
		setAvatarUrl(faker.image.avatarLegacy())
	},[])

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
		<Dropdown menu={{ items, onClick }} placement="bottomRight" trigger={["click"]}>
			<Avatar src={avatarUrl} style={{cursor:"pointer"}} />
		</Dropdown>
	);
}

export default AvatarComponent;
