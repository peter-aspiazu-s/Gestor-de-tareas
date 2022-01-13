import './styles.css';

import {Todo, TodoList, crearTodoHtml} from './classes/index.js';

export const todoList = new TodoList();

// todoList.todos.forEach(todo => crearTodoHtml(todo));
todoList.todos.forEach(crearTodoHtml); // esto es lo mismo que el de arriba, cuando pedimos un solo argumento y ese argumento es el primero se puede reducir.

console.log(todoList.todos);