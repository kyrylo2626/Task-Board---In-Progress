import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskListsService } from './task-lists.service';

@Controller('lists')
export class TaskListsController {
  constructor(private readonly taskListsService: TaskListsService) {}

  @Get()
  findAll() { return this.taskListsService.findAll() }

  @Post()
  create(@Body() newTaskList: string) { return this.taskListsService.create(newTaskList) }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updTaskList: string) {
    return this.taskListsService.update(+id, updTaskList);
  }

  @Delete(':id')
  remove(@Param('id') id: string) { return this.taskListsService.remove(+id) }
}
