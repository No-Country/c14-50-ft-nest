import { PartialType } from '@nestjs/mapped-types';
import { CreatePatientDto } from './create-patient.dto';
import { IsDate, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdatePatientDto extends PartialType(CreatePatientDto) {
    
    
    @IsString()
    @MinLength(3)
    @IsOptional()
    firstName?:string

    @IsString()
    @MinLength(3)
    @IsOptional()
    lastName?:string

    @IsString()
    @MinLength(3)
    @IsOptional()
    password?:string

    
    @IsString()
    @MinLength(3)
    @IsOptional()
    email?:string

    @IsDate()
    @MinLength(3)
    @IsOptional()
    birthDate?:string

    @IsString()
    @MinLength(3)
    @IsOptional()
    phone?:string

    @IsString()
    @MinLength(3)
    @IsOptional()
    healthInsurance?:string
}
