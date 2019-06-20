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