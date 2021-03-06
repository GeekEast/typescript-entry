### Project Structure
| Project Name | Description                                  |
| ------------ | -------------------------------------------- |
| Project 1    | Compile and run Typecript file in `node.js`  |
| Project 2    | Run Typescript file in Modern `Browser`      |
| Project 3    | Sort array, linked-list and string; OOP      |
| Project 4    | Enum, Type Assertion, static, Generics       |
| Project 5    | Build a web framework                        |
| Project 6    | Use Typescript with Node.js                  |
| Project 7    | Use Typescript + Decorator in Express (Hard) |
| Project 8    | Use Typescript + React && Redux              |


### What is Typescript?
`Typescript = JavaScript + Type System`
- [Playground](https://www.typescriptlang.org/play/index.html)

### Main Features
- `type` annotations to analyze code and debug
- only active during development
- doesn't provide and performance optimization.
- `Typescript` is fully compatible with `Babel 7`
- 
### Types
`Type = Blueprint = Class in Java`
- Primitive Types:
  - number
  - boolean
  - void
  - undefined
  - string
  - symbol
  - null
- Object Types:
  - function
  - array
  - class
  - object

### Type Annotation
```javascript
// : number is an annotation
const age: number = 1;
const age: Date: new Date(); // built-in object
const colors: string[]: ['red', 'blue', 'green']; // array

// class
class myClass {}
const class1: myClass: new myClass();

// object literal
const point: {x: number, y:number} = {10,12};

// array
const markets: string[] = ['1','2','3'];

// function 1
const run: (x: number) => void = (x: number) => {
    console.log('Start');
}
// function 2: void means no return value
const run = (x: number): number => void {
    return x;
}

// function 3: never means no return value but with a Error
const run = (x:number): never => {
    throw new Error('err');
}
// function 4: deconstruction
const run = ({data, name}: {data: Date, name: string}): never => {
    throw new Error('err');
}

// mutiple types annotation
const n: number | boolean;
```

### Type Inference
`if variable declaration and variable initialization are on the same line`
- Hover your mouse over const to see the inference type
```javascript
// age will be inference the type of age as number
const age = 1;

// big will be type of any
let big;
big = 2

// fix the above example
let bug: number;
big = 2;
```

### Annotation vs Inference
- Try to use Inference `as much as you can` if if can reference exact the type.
- Try to avoid return type as `any`

### Tuple
- Different from `tuple` in python
- Different from multiple types `|`
- It define the relationship between postion and type - `Order Matters`
- It define an `array` in a strict way
```javascript
var person: [number, string, boolean] = [1, "Steve", true];

var employee: [number, string][];
employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
```
```javascript
type MatchTable: [string, number, number, string, boolean];
const match = (e:number):MatchTable =>{ sth } 
// MatchTable[] is also usable.
```

### Interface
- beside type, interface also define `property name`
- interface require minimum number of properties, you could `add more`
- Compared to annotation, interface can be highly `reused`
```javascript
interface Vehicle {
    // core 是分号不是逗号
    name: string;
    age: number
}

interface Reportable {
    summary(): string;
}
class Car implements Reportable {
    // you must override summary method in Reportable interface.
}

const vehicle: Vehicle = {
    name: 'hello', age:12
}
```


### Class
```javascript
class Vehicle {
    public drive(): void {
        console.log('start go go go')
    }
}
// inheritance
class Car extends Vehicle{
    color: string = 'red'; // 是分号
    constructor(color: string){
        // initialize
        this.color = color;
    }
    // this is override
    private drive(): void {
        super.drive()
    }
}

// shortcut of above
class Car extends Vehicle{
    // public will create public instance variable color for this class.
    constructor(public color: string){
        // you must call the super call at first
        super(color); 
        // or super('hello world')
    }
    // this is override
    private drive(): void {
        super.drive()
    }
}
```

### Type Declaration
- To inspect type file: `Command` + `Click`
```sh
yarn add @types/faker
```

### Enum
- **When**: declare some const that `won't` change over time
  - you could add `enum` as a folder
  - you could add `interface` as a folder
```javascript
enum MatchResult {
	Homewin = 'H',
	Awaywin = 'A',
	Draw = 'D'
}

const printEnum = (): MatchResult => {
	return MatchResult.Homewin;
};
```

### Type Assertion
- `<>`
```javascript
let x: any = "Hi there";
let s = (<string>x).substring(0, 3);
```
- `as`
```javascript
let x: any = "Hi there";
let s = (x as string).substring(0, 3);
```

### Decorators
[GeekEast Decorators](https://geekeast.github.io/tsdecorators.html)

### Session & Cookies
[Express Session](https://flaviocopes.com/express-sessions/)


### Export && Import
```javascript
export { name1, name2, …, nameN };
export { variable1 as name1, variable2 as name2, …, nameN };
export let name1, name2, …, nameN; // also var
export let name1 = …, name2 = …, …, nameN; // also var, const

export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };

export * from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
```

```javascript
import defaultMember from "module-name";
import * as name from "module-name";
import { member } from "module-name";
import { member as alias } from "module-name";
import { member1 , member2 } from "module-name";
import { member1 , member2 as alias2 , [...] } from "module-name";
import defaultMember, { member [ , [...] ] } from "module-name";
import defaultMember, * as name from "module-name";
import "module-name";
```



