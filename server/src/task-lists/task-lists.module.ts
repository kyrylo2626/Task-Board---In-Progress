import { Module } from '@nestjs/common';
import { TaskListsService } from './task-lists.service';
import { TaskListsController } from './task-lists.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [TaskListsController],
  providers: [PrismaService, TaskListsService],
})
export class TaskListsModule {}
