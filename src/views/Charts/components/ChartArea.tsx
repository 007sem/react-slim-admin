import Charts from "@/components/Charts";
import Card from "@/components/Card";

import type { Props as ApexChartProps } from "react-apexcharts";
import { useCommonStore } from "@/hooks/useCommonStore";

function ChartArea() {
	const { themeStyle, theme } = useCommonStore();

	const series = [
		{
			name: "Team A",
			data: [31, 40, 28, 51, 42, 109, 100],
		},
		{
			name: "Team B",
			data: [11, 32, 45, 32, 34, 52, 41],
		},
	];
	const op = {
		chart: {
			height: 350,
			type: "area",
			toolbar: {
				show: false,
			},
			foreColor: themeStyle.textColor
		},
		dataLabels: {
			enabled: false,
			// show: false
		},
		stroke: {
			curve: "smooth",
		},
		xaxis: {
			type: "datetime",
			categories: [
				"2018-09-19T00:00:00.000Z",
				"2018-09-19T01:30:00.000Z",
				"2018-09-19T02:30:00.000Z",
				"2018-09-19T03:30:00.000Z",
				"2018-09-19T04:30:00.000Z",
				"2018-09-19T05:30:00.000Z",
				"2018-09-19T06:30:00.000Z",
			],
			
		},
		tooltip: {
			// fixed: {
			// 	enabled: false,
			// },
			theme: theme,
			x: {
				show: false,
			},
			style: {
				color:"red",
			  },
			onDatasetHover: {
				highlightDataSeries: false,
			},

		},
		legend: {
			position: "top",
			horizontalAlign: "right",
			offsetX: -10,
			labels: {
				colors: themeStyle.textColor,
			},
		},
	} as ApexChartProps;

	return (
		<Card
			border="true"
			title="Area Chart"
			style={{
				padding: "1rem",
			}}
		>
			<Charts options={op} series={series} type="area" height="350" />
		</Card>
	);
}

export default ChartArea;
