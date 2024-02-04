import { faker } from "@faker-js/faker";



function createRandomUser() {
	return {
		key: faker.string.uuid(),
		sex: faker.helpers.arrayElement(["Male", "Female"]),
		avatar: faker.image.avatar(),
		name: faker.internet.userName(),
		email: faker.internet.email(),
		sales: faker.number.int(10000),
		orders: faker.number.int(200),
	};
}

export interface User {
	key: string;
	sex: string;
	avatar: string;
	name: string;
	email: string;
	sales: number;
	orders: number;
}

export function generateUser(size: number): User[] {
	return faker.helpers.multiple(createRandomUser, {
		count: size,
	});
}
