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

// function
const run: (x: number) => void = (x: number) => {
    console.log('Start');
}

// mutiple types annotation
const n: number | boolean;
```

### Type Inference
`if variable declaration and variable initialization are on the same line`
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
