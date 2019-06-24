### Project Initialization
```sh
npm --init
tsc --init  # typescript
```

### Add Dependencies
```sh
yarn add concurrently nodemon
```

### Add Project Folder
- src: source file
- build: compiled file by typescript

### Configure `tscondig.json`
- "outDir": "./build", 
- "rootDir": "./src",  

### Configure `package.json`
```json
{
    "scripts":{
        "start:build": "tsc -w",
        "start:run": "nodemon build/index.ts",
        "start": "concurrently npm:start:*"
    }
}
```

### Import Node Built-in Library
- This will cause Error.
- Although fs is from built-in libaray, but there is no type definition file for it.
```javascript
import fs from 'fs'; 
```
- Soluction:
```sh
yarn add @types/node
```


### Enum in Typescript
- When to use Enum: the declared enum won't change over time.
- you could add `enum` as a folder
- you could add `interface` as a folder
- you could add `class` with two sub-class `concrete` and `abstract`
```javascript
enum MatchResult = {
    Homewin = 'H',
    Awaywin = 'A',
    Draw = 'D'
};

const printEnum = (): MatchResult => {
    console.log(MatchResult.Homewin);
}
```

### Type Assertion
```javascript
sth as MatchResult // hey this sth is of type MatchResult
```

### Some Code Reuse
1. Extract some functions that can be resued again and again and set as a helper function in an `abstract class`. 这有点类似于React中的变量提升，将有些可以复用的东西提升到父类中，有的是protocol有的则是concrete, 不用重复写code；

### Generics
- A way to reuse code.
- Some clased are the same except the inside types. But we could pass the types as a paramete to the class to reuse the code, which is called generics.
- It's defined in class name.
```javascript
class HoldNumber {
    data: number;
}
class HoldString {
    data: string,
}

// -------- Class Generics ---------- //

class HoldAnything<T> {
    data: <T> 
}
const holdNumber = new HoldAnything<number>();

// -------- Class Generics ---------- //

function printStrings(){}
function printNumbers(){}

function printAnything<T>(arr: T[]){}


// -------- Interface for Generics --------- //
function printSth<T>(arr: T[]){
    T.print();
}

interface Printable{
    print(): void;
}
function printSth<T extends Printable>(arr: T[]){
    T.print();
}
```





### static 
- The same as it in java.
