import { generateGoods } from "@/faker/goods"; 
import HomeTable from "./components/homeTable";
import { Avatar } from "antd"


function HotGoods () {
    const goods = generateGoods(5)
    // id: string,
    // image: string,
    // name: string,
    // price: number | string,
    // description: string,
    // totalSales:  number | string,

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