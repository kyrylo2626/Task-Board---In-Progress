import { TaskListsService } from './task-lists.service';
export declare class TaskListsController {
    private readonly taskListsService;
    constructor(taskListsService: TaskListsService);
    findAll(): Promise<{
        list_id: number;
        name: string;
    }[]>;
    create(newTaskList: string): Promise<void>;
    update(id: string, updTaskList: string): Promise<void>;
    remove(id: string): Promise<{
        list_id: number;
        name: string;
        time_create: Date;
    }>;
}
