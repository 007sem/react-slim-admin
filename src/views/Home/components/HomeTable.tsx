import Card from "@/components/Card";
import { Table, ConfigProvider } from "antd";
import { useCommonStore } from "@/hooks/useCommonStore"; 

export default function HomeTable({
	data,
	columns,
}: {
	data: object[];
	columns: object[];
}) {

	const { themeStyle } = useCommonStore()

	return (
		<Card
			border="true"
			style={{
				padding: "1rem",
			}}
		>
			<ConfigProvider
				theme={{
					components: {
						Table: {
							/* 这里是你的组件 token */
							rowExpandedBg: "#bbffaa",
							
							headerBorderRadius:0,
							rowHoverBg: themeStyle.bgc3,
							headerBg: themeStyle.bgc2,
							headerColor: themeStyle.textColor,
							bodySortBg:"red",
						},
					},
				}}
			>
				<Table dataSource={data} columns={columns} pagination={false} />
			</ConfigProvider>
		</Card>
	);
}
