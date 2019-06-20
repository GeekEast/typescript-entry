### Install Typescript Globally
```sh
yarn global add typescript ts-node
# check it is installed or not
tsc --help
```

### Intialize Project
```sh
npm init --yes
touch index.ts
```

### Compile and Run
- Method 1
```sh
tsc index.ts
node index.js
```
- Method2
```sh
ts-node index.ts
```

### Fake Json API
[JSONPlaceholder](https://jsonplaceholder.typicode.com/)

### Code
```javascript
import axios from 'axios';

// core code 1: interface constraints on object type
interface Todo {
    id: number,
    title: string,
    completed: boolean
}

// core code 2: type declaration in function parameters
const logTodo = (id: number, completed: boolean, title: string) => {
    console.log(id, completed, title )
}

const url = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(url).then(res => {
    // code code 1: implement interface
    const todo = res.data as Todo;
    const id = todo.id;
    const completed = todo.completed;
    const title = todo.title;
    // core: typescript will check the type with interface here
    logTodo(id, completed, title);
}).catch(e => console.log(e));
```
### Conclusion from code 
`Type check by the program -> Less Bugs`

### Hints
- What is the difference between require and import?
  - require is commonJS, don't need `babel`
  - import is ES6 which `requires babel` to complile to javascript to run.