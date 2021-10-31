import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from './schema/todo.schema';
import { TodoItem } from './dto/todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name) private readonly model: Model<TodoDocument>,
  ) {}

  async findAll(): Promise<Todo[]> {
    return await this.model.find().exec();
  }
  async findOne(id: string): Promise<Todo> {
    return await this.model.findById(id).exec();
  }
  async create(todo: TodoItem): Promise<Todo> {
    return await new this.model(todo).save();
  }
  async update(id: string, todo: TodoItem): Promise<Todo> {
    return await this.model.findByIdAndUpdate(id, todo).exec();
  }
  async delete(id: string): Promise<Todo> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
