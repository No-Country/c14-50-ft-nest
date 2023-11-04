import { IsNotEmpty, IsString, MinLength } from "class-validator"
export class UpdateSpecialtieDto {

    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    name:string
}