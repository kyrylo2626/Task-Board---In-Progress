import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/database/prisma.service';
export declare class TasksService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<{
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
    update(id: number, updateTaskDto: UpdateTaskDto): Promise<{
        task_id: number;
        list_id: number;
        name: string;
        priority_id: number;
        description: string;
        due_date: Date;
        time_create: Date;
        time_update: Date;
    }>;
    remove(id: number): Promise<{
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
