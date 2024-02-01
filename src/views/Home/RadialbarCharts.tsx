import { Progress } from "antd";
import { ReactNode } from "react";

interface RadialbarChartsProps {
	percent: number;
	count: number | string;
	text: string;
	icon: ReactNode;
}

function RadialbarCharts({ percent, text, icon, count }: RadialbarChartsProps) {
	return (
		<div className="banner-charts-item">
			<Progress type="circle" percent={percent} size={84} strokeWidth={6} strokeColor="#7AF8FF" />
            <div className="text">
                <h3>{count}</h3>
                <p>{text}</p>
            </div>
            <div className="icon">
                {icon}
            </div>
		</div>
	);
}

export default RadialbarCharts;
