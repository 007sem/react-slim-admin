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
			style={{
				border: "1px solid #ccc",
				padding: "1rem",
			}}
		>
			<ConfigProvider
				theme={{
					components: {
						Table: {
							/* 这里是你的组件 token */
							bodySortBg: "#fff",
						},
					},
				}}
			>
				<Table dataSource={data} columns={columns} pagination={false} />
			</ConfigProvider>
		</Card>
	);
}
