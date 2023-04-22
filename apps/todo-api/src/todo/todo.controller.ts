import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { TodoDto } from './todo.dto';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAll(): TodoDto[] {
    return this.todoService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): TodoDto | undefined {
    const todo: TodoDto = this.todoService.getById(id);
    if (!todo) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return this.todoService.getById(id);
  }

  @Post()
  create(@Body() todo: TodoDto): TodoDto {
    return this.todoService.create(todo);
  }

  @Put()
  update(@Body() todo: TodoDto): TodoDto | undefined {
    return this.todoService.update(todo);
  }

  @Delete(':id')
  delete(@Param('id') id: string): boolean {
    return this.todoService.delete(id);
  }
}
