import Sorter from './Sorter';

export default class NumberCollection extends Sorter {
	constructor(public data: number[]) {
		super();
		this.data = data;
	}

	get length(): number {
		return this.data.length;
	}

	compare(leftIndex: number, rightIndex: number): boolean {
		return this.data[leftIndex] > this.data[rightIndex];
	}

	swap(leftIndex: number, rightIndex: number) {
		const temp = this.data[leftIndex];
		this.data[leftIndex] = this.data[rightIndex];
		this.data[rightIndex] = temp;
	}

	forEach(func: (e: number) => void) {
		for (let i = 0; i < this.length; i++) {
			func(this.data[i]);
		}
	}
}
