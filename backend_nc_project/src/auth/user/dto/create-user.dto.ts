import { Transform } from "class-transformer";
import { IsNumber, IsString, MinLength, IsEmail, IsEnum} from "class-validator";
import { ERole, } from "../../../common/enum";

export class CreateUserDto {

    @IsEmail()
    email:string;

    @Transform(({value}) => Number(value))
    @IsNumber()
    @MinLength(5)
    document: number;

    @IsString()
    @MinLength(6)
    password: string;

    @IsEnum(ERole)
    role: ERole;
    
}