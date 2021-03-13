import { createSimate } from 'simate';
import { ITodo } from './Todo';

let ID = 0;
function genID() {
  return ++ID;
}

const todos = createSimate<ITodo[]>([]);

function addTodo(title: string): void {
  if (!title) return;

  const todo: ITodo = {
    id: genID(),
    title,
    completed: false
  };

  todos.set((prev) => {
    return [...prev, todo];
  });
}

function removeTodo(id: number): void {
  todos.set((prev) => prev.filter((todo) => todo.id !== id));
}

function toggleComplete(id: number): void {
  todos.set((prev) => {
    const updatedTodos = prev.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    return updatedTodos;
  });
}

const simates = {
  todos
};

const actions = {
  addTodo,
  toggleComplete,
  removeTodo
};

export { simates, actions };
