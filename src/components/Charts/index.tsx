import ApexCharts from "react-apexcharts";
import { memo } from "react"; 
import type { Props as ApexChartProps } from 'react-apexcharts';

function Charts(props : ApexChartProps) {

	return <ApexCharts {...props} />;
}

export default memo(Charts);
