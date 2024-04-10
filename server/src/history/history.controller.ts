import { Controller, Get, Param } from '@nestjs/common';
import { HistoryService } from './history.service';

@Controller('history')
export class HistoryController {

    constructor(private readonly historyService: HistoryService) {}

    @Get()
    findAll() { return this.historyService.findAll() }

    @Get(':id')
    findUnique(@Param('id') id: string) { return this.historyService.findUnique(+id) }

}
