import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TodoDto } from './todo.dto';
import * as fs from 'fs';
import * as supertest from 'supertest';

describe('TodoController', () => {
  let app: any;
  const testFilePath = 'test-todos.json';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [TodoService],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('GET /todos', () => {
    it('should return an array of todos', () => {
      return supertest(app.getHttpServer())
        .get('/todos')
        .expect(200)
        .expect((response) => {
          expect(Array.isArray(response.body)).toBe(true);
        });
    });
  });

  describe('POST /todos', () => {
    it('should create a new todo', () => {
      const newTodo: TodoDto = {
        id: '13771e3a-161a-4710-bfc2-d1be33491220',
        description: 'Test Description',
      };
      return supertest(app.getHttpServer())
        .post('/todos')
        .send(newTodo)
        .expect(201)
        .expect((response) => {
          expect({
            description: response.body.description,
          }).toEqual({
            description: newTodo.description,
          });
        });
    });
  });

  describe('GET /todos/:id', () => {
    it('should return a todo by id', () => {
      const newTodo: TodoDto = {
        id: '13771e3a-161a-4710-bfc2-d1be33491220',
        description: 'Updated Test Description',
      };
      return supertest(app.getHttpServer())
        .post('/todos')
        .send(newTodo)
        .expect(201)
        .then(() => {
          return supertest(app.getHttpServer())
            .get(`/todos/${newTodo.id}`)
            .expect(200)
            .expect((response) => {
              expect({
                id: response.body.id,
                description: response.body.description,
              }).toEqual(newTodo);
            });
        });
    });

    it('should return 404 if todo not found', () => {
      return supertest(app.getHttpServer()).get('/todos/999').expect(404);
    });
  });

  describe('PUT /todos', () => {
    it('should update a todo', () => {
      const newTodo: TodoDto = {
        id: '1212',
        description: 'Updated Test Description',
        editedData: '2023-04-22T15:18:59.742Z',
      };
      return supertest(app.getHttpServer())
        .post('/todos')
        .send(newTodo)
        .expect(201)
        .then(() => {
          newTodo.description = 'Updated Test Description';
          return supertest(app.getHttpServer())
            .put('/todos')
            .send(newTodo)
            .expect(200);
        });
    });
  });
});
