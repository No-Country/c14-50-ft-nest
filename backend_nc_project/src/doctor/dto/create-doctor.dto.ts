import {  IsOptional, IsString, MaxLength, MinLength } from "class-validator";

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
    @IsString()
    schedule?: string[];
}
