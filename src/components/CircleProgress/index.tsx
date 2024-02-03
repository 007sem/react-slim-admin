import { Progress, ConfigProvider } from "antd";

interface CircleProgressProps {
	percent: number;
	size?: number; // 尺寸
	strokeWidth?: number; // 粗细
	strokeColor?: string; // 颜色
    circleTextColor?: string; // 文字颜色
    remainingColor?: string; // 剩余百分比文字颜色
    circleTextFontSize?: string; // 进度条文字大小
}

function CircleProgress({
	percent,
	size,
	strokeWidth,
	strokeColor,
    circleTextColor,
    remainingColor,
    circleTextFontSize
}: CircleProgressProps) {
	// 设置默认值
	size = size || 84;
	strokeWidth = strokeWidth || 6;
	strokeColor = strokeColor || "#7AF8FF";
    circleTextColor = circleTextColor || "#fff";
    remainingColor = remainingColor || "rgba(255, 255, 255, 0.3)";
    circleTextFontSize = circleTextFontSize || "1.5rem";

	return (
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
			<Progress
				type="circle"
				percent={percent}
				size={size}
				strokeWidth={strokeWidth}
				strokeColor={strokeColor}
			/>
		</ConfigProvider>
	);
}

export default CircleProgress;
