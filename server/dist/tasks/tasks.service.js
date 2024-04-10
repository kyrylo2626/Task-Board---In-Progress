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
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let TasksService = class TasksService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        const taskLists = await this.prisma.task_lists.findMany({ select: { list_id: true } });
        const tasks = await this.prisma.tasks.findMany({ include: { priority: true, task_lists: true } });
        tasks.forEach(task => {
            let date = task.due_date.toDateString().split(' ');
            task['date'] = `${date[0]}, ${date[2]} ${date[1]}`;
        });
        let result = [];
        taskLists.map(taskList => {
            let taskListObj = {};
            taskListObj['list_id'] = taskList.list_id;
            taskListObj['tasks'] = [];
            tasks.map(task => { if (task.list_id === taskList.list_id)
                taskListObj['tasks'].push(task); });
            result.push(taskListObj);
        });
        return result;
    }
    async findOne(id) {
        const result = await this.prisma.tasks.findUnique({ where: { task_id: +id } });
        return result;
    }
    async create(createTaskDto) {
        const result = await this.prisma.tasks.create({
            data: {
                ...createTaskDto,
                list_id: +createTaskDto.list_id,
                priority_id: +createTaskDto.priority_id
            }
        });
        return result;
    }
    async update(id, updateTaskDto) {
        let newData;
        if (updateTaskDto.hasOwnProperty('list_id' && 'priority_id')) {
            newData = { ...updateTaskDto,
                list_id: +updateTaskDto.list_id,
                priority_id: +updateTaskDto.priority_id };
        }
        else if (updateTaskDto.hasOwnProperty('list_id')) {
            newData = { ...updateTaskDto, list_id: +updateTaskDto.list_id };
        }
        else if (updateTaskDto.hasOwnProperty('priority_id')) {
            newData = { ...updateTaskDto, priority_id: +updateTaskDto.priority_id };
        }
        else {
            newData = { ...updateTaskDto };
        }
        const result = await this.prisma.tasks.update({
            where: { task_id: +id }, data: newData
        });
        return result;
    }
    async remove(id) {
        const result = await this.prisma.tasks.delete({ where: { task_id: +id } });
        return result;
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TasksService);
//# sourceMappingURL=tasks.service.js.map