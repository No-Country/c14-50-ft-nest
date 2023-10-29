import { IsBoolean, IsOptional, IsString } from "class-validator"

export class CreateScheduleDto {
    
    @IsString()
    @IsOptional()
    dia:string

    @IsString()
    startTime:string

    @IsString()
    endTime:string

    @IsString()
    interval:string

    @IsBoolean()
    occupied:boolean
}
