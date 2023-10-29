import { IsOptional, IsPhoneNumber, IsString, MinLength } from "class-validator"


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
