import { IsEmail, IsEnum, IsInt, IsOptional, IsPhoneNumber, IsPositive, IsString, MinLength } from "class-validator"
import { ERole } from "src/common/enum"

export class CreatePatientDto {

    @IsString()
    @MinLength(3)
    firstName:string

    @IsString()
    @MinLength(3)
    lastName:string

    @IsString()
    @MinLength(3)
    birthDate:string

    @IsPhoneNumber()
    @IsOptional()
    phone?:string

    @IsString()
    @IsOptional()
    healthInsurance?:string
}
