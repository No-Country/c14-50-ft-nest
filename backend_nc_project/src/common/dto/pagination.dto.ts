import { Type } from "class-transformer"
import { IsNumber, IsOptional, IsPositive, Max, Min } from "class-validator";

export class PaginationDto {

    @IsOptional()
    @IsPositive()
    @Max(20)
    @Type(() => Number)
    limit?: number

    @IsOptional()
    @IsNumber()
    @Min(0)
    @Type(() => Number)
    offset?: number

}