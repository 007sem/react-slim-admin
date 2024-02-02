import ApexCharts from "react-apexcharts";

interface SeriesItem {
	name: string;
	data: number[];
}

interface ChartsProps {
	series: SeriesItem[];
	options: any;
	type: string;
	width: string;
}

function Charts({ ...props }: ChartsProps) {
	return <ApexCharts  />;
}

export default Charts;
