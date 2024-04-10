import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { HistoryService } from './history.service';
import { HistoryController } from './history.controller';

@Module({
  providers: [PrismaService, HistoryService],
  controllers: [HistoryController]
})
export class HistoryModule {}
