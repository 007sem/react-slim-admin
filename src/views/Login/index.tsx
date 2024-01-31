import "./login.less";
import Login_svg from "@/assets/svg/login_img.svg";
import react_logo from "@/assets/react.svg";
import { Input, Button, Checkbox } from "antd";
import { UserOutlined, KeyOutlined,  } from "@ant-design/icons";

import config from "@/config";

import { useState } from "react";

const defaultAccount = {
    username: "admin",
    password: "123456"
}

function Login() {

    const [username, setUsername] = useState<string>()
    const [password, setPassword] = useState<string>()

    function usernameChange(e: any) {
        setUsername(e.target.value)
    }

    function passwordChange(e: any) {
        setPassword(e.target.value)
    }

    function login() {
        if (username === defaultAccount.username && password === defaultAccount.password) {
            localStorage.setItem(config.TOKEN_NAME, "123456")
            window.location.href = "/"
        }  else {
            // 登录失败
            setUsername("")
            setPassword("")
        }
    }


	return (
		<div className="login">
			<div className="left">
				<h1>Slim Admin 轻到极致</h1>
				<img src={Login_svg} alt="" />
			</div>
			<div className="right">
				<div className="logo">
					<img src={react_logo} alt="" />
				</div>
				<h2>登录</h2>
				<Input
					className="input"
					size="large"
					placeholder="Account "
					prefix={<UserOutlined />}
                    onChange={usernameChange}
				/>

				<Input.Password
					className="input"
					size="large"
					placeholder="Password"
					prefix={<KeyOutlined />}
                    onChange={passwordChange}
				/>

				<div className="handle">
					<div className="check-box">
                        <Checkbox /> 记住我
                    </div>
                    <p>
                        忘记密码请联系管理员
                    </p>
				</div>

				<Button size="large" style={{ width: "100%" }} onClick={login}>
					登 录
				</Button>
			</div>
		</div>
	);
}

export default Login;
