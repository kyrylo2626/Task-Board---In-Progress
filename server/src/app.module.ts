import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TaskListsModule } from './task-lists/task-lists.module';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [TasksModule, TaskListsModule, HistoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
