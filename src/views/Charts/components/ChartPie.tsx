import Charts from "@/components/Charts";
import Card from "@/components/Card";

import type { Props as ApexChartProps } from "react-apexcharts";

function ChartPie() {

    const series = [44,  13, 43, 22]

	const op = {
		chart: {
            height: 350,
			type: "pie",
		},
		labels: ["Team A", "Team B", "Team C", "Team D",],
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200,
					},
					legend: {
						position: "bottom",
					},
				},
			},
		],
        legend: {
            position: 'top',
            horizontalAlign: 'center',
          },
	} as ApexChartProps

	return (
		<Card
			border="true"
			title="Pie Chart"
			style={{
				padding: "1rem",
			}}
		>
			<Charts options={op} series={series} type="pie" height="350" />
		</Card>
	);
}

export default ChartPie;
