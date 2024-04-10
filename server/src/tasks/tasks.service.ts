import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/database/prisma.service';
import { HistoryService } from 'src/history/history.service';

@Injectable()
export class TasksService {

  constructor(private prisma: PrismaService, private history: HistoryService) {}

  async findAll() {

    const taskLists = await this.prisma.task_lists.findMany({ select: { list_id: true } });
    const tasks = await this.prisma.tasks.findMany({ include: { priority: true, task_lists: true } });

    tasks.forEach(task => { let date = task.due_date.toDateString().split(' ');
                            task['date'] = `${date[0]}, ${date[2]} ${date[1]}` })

    let result = [];

    taskLists.map(taskList => { let taskListObj = {};
                                taskListObj['list_id'] = taskList.list_id;
                                taskListObj['tasks'] = [];
                                tasks.map(task => { if (task.list_id === taskList.list_id) taskListObj['tasks'].push(task) })
                                result.push(taskListObj) })

    return result;
  
  }

  async findOne(id: number) {

    const result = await this.prisma.tasks.findUnique({where: {task_id: +id}});
    return result;

  }

  async create(createTaskDto: CreateTaskDto) {

    const result = await this.prisma.tasks.create({
      data: { ...createTaskDto,
              list_id: +createTaskDto.list_id,
              priority_id: +createTaskDto.priority_id } } );

    const historyData = { action: 'create task',
                   list_id: +createTaskDto.list_id,
                   items: [createTaskDto.name] }
    this.createHistoryRecord(historyData);

    return result;
  
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {

    let newData;

    if (updateTaskDto.hasOwnProperty('name')) {
      newData = { name: updateTaskDto.name };
      
    }
    else if (updateTaskDto.hasOwnProperty('description')) {}
    else if (updateTaskDto.hasOwnProperty('priority_id')) {}
    else if (updateTaskDto.hasOwnProperty('due_date')) {}
    else if (updateTaskDto.hasOwnProperty('list_id')) {}
    
    

    if (updateTaskDto.hasOwnProperty('list_id' && 'priority_id')) {
      newData = { ...updateTaskDto,
                  list_id: +updateTaskDto.list_id,
                  priority_id: +updateTaskDto.priority_id };
    } else if (updateTaskDto.hasOwnProperty('list_id')) {
      newData = { ...updateTaskDto, list_id: +updateTaskDto.list_id }
    } else if (updateTaskDto.hasOwnProperty('priority_id')) {
      newData = { ...updateTaskDto, priority_id: +updateTaskDto.priority_id }
    } else { newData = { ...updateTaskDto } }

    const result = await this.prisma.tasks.update({ where: {task_id: +id}, data: newData });

    return result;
  
  }

  async updateName() {}

  async updateText() {}

  async updatePriority() {}

  async updateDate() {}

  async updateList() {}

  async remove(id: number) { 

    const result = await this.prisma.tasks.delete({where: {task_id: +id}});
    return result;

  }

  async createHistoryRecord(objects) {

    const listName = await this.prisma.task_lists.findUnique({
      where: { list_id: objects.list_id },
      select: { name: true } });
    const data = { action: objects.action, obj: [ ...objects.items, listName.name ] };
    const historyRecord = await this.history.create(data);
  
  }

}
