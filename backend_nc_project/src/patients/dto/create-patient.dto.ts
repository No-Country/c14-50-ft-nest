import { IsEmail, IsEnum, IsInt, IsOptional, IsPhoneNumber, IsPositive, IsString, MinLength } from "class-validator"
import { ERole } from "src/common/enum"

export class CreatePatientDto {

    @IsString()
    @MinLength(3)
    firstName:string

    @IsString()
    @MinLength(3)
    lastName:string

    @IsInt()
    @IsPositive()
    @MinLength(5)
    document:number

    @IsString()
    @MinLength(6)
    password:string

    @IsEmail()
    @MinLength(3)
    email:string

    @IsString()
    @MinLength(3)
    birthDate:string

    @IsEnum(ERole)
    role: ERole;

    @IsPhoneNumber()
    @IsOptional()
    phone?:string

    @IsString()
    @IsOptional()
    healthInsurance?:string
}
