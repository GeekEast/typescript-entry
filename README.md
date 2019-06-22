### Project Structure
Project Name | Description
-------------|------------
Project 1 | Compile and run Typecript file in `node.js`
Project 2 | Run Typescript file in Modern `Browser`
Project 3 | Sort array, linked-list and string; OOP


### What is Typescript?
`Typescript = JavaScript + Type System`
- [Playground](https://www.typescriptlang.org/play/index.html)
### Main Features
- `type` annotations to analyze code and debug
- only active during development
- doesn't provide and performance optimization.

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
- Different from multiple types
- It define the relationship between postion and type - `Order Matters`
```javascript
var person: [number, string, boolean] = [1, "Steve", true];

var employee: [number, string][];
employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
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
