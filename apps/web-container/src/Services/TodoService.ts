import { Http } from "./Http";

export interface TodoDto {
  id?: string;
  description: string;
  addedDate: Date;
  completed: boolean;
  editedDate: Date;
}

export class TodoService {
  private readonly todos: TodoDto[] = [];
  private http: Http = new Http();
  private baseUrl: string = "http://localhost:3001";
  static instance: any;
  constructor() {
    if (TodoService.instance) {
      return TodoService.instance;
    }
    return this;
  }

  static getInstace() {
    if (!this.instance) {
      this.instance = new TodoService();
    }
    return this.instance;
  }

  async create(todo: TodoDto) {
    let data;
    let error;
    const response = await this.http.post<TodoDto>(
      `${this.baseUrl}/todos`,
      todo,
    );
    try {
      data = response;
    } catch (er) {
      error = er;
    }
    return [data, error];
  }

  async findAll(): Promise<[TodoDto[], Error | null]> {
    let data: TodoDto[] = [];
    let error: any = null;
    const response = await this.http.get<TodoDto[]>(`${this.baseUrl}/todos`);
    try {
      data = response;
    } catch (er) {
      error = er;
    }
    return [data, error];
  }

  async update(todo: TodoDto) {
    let data;
    let error;
    const response = await this.http.put<TodoDto>(
      `${this.baseUrl}/todos`,
      todo,
    );
    try {
      data = response;
    } catch (er) {
      error = er;
    }
    return [data, error];
  }

  async delete(id: string) {
    let data;
    let error;
    const response = await this.http.delete<TodoDto>(
      `${this.baseUrl}/todos/${id}`,
    );
    try {
      data = response;
    } catch (er) {
      error = er;
    }
    return [data, error];
  }
}
