import create from "zustand";
import { TodoDto } from "../Services/TodoService";

type TodoProvider = {
  todos: TodoDto[];
  addTodo: (todo: TodoDto) => void;
  removeTodo: (id: string) => void;
  updateTodo: (todo: TodoDto) => void;
  clearTodos: () => void;
};

export const useTodoProvider = create<TodoProvider>((set, get) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (id: string) =>
    set((state) => ({
      todos: state.todos.filter((todo: TodoDto) => todo.id !== id),
    })),
  updateTodo: (todo) =>
    set((state) => ({
      todos: state.todos.map((item) => (item.id === todo.id ? todo : item)),
    })),
  clearTodos: () => set({ todos: [] }),
}));
