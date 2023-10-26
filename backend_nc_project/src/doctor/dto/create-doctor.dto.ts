import {  IsArray, IsInt, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { Gender } from "src/common/enum";

export class CreateDoctorDto {

    @IsString()
    @MinLength(3)
    @MaxLength(25)
    firstName: string;

    @IsString()
    @MinLength(3)
    @MaxLength(25)
    lastName: string;

    @IsString()
    birthDate: string;

    @IsString()
    phone: string;

    @IsOptional()
    @IsArray()
    schedule?: string[];

    @IsArray()
    specialties: string[];
    
    @IsInt()
    registrationNumber:number

    @IsString()
    gender:Gender
}
