import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';


@Injectable()
export class TaskListsService {

  constructor(private prisma: PrismaService) {}
  
  async findAll() {

    const taskLists = await this.prisma.task_lists.findMany({ select: { list_id: true, name: true } });
    const listsContent = await this.prisma.tasks.groupBy({ by: ['list_id'], _count: { list_id: true } });

    taskLists.forEach(itemA => {
      listsContent.forEach(itemB => { if (itemA.list_id === itemB.list_id) itemA['count'] = itemB._count.list_id })
      if (!itemA['count']) itemA['count'] = 0
    })

    return taskLists;
  }

  async create(newTaskList) {
    await this.prisma.task_lists.create({ data: { name: newTaskList.name } })
  }

  async update(id: number, updTaskList) {
    const result = await this.prisma.task_lists.update({
      where: { list_id: +id }, data: { name: updTaskList.name }
    });
  }

  async remove(id: number) {
    const result = await this.prisma.task_lists.delete({ where: { list_id: +id } });
    return result;
  }

}
