import { PrismaService } from 'src/database/prisma.service';
export declare class TaskListsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        list_id: number;
        name: string;
    }[]>;
    create(newTaskList: any): Promise<void>;
    update(id: number, updTaskList: any): Promise<void>;
    remove(id: number): Promise<{
        list_id: number;
        name: string;
        time_create: Date;
    }>;
}
