import { writable, type Writable } from "svelte/store";

interface Todo {
  text: string;
  completed: boolean;
  id: number;
}

export const todos: Writable<Todo[]> = writable([]);

export const addTodo = (text: string): void => {
  todos.update((currentValue: Todo[]) => {
    const newTodos = [ ...currentValue, { text, completed: false, id: Date.now() } ];

    return newTodos;
  })
}

export const deleteTodo = (id: number): void => {
  todos.update((currentValue: Todo[]) => {
    return currentValue.filter(todo => todo.id !== id);
  })
}

export const toggleCompletedTodo = (id: number): void => {
  todos.update((todos: Todo[]) => {
    let index = -1;
    for(let i = 0; i < todos.length; i++) {
      if(todos[i].id === id) {
        index = i;
        break;
      }
    }
    if(index !== -1) {
      todos[index].completed = !todos[index].completed;
    }
    return todos;
  })
}
