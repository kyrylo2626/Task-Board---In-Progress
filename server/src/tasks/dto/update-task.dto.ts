import { IsString, IsNumber, IsDateString, IsOptional } from "class-validator";

export class UpdateTaskDto {

    @IsOptional()
    @IsNumber()
    list_id: Number

    @IsOptional()
    @IsString()
    name: string

    @IsOptional()
    @IsNumber()
    priority_id: Number

    @IsOptional()
    @IsString()
    description: string

    @IsOptional()
    @IsDateString()
    due_date: string
    
}