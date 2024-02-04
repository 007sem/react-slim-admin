import { generateGoods } from "@/faker/goods"; 
import HomeTable from "./components/HomeTable";
import { Avatar } from "antd"

import { useEffect, useState } from "react"; 

function HotGoods () {
    const [goods, setGoods] = useState<any[]>([])

    useEffect(() => {
        setGoods(generateGoods(5))
    },[])
    
    const columns = [
		{
			title: "Hot Goods",
			dataIndex: "name",
			key: "name",
			render: (
				_: any,
				{ image, name }: { image: string; name: string }
			) => {
				return (
					<div>
						<Avatar
                            shape="square"
							src={image}
							size={32}
							style={{ marginRight: 16 }}
						/>
						<span>{name}</span>
					</div>
				);
			},
		},
		{
			title: "Price",
			dataIndex: "price",
			key: "price",
		},
		{
			title: "Total Sales",
			dataIndex: "totalSales",
			key: "totalSales",
		},
	];
    
    return (
        <HomeTable data={goods} columns={columns}></HomeTable>
    )
};
 
export default HotGoods;