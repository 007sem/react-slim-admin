import { faker } from "@faker-js/faker";

export type GoodsType = {
    key: string,
    image: string,
    name: string,
    price: number | string,
    description: string,
    totalSales:  number | string,
}


function createRandomGoods(): GoodsType {

    return {
        key: faker.string.uuid(),
        image: faker.image.url({width:200,height:200}),
        name: faker.commerce.productName().split(" ")[0],
        price: faker.commerce.price({max:80}),
        description: faker.commerce.productDescription(),
        totalSales: faker.commerce.price({min:500,max:3000}),
    } 
}

export function generateGoods(size: number) {
    return faker.helpers.multiple(createRandomGoods, {
		count: size,
	});
}