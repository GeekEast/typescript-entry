### Config Typescript Compiler
```sh
tsc --init
```

### Key configs of Compiler
Attribute |  Description | Value 
----------|-----------|---------
rootDir | the location files to be compiled | `./build`
outDir | the location to compile to | `.src`

### Run Typescript Compiler
```sh
tsc
# watch the change of source files and recompile
tsc -w
```


### Concurrently run scripts
```sh
yarn add nodemon concurrently
```
- config package.json file
- run the `Typescript` Compiler at first
- run the `nodemon` to run common js file
```json

"scripts": {
	"start:build": "tsc -w",
	"start:run": "nodemon build/index.js",
	"start": "concurrently npm:start:*"
},
```


### Getter Setter Method
```javascript
class Company {
	name;

	constructor(name: string){
		this.name = name;
	}

	get companyName(): string {
		return this.name;
	}
}
const company = new Company('Alibaba')
// here
company.companyName // don't have to include ();
```

### Some Javascript
```javascript
"x".charCodeAt(0);
// used to qubie string, number, boolean, object, function, symbol and  undefined
typeof // null and array will return object.
// used to differentiate things of objects: null, array
instanceof
// most accurate one
Object.prototype.toString.call(1)
```

### Milestone
#### Use interface
- When to use: Extract the common `protocols` from many different classes. 
```javascript
interface Sortable {
	length: number;
	compare(){
	}
	swap(){
	}
}

class Car implements Sortable{
	length: number;
	constructor(length: number) {
		this.number = number;
	}
	compare(){}{
		// return sth
	}
	swap(){
		// return sth
	}
}

const car = new Car(100);
// To sort sth, sth only need length, compare() and swap(); very custom constraints but it works.
sort(car);
```
#### Use Abstract Class
- When to use: You want to share same variables or function in many classes.
- Advantage: combine the advantages of `class inheritance` and `interface implementation`. You could pass common `concrete` attributes or functions to child class as well as only `protocols` to set `abstract` requirements for child class.
```javascript
abstract class Sorter {
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
```
```javascript
import Sorter from './Sorter';
class StringCollection extends Sorter {
	constructor(public data: string) {
		super();
		this.data = data;
	}

	get length() {
		return this.data.length;
	}

	compare(leftIndex: number, rightIndex: number): boolean {
		return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
	}

	swap(leftIndex: number, rightIndex: number): void {
		const characters = this.data.split('');

		const temp = characters[leftIndex];
		characters[leftIndex] = characters[rightIndex];
		characters[rightIndex] = temp;

		this.data = characters.join('');
	}

	forEach(func: (s: string) => void) {
		func(this.data);
	}
}
```

```javascript
const stringCollection = new StringCollection('aaxxaXaXbccd');
stringCollection.sort();
stringCollection.forEach((e) => console.log(e));
```



