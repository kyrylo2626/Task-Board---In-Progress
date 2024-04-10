import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class HistoryService {

    constructor(private prisma: PrismaService) {}


    /*

    const action = {
        action: 'create',
        objects: [1, 2, 3]
    }

    action   |   object             |   union 1   |   object 1   |   union 2   |   object 2       |   union 3   |   onject 3
   -----------------------------------------------------------------------------------------------------------------------------
             |                      |             |              |             |                  |             |
    create   |   a task list        |             |   1 (list)   |             |                  |             |
    delete   |   a task list        |             |   1 (list)   |             |                  |             |
    rename   |   a task list        |             |   1 (list)   |   to        |   2 (list)       |             |
             |                      |             |              |             |                  |             |
    create   |   a task             |             |   1 (task)   |   in        |   2 (list)       |             |
    delete   |   a task             |             |   1 (task)   |   from      |   2 (list)       |             |
    rename   |   a task             |             |   1 (task)   |   to        |   2 (task)       |   in        |   3 (list)
             |                      |             |              |             |                  |             |
    change   |   the description    |   of        |   1 (task)   |             |                  |             |      
    change   |   the priority       |   of        |   1 (task)   |   to        |   2 (priority)   |   in        |   3 (list)   
    change   |   the due date       |   of        |   1 (task)   |   to        |   2 (date)       |   in        |   3 (list)   
    move     |                      |             |   1 (task)   |   from      |   2 (list)       |   to        |   3 (list)

    */

    recordConverter(data) {

        let result = '';

        switch (data.action) {
            case "create list": result = `You create a task list ${data.obj[0]}`; break;
            case "delete list": result = `You delete a task list ${data.obj[0]}`; break;
            case "rename list": result = `You rename a task list ${data.obj[0]} to ${data.obj[1]}`; break;
            case "create task": result = `You create a task ${data.obj[0]} in ${data.obj[1]}`; break;
            case "delete task": result = `You delete a task ${data.obj[0]} in ${data.obj[1]}`; break;
            case "rename task": result = `You rename a task ${data.obj[0]} to ${data.obj[1]} in ${data.obj[2]}`; break;
            case "change description": result = `You change the description of ${data.obj[0]} in ${data.obj[1]}`; break;
            case "change priority": result = `You change the priority of ${data.obj[0]} to ${data.obj[1]} in ${data.obj[2]}`; break;
            case "change date": result = `You change the due date of ${data.obj[0]} to ${data.obj[1]} in ${data.obj[2]}`; break;
            case "move task": result = `You move ${data.obj[0]} from ${data.obj[1]} to ${data.obj[2]}`; break;
            default: result = `You do an action with ${data.obj}`; break;
        }

        return result;

    }

    async create(data) {
        const record = this.recordConverter(data);
        const result = await this.prisma.history.create({ data: { action: record } });
        return result;
    }

    async findAll() {
        const result = await this.prisma.history.findMany();
        return result;
    }

    async findUnique(id: number) {
        const result = await this.prisma.history.findMany({ where: { task_id: id } });
        return result;
    }

}
