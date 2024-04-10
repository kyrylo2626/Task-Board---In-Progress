import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<{
        task_id: number;
        list_id: number;
        name: string;
        priority_id: number;
        description: string;
        due_date: Date;
        time_create: Date;
        time_update: Date;
    }>;
    create(createTaskDto: CreateTaskDto): Promise<{
        task_id: number;
        list_id: number;
        name: string;
        priority_id: number;
        description: string;
        due_date: Date;
        time_create: Date;
        time_update: Date;
    }>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<{
        task_id: number;
        list_id: number;
        name: string;
        priority_id: number;
        description: string;
        due_date: Date;
        time_create: Date;
        time_update: Date;
    }>;
    remove(id: string): Promise<{
        task_id: number;
        list_id: number;
        name: string;
        priority_id: number;
        description: string;
        due_date: Date;
        time_create: Date;
        time_update: Date;
    }>;
}
