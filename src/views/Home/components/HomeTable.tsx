import Card from "@/components/Card";
import { Table, ConfigProvider } from "antd";

export default function HomeTable({
	data,
	columns,
}: {
	data: object[];
	columns: object[];
}) {
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
							bodySortBg: "#fff",
							headerBg: "#fff",
						},
					},
				}}
			>
				<Table dataSource={data} columns={columns} pagination={false} />
			</ConfigProvider>
		</Card>
	);
}
