import { Injectable } from '@nestjs/common';
import { TodoDto } from './todo.dto';
import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodoService {
  private readonly filePath = 'todos.json';

  private readTodosFromFile(): TodoDto[] {
    try {
      const data = fs.readFileSync(this.filePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  private writeTodosToFile(todos: TodoDto[]) {
    fs.writeFileSync(this.filePath, JSON.stringify(todos, null, 2));
  }

  getAll(): TodoDto[] {
    return this.readTodosFromFile();
  }

  getById(id: string): TodoDto | undefined {
    const todos = this.readTodosFromFile();
    return todos.find((todo) => todo.id === id);
  }

  create(todo: TodoDto): TodoDto {
    const todos = this.readTodosFromFile();
    const newTodo = {
      ...todo,
      id: uuidv4(),
    };
    todos.push(newTodo);
    this.writeTodosToFile(todos);

    return newTodo;
  }

  update(todo: TodoDto): TodoDto | undefined {
    const todos: any = this.readTodosFromFile();
    const index = todos.findIndex((item) => item.id === todo.id);
    if (index === -1) {
      return undefined;
    }
    todos[index] = {
      ...todo,
      editedData: new Date(),
    };
    this.writeTodosToFile(todos);
    return todos[index];
  }

  delete(id: string): boolean {
    const todos = this.readTodosFromFile();
    const index = todos.findIndex((item) => item.id === id);
    if (index === -1) {
      return false;
    }
    todos.splice(index, 1);
    this.writeTodosToFile(todos);
    return true;
  }
}
