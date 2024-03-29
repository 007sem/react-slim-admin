import CircleProgress from "@/components/CircleProgress";
import { ReactNode } from "react";
import { useCommonStore } from "@/hooks/useCommonStore"; 

interface RadialbarChartsProps {
	percent: number;
	count: number | string;
	text: string;
	bgc: string,
	icon: ReactNode;
}

function RadialbarCharts({ percent, text, icon, count, bgc }: RadialbarChartsProps) {

	const {themeStyle} = useCommonStore();

	return (
		<div className="banner-charts-item" style={{background:bgc, color:themeStyle.textColor}}>
			<CircleProgress percent={percent} size={84} strokeWidth={6} strokeColor="#7AF8FF" />
            <div className="text">
                <h3>{count}</h3>
                <p>{text}</p>
            </div>
            <div className="icon" style={{color:"#FFF"}}>
                {icon}
            </div>
		</div>
	);
}

export default RadialbarCharts;
