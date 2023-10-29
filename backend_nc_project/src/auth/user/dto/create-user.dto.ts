import { Transform } from "class-transformer";

import { IsNumber, IsString, MinLength, IsEmail, IsEnum, MaxLength, IsOptional, IsArray, IsInt} from "class-validator";

import { ERole, Gender, } from "../../../common/enum";
import { Specialtie } from "src/specialties/entities/specialtie.entity";

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

    @IsString()
    healthInsurance?: string;

    @IsOptional()
    @IsArray()
    schedule?: string[]; 

    @IsOptional()
    @IsArray()
    specialties?: string[];

    @IsString()
    gender?: Gender; 

    @IsOptional()
    @IsInt()
    registrationNumber?: number; 
}