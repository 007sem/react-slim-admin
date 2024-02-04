import Card from "@/components/Card";
import { generateUser } from "@/faker/user";
import { Table, Avatar, ConfigProvider } from "antd";

function TopStaff() {
	let users = generateUser(5);

  users = users.sort((a, b) => b.orders - a.orders);
	console.log(users);

  // 


	// id: string;
	// sex: string;
	// avatar: string;
	// name: string;
	// email: string;
	// sales: number;
	// orders: number;

	const columns = [
		{
			title: "Staff",
			dataIndex: "name",
			key: "name",
			render: (_:any, { avatar, name }: { avatar: string; name: string }) => {
				return (
					<div>
						<Avatar
							src={avatar}
							size={32}
							style={{ marginRight: 16 }}
						/>
						<span>{name}</span>
					</div>
				);
			},
		},
		{
			title: "Emial",
			dataIndex: "email",
			key: "email",
		},
		{
			title: "Orders",
			dataIndex: "orders",
			key: "orders",
		},
		{
			title: "Sales",
			dataIndex: "sales",
			key: "sales",
		},
	];

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
				<Table
					dataSource={users}
					columns={columns}
					pagination={false}
				/>
			</ConfigProvider>
		</Card>
	);
}

export default TopStaff;
