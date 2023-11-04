import { Transform } from "class-transformer"
import { IsString, MinLength } from "class-validator"
export class CreateSpecialtieDto {

    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(3)
    name:string
}