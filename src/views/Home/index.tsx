import "./Home.less"
import { useState } from "react";
import { Button, ConfigProvider } from "antd";
import home_banner from "@/assets/svg/home_banner2.svg"
import {SignalFilled, FireFilled} from "@ant-design/icons"
import RadialbarCharts from "./RadialbarCharts";


function Home () {

    const banner_charts_list = [
        { percent: 70, text: "成交额", icon: <SignalFilled style={{fontSize:"5rem"}} />, count: "34,765" },
        { percent: 54, text: "单量", icon: <FireFilled style={{fontSize:"5rem"}} />, count: "2,765" }
    ]
    
    return (
        <div className="home">
            <div className="banner">
                <div className="banner-content">
                    <div className="banner-content-left">
                        <h2>欢迎回来</h2>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything.</p>
                        <Button type="primary"> Go now </Button>
                    </div>
                    <div className="banner-content-right">
                        <img src={home_banner} alt="" />
                    </div>
                </div>
                <div className="banner-charts">
                
                <ConfigProvider
                    theme={{
                        components: {
                        Progress: {
                            /* 这里是你的组件 token */
                            circleTextColor: "#fff",
                            remainingColor: "rgba(255, 255, 255, 0.3)",
                            circleTextFontSize: "1.5rem",
                        },
                        },
                    }}
                    >
                        {
                        banner_charts_list.map((item, index) => {
                            return <RadialbarCharts key={item.text} percent={item.percent} text={item.text} icon={item.icon} count={item.count} />
                        })
                    }
                        </ConfigProvider>
                    
                </div>
            </div>
        </div>
    )
};
 
export default Home;