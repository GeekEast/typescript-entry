export default abstract class Sorter {
	abstract compare(leftIndex: number, rigthIndex: number): boolean;
	abstract swap(leftIndex: number, rightIndex: number): void;
	abstract get length(): number;

	// ? means optional
	sort(): void {
		const unsorted = this;
		const n = this.length;
		for (let i = 1; i < n; i++) {
			for (let j = 0; j < n - i; j++) {
				if (unsorted.compare(j, j + 1)) unsorted.swap(j, j + 1);
			}
		}
	}
}
