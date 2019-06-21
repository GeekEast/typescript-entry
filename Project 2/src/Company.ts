import faker from 'faker';

export class Company {
	name: string;

	constructor() {
		this.name = faker.company.companyName();
	}
}
