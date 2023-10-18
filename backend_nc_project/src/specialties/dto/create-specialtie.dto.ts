import { IsString, MinLength } from "class-validator"
export class CreateSpecialtieDto {

    @IsString()
    @MinLength(3)
    name:string
}