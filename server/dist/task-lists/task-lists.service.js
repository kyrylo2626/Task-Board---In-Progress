"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskListsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let TaskListsService = class TaskListsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        const taskLists = await this.prisma.task_lists.findMany({ select: { list_id: true, name: true } });
        const listsContent = await this.prisma.tasks.groupBy({ by: ['list_id'], _count: { list_id: true } });
        taskLists.forEach(itemA => {
            listsContent.forEach(itemB => { if (itemA.list_id === itemB.list_id)
                itemA['count'] = itemB._count.list_id; });
            if (!itemA['count'])
                itemA['count'] = 0;
        });
        return taskLists;
    }
    async create(newTaskList) {
        await this.prisma.task_lists.create({ data: { name: newTaskList.name } });
    }
    async update(id, updTaskList) {
        const result = await this.prisma.task_lists.update({
            where: { list_id: +id }, data: { name: updTaskList.name }
        });
    }
    async remove(id) {
        const result = await this.prisma.task_lists.delete({ where: { list_id: +id } });
        return result;
    }
};
exports.TaskListsService = TaskListsService;
exports.TaskListsService = TaskListsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TaskListsService);
//# sourceMappingURL=task-lists.service.js.map