import Sorter from './Sorter';

class Node {
	next: Node | null = null;
	constructor(public data: number) {}
}

export default class LinkedListCollection extends Sorter {
	head: Node | null = null;

	add(data: number) {
		const node = new Node(data);
		if (!this.head) return (this.head = node);
		let tail = this.head;
		while (tail.next) {
			tail = tail.next;
		}
		tail.next = node;
	}

	get length(): number {
		if (!this.head) return 0;
		let node = this.head;
		let length = 1;
		while (node.next) {
			length++;
			node = node.next;
		}
		return length;
	}

	at(index: number): Node {
		if (!this.head) throw new Error('index out of bound');

		let counter = 0;
		let node: Node | null = this.head;

		while (node) {
			if (counter === index) return node;
			counter++;
			node = node.next;
		}

		throw new Error('index out of bound');
	}

	compare(leftIndex: number, rightIndex: number): boolean {
		return this.at(leftIndex).data > this.at(rightIndex).data;
	}

	// 1 2 5 1; 1,3
	swap(leftIndex: number, rightIndex: number): void {
		if (leftIndex < 0 || rightIndex >= this.length) throw new Error('Index out of bound');

		const dummy_node = new Node(-1);
		dummy_node.next = this.head;
		this.head = dummy_node;

		// core process
		const left = this.at(leftIndex + 1);
		const right = this.at(rightIndex + 1);
		const copy_left = new Node(left.data);
		const copy_right = new Node(right.data);
		const prev_left = this.at(leftIndex);
		const prev_right = this.at(rightIndex);

		prev_left.next = copy_right;
		copy_right.next = left.next === right ? copy_left : left.next;
		prev_right.next = copy_left === right ? null : copy_left;
		copy_left.next = right.next;

		// remove the dummy node;
		this.head = dummy_node.next;
	}

	forEach(func: (node: number) => void) {
		let node = this.head;
		while (node) {
			func(node.data);
			node = node.next;
		}
	}
}
