import "./Home.less";
import { useState } from "react";
import { Button, ConfigProvider } from "antd";
import home_banner from "@/assets/svg/home_banner2.svg";
import { SignalFilled, FireFilled } from "@ant-design/icons";
import RadialbarCharts from "./RadialbarCharts";
import TotalCard from "./TotalCar";
import { Col, Row, Space } from "antd";

function Home() {
	const banner_charts_list = [
		{
			percent: 70,
			text: "今日成交额",
			icon: <SignalFilled style={{ fontSize: "5rem" }} />,
			count: "34,765",
		},
		{
			percent: 54,
			text: "今日单量",
			icon: <FireFilled style={{ fontSize: "5rem" }} />,
			count: "2,765",
		},
	];
	const week_charts_list = [
		{
			text: "周访问量",
			count: "394",
			percent: "+2.87%",
			chartsData: [46, 58, 33, 27, 65, 90, 75],
		},
		{
			text: "周成交额",
			count: "1,186",
			percent: "+0.6%",
			chartsData: [130, 156, 184, 162, 146, 210, 198],
		},
		{
			text: "周单量",
			count: "342",
			percent: "-9.7%",
			chartsData: [22, 35, 47, 39, 55, 81, 63],
		},
	];

	return (
		<div className="home">
			<div className="banner">
				<div className="banner-content">
					<div className="banner-content-left">
						<h2>欢迎回来</h2>
						<p>
							If you are going to use a passage of Lorem Ipsum,
							you need to be sure there is not anything.
						</p>
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
						{banner_charts_list.map((item, index) => {
							return (
								<RadialbarCharts
									key={item.text}
									percent={item.percent}
									text={item.text}
									icon={item.icon}
									count={item.count}
								/>
							);
						})}
					</ConfigProvider>
				</div>
			</div>
			<Row className="total-charts" gutter={[16, 16]}>
				{week_charts_list.map((item, index) => (
					<Col span={8} key={item.text}>
						<TotalCard  data={item} />
					</Col>
				))}
			</Row>
		</div>
	);
}

export default Home;
