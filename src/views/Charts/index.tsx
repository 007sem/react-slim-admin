import { useEffect, useState, ReactNode } from "react";
import { Row, Col } from "antd";
import "./charts.less";
import bag from "@/assets/image/ic_glass_bag.png";
import buy from "@/assets/image/ic_glass_buy.png";
import message from "@/assets/image/ic_glass_message.png";
import users from "@/assets/image/ic_glass_users.png";

import TopCard from "./components/TopCard";
import ChartArea from "./components/ChartArea";
import ChartPie from "./components/ChartPie";


interface TopCardProps {
    icon: ReactNode,
    bgc: string,
    value: string,
    text: string,
    color: string,
}

function Charts() {
	const [topCardList, setTopCardList] = useState<TopCardProps[]>([]);

	useEffect(() => {
		// 模拟topCardList数据
		/*
        {
            icon,
            bgc,
            value,
            text,
        }
        */
		setTopCardList([
            {
                icon: <img src={bag}></img>,
                bgc: '#CDE5F8',
                value: '714k',
                text: 'Weekly Sales',
                color: "#006DC7"
            },
            {
                icon: <img src={users}></img>,
                bgc: '#CCEDF4',
                value: '1.35m',
                text: 'New Users',
                color: "#0092B3"
            },
            {
                icon: <img src={buy}></img>,
                bgc: '#FBE1D8',
                value: '1.72m',
                text: 'New Orders',
                color: "#D95834"
            },
            {
                icon: <img src={message}></img>,
                bgc: '#FBDAD3',
                value: '234',
                text: 'Issue',
                color: "#D93A1E"
            },
        ])

	}, []);

	return (
		<div className="charts">
			<Row gutter={[16, 16]} className="mb-16">
				{
					topCardList.map((item, index) => {
						return (
                            <Col span={6} key={item.text}>
                                <TopCard color={item.color} icon={item.icon} bgc={item.bgc} value={item.value} text={item.text}/>
                            </Col>
                        )
					})
                }
			</Row>
            <Row gutter={[16, 16]} className="mb-16">
                <Col span={16}>
                    <ChartArea />
                </Col>
                <Col span={8}>
                    <ChartPie />
                </Col>
            </Row>
		</div>
	);
}

export default Charts;
