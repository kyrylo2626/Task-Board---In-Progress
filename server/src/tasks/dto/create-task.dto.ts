import { IsString, IsNumber, IsDateString } from "class-validator";

export class CreateTaskDto {

    @IsNumber()
    list_id: Number

    @IsString()
    name: string

    @IsNumber()
    priority_id: Number

    @IsString()
    description: string

    @IsDateString()
    due_date: string
    
}