import { useState, useEffect } from "react";

import { generateUser } from "@/faker/user";
import { Avatar } from "antd";
import HomeTable from "./components/HomeTable";

function TopStaff() {
	const [users, setUsers] = useState<any[]>([]);

	useEffect(() => {
		setUsers(generateUser(5).sort((a, b) => b.orders - a.orders));
	}, []);

	const columns = [
		{
			title: "Top Staff",
			dataIndex: "name",
			key: "name",
			render: (
				_: any,
				{ avatar, name }: { avatar: string; name: string }
			) => {
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

	return <HomeTable data={users} columns={columns} />;
}

export default TopStaff;
