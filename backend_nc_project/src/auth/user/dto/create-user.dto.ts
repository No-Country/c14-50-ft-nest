import { Transform } from "class-transformer";

import { IsNumber, IsString, MinLength, IsEmail, IsEnum, MaxLength} from "class-validator";

import { ERole, } from "../../../common/enum";

export class CreateUserDto {


    @IsString()
    @MinLength(3)
    @MaxLength(25)
    firstName: string;

    @IsString()
    @MinLength(3)
    @MaxLength(25)
    lastName: string;


    @IsEmail()
    email:string;

    @Transform(({value}) => Number(value))
    @IsNumber()
    @MinLength(5)
    document: number;

    @IsString()
    @MinLength(6)
    password: string;

    @IsString()
    birthDate: string;   

    @IsString()
    phone?: string;

    @IsEnum(ERole)
    role: ERole;
    
}