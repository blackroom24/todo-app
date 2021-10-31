import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Todo } from './schema/todo.schema';
import { TodoItem } from './dto/todo.dto';
import { TodoService } from './todo.service';
@Controller('todos')
export class TodoController {
  constructor(private readonly service: TodoService) {}
  @Get()
  async index(): Promise<Todo[]> {
    return await this.service.findAll();
  }
  @Get(':id')
  async find(@Param('id') id: string): Promise<Todo> {
    return await this.service.findOne(id);
  }
  @Post()
  async create(@Body() todo: TodoItem): Promise<Todo> {
    console.log(todo);
    return await this.service.create(todo);
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatedTodo: TodoItem,
  ): Promise<Todo> {
    return await this.service.update(id, updatedTodo);
  }
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Todo> {
    return await this.service.delete(id);
  }
}
